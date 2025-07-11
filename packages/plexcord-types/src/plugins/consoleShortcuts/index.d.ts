import { StartAt } from "../../utils/types";
declare const _default: {
    name: string;
    description: string;
    authors: {
        name: string;
        id: bigint;
    }[];
    startAt: StartAt.Init;
    patches: {
        find: string;
        replacement: {
            match: RegExp;
            replace: string;
        };
    }[];
    start(): void;
    eagerLoad(forceLoad: boolean): Promise<void>;
    stop(): void;
} & Record<string, any>;
export default _default;
