import { Channel, Message } from "discord-types/general";
import { HolyNotes } from "./types";
export declare const noteHandlerCache: Map<any, any>;
declare const _default: {
    _formatNote(channel: Channel, message: Message): HolyNotes.Note;
    getNotes(notebook?: string): Record<string, HolyNotes.Note>;
    getAllNotes(): HolyNotes.Note[];
    addNote: (message: Message, notebook: string) => Promise<void>;
    deleteNote: (noteId: string, notebook: string) => Promise<void>;
    moveNote: (note: HolyNotes.Note, from: string, to: string) => Promise<void>;
    newNoteBook: (notebookName: string, silent?: Boolean) => Promise<void>;
    deleteNotebook: (notebookName: string) => Promise<void>;
    refreshAvatars: () => Promise<void>;
    deleteEverything: () => Promise<void>;
    exportNotes: () => Promise<HolyNotes.Note[]>;
    importNotes: (notes: HolyNotes.Note[]) => Promise<void>;
};
export default _default;
