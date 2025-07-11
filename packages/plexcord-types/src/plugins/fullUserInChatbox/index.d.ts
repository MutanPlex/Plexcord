import { ReactNode } from "react";
interface UserMentionComponentProps {
    id: string;
    channelId: string;
    guildId: string;
    originalComponent: () => ReactNode;
}
declare const _default: {
    name: string;
    description: string;
    authors: {
        name: string;
        id: bigint;
    }[];
    patches: {
        find: string;
        replacement: {
            match: RegExp;
            replace: string;
        };
    }[];
    UserMentionComponent: import("react").FunctionComponent<UserMentionComponentProps>;
} & Record<string, any>;
export default _default;
