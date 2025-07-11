/**
 * Returns a new function that will call the wrapped function
 * after the specified delay. If the function is called again
 * within the delay, the timer will be reset.
 * @param func The function to wrap
 * @param delay The delay in milliseconds
 */
export declare function debounce<T extends Function>(func: T, delay?: number): T;
