/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2024 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import "./styles.css";

import { plugin, t } from "@api/i18n";
import { definePluginSettings } from "@api/Settings";
import { Card } from "@components/Card";
import ErrorBoundary from "@components/ErrorBoundary";
import { HeadingTertiary } from "@components/Heading";
import { Message } from "@plexcord/discord-types";
import { PcDevs } from "@utils/constants";
import { classNameFactory } from "@utils/css";
import { Margins } from "@utils/margins";
import { classes } from "@utils/misc";
import definePlugin, { OptionType } from "@utils/types";
import { React, TextInput } from "@webpack/common";

let blockedKeywords: Array<RegExp>;
const cl = classNameFactory("pc-block-keywords-");

function splitPatterns(input: string): string[] {
    return input
        .replace(/\[([^\]]*)\]/g, m => m.replace(/,/g, "\x00")) // protect commas in [...]
        .replace(/\{(\d+,?\d*|,\d+)\}/g, m => m.replace(",", "\x00")) // protect commas in {n,m}
        .split(",")
        .map(s => s.replace(/\x00/g, ",").trim())
        .filter(Boolean);
}

function RegexHelper() {
    const [testInput, setTestInput] = React.useState("");
    const { blockedWords, caseSensitive, useRegex } = settings.use(["blockedWords", "caseSensitive", "useRegex"]);

    const results = React.useMemo(() => {
        const caseSensitiveFlag = caseSensitive ? "" : "i";
        return splitPatterns(blockedWords)
            .map(pattern => {
                try {
                    const regex = useRegex
                        ? new RegExp(pattern, caseSensitiveFlag)
                        : new RegExp(`\\b${pattern.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\b`, caseSensitiveFlag);
                    return { pattern, matches: regex.test(testInput) };
                } catch (e: unknown) {
                    return { pattern, matches: false, error: e instanceof Error ? e.message : String(e) };
                }
            });
    }, [testInput, blockedWords, caseSensitive, useRegex]);

    return (
        <Card className={cl("regex")}>
            <HeadingTertiary className={Margins.bottom8}>{t(plugin.blockKeywords.regexHelper.title)}</HeadingTertiary>
            <TextInput
                type="text"
                placeholder={t(plugin.blockKeywords.regexHelper.placeholder)}
                value={testInput}
                onChange={setTestInput}
                maxLength={null}
            />
            {results.length === 0 ?
                <Card
                    key="pc-no-patterns-regex"
                    variant="warning"
                    className={classes(cl("card"), Margins.top8)}
                >
                    <code>{t(plugin.blockKeywords.regexHelper.noPatterns)}</code>
                </Card> : (
                    results.map(({ pattern, matches, error }, i) => (
                        <Card
                            key={`pc-pattern-card-${i}`}
                            variant={error ? "danger" : matches ? "success" : "primary"}
                            className={classes(cl("card"), Margins.top8)}
                        >
                            <code>{pattern}</code>
                            {error && <span className={cl("error")}>{error}</span>}
                        </Card>
                    )))}
        </Card>
    );
}

const settings = definePluginSettings({
    blockedWords: {
        label: () => t(plugin.blockKeywords.option.blockedWords.label),
        description: () => t(plugin.blockKeywords.option.blockedWords.description),
        type: OptionType.STRING,
        default: "blockedKeyword",
        restartNeeded: true
    },
    useRegex: {
        label: () => t(plugin.blockKeywords.option.useRegex.label),
        description: () => t(plugin.blockKeywords.option.useRegex.description),
        type: OptionType.BOOLEAN,
        default: false,
        restartNeeded: true
    },
    regexHelper: {
        label: () => t(plugin.blockKeywords.option.regexHelper.label),
        description: () => t(plugin.blockKeywords.option.regexHelper.description),
        type: OptionType.COMPONENT,
        component: () => <ErrorBoundary noop><RegexHelper /></ErrorBoundary>,
    },
    caseSensitive: {
        label: () => t(plugin.blockKeywords.option.caseSensitive.label),
        description: () => t(plugin.blockKeywords.option.caseSensitive.description),
        type: OptionType.BOOLEAN,
        default: false,
        restartNeeded: true
    },
    ignoreBlockedMessages: {
        label: () => t(plugin.blockKeywords.option.ignoreBlockedMessages.label),
        description: () => t(plugin.blockKeywords.option.ignoreBlockedMessages.description),
        type: OptionType.BOOLEAN,
        default: true,
        restartNeeded: true,
    },
}, {
    regexHelper: {
        hidden() { return !this.store.useRegex; }
    }
});

export function containsBlockedKeywords(message: Message) {
    if (!blockedKeywords) return false;

    // test a nullable string against all keywords
    const testField = (text: string | null | undefined) => text != null && blockedKeywords.some(regex => regex.test(text));

    return blockedKeywords.some(regex =>
        regex.test(message.content)) || message.embeds.some(embed =>
            testField(embed.rawDescription) || testField(embed.rawTitle));
}

export default definePlugin({
    name: "BlockKeywords",
    description: () => t(plugin.blockKeywords.description),
    authors: [PcDevs.catcraft, PcDevs.MutanPlex, PcDevs.secp192k1],
    tags: ["privacy", "chat"],

    patches: [
        {
            find: "_channelMessages={}",
            predicate: () => settings.store.blockedWords !== "",
            replacement: {
                match: /static commit\((\i)\)\{/g,
                replace: "$&$1=$self.blockMessagesWithKeywords($1);"
            }
        },
        {
            find: '"MessageStore"',
            predicate: () => settings.store.ignoreBlockedMessages && settings.store.blockedWords !== "",
            replacement: [
                {
                    match: /(?<=MESSAGE_CREATE:function\((\i)\){)/,
                    replace: (_, props) => `if($self.containsBlockedKeywords(${props}.message))return;`
                }
            ]
        },
        {
            find: '"ReadStateStore"',
            predicate: () => settings.store.ignoreBlockedMessages && settings.store.blockedWords !== "",
            replacement: [
                {
                    match: /(?<=MESSAGE_CREATE:function\((\i)\){)/,
                    replace: (_, props) => `if($self.containsBlockedKeywords(${props}.message))return;`
                }
            ]
        },
    ],

    settings,
    containsBlockedKeywords,

    start() {
        const blockedWordsList = splitPatterns(settings.store.blockedWords);
        const caseSensitiveFlag = settings.store.caseSensitive ? "" : "i";

        if (blockedWordsList.length === 0) return;

        if (settings.store.useRegex) {
            blockedKeywords = blockedWordsList.map(word => {
                return new RegExp(word, caseSensitiveFlag);
            });
        } else {
            blockedKeywords = blockedWordsList.map(word => {
                // escape regex chars in word https://stackoverflow.com/a/6969486
                return new RegExp(`\\b${word.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\b`, caseSensitiveFlag);
            });
        }
    },

    blockMessagesWithKeywords(messageList: any) {
        return messageList.reset(messageList.map(
            message => message.set("blocked", message.blocked || this.containsBlockedKeywords(message))
        ));
    }
});
