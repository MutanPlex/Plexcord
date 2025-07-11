import { ChannelTabsProps } from "../util";
export declare const NotificationDot: ({ channelIds }: {
    channelIds: string[];
}) => import("react").JSX.Element | null;
export default function ChannelTab(props: ChannelTabsProps & {
    index: number;
}): import("react").JSX.Element;
export declare const PreviewTab: (props: ChannelTabsProps) => import("react").JSX.Element;
