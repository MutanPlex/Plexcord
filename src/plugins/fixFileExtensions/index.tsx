/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2024 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { Upload } from "@api/MessageEvents";
import { Settings } from "@api/Settings";
import { PcDevs } from "@utils/constants";
import definePlugin, { ReporterTestable } from "@utils/types";
import { tarExtMatcher } from "plugins/anonymiseFileNames";

const extensionMap = {
    "ogg": [".ogv", ".oga", ".ogx", ".ogm", ".spx", ".opus"],
    "jpg": [".jpg", ".jpeg", ".jfif", ".jpe", ".jif", ".jfi", ".pjpeg", ".pjp"],
    "svg": [".svgz"],
    "mp4": [".m4v", ".m4r", ".m4p"],
    "m4a": [".m4b"],
    "mov": [".movie", ".qt"],
};

export const reverseExtensionMap = Object.entries(extensionMap).reduce((acc, [target, exts]) => {
    exts.forEach(ext => acc[ext] = `.${target}`);
    return acc;
}, {} as Record<string, string>);

export default definePlugin({
    name: "FixFileExtensions",
    authors: [PcDevs.thororen, PcDevs.MutanPlex],
    description: "Fixes file extensions by renaming them to a compatible supported format if possible",
    reporterTestable: ReporterTestable.None,
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
    fixExt(upload: Upload) {
        const file = upload.filename;
        const tarMatch = tarExtMatcher.exec(file);
        const extIdx = tarMatch?.index ?? file.lastIndexOf(".");
        const fileName = extIdx !== -1 ? file.substring(0, extIdx) : "";
        const ext = extIdx !== -1 ? file.slice(extIdx) : "";
        const newExt = reverseExtensionMap[ext] || ext;

        return fileName + newExt;
    },
});
