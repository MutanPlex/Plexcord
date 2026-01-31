/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2024 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { plugin, t } from "@api/i18n";
import { CopyIcon, DeleteIcon, IDIcon, LinkIcon, OpenExternalIcon } from "@components/Icons";
import { ChannelMessage, ChannelRecord, messageClasses, MessageRecord } from "@plugins/holyNotes";
import noteHandler from "@plugins/holyNotes/NoteHandler";
import { Note } from "@plugins/holyNotes/types";
import { copyToClipboard } from "@utils/clipboard";
import { fetchUserProfile } from "@utils/discord";
import { proxyLazy } from "@utils/lazy";
import { classes } from "@utils/misc";
import { ContextMenuApi, FluxDispatcher, Menu, NavigationRouter, useEffect, useReducer, useRef, UserStore } from "@webpack/common";

const UserRecord = proxyLazy(() => UserStore.getCurrentUser().constructor) as any;

interface Props {
    note: Note;
    notebook: string;
    updateParent?: () => void;
    fromDeleteModal: boolean;
    closeModal?: () => void;
}
export function RenderMessage({ note, notebook, updateParent, fromDeleteModal, closeModal }: Props) {
    const isHoldingDeleteRef = useRef(false);
    const [, forceUpdate] = useReducer(x => x + 1, 0);

    useEffect(() => {
        if (!UserStore.getUser(note.author.id)) {
            fetchUserProfile(note.author.id);
        }
    }, [note.author.id]);

    useEffect(() => {
        const handleKey = (e: KeyboardEvent) => {
            if (e.key !== "Delete") return;
            const isDown = e.type === "keydown";
            if (isHoldingDeleteRef.current !== isDown) {
                isHoldingDeleteRef.current = isDown;
                forceUpdate();
            }
        };

        document.addEventListener("keydown", handleKey);
        document.addEventListener("keyup", handleKey);

        return () => {
            document.removeEventListener("keydown", handleKey);
            document.removeEventListener("keyup", handleKey);
        };
    }, []);

    const author = UserStore.getUser(note.author.id) ?? note.author;

    const handleClick = () => {
        if (isHoldingDeleteRef.current && !fromDeleteModal) {
            noteHandler.deleteNote(note.id, notebook);
            updateParent?.();
        }
    };

    const handleContextMenu = (e: React.MouseEvent) => {
        if (fromDeleteModal) return;
        ContextMenuApi.openContextMenu(e, () => (
            <NoteContextMenu
                note={note}
                notebook={notebook}
                updateParent={updateParent}
                closeModal={closeModal}
            />
        ));
    };

    const message = new MessageRecord({
        ...note,
        author: new UserRecord({ ...author, bot: true }),
        timestamp: new Date(note.timestamp),
        embeds: note.embeds?.map(embed =>
            embed.timestamp ? { ...embed, timestamp: new Date(embed.timestamp) } : embed
        ),
    });

    return (
        <div
            className="pc-holy-note"
            style={{ margin: "8px 0", padding: "4px 0" }}
            onClick={handleClick}
            onContextMenu={handleContextMenu}
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
                channel={new ChannelRecord({ id: "holy-notes" })}
                message={message}
            />

        </div>
    );
}

interface ContextMenuProps {
    note: Note;
    notebook: string;
    updateParent?: () => void;
    closeModal?: () => void;
}

function NoteContextMenu({ note, notebook, updateParent, closeModal }: ContextMenuProps) {
    const allNotebooks = Object.keys(noteHandler.getAllNotes());

    return (
        <Menu.Menu
            navId="holynotes"
            onClose={() => FluxDispatcher.dispatch({ type: "CONTEXT_MENU_CLOSE" })}
            aria-label="Holy Notes"
        >
            <Menu.MenuItem
                label={t(plugin.holyNotes.modal.help.jumpToMessage)}
                id="jump"
                icon={OpenExternalIcon}
                action={() => {
                    NavigationRouter.transitionTo(`/channels/${note.guild_id || "@me"}/${note.channel_id}/${note.id}`);
                    closeModal?.();
                }}
            />
            <Menu.MenuItem
                label={t(plugin.holyNotes.button.copyText)}
                id="copy-text"
                action={() => copyToClipboard(note.content)}
                icon={CopyIcon}
            />
            {note.attachments.length > 0 && (
                <Menu.MenuItem
                    label={t(plugin.holyNotes.button.copyAttachment)}
                    id="copy-url"
                    action={() => copyToClipboard(note.attachments[0].url)}
                    icon={LinkIcon}
                />
            )}
            <Menu.MenuItem
                label={t(plugin.holyNotes.button.copyId)}
                id="copy-id"
                action={() => copyToClipboard(note.id)}
                icon={IDIcon}
            />
            {allNotebooks.length > 1 && (
                <Menu.MenuItem label={t(plugin.holyNotes.button.moveNote)} id="move-note">
                    {allNotebooks.filter(k => k !== notebook).map(k => (
                        <Menu.MenuItem
                            key={k}
                            label={t(plugin.holyNotes.button.moveTo, { key: k })}
                            id={k}
                            action={() => {
                                noteHandler.moveNote(note, notebook, k);
                                updateParent?.();
                            }}
                        />
                    ))}
                </Menu.MenuItem>
            )}
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

}
