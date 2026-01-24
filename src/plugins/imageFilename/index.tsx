/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2024 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { plugin, t } from "@api/i18n";
import { definePluginSettings } from "@api/Settings";
import { Devs } from "@utils/constants";
import definePlugin, { OptionType } from "@utils/types";

const ImageExtensionRe = /\.(png|jpg|jpeg|gif|webp|avif)$/i;
const GifHostRegex = /^(.+?\.)?(tenor|giphy|imgur)\.com$/i;

const settings = definePluginSettings({
    showFullUrl: {
        label: () => t(plugin.imageFilename.option.showFullUrl.label),
        description: () => t(plugin.imageFilename.option.showFullUrl.description),
        type: OptionType.BOOLEAN,
        default: false,
    },
});

export default definePlugin({
    name: "ImageFilename",
    authors: [Devs.Ven],
    description: () => t(plugin.imageFilename.description),
    settings,

    patches: [
        {
            find: ".RESPONSIVE?",
            replacement: {
                match: /(?="data-role":"img","data-safe-src":)(?<=href:(\i).+?)/,
                replace: "title:$self.getTitle($1),"
            }
        },
    ],

    getTitle(src: string) {
        try {
            const url = new URL(src);
            const isGif = GifHostRegex.test(url.hostname);
            if (!isGif && !ImageExtensionRe.test(url.pathname)) return undefined;

            return isGif || settings.store.showFullUrl
                ? src
                : url.pathname.split("/").pop();
        } catch {
            return undefined;
        }
    }
});
