/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2024 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { plugin, t } from "@api/i18n";
import { CopyIcon, DeleteIcon, IDIcon, LinkIcon, OpenExternalIcon } from "@components/Icons";
import { Channel, ChannelMessage, messageClasses, MessageType } from "@plugins/holyNotes";
import noteHandler from "@plugins/holyNotes/NoteHandler";
import { HolyNotes } from "@plugins/holyNotes/types";
import { copyToClipboard } from "@utils/clipboard";
import { fetchUserProfile } from "@utils/discord";
import { proxyLazy } from "@utils/lazy";
import { classes } from "@utils/misc";
import { ModalProps } from "@utils/modal";
import { ContextMenuApi, FluxDispatcher, Menu, NavigationRouter, React, useEffect, UserStore } from "@webpack/common";

const UserRecord = proxyLazy(() => UserStore.getCurrentUser().constructor) as any;

export const RenderMessage = ({
    note,
    notebook,
    updateParent,
    fromDeleteModal,
    closeModal,
}: {
    note: HolyNotes.Note;
    notebook: string;
    updateParent?: () => void;
    fromDeleteModal: boolean;
    closeModal?: () => void;
}) => {
    const isHoldingDeleteRef = React.useRef(false);
    const [, forceUpdate] = React.useReducer(x => x + 1, 0);

    useEffect(() => {
        const user = UserStore.getUser(note.author.id);
        if (!user) {
            fetchUserProfile(note.author.id);
        }
    }, [note.author.id]);

    const author = UserStore.getUser(note.author.id) ?? note.author;

    useEffect(() => {
        const deleteHandler = (e: KeyboardEvent) => {
            if (e.key.toLowerCase() !== "delete") return;
            const newState = e.type === "keydown";
            if (isHoldingDeleteRef.current !== newState) {
                isHoldingDeleteRef.current = newState;
                forceUpdate();
            }
        };

        document.addEventListener("keydown", deleteHandler);
        document.addEventListener("keyup", deleteHandler);

        return () => {
            document.removeEventListener("keydown", deleteHandler);
            document.removeEventListener("keyup", deleteHandler);
        };
    }, []);

    return (
        <div
            className="pc-holy-note"
            style={{
                marginBottom: "8px",
                marginTop: "8px",
                paddingTop: "4px",
                paddingBottom: "4px",
            }}
            onClick={() => {
                if (isHoldingDeleteRef.current && !fromDeleteModal) {
                    noteHandler.deleteNote(note.id, notebook);
                    updateParent?.();
                }
            }}
            onContextMenu={(event: any) => {
                if (!fromDeleteModal)
                    // @ts-ignore
                    return ContextMenuApi.openContextMenu(event, (props: any) => (
                        // @ts-ignore
                        <NoteContextMenu
                            {...Object.assign({}, props, { onClose: close })}
                            note={note}
                            notebook={notebook}
                            updateParent={updateParent}
                            closeModal={closeModal}
                        />
                    ));
            }}
        >
            <ChannelMessage
                className={classes("pc-holy-render", messageClasses?.message, messageClasses?.groupStart, messageClasses?.cozyMessage)}
                key={note.id}
                groupId={note.id}
                id={note.id}
                compact={false}
                isHighlight={false}
                isLastItem={false}
                renderContentOnly={false}
                // @ts-ignore
                channel={new Channel({ id: "holy-notes" })}
                message={
                    new MessageType(
                        Object.assign(
                            { ...note },
                            {
                                author: new UserRecord({ ...author, bot: true }),
                                timestamp: new Date(note?.timestamp),
                                // @ts-ignore
                                embeds: note?.embeds?.map((embed: { timestamp: string | number | Date; }) =>
                                    embed.timestamp
                                        ? Object.assign(embed, {
                                            timestamp: new Date(embed.timestamp),
                                        })
                                        : embed,
                                ),
                            },
                        ),
                    )
                }
            />

        </div>
    );
};

const NoteContextMenu = (
    props: ModalProps & {
        updateParent?: () => void;
        notebook: string;
        note: HolyNotes.Note;
        closeModal?: () => void;
    }) => {
    const { note, notebook, updateParent, closeModal } = props;

    return (
        <Menu.Menu
            navId="holynotes"
            onClose={() => FluxDispatcher.dispatch({ type: "CONTEXT_MENU_CLOSE" })}
            aria-label="Holy Notes"
        >
            <Menu.MenuItem
                label={t(plugin.holyNotes.modal.help.jumpToMessage)}
                id="jump"
                action={() => {
                    NavigationRouter.transitionTo(`/channels/${note.guild_id ?? "@me"}/${note.channel_id}/${note.id}`);
                    closeModal?.();
                }}
                icon={OpenExternalIcon}
            />
            <Menu.MenuItem
                label={t(plugin.holyNotes.button.copyText)}
                id="copy-text"
                action={() => copyToClipboard(note.content)}
                icon={CopyIcon}
            />
            {note?.attachments.length ? (
                <Menu.MenuItem
                    label={t(plugin.holyNotes.button.copyAttachment)}
                    id="copy-url"
                    action={() => copyToClipboard(note.attachments[0].url)}
                    icon={LinkIcon}
                />) : null}
            <Menu.MenuItem
                label={t(plugin.holyNotes.button.copyId)}
                id="copy-id"
                action={() => copyToClipboard(note.id)}
                icon={IDIcon}
            />
            {Object.keys(noteHandler.getAllNotes()).length !== 1 ? (
                <Menu.MenuItem
                    label={t(plugin.holyNotes.button.moveNote)}
                    id="move-note"
                >
                    {Object.keys(noteHandler.getAllNotes()).map((key: string) => {
                        if (key !== notebook) {
                            return (
                                <Menu.MenuItem
                                    key={key}
                                    label={t(plugin.holyNotes.button.moveTo, { key })}
                                    id={key}
                                    action={() => {
                                        noteHandler.moveNote(note, notebook, key);
                                        updateParent?.();
                                    }}
                                />
                            );
                        }
                    })}
                </Menu.MenuItem>
            ) : null}
            <Menu.MenuItem
                color="danger"
                label={t(plugin.holyNotes.button.deleteNote)}
                id="delete"
                action={() => {
                    noteHandler.deleteNote(note.id, notebook);
                    updateParent?.();
                }}
                icon={DeleteIcon}
            />
        </Menu.Menu>
    );

};
