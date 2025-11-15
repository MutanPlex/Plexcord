/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2023 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { t } from "@api/i18n";
import { definePluginSettings } from "@api/Settings";
import { Paragraph } from "@components/Paragraph";
import { PcDevs } from "@utils/constants";
import definePlugin, { OptionType } from "@utils/types";
import { UserStore } from "@webpack/common";

const settings = definePluginSettings({
    platform: {
        get label() {
            return t("plugin.platformSpoofer.option.platform.label");
        },
        get description() {
            return t("plugin.platformSpoofer.option.platform.description");
        },
        type: OptionType.SELECT,
        restartNeeded: true,
        get options() {
            return [
                {
                    label: t("plugin.platformSpoofer.option.platform.desktop"),
                    value: "desktop",
                    default: true
                },
                {
                    label: t("plugin.platformSpoofer.option.platform.web"),
                    value: "web"
                },
                {
                    label: t("plugin.platformSpoofer.option.platform.android"),
                    value: "android"
                },
                {
                    label: t("plugin.platformSpoofer.option.platform.ios"),
                    value: "ios"
                },
                {
                    label: t("plugin.platformSpoofer.option.platform.xbox"),
                    value: "xbox"
                },
                {
                    label: t("plugin.platformSpoofer.option.platform.playstation"),
                    value: "playstation"
                },
            ];
        }
    }
});

export default definePlugin({
    name: "PlatformSpoofer",
    description: "Spoof what platform or device you're on",
    authors: [PcDevs.Drag, PcDevs.MutanPlex, PcDevs.He4vuc],
    settingsAboutComponent: () => <>
        <Paragraph className="plugin-warning">
            {t("plugin.platformSpoofer.about")}
        </Paragraph>
    </>,
    settings: settings,

    get displayDescription() {
        return t("plugin.platformSpoofer.description");
    },

    patches: [
        {
            find: "_doIdentify(){",
            replacement: {
                match: /(\[IDENTIFY\].*let.{0,5}=\{.*properties:)(.*),presence/,
                replace: "$1{...$2,...$self.getPlatform(true)},presence"
            }
        },
        {
            find: "voiceChannelEffect]:",
            replacement: {
                match: /(?<=participantUserId:(\i).{0,250}platform:(\i).*?muted:\i\}\);)/,
                replace: "$2=$self.getPlatform(false, $1)?.vcIcon||$2;"
            }
        }
    ],
    getPlatform(bypass, userId?: any) {
        const platform = settings.store.platform ?? "desktop";

        if (bypass || userId === UserStore.getCurrentUser().id) {
            switch (platform) {
                case "desktop":
                    return { os: "Windows", browser: t("plugin.platformSpoofer.platform.desktop"), vcIcon: 0 };
                case "web":
                    return { os: "Web", browser: t("plugin.platformSpoofer.platform.web"), vcIcon: 0 };
                case "ios":
                    return { os: "iOS", browser: t("plugin.platformSpoofer.platform.ios"), vcIcon: 1 };
                case "android":
                    return { os: "Android", browser: t("plugin.platformSpoofer.platform.android"), vcIcon: 1 };
                case "xbox":
                    return { os: "Xbox", browser: t("plugin.platformSpoofer.platform.xbox"), vcIcon: 2 };
                case "playstation":
                    return { os: "PlayStation", browser: t("plugin.platformSpoofer.platform.playstation"), vcIcon: 3 };
                default:
                    return null;
            }
        }

        return null;
    }
});
