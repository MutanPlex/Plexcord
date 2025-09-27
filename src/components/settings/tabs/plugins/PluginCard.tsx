/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2025 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { t, tJsx } from "@api/i18n";
import { showNotice } from "@api/Notices";
import { CogWheel, InfoIcon } from "@components/Icons";
import { AddonCard } from "@components/settings/AddonCard";
import { proxyLazy } from "@utils/lazy";
import { classes, isObjectEmpty } from "@utils/misc";
import { Plugin } from "@utils/types";
import { findByPropsLazy } from "@webpack";
import { React, showToast, Toasts } from "@webpack/common";
import { Settings } from "Plexcord";

import { cl, logger } from ".";
import { openPluginModal } from "./PluginModal";

// Avoid circular dependency
const { startDependenciesRecursive, startPlugin, stopPlugin, isPluginEnabled } = proxyLazy(() => require("plugins") as typeof import("plugins"));

export const ButtonClasses = findByPropsLazy("button", "disabled", "enabled");

interface PluginCardProps {
    plugin: Plugin;
    disabled?: boolean;
    onRestartNeeded(name: string, key: string): void;
    isNew?: boolean;
    onMouseEnter?: React.MouseEventHandler<HTMLDivElement>;
    onMouseLeave?: React.MouseEventHandler<HTMLDivElement>;
}

export function PluginCard({ plugin, disabled, onRestartNeeded, onMouseEnter, onMouseLeave, isNew }: PluginCardProps) {
    const settings = Settings.plugins[plugin.name];

    const isEnabled = () => isPluginEnabled(plugin.name);

    // Use translated metadata if available, fallback to original
    const displayName = (plugin as any).displayName || plugin.name;
    const displayDescription = (plugin as any).displayDescription || plugin.description;

    function toggleEnabled() {
        const wasEnabled = isEnabled();

        // If we're enabling a plugin, make sure all deps are enabled recursively.
        if (!wasEnabled) {
            const { restartNeeded, failures } = startDependenciesRecursive(plugin);

            if (failures.length) {
                logger.error(`Failed to start dependencies for ${plugin.name}: ${failures.join(", ")}`);
                showNotice(tJsx("plugins.error.startDependency", { failures: failures.join(", ") }), "Close", () => null);
                return;
            }

            if (restartNeeded) {
                // If any dependencies have patches, don't start the plugin yet.
                settings.enabled = true;
                onRestartNeeded(plugin.name, "enabled");
                return;
            }
        }

        // if the plugin has patches, dont use stopPlugin/startPlugin. Wait for restart to apply changes.
        if (plugin.patches?.length) {
            settings.enabled = !wasEnabled;
            onRestartNeeded(plugin.name, "enabled");
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

            const msg = wasEnabled ? t("plugins.error.stopping", { plugin: plugin.name }) : t("plugins.error.starting", { plugin: plugin.name });
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
                    className={classes(ButtonClasses.button, cl("info-button"))}
                >
                    {plugin.options && !isObjectEmpty(plugin.options)
                        ? <CogWheel className={cl("info-icon")} />
                        : <InfoIcon className={cl("info-icon")} />
                    }
                </button>
            } />
    );
}
