/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2026 Vendicated and contributors
 * Copyright (c) 2026 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { unregisterCommand } from "@api/Commands";
import { plugin, t } from "@api/i18n";
import { definePluginSettings } from "@api/Settings";
import { OptionType } from "@utils/types";

import { registerTagCommand } from ".";
import { SettingsTagList } from "./SettingsTagList";

export const settings = definePluginSettings({
    tagsList: {
        label: () => t(plugin.customCommands.option.tagsList.label),
        type: OptionType.CUSTOM,
        description: "",
        default: {} as Record<string, Tag>,
    },
    tagComponent: {
        type: OptionType.COMPONENT,
        component: SettingsTagList
    }
});

export interface Tag {
    name: string;
    message: string;
}

export function getTags() {
    return Object.values(settings.store.tagsList);
}

export function getTag(name: string) {
    return settings.store.tagsList[name];
}

export function addTag(tag: Tag) {
    unregisterCommand(tag.name);

    settings.store.tagsList[tag.name] = tag;
    registerTagCommand(tag);
}

export function removeTag(name: string) {
    delete settings.store.tagsList[name];
    unregisterCommand(name);
}
