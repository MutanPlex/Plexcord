/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2023 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { t } from "@api/i18n";
import { definePluginSettings } from "@api/Settings";
import type { Channel, Emoji } from "@plexcord/discord-types";
import { Devs } from "@utils/constants";
import definePlugin, { OptionType } from "@utils/types";

const settings = definePluginSettings({
    shownEmojis: {
        get label() {
            return t("plugin.noServerEmojis.option.shownEmojis.label");
        },
        get description() {
            return t("plugin.noServerEmojis.option.shownEmojis.description");
        },
        type: OptionType.SELECT,
        default: "onlyUnicode",
        get options() {
            return [
                { label: t("plugin.noServerEmojis.option.shownEmojis.onlyUnicode"), value: "onlyUnicode" },
                { label: t("plugin.noServerEmojis.option.shownEmojis.currentServer"), value: "currentServer" },
                { label: t("plugin.noServerEmojis.option.shownEmojis.all"), value: "all" }
            ];
        }
    }
});

export default definePlugin({
    name: "NoServerEmojis",
    authors: [Devs.UlyssesZhan],
    description: "Do not show server emojis in the autocomplete menu.",
    settings,

    get displayDescription() {
        return t("plugin.noServerEmojis.description");
    },

    patches: [
        {
            find: "}searchWithoutFetchingLatest(",
            replacement: {
                match: /\.nameMatchesChain\(\i\)\.reduce\(\((\i),(\i)\)=>\{(?<=channel:(\i).+?)/,
                replace: "$&if($self.shouldSkip($3,$2))return $1;"
            }
        }
    ],
    shouldSkip(channel: Channel | undefined | null, emoji: Emoji) {
        if (emoji.type !== 1) {
            return false;
        }
        if (settings.store.shownEmojis === "onlyUnicode") {
            return true;
        }
        if (settings.store.shownEmojis === "currentServer") {
            return emoji.guildId !== (channel != null ? channel.getGuildId() : null);
        }
        return false;
    }
});
