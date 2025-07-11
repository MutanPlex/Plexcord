import "./VoiceChannelLogEntryComponent.css";
import { Channel } from "discord-types/general";
import { VoiceChannelLogEntry } from "../logs";
export declare function VoiceChannelLogEntryComponent({ logEntry, channel }: {
    logEntry: VoiceChannelLogEntry;
    channel: Channel;
}): import("react").JSX.Element;
