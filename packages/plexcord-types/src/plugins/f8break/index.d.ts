declare const _default: {
    name: string;
    description: string;
    authors: {
        name: string;
        id: bigint;
    }[];
    start(): void;
    stop(): void;
    event(e: KeyboardEvent): void;
} & Record<string, any>;
export default _default;
