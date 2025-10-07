/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2024 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { t } from "@api/i18n";
import { makeDummyUser } from "@components/settings/tabs/plugins/PluginModal";
import noteHandler from "@plugins/holyNotes/NoteHandler";
import { HolyNotes } from "@plugins/holyNotes/types";
import { copyToClipboard } from "@utils/clipboard";
import { classes } from "@utils/misc";
import { ModalProps } from "@utils/modal";
import { findByCodeLazy, findByProps, findComponentByCodeLazy } from "@webpack";
import { ContextMenuApi, FluxDispatcher, Menu, NavigationRouter, React } from "@webpack/common";
import { MessageType } from "plugins/holyNotes";

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
    const { message, groupStart, cozyMessage } = findByProps("cozyMessage");
    const Channel = findByCodeLazy("computeLurkerPermissionsAllowList(){");
    const ChannelMessage = findComponentByCodeLazy("Message must not be a thread");

    const [isHoldingDelete, setHoldingDelete] = React.useState(false);

    React.useEffect(() => {
        const deleteHandler = (e: { key: string; type: string; }) =>
            e.key.toLowerCase() === "delete" && setHoldingDelete(e.type.toLowerCase() === "keydown");

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
                if (isHoldingDelete && !fromDeleteModal) {
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
                className={classes("pc-holy-render", message, groupStart, cozyMessage)}
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
                                author: makeDummyUser(note?.author),
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
                label={t("plugin.holyNotes.modal.help.jumpToMessage")}
                id="jump"
                action={() => {
                    NavigationRouter.transitionTo(`/channels/${note.guild_id ?? "@me"}/${note.channel_id}/${note.id}`);
                    closeModal?.();
                }}
            />
            <Menu.MenuItem
                label={t("plugin.holyNotes.button.copyText")}
                id="copy-text"
                action={() => copyToClipboard(note.content)}
            />
            {note?.attachments.length ? (
                <Menu.MenuItem
                    label={t("plugin.holyNotes.button.copyAttachment")}
                    id="copy-url"
                    action={() => copyToClipboard(note.attachments[0].url)}
                />) : null}
            <Menu.MenuItem
                color="danger"
                label={t("plugin.holyNotes.button.deleteNote")}
                id="delete"
                action={() => {
                    noteHandler.deleteNote(note.id, notebook);
                    updateParent?.();
                }}
            />
            {Object.keys(noteHandler.getAllNotes()).length !== 1 ? (
                <Menu.MenuItem
                    label={t("plugin.holyNotes.button.moveNote")}
                    id="move-note"
                >
                    {Object.keys(noteHandler.getAllNotes()).map((key: string) => {
                        if (key !== notebook) {
                            return (
                                <Menu.MenuItem
                                    key={key}
                                    label={t("plugin.holyNotes.button.moveTo", { key })}
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
                label={t("plugin.holyNotes.button.copyId")}
                id="copy-id"
                action={() => copyToClipboard(note.id)}
            />
        </Menu.Menu>
    );

};
