/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2022 Vendicated and contributors
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

import "./styles.css";

import { findGroupChildrenByChildId, NavContextMenuPatchCallback } from "@api/ContextMenu";
import { plugin, t } from "@api/i18n";
import { definePluginSettings } from "@api/Settings";
import { CopyIcon, DeleteIcon, HistoryIcon, PencilIcon, PlusIcon } from "@components/Icons";
import { CustomEmoji, FluxStore, Guild, GuildSticker, Message, Sticker, StickerItem } from "@plexcord/discord-types";
import { EmojiIntention, StickerFormatType, StickerType } from "@plexcord/discord-types/enums";
import { Devs } from "@utils/constants";
import { confirmAction } from "@utils/discord";
import { Logger } from "@utils/Logger";
import { removeFromArray } from "@utils/misc";
import definePlugin, { OptionType } from "@utils/types";
import { findStoreLazy } from "@webpack";
import { Constants, EmojiStore, GuildStore, Menu, PermissionsBits, PermissionStore, React, RestAPI, SelectedGuildStore, showToast, StickersStore, UserSettingsActionCreators } from "@webpack/common";

import { buildCloneEmojiItem, editEmoji, EmojiURLRegex, openEmojiUploadModal, resolveEmojiName } from "./emojis";
import { buildCloneStickerItem, buildStickerLinkItems, editSticker } from "./stickers";

const StickersPersistedStore = findStoreLazy("StickersPersistedStore") as FluxStore & { stickerFrecencyWithoutFetchingLatest: { frequently: Sticker[]; }; };

let emojiIntention: EmojiIntention;

export const logger = new Logger("ExpressionManager");

export const settings = definePluginSettings({
    editAndDelete: {
        type: OptionType.BOOLEAN,
        label: () => t(plugin.expressionManager.option.editAndDelete.label),
        description: () => t(plugin.expressionManager.option.editAndDelete.description),
        default: true
    },
    stickerCopyAndOpen: {
        type: OptionType.BOOLEAN,
        label: () => t(plugin.expressionManager.option.stickerCopyAndOpen.label),
        description: () => t(plugin.expressionManager.option.stickerCopyAndOpen.description),
        default: true
    },
    recents: {
        type: OptionType.BOOLEAN,
        label: () => t(plugin.expressionManager.option.recents.label),
        description: () => t(plugin.expressionManager.option.recents.description),
        default: true
    }
});

export function buildCloneItem(label: string, action: () => void) {
    return (
        <Menu.MenuItem
            id="pc-em-clone"
            key="pc-em-clone"
            label={label}
            leadingAccessory={{ type: "icon", icon: PlusIcon }}
            action={action}
        />
    );
}

function buildManageExpressionItems(id: string, type: string) {
    if (!settings.store.editAndDelete) return null;

    let guild: Guild | undefined;
    let expression: GuildSticker | CustomEmoji;

    if (type === "emoji") {
        expression = EmojiStore.getCustomEmojiById(id)!;
        if (!expression) return null;

        guild = GuildStore.getGuild(expression.guildId);
    } else {
        const sticker = StickersStore.getStickerById(id);
        if (sticker?.type !== StickerType.GUILD) return null;

        expression = sticker;
        guild = GuildStore.getGuild(sticker.guild_id);
    }

    if (!guild || !PermissionStore.can(PermissionsBits.MANAGE_GUILD_EXPRESSIONS, guild)) return null;

    const isEmoji = type === "emoji";

    return (
        <>
            <Menu.MenuItem
                key="pc-em-edit"
                id="pc-em-edit"
                label={isEmoji ? t(plugin.expressionManager.context.editEmoji) : t(plugin.expressionManager.context.editSticker)}
                leadingAccessory={{ type: "icon", icon: PencilIcon }}
                action={() => {
                    if (type === "sticker") {
                        editSticker(expression as GuildSticker, guild.id);
                    } else {
                        editEmoji(expression, guild.id);
                    }
                }}
            />
            <Menu.MenuItem
                key="pc-em-delete"
                id="pc-em-delete"
                label={isEmoji ? t(plugin.expressionManager.context.deleteEmoji) : t(plugin.expressionManager.context.deleteSticker)}
                leadingAccessory={{ type: "icon", icon: DeleteIcon }}
                color="danger"
                action={() => {
                    confirmAction({
                        title: t(plugin.expressionManager.modal.deleteTitle, { name: expression.name }),
                        subtitle: isEmoji ? t(plugin.expressionManager.modal.deleteEmoji) : t(plugin.expressionManager.modal.deleteSticker),
                        confirmText: t(plugin.expressionManager.modal.deleteConfirm),
                        async onConfirm() {
                            const url = isEmoji
                                ? Constants.Endpoints.GUILD_EMOJI(guild.id, id)
                                : Constants.Endpoints.GUILD_STICKER(guild.id, id);

                            await RestAPI.del(url).then(
                                () => showToast({ text: isEmoji ? t(plugin.expressionManager.toast.emojiDeleted) : t(plugin.expressionManager.toast.stickerDeleted), variant: "success" }),
                                () => showToast({ text: isEmoji ? t(plugin.expressionManager.toast.emojiDeleteFailed) : t(plugin.expressionManager.toast.stickerDeleteFailed), variant: "critical" })
                            );
                        }
                    });
                }}
            />
        </>
    );
}

function buildRemoveFrecentItem({ type, id, name }: Record<"type" | "id" | "name", string | undefined>) {
    if (!settings.store.recents)
        return;

    const isReaction = emojiIntention === EmojiIntention.REACTION;
    let expressionKey: string | undefined;

    switch (type) {
        case "emoji": {
            if (emojiIntention == null) return;

            const ctx = EmojiStore.getDisambiguatedEmojiContext(SelectedGuildStore.getGuildId());
            const frecents = isReaction
                ? ctx.getFrequentlyUsedReactionEmojisWithoutFetchingLatest()
                : ctx.getFrequentlyUsedEmojisWithoutFetchingLatest();

            if (frecents.some(e => id ? e.id === id : e.name === name))
                expressionKey = id ?? name!;

            break;
        }
        case "sticker": {
            const frecents = StickersPersistedStore.stickerFrecencyWithoutFetchingLatest.frequently;

            if (id && frecents.some(e => e.id === id))
                expressionKey = id;

            break;
        }
    }

    if (!expressionKey)
        return;

    const collectionKey = type === "emoji"
        ? isReaction
            ? "emojiReactionFrecency"
            : "emojiFrecency"
        : "stickerFrecency";
    const itemsKey = `${type}s`;

    return (
        <Menu.MenuItem
            id="pc-em-remove-frecent"
            key="pc-em-remove-frecent"
            label={t(plugin.expressionManager.context.removeFromRecents)}
            leadingAccessory={{ type: "icon", icon: HistoryIcon }}
            action={async e => {
                const onConfirm = () => {
                    UserSettingsActionCreators.FrecencyUserSettingsActionCreators.updateAsync(
                        collectionKey,
                        e => delete e[itemsKey][expressionKey],
                        0 // INFREQUENT_USER_ACTION
                    );
                };

                // The confirm modal closes the reaction popup, so skip confirmation
                const confirmed = e.shiftKey || isReaction ||
                    await confirmAction({
                        title: t(plugin.expressionManager.context.removeFromRecents),
                        subtitle: type === "emoji" ? t(plugin.expressionManager.modal.recentsEmoji) : t(plugin.expressionManager.modal.recentsSticker),
                        confirmText: t(plugin.expressionManager.modal.recentsConfirm)
                    });

                if (confirmed) onConfirm();
            }}
        />
    );
}

const patchExpressionPickerMenu: NavContextMenuPatchCallback = (children, props: { target: HTMLElement; }) => {
    const { id, name, type, formatType } = props?.target?.dataset ?? {};

    const removeFrecentItem = buildRemoveFrecentItem({ type, id, name });

    if (removeFrecentItem) {
        const group = findGroupChildrenByChildId("favorite", children) ?? findGroupChildrenByChildId("unfavorite", children);
        group?.splice(1, 0, removeFrecentItem);
    }

    if (!id) {
        // Discord adds "Copy Emoji" to default emojis. But they're stupid and forgot to add an icon for it which looks jarring
        const group = findGroupChildrenByChildId("copy", children);
        if (!group) return;

        const idx = group.findIndex(item => item?.props?.id === "copy");
        if (idx !== -1)
            group[idx] = React.cloneElement(group[idx]!, { leadingAccessory: { type: "icon", icon: CopyIcon } });

        return;
    }

    if (type === "emoji" && name) {
        children.push(
            <Menu.MenuGroup key="pc-em-group">
                {buildCloneEmojiItem({ id, name })}
                {buildManageExpressionItems(id, type)}
            </Menu.MenuGroup>
        );

        return;
    }

    if (type === "sticker" && !props.target.className?.includes("lottieCanvas")) {
        const sticker: StickerItem = {
            id,
            format_type: Number(formatType),
            name: name!
        };

        if (settings.store.stickerCopyAndOpen) {
            const oldCopyLinkParent = findGroupChildrenByChildId("copy-image-link", children);
            if (oldCopyLinkParent) removeFromArray(oldCopyLinkParent, c => c?.props?.id === "copy-image-link");

            children.push(buildStickerLinkItems(sticker));
        }

        children.push(
            <Menu.MenuGroup key="pc-em-manage">
                {buildCloneStickerItem(sticker)}
                {buildManageExpressionItems(id, type)}
            </Menu.MenuGroup>
        );
    }
};

const patchMessageContextMenu: NavContextMenuPatchCallback = (children, props: Record<"favoriteableId" | "itemHref" | "itemSrc" | "favoriteableType", string> & { message: Message; mediaItem?: any; }) => {
    const { favoriteableId, mediaItem, favoriteableType } = props ?? {};
    const { message } = props.message.messageSnapshots?.[0] ?? props;

    switch (favoriteableType) {
        case "emoji": {
            const name = resolveEmojiName(favoriteableId, message);
            if (!name) return;

            const favContainer = findGroupChildrenByChildId("favorite", children);
            const container = favContainer ?? findGroupChildrenByChildId("copy-native-link", children);

            container?.unshift(
                buildCloneEmojiItem({ id: favoriteableId, name }),
                !favContainer ? <Menu.MenuSeparator key="pc-em-emoji-separator" /> : null,
            );
            break;
        }
        case "sticker": {
            const sticker = message.stickerItems.find(s => s.id === favoriteableId);
            if (!sticker || sticker.format_type === StickerFormatType.LOTTIE) return;

            const favoriteContainer = findGroupChildrenByChildId("favorite", children);

            const cloneItem = buildCloneStickerItem(sticker);

            if (favoriteContainer) {
                favoriteContainer.unshift(cloneItem);

                if (settings.store.stickerCopyAndOpen)
                    favoriteContainer.push(
                        <Menu.MenuSeparator key="pc-em-sticker-links-separator" />,
                        buildStickerLinkItems(sticker, React.Fragment),
                    );
            } else {
                children.splice(-1, 0,
                    <Menu.MenuGroup key="pc-em-clone-sticker-group">{cloneItem}</Menu.MenuGroup>,
                    buildStickerLinkItems(sticker)
                );
            }

            break;
        }
    }

    if (mediaItem?.contentType?.startsWith("image/")) {
        findGroupChildrenByChildId("save-image", children)?.push(
            <Menu.MenuItem
                key="pc-em-upload-as-emoji"
                id="pc-em-upload-as-emoji"
                label={t(plugin.expressionManager.context.uploadAsEmoji)}
                leadingAccessory={{ type: "icon", icon: PlusIcon }}
                action={() => openEmojiUploadModal(mediaItem.url)}
            />
        );
    }
};

const patchImageContextMenu: NavContextMenuPatchCallback = (children, { target, src }: { target?: HTMLImageElement; src?: string; }) => {
    const id = src?.match(EmojiURLRegex)?.[1];
    if (!id) return;

    const name = target?.alt || EmojiStore.getCustomEmojiById(id)?.name || "Emoji";
    children.push(buildCloneEmojiItem({ id, name }));
};

const patchForumTagContextMenu: NavContextMenuPatchCallback = (children, { tag }: { tag: Record<"emojiId" | "emojiName", string>; }) => {
    const { emojiId, emojiName } = tag;
    if (!emojiId) return;

    const name = EmojiStore.getCustomEmojiById(emojiId)?.name || emojiName || "emoji";
    children.push(buildCloneEmojiItem({ id: emojiId, name }));
};

export default definePlugin({
    name: "ExpressionManager",
    description: () => t(plugin.expressionManager.description),
    tags: ["emotes", "servers", "utility"],
    searchTerms: ["StickerCloner", "ExpressionCloner", "EmoteCloner", "EmojiCloner"],
    authors: [Devs.Ven, Devs.Nuckyz, Devs.scattagain, Devs.sadan],

    settings,

    patches: [
        {
            find: '"emoji-picker-categories"',
            replacement: {
                match: /return.{0,30}?value:\i,children:\i(?<=intention:(\i),.{0,400}?)/,
                replace: "$self.intention=$1;$&"
            }
        }
    ],

    set intention(value: EmojiIntention) {
        emojiIntention = value;
    },

    contextMenus: {
        "message": patchMessageContextMenu,
        "expression-picker": patchExpressionPickerMenu,
        "forum-tag": patchForumTagContextMenu,
        // status emojis
        "image-context": patchImageContextMenu,
    }
});
