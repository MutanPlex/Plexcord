import { OptionType } from "../../utils/types";
import { Channel, Message } from "discord-types/general";
declare enum GreetMode {
    Greet = "Greet",
    NormalMessage = "Message"
}
declare const _default: {
    name: string;
    description: string;
    authors: {
        name: string;
        id: bigint;
    }[];
    settings: import("../../utils/types").DefinedSettings<{
        greetMode: {
            type: OptionType.SELECT;
            options: ({
                label: string;
                value: GreetMode;
                default: true;
            } | {
                label: string;
                value: GreetMode;
                default?: undefined;
            })[];
            description: string;
        };
    }, import("../../utils/types").SettingsChecks<{
        greetMode: {
            type: OptionType.SELECT;
            options: ({
                label: string;
                value: GreetMode;
                default: true;
            } | {
                label: string;
                value: GreetMode;
                default?: undefined;
            })[];
            description: string;
        };
    }>, {
        multiGreetChoices?: string[];
        unholyMultiGreetEnabled?: boolean;
    }>;
    patches: {
        find: string;
        replacement: {
            match: RegExp;
            replace: string;
        };
    }[];
    pickSticker(event: React.UIEvent, props: {
        channel: Channel;
        message: Message;
    }): void;
} & Record<string, any>;
export default _default;
