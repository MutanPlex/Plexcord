/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2024 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { plugin, t } from "@api/i18n";
import { findComponentByCodeLazy } from "@webpack";
import { useEffect, useState } from "@webpack/common";

import { Canvas } from "./components/Canvas";
import { Toolbar } from "./components/Toolbar";
import { imageToBlob, urlToImage } from "./utils/canvas";

const FileUpload = findComponentByCodeLazy(".currentTarget.files)", "lineClamp:1");

export const Editor = (props: { url?: string; }) => {
    const [file, setFile] = useState<File | undefined>(undefined);

    useEffect(() => {
        if (!props.url) return;

        urlToImage(props.url).then(img => {
            imageToBlob(img).then(blob => {
                setFile(new File([blob], "remix.png"));
            });
        });
    }, []);

    return (
        <div className="pc-remix-editor">
            {!file && <FileUpload
                filename={undefined}
                placeholder={t(plugin.remix.editor.choose)}
                buttonText={t(plugin.remix.editor.browse)}
                filters={[{ name: "Image", extensions: ["png", "jpeg"] }]}
                onFileSelect={(file: File) => setFile(file)}
            />}
            {file && (<>
                <Toolbar />
                <Canvas file={file!} />
            </>)}
        </div>
    );
};
