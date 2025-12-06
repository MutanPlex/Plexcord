/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2023 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { plugin, t } from "@api/i18n";
import { BaseText } from "@components/BaseText";
import { Button } from "@components/Button";
import ErrorBoundary from "@components/ErrorBoundary";
import { Flex } from "@components/Flex";
import { Paragraph } from "@components/Paragraph";
import { User } from "@plexcord/discord-types";
import settings from "@plugins/soundBoardLogger/settings";
import { clearLoggedSounds, getLoggedSounds } from "@plugins/soundBoardLogger/store";
import { addListener, AvatarStyles, cl, downloadAudio, getEmojiUrl, playSound, removeListener, SoundLogEntry, UserSummaryItem } from "@plugins/soundBoardLogger/utils";
import { copyWithToast } from "@utils/discord";
import { Margins } from "@utils/margins";
import { classes } from "@utils/misc";
import { closeModal, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalRoot, ModalSize, openModal } from "@utils/modal";
import { Clickable, Tooltip, useCallback, useEffect, useMemo, UserUtils, useState } from "@webpack/common";

import { openMoreUsersModal } from "./MoreUsersModal";
import { openUserModal } from "./UserModal";

export async function openSoundBoardLog(): Promise<void> {
    // Open modal first with loading state, then load data
    const key = openModal(props => <ErrorBoundary>
        <ModalRoot {...props} size={ModalSize.LARGE}>
            <SoundBoardLogContainer closeModal={() => closeModal(key)} />
        </ModalRoot>
    </ErrorBoundary>);
}

// New container component to handle async data loading
function SoundBoardLogContainer({ closeModal }) {
    const [data, setData] = useState<SoundLogEntry[] | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadData = async () => {
            try {
                const sounds = await getLoggedSounds();
                setData(sounds);
            } catch (error) {
                console.error("Failed to load sound board logs:", error);
                setData([]);
            } finally {
                setLoading(false);
            }
        };
        loadData();
    }, []);

    if (loading) {
        return (
            <>
                <ModalHeader className={cl("modal-header")}>
                    <BaseText size="lg" weight="semibold" style={{ flexGrow: 1 }}>{t(plugin.soundBoardLogger.modal.title)}</BaseText>
                    <ModalCloseButton onClick={closeModal} />
                </ModalHeader>
                <ModalContent className={classes(cl("modal-content"), Margins.top8)}>
                    <div style={{ textAlign: "center", padding: "2rem" }}>
                        <BaseText size="sm" weight="medium" style={{ color: "var(--text-muted)" }}>
                            {t(plugin.soundBoardLogger.modal.loading)}
                        </BaseText>
                    </div>
                </ModalContent>
            </>
        );
    }

    return <SoundBoardLog data={data} closeModal={closeModal} />;
}

// Optimized individual sound item component
const SoundItem = ({ item, itemUsers, avatarsMax, onClickUser, renderMoreUsers }) => {
    const handleDownload = useCallback(() => downloadAudio(item.soundId), [item.soundId]);
    const handleCopyId = useCallback(() => copyWithToast(item.soundId, t(plugin.soundBoardLogger.modal.copied)), [item.soundId]);
    const handlePlaySound = useCallback(() => playSound(item.soundId), [item.soundId]);

    return (
        <div
            key={item.soundId}
            className={cl("sound")}
        >
            <Flex flexDirection="row" className={cl("sound-info")}>
                <img
                    src={getEmojiUrl(item.emoji)}
                    className={cl("sound-emoji")}
                />
                <Paragraph size="xs" weight="medium" className={cl("sound-id")}>{item.soundId}</Paragraph>
            </Flex>
            <UserSummaryItem
                users={itemUsers.slice(0, avatarsMax)}
                count={item.users.length - 1}
                guildId={undefined}
                renderIcon={false}
                max={avatarsMax}
                showDefaultAvatarsForNullUsers
                showUserPopout
                renderMoreUsers={() => renderMoreUsers(item, itemUsers)}
                className={cl("sound-users")}
                renderUser={(user: User) => (
                    <Clickable
                        className={AvatarStyles.clickableAvatar}
                        onClick={() => onClickUser(item, user)}
                    >
                        <img
                            className={AvatarStyles.avatar}
                            src={user.getAvatarURL(void 0, 80, true)}
                            alt={user.username}
                            title={user.username}
                        />
                    </Clickable>
                )}
            />
            <Flex flexDirection="row" className={cl("sound-buttons")}>
                <Button variant="secondary" size="small" onClick={handleDownload}>{t(plugin.soundBoardLogger.modal.download)}</Button>
                <Button variant="positive" size="small" onClick={handleCopyId}>{t(plugin.soundBoardLogger.modal.copyId)}</Button>
                <Tooltip text={`${t(plugin.soundBoardLogger.modal.volume)}: ${Math.floor(settings.store.soundVolume * 100)}%`}>
                    {({ onMouseEnter, onMouseLeave }) =>
                        <Button variant="primary" size="small" onClick={handlePlaySound} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>{t(plugin.soundBoardLogger.modal.playSound)}</Button>
                    }
                </Tooltip>
            </Flex>
        </div>
    );
};

export default function SoundBoardLog({ data, closeModal }) {
    const [sounds, setSounds] = useState(data);
    const [users, setUsers] = useState<User[]>([]);
    const [loadingUsers, setLoadingUsers] = useState(false);

    const update = useCallback(async () => {
        const newSounds = await getLoggedSounds();
        setSounds(newSounds);
    }, []);

    // Update the sounds state when a new sound is played
    useEffect(() => {
        const onSound = () => update();
        addListener(onSound);
        return () => removeListener(onSound);
    }, [update]);

    const avatarsMax = 2;

    // Update the users state when a new sound is played - optimized with batch loading
    useEffect(() => {
        if (loadingUsers || !sounds?.length) return;

        (async () => {
            setLoadingUsers(true);

            const existingUserIds = new Set(users.map(user => user.id));
            const missing = sounds
                .flatMap(sound => sound.users)
                .map(user => user.id)
                .filter((id, index, self) => index === self.indexOf(id))
                .filter(id => !existingUserIds.has(id));

            if (!missing.length) {
                setLoadingUsers(false);
                return;
            }

            // Load users in smaller batches to improve performance
            const batchSize = 5;
            for (let i = 0; i < missing.length; i += batchSize) {
                const batch = missing.slice(i, i + batchSize);
                const userPromises = batch.map(id =>
                    UserUtils.getUser(id).catch(() => null)
                );

                const results = await Promise.allSettled(userPromises);
                const newUsers = results
                    .filter((result): result is PromiseFulfilledResult<User> =>
                        result.status === "fulfilled" && result.value !== null
                    )
                    .map(result => result.value);

                if (newUsers.length > 0) {
                    setUsers(u => [...u, ...newUsers]);
                }

                // Small delay between batches to prevent blocking
                if (i + batchSize < missing.length) {
                    await new Promise(resolve => setTimeout(resolve, 10));
                }
            }

            setLoadingUsers(false);
        })();
    }, [sounds, loadingUsers, users]);

    const renderMoreUsers = useCallback((item, itemUsers) => {
        return (
            <Clickable
                className={AvatarStyles.clickableAvatar}
                onClick={() => onClickShowMoreUsers(item, itemUsers)}
            >
                <Tooltip text={`${itemUsers.length - avatarsMax} ${t(plugin.soundBoardLogger.modal.moreUsers)}`}>
                    {({ onMouseEnter, onMouseLeave }) => (
                        <div
                            className={AvatarStyles.moreUsers}
                            onMouseEnter={onMouseEnter}
                            onMouseLeave={onMouseLeave}
                        >
                            +{itemUsers.length - avatarsMax}
                        </div>
                    )}
                </Tooltip>
            </Clickable>
        );
    }, [avatarsMax]);

    const onClickShowMoreUsers = useCallback((item: SoundLogEntry, users: User[]) => {
        openMoreUsersModal(item, users, onClickUser);
    }, []);

    const onClickUser = useCallback((item: SoundLogEntry, user: User) => {
        openUserModal(item, user, sounds);
    }, [sounds]);

    // Memoize user mapping to avoid recalculating on every render
    const userMap = useMemo(() => {
        const map = new Map<string, User>();
        users.forEach(user => map.set(user.id, user));
        return map;
    }, [users]);

    // Memoize rendered sounds with virtual scrolling consideration
    const renderedSounds = useMemo(() => {
        if (!sounds?.length) return [];

        // Sort sounds by most recent play time
        const sortedSounds = [...sounds].sort((a, b) => {
            const aLatestPlay = Math.max(...a.users.flatMap(user => user.plays));
            const bLatestPlay = Math.max(...b.users.flatMap(user => user.plays));
            return bLatestPlay - aLatestPlay;
        });

        return sortedSounds.map(item => {
            const itemUsers = item.users
                .map(u => userMap.get(u.id))
                .filter((user): user is User => user !== undefined);

            return (
                <SoundItem
                    key={item.soundId}
                    item={item}
                    itemUsers={itemUsers}
                    avatarsMax={avatarsMax}
                    onClickUser={onClickUser}
                    renderMoreUsers={renderMoreUsers}
                />
            );
        });
    }, [sounds, userMap, avatarsMax, onClickUser, renderMoreUsers]);

    const handleClearLogs = useCallback(async () => {
        await clearLoggedSounds();
        update();
    }, [update]);

    return (
        <>
            <ModalHeader className={cl("modal-header")}>
                <BaseText size="lg" weight="semibold" style={{ flexGrow: 1 }}>{t(plugin.soundBoardLogger.modal.title)}</BaseText>
                <ModalCloseButton onClick={closeModal} />
            </ModalHeader>
            <ModalContent className={classes(cl("modal-content"), Margins.top8)}>
                {sounds?.length ? renderedSounds :
                    <div style={{ textAlign: "center" }} className={Margins.top16}>
                        <img
                            src="https://raw.githubusercontent.com/fres621/assets/main/shiggy.png"
                            height="200px"
                        />
                        <Paragraph size="sm" weight="medium" style={{ color: "var(--text-muted)" }} className={Margins.bottom16}>
                            {t(plugin.soundBoardLogger.modal.noLogs)}
                        </Paragraph>
                    </div>
                }
            </ModalContent>
            <ModalFooter className={cl("modal-footer")}>
                <Button variant="dangerPrimary" onClick={handleClearLogs}>
                    {t(plugin.soundBoardLogger.modal.clearLogs)}
                </Button>
            </ModalFooter>
        </>
    );
}
