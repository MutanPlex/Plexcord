import { LoggedMessageJSON } from "../types";
declare const validIdSearchTypes: readonly ["server", "guild", "channel", "in", "user", "from", "message", "has", "before", "after", "around", "near", "during"];
type ValidIdSearchTypesUnion = typeof validIdSearchTypes[number];
interface QueryResult {
    key: ValidIdSearchTypesUnion;
    value: string;
    negate: boolean;
}
export declare const parseQuery: {
    (query?: string | undefined): string | QueryResult;
    clear(): void;
};
export declare const tokenizeQuery: (query: string) => {
    queries: QueryResult[];
    rest: string[];
};
export declare const doesMatch: (type: (typeof validIdSearchTypes)[number], value: string, message: LoggedMessageJSON) => any;
export {};
