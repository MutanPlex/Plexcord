import { ModalProps } from "../../../utils/modal";
import { Channel } from "discord-types/general";
export declare function openVoiceChannelLog(channel: Channel): string;
export declare function VoiceChannelLogModal({ channel, props }: {
    channel: Channel;
    props: ModalProps;
}): import("react").JSX.Element;
