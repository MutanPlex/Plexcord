import { OptionType } from "../../utils/types";
import type { HTMLAttributes, ReactElement } from "react";
import PluginsSubmenu from "./PluginsSubmenu";
type SettingsEntry = {
    section: string;
    label: string;
};
interface LayerProps extends HTMLAttributes<HTMLDivElement> {
    mode: "SHOWN" | "HIDDEN";
    baseLayer?: boolean;
}
declare const _default: {
    name: string;
    description: string;
    authors: {
        name: string;
        id: bigint;
    }[];
    settings: import("../../utils/types").DefinedSettings<{
        disableFade: {
            description: string;
            type: OptionType.BOOLEAN;
            default: true;
            restartNeeded: true;
        };
        organizeMenu: {
            description: string;
            type: OptionType.BOOLEAN;
            default: true;
        };
        eagerLoad: {
            description: string;
            type: OptionType.BOOLEAN;
            default: true;
            restartNeeded: true;
        };
    }, import("../../utils/types").SettingsChecks<{
        disableFade: {
            description: string;
            type: OptionType.BOOLEAN;
            default: true;
            restartNeeded: true;
        };
        organizeMenu: {
            description: string;
            type: OptionType.BOOLEAN;
            default: true;
        };
        eagerLoad: {
            description: string;
            type: OptionType.BOOLEAN;
            default: true;
            restartNeeded: true;
        };
    }>, {}>;
    patches: ({
        find: string;
        replacement: {
            match: RegExp;
            replace: string;
            predicate: () => boolean;
        }[];
        predicate?: undefined;
    } | {
        find: string;
        replacement: {
            match: RegExp;
            replace: string;
        }[];
        predicate: () => boolean;
    } | {
        find: string;
        replacement: {
            match: RegExp;
            replace: string;
        };
        predicate: () => boolean;
    } | {
        find: string;
        replacement: {
            match: RegExp;
            replace: string;
        }[];
        predicate?: undefined;
    })[];
    PluginsSubmenu: typeof PluginsSubmenu;
    Layer(props: LayerProps): string | number | bigint | boolean | Iterable<import("react").ReactNode> | Promise<string | number | bigint | boolean | import("react").ReactPortal | ReactElement<unknown, string | import("react").JSXElementConstructor<any>> | Iterable<import("react").ReactNode> | null | undefined> | import("react").JSX.Element | null | undefined;
    wrapMenu(list: SettingsEntry[]): SettingsEntry[] | {
        filter(predicate: (item: SettingsEntry) => boolean): SettingsEntry[] | /*elided*/ any;
        map(render: (item: SettingsEntry) => ReactElement<any>): (import("react").JSX.Element | ReactElement<any, string | import("react").JSXElementConstructor<any>>[])[];
    };
} & Record<string, any>;
export default _default;
