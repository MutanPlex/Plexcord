import type { LiteralUnion } from "type-fest";
/**
 * Wait for a property to be defined on the target, then call the callback with
 * the value
 * @param target Object
 * @param property Property to be defined
 * @param callback Callback
 *
 * @example onceDefined(window, "webpackChunkdiscord_app", wpInstance => wpInstance.push(...));
 */
export declare function onceDefined<T extends object, P extends LiteralUnion<keyof T, PropertyKey>>(target: T, property: P, callback: (v: P extends keyof T ? T[P] : any) => void): void;
