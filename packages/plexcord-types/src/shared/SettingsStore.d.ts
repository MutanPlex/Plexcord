import { LiteralUnion } from "type-fest";
export declare const SYM_IS_PROXY: unique symbol;
export declare const SYM_GET_RAW_TARGET: unique symbol;
type ResolvePropDeep<T, P> = P extends `${infer Pre}.${infer Suf}` ? Pre extends keyof T ? ResolvePropDeep<T[Pre], Suf> : any : P extends keyof T ? T[P] : any;
interface SettingsStoreOptions {
    readOnly?: boolean;
    getDefaultValue?: (data: {
        target: any;
        key: string;
        root: any;
        path: string;
    }) => any;
}
export interface SettingsStore<T extends object> extends SettingsStoreOptions {
}
/**
 * The SettingsStore allows you to easily create a mutable store that
 * has support for global and path-based change listeners.
 */
export declare class SettingsStore<T extends object> {
    private pathListeners;
    private globalListeners;
    private readonly proxyContexts;
    private readonly proxyHandler;
    /**
     * The store object. Making changes to this object will trigger the applicable change listeners
     */
    store: T;
    /**
     * The plain data. Changes to this object will not trigger any change listeners
     */
    plain: T;
    constructor(plain: T, options?: SettingsStoreOptions);
    private makeProxy;
    private notifyListeners;
    /**
     * Set the data of the store.
     * This will update this.store and this.plain (and old references to them will be stale! Avoid storing them in variables)
     *
     * Additionally, all global listeners (and those for pathToNotify, if specified) will be called with the new data
     * @param value New data
     * @param pathToNotify Optional path to notify instead of globally. Used to transfer path via ipc
     */
    setData(value: T, pathToNotify?: string): void;
    /**
     * Add a global change listener, that will fire whenever any setting is changed
     *
     * @param data The new data. This is either the new value set on the path, or the new root object if it was changed
     * @param path The path of the setting that was changed. Empty string if the root object was changed
     */
    addGlobalChangeListener(cb: (data: any, path: string) => void): void;
    /**
     * Add a scoped change listener that will fire whenever a setting matching the specified path is changed.
     *
     * For example if path is `"foo.bar"`, the listener will fire on
     * ```js
     * Setting.store.foo.bar = "hi"
     * ```
     * but not on
     * ```js
     * Setting.store.foo.baz = "hi"
     * ```
     * @param path
     * @param cb
     */
    addChangeListener<P extends LiteralUnion<keyof T, string>>(path: P, cb: (data: ResolvePropDeep<T, P>) => void): void;
    /**
     * Remove a global listener
     * @see {@link addGlobalChangeListener}
     */
    removeGlobalChangeListener(cb: (data: any, path: string) => void): void;
    /**
     * Remove a scoped listener
     * @see {@link addChangeListener}
     */
    removeChangeListener(path: LiteralUnion<keyof T, string>, cb: (data: any) => void): void;
    /**
     * Call all global change listeners
     */
    markAsChanged(): void;
}
export {};
