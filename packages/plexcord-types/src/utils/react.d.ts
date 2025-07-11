import { ActionDispatch } from "react";
export * from "./lazyReact";
export declare const NoopComponent: () => null;
/**
 * Check if an element is on screen
 * @param intersectOnly If `true`, will only update the state when the element comes into view
 * @returns [refCallback, isIntersecting]
 */
export declare const useIntersection: (intersectOnly?: boolean) => [refCallback: React.RefCallback<Element>, isIntersecting: boolean];
type AwaiterRes<T> = [T, any, boolean];
interface AwaiterOpts<T> {
    fallbackValue: T;
    deps?: unknown[];
    onError?(e: any): void;
    onSuccess?(value: T): void;
}
/**
 * Await a promise
 * @param factory Factory
 * @param fallbackValue The fallback value that will be used until the promise resolved
 * @returns [value, error, isPending]
 */
export declare function useAwaiter<T>(factory: () => Promise<T>): AwaiterRes<T | null>;
export declare function useAwaiter<T>(factory: () => Promise<T>, providedOpts: AwaiterOpts<T>): AwaiterRes<T>;
/**
 * Returns a function that can be used to force rerender react components
 */
export declare function useForceUpdater(): ActionDispatch<[]>;
export declare function useForceUpdater(withDep: true): [any, ActionDispatch<[]>];
interface TimerOpts {
    interval?: number;
    deps?: unknown[];
}
export declare function useTimer({ interval, deps }: TimerOpts): number;
interface FixedTimerOpts {
    interval?: number;
    initialTime?: number;
}
export declare function useFixedTimer({ interval, initialTime }: FixedTimerOpts): number;
