import { OptionType } from "../../utils/types";
import { reloadBadges } from "./index";
declare const settings: import("../../utils/types").DefinedSettings<{
    oneBadgePerChannel: {
        type: OptionType.BOOLEAN;
        default: false;
        description: string;
        onChange: typeof reloadBadges;
    };
    showTextBadge: {
        type: OptionType.BOOLEAN;
        default: true;
        description: string;
        onChange: typeof reloadBadges;
    };
    showVoiceBadge: {
        type: OptionType.BOOLEAN;
        default: true;
        description: string;
        onChange: typeof reloadBadges;
    };
    showCategoryBadge: {
        type: OptionType.BOOLEAN;
        default: true;
        description: string;
        onChange: typeof reloadBadges;
    };
    showDirectoryBadge: {
        type: OptionType.BOOLEAN;
        default: true;
        description: string;
        onChange: typeof reloadBadges;
    };
    showAnnouncementThreadBadge: {
        type: OptionType.BOOLEAN;
        default: true;
        description: string;
        onChange: typeof reloadBadges;
    };
    showPublicThreadBadge: {
        type: OptionType.BOOLEAN;
        default: true;
        description: string;
        onChange: typeof reloadBadges;
    };
    showPrivateThreadBadge: {
        type: OptionType.BOOLEAN;
        default: true;
        description: string;
        onChange: typeof reloadBadges;
    };
    showStageBadge: {
        type: OptionType.BOOLEAN;
        default: true;
        description: string;
        onChange: typeof reloadBadges;
    };
    showAnnouncementBadge: {
        type: OptionType.BOOLEAN;
        default: true;
        description: string;
        onChange: typeof reloadBadges;
    };
    showForumBadge: {
        type: OptionType.BOOLEAN;
        default: true;
        description: string;
        onChange: typeof reloadBadges;
    };
    showMediaBadge: {
        type: OptionType.BOOLEAN;
        default: true;
        description: string;
        onChange: typeof reloadBadges;
    };
    showNSFWBadge: {
        type: OptionType.BOOLEAN;
        default: true;
        description: string;
        onChange: typeof reloadBadges;
    };
    showLockedBadge: {
        type: OptionType.BOOLEAN;
        default: true;
        description: string;
        onChange: typeof reloadBadges;
    };
    showRulesBadge: {
        type: OptionType.BOOLEAN;
        default: true;
        description: string;
        onChange: typeof reloadBadges;
    };
    showUnknownBadge: {
        type: OptionType.BOOLEAN;
        default: true;
        description: string;
        onChange: typeof reloadBadges;
    };
    textBadgeLabel: {
        type: OptionType.STRING;
        default: string;
        description: string;
        onChange: typeof reloadBadges;
    };
    voiceBadgeLabel: {
        type: OptionType.STRING;
        default: string;
        description: string;
        onChange: typeof reloadBadges;
    };
    categoryBadgeLabel: {
        type: OptionType.STRING;
        default: string;
        description: string;
        onChange: typeof reloadBadges;
    };
    announcementBadgeLabel: {
        type: OptionType.STRING;
        default: string;
        description: string;
        onChange: typeof reloadBadges;
    };
    announcementThreadBadgeLabel: {
        type: OptionType.STRING;
        default: string;
        description: string;
        onChange: typeof reloadBadges;
    };
    publicThreadBadgeLabel: {
        type: OptionType.STRING;
        default: string;
        description: string;
        onChange: typeof reloadBadges;
    };
    privateThreadBadgeLabel: {
        type: OptionType.STRING;
        default: string;
        description: string;
        onChange: typeof reloadBadges;
    };
    stageBadgeLabel: {
        type: OptionType.STRING;
        default: string;
        description: string;
        onChange: typeof reloadBadges;
    };
    directoryBadgeLabel: {
        type: OptionType.STRING;
        default: string;
        description: string;
        onChange: typeof reloadBadges;
    };
    forumBadgeLabel: {
        type: OptionType.STRING;
        default: string;
        description: string;
        onChange: typeof reloadBadges;
    };
    mediaBadgeLabel: {
        type: OptionType.STRING;
        default: string;
        description: string;
        onChange: typeof reloadBadges;
    };
    nsfwBadgeLabel: {
        type: OptionType.STRING;
        default: string;
        description: string;
        onChange: typeof reloadBadges;
    };
    lockedBadgeLabel: {
        type: OptionType.STRING;
        default: string;
        description: string;
        onChange: typeof reloadBadges;
    };
    rulesBadgeLabel: {
        type: OptionType.STRING;
        default: string;
        description: string;
        onChange: typeof reloadBadges;
    };
    unknownBadgeLabel: {
        type: OptionType.STRING;
        default: string;
        description: string;
        onChange: typeof reloadBadges;
    };
    textBadgeColor: {
        type: OptionType.STRING;
        description: string;
        onChange: typeof reloadBadges;
    };
    voiceBadgeColor: {
        type: OptionType.STRING;
        description: string;
        onChange: typeof reloadBadges;
    };
    categoryBadgeColor: {
        type: OptionType.STRING;
        description: string;
        onChange: typeof reloadBadges;
    };
    announcementBadgeColor: {
        type: OptionType.STRING;
        description: string;
        onChange: typeof reloadBadges;
    };
    announcementThreadBadgeColor: {
        type: OptionType.STRING;
        description: string;
        onChange: typeof reloadBadges;
    };
    publicThreadBadgeColor: {
        type: OptionType.STRING;
        description: string;
        onChange: typeof reloadBadges;
    };
    privateThreadBadgeColor: {
        type: OptionType.STRING;
        description: string;
        onChange: typeof reloadBadges;
    };
    stageBadgeColor: {
        type: OptionType.STRING;
        description: string;
        onChange: typeof reloadBadges;
    };
    directoryBadgeColor: {
        type: OptionType.STRING;
        description: string;
        onChange: typeof reloadBadges;
    };
    forumBadgeColor: {
        type: OptionType.STRING;
        description: string;
        onChange: typeof reloadBadges;
    };
    mediaBadgeColor: {
        type: OptionType.STRING;
        description: string;
        onChange: typeof reloadBadges;
    };
    nsfwBadgeColor: {
        type: OptionType.STRING;
        description: string;
        onChange: typeof reloadBadges;
    };
    lockedBadgeColor: {
        type: OptionType.STRING;
        description: string;
        onChange: typeof reloadBadges;
    };
    rulesBadgeColor: {
        type: OptionType.STRING;
        description: string;
        onChange: typeof reloadBadges;
    };
    unknownBadgeColor: {
        type: OptionType.STRING;
        description: string;
        onChange: typeof reloadBadges;
    };
}, import("../../utils/types").SettingsChecks<{
    oneBadgePerChannel: {
        type: OptionType.BOOLEAN;
        default: false;
        description: string;
        onChange: typeof reloadBadges;
    };
    showTextBadge: {
        type: OptionType.BOOLEAN;
        default: true;
        description: string;
        onChange: typeof reloadBadges;
    };
    showVoiceBadge: {
        type: OptionType.BOOLEAN;
        default: true;
        description: string;
        onChange: typeof reloadBadges;
    };
    showCategoryBadge: {
        type: OptionType.BOOLEAN;
        default: true;
        description: string;
        onChange: typeof reloadBadges;
    };
    showDirectoryBadge: {
        type: OptionType.BOOLEAN;
        default: true;
        description: string;
        onChange: typeof reloadBadges;
    };
    showAnnouncementThreadBadge: {
        type: OptionType.BOOLEAN;
        default: true;
        description: string;
        onChange: typeof reloadBadges;
    };
    showPublicThreadBadge: {
        type: OptionType.BOOLEAN;
        default: true;
        description: string;
        onChange: typeof reloadBadges;
    };
    showPrivateThreadBadge: {
        type: OptionType.BOOLEAN;
        default: true;
        description: string;
        onChange: typeof reloadBadges;
    };
    showStageBadge: {
        type: OptionType.BOOLEAN;
        default: true;
        description: string;
        onChange: typeof reloadBadges;
    };
    showAnnouncementBadge: {
        type: OptionType.BOOLEAN;
        default: true;
        description: string;
        onChange: typeof reloadBadges;
    };
    showForumBadge: {
        type: OptionType.BOOLEAN;
        default: true;
        description: string;
        onChange: typeof reloadBadges;
    };
    showMediaBadge: {
        type: OptionType.BOOLEAN;
        default: true;
        description: string;
        onChange: typeof reloadBadges;
    };
    showNSFWBadge: {
        type: OptionType.BOOLEAN;
        default: true;
        description: string;
        onChange: typeof reloadBadges;
    };
    showLockedBadge: {
        type: OptionType.BOOLEAN;
        default: true;
        description: string;
        onChange: typeof reloadBadges;
    };
    showRulesBadge: {
        type: OptionType.BOOLEAN;
        default: true;
        description: string;
        onChange: typeof reloadBadges;
    };
    showUnknownBadge: {
        type: OptionType.BOOLEAN;
        default: true;
        description: string;
        onChange: typeof reloadBadges;
    };
    textBadgeLabel: {
        type: OptionType.STRING;
        default: string;
        description: string;
        onChange: typeof reloadBadges;
    };
    voiceBadgeLabel: {
        type: OptionType.STRING;
        default: string;
        description: string;
        onChange: typeof reloadBadges;
    };
    categoryBadgeLabel: {
        type: OptionType.STRING;
        default: string;
        description: string;
        onChange: typeof reloadBadges;
    };
    announcementBadgeLabel: {
        type: OptionType.STRING;
        default: string;
        description: string;
        onChange: typeof reloadBadges;
    };
    announcementThreadBadgeLabel: {
        type: OptionType.STRING;
        default: string;
        description: string;
        onChange: typeof reloadBadges;
    };
    publicThreadBadgeLabel: {
        type: OptionType.STRING;
        default: string;
        description: string;
        onChange: typeof reloadBadges;
    };
    privateThreadBadgeLabel: {
        type: OptionType.STRING;
        default: string;
        description: string;
        onChange: typeof reloadBadges;
    };
    stageBadgeLabel: {
        type: OptionType.STRING;
        default: string;
        description: string;
        onChange: typeof reloadBadges;
    };
    directoryBadgeLabel: {
        type: OptionType.STRING;
        default: string;
        description: string;
        onChange: typeof reloadBadges;
    };
    forumBadgeLabel: {
        type: OptionType.STRING;
        default: string;
        description: string;
        onChange: typeof reloadBadges;
    };
    mediaBadgeLabel: {
        type: OptionType.STRING;
        default: string;
        description: string;
        onChange: typeof reloadBadges;
    };
    nsfwBadgeLabel: {
        type: OptionType.STRING;
        default: string;
        description: string;
        onChange: typeof reloadBadges;
    };
    lockedBadgeLabel: {
        type: OptionType.STRING;
        default: string;
        description: string;
        onChange: typeof reloadBadges;
    };
    rulesBadgeLabel: {
        type: OptionType.STRING;
        default: string;
        description: string;
        onChange: typeof reloadBadges;
    };
    unknownBadgeLabel: {
        type: OptionType.STRING;
        default: string;
        description: string;
        onChange: typeof reloadBadges;
    };
    textBadgeColor: {
        type: OptionType.STRING;
        description: string;
        onChange: typeof reloadBadges;
    };
    voiceBadgeColor: {
        type: OptionType.STRING;
        description: string;
        onChange: typeof reloadBadges;
    };
    categoryBadgeColor: {
        type: OptionType.STRING;
        description: string;
        onChange: typeof reloadBadges;
    };
    announcementBadgeColor: {
        type: OptionType.STRING;
        description: string;
        onChange: typeof reloadBadges;
    };
    announcementThreadBadgeColor: {
        type: OptionType.STRING;
        description: string;
        onChange: typeof reloadBadges;
    };
    publicThreadBadgeColor: {
        type: OptionType.STRING;
        description: string;
        onChange: typeof reloadBadges;
    };
    privateThreadBadgeColor: {
        type: OptionType.STRING;
        description: string;
        onChange: typeof reloadBadges;
    };
    stageBadgeColor: {
        type: OptionType.STRING;
        description: string;
        onChange: typeof reloadBadges;
    };
    directoryBadgeColor: {
        type: OptionType.STRING;
        description: string;
        onChange: typeof reloadBadges;
    };
    forumBadgeColor: {
        type: OptionType.STRING;
        description: string;
        onChange: typeof reloadBadges;
    };
    mediaBadgeColor: {
        type: OptionType.STRING;
        description: string;
        onChange: typeof reloadBadges;
    };
    nsfwBadgeColor: {
        type: OptionType.STRING;
        description: string;
        onChange: typeof reloadBadges;
    };
    lockedBadgeColor: {
        type: OptionType.STRING;
        description: string;
        onChange: typeof reloadBadges;
    };
    rulesBadgeColor: {
        type: OptionType.STRING;
        description: string;
        onChange: typeof reloadBadges;
    };
    unknownBadgeColor: {
        type: OptionType.STRING;
        description: string;
        onChange: typeof reloadBadges;
    };
}>, {}>;
declare const defaultValues: {
    showTextBadge: boolean;
    showVoiceBadge: boolean;
    showCategoryBadge: boolean;
    showAnnouncementBadge: boolean;
    showAnnouncementThreadBadge: boolean;
    showPublicThreadBadge: boolean;
    showPrivateThreadBadge: boolean;
    showStageBadge: boolean;
    showDirectoryBadge: boolean;
    showForumBadge: boolean;
    showMediaBadge: boolean;
    showNSFWBadge: boolean;
    showLockedBadge: boolean;
    showRulesBadge: boolean;
    showUnknownBadge: boolean;
    channelBadges: {
        text: string;
        voice: string;
        category: string;
        announcement: string;
        announcement_thread: string;
        public_thread: string;
        private_thread: string;
        stage: string;
        directory: string;
        forum: string;
        media: string;
        nsfw: string;
        locked: string;
        rules: string;
        unknown: string;
    };
    lockedBadgeTooltip: string;
    nsfwBadgeTooltip: string;
};
declare function isEnabled(type: number): boolean;
declare function returnChannelBadge(type: number): {
    css: string;
    label: string;
    color: string | undefined;
};
export { defaultValues, isEnabled, returnChannelBadge, settings };
