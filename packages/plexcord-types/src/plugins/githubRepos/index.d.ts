import "./styles.css";
import { OptionType } from "../../utils/types";
import { User } from "discord-types/general";
export declare const settings: import("../../utils/types").DefinedSettings<{
    showStars: {
        type: OptionType.BOOLEAN;
        description: string;
        default: true;
    };
    showLanguage: {
        type: OptionType.BOOLEAN;
        description: string;
        default: true;
    };
    showInMiniProfile: {
        type: OptionType.BOOLEAN;
        description: string;
        default: true;
    };
}, import("../../utils/types").SettingsChecks<{
    showStars: {
        type: OptionType.BOOLEAN;
        description: string;
        default: true;
    };
    showLanguage: {
        type: OptionType.BOOLEAN;
        description: string;
        default: true;
    };
    showInMiniProfile: {
        type: OptionType.BOOLEAN;
        description: string;
        default: true;
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
        showStars: {
            type: OptionType.BOOLEAN;
            description: string;
            default: true;
        };
        showLanguage: {
            type: OptionType.BOOLEAN;
            description: string;
            default: true;
        };
        showInMiniProfile: {
            type: OptionType.BOOLEAN;
            description: string;
            default: true;
        };
    }, import("../../utils/types").SettingsChecks<{
        showStars: {
            type: OptionType.BOOLEAN;
            description: string;
            default: true;
        };
        showLanguage: {
            type: OptionType.BOOLEAN;
            description: string;
            default: true;
        };
        showInMiniProfile: {
            type: OptionType.BOOLEAN;
            description: string;
            default: true;
        };
    }>, {}>;
    patches: {
        find: string;
        replacement: {
            match: RegExp;
            replace: string;
        };
    }[];
    ProfilePopoutComponent: import("react").FunctionComponent<{
        user: User;
        displayProfile?: any;
    }>;
} & Record<string, any>;
export default _default;
