/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2026 Vendicated and contributors
 * Copyright (c) 2026 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { plugin, t } from "@api/i18n";
import { BaseText } from "@components/BaseText";
import ErrorBoundary from "@components/ErrorBoundary";
import { Flex } from "@components/Flex";
import { PlusIcon } from "@components/Icons";
import { RenderModalProps } from "@plexcord/discord-types";
import { cl, logger } from "@plugins/songSpotlight.desktop/lib/utils";
import { Native } from "@plugins/songSpotlight.desktop/service";
import { parsers } from "@song-spotlight/api/handlers";
import { Song } from "@song-spotlight/api/structs";
import { Clickable, closeModal, Modal, openModal, TextInput, useState } from "@webpack/common";

interface AddSongModalProps {
    modalProps: RenderModalProps;
    close(): void;
    onAdd(song: Song): string | undefined;
}

function AddSongModal({ modalProps, close, onAdd }: AddSongModalProps) {
    const [url, setURL] = useState("");
    const [error, setError] = useState<string>();
    const [pending, setPending] = useState(false);

    return (
        <ErrorBoundary>
            <Modal
                {...modalProps}
                size="md"
                title={t(plugin.songSpotlight.text.addANewSong)}
                actions={[
                    {
                        text: t(plugin.songSpotlight.text.addSong),
                        variant: "primary",
                        disabled: !url || !!error || pending,
                        onClick: async () => {
                            setPending(true);
                            try {
                                const parsed = await Native.parseLink(url);
                                if (!parsed) {
                                    setError(t(plugin.songSpotlight.text.invalidLink));
                                    return setPending(false);
                                }

                                const result = onAdd(parsed);
                                if (result) {
                                    setError(result);
                                    return setPending(false);
                                }

                                close();
                            } catch (error) {
                                logger.error("parseLink error", error);

                                setError(t(plugin.songSpotlight.text.failedToParseLink));
                                setPending(false);
                            }
                        }
                    }
                ]}
            >
                <Flex flexDirection="column" gap="10px">
                    <BaseText size="md" weight="normal" className={cl("sub")}>
                        {t(plugin.songSpotlight.text.supportedServices)} <b>{parsers.map(x => x.label).join(", ")}</b>
                    </BaseText>
                    <TextInput
                        placeholder="https://open.spotify.com/..."
                        error={error}
                        onChange={value => {
                            setURL(value);
                            try {
                                if (value) new URL(value);
                                setError(undefined);
                            } catch {
                                setError(t(plugin.songSpotlight.text.invalidUrl));
                            }
                        }}
                    />
                </Flex>
            </Modal>
        </ErrorBoundary>
    );
}

interface AddSongProps {
    onAdd(song: Song): string | undefined;
}

export default function AddSong({ onAdd }: AddSongProps) {
    return (
        <Clickable
            onClick={() => {
                const key = openModal(modalProps => (
                    <AddSongModal
                        modalProps={modalProps}
                        close={() => closeModal(key)}
                        onAdd={onAdd}
                    />
                ));
            }}
        >
            <Flex alignItems="center" gap="12px" className={cl("editable-song", "add-song")}>
                <PlusIcon width={28} height={28} className={cl("icon")} />
                <Flex flexDirection="column" justifyContent="center" gap={0}>
                    <BaseText size="md" weight="medium">{t(plugin.songSpotlight.text.addSong)}</BaseText>
                </Flex>
            </Flex>
        </Clickable>
    );
}
