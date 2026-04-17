/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2026 Vendicated and contributors
 * Copyright (c) 2026 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { findGroupChildrenByChildId, NavContextMenuPatchCallback } from "@api/ContextMenu";
import { plugin, t } from "@api/i18n";
import { definePluginSettings } from "@api/Settings";
import { Message } from "@plexcord/discord-types";
import { PcDevs } from "@utils/constants";
import definePlugin, { IconComponent, OptionType } from "@utils/types";
import { findExportedComponentLazy } from "@webpack";
import { ChannelStore, FluxDispatcher, Menu } from "@webpack/common";

const EyeIconLazy = findExportedComponentLazy("EyeIcon");
const EyeIcon: IconComponent = props => <EyeIconLazy {...props} />;

const hideMessage = (messageId: string, channelId: string) => {
    FluxDispatcher.dispatch({
        type: "MESSAGE_DELETE",
        id: messageId,
        channelId,
        mlDeleted: true,
    });
};

const messageCtxPatch: NavContextMenuPatchCallback = (children, { message }: { message: Message; }) => {
    const group = findGroupChildrenByChildId("copy-text", children);
    if (!group) return;

    group.splice(group.findIndex(c => c?.props?.id === "copy-text") + 1, 0, (
        <Menu.MenuItem
            id="pc-hidemessages"
            label={t(plugin.hideMessages.button.hide)}
            icon={EyeIcon}
            action={() => hideMessage(message.id, message.channel_id)}
        />
    ));
};

const settings = definePluginSettings({
    hidePopoverButton: {
        label: () => t(plugin.hideMessages.option.hidePopoverButton.label),
        description: () => t(plugin.hideMessages.option.hidePopoverButton.description),
        type: OptionType.BOOLEAN,
        default: false
    }
});

export default definePlugin({
    name: "HideMessages",
    description: () => t(plugin.hideMessages.description),
    authors: [PcDevs.yash],
    tags: ["privacy", "chat", "utility"],
    contextMenus: {
        "message": messageCtxPatch
    },
    settings,
    messagePopoverButton: {
        icon: EyeIcon,
        render(message: Message) {
            if (settings.store.hidePopoverButton) return null;
            return {
                label: t(plugin.hideMessages.button.hide),
                icon: EyeIcon,
                message,
                channel: ChannelStore.getChannel(message.channel_id),
                onClick: () => hideMessage(message.id, message.channel_id)
            };
        }
    }
});
