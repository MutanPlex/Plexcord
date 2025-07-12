import { OptionType } from "../../utils/types";
declare const enum ActivitiesTypes {
    Game = 0,
    Embedded = 1
}
interface IgnoredActivity {
    id: string;
    name: string;
    type: ActivitiesTypes;
}
declare const enum FilterMode {
    Whitelist = 0,
    Blacklist = 1
}
declare function recalculateActivities(): void;
declare function ImportCustomRPCComponent(): import("react").JSX.Element;
declare const _default: {
    name: string;
    authors: {
        name: string;
        id: bigint;
    }[];
    description: string;
    dependencies: string[];
    settings: import("../../utils/types").DefinedSettings<{
        importCustomRPC: {
            type: OptionType.COMPONENT;
            component: typeof ImportCustomRPCComponent;
        };
        listMode: {
            type: OptionType.SELECT;
            description: string;
            options: ({
                label: string;
                value: FilterMode;
                default: true;
            } | {
                label: string;
                value: FilterMode;
                default?: undefined;
            })[];
            onChange: typeof recalculateActivities;
        };
        idsList: {
            type: OptionType.COMPONENT;
            default: string;
            onChange(newValue: string): void;
            component: (props: import("../../utils/types").IPluginOptionComponentProps) => import("react").JSX.Element;
        };
        ignorePlaying: {
            type: OptionType.BOOLEAN;
            description: string;
            default: false;
            onChange: typeof recalculateActivities;
        };
        ignoreStreaming: {
            type: OptionType.BOOLEAN;
            description: string;
            default: false;
            onChange: typeof recalculateActivities;
        };
        ignoreListening: {
            type: OptionType.BOOLEAN;
            description: string;
            default: false;
            onChange: typeof recalculateActivities;
        };
        ignoreWatching: {
            type: OptionType.BOOLEAN;
            description: string;
            default: false;
            onChange: typeof recalculateActivities;
        };
        ignoreCompeting: {
            type: OptionType.BOOLEAN;
            description: string;
            default: false;
            onChange: typeof recalculateActivities;
        };
        ignoredActivities: {
            type: OptionType.CUSTOM;
            default: IgnoredActivity[];
            onChange: typeof recalculateActivities;
            description: string;
        };
    }, import("../../utils/types").SettingsChecks<{
        importCustomRPC: {
            type: OptionType.COMPONENT;
            component: typeof ImportCustomRPCComponent;
        };
        listMode: {
            type: OptionType.SELECT;
            description: string;
            options: ({
                label: string;
                value: FilterMode;
                default: true;
            } | {
                label: string;
                value: FilterMode;
                default?: undefined;
            })[];
            onChange: typeof recalculateActivities;
        };
        idsList: {
            type: OptionType.COMPONENT;
            default: string;
            onChange(newValue: string): void;
            component: (props: import("../../utils/types").IPluginOptionComponentProps) => import("react").JSX.Element;
        };
        ignorePlaying: {
            type: OptionType.BOOLEAN;
            description: string;
            default: false;
            onChange: typeof recalculateActivities;
        };
        ignoreStreaming: {
            type: OptionType.BOOLEAN;
            description: string;
            default: false;
            onChange: typeof recalculateActivities;
        };
        ignoreListening: {
            type: OptionType.BOOLEAN;
            description: string;
            default: false;
            onChange: typeof recalculateActivities;
        };
        ignoreWatching: {
            type: OptionType.BOOLEAN;
            description: string;
            default: false;
            onChange: typeof recalculateActivities;
        };
        ignoreCompeting: {
            type: OptionType.BOOLEAN;
            description: string;
            default: false;
            onChange: typeof recalculateActivities;
        };
        ignoredActivities: {
            type: OptionType.CUSTOM;
            default: IgnoredActivity[];
            onChange: typeof recalculateActivities;
            description: string;
        };
    }>, {}>;
    patches: ({
        find: string;
        replacement: {
            match: RegExp;
            replace: (m: string, activities: string) => string;
        }[];
    } | {
        find: string;
        replacement: {
            match: RegExp;
            replace: (m: string, props: string, nowPlaying: string) => string;
        };
    })[];
    start(): Promise<void>;
    isActivityNotIgnored(props: {
        type: number;
        application_id?: string;
        name?: string;
    }): boolean;
    renderToggleGameActivityButton(props: {
        id?: string;
        name: string;
        exePath: string;
    }, nowPlaying: boolean): import("react").JSX.Element;
    renderToggleActivityButton(props: {
        id: string;
        name: string;
    }): import("react").JSX.Element;
} & Record<string, any>;
export default _default;
