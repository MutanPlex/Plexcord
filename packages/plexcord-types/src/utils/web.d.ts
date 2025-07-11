/**
 * Prompts the user to save a file to their system
 * @param file The file to save
 */
export declare function saveFile(file: File): void;
/**
 * Prompts the user to choose a file from their system
 * @param mimeTypes A comma separated list of mime types to accept, see https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/accept#unique_file_type_specifiers
 * @returns A promise that resolves to the chosen file or null if the user cancels
 */
export declare function chooseFile(mimeTypes: string): Promise<File | null>;
export declare function getStylusWebStoreUrl(): "https://chromewebstore.google.com/detail/stylus/clngdbkpkpeebahjckkjfobafhncgmne" | "https://addons.mozilla.org/firefox/addon/styl-us/";
