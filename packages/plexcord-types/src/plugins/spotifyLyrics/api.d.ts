import { Track } from "plugins/spotifyControls/SpotifyStore";
import { getLyricsLrclib } from "./providers/lrclibAPI";
import { LyricsData, Provider, SyncedLyric } from "./providers/types";
export declare const lyricFetchers: {
    Spotify: (track: Track) => Promise<LyricsData | null>;
    LRCLIB: typeof getLyricsLrclib;
};
export declare const providers: Provider[];
export declare function getLyrics(track: Track | null): Promise<LyricsData | null>;
export declare function clearLyricsCache(): Promise<void>;
export declare function getLyricsCount(): Promise<number>;
export declare function updateLyrics(trackId: string, newLyrics: SyncedLyric[], provider: Provider): Promise<void>;
export declare function removeTranslations(): Promise<void>;
export declare function migrateOldLyrics(): Promise<void>;
