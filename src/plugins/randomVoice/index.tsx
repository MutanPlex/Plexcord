/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2025 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { plugin, t } from "@api/i18n";
import { definePluginSettings } from "@api/Settings";
import { UserAreaButton, UserAreaRenderProps } from "@api/UserArea";
import type { Channel, VoiceState } from "@plexcord/discord-types";
import { debounce } from "@shared/debounce";
import { Devs, PcDevs } from "@utils/constants";
import definePlugin, { makeRange, OptionType } from "@utils/types";
import { findByCodeLazy, findByPropsLazy } from "@webpack";
import { ChannelActions, ChannelRouter, ChannelStore, ContextMenuApi, FluxDispatcher, GuildStore, MediaEngineStore, Menu, PermissionsBits, PermissionStore, React, RelationshipStore, SelectedChannelStore, Toasts, UserStore, VoiceActions, VoiceStateStore } from "@webpack/common";
const startStream = findByCodeLazy('type:"STREAM_START"');
const getDesktopSources = findByCodeLazy("desktop sources");

const { isVideoEnabled } = findByPropsLazy("isVideoEnabled");
const NO_SERVERS = "__NONE__";

type RandomVoiceOperation = "<" | ">" | "==";
type StateFilterKey = "mute" | "deafen" | "video" | "stream";
type SelfSettingKey = "selfMute" | "selfDeafen" | "autoCamera" | "autoStream" | "leaveEmpty" | "autoNavigate" | "avoidStages" | "avoidAfk" | "prioritizeFriends";
type PostJoinAction = () => void | Promise<void>;

interface OperationOption {
    label: () => string;
    value: RandomVoiceOperation;
    default: boolean;
}

interface ToggleOption<K extends string> {
    key: K;
    label: () => string;
}

const operationOptions: OperationOption[] = [
    { label: () => t(plugin.randomVoice.context.select.lessThan), value: "<", default: false },
    { label: () => t(plugin.randomVoice.context.select.moreThan), value: ">", default: false },
    { label: () => t(plugin.randomVoice.context.select.equalTo), value: "==", default: true },
];

const stateFilters: ToggleOption<StateFilterKey>[] = [
    { key: "mute", label: () => t(plugin.randomVoice.option.mute.label) },
    { key: "deafen", label: () => t(plugin.randomVoice.option.deafen.label) },
    { key: "video", label: () => t(plugin.randomVoice.option.video.label) },
    { key: "stream", label: () => t(plugin.randomVoice.option.stream.label) },
];

const selfSettings: ToggleOption<SelfSettingKey>[] = [
    { key: "selfMute", label: () => t(plugin.randomVoice.option.selfMute.label) },
    { key: "selfDeafen", label: () => t(plugin.randomVoice.option.selfDeafen.label) },
    { key: "autoCamera", label: () => t(plugin.randomVoice.option.autoCamera.label) },
    { key: "autoStream", label: () => t(plugin.randomVoice.option.autoStream.label) },
    { key: "leaveEmpty", label: () => t(plugin.randomVoice.option.leaveEmpty.label) },
    { key: "autoNavigate", label: () => t(plugin.randomVoice.option.autoNavigate.label) },
    { key: "prioritizeFriends", label: () => t(plugin.randomVoice.option.prioritizeFriends.label) },
    { key: "avoidStages", label: () => t(plugin.randomVoice.option.avoidStages.label) },
    { key: "avoidAfk", label: () => t(plugin.randomVoice.option.avoidAfk.label) },
];

interface RandomVoiceStateLike {
    userId?: string | null;
    channelId?: string | null;
    selfDeaf?: boolean | null;
    selfMute?: boolean | null;
    selfStream?: boolean | null;
    selfVideo?: boolean | null;
}

const settings = definePluginSettings({
    userAmountOperation: {
        label: () => t(plugin.randomVoice.option.userAmountOperation.label),
        description: () => t(plugin.randomVoice.option.userAmountOperation.description),
        type: OptionType.SELECT,
        options: [...operationOptions],
        default: "<",
    },
    userAmount: {
        label: () => t(plugin.randomVoice.option.userAmount.label),
        description: () => t(plugin.randomVoice.option.userAmount.description),
        type: OptionType.SLIDER,
        markers: makeRange(0, 15, 1),
        default: 3,
        stickToMarkers: true,
    },
    spacesLeftOperation: {
        label: () => t(plugin.randomVoice.option.spacesLeftOperation.label),
        description: () => t(plugin.randomVoice.option.spacesLeftOperation.description),
        type: OptionType.SELECT,
        options: [...operationOptions],
        default: "<",
    },
    spacesLeft: {
        label: () => t(plugin.randomVoice.option.spacesLeft.label),
        description: () => t(plugin.randomVoice.option.spacesLeft.description),
        type: OptionType.SLIDER,
        markers: makeRange(0, 15, 1),
        default: 3,
        stickToMarkers: true,
    },
    vcLimitOperation: {
        label: () => t(plugin.randomVoice.option.vcLimitOperation.label),
        description: () => t(plugin.randomVoice.option.vcLimitOperation.description),
        type: OptionType.SELECT,
        options: [...operationOptions],
        default: "<",
    },
    vcLimit: {
        label: () => t(plugin.randomVoice.option.vcLimit.label),
        description: () => t(plugin.randomVoice.option.vcLimit.description),
        type: OptionType.SLIDER,
        markers: makeRange(1, 15, 1),
        default: 5,
        stickToMarkers: true,
    },
    servers: {
        label: () => t(plugin.randomVoice.option.servers.label),
        description: () => t(plugin.randomVoice.option.servers.description),
        type: OptionType.STRING,
        default: "",
    },
    autoNavigate: {
        label: () => t(plugin.randomVoice.option.autoNavigate.label),
        description: () => t(plugin.randomVoice.option.autoNavigate.description),
        type: OptionType.BOOLEAN,
        default: false,
    },
    autoCamera: {
        label: () => t(plugin.randomVoice.option.autoCamera.label),
        description: () => t(plugin.randomVoice.option.autoCamera.description),
        type: OptionType.BOOLEAN,
        default: false,
    },
    autoStream: {
        label: () => t(plugin.randomVoice.option.autoStream.label),
        description: () => t(plugin.randomVoice.option.autoStream.description),
        type: OptionType.BOOLEAN,
        default: false,
    },
    selfMute: {
        label: () => t(plugin.randomVoice.option.selfMute.label),
        description: () => t(plugin.randomVoice.option.selfMute.description),
        type: OptionType.BOOLEAN,
        default: false,
    },
    selfDeafen: {
        label: () => t(plugin.randomVoice.option.selfDeafen.label),
        description: () => t(plugin.randomVoice.option.selfDeafen.description),
        type: OptionType.BOOLEAN,
        default: false,
    },
    leaveEmpty: {
        label: () => t(plugin.randomVoice.option.leaveEmpty.label),
        description: () => t(plugin.randomVoice.option.leaveEmpty.description),
        type: OptionType.BOOLEAN,
        default: false,
    },
    prioritizeFriends: {
        label: () => t(plugin.randomVoice.option.prioritizeFriends.label),
        description: () => t(plugin.randomVoice.option.prioritizeFriends.description),
        type: OptionType.BOOLEAN,
        default: false,
    },
    avoidStages: {
        label: () => t(plugin.randomVoice.option.avoidStages.label),
        description: () => t(plugin.randomVoice.option.avoidStages.description),
        type: OptionType.BOOLEAN,
        default: false,
    },
    avoidAfk: {
        label: () => t(plugin.randomVoice.option.avoidAfk.label),
        description: () => t(plugin.randomVoice.option.avoidAfk.description),
        type: OptionType.BOOLEAN,
        default: false,
    },
    video: {
        label: () => t(plugin.randomVoice.option.video.label),
        description: () => t(plugin.randomVoice.option.video.description),
        type: OptionType.BOOLEAN,
        default: false,
    },
    stream: {
        label: () => t(plugin.randomVoice.option.stream.label),
        description: () => t(plugin.randomVoice.option.stream.description),
        type: OptionType.BOOLEAN,
        default: false,
    },
    mute: {
        label: () => t(plugin.randomVoice.option.mute.label),
        description: () => t(plugin.randomVoice.option.mute.description),
        type: OptionType.BOOLEAN,
        default: false,
    },
    deafen: {
        label: () => t(plugin.randomVoice.option.deafen.label),
        description: () => t(plugin.randomVoice.option.deafen.description),
        type: OptionType.BOOLEAN,
        default: false,
    },
    includeStates: {
        label: () => t(plugin.randomVoice.option.includeStates.label),
        description: () => t(plugin.randomVoice.option.includeStates.description),
        type: OptionType.BOOLEAN,
        default: false,
    },
    avoidStates: {
        label: () => t(plugin.randomVoice.option.avoidStates.label),
        description: () => t(plugin.randomVoice.option.avoidStates.description),
        type: OptionType.BOOLEAN,
        default: false,
    },
});

function showToast(message: string, type: (typeof Toasts.Type)[keyof typeof Toasts.Type]) {
    Toasts.show({
        message,
        type,
        id: Toasts.genId(),
        options: { position: Toasts.Position.BOTTOM },
    });
}

function RandomVoiceIcon({ className }: { className?: string; }) {
    return (
        <svg className={className} width="18" height="18" viewBox="0 0 24 24">
            <g fill="currentColor">
                <path d="M19,9H14a5.006,5.006,0,0,0-5,5v5a5.006,5.006,0,0,0,5,5h5a5.006,5.006,0,0,0,5-5V14A5.006,5.006,0,0,0,19,9Zm-5,6a1,1,0,1,1,1-1A1,1,0,0,1,14,15Zm5,5a1,1,0,1,1,1-1A1,1,0,0,1,19,20ZM15.6,5,12.069,1.462A5.006,5.006,0,0,0,5,1.462L1.462,5a5.006,5.006,0,0,0,0,7.071L5,15.6a4.961,4.961,0,0,0,2,1.223V14a7.008,7.008,0,0,1,7-7h2.827A4.961,4.961,0,0,0,15.6,5ZM5,10A1,1,0,1,1,6,9,1,1,0,0,1,5,10ZM9,6a1,1,0,1,1,1-1A1,1,0,0,1,9,6Z" />
            </g>
        </svg>
    );
}

function getCurrentUserId() {
    return UserStore.getCurrentUser()?.id ?? null;
}

function getCurrentVoiceChannelId(userId = getCurrentUserId()) {
    if (!userId) return null;

    return VoiceStateStore.getVoiceStateForUser(userId)?.channelId
        ?? SelectedChannelStore.getVoiceChannelId()
        ?? null;
}

function parseServerIds(store = settings.store) {
    return store.servers
        .split("/")
        .map(id => id.trim())
        .filter(id => id && id !== NO_SERVERS);
}

function setServerIds(serverIds: string[]) {
    settings.store.servers = serverIds.length ? `/${serverIds.join("/")}` : NO_SERVERS;
}

function getSelectedServerIds(store = settings.store) {
    if (store.servers === "") return null;
    return parseServerIds(store);
}

function getRenderableGuilds() {
    return Object.values(GuildStore.getGuilds())
        .filter((guild): guild is NonNullable<typeof guild> =>
            guild != null
            && typeof guild.id === "string"
        )
        .sort((left, right) => left.name.localeCompare(right.name));
}

function getGuildVoiceStates() {
    return getRenderableGuilds().flatMap(({ id }) =>
        Object.entries(VoiceStateStore.getVoiceStates(id) as Record<string, RandomVoiceStateLike> | null ?? {})
    );
}

function hasStateFilters(store = settings.store) {
    return stateFilters.some(({ key }) => store[key]);
}

function matchesOperation(operation: RandomVoiceOperation, left: number, right: number) {
    if (operation === "==") return left === right;
    if (operation === ">") return left > right;
    return left < right;
}

function isStageChannel(channel: Channel) {
    return channel.type === 13 || channel.isGuildStageVoice?.() === true;
}

function isAfkChannel(channel: Channel) {
    const guildId = channel.getGuildId();
    if (!guildId) return false;
    return GuildStore.getGuild(guildId)?.afkChannelId === channel.id;
}

function matchesStateFilters(state: RandomVoiceStateLike, store = settings.store) {
    if (store.mute && !state.selfMute) return false;
    if (store.deafen && !state.selfDeaf) return false;
    if (store.video && !state.selfVideo) return false;
    if (store.stream && !state.selfStream) return false;
    return true;
}

function isJoinableChannel(channelId: string, store = settings.store) {
    const channel = ChannelStore.getChannel(channelId);
    if (!channel) return false;

    const selectedServerIds = getSelectedServerIds(store);
    const guildId = channel.getGuildId();
    if (selectedServerIds != null && (!guildId || !selectedServerIds.includes(guildId))) return false;
    if (store.avoidStages && isStageChannel(channel)) return false;
    if (store.avoidAfk && isAfkChannel(channel)) return false;
    if (!PermissionStore.can(PermissionsBits.CONNECT, channel)) return false;

    const currentUserId = getCurrentUserId();
    const voiceStates = VoiceStateStore.getVoiceStatesForChannel(channelId) as Record<string, RandomVoiceStateLike> | null;
    const usersInChannel = Object.keys(voiceStates ?? {}).length;

    if (channel.userLimit > 0 && usersInChannel >= channel.userLimit) return false;
    if (currentUserId && voiceStates && Object.prototype.hasOwnProperty.call(voiceStates, currentUserId)) return false;

    return true;
}

function matchesChannelFilters(channelId: string, store = settings.store) {
    const channel = ChannelStore.getChannel(channelId);
    if (!channel) return false;

    const voiceStates = VoiceStateStore.getVoiceStatesForChannel(channelId) as Record<string, RandomVoiceStateLike> | null;
    const usersInChannel = Object.keys(voiceStates ?? {}).length;
    const channelLimit = channel.userLimit || 99;
    const spacesLeft = channelLimit - usersInChannel;

    if (!matchesOperation(store.spacesLeftOperation, spacesLeft, store.spacesLeft)) return false;
    if (!matchesOperation(store.userAmountOperation, usersInChannel, store.userAmount)) return false;
    if (!matchesOperation(store.vcLimitOperation, channelLimit, store.vcLimit)) return false;

    if (!hasStateFilters(store) || !voiceStates) return true;

    const channelStates = Object.values(voiceStates);
    const hasMatch = channelStates.some(voiceState => matchesStateFilters(voiceState, store));
    if (store.includeStates && !hasMatch) return false;
    if (store.avoidStates && hasMatch) return false;

    return true;
}

function getCandidateChannelIds(store = settings.store) {
    const candidates = new Set<string>();

    for (const [, state] of getGuildVoiceStates()) {
        const { channelId } = state;
        if (!channelId || candidates.has(channelId)) continue;
        if (!isJoinableChannel(channelId, store)) continue;
        if (!matchesChannelFilters(channelId, store)) continue;
        candidates.add(channelId);
    }

    return [...candidates];
}

function getFriendChannelIds() {
    const friendChannelIds = new Set<string>();

    for (const userId of RelationshipStore.getFriendIDs()) {
        const channelId = VoiceStateStore.getVoiceStateForUser(userId)?.channelId;
        if (channelId != null && isJoinableChannel(channelId)) {
            friendChannelIds.add(channelId);
        }
    }

    return friendChannelIds;
}

function pickRandomChannel(store = settings.store) {
    const candidates = getCandidateChannelIds(store);
    const friendChannelIds = store.prioritizeFriends ? getFriendChannelIds() : null;
    const friendCandidates = store.prioritizeFriends
        ? candidates.filter(channelId => friendChannelIds?.has(channelId))
        : [];

    const pool = friendCandidates.length ? friendCandidates : candidates;
    return pool[Math.floor(Math.random() * pool.length)] ?? null;
}

async function enableCamera() {
    if (isVideoEnabled()) return;

    FluxDispatcher.dispatch({
        type: "MEDIA_ENGINE_SET_VIDEO_ENABLED",
        enabled: true,
    });
}

async function startChannelStream(channel: Channel) {
    if (isStageChannel(channel) || !PermissionStore.can(PermissionsBits.STREAM, channel)) return;

    const selectedChannelId = SelectedChannelStore.getVoiceChannelId();
    if (!selectedChannelId) return;

    const sources = await getDesktopSources(MediaEngineStore.getMediaEngine(), ["screen"], null);
    const source = sources?.[0];
    if (!source) return;

    startStream(channel.guild_id ?? null, selectedChannelId, {
        pid: null,
        sourceId: source.id,
        sourceName: source.name,
        audioSourceId: null,
        sound: true,
        previewDisabled: false,
    });
}

function runAfterVoiceJoin(channelId: string, callbacks: PostJoinAction[]) {
    let attempts = 0;
    const interval = setInterval(() => {
        attempts++;

        if (getCurrentVoiceChannelId() !== channelId) {
            if (attempts < 40) return;
            clearInterval(interval);
            return;
        }

        clearInterval(interval);
        for (const callback of callbacks) {
            void callback();
        }
    }, 100);
}

async function joinRandomVoice() {
    const channelId = pickRandomChannel();
    if (!channelId) {
        showToast("Failed to find a voice channel.", Toasts.Type.MESSAGE);
        return;
    }

    const channel = ChannelStore.getChannel(channelId);
    if (!channel) {
        showToast("Voice channel is unavailable.", Toasts.Type.FAILURE);
        return;
    }

    const { store } = settings;
    ChannelActions.selectVoiceChannel(channelId);

    if (store.autoNavigate) {
        ChannelRouter.transitionToChannel(channelId);
    }

    const postJoinActions: PostJoinAction[] = [];
    if (store.selfMute && !MediaEngineStore.isSelfMute()) {
        postJoinActions.push(() => VoiceActions.toggleSelfMute());
    }
    if (store.selfDeafen && !MediaEngineStore.isSelfDeaf()) {
        postJoinActions.push(() => VoiceActions.toggleSelfDeaf());
    }
    if (store.autoCamera) {
        postJoinActions.push(enableCamera);
    }
    if (store.autoStream) {
        postJoinActions.push(() => startChannelStream(channel));
    }

    if (postJoinActions.length) {
        runAfterVoiceJoin(channelId, postJoinActions);
    }
}

function RandomVoiceButton({ iconForeground, hideTooltips, nameplate }: UserAreaRenderProps) {
    return (
        <UserAreaButton
            onClick={() => void joinRandomVoice()}
            onContextMenu={event => ContextMenuApi.openContextMenu(event, () => <RandomVoiceMenu onClose={ContextMenuApi.closeContextMenu} />)}
            role="switch"
            tooltipText={hideTooltips ? void 0 : t(plugin.randomVoice.tooltip)}
            icon={<RandomVoiceIcon className={iconForeground} />}
            plated={nameplate != null}
        />
    );
}

function RandomVoiceMenu({ onClose }: { onClose(): void; }) {
    const [, rerender] = React.useReducer(value => value + 1, 0);
    const { store } = settings;
    const guilds = getRenderableGuilds();
    const allServerIds = guilds.map(guild => guild.id);
    const selectedServerIds = getSelectedServerIds(store) ?? allServerIds;

    const update = <K extends keyof typeof store>(key: K, value: typeof store[K]) => {
        store[key] = value;
        rerender();
    };
    const toggle = <K extends SelfSettingKey | StateFilterKey | "includeStates" | "avoidStates">(key: K) => update(key, !store[key]);
    const selectAllServers = () => {
        setServerIds(guilds.map(guild => guild.id));
        rerender();
    };
    const resetServers = () => {
        setServerIds([]);
        rerender();
    };
    const toggleServer = (guildId: string) => {
        setServerIds(
            selectedServerIds.includes(guildId)
                ? selectedServerIds.filter(id => id !== guildId)
                : [...selectedServerIds, guildId]
        );
        rerender();
    };

    const setSlider = <K extends "userAmount" | "spacesLeft" | "vcLimit">(key: K) =>
        debounce((value: number) => {
            store[key] = Math.round(value);
            rerender();
        }, 50);

    return (
        <Menu.Menu navId="random-voice" onClose={onClose} aria-label={t(plugin.randomVoice.tooltip)}>
            <Menu.MenuItem id="random-voice-servers" label={t(plugin.randomVoice.context.select.servers)}>
                <>
                    <Menu.MenuCheckboxItem
                        id="random-voice-select-all-servers"
                        label={t(plugin.randomVoice.context.select.selectAll)}
                        checked={selectedServerIds.length === allServerIds.length}
                        disabled={selectedServerIds.length === allServerIds.length}
                        action={selectAllServers}
                    />

                    <Menu.MenuCheckboxItem
                        id="random-voice-reset-servers"
                        label={t(plugin.randomVoice.context.select.reset)}
                        checked={selectedServerIds.length === 0}
                        disabled={!selectedServerIds.length}
                        action={resetServers}
                    />
                    <Menu.MenuSeparator />
                    {guilds.map(guild => (
                        <Menu.MenuCheckboxItem
                            key={guild.id}
                            id={`random-voice-server-${guild.id}`}
                            label={guild.name}
                            checked={selectedServerIds.includes(guild.id)}
                            action={() => toggleServer(guild.id)}
                        />
                    ))}

                </>
            </Menu.MenuItem>

            <Menu.MenuItem id="random-voice-state-filters" label={t(plugin.randomVoice.context.select.stateFilters)}>
                <>
                    {stateFilters.map(({ key, label }) => (
                        <Menu.MenuCheckboxItem
                            key={key}
                            id={`random-voice-filter-${key}`}
                            label={label()}
                            checked={store[key]}
                            action={() => toggle(key)}
                        />
                    ))}
                    <Menu.MenuSeparator />
                    <Menu.MenuCheckboxItem
                        id="random-voice-include-states"
                        label={t(plugin.randomVoice.context.filter.includeFilters)}
                        checked={store.includeStates}
                        disabled={store.avoidStates || !hasStateFilters(store)}
                        action={() => toggle("includeStates")}
                    />

                    <Menu.MenuCheckboxItem
                        id="random-voice-avoid-states"
                        label={t(plugin.randomVoice.context.filter.avoidFilters)}
                        checked={store.avoidStates}
                        disabled={store.includeStates || !hasStateFilters(store)}
                        action={() => toggle("avoidStates")}
                    />
                </>
            </Menu.MenuItem>

            <Menu.MenuSeparator />

            {renderOperationGroup({
                id: "users",
                label: t(plugin.randomVoice.context.select.amount),
                sliderKey: "userAmount",
                operationKey: "userAmountOperation",
                sliderValue: store.userAmount,
                operationValue: store.userAmountOperation,
                onOperationChange: value => update("userAmountOperation", value),
                onSliderChange: setSlider("userAmount"),
            })}

            <Menu.MenuSeparator />

            {renderOperationGroup({
                id: "spaces-left",
                label: t(plugin.randomVoice.context.select.spaces),
                sliderKey: "spacesLeft",
                operationKey: "spacesLeftOperation",
                sliderValue: store.spacesLeft,
                operationValue: store.spacesLeftOperation,
                onOperationChange: value => update("spacesLeftOperation", value),
                onSliderChange: setSlider("spacesLeft"),
            })}

            <Menu.MenuSeparator />

            {renderOperationGroup({
                id: "voice-limit",
                label: t(plugin.randomVoice.context.select.voice),
                sliderKey: "vcLimit",
                operationKey: "vcLimitOperation",
                sliderValue: store.vcLimit,
                operationValue: store.vcLimitOperation,
                onOperationChange: value => update("vcLimitOperation", value),
                onSliderChange: setSlider("vcLimit"),
            })}

            <Menu.MenuSeparator />
            <Menu.MenuItem id="random-voice-self-settings" label={t(plugin.randomVoice.context.voice.joinSettings)}>
                <>
                    {selfSettings.map(({ key, label }) => (
                        <Menu.MenuCheckboxItem
                            key={key}
                            id={`random-voice-setting-${key}`}
                            label={label()}
                            checked={store[key]}
                            action={() => toggle(key)}
                        />
                    ))}
                </>
            </Menu.MenuItem>
        </Menu.Menu >
    );
}
function renderOperationGroup({
    id,
    label,
    sliderKey,
    operationKey,
    sliderValue,
    operationValue,
    onOperationChange,
    onSliderChange,
}: {
    id: string;
    label: string;
    sliderKey: string;
    operationKey: string;
    sliderValue: number;
    operationValue: RandomVoiceOperation;
    onOperationChange(value: RandomVoiceOperation): void;
    onSliderChange(value: number): void;
}) {
    return (
        <Menu.MenuGroup label={label.toUpperCase()}>
            <Menu.MenuControlItem
                id={`random-voice-slider-${sliderKey}`}
                label={label}
                control={(props, ref) => (
                    <Menu.MenuSliderControl
                        ref={ref}
                        {...props}
                        minValue={1}
                        maxValue={15}
                        value={sliderValue}
                        onChange={onSliderChange}
                        renderValue={value => `${Math.round(value)} user${Math.round(value) === 1 ? "" : "s"}`}
                    />
                )}
            />
            <Menu.MenuItem id={`random-voice-operation-${operationKey}`} label={t(plugin.randomVoice.context.select.parameters)}>
                <>
                    {operationOptions.map(option => (
                        <Menu.MenuRadioItem
                            key={option.value}
                            id={`random-voice-operation-${id}-${option.value}`}
                            group={`random-voice-${id}`}
                            label={option.label()}
                            checked={operationValue === option.value}
                            action={() => onOperationChange(option.value)}
                        />
                    ))}
                </>
            </Menu.MenuItem>
        </Menu.MenuGroup>
    );
}

export default definePlugin({
    name: "RandomVoice",
    description: () => t(plugin.randomVoice.description),
    authors: [PcDevs.xijexo, PcDevs.omaw, Devs.thororen],
    tags: ["voice", "servers", "utility"],
    settings,

    userAreaButton: {
        icon: RandomVoiceIcon,
        render: RandomVoiceButton,
    },

    flux: {
        VOICE_STATE_UPDATES({ voiceStates }: { voiceStates: VoiceState[]; }) {
            const currentUserId = getCurrentUserId();
            if (!currentUserId || !settings.store.leaveEmpty) return;

            const myChannelId = getCurrentVoiceChannelId(currentUserId);
            if (!myChannelId) return;

            const touchedCurrentChannel = voiceStates.some(state =>
                state.userId === currentUserId ||
                state.channelId === myChannelId ||
                state.oldChannelId === myChannelId
            );
            if (!touchedCurrentChannel) return;
            const myOwnJoin = voiceStates.some(state =>
                state.userId === currentUserId &&
                state.channelId === myChannelId &&
                state.oldChannelId !== myChannelId
            );
            if (myOwnJoin) return;

            const channelStates = VoiceStateStore.getVoiceStatesForChannel(myChannelId) as Record<string, VoiceState> | null;
            const otherUsers = Object.values(channelStates ?? {}).filter(state => state.userId !== currentUserId);
            if (!otherUsers.length) {
                void joinRandomVoice();
            }
        },
    },
});
