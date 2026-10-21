/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2024 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { plugin, t } from "@api/i18n";
import { RenderModalProps } from "@plexcord/discord-types";
import { Modal } from "@webpack/common";

import { sendRemix } from ".";
import { brushCanvas, canvas, cropCanvas, ctx, exportImg, shapeCanvas } from "./editor/components/Canvas";
import { Editor } from "./editor/Editor";
import { resetBounds } from "./editor/tools/crop";
import { SendIcon } from "./icons/SendIcon";

type Props = {
    modalProps: RenderModalProps;
    close: () => void;
    url?: string;
};

function reset() {
    resetBounds();

    if (!ctx || !canvas) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    brushCanvas.clearRect(0, 0, canvas.width, canvas.height);
    shapeCanvas.clearRect(0, 0, canvas.width, canvas.height);
    cropCanvas.clearRect(0, 0, canvas.width, canvas.height);
}

async function closeModal(closeFunc: () => void, save?: boolean) {
    if (save) sendRemix(await exportImg());
    reset();
    closeFunc();
}

export default function RemixModal({ modalProps, close, url }: Props) {
    return (
        <Modal
            {...modalProps}
            size="lg"
            title={t(plugin.remix.label)}
            actions={[
                {
                    text: (
                        <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                            <SendIcon /> {t(plugin.remix.button.send)}
                        </span>
                    ) as any,
                    variant: "primary",
                    onClick: () => closeModal(close, true)
                },
                {
                    text: t(plugin.remix.button.close),
                    variant: "critical-primary",
                    onClick: () => closeModal(close)
                }
            ]}
        >
            <Editor url={url} />
        </Modal>
    );
}
