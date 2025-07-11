import { OptionType } from "../../utils/types";
declare const _default: {
    name: string;
    description: string;
    authors: {
        name: string;
        id: bigint;
    }[];
    settings: import("../../utils/types").DefinedSettings<{
        noSpotifyAutoPause: {
            description: string;
            type: OptionType.BOOLEAN;
            default: true;
            restartNeeded: true;
        };
        keepSpotifyActivityOnIdle: {
            description: string;
            type: OptionType.BOOLEAN;
            default: false;
            restartNeeded: true;
        };
    }, import("../../utils/types").SettingsChecks<{
        noSpotifyAutoPause: {
            description: string;
            type: OptionType.BOOLEAN;
            default: true;
            restartNeeded: true;
        };
        keepSpotifyActivityOnIdle: {
            description: string;
            type: OptionType.BOOLEAN;
            default: false;
            restartNeeded: true;
        };
    }>, {}>;
    patches: ({
        find: string;
        replacement: {
            match: RegExp;
            replace: (m: string, req: string) => string;
        };
    } | {
        find: string;
        replacement: {
            predicate: () => boolean;
            match: RegExp;
            replace: string;
        }[];
    })[];
} & Record<string, any>;
export default _default;
