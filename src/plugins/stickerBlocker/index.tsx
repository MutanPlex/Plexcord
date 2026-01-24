/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2024 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { findGroupChildrenByChildId, NavContextMenuPatchCallback } from "@api/ContextMenu";
import * as DataStore from "@api/DataStore";
import { plugin, t } from "@api/i18n";
import { definePluginSettings } from "@api/Settings";
import { Button } from "@components/Button";
import ErrorBoundary from "@components/ErrorBoundary";
import { Devs } from "@utils/constants";
import { classes } from "@utils/misc";
import definePlugin, { OptionType } from "@utils/types";
import { findCssClassesLazy } from "@webpack";
import { Menu } from "@webpack/common";
import React, { ReactNode } from "react";

const CodeContainerClasses = findCssClassesLazy("markup", "codeContainer");
const MessageContentClasses = findCssClassesLazy("messageContent", "messageContentTrailingIcon");

const settings = definePluginSettings({
    showGif: {
        label: () => t(plugin.stickerBlocker.option.showGif.label),
        description: () => t(plugin.stickerBlocker.option.showGif.description),
        type: OptionType.BOOLEAN,
        default: true,
        restartNeeded: true
    },
    showMessage: {
        label: () => t(plugin.stickerBlocker.option.showMessage.label),
        description: () => t(plugin.stickerBlocker.option.showMessage.description),
        type: OptionType.BOOLEAN,
        default: false,
        restartNeeded: true
    },
    showButton: {
        label: () => t(plugin.stickerBlocker.option.showButton.label),
        description: () => t(plugin.stickerBlocker.option.showButton.description),
        type: OptionType.BOOLEAN,
        default: true,
        restartNeeded: true
    },
    blockedStickers: {
        label: () => t(plugin.stickerBlocker.option.blockedStickers.label),
        description: () => t(plugin.stickerBlocker.option.blockedStickers.description),
        type: OptionType.STRING,
        default: ""
    }
});

function blockedComponentRender(sticker) {
    const { showGif, showMessage, showButton } = settings.store;
    const elements = [] as ReactNode[];

    if (showGif) {
        elements.push(
            <img key="gif" src="https://cdn.nest.rip/uploads/1af96132-86da-4482-b64d-204634d4ddf2.gif" style={{ width: "160px", borderRadius: "20px" }} />
        );
    }

    if (showMessage) {
        elements.push(
            <div key="message" id="pc-blocked-sticker" className={classes(CodeContainerClasses.markup, MessageContentClasses.messageContent)}><span>{t(plugin.stickerBlocker.modal.blocked, { id: sticker.id, name: sticker.name })}</span></div>
        );
    }

    if (showButton) {
        elements.push(
            <Button key="button" onClick={() => toggleBlock(sticker.id)} variant="dangerPrimary">{t(plugin.stickerBlocker.modal.unblock, { name: (showMessage) ? "" : sticker.name })}</Button>
        );
    }

    return <>{elements}</>;
}

const messageContextMenuPatch: NavContextMenuPatchCallback = (children, props) => {
    const { favoriteableId, favoriteableType } = props ?? {};

    if (!favoriteableId) return;

    const menuItem = (() => {
        switch (favoriteableType) {
            case "sticker":
                const sticker = props.message.stickerItems.find(s => s.id === favoriteableId);
                if (sticker?.format_type === 3 /* LOTTIE */) return;

                return buildMenuItem(favoriteableId);
        }
    })();

    if (menuItem)
        findGroupChildrenByChildId("copy-link", children)?.push(menuItem);
};

const expressionPickerPatch: NavContextMenuPatchCallback = (children, props: { target: HTMLElement; }) => {
    const { id, type } = props?.target?.dataset ?? {};
    if (!id) return;

    if (type === "sticker" && !props.target.className?.includes("lottieCanvas")) {
        children.push(buildMenuItem(id));
    }
};

function buildMenuItem(name) {
    return (
        <Menu.MenuItem
            id="add-sticker-block"
            key="add-sticker-block"
            label={(isStickerBlocked(name)) ? t(plugin.stickerBlocker.context.unblockSticker) : t(plugin.stickerBlocker.context.blockSticker)}
            action={() => toggleBlock(name)}
        />
    );
}

function toggleBlock(name) {
    if (settings.store.blockedStickers === undefined || settings.store.blockedStickers == null) {
        return;
    }
    const excepted = isStickerBlocked(name);
    if (excepted) {
        settings.store.blockedStickers = settings.store.blockedStickers.split(", ").filter(item => item !== name).join(", ");
    } else {
        settings.store.blockedStickers = settings.store.blockedStickers.split(", ").concat(name).join(", ");
    }
}

function isStickerBlocked(name) {
    if (settings.store.blockedStickers === undefined || settings.store.blockedStickers == null) {
        return;
    }
    return settings.store.blockedStickers.split(", ").includes(name);
}

export default definePlugin({
    name: "StickerBlocker",
    description: () => t(plugin.stickerBlocker.description),
    authors: [Devs.Samwich],

    patches: [
        {
            find: /\i\.\i\.STICKER_MESSAGE/,
            replacement: {
                match: /}\),\(null!=\i\?\i:(\i)\)\.name]}\);/,
                replace: "$& if($self.isBlocked($1.id)) return($self.blockedComponent($1));"
            }
        }
    ],
    contextMenus: {
        "message": messageContextMenuPatch,
        "expression-picker": expressionPickerPatch,
    },
    start() {
        DataStore.createStore("StickerBlocker", "data");
    },
    isBlocked(stickerId) {
        if (settings.store.blockedStickers.split(", ").includes(stickerId)) {
            return true;
        }

        return false;
    },
    blockedComponent: ErrorBoundary.wrap(blockedComponentRender, { fallback: () => <p style={{ color: "red" }}>Failed to render :(</p> }),
    settings,
});
