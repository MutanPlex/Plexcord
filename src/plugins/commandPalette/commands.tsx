/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2025 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { showNotification } from "@api/Notifications";
import { Settings } from "@api/Settings";
import { copyToClipboard } from "@utils/clipboard";
import { relaunch, showItemInFolder } from "@utils/native";
import { checkForUpdates, getRepo } from "@utils/updater";
import { GuildStore, NavigationRouter, SettingsRouter, Toasts } from "@webpack/common";

import gitHash from "~git-hash";
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
    { id: "openPlexcordSettings", label: "Open Plexcord tab", callback: async () => await SettingsRouter.open("PlexcordSettings"), registrar: "Plexcord" },
    { id: "openPluginSettings", label: "Open Plugin tab", callback: () => SettingsRouter.open("PlexcordPlugins"), registrar: "Plexcord" },
    { id: "openThemesSettings", label: "Open Themes tab", callback: () => SettingsRouter.open("PlexcordThemes"), registrar: "Plexcord" },
    { id: "openUpdaterSettings", label: "Open Updater tab", callback: () => SettingsRouter.open("PlexcordUpdater"), registrar: "Plexcord" },
    { id: "openPlexcordCloudSettings", label: "Open Cloud tab", callback: () => SettingsRouter.open("PlexcordCloud"), registrar: "Plexcord" },
    { id: "openBackupSettings", label: "Open Backup & Restore tab", callback: () => SettingsRouter.open("PlexcordSettingsSync"), registrar: "Plexcord" },
    { id: "restartClient", label: "Restart Client", callback: () => relaunch(), registrar: "Plexcord" },
    { id: "openQuickCSSFile", label: "Open Quick CSS File", callback: () => PlexcordNative.quickCss.openEditor(), registrar: "Plexcord" },
    { id: "openSettingsFolder", label: "Open Settings Folder", callback: async () => showItemInFolder(await PlexcordNative.settings.getSettingsDir()), registrar: "Plexcord" },
    { id: "openInGithub", label: "Open in Github", callback: async () => PlexcordNative.native.openExternal(await getRepo()), registrar: "Plexcord" },

    {
        id: "openInBrowser", label: "Open in Browser", callback: async () => {
            const url = await openSimpleTextInput("Enter a URL");
            const newUrl = url.replace(/(https?:\/\/)?([a-zA-Z0-9-]+)\.([a-zA-Z0-9-]+)/, "https://$2.$3");

            try {
                new URL(newUrl); // Throws if invalid
                PlexcordNative.native.openExternal(newUrl);
            } catch {
                Toasts.show({
                    message: "Invalid URL",
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
        id: "togglePlugin", label: "Toggle Plugin", callback: async () => {
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
                { id: "enable", label: "Enable" },
                { id: "disable", label: "Disable" }
            ]);

            if (choice && enabled) {
                return togglePlugin(choice, enabled.id === "enable");
            }
        }, registrar: "Plexcord"
    },

    {
        id: "quickFetch", label: "Quick Fetch", callback: async () => {
            try {
                const url = await openSimpleTextInput("Enter URL to fetch (GET only)");
                const newUrl = url.replace(/(https?:\/\/)?([a-zA-Z0-9-]+)\.([a-zA-Z0-9-]+)/, "https://$2.$3");
                const res = (await fetch(newUrl));
                const text = await res.text();
                copyToClipboard(text);

                Toasts.show({
                    message: "Copied response to clipboard!",
                    type: Toasts.Type.SUCCESS,
                    id: Toasts.genId(),
                    options: {
                        position: Toasts.Position.BOTTOM
                    }
                });

            } catch (e) {
                Toasts.show({
                    message: "Issue fetching URL",
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
        id: "copyGitInfo", label: "Copy Git Info", callback: async () => {
            copyToClipboard(`gitHash: ${gitHash}\ngitRemote: ${gitRemote}`);

            Toasts.show({
                message: "Copied git info to clipboard!",
                type: Toasts.Type.SUCCESS,
                id: Toasts.genId(),
                options: {
                    position: Toasts.Position.BOTTOM
                }
            });
        }, registrar: "Plexcord"
    },

    {
        id: "checkForUpdates", label: "Check for Updates", callback: async () => {
            const isOutdated = await checkForUpdates();

            if (isOutdated) {
                setTimeout(() => showNotification({
                    title: "A Plexcord update is available!",
                    body: "Click here to view the update",
                    permanent: true,
                    noPersist: true,
                    onClick() {
                        SettingsRouter.open("PlexcordUpdater");
                    }
                }), 10_000);
            } else {
                Toasts.show({
                    message: "No updates available",
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
        id: "navToServer", label: "Navigate to Server", callback: async () => {
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
        message: `Successfully ${enabled ? "enabled" : "disabled"} ${plugin.id}`,
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
