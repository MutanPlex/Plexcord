/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2023 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
*/

import * as t from "@plexcord/discord-types";
import { findByCodeLazy, findByPropsLazy } from "@webpack";

import { waitForStore } from "./internal";

export const Flux: t.Flux = findByPropsLazy("connectStores");

export type GenericStore = t.FluxStore & Record<string, any>;

export const DraftType = findByPropsLazy("ChannelMessage", "SlashCommand");

export let MessageStore: Omit<t.MessageStore, "getMessages"> & GenericStore & {
    getMessages(chanId: string): any;
};

export let PermissionStore: GenericStore;
export let GuildChannelStore: t.GuildChannelStore;
export let ReadStateStore: GenericStore;
export let PresenceStore: GenericStore;
export let VoiceStateStore: t.VoiceStateStore;

export let GuildStore: t.GuildStore;
export let GuildRoleStore: t.GuildRoleStore;
export let GuildMemberStore: t.GuildMemberStore;
export let UserStore: t.UserStore;
export let AuthenticationStore: t.AuthenticationStore;
export let UserProfileStore: t.UserProfileStore;
export let TypingStore: t.TypingStore;
export let SelectedChannelStore: t.SelectedChannelStore;
export let SelectedGuildStore: t.SelectedGuildStore;
export let ChannelStore: t.ChannelStore;
export let RelationshipStore: t.RelationshipStore;

export let EmojiStore: t.EmojiStore;
export let StickersStore: t.StickersStore;
export let ThemeStore: t.ThemeStore;
export let WindowStore: t.WindowStore;
export let DraftStore: t.DraftStore;
export let MediaEngineStore: t.MediaEngineStore;
export let StreamerModeStore: t.StreamerModeStore;
export let SpellCheckStore: t.SpellCheckStore;

/**
 * @see jsdoc of {@link t.useStateFromStores}
 */
export const useStateFromStores: t.useStateFromStores = findByCodeLazy("useStateFromStores");

waitForStore("AuthenticationStore", s => AuthenticationStore = s);
waitForStore("ChannelStore", m => ChannelStore = m);
waitForStore("DraftStore", s => DraftStore = s);
waitForStore("EmojiStore", m => EmojiStore = m);
waitForStore("GuildChannelStore", m => GuildChannelStore = m);
waitForStore("GuildMemberStore", m => GuildMemberStore = m);
waitForStore("GuildRoleStore", m => GuildRoleStore = m);
waitForStore("GuildStore", m => GuildStore = m);
waitForStore("MediaEngineStore", m => MediaEngineStore = m);
waitForStore("MessageStore", m => MessageStore = m);
waitForStore("PermissionStore", m => PermissionStore = m);
waitForStore("PresenceStore", m => PresenceStore = m);
waitForStore("RelationshipStore", m => RelationshipStore = m);
waitForStore("ReadStateStore", m => ReadStateStore = m);
waitForStore("SelectedChannelStore", m => SelectedChannelStore = m);
waitForStore("SelectedGuildStore", m => SelectedGuildStore = m);
waitForStore("SpellcheckStore", m => SpellCheckStore = m);
waitForStore("StickersStore", m => StickersStore = m);
waitForStore("StreamerModeStore", m => StreamerModeStore = m);
waitForStore("TypingStore", m => TypingStore = m);
waitForStore("ThemeStore", m => {
    ThemeStore = m;
    // Importing this directly can easily cause circular imports. For this reason, use a non import access here.
    Plexcord.QuickCss.initQuickCssThemeStore();
});
waitForStore("UserStore", s => UserStore = s);
waitForStore("UserProfileStore", m => UserProfileStore = m);
waitForStore("VoiceStateStore", m => VoiceStateStore = m);
waitForStore("WindowStore", m => WindowStore = m);
