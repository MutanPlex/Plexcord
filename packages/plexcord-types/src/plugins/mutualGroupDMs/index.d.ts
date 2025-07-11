import "./style.css";
import { Channel, User } from "discord-types/general";
import { JSX } from "react";
declare const _default: {
    name: string;
    description: string;
    authors: {
        name: string;
        id: bigint;
    }[];
    patches: {
        find: string;
        replacement: ({
            match: RegExp;
            replace: string;
        } | {
            match: RegExp;
            replace: (m: string, hasMutualGuilds: string, hasMutualFriends: string, Divider: string, classes: string) => string;
        })[];
    }[];
    getMutualGroupDms(userId: string): Channel[];
    pushSection(sections: any[], user: User): void;
    renderMutualGDMs: import("react").FunctionComponent<{
        user: User;
        onClose: () => void;
    }>;
    renderDMPageList: import("react").FunctionComponent<{
        user: User;
        hasDivider: boolean;
        Divider: JSX.Element;
        listStyle: string;
    }>;
} & Record<string, any>;
export default _default;
