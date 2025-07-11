declare const _default: {
    name: string;
    description: string;
    authors: {
        name: string;
        id: bigint;
    }[];
    TypingIcon(): import("react").JSX.Element;
    isTyping(): boolean;
    patches: {
        find: string;
        replacement: {
            match: RegExp;
            replace: string;
        }[];
        group: true;
    }[];
} & Record<string, any>;
export default _default;
