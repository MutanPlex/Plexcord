export declare function isTruthy<T>(item: T): item is Exclude<T, 0 | "" | false | null | undefined>;
export declare function isNonNullish<T>(item: T): item is Exclude<T, null | undefined>;
