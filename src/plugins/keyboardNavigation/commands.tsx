/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2024 Vendicated and contributors
 * Copyright (c) 2026 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { plugin as pluginI18n, t } from "@api/i18n";
import { showNotification } from "@api/Notifications";
import { Settings } from "@api/Settings";
import { gitHashShort } from "@shared/plexcordUserAgent";
import { copyToClipboard } from "@utils/clipboard";
import { relaunch, showItemInFolder } from "@utils/native";
import { checkForUpdates, getRepo } from "@utils/updater";
import { GuildStore, NavigationRouter, SettingsRouter, showToast } from "@webpack/common";

import gitRemote from "~git-remote";
import Plugins from "~plugins";

import { openMultipleChoice } from "./components/MultipleChoice";
import { openSimpleTextInput } from "./components/TextInput";

export interface ButtonAction {
    id: string;
    label: string;
    callback?: () => void;
    registrar?: string;
}

export const actions: ButtonAction[] = [
    { id: "openPlexcordSettings", label: t(pluginI18n.keyboardNavigation.text.openPlexcordTab), callback: async () => await SettingsRouter.openUserSettings("plexcord_main_panel"), registrar: "Plexcord" },
    { id: "openPluginSettings", label: t(pluginI18n.keyboardNavigation.text.openPluginTab), callback: () => SettingsRouter.openUserSettings("plexcord_plugins_panel"), registrar: "Plexcord" },
    { id: "openThemesSettings", label: t(pluginI18n.keyboardNavigation.text.openThemesTab), callback: () => SettingsRouter.openUserSettings("plexcord_themes_panel"), registrar: "Plexcord" },
    { id: "openUpdaterSettings", label: t(pluginI18n.keyboardNavigation.text.openUpdaterTab), callback: () => SettingsRouter.openUserSettings("plexcord_updater_panel"), registrar: "Plexcord" },
    { id: "openPlexcordCloudSettings", label: t(pluginI18n.keyboardNavigation.text.openCloudTab), callback: () => SettingsRouter.openUserSettings("plexcord_cloud_panel"), registrar: "Plexcord" },
    { id: "openBackupSettings", label: t(pluginI18n.keyboardNavigation.text.openBackupRestoreTab), callback: () => SettingsRouter.openUserSettings("plexcord_backup_restore_panel"), registrar: "Plexcord" },
    { id: "restartClient", label: t(pluginI18n.keyboardNavigation.text.restartClient), callback: () => relaunch(), registrar: "Plexcord" },
    { id: "openQuickCSSFile", label: t(pluginI18n.keyboardNavigation.text.openQuickCssFile), callback: () => PlexcordNative.quickCss.openEditor(), registrar: "Plexcord" },
    { id: "openSettingsFolder", label: t(pluginI18n.keyboardNavigation.text.openSettingsFolder), callback: async () => showItemInFolder(await PlexcordNative.settings.getSettingsDir()), registrar: "Plexcord" },
    { id: "openInGithub", label: t(pluginI18n.keyboardNavigation.text.openInGithub), callback: async () => PlexcordNative.native.openExternal(await getRepo()), registrar: "Plexcord" },

    {
        id: "openInBrowser", label: t(pluginI18n.keyboardNavigation.text.openInBrowser), callback: async () => {
            const url = await openSimpleTextInput(t(pluginI18n.keyboardNavigation.text.enterUrl));
            const newUrl = url.replace(/(https?:\/\/)?([a-zA-Z0-9-]+)\.([a-zA-Z0-9-]+)/, "https://$2.$3");

            try {
                new URL(newUrl); // Throws if invalid
                PlexcordNative.native.openExternal(newUrl);
            } catch {
                showToast({
                    text: t(pluginI18n.keyboardNavigation.toast.invalidUrl),
                    variant: "critical",
                    position: "bottom"
                });
            }
        }, registrar: "Plexcord"
    },

    {
        id: "togglePlugin", label: t(pluginI18n.keyboardNavigation.text.togglePlugin), callback: async () => {
            const plugins = Object.keys(Plugins);
            const options: ButtonAction[] = [];

            for (const plugin of plugins) {
                options.push({
                    id: plugin,
                    label: plugin
                });
            }

            const choice = await openMultipleChoice(options);

            const enabled = await openMultipleChoice([
                { id: "enable", label: t(pluginI18n.keyboardNavigation.text.enable) },
                { id: "disable", label: t(pluginI18n.keyboardNavigation.text.disable) }
            ]);

            if (choice && enabled) {
                return togglePlugin(choice, enabled.id === "enable");
            }
        }, registrar: "Plexcord"
    },

    {
        id: "quickFetch", label: t(pluginI18n.keyboardNavigation.text.quickFetch), callback: async () => {
            try {
                const url = await openSimpleTextInput(t(pluginI18n.keyboardNavigation.text.enterUrlToFetch));
                const newUrl = url.replace(/(https?:\/\/)?([a-zA-Z0-9-]+)\.([a-zA-Z0-9-]+)/, "https://$2.$3");
                const res = (await fetch(newUrl));
                const text = await res.text();
                copyToClipboard(text);

                showToast({
                    text: t(pluginI18n.keyboardNavigation.toast.copiedResponseToClipboard),
                    variant: "success",
                    position: "bottom"
                });

            } catch (e) {
                showToast({
                    text: t(pluginI18n.keyboardNavigation.toast.issueFetchingUrl),
                    variant: "critical",
                    position: "bottom"
                });
            }
        }, registrar: "Plexcord"
    },

    {
        id: "copyGitInfo", label: t(pluginI18n.keyboardNavigation.text.copyGitInfo), callback: async () => {
            copyToClipboard(`gitHash: ${gitHashShort}\ngitRemote: ${gitRemote}`);

            showToast({
                text: t(pluginI18n.keyboardNavigation.toast.copiedGitInfoTo),
                variant: "success",
                position: "bottom"
            });
        }, registrar: "Plexcord"
    },

    {
        id: "checkForUpdates", label: t(pluginI18n.keyboardNavigation.text.checkForUpdates), callback: async () => {
            const isOutdated = await checkForUpdates();

            if (isOutdated) {
                setTimeout(() => showNotification({
                    title: t(pluginI18n.keyboardNavigation.text.aPlexcordUpdateIs),
                    body: t(pluginI18n.keyboardNavigation.text.clickHereToView),
                    permanent: true,
                    noPersist: true,
                    onClick() {
                        SettingsRouter.openUserSettings("plexcord_updater_panel");
                    }
                }), 10_000);
            } else {
                showToast({
                    text: t(pluginI18n.keyboardNavigation.toast.noUpdatesAvailable),
                    position: "bottom"
                });
            }
        }, registrar: "Plexcord"
    },

    {
        id: "navToServer", label: t(pluginI18n.keyboardNavigation.text.navigateToServer), callback: async () => {
            const allServers = Object.values(GuildStore.getGuilds());
            const options: ButtonAction[] = [];

            for (const server of allServers) {
                options.push({
                    id: server.id,
                    label: server.name
                });
            }

            const choice = await openMultipleChoice(options);

            if (choice) {
                NavigationRouter.transitionToGuild(choice.id);
            }
        }, registrar: "Plexcord"
    }
];

function togglePlugin(plugin: ButtonAction, enabled: boolean) {

    Settings.plugins[plugin.id].enabled = enabled;

    showToast({
        text: t(enabled ? pluginI18n.keyboardNavigation.toast.enabledPlugin : pluginI18n.keyboardNavigation.toast.disabledPlugin, { id: plugin.id }),
        variant: "success",
        position: "bottom"
    });
}

export function registerAction(action: ButtonAction) {
    actions.push(action);
}
