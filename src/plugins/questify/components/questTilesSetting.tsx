/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2026 Vendicated and contributors
 * Copyright (c) 2026 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { plugin, t } from "@api/i18n";
import type { Quest } from "@plexcord/discord-types";
import { findComponentByCodeLazy } from "@webpack";
import { QuestStore, useMemo, useState, useStateFromStores } from "@webpack/common";
import type { JSX } from "react";

import { enabledOnStartup } from "..";
import { getQuestifySettings, useQuestifySettings } from "../settings/access";
import { defaultQuestTileClaimedColorSetting, defaultQuestTileExpiredColorSetting, defaultQuestTileIgnoredColorSetting, defaultQuestTileUnclaimedColorSetting, type QuestTileColorSetting, type QuestTileGradient } from "../settings/def";
import { rerenderQuests } from "../settings/rerender";
import { getQuestTileClasses, getQuestTileStyle } from "../utils/questTiles";
import { q } from "../utils/ui";
import { ManaButton, type ManaSelectOption, SettingsCard, SettingsColorPicker, SettingsDescription, SettingsHeader, SettingsRow, SettingsRowItem, SettingsSelect, SettingsSubheader } from "./shared";

const QuestTile = findComponentByCodeLazy(".rowIndex,trackGuildAndChannelMetadata") as React.ComponentType<{
    className?: string;
    quest: Quest;
}>;

function getGradientManaOptions(): ManaSelectOption[] {
    const gradientOptions = [
        { label: t(plugin.questify.settings.questTiles.gradient.intense), value: "intense" },
        { label: t(plugin.questify.settings.questTiles.gradient.default), value: "default" },
        { label: t(plugin.questify.settings.questTiles.gradient.black), value: "black" },
        { label: t(plugin.questify.settings.questTiles.gradient.hide), value: "hide" },
    ] as const satisfies readonly { label: string, value: QuestTileGradient; }[];

    return gradientOptions.map(({ label, value }) => ({
        id: value,
        label,
        value,
    }));
}

function getPreloadManaOptions(): ManaSelectOption[] {
    return [
        { id: "true", label: t(plugin.questify.settings.questTiles.preload.onLoad), value: "true" },
        { id: "false", label: t(plugin.questify.settings.questTiles.preload.onScroll), value: "false" },
    ];
}

type QuestTileColorKey =
    | "questTileUnclaimedColor"
    | "questTileClaimedColor"
    | "questTileIgnoredColor"
    | "questTileExpiredColor";

interface QuestTileColorOption {
    key: QuestTileColorKey;
    label: string;
    defaultValue: QuestTileColorSetting;
}

function getColorOptions(): QuestTileColorOption[] {
    return [
        {
            key: "questTileUnclaimedColor",
            label: t(plugin.questify.status.unclaimed),
            defaultValue: defaultQuestTileUnclaimedColorSetting,
        },
        {
            key: "questTileClaimedColor",
            label: t(plugin.questify.status.claimed),
            defaultValue: defaultQuestTileClaimedColorSetting,
        },
        {
            key: "questTileIgnoredColor",
            label: t(plugin.questify.status.ignored),
            defaultValue: defaultQuestTileIgnoredColorSetting,
        },
        {
            key: "questTileExpiredColor",
            label: t(plugin.questify.status.expired),
            defaultValue: defaultQuestTileExpiredColorSetting,
        },
    ];
}

const defaultPreviewColorKey: QuestTileColorKey = "questTileUnclaimedColor";

function getRandomQuest(): Quest | null {
    const quests = Array.from(QuestStore.quests.values());
    return quests.length > 0 ? quests[Math.floor(Math.random() * quests.length)] : null;
}

function cloneDummyQuest(quest: Quest, dummyColor: QuestTileColorSetting): Quest & { dummyColor: QuestTileColorSetting; } {
    return {
        ...structuredClone(quest),
        dummyColor,
    };
}

function DummyQuestTile({
    disabled,
    dummyQuest,
    dummyGradient,
}: {
    disabled?: boolean;
    dummyQuest: Quest & { dummyColor: QuestTileColorSetting; };
    dummyGradient: QuestTileGradient;
}): JSX.Element {
    const classes = getQuestTileClasses(q("dummy-quest"), dummyQuest, dummyGradient);
    const style = getQuestTileStyle(dummyQuest);

    return (
        <div
            className={q("dummy-quest-preview", disabled ? "dimmed-settings-item" : undefined)}
            style={style}
            inert={true}
        >
            <QuestTile
                className={classes}
                quest={dummyQuest}
            />
        </div>
    );
}

function DummyQuestPreview({
    disabled,
    dummyColor,
    dummyGradient,
}: {
    disabled?: boolean;
    dummyColor: QuestTileColorSetting;
    dummyGradient: QuestTileGradient;
}): JSX.Element | null {
    const sourceQuest = useStateFromStores([QuestStore], getRandomQuest);

    const dummyQuest = useMemo(
        () => sourceQuest ? cloneDummyQuest(sourceQuest, dummyColor) : null,
        [dummyColor, sourceQuest]
    );

    if (!dummyQuest) return null;

    return (
        <DummyQuestTile
            disabled={disabled}
            dummyQuest={dummyQuest}
            dummyGradient={dummyGradient}
        />
    );
}

export function QuestTilesSetting(): JSX.Element {
    const questTiles = useQuestifySettings([
        "disableQuestsEverything",
        "questTileUnclaimedColor",
        "questTileClaimedColor",
        "questTileIgnoredColor",
        "questTileExpiredColor",
        "questTileGradient",
        "questTilePreload",
    ]);

    const [previewColorKey, setPreviewColorKey] = useState<QuestTileColorKey>(defaultPreviewColorKey);

    const disabled = questTiles.disableQuestsEverything;
    const previewColor = questTiles[previewColorKey] as QuestTileColorSetting;
    const gradientManaOptions = getGradientManaOptions();
    const preloadManaOptions = getPreloadManaOptions();

    function updateColor(key: QuestTileColorKey, nextColor: QuestTileColorSetting): void {
        setPreviewColorKey(key);
        getQuestifySettings()[key] = nextColor;
    }

    function updateColorValue(key: QuestTileColorKey, setting: QuestTileColorSetting, value: number | null): void {
        if (typeof value !== "number") return;

        updateColor(key, {
            enabled: setting.enabled,
            color: value,
        });
    }

    function updateColorEnabled(key: QuestTileColorKey, setting: QuestTileColorSetting, enabled: boolean): void {
        updateColor(key, {
            ...setting,
            enabled,
        });
    }

    function updateGradient(value: string | string[] | null): void {
        if (typeof value !== "string") return;

        getQuestifySettings().questTileGradient = value as QuestTileGradient;
    }

    function updatePreload(value: string | string[] | null): void {
        if (typeof value !== "string") return;

        const preload = value === "true";
        getQuestifySettings().questTilePreload = preload;
        rerenderQuests();
    }

    return (
        <SettingsCard>
            <SettingsHeader>{t(plugin.questify.settings.questTiles.title)}</SettingsHeader>
            <SettingsDescription>{t(plugin.questify.settings.questTiles.description)}</SettingsDescription>
            <SettingsSubheader>{t(plugin.questify.settings.questTiles.behavior)}</SettingsSubheader>
            <SettingsRow className="quest-tile-behavior-row">
                <SettingsRowItem className="quest-tile-gradient-row-item">
                    <SettingsSelect
                        label={t(plugin.questify.settings.questTiles.gradientStyle)}
                        options={gradientManaOptions}
                        value={questTiles.questTileGradient}
                        selectionMode="single"
                        disabled={disabled}
                        fullWidth={true}
                        maxOptionsVisible={gradientManaOptions.length}
                        onSelectionChange={updateGradient}
                        tooltip={{
                            position: "top",
                            text: t(plugin.questify.settings.questTiles.gradientStyleTooltip)
                        }}
                    />
                </SettingsRowItem>
                <SettingsRowItem className="quest-tile-preload-row-item">
                    <SettingsSelect
                        label={t(plugin.questify.settings.questTiles.assetPreload)}
                        options={preloadManaOptions}
                        value={String(questTiles.questTilePreload)}
                        selectionMode="single"
                        disabled={disabled}
                        fullWidth={true}
                        maxOptionsVisible={preloadManaOptions.length}
                        onSelectionChange={updatePreload}
                        tooltip={{
                            position: "top",
                            text: t(plugin.questify.settings.questTiles.assetPreloadTooltip)
                        }}
                    />
                </SettingsRowItem>
            </SettingsRow>
            <SettingsSubheader>{t(plugin.questify.settings.questTiles.colors)}</SettingsSubheader>
            <SettingsRow className="quest-tile-color-row">
                {getColorOptions().map(({ key, label }) => {
                    const setting = questTiles[key] as QuestTileColorSetting;

                    return (
                        <SettingsRowItem key={key} className="quest-tile-color-row-item">
                            <div
                                onFocusCapture={() => setPreviewColorKey(key)}
                                onPointerDownCapture={() => setPreviewColorKey(key)}
                            >
                                <SettingsColorPicker
                                    label={`${label}:`}
                                    className={["quest-tile-color-picker", setting.enabled ? "" : "disabled-color-picker"].filter(Boolean)}
                                    color={setting.color}
                                    disabled={disabled || !setting.enabled}
                                    onChange={value => updateColorValue(key, setting, value)}
                                    showEyeDropper={true}
                                />
                            </div>
                            <div className={q("settings-button", "quest-tile-color-button")}>
                                <ManaButton
                                    text={setting.enabled ? t(plugin.questify.settings.questTiles.disable) : t(plugin.questify.settings.questTiles.enable)}
                                    variant={setting.enabled ? "critical-secondary" : "primary"}
                                    disabled={disabled}
                                    fullWidth={true}
                                    size="sm"
                                    onClick={() => updateColorEnabled(key, setting, !setting.enabled)}
                                />
                            </div>
                        </SettingsRowItem>
                    );
                })}
            </SettingsRow>
            {enabledOnStartup && <DummyQuestPreview
                disabled={disabled}
                dummyColor={previewColor}
                dummyGradient={questTiles.questTileGradient as QuestTileGradient}
            />}
        </SettingsCard>
    );
}
