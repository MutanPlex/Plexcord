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
import ErrorBoundary from "@components/ErrorBoundary";
import { Heading } from "@components/Heading";
import { Paragraph } from "@components/Paragraph";
import { Text } from "@components/Text";
import type { Channel } from "@plexcord/discord-types";
import { ChannelFlags, ChannelType, ForumLayout, VideoQualityMode } from "@plexcord/discord-types/enums";
import { cl } from "@plugins/showHiddenChannels";
import { classes } from "@utils/misc";
import { formatDurationVerbose } from "@utils/text";
import { findCssClassesLazy } from "@webpack";
import { PermissionsBits, PermissionStore } from "@webpack/common";

const enum SortOrderTypes {
    LATEST_ACTIVITY = 0,
    CREATION_DATE = 1
}

const ChatScrollClasses = findCssClassesLazy("auto", "managedReactiveScroller", "customTheme");

const getChannelTypeName = (type: ChannelType) => {
    switch (type) {
        case ChannelType.GUILD_TEXT: return t(plugin.showHiddenChannels.channelType.text);
        case ChannelType.GUILD_ANNOUNCEMENT: return t(plugin.showHiddenChannels.channelType.announcement);
        case ChannelType.GUILD_FORUM: return t(plugin.showHiddenChannels.channelType.forum);
        case ChannelType.GUILD_VOICE: return t(plugin.showHiddenChannels.channelType.voice);
        case ChannelType.GUILD_STAGE_VOICE: return t(plugin.showHiddenChannels.channelType.stage);
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

const getForumLayoutName = (layout: ForumLayout) => {
    switch (layout) {
        case ForumLayout.DEFAULT: return t(plugin.showHiddenChannels.forumLayout.default);
        case ForumLayout.LIST: return t(plugin.showHiddenChannels.forumLayout.list);
        case ForumLayout.GRID: return t(plugin.showHiddenChannels.forumLayout.grid);
        default: return t(plugin.showHiddenChannels.modal.unknown);
    }
};

const getVideoQualityName = (quality: VideoQualityMode) => {
    switch (quality) {
        case VideoQualityMode.AUTO: return t(plugin.showHiddenChannels.videoQuality.auto);
        case VideoQualityMode.FULL: return t(plugin.showHiddenChannels.videoQuality.full);
        default: return t(plugin.showHiddenChannels.modal.unknown);
    }
};

// Icon from the modal when clicking a message link you don't have access to view
const HiddenChannelLogo = "/assets/433e3ec4319a9d11b0cbe39342614982.svg";

function HiddenChannelLockScreen({ channel }: { channel: Channel; }) {
    const {
        type,
        defaultForumLayout,
        defaultAutoArchiveDuration,
        rateLimitPerUser,
        defaultThreadRateLimitPerUser,
        defaultSortOrder,
        bitrate,
        rtcRegion,
        videoQualityMode
    } = channel;

    return (
        <div className={classes(ChatScrollClasses.auto, ChatScrollClasses.customTheme, ChatScrollClasses.managedReactiveScroller)}>
            <div className={cl("container")}>
                <img className={cl("logo")} src={HiddenChannelLogo} />

                <div className={cl("heading-container")}>
                    <Heading tag="h1" size="xxl">{t(plugin.showHiddenChannels.modal.thisIsA, { status: !PermissionStore.can(PermissionsBits.VIEW_CHANNEL, channel) ? t(plugin.showHiddenChannels.modal.hidden) : t(plugin.showHiddenChannels.modal.locked), channelType: getChannelTypeName(type) })}</Heading>
                </div>

                {(!channel.isGuildVoice() && !channel.isGuildStageVoice()) && (
                    <Paragraph size="lg">
                        {t(plugin.showHiddenChannels.modal.canNotSee, { type: channel.isForumChannel() ? t(plugin.showHiddenChannels.modal.posts) : t(plugin.showHiddenChannels.modal.messages) })}
                    </Paragraph>
                )}

                {(rateLimitPerUser ?? 0) > 0 &&
                    <Text size="md">{t(plugin.showHiddenChannels.modal.slowmode)} {formatDurationVerbose(rateLimitPerUser!, "seconds")}</Text>
                }
                {(defaultThreadRateLimitPerUser ?? 0) > 0 &&
                    <Text size="md">
                        {t(plugin.showHiddenChannels.modal.threadSlowmode)} {formatDurationVerbose(defaultThreadRateLimitPerUser!, "seconds")}
                    </Text>
                }
                {((channel.isGuildVoice() || channel.isGuildStageVoice()) && bitrate != null) &&
                    <Text size="md">{t(plugin.showHiddenChannels.modal.bitrate)} {bitrate} bits</Text>
                }
                {rtcRegion !== undefined &&
                    <Text size="md">{t(plugin.showHiddenChannels.modal.region)} {rtcRegion ?? t(plugin.showHiddenChannels.modal.automatic)}</Text>
                }
                {(channel.isGuildVoice() || channel.isGuildStageVoice()) &&
                    <Text size="md">{t(plugin.showHiddenChannels.modal.videoQuality)} {getVideoQualityName(videoQualityMode ?? VideoQualityMode.AUTO)}</Text>
                }
                {(defaultAutoArchiveDuration ?? 0) > 0 &&
                    <Text size="md">
                        {t(plugin.showHiddenChannels.modal.inactiveArchiveDuration, { type: channel.isForumChannel() ? t(plugin.showHiddenChannels.modal.posts) : t(plugin.showHiddenChannels.modal.threads) })}
                        {" " + formatDurationVerbose(defaultAutoArchiveDuration!, "minutes")}
                    </Text>
                }
                {defaultForumLayout != null &&
                    <Text size="md">{t(plugin.showHiddenChannels.modal.defaultLayout)} {getForumLayoutName(defaultForumLayout)}</Text>
                }
                {defaultSortOrder != null &&
                    <Text size="md">{t(plugin.showHiddenChannels.modal.defaultSort)} {getSortOrderName(defaultSortOrder)}</Text>
                }
                {channel.hasFlag(ChannelFlags.REQUIRE_TAG) &&
                    <Text size="md">{t(plugin.showHiddenChannels.modal.requireTag)}</Text>
                }
            </div>
        </div>
    );
}

export default ErrorBoundary.wrap(HiddenChannelLockScreen);
