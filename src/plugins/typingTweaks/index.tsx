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

import { plugin, t } from "@api/i18n";
import { definePluginSettings, migratePluginToSettings, Settings } from "@api/Settings";
import ErrorBoundary from "@components/ErrorBoundary";
import { Channel, User } from "@plexcord/discord-types";
import { getCustomColorString } from "@plugins/customUserColors";
import { Devs, PcDevs } from "@utils/constants";
import { openUserProfile } from "@utils/discord";
import { isNonNullish } from "@utils/guards";
import { Logger } from "@utils/Logger";
import definePlugin, { OptionType } from "@utils/types";
import { AuthenticationStore, Avatar, GuildMemberStore, React, RelationshipStore, TypingStore, UserStore, useStateFromStores } from "@webpack/common";
import { PropsWithChildren } from "react";

import managedStyle from "./style.css?managed";

const settings = definePluginSettings({
    showAvatars: {
        label: () => t(plugin.typingTweaks.option.showAvatars.label),
        description: () => t(plugin.typingTweaks.option.showAvatars.description),
        type: OptionType.BOOLEAN,
        default: true
    },
    showRoleColors: {
        label: () => t(plugin.typingTweaks.option.showRoleColors.label),
        description: () => t(plugin.typingTweaks.option.showRoleColors.description),
        type: OptionType.BOOLEAN,
        default: true
    },
    alternativeFormatting: {
        label: () => t(plugin.typingTweaks.option.alternativeFormatting.label),
        description: () => t(plugin.typingTweaks.option.alternativeFormatting.description),
        type: OptionType.BOOLEAN,
        default: true
    },
    amITyping: {
        label: () => t(plugin.typingTweaks.option.amITyping.label),
        description: () => t(plugin.typingTweaks.option.amITyping.description),
        type: OptionType.BOOLEAN,
        default: false,
        restartNeeded: true
    }
});

export const buildSeveralUsers = ErrorBoundary.wrap(function buildSeveralUsers({ users, count, guildId }: { users: User[], count: number; guildId: string; }) {
    return (
        <>
            {users.slice(0, count).map(user => (
                <React.Fragment key={user.id}>
                    <TypingUser user={user} guildId={guildId} />
                    {", "}
                </React.Fragment>
            ))}
            {t(plugin.typingTweaks.others.areTyping, { count })}
        </>
    );
}, { noop: true });

interface TypingUserProps {
    user: User;
    guildId: string;
}

function typingUserColor(guildId: string, userId: string): string | undefined {
    if (!settings.store.showRoleColors) return;

    if (Settings.plugins.CustomUserColors.enabled) {
        const customColor = getCustomColorString(userId, true);
        if (customColor) return customColor;
    }

    return GuildMemberStore.getMember(guildId, userId)?.colorString;
}

const TypingUser = ErrorBoundary.wrap(function TypingUser({ user, guildId }: TypingUserProps) {
    return (
        <strong
            className="pc-typing-user"
            role="button"
            onClick={() => {
                openUserProfile(user.id);
            }}
            style={{
                color: settings.store.showRoleColors ? typingUserColor(guildId, user.id) : undefined,
            }}
        >
            {settings.store.showAvatars && (
                <Avatar
                    size="SIZE_16"
                    src={user.getAvatarURL(guildId, 128)} />
            )}
            {GuildMemberStore.getNick(guildId!, user.id)
                || (!guildId && RelationshipStore.getNickname(user.id))
                || (user as any).globalName
                || user.username
            }
        </strong>
    );
}, { noop: true });

migratePluginToSettings(true, "TypingTweaks", "AmITyping", "amITyping");
export default definePlugin({
    name: "TypingTweaks",
    description: () => t(plugin.typingTweaks.description),
    authors: [Devs.zt, Devs.sadan, PcDevs.MrDiamond, PcDevs.MutanPlex],
    settings,

    managedStyle,

    patches: [
        {
            find: "#{intl::THREE_USERS_TYPING}",
            group: true,
            replacement: [
                {
                    // Style the indicator and add function call to modify the children before rendering
                    match: /(?<="aria-atomic":!0,children:)\i/,
                    replace: "$self.renderTypingUsers({ users: arguments[0]?.typingUserObjects, guildId: arguments[0]?.channel?.guild_id, children: $& })"
                },
                {
                    match: /(?<=function \i\(\i\)\{)(?=[^}]+?\{channel:\i,isThreadCreation:\i=!1\})/,
                    replace: "let typingUserObjects = $self.useTypingUsers(arguments[0]?.channel);"
                },
                {
                    // Get the typing users as user objects instead of names
                    match: /typingUsers:(\i)\?\[\]:\i,/,
                    // check by typeof so if the variable is not defined due to other patch failing, it won't throw a ReferenceError
                    replace: "$&typingUserObjects: $1 || typeof typingUserObjects === 'undefined' ? [] : typingUserObjects,"
                },
                {
                    // Adds the alternative formatting for several users typing
                    // users.length > 3 && (component = intl(key))
                    match: /(&&\(\i=)\i\.\i\.format\(\i\.\i#{intl::SEVERAL_USERS_TYPING_STRONG},\{\}\)/,
                    replace: "$1$self.buildSeveralUsers({ users: arguments[0]?.typingUserObjects, count: arguments[0]?.typingUserObjects?.length - 2, guildId: arguments[0]?.channel?.guild_id })",
                    predicate: () => settings.store.alternativeFormatting
                }
            ]
        },
        {
            find: "\"handleDismissInviteEducation\"",
            predicate: () => settings.store.amITyping,
            replacement: {
                match: /\i\.default\.getCurrentUser\(\)/,
                replace: "\"\""
            }
        }
    ],

    useTypingUsers(channel: Channel | undefined): User[] {
        try {
            if (!channel) {
                throw new Error("No channel");
            }

            const typingUsers = useStateFromStores([TypingStore], () => TypingStore.getTypingUsers(channel.id));
            const myId = useStateFromStores([AuthenticationStore], () => AuthenticationStore.getId());

            return Object.keys(typingUsers)
                .filter(id => {
                    if (!id || RelationshipStore.isBlockedOrIgnored(id)) return false;
                    if (id === myId) return Settings.plugins.AmITyping?.enabled;
                    return true;
                })
                .map(id => UserStore.getUser(id))
                .filter(isNonNullish);
        } catch (e) {
            new Logger("TypingTweaks").error("Failed to get typing users:", e);
            return [];
        }
    },

    buildSeveralUsers,

    renderTypingUsers: ErrorBoundary.wrap(({ guildId, users, children }: PropsWithChildren<{ guildId: string, users: User[]; }>) => {
        try {
            if (!Array.isArray(children)) {
                return children;
            }

            let element = 0;

            return children.map(c => {
                if (c.type !== "strong" && !(typeof c !== "string" && !React.isValidElement(c)))
                    return c;

                const user = users[element++];
                return <TypingUser key={user.id} guildId={guildId} user={user} />;
            });
        } catch (e) {
            new Logger("TypingTweaks").error("Failed to render typing users:", e);
        }

        return children;
    }, { noop: true })
});
