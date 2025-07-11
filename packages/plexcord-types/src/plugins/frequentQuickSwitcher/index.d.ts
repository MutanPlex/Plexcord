declare function generateSearchResults(query: any): {
    type: string;
    record: import("discord-types/general").Channel;
    score: number;
    comparator: any;
    sortable: any;
}[];
declare const _default: {
    name: string;
    description: string;
    authors: {
        name: string;
        id: bigint;
    }[];
    generateSearchResults: typeof generateSearchResults;
    patches: {
        find: string;
        replacement: {
            match: RegExp;
            replace: string;
        };
    }[];
} & Record<string, any>;
export default _default;
