/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2024 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { t } from "@api/i18n";
import { BaseText } from "@components/BaseText";
import { Button } from "@components/Button";
import { ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalProps, ModalRoot, ModalSize } from "@utils/modal";

import { sendRemix } from ".";
import { brushCanvas, canvas, cropCanvas, ctx, exportImg, shapeCanvas } from "./editor/components/Canvas";
import { Editor } from "./editor/Editor";
import { resetBounds } from "./editor/tools/crop";
import { SendIcon } from "./icons/SendIcon";

type Props = {
    modalProps: ModalProps;
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
        <ModalRoot {...modalProps} size={ModalSize.LARGE}>
            <ModalHeader>
                <BaseText size="lg" weight="semibold" style={{ flexGrow: 1 }}>{t("plugin.remix.label")}</BaseText>
                <ModalCloseButton onClick={() => closeModal(close)} />
            </ModalHeader>
            <ModalContent>
                <Editor url={url} />
            </ModalContent>
            <ModalFooter className="pc-remix-modal-footer">
                <Button onClick={() => closeModal(close, true)} className="pc-remix-send"><SendIcon /> {t("plugin.remix.button.send")}</Button>
                <Button onClick={() => closeModal(close)} variant="dangerPrimary">{t("plugin.remix.button.close")}</Button>
            </ModalFooter>
        </ModalRoot>
    );
}
