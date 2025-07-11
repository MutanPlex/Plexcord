/**
 * Calls .join(" ") on the arguments
 * classes("one", "two") => "one two"
 */
export declare function classes(...classes: Array<string | null | undefined | false>): string;
/**
 * Returns a promise that resolves after the specified amount of time
 */
export declare function sleep(ms: number): Promise<void>;
export declare function copyWithToast(text: string, toastMessage?: string): Promise<void>;
/**
 * Check if obj is a true object: of type "object" and not null or array
 */
export declare function isObject(obj: unknown): obj is object;
/**
 * Check if an object is empty or in other words has no own properties
 */
export declare function isObjectEmpty(obj: object): boolean;
/**
 * Returns null if value is not a URL, otherwise return URL object.
 * Avoids having to wrap url checks in a try/catch
 */
export declare function parseUrl(urlString: string): URL | null;
/**
 * Checks whether an element is on screen
 */
export declare const checkIntersecting: (el: Element) => boolean;
export declare function identity<T>(value: T): T;
export declare const isMobile: boolean;
export declare const isPluginDev: (id: string) => boolean;
export declare const isPcPluginDev: (id: string) => boolean;
export declare const shouldShowContributorBadge: (id: string) => boolean;
export declare const shouldShowPcContributorBadge: (id: string) => boolean;
export declare function pluralise(amount: number, singular: string, plural?: string): string;
export declare function interpolateIfDefined(strings: TemplateStringsArray, ...args: any[]): string;
export declare function tryOrElse<T>(func: () => T, fallback: T): T;
