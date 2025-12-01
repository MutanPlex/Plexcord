/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2024 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { t } from "@api/i18n";
import { definePluginSettings } from "@api/Settings";
import { Devs } from "@utils/constants";
import definePlugin, { makeRange, OptionType } from "@utils/types";

const settings = definePluginSettings({
    zoomMultiplier: {
        get label() {
            return t("plugin.unlockedAvatarZoom.option.zoomMultiplier.label");
        },
        get description() {
            return t("plugin.unlockedAvatarZoom.option.zoomMultiplier.description");
        },
        type: OptionType.SLIDER,
        markers: makeRange(2, 16),
        default: 4,
    },
});

export default definePlugin({
    name: "UnlockedAvatarZoom",
    description: "Allows you to zoom in further in the image crop tool when changing your avatar",
    authors: [Devs.nakoyasha],
    settings,

    get displayDescription() {
        return t("plugin.unlockedAvatarZoom.description");
    },

    patches: [
        {
            find: "#{intl::AVATAR_UPLOAD_EDIT_MEDIA}",
            replacement: {
                match: /maxValue:\d/,
                replace: "maxValue:$self.settings.store.zoomMultiplier",
            }
        }
    ]
});
