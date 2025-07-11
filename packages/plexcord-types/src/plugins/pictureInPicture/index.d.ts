import "./styles.css";
import { OptionType } from "../../utils/types";
declare const _default: {
    name: string;
    description: string;
    authors: {
        name: string;
        id: bigint;
    }[];
    settings: import("../../utils/types").DefinedSettings<{
        loop: {
            description: string;
            type: OptionType.BOOLEAN;
            default: true;
            restartNeeded: false;
        };
    }, import("../../utils/types").SettingsChecks<{
        loop: {
            description: string;
            type: OptionType.BOOLEAN;
            default: true;
            restartNeeded: false;
        };
    }>, {}>;
    patches: {
        find: string;
        replacement: {
            match: RegExp;
            replace: (_: string, rest: string, origChildren: string, showDownload: string, isVisualMediaType: string) => string;
        };
    }[];
    PictureInPictureButton: import("react").FunctionComponent<any>;
} & Record<string, any>;
export default _default;
