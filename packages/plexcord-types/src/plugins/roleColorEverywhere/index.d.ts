import { OptionType } from "../../utils/types";
declare const _default: {
    name: string;
    authors: {
        name: string;
        id: bigint;
    }[];
    description: string;
    settings: import("../../utils/types").DefinedSettings<{
        chatMentions: {
            type: OptionType.BOOLEAN;
            default: true;
            description: string;
            restartNeeded: true;
        };
        memberList: {
            type: OptionType.BOOLEAN;
            default: true;
            description: string;
            restartNeeded: true;
        };
        voiceUsers: {
            type: OptionType.BOOLEAN;
            default: true;
            description: string;
            restartNeeded: true;
        };
        reactorsList: {
            type: OptionType.BOOLEAN;
            default: true;
            description: string;
            restartNeeded: true;
        };
        pollResults: {
            type: OptionType.BOOLEAN;
            default: true;
            description: string;
            restartNeeded: true;
        };
        colorChatMessages: {
            type: OptionType.BOOLEAN;
            default: false;
            description: string;
            restartNeeded: true;
        };
        messageSaturation: {
            type: OptionType.SLIDER;
            description: string;
            markers: number[];
            default: number;
        };
    }, import("../../utils/types").SettingsChecks<{
        chatMentions: {
            type: OptionType.BOOLEAN;
            default: true;
            description: string;
            restartNeeded: true;
        };
        memberList: {
            type: OptionType.BOOLEAN;
            default: true;
            description: string;
            restartNeeded: true;
        };
        voiceUsers: {
            type: OptionType.BOOLEAN;
            default: true;
            description: string;
            restartNeeded: true;
        };
        reactorsList: {
            type: OptionType.BOOLEAN;
            default: true;
            description: string;
            restartNeeded: true;
        };
        pollResults: {
            type: OptionType.BOOLEAN;
            default: true;
            description: string;
            restartNeeded: true;
        };
        colorChatMessages: {
            type: OptionType.BOOLEAN;
            default: false;
            description: string;
            restartNeeded: true;
        };
        messageSaturation: {
            type: OptionType.SLIDER;
            description: string;
            markers: number[];
            default: number;
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
    getColorString(userId: string, channelOrGuildId: string): string | null;
    getColorInt(userId: string, channelOrGuildId: string): number | "" | null;
    getColorStyle(userId: string, channelOrGuildId: string): "" | {
        color: string;
    } | null;
    useMessageColorsStyle(message: any): {
        color: string;
        "--header-primary": string;
        "--text-muted": string;
    } | null;
    RoleGroupColor: import("react").FunctionComponent<{
        id: string;
        count: number;
        title: string;
        guildId: string;
        label: string;
    }>;
} & Record<string, any>;
export default _default;
