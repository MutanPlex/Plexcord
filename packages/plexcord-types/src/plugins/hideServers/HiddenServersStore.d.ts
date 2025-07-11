import { Guild } from "discord-types/general";
interface IHiddenServersStore {
    hiddenGuilds: Set<string>;
    load(): Promise<void>;
    unload(): void;
    addHidden(guild: Guild): void;
    removeHidden(id: string): void;
    clearHidden(): void;
    hiddenGuildsDetail(): Guild[];
}
export declare const HiddenServersStore: IHiddenServersStore;
export {};
