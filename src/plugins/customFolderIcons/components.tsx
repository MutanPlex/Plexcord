/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2024 sadan
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { t } from "@api/i18n";
import { closeModal, ModalContent, ModalHeader, ModalRoot, openModalLazy } from "@utils/modal";
import { Button, Menu, Slider, TextInput, useState } from "@webpack/common";

import { folderIconsData, settings } from "./settings";
import { folderProp, int2rgba, setFolderData } from "./util";

export function ImageModal(folderProps: folderProp) {
    const [data, setData] = useState(((settings.store.folderIcons ?? {}) as folderIconsData)[folderProps.folderId]?.url ?? "");
    const [size, setSize] = useState(100);
    return (
        <>
            <TextInput
                // this looks like a horrorshow
                defaultValue={data}
                onChange={(val, _n) => {
                    setData(val);
                }}
                placeholder="https://example.com/image.png"
            >
            </TextInput>
            <RenderPreview folderProps={folderProps} url={data} size={size} />
            {data && <>
                <div style={{
                    color: "#FFF"
                }}>{t("plugin.customFolderIcons.modal.change")}</div>
                <Slider
                    initialValue={100}
                    onValueChange={(v: number) => {
                        setSize(v);
                    }}
                    maxValue={200}
                    minValue={25}
                    // [25, 200]
                    markers={Array.apply(0, Array(176)).map((_, i) => i + 25)}
                    stickToMarkers={true}
                    keyboardStep={1}
                    renderMarker={() => null} />
            </>}
            <div style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "20px"
            }}>
                <Button onClick={() => {
                    setFolderData(folderProps, {
                        url: data,
                        size: size
                    });
                    closeModal("custom-folder-icon");
                }}
                >
                    {t("plugin.customFolderIcons.modal.save")}
                </Button>
                <Button onClick={() => {
                    // INFO: unset button
                    const folderSettings = settings.store.folderIcons as folderIconsData;
                    if (folderSettings[folderProps.folderId]) {
                        folderSettings[folderProps.folderId] = null;
                    }
                    closeModal("custom-folder-icon");
                }}>
                    {t("plugin.customFolderIcons.modal.unset")}
                </Button>
            </div>
        </>
    );
}
export function RenderPreview({ folderProps, url, size }: { folderProps: folderProp; url: string; size: number; }) {
    if (!url) return null;
    return (
        <div className="test1234" style={{
            width: "20vh",
            height: "20vh",
            overflow: "hidden",
            margin: "20px auto",
            // 16/48
            borderRadius: "33%",
            backgroundColor: int2rgba(folderProps.folderColor, 0.4),
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
        }}>
            <img alt="" src={url} width={`${size}%`} height={`${size}%`} />
        </div>
    );
}

export function makeContextItem(a: folderProp) {
    return (
        <Menu.MenuItem
            id="custom-folder-icons"
            key="custom-folder-icons"
            label="Change Icon"
            action={() => {
                openModalLazy(async () => {
                    return props => (
                        <ModalRoot {...props}>
                            <ModalHeader >
                                <div style={{
                                    color: "white"
                                }}>
                                    {t("plugin.customFolderIcons.modal.set")}
                                </div>
                            </ModalHeader>
                            <ModalContent>
                                <ImageModal folderId={a.folderId} folderColor={a.folderColor} />
                            </ModalContent>
                            <div style={{
                                color: "white",
                                margin: "24px",
                            }}>
                                {t("plugin.customFolderIcons.modal.hover")}
                            </div>
                        </ModalRoot>
                    );
                },
                    {
                        modalKey: "custom-folder-icon"
                    });
            }} />
    );
}
