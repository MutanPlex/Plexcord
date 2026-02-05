/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2024 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { plugin, t } from "@api/i18n";
import { plugins } from "@api/PluginManager";
import { definePluginSettings } from "@api/Settings";
import { Button } from "@components/Button";
import { Paragraph } from "@components/Paragraph";
import SettingsPlugin, { settingsSectionMap } from "@plugins/_core/settings";
import { PcDevs } from "@utils/constants";
import { getIntlMessage } from "@utils/discord";
import definePlugin, { OptionType } from "@utils/types";

import { preload, unload } from "./images";
import { QrCodeIcon } from "./ui";
import openQrModal from "./ui/modals/QrModal";

const settings = definePluginSettings({
    scanQr: {
        label: () => t(plugin.loginWithQR.option.scanQr.label),
        description: () => t(plugin.loginWithQR.option.scanQr.description),
        type: OptionType.COMPONENT,
        component() {
            if (!plugins.LoginWithQR.started)
                return (
                    <Paragraph>
                        {t(plugin.loginWithQR.option.scanQr.notEnabled)}
                    </Paragraph>
                );

            return (
                <Button size="small" onClick={openQrModal}>
                    {getIntlMessage("USER_SETTINGS_SCAN_QR_CODE")}
                </Button>
            );
        },
    },
});

export default definePlugin({
    name: "LoginWithQR",
    description: () => t(plugin.loginWithQR.description),
    authors: [PcDevs.nexpid, PcDevs.MutanPlex],
    settings,

    patches: [
        // Prevent paste event from firing when the QRModal is open
        {
            find: ".clipboardData&&(",
            replacement: {
                match: /handleGlobalPaste:(\i)/,
                replace: "handleGlobalPaste:(...args)=>!$self.qrModalOpen&&$1(...args)",
            },
        },
    ],

    qrModalOpen: false,
    start() {
        const { customEntries, customSections } = SettingsPlugin;

        customEntries.push({
            key: "plexcord_login_with_qr",
            title: getIntlMessage("USER_SETTINGS_SCAN_QR_CODE"),
            Component: openQrModal,
            Icon: QrCodeIcon
        });

        customSections.push(() => ({
            section: "PlexcordLoginWithQR",
            label: getIntlMessage("USER_SETTINGS_SCAN_QR_CODE"),
            searchableTitles: [getIntlMessage("USER_SETTINGS_SCAN_QR_CODE")],
            element: openQrModal,
            className: "pc-patch-helper",
            id: "PlexcordLoginWithQR",
        }));

        settingsSectionMap.push(["PlexcordLoginWithQR", "plexcord_login_with_qr"]);
        preload();
    },

    stop() {
        const { customEntries, customSections } = SettingsPlugin;
        const entry = customEntries.findIndex(entry => entry.key === "plexcord_login_with_qr");
        if (entry !== -1) customEntries.splice(entry, 1);
        const section = customSections.findIndex(section => section({} as any).id === "PlexcordLoginWithQR");
        if (section !== -1) customSections.splice(section, 1);
        const map = settingsSectionMap.findIndex(entry => entry[1] === "plexcord_login_with_qr");
        if (map !== -1) settingsSectionMap.splice(map, 1);

        unload();
    },
});
