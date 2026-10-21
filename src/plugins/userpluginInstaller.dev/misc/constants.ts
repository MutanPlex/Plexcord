/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2025 nin0
 * Copyright (c) 2026 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { plugin, t } from "@api/i18n";
import { classNameFactory } from "@api/Styles";
import { relaunch } from "@utils/native";
import { Alerts } from "@webpack/common";

// if edited, also edit in native.ts!!!
export const CLONE_LINK_REGEX = /https:\/\/(?:((?:git(?:hub|lab)\.com|git\.(?:[a-zA-Z0-9]|\.)+|codeberg\.org))\/(?!user-attachments)((?:[a-zA-Z0-9]|-)+)\/((?:[a-zA-Z0-9]|-|\.)+)(?:\.git)?|(plugins\.(nin0)\.dev)\/((?:[a-zA-Z0-9]|-|\.)+))(?:\/)?/;
export const WHITELISTED_SHARE_CHANNELS = ["1256395889354997771", "1032200195582197831", "1301947896601509900", "1322935137591365683"];
export const cl = classNameFactory("pc-userplugininstaller-");

export function showInstallFinishedAlert(pluginToEnable: string, native: boolean) {
    Alerts.show({
        title: t(plugin.userpluginInstaller.text.done),
        body: t(native ? plugin.userpluginInstaller.text.installedNativeBody : plugin.userpluginInstaller.text.installedBody, { name: pluginToEnable }),
        confirmText: t(native ? plugin.userpluginInstaller.text.enableAndRestart : plugin.userpluginInstaller.text.enableAndRefresh),
        cancelText: t(native ? plugin.userpluginInstaller.text.restart : plugin.userpluginInstaller.text.refresh),
        onConfirm() {
            !Plexcord.Plugins.plugins[pluginToEnable] ? Plexcord.Settings.plugins[pluginToEnable] = { enabled: true } : Plexcord.Settings.plugins[pluginToEnable].enabled = true;
            native ? relaunch() : window.location.reload();
        },
        onCancel: () => native ? relaunch() : window.location.reload()
    });
}
