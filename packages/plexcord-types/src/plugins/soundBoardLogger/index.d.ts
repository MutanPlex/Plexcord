declare const _default: {
    name: string;
    authors: {
        name: string;
        id: bigint;
    }[];
    description: string;
    dependencies: string[];
    patches: {
        predicate: () => boolean;
        find: string;
        replacement: {
            match: RegExp;
            replace: string;
        };
    }[];
    settings: import("../../utils/types").DefinedSettings<{
        SavedIds: {
            description: string;
            type: import("../../utils/types").OptionType.COMPONENT;
            component: ({ setValue, setError }: import("../../utils/types").IPluginOptionComponentProps) => import("react").JSX.Element;
        };
        FileType: {
            description: string;
            type: import("../../utils/types").OptionType.SELECT;
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
        OpenLogs: {
            type: import("../../utils/types").OptionType.COMPONENT;
            description: string;
            component: () => import("react").JSX.Element;
        };
        soundVolume: {
            description: string;
            type: import("../../utils/types").OptionType.SLIDER;
            default: number;
            markers: number[];
        };
        IconLocation: {
            description: string;
            type: import("../../utils/types").OptionType.SELECT;
            options: ({
                label: string;
                value: string;
                default: true;
            } | {
                label: string;
                value: string;
                default?: undefined;
            })[];
            restartNeeded: true;
        };
    }, import("../../utils/types").SettingsChecks<{
        SavedIds: {
            description: string;
            type: import("../../utils/types").OptionType.COMPONENT;
            component: ({ setValue, setError }: import("../../utils/types").IPluginOptionComponentProps) => import("react").JSX.Element;
        };
        FileType: {
            description: string;
            type: import("../../utils/types").OptionType.SELECT;
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
        OpenLogs: {
            type: import("../../utils/types").OptionType.COMPONENT;
            description: string;
            component: () => import("react").JSX.Element;
        };
        soundVolume: {
            description: string;
            type: import("../../utils/types").OptionType.SLIDER;
            default: number;
            markers: number[];
        };
        IconLocation: {
            description: string;
            type: import("../../utils/types").OptionType.SELECT;
            options: ({
                label: string;
                value: string;
                default: true;
            } | {
                label: string;
                value: string;
                default?: undefined;
            })[];
            restartNeeded: true;
        };
    }>, {}>;
    addSBIconToToolBar(e: {
        toolbar: React.ReactNode[] | React.ReactNode;
    }): number | undefined;
    start(): void;
    stop(): void;
} & Record<string, any>;
export default _default;
