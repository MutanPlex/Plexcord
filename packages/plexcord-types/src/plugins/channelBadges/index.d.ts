import "./style.css";
export declare function reloadBadges(): void;
declare const _default: {
    name: string;
    description: string;
    authors: {
        name: string;
        id: bigint;
    }[];
    settings: import("../../utils/types").DefinedSettings<{
        oneBadgePerChannel: {
            type: import("../../utils/types").OptionType.BOOLEAN;
            default: false;
            description: string;
            onChange: typeof reloadBadges;
        };
        showTextBadge: {
            type: import("../../utils/types").OptionType.BOOLEAN;
            default: true;
            description: string;
            onChange: typeof reloadBadges;
        };
        showVoiceBadge: {
            type: import("../../utils/types").OptionType.BOOLEAN;
            default: true;
            description: string;
            onChange: typeof reloadBadges;
        };
        showCategoryBadge: {
            type: import("../../utils/types").OptionType.BOOLEAN;
            default: true;
            description: string;
            onChange: typeof reloadBadges;
        };
        showDirectoryBadge: {
            type: import("../../utils/types").OptionType.BOOLEAN;
            default: true;
            description: string;
            onChange: typeof reloadBadges;
        };
        showAnnouncementThreadBadge: {
            type: import("../../utils/types").OptionType.BOOLEAN;
            default: true;
            description: string;
            onChange: typeof reloadBadges;
        };
        showPublicThreadBadge: {
            type: import("../../utils/types").OptionType.BOOLEAN;
            default: true;
            description: string;
            onChange: typeof reloadBadges;
        };
        showPrivateThreadBadge: {
            type: import("../../utils/types").OptionType.BOOLEAN;
            default: true;
            description: string;
            onChange: typeof reloadBadges;
        };
        showStageBadge: {
            type: import("../../utils/types").OptionType.BOOLEAN;
            default: true;
            description: string;
            onChange: typeof reloadBadges;
        };
        showAnnouncementBadge: {
            type: import("../../utils/types").OptionType.BOOLEAN;
            default: true;
            description: string;
            onChange: typeof reloadBadges;
        };
        showForumBadge: {
            type: import("../../utils/types").OptionType.BOOLEAN;
            default: true;
            description: string;
            onChange: typeof reloadBadges;
        };
        showMediaBadge: {
            type: import("../../utils/types").OptionType.BOOLEAN;
            default: true;
            description: string;
            onChange: typeof reloadBadges;
        };
        showNSFWBadge: {
            type: import("../../utils/types").OptionType.BOOLEAN;
            default: true;
            description: string;
            onChange: typeof reloadBadges;
        };
        showLockedBadge: {
            type: import("../../utils/types").OptionType.BOOLEAN;
            default: true;
            description: string;
            onChange: typeof reloadBadges;
        };
        showRulesBadge: {
            type: import("../../utils/types").OptionType.BOOLEAN;
            default: true;
            description: string;
            onChange: typeof reloadBadges;
        };
        showUnknownBadge: {
            type: import("../../utils/types").OptionType.BOOLEAN;
            default: true;
            description: string;
            onChange: typeof reloadBadges;
        };
        textBadgeLabel: {
            type: import("../../utils/types").OptionType.STRING;
            default: string;
            description: string;
            onChange: typeof reloadBadges;
        };
        voiceBadgeLabel: {
            type: import("../../utils/types").OptionType.STRING;
            default: string;
            description: string;
            onChange: typeof reloadBadges;
        };
        categoryBadgeLabel: {
            type: import("../../utils/types").OptionType.STRING;
            default: string;
            description: string;
            onChange: typeof reloadBadges;
        };
        announcementBadgeLabel: {
            type: import("../../utils/types").OptionType.STRING;
            default: string;
            description: string;
            onChange: typeof reloadBadges;
        };
        announcementThreadBadgeLabel: {
            type: import("../../utils/types").OptionType.STRING;
            default: string;
            description: string;
            onChange: typeof reloadBadges;
        };
        publicThreadBadgeLabel: {
            type: import("../../utils/types").OptionType.STRING;
            default: string;
            description: string;
            onChange: typeof reloadBadges;
        };
        privateThreadBadgeLabel: {
            type: import("../../utils/types").OptionType.STRING;
            default: string;
            description: string;
            onChange: typeof reloadBadges;
        };
        stageBadgeLabel: {
            type: import("../../utils/types").OptionType.STRING;
            default: string;
            description: string;
            onChange: typeof reloadBadges;
        };
        directoryBadgeLabel: {
            type: import("../../utils/types").OptionType.STRING;
            default: string;
            description: string;
            onChange: typeof reloadBadges;
        };
        forumBadgeLabel: {
            type: import("../../utils/types").OptionType.STRING;
            default: string;
            description: string;
            onChange: typeof reloadBadges;
        };
        mediaBadgeLabel: {
            type: import("../../utils/types").OptionType.STRING;
            default: string;
            description: string;
            onChange: typeof reloadBadges;
        };
        nsfwBadgeLabel: {
            type: import("../../utils/types").OptionType.STRING;
            default: string;
            description: string;
            onChange: typeof reloadBadges;
        };
        lockedBadgeLabel: {
            type: import("../../utils/types").OptionType.STRING;
            default: string;
            description: string;
            onChange: typeof reloadBadges;
        };
        rulesBadgeLabel: {
            type: import("../../utils/types").OptionType.STRING;
            default: string;
            description: string;
            onChange: typeof reloadBadges;
        };
        unknownBadgeLabel: {
            type: import("../../utils/types").OptionType.STRING;
            default: string;
            description: string;
            onChange: typeof reloadBadges;
        };
        textBadgeColor: {
            type: import("../../utils/types").OptionType.STRING;
            description: string;
            onChange: typeof reloadBadges;
        };
        voiceBadgeColor: {
            type: import("../../utils/types").OptionType.STRING;
            description: string;
            onChange: typeof reloadBadges;
        };
        categoryBadgeColor: {
            type: import("../../utils/types").OptionType.STRING;
            description: string;
            onChange: typeof reloadBadges;
        };
        announcementBadgeColor: {
            type: import("../../utils/types").OptionType.STRING;
            description: string;
            onChange: typeof reloadBadges;
        };
        announcementThreadBadgeColor: {
            type: import("../../utils/types").OptionType.STRING;
            description: string;
            onChange: typeof reloadBadges;
        };
        publicThreadBadgeColor: {
            type: import("../../utils/types").OptionType.STRING;
            description: string;
            onChange: typeof reloadBadges;
        };
        privateThreadBadgeColor: {
            type: import("../../utils/types").OptionType.STRING;
            description: string;
            onChange: typeof reloadBadges;
        };
        stageBadgeColor: {
            type: import("../../utils/types").OptionType.STRING;
            description: string;
            onChange: typeof reloadBadges;
        };
        directoryBadgeColor: {
            type: import("../../utils/types").OptionType.STRING;
            description: string;
            onChange: typeof reloadBadges;
        };
        forumBadgeColor: {
            type: import("../../utils/types").OptionType.STRING;
            description: string;
            onChange: typeof reloadBadges;
        };
        mediaBadgeColor: {
            type: import("../../utils/types").OptionType.STRING;
            description: string;
            onChange: typeof reloadBadges;
        };
        nsfwBadgeColor: {
            type: import("../../utils/types").OptionType.STRING;
            description: string;
            onChange: typeof reloadBadges;
        };
        lockedBadgeColor: {
            type: import("../../utils/types").OptionType.STRING;
            description: string;
            onChange: typeof reloadBadges;
        };
        rulesBadgeColor: {
            type: import("../../utils/types").OptionType.STRING;
            description: string;
            onChange: typeof reloadBadges;
        };
        unknownBadgeColor: {
            type: import("../../utils/types").OptionType.STRING;
            description: string;
            onChange: typeof reloadBadges;
        };
    }, import("../../utils/types").SettingsChecks<{
        oneBadgePerChannel: {
            type: import("../../utils/types").OptionType.BOOLEAN;
            default: false;
            description: string;
            onChange: typeof reloadBadges;
        };
        showTextBadge: {
            type: import("../../utils/types").OptionType.BOOLEAN;
            default: true;
            description: string;
            onChange: typeof reloadBadges;
        };
        showVoiceBadge: {
            type: import("../../utils/types").OptionType.BOOLEAN;
            default: true;
            description: string;
            onChange: typeof reloadBadges;
        };
        showCategoryBadge: {
            type: import("../../utils/types").OptionType.BOOLEAN;
            default: true;
            description: string;
            onChange: typeof reloadBadges;
        };
        showDirectoryBadge: {
            type: import("../../utils/types").OptionType.BOOLEAN;
            default: true;
            description: string;
            onChange: typeof reloadBadges;
        };
        showAnnouncementThreadBadge: {
            type: import("../../utils/types").OptionType.BOOLEAN;
            default: true;
            description: string;
            onChange: typeof reloadBadges;
        };
        showPublicThreadBadge: {
            type: import("../../utils/types").OptionType.BOOLEAN;
            default: true;
            description: string;
            onChange: typeof reloadBadges;
        };
        showPrivateThreadBadge: {
            type: import("../../utils/types").OptionType.BOOLEAN;
            default: true;
            description: string;
            onChange: typeof reloadBadges;
        };
        showStageBadge: {
            type: import("../../utils/types").OptionType.BOOLEAN;
            default: true;
            description: string;
            onChange: typeof reloadBadges;
        };
        showAnnouncementBadge: {
            type: import("../../utils/types").OptionType.BOOLEAN;
            default: true;
            description: string;
            onChange: typeof reloadBadges;
        };
        showForumBadge: {
            type: import("../../utils/types").OptionType.BOOLEAN;
            default: true;
            description: string;
            onChange: typeof reloadBadges;
        };
        showMediaBadge: {
            type: import("../../utils/types").OptionType.BOOLEAN;
            default: true;
            description: string;
            onChange: typeof reloadBadges;
        };
        showNSFWBadge: {
            type: import("../../utils/types").OptionType.BOOLEAN;
            default: true;
            description: string;
            onChange: typeof reloadBadges;
        };
        showLockedBadge: {
            type: import("../../utils/types").OptionType.BOOLEAN;
            default: true;
            description: string;
            onChange: typeof reloadBadges;
        };
        showRulesBadge: {
            type: import("../../utils/types").OptionType.BOOLEAN;
            default: true;
            description: string;
            onChange: typeof reloadBadges;
        };
        showUnknownBadge: {
            type: import("../../utils/types").OptionType.BOOLEAN;
            default: true;
            description: string;
            onChange: typeof reloadBadges;
        };
        textBadgeLabel: {
            type: import("../../utils/types").OptionType.STRING;
            default: string;
            description: string;
            onChange: typeof reloadBadges;
        };
        voiceBadgeLabel: {
            type: import("../../utils/types").OptionType.STRING;
            default: string;
            description: string;
            onChange: typeof reloadBadges;
        };
        categoryBadgeLabel: {
            type: import("../../utils/types").OptionType.STRING;
            default: string;
            description: string;
            onChange: typeof reloadBadges;
        };
        announcementBadgeLabel: {
            type: import("../../utils/types").OptionType.STRING;
            default: string;
            description: string;
            onChange: typeof reloadBadges;
        };
        announcementThreadBadgeLabel: {
            type: import("../../utils/types").OptionType.STRING;
            default: string;
            description: string;
            onChange: typeof reloadBadges;
        };
        publicThreadBadgeLabel: {
            type: import("../../utils/types").OptionType.STRING;
            default: string;
            description: string;
            onChange: typeof reloadBadges;
        };
        privateThreadBadgeLabel: {
            type: import("../../utils/types").OptionType.STRING;
            default: string;
            description: string;
            onChange: typeof reloadBadges;
        };
        stageBadgeLabel: {
            type: import("../../utils/types").OptionType.STRING;
            default: string;
            description: string;
            onChange: typeof reloadBadges;
        };
        directoryBadgeLabel: {
            type: import("../../utils/types").OptionType.STRING;
            default: string;
            description: string;
            onChange: typeof reloadBadges;
        };
        forumBadgeLabel: {
            type: import("../../utils/types").OptionType.STRING;
            default: string;
            description: string;
            onChange: typeof reloadBadges;
        };
        mediaBadgeLabel: {
            type: import("../../utils/types").OptionType.STRING;
            default: string;
            description: string;
            onChange: typeof reloadBadges;
        };
        nsfwBadgeLabel: {
            type: import("../../utils/types").OptionType.STRING;
            default: string;
            description: string;
            onChange: typeof reloadBadges;
        };
        lockedBadgeLabel: {
            type: import("../../utils/types").OptionType.STRING;
            default: string;
            description: string;
            onChange: typeof reloadBadges;
        };
        rulesBadgeLabel: {
            type: import("../../utils/types").OptionType.STRING;
            default: string;
            description: string;
            onChange: typeof reloadBadges;
        };
        unknownBadgeLabel: {
            type: import("../../utils/types").OptionType.STRING;
            default: string;
            description: string;
            onChange: typeof reloadBadges;
        };
        textBadgeColor: {
            type: import("../../utils/types").OptionType.STRING;
            description: string;
            onChange: typeof reloadBadges;
        };
        voiceBadgeColor: {
            type: import("../../utils/types").OptionType.STRING;
            description: string;
            onChange: typeof reloadBadges;
        };
        categoryBadgeColor: {
            type: import("../../utils/types").OptionType.STRING;
            description: string;
            onChange: typeof reloadBadges;
        };
        announcementBadgeColor: {
            type: import("../../utils/types").OptionType.STRING;
            description: string;
            onChange: typeof reloadBadges;
        };
        announcementThreadBadgeColor: {
            type: import("../../utils/types").OptionType.STRING;
            description: string;
            onChange: typeof reloadBadges;
        };
        publicThreadBadgeColor: {
            type: import("../../utils/types").OptionType.STRING;
            description: string;
            onChange: typeof reloadBadges;
        };
        privateThreadBadgeColor: {
            type: import("../../utils/types").OptionType.STRING;
            description: string;
            onChange: typeof reloadBadges;
        };
        stageBadgeColor: {
            type: import("../../utils/types").OptionType.STRING;
            description: string;
            onChange: typeof reloadBadges;
        };
        directoryBadgeColor: {
            type: import("../../utils/types").OptionType.STRING;
            description: string;
            onChange: typeof reloadBadges;
        };
        forumBadgeColor: {
            type: import("../../utils/types").OptionType.STRING;
            description: string;
            onChange: typeof reloadBadges;
        };
        mediaBadgeColor: {
            type: import("../../utils/types").OptionType.STRING;
            description: string;
            onChange: typeof reloadBadges;
        };
        nsfwBadgeColor: {
            type: import("../../utils/types").OptionType.STRING;
            description: string;
            onChange: typeof reloadBadges;
        };
        lockedBadgeColor: {
            type: import("../../utils/types").OptionType.STRING;
            description: string;
            onChange: typeof reloadBadges;
        };
        rulesBadgeColor: {
            type: import("../../utils/types").OptionType.STRING;
            description: string;
            onChange: typeof reloadBadges;
        };
        unknownBadgeColor: {
            type: import("../../utils/types").OptionType.STRING;
            description: string;
            onChange: typeof reloadBadges;
        };
    }>, {}>;
    start(): Promise<void>;
    stop(): void;
} & Record<string, any>;
export default _default;
