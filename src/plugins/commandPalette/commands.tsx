/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2025 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { t } from "@api/i18n";
import { showNotification } from "@api/Notifications";
import { Settings } from "@api/Settings";
import { copyToClipboard } from "@utils/clipboard";
import { relaunch } from "@utils/native";
import { checkForUpdates, getRepo } from "@utils/updater";
import { GuildStore, NavigationRouter, SettingsRouter, Toasts } from "@webpack/common";

import gitHash from "~git-hash";
import gitRemote from "~git-remote";
import Plugins from "~plugins";

import { openMultipleChoice } from "./components/MultipleChoice";
import { openSimpleTextInput } from "./components/TextInput";

export interface ButtonAction {
    id: string;
    label: (() => string) | string;
    callback?: () => void;
    registrar?: string;
}

export const actions: ButtonAction[] = [
    { id: "openPlexcordSettings", label: () => t("plugin.commandPalette.open.plexcord"), callback: async () => await SettingsRouter.open("PlexcordSettings"), registrar: "Plexcord" },
    { id: "openPluginSettings", label: () => t("plugin.commandPalette.open.plugin"), callback: () => SettingsRouter.open("PlexcordPlugins"), registrar: "Plexcord" },
    { id: "openThemesSettings", label: () => t("plugin.commandPalette.open.themes"), callback: () => SettingsRouter.open("PlexcordThemes"), registrar: "Plexcord" },
    { id: "openUpdaterSettings", label: () => t("plugin.commandPalette.open.updater"), callback: () => SettingsRouter.open("PlexcordUpdater"), registrar: "Plexcord" },
    { id: "openPlexcordCloudSettings", label: () => t("plugin.commandPalette.open.cloud"), callback: () => SettingsRouter.open("PlexcordCloud"), registrar: "Plexcord" },
    { id: "openBackupSettings", label: () => t("plugin.commandPalette.open.backup"), callback: () => SettingsRouter.open("PlexcordSettingsSync"), registrar: "Plexcord" },
    { id: "openChangelogSettings", label: () => t("plugin.commandPalette.open.changelog"), callback: () => SettingsRouter.open("PlexcordChangelog"), registrar: "Plexcord" },
    { id: "restartClient", label: () => t("plugin.commandPalette.open.restart"), callback: () => relaunch(), registrar: "Plexcord" },
    { id: "openQuickCSSFile", label: () => t("plugin.commandPalette.open.quickCSS"), callback: () => PlexcordNative.quickCss.openEditor(), registrar: "Plexcord" },
    { id: "openSettingsFolder", label: () => t("plugin.commandPalette.open.settings"), callback: async () => await PlexcordNative.settings.openFolder(), registrar: "Plexcord" },
    { id: "openInGithub", label: () => t("plugin.commandPalette.open.github"), callback: async () => PlexcordNative.native.openExternal(await getRepo()), registrar: "Plexcord" },

    {
        id: "openInBrowser", label: () => t("plugin.commandPalette.open.browser"), callback: async () => {
            const url = await openSimpleTextInput(t("plugin.commandPalette.enter"));
            const newUrl = url.replace(/(https?:\/\/)?([a-zA-Z0-9-]+)\.([a-zA-Z0-9-]+)/, "https://$2.$3");

            try {
                new URL(newUrl); // Throws if invalid
                PlexcordNative.native.openExternal(newUrl);
            } catch {
                Toasts.show({
                    message: t("plugin.commandPalette.toast.invalid"),
                    type: Toasts.Type.FAILURE,
                    id: Toasts.genId(),
                    options: {
                        position: Toasts.Position.BOTTOM
                    }
                });
            }
        }, registrar: "Plexcord"
    },

    {
        id: "togglePlugin", label: () => t("plugin.commandPalette.open.togglePlugin"), callback: async () => {
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
                { id: "enable", label: () => t("plugin.commandPalette.enable") },
                { id: "disable", label: () => t("plugin.commandPalette.disable") }
            ]);

            if (choice && enabled) {
                return togglePlugin(choice, enabled.id === "enable");
            }
        }, registrar: "Plexcord"
    },

    {
        id: "quickFetch", label: () => t("plugin.commandPalette.open.quickFetch"), callback: async () => {
            try {
                const url = await openSimpleTextInput(t("plugin.commandPalette.fetch"));
                const newUrl = url.replace(/(https?:\/\/)?([a-zA-Z0-9-]+)\.([a-zA-Z0-9-]+)/, "https://$2.$3");
                const res = (await fetch(newUrl));
                const text = await res.text();
                copyToClipboard(text);

                Toasts.show({
                    message: t("plugin.commandPalette.toast.copied"),
                    type: Toasts.Type.SUCCESS,
                    id: Toasts.genId(),
                    options: {
                        position: Toasts.Position.BOTTOM
                    }
                });

            } catch (e) {
                Toasts.show({
                    message: t("plugin.commandPalette.issue"),
                    type: Toasts.Type.FAILURE,
                    id: Toasts.genId(),
                    options: {
                        position: Toasts.Position.BOTTOM
                    }
                });
            }
        }, registrar: "Plexcord"
    },

    {
        id: "copyGitInfo", label: () => t("plugin.commandPalette.open.copyGit"), callback: async () => {
            copyToClipboard(`gitHash: ${gitHash}\ngitRemote: ${gitRemote}`);

            Toasts.show({
                message: t("plugin.commandPalette.toast.git"),
                type: Toasts.Type.SUCCESS,
                id: Toasts.genId(),
                options: {
                    position: Toasts.Position.BOTTOM
                }
            });
        }, registrar: "Plexcord"
    },

    {
        id: "checkForUpdates", label: () => t("plugin.commandPalette.open.check"), callback: async () => {
            const isOutdated = await checkForUpdates();

            if (isOutdated) {
                setTimeout(() => showNotification({
                    title: t("updater.updateAvailable"),
                    body: t("updater.clickToView"),
                    permanent: true,
                    noPersist: true,
                    onClick() {
                        SettingsRouter.open("PlexcordUpdater");
                    }
                }), 10_000);
            } else {
                Toasts.show({
                    message: t("plugin.commandPalette.toast.noUpdates"),
                    type: Toasts.Type.MESSAGE,
                    id: Toasts.genId(),
                    options: {
                        position: Toasts.Position.BOTTOM
                    }
                });
            }
        }, registrar: "Plexcord"
    },

    {
        id: "navToServer", label: () => t("plugin.commandPalette.open.navigate"), callback: async () => {
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

    Toasts.show({
        message: enabled ? t("plugin.commandPalette.toast.enabled", { plugin: plugin.id }) : t("plugin.commandPalette.toast.disabled", { plugin: plugin.id }),
        type: Toasts.Type.SUCCESS,
        id: Toasts.genId(),
        options: {
            position: Toasts.Position.BOTTOM
        }
    });
}

export function registerAction(action: ButtonAction) {
    actions.push(action);
}
