import { Patch, PatchReplacement, ReplaceFn } from "./types";
export declare function canonicalizeMatch<T extends RegExp | string>(match: T): T;
export declare function canonicalizeReplace<T extends string | ReplaceFn>(replace: T, pluginPath: string): T;
export declare function canonicalizeDescriptor<T>(descriptor: TypedPropertyDescriptor<T>, canonicalize: (value: T) => T): TypedPropertyDescriptor<T>;
export declare function canonicalizeReplacement(replacement: Pick<PatchReplacement, "match" | "replace">, pluginPath: string): void;
export declare function canonicalizeFind(patch: Patch): void;
