export interface SyncedLyric {
    time: number;
    text: string | null;
}
export declare enum Provider {
    Lrclib = "LRCLIB",
    Spotify = "Spotify",
    Translated = "Translated",
    Romanized = "Romanized",
    None = "None"
}
export interface LyricsData {
    lyricsVersions: Partial<Record<Provider, SyncedLyric[] | null>>;
    useLyric: Provider;
}
