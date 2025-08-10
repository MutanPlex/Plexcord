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
import type { JSX } from "react";

type IconProps = JSX.IntrinsicElements["svg"];
type KeywordEntry = { regex: string, listIds: string[], listType: ListType, ignoreCase: boolean; };

let keywordEntries: KeywordEntry[] = [];
let currentUser: User;
let keywordLog: any[] = [];
let interceptor: (e: any) => void;

const recentMentionsPopoutClass = findByPropsLazy("recentMentionsPopout");
const tabClass = findByPropsLazy("inboxTitle", "tab");
const buttonClass = findByPropsLazy("size36");
const MenuHeader = findByCodeLazy(".getUnseenInviteCount())");
const Popout = findByCodeLazy("getProTip", "canCloseAllMessages:");
const createMessageRecord = findByCodeLazy(".createFromServer(", ".isBlockedForMessage", "messageReference:");
const KEYWORD_ENTRIES_KEY = "KeywordNotify_keywordEntries";
const KEYWORD_LOG_KEY = "KeywordNotify_log";

const cl = classNameFactory("pc-keywordnotify-");

async function addKeywordEntry(forceUpdate: () => void) {
    keywordEntries.push({ regex: "", listIds: [], listType: ListType.BlackList, ignoreCase: false });
    await DataStore.set(KEYWORD_ENTRIES_KEY, keywordEntries);
    forceUpdate();
}

async function removeKeywordEntry(idx: number, forceUpdate: () => void) {
    keywordEntries.splice(idx, 1);
    await DataStore.set(KEYWORD_ENTRIES_KEY, keywordEntries);
    forceUpdate();
}

function safeMatchesRegex(str: string, regex: string, flags: string) {
    try {
        return str.match(new RegExp(regex, flags));
    } catch {
        return false;
    }
}

enum ListType {
    BlackList = "BlackList",
    Whitelist = "Whitelist"
}

interface BaseIconProps extends IconProps {
    viewBox: string;
}

function highlightKeywords(str: string, entries: KeywordEntry[]) {
    const regexes = entries.map(e => {
        try {
            return new RegExp(e.regex, "g" + (e.ignoreCase ? "i" : ""));
        } catch {
            return null;
        }
    }).filter(Boolean) as RegExp[];

    const matches = regexes.flatMap(r => str.match(r) || []);
    if (!matches.length) return [str];

    const match = matches[0];
    const idx = str.indexOf(match);
    return [
        str.substring(0, idx),
        <span className="highlight" key={match}>{match}</span>,
        str.substring(idx + match.length)
    ];
}

function Collapsible({ title, children }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <Button
                onClick={() => setIsOpen(!isOpen)}
                look={Button.Looks.BLANK}
                size={Button.Sizes.ICON}
                className={cl("collapsible")}>
                <div style={{ display: "flex", alignItems: "center" }}>
                    <div style={{ marginLeft: "auto", color: "var(--text-muted)", paddingRight: "5px" }}>{isOpen ? "▼" : "▶"}</div>
                    <Forms.FormTitle tag="h4">{title}</Forms.FormTitle>
                </div>
            </Button>
            {isOpen && children}
        </div>
    );
}

function ListedIds({ listIds, setListIds }) {
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
                                listIds[index] = e;
                                setListIds(listIds);
                                update();
                            }}
                        />
                    </div>
                    <Button
                        onClick={() => {
                            listIds.splice(index, 1);
                            setListIds(listIds);
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

function ListTypeSelector({ listType, setListType }: { listType: ListType, setListType: (v: ListType) => void; }) {
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
        Object.assign(keywordEntries[index], updates);
        await DataStore.set(KEYWORD_ENTRIES_KEY, keywordEntries);
        update();
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
                            <ListedIds listIds={entry.listIds} setListIds={e => updateEntry(i, { listIds: e })} />
                        </div>
                    </Flex>
                    <div className={[Margins.top8, Margins.bottom8].join(" ")} />
                    <Flex flexDirection="row">
                        <Button onClick={() => {
                            entry.listIds.push("");
                            update();
                        }}>Add ID</Button>
                        <div style={{ flexGrow: 1 }}>
                            <ListTypeSelector listType={entry.listType} setListType={e => updateEntry(i, { listType: e })} />
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
    authors: [PcDevs.camila314, PcDevs.x3rt],
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
                match: /:(\i)===\i\.\i\.MENTIONS\?\(0,.+?setTab:(\i),onJump:(\i),badgeState:\i,closePopout:(\i)/,
                replace: ": $1 === 8 ? $self.tryKeywordMenu($2, $3, $4) $&"
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
        this.onUpdate = () => null;
        currentUser = UserStore.getCurrentUser();
        keywordEntries = await DataStore.get(KEYWORD_ENTRIES_KEY) ?? [];
        await DataStore.set(KEYWORD_ENTRIES_KEY, keywordEntries);

        const savedLogs = await DataStore.get(KEYWORD_LOG_KEY) ?? [];
        savedLogs.map(e => JSON.parse(e)).forEach(e => this.addToLog(e));

        interceptor = e => this.modify(e);
        FluxDispatcher.addInterceptor(interceptor);
    },

    stop() {
        const index = FluxDispatcher._interceptors.indexOf(interceptor);
        if (index > -1) FluxDispatcher._interceptors.splice(index, 1);
    },

    applyKeywordEntries(m: Message) {
        let matches = false;

        for (const entry of keywordEntries) {
            if (entry.regex === "") {
                continue;
            }

            let listed = entry.listIds.some(id => id === m.channel_id || id === m.author.id);
            if (!listed) {
                const channel = ChannelStore.getChannel(m.channel_id);
                if (channel != null) {
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

            if (settings.store.ignoreBots && m.author.bot && (!whitelistMode || !entry.listIds.includes(m.author.id))) {
                continue;
            }

            const flags = entry.ignoreCase ? "i" : "";
            if (safeMatchesRegex(m.content, entry.regex, flags)) {
                matches = true;
            } else {
                for (const embed of m.embeds as any) {
                    if (safeMatchesRegex(embed.description, entry.regex, flags) || safeMatchesRegex(embed.title, entry.regex, flags)) {
                        matches = true;
                        break;
                    } else if (embed.fields != null) {
                        for (const field of embed.fields as Array<{ name: string, value: string; }>) {
                            if (safeMatchesRegex(field.value, entry.regex, flags) || safeMatchesRegex(field.name, entry.regex, flags)) {
                                matches = true;
                                break;
                            }
                        }
                    }
                }
            }
        }

        if (matches) {
            // @ts-ignore
            m.mentions.push({ id: currentUser.id });

            if (m.author.id !== currentUser.id)
                this.addToLog(m);
        }
    },

    addToLog(m: Message) {
        if (m == null || keywordLog.some(e => e.id === m.id))
            return;

        DataStore.update(KEYWORD_LOG_KEY, (log: string[] = []) => {
            return [...log, JSON.stringify(m)];
        });

        const thing = createMessageRecord(m);
        keywordLog.push(thing);
        keywordLog.sort((a, b) => b.timestamp - a.timestamp);

        while (keywordLog.length > settings.store.amountToKeep) {
            keywordLog.pop();
        }

        this.onUpdate();
    },

    deleteKeyword(id) {
        keywordLog = keywordLog.filter(e => e.id !== id);
        DataStore.update(KEYWORD_LOG_KEY, (log: string[] = []) =>
            log.filter(entry => {
                try { return JSON.parse(entry).id !== id; }
                catch { return true; }
            })
        );
        this.onUpdate();
    },

    keywordTabBar() {
        return (
            <TabBar.Item className={classes(tabClass.tab, tabClass.expanded)} id={8}>
                Keywords
            </TabBar.Item>
        );
    },

    tryKeywordMenu(setTab, onJump, closePopout) {
        const clearAll = () => {
            keywordLog = [];
            DataStore.set(KEYWORD_LOG_KEY, []);
            this.onUpdate();
        };

        const header = (
            <>
                <MenuHeader tab={8} setTab={setTab} closePopout={closePopout} badgeState={{ badgeForYou: false }} />
                <Tooltip text="Clear All">
                    {({ onMouseLeave, onMouseEnter }) => (
                        <div className={classes(tabClass.controlButton, buttonClass.button, buttonClass.tertiary, buttonClass.size32)}
                            onMouseLeave={onMouseLeave}
                            onMouseEnter={onMouseEnter}
                            onClick={clearAll}>
                            <DoubleCheckmarkIcon />
                        </div>
                    )}
                </Tooltip>
            </>
        );

        const [tempLogs, setKeywordLog] = useState(keywordLog);
        this.onUpdate = () => setKeywordLog([...keywordLog]);

        const messageRender = (e, t) => {
            e._keyword = true;
            e.customRenderedContent = {
                content: highlightKeywords(e.content, keywordEntries)
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

    modify(e) {
        if (e.type === "MESSAGE_CREATE" || e.type === "MESSAGE_UPDATE") {
            this.applyKeywordEntries(e.message);
        } else if (e.type === "LOAD_MESSAGES_SUCCESS") {
            for (let msg = 0; msg < e.messages.length; ++msg) {
                this.applyKeywordEntries(e.messages[msg]);
            }
        }
    }
});
