/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2024 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { plugin, t } from "@api/i18n";
import { definePluginSettings } from "@api/Settings";
import { Button } from "@components/Button";
import { Paragraph } from "@components/Paragraph";
import LoginWithQR from "@plugins/loginWithQR";
import { PcDevs } from "@utils/constants";
import { getIntlMessage } from "@utils/discord";
import definePlugin, { OptionType } from "@utils/types";
import { Menu } from "@webpack/common";
import { ReactElement } from "react";

import { preload, unload } from "./images";
import { cl } from "./ui";
import openQrModal from "./ui/modals/QrModal";

export default definePlugin({
    name: "LoginWithQR",
    description: () => t(plugin.loginWithQR.description),
    authors: [PcDevs.nexpid, PcDevs.MutanPlex],

    settings: definePluginSettings({
        scanQr: {
            label: () => t(plugin.loginWithQR.option.scanQr.label),
            description: () => t(plugin.loginWithQR.option.scanQr.description),
            type: OptionType.COMPONENT,
            component() {
                if (!LoginWithQR.started)
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
    }),

    patches: [
        // Prevent paste event from firing when the QRModal is open
        {
            find: ".clipboardData&&(",
            replacement: {
                match: /handleGlobalPaste:(\i)/,
                replace: "handleGlobalPaste:(...args)=>!$self.qrModalOpen&&$1(...args)",
            },
        },
        // Insert a Scan QR Code button in the My Account tab
        {
            find: "UserSettingsAccountProfileCard",
            replacement: {
                // Find the Edit User Profile button and insert our custom button.
                // A bit jank, but whatever
                match: /,(\(.{1,90}#{intl::USER_SETTINGS_EDIT_USER_PROFILE}\),onClick:\i\}\))/,
                replace: ",$self.insertScanQrButton($1)",
            },
        },
        // Insert a Scan QR Code MenuItem in the Swith Accounts popout
        {
            find: 'id:"manage-accounts"',
            replacement: {
                match: /(id:"manage-accounts",.*?)}\)\)(,\i)/,
                replace: "$1}),$self.ScanQrMenuItem)$2"
            }
        },

        // Insert a Scan QR Code button in the Settings sheet
        {
            find: ".isInputProfileCustom()",
            replacement: {
                match: /\.CONNECTIONS/,
                replace: "$&,\"SCAN_QR_CODE\""
            }
        },
        // Insert a Scan QR Code button in the Settings sheet (part 2)
        {
            find: ".PRIVACY_ENCRYPTION_VERIFIED_DEVICES_V2]",
            replacement: {
                match: /\.CLIPS]:{.*?},/,
                replace: "$&\"SCAN_QR_CODE\":$self.ScanQrSettingsSheet,"
            }
        }
    ],

    qrModalOpen: false,

    insertScanQrButton: (button: ReactElement) => (
        <div className={cl("settings-btns")}>
            <Button size="small" onClick={openQrModal}>
                {getIntlMessage("USER_SETTINGS_SCAN_QR_CODE")}
            </Button>
            {button}
        </div>
    ),
    get ScanQrMenuItem() {
        return <Menu.MenuItem id="scan-qr" label={getIntlMessage("USER_SETTINGS_SCAN_QR_CODE")} action={openQrModal} />;
    },
    get ScanQrSettingsSheet() {
        return {
            section: getIntlMessage("USER_SETTINGS_SCAN_QR_CODE"),
            onClick: openQrModal,
            searchableTitles: [getIntlMessage("USER_SETTINGS_SCAN_QR_CODE")],
            label: getIntlMessage("USER_SETTINGS_SCAN_QR_CODE"),
            ariaLabel: getIntlMessage("USER_SETTINGS_SCAN_QR_CODE")
        };
    },

    start() {
        preload();
    },

    stop() {
        unload();
    },
});
