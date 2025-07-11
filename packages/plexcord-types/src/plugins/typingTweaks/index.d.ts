import { OptionType } from "../../utils/types";
import { User } from "discord-types/general";
import { PropsWithChildren } from "react";
export declare const buildSeveralUsers: import("react").FunctionComponent<{
    a: User;
    b: User;
    count: number;
    guildId: string;
}>;
declare const _default: {
    name: string;
    description: string;
    authors: {
        name: string;
        id: bigint;
    }[];
    settings: import("../../utils/types").DefinedSettings<{
        showAvatars: {
            type: OptionType.BOOLEAN;
            default: true;
            description: string;
        };
        showRoleColors: {
            type: OptionType.BOOLEAN;
            default: true;
            description: string;
        };
        alternativeFormatting: {
            type: OptionType.BOOLEAN;
            default: true;
            description: string;
        };
    }, import("../../utils/types").SettingsChecks<{
        showAvatars: {
            type: OptionType.BOOLEAN;
            default: true;
            description: string;
        };
        showRoleColors: {
            type: OptionType.BOOLEAN;
            default: true;
            description: string;
        };
        alternativeFormatting: {
            type: OptionType.BOOLEAN;
            default: true;
            description: string;
        };
    }>, {}>;
    managedStyle: string;
    patches: {
        find: string;
        group: true;
        replacement: ({
            match: RegExp;
            replace: string;
            predicate?: undefined;
        } | {
            match: RegExp;
            replace: (_: string, rest: string, a: string, b: string, users: string) => string;
            predicate: () => boolean;
        })[];
    }[];
    buildSeveralUsers: import("react").FunctionComponent<{
        a: User;
        b: User;
        count: number;
        guildId: string;
    }>;
    renderTypingUsers: import("react").FunctionComponent<PropsWithChildren<{
        guildId: string;
        users: User[];
    }>>;
} & Record<string, any>;
export default _default;
