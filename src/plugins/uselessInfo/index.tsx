/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2024 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex and contributors
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import "./style.css";

import * as DataStore from "@api/DataStore";
import { plugin, t } from "@api/i18n";
import { showNotification } from "@api/Notifications";
import { definePluginSettings, Settings } from "@api/Settings";
import { BaseText } from "@components/BaseText";
import { Button } from "@components/Button";
import { Divider } from "@components/Divider";
import { FormSwitch } from "@components/FormSwitch";
import { Heading } from "@components/Heading";
import { Margins } from "@components/margins";
import { PcDevs } from "@utils/constants";
import { classNameFactory } from "@utils/css";
import { closeAllModals, ModalContent, ModalFooter, ModalHeader, ModalRoot, ModalSize, openModal } from "@utils/modal";
import definePlugin, { makeRange, OptionType } from "@utils/types";
import { React, Slider, useEffect, useState } from "@webpack/common";

let isRecordingGlobal: boolean = false;
const cl = classNameFactory("pc-useless-info-");

const GITHUB_RAW_URL =
    "https://raw.githubusercontent.com/tab2can/uselessInfo/main/data.json";
const CDN_FALLBACK_URL =
    "https://cdn.jsdelivr.net/gh/tab2can/uselessInfo@main/data.json";
const GITHUB_API_CONTENT_URL =
    "https://api.github.com/repos/tab2can/uselessInfo/contents/data.json?ref=main";

interface FactData {
    id: number;
    text: string;
    link?: string;
}

interface RawFactData {
    id: number;
    translations: {
        [lang: string]: {
            text: string;
            link?: string;
        };
    };
}

const factsData: FactData[] = [];
const shownFactIds: number[] = [];
let historyData: FactData[] = [];
let intervalId: number | null = null;

const HISTORY_KEY = "UselessInfo_History";
const SHOWN_IDS_KEY = "UselessInfo_ShownIds";
const FACTS_DATA_KEY = "UselessInfo_FactsData";
const LAST_UPDATE_KEY = "UselessInfo_LastUpdate";

const CACHE_DURATION = 8 * 60 * 60 * 1000;

async function loadFactsFromCache(): Promise<FactData[] | null> {
    try {
        const cachedData = await DataStore.get(FACTS_DATA_KEY);
        const lastUpdate = await DataStore.get(LAST_UPDATE_KEY);

        if (!cachedData || !Array.isArray(cachedData) || cachedData.length === 0) {
            console.log("[UselessInfo] No cached data found");
            return null;
        }

        if (lastUpdate && typeof lastUpdate === "number") {
            const now = Date.now();
            const cacheAge = now - lastUpdate;

            if (cacheAge < CACHE_DURATION) {
                console.log(`[UselessInfo] Loaded ${cachedData.length} facts from cache (age: ${Math.floor(cacheAge / (1000 * 60 * 60))} hours)`);
                factsData.length = 0;
                factsData.push(...cachedData);
                return cachedData;
            } else {
                console.log("[UselessInfo] Cache expired, will fetch fresh data");
            }
        }

        return null;
    } catch (error) {
        console.error("[UselessInfo] Failed to load cached facts:", error);
        return null;
    }
}

async function fetchFactsData(): Promise<FactData[]> {
    const urls = [GITHUB_RAW_URL, CDN_FALLBACK_URL];

    for (const url of urls) {
        try {
            const response = await fetch(url);
            if (response.ok) {
                const rawData = await response.json();

                let rawFactsArray: RawFactData[];
                if (Array.isArray(rawData)) {
                    rawFactsArray = rawData;
                } else if (rawData && typeof rawData === "object") {
                    if (Array.isArray(rawData.info)) {
                        rawFactsArray = rawData.info;
                    } else if (Array.isArray(rawData.facts)) {
                        rawFactsArray = rawData.facts;
                    } else if (Array.isArray(rawData.data)) {
                        rawFactsArray = rawData.data;
                    } else if (Array.isArray(rawData.items)) {
                        rawFactsArray = rawData.items;
                    } else {
                        console.error("[UselessInfo] Data is an object but no known array property found");
                        continue;
                    }
                } else {
                    console.error("[UselessInfo] Data is neither array nor object");
                    continue;
                }

                const userLocale = Settings.language?.locale || "en";
                const preferredLang = userLocale.toLowerCase().split("-")[0];

                const transformedData: FactData[] = rawFactsArray.map(item => {
                    const translation = item.translations[preferredLang];

                    return {
                        id: item.id,
                        text: translation.text,
                        link: translation.link
                    };
                });

                factsData.length = 0;
                factsData.push(...transformedData);
                console.log(`[UselessInfo] Successfully loaded ${factsData.length} facts in language: ${preferredLang}`);

                try {
                    await DataStore.set(FACTS_DATA_KEY, transformedData);
                    await DataStore.set(LAST_UPDATE_KEY, Date.now());
                    console.log("[UselessInfo] Facts cached successfully");
                } catch (error) {
                    console.error("[UselessInfo] Failed to cache facts:", error);
                }

                return transformedData;
            }
        } catch (error) {
            console.error(`[UselessInfo] Failed to fetch from ${url}:`, error);
        }
    }
    return [];
}

async function loadHistory(): Promise<FactData[]> {
    try {
        const stored = await DataStore.get(HISTORY_KEY);
        if (stored && Array.isArray(stored)) {
            historyData = stored;
        }
    } catch (error) {
        console.error("[UselessInfo] Failed to load history:", error);
    }
    return historyData;
}

function saveToHistory(fact: FactData) {
    historyData.unshift(fact);
    if (historyData.length > 100) {
        historyData = historyData.slice(0, 100);
    }
    DataStore.set(HISTORY_KEY, historyData.slice(0, 100)).catch(error =>
        console.error("[UselessInfo] Failed to save history:", error)
    );
    DataStore.set(SHOWN_IDS_KEY, shownFactIds).catch(error =>
        console.error("[UselessInfo] Failed to save ids:", error)
    );
}

function getRandomFact(): FactData | null {
    if (factsData.length === 0) return null;

    const { sameFact, lastNFacts } = settings.store;

    if (sameFact) {
        if (shownFactIds.length >= factsData.length) {
            shownFactIds.length = 0;
        }

        const availableFacts = factsData.filter(fact => !shownFactIds.includes(fact.id));

        if (availableFacts.length === 0) {
            shownFactIds.length = 0;
            return factsData[Math.floor(Math.random() * factsData.length)];
        }

        const randomFact = availableFacts[Math.floor(Math.random() * availableFacts.length)];
        shownFactIds.push(randomFact.id);

        return randomFact;
    } else {
        if (lastNFacts === 0) {
            const randomFact = factsData[Math.floor(Math.random() * factsData.length)];
            shownFactIds.push(randomFact.id);
            return randomFact;
        }
        const windowSize = Math.min(lastNFacts, shownFactIds.length);
        const recentIds = shownFactIds.slice(-windowSize);

        const availableFacts = factsData.filter(fact => !recentIds.includes(fact.id));

        if (availableFacts.length === 0) {
            const randomFact = factsData[Math.floor(Math.random() * factsData.length)];
            shownFactIds.push(randomFact.id);
            return randomFact;
        }

        const randomFact = availableFacts[Math.floor(Math.random() * availableFacts.length)];
        shownFactIds.push(randomFact.id);

        return randomFact;
    }
}

function showRandom() {
    console.log(`[UselessInfo] showRandom called, factsData length: ${factsData.length}`);
    const fact = getRandomFact();
    if (!fact) {
        console.error("[UselessInfo] No facts available");
        return;
    }

    console.log(`[UselessInfo] Showing random fact: ${fact.text.substring(0, 50)}...`);
    saveToHistory(fact);

    showNotification({
        title: t(plugin.uselessInfo.notification.title),
        body: fact.text,
        icon: "https://cdn.discordapp.com/emojis/1026533090627174460.png",
        onClick: fact.link ? () => window.open(fact.link, "_blank") : undefined,
        permanent: false,
        noPersist: true
    });
}

function startFactNotifications() {
    if (intervalId) {
        clearInterval(intervalId);
    }

    const { delay } = settings.store;
    if (delay === 0) return;

    intervalId = window.setInterval(() => {
        showRandom();
    }, delay * 60 * 1000);
}

function HistoryHotkeyRecorder() {
    const [isRecording, setIsRecording] = useState(false);

    const recordKeybind = (setIsRecording: (value: boolean) => void) => {
        const keys: Set<string> = new Set();
        const keyLists: string[][] = [];
        setIsRecording(true);
        isRecordingGlobal = true;

        const updateKeys = () => {
            if (
                keys.size === 0 ||
                !document.querySelector(`.${cl("key-recorder-button")}`)
            ) {
                const longestArray = keyLists.reduce((a, b) =>
                    a.length > b.length ? a : b
                );
                if (longestArray.length > 0) {
                    settings.store.historyHotkey = longestArray.map(
                        key => key.toLowerCase()
                    );
                }
                setIsRecording(false);
                isRecordingGlobal = false;
                document.removeEventListener("keydown", keydownListener);
                document.removeEventListener("keyup", keyupListener);
            }
            keyLists.push(Array.from(keys));
        };

        const keydownListener = (e: KeyboardEvent) => {
            const { key } = e;
            if (!keys.has(key)) {
                keys.add(key);
            }
            updateKeys();
        };
        const keyupListener = (e: KeyboardEvent) => {
            keys.delete(e.key);
            updateKeys();
        };
        document.addEventListener("keydown", keydownListener);
        document.addEventListener("keyup", keyupListener);
    };

    return (
        <div
            className={cl("key-recorder-container")}
        >
            <div>
                <Heading>{t(plugin.uselessInfo.option.historyHotkey.label)}</Heading>
            </div>
            <div
                onClick={() => recordKeybind(setIsRecording)}
                className={`${cl("key-recorder")} ${isRecording ? cl("recording") : ""}`}
            >
                {settings.store.historyHotkey
                    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                    .join(" + ")}
                <button
                    className={`${cl("key-recorder-button")} ${isRecording ? cl("recording-button") : ""}`}
                    disabled={isRecording}
                >
                    {isRecording ? t(plugin.uselessInfo.recording) : t(plugin.uselessInfo.record)}
                </button>
            </div>
        </div>
    );
}

function RandomFactHotkeyRecorder() {
    const [isRecording, setIsRecording] = useState(false);

    const recordKeybind = (setIsRecording: (value: boolean) => void) => {
        const keys: Set<string> = new Set();
        const keyLists: string[][] = [];
        setIsRecording(true);
        isRecordingGlobal = true;

        const updateKeys = () => {
            if (
                keys.size === 0 ||
                !document.querySelector(`.${cl("key-recorder-button")}`)
            ) {
                const longestArray = keyLists.reduce((a, b) =>
                    a.length > b.length ? a : b
                );
                if (longestArray.length > 0) {
                    settings.store.randomFactHotkey = longestArray.map(
                        key => key.toLowerCase()
                    );
                }
                setIsRecording(false);
                isRecordingGlobal = false;
                document.removeEventListener("keydown", keydownListener);
                document.removeEventListener("keyup", keyupListener);
            }
            keyLists.push(Array.from(keys));
        };

        const keydownListener = (e: KeyboardEvent) => {
            const { key } = e;
            if (!keys.has(key)) {
                keys.add(key);
            }
            updateKeys();
        };
        const keyupListener = (e: KeyboardEvent) => {
            keys.delete(e.key);
            updateKeys();
        };
        document.addEventListener("keydown", keydownListener);
        document.addEventListener("keyup", keyupListener);
    };

    return (
        <div
            className={cl("key-recorder-container")}
        >
            <div>
                <Heading>{t(plugin.uselessInfo.option.randomFactHotkey.label)}</Heading>
            </div>
            <div
                onClick={() => recordKeybind(setIsRecording)}
                className={`${cl("key-recorder")} ${isRecording ? cl("recording") : ""}`}
            >
                {settings.store.randomFactHotkey
                    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                    .join(" + ")}
                <button
                    className={`${cl("key-recorder-button")} ${isRecording ? cl("recording-button") : ""}`}
                    disabled={isRecording}
                >
                    {isRecording ? t(plugin.uselessInfo.recording) : t(plugin.uselessInfo.record)}
                </button>
            </div>
        </div>
    );
}

export function UselessModal({ modalProps }) {
    const close = () => modalProps.onClose();
    const [sameFact, setSameFact] = useState(settings.store.sameFact);
    const [history, setHistory] = useState<FactData[]>([]);
    const settingsRef = React.useRef<HTMLDivElement>(null);
    const historyRef = React.useRef<HTMLElement>(null);

    useEffect(() => {
        loadHistory().then(setHistory);
    }, []);

    useEffect(() => {
        const settingsEl = settingsRef.current;
        const historyEl = historyRef.current;

        if (!settingsEl || !historyEl) return;

        const syncHeights = () => {
            requestAnimationFrame(() => {
                const settingsHeight = settingsEl.offsetHeight;
                historyEl.style.maxHeight = settingsHeight + "px";
            });
        };
        syncHeights();

        const resizeObserver = new ResizeObserver(() => {
            syncHeights();
        });

        resizeObserver.observe(settingsEl);

        return () => {
            resizeObserver.disconnect();
        };
    }, [history, sameFact]);

    return (
        <ModalRoot {...modalProps} size={ModalSize.LARGE} className={cl("root")}>
            <ModalHeader>
                <BaseText size="lg" weight="semibold" style={{ flexGrow: 1 }}>{t(plugin.uselessInfo.modal.title)}</BaseText>
            </ModalHeader>
            <ModalContent className={cl("content")}>
                <section ref={historyRef} className={cl("history")}>
                    {history.length === 0 ? (
                        <div className={cl("no-history")}>
                            {t(plugin.uselessInfo.modal.history.none)}
                        </div>
                    ) : (
                        <ModalContent className={cl("history-list")}>
                            {history
                                .map((item, index) => (
                                    <div key={index} className={cl("history-item")}>
                                        <div className={cl("history-text")}>{item.text}</div>
                                        {item.link && (
                                            <a
                                                href={item.link}
                                                target="_blank"
                                                rel="noreferrer noopener"
                                                className={cl("history-link")}
                                            >
                                                {t(plugin.uselessInfo.modal.history.source)}
                                            </a>
                                        )}
                                    </div>
                                ))}
                        </ModalContent>
                    )}
                </section>
                <div ref={settingsRef} className={cl("settings")}>
                    <Heading>{t(plugin.uselessInfo.option.delay.label)}</Heading>
                    <Slider
                        markers={makeRange(0, 90, 5)}
                        initialValue={settings.store.delay}
                        stickToMarkers={true}
                        minValue={0}
                        maxValue={90}
                        onValueChange={val => {
                            settings.store.delay = val;
                        }}
                    />
                    <Divider />
                    <HistoryHotkeyRecorder />
                    <Divider />
                    <RandomFactHotkeyRecorder />
                    <Divider />
                    <div className={cl("switch")}>
                        <FormSwitch
                            title={t(plugin.uselessInfo.option.sameFact.label)}
                            value={sameFact}
                            onChange={val => {
                                settings.store.sameFact = val;
                                setSameFact(val);
                            }}
                        />
                    </div>
                    {!sameFact && (
                        <>
                            <Heading>{t(plugin.uselessInfo.option.lastNFacts.label)}</Heading>
                            <Slider
                                className={Margins.bottom16}
                                markers={makeRange(0, 50, 5)}
                                initialValue={settings.store.lastNFacts}
                                stickToMarkers={true}
                                minValue={0}
                                maxValue={50}
                                onValueChange={val => {
                                    settings.store.lastNFacts = val;
                                }}
                            />
                        </>
                    )}
                </div>
            </ModalContent>
            <ModalFooter className={cl("footer")} align="start" justify="between" direction="horizontal">
                <Button
                    className={cl("random-button")}
                    size="small"
                    variant="secondary"
                    onClick={() => {
                        showRandom();
                    }}
                >
                    {t(plugin.uselessInfo.modal.showRandom)}
                </Button>
                <Button
                    className={cl("close-button")}
                    size="small"
                    variant="secondary"
                    onClick={close}>
                    {t(plugin.uselessInfo.modal.close)}
                </Button>
            </ModalFooter>
        </ModalRoot>
    );
}

const openUselessModal = () => openModal(modalProps => <UselessModal modalProps={modalProps} />);

const settings = definePluginSettings({
    delay: {
        label: () => t(plugin.uselessInfo.option.delay.label),
        description: () => t(plugin.uselessInfo.option.delay.description),
        type: OptionType.NUMBER,
        markers: makeRange(1, 180, 1),
        default: 30,
        onChange: () => startFactNotifications(),
    },
    historyHotkey: {
        label: () => t(plugin.uselessInfo.option.historyHotkey.label),
        description: () => t(plugin.uselessInfo.option.historyHotkey.description),
        type: OptionType.COMPONENT,
        component: () => <HistoryHotkeyRecorder />,
        default: ["alt", "i"],
    },
    randomFactHotkey: {
        label: () => t(plugin.uselessInfo.option.randomFactHotkey.label),
        description: () => t(plugin.uselessInfo.option.randomFactHotkey.description),
        type: OptionType.COMPONENT,
        component: () => <RandomFactHotkeyRecorder />,
        default: ["alt", "u"],
    },
    sameFact: {
        label: () => t(plugin.uselessInfo.option.sameFact.label),
        description: () => t(plugin.uselessInfo.option.sameFact.description),
        type: OptionType.BOOLEAN,
        default: true,
    },
    lastNFacts: {
        label: () => t(plugin.uselessInfo.option.lastNFacts.label),
        description: () => t(plugin.uselessInfo.option.lastNFacts.description),
        type: OptionType.NUMBER,
        markers: makeRange(0, 50, 1),
        default: 5,
    },
});

export default definePlugin({
    name: "UselessInfo",
    description: () => t(plugin.uselessInfo.description),
    authors: [PcDevs.He4vuc],
    settings,

    async start() {
        document.addEventListener("keydown", this.event);
        try {
            const stored = await DataStore.get(HISTORY_KEY);
            if (stored && Array.isArray(stored)) {
                historyData = stored;
                console.log(`[UselessInfo] Loaded ${historyData.length} items from history`);
            }

            const storedIds = await DataStore.get(SHOWN_IDS_KEY);
            if (storedIds && Array.isArray(storedIds)) {
                shownFactIds.length = 0;
                shownFactIds.push(...storedIds);
                console.log(`[UselessInfo] Loaded ${shownFactIds.length} shown IDs`);
            }
        } catch (error) {
            console.error("[UselessInfo] Failed to load history from DataStore:", error);
        }
        const cachedFacts = await loadFactsFromCache();
        if (!cachedFacts || cachedFacts.length === 0) {
            await fetchFactsData();
        }

        // Start automatic notifications
        startFactNotifications();
    },
    stop() {
        document.removeEventListener("keydown", this.event);
        if (intervalId) {
            clearInterval(intervalId);
            intervalId = null;
        }
    },

    event(e: KeyboardEvent) {
        enum Modifiers {
            control = "ctrlKey",
            shift = "shiftKey",
            alt = "altKey",
            meta = "metaKey"
        }

        if (isRecordingGlobal) return;

        const { historyHotkey, randomFactHotkey } = settings.store;
        const pressedKey = e.key.toLowerCase();

        const matchesHotkey = (hotkey: string[]): boolean => {
            return hotkey.every(key => {
                const lowercasedKey = key.toLowerCase();

                if (lowercasedKey in Modifiers) {
                    return e[Modifiers[lowercasedKey]];
                }

                return pressedKey === lowercasedKey;
            });
        };
        if (!matchesHotkey(historyHotkey) && !matchesHotkey(randomFactHotkey)) {
            return;
        }

        closeAllModals();

        if (document.querySelector(`.${cl("root")}`)) return;

        if (matchesHotkey(historyHotkey)) {
            openUselessModal();
        }

        if (matchesHotkey(randomFactHotkey)) {
            showRandom();
        }
    }
});
