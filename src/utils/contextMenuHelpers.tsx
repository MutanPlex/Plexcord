/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { Menu } from "@webpack/common";
import { JSX } from "react";

/**
 * Adds a menu item to a shared group. If the group doesn't exist, creates it.
 * @param children - The context menu children array
 * @param groupKey - Unique key for the menu group
 * @param menuItem - The menu item to add
 */
export function addToMenuGroup(children: any[], groupKey: string, menuItem: JSX.Element): void {
    const groupIndex = children.findIndex(
        (child: any) => child?.key === groupKey
    );

    if (groupIndex !== -1) {
        const group = children[groupIndex];
        if (group?.props?.children && Array.isArray(group.props.children)) {
            group.props.children.push(menuItem);
        }
    } else {
        children.splice(-1, 0, (
            <Menu.MenuGroup key={groupKey}>
                {menuItem}
            </Menu.MenuGroup>
        ));
    }
}

export const MenuGroups = {
    STATUS_NOTIFICATIONS: "status-notifications-group",
} as const;

export function addToStatusGroup(children: any[], menuItem: JSX.Element): void {
    addToMenuGroup(children, MenuGroups.STATUS_NOTIFICATIONS, menuItem);
}
