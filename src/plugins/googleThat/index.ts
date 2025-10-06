/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2024 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { ApplicationCommandOptionType, findOption } from "@api/Commands";
import { t } from "@api/i18n";
import { definePluginSettings } from "@api/Settings";
import { Devs, PcDevs } from "@utils/constants";
import definePlugin, { OptionType } from "@utils/types";

function getMessage(opts) {
    const inputOption = findOption(opts, "input", "");

    let queryURL = "" + searchEngines[settings.store.defaultEngine] + encodeURIComponent(inputOption);

    if (settings.store.customEngineURL) {
        queryURL = "" + [settings.store.customEngineURL] + encodeURIComponent(inputOption);
    }

    if (settings.store.hyperlink) {
        return `[${inputOption}](${queryURL})`;
    }
    else {
        return queryURL;
    }
}

const searchEngines = {
    "Google": "https://www.google.com/search?q=",
    "Bing": "https://www.bing.com/search?q=",
    "Yahoo": "https://search.yahoo.com/search?p=",
    "DuckDuckGo": "https://duckduckgo.com/?q=",
    "Baidu": "https://www.baidu.com/s?wd=",
    "Yandex": "https://yandex.com/search/?text=",
    "Ecosia": "https://www.ecosia.org/search?q=",
    "Ask": "https://www.ask.com/web?q=",
    "AOL": "https://search.aol.com/aol/search?q=",
    "LetMeGoogleThatForYou": "https://letmegooglethat.com/?q="
};

const settings = definePluginSettings({
    hyperlink: {
        get label() {
            return t("plugin.googleThat.option.hyperlink.label");
        },
        get description() {
            return t("plugin.googleThat.option.hyperlink.description");
        },
        type: OptionType.BOOLEAN,
        default: false
    },
    defaultEngine: {
        get label() {
            return t("plugin.googleThat.option.defaultEngine.label");
        },
        get description() {
            return t("plugin.googleThat.option.defaultEngine.description");
        },
        type: OptionType.SELECT,
        options: Object.keys(searchEngines).map((key, index) => ({
            label: key,
            value: key,
            default: index === 0
        }))
    },
    customEngineURL: {
        get label() {
            return t("plugin.googleThat.option.customEngineURL.label");
        },
        get description() {
            return t("plugin.googleThat.option.customEngineURL.description");
        },
        type: OptionType.STRING,
        placeholder: "https://search.vmohammad.dev/?q="
    }
});

export default definePlugin({
    name: "GoogleThat",
    description: "Adds a command to send a internet search link",
    authors: [Devs.Samwich, PcDevs.KrystalSkull, PcDevs.MutanPlex],
    tags: ["search", "google", "query", "duckduckgo", "command"],
    settings,

    get displayDescription() {
        return t("plugin.googleThat.description");
    },

    commands: [
        {
            name: "googlethat",
            description: "Send a search engine link",
            get displayDescription() {
                return t("plugin.googleThat.command.googleThat.description");
            },
            options: [
                {
                    name: "input",
                    description: "The search query",
                    get displayDescription() {
                        return t("plugin.googleThat.command.googleThat.query");
                    },
                    type: ApplicationCommandOptionType.STRING,
                    required: true,
                }
            ],
            execute: opts => ({
                content: getMessage(opts)
            }),
        }
    ]
});
