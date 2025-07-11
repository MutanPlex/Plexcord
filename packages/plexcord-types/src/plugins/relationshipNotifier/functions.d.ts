import { ChannelDelete, GuildDelete, RelationshipRemove } from "./types";
export declare const removeFriend: (id: string) => string;
export declare const removeGuild: (id: string) => string;
export declare const removeGroup: (id: string) => string;
export declare function onRelationshipRemove({ relationship: { type, id } }: RelationshipRemove): Promise<void>;
export declare function onGuildDelete({ guild: { id, unavailable } }: GuildDelete): void;
export declare function onChannelDelete({ channel: { id, type } }: ChannelDelete): void;
