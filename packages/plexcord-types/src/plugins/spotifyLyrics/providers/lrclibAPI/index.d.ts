import { Track } from "plugins/spotifyControls/SpotifyStore";
import { LyricsData } from "../types";
export declare function getLyricsLrclib(track: Track): Promise<LyricsData | null>;
