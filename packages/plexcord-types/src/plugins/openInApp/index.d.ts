import { SettingsDefinition } from "../../utils/types";
import type { MouseEvent } from "react";
declare const _default: {
    name: string;
    description: string;
    authors: {
        name: string;
        id: bigint;
    }[];
    settings: import("../../utils/types").DefinedSettings<SettingsDefinition, import("../../utils/types").SettingsChecks<SettingsDefinition>, {}>;
    patches: ({
        find: string;
        replacement: {
            match: RegExp;
            replace: string;
        };
    } | {
        find: string;
        predicate: () => any;
        replacement: ({
            match: RegExp;
            replace: string;
        } | {
            match: RegExp;
            replace: (_: string, not: string) => "true" | "false";
        })[];
    })[];
    handleLink(data: {
        href: string;
    }, event?: MouseEvent): Promise<boolean>;
    handleAccountView(e: MouseEvent, platformType: string, userId: string): true | undefined;
} & Record<string, any>;
export default _default;
