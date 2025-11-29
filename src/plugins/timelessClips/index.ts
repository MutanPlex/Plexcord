/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2024 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { t } from "@api/i18n";
import { definePluginSettings } from "@api/Settings";
import { Devs } from "@utils/constants";
import definePlugin, { makeRange, OptionType, } from "@utils/types";

const settings = definePluginSettings({
    clipLength: {
        get label() {
            return t("plugin.timelessClips.option.clipLength.label");
        },
        get description() {
            return t("plugin.timelessClips.option.clipLength.description");
        },
        type: OptionType.SLIDER,
        markers: makeRange(3, 30, 1),
        default: 5,
        stickToMarkers: true,
    },
});

export default definePlugin({
    name: "TimelessClips",
    authors: [Devs.Joona],
    description: "Add a your own clip length",

    get displayDescription() {
        return t("plugin.timelessClips.description");
    },

    patches: [
        {
            find: '"Save clip keybind unset"',
            replacement: {
                match: /\)}](?<={value:.{14,17},label:(.{35,55}:).{3,7})/,
                replace: "$&.concat({value:$self.getClipLength(true),label:$1$self.getClipLength(false)})})"
            }
        },
    ],
    settings,
    getClipLength(millis: boolean) {
        const minutes = settings.store.clipLength;
        return millis ? minutes * 6e4 : minutes;

    }
});
