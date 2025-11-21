/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2024 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { t } from "@api/i18n";
import { Settings } from "@api/Settings";
import { CloudUpload } from "@plexcord/discord-types";
import { tarExtMatcher } from "@plugins/anonymiseFileNames";
import { Devs, PcDevs } from "@utils/constants";
import definePlugin, { ReporterTestable } from "@utils/types";

const extensionMap = {
    "ogg": [".ogv", ".oga", ".ogx", ".ogm", ".spx", ".opus", ".flac", ".aac", ".wma"],
    "jpg": [".jpeg", ".jfif", ".jpe", ".jif", ".jfi", ".pjpeg", ".pjp", ".bmp", ".tiff", ".tif", ".webp"],
    "svg": [".svgz", ".ai", ".eps"],
    "mp4": [".m4v", ".m4r", ".m4p", ".avi", ".mkv", ".wmv", ".flv", ".3gp", ".webm"],
    "m4a": [".m4b", ".aiff", ".wav"],
    "mov": [".movie", ".qt", ".asf", ".rm", ".rmvb"],
    "png": [".ico", ".cur"],
};

export const reverseExtensionMap = Object.entries(extensionMap).reduce((acc, [target, exts]) => {
    exts.forEach(ext => acc[ext] = `.${target}`);
    return acc;
}, {} as Record<string, string>);

export default definePlugin({
    name: "FixFileExtensions",
    authors: [Devs.thororen, PcDevs.MutanPlex],
    description: "Fixes file extensions by renaming them to a compatible supported format if possible",
    reporterTestable: ReporterTestable.None,

    get displayDescription() {
        return t("plugin.fixFileExtensions.description");
    },

    patches: [
        // Taken from AnonymiseFileNames
        {
            find: "async uploadFiles(",
            replacement: [
                {
                    match: /async uploadFiles\((\i)\){/,
                    replace: "$&$1.forEach($self.fixExt);"
                }
            ],
            predicate: () => !Settings.plugins.AnonymiseFileNames.enabled,
        },
    ],
    fixExt(upload: CloudUpload) {
        const file = upload.filename;
        const tarMatch = tarExtMatcher.exec(file);
        const extIdx = tarMatch?.index ?? file.lastIndexOf(".");
        const fileName = extIdx !== -1 ? file.substring(0, extIdx) : "";
        const ext = extIdx !== -1 ? file.slice(extIdx) : "";
        const newExt = reverseExtensionMap[ext] || ext;

        upload.filename = fileName + newExt;
    },
});
