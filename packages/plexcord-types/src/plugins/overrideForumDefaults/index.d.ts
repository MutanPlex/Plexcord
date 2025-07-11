import { OptionType } from "../../utils/types";
declare const _default: {
    name: string;
    description: string;
    authors: {
        name: string;
        id: bigint;
    }[];
    patches: {
        find: string;
        replacement: {
            match: RegExp;
            replace: string;
        }[];
    }[];
    getLayout: () => number;
    getSortOrder: () => number;
    settings: import("../../utils/types").DefinedSettings<{
        defaultLayout: {
            type: OptionType.SELECT;
            options: ({
                label: string;
                value: number;
                default: true;
            } | {
                label: string;
                value: number;
                default?: undefined;
            })[];
            description: string;
        };
        defaultSortOrder: {
            type: OptionType.SELECT;
            options: ({
                label: string;
                value: number;
                default: true;
            } | {
                label: string;
                value: number;
                default?: undefined;
            })[];
            description: string;
        };
    }, import("../../utils/types").SettingsChecks<{
        defaultLayout: {
            type: OptionType.SELECT;
            options: ({
                label: string;
                value: number;
                default: true;
            } | {
                label: string;
                value: number;
                default?: undefined;
            })[];
            description: string;
        };
        defaultSortOrder: {
            type: OptionType.SELECT;
            options: ({
                label: string;
                value: number;
                default: true;
            } | {
                label: string;
                value: number;
                default?: undefined;
            })[];
            description: string;
        };
    }>, {}>;
} & Record<string, any>;
export default _default;
