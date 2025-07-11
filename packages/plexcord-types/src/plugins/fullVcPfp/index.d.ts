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
    getVoiceBackgroundStyles({ className, participantUserId }: any): {
        backgroundImage: string;
        backgroundSize: string;
        backgroundPosition: string;
        backgroundRepeat: string;
        "--full-res-avatar": string;
    } | {
        "--full-res-avatar": string;
        backgroundImage?: undefined;
        backgroundSize?: undefined;
        backgroundPosition?: undefined;
        backgroundRepeat?: undefined;
    } | undefined;
    start(): void;
    stop(): void;
} & Record<string, any>;
export default _default;
