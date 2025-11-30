/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2023 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
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

import { t } from "@api/i18n";
import { definePluginSettings } from "@api/Settings";
import { OptionType } from "@utils/types";

export const settings = definePluginSettings({
    receivedInput: {
        get label() {
            return t("plugin.translate.option.receivedInput.label");
        },
        get description() {
            return t("plugin.translate.option.receivedInput.description");
        },
        type: OptionType.STRING,
        default: "auto",
        hidden: true
    },
    receivedOutput: {
        get label() {
            return t("plugin.translate.option.receivedOutput.label");
        },
        get description() {
            return t("plugin.translate.option.receivedOutput.description");
        },
        type: OptionType.STRING,
        default: "en",
        hidden: true
    },
    sentInput: {
        get label() {
            return t("plugin.translate.option.sentInput.label");
        },
        get description() {
            return t("plugin.translate.option.sentInput.description");
        },
        type: OptionType.STRING,
        default: "auto",
        hidden: true
    },
    sentOutput: {
        get label() {
            return t("plugin.translate.option.sentOutput.label");
        },
        get description() {
            return t("plugin.translate.option.sentOutput.description");
        },
        type: OptionType.STRING,
        default: "en",
        hidden: true
    },
    showChatBarButton: {
        get label() {
            return t("plugin.translate.option.showChatBarButton.label");
        },
        get description() {
            return t("plugin.translate.option.showChatBarButton.description");
        },
        type: OptionType.BOOLEAN,
        default: true
    },
    service: {
        get label() {
            return t("plugin.translate.option.service.label");
        },
        get description() {
            return IS_WEB
                ? t("plugin.translate.option.service.descriptionWeb")
                : t("plugin.translate.option.service.description");
        },
        type: OptionType.SELECT,
        disabled: () => IS_WEB,
        get options() {
            return [
                { label: t("plugin.translate.option.service.google"), value: "google", default: true },
                { label: t("plugin.translate.option.service.deepl"), value: "deepl" },
                { label: t("plugin.translate.option.service.deeplPro"), value: "deepl-pro" }
            ] as const;
        },
        onChange: resetLanguageDefaults
    },
    deeplApiKey: {
        get label() {
            return t("plugin.translate.option.deeplApiKey.label");
        },
        get description() {
            return t("plugin.translate.option.deeplApiKey.description");
        },
        type: OptionType.STRING,
        default: "",
        get placeholder() {
            return t("plugin.translate.option.deeplApiKey.placeholder");
        },
        disabled: () => IS_WEB
    },
    autoTranslate: {
        get label() {
            return t("plugin.translate.option.autoTranslate.label");
        },
        get description() {
            return t("plugin.translate.option.autoTranslate.description");
        },
        type: OptionType.BOOLEAN,
        default: false
    },
    showAutoTranslateTooltip: {
        get label() {
            return t("plugin.translate.option.showAutoTranslateTooltip.label");
        },
        get description() {
            return t("plugin.translate.option.showAutoTranslateTooltip.description");
        },
        type: OptionType.BOOLEAN,
        default: true
    }
}).withPrivateSettings<{
    showAutoTranslateAlert: boolean;
}>();

export function resetLanguageDefaults() {
    if (IS_WEB || settings.store.service === "google") {
        settings.store.receivedInput = "auto";
        settings.store.receivedOutput = "en";
        settings.store.sentInput = "auto";
        settings.store.sentOutput = "en";
    } else {
        settings.store.receivedInput = "";
        settings.store.receivedOutput = "en-us";
        settings.store.sentInput = "";
        settings.store.sentOutput = "en-us";
    }
}
