/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2024 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { plugin, t } from "@api/i18n";
import { Channel, Message } from "@plexcord/discord-types";
import { ChannelStore, showToast, UserStore } from "@webpack/common";
import { proxyLazyWebpack } from "webpack";

import { AllNotebooks, Note, Notebook } from "./types";
import { deleteCacheFromDataStore, DeleteEntireStore, saveCacheToDataStore } from "./utils";

export const noteHandlerCache = new Map<string, Notebook>();

function formatNote(channel: Channel, message: Message): Note {
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
        timestamp: message.timestamp.toString(),
        attachments: message.attachments,
        embeds: message.embeds,
        reactions: message.reactions,
        stickerItems: message.stickerItems,
    };
}

export const noteHandler = proxyLazyWebpack(() => ({
    getNotes(notebook: string): Notebook | undefined {
        return noteHandlerCache.get(notebook);
    },

    getAllNotes(): AllNotebooks {
        return Object.fromEntries(noteHandlerCache.entries());
    },

    addNote(message: Message, notebook: string) {
        const notes = this.getNotes(notebook) ?? {};
        const channel = ChannelStore.getChannel(message.channel_id);
        const newNotes = { [message.id]: formatNote(channel, message), ...notes };

        noteHandlerCache.set(notebook, newNotes);
        saveCacheToDataStore(notebook, newNotes);
        showToast({ text: t(plugin.holyNotes.toast.saved, { notebook }), variant: "success" });
    },

    deleteNote(noteId: string, notebook: string) {
        const notes = this.getNotes(notebook);
        if (!notes) return;

        const { [noteId]: _, ...rest } = notes;
        noteHandlerCache.set(notebook, rest);
        saveCacheToDataStore(notebook, rest);
        showToast({ text: t(plugin.holyNotes.toast.deleted, { notebook }), variant: "success" });
    },

    moveNote(note: Note, from: string, to: string) {
        const fromNotes = this.getNotes(from);
        const toNotes = this.getNotes(to);
        if (!fromNotes || !toNotes) return;

        const { [note.id]: _, ...restFrom } = fromNotes;
        const newTo = { [note.id]: note, ...toNotes };

        noteHandlerCache.set(from, restFrom);
        noteHandlerCache.set(to, newTo);
        saveCacheToDataStore(from, restFrom);
        saveCacheToDataStore(to, newTo);
        showToast({ text: t(plugin.holyNotes.toast.moved, { from, to }), variant: "success" });
    },

    newNoteBook(name: string, silent?: boolean) {
        if (noteHandlerCache.has(name)) {
            showToast({ text: t(plugin.holyNotes.toast.exists, { notebookName: name }), variant: "critical" });
            return;
        }
        noteHandlerCache.set(name, {});
        saveCacheToDataStore(name, {});
        if (!silent) showToast({ text: t(plugin.holyNotes.toast.created, { notebookName: name }), variant: "success" });
    },

    deleteNotebook(name: string) {
        noteHandlerCache.delete(name);
        deleteCacheFromDataStore(name);
        showToast({ text: t(plugin.holyNotes.toast.deleted, { notebook: name }), variant: "success" });
    },

    refreshAvatars() {
        const notebooks = this.getAllNotes();

        for (const notebookName in notebooks) {
            const notebook = notebooks[notebookName];
            for (const noteId in notebook) {
                const note = notebook[noteId];
                const user = UserStore.getUser(note.author.id);
                if (user) {
                    note.author.avatar = user.avatar;
                    note.author.discriminator = user.discriminator;
                    note.author.username = user.username;
                }
            }
            noteHandlerCache.set(notebookName, notebook);
            saveCacheToDataStore(notebookName, notebook);
        }
        showToast({ text: t(plugin.holyNotes.toast.refreshed), variant: "success" });
    },

    async deleteEverything() {
        noteHandlerCache.clear();
        await DeleteEntireStore();
        showToast({ text: t(plugin.holyNotes.toast.deletedAll), variant: "success" });
    },

    exportNotes(): AllNotebooks {
        return this.getAllNotes();
    },

    importNotes(jsonString: string) {
        let parsed: AllNotebooks;
        try {
            parsed = JSON.parse(jsonString);
        } catch {
            showToast({ text: t(plugin.holyNotes.toast.invalidJson), variant: "critical" });
            return;
        }

        for (const notebook in parsed) {
            noteHandlerCache.set(notebook, parsed[notebook]);
            saveCacheToDataStore(notebook, parsed[notebook]);
        }

        showToast({ text: t(plugin.holyNotes.toast.imported), variant: "success" });
    },
}));

export default noteHandler;
