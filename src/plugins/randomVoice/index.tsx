/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2025 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { plugin, t } from "@api/i18n";
import { definePluginSettings } from "@api/Settings";
import { UserAreaButton, UserAreaRenderProps } from "@api/UserArea";
import { debounce } from "@shared/debounce";
import { Devs, PcDevs } from "@utils/constants";
import definePlugin, { makeRange, OptionType } from "@utils/types";
import { findByCodeLazy, findComponentByCodeLazy } from "@webpack";
import { ChannelActions, ChannelRouter, ChannelStore, ContextMenuApi, GuildStore, MediaEngineStore, Menu, PermissionsBits, PermissionStore, React, SelectedChannelStore, Toasts, UserStore, VoiceActions, VoiceStateStore } from "@webpack/common";

const ChatVoiceIcon = findComponentByCodeLazy("0l1.8-1.8c.17");
const startStream = findByCodeLazy('type:"STREAM_START"');
const getDesktopSources = findByCodeLazy("desktop sources");

const valueOperation = [
    { label: () => t(plugin.randomVoice.context.select.lessThan), value: "<", default: false },
    { label: () => t(plugin.randomVoice.context.select.moreThan), value: ">", default: false },
    { label: () => t(plugin.randomVoice.context.select.equalTo), value: "==", default: true },
];

const CONNECT = 1n << 20n;
const SPEAK = 1n << 21n;
const STREAM = 1n << 9n;
const VIDEO = 1 << 21;

const settings = definePluginSettings({
    userAmountOperation: {
        label: () => t(plugin.randomVoice.option.userAmountOperation.label),
        description: () => t(plugin.randomVoice.option.userAmountOperation.description),
        type: OptionType.SELECT,
        options: [...valueOperation],
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
        options: [...valueOperation],
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
        options: [...valueOperation],
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

interface VoiceState {
    userId: string;
    channelId?: string;
    oldChannelId?: string;
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

function RandomVoiceIcon({ className }: { className?: string; }) {
    return (
        <svg className={className} width="18" height="18" viewBox="0 0 24 24">
            <g fill="currentColor">
                <path d="M19,9H14a5.006,5.006,0,0,0-5,5v5a5.006,5.006,0,0,0,5,5h5a5.006,5.006,0,0,0,5-5V14A5.006,5.006,0,0,0,19,9Zm-5,6a1,1,0,1,1,1-1A1,1,0,0,1,14,15Zm5,5a1,1,0,1,1,1-1A1,1,0,0,1,19,20ZM15.6,5,12.069,1.462A5.006,5.006,0,0,0,5,1.462L1.462,5a5.006,5.006,0,0,0,0,7.071L5,15.6a4.961,4.961,0,0,0,2,1.223V14a7.008,7.008,0,0,1,7-7h2.827A4.961,4.961,0,0,0,15.6,5ZM5,10A1,1,0,1,1,6,9,1,1,0,0,1,5,10ZM9,6a1,1,0,1,1,1-1A1,1,0,0,1,9,6Z" />
            </g>
        </svg>
    );
}

export default definePlugin({
    name: "RandomVoice",
    description: () => t(plugin.randomVoice.description),
    authors: [PcDevs.xijexo, PcDevs.omaw, Devs.thororen],

    userAreaButton: {
        icon: RandomVoiceIcon,
        render: RandomVoiceButton
    },

    flux: {
        VOICE_STATE_UPDATES() {
            const currentUserId = UserStore.getCurrentUser().id;
            const myChannelId = VoiceStateStore.getVoiceStateForUser(currentUserId)?.channelId;
            if (!myChannelId || !settings.store.leaveEmpty) return;

            const voiceStatesMap = VoiceStateStore.getVoiceStates() as Record<string, VoiceState>;
            const othersInChannel = Object.values(voiceStatesMap).filter(vs =>
                vs.channelId === myChannelId && vs.userId !== currentUserId
            );

            if (othersInChannel.length === 0) {
                getChannels();
            }
        },
    },
    settings,
});

function RandomVoiceButton({ iconForeground, hideTooltips, nameplate }: UserAreaRenderProps) {
    return (
        <UserAreaButton
            onContextMenu={e => ContextMenuApi.openContextMenu(e, () => <ContextMenu />)}
            onClick={() => getChannels()}
            role="switch"
            tooltipText={hideTooltips ? void 0 : t(plugin.randomVoice.tooltip)}
            icon={<RandomVoiceIcon className={iconForeground} />}
            plated={nameplate != null}
        />
    );
}

function ContextMenu() {
    let ServerList: any[] = [];
    Object.values(UserStore.getUsers()).forEach(user => {
        const { channelId } = VoiceStateStore.getVoiceStateForUser(user.id) ?? {};
        if (!channelId) return;
        const channel = ChannelStore.getChannel(channelId);
        if (channel) ServerList.push(channel.getGuildId());
    });

    ServerList = Array.from(new Set(ServerList));
    const Servers = ServerList.map(server => GuildStore.getGuild(server)).filter(guild => guild && guild.id);
    const [servers, setServers] = React.useState(settings.store.servers);
    const [spacesLeftOperation, setSpacesLeftOperation] = React.useState(settings.store.spacesLeftOperation);
    const [userAmount, setuserAmount] = React.useState(settings.store.userAmountOperation);
    const [vcOperation, setVcOperation] = React.useState(settings.store.vcLimitOperation);
    const [navigate, setnavigate] = React.useState(settings.store.autoNavigate);
    const [stage, setStage] = React.useState(settings.store.avoidStages);
    const [afk, setAfk] = React.useState(settings.store.avoidAfk);
    const [camera, setCamera] = React.useState(settings.store.autoCamera);
    const [stream, setStream] = React.useState(settings.store.autoStream);
    const [empty, setEmpty] = React.useState(settings.store.leaveEmpty);
    const [muteself, setSelfMute] = React.useState(settings.store.selfMute);
    const [deafenself, setSelfDeafen] = React.useState(settings.store.selfDeafen);
    const [mute, setMute] = React.useState(settings.store.mute);
    const [deafen, setDeafen] = React.useState(settings.store.deafen);
    const [video, setVideo] = React.useState(settings.store.video);
    const [state, setState] = React.useState(settings.store.includeStates);
    const [notstate, avoidState] = React.useState(settings.store.avoidStates);

    return (
        <Menu.Menu
            navId="random-vc"
            onClose={() => { }}
            aria-label={t(plugin.randomVoice.context.label)}
        >

            <Menu.MenuItem
                id="servers"
                label={t(plugin.randomVoice.context.select.servers)}
                action={() => { }} >
                <>
                    {Servers.map(server => (
                        <>
                            <Menu.MenuCheckboxItem
                                key={String(server?.id ?? t(plugin.randomVoice.context.invalid.server))}
                                id={String(server?.name ?? t(plugin.randomVoice.context.invalid.server))}
                                label={server?.name ?? t(plugin.randomVoice.context.invalid.server)}
                                checked={servers.includes(server?.id ?? t(plugin.randomVoice.context.invalid.server))}
                                action={() => {
                                    if (settings.store.servers.includes(server?.id ?? t(plugin.randomVoice.context.invalid.server)))
                                        settings.store.servers = settings.store.servers.replace(`/${server.id}`, "");
                                    else
                                        settings.store.servers += `/${server?.id ?? t(plugin.randomVoice.context.invalid.server)}`;
                                    setServers(settings.store.servers);
                                }} />
                        </>
                    ))}

                    <Menu.MenuItem
                        id="selectAll"
                        label={t(plugin.randomVoice.context.select.list)}
                        action={() => {
                            const allServerIds = Servers.filter(server => server?.id).map(server => server.id);
                            settings.store.servers = `/${allServerIds.join("/")}`;
                            setServers(settings.store.servers);
                        }}
                        disabled={servers.length === Servers.filter(server => server?.id).length}
                        icon={() => {
                            return (
                                <ChatVoiceIcon
                                    className="selectList"
                                    role="img"
                                    width="18"
                                    height="18"
                                />
                            );
                        }}
                    />

                    <Menu.MenuItem
                        id="clearList"
                        label={t(plugin.randomVoice.context.reset.list)}
                        disabled={servers.length === 0}
                        action={() => {
                            settings.store.servers = "";
                            setServers("");
                        }}
                        icon={() => {
                            return (
                                <svg
                                    className={"reset-icon"}
                                    role="img"
                                    width={"22"}
                                    height={"22"}
                                    viewBox={"0 0 26 26"}
                                >
                                    <g fill="currentColor">
                                        <path d="M12,2a10.032,10.032,0,0,1,7.122,3H16a1,1,0,0,0-1,1h0a1,1,0,0,0,1,1h4.143A1.858,1.858,0,0,0,22,5.143V1a1,1,0,0,0-1-1h0a1,1,0,0,0-1,1V3.078A11.981,11.981,0,0,0,.05,10.9a1.007,1.007,0,0,0,1,1.1h0a.982.982,0,0,0,.989-.878A10.014,10.014,0,0,1,12,2Z" /><path d="M22.951,12a.982.982,0,0,0-.989.878A9.986,9.986,0,0,1,4.878,19H8a1,1,0,0,0,1-1H9a1,1,0,0,0-1-1H3.857A1.856,1.856,0,0,0,2,18.857V23a1,1,0,0,0,1,1H3a1,1,0,0,0,1-1V20.922A11.981,11.981,0,0,0,23.95,13.1a1.007,1.007,0,0,0-1-1.1Z" />
                                    </g>

                                </svg>
                            );
                        }} />

                </>
            </Menu.MenuItem>

            <Menu.MenuItem
                id="filterStates"
                label={t(plugin.randomVoice.context.select.filters)}
                action={() => { }} >
                <>
                    <Menu.MenuCheckboxItem
                        key="muted"
                        id="muted"
                        label={t(plugin.randomVoice.context.filter.muted)}
                        action={() => {
                            setMute(!mute);
                            settings.store.mute = !mute;
                        }}
                        checked={mute} />
                    <Menu.MenuCheckboxItem
                        key="deafen"
                        id="deafen"
                        label={t(plugin.randomVoice.context.filter.deafened)}
                        action={() => {
                            setDeafen(!deafen);
                            settings.store.deafen = !deafen;
                        }}
                        checked={deafen} />
                    <Menu.MenuCheckboxItem
                        key="video"
                        id="video"
                        label={t(plugin.randomVoice.context.filter.camera)}
                        action={() => {
                            setVideo(!video);
                            settings.store.video = !video;
                        }}
                        checked={video} />
                    <Menu.MenuCheckboxItem
                        key="stream"
                        id="stream"
                        label={t(plugin.randomVoice.context.filter.stream)}
                        action={() => {
                            setStream(!stream);
                            settings.store.stream = !stream;
                        }}
                        checked={stream} />
                    <Menu.MenuCheckboxItem
                        key="state"
                        id="state"
                        label={t(plugin.randomVoice.context.filter.includeFilters)}
                        disabled={settings.store.avoidStates || !settings.store.includeStates && !settings.store.mute && !settings.store.deafen && !settings.store.video && !settings.store.stream}
                        action={() => {
                            setState(!state);
                            settings.store.includeStates = !state;
                        }}
                        checked={state} />

                    <Menu.MenuCheckboxItem
                        key="notstate"
                        id="notstate"
                        label={t(plugin.randomVoice.context.filter.avoidFilters)}
                        disabled={settings.store.includeStates || !settings.store.avoidStates && !settings.store.avoidStates && !settings.store.mute && !settings.store.deafen && !settings.store.video && !settings.store.stream}
                        action={() => {
                            avoidState(!notstate);
                            settings.store.avoidStates = !notstate;
                        }}
                        checked={notstate} />
                </>
            </Menu.MenuItem>

            <Menu.MenuSeparator />

            <Menu.MenuGroup
                label={t(plugin.randomVoice.context.amountLabel)}
            >

                <Menu.MenuControlItem
                    id="min-user"
                    label={t(plugin.randomVoice.context.select.amount)}
                    control={(props, ref) => (
                        <Menu.MenuSliderControl
                            ref={ref}
                            {...props}
                            minValue={1}
                            maxValue={15}
                            value={settings.store.userAmount}
                            onChange={debounce((value: number) => {
                                settings.store.userAmount = Number(value.toFixed(0));
                            }, 50)}
                            renderValue={(value: number) => t(plugin.randomVoice.context.select.userAmount, { amount: value.toFixed(0), s: Number(value.toFixed(0)) === 1 ? "" : "s" })} />
                    )} />

                <Menu.MenuItem
                    id="minParms"
                    label={t(plugin.randomVoice.context.select.parameters)}
                    action={() => { }} >
                    <>
                        <Menu.MenuRadioItem
                            key={"More than"}
                            group="minGroup"
                            id={"More than"}
                            label={t(plugin.randomVoice.context.select.moreThan)}
                            checked={userAmount === "<"}
                            action={() => {
                                setuserAmount("<");
                                settings.store.userAmountOperation = "<";
                            }} />
                        <Menu.MenuRadioItem
                            key={"Less than"}
                            group="minGroup"
                            id={"Less than"}
                            label={t(plugin.randomVoice.context.select.lessThan)}
                            checked={userAmount === ">"}
                            action={() => {
                                setuserAmount(">");
                                settings.store.userAmountOperation = ">";
                            }} />
                        <Menu.MenuRadioItem
                            key={"Equal to"}
                            group="minGroup"
                            id={"Equal to "}
                            label={t(plugin.randomVoice.context.select.equalTo)}
                            checked={userAmount === "=="}
                            action={() => {
                                setuserAmount("==");
                                settings.store.userAmountOperation = "==";
                            }} />
                    </>
                </Menu.MenuItem>

            </Menu.MenuGroup>

            <Menu.MenuSeparator />

            <Menu.MenuGroup
                label={t(plugin.randomVoice.context.spacesLabel)}
            >

                <Menu.MenuControlItem
                    id="max-user"
                    label={t(plugin.randomVoice.context.select.spaces)}
                    control={(props, ref) => (
                        <Menu.MenuSliderControl
                            ref={ref}
                            {...props}
                            minValue={1}
                            maxValue={15}
                            value={settings.store.spacesLeft}
                            onChange={debounce((value: number) => {
                                settings.store.spacesLeft = Number(value.toFixed(0));
                            }, 50)}
                            renderValue={(value: number) => t(plugin.randomVoice.context.select.userAmount, { amount: value.toFixed(0), s: Number(value.toFixed(0)) === 1 ? "" : "s" })} />
                    )} />

                <Menu.MenuItem
                    id="maxGroup"
                    label={t(plugin.randomVoice.context.select.parameters)}
                    action={() => { }} >
                    <>
                        <Menu.MenuRadioItem
                            key={"More than"}
                            group="maxGroup"
                            id={"More than"}
                            label={t(plugin.randomVoice.context.select.moreThan)}
                            checked={spacesLeftOperation === "<"}
                            action={() => {
                                setSpacesLeftOperation("<");
                                settings.store.spacesLeftOperation = "<";
                            }} />
                        <Menu.MenuRadioItem
                            key={"Less than"}
                            group="maxGroup"
                            id={"Less than"}
                            label={t(plugin.randomVoice.context.select.lessThan)}
                            checked={spacesLeftOperation === ">"}
                            action={() => {
                                setSpacesLeftOperation(">");
                                settings.store.spacesLeftOperation = ">";
                            }} />
                        <Menu.MenuRadioItem
                            key={"Equal to"}
                            group="maxGroup"
                            id={"Equal to "}
                            label={t(plugin.randomVoice.context.select.equalTo)}
                            checked={spacesLeftOperation === "=="}
                            action={() => {
                                setSpacesLeftOperation("==");
                                settings.store.spacesLeftOperation = "==";
                            }} />
                    </>
                </Menu.MenuItem>

            </Menu.MenuGroup >

            <Menu.MenuSeparator />

            <Menu.MenuGroup
                label={t(plugin.randomVoice.context.voiceLabel)}
            >

                <Menu.MenuControlItem
                    id="pc-limit"
                    label={t(plugin.randomVoice.context.select.voice)}
                    control={(props, ref) => (
                        <Menu.MenuSliderControl
                            ref={ref}
                            {...props}
                            minValue={1}
                            maxValue={15}
                            value={settings.store.vcLimit}
                            onChange={debounce((value: number) => {
                                settings.store.vcLimit = Number(value.toFixed(0));
                            }, 50)}
                            renderValue={(value: number) => t(plugin.randomVoice.context.select.userAmount, { amount: value.toFixed(0), s: Number(value.toFixed(0)) === 1 ? "" : "s" })} />
                    )} />

                <Menu.MenuItem
                    id="vcParms"
                    label={t(plugin.randomVoice.context.select.parameters)}
                    action={() => { }} >
                    <>
                        <Menu.MenuRadioItem
                            key={"More than"}
                            group="vcGroup"
                            id={"More than"}
                            label={t(plugin.randomVoice.context.select.moreThan)}
                            checked={vcOperation === "<"}
                            action={() => {
                                setVcOperation("<");
                                settings.store.vcLimitOperation = "<";
                            }} />
                        <Menu.MenuRadioItem
                            key={"Less than"}
                            group="vcGroup"
                            id={"Less than"}
                            label={t(plugin.randomVoice.context.select.lessThan)}
                            checked={vcOperation === ">"}
                            action={() => {
                                setVcOperation(">");
                                settings.store.vcLimitOperation = ">";
                            }} />
                        <Menu.MenuRadioItem
                            key={"Equal to"}
                            group="vcGroup"
                            id={"Equal to "}
                            label={t(plugin.randomVoice.context.select.equalTo)}
                            checked={vcOperation === "=="}
                            action={() => {
                                setVcOperation("==");
                                settings.store.vcLimitOperation = "==";
                            }} />
                    </>
                </Menu.MenuItem>

            </Menu.MenuGroup>

            <Menu.MenuSeparator />
            <Menu.MenuGroup
                label={t(plugin.randomVoice.context.selfLabel)}
            >
                <Menu.MenuItem id="voiceOptions" label={t(plugin.randomVoice.context.voice.label)} action={() => { }} >
                    <>
                        <Menu.MenuCheckboxItem
                            key="selfMute"
                            id="selfMute"
                            label={t(plugin.randomVoice.context.voice.auto.mute)}
                            action={() => {
                                setSelfMute(!muteself);
                                settings.store.selfMute = !muteself;
                            }}
                            checked={muteself} />
                        <Menu.MenuCheckboxItem
                            key="selfDeafen"
                            id="selfDeafen"
                            label={t(plugin.randomVoice.context.voice.auto.deafen)}
                            action={() => {
                                setSelfDeafen(!deafenself);
                                settings.store.selfDeafen = !deafenself;
                            }}
                            checked={deafenself} />
                        <Menu.MenuCheckboxItem
                            key="autoCamera"
                            id="autoCamera"
                            label={t(plugin.randomVoice.context.voice.auto.camera)}
                            action={() => {
                                setCamera(!camera);
                                settings.store.autoCamera = !camera;
                            }}
                            checked={camera} />
                        <Menu.MenuCheckboxItem
                            key="autoStream"
                            id="autoStream"
                            label={t(plugin.randomVoice.context.voice.auto.stream)}
                            action={() => {
                                setStream(!stream);
                                settings.store.autoStream = !stream;
                            }}
                            checked={stream} />
                        <Menu.MenuCheckboxItem
                            key="leaveEmpty"
                            id="leaveEmpty"
                            label={t(plugin.randomVoice.context.voice.auto.leaveWhenEmpty)}
                            action={() => {
                                setEmpty(!empty);
                                settings.store.leaveEmpty = !empty;
                            }}
                            checked={empty} />
                    </>
                </Menu.MenuItem>

                <Menu.MenuCheckboxItem
                    key="autonavigate"
                    id="autonavigate"
                    label={t(plugin.randomVoice.context.voice.auto.navigate)}
                    action={() => {
                        setnavigate(!navigate);
                        settings.store.autoNavigate = !navigate;
                    }}
                    checked={navigate} />

                <Menu.MenuCheckboxItem
                    key="avoidStage"
                    id="avoidStage"
                    label={t(plugin.randomVoice.context.voice.auto.stage)}
                    action={() => {
                        setStage(!stage);
                        settings.store.avoidStages = !stage;
                    }}
                    checked={stage} />

                <Menu.MenuCheckboxItem
                    key="avoidAfk"
                    id="avoidAfk"
                    label={t(plugin.randomVoice.context.voice.auto.afk)}
                    action={() => {
                        setAfk(!afk);
                        settings.store.avoidAfk = !afk;
                    }}
                    checked={afk} />

            </Menu.MenuGroup>
        </Menu.Menu>
    );
}

function getChannels() {
    const criteriaChannel: any[] = [];

    Object.values(UserStore.getUsers()).forEach(user => {

        const { channelId, selfDeaf, selfMute, selfStream, selfVideo } = VoiceStateStore.getVoiceStateForUser(user.id) ?? {};
        if (!channelId) return;
        if (criteriaChannel.includes(channelId)) return;

        const channel = ChannelStore.getChannel(channelId);
        if (!channel) return;
        const channelVoiceStates = VoiceStateStore.getVoiceStatesForChannel(channelId);

        if (!settings.store.servers.split("/").includes(channel.getGuildId())) return;
        if (settings.store.avoidStages && channel.isGuildStageVoice()) return;
        const operations = {
            ">": (a, b) => a < b,
            "<": (a, b) => a > b,
            "==": (a, b) => a === b,
        };

        const users = Object.keys(channelVoiceStates).length;

        const VcLimit = channel.userLimit === 0 ? 99 : channel.userLimit;
        const spacesLeft = VcLimit - users;

        if (!operations[settings.store.spacesLeftOperation](spacesLeft, settings.store.spacesLeft)) return;
        if (!operations[settings.store.userAmountOperation](users, settings.store.userAmount)) return;
        if (!operations[settings.store.vcLimitOperation](VcLimit, settings.store.vcLimit)) return;
        if (Object.keys(channelVoiceStates).length === channel?.userLimit) return;
        if (Object.keys(channelVoiceStates).includes(UserStore.getCurrentUser().id)) return;
        if (!PermissionStore.can(CONNECT, channel)) return;
        if (settings.store.avoidAfk && !PermissionStore.can(SPEAK, channel)) return;
        if (settings.store.avoidStates) {
            let lowestMismatchCount = Infinity;
            const channelVoiceStates = VoiceStateStore.getVoiceStatesForChannel(channel.id);
            let mismatchedStates = 0;
            let bestChannelId: string | null = null;
            for (const state of Object.values(channelVoiceStates) as { selfMute?: boolean; selfDeaf?: boolean; selfVideo?: boolean; selfStream?: boolean; }[]) {
                if ((settings.store.deafen && state.selfDeaf) || (!settings.store.deafen && !state.selfDeaf)) mismatchedStates++;
                if ((settings.store.video && !state.selfVideo) || (!settings.store.video && state.selfVideo)) mismatchedStates++;
                if ((settings.store.stream && !state.selfStream) || (!settings.store.stream && state.selfStream)) mismatchedStates++;

                if (!settings.store.deafen) {
                    if ((settings.store.mute && state.selfMute) || (!settings.store.mute && !state.selfMute)) mismatchedStates++;
                }
            }

            if (mismatchedStates < lowestMismatchCount) {
                lowestMismatchCount = mismatchedStates;
                bestChannelId = channel.id;
            }
            if (bestChannelId) {
                criteriaChannel.push(channelId);
            }
        }

        if (settings.store.includeStates && !settings.store.avoidStates) {
            if ((settings.store.deafen && !selfDeaf) || (!settings.store.deafen && selfDeaf)) return;
            if ((settings.store.video && !selfVideo) || (!settings.store.video && selfVideo)) return;
            if ((settings.store.stream && !selfStream) || (!settings.store.stream && selfStream)) return;

            if (!settings.store.deafen)
                if ((settings.store.mute && !selfMute) || (!settings.store.mute && selfMute)) return;

        }

        criteriaChannel.push(channelId);
    });

    if (criteriaChannel.length === 0) {
        Toasts.show({
            message: t(plugin.randomVoice.alert.failed),
            id: "pc-not-found",
            type: Toasts.Type.MESSAGE,
            options: {
                position: Toasts.Position.BOTTOM,
            }
        });
        return;
    }
    const randomIndex = Math.floor(Math.random() * criteriaChannel.length);

    JoinVc(criteriaChannel[randomIndex]);
}

function JoinVc(channelID) {
    const channel = ChannelStore.getChannel(channelID);
    ChannelActions.selectVoiceChannel(channelID);
    if (settings.store.autoNavigate) ChannelRouter.transitionToChannel(channel.id);
    if (settings.store.autoCamera && PermissionStore.can(VIDEO, channel)) autoCamera();
    if (settings.store.autoStream && PermissionStore.can(STREAM, channel)) autoStream();
    if (settings.store.selfMute && !MediaEngineStore.isSelfMute() && SelectedChannelStore.getVoiceChannelId()) VoiceActions.toggleSelfMute();
    if (settings.store.selfDeafen && !MediaEngineStore.isSelfDeaf() && SelectedChannelStore.getVoiceChannelId()) VoiceActions.toggleSelfDeaf();
}

async function autoStream() {
    const mediaEngine = MediaEngineStore.getMediaEngine();
    const selected = SelectedChannelStore.getVoiceChannelId();
    if (!selected) return;
    const channel = ChannelStore.getChannel(selected);
    const sources = await getDesktopSources(mediaEngine, ["screen"], null);
    if (!sources || sources.length === 0) return;
    const source = sources[0];
    if (channel.type === 13 || !PermissionStore.can(PermissionsBits.STREAM, channel)) return;
    startStream(channel.guild_id, selected, {
        "pid": null,
        "sourceId": source.id,
        "sourceName": source.name,
        "audioSourceId": null,
        "sound": true,
        "previewDisabled": false
    });
}

function autoCamera() {
    const checkExist = setInterval(() => {
        const cameraOFF = document.querySelector('[aria-label="Turn off Camera" i]') as HTMLButtonElement;
        if (cameraOFF) clearInterval(checkExist);

        const camera = document.querySelector('[aria-label="Turn on Camera" i]') as HTMLButtonElement;

        if (camera) {
            clearInterval(checkExist);
            camera.click();
        }
    }, 50);
}
