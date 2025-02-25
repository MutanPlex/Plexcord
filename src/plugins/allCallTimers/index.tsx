/*
 * Vencord, a Discord client mod
 * Copyright (c) 2024 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { definePluginSettings } from "@api/Settings";
import ErrorBoundary from "@components/ErrorBoundary";
import { Devs, PcDevs } from "@utils/constants";
import definePlugin, { OptionType } from "@utils/types";
import { FluxDispatcher, GuildStore, Tooltip, useEffect, UserStore, useState } from "@webpack/common";

interface FixedTimerOpts { interval?: number; initialTime?: number; }

interface VoiceState {
    userId: string;
    channelId?: string;
    oldChannelId?: string;
    guildId: string;
    deaf: boolean;
    mute: boolean;
    selfDeaf: boolean;
    selfMute: boolean;
}

type userJoinData = { channelId: string; time: number; guildId: string; };
const userJoinTimes = new Map<string, userJoinData>();

export const settings = definePluginSettings({
    showWithoutHover: {
        type: OptionType.BOOLEAN,
        description: "Always show the timer without needing to hover",
        restartNeeded: false,
        default: true,
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
        default: true,
    },
    showSeconds: {
        type: OptionType.BOOLEAN,
        description: "Show seconds in the timer",
        restartNeeded: false,
        default: true,
    },
    format: {
        type: OptionType.SELECT,
        description: "Compact or human readable format:",
        options: [
            {
                label: "30:23:00:42",
                value: "stopwatch",
                default: true,
            },
            {
                label: "30d 23h 00m 42s",
                value: "human",
            },
        ],
    },
    watchLargeGuilds: {
        type: OptionType.BOOLEAN,
        description:
            "Track users in large guilds. This may cause lag if you're in a lot of large guilds with active voice users. Tested with up to 2000 active voice users with no issues.",
        restartNeeded: true,
        default: false,
    },
});

export default definePlugin({
    name: "AllCallTimers",
    description: "Add call timer to all users in a server voice channel.",
    authors: [Devs.D3SOX, PcDevs.MutanPlex, PcDevs.Max],
    settings,

    patches: [
        {
            find: "usernameContainer,children:",
            replacement: [
                {
                    match: /(\w+)\.userId,\s*(\w+)\s*\),\s*(\w+)\s*=/g,
                    replace: "$1.userId, $2), CallTimerId = $1, $3=",
                },
                {
                    match: /=\s*([a-zA-Z_$]\w*)\.useRef\(\s*([a-zA-Z_$]\w*)\s*\);/g,
                    replace: "=$1.useRef($2), DcReact = $1; ",
                },
                {
                    match: /(className:\s*\w+\.usernameContainer,\s*children:\s*)(\w+)/g,
                    replace: "$1DcReact.cloneElement($2, { children: [...$2.props.children, $self.showClockInjection(CallTimerId), $self.showTextInjection(CallTimerId)] })",
                },
            ],
        },
    ],
    flux: {
        VOICE_STATE_UPDATES({ voiceStates }: { voiceStates: VoiceState[]; }) {
            const myId = UserStore.getCurrentUser().id;
            for (const state of voiceStates) {
                const { userId, channelId, guildId } = state;
                const isMe = userId === myId;
                if (!guildId) {
                    continue;
                }

                if (
                    !("oldChannelId" in state) &&
                    !runOneTime &&
                    !settings.store.watchLargeGuilds
                ) {
                    continue;
                }

                let { oldChannelId } = state;
                if (isMe && channelId !== myLastChannelId) {
                    oldChannelId = myLastChannelId;
                    myLastChannelId = channelId;
                }

                if (channelId !== oldChannelId) {
                    if (channelId) {
                        addUserJoinTime(userId, channelId, guildId);
                    } else if (oldChannelId) {
                        removeUserJoinTime(userId);
                    }
                }
            }
            runOneTime = false;
        },
        PASSIVE_UPDATE_V1(passiveUpdate) {
            if (settings.store.watchLargeGuilds) {
                return;
            }
            const { voiceStates } = passiveUpdate;
            if (!voiceStates) {
                return;
            }
            const { guildId } = passiveUpdate;
            for (const [userId, data] of userJoinTimes) {
                if (data.guildId === guildId) {
                    const userInVoiceStates = voiceStates.find(
                        state => state.userId === userId
                    );
                    if (!userInVoiceStates) {
                        removeUserJoinTime(userId);
                    }
                }
            }
            for (const state of voiceStates) {
                const { userId, channelId } = state;

                if (!channelId) {
                    continue;
                }
                if (userJoinTimes.has(userId)) {
                    if (channelId !== userJoinTimes.get(userId)?.channelId) {
                        addUserJoinTime(userId, channelId, guildId);
                    }
                } else {
                    addUserJoinTime(userId, channelId, guildId);
                }
            }
        },
    },
    subscribeToAllGuilds() {
        const guilds = Object.values(GuildStore.getGuilds()).map(
            guild => guild.id
        );
        const subscriptions = guilds.reduce(
            (acc, id) => ({ ...acc, [id]: { typing: true } }),
            {}
        );
        FluxDispatcher.dispatch({
            type: "GUILD_SUBSCRIPTIONS_FLUSH",
            subscriptions,
        });
    },

    start() {
        if (settings.store.watchLargeGuilds) {
            this.subscribeToAllGuilds();
        }
    },

    showClockInjection(g) {
        if (settings.store.showWithoutHover) {
            return "";
        }
        return this.showInjection(g);
    },

    showTextInjection(g) {
        if (!settings.store.showWithoutHover) {
            return "";
        }
        return this.showInjection(g);
    },

    showInjection(g) {
        const userIdx = g.userId;
        return this.renderTimer(userIdx);
    },

    renderTimer(userId: string) {
        const joinTime = userJoinTimes.get(userId);
        if (!joinTime?.time) {
            return;
        }
        if (
            userId === UserStore.getCurrentUser().id &&
            !settings.store.trackSelf
        ) {
            return;
        }

        return (
            <ErrorBoundary>
                <Timer time={joinTime.time} />
            </ErrorBoundary>
        );
    },
});

function addUserJoinTime(userId: string, channelId: string, guildId: string) {
    userJoinTimes.set(userId, { channelId, time: Date.now(), guildId });
}
function removeUserJoinTime(userId: string) {
    userJoinTimes.delete(userId);
}
let myLastChannelId: string | undefined;
let runOneTime = true;


function TimerText({ text }: Readonly<{ text: string; }>) {
    return (
        <div
            className={"timeCounter"}
            style={{
                marginTop: "-5px",
                fontWeight: "bold",
                fontFamily: "monospace",
                color: settings.store.showRoleColor ? "" : "#ffffff99",
                fontSize: 11,
                position: "relative",
            }}
        >
            {text}
        </div>
    );
}
function Timer({ time }: Readonly<{ time: number; }>) {
    const durationMs = useFixedTimer({ initialTime: time });
    const formatted = formatDurationMs(
        durationMs,
        settings.store.format === "human",
        settings.store.showSeconds
    );

    if (settings.store.showWithoutHover) {
        return <TimerText text={formatted} />;
    } else {
        return (
            <Tooltip text={formatted}>
                {({ onMouseEnter, onMouseLeave }) => (
                    <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} role="tooltip" style={{ display: "inline-block" }}>
                        <TimerIcon />
                    </div>
                )}
            </Tooltip>
        );
    }
}

function formatDurationMs(ms: number, human: boolean = false, seconds: boolean = true) {
    const format = (n: number) => (human ? n : n.toString().padStart(2, "0"));
    const unit = (s: string) => (human ? s : "");
    const delim = human ? " " : ":";

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
function useFixedTimer({ interval = 1000, initialTime = Date.now(), }: FixedTimerOpts) {
    const [time, setTime] = useState(Date.now() - initialTime);

    useEffect(() => {
        const intervalId = setInterval(
            () => setTime(Date.now() - initialTime),
            interval
        );

        return () => {
            clearInterval(intervalId);
        };
    }, [initialTime]);

    return time;
}

function TimerIcon({ height = 13, width = 13, className, }: Readonly<{ height?: number; width?: number; className?: string; }>) {
    return (
        <svg viewBox="0 0 455 455"
            height={height}
            width={width}
            className={className}
            style={{ color: "var(--channels-default)", marginLeft: "5px" }}
        >
            <path
                fill="currentColor"
                d="M332.229,90.04l14.238-27.159l-26.57-13.93L305.67,76.087c-19.618-8.465-40.875-13.849-63.17-15.523V30h48.269V0H164.231v30
        H212.5v30.563c-22.295,1.674-43.553,7.059-63.171,15.523L135.103,48.95l-26.57,13.93l14.239,27.16
        C67.055,124.958,30,186.897,30,257.5C30,366.576,118.424,455,227.5,455S425,366.576,425,257.5
        C425,186.896,387.944,124.958,332.229,90.04z M355,272.5H212.5V130h30v112.5H355V272.5z"
            />
        </svg>
    );
}
