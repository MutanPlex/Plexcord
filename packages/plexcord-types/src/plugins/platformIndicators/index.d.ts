import "./style.css";
import { OptionType } from "../../utils/types";
export interface Session {
    sessionId: string;
    status: string;
    active: boolean;
    clientInfo: {
        version: number;
        os: string;
        client: string;
    };
}
declare const _default: {
    name: string;
    description: string;
    authors: {
        name: string;
        id: bigint;
    }[];
    dependencies: string[];
    start(): void;
    stop(): void;
    patches: ({
        find: string;
        predicate: () => any;
        replacement: ({
            match: RegExp;
            replace: string;
        } | {
            match: RegExp;
            replace: (_: string, userStatus: string, isMobile: string) => string;
        })[];
    } | {
        find: string;
        predicate: () => any;
        replacement: {
            match: RegExp;
            replace: string;
        };
    })[];
    options: {
        colorMobileIndicator: {
            type: OptionType.BOOLEAN;
            description: string;
            default: true;
            restartNeeded: true;
        };
    };
} & Record<string, any>;
export default _default;
