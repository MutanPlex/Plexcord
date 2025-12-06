/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2024 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { plugin, t } from "@api/i18n";
import { makeDummyUser } from "@components/settings/tabs/plugins/PluginModal";
import { Channel, Message } from "@plexcord/discord-types";
import { ChannelStore, lodash, Toasts, UserStore } from "@webpack/common";

import { Discord, HolyNotes } from "./types";
import { deleteCacheFromDataStore, DeleteEntireStore, saveCacheToDataStore } from "./utils";

export const noteHandlerCache = new Map();

class NoteHandler {
    private _formatNote(channel: Channel, message: Message): HolyNotes.Note {
        return {
            id: message.id,
            channel_id: message.channel_id,
            guild_id: channel.guild_id,
            content: message.content,
            author: {
                id: message.author.id,
                avatar: message.author.avatar,
                discriminator: message.author.discriminator,
                username: message.author.username,
            },
            flags: message.flags,
            // Moment has a toString() function, this doesn't convert to '[object Object]'.

            timestamp: message.timestamp.toString(),
            attachments: message.attachments as Discord.Attachment[],
            embeds: message.embeds,
            reactions: message.reactions as Discord.Reaction[],
            stickerItems: message.stickerItems,
        };
    }


    public getNotes(notebook?: string): Record<string, HolyNotes.Note> {
        return noteHandlerCache.get(notebook);
    }

    public getAllNotes(): HolyNotes.Note[] {
        const data = noteHandlerCache.entries();
        const notes = {};
        for (const [key, value] of data) {
            notes[key] = value;
        }
        return notes as HolyNotes.Note[];
    }

    public addNote = async (message: Message, notebook: string) => {
        const notes = this.getNotes(notebook);
        const channel = ChannelStore.getChannel(message.channel_id);
        const newNotes = Object.assign({ [message.id]: this._formatNote(channel, message) }, notes);

        noteHandlerCache.set(notebook, newNotes);
        saveCacheToDataStore(notebook, newNotes as unknown as HolyNotes.Note[]);

        Toasts.show({
            id: Toasts.genId(),
            message: t(plugin.holyNotes.toast.saved, { notebook }),
            type: Toasts.Type.SUCCESS,
        });
    };

    public deleteNote = async (noteId: string, notebook: string) => {
        const notes = this.getNotes(notebook);

        noteHandlerCache.set(notebook, lodash.omit(notes, noteId));
        saveCacheToDataStore(notebook, lodash.omit(notes, noteId) as unknown as HolyNotes.Note[]);

        Toasts.show({
            id: Toasts.genId(),
            message: t(plugin.holyNotes.toast.deleted, { notebook }),
            type: Toasts.Type.SUCCESS,
        });
    };

    public moveNote = async (note: HolyNotes.Note, from: string, to: string) => {
        const origNotebook = this.getNotes(from);
        const newNoteBook = lodash.cloneDeep(this.getNotes(to));

        newNoteBook[note.id] = note;

        noteHandlerCache.set(from, lodash.omit(origNotebook, note.id));
        noteHandlerCache.set(to, newNoteBook);

        saveCacheToDataStore(from, lodash.omit(origNotebook, note.id) as unknown as HolyNotes.Note[]);
        saveCacheToDataStore(to, newNoteBook as unknown as HolyNotes.Note[]);

        Toasts.show({
            id: Toasts.genId(),
            message: t(plugin.holyNotes.toast.moved, { from, to }),
            type: Toasts.Type.SUCCESS,
        });
    };

    public newNoteBook = async (notebookName: string, silent?: Boolean) => {
        let notebookExists = false;

        for (const key of noteHandlerCache.keys()) {
            if (key === notebookName) {
                notebookExists = true;
                break;
            }
        }

        if (notebookExists) {
            Toasts.show({
                id: Toasts.genId(),
                message: t(plugin.holyNotes.toast.exists, { notebookName }),
                type: Toasts.Type.FAILURE,
            });
            return;
        }

        noteHandlerCache.set(notebookName, {});
        saveCacheToDataStore(notebookName, {} as HolyNotes.Note[]);

        if (!silent) return Toasts.show({
            id: Toasts.genId(),
            message: t(plugin.holyNotes.toast.created, { notebookName }),
            type: Toasts.Type.SUCCESS,
        });
    };

    public deleteNotebook = async (notebookName: string) => {
        noteHandlerCache.delete(notebookName);
        deleteCacheFromDataStore(notebookName);

        Toasts.show({
            id: Toasts.genId(),
            message: t(plugin.holyNotes.toast.deletedNotebook, { notebookName }),
            type: Toasts.Type.SUCCESS,
        });
    };

    public refreshAvatars = async () => {
        const notebooks = this.getAllNotes();

        for (const notebook in notebooks)
            for (const noteId in notebooks[notebook]) {
                const note = notebooks[notebook][noteId];
                const user = UserStore.getUser(note.author.id) ?? makeDummyUser(note.author);

                Object.assign(notebooks[notebook][noteId].author, {
                    avatar: user.avatar,
                    discriminator: user.discriminator,
                    username: user.username,
                });
            }

        for (const notebook in notebooks) {
            noteHandlerCache.set(notebook, notebooks[notebook]);
            saveCacheToDataStore(notebook, notebooks[notebook] as unknown as HolyNotes.Note[]);
        }

        Toasts.show({
            id: Toasts.genId(),
            message: t(plugin.holyNotes.toast.refreshed),
            type: Toasts.Type.SUCCESS,
        });

    };

    public deleteEverything = async () => {
        noteHandlerCache.clear();
        await DeleteEntireStore();

        Toasts.show({
            id: Toasts.genId(),
            message: t(plugin.holyNotes.toast.deletedAll),
            type: Toasts.Type.SUCCESS,
        });
    };

    public exportNotes = async () => {
        return this.getAllNotes();
    };

    public importNotes = async (notes: HolyNotes.Note[]) => {
        try {
            var parseNotes = JSON.parse(notes as unknown as string);
        } catch (e) {
            console.log(e);
            return Toasts.show({
                id: Toasts.genId(),
                message: t(plugin.holyNotes.toast.invalid),
                type: Toasts.Type.FAILURE,
            });
        }

        for (const notebook in parseNotes) {
            noteHandlerCache.set(notebook, parseNotes[notebook]);
            saveCacheToDataStore(notebook, parseNotes[notebook] as unknown as HolyNotes.Note[]);
        }

        Toasts.show({
            id: Toasts.genId(),
            message: t(plugin.holyNotes.toast.imported),
            type: Toasts.Type.SUCCESS,
        });

    };
}

const noteHandler: {
    getNotes(notebook?: string): Record<string, HolyNotes.Note>;
    getAllNotes(): HolyNotes.Note[];
    addNote(message: Message, notebook: string): Promise<void>;
    deleteNote(noteId: string, notebook: string): Promise<void>;
    moveNote(note: HolyNotes.Note, from: string, to: string): Promise<void>;
    newNoteBook(notebookName: string, silent?: Boolean): Promise<void | { id: string; message: string; type: any; }>;
    deleteNotebook(notebookName: string): Promise<void>;
    refreshAvatars(): Promise<void>;
    deleteEverything(): Promise<void>;
    exportNotes(): Promise<HolyNotes.Note[]>;
    importNotes(notes: HolyNotes.Note[]): Promise<void | { id: string; message: string; type: any; }>;
} = new NoteHandler();

export default noteHandler;

