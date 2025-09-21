/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2023 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import "./style.css";

import { DataStore } from "@api/index";
import { definePluginSettings } from "@api/Settings";
import { classNameFactory } from "@api/Styles";
import { Flex } from "@components/Flex";
import { DeleteIcon } from "@components/Icons";
import { Message, User } from "@plexcord/discord-types";
import { PcDevs } from "@utils/constants";
import { Margins } from "@utils/margins";
import { classes } from "@utils/misc";
import { useForceUpdater } from "@utils/react";
import definePlugin, { OptionType } from "@utils/types";
import { findByCodeLazy, findByPropsLazy } from "@webpack";
import { Button, ChannelStore, FluxDispatcher, Forms, Select, SelectedChannelStore, Switch, TabBar, TextInput, Tooltip, UserStore, useState } from "@webpack/common";
import type { SVGAttributes } from "react";

type IconProps = SVGAttributes<SVGSVGElement>;

interface KeywordEntry {
    regex: string;
    listIds: string[];
    listType: ListType;
    ignoreCase: boolean;
}

interface MessageEmbed {
    description?: string;
    title?: string;
    fields?: Array<{ name?: string; value?: string; } | any>;
}

interface KeywordMessageExtensions {
    _keyword?: boolean;
    customRenderedContent?: { content: any; };
}

interface MentionUser {
    id: string;
    [key: string]: any;
}

type SafeMessage = Message & KeywordMessageExtensions & {
    embeds: MessageEmbed[];
    mentions: (MentionUser | any)[];
};

let keywordEntries: KeywordEntry[] = [];
let currentUser: User;
let keywordLog: any[] = [];
let interceptor: (e: any) => void;
const regexCache = new Map<string, RegExp>();

const recentMentionsPopoutClass = findByPropsLazy("recentMentionsPopout");
const tabClass = findByPropsLazy("inboxTitle", "tab");
const buttonClass = findByPropsLazy("size36");
const Popout = findByCodeLazy("getProTip", "canCloseAllMessages:");
const createMessageRecord = findByCodeLazy(".createFromServer(", ".isBlockedForMessage", "messageReference:");
const KEYWORD_ENTRIES_KEY = "KeywordNotify_keywordEntries";
const KEYWORD_LOG_KEY = "KeywordNotify_log";

const cl = classNameFactory("pc-keywordnotify-");

enum ListType {
    BlackList = "BlackList",
    Whitelist = "Whitelist"
}

interface BaseIconProps extends IconProps {
    viewBox: string;
}

function getCachedRegex(pattern: string, flags: string): RegExp | null {
    const key = `${pattern}|||${flags}`;

    if (regexCache.has(key)) {
        return regexCache.get(key) || null;
    }

    try {
        const regex = new RegExp(pattern, flags);
        regexCache.set(key, regex);
        return regex;
    } catch (error) {
        console.warn(`Invalid regex pattern: ${pattern}`, error);
        return null;
    }
}

function clearRegexCache() {
    regexCache.clear();
}

async function addKeywordEntry(forceUpdate: () => void) {
    try {
        keywordEntries.push({
            regex: "",
            listIds: [],
            listType: ListType.BlackList,
            ignoreCase: false
        });

        await DataStore.set(KEYWORD_ENTRIES_KEY, keywordEntries);
        clearRegexCache();
        forceUpdate();
    } catch (error) {
        console.error("Failed to add keyword entry:", error);
    }
}

async function removeKeywordEntry(idx: number, forceUpdate: () => void) {
    try {
        if (idx >= 0 && idx < keywordEntries.length) {
            keywordEntries.splice(idx, 1);
            await DataStore.set(KEYWORD_ENTRIES_KEY, keywordEntries);
            clearRegexCache();
            forceUpdate();
        }
    } catch (error) {
        console.error("Failed to remove keyword entry:", error);
    }
}

function safeMatchesRegex(str: string | null | undefined, pattern: string, flags: string): boolean {
    if (!str || typeof str !== "string" || !pattern) {
        return false;
    }

    const regex = getCachedRegex(pattern, flags);
    if (!regex) {
        return false;
    }

    try {
        return regex.test(str);
    } catch (error) {
        console.warn("Regex test failed:", error);
        return false;
    }
}

function highlightKeywords(str: string, entries: KeywordEntry[]) {
    if (!str || typeof str !== "string") {
        return [str || ""];
    }

    const validRegexes: RegExp[] = [];

    for (const entry of entries) {
        if (entry.regex) {
            const flags = "g" + (entry.ignoreCase ? "i" : "");
            const regex = getCachedRegex(entry.regex, flags);
            if (regex) {
                validRegexes.push(regex);
            }
        }
    }

    if (validRegexes.length === 0) {
        return [str];
    }

    const matches = validRegexes.flatMap(r => {
        try {
            return str.match(r) || [];
        } catch {
            return [];
        }
    });

    if (!matches.length) return [str];

    const match = matches[0];
    const idx = str.indexOf(match);
    return [
        str.substring(0, idx),
        <span className="highlight" key={match}>{match}</span>,
        str.substring(idx + match.length)
    ];
}

function Collapsible({ title, children }: { title: string; children: React.ReactNode; }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <Button
                onClick={() => setIsOpen(!isOpen)}
                look={Button.Looks.BLANK}
                size={Button.Sizes.ICON}
                className={cl("collapsible")}>
                <div style={{ display: "flex", alignItems: "center" }}>
                    <div style={{ marginLeft: "auto", color: "var(--text-muted)", paddingRight: "5px" }}>
                        {isOpen ? "▼" : "▶"}
                    </div>
                    <Forms.FormTitle tag="h4">{title}</Forms.FormTitle>
                </div>
            </Button>
            {isOpen && children}
        </div>
    );
}

function ListedIds({ listIds, setListIds }: { listIds: string[]; setListIds: (ids: string[]) => void; }) {
    const update = useForceUpdater();

    return (
        <>
            {listIds.map((value: string, index: number) => (
                <Flex flexDirection="row" style={{ marginBottom: "5px" }} key={index}>
                    <div style={{ flexGrow: 1 }}>
                        <TextInput
                            placeholder="ID"
                            spellCheck={false}
                            value={value}
                            onChange={e => {
                                const newListIds = [...listIds];
                                newListIds[index] = e;
                                setListIds(newListIds);
                                update();
                            }}
                        />
                    </div>
                    <Button
                        onClick={() => {
                            const newListIds = [...listIds];
                            newListIds.splice(index, 1);
                            setListIds(newListIds);
                            update();
                        }}
                        look={Button.Looks.BLANK}
                        size={Button.Sizes.ICON}
                        className={cl("delete")}>
                        <DeleteIcon />
                    </Button>
                </Flex>
            ))}
        </>
    );
}

function ListTypeSelector({ listType, setListType }: { listType: ListType; setListType: (v: ListType) => void; }) {
    return (
        <Select
            options={[
                { label: "Whitelist", value: ListType.Whitelist },
                { label: "Blacklist", value: ListType.BlackList }
            ]}
            placeholder={"Select a list type"}
            isSelected={v => v === listType}
            closeOnSelect={true}
            select={setListType}
            serialize={v => v}
        />
    );
}

function KeywordEntries() {
    const update = useForceUpdater();

    const updateEntry = async (index: number, updates: Partial<KeywordEntry>) => {
        try {
            if (index >= 0 && index < keywordEntries.length) {
                Object.assign(keywordEntries[index], updates);
                await DataStore.set(KEYWORD_ENTRIES_KEY, keywordEntries);
                clearRegexCache();
                update();
            }
        } catch (error) {
            console.error("Failed to update keyword entry:", error);
        }
    };

    return (
        <>
            {keywordEntries.map((entry, i) => (
                <Collapsible title={`Keyword Entry ${i + 1}`} key={i}>
                    <Flex flexDirection="row">
                        <div style={{ flexGrow: 1 }}>
                            <TextInput
                                placeholder="example|regex"
                                spellCheck={false}
                                value={entry.regex}
                                onChange={e => updateEntry(i, { regex: e })}
                            />
                        </div>
                        <Button
                            onClick={() => removeKeywordEntry(i, update)}
                            look={Button.Looks.BLANK}
                            size={Button.Sizes.ICON}
                            className={cl("delete")}>
                            <DeleteIcon />
                        </Button>
                    </Flex>
                    <Switch
                        value={entry.ignoreCase}
                        onChange={() => updateEntry(i, { ignoreCase: !entry.ignoreCase })}
                        style={{ marginTop: "0.5em", marginRight: "40px" }}
                    >
                        Ignore Case
                    </Switch>
                    <Forms.FormTitle tag="h5">Whitelist/Blacklist</Forms.FormTitle>
                    <Flex flexDirection="row">
                        <div style={{ flexGrow: 1 }}>
                            <ListedIds
                                listIds={entry.listIds}
                                setListIds={newIds => updateEntry(i, { listIds: newIds })}
                            />
                        </div>
                    </Flex>
                    <div className={[Margins.top8, Margins.bottom8].join(" ")} />
                    <Flex flexDirection="row">
                        <Button onClick={() => {
                            const newIds = [...entry.listIds, ""];
                            updateEntry(i, { listIds: newIds });
                        }}>Add ID</Button>
                        <div style={{ flexGrow: 1 }}>
                            <ListTypeSelector
                                listType={entry.listType}
                                setListType={e => updateEntry(i, { listType: e })}
                            />
                        </div>
                    </Flex>
                </Collapsible>
            ))}
            <div><Button onClick={() => addKeywordEntry(update)}>Add Keyword Entry</Button></div>
        </>
    );
}

function DoubleCheckmarkIcon(props: IconProps) {
    return (
        <svg
            {...props}
            className={classes(props.className, "pc-double-checkmark-icon", "pc-icon")}
            role="img"
            width={16}
            height={16}
            viewBox="0 0 24 24"
        >
            <path fill="currentColor"
                d="M16.7 8.7a1 1 0 0 0-1.4-1.4l-3.26 3.24a1 1 0 0 0 1.42 1.42L16.7 8.7ZM3.7 11.3a1 1 0 0 0-1.4 1.4l4.5 4.5a1 1 0 0 0 1.4-1.4l-4.5-4.5Z"
            />
            <path fill="currentColor"
                d="M21.7 9.7a1 1 0 0 0-1.4-1.4L13 15.58l-3.3-3.3a1 1 0 0 0-1.4 1.42l4 4a1 1 0 0 0 1.4 0l8-8Z"
            />
        </svg>
    );
}

const settings = definePluginSettings({
    ignoreBots: {
        type: OptionType.BOOLEAN,
        description: "Ignore messages from bots",
        default: true
    },
    amountToKeep: {
        type: OptionType.NUMBER,
        description: "Amount of messages to keep in the log",
        default: 50
    },
    keywords: {
        type: OptionType.COMPONENT,
        description: "Manage keywords",
        component: () => <KeywordEntries />
    }
});

export default definePlugin({
    name: "KeywordNotify",
    authors: [PcDevs.camila314, PcDevs.x3rt, PcDevs.MutanPlex],
    description: "Sends a notification if a given message matches certain keywords or regexes",
    settings,
    patches: [
        {
            find: "#{intl::UNREADS_TAB_LABEL})}",
            replacement: {
                match: /,(\i\?\(0,\i\.jsxs\)\(\i\.\i\i\.Item)/,
                replace: ",$self.keywordTabBar()$&"
            }
        },
        {
            find: "location:\"RecentsPopout\"});",
            replacement: {
                match: /(?<=setTab:(\i),badgeState:\i,closePopout:(\i).{0,50}):(\i)===\i\.\i\.MENTIONS\?\(0,.+?onJump:(\i)/,
                replace: ": $3 === 8 ? $self.tryKeywordMenu($1, $4, $2) $&"
            }
        },
        {
            find: ".guildFilter:null",
            replacement: [
                {
                    match: /function (\i)\(\i\){let{message:\i,gotoMessage/,
                    replace: "$self.renderMsg = $1; $&"
                },
                {
                    match: /onClick:\(\)=>(\i\.\i\.deleteRecentMention\((\i)\.id\))/,
                    replace: "onClick: () => $2._keyword ? $self.deleteKeyword($2.id) : $1"
                }
            ]
        },
    ],

    async start() {
        try {
            this.onUpdate = () => null;
            currentUser = UserStore.getCurrentUser();

            keywordEntries = await DataStore.get(KEYWORD_ENTRIES_KEY) ?? [];
            await DataStore.set(KEYWORD_ENTRIES_KEY, keywordEntries);

            const savedLogs = await DataStore.get(KEYWORD_LOG_KEY) ?? [];
            keywordLog = [];

            for (const logEntry of savedLogs) {
                try {
                    const parsed = JSON.parse(logEntry);
                    this.addToLog(parsed);
                } catch (error) {
                    console.warn("Failed to parse log entry:", error);
                }
            }

            interceptor = e => this.modify(e);
            FluxDispatcher.addInterceptor(interceptor);
        } catch (error) {
            console.error("Failed to start KeywordNotify plugin:", error);
        }
    },

    stop() {
        try {
            const index = FluxDispatcher._interceptors?.indexOf(interceptor);
            if (index !== undefined && index > -1) {
                FluxDispatcher._interceptors.splice(index, 1);
            }

            keywordLog = [];
            clearRegexCache();

            if (this.onUpdate) {
                this.onUpdate = () => null;
            }
        } catch (error) {
            console.error("Failed to stop KeywordNotify plugin:", error);
        }
    },

    applyKeywordEntries(m: SafeMessage) {
        if (!m || !m.content && (!m.embeds || m.embeds.length === 0)) {
            return;
        }

        let matches = false;

        for (const entry of keywordEntries) {
            if (!entry.regex) {
                continue;
            }

            let listed = entry.listIds.some(id =>
                id === m.channel_id ||
                id === m.author?.id
            );

            if (!listed) {
                const channel = ChannelStore.getChannel(m.channel_id);
                if (channel?.guild_id) {
                    listed = entry.listIds.some(id => id === channel.guild_id);
                }
            }

            const whitelistMode = entry.listType === ListType.Whitelist;

            if (!whitelistMode && listed) {
                continue;
            }

            if (whitelistMode && !listed) {
                continue;
            }

            if (settings.store.ignoreBots &&
                m.author?.bot &&
                (!whitelistMode || !entry.listIds.includes(m.author.id))) {
                continue;
            }

            const flags = entry.ignoreCase ? "i" : "";

            if (safeMatchesRegex(m.content, entry.regex, flags)) {
                matches = true;
                break;
            }

            if (m.embeds && m.embeds.length > 0) {
                for (const embed of m.embeds) {
                    if (safeMatchesRegex(embed.description, entry.regex, flags) ||
                        safeMatchesRegex(embed.title, entry.regex, flags)) {
                        matches = true;
                        break;
                    }

                    if (embed.fields && Array.isArray(embed.fields)) {
                        for (const field of embed.fields) {
                            if (field && typeof field === "object" && field !== null) {
                                const typedField = field as { name?: string; value?: string; };
                                if (safeMatchesRegex(typedField.value, entry.regex, flags) ||
                                    safeMatchesRegex(typedField.name, entry.regex, flags)) {
                                    matches = true;
                                    break;
                                }
                            }
                        }
                    }

                    if (matches) break;
                }
            }

            if (matches) break;
        }

        if (matches) {
            try {
                if (!m.mentions) {
                    m.mentions = [];
                }

                if (!m.mentions) {
                    m.mentions = [];
                }

                if (!m.mentions.some(mention => {
                    if (mention && typeof mention === "object" && mention !== null) {
                        const typedMention = mention as { id?: string; };
                        return typedMention.id === currentUser.id;
                    }
                    return false;
                })) {
                    m.mentions.push({ id: currentUser.id } as any);
                }

                if (m.author?.id !== currentUser.id) {
                    this.addToLog(m);
                }
            } catch (error) {
                console.error("Failed to process keyword match:", error);
            }
        }
    },

    addToLog(m: Message) {
        if (!m || keywordLog.some(e => e.id === m.id)) {
            return;
        }

        try {
            DataStore.update(KEYWORD_LOG_KEY, (log: string[] = []) => {
                const newLog = [...log, JSON.stringify(m)];
                return newLog.slice(-settings.store.amountToKeep);
            });

            const thing = createMessageRecord(m);
            keywordLog.push(thing);
            keywordLog.sort((a, b) => b.timestamp - a.timestamp);

            while (keywordLog.length > settings.store.amountToKeep) {
                keywordLog.pop();
            }

            if (this.onUpdate) {
                this.onUpdate();
            }
        } catch (error) {
            console.error("Failed to add message to keyword log:", error);
        }
    },

    deleteKeyword(id: string) {
        try {
            keywordLog = keywordLog.filter(e => e && e.id !== id);

            DataStore.update(KEYWORD_LOG_KEY, (log: string[] = []) =>
                log.filter(entry => {
                    try {
                        const parsed = JSON.parse(entry);
                        return parsed && parsed.id !== id;
                    } catch {
                        return true;
                    }
                })
            );

            if (this.onUpdate) {
                this.onUpdate();
            }
        } catch (error) {
            console.error("Failed to delete keyword:", error);
        }
    },

    keywordTabBar() {
        return (
            <TabBar.Item className={classes(tabClass.tab, tabClass.expanded)} id={8}>
                Keywords
            </TabBar.Item>
        );
    },

    tryKeywordMenu(setTab: (tab: number) => void, onJump: Function, closePopout: Function) {
        const clearAll = async () => {
            try {
                keywordLog = [];
                await DataStore.set(KEYWORD_LOG_KEY, []);
                if (this.onUpdate) {
                    this.onUpdate();
                }
            } catch (error) {
                console.error("Failed to clear keyword log:", error);
            }
        };

        const header = (
            <>
                <Tooltip text="Clear All">
                    {({ onMouseLeave, onMouseEnter }) => (
                        <div className={classes(tabClass.controlButton, buttonClass.button, buttonClass.tertiary, buttonClass.size32, Margins.left16)}
                            onMouseLeave={onMouseLeave}
                            onMouseEnter={onMouseEnter}
                            onClick={clearAll}>
                            <DoubleCheckmarkIcon />
                        </div>
                    )}
                </Tooltip>
            </>
        );

        const [tempLogs, setKeywordLog] = useState([...keywordLog]);
        this.onUpdate = () => setKeywordLog([...keywordLog]);

        const messageRender = (e: SafeMessage, t: Function) => {
            e._keyword = true;
            e.customRenderedContent = {
                content: highlightKeywords(e.content || "", keywordEntries)
            };
            return [this.renderMsg({ message: e, gotoMessage: t, dismissible: true })];
        };

        const channel = ChannelStore.getChannel(SelectedChannelStore.getChannelId());

        return (
            <>
                <Popout
                    className={classes(recentMentionsPopoutClass.recentMentionsPopout)}
                    renderHeader={() => header}
                    renderMessage={messageRender}
                    channel={channel}
                    onJump={onJump}
                    onFetch={() => null}
                    onCloseMessage={this.deleteKeyword}
                    loadMore={() => null}
                    messages={tempLogs}
                    renderEmptyState={() => null}
                    canCloseAllMessages={true}
                />
            </>
        );
    },

    modify(e: any) {
        try {
            if (e.type === "MESSAGE_CREATE" || e.type === "MESSAGE_UPDATE") {
                this.applyKeywordEntries(e.message);
            } else if (e.type === "LOAD_MESSAGES_SUCCESS") {
                if (e.messages && Array.isArray(e.messages)) {
                    for (const msg of e.messages) {
                        this.applyKeywordEntries(msg);
                    }
                }
            }
        } catch (error) {
            console.error("Failed to process message event:", error);
        }
    }
});
