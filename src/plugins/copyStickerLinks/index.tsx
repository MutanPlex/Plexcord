/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2025 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { findGroupChildrenByChildId, NavContextMenuPatchCallback } from "@api/ContextMenu";
import { t } from "@api/i18n";
import { Message, Sticker } from "@plexcord/discord-types";
import { Devs, PcDevs } from "@utils/constants";
import { copyWithToast } from "@utils/misc";
import definePlugin from "@utils/types";
import { Menu, React, StickersStore } from "@webpack/common";
import ExpressionClonerPlugin from "plugins/expressionCloner";

const StickerExt = [, "png", "png", "json", "gif"] as const;

type PartialSticker = Pick<Sticker, "id" | "format_type">;

function getUrl(data: PartialSticker): string {
    if (data.format_type === 4)
        return `https:${window.GLOBAL_ENV.MEDIA_PROXY_ENDPOINT}/stickers/${data.id}.gif?size=512&lossless=true`;

    return `https://${window.GLOBAL_ENV.CDN_HOST}/stickers/${data.id}.${StickerExt[data.format_type]}?size=512&lossless=true`;
}

function buildMenuItem(sticker: PartialSticker, addBottomSeparator: boolean) {
    return (
        <>
            <Menu.MenuGroup>
                <Menu.MenuItem
                    id="pc-copy-sticker-link"
                    key="pc-copy-sticker-link"
                    label={t("plugin.copyStickerLinks.context.copy")}
                    action={() => copyWithToast(getUrl(sticker), t("plugin.copyStickerLinks.toast.success"))}
                />

                <Menu.MenuItem
                    id="pc-open-sticker-link"
                    key="pc-open-sticker-link"
                    label={t("plugin.copyStickerLinks.context.open")}
                    action={() => PlexcordNative.native.openExternal(getUrl(sticker))}
                />
            </Menu.MenuGroup>
            {addBottomSeparator && <Menu.MenuSeparator />}
        </>
    );
}

const messageContextMenuPatch: NavContextMenuPatchCallback = (
    children,
    { favoriteableId, favoriteableType, message }: { favoriteableId: string; favoriteableType: string; message: Message; }
) => {
    if (!favoriteableId || favoriteableType !== "sticker") return;

    const sticker = message.stickerItems.find(s => s.id === favoriteableId);
    if (!sticker?.format_type) return;

    const idx = children.findIndex(c => Array.isArray(c) && findGroupChildrenByChildId("pc-copy-sticker-url", c) != null);

    children.splice(idx, 0, buildMenuItem(sticker, idx !== -1));
};

const expressionPickerPatch: NavContextMenuPatchCallback = (children, props: { target: HTMLElement; }) => {
    const id = props?.target?.dataset?.id;
    if (!id) return;
    if (props.target.className?.includes("lottieCanvas")) return;

    const sticker = StickersStore.getStickerById(id);
    if (sticker) {
        children.push(buildMenuItem(sticker, Plexcord.Plugins.isPluginEnabled(ExpressionClonerPlugin.name)));
    }
};

export default definePlugin({
    name: "CopyStickerLinks",
    description: "Adds the ability to copy & open Sticker links",
    authors: [Devs.Ven, PcDevs.Byeoon],

    get displayDescription() {
        return t("plugin.copyStickerLinks.description");
    },

    contextMenus: {
        "message": messageContextMenuPatch,
        "expression-picker": expressionPickerPatch
    }
});
