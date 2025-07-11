import { Promisable } from "type-fest";
/**
 * A queue that can be used to run tasks consecutively.
 * Highly recommended for things like fetching data from Discord
 */
export declare class Queue {
    readonly maxSize: number;
    /**
     * @param maxSize The maximum amount of functions that can be queued at once.
     *                If the queue is full, the oldest function will be removed.
     */
    constructor(maxSize?: number);
    private queue;
    private promise?;
    private next;
    private run;
    /**
     * Append a task at the end of the queue. This task will be executed after all other tasks
     * If the queue exceeds the specified maxSize, the first task in queue will be removed.
     * @param func Task
     */
    push<T>(func: () => Promisable<T>): void;
    /**
     * Prepend a task at the beginning of the queue. This task will be executed next
     * If the queue exceeds the specified maxSize, the last task in queue will be removed.
     * @param func Task
     */
    unshift<T>(func: () => Promisable<T>): void;
    /**
     * The amount of tasks in the queue
     */
    get size(): number;
}
