import { SoundEvent, SoundLogEntry } from "./utils";
/** Attempts to add a sound event to the log */
export declare function updateLoggedSounds(sound: SoundEvent): Promise<void>;
/** Clears the logged sounds array */
export declare function clearLoggedSounds(): Promise<void>;
/** Returns an array with the logged sounds */
export declare function getLoggedSounds(): Promise<SoundLogEntry[]>;
