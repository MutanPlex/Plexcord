/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2026 Vendicated and contributors
 * Copyright (c) 2026 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { plugin, t } from "@api/i18n";
import { insertTextIntoChatInputBox } from "@utils/discord";
import { parseUrl } from "@utils/misc";
import { showToast } from "@webpack/common";

import { registerCommands } from "../api/registry";
import type { FormPageSpec, PageEntry, PaletteAction, PaletteCommand } from "../api/types";
import { filterOptions } from "../search/ranker";
import { createPersistedValue } from "../state/persist";
import { BoltIcon, GearIcon, LinkIcon, PencilIcon, PlusIcon, TextIcon, TrashIcon } from "../ui/icons";
import { DISCORD_SETTINGS_ROUTES, openSettingsPage } from "./openSettings";

type CustomCommandKind = "url" | "settings" | "message";

interface CustomCommandData {
    id: string;
    name: string;
    kind: CustomCommandKind;
    value: string;
}

const OWNER = "CommandPalette.custom";
const store = createPersistedValue<CustomCommandData[]>("customCommands", []);

const KIND_OPTIONS = [
    { value: "url", label: t(plugin.commandPalette.action.url.label), icon: LinkIcon },
    { value: "settings", label: t(plugin.commandPalette.action.settings.label), icon: GearIcon },
    { value: "message", label: t(plugin.commandPalette.text.insertTextInChat), icon: TextIcon }
];

const KIND_ICONS: Record<CustomCommandKind, PaletteCommand["icon"]> = {
    url: LinkIcon,
    settings: GearIcon,
    message: TextIcon
};

function runCustomCommand(data: CustomCommandData) {
    switch (data.kind) {
        case "url":
            PlexcordNative.native.openExternal(data.value);
            break;
        case "settings":
            void openSettingsPage(data.value);
            break;
        case "message":
            insertTextIntoChatInputBox(data.value);
            break;
    }
}

function commandForm(existing: CustomCommandData | null): PageEntry {
    const spec: FormPageSpec = {
        type: "form",
        submitLabel: existing ? t(plugin.commandPalette.text.saveCommand) : t(plugin.commandPalette.text.createCommand),
        fields: [
            { key: "name", label: t(plugin.commandPalette.text.name), type: "text", placeholder: t(plugin.commandPalette.text.commandName), initial: existing?.name ?? "" },
            { key: "kind", label: t(plugin.commandPalette.category.action.label), type: "select", options: KIND_OPTIONS, initial: existing?.kind ?? "url" },
            {
                key: "url",
                label: "URL",
                type: "text",
                placeholder: "https://example.com",
                initial: existing?.kind === "url" ? existing.value : "",
                visible: values => values.kind === "url"
            },
            {
                key: "route",
                label: t(plugin.commandPalette.text.settingsPage),
                type: "picker",
                placeholder: t(plugin.commandPalette.text.searchSettingsPages),
                initial: existing?.kind === "settings" ? existing.value : "",
                suggestions: query => filterOptions(query, DISCORD_SETTINGS_ROUTES.map(entry => ({ value: entry.route, label: entry.label }))),
                visible: values => values.kind === "settings"
            },
            {
                key: "text",
                label: t(plugin.commandPalette.text.text),
                type: "textarea",
                placeholder: t(plugin.commandPalette.text.textToInsertInto),
                initial: existing?.kind === "message" ? existing.value : "",
                visible: values => values.kind === "message"
            }
        ],
        validate(values) {
            if (!values.name.trim()) return t(plugin.commandPalette.text.nameRequired);
            const kind = values.kind as CustomCommandKind;
            if (kind === "url" && !parseUrl(values.url)) return t(plugin.commandPalette.text.enterValidUrl);
            if (kind === "settings" && !DISCORD_SETTINGS_ROUTES.some(entry => entry.route === values.route)) return t(plugin.commandPalette.text.pickSettingsPage);
            if (kind === "message" && !values.text.trim()) return t(plugin.commandPalette.text.textRequired);
            return null;
        },
        submit(values, ctx) {
            const kind = values.kind as CustomCommandKind;
            const value = kind === "url" ? values.url.trim() : kind === "settings" ? values.route : values.text;
            const next: CustomCommandData = {
                id: existing?.id ?? crypto.randomUUID(),
                name: values.name.trim(),
                kind,
                value
            };

            store.set(existing
                ? store.get().map(entry => entry.id === existing.id ? next : entry)
                : [...store.get(), next]);
            registerCustomCommands();

            showToast({ text: existing ? t(plugin.commandPalette.text.commandSaved) : t(plugin.commandPalette.text.commandCreated), variant: "success" });
            ctx.pop();
        }
    };

    return {
        title: existing ? t(plugin.commandPalette.text.editCustomCommand) : t(plugin.commandPalette.text.createCustomCommand),
        icon: existing ? PencilIcon : PlusIcon,
        spec
    };
}

function toCommand(data: CustomCommandData): PaletteCommand {
    const extraActions: PaletteAction[] = [
        {
            id: "edit",
            label: t(plugin.commandPalette.text.editCommand),
            icon: PencilIcon,
            keepOpen: true,
            run: ctx => ctx.push(commandForm(data))
        },
        {
            id: "delete",
            label: t(plugin.commandPalette.text.deleteCommand),
            icon: TrashIcon,
            keepOpen: true,
            run() {
                store.set(store.get().filter(entry => entry.id !== data.id));
                registerCustomCommands();
                showToast({ text: t(plugin.commandPalette.toast.commandDeleted), variant: "success" });
            }
        }
    ];

    return {
        id: `custom.${data.id}`,
        title: data.name,
        subtitle: KIND_OPTIONS.find(option => option.value === data.kind)?.label,
        section: t(plugin.commandPalette.text.sectionCustom),
        icon: KIND_ICONS[data.kind],
        actions: [
            {
                id: "run",
                label: t(plugin.commandPalette.action.command.label),
                icon: BoltIcon,
                run: () => runCustomCommand(data)
            },
            ...extraActions
        ]
    };
}

export const loadCustomCommands = store.load;

export function registerCustomCommands() {
    registerCommands(OWNER, [
        {
            id: "custom.create",
            title: t(plugin.commandPalette.text.createCustomCommand),
            section: t(plugin.commandPalette.text.sectionCustom),
            keywords: ["custom", "create", "new", "command"],
            icon: PlusIcon,
            page: () => commandForm(null)
        },
        ...store.get().map(toCommand)
    ]);
}
