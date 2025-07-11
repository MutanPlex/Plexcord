import { OptionType } from "../../utils/types";
interface UsrbgApiReturn {
    endpoint: string;
    bucket: string;
    prefix: string;
    users: Record<string, string>;
}
declare const _default: {
    name: string;
    description: string;
    authors: {
        name: string;
        id: bigint;
    }[];
    settings: import("../../utils/types").DefinedSettings<{
        nitroFirst: {
            description: string;
            type: OptionType.SELECT;
            options: ({
                label: string;
                value: true;
                default: true;
            } | {
                label: string;
                value: false;
                default?: undefined;
            })[];
        };
        voiceBackground: {
            description: string;
            type: OptionType.BOOLEAN;
            default: true;
            restartNeeded: true;
        };
    }, import("../../utils/types").SettingsChecks<{
        nitroFirst: {
            description: string;
            type: OptionType.SELECT;
            options: ({
                label: string;
                value: true;
                default: true;
            } | {
                label: string;
                value: false;
                default?: undefined;
            })[];
        };
        voiceBackground: {
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
        };
        predicate?: undefined;
    } | {
        find: string;
        predicate: () => boolean;
        replacement: {
            match: RegExp;
            replace: string;
        }[];
    })[];
    data: UsrbgApiReturn | null;
    settingsAboutComponent: () => import("react").JSX.Element;
    getVoiceBackgroundStyles({ className, participantUserId }: any): {
        backgroundImage: string;
        backgroundSize: string;
        backgroundPosition: string;
        backgroundRepeat: string;
    } | undefined;
    patchBannerUrl({ displayProfile }: any): string | null | undefined;
    userHasBackground(userId: string): boolean;
    getImageUrl(userId: string): string | null;
    start(): Promise<void>;
} & Record<string, any>;
export default _default;
