declare const _default: {
    name: string;
    description: string;
    authors: {
        name: string;
        id: bigint;
    }[];
    flux: {
        STREAM_CREATE: (d: any) => void;
        STREAM_DELETE: (d: any) => void;
    };
} & Record<string, any>;
export default _default;
