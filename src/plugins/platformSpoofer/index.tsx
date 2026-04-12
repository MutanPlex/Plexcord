/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2023 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { plugin, t } from "@api/i18n";
import { definePluginSettings } from "@api/Settings";
import { Paragraph } from "@components/Paragraph";
import { PcDevs } from "@utils/constants";
import definePlugin, { OptionType } from "@utils/types";
import { UserStore } from "@webpack/common";

const settings = definePluginSettings({
    platform: {
        label: () => t(plugin.platformSpoofer.option.platform.label),
        description: () => t(plugin.platformSpoofer.option.platform.description),
        type: OptionType.SELECT,
        restartNeeded: true,
        options: [
            {
                label: () => t(plugin.platformSpoofer.option.platform.desktop),
                value: "desktop",
                default: true
            },
            {
                label: () => t(plugin.platformSpoofer.option.platform.web),
                value: "web"
            },
            {
                label: () => t(plugin.platformSpoofer.option.platform.android),
                value: "android"
            },
            {
                label: () => t(plugin.platformSpoofer.option.platform.ios),
                value: "ios"
            },
            {
                label: () => t(plugin.platformSpoofer.option.platform.xbox),
                value: "xbox"
            },
            {
                label: () => t(plugin.platformSpoofer.option.platform.playstation),
                value: "playstation"
            },
            {
                label: () => t(plugin.platformSpoofer.option.platform.vr),
                value: "vr",
            },
        ]
    }
});

export default definePlugin({
    name: "PlatformSpoofer",
    description: () => t(plugin.platformSpoofer.description),
    authors: [PcDevs.Drag, PcDevs.MutanPlex, PcDevs.He4vuc],
    settingsAboutComponent: () => <>
        <Paragraph className="plugin-warning">
            {t(plugin.platformSpoofer.about)}
        </Paragraph>
    </>,
    settings: settings,

    patches: [
        {
            find: "_doIdentify(){",
            replacement: [
                {
                    match: /window._ws=null,null!=\i/,
                    replace: "false"
                },
                {
                    match: /(?<="GatewaySocket"\)\}\),properties:)(\i)/,
                    replace: "{...$1,...$self.getPlatform(true)}"
                },
            ]
        }
    ],
    getPlatform(bypass, userId?: any) {
        const platform = settings.store.platform ?? "desktop";

        if (bypass || userId === UserStore.getCurrentUser().id) {
            switch (platform) {
                case "desktop":
                    return { os: "Windows", browser: "Discord Client" };
                case "web":
                    return { os: "Windows", browser: "Chrome" };
                case "ios":
                    return { os: "iOS", browser: "Discord iOS" };
                case "android":
                    return { os: "Android", browser: "Discord Android" };
                case "xbox":
                    return { os: "Xbox", browser: "Discord Embedded" };
                case "playstation":
                    return { os: "PlayStation", browser: "Discord Embedded" };
                case "vr":
                    return { os: "VR", browser: "Discord VR" };
                default:
                    return null;
            }
        }

        return null;
    }
});
