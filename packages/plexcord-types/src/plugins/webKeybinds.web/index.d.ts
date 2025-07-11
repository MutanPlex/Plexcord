declare const _default: {
    name: string;
    description: string;
    authors: {
        name: string;
        id: bigint;
    }[];
    enabledByDefault: true;
    onKey(e: KeyboardEvent): void;
    start(): void;
    stop(): void;
} & Record<string, any>;
export default _default;
