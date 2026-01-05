/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2025 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { t } from "@api/i18n";
import { Button, TextButton } from "@components/Button";
import { Heading } from "@components/Heading";
import { Paragraph } from "@components/Paragraph";
import { Switch } from "@components/Switch";
import { React, Select, TextInput } from "@webpack/common";

import { openCommandPicker } from "./CommandPicker";
import {
    type CustomCommandDefinition,
    getCategoryPath,
    getCommandById,
    getCustomCommandsSnapshot,
    getSettingsCommandMetaById,
    getSettingsCommandMetaByRoute,
    listAllTags,
    listCategories,
    normalizeTag,
    saveCustomCommands,
    subscribeCustomCommands,
    subscribeRegistry
} from "./registry";

const ACTION_OPTIONS = [
    { label: () => t(plugin.commandPalette.action.command), value: "command" },
    { label: () => t(plugin.commandPalette.action.settings), value: "settings" },
    { label: () => t(plugin.commandPalette.action.url), value: "url" },
    { label: () => t(plugin.commandPalette.action.macro), value: "macro" }
] as const;

type ActionType = typeof ACTION_OPTIONS[number]["value"];

const ACTION_HELP_TEXT: Record<ActionType, () => string> = {
    command: () => t(plugin.commandPalette.action.command.description),
    settings: () => t(plugin.commandPalette.action.settings.description),
    url: () => t(plugin.commandPalette.action.url.description),
    macro: () => t(plugin.commandPalette.action.macro.description)
};

type CategoryOption = { label: () => string; value: string; description?: string; };

function buildCategoryOptions(): CategoryOption[] {
    const categories = listCategories();
    const options: CategoryOption[] = categories.map(category => {
        const path = getCategoryPath(category.id);
        const label = path.length ? path.map(item => item.label()).join(" › ") : category.label();
        return {
            label: () => `${label} (${category.id})`,
            value: category.id,
            description: category.description?.()
        } satisfies CategoryOption;
    });
    return [
        {
            label: () => t(plugin.commandPalette.category.auto),
            value: ""
        },
        ...options
    ];
}

function createDefaultCommand(): CustomCommandDefinition {
    const baseId = `custom-${Math.random().toString(36).slice(2, 8)}`;
    return {
        id: baseId,
        label: t(plugin.commandPalette.command.new),
        keywords: [],
        tags: [],
        categoryId: undefined,
        description: "",
        danger: false,
        action: {
            type: "command",
            commandId: ""
        }
    };
}

function normalizeTagList(values: string[]): string[] {
    const seen = new Set<string>();
    const result: string[] = [];
    for (const raw of values) {
        const trimmed = raw.trim();
        if (!trimmed) continue;
        const slug = normalizeTag(trimmed);
        if (!slug || seen.has(slug)) continue;
        seen.add(slug);
        result.push(trimmed);
    }
    return result;
}

function duplicateWithUpdates(command: CustomCommandDefinition, updates: Partial<CustomCommandDefinition>): CustomCommandDefinition {
    const nextTags = updates.tags !== undefined ? normalizeTagList(updates.tags) : command.tags;
    return {
        ...command,
        ...updates,
        keywords: updates.keywords ?? command.keywords,
        tags: nextTags,
        action: updates.action ?? command.action
    };
}

type TemplateConfig = {
    label: () => string;
    description: () => string;
    apply(command: CustomCommandDefinition): CustomCommandDefinition;
};

const TEMPLATE_CONFIGS: TemplateConfig[] = [
    {
        label: () => t(plugin.commandPalette.template.alias.label),
        description: () => t(plugin.commandPalette.template.alias.description),
        apply: command => duplicateWithUpdates(command, {
            action: { type: "command", commandId: "" }
        })
    },
    {
        label: () => t(plugin.commandPalette.template.settings.label),
        description: () => t(plugin.commandPalette.template.settings.description),
        apply: command => duplicateWithUpdates(command, {
            action: { type: "settings", route: "My Account" }
        })
    },
    {
        label: () => t(plugin.commandPalette.template.url.label),
        description: () => t(plugin.commandPalette.template.url.description),
        apply: command => duplicateWithUpdates(command, {
            action: { type: "url", url: "https://", openExternal: true }
        })
    },
    {
        label: () => t(plugin.commandPalette.template.macro.label),
        description: () => t(plugin.commandPalette.template.macro.description),
        apply: command => duplicateWithUpdates(command, {
            action: { type: "macro", steps: [] }
        })
    }
];

function parseListInput(value: string): string[] {
    const parts = value
        .split(",")
        .map(item => item.trim());
    return normalizeTagList(parts);
}

function renderActionFields(command: CustomCommandDefinition, onChange: (action: CustomCommandDefinition["action"]) => void) {
    const { action } = command;

    switch (action.type) {
        case "command":
            const trimmedId = action.commandId.trim();
            let commandError: string | undefined;
            if (!trimmedId) {
                commandError = t(plugin.commandPalette.command.error.enter);
            } else if (!getCommandById(trimmedId)) {
                commandError = t(plugin.commandPalette.command.error.noCommand);
            }
            return (
                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                    <TextInput
                        label={t(plugin.commandPalette.modal.command.target.label)}
                        value={action.commandId}
                        placeholder={t(plugin.commandPalette.modal.command.target.placeholder)}
                        error={commandError}
                        onChange={value => onChange({ type: "command", commandId: value })}
                    />
                    <Button
                        size="small"
                        onClick={() => openCommandPicker({
                            initialQuery: action.commandId,
                            onSelect: command => onChange({ type: "command", commandId: command.id })
                        })}
                    >
                        {t(plugin.commandPalette.modal.command.target.choose)}
                    </Button>
                </div>
            );
        case "settings": {
            const selectedSettings = action.route ? getSettingsCommandMetaByRoute(action.route) : undefined;
            const currentSummary = selectedSettings
                ? `${selectedSettings.label} (${selectedSettings.route})`
                : action.route || t(plugin.commandPalette.modal.settings.noSelected);

            return (
                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                    <Paragraph size="sm" style={{ color: "var(--text-muted, #a5a6ab)" }}>
                        {t(plugin.commandPalette.modal.settings.current)}: {currentSummary}
                    </Paragraph>
                    <Button
                        size="small"
                        onClick={() => openCommandPicker({
                            initialSelectedIds: selectedSettings ? [selectedSettings.id] : undefined,
                            filter: entry => entry.categoryId === "discord-settings",
                            onSelect: command => {
                                const meta = getSettingsCommandMetaById(command.id);
                                onChange({ type: "settings", route: meta?.route ?? command.label() });
                            }
                        })}
                    >
                        {t(plugin.commandPalette.modal.settings.choose)}
                    </Button>
                </div>
            );
        }
        case "url": {
            let urlError: string | undefined;
            const trimmedUrl = action.url.trim();
            if (trimmedUrl && !trimmedUrl.startsWith("http://") && !trimmedUrl.startsWith("https://")) {
                urlError = t(plugin.commandPalette.modal.url.error);
            } else if (trimmedUrl) {
                try {
                    new URL(trimmedUrl);
                } catch {
                    urlError = t(plugin.commandPalette.modal.url.error);
                }
            }
            return (
                <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                    <TextInput
                        label={t(plugin.commandPalette.modal.url.url)}
                        value={action.url}
                        placeholder="https://example.com"
                        error={urlError}
                        onChange={value => onChange({ type: "url", url: value, openExternal: action.openExternal })}
                    />
                    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                        <Switch
                            checked={Boolean(action.openExternal)}
                            onChange={value => onChange({ type: "url", url: action.url, openExternal: value })}
                        />
                        <Paragraph size="sm">{t(plugin.commandPalette.modal.url.open.external)}</Paragraph>
                    </div>
                </div>
            );
        }
        case "macro":
            const invalidSteps = action.steps.filter(step => !getCommandById(step));
            return (
                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                    <TextInput
                        label={t(plugin.commandPalette.modal.macro.sequence.label)}
                        value={action.steps.join(", ")}
                        placeholder={t(plugin.commandPalette.modal.macro.sequence.placeholder)}
                        onChange={value => onChange({ type: "macro", steps: parseListInput(value) })}
                    />
                    <Button
                        size="small"
                        onClick={() => openCommandPicker({
                            allowMultiple: true,
                            initialSelectedIds: action.steps,
                            onComplete: (commands, ids) => {
                                const nextIds = ids ?? commands.map(command => command.id);
                                onChange({ type: "macro", steps: nextIds });
                            }
                        })}
                    >
                        {t(plugin.commandPalette.modal.macro.addStep)}
                    </Button>
                    {action.steps.length > 0 && (
                        <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                            {action.steps.map((step, index) => (
                                <TextButton
                                    key={`${step}-${index}`}
                                    variant="secondary"
                                    onClick={() => {
                                        const next = [...action.steps];
                                        next.splice(index, 1);
                                        onChange({ type: "macro", steps: next });
                                    }}
                                >
                                    {step} ✕
                                </TextButton>
                            ))}
                        </div>
                    )}
                    {invalidSteps.length > 0 && (
                        <Paragraph size="sm" style={{ color: "var(--status-danger-text, #f04747)" }}>
                            {t(plugin.commandPalette.modal.macro.unknownId)}: {invalidSteps.join(", ")}
                        </Paragraph>
                    )}
                </div>
            );
        default:
            return null;
    }
}

export function CommandPaletteSettingsPanel() {
    const [commands, setCommands] = React.useState<CustomCommandDefinition[]>(() => getCustomCommandsSnapshot());
    const [tagMeta, setTagMeta] = React.useState(() => listAllTags());
    const [categoryOptions, setCategoryOptions] = React.useState(() => buildCategoryOptions());
    const [advancedOpen, setAdvancedOpen] = React.useState<Record<string, boolean>>({});
    const [collapsed, setCollapsed] = React.useState<Record<string, boolean>>({});

    React.useEffect(() => {
        return subscribeCustomCommands(next => setCommands(next));
    }, []);

    React.useEffect(() => {
        setTagMeta(listAllTags());
        setCategoryOptions(buildCategoryOptions());
        return subscribeRegistry(() => {
            setTagMeta(listAllTags());
            setCategoryOptions(buildCategoryOptions());
        });
    }, []);

    const updateCommands = React.useCallback((next: CustomCommandDefinition[]) => {
        setCommands(next);
        void saveCustomCommands(next);
    }, []);

    const handleAdd = () => {
        updateCommands([...commands, createDefaultCommand()]);
    };

    const handleRemove = (id: string) => {
        updateCommands(commands.filter(command => command.id !== id));
    };

    const handleUpdate = (id: string, updater: (command: CustomCommandDefinition) => CustomCommandDefinition) => {
        updateCommands(commands.map(command => (command.id === id ? updater(command) : command)));
    };

    React.useEffect(() => {
        setAdvancedOpen(prev => {
            const next = { ...prev };
            for (const key of Object.keys(next)) {
                if (!commands.some(command => command.id === key)) {
                    delete next[key];
                }
            }
            return next;
        });
        setCollapsed(prev => {
            const next = { ...prev };
            for (const key of Object.keys(next)) {
                if (!commands.some(command => command.id === key)) {
                    delete next[key];
                }
            }
            return next;
        });
    }, [commands]);

    return (
        <section>
            <Heading tag="h4" style={{ color: "var(--text-normal, #dcddde)" }}>{t(plugin.commandPalette.modal.command.custom.label)}</Heading>
            <Paragraph size="sm" className="pc-command-palette-settings-help">
                {/* Hank, don't abbreviate cyberpunk hank */}
                {t(plugin.commandPalette.modal.command.custom.description)}
            </Paragraph>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                {commands.map(command => {
                    const manualAdvanced = advancedOpen[command.id];
                    const hasAdvancedContent = Boolean(command.description?.trim()?.length || (command.keywords?.length ?? 0) || (command.tags?.length ?? 0) || command.categoryId || command.danger);
                    const showAdvanced = manualAdvanced ?? hasAdvancedContent;
                    const categoryId = command.categoryId ?? "";
                    const categoryPath = categoryId ? getCategoryPath(categoryId) : [];
                    const categoryLabel = categoryId
                        ? (categoryPath.length ? categoryPath.map(item => item.label).join(" › ") : categoryId)
                        : t(plugin.commandPalette.category.auto);
                    const isCollapsed = collapsed[command.id] ?? false;

                    return (
                        <div key={command.id} style={{ padding: 14, borderRadius: 8, background: "var(--background-primary)", border: "1px solid var(--background-base-low)", display: "flex", flexDirection: "column", gap: 12 }}>
                            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                <Heading tag="h5" style={{ color: "var(--text-normal, #dcddde)", marginBottom: 0 }}>
                                    {command.label || t(plugin.commandPalette.command.untitled)}
                                </Heading>
                                <TextButton
                                    variant="secondary"
                                    onClick={() => setCollapsed(prev => ({ ...prev, [command.id]: !isCollapsed }))}
                                >
                                    {isCollapsed ? t(plugin.commandPalette.modal.command.custom.expand) : t(plugin.commandPalette.modal.command.custom.collapse)}
                                </TextButton>
                            </div>

                            {!isCollapsed && (
                                <>
                                    <TextInput
                                        label={t(plugin.commandPalette.modal.command.custom.collapsed.label)}
                                        value={command.label}
                                        placeholder={t(plugin.commandPalette.modal.command.custom.collapsed.description)}
                                        onChange={value => handleUpdate(command.id, prev => duplicateWithUpdates(prev, { label: value }))}
                                    />

                                    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                                        <div style={{ display: "flex", flexWrap: "wrap", gap: 8, alignItems: "center" }}>
                                            <Select
                                                options={ACTION_OPTIONS}
                                                isSelected={value => value === command.action.type}
                                                select={value => {
                                                    const nextType = value as ActionType;
                                                    switch (nextType) {
                                                        case "command":
                                                            handleUpdate(command.id, prev => TEMPLATE_CONFIGS[0].apply(prev));
                                                            break;
                                                        case "settings":
                                                            handleUpdate(command.id, prev => TEMPLATE_CONFIGS[1].apply(prev));
                                                            break;
                                                        case "url":
                                                            handleUpdate(command.id, prev => TEMPLATE_CONFIGS[2].apply(prev));
                                                            break;
                                                        case "macro":
                                                            handleUpdate(command.id, prev => TEMPLATE_CONFIGS[3].apply(prev));
                                                            break;
                                                        default:
                                                            break;
                                                    }
                                                }}
                                                serialize={option => option.value}
                                            />
                                        </div>
                                        <Paragraph size="xs" style={{ color: "var(--text-muted, #a5a6ab)", fontSize: 12 }}>
                                            {ACTION_HELP_TEXT[command.action.type]()}
                                        </Paragraph>
                                    </div>

                                    {renderActionFields(command, action => handleUpdate(command.id, prev => duplicateWithUpdates(prev, { action })))}

                                    <TextButton
                                        variant="secondary"
                                        onClick={() => setAdvancedOpen(prev => ({ ...prev, [command.id]: !(showAdvanced ?? false) }))}
                                    >
                                        {showAdvanced ? t(plugin.commandPalette.modal.command.custom.collapsed.advanced.hide) : t(plugin.commandPalette.modal.command.custom.collapsed.advanced.show)}
                                    </TextButton>

                                    {showAdvanced && (
                                        <div style={{ display: "flex", flexDirection: "column", gap: 12, background: "var(--background-secondary-alt)", borderRadius: 8, padding: 12 }}>
                                            <TextInput
                                                label={t(plugin.commandPalette.modal.command.custom.collapsed.subtitle.label)}
                                                value={command.description ?? ""}
                                                placeholder={t(plugin.commandPalette.modal.command.custom.collapsed.subtitle.placeholder)}
                                                onChange={value => handleUpdate(command.id, prev => duplicateWithUpdates(prev, { description: value }))}
                                            />
                                            <TextInput
                                                label={t(plugin.commandPalette.modal.command.custom.collapsed.keywords.label)}
                                                value={(command.keywords ?? []).join(", ")}
                                                placeholder={t(plugin.commandPalette.modal.command.custom.collapsed.keywords.placeholder)}
                                                onChange={value => handleUpdate(command.id, prev => duplicateWithUpdates(prev, { keywords: parseListInput(value) }))}
                                            />
                                            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                                                <TextInput
                                                    label={t(plugin.commandPalette.modal.command.custom.collapsed.tags.label)}
                                                    value={(command.tags ?? []).join(", ")}
                                                    placeholder={t(plugin.commandPalette.modal.command.custom.collapsed.tags.placeholder)}
                                                    onChange={value => handleUpdate(command.id, prev => duplicateWithUpdates(prev, { tags: parseListInput(value) }))}
                                                />
                                                {tagMeta.length > 0 && (
                                                    <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                                                        <Paragraph size="xs" style={{ color: "var(--text-muted, #a5a6ab)", fontSize: 12 }}>
                                                            {t(plugin.commandPalette.modal.command.custom.collapsed.suggestion.label)}
                                                        </Paragraph>
                                                        <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                                                            {tagMeta
                                                                .filter(meta => !(command.tags ?? []).some(tag => normalizeTag(tag) === meta.id))
                                                                .slice(0, 12)
                                                                .map(meta => (
                                                                    <Button
                                                                        key={meta.id}
                                                                        size="min"
                                                                        variant="secondary"
                                                                        onClick={() => handleUpdate(command.id, prev => duplicateWithUpdates(prev, {
                                                                            tags: normalizeTagList([...(prev.tags ?? []), meta.label])
                                                                        }))}
                                                                    >
                                                                        {meta.label}
                                                                    </Button>
                                                                ))}
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                                                <Select
                                                    options={categoryOptions}
                                                    isSelected={value => value === categoryId}
                                                    select={value => handleUpdate(command.id, prev => duplicateWithUpdates(prev, { categoryId: value || undefined }))}
                                                    serialize={option => option.value}
                                                />
                                                <Paragraph size="xs" style={{ color: "var(--text-muted, #a5a6ab)", fontSize: 12 }}>
                                                    {t(plugin.commandPalette.modal.command.custom.collapsed.chooseCommand.label)}
                                                </Paragraph>
                                                {categoryId && (
                                                    <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                                                        <span style={{ display: "inline-flex", alignItems: "center", gap: 6, borderRadius: 999, padding: "2px 10px", fontSize: 12, background: "var(--background-base-low)", color: "var(--text-normal, #dcddde)" }}>
                                                            {categoryLabel}
                                                            <span style={{ color: "var(--text-muted, #a5a6ab)" }}>· {categoryId}</span>
                                                        </span>
                                                    </div>
                                                )}
                                            </div>
                                            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                                                <Switch
                                                    checked={Boolean(command.danger)}
                                                    onChange={value => handleUpdate(command.id, prev => duplicateWithUpdates(prev, { danger: value }))}
                                                />
                                                <Paragraph size="sm">{t(plugin.commandPalette.modal.command.custom.collapsed.danger.label)}</Paragraph>
                                            </div>
                                        </div>
                                    )}
                                </>
                            )}

                            <Button
                                variant="dangerPrimary"
                                size="small"
                                onClick={() => handleRemove(command.id)}
                            >
                                {t(plugin.commandPalette.modal.command.custom.remove)}
                            </Button>
                        </div>
                    );
                })}
            </div>
            <Button variant="primary" style={{ marginTop: 16 }} onClick={handleAdd}>
                {t(plugin.commandPalette.modal.command.custom.add)}
            </Button>
        </section>
    );
}
