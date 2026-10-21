/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2023 Vendicated and contributors
 * Copyright (c) 2026 MutanPlex
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
*/

import "./style.css";

import { findGroupChildrenByChildId, NavContextMenuPatchCallback } from "@api/ContextMenu";
import { plugin, t } from "@api/i18n";
import { Devs, PcDevs } from "@utils/constants";
import definePlugin from "@utils/types";
import { ChannelStore, Menu } from "@webpack/common";

import { settings } from "./settings";
import { Accessory, handleTranslate } from "./utils/accessory";
import { Icon } from "./utils/icon";

const messageCtxPatch: NavContextMenuPatchCallback = (children, { message }) => {
    if (!message.content) return;

    const group = findGroupChildrenByChildId("copy-text", children);
    if (!group) return;

    group.splice(group.findIndex(c => c?.props?.id === "copy-text") + 1, 0, (
        <Menu.MenuItem
            id="ec-trans"
            label={t(plugin.translatePlus.text.translate)}
            icon={Icon}
            leadingAccessory={{ type: "icon", icon: Icon }}
            action={() => handleTranslate(message)}
        />
    ));
};

export default definePlugin({
    name: "Translate+",
    description: () => t(plugin.translatePlus.description),
    dependencies: ["MessageAccessoriesAPI", "MessagePopoverAPI"],
    tags: ["chat", "utility"],
    authors: [Devs.Ven, PcDevs.Prince527, PcDevs.MutanPlex],
    settings,
    contextMenus: {
        "message": messageCtxPatch
    },
    renderMessageAccessory: props => <Accessory message={props.message} />,
    messagePopoverButton: {
        icon: Icon,
        render(message) {
            if (!message.content) return null;
            return {
                label: t(plugin.translatePlus.text.translate),
                icon: Icon,
                message: message,
                channel: ChannelStore.getChannel(message.channel_id),
                onClick: () => handleTranslate(message),
            };
        }
    }
});
