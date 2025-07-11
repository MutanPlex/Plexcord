type Url = string | URL;
export declare function checkedFetch(url: Url, options?: RequestInit): Promise<Response>;
export declare function fetchJson<T = any>(url: Url, options?: RequestInit): Promise<T>;
export declare function fetchBuffer(url: Url, options?: RequestInit): Promise<Buffer<ArrayBuffer>>;
export declare function downloadToFile(url: Url, path: string, options?: RequestInit): Promise<void>;
export {};
