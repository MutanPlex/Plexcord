import { LyricsData, Provider, SyncedLyric } from "../types";
export declare function translateLyrics(lyrics: LyricsData["lyricsVersions"][Provider]): Promise<SyncedLyric[] | null>;
export declare function romanizeLyrics(lyrics: LyricsData["lyricsVersions"][Provider]): Promise<SyncedLyric[] | null>;
