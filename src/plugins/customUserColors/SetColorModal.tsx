/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2025 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { set } from "@api/DataStore";
import { plugin, t } from "@api/i18n";
import { HeadingSecondary } from "@components/Heading";
import { RenderModalProps } from "@plexcord/discord-types";
import { classNameFactory } from "@utils/css";
import { Margins } from "@utils/margins";
import { ColorPicker, Modal, React, useState } from "@webpack/common";

import { colors, DATASTORE_KEY } from "./index";

const cl = classNameFactory("pc-customColors-");

export function SetColorModal({ id, modalProps }: { id: string, modalProps: RenderModalProps; }) {
    const initialColor = parseInt(colors[id], 16) || 372735;
    // color picker default to current color set for user (if null it's 0x05afff :3 )

    const [colorPickerColor, setColorPickerColor] = useState(initialColor);
    // hex color code as an int (NOT rgb 0-255)

    function setUserColor(color: number) {
        setColorPickerColor(color);
    }

    function handleKey(e: React.KeyboardEvent) {
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
        <Modal
            {...modalProps}
            size="sm"
            title={t(plugin.customUserColors.modal.custom)}
            actions={[
                {
                    text: t(plugin.customUserColors.modal.save),
                    variant: "primary",
                    onClick: saveUserColor
                },
                {
                    text: t(plugin.customUserColors.modal.delete),
                    variant: "critical-primary",
                    onClick: deleteUserColor
                }
            ]}
        >
            <div onKeyDown={handleKey} className={cl("modal-content")}>
                <section className={Margins.bottom16}>
                    <HeadingSecondary>
                        {t(plugin.customUserColors.modal.pick)}
                    </HeadingSecondary>
                    <ColorPicker
                        color={colorPickerColor}
                        onChange={setUserColor}
                        showEyeDropper={false}
                    />
                </section>
            </div>
        </Modal>
    );
}
