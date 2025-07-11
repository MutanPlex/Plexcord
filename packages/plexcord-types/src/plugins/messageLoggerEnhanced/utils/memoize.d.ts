type MemoizedFunction<T extends (...args: any[]) => any> = {
    (...args: Parameters<T>): ReturnType<T>;
    clear(): void;
};
export declare function memoize<T extends (...args: any[]) => any>(func: T): MemoizedFunction<T>;
export {};
