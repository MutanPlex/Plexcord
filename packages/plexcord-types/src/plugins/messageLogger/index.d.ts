import "./messageLogger.css";
import { NavContextMenuPatchCallback } from "../../api/ContextMenu";
import { OptionType } from "../../utils/types";
import { Message } from "discord-types/general";
export declare function parseEditContent(content: string, message: Message): import("react").ReactNode[];
declare const _default: {
    name: string;
    description: string;
    authors: {
        name: string;
        id: bigint;
    }[];
    dependencies: string[];
    contextMenus: {
        message: NavContextMenuPatchCallback;
        "channel-context": NavContextMenuPatchCallback;
        "thread-context": NavContextMenuPatchCallback;
        "user-context": NavContextMenuPatchCallback;
        "gdm-context": NavContextMenuPatchCallback;
    };
    start(): void;
    renderEdits: import("react").FunctionComponent<{
        message: Message;
    }>;
    makeEdit(newMessage: any, oldMessage: any): any;
    options: {
        deleteStyle: {
            type: OptionType.SELECT;
            description: string;
            default: string;
            options: ({
                label: string;
                value: string;
                default: true;
            } | {
                label: string;
                value: string;
                default?: undefined;
            })[];
            onChange: () => void;
        };
        logDeletes: {
            type: OptionType.BOOLEAN;
            description: string;
            default: true;
        };
        collapseDeleted: {
            type: OptionType.BOOLEAN;
            description: string;
            default: false;
            restartNeeded: true;
        };
        logEdits: {
            type: OptionType.BOOLEAN;
            description: string;
            default: true;
        };
        inlineEdits: {
            type: OptionType.BOOLEAN;
            description: string;
            default: true;
        };
        ignoreBots: {
            type: OptionType.BOOLEAN;
            description: string;
            default: false;
        };
        ignoreSelf: {
            type: OptionType.BOOLEAN;
            description: string;
            default: false;
        };
        ignoreUsers: {
            type: OptionType.STRING;
            description: string;
            default: string;
        };
        ignoreChannels: {
            type: OptionType.STRING;
            description: string;
            default: string;
        };
        ignoreGuilds: {
            type: OptionType.STRING;
            description: string;
            default: string;
        };
    };
    handleDelete(cache: any, data: {
        ids: string[];
        id: string;
        mlDeleted?: boolean;
    }, isBulk: boolean): any;
    shouldIgnore(message: any, isEdit?: boolean): any;
    EditMarker({ message, className, children, ...props }: any): import("react").JSX.Element;
    DELETED_MESSAGE_COUNT: () => {
        ast: (string | number | {
            "=0": string[];
            one: (string | (string | number)[])[];
            other: (string | (string | number)[])[];
        })[][];
    };
    patches: ({
        find: string;
        replacement: {
            match: RegExp;
            replace: string;
        }[];
        predicate?: undefined;
    } | {
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
        predicate: () => any;
    } | {
        find: string;
        replacement: {
            match: RegExp;
            replace: string;
        }[];
        predicate: () => any;
    })[];
} & Record<string, any>;
export default _default;
