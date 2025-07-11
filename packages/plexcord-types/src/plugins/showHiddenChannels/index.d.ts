import "./style.css";
import { OptionType } from "../../utils/types";
import type { Channel, Role } from "discord-types/general";
export declare const cl: (...args: (string | false | 0 | string[] | Record<string, unknown> | null | undefined)[]) => string;
declare const enum ShowMode {
    LockIcon = 0,
    HiddenIconWithMutedStyle = 1
}
export declare const settings: import("../../utils/types").DefinedSettings<{
    hideUnreads: {
        description: string;
        type: OptionType.BOOLEAN;
        default: true;
        restartNeeded: true;
    };
    showMode: {
        description: string;
        type: OptionType.SELECT;
        options: ({
            label: string;
            value: ShowMode;
            default: true;
        } | {
            label: string;
            value: ShowMode;
            default?: undefined;
        })[];
        restartNeeded: true;
    };
    defaultAllowedUsersAndRolesDropdownState: {
        description: string;
        type: OptionType.BOOLEAN;
        default: true;
    };
}, import("../../utils/types").SettingsChecks<{
    hideUnreads: {
        description: string;
        type: OptionType.BOOLEAN;
        default: true;
        restartNeeded: true;
    };
    showMode: {
        description: string;
        type: OptionType.SELECT;
        options: ({
            label: string;
            value: ShowMode;
            default: true;
        } | {
            label: string;
            value: ShowMode;
            default?: undefined;
        })[];
        restartNeeded: true;
    };
    defaultAllowedUsersAndRolesDropdownState: {
        description: string;
        type: OptionType.BOOLEAN;
        default: true;
    };
}>, {}>;
declare const _default: {
    name: string;
    description: string;
    authors: {
        name: string;
        id: bigint;
    }[];
    settings: import("../../utils/types").DefinedSettings<{
        hideUnreads: {
            description: string;
            type: OptionType.BOOLEAN;
            default: true;
            restartNeeded: true;
        };
        showMode: {
            description: string;
            type: OptionType.SELECT;
            options: ({
                label: string;
                value: ShowMode;
                default: true;
            } | {
                label: string;
                value: ShowMode;
                default?: undefined;
            })[];
            restartNeeded: true;
        };
        defaultAllowedUsersAndRolesDropdownState: {
            description: string;
            type: OptionType.BOOLEAN;
            default: true;
        };
    }, import("../../utils/types").SettingsChecks<{
        hideUnreads: {
            description: string;
            type: OptionType.BOOLEAN;
            default: true;
            restartNeeded: true;
        };
        showMode: {
            description: string;
            type: OptionType.SELECT;
            options: ({
                label: string;
                value: ShowMode;
                default: true;
            } | {
                label: string;
                value: ShowMode;
                default?: undefined;
            })[];
            restartNeeded: true;
        };
        defaultAllowedUsersAndRolesDropdownState: {
            description: string;
            type: OptionType.BOOLEAN;
            default: true;
        };
    }>, {}>;
    patches: ({
        find: string;
        replacement: {
            match: RegExp;
            replace: (m: string, not: string, channel: string) => string;
        };
        all?: undefined;
        predicate?: undefined;
    } | {
        find: string;
        all: true;
        replacement: {
            match: RegExp;
            replace: string;
        };
        predicate?: undefined;
    } | {
        find: string;
        predicate: () => boolean;
        replacement: {
            match: RegExp;
            replace: (_: string, channel: string) => string;
        };
        all?: undefined;
    } | {
        find: string;
        predicate: () => boolean;
        replacement: {
            match: RegExp;
            replace: (_: string, otherClasses: string, isIf: string, isMuted: string, mutedClassExpression: string) => string;
        }[];
        all?: undefined;
    } | {
        find: string;
        replacement: {
            predicate: () => boolean;
            match: RegExp;
            replace: (m: string, channel: string, unread: string) => string;
        }[];
        all?: undefined;
        predicate?: undefined;
    } | {
        find: string;
        replacement: {
            match: RegExp;
            replace: string;
        };
        all?: undefined;
        predicate?: undefined;
    } | {
        find: string;
        replacement: ({
            match: RegExp;
            replace: (m: string, pushNotificationButtonExpression: string, channel: string, isLurking: string) => string;
        } | {
            match: RegExp;
            replace: string;
        })[];
        all?: undefined;
        predicate?: undefined;
    })[];
    isHiddenChannel(channel: Channel & {
        channelId?: string;
    }, checkConnect?: boolean): boolean;
    resolveGuildChannels(channels: Record<string | number, Array<{
        channel: Channel;
        comparator: number;
    }> | string | number>, shouldIncludeHidden: boolean): {};
    makeAllowedRolesReduce(guildId: string): (Role[] | ((prev: Array<Role>, _: Role, index: number, originalArray: Array<Role>) => Role[]))[];
    HiddenChannelLockScreen: (channel: any) => import("react").JSX.Element;
    LockIcon: import("react").FunctionComponent<any>;
    HiddenChannelIcon: import("react").FunctionComponent<any>;
} & Record<string, any>;
export default _default;
