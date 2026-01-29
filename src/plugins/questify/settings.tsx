/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2025 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { defaultAudioNames, playAudio } from "@api/AudioPlayer";
import { plugin, t } from "@api/i18n";
import { definePluginSettings } from "@api/Settings";
import { Button } from "@components/Button";
import { Divider } from "@components/Divider";
import { Heading } from "@components/Heading";
import { ErrorBoundary } from "@components/index";
import { Paragraph } from "@components/Paragraph";
import { Logger } from "@utils/Logger";
import { makeRange, OptionType } from "@utils/types";
import { ColorPicker, ContextMenuApi, Menu, Select, Slider, TextInput, useEffect, useRef, useState } from "@webpack/common";
import { JSX } from "react";

import { activeQuestIntervals, getQuestTileClasses, getQuestTileStyle } from "./index";
import { DynamicDropdown, DynamicDropdownSettingOption, ExcludedQuest, GuildlessServerListItem, Quest, QuestIcon, QuestRewardType, QuestStatus, QuestTile, RadioGroup, RadioOption, SelectOption, SoundIcon } from "./utils/components";
import { decimalToRGB, fetchAndDispatchQuests, getFormattedNow, getIgnoredQuestIDs, getQuestStatus, isDarkish, isSoundAllowed, leftClick, middleClick, q, QuestifyLogger, QuestsStore, rightClick, setIgnoredQuestIDs, validCommaSeparatedList } from "./utils/misc";

let autoFetchInterval: null | ReturnType<typeof setInterval> = null;
const defaultLeftClickAction = "open-quests";
const defaultMiddleClickAction = "plugin-settings";
const defaultRightClickAction = "context-menu";
const defaultQuestButtonDisplay = "always";
const defaultQuestButtonUnclaimed = "both";
const defaultQuestOrder = "UNCLAIMED, CLAIMED, IGNORED, EXPIRED";
const defaultUnclaimedColor = 2842239;
const defaultClaimedColor = 6105983;
const defaultIgnoredColor = 8334124;
const defaultExpiredColor = 2368553;
const defaultRestyleQuestsGradient = "intense";
const defaultFetchQuestsAlert = "discodo";
export const minimumAutoFetchIntervalValue = 30 * 60;
export const maximumAutoFetchIntervalValue = 12 * 60 * 60;

const rerenderCallbacks = new Set<() => void>();

export function addRerenderCallback(callback: () => void): () => void {
    rerenderCallbacks.add(callback);
    return () => rerenderCallbacks.delete(callback);
}

export function rerenderQuests(): void {
    settings.store.triggerQuestsRerender = !settings.store.triggerQuestsRerender;
    rerenderCallbacks.forEach(callback => callback());
}

export function fetchAndAlertQuests(source: string, logger: Logger): void {
    const { questRewardIncludeRewardCode, questRewardIncludeNitroCode, questRewardIncludeCollectibles, questRewardIncludeInGame, questRewardIncludeOrbs } = settings.store;

    const rewardTypeToSettingMap = {
        [QuestRewardType.REWARD_CODE]: questRewardIncludeRewardCode,
        [QuestRewardType.IN_GAME]: questRewardIncludeInGame,
        [QuestRewardType.COLLECTIBLE]: questRewardIncludeCollectibles,
        [QuestRewardType.VIRTUAL_CURRENCY]: questRewardIncludeOrbs,
        [QuestRewardType.FRACTIONAL_PREMIUM]: questRewardIncludeNitroCode
    };

    const currentQuests = Array.from(QuestsStore.quests.values()) as Quest[];

    fetchAndDispatchQuests(source, logger).then(newQuests => {
        if (newQuests !== null && Array.isArray(newQuests) && currentQuests.length > 0) {
            const currentIds = new Set(currentQuests.map((q: Quest) => q.id));
            const newOnly = newQuests.filter((q: Quest) => !currentIds.has(q.id));

            const newOnlyFiltered = newOnly.filter(quest => {
                const rewardType = getQuestRewardType(quest);
                return rewardType in rewardTypeToSettingMap && rewardTypeToSettingMap[rewardType];
            });

            if (newOnly.length > 0) {
                const shouldAlert = settings.store.fetchingQuestsAlert;

                if (shouldAlert && newOnlyFiltered.length > 0) {
                    logger.info(`[${getFormattedNow()}] New Quests detected. Playing alert sound.`);
                    playAudio(shouldAlert, { volume: settings.store.fetchingQuestsAlertVolume });
                } else {
                    logger.info(`[${getFormattedNow()}] New Quests detected.`);
                }
            }
        }
    });
}

function checkAutoFetchInterval(interval: number | null): void {
    if (!!interval && autoFetchCompatible()) {
        startAutoFetchingQuests();
    } else {
        stopAutoFetchingQuests();
    }
}

export function startAutoFetchingQuests(seconds?: number): void {
    if (autoFetchInterval) {
        clearInterval(autoFetchInterval);
        autoFetchInterval = null;
    }

    const interval = seconds ? seconds * 1000 : settings.store.fetchingQuestsInterval * 1000;
    QuestifyLogger.info(`[${getFormattedNow()}] Starting AutoFetch of Quests every ${(interval / 60000).toFixed(2)} minutes.`);
    autoFetchInterval = setInterval(() => { fetchAndAlertQuests("Questify-AutoFetch", QuestifyLogger); }, interval);
}

export function stopAutoFetchingQuests(): void {
    if (autoFetchInterval) {
        QuestifyLogger.info(`[${getFormattedNow()}] Stopping AutoFetch of Quests.`);
        clearInterval(autoFetchInterval);
        autoFetchInterval = null;
    }
}

export function autoFetchCompatible(): boolean {
    const display = settings.store.questButtonDisplay;
    const unclaimed = settings.store.questButtonUnclaimed;
    const fetching = !settings.store.disableQuestsEverything && !settings.store.disableQuestsFetchingQuests;

    if (display === "always") {
        return fetching && ["pill", "badge", "both"].includes(unclaimed);
    } else if (display === "unclaimed") {
        return fetching;
    } else {
        return false;
    }
}

export const intervalScales = {
    second: {
        singular: "Second",
        plural: "Seconds",
        multiplier: 1
    },
    minute: {
        singular: "Minute",
        plural: "Minutes",
        multiplier: 60
    },
    hour: {
        singular: "Hour",
        plural: "Hours",
        multiplier: 60 * 60
    },
    day: {
        singular: "Day",
        plural: "Days",
        multiplier: 24 * 60 * 60
    },
    week: {
        singular: "Week",
        plural: "Weeks",
        multiplier: 7 * 24 * 60 * 60
    }
};

export function removeIgnoredQuest(questID: string): void {
    const ignoredQuests = getIgnoredQuestIDs();
    const newIgnoredQuests = ignoredQuests.filter(id => id !== questID);
    validateAndOverwriteIgnoredQuests(newIgnoredQuests);
}

export function addIgnoredQuest(questID: string): void {
    const ignoredQuests = getIgnoredQuestIDs();
    const newIgnoredQuests = ignoredQuests.concat(questID);
    validateAndOverwriteIgnoredQuests(newIgnoredQuests);
}

export function questIsIgnored(questID: string): boolean {
    const ignoredQuests = getIgnoredQuestIDs();
    return ignoredQuests.includes(questID);
}

function getQuestRewardType(quest: Quest): QuestRewardType {
    const reward = quest.config.rewardsConfig.rewards[0];
    if (!(reward.type in QuestRewardType)) return QuestRewardType.UNKNOWN;
    return reward.type as QuestRewardType;
}

export function validateIgnoredQuests(ignoredQuests?: string[], questsData?: Quest[]): [string[], number] {
    const { questRewardIncludeRewardCode, questRewardIncludeNitroCode, questRewardIncludeCollectibles, questRewardIncludeInGame, questRewardIncludeOrbs } = settings.store;

    const rewardTypeToSettingMap = {
        [QuestRewardType.REWARD_CODE]: questRewardIncludeRewardCode,
        [QuestRewardType.IN_GAME]: questRewardIncludeInGame,
        [QuestRewardType.COLLECTIBLE]: questRewardIncludeCollectibles,
        [QuestRewardType.VIRTUAL_CURRENCY]: questRewardIncludeOrbs,
        [QuestRewardType.FRACTIONAL_PREMIUM]: questRewardIncludeNitroCode
    };

    const quests = questsData ?? Array.from(QuestsStore.quests.values()) as Quest[];
    const excludedQuests = Array.from(QuestsStore.excludedQuests.values()) as ExcludedQuest[];
    const currentlyIgnored = ignoredQuests ? new Set(ignoredQuests) : new Set(getIgnoredQuestIDs(questsData?.[0]?.userStatus?.userId));
    const validIgnored = new Set<string>();
    let numUnclaimedUnignoredQuests = 0;

    for (const quest of quests) {
        const questStatus = getQuestStatus(quest, false);

        if (currentlyIgnored.has(quest.id)) {
            validIgnored.add(quest.id);
        } else if (questStatus === QuestStatus.Unclaimed) {
            const rewardType = getQuestRewardType(quest);

            if (rewardTypeToSettingMap[rewardType]) {
                numUnclaimedUnignoredQuests++;
            }
        }
    }

    for (const quest of excludedQuests) {
        if (currentlyIgnored.has(quest.id)) {
            validIgnored.add(quest.id);
        }
    }

    return [Array.from(validIgnored), numUnclaimedUnignoredQuests];
}

export function validateAndOverwriteIgnoredQuests(ignoredQuests?: string[], questsData?: Quest[]): string[] {
    const [validIgnored, numUnclaimedUnignoredQuests] = validateIgnoredQuests(ignoredQuests, questsData);
    settings.store.unclaimedUnignoredQuests = numUnclaimedUnignoredQuests;
    setIgnoredQuestIDs(validIgnored, questsData?.[0]?.userStatus?.userId);
    rerenderQuests();
    return validIgnored;
}

interface DummyQuestButtonProps {
    visible: boolean;
    selected: boolean;
    showPill: boolean;
    showBadge: boolean;
    badgeColor: number | null;
    leftClickAction: string;
    middleClickAction: string;
    rightClickAction: string;
    onSelectedChange: (selected: boolean) => void;
}

function DummyQuestButton({
    visible,
    selected,
    showPill,
    showBadge,
    badgeColor,
    leftClickAction,
    middleClickAction,
    rightClickAction,
    onSelectedChange
}: DummyQuestButtonProps): JSX.Element {
    function handleClick(event: React.MouseEvent<Element>) {
        // ListItem does not support onAuxClick, so we have to listen for mousedown events.
        // Ignore left and right clicks sent via mousedown events to prevent double events.
        if (event.type === "mousedown" && event.button !== middleClick) {
            return;
        }

        event.preventDefault();
        event.stopPropagation();

        let todo: string | null = null;

        if (event.button === middleClick) {
            todo = middleClickAction;
        } else if (event.button === rightClick) {
            todo = rightClickAction;
        } else if (event.button === leftClick) {
            todo = leftClickAction;
        }

        if (todo === "open-quests") {
            onSelectedChange(!selected);
        } else if (todo === "plugin-settings") {
        } else if (todo === "context-menu") {
            ContextMenuApi.openContextMenu(event, () => (
                <Menu.Menu
                    navId={q("dummy-quest-button-context-menu")}
                    onClose={ContextMenuApi.closeContextMenu}
                    aria-label={t(plugin.questify.context.quest.label)}
                >
                    <Menu.MenuItem
                        id={q("dummy-quest-button-mark-all-ignored")}
                        label={t(plugin.questify.context.quest.ignore)}
                        disabled={true}
                    />
                    <Menu.MenuItem
                        id={q("dummy-quest-button-reset-ignored-list")}
                        label={t(plugin.questify.context.quest.reset)}
                        disabled={true}
                    />
                    <Menu.MenuItem
                        id={q("dummy-quest-button-fetch-quests")}
                        label={t(plugin.questify.context.quest.fetch)}
                        disabled={true}
                    />
                </Menu.Menu>
            ));
        }
    }

    const dummyBadgeColorRGB = badgeColor ? decimalToRGB(badgeColor) : null;
    const lowerBadgeProps = {
        count: showBadge ? 3 : 0,
        maxDigits: 2,
        ...(dummyBadgeColorRGB ? { color: `rgb(${dummyBadgeColorRGB.r},${dummyBadgeColorRGB.g},${dummyBadgeColorRGB.b})` } : {}),
        ...(dummyBadgeColorRGB ? { style: { color: isDarkish(dummyBadgeColorRGB) ? "white" : "black" } } : {})
    };

    return (
        <GuildlessServerListItem
            id={q("dummy-quest-button")}
            className={q("dummy-quest-button", "quest-button")}
            icon={QuestIcon(26, 26)}
            tooltip={t(plugin.questify.quests)}
            showPill={true}
            isVisible={visible}
            isSelected={selected}
            hasUnread={showPill}
            lowerBadgeProps={lowerBadgeProps}
            onClick={handleClick}
            onContextMenu={handleClick}
            onMouseDown={handleClick}
        />
    );
}

function validateQuestButtonSetting() {
    const {
        questButtonDisplay,
        questButtonUnclaimed,
        questButtonBadgeColor,
        questButtonLeftClickAction,
        questButtonMiddleClickAction,
        questButtonRightClickAction
    } = settings.use([
        "questButtonDisplay",
        "questButtonUnclaimed",
        "questButtonBadgeColor",
        "questButtonLeftClickAction",
        "questButtonMiddleClickAction",
        "questButtonRightClickAction"
    ]);

    if (!["always", "unclaimed", "never"].includes(questButtonDisplay)) {
        settings.store.questButtonDisplay = "always";
    }

    if (!["pill", "badge", "both", "none"].includes(questButtonUnclaimed)) {
        settings.store.questButtonUnclaimed = "both";
    }

    if (typeof questButtonBadgeColor !== "number" && questButtonBadgeColor !== null) {
        settings.store.questButtonBadgeColor = defaultUnclaimedColor;
    }

    if (!["open-quests", "context-menu", "plugin-settings", "nothing"].includes(questButtonLeftClickAction)) {
        settings.store.questButtonLeftClickAction = defaultLeftClickAction;
    }

    if (!["open-quests", "context-menu", "plugin-settings", "nothing"].includes(questButtonMiddleClickAction)) {
        settings.store.questButtonMiddleClickAction = defaultMiddleClickAction;
    }

    if (!["open-quests", "context-menu", "plugin-settings", "nothing"].includes(questButtonRightClickAction)) {
        settings.store.questButtonRightClickAction = defaultRightClickAction;
    }
}

function validateDisableQuestSetting() {
    const {
        disableQuestsDiscoveryTab,
        disableQuestsFetchingQuests,
        disableQuestsDirectMessagesTab,
        disableQuestsPageSponsoredBanner,
        disableQuestsPopupAboveAccountPanel,
        disableQuestsBadgeOnUserProfiles,
        disableQuestsGiftInventoryRelocationNotice,
        disableFriendsListActiveNowPromotion,
        disableMembersListActivelyPlayingIcon
    } = settings.use([
        "disableQuestsEverything",
        "disableQuestsDiscoveryTab",
        "disableQuestsFetchingQuests",
        "disableQuestsDirectMessagesTab",
        "disableQuestsPageSponsoredBanner",
        "disableQuestsPopupAboveAccountPanel",
        "disableQuestsBadgeOnUserProfiles",
        "disableQuestsGiftInventoryRelocationNotice",
        "disableFriendsListActiveNowPromotion",
        "disableMembersListActivelyPlayingIcon"
    ]);

    if (disableQuestsDiscoveryTab || disableQuestsDirectMessagesTab || disableQuestsPageSponsoredBanner || disableQuestsFetchingQuests || disableQuestsPopupAboveAccountPanel || disableQuestsBadgeOnUserProfiles || disableQuestsGiftInventoryRelocationNotice || disableFriendsListActiveNowPromotion || disableMembersListActivelyPlayingIcon) {
        settings.store.disableQuestsEverything = false;
    }
}

function QuestButtonSettings(): JSX.Element {
    validateQuestButtonSetting();

    const {
        questButtonDisplay,
        questRewardIncludeRewardCode,
        questRewardIncludeNitroCode,
        questRewardIncludeCollectibles,
        questRewardIncludeInGame,
        questRewardIncludeOrbs,
        questButtonUnclaimed,
        questButtonBadgeColor,
        questButtonLeftClickAction,
        questButtonMiddleClickAction,
        questButtonRightClickAction
    } = settings.use([
        "questButtonDisplay",
        "questRewardIncludeRewardCode",
        "questRewardIncludeNitroCode",
        "questRewardIncludeCollectibles",
        "questRewardIncludeInGame",
        "questRewardIncludeOrbs",
        "questButtonUnclaimed",
        "questButtonBadgeColor",
        "questButtonLeftClickAction",
        "questButtonMiddleClickAction",
        "questButtonRightClickAction"
    ]);

    const questButtonDisplayOptions: RadioOption[] = [
        { name: t(plugin.questify.settings.options.always), value: "always" },
        { name: t(plugin.questify.settings.options.unclaimed), value: "unclaimed" },
        { name: t(plugin.questify.settings.options.never), value: "never" }
    ];

    const questButtonUnclaimedOptions: RadioOption[] = [
        { name: t(plugin.questify.settings.options.pill), value: "pill" },
        { name: t(plugin.questify.settings.options.badge), value: "badge" },
        { name: t(plugin.questify.settings.options.both), value: "both" },
        { name: t(plugin.questify.settings.options.none), value: "none" }
    ];

    const questButtonClickOptions: SelectOption[] = [
        { label: t(plugin.questify.settings.options.openQuests), value: "open-quests" },
        { label: t(plugin.questify.settings.options.contextMenu), value: "context-menu" },
        { label: t(plugin.questify.settings.options.pluginSettings), value: "plugin-settings" },
        { label: t(plugin.questify.settings.options.nothing), value: "nothing" }
    ];

    const questButtonRewardDisplayOptions: DynamicDropdownSettingOption[] = [
        { label: t(plugin.questify.settings.options.orbs), value: "orbs", selected: questRewardIncludeOrbs },
        { label: t(plugin.questify.settings.options.nitroCodes), value: "nitro-code", selected: questRewardIncludeNitroCode },
        { label: t(plugin.questify.settings.options.rewardCodes), value: "reward-code", selected: questRewardIncludeRewardCode },
        { label: t(plugin.questify.settings.options.inGameItems), value: "in-game", selected: questRewardIncludeInGame },
        { label: t(plugin.questify.settings.options.profileCollectibles), value: "collectibles", selected: questRewardIncludeCollectibles },
    ];

    const [currentRewardsOptions, setCurrentRewardsOptions] = useState(questButtonRewardDisplayOptions.filter(option => option.selected).map(option => option.value));
    const [currentQuestButtonDisplay, setCurrentQuestButtonDisplay] = useState((questButtonDisplayOptions.find(option => option.value === questButtonDisplay) as RadioOption));
    const [currentQuestButtonUnclaimed, setCurrentQuestButtonUnclaimed] = useState((questButtonUnclaimedOptions.find(option => option.value === questButtonUnclaimed) as RadioOption));
    const [currentQuestButtonLeftClickAction, setCurrentQuestButtonLeftClickAction] = useState<"open-quests" | "plugin-settings" | "context-menu" | "nothing">(questButtonLeftClickAction as "open-quests" | "plugin-settings" | "context-menu" | "nothing");
    const [currentQuestButtonMiddleClickAction, setCurrentQuestButtonMiddleClickAction] = useState<"open-quests" | "plugin-settings" | "context-menu" | "nothing">(questButtonMiddleClickAction as "open-quests" | "plugin-settings" | "context-menu" | "nothing");
    const [currentQuestButtonRightClickAction, setCurrentQuestButtonRightClickAction] = useState<"open-quests" | "plugin-settings" | "context-menu" | "nothing">(questButtonRightClickAction as "open-quests" | "plugin-settings" | "context-menu" | "nothing");
    const [currentBadgeColor, setCurrentBadgeColor] = useState((questButtonBadgeColor as number | null));
    const [dummySelected, setDummySelected] = useState(false);

    function updateSettingsTruthy(enabled: string[]) {

        questButtonRewardDisplayOptions.forEach(option => {
            option.selected = enabled.includes(option.value);
        });

        settings.store.questRewardIncludeRewardCode = enabled.includes("reward-code");
        settings.store.questRewardIncludeNitroCode = enabled.includes("nitro-code");
        settings.store.questRewardIncludeCollectibles = enabled.includes("collectibles");
        settings.store.questRewardIncludeInGame = enabled.includes("in-game");
        settings.store.questRewardIncludeOrbs = enabled.includes("orbs");

        setCurrentRewardsOptions(enabled);
        validateAndOverwriteIgnoredQuests();
    }

    function handleQuestRewardDisplayChange(values: Array<DynamicDropdownSettingOption | string>) {
        const parsedValues = values.map(v => typeof v === "string" ? questButtonRewardDisplayOptions.find(option => option.value === v) as DynamicDropdownSettingOption : v);
        if (values.length === 0) {
            updateSettingsTruthy([]);
            return;
        }

        const selectedOption = values.length > currentRewardsOptions.length ? values[values.length - 1] as string : currentRewardsOptions.find(v => !values.includes(v)) as string;
        const stringlessValues = parsedValues.filter(v => v.value !== selectedOption);
        const option = questButtonRewardDisplayOptions.find(option => option.value === selectedOption) as DynamicDropdownSettingOption;

        if (option.selected) {
            updateSettingsTruthy(stringlessValues.filter(v => v.value !== selectedOption).map(v => v.value));
        } else {
            updateSettingsTruthy([...stringlessValues.map(v => v.value), option.value]);
        }
    }

    function handleQuestButtonDisplayChange(value: RadioOption) {
        setCurrentQuestButtonDisplay(value);
        settings.store.questButtonDisplay = value.value;
        checkAutoFetchInterval(settings.store.fetchingQuestsInterval);
    }

    function handleQuestButtonUnclaimedChange(value: RadioOption) {
        setCurrentQuestButtonUnclaimed(value);
        settings.store.questButtonUnclaimed = value.value;
        checkAutoFetchInterval(settings.store.fetchingQuestsInterval);
    }

    function handleBadgeColorChange(value: number | null) {
        setCurrentBadgeColor(value);
        settings.store.questButtonBadgeColor = value as any;
    }

    function handleLeftClickActionChange(value: "open-quests" | "context-menu" | "plugin-settings" | "nothing") {
        setCurrentQuestButtonLeftClickAction(value);
        settings.store.questButtonLeftClickAction = value;
    }

    function handleMiddleClickActionChange(value: "open-quests" | "context-menu" | "plugin-settings" | "nothing") {
        setCurrentQuestButtonMiddleClickAction(value);
        settings.store.questButtonMiddleClickAction = value;
    }

    function handleRightClickActionChange(value: "open-quests" | "context-menu" | "plugin-settings" | "nothing") {
        setCurrentQuestButtonRightClickAction(value);
        settings.store.questButtonRightClickAction = value;
    }

    return (
        <ErrorBoundary>
            <Divider className={q("setting-divider")} />
            <div className={q("setting", "quest-icon-setting")}>
                <section>
                    <div className={q("main-inline-group")}>
                        <div>
                            <Heading className={q("form-title")}>
                                {t(plugin.questify.settings.questButton.title)}
                            </Heading>
                            <Paragraph className={q("form-description")}>
                                {t(plugin.questify.settings.questButton.description)}
                            </Paragraph>
                        </div>
                        <div className={q("dummy-quest-button")}>
                            <DummyQuestButton
                                visible={currentQuestButtonDisplay.value !== "never"}
                                selected={dummySelected}
                                showPill={currentQuestButtonUnclaimed.value === "pill" || currentQuestButtonUnclaimed.value === "both"}
                                showBadge={currentQuestButtonUnclaimed.value === "badge" || currentQuestButtonUnclaimed.value === "both"}
                                badgeColor={currentBadgeColor}
                                leftClickAction={currentQuestButtonLeftClickAction}
                                middleClickAction={currentQuestButtonMiddleClickAction}
                                rightClickAction={currentQuestButtonRightClickAction}
                                onSelectedChange={setDummySelected}
                            />
                        </div>
                    </div>
                    <div className={q("main-inline-group")}>
                        <div className={q("inline-group-item")}>
                            <Heading className={q("form-subtitle", "form-subtitle-spacier")}>
                                {t(plugin.questify.settings.questButton.leftClick)}
                            </Heading>
                            <Select
                                options={questButtonClickOptions}
                                className={q("select", "titled-select")}
                                popoutPosition="top"
                                serialize={String}
                                isSelected={(value: string) => value === currentQuestButtonLeftClickAction}
                                select={handleLeftClickActionChange}
                            />
                        </div>
                        <div className={q("inline-group-item")}>
                            <Heading className={q("form-subtitle", "form-subtitle-spacier")}>
                                {t(plugin.questify.settings.questButton.middleClick)}
                            </Heading>
                            <Select
                                options={questButtonClickOptions}
                                className={q("select", "titled-select")}
                                popoutPosition="top"
                                serialize={String}
                                isSelected={(value: string) => value === currentQuestButtonMiddleClickAction}
                                select={handleMiddleClickActionChange}
                            />
                        </div>
                        <div className={q("inline-group-item")}>
                            <Heading className={q("form-subtitle", "form-subtitle-spacier")}>
                                {t(plugin.questify.settings.questButton.rightClick)}
                            </Heading>
                            <Select
                                options={questButtonClickOptions}
                                className={q("select", "titled-select")}
                                popoutPosition="top"
                                serialize={String}
                                isSelected={(value: string) => value === currentQuestButtonRightClickAction}
                                select={handleRightClickActionChange}
                            />
                        </div>
                    </div>
                    <div className={q("main-inline-group")}>
                        <div className={q("inline-group-item")}>
                            <Heading className={q("form-subtitle")}>
                                {t(plugin.questify.settings.questButton.visibility)}
                            </Heading>
                            <RadioGroup
                                value={(currentQuestButtonDisplay as any).value}
                                options={questButtonDisplayOptions}
                                onChange={handleQuestButtonDisplayChange}
                            />
                            <Heading className={q("form-subtitle")}>
                                {t(plugin.questify.settings.questButton.badgeColor)}
                            </Heading>
                            <div className={q("sub-inline-group")}>
                                <ColorPicker
                                    color={currentBadgeColor}
                                    onChange={handleBadgeColorChange}
                                    showEyeDropper={true}
                                />
                                <Button
                                    className={q("button", "button-blue", "disable-quest-default")}
                                    onClick={() => handleBadgeColorChange(defaultUnclaimedColor)}
                                >
                                    {t(plugin.questify.settings.questButton.default)}
                                </Button>
                                <Button
                                    className={q("button", "button-red", "disable-quest-disable")}
                                    onClick={() => handleBadgeColorChange(null)}
                                >
                                    {t(plugin.questify.settings.questButton.disable)}
                                </Button>
                            </div>
                        </div>
                        <div className={q("inline-group-item")}>
                            <Heading className={q("form-subtitle")}>
                                {t(plugin.questify.settings.questButton.unclaimedIndicator)}
                            </Heading>
                            <RadioGroup
                                value={(currentQuestButtonUnclaimed as any).value}
                                options={questButtonUnclaimedOptions}
                                onChange={handleQuestButtonUnclaimedChange}
                            />
                        </div>
                    </div>
                    <div className={q("main-inline-group")}>
                        <section>
                            <Heading className={q("form-subtitle", "form-subtitle-spacier")}>
                                {t(plugin.questify.settings.questButton.includedRewardTypes)}
                            </Heading>
                            <Paragraph className={q("form-description", "margin-bottom-8")}>
                                {t(plugin.questify.settings.questButton.includedRewardTypesDesc)}
                            </Paragraph>
                            <DynamicDropdown
                                placeholder={t(plugin.questify.settings.questButton.selectRewardTypes)}
                                feedback={t(plugin.questify.settings.questButton.noRewardType)}
                                className={q("select", "titled-select")}
                                optionClassName={q("affixless-select-popout-option")}
                                maxVisibleItems={questButtonRewardDisplayOptions.length}
                                maxOptionsVisible={questButtonRewardDisplayOptions.length} // Mana Select Prop
                                clearable={true}
                                multi={true}
                                value={currentRewardsOptions}
                                options={questButtonRewardDisplayOptions}
                                onChange={handleQuestRewardDisplayChange}
                                closeOnSelect={false}
                            >
                            </DynamicDropdown>
                        </section>
                    </div>
                </section>
            </div>
        </ErrorBoundary>
    );
}

function DisableQuestsSetting(): JSX.Element {
    validateDisableQuestSetting();

    const {
        disableQuestsEverything,
        disableQuestsDiscoveryTab,
        disableQuestsFetchingQuests,
        disableQuestsDirectMessagesTab,
        disableQuestsPageSponsoredBanner,
        disableQuestsPopupAboveAccountPanel,
        disableQuestsBadgeOnUserProfiles,
        disableQuestsGiftInventoryRelocationNotice,
        disableFriendsListActiveNowPromotion,
        disableMembersListActivelyPlayingIcon,
        makeMobileQuestsDesktopCompatible,
        completeVideoQuestsInBackground,
        completeGameQuestsInBackground,
        completeAchievementQuestsInBackground,
        notifyOnQuestComplete
    } = settings.use([
        "disableQuestsEverything",
        "disableQuestsDiscoveryTab",
        "disableQuestsFetchingQuests",
        "disableQuestsDirectMessagesTab",
        "disableQuestsPageSponsoredBanner",
        "disableQuestsPopupAboveAccountPanel",
        "disableQuestsBadgeOnUserProfiles",
        "disableQuestsGiftInventoryRelocationNotice",
        "disableFriendsListActiveNowPromotion",
        "disableMembersListActivelyPlayingIcon",
        "makeMobileQuestsDesktopCompatible",
        "completeVideoQuestsInBackground",
        "completeGameQuestsInBackground",
        "completeAchievementQuestsInBackground",
        "notifyOnQuestComplete",
    ]);

    const options: DynamicDropdownSettingOption[] = [
        { label: t(plugin.questify.settings.disableOptions.everything), value: "everything", selected: disableQuestsEverything, type: "disable" },
        { label: t(plugin.questify.settings.disableOptions.fetching), value: "fetching", selected: disableQuestsFetchingQuests, type: "disable" },
        { label: t(plugin.questify.settings.disableOptions.dms), value: "direct-messages", selected: disableQuestsDirectMessagesTab, type: "disable" },
        { label: t(plugin.questify.settings.disableOptions.discovery), value: "discovery", selected: disableQuestsDiscoveryTab, type: "disable" },
        { label: t(plugin.questify.settings.disableOptions.badge), value: "badge", selected: disableQuestsBadgeOnUserProfiles, type: "disable" },
        { label: t(plugin.questify.settings.disableOptions.popup), value: "popup", selected: disableQuestsPopupAboveAccountPanel, type: "disable" },
        { label: t(plugin.questify.settings.disableOptions.inventory), value: "inventory", selected: disableQuestsGiftInventoryRelocationNotice, type: "disable" },
        { label: t(plugin.questify.settings.disableOptions.sponsored), value: "sponsored-banner", selected: disableQuestsPageSponsoredBanner, type: "disable" },
        { label: t(plugin.questify.settings.disableOptions.friendsList), value: "friends-list", selected: disableFriendsListActiveNowPromotion, type: "disable" },
        { label: t(plugin.questify.settings.disableOptions.membersList), value: "members-list", selected: disableMembersListActivelyPlayingIcon, type: "disable" },
        { label: t(plugin.questify.settings.disableOptions.gameQuests), value: "game-quests-background", selected: completeGameQuestsInBackground, type: "modification" },
        { label: t(plugin.questify.settings.disableOptions.videoQuests), value: "video-quests-background", selected: completeVideoQuestsInBackground, type: "modification" },
        { label: t(plugin.questify.settings.disableOptions.achievementQuests), value: "achievement-quests-background", selected: completeAchievementQuestsInBackground, type: "modification" },
        { label: t(plugin.questify.settings.disableOptions.mobileDesktop), value: "mobile-desktop-compatible", selected: makeMobileQuestsDesktopCompatible, type: "modification" },
        { label: t(plugin.questify.settings.disableOptions.notifyOnComplete), value: "notify-on-complete", selected: notifyOnQuestComplete, type: "modification" },
    ];

    const disableOptions = options.filter(option => option.type === "disable");
    const modificationOptions = options.filter(option => option.type === "modification");
    const everythingOnly = options.find(option => option.value === "everything") as DynamicDropdownSettingOption;
    const [currentValue, setCurrentValue] = useState(options.filter(option => option.selected).map(option => option.value));

    function updateSettingsTruthy(enabled: string[]) {

        options.forEach(option => {
            option.selected = enabled.includes(option.value);
        });

        const redoAutoFetch = (
            settings.store.disableQuestsEverything !== enabled.includes("everything") ||
            settings.store.disableQuestsFetchingQuests !== enabled.includes("fetching")
        );

        settings.store.disableQuestsEverything = enabled.includes("everything");
        settings.store.disableQuestsDiscoveryTab = enabled.includes("discovery");
        settings.store.disableQuestsDirectMessagesTab = enabled.includes("direct-messages");
        settings.store.disableQuestsFetchingQuests = enabled.includes("fetching");
        settings.store.disableQuestsPopupAboveAccountPanel = enabled.includes("popup");
        settings.store.disableQuestsPageSponsoredBanner = enabled.includes("sponsored-banner");
        settings.store.disableQuestsBadgeOnUserProfiles = enabled.includes("badge");
        settings.store.disableQuestsGiftInventoryRelocationNotice = enabled.includes("inventory");
        settings.store.disableFriendsListActiveNowPromotion = enabled.includes("friends-list");
        settings.store.disableMembersListActivelyPlayingIcon = enabled.includes("members-list");
        settings.store.completeGameQuestsInBackground = enabled.includes("game-quests-background");
        settings.store.completeVideoQuestsInBackground = enabled.includes("video-quests-background");
        settings.store.completeAchievementQuestsInBackground = enabled.includes("achievement-quests-background");
        settings.store.makeMobileQuestsDesktopCompatible = enabled.includes("mobile-desktop-compatible");
        settings.store.notifyOnQuestComplete = enabled.includes("notify-on-complete");

        redoAutoFetch ? checkAutoFetchInterval(settings.store.fetchingQuestsInterval) : null;
        setCurrentValue(enabled.map(value => typeof value === "string" ? value : (value as any).value));
    }

    function handleChange(values: Array<DynamicDropdownSettingOption | string>) {
        const parsedValues = values.map(v => typeof v === "string" ? options.find(option => option.value === v) as DynamicDropdownSettingOption : v);
        if (values.length === 0) {
            updateSettingsTruthy([]);
            return;
        }

        const selectedOption = values.length > currentValue.length ? values[values.length - 1] as string : currentValue.find(v => !values.includes(v)) as string;
        const stringlessValues = parsedValues.filter(v => v.value !== selectedOption);

        if (selectedOption === "everything") {
            if (everythingOnly.selected) {
                // If was already selected when clicked.
                updateSettingsTruthy(stringlessValues.filter(option => option.value !== selectedOption).map(option => option.value));
            } else {
                updateSettingsTruthy([...stringlessValues.filter(option => option.type !== "disable").map(option => option.value), selectedOption]);
            }
        } else if (disableOptions.some(option => option.value === selectedOption)) {
            const option = disableOptions.find(option => option.value === selectedOption) as DynamicDropdownSettingOption;

            if (option.selected) {
                // If was already selected when clicked.
                updateSettingsTruthy(stringlessValues.filter(option => option.value !== selectedOption).map(option => option.value));
            } else {
                updateSettingsTruthy([...stringlessValues.map(option => option.value), selectedOption]);
            }
        } else if (modificationOptions.some(option => option.value === selectedOption)) {
            const option = modificationOptions.find(option => option.value === selectedOption) as DynamicDropdownSettingOption;

            if (option.selected) {
                // If was already selected when clicked.
                updateSettingsTruthy(stringlessValues.map(option => option.value));
            } else {
                updateSettingsTruthy([...stringlessValues.map(option => option.value), selectedOption]);
            }
        }
    }

    return (
        <ErrorBoundary>
            <Divider className={q("setting-divider")} />
            <div className={q("setting", "disable-quests-setting")}>
                <section>
                    <Heading className={q("form-title")}>
                        {t(plugin.questify.settings.questFeatures.title)}
                    </Heading>
                    <Paragraph className={q("form-description", "margin-bottom-8")}>
                        {t(plugin.questify.settings.questFeatures.description)}
                        <br /><br />
                        {t(plugin.questify.settings.questFeatures.popupWarning, {
                            disablePopup: <span className={q("inline-code-block")}>{t(plugin.questify.settings.questFeatures.disablePopup)}</span>
                        })}
                        <br /><br />
                        {t(plugin.questify.settings.questFeatures.videoQuestInfo, {
                            completeVideo: <span className={q("inline-code-block")}>{t(plugin.questify.settings.questFeatures.completeVideo)}</span>
                        })}
                        <br /><br />
                        {t(plugin.questify.settings.questFeatures.gameQuestInfo, {
                            completeGame: <span className={q("inline-code-block")}>{t(plugin.questify.settings.questFeatures.completeGame)}</span>
                        })}
                        <br /><br />
                        {t(plugin.questify.settings.questFeatures.manualStartWarning, {
                            stopAuto: <span className={q("inline-code-block")}>{t(plugin.questify.settings.questFeatures.stopAuto)}</span>
                        })}
                        <br /><br />
                        {t(plugin.questify.settings.questFeatures.tosWarning)}
                    </Paragraph>
                    <DynamicDropdown
                        placeholder={t(plugin.questify.settings.questFeatures.selectFeatures)}
                        feedback={t(plugin.questify.settings.questButton.noRewardType)}
                        className={q("select", "titled-select")}
                        optionClassName={q("affixless-select-popout-option")}
                        maxVisibleItems={options.length}
                        maxOptionsVisible={options.length} // Mana Select Prop
                        clearable={true}
                        multi={true}
                        value={currentValue}
                        options={options}
                        onChange={handleChange}
                        closeOnSelect={false}
                    >
                    </DynamicDropdown>
                </section>
            </div>
        </ErrorBoundary>
    );
}

const DummyQuestPreview = ({ quest, dummyColor, dummyGradient }: { quest: Quest; dummyColor: number | null; dummyGradient: string; }) => {
    const classes = getQuestTileClasses("", quest, dummyColor, dummyGradient);

    return (
        <QuestTile
            className={[q("dummy-quest"), classes].join(" ")}
            quest={quest}
        />
    );
};

function RestyleQuestsSetting() {
    const {
        restyleQuestsUnclaimed,
        restyleQuestsClaimed,
        restyleQuestsIgnored,
        restyleQuestsExpired,
        restyleQuestsGradient,
        restyleQuestsPreload
    } = settings.use([
        "restyleQuestsUnclaimed",
        "restyleQuestsClaimed",
        "restyleQuestsIgnored",
        "restyleQuestsExpired",
        "restyleQuestsGradient",
        "restyleQuestsPreload",
    ]);

    const [unclaimedColor, setUnclaimedColor] = useState<number | null>(restyleQuestsUnclaimed);
    const [claimedColor, setClaimedColor] = useState<number | null>(restyleQuestsClaimed);
    const [ignoredColor, setIgnoredColor] = useState<number | null>(restyleQuestsIgnored);
    const [expiredColor, setExpiredColor] = useState<number | null>(restyleQuestsExpired);
    const [restyleQuestsGradientValue, setRestyleQuestsGradientValue] = useState(restyleQuestsGradient);
    const [restyleQuestsPreloadValue, setRestyleQuestsPreloadValue] = useState(restyleQuestsPreload);
    const [dummyColor, setDummyColor] = useState<number | null>(restyleQuestsUnclaimed);
    const [dummyGradient, setDummyGradient] = useState(restyleQuestsGradient);

    const [hasQuests, setHasQuests] = useState(false);
    const [dummyQuest, setDummyQuest] = useState<Quest | null>(null);
    const dummyQuestStyle = getQuestTileStyle(dummyQuest);

    useEffect(() => {
        const handleChange = () => {
            if (QuestsStore.quests.size > 0) {
                if (!dummyQuest) {
                    const questArray = Array.from(QuestsStore.quests.values()) as Quest[];
                    const questIndex = Math.floor(Math.random() * questArray.length);
                    const questData = structuredClone(questArray[questIndex]);
                    questData.dummyColor = dummyColor as any;
                    setDummyQuest(questData);
                } else if (dummyQuest) {
                    const updatedQuest = structuredClone(dummyQuest);
                    updatedQuest.dummyColor = dummyColor as any;
                    setDummyQuest(updatedQuest);
                }

                setHasQuests(true);
            } else {
                setHasQuests(false);
                setDummyQuest(null);
            }
        };

        QuestsStore.addChangeListener(handleChange);
        handleChange();

        return () => QuestsStore.removeChangeListener(handleChange);
    }, [dummyColor]);

    function handleRestyleChange(colorIndex: number, newColorValue: number | null) {
        if (colorIndex === 0) setUnclaimedColor(newColorValue);
        if (colorIndex === 1) setClaimedColor(newColorValue);
        if (colorIndex === 2) setIgnoredColor(newColorValue);
        if (colorIndex === 3) setExpiredColor(newColorValue);
        setDummyColor(newColorValue);

        settings.store.restyleQuestsUnclaimed = colorIndex === 0 ? newColorValue : unclaimedColor as any;
        settings.store.restyleQuestsClaimed = colorIndex === 1 ? newColorValue : claimedColor as any;
        settings.store.restyleQuestsIgnored = colorIndex === 2 ? newColorValue : ignoredColor as any;
        settings.store.restyleQuestsExpired = colorIndex === 3 ? newColorValue : expiredColor as any;
    }

    function handleGradientChange(value: "intense" | "default" | "black" | "hide") {
        setDummyGradient(value);
        setRestyleQuestsGradientValue(value);
        settings.store.restyleQuestsGradient = value;
    }

    function handlePreloadChange(value: boolean) {
        setRestyleQuestsPreloadValue(value);
        settings.store.restyleQuestsPreload = value;
    }

    const colorPickers = [
        {
            label: () => t(plugin.questify.settings.restyleQuests.unclaimed),
            idx: 0,
            defaultValue: defaultUnclaimedColor,
            value: unclaimedColor
        },
        {
            label: () => t(plugin.questify.settings.restyleQuests.claimed),
            idx: 1,
            defaultValue: defaultClaimedColor,
            value: claimedColor
        },
        {
            label: () => t(plugin.questify.settings.restyleQuests.ignored),
            idx: 2,
            defaultValue: defaultIgnoredColor,
            value: ignoredColor
        },
        {
            label: () => t(plugin.questify.settings.restyleQuests.expired),
            idx: 3,
            defaultValue: defaultExpiredColor,
            value: expiredColor
        }
    ];

    const gradientOptions = [
        { label: t(plugin.questify.settings.restyleQuests.intenseGradient), value: "intense" },
        { label: t(plugin.questify.settings.restyleQuests.defaultGradient), value: "default" },
        { label: t(plugin.questify.settings.restyleQuests.blackGradient), value: "black" },
        { label: t(plugin.questify.settings.restyleQuests.noGradient), value: "hide" }
    ];

    const preloadOptions = [
        { label: t(plugin.questify.settings.restyleQuests.loadAllAssets), value: true },
        { label: t(plugin.questify.settings.restyleQuests.loadDuringScroll), value: false }
    ];

    return (
        <ErrorBoundary>
            <Divider className={q("setting-divider")} />
            <div className={q("setting", "restyle-quests-setting")}>
                <section>
                    <div>
                        <Heading className={q("form-title")}>
                            {t(plugin.questify.settings.restyleQuests.title)}
                        </Heading>
                        <Paragraph className={q("form-description")}>
                            {t(plugin.questify.settings.restyleQuests.description)}
                            <br /><br />
                            {t(plugin.questify.settings.restyleQuests.precedenceNote)}
                        </Paragraph>
                    </div>
                    <div className={q("main-inline-group")}>
                        <div className={q("gradient-setting-group", "inline-group-item", "flex-35")}>
                            <Heading className={q("form-subtitle")}>
                                {t(plugin.questify.settings.restyleQuests.gradientStyle)}
                            </Heading>
                            <Select
                                options={gradientOptions}
                                className={q("select", "titled-select")}
                                popoutPosition="top"
                                serialize={String}
                                isSelected={(value: string) => value === restyleQuestsGradientValue}
                                select={handleGradientChange}
                            />
                        </div>
                        <div className={q("preload-setting-group", "inline-group-item", "flex-65")}>
                            <Heading className={q("form-subtitle")}>
                                {t(plugin.questify.settings.restyleQuests.assetPreload)}
                            </Heading>
                            <Select
                                options={preloadOptions}
                                className={q("select", "titled-select")}
                                popoutPosition="top"
                                serialize={String}
                                isSelected={(value: boolean) => value === restyleQuestsPreloadValue}
                                select={handlePreloadChange}
                            />
                        </div>
                    </div>
                    <div className={q("color-picker-container")}>
                        {colorPickers.map(({ label, idx, defaultValue, value }) => {
                            const labelText = typeof label === "function" ? label() : label;
                            return (
                                <div
                                    key={labelText}
                                    className={q("inline-group-item", "color-picker-group")}
                                >
                                    <Heading className={q("form-subtitle")}>
                                        {labelText}
                                    </Heading>
                                    <div className={q("color-picker-with-buttons")}>
                                        <ColorPicker
                                            color={value}
                                            onChange={newValue => handleRestyleChange(idx, newValue)}
                                            showEyeDropper={true}
                                        />
                                        <div className={q("sub-inline-group")}>
                                            <Button
                                                className={q("button", "wide-button", "button-blue")}
                                                onClick={() => handleRestyleChange(idx, defaultValue)}
                                            >
                                                {t(plugin.questify.settings.questButton.default)}
                                            </Button>
                                            <Button
                                                className={q("button", "wide-button", "button-red")}
                                                onClick={() => handleRestyleChange(idx, null)}
                                            >
                                                {t(plugin.questify.settings.questButton.disable)}
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                    <div className={q("dummy-quest-preview")} style={dummyQuestStyle}>
                        {hasQuests && dummyQuest && (
                            <DummyQuestPreview quest={dummyQuest} dummyColor={dummyColor} dummyGradient={dummyGradient} />
                        )}
                    </div>
                </section>
            </div>
        </ErrorBoundary>
    );
}

function ReorderQuestsSetting(): JSX.Element {
    const [reorderQuests, setReorderQuests] = useState(settings.store.reorderQuests);

    const {
        unclaimedSubsort,
        claimedSubsort,
        ignoredSubsort,
        expiredSubsort,
        ignoredQuestProfile,
        rememberQuestPageSort,
        rememberQuestPageFilters
    } = settings.use([
        "unclaimedSubsort",
        "claimedSubsort",
        "ignoredSubsort",
        "expiredSubsort",
        "ignoredQuestProfile",
        "rememberQuestPageSort",
        "rememberQuestPageFilters"
    ]);

    const getSubsortOptions = (source: string): SelectOption[] => {
        const baseOptions = [
            { label: t(plugin.questify.settings.reorderQuests.addedNewest), value: "Recent DESC" },
            { label: t(plugin.questify.settings.reorderQuests.addedOldest), value: "Recent ASC" }
        ];

        if (source === "expired") {
            baseOptions.push(
                { label: t(plugin.questify.settings.reorderQuests.expiredRecent), value: "Expiring DESC" },
                { label: t(plugin.questify.settings.reorderQuests.expiredLeast), value: "Expiring ASC" }
            );
        } else if (source !== "claimed") {
            baseOptions.push(
                { label: t(plugin.questify.settings.reorderQuests.expiringSoon), value: "Expiring ASC" },
                { label: t(plugin.questify.settings.reorderQuests.expiringLate), value: "Expiring DESC" }
            );
        }

        if (source === "claimed") {
            baseOptions.push(
                { label: t(plugin.questify.settings.reorderQuests.claimedRecent), value: "Claimed DESC" },
                { label: t(plugin.questify.settings.reorderQuests.claimedLeast), value: "Claimed ASC" }
            );
        }

        return baseOptions;
    };

    return (
        <ErrorBoundary>
            <Divider className={q("setting-divider")} />
            <div className={q("setting", "reorder-quests-setting")}>
                <section>
                    <div>
                        <Heading className={q("form-title")}>
                            {t(plugin.questify.settings.reorderQuests.title)}
                        </Heading>
                        <Paragraph className={q("form-description")}>
                            {t(plugin.questify.settings.reorderQuests.description)}
                            <br /><br />
                            {t(plugin.questify.settings.reorderQuests.formatNote, {
                                items: <span className={q("inline-code-block")}>UNCLAIMED, CLAIMED, IGNORED, EXPIRED</span>
                            })}
                        </Paragraph>
                    </div>
                    <div>
                        <TextInput
                            inputClassName={q("text-input")}
                            value={reorderQuests}
                            onChange={newValue => {
                                const trimmedValue = newValue.toUpperCase();
                                const isValid = validCommaSeparatedList(trimmedValue, ["UNCLAIMED", "CLAIMED", "IGNORED", "EXPIRED"], true, true, true, false);
                                setReorderQuests(trimmedValue);

                                if (isValid) {
                                    const cleaned = trimmedValue
                                        .split(",")
                                        .map(item => item.trim())
                                        .join(", ");
                                    settings.store.reorderQuests = cleaned;
                                }
                            }}
                            placeholder={t(plugin.questify.settings.reorderQuests.placeholder)}
                            error={
                                validCommaSeparatedList(reorderQuests, ["UNCLAIMED", "CLAIMED", "IGNORED", "EXPIRED"], false, true, true, false)
                                    ? undefined
                                    : t(plugin.questify.settings.reorderQuests.invalidFormat)
                            }
                        >
                        </TextInput>
                    </div>
                    <div className={q("main-inline-group")}>
                        <div className={q("inline-group-item")}>
                            <Heading className={q("form-subtitle")}>
                                {t(plugin.questify.settings.reorderQuests.unclaimedSubsort)}
                            </Heading>
                            <Select
                                options={getSubsortOptions("unclaimed")}
                                className={q("select", "titled-select")}
                                popoutPosition="bottom"
                                serialize={String}
                                isSelected={(value: string) => value === unclaimedSubsort}
                                select={(value: string) => {
                                    settings.store.unclaimedSubsort = value;
                                }}
                            />
                        </div>
                        <div className={q("inline-group-item")}>
                            <Heading className={q("form-subtitle")}>
                                {t(plugin.questify.settings.reorderQuests.claimedSubsort)}
                            </Heading>
                            <Select
                                options={getSubsortOptions("claimed")}
                                className={q("select", "titled-select")}
                                popoutPosition="bottom"
                                serialize={String}
                                isSelected={(value: string) => value === claimedSubsort}
                                select={(value: string) => {
                                    settings.store.claimedSubsort = value;
                                }}
                            />
                        </div>
                    </div>
                    <div className={q("main-inline-group")}>
                        <div className={q("inline-group-item")}>
                            <Heading className={q("form-subtitle")}>
                                {t(plugin.questify.settings.reorderQuests.ignoredSubsort)}
                            </Heading>
                            <Select
                                options={getSubsortOptions("ignored")}
                                className={q("select", "titled-select")}
                                popoutPosition="bottom"
                                serialize={String}
                                isSelected={(value: string) => value === ignoredSubsort}
                                select={(value: string) => {
                                    settings.store.ignoredSubsort = value;
                                }}
                            />
                        </div>
                        <div className={q("inline-group-item")}>
                            <Heading className={q("form-subtitle")}>
                                {t(plugin.questify.settings.reorderQuests.expiredSubsort)}
                            </Heading>
                            <Select
                                options={getSubsortOptions("expired")}
                                className={q("select", "titled-select")}
                                popoutPosition="bottom"
                                serialize={String}
                                isSelected={(value: string) => value === expiredSubsort}
                                select={(value: string) => {
                                    settings.store.expiredSubsort = value;
                                }}
                            />
                        </div>
                    </div>
                    <div className={q("main-inline-group")}>
                        <div className={q("inline-group-item")}>
                            <Heading className={q("form-subtitle")}>
                                {t(plugin.questify.settings.reorderQuests.ignoredQuestProfile)}
                            </Heading>
                            <Select
                                options={[
                                    { label: t(plugin.questify.settings.reorderQuests.sharedProfile), value: "shared" },
                                    { label: t(plugin.questify.settings.reorderQuests.privateProfile), value: "private" }
                                ]}
                                className={q("select", "titled-select")}
                                popoutPosition="bottom"
                                serialize={String}
                                isSelected={(value: string) => value === ignoredQuestProfile}
                                select={(value: string) => { settings.store.ignoredQuestProfile = value; }}
                            />
                        </div>
                    </div>
                    <div className={q("main-inline-group")}>
                        <div className={q("inline-group-item")}>
                            <Heading className={q("form-subtitle")}>
                                {t(plugin.questify.settings.reorderQuests.rememberSort)}
                            </Heading>
                            <Select
                                options={[
                                    { label: t(plugin.questify.settings.reorderQuests.yes), value: true },
                                    { label: t(plugin.questify.settings.reorderQuests.no), value: false }
                                ]}
                                className={q("select", "titled-select")}
                                popoutPosition="bottom"
                                serialize={String}
                                isSelected={(value: boolean) => value === rememberQuestPageSort}
                                select={(value: boolean) => { settings.store.rememberQuestPageSort = value; }}
                            />
                        </div>
                        <div className={q("inline-group-item")}>
                            <Heading className={q("form-subtitle")}>
                                {t(plugin.questify.settings.reorderQuests.rememberFilter)}
                            </Heading>
                            <Select
                                options={[
                                    { label: t(plugin.questify.settings.reorderQuests.yes), value: true },
                                    { label: t(plugin.questify.settings.reorderQuests.no), value: false }
                                ]}
                                className={q("select", "titled-select")}
                                popoutPosition="bottom"
                                serialize={String}
                                isSelected={(value: boolean) => value === rememberQuestPageFilters}
                                select={(value: boolean) => { settings.store.rememberQuestPageFilters = value; }}
                            />
                        </div>
                    </div>
                    <div className={q("main-inline-group")}>
                        <Paragraph className={q("form-description")}>
                            {t(plugin.questify.settings.reorderQuests.rememberNote)}
                        </Paragraph>
                    </div>
                </section>
            </div>
        </ErrorBoundary>
    );
}

function FetchingQuestsSetting(): JSX.Element {
    const {
        fetchingQuestsInterval,
        fetchingQuestsAlert
    } = settings.use([
        "fetchingQuestsInterval",
        "fetchingQuestsAlert"
    ]);

    const allowedScales: Record<string, { singular: string; plural: string; multiplier: number; }> = {
        minutes: { singular: t(plugin.questify.settings.fetchingQuests.minute), plural: t(plugin.questify.settings.fetchingQuests.minutes), multiplier: 60 },
        hours: { singular: t(plugin.questify.settings.fetchingQuests.hour), plural: t(plugin.questify.settings.fetchingQuests.hours), multiplier: 60 * 60 },
    };

    const resolvedIntervals: SelectOption[] = [
        { value: 0, label: t(plugin.questify.settings.fetchingQuests.disabled) },
        { value: 60 * 30, label: t(plugin.questify.settings.fetchingQuests.thirtyMinutes) },
        { value: 60 * 60, label: t(plugin.questify.settings.fetchingQuests.oneHour) },
        { value: 60 * 60 * 2, label: t(plugin.questify.settings.fetchingQuests.threeHours) },
        { value: 60 * 60 * 4, label: t(plugin.questify.settings.fetchingQuests.sixHours) },
        { value: 60 * 60 * 6, label: t(plugin.questify.settings.fetchingQuests.twelveHours) },
    ];

    const resolvedSounds: SelectOption[] = defaultAudioNames().map(sound => {
        const label = sound.toUpperCase().replace(/_/g, " ").replace(/(\d+)/g, " $1");
        return { value: sound, label };
    });

    function createIntervalSelectOptionFromValue(value: number): SelectOption {
        const existingOption = resolvedIntervals.find(option => option.value === value);
        if (existingOption) { return existingOption; }

        const relevantScales = Object.entries(allowedScales).filter(([_, scale]) => { return value >= scale.multiplier; });
        const largestScale = relevantScales[relevantScales.length - 1]?.[1];
        const valueInScale = Math.ceil((value / largestScale.multiplier) * 100) / 100;
        const label = valueInScale === 1 ? largestScale.singular : largestScale.plural;

        return {
            value: value,
            label: `${valueInScale} ${label}`
        };
    }

    function createAlertSelectOptionFromValue(value: string): SelectOption | null {
        if (value === null) {
            return null;
        }

        const existingOption = resolvedSounds.find(option => option.value === value);

        if (existingOption) {
            return existingOption;
        }

        const filename = value
            .split("/")
            .pop()
            ?.split("?")[0]
            ?.split(".")[0]
            ?.replace(/_/g, " ")
            .replace(/\w\S*/g, word =>
                word.toUpperCase()
            ) || t(plugin.questify.settings.fetchingQuests.customSound);

        return {
            value: value,
            label: filename
        };
    }

    function getAllIntervalOptions(currentValue: number) {
        const currentOption = createIntervalSelectOptionFromValue(currentValue);
        const otherOptions = resolvedIntervals.filter(option => option.value !== currentValue);

        return [
            currentOption,
            ...otherOptions
        ].sort((a, b) => Number(a.value) - Number(b.value));
    }

    function getAllAlertOptions(currentValue: string | null) {
        const otherOptions = currentValue ? resolvedSounds.filter(option => option.value !== currentValue) : resolvedSounds;

        if (!currentValue) {
            return otherOptions.sort((a, b) => a.label.localeCompare(b.label));
        }

        const currentOption = createAlertSelectOptionFromValue(currentValue);

        return [
            currentOption!,
            ...otherOptions
        ].sort((a, b) => a.label.localeCompare(b.label));
    }

    function handleScaleSearchChange(searchValue: string) {
        if (!searchValue.trim()) {
            // Show all options for empty searches.
            setCurrentIntervalOptions(getAllIntervalOptions(currentIntervalSelection));
            return;
        }

        const isDisabledTerm = resolvedIntervals.find(option => option.value === 0 && option.label.toLowerCase().startsWith(searchValue.toLowerCase()));

        if (isDisabledTerm) {
            // Show the dedicated "disabled" option if it matches the search term.
            setCurrentIntervalOptions([isDisabledTerm]);
            return;
        }

        const match = searchValue.match(/^\s*(\d+\.?(?:\d+)?)\s*([a-zA-Z]+)?\s*$/i);

        if (!match) {
            // If the input can't be parsed, show feedback message.
            setCurrentIntervalOptions([]);
            return;
        }

        const num = Number(match[1]);
        const scaleName = match[2]?.toLowerCase();
        const resolvedScale = Object.keys(allowedScales).filter(key => allowedScales[key].singular.toLowerCase().startsWith(scaleName) || allowedScales[key].plural.toLowerCase().startsWith(scaleName))[0];

        if (isNaN(num)) {
            // If the input isn't valid, show feedback message.
            setCurrentIntervalOptions([]);
            return;
        }

        const options: SelectOption[] = [];

        if (!resolvedScale) {
            for (const scale of Object.values(intervalScales)) {
                // Try each allowed scale to see if the value fits within the min/max range.
                const valueInSeconds = Math.ceil((num * scale.multiplier) * 100) / 100;

                if (valueInSeconds >= minimumAutoFetchIntervalValue && valueInSeconds <= maximumAutoFetchIntervalValue) {
                    options.push(createIntervalSelectOptionFromValue(valueInSeconds));
                }
            }
        } else {
            // If a specific scale was provided, use it to create the option.
            const scale = allowedScales[resolvedScale];
            const valueInSeconds = Math.ceil((num * scale.multiplier) * 100) / 100;

            if (valueInSeconds >= minimumAutoFetchIntervalValue && valueInSeconds <= maximumAutoFetchIntervalValue) {
                options.push(createIntervalSelectOptionFromValue(valueInSeconds));
            }
        }

        setCurrentIntervalOptions(options);
    }

    function handleAlertSearchChange(searchValue: string) {
        if (!searchValue.trim()) {
            // Show all options for empty searches.
            setCurrentAlertOptions(getAllAlertOptions(currentAlertSelection));
            return;
        }

        const isCustomSound = searchValue.startsWith("http://") || searchValue.startsWith("https://");
        const customSoundOption = createAlertSelectOptionFromValue(searchValue);

        if (isCustomSound) {
            isSoundAllowed(searchValue).then(allowed => {
                if (allowed) {
                    // If the input is a custom sound URL, show it as the only option.
                    setCurrentAlertOptions([customSoundOption as SelectOption]);
                } else {
                    // If the input is a custom sound URL but not allowed, show feedback message.
                    setCurrentAlertOptions([]);
                }
            });

            return;
        }

        const matches = resolvedSounds.filter(option => option.label.toLowerCase().replace(/\s+/, "").includes(searchValue.toLowerCase().replace(/\s+/, "")));

        if (matches) {
            // If a matching sound is found, show it as the only option.
            setCurrentAlertOptions(matches);
            return;
        }

        // If no match is found, show feedback message.
        setCurrentAlertOptions([]);
    }

    const resolvedIntervalValue = fetchingQuestsInterval;
    const [currentIntervalSelection, setCurrentSelection] = useState(resolvedIntervalValue);
    const [currentIntervalOptions, setCurrentIntervalOptions] = useState(getAllIntervalOptions(currentIntervalSelection));
    const resolvedAlertValue = fetchingQuestsAlert;
    const [currentAlertSelection, setCurrentAlertSelection] = useState<string | null>(resolvedAlertValue);
    const [currentAlertOptions, setCurrentAlertOptions] = useState(getAllAlertOptions(currentAlertSelection));
    // Needed to update the playing state of the preview button.
    const [isPlaying, setIsPlaying] = useState<boolean>(false);
    // Needed to stop audio output on settings close mid-preview.
    const activePlayer = useRef<any>(null);

    function clearActivePlayer() {
        activePlayer.current?.stop();
        activePlayer.current = null;
        setIsPlaying(false);
    }

    useEffect(() => {
        return () => {
            clearActivePlayer();
        };
    }, []);

    return (
        <ErrorBoundary>
            <Divider className={q("setting-divider")} />
            <div className={q("setting", "fetching-quests-setting")}>
                <section>
                    <div>
                        <Heading className={q("form-title")}>
                            {t(plugin.questify.settings.fetchingQuests.title)}
                        </Heading>
                        <Paragraph className={q("form-description")}>
                            {t(plugin.questify.settings.fetchingQuests.description)}
                            <br /><br />
                            {t(plugin.questify.settings.fetchingQuests.defaultBehavior)}
                            <br /><br />
                            {t(plugin.questify.settings.fetchingQuests.requirement, {
                                unclaimed: <span className={q("inline-code-block")}>{t(plugin.questify.settings.options.unclaimed)}</span>,
                                always: <span className={q("inline-code-block")}>{t(plugin.questify.settings.options.always)}</span>,
                                pill: <span className={q("inline-code-block")}>{t(plugin.questify.settings.options.pill)}</span>,
                                badge: <span className={q("inline-code-block")}>{t(plugin.questify.settings.options.badge)}</span>,
                                both: <span className={q("inline-code-block")}>{t(plugin.questify.settings.options.both)}</span>
                            })}
                            <br /><br />
                            {t(plugin.questify.settings.fetchingQuests.blockWarning, {
                                questFeatures: <span className={q("inline-code-block")}>{t(plugin.questify.settings.questFeatures.title)}</span>,
                                fetchingQuests: <span className={q("inline-code-block")}>{t(plugin.questify.settings.fetchingQuests.title)}</span>
                            })}
                        </Paragraph>
                    </div>
                    <div>
                        <div>
                            <Heading className={q("form-subtitle", "form-subtitle-spacier")}>
                                {t(plugin.questify.settings.fetchingQuests.fetchInterval)}
                            </Heading>
                        </div>
                        <div>
                            <DynamicDropdown
                                filter={(options, query) => options}
                                placeholder={t(plugin.questify.settings.fetchingQuests.intervalPlaceholder)}
                                feedback={t(plugin.questify.settings.fetchingQuests.intervalFeedback)}
                                className={q("select", "titled-select")}
                                maxVisibleItems={resolvedIntervals.length + 1}
                                maxOptionsVisible={resolvedIntervals.length + 1}
                                clearable={false}
                                multi={false}
                                value={currentIntervalSelection as any}
                                options={currentIntervalOptions}
                                closeOnSelect={true}
                                onSearchChange={handleScaleSearchChange}
                                onClose={() => { setCurrentIntervalOptions(getAllIntervalOptions(currentIntervalSelection)); }}
                                onChange={value => {
                                    const val = value as number;
                                    settings.store.fetchingQuestsInterval = val;

                                    setCurrentSelection(val);
                                    setCurrentIntervalOptions(getAllIntervalOptions(val));
                                    checkAutoFetchInterval(val);
                                }}
                            />
                        </div>
                    </div>
                    <div>
                        <div>
                            <Heading className={q("form-subtitle", "form-subtitle-spacier")}>
                                {t(plugin.questify.settings.fetchingQuests.alertSound)}
                            </Heading>
                        </div>
                        <div className={q("sub-inline-group")}>
                            <div className={q("inline-group-item")}>
                                <DynamicDropdown
                                    filter={(options, query) => options}
                                    placeholder={t(plugin.questify.settings.fetchingQuests.soundPlaceholder)}
                                    feedback={t(plugin.questify.settings.fetchingQuests.soundFeedback)}
                                    className={q("select", "titled-select")}
                                    clearable={true}
                                    multi={false}
                                    maxVisibleItems={7}
                                    value={currentAlertSelection as any}
                                    options={currentAlertOptions}
                                    closeOnSelect={false}
                                    onSearchChange={handleAlertSearchChange}
                                    onClose={() => { setCurrentAlertOptions(getAllAlertOptions(currentAlertSelection)); }}
                                    onChange={value => {
                                        const val = value as string | null;
                                        settings.store.fetchingQuestsAlert = val as any;

                                        setCurrentAlertSelection(val);
                                        setCurrentAlertOptions(getAllAlertOptions(val));
                                    }}
                                />
                            </div>
                            <div
                                className={q("inline-group-item", "alert-icon", { "playing-audio": !!isPlaying })}
                                onClick={() => {
                                    if (currentAlertSelection) {
                                        if (activePlayer.current) {
                                            clearActivePlayer();
                                        } else {
                                            activePlayer.current = playAudio(currentAlertSelection, { onEnded: clearActivePlayer, volume: settings.store.fetchingQuestsAlertVolume });
                                            setIsPlaying(true);
                                        }
                                    }
                                }}
                                style={{ cursor: currentAlertSelection ? "pointer" : "default" }}
                            >
                                {SoundIcon(24, 24)}
                            </div>
                        </div>
                        <div className={q("sub-inline-group")}>
                            <div className={q("inline-group-item", "volume-slider-container")}>
                                <Slider
                                    markers={makeRange(0, 100, 10)}
                                    initialValue={settings.store.fetchingQuestsAlertVolume}
                                    onValueChange={val => { settings.store.fetchingQuestsAlertVolume = val; }}
                                    className={q("volume-slider")}
                                />
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </ErrorBoundary>
    );
}

export const settings = definePluginSettings({
    disableQuests: {
        type: OptionType.COMPONENT,
        component: DisableQuestsSetting,
        description: () => t(plugin.questify.option.disableQuests.description)
    },
    disableQuestsEverything: {
        type: OptionType.BOOLEAN,
        label: () => t(plugin.questify.option.disableQuestsEverything.label),
        description: () => t(plugin.questify.option.disableQuestsEverything.description),
        default: false,
        hidden: true
    },
    disableQuestsFetchingQuests: {
        type: OptionType.BOOLEAN,
        label: () => t(plugin.questify.option.disableQuestsFetchingQuests.label),
        description: () => t(plugin.questify.option.disableQuestsFetchingQuests.description),
        default: false,
        hidden: true
    },
    disableQuestsDiscoveryTab: {
        type: OptionType.BOOLEAN,
        label: () => t(plugin.questify.option.disableQuestsDiscoveryTab.label),
        description: () => t(plugin.questify.option.disableQuestsDiscoveryTab.description),
        default: false,
        hidden: true
    },
    disableQuestsDirectMessagesTab: {
        type: OptionType.BOOLEAN,
        label: () => t(plugin.questify.option.disableQuestsDirectMessagesTab.label),
        description: () => t(plugin.questify.option.disableQuestsDirectMessagesTab.description),
        default: false,
        hidden: true
    },
    disableQuestsPageSponsoredBanner: {
        type: OptionType.BOOLEAN,
        label: () => t(plugin.questify.option.disableQuestsPageSponsoredBanner.label),
        description: () => t(plugin.questify.option.disableQuestsPageSponsoredBanner.description),
        default: false,
        hidden: true
    },
    disableQuestsPopupAboveAccountPanel: {
        type: OptionType.BOOLEAN,
        label: () => t(plugin.questify.option.disableQuestsPopupAboveAccountPanel.label),
        description: () => t(plugin.questify.option.disableQuestsPopupAboveAccountPanel.description),
        default: true,
        hidden: true
    },
    disableQuestsBadgeOnUserProfiles: {
        type: OptionType.BOOLEAN,
        label: () => t(plugin.questify.option.disableQuestsBadgeOnUserProfiles.label),
        description: () => t(plugin.questify.option.disableQuestsBadgeOnUserProfiles.description),
        default: false,
        hidden: true
    },
    disableQuestsGiftInventoryRelocationNotice: {
        type: OptionType.BOOLEAN,
        label: () => t(plugin.questify.option.disableQuestsGiftInventoryRelocationNotice.label),
        description: () => t(plugin.questify.option.disableQuestsGiftInventoryRelocationNotice.description),
        default: true,
        hidden: true
    },
    disableFriendsListActiveNowPromotion: {
        type: OptionType.BOOLEAN,
        label: () => t(plugin.questify.option.disableFriendsListActiveNowPromotion.label),
        description: () => t(plugin.questify.option.disableFriendsListActiveNowPromotion.description),
        default: true,
        hidden: true
    },
    disableMembersListActivelyPlayingIcon: {
        type: OptionType.BOOLEAN,
        label: () => t(plugin.questify.option.disableMembersListActivelyPlayingIcons.label),
        description: () => t(plugin.questify.option.disableMembersListActivelyPlayingIcons.description),
        default: true,
        hidden: true
    },
    makeMobileQuestsDesktopCompatible: {
        type: OptionType.BOOLEAN,
        label: () => t(plugin.questify.option.makeMobileQuestsDesktopCompatible.label),
        description: () => t(plugin.questify.option.makeMobileQuestsDesktopCompatible.description),
        default: true,
        hidden: true
    },
    completeVideoQuestsInBackground: {
        type: OptionType.BOOLEAN,
        label: () => t(plugin.questify.option.completeVideoQuestsInBackground.label),
        description: () => t(plugin.questify.option.completeVideoQuestsInBackground.description),
        default: false,
        hidden: true,
        onChange: (value: boolean) => {
            if (!value) {
                activeQuestIntervals.forEach((interval, questId) => {
                    if (interval.type === "watch") {
                        clearTimeout(interval.progressTimeout);
                        clearTimeout(interval.rerenderTimeout);
                        activeQuestIntervals.delete(questId);
                    }
                });
            }

            rerenderQuests();
        }
    },
    completeGameQuestsInBackground: {
        type: OptionType.BOOLEAN,
        label: () => t(plugin.questify.option.completeGameQuestsInBackground.label),
        description: () => t(plugin.questify.option.completeGameQuestsInBackground.description),
        default: false,
        hidden: true,
        onChange: (value: boolean) => {
            if (!value) {
                activeQuestIntervals.forEach((interval, questId) => {
                    if (interval.type === "play") {
                        clearTimeout(interval.progressTimeout);
                        clearTimeout(interval.rerenderTimeout);
                        activeQuestIntervals.delete(questId);
                    }
                });
            }

            rerenderQuests();
        },
    },
    completeAchievementQuestsInBackground: {
        type: OptionType.BOOLEAN,
        description: "Complete Achievement in Activity Quests in the background.",
        default: false,
        hidden: true,
        onChange: (value: boolean) => {
            if (!value) {
                activeQuestIntervals.forEach((interval, questId) => {
                    if (interval.type === "achievement") {
                        clearTimeout(interval.progressTimeout);
                        clearTimeout(interval.rerenderTimeout);
                        activeQuestIntervals.delete(questId);
                    }
                });
            }

            rerenderQuests();
        }
    },
    notifyOnQuestComplete: {
        label: () => t(plugin.questify.option.notifyOnQuestComplete.label),
        description: () => t(plugin.questify.option.notifyOnQuestComplete.description),
        type: OptionType.BOOLEAN,
        default: true,
        hidden: true
    },
    questButton: {
        description: () => t(plugin.questify.option.questButton.description),
        type: OptionType.COMPONENT,
        component: QuestButtonSettings,
    },
    questButtonDisplay: {
        type: OptionType.STRING,
        label: () => t(plugin.questify.option.questButtonDisplay.label),
        description: () => t(plugin.questify.option.questButtonDisplay.description),
        default: defaultQuestButtonDisplay, // "always", "unclaimed", "never"
        hidden: true,
    },
    questRewardIncludeRewardCode: {
        type: OptionType.BOOLEAN,
        label: () => t(plugin.questify.option.questRewardIncludeRewardCode.label),
        description: () => t(plugin.questify.option.questRewardIncludeRewardCode.description),
        default: true,
        hidden: true,
    },
    questRewardIncludeNitroCode: {
        type: OptionType.BOOLEAN,
        label: () => t(plugin.questify.option.questRewardIncludeNitroCode.label),
        description: () => t(plugin.questify.option.questRewardIncludeNitroCode.description),
        default: true,
        hidden: true,
    },
    questRewardIncludeInGame: {
        type: OptionType.BOOLEAN,
        label: () => t(plugin.questify.option.questRewardIncludeInGame.label),
        description: () => t(plugin.questify.option.questRewardIncludeInGame.description),
        default: true,
        hidden: true,
    },
    questRewardIncludeCollectibles: {
        type: OptionType.BOOLEAN,
        label: () => t(plugin.questify.option.questRewardIncludeCollectibles.label),
        description: () => t(plugin.questify.option.questRewardIncludeCollectibles.description),
        default: true,
        hidden: true,
    },
    questRewardIncludeOrbs: {
        type: OptionType.BOOLEAN,
        label: () => t(plugin.questify.option.questRewardIncludeOrbs.label),
        description: () => t(plugin.questify.option.questRewardIncludeOrbs.description),
        default: true,
        hidden: true,
    },
    questButtonUnclaimed: {
        type: OptionType.STRING,
        label: () => t(plugin.questify.option.questButtonUnclaimed.label),
        description: () => t(plugin.questify.option.questButtonUnclaimed.description),
        default: defaultQuestButtonUnclaimed, // "pill", "badge", "both", "none"
        hidden: true,
    },
    questButtonBadgeColor: {
        type: OptionType.NUMBER | OptionType.CUSTOM,
        label: () => t(plugin.questify.option.questButtonBadgeColor.label),
        description: () => t(plugin.questify.option.questButtonBadgeColor.description),
        default: defaultUnclaimedColor, // Decimal, null (Discord Default)
        hidden: true
    },
    questButtonLeftClickAction: {
        type: OptionType.STRING,
        label: () => t(plugin.questify.option.questButtonLeftClickAction.label),
        description: () => t(plugin.questify.option.questButtonLeftClickAction.description),
        default: defaultLeftClickAction, // "open-quests", "context-menu", "plugin-settings", "nothing"
        hidden: true
    },
    questButtonMiddleClickAction: {
        type: OptionType.STRING,
        label: () => t(plugin.questify.option.questButtonMiddleClickAction.label),
        description: () => t(plugin.questify.option.questButtonMiddleClickAction.description),
        default: defaultMiddleClickAction, // "open-quests", "context-menu", "plugin-settings", "nothing"
        hidden: true
    },
    questButtonRightClickAction: {
        type: OptionType.STRING,
        label: () => t(plugin.questify.option.questButtonRightClickAction.label),
        description: () => t(plugin.questify.option.questButtonRightClickAction.description),
        default: defaultRightClickAction, // "open-quests", "context-menu", "plugin-settings", "nothing"
        hidden: true
    },
    fetchingQuests: {
        description: () => t(plugin.questify.option.fetchingQuests.description),
        type: OptionType.COMPONENT,
        component: FetchingQuestsSetting
    },
    fetchingQuestsInterval: {
        type: OptionType.NUMBER | OptionType.CUSTOM,
        label: () => t(plugin.questify.option.fetchingQuestsInterval.label),
        description: () => t(plugin.questify.option.fetchingQuestsInterval.description),
        default: 2700, // Digit >= 0, null (Disabled)
        hidden: true
    },
    fetchingQuestsAlert: {
        type: OptionType.STRING | OptionType.CUSTOM,
        label: () => t(plugin.questify.option.fetchingQuestsAlert.label),
        description: () => t(plugin.questify.option.fetchingQuestsAlert.description),
        default: defaultFetchQuestsAlert, // Item from predefined list or a URL to CSP valid audio file.
        hidden: true
    },
    fetchingQuestsAlertVolume: {
        type: OptionType.NUMBER,
        label: () => t(plugin.questify.option.fetchingQuestsAlertVolume.label),
        description: () => t(plugin.questify.option.fetchingQuestsAlertVolume.description),
        default: 100, // 0 - 100
        hidden: true
    },
    restyleQuests: {
        description: () => t(plugin.questify.option.restyleQuests.description),
        type: OptionType.COMPONENT,
        component: RestyleQuestsSetting
    },
    restyleQuestsUnclaimed: {
        type: OptionType.NUMBER | OptionType.CUSTOM,
        label: () => t(plugin.questify.option.restyleQuestsUnclaimed.label),
        description: () => t(plugin.questify.option.restyleQuestsUnclaimed.description),
        default: defaultUnclaimedColor, // Decimal, null (Discord Default)
        hidden: true
    },
    restyleQuestsClaimed: {
        type: OptionType.NUMBER | OptionType.CUSTOM,
        label: () => t(plugin.questify.option.restyleQuestsClaimed.label),
        description: () => t(plugin.questify.option.restyleQuestsClaimed.description),
        default: defaultClaimedColor, // Decimal, null (Discord Default)
        hidden: true
    },
    restyleQuestsIgnored: {
        type: OptionType.NUMBER | OptionType.CUSTOM,
        label: () => t(plugin.questify.option.restyleQuestsIgnored.label),
        description: () => t(plugin.questify.option.restyleQuestsIgnored.description),
        default: defaultIgnoredColor, // Decimal, null (Discord Default)
        hidden: true
    },
    restyleQuestsExpired: {
        type: OptionType.NUMBER | OptionType.CUSTOM,
        label: () => t(plugin.questify.option.restyleQuestsExpired.label),
        description: () => t(plugin.questify.option.restyleQuestsExpired.description),
        default: defaultExpiredColor, // Decimal, null (Discord Default)
        hidden: true
    },
    restyleQuestsGradient: {
        type: OptionType.STRING,
        label: () => t(plugin.questify.option.restyleQuestsGradient.label),
        description: () => t(plugin.questify.option.restyleQuestsGradient.description),
        default: defaultRestyleQuestsGradient, // "intense", "default", "black", "hide"
        hidden: true
    },
    restyleQuestsPreload: {
        type: OptionType.BOOLEAN,
        label: () => t(plugin.questify.option.restyleQuestsPreload.label),
        description: () => t(plugin.questify.option.restyleQuestsPreload.description),
        default: true,
        hidden: true
    },
    reorderQuests: {
        description: () => t(plugin.questify.option.reorderQuests.description),
        type: OptionType.COMPONENT,
        default: defaultQuestOrder,
        component: ReorderQuestsSetting,
    },
    unclaimedSubsort: {
        type: OptionType.STRING,
        label: () => t(plugin.questify.option.unclaimedSubsort.label),
        description: () => t(plugin.questify.option.unclaimedSubsort.description),
        default: "Expiring ASC", // "Recent ASC", "Recent DESC", "Expiring ASC", "Expiring DESC"
        hidden: true
    },
    claimedSubsort: {
        type: OptionType.STRING,
        label: () => t(plugin.questify.option.claimedSubsort.label),
        description: () => t(plugin.questify.option.claimedSubsort.description),
        default: "Claimed DESC", // "Recent ASC", "Recent DESC", "Claimed ASC", "Claimed DESC"
        hidden: true
    },
    ignoredSubsort: {
        type: OptionType.STRING,
        label: () => t(plugin.questify.option.ignoredSubsort.label),
        description: () => t(plugin.questify.option.ignoredSubsort.description),
        default: "Recent DESC", // "Recent ASC", "Recent DESC", "Expiring ASC", "Expiring DESC"
        hidden: true
    },
    expiredSubsort: {
        type: OptionType.STRING,
        label: () => t(plugin.questify.option.expiredSubsort.label),
        description: () => t(plugin.questify.option.expiredSubsort.description),
        default: "Expiring DESC", // "Recent ASC", "Recent DESC", "Expiring ASC", "Expiring DESC"
        hidden: true
    },
    unclaimedUnignoredQuests: {
        type: OptionType.NUMBER,
        label: () => t(plugin.questify.option.unclaimedUnignoredQuests.label),
        description: () => t(plugin.questify.option.unclaimedUnignoredQuests.description),
        default: 0, // Digit >= 0
        hidden: true
    },
    onQuestsPage: {
        type: OptionType.BOOLEAN,
        label: () => t(plugin.questify.option.onQuestsPage.label),
        description: () => t(plugin.questify.option.onQuestsPage.description),
        default: false,
        hidden: true
    },
    triggerQuestsRerender: {
        type: OptionType.BOOLEAN,
        label: () => t(plugin.questify.option.triggerQuestsRerender.label),
        description: () => t(plugin.questify.option.triggerQuestsRerender.description),
        default: false,
        hidden: true
    },
    ignoredQuestProfile: {
        type: OptionType.STRING,
        label: () => t(plugin.questify.option.ignoredQuestProfile.label),
        description: () => t(plugin.questify.option.ignoredQuestProfile.description),
        default: "private", // "shared", "private"
        hidden: true
    },
    rememberQuestPageSort: {
        type: OptionType.BOOLEAN,
        label: () => t(plugin.questify.option.rememberQuestPageSort.label),
        description: () => t(plugin.questify.option.rememberQuestPageSort.description),
        default: true,
        hidden: true
    },
    rememberQuestPageFilters: {
        type: OptionType.BOOLEAN,
        label: () => t(plugin.questify.option.rememberQuestPageFilters.label),
        description: () => t(plugin.questify.option.rememberQuestPageFilters.description),
        default: true,
        hidden: true
    },
    lastQuestPageSort: {
        type: OptionType.STRING,
        label: () => t(plugin.questify.option.lastQuestPageSort.label),
        description: () => t(plugin.questify.option.lastQuestPageSort.description),
        default: "questify" as string, // sort key
        hidden: true
    },
    lastQuestPageFilters: {
        type: OptionType.CUSTOM,
        label: () => t(plugin.questify.option.lastQuestPageFilters.label),
        description: () => t(plugin.questify.option.lastQuestPageFilters.description),
        default: {} as { [filter: string]: { group: string, filter: string; }; }, // Array of filters
        hidden: true
    },
    ignoredQuestIDs: {
        type: OptionType.CUSTOM,
        label: () => t(plugin.questify.option.ignoredQuestIDs.label),
        description: () => t(plugin.questify.option.ignoredQuestIDs.description),
        default: {} as Record<string, string[]>,
        hidden: true,
    }
});
