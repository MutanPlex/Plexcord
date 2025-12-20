/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2024 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { plugin, t } from "@api/i18n";
import { BaseText } from "@components/BaseText";
import { Button } from "@components/Button";
import { Heading } from "@components/Heading";
import { Guild } from "@plexcord/discord-types";
import { HiddenServersStore } from "@plugins/hideServers/HiddenServersStore";
import { classNameFactory } from "@utils/css";
import { getGuildAcronym } from "@utils/discord";
import { classes } from "@utils/misc";
import {
    closeModal,
    ModalCloseButton,
    ModalContent,
    ModalHeader,
    ModalProps,
    ModalRoot,
    ModalSize,
    openModal,
} from "@utils/modal";
import { findByPropsLazy } from "@webpack";
import { IconUtils, useStateFromStores } from "@webpack/common";

import { SortedGuildStore } from "..";

const cl = classNameFactory("pc-hideservers-");
const IconClasses = findByPropsLazy("icon", "acronym", "childWrapper");

function HiddenServersModal({ modalProps, close }: { modalProps: ModalProps; close(): void; }) {
    const guilds = useStateFromStores([HiddenServersStore], () => HiddenServersStore.hiddenGuildsDetail());
    return (
        <ModalRoot {...modalProps} size={ModalSize.LARGE}>
            <ModalHeader>
                <BaseText size="lg" weight="semibold" style={{ flexGrow: 1 }}>
                    {t(plugin.hideServers.button.hiddenServers)}
                </BaseText>
                <ModalCloseButton onClick={close} />
            </ModalHeader>

            <ModalContent>
                <HiddenServersMenu guilds={guilds} />
            </ModalContent>
        </ModalRoot>
    );
}
function isGuildHidden(guild: Guild, SortedGuildStore: any) {
    const folder = SortedGuildStore.getGuildFolders().find((f: any) => f.guildIds.includes(guild.id));
    if (folder && HiddenServersStore.hiddenGuilds.has("folder-" + folder.folderId)) return true;
    return HiddenServersStore.hiddenGuilds.has(guild.id);
}

function getFolderForGuild(SortedGuildStore: any, guildId: string) {
    return SortedGuildStore.getGuildFolders()
        .filter((f: any) => f.folderId !== undefined)
        .find((f: any) => f.guildIds.includes(guildId));
}

function restoreGuild(guild: Guild, SortedGuildStore: any) {
    HiddenServersStore.removeHiddenGuild(guild.id);

    const folder = getFolderForGuild(SortedGuildStore, guild.id);
    if (!folder) return;

    HiddenServersStore.removeHiddenGuild("folder-" + folder.folderId);
}


function GuildRow({ guild }) {
    return (
        <div key={guild.id} className={cl("row")}>
            <div className={cl("guildicon")}>
                {guild.icon ? (
                    <img
                        alt=""
                        height="48"
                        width="48"
                        src={IconUtils.getGuildIconURL({
                            id: guild.id,
                            icon: guild.icon,
                            canAnimate: true,
                            size: 240,
                        })}
                    />
                ) : (
                    <div
                        aria-hidden
                        className={classes(IconClasses.childWrapper, IconClasses.acronym)}
                    >
                        {getGuildAcronym(guild)}
                    </div>
                )}
            </div>
            <Heading className={cl("name")}>
                {guild.name}
            </Heading>
            <Button
                className="row-button"
                variant="primary"
                onClick={() => restoreGuild(guild, SortedGuildStore)}
            >
                {t(plugin.hideServers.button.remove)}
            </Button>
        </div>
    );
}

export function HiddenServersMenu({ guilds }: { guilds: Guild[]; }) {
    const hiddenGuilds = guilds.filter(g => isGuildHidden(g, SortedGuildStore));
    const folders: Record<string, Guild[]> = {};
    const guildsWithoutFolder: Guild[] = [];

    hiddenGuilds.forEach(guild => {
        const folder = getFolderForGuild(SortedGuildStore, guild.id);
        if (folder) {
            if (!folders[folder.folderId]) folders[folder.folderId] = [];
            folders[folder.folderId].push(guild);
        } else {
            guildsWithoutFolder.push(guild);
        }
    });
    return <div className={cl("list")}>
        {Object.entries(folders).map(([folderId, folderGuilds]) => {
            const folder = SortedGuildStore.getGuildFolders().find(f => f.folderId === Number(folderId));
            if (!folder) return null;

            return (
                <div key={folderId} className={cl("folder")}>
                    <div className={cl("folder-header")}>
                        <BaseText size="sm" weight="medium">{folder.folderName || t(plugin.hideServers.button.folder)}</BaseText>
                        <Button
                            variant="primary"
                            onClick={() => {
                                folderGuilds.forEach(g => restoreGuild(g, SortedGuildStore));
                            }}
                            size="small"
                            className={cl("restore-all")}
                        >
                            {t(plugin.hideServers.button.removeAll)}
                        </Button>
                    </div>
                    {folderGuilds.map(guild => (
                        <GuildRow
                            key={guild.id}
                            guild={guild}
                        />
                    ))}
                </div>
            );
        })}

        <BaseText size="sm" weight="medium">{t(plugin.hideServers.button.guilds)}</BaseText>
        {guildsWithoutFolder.map(guild => (
            <GuildRow
                key={guild.id}
                guild={guild}
            />
        ))}

        {hiddenGuilds.length === 0 && <BaseText size="sm" weight="medium">{t(plugin.hideServers.button.noHiddenServers)}</BaseText>}
    </div>;
}

export function openHiddenServersModal() {
    const key = openModal(modalProps => {
        return (
            <HiddenServersModal
                modalProps={modalProps}
                close={() => closeModal(key)}
            />
        );
    });
}
