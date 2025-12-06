/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2024 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { plugin, t } from "@api/i18n";
import { definePluginSettings } from "@api/Settings";
import { Devs } from "@utils/constants";
import { copyWithToast } from "@utils/discord";
import definePlugin, { OptionType } from "@utils/types";
import { findByPropsLazy } from "@webpack";
import { Menu } from "@webpack/common";

const { convertNameToSurrogate } = findByPropsLazy("convertNameToSurrogate");

interface Emoji {
    type: string;
    id: string;
    name: string;
}

interface Target {
    dataset: Emoji;
    firstChild: HTMLImageElement;
}

function getEmojiMarkdown(target: Target, copyUnicode: boolean): string {
    const { id: emojiId, name: emojiName } = target.dataset;

    if (!emojiId) {
        return copyUnicode
            ? convertNameToSurrogate(emojiName)
            : `:${emojiName}:`;
    }

    const url = new URL(target.firstChild.src);
    const hasParam = url.searchParams.get("animated") === "true";
    const isGif = url.pathname.endsWith(".gif");

    return `<${(hasParam || isGif) ? "a" : ""}:${emojiName.replace(/~\d+$/, "")}:${emojiId}>`;
}

const settings = definePluginSettings({
    copyUnicode: {
        label: () => t(plugin.copyEmojiMarkdown.option.copyUnicode.label),
        description: () => t(plugin.copyEmojiMarkdown.option.copyUnicode.description),
        type: OptionType.BOOLEAN,
        default: true,
    },
});

export default definePlugin({
    name: "CopyEmojiMarkdown",
    description: () => t(plugin.copyEmojiMarkdown.description),
    authors: [Devs.HappyEnderman, Devs.Vishnya],
    settings,

    contextMenus: {
        "expression-picker"(children, { target }: { target: Target; }) {
            if (target.dataset.type !== "emoji") return;

            children.push(
                <Menu.MenuItem
                    id="pc-copy-emoji-markdown"
                    label={t(plugin.copyEmojiMarkdown.context.copy)}
                    action={() => {
                        copyWithToast(
                            getEmojiMarkdown(target, settings.store.copyUnicode),
                            t(plugin.copyEmojiMarkdown.toast.success)
                        );
                    }}
                />
            );
        },
    },
});
