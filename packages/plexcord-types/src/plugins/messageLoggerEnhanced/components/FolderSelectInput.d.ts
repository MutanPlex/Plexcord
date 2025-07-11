export declare const ImageCacheDir: ({ option }: {
    option: any;
}) => import("react").JSX.Element | null;
export declare const LogsDir: ({ option }: {
    option: any;
}) => import("react").JSX.Element | null;
interface Props {
    settingsKey: "imageCacheDir" | "logsDir";
    successMessage: string;
}
export declare function SelectFolderInput({ settingsKey, successMessage }: Props): import("react").JSX.Element;
export {};
