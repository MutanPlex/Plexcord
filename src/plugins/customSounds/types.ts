/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2023 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { plugin, t } from "@api/i18n";

export interface SoundType {
    name: string;
    id: string;
    seasonal?: string[];
}

export interface SoundOverride {
    enabled: boolean;
    selectedSound: string;
    volume: number;
    useFile: boolean;
    selectedFileId?: string;
}

export const soundTypes = {
    get values(): SoundType[] {
        return [

            { name: t(plugin.customSounds.type.activityEnd), id: "activity_end" },
            { name: t(plugin.customSounds.type.activityLaunch), id: "activity_launch" },
            { name: t(plugin.customSounds.type.activityUserJoin), id: "activity_user_join" },
            { name: t(plugin.customSounds.type.activityUserLeft), id: "activity_user_left" },
            { name: t(plugin.customSounds.type.asmrMessage), id: "asmr_message1" },
            { name: t(plugin.customSounds.type.bitMessage), id: "bit_message1" },
            { name: t(plugin.customSounds.type.bopMessage), id: "bop_message1" },
            { name: t(plugin.customSounds.type.callCalling), id: "call_calling", seasonal: ["halloween_call_calling", "winter_call_calling"] },
            {
                name: t(plugin.customSounds.type.callRinging),
                id: "call_ringing",
                seasonal: [
                    "halloween_call_ringing",
                    "winter_call_ringing",
                    "call_ringing_beat",
                    "call_ringing_snow_halation",
                    "call_ringing_snowsgiving"
                ]
            },
            { name: t(plugin.customSounds.type.clipError), id: "clip_error" },
            { name: t(plugin.customSounds.type.clipSave), id: "clip_save" },
            { name: t(plugin.customSounds.type.ddrDown), id: "ddr-down" },
            { name: t(plugin.customSounds.type.ddrLeft), id: "ddr-left" },
            { name: t(plugin.customSounds.type.ddrRight), id: "ddr-right" },
            { name: t(plugin.customSounds.type.ddrUp), id: "ddr-up" },
            { name: t(plugin.customSounds.type.deafen), id: "deafen", seasonal: ["halloween_deafen", "winter_deafen"] },
            { name: t(plugin.customSounds.type.discodo), id: "discodo" },
            { name: t(plugin.customSounds.type.disconnect), id: "disconnect", seasonal: ["halloween_disconnect", "winter_disconnect"] },
            { name: t(plugin.customSounds.type.duckyMessage), id: "ducky_message1" },
            { name: t(plugin.customSounds.type.hangStatusSelect), id: "hang_status_select" },
            { name: t(plugin.customSounds.type.highfiveClap), id: "highfive_clap" },
            { name: t(plugin.customSounds.type.highfiveWhistle), id: "highfive_whistle" },
            { name: t(plugin.customSounds.type.humanMan), id: "human_man" },
            { name: t(plugin.customSounds.type.lofiMessage), id: "lofi_message1" },
            { name: t(plugin.customSounds.type.mention1), id: "mention1" },
            { name: t(plugin.customSounds.type.mention2), id: "mention2" },
            { name: t(plugin.customSounds.type.mention3), id: "mention3" },
            { name: t(plugin.customSounds.type.message1), id: "message1", seasonal: ["halloween_message1"] },
            { name: t(plugin.customSounds.type.message2), id: "message2" },
            { name: t(plugin.customSounds.type.message3), id: "message3" },
            { name: t(plugin.customSounds.type.mute), id: "mute", seasonal: ["halloween_mute", "winter_mute"] },
            { name: t(plugin.customSounds.type.overlayUnlock), id: "overlayunlock" },
            { name: t(plugin.customSounds.type.poggermodeAchievement), id: "poggermode_achievement_unlock" },
            { name: t(plugin.customSounds.type.poggermodeApplause), id: "poggermode_applause" },
            { name: t(plugin.customSounds.type.poggermodeEnabled), id: "poggermode_enabled" },
            { name: t(plugin.customSounds.type.poggermodeMessage), id: "poggermode_message_send" },
            { name: t(plugin.customSounds.type.pttStart), id: "ptt_start" },
            { name: t(plugin.customSounds.type.pttStop), id: "ptt_stop" },
            { name: t(plugin.customSounds.type.reconnect), id: "reconnect" },
            { name: t(plugin.customSounds.type.robotMan), id: "robot_man" },
            { name: t(plugin.customSounds.type.stageWaiting), id: "stage_waiting" },
            { name: t(plugin.customSounds.type.streamEnded), id: "stream_ended" },
            { name: t(plugin.customSounds.type.streamStarted), id: "stream_started" },
            { name: t(plugin.customSounds.type.streamUserJoined), id: "stream_user_joined" },
            { name: t(plugin.customSounds.type.streamUserLeft), id: "stream_user_left" },
            { name: t(plugin.customSounds.type.success), id: "success" },
            { name: t(plugin.customSounds.type.undeafen), id: "undeafen", seasonal: ["halloween_undeafen", "winter_undeafen"] },
            { name: t(plugin.customSounds.type.unmute), id: "unmute", seasonal: ["halloween_unmute", "winter_unmute"] },
            { name: t(plugin.customSounds.type.userJoin), id: "user_join", seasonal: ["halloween_user_join", "winter_user_join"] },
            { name: t(plugin.customSounds.type.userLeave), id: "user_leave", seasonal: ["halloween_user_leave", "winter_user_leave"] },
            { name: t(plugin.customSounds.type.userMoved), id: "user_moved" },
            { name: t(plugin.customSounds.type.vibingWumpus), id: "vibing_wumpus" }
        ] as const;
    }
};
export function makeEmptyOverride(): SoundOverride {
    return {
        enabled: false,
        selectedSound: "default",
        volume: 100,
        useFile: false,
        selectedFileId: undefined
    };
}
