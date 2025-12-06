/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2024 Vendicated, FieryFlames and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { plugin, t } from "@api/i18n";
import { showNotice } from "@api/Notices";
import { Settings } from "@api/Settings";
import { canonicalizeMatch } from "@utils/patches";
import { CodeFilter, stringMatches, wreq } from "@webpack";
import { Toasts } from "@webpack/common";
import { WebpackPatcher } from "Plexcord";

import { logger, settings as companionSettings } from ".";
import { FindNode } from "./types/recieve";

function getName(name: string | (() => string)): string {
    return typeof name === "function" ? name() : name;
}

const { getFactoryPatchedBy, getFactoryPatchedSource } = WebpackPatcher;

/**
 * extracts the patched module, if there is no patched module, throws an error
 * @param id module id
 */
export function extractOrThrow(id: PropertyKey): string {
    const patchedSource = getFactoryPatchedSource(id);
    if (!patchedSource)
        throw new Error(`No patched module found for module id ${String(id)}`);
    return patchedSource;
}
/**
 *  attempts to extract the module, throws if not found
 *
 *
 * if patched is true and no patched module is found fallsback to the non-patched module
 * @param id module id
 * @param patched return the patched module
 */
export function extractModule(id: PropertyKey, patched = companionSettings.store.usePatchedModule): string {
    if (patched) {
        try {
            return extractOrThrow(id);
        } catch (e) {
            logger.debug(e);
        }
    }
    return extractUnpatchedModule(id);
}
function extractUnpatchedModule(id: PropertyKey): string {
    if (!wreq.m[id]) {
        throw new Error(`Module not found for id: ${String(id)}`);
    }
    return `// Webpack Module ${String(id)} - Patched by\n0,${wreq.m[id]}\n//# sourceURL=WebpackModule${String(id)}`;
}

/**
 *
 * @param usePatched if false, always returns `[]`, otherwise uses the same setting as {@link extractModule}
 */
export function getModulePatchedBy(id: PropertyKey, usePatched = companionSettings.store.usePatchedModule): string[] {
    return [...usePatched && getFactoryPatchedBy(id) || []];
}
export function parseNode(node: FindNode): any {
    switch (node.type) {
        case "string":
            return node.value;
        case "regex":
            return new RegExp(node.value.pattern, node.value.flags);
        case "function":
            // We LOVE remote code execution
            // Safety: This comes from localhost only, which actually means we have less permissions than the source,
            // since we're running in the browser sandbox, whereas the sender has host access
            return (0, eval)(node.value);
        default:
            throw new Error("Unknown Node Type " + (node as any).type);
    }
}
// we need to have our own because the one in webpack returns the first with no handling of more than one module
export function findModuleId(find: CodeFilter) {
    const matches: string[] = [];
    for (const id in wreq.m) {
        if (stringMatches(wreq.m[id].toString(), find)) matches.push(id);
    }
    if (matches.length === 0) {
        throw new Error("No Matches Found");
    }
    if (matches.length !== 1) {
        throw new Error(`This filter matches ${matches.length} modules. Make it more specific!`);
    }
    return matches[0];
}
export function mkRegexFind(idOrSearch: string): RegExp[] {
    // Check if it's a regex pattern (starts and ends with /)
    if (idOrSearch.startsWith("/") && idOrSearch.lastIndexOf("/") > 0) {
        const regex = idOrSearch.substring(1, idOrSearch.lastIndexOf("/"));
        const flags = idOrSearch.substring(idOrSearch.lastIndexOf("/") + 1);
        return [canonicalizeMatch(new RegExp(regex, flags))];
    }

    // Check if it's an intl message pattern (contains #{intl::...})
    if (idOrSearch.includes("#{intl::")) {
        // Let canonicalizeMatch handle the intl processing, then convert to regex
        const canonicalized = canonicalizeMatch(idOrSearch);
        // If canonicalizeMatch returned a string, convert it to regex
        if (typeof canonicalized === "string") {
            return [new RegExp(canonicalized.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"))];
        }
        return [canonicalized as RegExp];
    }

    // If not a regex pattern or intl message, create a regex from the literal string
    return [canonicalizeMatch(new RegExp(idOrSearch.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")))];
}
// the next two functions are copied from components/pluginSettings
function showErrorToast(message: string) {
    Toasts.show({
        message,
        type: Toasts.Type.FAILURE,
        id: Toasts.genId(),
        options: {
            position: Toasts.Position.BOTTOM
        }
    });
}

export function toggleEnabled(name: string, beforeReload: (error?: string) => void) {
    let restartNeeded = false;
    function onRestartNeeded() {
        restartNeeded = true;
    }
    function beforeReturn() {
        if (restartNeeded) {
            if (companionSettings.store.reloadAfterToggle) {
                beforeReload();
                window.location.reload();
            }
            Toasts.show({
                id: Toasts.genId(),
                message: t(plugin.devCompanion.toast.reload),
                type: Toasts.Type.MESSAGE,
                options: {
                    duration: 5000,
                    position: Toasts.Position.TOP
                }
            });
        }
    }
    const targetPlugin = Plexcord.Plugins.plugins[name];

    const settings = Settings.plugins[getName(targetPlugin.name)];

    const isEnabled = () => settings.enabled ?? false;

    const wasEnabled = isEnabled();

    // If we're enabling a plugin, make sure all deps are enabled recursively.
    if (!wasEnabled) {
        const { restartNeeded, failures } = Plexcord.Plugins.startDependenciesRecursive(targetPlugin);
        if (failures.length) {
            console.error(`Failed to start dependencies for ${targetPlugin.name}: ${failures.join(", ")}`);
            showNotice(t(plugin.devCompanion.toast.failed) + " " + failures.join(", "), t(plugin.devCompanion.toast.close), () => null);
            beforeReturn();
            return;
        } else if (restartNeeded) {
            // If any dependencies have patches, don't start the plugin yet.
            settings.enabled = true;
            onRestartNeeded();
            beforeReturn();
            return;
        }
    }

    // if the plugin has patches, dont use stopPlugin/startPlugin. Wait for restart to apply changes.
    if (targetPlugin.patches?.length) {
        settings.enabled = !wasEnabled;
        onRestartNeeded();
        beforeReturn();
        return;
    }

    // If the plugin is enabled, but hasn't been started, then we can just toggle it off.
    if (wasEnabled && !targetPlugin.started) {
        settings.enabled = !wasEnabled;
        beforeReturn();
        return;
    }

    const result = wasEnabled ? Plexcord.Plugins.stopPlugin(targetPlugin) : Plexcord.Plugins.startPlugin(targetPlugin);

    if (!result) {
        settings.enabled = false;

        const msg = wasEnabled ? t(plugin.devCompanion.toast.stopping, { plugin: targetPlugin.name }) : t(plugin.devCompanion.toast.starting, { plugin: targetPlugin.name });
        console.error(msg);
        showErrorToast(msg);
        beforeReturn();
        return;
    }

    settings.enabled = !wasEnabled;
    beforeReturn();
}
