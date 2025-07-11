import type { ReactElement } from "react";
/**
 * @param children The rendered context menu elements
 * @param args Any arguments passed into making the context menu, like the guild, channel, user or message for example
 */
export type NavContextMenuPatchCallback = (children: Array<ReactElement<any> | null>, ...args: Array<any>) => void;
/**
 * @param navId The navId of the context menu being patched
 * @param children The rendered context menu elements
 * @param args Any arguments passed into making the context menu, like the guild, channel, user or message for example
 */
export type GlobalContextMenuPatchCallback = (navId: string, children: Array<ReactElement<any> | null>, ...args: Array<any>) => void;
export declare const navPatches: Map<string, Set<NavContextMenuPatchCallback>>;
export declare const globalPatches: Set<GlobalContextMenuPatchCallback>;
/**
 * Add a context menu patch
 * @param navId The navId(s) for the context menu(s) to patch
 * @param patch The patch to be applied
 */
export declare function addContextMenuPatch(navId: string | Array<string>, patch: NavContextMenuPatchCallback): void;
/**
 * Add a global context menu patch that fires the patch for all context menus
 * @param patch The patch to be applied
 */
export declare function addGlobalContextMenuPatch(patch: GlobalContextMenuPatchCallback): void;
/**
 * Remove a context menu patch
 * @param navId The navId(s) for the context menu(s) to remove the patch
 * @param patch The patch to be removed
 * @returns Whether the patch was successfully removed from the context menu(s)
 */
export declare function removeContextMenuPatch<T extends string | Array<string>>(navId: T, patch: NavContextMenuPatchCallback): T extends string ? boolean : Array<boolean>;
/**
 * Remove a global context menu patch
 * @param patch The patch to be removed
 * @returns Whether the patch was successfully removed
 */
export declare function removeGlobalContextMenuPatch(patch: GlobalContextMenuPatchCallback): boolean;
/**
 * A helper function for finding the children array of a group nested inside a context menu based on the id(s) of its children
 * @param id The id of the child. If an array is specified, all ids will be tried
 * @param children The context menu children
 * @param matchSubstring Whether to check if the id is a substring of the child id
 */
export declare function findGroupChildrenByChildId(id: string | string[], children: Array<ReactElement<any> | null | undefined>, matchSubstring?: boolean): Array<ReactElement<any> | null | undefined> | null;
interface ContextMenuProps {
    contextMenuAPIArguments?: Array<any>;
    navId: string;
    children: Array<ReactElement<any> | null>;
    "aria-label": string;
    onSelect: (() => void) | undefined;
    onClose: (callback: (...args: Array<any>) => any) => void;
}
export declare function _usePatchContextMenu(props: ContextMenuProps): ContextMenuProps;
export {};
