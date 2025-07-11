import "./styles.css";
import { ImageVisible } from "../../components/Icons";
declare const _default: {
    name: string;
    description: string;
    authors: {
        name: string;
        id: bigint;
    }[];
    dependencies: string[];
    patches: {
        find: string;
        replacement: {
            match: RegExp;
            replace: string;
        };
    }[];
    renderMessagePopoverButton(msg: import("discord-types/general").Message): {
        label: string;
        icon: typeof ImageVisible;
        message: import("discord-types/general").Message;
        channel: import("discord-types/general").Channel;
        onClick: () => any;
    } | null;
    renderMessageAccessory({ message }: Record<string, any>): import("react").JSX.Element | null;
    start(): Promise<void>;
    stop(): void;
    shouldHide(messageId: string): boolean;
    toggleHide(channelId: string, messageId: string): Promise<void>;
} & Record<string, any>;
export default _default;
