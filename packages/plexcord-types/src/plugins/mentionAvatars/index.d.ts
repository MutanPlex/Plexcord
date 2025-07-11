import "./styles.css";
import { OptionType } from "../../utils/types";
import { User } from "discord-types/general";
declare const _default: {
    name: string;
    description: string;
    authors: {
        name: string;
        id: bigint;
    }[];
    patches: {
        find: string;
        replacement: {
            match: RegExp;
            replace: string;
        };
    }[];
    settings: import("../../utils/types").DefinedSettings<{
        showAtSymbol: {
            type: OptionType.BOOLEAN;
            description: string;
            default: true;
        };
    }, import("../../utils/types").SettingsChecks<{
        showAtSymbol: {
            type: OptionType.BOOLEAN;
            description: string;
            default: true;
        };
    }>, {}>;
    renderUsername: import("react").FunctionComponent<{
        user: User;
        username: string;
    }>;
    renderRoleIcon: import("react").FunctionComponent<{
        roleId: string;
        guildId: string;
    }>;
} & Record<string, any>;
export default _default;
