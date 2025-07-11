export declare class ChangeList<T> {
    private set;
    get changeCount(): number;
    get hasChanges(): boolean;
    handleChange(item: T): void;
    add(item: T): Set<T>;
    remove(item: T): boolean;
    getChanges(): SetIterator<T>;
    map<R>(mapper: (v: T, idx: number, arr: T[]) => R): R[];
}
