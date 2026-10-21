/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2026 Vendicated and contributors
 * Copyright (c) 2026 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { plugin, t } from "@api/i18n";
import { definePluginSettings } from "@api/Settings";
import { OptionType } from "@utils/types";

export const panelRegistry = {
    guildBar: {
        id: "guildBar",
        classId: "guild-bar",
        label: t(plugin.collapsibleUI.text.guildBar),
        collapsedKey: "guildBarCollapsed",
    },
    channelList: {
        id: "channelList",
        classId: "channel-list",
        label: t(plugin.collapsibleUI.text.channelList),
        collapsedKey: "channelListCollapsed",
    },
    membersList: {
        id: "membersList",
        classId: "members-list",
        label: t(plugin.collapsibleUI.text.membersList),
        collapsedKey: "membersListCollapsed",
    },
    chatButtons: {
        id: "chatButtons",
        classId: "chat-buttons",
        label: t(plugin.collapsibleUI.text.messageButtons),
        collapsedKey: "chatButtonsCollapsed",
    },
    titleBar: {
        id: "titleBar",
        classId: "title-bar",
        label: t(plugin.collapsibleUI.text.titleBar),
        collapsedKey: "titleBarCollapsed",
    },
    headerBar: {
        id: "headerBar",
        classId: "header-bar",
        label: t(plugin.collapsibleUI.text.headerBar),
        collapsedKey: "headerBarCollapsed",
    },
    userArea: {
        id: "userArea",
        classId: "user-area",
        label: t(plugin.collapsibleUI.text.userArea),
        collapsedKey: "userAreaCollapsed",
    },
} as const;

export type PanelId = keyof typeof panelRegistry;

export const toolbarPanelOrder = ["guildBar", "channelList", "membersList", "chatButtons", "titleBar", "headerBar", "userArea"] as const satisfies readonly PanelId[];

export const collapseSettingKeys = toolbarPanelOrder.map(panelId => panelRegistry[panelId].collapsedKey);

type CollapseSettingChangeHandler = (panelId: PanelId, collapsed: boolean) => void;
type UserAreaDetachSettingChangeHandler = () => void;

let collapseSettingChangeHandler: CollapseSettingChangeHandler | undefined;
let userAreaDetachSettingChangeHandler: UserAreaDetachSettingChangeHandler | undefined;

export function setCollapseSettingChangeHandler(handler: CollapseSettingChangeHandler | undefined) {
    collapseSettingChangeHandler = handler;
}

export function setUserAreaDetachSettingChangeHandler(handler: UserAreaDetachSettingChangeHandler | undefined) {
    userAreaDetachSettingChangeHandler = handler;
}

function onCollapseSettingChanged(panelId: PanelId) {
    return (collapsed: boolean) => collapseSettingChangeHandler?.(panelId, collapsed);
}

export const settings = definePluginSettings({
    detachUserArea: {
        label: () => t(plugin.collapsibleUI.option.detachUserArea.label),
        type: OptionType.BOOLEAN,
        description: () => t(plugin.collapsibleUI.option.detachUserArea.description),
        default: false,
        onChange: () => userAreaDetachSettingChangeHandler?.(),
    },
    detachedUserAreaX: {
        label: () => t(plugin.collapsibleUI.option.detachedUserAreaX.label),
        type: OptionType.NUMBER,
        description: () => t(plugin.collapsibleUI.option.detachedUserAreaX.description),
        default: -1,
        hidden: true,
        onChange: () => userAreaDetachSettingChangeHandler?.(),
    },
    detachedUserAreaY: {
        label: () => t(plugin.collapsibleUI.option.detachedUserAreaY.label),
        type: OptionType.NUMBER,
        description: () => t(plugin.collapsibleUI.option.detachedUserAreaY.description),
        default: -1,
        hidden: true,
        onChange: () => userAreaDetachSettingChangeHandler?.(),
    },
    guildBarCollapsed: {
        label: () => t(plugin.collapsibleUI.option.guildBarCollapsed.label),
        type: OptionType.BOOLEAN,
        description: () => t(plugin.collapsibleUI.option.guildBarCollapsed.description),
        default: false,
        hidden: true,
        onChange: onCollapseSettingChanged("guildBar"),
    },
    channelListCollapsed: {
        label: () => t(plugin.collapsibleUI.option.channelListCollapsed.label),
        type: OptionType.BOOLEAN,
        description: () => t(plugin.collapsibleUI.option.channelListCollapsed.description),
        default: false,
        hidden: true,
        onChange: onCollapseSettingChanged("channelList"),
    },
    membersListCollapsed: {
        label: () => t(plugin.collapsibleUI.option.membersListCollapsed.label),
        type: OptionType.BOOLEAN,
        description: () => t(plugin.collapsibleUI.option.membersListCollapsed.description),
        default: false,
        hidden: true,
        onChange: onCollapseSettingChanged("membersList"),
    },
    chatButtonsCollapsed: {
        label: () => t(plugin.collapsibleUI.option.chatButtonsCollapsed.label),
        type: OptionType.BOOLEAN,
        description: () => t(plugin.collapsibleUI.option.chatButtonsCollapsed.description),
        default: false,
        hidden: true,
        onChange: onCollapseSettingChanged("chatButtons"),
    },
    titleBarCollapsed: {
        label: () => t(plugin.collapsibleUI.option.titleBarCollapsed.label),
        type: OptionType.BOOLEAN,
        description: () => t(plugin.collapsibleUI.option.titleBarCollapsed.description),
        default: false,
        hidden: true,
        onChange: onCollapseSettingChanged("titleBar"),
    },
    headerBarCollapsed: {
        label: () => t(plugin.collapsibleUI.option.headerBarCollapsed.label),
        type: OptionType.BOOLEAN,
        description: () => t(plugin.collapsibleUI.option.headerBarCollapsed.description),
        default: false,
        hidden: true,
        onChange: onCollapseSettingChanged("headerBar"),
    },
    userAreaCollapsed: {
        label: () => t(plugin.collapsibleUI.option.userAreaCollapsed.label),
        type: OptionType.BOOLEAN,
        description: () => t(plugin.collapsibleUI.option.userAreaCollapsed.description),
        default: false,
        hidden: true,
        onChange: onCollapseSettingChanged("userArea"),
    },
});
