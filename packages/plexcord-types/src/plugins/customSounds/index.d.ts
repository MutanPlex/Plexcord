import "./styles.css";
import { OptionType } from "../../utils/types";
import { SoundOverride } from "./types";
export declare function isOverriden(id: string): boolean;
export declare function findOverride(id: string): SoundOverride | null;
declare const _default: {
    name: string;
    description: string;
    authors: {
        name: string;
        id: bigint;
    }[];
    patches: ({
        find: string;
        replacement: {
            match: RegExp;
            replace: string;
        }[];
    } | {
        find: string;
        replacement: {
            match: RegExp;
            replace: string;
        };
    })[];
    settings: import("../../utils/types").DefinedSettings<{
        overrides: {
            type: OptionType.COMPONENT;
            description: string;
            component: () => import("react").JSX.Element;
        };
    }, import("../../utils/types").SettingsChecks<{
        overrides: {
            type: OptionType.COMPONENT;
            description: string;
            component: () => import("react").JSX.Element;
        };
    }>, {}>;
    findOverride: typeof findOverride;
    isOverriden: typeof isOverriden;
    start(): Promise<void>;
} & Record<string, any>;
export default _default;
