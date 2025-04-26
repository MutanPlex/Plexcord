/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2024 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { definePluginSettings } from "@api/Settings";
import ErrorBoundary from "@components/ErrorBoundary";
import { Devs, PcDevs } from "@utils/constants";
import definePlugin, { OptionType } from "@utils/types";
import { FluxDispatcher, GuildStore, Tooltip, useEffect, UserStore, useState } from "@webpack/common";
interface FixedTimerOpts {
    interval?: number;
    initialTime?: number;
}
export interface VoiceState {
    userId: string;
    channelId?: string;
    oldChannelId?: string;
    guildId?: string;
    deaf: boolean;
    mute: boolean;
    selfDeaf: boolean;
    selfMute: boolean;
    selfStream: boolean;
    selfVideo: boolean;
    sessionId: string;
    suppress: boolean;
    requestToSpeakTimestamp: string | null;
}

export interface PassiveUpdateState {
    type: string;
    guildId: string;
    members?: ({
        user: {
            avatar: null | string;
            communication_disabled_until: null | string;
            deaf: boolean;
            flags: number;
            joined_at: string;
            mute: boolean;
            nick: string;
            pending: boolean;
            premium_since: null | string;
        };
        roles: (string)[];
        premium_since: null | string;
        pending: boolean;
        nick: string | null;
        mute: boolean;
        joined_at: string;
        flags: number;
        deaf: boolean;
        communication_disabled_until: null | string;
        avatar: null | string;
    })[];
    channels: ({
        lastPinTimestamp?: string;
        lastMessageId: string;
        id: string;
    })[];
    voiceStates?: VoiceState[];
}


export const settings = definePluginSettings({
    showWithoutHover: {
        type: OptionType.BOOLEAN,
        description: "Always show the timer without needing to hover",
        restartNeeded: false,
        default: true
    },
    showRoleColor: {
        type: OptionType.BOOLEAN,
        description: "Show the user's role color (if this plugin in enabled)",
        restartNeeded: false,
        default: true
    },
    trackSelf: {
        type: OptionType.BOOLEAN,
        description: "Also track yourself",
        restartNeeded: false,
        default: true
    },
    showSeconds: {
        type: OptionType.BOOLEAN,
        description: "Show seconds in the timer",
        restartNeeded: false,
        default: true
    },
    format: {
        type: OptionType.SELECT,
        description: "Compact or human readable format:",
        options: [
            {
                label: "30:23:00:42",
                value: "stopwatch",
                default: true
            },
            {
                label: "30d 23h 00m 42s",
                value: "human"
            }
        ]
    },
    watchLargeGuilds: {
        type: OptionType.BOOLEAN,
        description: "Track users in large guilds. This may cause lag if you're in a lot of large guilds with active voice users. Tested with up to 2000 active voice users with no issues.",
        restartNeeded: true,
        default: false
    }
});


// Save the join time of all users in a Map
type userJoinData = { channelId: string, time: number; guildId: string; };
const userJoinTimes = new Map<string, userJoinData>();

/**
 * The function `addUserJoinTime` stores the join time of a user in a specific channel within a guild.
 * @param {string} userId - The `userId` parameter is a string that represents the unique identifier of
 * the user who is joining a channel in a guild.
 * @param {string} channelId - The `channelId` parameter represents the unique identifier of the
 * channel where the user joined.
 * @param {string} guildId - The `guildId` parameter in the `addUserJoinTime` function represents the
 * unique identifier of the guild (server) to which the user belongs. It is used to associate the
 * user's join time with a specific guild within the application or platform.
 */
function addUserJoinTime(userId: string, channelId: string, guildId: string) {
    // create a random number
    userJoinTimes.set(userId, { channelId, time: Date.now(), guildId });
}

/**
 * The function `removeUserJoinTime` removes the join time of a user identified by their user ID.
 * @param {string} userId - The `userId` parameter is a string that represents the unique identifier of
 * a user whose join time needs to be removed.
 */
function removeUserJoinTime(userId: string) {
    userJoinTimes.delete(userId);
}

// For every user, channelId and oldChannelId will differ when moving channel.
// Only for the local user, channelId and oldChannelId will be the same when moving channel,
// for some ungodly reason
let myLastChannelId: string | undefined;

// Allow user updates on discord first load
let runOneTime = true;

export default definePlugin({
    name: "AllCallTimers",
    description: "Add call timer to all users in a server voice channel.",
    authors: [Devs.D3SOX, PcDevs.Max, PcDevs.MutanPlex],

    settings,

    patches: [
        {
            find: ".usernameSpeaking]:",
            replacement: {
                match: /\i\.getName\((\i)\),/,
                replace: "$&$self.showInjection($1.id),"
            }
        }
    ],

    flux: {
        VOICE_STATE_UPDATES({ voiceStates }: { voiceStates: VoiceState[]; }) {
            const myId = UserStore.getCurrentUser().id;

            for (const state of voiceStates) {
                const { userId, channelId, guildId } = state;
                const isMe = userId === myId;

                if (!guildId) {
                    // guildId is never undefined here
                    continue;
                }

                // check if the state does not actually has a `oldChannelId` property
                if (!("oldChannelId" in state) && !runOneTime && !settings.store.watchLargeGuilds) {
                    // batch update triggered. This is ignored because it
                    // is caused by opening a previously unopened guild
                    continue;
                }

                let { oldChannelId } = state;
                if (isMe && channelId !== myLastChannelId) {
                    oldChannelId = myLastChannelId;
                    myLastChannelId = channelId;
                }

                if (channelId !== oldChannelId) {
                    if (channelId) {
                        // move or join
                        addUserJoinTime(userId, channelId, guildId);
                    } else if (oldChannelId) {
                        // leave
                        removeUserJoinTime(userId);
                    }
                }
            }
            runOneTime = false;
        },
        PASSIVE_UPDATE_V1(passiveUpdate: PassiveUpdateState) {
            if (settings.store.watchLargeGuilds) {
                return;
            }

            const { voiceStates } = passiveUpdate;
            if (!voiceStates) {
                // if there are no users in a voice call
                return;
            }

            // find all users that have the same guildId and if that user is not in the voiceStates, remove them from the map
            const { guildId } = passiveUpdate;

            // check the guildId in the userJoinTimes map
            for (const [userId, data] of userJoinTimes) {
                if (data.guildId === guildId) {
                    // check if the user is in the voiceStates
                    const userInVoiceStates = voiceStates.find(state => state.userId === userId);
                    if (!userInVoiceStates) {
                        // remove the user from the map
                        removeUserJoinTime(userId);
                    }
                }
            }

            // since we were gifted this data let's use it to update our join times
            for (const state of voiceStates) {
                const { userId, channelId } = state;

                if (!channelId) {
                    // channelId is never undefined here
                    continue;
                }

                // check if the user is in the map
                if (userJoinTimes.has(userId)) {
                    // check if the user is in a channel
                    if (channelId !== userJoinTimes.get(userId)?.channelId) {
                        // update the user's join time
                        addUserJoinTime(userId, channelId, guildId);
                    }
                } else {
                    // user wasn't previously tracked, add the user to the map
                    addUserJoinTime(userId, channelId, guildId);
                }
            }
        },
    },

    subscribeToAllGuilds() {
        // we need to subscribe to all guilds' events because otherwise we would miss updates on large guilds
        const guilds = Object.values(GuildStore.getGuilds()).map(guild => guild.id);
        const subscriptions = guilds.reduce((acc, id) => ({ ...acc, [id]: { typing: true } }), {});
        FluxDispatcher.dispatch({ type: "GUILD_SUBSCRIPTIONS_FLUSH", subscriptions });
    },

    start() {
        if (settings.store.watchLargeGuilds) {
            this.subscribeToAllGuilds();
        }
    },

    showInjection(userId: string) {
        if (!settings.store.showWithoutHover) {
            return "";
        }
        return this.renderTimer(userId);
    },

    renderTimer(userId: string) {
        // get the user join time from the users object
        const joinTime = userJoinTimes.get(userId);
        if (!joinTime?.time) {
            // join time is unknown
            return;
        }
        if (userId === UserStore.getCurrentUser().id && !settings.store.trackSelf) {
            // don't show for self
            return;
        }

        return (
            <ErrorBoundary>
                <Timer time={joinTime.time} />
            </ErrorBoundary>
        );
    },
});

export function useFixedTimer({ interval = 1000, initialTime = Date.now() }: FixedTimerOpts) {
    const [time, setTime] = useState(Date.now() - initialTime);

    useEffect(() => {
        const intervalId = setInterval(() => setTime(Date.now() - initialTime), interval);

        return () => {
            clearInterval(intervalId);
        };
    }, [initialTime]);

    return time;
}

/**
 * The `formatDurationMs` function formats a duration in milliseconds into a human-readable string,
 * with the option to include units such as days, hours, minutes, and seconds.
 * @param {number} ms - The `ms` parameter represents the duration in milliseconds that you want to
 * format.
 * @param {boolean} [human=false] - The `human` parameter is a boolean flag that determines whether the
 * duration should be formatted in a human-readable format or not. If `human` is set to `true`, the
 * duration will be formatted as "Xd Xh Xm Xs". If `human` is set to `false` (the default), the
 * duration will be formatted as "XX:XX:XX:XX".
 * @returns The function `formatDurationMs` returns a formatted string representing the duration in
 * milliseconds.
 */
function formatDurationMs(ms: number, human: boolean = false, seconds: boolean = true) {
    const format = (n: number) => human ? n : n.toString().padStart(2, "0");
    const unit = (s: string) => human ? s : "";
    const delim = human ? " " : ":";

    // thx copilot
    const d = Math.floor(ms / 86400000);
    const h = Math.floor((ms % 86400000) / 3600000);
    const m = Math.floor(((ms % 86400000) % 3600000) / 60000);
    const s = Math.floor((((ms % 86400000) % 3600000) % 60000) / 1000);

    let res = "";
    if (d) res += `${d}${unit("d")}${delim}`;
    if (h || res || !seconds) res += `${format(h)}${unit("h")}${delim}`;
    if (m || res || !human || !seconds) res += `${format(m)}${unit("m")}`;
    if (seconds && (m || res || !human)) res += `${delim}`;
    if (seconds) res += `${format(s)}${unit("s")}`;

    return res;
}

export function Timer({ time }: Readonly<{ time: number; }>) {
    const durationMs = useFixedTimer({ initialTime: time });
    const formatted = formatDurationMs(durationMs, settings.store.format === "human", settings.store.showSeconds);
    const defaultColorClassName = settings.store.showRoleColor ? "" : "usernameFont__71dd5 username__73ce9";

    if (settings.store.showWithoutHover) {
        return <TimerText text={formatted} className={defaultColorClassName} />;
    } else {
        // show as a tooltip
        return (
            <Tooltip text={formatted}>
                {({ onMouseEnter, onMouseLeave }) => (
                    <div
                        onMouseEnter={onMouseEnter}
                        onMouseLeave={onMouseLeave}
                        role="tooltip"
                    >
                        <TimerIcon />
                    </div>
                )}
            </Tooltip>
        );
    }
}

export function TimerIcon({ height = 16, width = 16, className }: Readonly<{
    height?: number;
    width?: number;
    className?: string;
}>) {
    return (
        <svg
            viewBox="0 0 455 455"
            height={height}
            width={width}
            className={className}
            style={{ color: "var(--channels-default)" }}
        >
            <path fill="currentColor" d="M332.229,90.04l14.238-27.159l-26.57-13.93L305.67,76.087c-19.618-8.465-40.875-13.849-63.17-15.523V30h48.269V0H164.231v30
        H212.5v30.563c-22.295,1.674-43.553,7.059-63.171,15.523L135.103,48.95l-26.57,13.93l14.239,27.16
        C67.055,124.958,30,186.897,30,257.5C30,366.576,118.424,455,227.5,455S425,366.576,425,257.5
        C425,186.896,387.944,124.958,332.229,90.04z M355,272.5H212.5V130h30v112.5H355V272.5z"/>
        </svg>
    );
}
export function TimerText({ text, className }: Readonly<{ text: string; className: string; }>) {
    return <div className={`timeCounter ${className}`} style={{
        // this margin value doesn't change the default size of the user container
        marginTop: -6,
        fontWeight: "bold",
        fontFamily: "monospace",
        // good size that doesn't touch username
        fontSize: 11,
        position: "relative",
    }}>{text}</div>;
}
