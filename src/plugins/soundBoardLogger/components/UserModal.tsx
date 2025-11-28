/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2023 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { t } from "@api/i18n";
import { BaseText } from "@components/BaseText";
import { Flex } from "@components/Flex";
import { Heading } from "@components/Heading";
import { CopyIcon } from "@components/Icons";
import { AvatarStyles, cl, downloadAudio, getEmojiUrl, playSound, SoundLogEntry, User, UserSummaryItem } from "@plugins/soundBoardLogger/utils";
import { copyWithToast, openUserProfile } from "@utils/discord";
import { Margins } from "@utils/margins";
import { classes } from "@utils/misc";
import { closeModal, ModalContent, ModalRoot, openModal } from "@utils/modal";
import { Clickable, Timestamp } from "@webpack/common";
import moment from "moment";

import { DownloadIcon, IconWithTooltip, PlayIcon } from "./Icons";

export function openUserModal(item, user, sounds) {
    const key = openModal(props =>
        <ModalRoot {...props}>
            <UserModal item={item} user={user} sounds={sounds} closeModal={() => closeModal(key)} />
        </ModalRoot>
    );
}

export default function UserModal({ item, user, sounds, closeModal }: { item: SoundLogEntry, user: User, sounds: SoundLogEntry[], closeModal: Function; }) {
    const currentUser = item.users.find(({ id }) => id === user.id) ?? { id: "", plays: [0] };
    const soundsDoneByCurrentUser = sounds.filter(sound => sound.users.some(itemUser => itemUser.id === user.id) && sound.soundId !== item.soundId);

    return (
        <ModalContent className={cl("user")}>
            <Clickable onClick={() => {
                closeModal();
                openUserProfile(user.id);
            }}>
                <div className={cl("user-header")}>
                    <img
                        className={cl("user-avatar")}
                        src={user.getAvatarURL(void 0, 512, true)}
                        alt=""
                        style={{ cursor: "pointer" }}
                    />
                    <Heading className={cl("user-name")} style={{ textTransform: "none", cursor: "pointer" }}>{user.username}</Heading>
                </div>
            </Clickable>
            <Flex flexDirection="row" style={{ gap: "10px" }}>
                <img
                    className={cl("user-sound-emoji")}
                    src={getEmojiUrl(item.emoji)}
                    alt=""
                />
                <Flex justifyContent="space-between" flexDirection="column" style={{ gap: "7px", height: "68px" }}>
                    <BaseText size="md" weight="bold" style={{ height: "20px" }}>{item.soundId}</BaseText>
                    <BaseText size="md" weight="normal">{t("plugin.soundBoardLogger.modal.played", { time: currentUser.plays.length, s: currentUser.plays.length === 1 ? "" : "s" })}</BaseText>
                    <BaseText size="md" weight="normal">{t("plugin.soundBoardLogger.modal.last")} <Timestamp timestamp={new Date(moment(currentUser.plays.at(-1)).toDate())} /></BaseText>
                </Flex>
            </Flex>
            <div className={classes(cl("also-played"), Margins.bottom8)}>
                <BaseText size="lg" weight="semibold" tag="h2">
                    {soundsDoneByCurrentUser.length ? t("plugin.soundBoardLogger.modal.also") : " "}
                </BaseText>
                <Flex justifyContent="space-between">
                    <UserSummaryItem
                        users={soundsDoneByCurrentUser}
                        count={soundsDoneByCurrentUser.length}
                        guildId={undefined}
                        renderIcon={false}
                        max={10}
                        showDefaultAvatarsForNullUsers
                        showUserPopout
                        renderMoreUsers={() =>
                            <div className={AvatarStyles.emptyUser}>
                                <div className={AvatarStyles.moreUsers}>
                                    ...
                                </div>
                            </div>
                        }
                        className={cl("user-sounds")}
                        renderUser={({ soundId, emoji }) => (
                            <Clickable
                                className={AvatarStyles.clickableAvatar}
                                onClick={() => {
                                    closeModal();
                                    openUserModal(sounds.find(sound => sound.soundId === soundId), user, sounds);
                                }}
                            >
                                <img
                                    className={AvatarStyles.avatar}
                                    src={getEmojiUrl(emoji)}
                                    alt={soundId}
                                    title={soundId}
                                />
                            </Clickable>
                        )}
                    />
                    <div className={cl("user-buttons")}>
                        <IconWithTooltip text={t("plugin.soundBoardLogger.modal.download")} icon={<DownloadIcon />} onClick={() => downloadAudio(item.soundId)} />
                        <IconWithTooltip text={t("plugin.soundBoardLogger.modal.copyId")} icon={<CopyIcon />} onClick={() => copyWithToast(item.soundId, t("plugin.soundBoardLogger.modal.copied"))} />
                        <IconWithTooltip text={t("plugin.soundBoardLogger.modal.playSound")} icon={<PlayIcon />} onClick={() => playSound(item.soundId)} />
                    </div>
                </Flex>
            </div>
        </ModalContent>
    );
}
