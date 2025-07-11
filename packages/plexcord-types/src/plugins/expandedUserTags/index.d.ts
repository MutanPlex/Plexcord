import "./styles.css";
import { Channel, Message, User } from "discord-types/general";
declare const _default: {
    name: string;
    description: string;
    authors: {
        name: string;
        id: bigint;
    }[];
    dependencies: string[];
    tags: string[];
    settings: import("../../utils/types").DefinedSettings<{
        dontShowForBots: {
            description: string;
            type: import("../../utils/types").OptionType.BOOLEAN;
            default: false;
        };
        dontShowBotTag: {
            description: string;
            type: import("../../utils/types").OptionType.BOOLEAN;
            default: false;
            restartNeeded: true;
        };
        showWebhookTagFully: {
            description: string;
            type: import("../../utils/types").OptionType.BOOLEAN;
            default: false;
        };
        tagSettings: {
            type: import("../../utils/types").OptionType.COMPONENT;
            component: () => import("react").JSX.Element;
            description: string;
        };
    }, import("../../utils/types").SettingsChecks<{
        dontShowForBots: {
            description: string;
            type: import("../../utils/types").OptionType.BOOLEAN;
            default: false;
        };
        dontShowBotTag: {
            description: string;
            type: import("../../utils/types").OptionType.BOOLEAN;
            default: false;
            restartNeeded: true;
        };
        showWebhookTagFully: {
            description: string;
            type: import("../../utils/types").OptionType.BOOLEAN;
            default: false;
        };
        tagSettings: {
            type: import("../../utils/types").OptionType.COMPONENT;
            component: () => import("react").JSX.Element;
            description: string;
        };
    }>, {}>;
    patches: {
        find: string;
        replacement: ({
            match: RegExp;
            replace: string;
            predicate?: undefined;
        } | {
            match: RegExp;
            replace: string;
            predicate: () => boolean;
        })[];
    }[];
    start(): void;
    localTags: {};
    getChannelId(): string;
    renderNicknameIcon(props: import("../../api/NicknameIcons").NicknameIconProps): any;
    renderMessageDecoration(props: import("../../api/MessageDecorations").MessageDecorationProps): any;
    renderMemberListDecorator(props: import("../../api/MemberListDecorators").DecoratorProps): any;
    getTagText(tagName: string): any;
    getTag({ message, user, channelId, isChat, channel }: {
        message?: Message;
        user?: User;
        channel?: Channel & {
            isForumPost(): boolean;
            isMediaPost(): boolean;
        };
        channelId?: string;
        isChat?: boolean;
    }): number | null;
    getPermissions(user: User, channel: Channel): string[];
} & Record<string, any>;
export default _default;
