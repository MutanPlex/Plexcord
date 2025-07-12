import { Track } from "plugins/spotifyControls/SpotifyStore";
import { LyricsData } from "./types";
interface Device {
    id: string;
    is_active: boolean;
}
interface ISpotifyLrcStore {
    mPosition: number;
    track: Track | null;
    device: Device | null;
    isPlaying: boolean;
    lyricsInfo: LyricsData | null;
    fetchingsTracks: string[];
    position: number;
}
export declare const SpotifyLrcStore: ISpotifyLrcStore;
export {};
