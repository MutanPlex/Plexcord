/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2026 Vendicated and contributors
 * Copyright (c) 2026 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { plugin, t } from "@api/i18n";
import { definePluginSettings } from "@api/Settings";
import { makeRange, OptionType } from "@utils/types";

export const settings = definePluginSettings({
    targetLanguage: {
        label: () => t(plugin.messageTranslate.option.targetLanguage.label),
        type: OptionType.STRING,
        description: () => t(plugin.messageTranslate.option.targetLanguage.description),
        default: "en",
    },
    excludedLanguages: {
        label: () => t(plugin.messageTranslate.option.excludedLanguages.label),
        type: OptionType.STRING,
        description: () => t(plugin.messageTranslate.option.excludedLanguages.description),
        default: "en",
    },
    confidenceRequirement: {
        label: () => t(plugin.messageTranslate.option.confidenceRequirement.label),
        type: OptionType.SLIDER,
        description: () => t(plugin.messageTranslate.option.confidenceRequirement.description),
        markers: makeRange(0, 1, 0.1),
        default: 0.8,
    },
    autoTranslate: {
        label: () => t(plugin.messageTranslate.option.autoTranslate.label),
        type: OptionType.BOOLEAN,
        description: () => t(plugin.messageTranslate.option.autoTranslate.description),
        default: true,
    },
    skipOwnMessages: {
        label: () => t(plugin.messageTranslate.option.skipOwnMessages.label),
        type: OptionType.BOOLEAN,
        description: () => t(plugin.messageTranslate.option.skipOwnMessages.description),
        default: true,
    },
    skipBotMessages: {
        label: () => t(plugin.messageTranslate.option.skipBotMessages.label),
        type: OptionType.BOOLEAN,
        description: () => t(plugin.messageTranslate.option.skipBotMessages.description),
        default: false,
    },
    ignoredGuilds: {
        label: () => t(plugin.messageTranslate.option.ignoredGuilds.label),
        type: OptionType.STRING,
        description: () => t(plugin.messageTranslate.option.ignoredGuilds.description),
        default: "",
    },
    ignoredChannels: {
        label: () => t(plugin.messageTranslate.option.ignoredChannels.label),
        type: OptionType.STRING,
        description: () => t(plugin.messageTranslate.option.ignoredChannels.description),
        default: "",
    },
    ignoredUsers: {
        label: () => t(plugin.messageTranslate.option.ignoredUsers.label),
        type: OptionType.STRING,
        description: () => t(plugin.messageTranslate.option.ignoredUsers.description),
        default: "",
    },
    showIndicator: {
        label: () => t(plugin.messageTranslate.option.showIndicator.label),
        type: OptionType.BOOLEAN,
        description: () => t(plugin.messageTranslate.option.showIndicator.description),
        default: true,
    },
    showOriginal: {
        type: OptionType.SELECT,
        description: () => t(plugin.messageTranslate.option.showOriginal.description),
        options: [
            {
                label: () => t(plugin.messageTranslate.option.showOriginal.noorig),
                value: "no-orig",
                default: true,
            },
            {
                label: t(plugin.messageTranslate.text.showOriginalInSubtext),
                value: "orig-in-subtext",
            },
            {
                label: t(plugin.messageTranslate.text.showOriginalMessageTranslation),
                value: "trans-in-subtext",
            },
        ]
    },
});

function parseList(value: string): Set<string> {
    return new Set(value.split(",").map(s => s.trim().toLowerCase()).filter(Boolean));
}

export function getExcludedLanguages(): Set<string> {
    return parseList(settings.store.excludedLanguages);
}

export function getIgnoredGuilds(): Set<string> {
    return parseList(settings.store.ignoredGuilds);
}

export function getIgnoredChannels(): Set<string> {
    return parseList(settings.store.ignoredChannels);
}

export function getIgnoredUsers(): Set<string> {
    return parseList(settings.store.ignoredUsers);
}
