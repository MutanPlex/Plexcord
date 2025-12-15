/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2025 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { plugins, t } from "@api/i18n";
import { showNotice } from "@api/Notices";
import { isPluginEnabled, pluginRequiresRestart, startDependenciesRecursive, startPlugin, stopPlugin } from "@api/PluginManager";
import { CogWheel, InfoIcon } from "@components/Icons";
import { AddonCard } from "@components/settings/AddonCard";
import { isObjectEmpty } from "@utils/misc";
import { Plugin } from "@utils/types";
import { React, showToast, Toasts } from "@webpack/common";
import { Settings } from "Plexcord";

import { cl, logger } from ".";
import { openPluginModal } from "./PluginModal";

function getName(name: string | (() => string)): string {
    return typeof name === "function" ? name() : name;
}

interface PluginCardProps {
    plugin: Plugin;
    disabled?: boolean;
    onRestartNeeded(name: string, key: string): void;
    isNew?: boolean;
    onMouseEnter?: React.MouseEventHandler<HTMLDivElement>;
    onMouseLeave?: React.MouseEventHandler<HTMLDivElement>;
}

export function PluginCard({ plugin, disabled, onRestartNeeded, onMouseEnter, onMouseLeave, isNew }: PluginCardProps) {
    const pluginName = getName(plugin.name);
    const settings = Settings.plugins[pluginName];

    const isEnabled = () => isPluginEnabled(pluginName);

    // Use translated metadata if available, fallback to original
    const displayName = (plugin as any).displayName || pluginName;
    const rawDisplayDescription = (plugin as any).displayDescription;
    const displayDescription = rawDisplayDescription
        ? (typeof rawDisplayDescription === "function" ? rawDisplayDescription() : rawDisplayDescription)
        : (typeof plugin.description === "function" ? plugin.description() : plugin.description);

    function toggleEnabled() {
        const wasEnabled = isEnabled();

        // If we're enabling a plugin, make sure all deps are enabled recursively.
        if (!wasEnabled) {
            const { restartNeeded, failures } = startDependenciesRecursive(plugin);

            if (failures.length) {
                logger.error(`Failed to start dependencies for ${pluginName}: ${failures.join(", ")}`);
                showNotice(t(plugins.error.startDependency, { failures: failures.join(", ") }), "Close", () => null);
                return;
            }

            if (restartNeeded) {
                // If any dependencies have patches, don't start the plugin yet.
                settings.enabled = true;
                onRestartNeeded(pluginName, "enabled");
                return;
            }
        }

        // if the plugin requires a restart, don't use stopPlugin/startPlugin. Wait for restart to apply changes.
        if (pluginRequiresRestart(plugin)) {
            settings.enabled = !wasEnabled;
            onRestartNeeded(pluginName, "enabled");
            return;
        }

        // If the plugin is enabled, but hasn't been started, then we can just toggle it off.
        if (wasEnabled && !plugin.started) {
            settings.enabled = !wasEnabled;
            return;
        }

        const result = wasEnabled ? stopPlugin(plugin) : startPlugin(plugin);

        if (!result) {
            settings.enabled = false;

            const msg = wasEnabled ? t(plugins.error.stopping, { plugin: pluginName }) : t(plugins.error.starting, { plugin: pluginName });
            showToast(msg, Toasts.Type.FAILURE, {
                position: Toasts.Position.BOTTOM,
            });

            return;
        }

        settings.enabled = !wasEnabled;
    }

    return (
        <AddonCard
            name={displayName}
            description={displayDescription}
            isNew={isNew}
            enabled={isEnabled()}
            setEnabled={toggleEnabled}
            disabled={disabled}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            infoButton={
                <button
                    role="switch"
                    onClick={() => openPluginModal(plugin, onRestartNeeded)}
                    className={cl("info-button")}
                >
                    {plugin.settings && !isObjectEmpty(plugin.settings)
                        ? <CogWheel className={cl("info-icon")} />
                        : <InfoIcon className={cl("info-icon")} />
                    }
                </button>
            } />
    );
}
