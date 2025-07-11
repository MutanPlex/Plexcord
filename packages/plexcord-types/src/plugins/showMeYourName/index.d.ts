import "./styles.css";
import { OptionType } from "../../utils/types";
import { Message, User } from "discord-types/general";
interface UsernameProps {
    author: {
        nick: string;
    };
    message: Message;
    withMentionPrefix?: boolean;
    isRepliedMessage: boolean;
    userOverride?: User;
    guildId: string;
}
declare function getUsername(user: any, guildId: string): string;
declare const _default: {
    name: string;
    description: string;
    authors: {
        name: string;
        id: bigint;
    }[];
    patches: ({
        find: string;
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
            replace: string;
        };
    } | {
        find: string;
        predicate: () => boolean;
        replacement: {
            match: RegExp;
            replace: string;
        }[];
    })[];
    settings: import("../../utils/types").DefinedSettings<{
        mode: {
            type: OptionType.SELECT;
            description: string;
            options: ({
                label: string;
                value: string;
                default: true;
            } | {
                label: string;
                value: string;
                default?: undefined;
            })[];
        };
        displayNames: {
            type: OptionType.BOOLEAN;
            description: string;
            default: false;
        };
        inReplies: {
            type: OptionType.BOOLEAN;
            default: false;
            description: string;
        };
        preferFriend: {
            type: OptionType.BOOLEAN;
            default: false;
            description: string;
        };
        memberList: {
            type: OptionType.BOOLEAN;
            default: false;
            description: string;
            restartNeeded: true;
        };
        voiceChannelList: {
            type: OptionType.BOOLEAN;
            default: false;
            description: string;
            restartNeeded: true;
        };
        emojiReactions: {
            type: OptionType.BOOLEAN;
            default: false;
            description: string;
            restartNeeded: true;
        };
        showGradient: {
            type: OptionType.BOOLEAN;
            default: false;
            description: string;
        };
    }, import("../../utils/types").SettingsChecks<{
        mode: {
            type: OptionType.SELECT;
            description: string;
            options: ({
                label: string;
                value: string;
                default: true;
            } | {
                label: string;
                value: string;
                default?: undefined;
            })[];
        };
        displayNames: {
            type: OptionType.BOOLEAN;
            description: string;
            default: false;
        };
        inReplies: {
            type: OptionType.BOOLEAN;
            default: false;
            description: string;
        };
        preferFriend: {
            type: OptionType.BOOLEAN;
            default: false;
            description: string;
        };
        memberList: {
            type: OptionType.BOOLEAN;
            default: false;
            description: string;
            restartNeeded: true;
        };
        voiceChannelList: {
            type: OptionType.BOOLEAN;
            default: false;
            description: string;
            restartNeeded: true;
        };
        emojiReactions: {
            type: OptionType.BOOLEAN;
            default: false;
            description: string;
            restartNeeded: true;
        };
        showGradient: {
            type: OptionType.BOOLEAN;
            default: false;
            description: string;
        };
    }>, {}>;
    getUsername: typeof getUsername;
    renderUsername: import("react").FunctionComponent<UsernameProps>;
} & Record<string, any>;
export default _default;
