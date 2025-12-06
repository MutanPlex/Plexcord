/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2023 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { plugin, t } from "@api/i18n";
import { definePluginSettings } from "@api/Settings";
import { Devs } from "@utils/constants";
import definePlugin, { OptionType } from "@utils/types";

const settings = definePluginSettings({
    inlineVideo: {
        label: () => t(plugin.noMosaic.option.inlineVideo.label),
        description: () => t(plugin.noMosaic.option.inlineVideo.description),
        type: OptionType.BOOLEAN,
        default: true,
        restartNeeded: true
    }
});

export default definePlugin({
    name: "NoMosaic",
    authors: [Devs.AutumnVN],
    description: () => t(plugin.noMosaic.description),
    tags: ["image", "mosaic", "media"],
    settings,

    patches: [
        {
            find: '=>"IMAGE"===',
            replacement: {
                match: /=>"IMAGE"===\i\|\|"VIDEO"===\i(?:\|\|("VISUAL_PLACEHOLDER"===\i))?;/,
                replace: (_, visualPlaceholderPred) => visualPlaceholderPred != null ? `=>${visualPlaceholderPred};` : "=>false;"
            }
        },
        {
            find: "renderAttachments(",
            predicate: () => settings.store.inlineVideo,
            replacement: {
                match: /url:(\i)\.url\}\);return /,
                replace: "$&$1.content_type?.startsWith('image/')&&"
            }
        },
    ]
});
