/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2022 Vendicated and contributors
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
import { definePluginSettings } from "@api/Settings";
import ErrorBoundary from "@components/ErrorBoundary";
import { Devs, PcDevs } from "@utils/constants";
import { Logger } from "@utils/Logger";
import definePlugin, { makeRange, OptionType } from "@utils/types";
import { findByCodeLazy } from "@webpack";
import { ChannelStore, GuildMemberStore, GuildRoleStore, GuildStore, UserStore } from "@webpack/common";

const useMessageAuthor = findByCodeLazy('"Result cannot be null because the message is not null"');

const settings = definePluginSettings({
    chatMentions: {
        label: () => t(plugin.roleColorEverywhere.option.chatMentions.label),
        description: () => t(plugin.roleColorEverywhere.option.chatMentions.description),
        type: OptionType.BOOLEAN,
        default: true,
        restartNeeded: true
    },
    memberList: {
        label: () => t(plugin.roleColorEverywhere.option.memberList.label),
        description: () => t(plugin.roleColorEverywhere.option.memberList.description),
        type: OptionType.BOOLEAN,
        default: true,
        restartNeeded: true
    },
    voiceUsers: {
        label: () => t(plugin.roleColorEverywhere.option.voiceUsers.label),
        description: () => t(plugin.roleColorEverywhere.option.voiceUsers.description),
        type: OptionType.BOOLEAN,
        default: true,
        restartNeeded: true
    },
    reactorsList: {
        label: () => t(plugin.roleColorEverywhere.option.reactorsList.label),
        description: () => t(plugin.roleColorEverywhere.option.reactorsList.description),
        type: OptionType.BOOLEAN,
        default: true,
        restartNeeded: true
    },
    pollResults: {
        label: () => t(plugin.roleColorEverywhere.option.pollResults.label),
        description: () => t(plugin.roleColorEverywhere.option.pollResults.description),
        type: OptionType.BOOLEAN,
        default: true,
        restartNeeded: true
    },
    colorChatMessages: {
        label: () => t(plugin.roleColorEverywhere.option.colorChatMessages.label),
        description: () => t(plugin.roleColorEverywhere.option.colorChatMessages.description),
        type: OptionType.BOOLEAN,
        default: false,
        restartNeeded: true,
    },
    messageSaturation: {
        label: () => t(plugin.roleColorEverywhere.option.messageSaturation.label),
        description: () => t(plugin.roleColorEverywhere.option.messageSaturation.description),
        type: OptionType.SLIDER,
        markers: makeRange(0, 100, 10),
        default: 30
    }
});

export default definePlugin({
    name: "RoleColorEverywhere",
    description: () => t(plugin.roleColorEverywhere.description),
    authors: [Devs.KingFish, Devs.lewisakura, Devs.AutumnVN, Devs.Kyuuhachi, Devs.jamesbt365, PcDevs.MutanPlex],
    settings,

    patches: [
        // Chat Mentions
        {
            find: ".USER_MENTION)",
            replacement: [
                {
                    match: /(?<=user:(\i),guildId:([^,]+?),.{0,100}?children:\i=>\i)\((\i)\)/,
                    replace: "({...$3,color:$self.getColorInt($1?.id,$2)})",
                }
            ],
            predicate: () => settings.store.chatMentions
        },
        // Slate
        {
            find: ".userTooltip,children",
            replacement: [
                {
                    match: /let\{id:(\i),guildId:\i,channelId:(\i)[^}]*\}.*?\.\i,{(?=children)/,
                    replace: "$&color:$self.getColorInt($1,$2),"
                }
            ],
            predicate: () => settings.store.chatMentions
        },
        // Member List Role Headers
        {
            find: 'tutorialId:"whos-online',
            replacement: [
                {
                    match: /null,\i," — ",\i\]/,
                    replace: "null,$self.RoleGroupColor(arguments[0])]"
                },
            ],
            predicate: () => settings.store.memberList
        },
        {
            find: "#{intl::THREAD_BROWSER_PRIVATE}",
            replacement: [
                {
                    match: /children:\[\i," — ",\i\]/,
                    replace: "children:[$self.RoleGroupColor(arguments[0])]"
                },
            ],
            predicate: () => settings.store.memberList
        },
        // Voice Users
        {
            find: ".usernameSpeaking]:",
            replacement: [
                {
                    match: /\.usernameSpeaking\]:.+?,(?=children)(?<=guildId:(\i),.+?user:(\i).+?)/,
                    replace: "$&style:$self.getColorStyle($2.id,$1),className:$self.getColorClass($2.id,$1),"
                }
            ],
            predicate: () => settings.store.voiceUsers
        },
        // Reaction List
        {
            find: ".reactorDefault",
            replacement: [
                {
                    match: /tag:"strong"(?=.{0,50}\i\.name)(?<=onContextMenu:.{0,15}\((\i),(\i),\i\).+?)/,
                    replace: "$&,style:$self.getColorStyle($2?.id,$1?.channel?.id)"
                }
            ],
            predicate: () => settings.store.reactorsList,
        },
        // Poll Results
        {
            find: ",reactionVoteCounts",
            replacement: {
                match: /\.nickname,(?=children:)/,
                replace: "$&style:$self.getColorStyle(arguments[0]?.user?.id,arguments[0]?.channel?.id),className:$self.getPollResultColorClass(arguments[0]?.user?.id,arguments[0]?.channel?.id),"
            },
            predicate: () => settings.store.pollResults
        },
        // Messages
        {
            find: ".SEND_FAILED,",
            replacement: {
                match: /(?<=isUnsupported\]:(\i)\.isUnsupported\}\),)(?=children:\[)/,
                replace: "style:$self.useMessageColorsStyle($1),"
            },
            predicate: () => settings.store.colorChatMessages
        }
    ],

    getDisplayNameFont(userId: string) {
        try {
            const user = UserStore.getUser(userId);
            const fontId = user?.displayNameStyles?.fontId;

            if (!fontId || Number(fontId) === 1) return "";

            const fontClasses: Record<number, string> = {
                2: "zillaSlab__89a31",
                3: "cherryBomb__89a31",
                4: "chicle__89a31",
                5: "museoModerno__89a31",
                6: "neoCastel__89a31",
                7: "pixelify__89a31",
                8: "sinistre__89a31"
            };

            return fontClasses[Number(fontId)] || "";
        } catch (e) {
            new Logger("RoleColorEverywhere").error("Failed to get display name font", e);
        }

        return "";
    },

    getColorString(userId: string, channelOrGuildId: string) {
        try {
            const guildId = ChannelStore.getChannel(channelOrGuildId)?.guild_id ?? GuildStore.getGuild(channelOrGuildId)?.id;
            if (guildId == null) return null;

            const member = GuildMemberStore.getMember(guildId, userId);
            return member?.colorStrings ?? (member?.colorString ? { primaryColor: member.colorString, secondaryColor: null, tertiaryColor: null } : null);
        } catch (e) {
            new Logger("RoleColorEverywhere").error("Failed to get color string", e);
        }

        return null;
    },

    getColorInt(userId: string, channelOrGuildId: string) {
        const colorString = this.getColorString(userId, channelOrGuildId);
        return colorString && colorString.primaryColor && parseInt(colorString.primaryColor.slice(1), 16);
    },

    getColorStyle(userId: string, channelOrGuildId: string) {
        const c = this.getColorString(userId, channelOrGuildId);
        if (!c) return {};
        if (c.secondaryColor) {
            return { "--custom-gradient-color-1": c.primaryColor, "--custom-gradient-color-2": c.secondaryColor, "--custom-gradient-color-3": c.tertiaryColor || c.primaryColor, color: c.primaryColor };
        }
        return { color: c.primaryColor };
    },

    getColorClass(userId: string, channelOrGuildId: string) {
        const fontClass = this.getDisplayNameFont(userId);
        const baseClass = this.getColorString(userId, channelOrGuildId)?.secondaryColor
            ? "usernameFont__07f91 username__07f91 twoColorGradient_e5de78 usernameGradient_e5de78 "
            : "usernameFont__07f91 username__07f91 ";
        return fontClass ? `${baseClass}${fontClass}` : baseClass;
    },

    getPollResultColorClass(userId: string, channelOrGuildId: string) {
        const fontClass = this.getDisplayNameFont(userId);
        const baseClass = this.getColorString(userId, channelOrGuildId)?.secondaryColor
            ? "twoColorGradient_e5de78 usernameGradient_e5de78 "
            : "";
        return fontClass ? `${baseClass} ${fontClass}`.trim() : baseClass;
    },

    useMessageColorsStyle(message: any) {
        try {
            const { messageSaturation } = settings.use(["messageSaturation"]);
            const author = useMessageAuthor(message);

            if (author.colorString != null && messageSaturation !== 0) {
                const value = `color-mix(in oklab, ${author.colorString} ${messageSaturation}%, var({DEFAULT}))`;

                return {
                    color: value.replace("{DEFAULT}", "--text-default"),
                    "--header-primary": value.replace("{DEFAULT}", "--header-primary"),
                    "--text-muted": value.replace("{DEFAULT}", "--text-muted")
                };
            }
        } catch (e) {
            new Logger("RoleColorEverywhere").error("Failed to get message color", e);
        }

        return null;
    },

    RoleGroupColor: ErrorBoundary.wrap(({ id, count, title, guildId, label }: { id: string; count: number; title: string; guildId: string; label: string; }) => {
        const role = GuildRoleStore.getRole(guildId, id);
        const cs = role?.colorStrings;
        const style: React.CSSProperties = {
            color: role?.colorString,
            fontWeight: "unset",
            letterSpacing: ".05em"
        };
        let className = "";

        if (cs) {
            if (cs.secondaryColor) className = "twoColorGradient_e5de78 usernameGradient_e5de78";
            style["--custom-gradient-color-1" as any] = cs.primaryColor;
            style["--custom-gradient-color-2" as any] = cs.secondaryColor;
            style["--custom-gradient-color-3" as any] = cs.tertiaryColor ?? cs.primaryColor;
        }

        return (
            <span {...(className && { className })} style={style}>
                {title ?? label} &mdash; {count}
            </span>
        );
    }, { noop: true })
});
