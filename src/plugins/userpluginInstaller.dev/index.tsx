/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2025 nin0
 * Copyright (c) 2026 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import "./misc/style.css";

import { plugin, t } from "@api/i18n";
import { showNotification } from "@api/Notifications";
import { definePluginSettings } from "@api/Settings";
import { Button } from "@components/Button";
import { Notice } from "@components/Notice";
import plSettings from "@plugins/_core/settings";
import { Devs, PcDevs } from "@utils/constants";
import { relaunch } from "@utils/native";
import definePlugin, { OptionType, PluginNative } from "@utils/types";
import { findByPropsLazy, findComponentByCodeLazy } from "@webpack";
import { Alerts } from "@webpack/common";

import SettingsTab from "./components/SettingsTab";
import UserpluginInstallButton from "./components/UserpluginInstallButton";
import { VariableWithCallbacks } from "./VariableWithCallbacks";

// @ts-ignore
export const Native = PlexcordNative.pluginHelpers.UserpluginInstaller as PluginNative<typeof import("./native")>;
export const OpenSettingsModule = findByPropsLazy("openUserSettings");
const AppsIcon = findComponentByCodeLazy("2.95H20a2 2 0");

export const settings = definePluginSettings({
    allowlistedChannels: {
        label: () => t(plugin.userpluginInstaller.option.allowlistedChannels.label),
        type: OptionType.STRING,
        description: () => t(plugin.userpluginInstaller.option.allowlistedChannels.description)
    },
    notifyIfUpdate: {
        label: () => t(plugin.userpluginInstaller.option.notifyIfUpdate.label),
        type: OptionType.BOOLEAN,
        description: () => t(plugin.userpluginInstaller.option.notifyIfUpdate.description),
        default: true
    },
    neverNotifyForPlugins: {
        label: () => t(plugin.userpluginInstaller.option.neverNotifyForPlugins.label),
        type: OptionType.STRING,
        description: () => t(plugin.userpluginInstaller.option.neverNotifyForPlugins.description),
        default: ""
    },
    setGitPath: {
        type: OptionType.COMPONENT,
        component: () => <Button onClick={() => {
            Native.openGitPathModal();
        }} variant="secondary">
            {t(plugin.userpluginInstaller.text.setGitPath)}
        </Button>
    }
});

export default definePlugin({
    name: "UserpluginInstaller",
    description: () => t(plugin.userpluginInstaller.description),
    tags: ["developers"],
    settingsAboutComponent: () => (
        <Notice.Warning>
            {t(plugin.userpluginInstaller.text.plexcordDoesNotModerate)}
            {t(plugin.userpluginInstaller.text.onlyInstallUserpluginsFrom)}
        </Notice.Warning>
    ),
    async checkPluginUpdates() {
        for (const p of this.plugins.value()) {
            if (await Native.isUpdateAvailableForPlugin(p.directory!)) {
                const t = this.pluginsWithUpdates.value().plugins;
                t.push(p.directory!);
                this.pluginsWithUpdates.value({
                    finished: false,
                    plugins: t
                });
            }
        }
        const t = this.pluginsWithUpdates.value().plugins;
        this.pluginsWithUpdates.value({
            finished: true,
            plugins: t
        });
    },
    section: {
        key: "plexcord_userplugins",
        title: "UserPlugins",
        panelTitle: "UserPlugins",
        Component: SettingsTab,
        Icon: AppsIcon
    },
    async start() {
        if (!PlexcordNative.pluginHelpers.UserpluginInstaller) return void Alerts.show({
            title: t(plugin.userpluginInstaller.text.userplugininstallerNotFullyLoaded),
            body: t(plugin.userpluginInstaller.text.youNeedToRestart),
            confirmText: t(plugin.userpluginInstaller.text.restartNow),
            onConfirm() {
                relaunch();
            },
            cancelText: t(plugin.userpluginInstaller.text.later)
        });

        await Native.ensurePluginsDirectory();

        plSettings.customEntries.push(this.section);

        this.pluginsWithUpdates.registerCallback((value, id) => {
            if (value.plugins.length === 0) return;
            if (settings.store.neverNotifyForPlugins.split(",").map(t => t.trim().toLowerCase()).includes(value.plugins[value.plugins.length - 1].toLowerCase()))
                return;
            this.pluginsWithUpdates.deregisterCallback(id);
            if (settings.store.notifyIfUpdate)
                showNotification({
                    title: t(plugin.userpluginInstaller.text.someUserpluginsAreOut),
                    body: t(plugin.userpluginInstaller.text.clickToOpenThe),
                    noPersist: true,
                    permanent: true,
                    onClick() {
                        OpenSettingsModule.openUserSettings("plexcord_userplugins_panel");
                    },
                });
        });
        const pls = await Native.getUserplugins();
        // @ts-ignore :trolley:
        this.plugins.value(pls);
        await this.checkPluginUpdates();
    },
    stop() {
        // @ts-ignore
        plSettings.customEntries.splice(plSettings.customEntries.indexOf(this.section), 1);
    },
    plugins: new VariableWithCallbacks<{
        name: string;
        description: string;
        usesPreSend: boolean;
        usesNative: boolean;
        directory: string;
        remote: string;
    }[]>([]),
    pluginsWithUpdates: new VariableWithCallbacks<{
        finished: boolean;
        plugins: string[];
    }>({
        finished: false,
        plugins: []
    }),
    settings,
    authors: [Devs.nin0, PcDevs.MutanPlex],
    renderMessageAccessory: props => {
        return <UserpluginInstallButton props={props} />;
    }
});
