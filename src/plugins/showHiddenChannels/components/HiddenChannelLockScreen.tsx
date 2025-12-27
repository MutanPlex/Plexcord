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
import { isPluginEnabled } from "@api/PluginManager";
import { Settings } from "@api/Settings";
import { BaseText } from "@components/BaseText";
import ErrorBoundary from "@components/ErrorBoundary";
import type { Channel } from "@plexcord/discord-types";
import PermissionsViewerPlugin from "@plugins/permissionsViewer";
import openRolesAndUsersPermissionsModal, { PermissionType, RoleOrUserPermission } from "@plugins/permissionsViewer/components/RolesAndUsersPermissions";
import { sortPermissionOverwrites } from "@plugins/permissionsViewer/utils";
import { classes } from "@utils/misc";
import { formatDuration } from "@utils/text";
import { findByPropsLazy, findComponentByCodeLazy } from "@webpack";
import { EmojiStore, FluxDispatcher, GuildMemberStore, GuildStore, Parser, PermissionsBits, PermissionStore, SnowflakeUtils, Timestamp, Tooltip, useEffect, useState } from "@webpack/common";

import { cl, settings } from "..";

const enum SortOrderTypes {
    LATEST_ACTIVITY = 0,
    CREATION_DATE = 1
}

const enum ForumLayoutTypes {
    DEFAULT = 0,
    LIST = 1,
    GRID = 2
}

interface DefaultReaction {
    emojiId: string | null;
    emojiName: string | null;
}

interface Tag {
    id: string;
    name: string;
    emojiId: string | null;
    emojiName: string | null;
    moderated: boolean;
}

interface ExtendedChannel extends Channel {
    defaultThreadRateLimitPerUser?: number;
    defaultSortOrder?: SortOrderTypes | null;
    defaultForumLayout?: ForumLayoutTypes;
    defaultReactionEmoji?: DefaultReaction | null;
    availableTags?: Array<Tag>;
}

const enum ChannelTypes {
    GUILD_TEXT = 0,
    GUILD_VOICE = 2,
    GUILD_ANNOUNCEMENT = 5,
    GUILD_STAGE_VOICE = 13,
    GUILD_FORUM = 15
}

const enum VideoQualityModes {
    AUTO = 1,
    FULL = 2
}

const enum ChannelFlags {
    PINNED = 1 << 1,
    REQUIRE_TAG = 1 << 4
}

const ChatScrollClasses = findByPropsLazy("auto", "managedReactiveScroller");
const ChannelBeginHeader = findComponentByCodeLazy("#{intl::ROLE_REQUIRED_SINGLE_USER_MESSAGE}");
const TagComponent = findComponentByCodeLazy("#{intl::FORUM_TAG_A11Y_FILTER_BY_TAG}");

const EmojiParser = findByPropsLazy("convertSurrogateToName");
const EmojiUtils = findByPropsLazy("getURL", "getEmojiColors");

const getChannelTypeName = (type: ChannelTypes) => {
    switch (type) {
        case ChannelTypes.GUILD_TEXT: return t(plugin.showHiddenChannels.channelType.text);
        case ChannelTypes.GUILD_ANNOUNCEMENT: return t(plugin.showHiddenChannels.channelType.announcement);
        case ChannelTypes.GUILD_FORUM: return t(plugin.showHiddenChannels.channelType.forum);
        case ChannelTypes.GUILD_VOICE: return t(plugin.showHiddenChannels.channelType.voice);
        case ChannelTypes.GUILD_STAGE_VOICE: return t(plugin.showHiddenChannels.channelType.stage);
        default: return t(plugin.showHiddenChannels.modal.unknown);
    }
};

const getSortOrderName = (order: SortOrderTypes) => {
    switch (order) {
        case SortOrderTypes.LATEST_ACTIVITY: return t(plugin.showHiddenChannels.sortOrder.latestActivity);
        case SortOrderTypes.CREATION_DATE: return t(plugin.showHiddenChannels.sortOrder.creationDate);
        default: return t(plugin.showHiddenChannels.modal.unknown);
    }
};

const getForumLayoutName = (layout: ForumLayoutTypes) => {
    switch (layout) {
        case ForumLayoutTypes.DEFAULT: return t(plugin.showHiddenChannels.forumLayout.default);
        case ForumLayoutTypes.LIST: return t(plugin.showHiddenChannels.forumLayout.list);
        case ForumLayoutTypes.GRID: return t(plugin.showHiddenChannels.forumLayout.grid);
        default: return t(plugin.showHiddenChannels.modal.unknown);
    }
};

const getVideoQualityName = (quality: VideoQualityModes) => {
    switch (quality) {
        case VideoQualityModes.AUTO: return t(plugin.showHiddenChannels.videoQuality.auto);
        case VideoQualityModes.FULL: return t(plugin.showHiddenChannels.videoQuality.full);
        default: return t(plugin.showHiddenChannels.modal.unknown);
    }
};

// Icon from the modal when clicking a message link you don't have access to view
const HiddenChannelLogo = "/assets/433e3ec4319a9d11b0cbe39342614982.svg";

function HiddenChannelLockScreen({ channel }: { channel: ExtendedChannel; }) {
    const { defaultAllowedUsersAndRolesDropdownState } = settings.use(["defaultAllowedUsersAndRolesDropdownState"]);
    const [permissions, setPermissions] = useState<RoleOrUserPermission[]>([]);

    const {
        type,
        topic,
        lastMessageId,
        defaultForumLayout,
        lastPinTimestamp,
        defaultAutoArchiveDuration,
        availableTags,
        id: channelId,
        rateLimitPerUser,
        defaultThreadRateLimitPerUser,
        defaultSortOrder,
        defaultReactionEmoji,
        bitrate,
        rtcRegion,
        videoQualityMode,
        permissionOverwrites,
        guild_id
    } = channel;

    useEffect(() => {
        const membersToFetch: Array<string> = [];

        const guildOwnerId = GuildStore.getGuild(guild_id).ownerId;
        if (!GuildMemberStore.getMember(guild_id, guildOwnerId)) membersToFetch.push(guildOwnerId);

        Object.values(permissionOverwrites).forEach(({ type, id: userId }) => {
            if (type === 1 && !GuildMemberStore.getMember(guild_id, userId)) {
                membersToFetch.push(userId);
            }
        });

        if (membersToFetch.length > 0) {
            FluxDispatcher.dispatch({
                type: "GUILD_MEMBERS_REQUEST",
                guildIds: [guild_id],
                userIds: membersToFetch
            });
        }

        if (Settings.plugins.PermissionsViewer.enabled) {
            setPermissions(sortPermissionOverwrites(Object.values(permissionOverwrites).map(overwrite => ({
                type: overwrite.type as PermissionType,
                id: overwrite.id,
                overwriteAllow: overwrite.allow,
                overwriteDeny: overwrite.deny
            })), guild_id));
        }
    }, [channelId]);

    return (
        <div className={classes(ChatScrollClasses.auto, ChatScrollClasses.customTheme, ChatScrollClasses.managedReactiveScroller)}>
            <div className={cl("container")}>
                <img className={cl("logo")} src={HiddenChannelLogo} />

                <div className={cl("heading-container")}>
                    <BaseText size="xxl" weight="bold">{t(plugin.showHiddenChannels.modal.thisIsA, { status: !PermissionStore.can(PermissionsBits.VIEW_CHANNEL, channel) ? t(plugin.showHiddenChannels.modal.hidden) : t(plugin.showHiddenChannels.modal.locked), channelType: getChannelTypeName(type) })}</BaseText>
                    {channel.isNSFW() &&
                        <Tooltip text="NSFW">
                            {({ onMouseLeave, onMouseEnter }) => (
                                <svg
                                    onMouseLeave={onMouseLeave}
                                    onMouseEnter={onMouseEnter}
                                    className={cl("heading-nsfw-icon")}
                                    width="32"
                                    height="32"
                                    viewBox="0 0 48 48"
                                    aria-hidden={true}
                                    role="img"
                                >
                                    <path fill="currentColor" d="M.7 43.05 24 2.85l23.3 40.2Zm23.55-6.25q.75 0 1.275-.525.525-.525.525-1.275 0-.75-.525-1.3t-1.275-.55q-.8 0-1.325.55-.525.55-.525 1.3t.55 1.275q.55.525 1.3.525Zm-1.85-6.1h3.65V19.4H22.4Z" />
                                </svg>
                            )}
                        </Tooltip>
                    }
                </div>

                {(!channel.isGuildVoice() && !channel.isGuildStageVoice()) && (
                    <BaseText size="lg" weight="normal">
                        {t(plugin.showHiddenChannels.modal.canNotSee, { type: channel.isForumChannel() ? t(plugin.showHiddenChannels.modal.posts) : t(plugin.showHiddenChannels.modal.messages) })}
                        {channel.isForumChannel() && topic && topic.length > 0 && " " + t(plugin.showHiddenChannels.modal.guidelines)}
                    </BaseText>
                )}

                {channel.isForumChannel() && topic && topic.length > 0 && (
                    <div className={cl("topic-container")}>
                        {Parser.parseTopic(topic, false, { channelId })}
                    </div>
                )}

                {lastMessageId &&
                    <BaseText size="md" weight="normal">
                        {t(plugin.showHiddenChannels.modal.lastCreated, { type: channel.isForumChannel() ? t(plugin.showHiddenChannels.modal.post) : t(plugin.showHiddenChannels.modal.message) })}
                        <Timestamp timestamp={new Date(SnowflakeUtils.extractTimestamp(lastMessageId))} />
                    </BaseText>
                }
                {lastPinTimestamp &&
                    <BaseText size="md" weight="normal">{t(plugin.showHiddenChannels.modal.lastPin)} <Timestamp timestamp={new Date(lastPinTimestamp)} /></BaseText>
                }
                {(rateLimitPerUser ?? 0) > 0 &&
                    <BaseText size="md" weight="normal">{t(plugin.showHiddenChannels.modal.slowmode)} {formatDuration(rateLimitPerUser!, "seconds")}</BaseText>
                }
                {(defaultThreadRateLimitPerUser ?? 0) > 0 &&
                    <BaseText size="md" weight="normal">
                        {t(plugin.showHiddenChannels.modal.threadSlowmode)} {formatDuration(defaultThreadRateLimitPerUser!, "seconds")}
                    </BaseText>
                }
                {((channel.isGuildVoice() || channel.isGuildStageVoice()) && bitrate != null) &&
                    <BaseText size="md" weight="normal">{t(plugin.showHiddenChannels.modal.bitrate)} {bitrate} bits</BaseText>
                }
                {rtcRegion !== undefined &&
                    <BaseText size="md" weight="normal">{t(plugin.showHiddenChannels.modal.region)} {rtcRegion ?? t(plugin.showHiddenChannels.modal.automatic)}</BaseText>
                }
                {(channel.isGuildVoice() || channel.isGuildStageVoice()) &&
                    <BaseText size="md" weight="normal">{t(plugin.showHiddenChannels.modal.videoQuality)} {getVideoQualityName(videoQualityMode ?? VideoQualityModes.AUTO)}</BaseText>
                }
                {(defaultAutoArchiveDuration ?? 0) > 0 &&
                    <BaseText size="md" weight="normal">
                        {t(plugin.showHiddenChannels.modal.inactiveArchiveDuration, { type: channel.isForumChannel() ? t(plugin.showHiddenChannels.modal.posts) : t(plugin.showHiddenChannels.modal.threads) })}
                        {" " + formatDuration(defaultAutoArchiveDuration!, "minutes")}
                    </BaseText>
                }
                {defaultForumLayout != null &&
                    <BaseText size="md" weight="normal">{t(plugin.showHiddenChannels.modal.defaultLayout)} {getForumLayoutName(defaultForumLayout)}</BaseText>
                }
                {defaultSortOrder != null &&
                    <BaseText size="md" weight="normal">{t(plugin.showHiddenChannels.modal.defaultSort)} {getSortOrderName(defaultSortOrder)}</BaseText>
                }
                {defaultReactionEmoji != null &&
                    <div className={cl("default-emoji-container")}>
                        <BaseText size="md" weight="normal">{t(plugin.showHiddenChannels.modal.defaultReaction)}</BaseText>
                        {Parser.defaultRules[defaultReactionEmoji.emojiName ? "emoji" : "customEmoji"].react({
                            name: defaultReactionEmoji.emojiName
                                ? EmojiParser.convertSurrogateToName(defaultReactionEmoji.emojiName)
                                : EmojiStore.getCustomEmojiById(defaultReactionEmoji.emojiId)?.name ?? "",
                            emojiId: defaultReactionEmoji.emojiId ?? void 0,
                            surrogate: defaultReactionEmoji.emojiName ?? void 0,
                            src: defaultReactionEmoji.emojiName
                                ? EmojiUtils.getURL(defaultReactionEmoji.emojiName)
                                : void 0
                        }, void 0, { key: 0 })}
                    </div>
                }
                {channel.hasFlag(ChannelFlags.REQUIRE_TAG) &&
                    <BaseText size="md" weight="normal">{t(plugin.showHiddenChannels.modal.requireTag)}</BaseText>
                }
                {availableTags && availableTags.length > 0 &&
                    <div className={cl("tags-container")}>
                        <BaseText size="lg" weight="bold">{t(plugin.showHiddenChannels.modal.availableTags)}</BaseText>
                        <div className={cl("tags")}>
                            {availableTags.map(tag => <TagComponent tag={tag} key={tag.id} />)}
                        </div>
                    </div>
                }
                <div className={cl("allowed-users-and-roles-container")}>
                    <div className={cl("allowed-users-and-roles-container-title")}>
                        {isPluginEnabled(PermissionsViewerPlugin.name) && (
                            <Tooltip text={t(plugin.showHiddenChannels.modal.permissionDetails)}>
                                {({ onMouseLeave, onMouseEnter }) => (
                                    <button
                                        onMouseLeave={onMouseLeave}
                                        onMouseEnter={onMouseEnter}
                                        className={cl("allowed-users-and-roles-container-permdetails-btn")}
                                        onClick={() => openRolesAndUsersPermissionsModal(permissions, GuildStore.getGuild(channel.guild_id), channel.name)}
                                    >
                                        <svg
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                        >
                                            <path fill="currentColor" d="M7 12.001C7 10.8964 6.10457 10.001 5 10.001C3.89543 10.001 3 10.8964 3 12.001C3 13.1055 3.89543 14.001 5 14.001C6.10457 14.001 7 13.1055 7 12.001ZM14 12.001C14 10.8964 13.1046 10.001 12 10.001C10.8954 10.001 10 10.8964 10 12.001C10 13.1055 10.8954 14.001 12 14.001C13.1046 14.001 14 13.1055 14 12.001ZM19 10.001C20.1046 10.001 21 10.8964 21 12.001C21 13.1055 20.1046 14.001 19 14.001C17.8954 14.001 17 13.1055 17 12.001C17 10.8964 17.8954 10.001 19 10.001Z" />
                                        </svg>
                                    </button>
                                )}
                            </Tooltip>
                        )}
                        <BaseText size="lg" weight="bold">{t(plugin.showHiddenChannels.modal.allowedUsersAndRoles)}</BaseText>
                        <Tooltip text={defaultAllowedUsersAndRolesDropdownState ? t(plugin.showHiddenChannels.modal.hideAllowedUsersAndRoles) : t(plugin.showHiddenChannels.modal.viewAllowedUsersAndRoles)}>
                            {({ onMouseLeave, onMouseEnter }) => (
                                <button
                                    onMouseLeave={onMouseLeave}
                                    onMouseEnter={onMouseEnter}
                                    className={cl("allowed-users-and-roles-container-toggle-btn")}
                                    onClick={() => settings.store.defaultAllowedUsersAndRolesDropdownState = !defaultAllowedUsersAndRolesDropdownState}
                                >
                                    <svg
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        transform={defaultAllowedUsersAndRolesDropdownState ? "scale(1 -1)" : "scale(1 1)"}
                                    >
                                        <path fill="currentColor" d="M16.59 8.59003L12 13.17L7.41 8.59003L6 10L12 16L18 10L16.59 8.59003Z" />
                                    </svg>
                                </button>
                            )}
                        </Tooltip>
                    </div>
                    {defaultAllowedUsersAndRolesDropdownState && <ChannelBeginHeader channel={channel} />}
                </div>
            </div>
        </div>
    );
}

export default ErrorBoundary.wrap(HiddenChannelLockScreen);
