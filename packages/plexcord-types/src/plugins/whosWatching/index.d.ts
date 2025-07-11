import { OptionType } from "../../utils/types";
declare const _default: {
    name: string;
    description: string;
    authors: {
        name: string;
        id: bigint;
    }[];
    settings: import("../../utils/types").DefinedSettings<{
        showPanel: {
            description: string;
            type: OptionType.BOOLEAN;
            default: true;
            restartNeeded: true;
        };
    }, import("../../utils/types").SettingsChecks<{
        showPanel: {
            description: string;
            type: OptionType.BOOLEAN;
            default: true;
            restartNeeded: true;
        };
    }>, {}>;
    patches: {
        find: string;
        replacement: {
            match: RegExp;
            replace: string;
        };
    }[];
    WrapperComponent: import("react").FunctionComponent<any>;
    component: ({ OriginalComponent }: {
        OriginalComponent: any;
    }) => import("react").FunctionComponent<any>;
} & Record<string, any>;
export default _default;
