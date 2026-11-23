/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2026 Vendicated and contributors
 * Copyright (c) 2026 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { plugin, t } from "@api/i18n";
import { Devs, PcDevs } from "@utils/constants";
import definePlugin, { PluginNative } from "@utils/types";
import { MouseEvent } from "react";

const Native = PlexcordNative.pluginHelpers.DirectFileDownload as PluginNative<typeof import("./native")>;

function saveAttachment(downloadURL: string) {
    Native.saveAttachment(downloadURL).catch(() => PlexcordNative.native.openExternal(downloadURL));
}

export default definePlugin({
    name: "DirectFileDownload",
    description: () => t(plugin.directFileDownload.description),
    tags: ["media", "utility"],
    authors: [Devs.imnotplayinginreallife, PcDevs.MutanPlex],

    patches: [
        {
            find: "#{intl::DOWNLOAD}),focusProps:",
            replacement: {
                match: /\i\.\i\.getDefaultLinkInterceptor\((\i)\)/,
                replace: "event=>$self.handleDownload(event,$1)"
            }
        },
        {
            find: '"plaintext-preview-overflow-menu"',
            replacement: {
                match: /(id:"download",.{0,150}?action:\(\)=>{)(?:\i\.isPlatformEmbedded\?\i\(\):)?\i\.current\?\.click\(\)(?=,\i\(\)})/,
                replace: "$1$self.saveAttachment(arguments[0].url)"
            }
        }
    ],

    saveAttachment,

    handleDownload(event: MouseEvent, downloadURL: string) {
        if (event.defaultPrevented) {
            return;
        }

        event.preventDefault();
        saveAttachment(downloadURL);
    }
});
