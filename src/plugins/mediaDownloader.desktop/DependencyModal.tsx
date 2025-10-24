/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2024 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { t } from "@api/i18n";
import { BaseText } from "@components/BaseText";
import { closeModal, ModalCloseButton, ModalContent, ModalHeader, ModalProps, ModalRoot, ModalSize } from "@utils/modal";
import { Button, useEffect, useState } from "@webpack/common";

export function DependencyModal({ props, options: { key, checkytdlp, checkffmpeg } }: {
    props: ModalProps;
    options: {
        key: string;
        checkytdlp: () => Promise<boolean>;
        checkffmpeg: () => Promise<boolean>;
    };
}) {
    const checking = <span>{t("plugin.mediaDownloader.modal.checking")}</span>;
    const installed = <span style={{ color: "green" }}>{t("plugin.mediaDownloader.modal.installed")}</span>;
    const notInstalled = (color: string) => <span style={{ color }}>{t("plugin.mediaDownloader.modal.notInstalled")}</span>;

    const [ytdlpStatus, setYtdlpStatus] = useState(checking);
    const [ffmpegStatus, setFfmpegStatus] = useState(checking);

    useEffect(() => {
        checkytdlp().then(v => v ? setYtdlpStatus(installed) : setYtdlpStatus(notInstalled("red")));
        checkffmpeg().then(v => v ? setFfmpegStatus(installed) : setFfmpegStatus(notInstalled("yellow")));
    }, []);

    return (
        <ModalRoot {...props} size={ModalSize.MEDIUM}>
            <ModalHeader>
                <BaseText size="lg" weight="semibold" style={{ flexGrow: 1 }}>{t("plugin.mediaDownloader.modal.title")}</BaseText>
                <ModalCloseButton onClick={() => closeModal(key)} />
            </ModalHeader>
            <ModalContent>
                <div style={{ padding: "16px 0" }}>
                    <BaseText size="md" weight="normal">
                        {t("plugin.mediaDownloader.modal.description.first")}
                        <br /><br />
                        {t("plugin.mediaDownloader.modal.description.second")}
                        <br /><br />
                        {t("plugin.mediaDownloader.modal.description.note")}
                        <br /><br />
                        <ul style={{ listStyleType: "disc", marginLeft: "1rem" }}>
                            <li>
                                <a href="https://github.com/yt-dlp/yt-dlp/wiki/Installation#windows" target="_blank" rel="noreferrer">{t("plugin.mediaDownloader.modal.ytDlpLink")}</a>
                            </li>
                            <li>
                                <a href="https://phoenixnap.com/kb/ffmpeg-windows" target="_blank" rel="noreferrer">{t("plugin.mediaDownloader.modal.ffmpegLink")}</a>
                            </li>
                        </ul>
                    </BaseText>
                    <div style={{
                        marginTop: "16px",
                        display: "grid",
                        gridTemplateColumns: "repeat(2, 1fr)",
                        gridTemplateRows: "repeat(2, 1fr)",
                        columnGap: "16px",
                        rowGap: "8px"
                    }}>
                        <div
                            style={{
                                gridArea: "1 / 1 / 2 / 2",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center"
                            }}
                        >
                            <BaseText size="md" weight="bold">
                                {t("plugin.mediaDownloader.modal.ytDlpStatus")}: {ytdlpStatus}
                            </BaseText>
                        </div>
                        <Button
                            onClick={async () => {
                                setYtdlpStatus(checking);
                                setYtdlpStatus(await checkytdlp()
                                    ? installed
                                    : notInstalled("red"));
                            }}
                            style={{ gridArea: "1 / 2 / 2 / 3" }}
                        >
                            {t("plugin.mediaDownloader.modal.checkAgain")}
                        </Button>
                        <div
                            style={{
                                gridArea: "2 / 1 / 3 / 2",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center"

                            }}
                        >
                            <BaseText size="md" weight="bold">
                                {t("plugin.mediaDownloader.modal.ffmpegStatus")}: {ffmpegStatus}
                            </BaseText>
                        </div>
                        <Button
                            onClick={async () => {
                                setFfmpegStatus(checking);
                                setFfmpegStatus(await checkffmpeg()
                                    ? installed
                                    : notInstalled("yellow"));
                            }}
                            style={{ gridArea: "2 / 2 / 3 / 3" }}
                        >
                            {t("plugin.mediaDownloader.modal.checkAgain")}
                        </Button>
                    </div>
                </div>
            </ModalContent>
        </ModalRoot>
    );
}
