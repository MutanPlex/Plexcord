import { OptionType } from "../../utils/types";
declare function shouldHideUser(userId: string, channelId?: string): boolean;
declare function isRoleAllBlockedMembers(roleId: any, guildId: any): boolean;
declare function hiddenReplyComponent(): import("react").JSX.Element | null | undefined;
declare const _default: {
    name: string;
    description: string;
    tags: string[];
    authors: {
        name: string;
        id: bigint;
    }[];
    settings: import("../../utils/types").DefinedSettings<{
        usersToBlock: {
            type: OptionType.STRING;
            description: string;
            restartNeeded: true;
            default: string;
        };
        hideBlockedUsers: {
            type: OptionType.BOOLEAN;
            description: string;
            default: true;
            restartNeeded: true;
        };
        hideBlockedMessages: {
            type: OptionType.BOOLEAN;
            description: string;
            default: true;
            restartNeeded: true;
        };
        hideEmptyRoles: {
            type: OptionType.BOOLEAN;
            description: string;
            restartNeeded: true;
            default: true;
        };
        blockedReplyDisplay: {
            type: OptionType.SELECT;
            description: string;
            restartNeeded: true;
            options: ({
                value: string;
                label: string;
                default: true;
            } | {
                value: string;
                label: string;
                default?: undefined;
            })[];
        };
        guildBlackList: {
            type: OptionType.STRING;
            description: string;
            restartNeeded: true;
            default: string;
        };
        guildWhiteList: {
            type: OptionType.STRING;
            description: string;
            restartNeeded: true;
            default: string;
        };
    }, import("../../utils/types").SettingsChecks<{
        usersToBlock: {
            type: OptionType.STRING;
            description: string;
            restartNeeded: true;
            default: string;
        };
        hideBlockedUsers: {
            type: OptionType.BOOLEAN;
            description: string;
            default: true;
            restartNeeded: true;
        };
        hideBlockedMessages: {
            type: OptionType.BOOLEAN;
            description: string;
            default: true;
            restartNeeded: true;
        };
        hideEmptyRoles: {
            type: OptionType.BOOLEAN;
            description: string;
            restartNeeded: true;
            default: true;
        };
        blockedReplyDisplay: {
            type: OptionType.SELECT;
            description: string;
            restartNeeded: true;
            options: ({
                value: string;
                label: string;
                default: true;
            } | {
                value: string;
                label: string;
                default?: undefined;
            })[];
        };
        guildBlackList: {
            type: OptionType.STRING;
            description: string;
            restartNeeded: true;
            default: string;
        };
        guildWhiteList: {
            type: OptionType.STRING;
            description: string;
            restartNeeded: true;
            default: string;
        };
    }>, {}>;
    shouldHideUser: typeof shouldHideUser;
    hiddenReplyComponent: typeof hiddenReplyComponent;
    isRoleAllBlockedMembers: typeof isRoleAllBlockedMembers;
    patches: ({
        find: string;
        replacement: {
            match: RegExp;
            replace: string;
        };
        predicate?: undefined;
    } | {
        find: string;
        replacement: {
            match: RegExp;
            replace: string;
        };
        predicate: () => boolean;
    } | {
        find: string;
        replacement: {
            match: RegExp;
            replace: string;
        }[];
        predicate?: undefined;
    })[];
    activeNowView(cards: any): any;
} & Record<string, any>;
export default _default;
