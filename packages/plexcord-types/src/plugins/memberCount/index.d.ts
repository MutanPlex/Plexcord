import "./style.css";
import { OptionType } from "../../utils/types";
import { FluxStore } from "../../webpack/common/types";
export declare const GuildMemberCountStore: FluxStore & {
    getMemberCount(guildId?: string): number | null;
};
export declare const ChannelMemberStore: FluxStore & {
    getProps(guildId?: string, channelId?: string): {
        groups: {
            count: number;
            id: string;
        }[];
    };
};
export declare const ThreadMemberListStore: FluxStore & {
    getMemberListSections(channelId?: string): {
        [sectionId: string]: {
            sectionId: string;
            userIds: string[];
        };
    };
};
export declare const numberFormat: (value: number) => string;
export declare const cl: (...args: (string | false | 0 | string[] | Record<string, unknown> | null | undefined)[]) => string;
declare const _default: {
    name: string;
    description: string;
    authors: {
        name: string;
        id: bigint;
    }[];
    settings: import("../../utils/types").DefinedSettings<{
        toolTip: {
            type: OptionType.BOOLEAN;
            description: string;
            default: true;
            restartNeeded: true;
        };
        memberList: {
            type: OptionType.BOOLEAN;
            description: string;
            default: true;
            restartNeeded: true;
        };
    }, import("../../utils/types").SettingsChecks<{
        toolTip: {
            type: OptionType.BOOLEAN;
            description: string;
            default: true;
            restartNeeded: true;
        };
        memberList: {
            type: OptionType.BOOLEAN;
            description: string;
            default: true;
            restartNeeded: true;
        };
    }>, {}>;
    patches: ({
        find: string;
        replacement: {
            match: RegExp;
            replace: string;
        }[];
        predicate: () => boolean;
    } | {
        find: string;
        replacement: {
            match: RegExp;
            replace: string;
        };
        predicate: () => boolean;
    })[];
    render: import("react").FunctionComponent<{
        isTooltip?: true;
        tooltipGuildId?: string;
    }>;
    renderTooltip: import("react").FunctionComponent<any>;
} & Record<string, any>;
export default _default;
