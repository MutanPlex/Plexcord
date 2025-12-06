/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2025 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { plugin, t } from "@api/i18n";
import { BaseText } from "@components/BaseText";
import { Button } from "@components/Button";
import { ModalContent, ModalHeader, ModalProps, ModalRoot, ModalSize } from "@utils/modal";
import { TextInput, useState } from "@webpack/common";

interface Props {
    props: ModalProps;
    onSelect: (url: string) => void;
    initialUrl: string | undefined;
}

export function SetWallpaperModal({ props, onSelect, initialUrl }: Props) {
    const [url, setUrl] = useState(initialUrl ?? "");

    return (
        <ModalRoot {...props} size={ModalSize.SMALL}>
            <ModalHeader>
                <BaseText size="lg" weight="normal" style={{ marginBottom: 8 }}>
                    {t(plugin.wallpaperFree.modal.set)}
                </BaseText>
            </ModalHeader>
            <ModalContent>
                <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                    <BaseText>{t(plugin.wallpaperFree.modal.image)}</BaseText>
                    <TextInput
                        value={url}
                        onChange={u => {
                            setUrl(u);
                        }}
                        autoFocus
                    />
                    {url && (
                        <img
                            alt=""
                            src={url}
                            style={{
                                display: "block",
                                width: "100%",
                                height: "auto",
                                objectFit: "cover",
                                borderRadius: 8
                            }}
                        />
                    )}
                    <div style={{ display: "flex", justifyContent: "flex-end", gap: 8 }}>
                        <Button onClick={props.onClose}>{t(plugin.wallpaperFree.modal.cancel)}</Button>
                        <Button
                            variant="secondary"
                            onClick={() => {
                                onSelect(url);
                                props.onClose();
                            }}
                            disabled={!url}
                        >{t(plugin.wallpaperFree.modal.apply)}</Button>
                    </div>
                </div>
            </ModalContent>
        </ModalRoot >
    );
}
