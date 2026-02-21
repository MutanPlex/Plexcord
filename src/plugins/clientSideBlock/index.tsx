/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2024 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { plugin, t } from "@api/i18n";
import { definePluginSettings } from "@api/Settings";
import { BaseText } from "@components/BaseText";
import { GuildMember } from "@plexcord/discord-types";
import { Devs, PcDevs } from "@utils/constants";
import definePlugin, { OptionType } from "@utils/types";
import { ChannelStore, GuildMemberStore, GuildRoleStore, RelationshipStore, UserStore } from "@webpack/common";

const settings = definePluginSettings({
    hideVc: {
        label: () => t(plugin.clientSideBlock.option.hideVc.label),
        description: () => t(plugin.clientSideBlock.option.hideVc.description),
        type: OptionType.BOOLEAN,
        default: false,
        restartNeeded: true
    },
    usersToBlock: {
        label: () => t(plugin.clientSideBlock.option.usersToBlock.label),
        description: () => t(plugin.clientSideBlock.option.usersToBlock.description),
        type: OptionType.STRING,
        restartNeeded: true,
        default: ""
    },
    hideBlockedUsers: {
        label: () => t(plugin.clientSideBlock.option.hideBlockedUsers.label),
        description: () => t(plugin.clientSideBlock.option.hideBlockedUsers.description),
        type: OptionType.BOOLEAN,
        default: true,
        restartNeeded: true
    },
    hideBlockedMessages: {
        label: () => t(plugin.clientSideBlock.option.hideBlockedMessages.label),
        description: () => t(plugin.clientSideBlock.option.hideBlockedMessages.description),
        type: OptionType.BOOLEAN,
        default: true,
        restartNeeded: true
    },
    hideEmptyRoles: {
        label: () => t(plugin.clientSideBlock.option.hideEmptyRoles.label),
        description: () => t(plugin.clientSideBlock.option.hideEmptyRoles.description),
        type: OptionType.BOOLEAN,
        restartNeeded: true,
        default: true
    },
    blockedReplyDisplay: {
        label: () => t(plugin.clientSideBlock.option.blockedReplyDisplay.label),
        description: () => t(plugin.clientSideBlock.option.blockedReplyDisplay.description),
        type: OptionType.SELECT,
        restartNeeded: true,
        options: [
            {
                label: () => t(plugin.clientSideBlock.option.blockedReplyDisplay.displayText),
                value: "displayText",
                default: true
            },
            {
                label: () => t(plugin.clientSideBlock.option.blockedReplyDisplay.hideReply),
                value: "hideReply",
            }
        ]
    },
    guildBlackList: {
        label: () => t(plugin.clientSideBlock.option.guildBlackList.label),
        description: () => t(plugin.clientSideBlock.option.guildBlackList.description),
        type: OptionType.STRING,
        restartNeeded: true,
        default: ""
    },
    guildWhiteList: {
        label: () => t(plugin.clientSideBlock.option.guildWhiteList.label),
        description: () => t(plugin.clientSideBlock.option.guildWhiteList.description),
        type: OptionType.STRING,
        restartNeeded: true,
        default: ""
    }
});

function isChannelInGuildBlocked(channelID, guild) {
    const guildID = guild ? channelID : ChannelStore.getChannel(channelID)?.guild_id;

    const blacklist = settings.store.guildBlackList?.split(",").map(s => s.trim()).filter(Boolean) ?? [];
    const whitelist = settings.store.guildWhiteList?.split(",").map(s => s.trim()).filter(Boolean) ?? [];

    if (blacklist.includes(guildID)) return true;
    if (whitelist.length && !whitelist.includes(guildID)) return true;

    return false;
}

function shouldHideUser(userId: string, channelId?: string) {
    if (channelId && isChannelInGuildBlocked(channelId, false)) return true;
    if (RelationshipStore.isBlocked(userId) && settings.store.hideBlockedUsers) return true;
    if (settings.store.usersToBlock.length === 0) return false;
    return settings.store.usersToBlock.split(", ").includes(userId);
}

function isRoleAllBlockedMembers(roleId, guildId) {
    const role = GuildRoleStore.getRole(guildId, roleId);
    if (!role) return false;

    const membersWithRole: GuildMember[] = GuildMemberStore.getMembers(guildId).filter(member => member.roles.includes(roleId));
    if (!membersWithRole.length) return false;
    if (isChannelInGuildBlocked(guildId, true)) return true;

    return membersWithRole.every(member => shouldHideUser(member.userId) && !(UserStore.getUser(member.userId).desktop || UserStore.getUser(member.userId).mobile));
}

function hiddenReplyComponent() {
    switch (settings.store.blockedReplyDisplay) {
        case "displayText":
            return <BaseText size="sm" tag="p" style={{ marginTop: "0px", marginBottom: "0px" }}><i>↓ {t(plugin.clientSideBlock.replying)}</i></BaseText>;
        case "hideReply":
            return null;
    }
}

function activeNowView(cards) {
    if (!Array.isArray(cards)) return cards;

    return cards.filter(card => {
        if (!card?.key) return false;

        const newKey = card.key.match(/(?:user-|party-spotify:)(.+)/)?.[1];
        if (newKey) return !shouldHideUser(newKey);

        if (card.key.startsWith("channel-") && settings.store.hideVc) {
            const { party } = card.props;
            if (!party) return true;

            const { applicationStreams, partiedMembers, priorityMembers, voiceChannels } = party;
            voiceChannels?.forEach(vc => vc.members = vc.members?.filter(m => !shouldHideUser(m.id)) ?? []);
            party.applicationStreams = (applicationStreams ?? []).filter(applicationStream => !shouldHideUser(applicationStream.streamUser.id));
            party.priorityMembers = priorityMembers?.filter(m => !shouldHideUser(m.user.id)) ?? [];
            party.partiedMembers = partiedMembers?.filter(m => !shouldHideUser(m.id)) ?? [];

            const hasMembers = (voiceChannels?.some(vc => vc.members?.length) ?? false) ||
                (party.partiedMembers?.length ?? 0) ||
                (party.priorityMembers?.length ?? 0) ||
                (party.applicationStreams?.length ?? 0);

            return hasMembers;
        }

        return true;
    });
}

export default definePlugin({
    name: "ClientSideBlock",
    description: () => t(plugin.clientSideBlock.description),
    authors: [Devs.Samwich, PcDevs.MutanPlex, PcDevs.KamiRu],
    settings,

    activeNowView,
    shouldHideUser,
    hiddenReplyComponent,
    isRoleAllBlockedMembers,

    patches: [
        // message
        {
            find: ".NITRO_NOTIFICATION,[",
            replacement: {
                match: /renderContentOnly:\i}=\i;/,
                replace: "$&if($self.shouldHideUser(arguments[0].message.author.id, arguments[0].message.channel_id)) return null; "
            }
        },
        // friends list (should work with all tabs)
        {
            find: "peopleListItemRef.current.componentWillLeave",
            replacement: {
                match: /\i}=this.state;/,
                replace: "$&if($self.shouldHideUser(this.props.user.id)) return null; "
            }
        },
        // member list
        {
            find: "._areActivitiesExperimentallyHidden=(",
            replacement: {
                match: /(?<=user:(\i),guildId:\i,channel:(\i).*?)BOOST_GEM_ICON.{0,10}\);/,
                replace: "$&if($self.shouldHideUser($1.id, $2.id)) return null; "
            }
        },
        // stop the role header from displaying if all users with that role are hidden (wip sorta)
        {
            find: "._areActivitiesExperimentallyHidden=(",
            replacement: {
                match: /\i.memo\(function\(\i\){/,
                replace: "$&if($self.isRoleAllBlockedMembers(arguments[0].id, arguments[0].guildId)) return null;"
            },
            predicate: () => settings.store.hideEmptyRoles
        },
        // "1 blocked message"
        {
            find: "#{intl::BLOCKED_MESSAGE_COUNT}}",
            replacement: {
                match: /1:\i\.content.length;/,
                replace: "$&return null;"
            },
            predicate: () => settings.store.hideBlockedMessages
        },
        // replies
        {
            find: ".GUILD_APPLICATION_PREMIUM_SUBSCRIPTION||",
            replacement: [
                {
                    match: /(?=let \i,\{repliedAuthor:)/,
                    replace: "if(arguments[0]?.referencedMessage?.message && $self.shouldHideUser(arguments[0].referencedMessage.message.author.id, arguments[0].baseMessage.messageReference.channel_id)) { return $self.hiddenReplyComponent(); }"
                }
            ]
        },
        // dm list
        {
            find: "PrivateChannel.renderAvatar",
            replacement: {
                // horror but it works
                match: /(return \i\.isMultiUserDM\(\))(?<=function\(\i,(\i),\i\){.*)/,
                replace: "if($2.rawRecipients[0] && $2.rawRecipients[0]?.id){if($self.shouldHideUser($2.rawRecipients[0].id)) return null;}$1"
            }
        },
        // thank nick (644298972420374528) for these patches :3

        // filter relationships
        {
            find: "getFriendIDs(){",
            replacement: {
                match: /\?\?\[\]\)\),\i\.friends/,
                replace: "$&.filter(id => !$self.shouldHideUser(id))"
            }
        },
        // active now list
        {
            find: "ACTIVE_NOW_COLUMN)",
            replacement: {
                match: /(\i\.\i),\{(?=\}\)\])/,
                replace: '"div",{children:$self.activeNowView($1())'
            }
        },
        // mutual friends list in user profile
        {
            find: "}getMutualFriends(",
            replacement: {
                match: /(getMutualFriends\(\i\){)return (\i\.get\(\i\))/,
                replace: "$1if($2) return $2.filter(u => !$self.shouldHideUser(u.key))"
            }
        }
    ]
});
