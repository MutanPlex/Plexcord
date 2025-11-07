/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2023 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { t } from "@api/i18n";
import { definePluginSettings } from "@api/Settings";
import { Devs } from "@utils/constants";
import definePlugin, { OptionType } from "@utils/types";

const settings = definePluginSettings({
    notificationVolume: {
        get label() {
            return t("plugin.notificationVolume.option.notificationVolume.label");
        },
        get description() {
            return t("plugin.notificationVolume.option.notificationVolume.description");
        },
        type: OptionType.SLIDER,
        markers: [0, 25, 50, 75, 100],
        default: 100,
        stickToMarkers: false
    }
});

export default definePlugin({
    name: "NotificationVolume",
    description: "Save your ears and set a separate volume for notifications and in-app sounds",
    authors: [Devs.philipbry],
    settings,

    get displayDescription() {
        return t("plugin.notificationVolume.description");
    },

    patches: [
        {
            find: "ensureAudio(){",
            replacement: {
                match: /(?=Math\.min\(\i\.\i\.getOutputVolume\(\)\/100)/g,
                replace: "$self.settings.store.notificationVolume/100*"
            },
        },
    ],
});
