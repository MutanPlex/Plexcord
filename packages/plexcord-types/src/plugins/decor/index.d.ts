import "./ui/styles.css";
import { useUserDecorAvatarDecoration } from "./lib/stores/UsersDecorationsStore";
export interface AvatarDecoration {
    asset: string;
    skuId: string;
}
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
        replacement: {
            match: RegExp;
            replace: string;
        }[];
        group?: undefined;
    } | {
        find: string;
        group: true;
        replacement: {
            match: RegExp;
            replace: string;
        }[];
    })[];
    settings: import("../../utils/types").DefinedSettings<{
        changeDecoration: {
            type: import("../../utils/types").OptionType.COMPONENT;
            component(): import("react").JSX.Element;
        };
        baseUrl: {
            type: import("../../utils/types").OptionType.STRING;
            hidden: true;
            description: string;
            default: string;
        };
        agreedToGuidelines: {
            type: import("../../utils/types").OptionType.BOOLEAN;
            description: string;
            hidden: true;
            default: false;
        };
    }, import("../../utils/types").SettingsChecks<{
        changeDecoration: {
            type: import("../../utils/types").OptionType.COMPONENT;
            component(): import("react").JSX.Element;
        };
        baseUrl: {
            type: import("../../utils/types").OptionType.STRING;
            hidden: true;
            description: string;
            default: string;
        };
        agreedToGuidelines: {
            type: import("../../utils/types").OptionType.BOOLEAN;
            description: string;
            hidden: true;
            default: false;
        };
    }>, {}>;
    flux: {
        CONNECTION_OPEN: () => void;
        USER_PROFILE_MODAL_OPEN: (data: any) => void;
    };
    DecorationGridItem: any;
    DecorationGridDecoration: any;
    SKU_ID: string;
    useUserDecorAvatarDecoration: typeof useUserDecorAvatarDecoration;
    start(): Promise<void>;
    getDecorAvatarDecorationURL({ avatarDecoration, canAnimate }: {
        avatarDecoration: AvatarDecoration | null;
        canAnimate?: boolean;
    }): string | undefined;
    DecorSection: import("react").FunctionComponent<import("./ui/components/DecorSection").DecorSectionProps>;
} & Record<string, any>;
export default _default;
