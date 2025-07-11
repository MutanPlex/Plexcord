import { ChatBarButtonFactory } from "../../../api/ChatButtons";
export declare function PlayIcon(): import("react").JSX.Element;
export declare function DownloadIcon(): import("react").JSX.Element;
export declare function LogIcon({ height, width, className }: {
    height?: number;
    width?: number;
    className?: string;
}): import("react").JSX.Element;
export declare function IconWithTooltip({ text, icon, onClick }: {
    text: any;
    icon: any;
    onClick: any;
}): import("react").JSX.Element;
export declare const ChatBarIcon: ChatBarButtonFactory;
