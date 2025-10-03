/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2024 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { NavContextMenuPatchCallback } from "@api/ContextMenu";
import { t, useForceUpdateOnLocaleChange } from "@api/i18n";
import { definePluginSettings, useSettings } from "@api/Settings";
import type { Channel, User, VoiceState } from "@plexcord/discord-types";
import { Devs, PcDevs } from "@utils/constants";
import { classes } from "@utils/misc";
import definePlugin, { OptionType } from "@utils/types";
import { findByPropsLazy, findComponentByCodeLazy } from "@webpack";
import {
    ChannelStore,
    Menu,
    PermissionsBits,
    PermissionStore,
    React,
    SelectedChannelStore,
    Toasts,
    UserStore,
    VoiceStateStore
} from "@webpack/common";
import type { PropsWithChildren } from "react";

const HeaderBarIcon = findComponentByCodeLazy(".HEADER_BAR_BADGE_TOP:", '.iconBadge,"top"');

interface BaseIconProps {
    viewBox: string;
    className?: string;
    height?: string | number;
    width?: string | number;
}

interface IconProps {
    className?: string;
    height?: string | number;
    width?: string | number;
}

function Icon({ height = 24, width = 24, className, children, viewBox }: PropsWithChildren<BaseIconProps>) {
    return (
        <svg
            className={classes(className, "pc-icon")}
            role="img"
            width={width}
            height={height}
            viewBox={viewBox}
        >
            {children}
        </svg>
    );
}

function FollowIcon(props: IconProps) {
    return (
        <Icon
            {...props}
            className={classes(props.className, "pc-follow-icon")}
            viewBox="0 -960 960 960"
        >
            <path
                fill="currentColor"
                d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Zm0-108q96-86 158-147.5t98-107q36-45.5 50-81t14-70.5q0-60-40-100t-100-40q-47 0-87 26.5T518-680h-76q-15-41-55-67.5T300-774q-60 0-100 40t-40 100q0 35 14 70.5t50 81q36 45.5 98 107T480-228Zm0-273Z"
            />
        </Icon>
    );
}

function UnfollowIcon(props: IconProps) {
    return (
        <Icon
            {...props}
            className={classes(props.className, "pc-unfollow-icon")}
            viewBox="0 -960 960 960"
        >
            <path
                fill="currentColor"
                d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Z"
            />
        </Icon>
    );
}

export const settings = definePluginSettings({
    executeOnFollow: {
        get label() {
            return t("plugin.followUser.option.executeOnFollow.label");
        },
        get description() {
            return t("plugin.followUser.option.executeOnFollow.description");
        },
        type: OptionType.BOOLEAN,
        restartNeeded: false,
        default: true
    },
    onlyManualTrigger: {
        get label() {
            return t("plugin.followUser.option.onlyManualTrigger.label");
        },
        get description() {
            return t("plugin.followUser.option.onlyManualTrigger.description");
        },
        type: OptionType.BOOLEAN,
        restartNeeded: false,
        default: false
    },
    followLeave: {
        get label() {
            return t("plugin.followUser.option.followLeave.label");
        },
        get description() {
            return t("plugin.followUser.option.followLeave.description");
        },
        type: OptionType.BOOLEAN,
        restartNeeded: false,
        default: false
    },
    autoMoveBack: {
        get label() {
            return t("plugin.followUser.option.autoMoveBack.label");
        },
        get description() {
            return t("plugin.followUser.option.autoMoveBack.description");
        },
        type: OptionType.BOOLEAN,
        restartNeeded: false,
        default: false
    },
    followUserId: {
        get label() {
            return t("plugin.followUser.option.followUserId.label");
        },
        get description() {
            return t("plugin.followUser.option.followUserId.description");
        },
        type: OptionType.STRING,
        restartNeeded: false,
        hidden: true, // Managed via context menu and indicator
        default: "",
    },
    channelFull: {
        get label() {
            return t("plugin.followUser.option.channelFull.label");
        },
        get description() {
            return t("plugin.followUser.option.channelFull.description");
        },
        type: OptionType.BOOLEAN,
        restartNeeded: false,
        default: true,
    }
});

const ChannelActions: {
    disconnect: () => void;
    selectVoiceChannel: (channelId: string) => void;
} = findByPropsLazy("disconnect", "selectVoiceChannel");

const CONNECT = 1n << 20n;

interface VoiceStateEntry {
    [guildIdOrMe: string]: VoiceStateMember;
}

interface VoiceStateMember {
    [userId: string]: VoiceState;
}

function getChannelId(userId: string) {
    if (!userId) {
        return null;
    }
    try {
        const states = VoiceStateStore.getAllVoiceStates() as VoiceStateEntry;
        for (const users of Object.values(states)) {
            if (users[userId]) {
                return users[userId].channelId ?? null;
            }
        }
    } catch (e) { }
    return null;
}

function triggerFollow(userChannelId: string | null = getChannelId(settings.store.followUserId)) {
    if (settings.store.followUserId) {
        const myChanId = SelectedChannelStore.getVoiceChannelId();
        if (userChannelId) {
            // join when not already in the same channel
            if (userChannelId !== myChanId) {
                const channel = ChannelStore.getChannel(userChannelId);
                const voiceStates = VoiceStateStore.getVoiceStatesForChannel(userChannelId) as VoiceStateMember;
                const memberCount = voiceStates ? Object.keys(voiceStates).length : null;
                if (channel.type === 1 || PermissionStore.can(CONNECT, channel)) {
                    if (channel.userLimit !== 0 && memberCount !== null && memberCount >= channel.userLimit && !PermissionStore.can(PermissionsBits.MOVE_MEMBERS, channel)) {
                        Toasts.show({
                            message: t("plugin.followUser.toast.channelFull"),
                            id: Toasts.genId(),
                            type: Toasts.Type.FAILURE
                        });
                        return;
                    }
                    ChannelActions.selectVoiceChannel(userChannelId);
                    Toasts.show({
                        message: t("plugin.followUser.toast.newVc"),
                        id: Toasts.genId(),
                        type: Toasts.Type.SUCCESS
                    });
                } else {
                    Toasts.show({
                        message: t("plugin.followUser.toast.insufficientPermissions"),
                        id: Toasts.genId(),
                        type: Toasts.Type.FAILURE
                    });
                }
            } else {
                Toasts.show({
                    message: t("plugin.followUser.toast.sameVc"),
                    id: Toasts.genId(),
                    type: Toasts.Type.FAILURE
                });
            }
        } else if (myChanId) {
            // if not in a voice channel and the setting is on disconnect
            if (settings.store.followLeave) {
                ChannelActions.disconnect();
                Toasts.show({
                    message: t("plugin.followUser.toast.disconnect"),
                    id: Toasts.genId(),
                    type: Toasts.Type.SUCCESS
                });
            } else {
                Toasts.show({
                    message: t("plugin.followUser.toast.notFollowing"),
                    id: Toasts.genId(),
                    type: Toasts.Type.FAILURE
                });
            }
        } else {
            Toasts.show({
                message: t("plugin.followUser.toast.notVc"),
                id: Toasts.genId(),
                type: Toasts.Type.FAILURE
            });
        }
    }
}

function toggleFollow(userId: string) {
    if (settings.store.followUserId === userId) {
        settings.store.followUserId = "";
    } else {
        settings.store.followUserId = userId;
        if (settings.store.executeOnFollow) {
            triggerFollow();
        }
    }
}

interface UserContextProps {
    channel: Channel;
    guildId?: string;
    user: User;
}

const UserContext: NavContextMenuPatchCallback = (children, { user }: UserContextProps) => {
    if (!user || user.id === UserStore.getCurrentUser().id) return;
    const isFollowed = settings.store.followUserId === user.id;
    const label = isFollowed ? t("plugin.followUser.context.unfollow") : t("plugin.followUser.context.follow");
    const icon = isFollowed ? UnfollowIcon : FollowIcon;

    children.splice(-1, 0, (
        <Menu.MenuGroup>
            <Menu.MenuItem
                id="follow-user"
                label={label}
                action={() => toggleFollow(user.id)}
                icon={icon}
            />
        </Menu.MenuGroup>
    ));
};

export default definePlugin({
    name: "FollowUser",
    description: "Adds a follow option in the user context menu to always be in the same VC as them",
    authors: [Devs.D3SOX, PcDevs.MutanPlex],

    get displayDescription() {
        return t("plugin.followUser.description");
    },

    settings,

    patches: [
        {
            find: '?"BACK_FORWARD_NAVIGATION":',
            replacement: {
                match: /focusSectionProps:"HELP".{0,20},className:(\i(?:\.button)?)\}\),/,
                replace: "$& $self.FollowIndicator(),"
            }
        }
    ],

    contextMenus: {
        "user-context": UserContext
    },

    flux: {
        VOICE_STATE_UPDATES({ voiceStates }: { voiceStates: VoiceState[]; }) {
            if (settings.store.onlyManualTrigger || !settings.store.followUserId) {
                return;
            }
            for (const state of voiceStates) {
                const { userId, channelId } = state;
                const oldChannelId = ("oldChannelId" in state ? state.oldChannelId : undefined) as string | undefined;
                if (channelId !== oldChannelId) {
                    const isMe = userId === UserStore.getCurrentUser().id;
                    // move back if the setting is on and you were moved
                    if (settings.store.autoMoveBack && isMe && channelId && oldChannelId) {
                        triggerFollow();
                        continue;
                    }

                    // if you're not in the channel of the followed user and it is no longer full, join
                    if (settings.store.channelFull && !isMe && !channelId && oldChannelId && oldChannelId !== SelectedChannelStore.getVoiceChannelId()) {
                        const channel = ChannelStore.getChannel(oldChannelId);
                        const channelVoiceStates = VoiceStateStore.getVoiceStatesForChannel(oldChannelId) as VoiceStateMember;
                        const memberCount = channelVoiceStates ? Object.keys(channelVoiceStates).length : null;
                        if (channel.userLimit !== 0 && memberCount !== null && memberCount === (channel.userLimit - 1) && !PermissionStore.can(PermissionsBits.MOVE_MEMBERS, channel)) {
                            const users = Object.values(channelVoiceStates).map(x => x.userId);
                            if (users.includes(settings.store.followUserId)) {
                                triggerFollow(oldChannelId);
                                continue;
                            }
                        }
                    }

                    const isFollowed = settings.store.followUserId === userId;
                    if (!isFollowed) {
                        continue;
                    }

                    if (channelId) {
                        // move or join new channel -> also join
                        triggerFollow(channelId);
                    } else if (oldChannelId) {
                        // leave -> disconnect
                        triggerFollow(null);
                    }
                }
            }
        },
    },

    FollowIndicator() {
        const { plugins: { FollowUser: { followUserId } } } = useSettings(["plugins.FollowUser.followUserId"]);
        useForceUpdateOnLocaleChange();
        if (followUserId) {
            const followedUser = UserStore.getUser(followUserId);
            const username = followedUser?.username || t("plugin.followUser.unknownUser");
            return (
                <HeaderBarIcon
                    tooltip={t("plugin.followUser.indicatorTooltip", { user: username })}
                    icon={UnfollowIcon}
                    onClick={() => {
                        triggerFollow();
                    }}
                    onContextMenu={() => {
                        settings.store.followUserId = "";
                    }}
                />
            );
        }

        return null;
    },
});
