import "./styles.css";
import { OptionType } from "../../utils/types";
import { User } from "discord-types/general";
declare const enum Spacing {
    COMPACT = 0,
    COZY = 1,
    ROOMY = 2
}
declare const _default: {
    name: string;
    description: string;
    authors: {
        name: string;
        id: bigint;
    }[];
    settings: import("../../utils/types").DefinedSettings<{
        iconSize: {
            type: OptionType.NUMBER;
            description: string;
            default: number;
        };
        iconSpacing: {
            type: OptionType.SELECT;
            description: string;
            default: Spacing;
            options: {
                label: string;
                value: Spacing;
            }[];
        };
    }, import("../../utils/types").SettingsChecks<{
        iconSize: {
            type: OptionType.NUMBER;
            description: string;
            default: number;
        };
        iconSpacing: {
            type: OptionType.SELECT;
            description: string;
            default: Spacing;
            options: {
                label: string;
                value: Spacing;
            }[];
        };
    }>, {}>;
    patches: {
        find: string;
        replacement: {
            match: RegExp;
            replace: string;
        };
    }[];
    profilePopoutComponent: import("react").FunctionComponent<{
        user: User;
        displayProfile?: any;
    }>;
} & Record<string, any>;
export default _default;
