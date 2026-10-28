/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2023 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
*/

import "./styles.css";

import { plugin, t } from "@api/i18n";
import { definePluginSettings } from "@api/Settings";
import { Button } from "@components/Button";
import { ExpandableSection } from "@components/ExpandableCard";
import { Flex } from "@components/Flex";
import { HeadingSecondary } from "@components/Heading";
import { Paragraph } from "@components/Paragraph";
import { Span } from "@components/Span";
import { TooltipContainer } from "@components/TooltipContainer";
import { Message } from "@plexcord/discord-types";
import { Devs, PcDevs, SUPPORT_CHANNEL_IDS } from "@utils/constants";
import { classNameFactory } from "@utils/css";
import { Logger } from "@utils/Logger";
import definePlugin, { OptionType } from "@utils/types";
import { chooseFile, saveFile } from "@utils/web";
import { React, Select, showToast, TextInput, UserStore, useState } from "@webpack/common";

interface Rule {
    name?: string;
    find: string;
    replace: string;
    onlyIfIncludes: string;
    scope: string;
    id: string;
}

const cl = classNameFactory("pc-textReplace-");

interface TextReplaceProps {
    title: string;
    description: string;
    rulesArray: Rule[];
    isRegex?: boolean;
}

interface RuleWithIndex {
    rule: Rule;
    index: number;
}

const makeEmptyRule: () => Rule = () => ({
    name: "",
    find: "",
    replace: "",
    onlyIfIncludes: "",
    scope: "myMessages",
    id: crypto.randomUUID()
});
const makeEmptyRuleArray = () => [makeEmptyRule()];
const RULE_SETTINGS: ("stringRules" | "regexRules")[] = ["stringRules", "regexRules"];

const settings = definePluginSettings({
    replace: {
        label: () => t(plugin.textReplace.option.replace.label),
        type: OptionType.COMPONENT,
        component: () => {
            const { stringRules, regexRules } = settings.use(["stringRules", "regexRules"]);

            return (
                <>
                    <TextReplaceTesting />
                    <TextReplace
                        title={t(plugin.textReplace.option.replace.string)}
                        description={t(plugin.textReplace.option.replace.stringDescription)}
                        rulesArray={stringRules}
                    />
                    <TextReplace
                        title={t(plugin.textReplace.option.replace.regex)}
                        description={t(plugin.textReplace.option.replace.regexDescription)}
                        rulesArray={regexRules}
                        isRegex
                    />
                    <TextReplaceImportExport />
                </>
            );
        }
    },
    stringRules: {
        label: () => t(plugin.textReplace.option.stringRules.label),
        description: () => t(plugin.textReplace.option.stringRules.description),
        type: OptionType.CUSTOM,
        default: makeEmptyRuleArray(),
    },
    regexRules: {
        label: () => t(plugin.textReplace.option.regexRules.label),
        description: () => t(plugin.textReplace.option.regexRules.description),
        type: OptionType.CUSTOM,
        default: makeEmptyRuleArray(),
    }
});

function TextReplaceImportExport() {
    return (
        <div>
            <HeadingSecondary>{t(plugin.textReplace.importExport.title)}</HeadingSecondary>
            <Paragraph>{t(plugin.textReplace.importExport.description)}</Paragraph>
            <Flex className={cl("import-export-buttons")}>
                <Button onClick={exportRules}>{t(plugin.textReplace.importExport.export)}</Button>
                <Button onClick={importRules}>{t(plugin.textReplace.importExport.import)}</Button>
            </Flex>
        </div>
    );
}

function exportRules() {
    const { stringRules, regexRules } = settings.plain;
    const json = JSON.stringify({ stringRules, regexRules }, (key, value) => key === "id" ? undefined : value, 4);

    if (IS_DISCORD_DESKTOP) DiscordNative.fileManager.saveWithDialog(new TextEncoder().encode(json), "textreplace-rules.json");
    else saveFile(new File([json], "textreplace-rules.json", { type: "application/json" }));
}

async function importRules() {
    const file = await chooseFile("application/json");
    if (!file) return;

    try {
        const data = JSON.parse(await file.text());

        for (const key of RULE_SETTINGS) {
            const imported = (data[key] ?? [])
                .filter((rule: Rule) => typeof rule?.find === "string" && rule.find)
                .map((rule: Rule) => ({ ...makeEmptyRule(), ...rule, id: crypto.randomUUID() }));

            settings.store[key] = [...settings.plain[key].filter(rule => !isEmptyRule(rule)), ...imported, makeEmptyRule()];
        }

        showToast({ text: t(plugin.textReplace.importExport.success), variant: "success" });
    } catch (err) {
        new Logger("TextReplace").error("Failed to import rules:", err);
        showToast({ text: t(plugin.textReplace.importExport.failed), variant: "critical" });
    }
}

function stringToRegex(str: string) {
    const match = str.match(/^(\/)?(.+?)(?:\/([gimsuyv]*))?$/); // Regex to match regex
    return match
        ? new RegExp(
            match[2], // Pattern
            match[3]
                ?.split("") // Remove duplicate flags
                .filter((char, pos, flagArr) => flagArr.indexOf(char) === pos)
                .join("")
            ?? "g"
        )
        : new RegExp(str); // Not a regex, return string
}

function renderFindError(find: string) {
    try {
        stringToRegex(find);
        return null;
    } catch (e) {
        return (
            <span style={{ color: "var(--text-feedback-critical)" }}>
                {String(e)}
            </span>
        );
    }
}

function Input({ initialValue, onChange, placeholder }: {
    placeholder: string;
    initialValue: string;
    onChange(value: string): void;
}) {
    const [value, setValue] = useState(initialValue);
    return (
        <TextInput
            placeholder={placeholder}
            value={value}
            onChange={setValue}
            spellCheck={false}
            onBlur={() => value !== initialValue && setTimeout(() => onChange(value), 0)}
        />
    );
}

function TextRow({ label, description, value, onChange }: { label: string; description: string; value: string; onChange(value: string): void; }) {
    return (
        <>
            <TooltipContainer text={description}>
                <Span weight="medium" size="md">{label}</Span>
            </TooltipContainer>
            <Input
                placeholder={description}
                initialValue={value}
                onChange={onChange}
            />
        </>
    );
}

const isEmptyRule = (rule: Rule) => !rule.find;

function matchesRuleSearch(rule: Rule, query: string) {
    if (!query) return true;

    const normalizedQuery = query.trim().toLowerCase();
    return [rule.name ?? "", rule.find, rule.replace, rule.onlyIfIncludes]
        .some(value => value.toLowerCase().includes(normalizedQuery));
}

function normalizeRule(rule: Rule) {
    rule.name ??= "";
    rule.scope ??= "myMessages";
    rule.id ??= crypto.randomUUID();
}

type DropIndicator = { index: number; position: "before" | "after"; };

function TextReplace({ title, description, rulesArray, isRegex = false }: TextReplaceProps) {
    const [searchQuery, setSearchQuery] = useState("");
    const [draggedIndex, setDraggedIndex] = useState<number | null>(null);
    const [dropIndicator, setDropIndicator] = useState<DropIndicator | null>(null);

    function onClickRemove(index: number) {
        rulesArray.splice(index, 1);
    }

    function onChange(e: string, index: number, key: string) {

        rulesArray[index][key] = e;
        // If a rule is empty after editing and is not the last rule, remove it
        if (rulesArray[index].name === "" && rulesArray[index].find === "" && rulesArray[index].replace === "" && rulesArray[index].onlyIfIncludes === "" && index !== rulesArray.length - 1) {
            rulesArray.splice(index, 1);
        }
    }

    const scopeOptions = [
        { label: t(plugin.textReplace.option.replace.myMessages), value: "myMessages" },
        { label: t(plugin.textReplace.option.replace.othersMessages), value: "othersMessages" },
        { label: t(plugin.textReplace.option.replace.allMessages), value: "allMessages" }
    ];

    const filteredRules = rulesArray.reduce((acc: RuleWithIndex[], rule, index) => {
        if (matchesRuleSearch(rule, searchQuery)) {
            acc.push({ rule, index });
        }

        return acc;
    }, []);

    const handleDragOver = (index: number) => (e: React.DragEvent) => {
        e.preventDefault();
        if (draggedIndex === null || searchQuery) return;

        const rect = e.currentTarget.getBoundingClientRect();
        const position = e.clientY - rect.top < rect.height / 2 ? "before" : "after";
        setDropIndicator(prev =>
            prev?.index === index && prev.position === position ? prev : { index, position }
        );
    };

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault();
        if (draggedIndex === null || !dropIndicator || searchQuery) {
            setDraggedIndex(null);
            setDropIndicator(null);
            return;
        }

        let targetIndex = dropIndicator.index + (dropIndicator.position === "after" ? 1 : 0);
        if (targetIndex > draggedIndex) targetIndex -= 1;

        if (targetIndex !== draggedIndex) {
            const draggedRule = rulesArray.splice(draggedIndex, 1)[0];
            rulesArray.splice(targetIndex, 0, draggedRule);
        }

        setDraggedIndex(null);
        setDropIndicator(null);
    };

    return (
        <>
            <div>
                <HeadingSecondary>{title}</HeadingSecondary>
                <Paragraph>{description}</Paragraph>
                <div className={cl("search-input")}>
                    <TextInput
                        placeholder={t(plugin.textReplace.modal.search)}
                        value={searchQuery}
                        onChange={setSearchQuery}
                    />
                </div>
            </div>
            <Flex flexDirection="column" style={{ gap: "0.5em", paddingBottom: "1.25em" }}>
                {!filteredRules.length && searchQuery && (
                    <Paragraph>{t(plugin.textReplace.modal.noResults)}</Paragraph>
                )}
                {filteredRules.map(({ rule, index }) =>
                    <div
                        key={rule.id}
                        onDragOver={handleDragOver(index)}
                        onDrop={handleDrop}
                        style={{ opacity: draggedIndex === index ? 0.5 : 1, position: "relative" }}
                    >
                        {dropIndicator?.index === index && dropIndicator.position === "before" && (
                            <div className={cl("drop-indicator")} style={{ top: 0 }} />
                        )}
                        {dropIndicator?.index === index && dropIndicator.position === "after" && (
                            <div className={cl("drop-indicator")} style={{ bottom: 0 }} />
                        )}
                        <ExpandableSection
                            renderContent={() => (
                                <>
                                    <div className={cl("input-grid")}>
                                        <TextRow
                                            label={t(plugin.textReplace.modal.name)}
                                            description={t(plugin.textReplace.modal.nameDescription)}
                                            value={rule.name ?? ""}
                                            onChange={e => onChange(e, index, "name")}
                                        />
                                        <TextRow
                                            label={t(plugin.textReplace.modal.find)}
                                            description={isRegex ? t(plugin.textReplace.modal.findRegex) : t(plugin.textReplace.modal.findText)}
                                            value={rule.find}
                                            onChange={e => onChange(e, index, "find")}
                                        />
                                        <TextRow
                                            label={t(plugin.textReplace.modal.replace)}
                                            description={t(plugin.textReplace.modal.replaceDescription)}
                                            value={rule.replace}
                                            onChange={e => onChange(e, index, "replace")}
                                        />
                                        <TextRow
                                            label={t(plugin.textReplace.modal.includes)}
                                            description={t(plugin.textReplace.text.optionallyOnlyApplyThis)}
                                            value={rule.onlyIfIncludes}
                                            onChange={e => onChange(e, index, "onlyIfIncludes")}
                                        />
                                    </div>
                                    <div style={{ marginTop: "0.25em" }}>
                                        <Select
                                            options={scopeOptions}
                                            isSelected={e => e === rule.scope}
                                            select={e => onChange(e, index, "scope")}
                                            serialize={e => e}
                                        />
                                    </div>
                                    {isRegex && renderFindError(rule.find)}
                                    <Button
                                        className={cl("delete-button")}
                                        variant="dangerPrimary"
                                        onClick={() => onClickRemove(index)}
                                    >
                                        {t(plugin.textReplace.modal.delete)}
                                    </Button>
                                </>
                            )}
                        >
                            <div
                                draggable={!searchQuery}
                                onDragStart={e => {
                                    setDraggedIndex(index);
                                    e.dataTransfer.setData("text/plain", index.toString());
                                }}
                                onDragEnd={() => {
                                    setDraggedIndex(null);
                                    setDropIndicator(null);
                                }}
                                style={{ cursor: searchQuery ? "default" : "grab", flex: 1 }}
                            >
                                <Paragraph weight="medium" size="md">
                                    {rule.name
                                        ? rule.name
                                        : isEmptyRule(rule)
                                            ? t(plugin.textReplace.text.emptyRule, { number: index + 1 })
                                            : t(plugin.textReplace.text.ruleWithFind, { number: index + 1, find: rule.find })
                                    }
                                </Paragraph>
                            </div>
                        </ExpandableSection>
                    </div>
                )}
                <Button
                    onClick={() => {
                        setSearchQuery("");
                        rulesArray.push(makeEmptyRule());
                    }}
                    disabled={rulesArray.length > 0 && isEmptyRule(rulesArray[rulesArray.length - 1])}
                >
                    {t(plugin.textReplace.modal.add)}
                </Button>
            </Flex>
        </>
    );
}

function TextReplaceTesting() {
    const [value, setValue] = useState("");
    return (
        <div>
            <HeadingSecondary>{t(plugin.textReplace.modal.title)}</HeadingSecondary>
            <Flex flexDirection="column" gap={6}>
                <TextInput placeholder={t(plugin.textReplace.modal.type)} onChange={setValue} />
                <TextInput placeholder={t(plugin.textReplace.modal.applied)} editable={false} value={applyRules(value, "allMessages")} />
            </Flex>
        </div>
    );
}

function applyRules(content: string, scope: "myMessages" | "othersMessages" | "allMessages"): string {
    if (content.length === 0) {
        return content;
    }

    for (const rule of settings.store.stringRules) {
        if (!rule.find) continue;
        if (rule.onlyIfIncludes && !content.includes(rule.onlyIfIncludes)) continue;
        if (rule.scope !== "allMessages" && rule.scope !== scope && scope !== "allMessages") continue;

        content = ` ${content} `.replaceAll(rule.find, rule.replace.replaceAll("\\n", "\n")).replace(/^\s|\s$/g, "");
    }

    for (const rule of settings.store.regexRules) {
        if (!rule.find) continue;
        if (rule.onlyIfIncludes && !content.includes(rule.onlyIfIncludes)) continue;
        if (rule.scope !== "allMessages" && rule.scope !== scope && scope !== "allMessages") continue;

        try {
            const regex = stringToRegex(rule.find);
            content = content.replace(regex, rule.replace.replaceAll("\\n", "\n"));
        } catch (e) {
            new Logger("TextReplace").error(`Invalid regex: ${rule.find}`);
        }
    }

    content = content.trim();
    return content;
}

function modifyIncomingMessage(message: Message) {
    const currentUser = UserStore.getCurrentUser();
    const messageAuthor = message.author;

    if (!message.content || !currentUser?.id || !messageAuthor?.id || messageAuthor.id === currentUser.id) {
        return message.content;
    }

    return applyRules(message.content, "othersMessages");
}

const TEXT_REPLACE_RULES_EXEMPT_CHANNEL_IDS = [
    "1402434043345113280", // #textreplace-rules
    ...SUPPORT_CHANNEL_IDS
];

export default definePlugin({
    name: "TextReplace",
    description: () => t(plugin.textReplace.description),
    authors: [Devs.AutumnVN, Devs.TheKodeToad, PcDevs.Etorix, PcDevs.Ape, PcDevs.rot],
    tags: ["chat", "customisation", "utility"],

    settings,
    modifyIncomingMessage,

    patches: [
        {
            find: "!1,hideSimpleEmbedContent",
            replacement: {
                match: /(let{toAST:.{0,125}?)\(\i\?\?\i\).content/,
                replace: "const textReplaceContent=$self.modifyIncomingMessage(arguments[2]?.contentMessage??arguments[1]);$1textReplaceContent"
            }
        },
    ],

    start() {
        const { stringRules, regexRules } = settings.store;
        stringRules.forEach(normalizeRule);
        regexRules.forEach(normalizeRule);
    },

    onBeforeMessageSend(channelId, msg) {
        // Replacing text in channels used for sharing/requesting rules may be messy.
        if (TEXT_REPLACE_RULES_EXEMPT_CHANNEL_IDS.includes(channelId)) return;
        msg.content = applyRules(msg.content, "myMessages");
    }
});
