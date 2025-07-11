export declare class LimitedMap<K, V> {
    map: Map<K, V>;
    constructor();
    set(key: K, value: V): void;
    get(key: K): V | undefined;
}
