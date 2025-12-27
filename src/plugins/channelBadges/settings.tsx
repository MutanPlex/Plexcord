/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2024 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { plugin, t } from "@api/i18n";
import { definePluginSettings } from "@api/Settings";
import { OptionType } from "@utils/types";

import { reloadBadges } from "./index";

const settings = definePluginSettings({
    oneBadgePerChannel: {
        label: () => t(plugin.channelBadges.option.oneBadgePerChannel.label),
        description: () => t(plugin.channelBadges.option.oneBadgePerChannel.description),
        type: OptionType.BOOLEAN,
        default: false,
        onChange: reloadBadges,
    },
    showTextBadge: {
        label: () => t(plugin.channelBadges.option.showTextBadge.label),
        description: () => t(plugin.channelBadges.option.showTextBadge.description),
        type: OptionType.BOOLEAN,
        default: true,
        onChange: reloadBadges,
    },
    showVoiceBadge: {
        label: () => t(plugin.channelBadges.option.showVoiceBadge.label),
        description: () => t(plugin.channelBadges.option.showVoiceBadge.description),
        type: OptionType.BOOLEAN,
        default: true,
        onChange: reloadBadges,
    },
    showCategoryBadge: {
        label: () => t(plugin.channelBadges.option.showCategoryBadge.label),
        description: () => t(plugin.channelBadges.option.showCategoryBadge.description),
        type: OptionType.BOOLEAN,
        default: true,
        onChange: reloadBadges,
    },
    showDirectoryBadge: {
        label: () => t(plugin.channelBadges.option.showDirectoryBadge.label),
        description: () => t(plugin.channelBadges.option.showDirectoryBadge.description),
        type: OptionType.BOOLEAN,
        default: true,
        onChange: reloadBadges,
    },
    showAnnouncementThreadBadge: {
        label: () => t(plugin.channelBadges.option.showAnnouncementThreadBadge.label),
        description: () => t(plugin.channelBadges.option.showAnnouncementThreadBadge.description),
        type: OptionType.BOOLEAN,
        default: true,
        onChange: reloadBadges,
    },
    showPublicThreadBadge: {
        label: () => t(plugin.channelBadges.option.showPublicThreadBadge.label),
        description: () => t(plugin.channelBadges.option.showPublicThreadBadge.description),
        type: OptionType.BOOLEAN,
        default: true,
        onChange: reloadBadges,
    },
    showPrivateThreadBadge: {
        label: () => t(plugin.channelBadges.option.showPrivateThreadBadge.label),
        description: () => t(plugin.channelBadges.option.showPrivateThreadBadge.description),
        type: OptionType.BOOLEAN,
        default: true,
        onChange: reloadBadges,
    },
    showStageBadge: {
        label: () => t(plugin.channelBadges.option.showStageBadge.label),
        description: () => t(plugin.channelBadges.option.showStageBadge.description),
        type: OptionType.BOOLEAN,
        default: true,
        onChange: reloadBadges,
    },
    showAnnouncementBadge: {
        label: () => t(plugin.channelBadges.option.showAnnouncementBadge.label),
        description: () => t(plugin.channelBadges.option.showAnnouncementBadge.description),
        type: OptionType.BOOLEAN,
        default: true,
        onChange: reloadBadges,
    },
    showForumBadge: {
        label: () => t(plugin.channelBadges.option.showForumBadge.label),
        description: () => t(plugin.channelBadges.option.showForumBadge.description),
        type: OptionType.BOOLEAN,
        default: true,
        onChange: reloadBadges,
    },
    showMediaBadge: {
        label: () => t(plugin.channelBadges.option.showMediaBadge.label),
        description: () => t(plugin.channelBadges.option.showMediaBadge.description),
        type: OptionType.BOOLEAN,
        default: true,
        onChange: reloadBadges,
    },
    showNSFWBadge: {
        label: () => t(plugin.channelBadges.option.showNSFWBadge.label),
        description: () => t(plugin.channelBadges.option.showNSFWBadge.description),
        type: OptionType.BOOLEAN,
        default: true,
        onChange: reloadBadges,
    },
    showLockedBadge: {
        label: () => t(plugin.channelBadges.option.showLockedBadge.label),
        description: () => t(plugin.channelBadges.option.showLockedBadge.description),
        type: OptionType.BOOLEAN,
        default: true,
        onChange: reloadBadges,
    },
    showRulesBadge: {
        label: () => t(plugin.channelBadges.option.showRulesBadge.label),
        description: () => t(plugin.channelBadges.option.showRulesBadge.description),
        type: OptionType.BOOLEAN,
        default: true,
        onChange: reloadBadges,
    },
    showUnknownBadge: {
        label: () => t(plugin.channelBadges.option.showUnknownBadge.label),
        description: () => t(plugin.channelBadges.option.showUnknownBadge.description),
        type: OptionType.BOOLEAN,
        default: true,
        onChange: reloadBadges,
    },
    textBadgeLabel: {
        label: () => t(plugin.channelBadges.option.textBadgeLabel.label),
        description: () => t(plugin.channelBadges.option.textBadgeLabel.description),
        default: () => t(plugin.channelBadges.option.textBadgeLabel.default),
        type: OptionType.STRING,
        onChange: reloadBadges,
    },
    voiceBadgeLabel: {
        label: () => t(plugin.channelBadges.option.voiceBadgeLabel.label),
        description: () => t(plugin.channelBadges.option.voiceBadgeLabel.description),
        default: () => t(plugin.channelBadges.option.voiceBadgeLabel.default),
        type: OptionType.STRING,
        onChange: reloadBadges,
    },
    categoryBadgeLabel: {
        label: () => t(plugin.channelBadges.option.categoryBadgeLabel.label),
        description: () => t(plugin.channelBadges.option.categoryBadgeLabel.description),
        default: () => t(plugin.channelBadges.option.categoryBadgeLabel.default),
        type: OptionType.STRING,
        onChange: reloadBadges,
    },
    announcementBadgeLabel: {
        label: () => t(plugin.channelBadges.option.announcementBadgeLabel.label),
        description: () => t(plugin.channelBadges.option.announcementBadgeLabel.description),
        default: () => t(plugin.channelBadges.option.announcementBadgeLabel.default),
        type: OptionType.STRING,
        onChange: reloadBadges,
    },
    announcementThreadBadgeLabel: {
        label: () => t(plugin.channelBadges.option.announcementThreadBadgeLabel.label),
        description: () => t(plugin.channelBadges.option.announcementThreadBadgeLabel.description),
        default: () => t(plugin.channelBadges.option.announcementThreadBadgeLabel.default),
        type: OptionType.STRING,
        onChange: reloadBadges,
    },
    publicThreadBadgeLabel: {
        label: () => t(plugin.channelBadges.option.publicThreadBadgeLabel.label),
        description: () => t(plugin.channelBadges.option.publicThreadBadgeLabel.description),
        default: () => t(plugin.channelBadges.option.publicThreadBadgeLabel.default),
        type: OptionType.STRING,
        onChange: reloadBadges,
    },
    privateThreadBadgeLabel: {
        label: () => t(plugin.channelBadges.option.privateThreadBadgeLabel.label),
        description: () => t(plugin.channelBadges.option.privateThreadBadgeLabel.description),
        default: () => t(plugin.channelBadges.option.privateThreadBadgeLabel.default),
        type: OptionType.STRING,
        onChange: reloadBadges,
    },
    stageBadgeLabel: {
        label: () => t(plugin.channelBadges.option.stageBadgeLabel.label),
        description: () => t(plugin.channelBadges.option.stageBadgeLabel.description),
        default: () => t(plugin.channelBadges.option.stageBadgeLabel.default),
        type: OptionType.STRING,
        onChange: reloadBadges,
    },
    directoryBadgeLabel: {
        label: () => t(plugin.channelBadges.option.directoryBadgeLabel.label),
        description: () => t(plugin.channelBadges.option.directoryBadgeLabel.description),
        default: () => t(plugin.channelBadges.option.directoryBadgeLabel.default),
        type: OptionType.STRING,
        onChange: reloadBadges,
    },
    forumBadgeLabel: {
        label: () => t(plugin.channelBadges.option.forumBadgeLabel.label),
        description: () => t(plugin.channelBadges.option.forumBadgeLabel.description),
        default: () => t(plugin.channelBadges.option.forumBadgeLabel.default),
        type: OptionType.STRING,
        onChange: reloadBadges,
    },
    mediaBadgeLabel: {
        label: () => t(plugin.channelBadges.option.mediaBadgeLabel.label),
        description: () => t(plugin.channelBadges.option.mediaBadgeLabel.description),
        default: () => t(plugin.channelBadges.option.mediaBadgeLabel.default),
        type: OptionType.STRING,
        onChange: reloadBadges,
    },
    nsfwBadgeLabel: {
        label: () => t(plugin.channelBadges.option.nsfwBadgeLabel.label),
        description: () => t(plugin.channelBadges.option.nsfwBadgeLabel.description),
        default: () => t(plugin.channelBadges.option.nsfwBadgeLabel.default),
        type: OptionType.STRING,
        onChange: reloadBadges,
    },
    lockedBadgeLabel: {
        label: () => t(plugin.channelBadges.option.lockedBadgeLabel.label),
        description: () => t(plugin.channelBadges.option.lockedBadgeLabel.description),
        default: () => t(plugin.channelBadges.option.lockedBadgeLabel.default),
        type: OptionType.STRING,
        onChange: reloadBadges,
    },
    rulesBadgeLabel: {
        label: () => t(plugin.channelBadges.option.rulesBadgeLabel.label),
        description: () => t(plugin.channelBadges.option.rulesBadgeLabel.description),
        default: () => t(plugin.channelBadges.option.rulesBadgeLabel.default),
        type: OptionType.STRING,
        onChange: reloadBadges,
    },
    unknownBadgeLabel: {
        label: () => t(plugin.channelBadges.option.unknownBadgeLabel.label),
        description: () => t(plugin.channelBadges.option.unknownBadgeLabel.description),
        default: () => t(plugin.channelBadges.option.unknownBadgeLabel.default),
        type: OptionType.STRING,
        onChange: reloadBadges,
    },

    textBadgeColor: {
        label: () => t(plugin.channelBadges.option.textBadgeColor.label),
        description: () => t(plugin.channelBadges.option.textBadgeColor.description),
        type: OptionType.STRING,
        onChange: reloadBadges,
    },
    voiceBadgeColor: {
        label: () => t(plugin.channelBadges.option.voiceBadgeColor.label),
        description: () => t(plugin.channelBadges.option.voiceBadgeColor.description),
        type: OptionType.STRING,
        onChange: reloadBadges,
    },
    categoryBadgeColor: {
        label: () => t(plugin.channelBadges.option.categoryBadgeColor.label),
        description: () => t(plugin.channelBadges.option.categoryBadgeColor.description),
        type: OptionType.STRING,
        onChange: reloadBadges,
    },
    announcementBadgeColor: {
        label: () => t(plugin.channelBadges.option.announcementBadgeColor.label),
        description: () => t(plugin.channelBadges.option.announcementBadgeColor.description),
        type: OptionType.STRING,
        onChange: reloadBadges,
    },
    announcementThreadBadgeColor: {
        label: () => t(plugin.channelBadges.option.announcementThreadBadgeColor.label),
        description: () => t(plugin.channelBadges.option.announcementThreadBadgeColor.description),
        type: OptionType.STRING,
        onChange: reloadBadges,
    },
    publicThreadBadgeColor: {
        label: () => t(plugin.channelBadges.option.publicThreadBadgeColor.label),
        description: () => t(plugin.channelBadges.option.publicThreadBadgeColor.description),
        type: OptionType.STRING,
        onChange: reloadBadges,
    },
    privateThreadBadgeColor: {
        label: () => t(plugin.channelBadges.option.privateThreadBadgeColor.label),
        description: () => t(plugin.channelBadges.option.privateThreadBadgeColor.description),
        type: OptionType.STRING,
        onChange: reloadBadges,
    },
    stageBadgeColor: {
        label: () => t(plugin.channelBadges.option.stageBadgeColor.label),
        description: () => t(plugin.channelBadges.option.stageBadgeColor.description),
        type: OptionType.STRING,
        onChange: reloadBadges,
    },
    directoryBadgeColor: {
        label: () => t(plugin.channelBadges.option.directoryBadgeColor.label),
        description: () => t(plugin.channelBadges.option.directoryBadgeColor.description),
        type: OptionType.STRING,
        onChange: reloadBadges,
    },
    forumBadgeColor: {
        label: () => t(plugin.channelBadges.option.forumBadgeColor.label),
        description: () => t(plugin.channelBadges.option.forumBadgeColor.description),
        type: OptionType.STRING,
        onChange: reloadBadges,
    },
    mediaBadgeColor: {
        label: () => t(plugin.channelBadges.option.mediaBadgeColor.label),
        description: () => t(plugin.channelBadges.option.mediaBadgeColor.description),
        type: OptionType.STRING,
        onChange: reloadBadges,
    },
    nsfwBadgeColor: {
        label: () => t(plugin.channelBadges.option.nsfwBadgeColor.label),
        description: () => t(plugin.channelBadges.option.nsfwBadgeColor.description),
        type: OptionType.STRING,
        onChange: reloadBadges,
    },
    lockedBadgeColor: {
        label: () => t(plugin.channelBadges.option.lockedBadgeColor.label),
        description: () => t(plugin.channelBadges.option.lockedBadgeColor.description),
        type: OptionType.STRING,
        onChange: reloadBadges,
    },
    rulesBadgeColor: {
        label: () => t(plugin.channelBadges.option.rulesBadgeColor.label),
        description: () => t(plugin.channelBadges.option.rulesBadgeColor.description),
        type: OptionType.STRING,
        onChange: reloadBadges,
    },
    unknownBadgeColor: {
        label: () => t(plugin.channelBadges.option.unknownBadgeColor.label),
        description: () => t(plugin.channelBadges.option.unknownBadgeColor.description),
        type: OptionType.STRING,
        onChange: reloadBadges,
    },
});

const defaultValues = {
    showTextBadge: true,
    showVoiceBadge: true,
    showCategoryBadge: true,
    showAnnouncementBadge: true,
    showAnnouncementThreadBadge: true,
    showPublicThreadBadge: true,
    showPrivateThreadBadge: true,
    showStageBadge: true,
    showDirectoryBadge: true,
    showForumBadge: true,
    showMediaBadge: true,
    showNSFWBadge: true,
    showLockedBadge: true,
    showRulesBadge: true,
    showUnknownBadge: true,

    channelBadges: {
        text: t(plugin.channelBadges.badges.text),
        voice: t(plugin.channelBadges.badges.voice),
        category: t(plugin.channelBadges.badges.category),
        announcement: t(plugin.channelBadges.badges.announcement),
        announcement_thread: t(plugin.channelBadges.badges.announcementThread),
        public_thread: t(plugin.channelBadges.badges.publicThread),
        private_thread: t(plugin.channelBadges.badges.privateThread),
        stage: t(plugin.channelBadges.badges.stage),
        directory: t(plugin.channelBadges.badges.directory),
        forum: t(plugin.channelBadges.badges.forum),
        media: t(plugin.channelBadges.badges.media),
        nsfw: t(plugin.channelBadges.badges.nsfw),
        locked: t(plugin.channelBadges.badges.locked),
        rules: t(plugin.channelBadges.badges.rules),
        unknown: t(plugin.channelBadges.badges.unknown)
    },
    lockedBadgeTooltip: t(plugin.channelBadges.tooltip.locked),
    nsfwBadgeTooltip: t(plugin.channelBadges.tooltip.nsfw),
};

function isEnabled(type: number) {
    const fromValues = settings.store;

    switch (type) {
        case 0:
            return fromValues.showTextBadge;
        case 2:
            return fromValues.showVoiceBadge;
        case 4:
            return fromValues.showCategoryBadge;
        case 5:
            return fromValues.showAnnouncementBadge;
        case 10:
            return fromValues.showAnnouncementThreadBadge;
        case 11:
            return fromValues.showPublicThreadBadge;
        case 12:
            return fromValues.showPrivateThreadBadge;
        case 13:
            return fromValues.showStageBadge;
        case 14:
            return fromValues.showDirectoryBadge;
        case 15:
            return fromValues.showForumBadge;
        case 16:
            return fromValues.showMediaBadge;
        case 6100:
            return fromValues.showNSFWBadge;
        case 6101:
            return fromValues.showLockedBadge;
        case 6102:
            return fromValues.showRulesBadge;
        default:
            return fromValues.showUnknownBadge;
    }
}

function returnChannelBadge(type: number) {
    switch (type) {
        case 0:
            return { css: "text", label: settings.store.textBadgeLabel, color: settings.store.textBadgeColor };
        case 2:
            return { css: "voice", label: settings.store.voiceBadgeLabel, color: settings.store.voiceBadgeColor };
        case 4:
            return { css: "category", label: settings.store.categoryBadgeLabel, color: settings.store.categoryBadgeColor };
        case 5:
            return { css: "announcement", label: settings.store.announcementBadgeLabel, color: settings.store.announcementBadgeColor };
        case 10:
            return { css: "announcement-thread", label: settings.store.announcementThreadBadgeLabel, color: settings.store.announcementThreadBadgeColor };
        case 11:
            return { css: "thread", label: settings.store.publicThreadBadgeLabel, color: settings.store.publicThreadBadgeColor };
        case 12:
            return { css: "private-thread", label: settings.store.privateThreadBadgeLabel, color: settings.store.privateThreadBadgeColor };
        case 13:
            return { css: "stage", label: settings.store.stageBadgeLabel, color: settings.store.stageBadgeColor };
        case 14:
            return { css: "directory", label: settings.store.directoryBadgeLabel, color: settings.store.directoryBadgeColor };
        case 15:
            return { css: "forum", label: settings.store.forumBadgeLabel, color: settings.store.forumBadgeColor };
        case 16:
            return { css: "media", label: settings.store.mediaBadgeLabel, color: settings.store.mediaBadgeColor };
        case 6100:
            return { css: "nsfw", label: settings.store.nsfwBadgeLabel, color: settings.store.nsfwBadgeColor };
        case 6101:
            return { css: "locked", label: settings.store.lockedBadgeLabel, color: settings.store.lockedBadgeColor };
        case 6102:
            return { css: "rules", label: settings.store.rulesBadgeLabel, color: settings.store.rulesBadgeColor };
        default:
            return { css: "unknown", label: settings.store.unknownBadgeLabel, color: settings.store.unknownBadgeColor };
    }
}

export { defaultValues, isEnabled, returnChannelBadge, settings };
