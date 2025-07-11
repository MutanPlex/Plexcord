import "./styles.css";
import { OptionType } from "../../utils/types";
import { User } from "discord-types/general";
import { PropsWithChildren } from "react";
declare const _default: {
    name: string;
    authors: {
        name: string;
        id: bigint;
    }[];
    description: string;
    settings: import("../../utils/types").DefinedSettings<{
        showDates: {
            type: OptionType.BOOLEAN;
            description: string;
            default: false;
            restartNeeded: true;
        };
    }, import("../../utils/types").SettingsChecks<{
        showDates: {
            type: OptionType.BOOLEAN;
            description: string;
            default: false;
            restartNeeded: true;
        };
    }>, {}>;
    patches: ({
        find: string;
        replacement: {
            match: RegExp;
            replace: string;
            predicate?: undefined;
        };
    } | {
        find: string;
        replacement: {
            predicate: () => boolean;
            match: RegExp;
            replace: (children: string, user: string) => string;
        };
    })[];
    wrapSort(comparator: Function, row: any): any;
    WrapperDateComponent: import("react").FunctionComponent<PropsWithChildren<{
        user: User;
    }>>;
} & Record<string, any>;
export default _default;
