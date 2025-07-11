import { OptionType } from "../../utils/types";
declare const _default: {
    name: string;
    description: string;
    authors: {
        name: string;
        id: bigint;
    }[];
    settingsAboutComponent: () => import("react").JSX.Element;
    settings: import("../../utils/types").DefinedSettings<{
        platform: {
            type: OptionType.SELECT;
            description: string;
            restartNeeded: true;
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
    }, import("../../utils/types").SettingsChecks<{
        platform: {
            type: OptionType.SELECT;
            description: string;
            restartNeeded: true;
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
    }>, {}>;
    patches: {
        find: string;
        replacement: {
            match: RegExp;
            replace: string;
        };
    }[];
    getPlatform: () => {
        browser: string;
    } | undefined;
} & Record<string, any>;
export default _default;
