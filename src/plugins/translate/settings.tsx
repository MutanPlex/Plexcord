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

import { plugin, t } from "@api/i18n";
import { definePluginSettings } from "@api/Settings";
import { Button } from "@components/Button";
import { OptionType } from "@utils/types";

import { openTranslateModal } from "./TranslateModal";

export const settings = definePluginSettings({
    receivedInput: {
        label: () => t(plugin.translate.option.receivedInput.label),
        description: () => t(plugin.translate.option.receivedInput.description),
        type: OptionType.STRING,
        default: "auto",
        hidden: true
    },
    receivedOutput: {
        label: () => t(plugin.translate.option.receivedOutput.label),
        description: () => t(plugin.translate.option.receivedOutput.description),
        type: OptionType.STRING,
        default: "en",
        hidden: true
    },
    sentInput: {
        label: () => t(plugin.translate.option.sentInput.label),
        description: () => t(plugin.translate.option.sentInput.description),
        type: OptionType.STRING,
        default: "auto",
        hidden: true
    },
    sentOutput: {
        label: () => t(plugin.translate.option.sentOutput.label),
        description: () => t(plugin.translate.option.sentOutput.description),
        type: OptionType.STRING,
        default: "en",
        hidden: true
    },
    service: {
        label: () => t(plugin.translate.option.service.label),
        description: () => IS_WEB
            ? t(plugin.translate.option.service.descriptionWeb)
            : t(plugin.translate.option.service.description),
        type: OptionType.SELECT,
        hidden: IS_WEB,
        options: [
            { label: () => t(plugin.translate.option.service.google), value: "google", default: true },
            { label: () => t(plugin.translate.option.service.deepl), value: "deepl" },
            { label: () => t(plugin.translate.option.service.deeplPro), value: "deepl-pro" },
            { label: () => t(plugin.translate.option.service.kagi), value: "kagi" }
        ] as const,
        onChange: resetLanguageDefaults
    },
    deeplApiKey: {
        label: () => t(plugin.translate.option.deeplApiKey.label),
        description: () => t(plugin.translate.option.deeplApiKey.description),
        type: OptionType.STRING,
        default: ""
    },
    kagiSession: {
        label: () => t(plugin.translate.option.kagiSession.label),
        description: () => t(plugin.translate.option.kagiSession.description),
        type: OptionType.STRING,
        default: ""
    },
    autoTranslate: {
        label: () => t(plugin.translate.option.autoTranslate.label),
        description: () => t(plugin.translate.option.autoTranslate.description),
        type: OptionType.BOOLEAN,
        default: false
    },
    showAutoTranslateTooltip: {
        label: () => t(plugin.translate.option.showAutoTranslateTooltip.label),
        description: () => t(plugin.translate.option.showAutoTranslateTooltip.description),
        type: OptionType.BOOLEAN,
        default: true
    },
    manageTranslateSettings: {
        type: OptionType.COMPONENT,
        component: () => (
            <Button onClick={openTranslateModal}>
                {t(plugin.translate.button.manageLanguages)}
            </Button>
        )
    }
}, {
    deeplApiKey: {
        hidden() { return this.store.service !== "deepl" && this.store.service !== "deepl-pro"; }
    },
    kagiSession: {
        hidden() { return this.store.service !== "kagi"; }
    }
}).withPrivateSettings<{
    dismissedAutoTranslateAlert?: boolean;
}>();

export function resetLanguageDefaults() {
    if (IS_WEB || settings.store.service === "google" || settings.store.service === "kagi") {
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
