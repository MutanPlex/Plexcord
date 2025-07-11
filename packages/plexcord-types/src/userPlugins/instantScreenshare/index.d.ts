import { OptionType } from "../../utils/types";
type VoiceState = {
    userId: string;
    channelId: string | null;
};
declare const _default: {
    name: string;
    description: string;
    authors: {
        name: string;
        id: bigint;
    }[];
    settings: import("../../utils/types").DefinedSettings<{
        streamType: {
            description: string;
            type: OptionType.SELECT;
            options: {
                label: string;
                value: string;
            }[];
            default: string;
        };
        streamWindowKeyword: {
            description: string;
            type: OptionType.STRING;
            default: string;
            placeholder: string;
        };
    }, import("../../utils/types").SettingsChecks<{
        streamType: {
            description: string;
            type: OptionType.SELECT;
            options: {
                label: string;
                value: string;
            }[];
            default: string;
        };
        streamWindowKeyword: {
            description: string;
            type: OptionType.STRING;
            default: string;
            placeholder: string;
        };
    }>, {}>;
    flux: {
        VOICE_STATE_UPDATES({ voiceStates }: {
            voiceStates: VoiceState[];
        }): Promise<void>;
    };
} & Record<string, any>;
export default _default;
