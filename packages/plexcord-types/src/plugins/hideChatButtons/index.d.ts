import { OptionType, StartAt } from "../../utils/types";
import type { ReactNode } from "react";
declare function buttonsInner(buttons: ReactNode[]): import("react").JSX.Element[] | null;
declare const _default: {
    name: string;
    description: string;
    settings: import("../../utils/types").DefinedSettings<{
        Color: {
            type: OptionType.BOOLEAN;
            description: string;
            default: false;
        };
        Open: {
            type: OptionType.BOOLEAN;
            description: string;
            default: false;
            onChange: (store: {
                open: boolean;
            }) => void;
        };
    }, import("../../utils/types").SettingsChecks<{
        Color: {
            type: OptionType.BOOLEAN;
            description: string;
            default: false;
        };
        Open: {
            type: OptionType.BOOLEAN;
            description: string;
            default: false;
            onChange: (store: {
                open: boolean;
            }) => void;
        };
    }>, {}>;
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
    startAt: StartAt.Init;
    buttonsInner: typeof buttonsInner;
    start: () => Promise<void>;
} & Record<string, any>;
export default _default;
