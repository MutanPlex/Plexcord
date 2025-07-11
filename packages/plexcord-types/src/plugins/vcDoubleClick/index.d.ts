declare const _default: {
    name: string;
    description: string;
    authors: {
        name: string;
        id: bigint;
    }[];
    patches: ({
        find: string;
        replacement: {
            match: RegExp;
            replace: string;
        }[];
    } | {
        find: string;
        replacement: {
            match: RegExp;
            replace: (_: string, onClick: string, props: string) => string;
        };
    })[];
    shouldRunOnClick(e: MouseEvent, { channelId }: {
        channelId: any;
    }): boolean;
    schedule(cb: () => void, e: any): void;
} & Record<string, any>;
export default _default;
