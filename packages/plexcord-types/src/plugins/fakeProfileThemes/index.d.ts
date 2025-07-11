import "./style.css";
import { OptionType } from "../../utils/types";
import { User } from "discord-types/general";
interface UserProfile extends User {
    themeColors?: Array<number>;
}
interface Colors {
    primary: number;
    accent: number;
}
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
        };
    }[];
    settingsAboutComponent: () => import("react").JSX.Element;
    settings: import("../../utils/types").DefinedSettings<{
        nitroFirst: {
            description: string;
            type: OptionType.SELECT;
            options: ({
                label: string;
                value: true;
                default: true;
            } | {
                label: string;
                value: false;
                default?: undefined;
            })[];
        };
    }, import("../../utils/types").SettingsChecks<{
        nitroFirst: {
            description: string;
            type: OptionType.SELECT;
            options: ({
                label: string;
                value: true;
                default: true;
            } | {
                label: string;
                value: false;
                default?: undefined;
            })[];
        };
    }>, {}>;
    colorDecodeHook(user: UserProfile): UserProfile;
    addCopy3y3Button: import("react").FunctionComponent<Colors>;
} & Record<string, any>;
export default _default;
