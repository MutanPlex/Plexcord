import { OptionType } from "../../utils/types";
import { type BuilderProps, setProfileEffectModal } from "./components";
import { profilePreviewHook } from "./lib/profilePreview";
import { decodeAboutMeFPTEHook } from "./lib/userProfile";
export declare const settings: import("../../utils/types").DefinedSettings<{
    prioritizeNitro: {
        description: string;
        type: OptionType.SELECT;
        options: ({
            label: string;
            value: true;
            default?: undefined;
        } | {
            label: string;
            value: false;
            default: true;
        })[];
    };
    hideBuilder: {
        description: string;
        type: OptionType.BOOLEAN;
        default: false;
    };
}, import("../../utils/types").SettingsChecks<{
    prioritizeNitro: {
        description: string;
        type: OptionType.SELECT;
        options: ({
            label: string;
            value: true;
            default?: undefined;
        } | {
            label: string;
            value: false;
            default: true;
        })[];
    };
    hideBuilder: {
        description: string;
        type: OptionType.BOOLEAN;
        default: false;
    };
}>, {}>;
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
        };
        group?: undefined;
    } | {
        find: string;
        group: true;
        replacement: {
            match: RegExp;
            replace: (match: string, func: string, funcName: string) => string;
        }[];
    } | {
        find: string;
        replacement: {
            match: RegExp;
            replace: (match: string, _: string, func: string) => string;
        };
        group?: undefined;
    })[];
    addFPTEBuilder: (guild?: BuilderProps["guild"]) => import("react").JSX.Element | null;
    onApply(_effectId?: string): void;
    ProfileEffectModal: Parameters<typeof setProfileEffectModal>[0];
    ProfileEffectSelection: () => null;
    usePurchases: () => Map<string, {
        items: import("./lib/profileEffects").ProfileEffectRecordInstance;
    }>;
    useProfileEffectSections: (origSections: Record<string, any>[]) => Record<string, any>[];
    settings: import("../../utils/types").DefinedSettings<{
        prioritizeNitro: {
            description: string;
            type: OptionType.SELECT;
            options: ({
                label: string;
                value: true;
                default?: undefined;
            } | {
                label: string;
                value: false;
                default: true;
            })[];
        };
        hideBuilder: {
            description: string;
            type: OptionType.BOOLEAN;
            default: false;
        };
    }, import("../../utils/types").SettingsChecks<{
        prioritizeNitro: {
            description: string;
            type: OptionType.SELECT;
            options: ({
                label: string;
                value: true;
                default?: undefined;
            } | {
                label: string;
                value: false;
                default: true;
            })[];
        };
        hideBuilder: {
            description: string;
            type: OptionType.BOOLEAN;
            default: false;
        };
    }>, {}>;
    settingsAboutComponent: () => import("react").JSX.Element;
    decodeAboutMeFPTEHook: typeof decodeAboutMeFPTEHook;
    profilePreviewHook: typeof profilePreviewHook;
} & Record<string, any>;
export default _default;
