/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2024 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { NavContextMenuPatchCallback } from "@api/ContextMenu";
import ErrorBoundary from "@components/ErrorBoundary";
import { Devs } from "@utils/constants";
import definePlugin from "@utils/types";
import { findByPropsLazy, findComponentByCodeLazy } from "@webpack";
import {
    ChannelRouter,
    ChannelStore,
    FluxDispatcher,
    Menu,
    MessageActions,
    PermissionsBits,
    PermissionStore,
    SelectedChannelStore,
    useEffect,
    UserStore,
    useStateFromStores
} from "@webpack/common";
import { Channel, User } from "discord-types/general";

import { SidebarStore } from "./store";


const HeaderBarIcon = findComponentByCodeLazy(".HEADER_BAR_BADGE_TOP:", '.iconBadge,"top"');
const HeaderBar = findComponentByCodeLazy(".themedMobile]:");
const Chat = findComponentByCodeLazy("filterAfterTimestamp:", "chatInputType");
const Resize = findComponentByCodeLazy("sidebarType:", "homeSidebarWidth");
const ChannelHeader = findComponentByCodeLazy("#{intl::HUB_DIRECTORY_CHANNEL_TITLE}");
const ChatInputTypes = findByPropsLazy("FORM", "NORMAL");
const Sidebars = findByPropsLazy("ThreadSidebar", "MessageRequestSidebar");


interface ContextMenuProps {
    channel: Channel;
    guildId?: string;
    user: User;
}

const ArrowsLeftRightIcon = findComponentByCodeLazy("18.58V3a1");
const XSmallIcon = findComponentByCodeLazy("13.42l5.3");

function MakeContextCallback(name: "user" | "channel"): NavContextMenuPatchCallback {
    return (children, { user, channel, guildId }: ContextMenuProps) => {
        const isUser = name === "user";
        if (isUser && !user) return;
        if (!isUser && (!channel || channel.type === 4)) return;

        if (isUser && user.id === UserStore.getCurrentUser().id) return;
        if (!isUser && (!PermissionStore.can(PermissionsBits.VIEW_CHANNEL, channel) && channel.type !== 3)) return;

        children.push(
            <Menu.MenuItem
                id={`pc-sidebar-chat-${name}`}
                label={"Open Sidebar Chat"}
                action={() => {
                    FluxDispatcher.dispatch({
                        // @ts-ignore
                        type: "NEW_SIDEBAR_CHAT",
                        isUser,
                        guildId: guildId || channel.guild_id,
                        id: isUser ? user.id : channel.id,
                    });
                }}
            />
        );
    };
}

export default definePlugin({
    name: "SidebarChat",
    authors: [Devs.Joona],
    description: "Open a another channel or a DM as a sidebar",
    patches: [
        {
            find: "Missing channel in Channel.openChannelContextMenu",
            replacement: [
                {
                    match: /this\.renderThreadSidebar\(\),/,
                    replace: "$&$self.renderSidebar({width:this.props.width,stockSidebarOpen:this.props.channelSidebarState || this.props.guildSidebarState}),"
                }
            ]
        }
    ],

    contextMenus: {
        "user-context": MakeContextCallback("user"),
        "channel-context": MakeContextCallback("channel"),
        "thread-context": MakeContextCallback("channel"),
        "gdm-context": MakeContextCallback("channel"),
    },

    renderSidebar: ErrorBoundary.wrap(({ width, stockSidebarOpen }: { width: number, stockSidebarOpen: any; }) => {
        const [guild, channel] = useStateFromStores(
            [SidebarStore],
            () => [SidebarStore.guild, SidebarStore.channel]
        );

        useEffect(() => {
            if (channel) {
                MessageActions.fetchMessages({
                    channelId: channel.id,
                    limit: 50,
                });
            }
        }, [channel]);

        if (!channel || stockSidebarOpen) return null;

        return (
            <Resize
                sidebarType={Sidebars.MessageRequestSidebar}
                maxWidth={width - 610}
            >
                <HeaderBar
                    toolbar={
                        <>
                            <HeaderBarIcon
                                icon={() => <ArrowsLeftRightIcon style={{ transform: "rotate(90deg)" }} />}
                                tooltip="Switch channels"
                                onClick={() => {
                                    const currentChannel = ChannelStore.getChannel(SelectedChannelStore.getChannelId());
                                    FluxDispatcher.dispatch({
                                        // @ts-ignore
                                        type: "NEW_SIDEBAR_CHAT",
                                        isUser: currentChannel.id === "1",
                                        guildId: currentChannel?.guild_id,
                                        id: currentChannel.id,
                                    });
                                    ChannelRouter.transitionToChannel(channel.id);
                                }}
                            />
                            <HeaderBarIcon
                                icon={XSmallIcon}
                                tooltip="Close Sidebar Chat"
                                onClick={() => {
                                    FluxDispatcher.dispatch({
                                        // @ts-ignore
                                        type: "CLOSE_SIDEBAR_CHAT",
                                    });
                                }}
                            />
                        </>
                    }
                >
                    <ChannelHeader
                        channel={channel}
                        channelName={channel?.name}
                        guild={guild}
                        parentChannel={ChannelStore.getChannel(channel?.parent_id)}
                    />
                </HeaderBar>
                <Chat
                    channel={channel}
                    guild={guild}
                    chatInputType={ChatInputTypes.SIDEBAR}
                />
            </Resize>
        );
    }),
});
