import "./style.css";
import { OptionType } from "../../utils/types";
declare const _default: {
    name: string;
    description: string;
    authors: {
        name: string;
        id: bigint;
    }[];
    settings: import("../../utils/types").DefinedSettings<{
        useNavBar: {
            description: string;
            type: OptionType.BOOLEAN;
            default: false;
        };
    }, import("../../utils/types").SettingsChecks<{
        useNavBar: {
            description: string;
            type: OptionType.BOOLEAN;
            default: false;
        };
    }>, {}>;
    patches: ({
        find: string;
        replacement: {
            match: RegExp;
            replace: string;
        };
        predicate?: undefined;
    } | {
        find: string;
        replacement: {
            match: RegExp;
            replace: string;
        };
        predicate: () => boolean;
    })[];
    mobileQuestPatch(questId: any): void;
    renderQuestButton(): import("react").JSX.Element;
    toolbarAction(e: any): any;
} & Record<string, any>;
export default _default;
