export declare class EventEmitter<T> {
    events: {
        [key: string]: ((val: T) => void)[];
    };
    constructor();
    on(eventName: string, callback: (val: T) => void): void;
    emit(eventName: string, val: T): void;
    off(eventName: string, callback: (val: T) => void): void;
    clear(): void;
    once(eventName: string, callback: (val: T) => void): void;
}
