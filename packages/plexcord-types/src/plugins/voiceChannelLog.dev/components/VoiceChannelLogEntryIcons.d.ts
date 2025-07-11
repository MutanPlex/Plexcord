import { Channel } from "discord-types/general";
import { VoiceChannelLogEntry } from "../logs";
export default function Icon({ logEntry, channel, className }: {
    logEntry: VoiceChannelLogEntry;
    channel: Channel;
    className: string;
}): import("react").JSX.Element;
