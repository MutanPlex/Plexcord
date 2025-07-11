import { HolyNotes } from "./types";
export declare const HolyNoteStore: import("../../api/DataStore").UseStore;
export declare function saveCacheToDataStore(key: string, value?: HolyNotes.Note[]): Promise<void>;
export declare function deleteCacheFromDataStore(key: string): Promise<void>;
export declare function getFormatedEntries(): Promise<Record<string, HolyNotes.Note>>;
export declare function DataStoreToCache(): Promise<void>;
export declare function DeleteEntireStore(): Promise<void>;
export declare function downloadNotes(): Promise<void>;
export declare function uploadNotes(): Promise<void>;
