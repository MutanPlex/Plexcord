export declare const scrollClasses: any;
export declare const cl: (...args: (string | false | 0 | string[] | Record<string, unknown> | null | undefined)[]) => string;
export declare function NoteSvg(className: string): import("react").JSX.Element;
export declare function useLyrics(): {
    track: import("../../spotifyControls/SpotifyStore").Track;
    lyricsInfo: import("../providers/types").LyricsData | null;
    lyricRefs: import("react").RefObject<HTMLDivElement | null>[];
    currLrcIndex: number | null;
    nextLyric: number | null;
};
