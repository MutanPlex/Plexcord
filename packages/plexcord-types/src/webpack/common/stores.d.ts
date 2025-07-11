import type * as Stores from "discord-types/stores";
import * as t from "./types/stores";
export declare const Flux: t.Flux;
export type GenericStore = t.FluxStore & Record<string, any>;
export declare const DraftType: any;
export declare let MessageStore: Omit<Stores.MessageStore, "getMessages"> & GenericStore & {
    getMessages(chanId: string): any;
};
export declare const PrivateChannelsStore: any;
export declare let PermissionStore: GenericStore;
export declare let GuildChannelStore: GenericStore;
export declare let ReadStateStore: GenericStore;
export declare let PresenceStore: GenericStore;
export declare let VoiceStateStore: GenericStore;
export declare let GuildStore: t.GuildStore;
export declare let GuildRoleStore: t.GuildRoleStore;
export declare let GuildMemberStore: Stores.GuildMemberStore & t.FluxStore;
export declare let UserStore: Stores.UserStore & t.FluxStore;
export declare let UserProfileStore: GenericStore;
export declare let SelectedChannelStore: Stores.SelectedChannelStore & t.FluxStore;
export declare let SelectedGuildStore: t.FluxStore & Record<string, any>;
export declare let ChannelStore: Stores.ChannelStore & t.FluxStore;
export declare let RelationshipStore: t.RelationshipStore;
export declare let TypingStore: GenericStore;
export declare let EmojiStore: t.EmojiStore;
export declare let StickerStore: t.StickerStore;
export declare let ThemeStore: t.ThemeStore;
export declare let WindowStore: t.WindowStore;
export declare let DraftStore: t.DraftStore;
/**
 * React hook that returns stateful data for one or more stores
 * You might need a custom comparator (4th argument) if your store data is an object
 * @param stores The stores to listen to
 * @param mapper A function that returns the data you need
 * @param dependencies An array of reactive values which the hook depends on. Use this if your mapper or equality function depends on the value of another hook
 * @param isEqual A custom comparator for the data returned by mapper
 *
 * @example const user = useStateFromStores([UserStore], () => UserStore.getCurrentUser(), null, (old, current) => old.id === current.id);
 */
export declare const useStateFromStores: t.useStateFromStores;
