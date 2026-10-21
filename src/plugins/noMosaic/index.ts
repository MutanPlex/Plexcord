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
    tags: ["appearance", "media", "chat"],
    settings,

    patches: [
        {
            find: '"PLAINTEXT_PREVIEW":"OTHER"',
            replacement: {
                match: /"IMAGE"===\i\|\|"VIDEO"===\i\|\|"CLIP"===\i/,
                replace: "(false)"
            }
        },
        {
            find: "return{visualMediaItems:",
            replacement: {
                match: /return{visualMediaItems:.+?props:(\i)(?=.{0,20}?\1\.item\.uniqueId)/,
                replace: '$&,useFullWidth:["IMAGE","VIDEO","CLIP"].includes($1.item?.type)?false:undefined'
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
