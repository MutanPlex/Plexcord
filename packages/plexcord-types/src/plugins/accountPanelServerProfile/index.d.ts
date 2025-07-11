import { OptionType } from "../../utils/types";
import { User } from "discord-types/general";
interface UserProfileProps {
    popoutProps: Record<string, any>;
    currentUser: User;
    originalRenderPopout: () => React.ReactNode;
}
declare const _default: {
    name: string;
    description: string;
    authors: {
        name: string;
        id: bigint;
    }[];
    settings: import("../../utils/types").DefinedSettings<{
        prioritizeServerProfile: {
            type: OptionType.BOOLEAN;
            description: string;
            default: false;
        };
    }, import("../../utils/types").SettingsChecks<{
        prioritizeServerProfile: {
            type: OptionType.BOOLEAN;
            description: string;
            default: false;
        };
    }>, {}>;
    patches: {
        find: string;
        group: true;
        replacement: ({
            match: RegExp;
            replace: string;
        } | {
            match: RegExp;
            replace: (_: string, rest: string, popoutProps: string, originalPopout: string, currentUser: string) => string;
        })[];
    }[];
    readonly accountPanelRef: import("react").RefObject<Record<PropertyKey, any> | null>;
    useAccountPanelRef(): import("react").RefObject<null>;
    openAccountPanelContextMenu(event: React.UIEvent): void;
    onPopoutClose(): void;
    UserProfile: import("react").FunctionComponent<UserProfileProps>;
} & Record<string, any>;
export default _default;
