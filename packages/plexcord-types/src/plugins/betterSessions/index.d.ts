import { OptionType } from "../../utils/types";
import { Session, SessionInfo } from "./types";
declare const _default: {
    name: string;
    description: string;
    authors: {
        name: string;
        id: bigint;
    }[];
    settings: import("../../utils/types").DefinedSettings<{
        backgroundCheck: {
            type: OptionType.BOOLEAN;
            description: string;
            default: false;
            restartNeeded: true;
        };
        checkInterval: {
            description: string;
            type: OptionType.NUMBER;
            default: number;
            restartNeeded: true;
        };
    }, import("../../utils/types").SettingsChecks<{
        backgroundCheck: {
            type: OptionType.BOOLEAN;
            description: string;
            default: false;
            restartNeeded: true;
        };
        checkInterval: {
            description: string;
            type: OptionType.NUMBER;
            default: number;
            restartNeeded: true;
        };
    }>, {}>;
    patches: {
        find: string;
        replacement: {
            match: RegExp;
            replace: string;
        }[];
    }[];
    renderName: import("react").FunctionComponent<SessionInfo>;
    renderTimestamp: import("react").FunctionComponent<{
        session: Session;
        timeLabel: string;
    }>;
    renderIcon: import("react").FunctionComponent<{
        session: Session;
        DeviceIcon: React.ComponentType<any>;
    }>;
    checkNewSessions(): Promise<void>;
    flux: {
        USER_SETTINGS_ACCOUNT_RESET_AND_CLOSE_FORM(): void;
    };
    start(): Promise<void>;
    stop(): void;
} & Record<string, any>;
export default _default;
