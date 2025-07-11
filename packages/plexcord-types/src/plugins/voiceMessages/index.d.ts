import "./styles.css";
import { NavContextMenuPatchCallback } from "../../api/ContextMenu";
import { ComponentType } from "react";
export type VoiceRecorder = ComponentType<{
    setAudioBlob(blob: Blob): void;
    onRecordingChange?(recording: boolean): void;
}>;
declare const _default: {
    name: string;
    description: string;
    authors: {
        name: string;
        id: bigint;
    }[];
    settings: import("../../utils/types").DefinedSettings<{
        noiseSuppression: {
            type: import("../../utils/types").OptionType.BOOLEAN;
            description: string;
            default: true;
        };
        echoCancellation: {
            type: import("../../utils/types").OptionType.BOOLEAN;
            description: string;
            default: true;
        };
    }, import("../../utils/types").SettingsChecks<{
        noiseSuppression: {
            type: import("../../utils/types").OptionType.BOOLEAN;
            description: string;
            default: true;
        };
        echoCancellation: {
            type: import("../../utils/types").OptionType.BOOLEAN;
            description: string;
            default: true;
        };
    }>, {}>;
    contextMenus: {
        "channel-attach": NavContextMenuPatchCallback;
    };
} & Record<string, any>;
export default _default;
