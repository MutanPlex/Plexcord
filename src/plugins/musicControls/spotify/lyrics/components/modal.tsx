/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2024 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { t } from "@api/i18n";
import { BaseText } from "@components/BaseText";
import { SpotifyStore, Track } from "@plugins/musicControls/spotify/SpotifyStore";
import { openImageModal } from "@utils/discord";
import { ModalContent, ModalHeader, ModalProps, ModalRoot } from "@utils/modal";
import { React } from "@webpack/common";

import { cl, NoteSvg, scrollClasses, useLyrics } from "./util";

const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
};

function ModalHeaderContent({ track }: { track: Track | null; }) {
    if (!track) {
        return (
            <ModalHeader>
                <BaseText size="sm" weight="semibold">{t("plugin.musicControls.modal.player.noPlaying")}</BaseText>
            </ModalHeader>
        );
    }
    return (
        <ModalHeader>
            <div className={cl("header-content")}>
                {track?.album?.image?.url && (
                    <img
                        src={track.album.image.url}
                        alt={track.album.name}
                        className={cl("album-image")}
                        onClick={() => openImageModal({
                            url: track.album.image.url,
                            width: track.album.image.width,
                            height: track.album.image.height,
                        })}
                    />
                )}
                <div>
                    <BaseText size="sm" weight="semibold">{track.name}</BaseText>
                    <BaseText size="sm">{t("plugin.musicControls.modal.player.artist")} {track.artists.map(a => a.name).join(", ")}</BaseText>
                    <BaseText size="sm">{t("plugin.musicControls.modal.player.album")} {track.album.name}</BaseText>
                </div>
            </div>
        </ModalHeader>
    );
}

const modalCurrentLine = cl("modal-line-current");
const modalLine = cl("modal-line");

export function LyricsModal({ props }: { props: ModalProps; }) {
    const { track, lyricsInfo, currLrcIndex } = useLyrics({ scroll: false });
    const currentLyrics = lyricsInfo?.lyricsVersions[lyricsInfo.useLyric];

    return (
        <ModalRoot {...props}>
            <ModalHeaderContent track={track} />
            <ModalContent>
                <div className={`${cl("lyrics-modal-container")} ${scrollClasses.auto}`}>
                    {currentLyrics ? (
                        currentLyrics.map((line, i) => (
                            <BaseText
                                key={i}
                                size={currLrcIndex === i ? "md" : "sm"}
                                weight={currLrcIndex === i ? "semibold" : "normal"}
                                className={currLrcIndex === i ? modalCurrentLine : modalLine}
                            >
                                <span className={cl("modal-timestamp")} onClick={() => SpotifyStore.seek(line.time * 1000)}>
                                    {formatTime(line.time)}
                                </span>
                                {line.text || NoteSvg()}
                            </BaseText>
                        ))
                    ) : (
                        <BaseText size="sm" weight="normal" className={cl("modal-no-lyrics")}>
                            {t("plugin.musicControls.modal.player.noLyrics")}
                        </BaseText>
                    )}
                </div>
            </ModalContent>
        </ModalRoot>
    );
}
