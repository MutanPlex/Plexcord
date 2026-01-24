/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2024 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { findGroupChildrenByChildId, NavContextMenuPatchCallback } from "@api/ContextMenu";
import { plugin, t } from "@api/i18n";
import { disableStyle, enableStyle } from "@api/Styles";
import { PaintbrushIcon } from "@components/Icons";
import { PcDevs } from "@utils/constants";
import { closeModal, openModal } from "@utils/modal";
import definePlugin from "@utils/types";
import { extractAndLoadChunksLazy, findCssClassesLazy, findStoreLazy } from "@webpack";
import { ChannelStore, DraftType, FluxDispatcher, Menu, SelectedChannelStore, UploadHandler } from "@webpack/common";

import RemixModal from "./RemixModal";
import css from "./styles.css?managed";

const OptionClasses = findCssClassesLazy("optionName", "optionIcon", "optionLabel");

const requireCreateStickerModal = extractAndLoadChunksLazy([".CREATE_STICKER_MODAL,", "isDisplayingIndividualStickers"]);
const requireSettingsMenu = extractAndLoadChunksLazy(['name:"UserSettings"'], /createPromise:.{0,20}(\i\.\i\("?.+?"?\).*?).then\(\i\.bind\(\i,"?(.+?)"?\)\).{0,50}"UserSettings"/);
const PendingReplyStore = findStoreLazy("PendingReplyStore");
const validMediaTypes = ["image/png", "image/jpeg", "image/jpg", "image/webp"];

const UploadContextMenuPatch: NavContextMenuPatchCallback = (children, props) => {
    if (children.find(c => c?.props?.id === "pc-remix")) return;

    children.push(<Menu.MenuItem
        id="pc-remix"
        label={
            <div className={OptionClasses.optionLabel}>
                <PaintbrushIcon className={OptionClasses.optionIcon} height={24} width={24} />
                <div className={OptionClasses.optionName}>{t(plugin.remix.label)}</div>
            </div>
        }
        action={() => {
            const key = openModal(props =>
                <RemixModal modalProps={props} close={() => closeModal(key)} />
            );
        }}
    />);
};

const MessageContextMenuPatch: NavContextMenuPatchCallback = (children, props) => {
    const url = props.itemHref ?? props.itemSrc;
    if (!url) return;
    if (props.attachment && !validMediaTypes.includes(props.attachment.content_type)) return;

    const group = findGroupChildrenByChildId("copy-text", children);
    if (!group) return;
    if (group.find(c => c?.props?.id === "pc-remix")) return;

    const index = group.findIndex(c => c?.props?.id === "copy-text");

    group.splice(index + 1, 0, <Menu.MenuItem
        id="pc-remix"
        label={t(plugin.remix.label)}
        icon={PaintbrushIcon}
        action={() => {
            const key = openModal(modalProps =>
                <RemixModal modalProps={modalProps} close={() => closeModal(key)} url={url} />
            );
        }}
    />);
};

export function sendRemix(blob: Blob) {
    const currentChannelId = SelectedChannelStore.getChannelId();
    const channel = ChannelStore.getChannel(currentChannelId);
    const reply = PendingReplyStore.getPendingReply(currentChannelId);
    if (reply) FluxDispatcher.dispatch({ type: "DELETE_PENDING_REPLY", currentChannelId });

    const file = new File([blob], "remix.png", { type: "image/png" });
    UploadHandler.promptToUpload([file], channel, DraftType.ChannelMessage);
}

export default definePlugin({
    name: "Remix",
    description: () => t(plugin.remix.description),
    authors: [PcDevs.MrDiamond, PcDevs.meowabyte],

    contextMenus: {
        "channel-attach": UploadContextMenuPatch,
        "message": MessageContextMenuPatch,
    },

    async start() {

        await requireCreateStickerModal();
        await requireSettingsMenu();

        enableStyle(css);
    },

    stop() {
        disableStyle(css);
    },
});
