export declare function makeLazy<T>(factory: () => T, attempts?: number): () => T;
export declare const SYM_LAZY_GET: unique symbol;
export declare const SYM_LAZY_CACHED: unique symbol;
/**
 * Wraps the result of {@link makeLazy} in a Proxy you can consume as if it wasn't lazy.
 * On first property access, the lazy is evaluated
 * @param factory lazy factory
 * @param attempts how many times to try to evaluate the lazy before giving up
 * @returns Proxy
 *
 * Note that the example below exists already as an api, see {@link findByPropsLazy}
 * @example const mod = proxyLazy(() => findByProps("blah")); console.log(mod.blah);
 */
export declare function proxyLazy<T>(factory: () => T, attempts?: number, isChild?: boolean): T;
