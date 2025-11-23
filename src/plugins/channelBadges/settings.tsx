/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2024 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { t } from "@api/i18n";
import { definePluginSettings } from "@api/Settings";
import { OptionType } from "@utils/types";

import { reloadBadges } from "./index";

const settings = definePluginSettings({
    oneBadgePerChannel: {
        get label() {
            return t("plugin.channelBadges.option.oneBadgePerChannel.label");
        },
        get description() {
            return t("plugin.channelBadges.option.oneBadgePerChannel.description");
        },
        type: OptionType.BOOLEAN,
        default: false,
        onChange: reloadBadges,
    },
    showTextBadge: {
        get label() {
            return t("plugin.channelBadges.option.showTextBadge.label");
        },
        get description() {
            return t("plugin.channelBadges.option.showTextBadge.description");
        },
        type: OptionType.BOOLEAN,
        default: true,
        onChange: reloadBadges,
    },
    showVoiceBadge: {
        get label() {
            return t("plugin.channelBadges.option.showVoiceBadge.label");
        },
        get description() {
            return t("plugin.channelBadges.option.showVoiceBadge.description");
        },
        type: OptionType.BOOLEAN,
        default: true,
        onChange: reloadBadges,
    },
    showCategoryBadge: {
        get label() {
            return t("plugin.channelBadges.option.showCategoryBadge.label");
        },
        get description() {
            return t("plugin.channelBadges.option.showCategoryBadge.description");
        },
        type: OptionType.BOOLEAN,
        default: true,
        onChange: reloadBadges,
    },
    showDirectoryBadge: {
        get label() {
            return t("plugin.channelBadges.option.showDirectoryBadge.label");
        },
        get description() {
            return t("plugin.channelBadges.option.showDirectoryBadge.description");
        },
        type: OptionType.BOOLEAN,
        default: true,
        onChange: reloadBadges,
    },
    showAnnouncementThreadBadge: {
        get label() {
            return t("plugin.channelBadges.option.showAnnouncementThreadBadge.label");
        },
        get description() {
            return t("plugin.channelBadges.option.showAnnouncementThreadBadge.description");
        },
        type: OptionType.BOOLEAN,
        default: true,
        onChange: reloadBadges,
    },
    showPublicThreadBadge: {
        get label() {
            return t("plugin.channelBadges.option.showPublicThreadBadge.label");
        },
        get description() {
            return t("plugin.channelBadges.option.showPublicThreadBadge.description");
        },
        type: OptionType.BOOLEAN,
        default: true,
        onChange: reloadBadges,
    },
    showPrivateThreadBadge: {
        get label() {
            return t("plugin.channelBadges.option.showPrivateThreadBadge.label");
        },
        get description() {
            return t("plugin.channelBadges.option.showPrivateThreadBadge.description");
        },
        type: OptionType.BOOLEAN,
        default: true,
        onChange: reloadBadges,
    },
    showStageBadge: {
        get label() {
            return t("plugin.channelBadges.option.showStageBadge.label");
        },
        get description() {
            return t("plugin.channelBadges.option.showStageBadge.description");
        },
        type: OptionType.BOOLEAN,
        default: true,
        onChange: reloadBadges,
    },
    showAnnouncementBadge: {
        get label() {
            return t("plugin.channelBadges.option.showAnnouncementBadge.label");
        },
        get description() {
            return t("plugin.channelBadges.option.showAnnouncementBadge.description");
        },
        type: OptionType.BOOLEAN,
        default: true,
        onChange: reloadBadges,
    },
    showForumBadge: {
        get label() {
            return t("plugin.channelBadges.option.showForumBadge.label");
        },
        get description() {
            return t("plugin.channelBadges.option.showForumBadge.description");
        },
        type: OptionType.BOOLEAN,
        default: true,
        onChange: reloadBadges,
    },
    showMediaBadge: {
        get label() {
            return t("plugin.channelBadges.option.showMediaBadge.label");
        },
        get description() {
            return t("plugin.channelBadges.option.showMediaBadge.description");
        },
        type: OptionType.BOOLEAN,
        default: true,
        onChange: reloadBadges,
    },
    showNSFWBadge: {
        get label() {
            return t("plugin.channelBadges.option.showNSFWBadge.label");
        },
        get description() {
            return t("plugin.channelBadges.option.showNSFWBadge.description");
        },
        type: OptionType.BOOLEAN,
        default: true,
        onChange: reloadBadges,
    },
    showLockedBadge: {
        get label() {
            return t("plugin.channelBadges.option.showLockedBadge.label");
        },
        get description() {
            return t("plugin.channelBadges.option.showLockedBadge.description");
        },
        type: OptionType.BOOLEAN,
        default: true,
        onChange: reloadBadges,
    },
    showRulesBadge: {
        get label() {
            return t("plugin.channelBadges.option.showRulesBadge.label");
        },
        get description() {
            return t("plugin.channelBadges.option.showRulesBadge.description");
        },
        type: OptionType.BOOLEAN,
        default: true,
        onChange: reloadBadges,
    },
    showUnknownBadge: {
        get label() {
            return t("plugin.channelBadges.option.showUnknownBadge.label");
        },
        get description() {
            return t("plugin.channelBadges.option.showUnknownBadge.description");
        },
        type: OptionType.BOOLEAN,
        default: true,
        onChange: reloadBadges,
    },
    textBadgeLabel: {
        get label() {
            return t("plugin.channelBadges.option.textBadgeLabel.label");
        },
        get description() {
            return t("plugin.channelBadges.option.textBadgeLabel.description");
        },
        get default() {
            return t("plugin.channelBadges.option.textBadgeLabel.default");
        },
        type: OptionType.STRING,
        onChange: reloadBadges,
    },
    voiceBadgeLabel: {
        get label() {
            return t("plugin.channelBadges.option.voiceBadgeLabel.label");
        },
        get description() {
            return t("plugin.channelBadges.option.voiceBadgeLabel.description");
        },
        get default() {
            return t("plugin.channelBadges.option.voiceBadgeLabel.default");
        },
        type: OptionType.STRING,
        onChange: reloadBadges,
    },
    categoryBadgeLabel: {
        get label() {
            return t("plugin.channelBadges.option.categoryBadgeLabel.label");
        },
        get description() {
            return t("plugin.channelBadges.option.categoryBadgeLabel.description");
        },
        get default() {
            return t("plugin.channelBadges.option.categoryBadgeLabel.default");
        },
        type: OptionType.STRING,
        onChange: reloadBadges,
    },
    announcementBadgeLabel: {
        get label() {
            return t("plugin.channelBadges.option.announcementBadgeLabel.label");
        },
        get description() {
            return t("plugin.channelBadges.option.announcementBadgeLabel.description");
        },
        get default() {
            return t("plugin.channelBadges.option.announcementBadgeLabel.default");
        },
        type: OptionType.STRING,
        onChange: reloadBadges,
    },
    announcementThreadBadgeLabel: {
        get label() {
            return t("plugin.channelBadges.option.announcementThreadBadgeLabel.label");
        },
        get description() {
            return t("plugin.channelBadges.option.announcementThreadBadgeLabel.description");
        },
        get default() {
            return t("plugin.channelBadges.option.announcementThreadBadgeLabel.default");
        },
        type: OptionType.STRING,
        onChange: reloadBadges,
    },
    publicThreadBadgeLabel: {
        get label() {
            return t("plugin.channelBadges.option.publicThreadBadgeLabel.label");
        },
        get description() {
            return t("plugin.channelBadges.option.publicThreadBadgeLabel.description");
        },
        get default() {
            return t("plugin.channelBadges.option.publicThreadBadgeLabel.default");
        },
        type: OptionType.STRING,
        onChange: reloadBadges,
    },
    privateThreadBadgeLabel: {
        get label() {
            return t("plugin.channelBadges.option.privateThreadBadgeLabel.label");
        },
        get description() {
            return t("plugin.channelBadges.option.privateThreadBadgeLabel.description");
        },
        get default() {
            return t("plugin.channelBadges.option.privateThreadBadgeLabel.default");
        },
        type: OptionType.STRING,
        onChange: reloadBadges,
    },
    stageBadgeLabel: {
        get label() {
            return t("plugin.channelBadges.option.stageBadgeLabel.label");
        },
        get description() {
            return t("plugin.channelBadges.option.stageBadgeLabel.description");
        },
        get default() {
            return t("plugin.channelBadges.option.stageBadgeLabel.default");
        },
        type: OptionType.STRING,
        onChange: reloadBadges,
    },
    directoryBadgeLabel: {
        get label() {
            return t("plugin.channelBadges.option.directoryBadgeLabel.label");
        },
        get description() {
            return t("plugin.channelBadges.option.directoryBadgeLabel.description");
        },
        get default() {
            return t("plugin.channelBadges.option.directoryBadgeLabel.default");
        },
        type: OptionType.STRING,
        onChange: reloadBadges,
    },
    forumBadgeLabel: {
        get label() {
            return t("plugin.channelBadges.option.forumBadgeLabel.label");
        },
        get description() {
            return t("plugin.channelBadges.option.forumBadgeLabel.description");
        },
        get default() {
            return t("plugin.channelBadges.option.forumBadgeLabel.default");
        },
        type: OptionType.STRING,
        onChange: reloadBadges,
    },
    mediaBadgeLabel: {
        get label() {
            return t("plugin.channelBadges.option.mediaBadgeLabel.label");
        },
        get description() {
            return t("plugin.channelBadges.option.mediaBadgeLabel.description");
        },
        get default() {
            return t("plugin.channelBadges.option.mediaBadgeLabel.default");
        },
        type: OptionType.STRING,
        onChange: reloadBadges,
    },
    nsfwBadgeLabel: {
        get label() {
            return t("plugin.channelBadges.option.nsfwBadgeLabel.label");
        },
        get description() {
            return t("plugin.channelBadges.option.nsfwBadgeLabel.description");
        },
        get default() {
            return t("plugin.channelBadges.option.nsfwBadgeLabel.default");
        },
        type: OptionType.STRING,
        onChange: reloadBadges,
    },
    lockedBadgeLabel: {
        get label() {
            return t("plugin.channelBadges.option.lockedBadgeLabel.label");
        },
        get description() {
            return t("plugin.channelBadges.option.lockedBadgeLabel.description");
        },
        get default() {
            return t("plugin.channelBadges.option.lockedBadgeLabel.default");
        },
        type: OptionType.STRING,
        onChange: reloadBadges,
    },
    rulesBadgeLabel: {
        get label() {
            return t("plugin.channelBadges.option.rulesBadgeLabel.label");
        },
        get description() {
            return t("plugin.channelBadges.option.rulesBadgeLabel.description");
        },
        get default() {
            return t("plugin.channelBadges.option.rulesBadgeLabel.default");
        },
        type: OptionType.STRING,
        onChange: reloadBadges,
    },
    unknownBadgeLabel: {
        get label() {
            return t("plugin.channelBadges.option.unknownBadgeLabel.label");
        },
        get description() {
            return t("plugin.channelBadges.option.unknownBadgeLabel.description");
        },
        get default() {
            return t("plugin.channelBadges.option.unknownBadgeLabel.default");
        },
        type: OptionType.STRING,
        onChange: reloadBadges,
    },


    textBadgeColor: {
        get label() {
            return t("plugin.channelBadges.option.textBadgeColor.label");
        },
        get description() {
            return t("plugin.channelBadges.option.textBadgeColor.description");
        },
        type: OptionType.STRING,
        onChange: reloadBadges,
    },
    voiceBadgeColor: {
        get label() {
            return t("plugin.channelBadges.option.voiceBadgeColor.label");
        },
        get description() {
            return t("plugin.channelBadges.option.voiceBadgeColor.description");
        },
        type: OptionType.STRING,
        onChange: reloadBadges,
    },
    categoryBadgeColor: {
        get label() {
            return t("plugin.channelBadges.option.categoryBadgeColor.label");
        },
        get description() {
            return t("plugin.channelBadges.option.categoryBadgeColor.description");
        },
        type: OptionType.STRING,
        onChange: reloadBadges,
    },
    announcementBadgeColor: {
        get label() {
            return t("plugin.channelBadges.option.announcementBadgeColor.label");
        },
        get description() {
            return t("plugin.channelBadges.option.announcementBadgeColor.description");
        },
        type: OptionType.STRING,
        onChange: reloadBadges,
    },
    announcementThreadBadgeColor: {
        get label() {
            return t("plugin.channelBadges.option.announcementThreadBadgeColor.label");
        },
        get description() {
            return t("plugin.channelBadges.option.announcementThreadBadgeColor.description");
        },
        type: OptionType.STRING,
        onChange: reloadBadges,
    },
    publicThreadBadgeColor: {
        get label() {
            return t("plugin.channelBadges.option.publicThreadBadgeColor.label");
        },
        get description() {
            return t("plugin.channelBadges.option.publicThreadBadgeColor.description");
        },
        type: OptionType.STRING,
        onChange: reloadBadges,
    },
    privateThreadBadgeColor: {
        get label() {
            return t("plugin.channelBadges.option.privateThreadBadgeColor.label");
        },
        get description() {
            return t("plugin.channelBadges.option.privateThreadBadgeColor.description");
        },
        type: OptionType.STRING,
        onChange: reloadBadges,
    },
    stageBadgeColor: {
        get label() {
            return t("plugin.channelBadges.option.stageBadgeColor.label");
        },
        get description() {
            return t("plugin.channelBadges.option.stageBadgeColor.description");
        },
        type: OptionType.STRING,
        onChange: reloadBadges,
    },
    directoryBadgeColor: {
        get label() {
            return t("plugin.channelBadges.option.directoryBadgeColor.label");
        },
        get description() {
            return t("plugin.channelBadges.option.directoryBadgeColor.description");
        },
        type: OptionType.STRING,
        onChange: reloadBadges,
    },
    forumBadgeColor: {
        get label() {
            return t("plugin.channelBadges.option.forumBadgeColor.label");
        },
        get description() {
            return t("plugin.channelBadges.option.forumBadgeColor.description");
        },
        type: OptionType.STRING,
        onChange: reloadBadges,
    },
    mediaBadgeColor: {
        get label() {
            return t("plugin.channelBadges.option.mediaBadgeColor.label");
        },
        get description() {
            return t("plugin.channelBadges.option.mediaBadgeColor.description");
        },
        type: OptionType.STRING,
        onChange: reloadBadges,
    },
    nsfwBadgeColor: {
        get label() {
            return t("plugin.channelBadges.option.nsfwBadgeColor.label");
        },
        get description() {
            return t("plugin.channelBadges.option.nsfwBadgeColor.description");
        },
        type: OptionType.STRING,
        onChange: reloadBadges,
    },
    lockedBadgeColor: {
        get label() {
            return t("plugin.channelBadges.option.lockedBadgeColor.label");
        },
        get description() {
            return t("plugin.channelBadges.option.lockedBadgeColor.description");
        },
        type: OptionType.STRING,
        onChange: reloadBadges,
    },
    rulesBadgeColor: {
        get label() {
            return t("plugin.channelBadges.option.rulesBadgeColor.label");
        },
        get description() {
            return t("plugin.channelBadges.option.rulesBadgeColor.description");
        },
        type: OptionType.STRING,
        onChange: reloadBadges,
    },
    unknownBadgeColor: {
        get label() {
            return t("plugin.channelBadges.option.unknownBadgeColor.label");
        },
        get description() {
            return t("plugin.channelBadges.option.unknownBadgeColor.description");
        },
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
        text: t("plugin.channelBadges.badge.text"),
        voice: t("plugin.channelBadges.badge.voice"),
        category: t("plugin.channelBadges.badge.category"),
        announcement: t("plugin.channelBadges.badge.announcement"),
        announcement_thread: t("plugin.channelBadges.badge.announcementThread"),
        public_thread: t("plugin.channelBadges.badge.publicThread"),
        private_thread: t("plugin.channelBadges.badge.privateThread"),
        stage: t("plugin.channelBadges.badge.stage"),
        directory: t("plugin.channelBadges.badge.directory"),
        forum: t("plugin.channelBadges.badge.forum"),
        media: t("plugin.channelBadges.badge.media"),
        nsfw: t("plugin.channelBadges.badge.nsfw"),
        locked: t("plugin.channelBadges.badge.locked"),
        rules: t("plugin.channelBadges.badge.rules"),
        unknown: t("plugin.channelBadges.badge.unknown")
    },
    lockedBadgeTooltip: t("plugin.channelBadges.badge.tooltip.locked"),
    nsfwBadgeTooltip: t("plugin.channelBadges.badge.tooltip.nsfw"),
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
