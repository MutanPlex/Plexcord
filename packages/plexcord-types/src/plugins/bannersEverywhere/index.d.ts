import { OptionType } from "../../utils/types";
import { User } from "discord-types/general";
interface Nameplate {
    imgAlt: string;
    palette: {
        darkBackground: string;
        lightBackground: string;
        name: string;
    };
    src: string;
}
declare const _default: {
    name: string;
    description: string;
    authors: {
        name: string;
        id: bigint;
    }[];
    settings: import("../../utils/types").DefinedSettings<{
        animate: {
            description: string;
            type: OptionType.BOOLEAN;
            default: false;
        };
        preferNameplate: {
            description: string;
            type: OptionType.BOOLEAN;
            default: false;
        };
    }, import("../../utils/types").SettingsChecks<{
        animate: {
            description: string;
            type: OptionType.BOOLEAN;
            default: false;
        };
        preferNameplate: {
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
        }[];
    } | {
        find: string;
        replacement: {
            match: RegExp;
            replace: string;
        };
    })[];
    data: {};
    start(): Promise<void>;
    stop(): void;
    nameplate(nameplate: Nameplate | undefined): Nameplate | undefined;
    memberListBannerHook(user: User, nameplate: Nameplate | undefined): import("react").JSX.Element | undefined;
    checkImageExists(url: string): Promise<boolean>;
    gifToPng(url: string): Promise<string>;
    getBanner(userId: string): string | undefined;
} & Record<string, any>;
export default _default;
