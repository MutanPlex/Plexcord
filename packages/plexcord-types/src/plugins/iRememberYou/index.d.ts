import "styles.css?managed";
declare const _default: {
    name: string;
    description: string;
    authors: {
        name: string;
        id: bigint;
    }[];
    dependencies: string[];
    patches: never[];
    start(): Promise<void>;
    stop(): void;
} & Record<string, any>;
export default _default;
