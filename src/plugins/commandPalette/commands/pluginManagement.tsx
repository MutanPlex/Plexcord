/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2026 Vendicated and contributors
 * Copyright (c) 2026 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { plugin as pluginI18n, t } from "@api/i18n";
import { isPluginEnabled, pluginRequiresRestart, plugins, startDependenciesRecursive, startPlugin, stopPlugin } from "@api/PluginManager";
import { Settings } from "@api/Settings";
import { openPluginModal } from "@components/settings/tabs/plugins/PluginModal";
import type { Plugin } from "@utils/types";
import { showToast } from "@webpack/common";

import type { PaletteCommand, PaletteListItem } from "../api/types";
import { GearIcon, PlugIcon } from "../ui/icons";

const nameOf = (plugin: Plugin) => typeof plugin.name === "function" ? plugin.name() : plugin.name;

function togglePlugin(plugin: Plugin) {
    const wasEnabled = isPluginEnabled(nameOf(plugin));
    const pluginSettings = Settings.plugins[nameOf(plugin)];

    if (!wasEnabled) {
        const { restartNeeded, failures } = startDependenciesRecursive(plugin);
        if (failures.length) {
            showToast({ text: t(pluginI18n.commandPalette.toast.failedToStartDependencies, { join: failures.join(", ") }), variant: "critical" });
            return;
        }
        if (restartNeeded) {
            pluginSettings.enabled = true;
            showToast({ text: t(pluginI18n.commandPalette.toast.enabledRestart, { name: nameOf(plugin) }) });
            return;
        }
    }

    if (pluginRequiresRestart(plugin)) {
        pluginSettings.enabled = !wasEnabled;
        showToast({ text: t(wasEnabled ? pluginI18n.commandPalette.toast.disabledRestart : pluginI18n.commandPalette.toast.enabledRestart, { name: nameOf(plugin) }) });
        return;
    }

    if (wasEnabled && !plugin.started) {
        pluginSettings.enabled = false;
        showToast({ text: t(pluginI18n.commandPalette.toast.disabled, { name: nameOf(plugin) }), variant: "success" });
        return;
    }

    const result = wasEnabled ? stopPlugin(plugin) : startPlugin(plugin);
    if (!result) {
        pluginSettings.enabled = false;
        showToast({ text: t(wasEnabled ? pluginI18n.commandPalette.toast.errorStopping : pluginI18n.commandPalette.toast.errorStarting, { name: nameOf(plugin) }), variant: "critical" });
        return;
    }

    pluginSettings.enabled = !wasEnabled;
    showToast({ text: t(wasEnabled ? pluginI18n.commandPalette.toast.disabled : pluginI18n.commandPalette.toast.enabled, { name: nameOf(plugin) }), variant: "success" });
}

function pluginItems(): PaletteListItem[] {
    return Object.values(plugins)
        .filter(plugin => !plugin.required && !plugin.hidden)
        .sort((a, b) => nameOf(a).localeCompare(nameOf(b)))
        .map(plugin => {
            const enabled = isPluginEnabled(nameOf(plugin));
            return {
                id: nameOf(plugin),
                label: nameOf(plugin),
                sublabel: enabled ? t(pluginI18n.commandPalette.text.enabled) : t(pluginI18n.commandPalette.text.disabled),
                icon: PlugIcon,
                actions: [
                    {
                        id: "toggle",
                        label: enabled ? t(pluginI18n.commandPalette.text.disablePlugin) : t(pluginI18n.commandPalette.text.enablePlugin),
                        keepOpen: true,
                        run: () => togglePlugin(plugin)
                    },
                    {
                        id: "settings",
                        label: t(pluginI18n.commandPalette.builtIn.open.settings.plugin),
                        icon: GearIcon,
                        run: () => openPluginModal(plugin)
                    }
                ]
            };
        });
}

export const pluginCommands: PaletteCommand[] = [
    {
        id: "plugins.manage",
        title: t(pluginI18n.commandPalette.text.managePlugins),
        section: t(pluginI18n.commandPalette.text.sectionPlugins),
        keywords: ["plugins", "enable", "disable", "toggle"],
        icon: PlugIcon,
        page: () => ({
            title: t(pluginI18n.commandPalette.text.managePlugins),
            icon: PlugIcon,
            spec: { type: "list", placeholder: t(pluginI18n.commandPalette.text.searchPlugins), items: pluginItems }
        })
    }
];
