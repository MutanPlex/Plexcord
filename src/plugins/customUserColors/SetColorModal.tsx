/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2025 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { set } from "@api/DataStore";
import { t } from "@api/i18n";
import { classNameFactory } from "@api/Styles";
import { Margins } from "@utils/margins";
import { ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalProps, ModalRoot } from "@utils/modal";
import { Button, ColorPicker, Forms, useState } from "@webpack/common";

import { colors, DATASTORE_KEY } from "./index";

const cl = classNameFactory("pc-customColors-");

export function SetColorModal({ id, modalProps }: { id: string, modalProps: ModalProps; }) {
    const initialColor = parseInt(colors[id], 16) || 372735;
    // color picker default to current color set for user (if null it's 0x05afff :3 )

    const [colorPickerColor, setColorPickerColor] = useState(initialColor);
    // hex color code as an int (NOT rgb 0-255)


    function setUserColor(color: number) {
        setColorPickerColor(color);
    }

    function handleKey(e: KeyboardEvent) {
        if (e.key === "Enter")
            saveUserColor();
    }

    async function saveUserColor() {
        colors[id] = colorPickerColor.toString(16).padStart(6, "0");
        await set(DATASTORE_KEY, colors);
        modalProps.onClose();
    }

    async function deleteUserColor() {
        delete colors[id];
        await set(DATASTORE_KEY, colors);
        modalProps.onClose();
    }

    return (
        <ModalRoot {...modalProps}>
            <ModalHeader className={cl("modal-header")}>
                <Forms.FormTitle tag="h2">
                    {t("plugin.customUserColors.modal.custom")}
                </Forms.FormTitle>
                <ModalCloseButton onClick={modalProps.onClose} />
            </ModalHeader>
            <ModalContent className={cl("modal-content")} onKeyDown={handleKey}>
                <section className={Margins.bottom16}>
                    <Forms.FormTitle tag="h3">
                        {t("plugin.customUserColors.modal.pick")}
                    </Forms.FormTitle>
                    <ColorPicker
                        color={colorPickerColor}
                        onChange={setUserColor}
                        showEyeDropper={false}
                    />
                </section>
            </ModalContent>

            <ModalFooter className={cl("modal-footer")}>
                <Button
                    color={Button.Colors.RED}
                    onClick={deleteUserColor}
                >
                    {t("plugin.customUserColors.modal.delete")}
                </Button>
                <Button
                    color={Button.Colors.BRAND}
                    onClick={saveUserColor}
                >
                    {t("plugin.customUserColors.modal.save")}
                </Button>
            </ModalFooter>
        </ModalRoot>
    );
}
