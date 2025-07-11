import { CodeFilter } from "../../webpack/webpack";
import { FindNode } from "./types/recieve";
/**
 * extracts the patched module, if there is no patched module, throws an error
 * @param id module id
 */
export declare function extractOrThrow(id: PropertyKey): string;
/**
 *  attempts to extract the module, throws if not found
 *
 *
 * if patched is true and no patched module is found fallsback to the non-patched module
 * @param id module id
 * @param patched return the patched module
 */
export declare function extractModule(id: PropertyKey, patched?: boolean): string;
/**
 *
 * @param usePatched if false, always returns `[]`, otherwise uses the same setting as {@link extractModule}
 */
export declare function getModulePatchedBy(id: PropertyKey, usePatched?: boolean): string[];
export declare function parseNode(node: FindNode): any;
export declare function findModuleId(find: CodeFilter): string;
export declare function mkRegexFind(idOrSearch: string): RegExp[];
export declare function toggleEnabled(name: string, beforeReload: (error?: string) => void): void;
