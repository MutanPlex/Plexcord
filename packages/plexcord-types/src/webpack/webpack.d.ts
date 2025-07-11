import { FluxStore } from "./common/types";
import { AnyModuleFactory, AnyWebpackRequire, ModuleExports, WebpackRequire } from "./wreq";
export declare let _resolveReady: () => void;
/**
 * Fired once a gateway connection to Discord has been established.
 * This indicates that the core webpack modules have been initialised
 */
export declare const onceReady: Promise<void>;
export declare let wreq: WebpackRequire;
export declare let cache: WebpackRequire["c"];
export declare const fluxStores: Record<string, FluxStore>;
export type FilterFn = (mod: any) => boolean;
export type PropsFilter = Array<string>;
export type CodeFilter = Array<string | RegExp>;
export type StoreNameFilter = string;
export declare const stringMatches: (s: string, filter: CodeFilter) => boolean;
export declare const filters: {
    byProps: (...props: PropsFilter) => FilterFn;
    byCode: (...code: CodeFilter) => FilterFn;
    byStoreName: (name: StoreNameFilter) => FilterFn;
    componentByCode: (...code: CodeFilter) => FilterFn;
};
export type CallbackFn = (module: ModuleExports, id: PropertyKey) => void;
export type FactoryListernFn = (factory: AnyModuleFactory, moduleId: PropertyKey) => void;
export declare const waitForSubscriptions: Map<FilterFn, CallbackFn>;
export declare const moduleListeners: Set<CallbackFn>;
export declare const factoryListeners: Set<FactoryListernFn>;
export declare function _initWebpack(webpackRequire: WebpackRequire): void;
export declare function _blacklistBadModules(requireCache: NonNullable<AnyWebpackRequire["c"]>, exports: ModuleExports, moduleId: PropertyKey): boolean;
export declare function handleModuleNotFound(method: string, ...filter: unknown[]): void;
/**
 * Find the first module that matches the filter
 */
export declare const find: (filter: FilterFn, { isIndirect, isWaitFor }?: {
    isIndirect?: boolean;
    isWaitFor?: boolean;
}) => any;
export declare function findAll(filter: FilterFn): any[];
/**
 * Same as {@link find} but in bulk
 * @param filterFns Array of filters. Please note that this array will be modified in place, so if you still
 *                need it afterwards, pass a copy.
 * @returns Array of results in the same order as the passed filters
 */
export declare const findBulk: (...filterFns: FilterFn[]) => any;
/**
 * Find the id of the first module factory that includes all the given code
 * @returns string or null
 */
export declare const findModuleId: (...code: CodeFilter) => string | null;
/**
 * Find the first module factory that includes all the given code
 * @returns The module factory or null
 */
export declare function findModuleFactory(...code: CodeFilter): import("./wreq").ModuleFactory | null;
export type TypeWebpackSearchHistory = "find" | "findByProps" | "findByCode" | "findStore" | "findComponent" | "findComponentByCode" | "findExportedComponent" | "waitFor" | "waitForComponent" | "waitForStore" | "proxyLazyWebpack" | "LazyComponentWebpack" | "extractAndLoadChunks" | "mapMangledModule";
export declare const lazyWebpackSearchHistory: Array<[TypeWebpackSearchHistory, any[]]>;
/**
 * This is just a wrapper around {@link proxyLazy} to make our reporter test for your webpack finds.
 *
 * Wraps the result of {@link makeLazy} in a Proxy you can consume as if it wasn't lazy.
 * On first property access, the lazy is evaluated
 * @param factory lazy factory
 * @param attempts how many times to try to evaluate the lazy before giving up
 * @returns Proxy
 *
 * Note that the example below exists already as an api, see {@link findByPropsLazy}
 * @example const mod = proxyLazy(() => findByProps("blah")); console.log(mod.blah);
 */
export declare function proxyLazyWebpack<T = any>(factory: () => T, attempts?: number): T;
/**
 * This is just a wrapper around {@link LazyComponent} to make our reporter test for your webpack finds.
 *
 * A lazy component. The factory method is called on first render.
 * @param factory Function returning a Component
 * @param attempts How many times to try to get the component before giving up
 * @returns Result of factory function
 */
export declare function LazyComponentWebpack<T extends object = any>(factory: () => any, attempts?: number): import("../utils/lazyReact").LazyComponentWrapper<import("react").ComponentType<T>>;
/**
 * Find the first module that matches the filter, lazily
 */
export declare function findLazy(filter: FilterFn): any;
/**
 * Find the first module that has the specified properties
 */
export declare function findByProps(...props: PropsFilter): any;
/**
 * Find the first module that has the specified properties, lazily
 */
export declare function findByPropsLazy(...props: PropsFilter): any;
/**
 * Find the first function that includes all the given code
 */
export declare function findByCode(...code: CodeFilter): any;
/**
 * Find the first function that includes all the given code, lazily
 */
export declare function findByCodeLazy(...code: CodeFilter): any;
/**
 * Find a store by its displayName
 */
export declare function findStore(name: StoreNameFilter): any;
/**
 * Find a store by its displayName, lazily
 */
export declare function findStoreLazy(name: StoreNameFilter): any;
/**
 * Finds the component which includes all the given code. Checks for plain components, memos and forwardRefs
 */
export declare function findComponentByCode(...code: CodeFilter): any;
/**
 * Finds the first component that matches the filter, lazily.
 */
export declare function findComponentLazy<T extends object = any>(filter: FilterFn): import("../utils/lazyReact").LazyComponentWrapper<import("react").ComponentType<T>>;
/**
 * Finds the first component that includes all the given code, lazily
 */
export declare function findComponentByCodeLazy<T extends object = any>(...code: CodeFilter): import("../utils/lazyReact").LazyComponentWrapper<import("react").ComponentType<T>>;
/**
 * Finds the first component that is exported by the first prop name, lazily
 */
export declare function findExportedComponentLazy<T extends object = any>(...props: PropsFilter): import("../utils/lazyReact").LazyComponentWrapper<import("react").ComponentType<T>>;
/**
 * Finds a mangled module by the provided code "code" (must be unique and can be anywhere in the module)
 * then maps it into an easily usable module via the specified mappers.
 *
 * @param code The code to look for
 * @param mappers Mappers to create the non mangled exports
 * @param includeBlacklistedExports Whether to include blacklisted exports in the search.
 *                                  These exports are dangerous. Accessing properties on them may throw errors
 *                                  or always return values (so a byProps filter will always return true)
 * @returns Unmangled exports as specified in mappers
 *
 * @example mapMangledModule("headerIdIsManaged:", {
 *             openModal: filters.byCode("headerIdIsManaged:"),
 *             closeModal: filters.byCode("key==")
 *          })
 */
export declare const mapMangledModule: <S extends string>(code: string | RegExp | CodeFilter, mappers: Record<S, FilterFn>, includeBlacklistedExports?: boolean) => Record<S, any>;
/**
 * lazy mapMangledModule
  * @see {@link mapMangledModule}
 */
export declare function mapMangledModuleLazy<S extends string>(code: string | RegExp | CodeFilter, mappers: Record<S, FilterFn>, includeBlacklistedExports?: boolean): Record<S, any>;
export declare const DefaultExtractAndLoadChunksRegex: RegExp;
export declare const ChunkIdsRegex: RegExp;
/**
 * Extract and load chunks using their entry point
 * @param code An array of all the code the module factory containing the lazy chunk loading must include
 * @param matcher A RegExp that returns the chunk ids array as the first capture group and the entry point id as the second. Defaults to a matcher that captures the first lazy chunk loading found in the module factory
 * @returns A promise that resolves with a boolean whether the chunks were loaded
 */
export declare function extractAndLoadChunks(code: CodeFilter, matcher?: RegExp): Promise<boolean>;
/**
 * This is just a wrapper around {@link extractAndLoadChunks} to make our reporter test for your webpack finds.
 *
 * Extract and load chunks using their entry point
 * @param code An array of all the code the module factory containing the lazy chunk loading must include
 * @param matcher A RegExp that returns the chunk ids array as the first capture group and the entry point id as the second. Defaults to a matcher that captures the first lazy chunk loading found in the module factory
 * @returns A function that returns a promise that resolves with a boolean whether the chunks were loaded, on first call
 */
export declare function extractAndLoadChunksLazy(code: CodeFilter, matcher?: RegExp): () => Promise<boolean>;
/**
 * Wait for a module that matches the provided filter to be registered,
 * then call the callback with the module as the first argument
 */
export declare function waitFor(filter: string | PropsFilter | FilterFn, callback: CallbackFn, { isIndirect }?: {
    isIndirect?: boolean;
}): undefined;
/**
 * Search modules by keyword. This searches the factory methods,
 * meaning you can search all sorts of things, displayName, methodName, strings somewhere in the code, etc
 * @param code One or more strings or regexes
 * @returns Mapping of found modules
 */
export declare function search(...code: CodeFilter): Record<number, Function>;
/**
 * Extract a specific module by id into its own Source File. This has no effect on
 * the code, it is only useful to be able to look at a specific module without having
 * to view a massive file. extract then returns the extracted module so you can jump to it.
 * As mentioned above, note that this extracted module is not actually used,
 * so putting breakpoints or similar will have no effect.
 * @param id The id of the module to extract
 */
export declare function extract(id: string | number): Function | null;
