/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2024 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { findGroupChildrenByChildId, NavContextMenuPatchCallback } from "@api/ContextMenu";
import { plugin, t } from "@api/i18n";
import { addChannelToCategory, canMoveChannelInDirection, currentUserCategories, isPinned, moveChannel, removeChannelFromCategory } from "@plugins/pinDms/data";
import { PinOrder, settings } from "@plugins/pinDms/index";
import { Menu } from "@webpack/common";

import { openCategoryModal } from "./CreateCategoryModal";

function createPinMenuItem(channelId: string) {
    const pinned = isPinned(channelId);

    return (
        <Menu.MenuItem
            id="pin-dm"
            label={t(plugin.pinDMs.context.pin.label)}
        >

            {!pinned && (
                <>
                    <Menu.MenuItem
                        id="pc-add-category"
                        label={t(plugin.pinDMs.context.pin.addCategory)}
                        color="brand"
                        action={() => openCategoryModal(null, channelId)}
                    />
                    <Menu.MenuSeparator />

                    {
                        currentUserCategories.map(category => (
                            <Menu.MenuItem
                                key={category.id}
                                id={`pin-category-${category.id}`}
                                label={category.name}
                                action={() => addChannelToCategory(channelId, category.id)}
                            />
                        ))
                    }
                </>
            )}

            {pinned && (
                <>
                    <Menu.MenuItem
                        id="unpin-dm"
                        label={t(plugin.pinDMs.context.unPin.label)}
                        color="danger"
                        action={() => removeChannelFromCategory(channelId)}
                    />

                    <Menu.MenuItem
                        id="move-to-category"
                        label={t(plugin.pinDMs.context.unPin.move)}
                    >
                        {
                            currentUserCategories
                                .filter(category => category.channels.includes(channelId) === false)
                                .map(category => (
                                    <Menu.MenuItem
                                        key={category.id}
                                        id={`move-to-category-${category.id}`}
                                        label={category.name}
                                        action={() => {
                                            removeChannelFromCategory(channelId);
                                            addChannelToCategory(channelId, category.id);
                                        }}
                                    />
                                ))
                        }
                        <Menu.MenuSeparator />
                        <Menu.MenuItem
                            id="pc-add-category-move"
                            label={t(plugin.pinDMs.context.pin.addCategory)}
                            color="brand"
                            action={() => openCategoryModal(null, channelId)}
                        />
                    </Menu.MenuItem>

                    {
                        settings.store.pinOrder === PinOrder.Custom && canMoveChannelInDirection(channelId, -1) && (
                            <Menu.MenuItem
                                id="move-up"
                                label={t(plugin.pinDMs.context.category.up)}
                                action={() => moveChannel(channelId, -1)}
                            />
                        )
                    }

                    {
                        settings.store.pinOrder === PinOrder.Custom && canMoveChannelInDirection(channelId, 1) && (
                            <Menu.MenuItem
                                id="move-down"
                                label={t(plugin.pinDMs.context.category.down)}
                                action={() => moveChannel(channelId, 1)}
                            />
                        )
                    }
                </>
            )}

        </Menu.MenuItem>
    );
}

const GroupDMContext: NavContextMenuPatchCallback = (children, props) => {
    const container = findGroupChildrenByChildId("leave-channel", children);
    container?.unshift(createPinMenuItem(props.channel.id));
};

const UserContext: NavContextMenuPatchCallback = (children, props) => {
    const container = findGroupChildrenByChildId("close-dm", children);
    if (container) {
        const idx = container.findIndex(c => c?.props?.id === "close-dm");
        container.splice(idx, 0, createPinMenuItem(props.channel.id));
    }
};

export const contextMenus = {
    "gdm-context": GroupDMContext,
    "user-context": UserContext
};
