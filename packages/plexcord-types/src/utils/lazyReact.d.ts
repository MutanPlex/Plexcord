import type { ComponentType } from "react";
export type LazyComponentWrapper<ComponentType> = ComponentType & {
    $$plexcordGetWrappedComponent(): ComponentType;
};
/**
 * A lazy component. The factory method is called on first render.
 * @param factory Function returning a Component
 * @param attempts How many times to try to get the component before giving up
 * @returns Result of factory function
 */
export declare function LazyComponent<T extends object = any>(factory: () => ComponentType<T>, attempts?: number): LazyComponentWrapper<ComponentType<T>>;
