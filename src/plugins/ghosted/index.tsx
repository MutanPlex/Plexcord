/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2025 Vendicated and contributors
 * Copyright (c) 2026 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import "./styles.css";

import { findGroupChildrenByChildId } from "@api/ContextMenu";
import { plugin, t } from "@api/i18n";
import { addServerListElement, removeServerListElement, ServerListRenderPosition } from "@api/ServerList";
import { definePluginSettings } from "@api/Settings";
import ErrorBoundary from "@components/ErrorBoundary";
import { Channel } from "@plexcord/discord-types";
import { Devs, PcDevs } from "@utils/constants";
import { classNameFactory } from "@utils/css";
import { closeModal, openModal } from "@utils/modal";
import definePlugin, { OptionType } from "@utils/types";
import { Menu, Tooltip, useEffect, useState } from "@webpack/common";

import { Boo, clearChannelFromGhost, getBooCount, getGhostedChannels, onBooCountChange } from "./Boo";
import { getChannelDisplayName, GhostedUsersModal } from "./GhostedUsersModal";
import { IconGhost } from "./IconGhost";

export const cl = classNameFactory("pc-boo-");

export const settings = definePluginSettings({
    showIndicator: {
        label: () => t(plugin.ghosted.option.showIndicator.label),
        description: () => t(plugin.ghosted.option.showIndicator.description),
        type: OptionType.BOOLEAN,
        default: true,
        restartNeeded: false
    },
    showDmIcons: {
        label: () => t(plugin.ghosted.option.showDmIcons.label),
        description: () => t(plugin.ghosted.option.showDmIcons.description),
        type: OptionType.BOOLEAN,
        default: true,
        restartNeeded: false
    },
    ignoreGroupDms: {
        label: () => t(plugin.ghosted.option.ignoreGroupDms.label),
        description: () => t(plugin.ghosted.option.ignoreGroupDms.description),
        type: OptionType.BOOLEAN,
        default: false
    },
    exemptedChannels: {
        label: () => t(plugin.ghosted.option.exemptedChannels.label),
        description: () => t(plugin.ghosted.option.exemptedChannels.description),
        type: OptionType.STRING,
        default: "",
        restartNeeded: false
    },
    ignoreBots: {
        label: () => t(plugin.ghosted.option.ignoreBots.label),
        description: () => t(plugin.ghosted.option.ignoreBots.description),
        type: OptionType.BOOLEAN,
        default: true,
        restartNeeded: false
    },
    maxInactiveTimeMs: {
        label: () => t(plugin.ghosted.option.maxInactiveTimeMs.label),
        description: () => t(plugin.ghosted.option.maxInactiveTimeMs.description),
        type: OptionType.SELECT,
        options: [
            { label: () => t(plugin.ghosted.option.maxInactiveTimeMs.no), value: 0, default: true },
            { label: () => t(plugin.ghosted.option.maxInactiveTimeMs.oneHour), value: 60 * 60 * 1000 },
            { label: () => t(plugin.ghosted.option.maxInactiveTimeMs.oneDay), value: 24 * 60 * 60 * 1000 },
            { label: () => t(plugin.ghosted.option.maxInactiveTimeMs.oneWeek), value: 7 * 24 * 60 * 60 * 1000 },
            { label: () => t(plugin.ghosted.option.maxInactiveTimeMs.oneMonth), value: 30 * 24 * 60 * 60 * 1000 },
        ],
        restartNeeded: false
    }
});

function BooIndicator() {
    const [count, setCount] = useState(getBooCount());
    const [showJumpscare, setShowJumpscare] = useState(false);

    useEffect(() => {
        const unsubscribe = onBooCountChange(newCount => {
            setCount(newCount);
        });

        return () => {
            unsubscribe();
        };
    }, []);

    if (!settings.store.showIndicator && !showJumpscare) return null;

    const handleClick = () => {
        const ghostedChannels = getGhostedChannels();
        const modalKey = openModal(modalProps => (
            <ErrorBoundary>
                <GhostedUsersModal
                    modalProps={modalProps}
                    ghostedChannels={ghostedChannels}
                    onClose={() => closeModal(modalKey)}
                    onClearGhost={clearChannelFromGhost}
                />
            </ErrorBoundary>
        ));
    };

    const getTooltipText = () => {
        const ghostedChannels = getGhostedChannels();
        if (ghostedChannels.length === 0) {
            return t(plugin.ghosted.modal.no);
        }
        if (ghostedChannels.length <= 5) {
            return ghostedChannels
                .map(id => getChannelDisplayName(id))
                .join(", ");
        }
        return `${ghostedChannels.length} ${t(plugin.ghosted.modal.title)}`;
    };

    return (
        <>
            {settings.store.showIndicator && getGhostedChannels().length > 0 && (
                <div id={cl("container")}>
                    <Tooltip text={getTooltipText()} position="right">
                        {({ onMouseEnter, onMouseLeave }) => (
                            <div
                                id={cl("container")}
                                className={cl("clickable")}
                                onMouseEnter={onMouseEnter}
                                onMouseLeave={onMouseLeave}
                                onClick={handleClick}
                            >
                                {count} <IconGhost fill="currentColor" />
                            </div>
                        )}
                    </Tooltip>
                </div>
            )}
        </>
    );
}

function makeContextItem(props) {
    return <Menu.MenuItem
        id="pc-ghosted-clear"
        key="pc-ghosted-clear"
        label={t(plugin.ghosted.modal.unghost)}
        action={() => {
            clearChannelFromGhost(props.channel.id);
        }}
    />;
}

export default definePlugin({
    name: "Ghosted",
    description: () => t(plugin.ghosted.description),
    authors: [PcDevs.vei, Devs.sadan, PcDevs.justjxke, PcDevs.iamme, PcDevs.MutanPlex],
    settings,
    dependencies: ["AudioPlayerAPI", "ServerListAPI"],
    contextMenus: {
        "gdm-context": (menuItems, props) => {
            const group = findGroupChildrenByChildId("leave", menuItems, true);
            group?.unshift(makeContextItem(props));
        },
        "user-context": (menuItems, props) => {
            const group = findGroupChildrenByChildId("close-dm", menuItems);
            group?.push(makeContextItem(props));
        }
    },

    patches: [
        {
            find: "PrivateChannel.renderAvatar",
            replacement: {
                match: /\]:\i\|\|\i.{0,50}children:\[/,
                replace: "$&$self.renderBoo(arguments[0]),"
            }
        },
    ],

    renderBoo(props: { channel: Channel; }) {
        return (
            <ErrorBoundary noop>
                <Boo {...props} />
            </ErrorBoundary>
        );
    },

    renderIndicator() {
        return (
            <ErrorBoundary noop>
                <BooIndicator />
            </ErrorBoundary>
        );
    },

    start() {
        addServerListElement(ServerListRenderPosition.Above, this.renderIndicator);
    },

    stop() {
        removeServerListElement(ServerListRenderPosition.Above, this.renderIndicator);
    },
});
