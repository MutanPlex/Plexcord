declare const _default: {
    name: string;
    authors: {
        name: string;
        id: bigint;
    }[];
    description: string;
    renderMessagePopoverButton(msg: import("discord-types/general").Message): {
        label: string;
        icon: any;
        message: import("discord-types/general").Message;
        channel: import("discord-types/general").Channel;
        onClick: () => void;
    } | null;
    Icon: () => import("react").JSX.Element;
} & Record<string, any>;
export default _default;
