import { OptionType } from "../../utils/types";
import { Message } from "discord-types/general";
import { StreamingTreatment } from "./types";
export declare const settings: import("../../utils/types").DefinedSettings<{
    position: {
        type: OptionType.SELECT;
        description: string;
        options: ({
            label: string;
            value: string;
            default: true;
        } | {
            label: string;
            value: string;
            default?: undefined;
        })[];
    };
    timeout: {
        type: OptionType.SLIDER;
        description: string;
        default: number;
        markers: number[];
    };
    opacity: {
        type: OptionType.SLIDER;
        description: string;
        default: number;
        markers: number[];
    };
    maxNotifications: {
        type: OptionType.SLIDER;
        description: string;
        default: number;
        markers: number[];
    };
    determineServerNotifications: {
        type: OptionType.BOOLEAN;
        description: string;
        default: true;
    };
    disableInStreamerMode: {
        type: OptionType.BOOLEAN;
        description: string;
        default: true;
    };
    renderImages: {
        type: OptionType.BOOLEAN;
        description: string;
        default: true;
    };
    directMessages: {
        type: OptionType.BOOLEAN;
        description: string;
        default: true;
    };
    groupMessages: {
        type: OptionType.BOOLEAN;
        description: string;
        default: true;
    };
    friendServerNotifications: {
        type: OptionType.BOOLEAN;
        description: string;
        default: true;
    };
    friendActivity: {
        type: OptionType.BOOLEAN;
        description: string;
        default: true;
    };
    streamingTreatment: {
        type: OptionType.SELECT;
        description: string;
        options: ({
            label: string;
            value: StreamingTreatment;
            default: true;
        } | {
            label: string;
            value: StreamingTreatment;
            default?: undefined;
        })[];
    };
    notifyFor: {
        type: OptionType.STRING;
        description: string;
        onChange: () => void;
        default: string;
    };
    ignoreUsers: {
        type: OptionType.STRING;
        description: string;
        onChange: () => void;
        default: string;
    };
    exampleButton: {
        type: OptionType.COMPONENT;
        description: string;
        component: () => import("react").JSX.Element;
    };
}, import("../../utils/types").SettingsChecks<{
    position: {
        type: OptionType.SELECT;
        description: string;
        options: ({
            label: string;
            value: string;
            default: true;
        } | {
            label: string;
            value: string;
            default?: undefined;
        })[];
    };
    timeout: {
        type: OptionType.SLIDER;
        description: string;
        default: number;
        markers: number[];
    };
    opacity: {
        type: OptionType.SLIDER;
        description: string;
        default: number;
        markers: number[];
    };
    maxNotifications: {
        type: OptionType.SLIDER;
        description: string;
        default: number;
        markers: number[];
    };
    determineServerNotifications: {
        type: OptionType.BOOLEAN;
        description: string;
        default: true;
    };
    disableInStreamerMode: {
        type: OptionType.BOOLEAN;
        description: string;
        default: true;
    };
    renderImages: {
        type: OptionType.BOOLEAN;
        description: string;
        default: true;
    };
    directMessages: {
        type: OptionType.BOOLEAN;
        description: string;
        default: true;
    };
    groupMessages: {
        type: OptionType.BOOLEAN;
        description: string;
        default: true;
    };
    friendServerNotifications: {
        type: OptionType.BOOLEAN;
        description: string;
        default: true;
    };
    friendActivity: {
        type: OptionType.BOOLEAN;
        description: string;
        default: true;
    };
    streamingTreatment: {
        type: OptionType.SELECT;
        description: string;
        options: ({
            label: string;
            value: StreamingTreatment;
            default: true;
        } | {
            label: string;
            value: StreamingTreatment;
            default?: undefined;
        })[];
    };
    notifyFor: {
        type: OptionType.STRING;
        description: string;
        onChange: () => void;
        default: string;
    };
    ignoreUsers: {
        type: OptionType.STRING;
        description: string;
        onChange: () => void;
        default: string;
    };
    exampleButton: {
        type: OptionType.COMPONENT;
        description: string;
        component: () => import("react").JSX.Element;
    };
}>, {}>;
declare const _default: {
    name: string;
    description: string;
    authors: {
        name: string;
        id: bigint;
    }[];
    settings: import("../../utils/types").DefinedSettings<{
        position: {
            type: OptionType.SELECT;
            description: string;
            options: ({
                label: string;
                value: string;
                default: true;
            } | {
                label: string;
                value: string;
                default?: undefined;
            })[];
        };
        timeout: {
            type: OptionType.SLIDER;
            description: string;
            default: number;
            markers: number[];
        };
        opacity: {
            type: OptionType.SLIDER;
            description: string;
            default: number;
            markers: number[];
        };
        maxNotifications: {
            type: OptionType.SLIDER;
            description: string;
            default: number;
            markers: number[];
        };
        determineServerNotifications: {
            type: OptionType.BOOLEAN;
            description: string;
            default: true;
        };
        disableInStreamerMode: {
            type: OptionType.BOOLEAN;
            description: string;
            default: true;
        };
        renderImages: {
            type: OptionType.BOOLEAN;
            description: string;
            default: true;
        };
        directMessages: {
            type: OptionType.BOOLEAN;
            description: string;
            default: true;
        };
        groupMessages: {
            type: OptionType.BOOLEAN;
            description: string;
            default: true;
        };
        friendServerNotifications: {
            type: OptionType.BOOLEAN;
            description: string;
            default: true;
        };
        friendActivity: {
            type: OptionType.BOOLEAN;
            description: string;
            default: true;
        };
        streamingTreatment: {
            type: OptionType.SELECT;
            description: string;
            options: ({
                label: string;
                value: StreamingTreatment;
                default: true;
            } | {
                label: string;
                value: StreamingTreatment;
                default?: undefined;
            })[];
        };
        notifyFor: {
            type: OptionType.STRING;
            description: string;
            onChange: () => void;
            default: string;
        };
        ignoreUsers: {
            type: OptionType.STRING;
            description: string;
            onChange: () => void;
            default: string;
        };
        exampleButton: {
            type: OptionType.COMPONENT;
            description: string;
            component: () => import("react").JSX.Element;
        };
    }, import("../../utils/types").SettingsChecks<{
        position: {
            type: OptionType.SELECT;
            description: string;
            options: ({
                label: string;
                value: string;
                default: true;
            } | {
                label: string;
                value: string;
                default?: undefined;
            })[];
        };
        timeout: {
            type: OptionType.SLIDER;
            description: string;
            default: number;
            markers: number[];
        };
        opacity: {
            type: OptionType.SLIDER;
            description: string;
            default: number;
            markers: number[];
        };
        maxNotifications: {
            type: OptionType.SLIDER;
            description: string;
            default: number;
            markers: number[];
        };
        determineServerNotifications: {
            type: OptionType.BOOLEAN;
            description: string;
            default: true;
        };
        disableInStreamerMode: {
            type: OptionType.BOOLEAN;
            description: string;
            default: true;
        };
        renderImages: {
            type: OptionType.BOOLEAN;
            description: string;
            default: true;
        };
        directMessages: {
            type: OptionType.BOOLEAN;
            description: string;
            default: true;
        };
        groupMessages: {
            type: OptionType.BOOLEAN;
            description: string;
            default: true;
        };
        friendServerNotifications: {
            type: OptionType.BOOLEAN;
            description: string;
            default: true;
        };
        friendActivity: {
            type: OptionType.BOOLEAN;
            description: string;
            default: true;
        };
        streamingTreatment: {
            type: OptionType.SELECT;
            description: string;
            options: ({
                label: string;
                value: StreamingTreatment;
                default: true;
            } | {
                label: string;
                value: StreamingTreatment;
                default?: undefined;
            })[];
        };
        notifyFor: {
            type: OptionType.STRING;
            description: string;
            onChange: () => void;
            default: string;
        };
        ignoreUsers: {
            type: OptionType.STRING;
            description: string;
            onChange: () => void;
            default: string;
        };
        exampleButton: {
            type: OptionType.COMPONENT;
            description: string;
            component: () => import("react").JSX.Element;
        };
    }>, {}>;
    flux: {
        MESSAGE_CREATE({ message }: {
            message: Message;
        }): Promise<void>;
        RELATIONSHIP_ADD({ relationship }: any): Promise<void>;
    };
    start(): void;
} & Record<string, any>;
export default _default;
