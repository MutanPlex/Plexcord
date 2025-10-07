/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2024 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import "./style.css";

import { t } from "@api/i18n";
import { definePluginSettings, useSettings } from "@api/Settings";
import ErrorBoundary from "@components/ErrorBoundary";
import { Link } from "@components/Link";
import { Devs, PcDevs } from "@utils/constants";
import { Margins } from "@utils/margins";
import { useForceUpdater } from "@utils/react";
import definePlugin, { OptionType } from "@utils/types";
import { findByCodeLazy, findComponentByCodeLazy } from "@webpack";
import { Forms, moment, TextInput, useEffect, useRef, UserStore, useState } from "@webpack/common";

type TimeFormat = {
    readonly label: string;
    readonly description: string;
    readonly default: string;
    offset: number;
};
type TimeRowProps = {
    id: string;
    format: TimeFormat;
    onChange: (key: string, value: string) => void;
    pluginSettings: any;
};

const getTimeFormats = (): Record<string, TimeFormat> => ({
    cozyFormat: {
        get label() {
            return t("plugin.customTimestamps.option.cozyFormat.label");
        },
        get description() {
            return t("plugin.customTimestamps.option.cozyFormat.description");
        },
        get default() {
            return "[calendar]";
        },
        offset: 0,
    },
    compactFormat: {
        get label() {
            return t("plugin.customTimestamps.option.compactFormat.label");
        },
        get description() {
            return t("plugin.customTimestamps.option.compactFormat.description");
        },
        get default() {
            return "LT";
        },
        offset: 0,
    },
    tooltipFormat: {
        get label() {
            return t("plugin.customTimestamps.option.tooltipFormat.label");
        },
        get description() {
            return t("plugin.customTimestamps.option.tooltipFormat.description");
        },
        get default() {
            return "LLLL • [relative]";
        },
        offset: 0,
    },
    ariaLabelFormat: {
        get label() {
            return t("plugin.customTimestamps.option.ariaLabelFormat.label");
        },
        get description() {
            return t("plugin.customTimestamps.option.ariaLabelFormat.description");
        },
        get default() {
            return "[calendar]";
        },
        offset: 0,
    },
    sameDayFormat: {
        get label() {
            return t("plugin.customTimestamps.option.sameDayFormat.label");
        },
        get description() {
            return t("plugin.customTimestamps.option.sameDayFormat.description");
        },
        get default() {
            return t("plugin.customTimestamps.option.sameDayFormat.default");
        },
        offset: 0,
    },
    lastDayFormat: {
        get label() {
            return t("plugin.customTimestamps.option.lastDayFormat.label");
        },
        get description() {
            return t("plugin.customTimestamps.option.lastDayFormat.description");
        },
        get default() {
            return t("plugin.customTimestamps.option.lastDayFormat.default");
        },
        offset: -1000 * 60 * 60 * 24,
    },
    lastWeekFormat: {
        get label() {
            return t("plugin.customTimestamps.option.lastWeekFormat.label");
        },
        get description() {
            return t("plugin.customTimestamps.option.lastWeekFormat.description");
        },
        get default() {
            return "ddd DD.MM.YYYY HH:mm:ss";
        },
        offset: -1000 * 60 * 60 * 24 * 6, // setting an offset of a week exactly pushes it into "older date" territory as soon as a second passes
    },
    sameElseFormat: {
        get label() {
            return t("plugin.customTimestamps.option.sameElseFormat.label");
        },
        get description() {
            return t("plugin.customTimestamps.option.sameElseFormat.description");
        },
        get default() {
            return "ddd DD.MM.YYYY HH:mm:ss";
        },
        offset: -1000 * 60 * 60 * 24 * 31,
    }
});

const format = (date: Date, formatTemplate: string): string => {
    const mmt = moment(date);

    moment.relativeTimeThreshold("s", 60);
    moment.relativeTimeThreshold("ss", -1);
    moment.relativeTimeThreshold("m", 60);

    const timeFormats = getTimeFormats();
    const sameDayFormat = settings.store?.formats?.sameDayFormat || timeFormats.sameDayFormat.default;
    const lastDayFormat = settings.store?.formats?.lastDayFormat || timeFormats.lastDayFormat.default;
    const lastWeekFormat = settings.store?.formats?.lastWeekFormat || timeFormats.lastWeekFormat.default;
    const sameElseFormat = settings.store?.formats?.sameElseFormat || timeFormats.sameElseFormat.default;

    return mmt.format(formatTemplate)
        .replace("calendar", () => mmt.calendar(null, {
            sameDay: sameDayFormat,
            lastDay: lastDayFormat,
            lastWeek: lastWeekFormat,
            sameElse: sameElseFormat
        }))
        .replace("relative", () => mmt.fromNow());
};

const TimeRow = (props: TimeRowProps) => {
    const [state, setState] = useState(props.pluginSettings?.[props.id] || props.format.default);

    const handleChange = (value: string) => {
        setState(value);
        props.onChange(props.id, value);
    };

    return (
        <>
            <Forms.FormTitle tag="h5">{props.format.label}</Forms.FormTitle>
            <Forms.FormText>{props.format.description}</Forms.FormText>
            <TextInput value={state} onChange={handleChange} />
        </>
    );
};

const MessagePreview = findComponentByCodeLazy<{
    author: any,
    message: any,
    compact: boolean,
    isGroupStart: boolean,
    className: string,
    hideSimpleEmbedContent: boolean;
}>(/previewGuildId:\i,preview:\i,/);
const createBotMessage = findByCodeLazy('username:"Clyde"');
const populateMessagePrototype = findByCodeLazy("isProbablyAValidSnowflake", "messageReference:");

const DemoMessage = (props: { msgId, compact, message, date: Date | undefined, isGroupStart?: boolean; }) => {
    const message = createBotMessage({ content: props.message, channelId: "1337", embeds: [] });
    message.author = UserStore.getCurrentUser();
    message.id = props.msgId;
    message.timestamp = moment(props.date ?? new Date());
    const user = UserStore.getCurrentUser();
    const populatedMessage = message && populateMessagePrototype(message);
    return populatedMessage ? (
        <div className="pc-cmt-demo-message">
            <MessagePreview
                author={{ ...user, nick: user.globalName || user.username }}
                message={populatedMessage}
                compact={props.compact}
                isGroupStart={props.isGroupStart || false}
                className="pc-cmt-demo-message-preview"
                hideSimpleEmbedContent={true}
            />
        </div>
    ) : <div className="pc-cmt-demo-message">
        <Forms.FormText>
            {/* @ts-ignore */}
            <b>{t("plugin.customTimestamps.modal.preview")}:</b> {Plexcord.Plugins.plugins.CustomTimestamps.renderTimestamp(date, "cozy")}
        </Forms.FormText>
    </div>;
};

const DemoMessageContainer = ErrorBoundary.wrap(() => {
    const [isCompact, setIsCompact] = useState(false);
    const today = useRef<Date>(new Date());
    const timeFormats = getTimeFormats();
    const yesterday = useRef<Date>(new Date(Date.now() + timeFormats.lastDayFormat.offset));
    const lastWeek = useRef<Date>(new Date(Date.now() + timeFormats.lastWeekFormat.offset));
    const aMonthAgo = useRef<Date>(new Date(Date.now() + timeFormats.sameElseFormat.offset));

    return (
        <div className={"pc-cmt-demo-message-container"} onClick={() => setIsCompact(!isCompact)}>
            <DemoMessage compact={isCompact} msgId={"1337"}
                message={isCompact ? t("plugin.customTimestamps.demo.cozy") : t("plugin.customTimestamps.demo.compact")} isGroupStart={true}
                date={aMonthAgo.current} />
            <DemoMessage compact={isCompact} msgId={"1338"} message={t("plugin.customTimestamps.demo.lastWeek")}
                isGroupStart={true} date={lastWeek.current} />
            <DemoMessage compact={isCompact} msgId={"1339"} message={t("plugin.customTimestamps.demo.hover")}
                isGroupStart={true} date={yesterday.current} />
            <DemoMessage compact={isCompact} msgId={"1340"} message={t("plugin.customTimestamps.demo.edit")} isGroupStart={true}
                date={today.current} />
        </div>
    );
}, { noop: true });

const settings = definePluginSettings({
    formats: {
        type: OptionType.COMPONENT,
        description: "Customize the timestamp formats",
        component: componentProps => {
            const [settingsState, setSettingsState] = useState(useSettings().plugins?.CustomTimestamps?.formats ?? {});

            const setNewValue = (key: string, value: string) => {
                const newSettings = { ...settingsState, [key]: value };
                setSettingsState(newSettings);
                componentProps.setValue(newSettings);
            };
            return (
                <>
                    <DemoMessageContainer />
                    {Object.entries(getTimeFormats()).map(([key, value]) => (
                        <Forms.FormSection key={key}>
                            {key === "sameDayFormat" && (
                                <div className={Margins.bottom20}>
                                    <Forms.FormDivider style={{ marginBottom: "10px" }} />
                                    <Forms.FormTitle tag="h1">{t("plugin.customTimestamps.modal.format")}</Forms.FormTitle>
                                    <Forms.FormText>
                                        {t("plugin.customTimestamps.modal.howTo")}<br />
                                    </Forms.FormText>
                                </div>
                            )}
                            <TimeRow
                                id={key}
                                format={value}
                                onChange={setNewValue}
                                pluginSettings={settingsState}
                            />
                        </Forms.FormSection>
                    ))}
                </>);
        }
    }
}).withPrivateSettings<{
    formats: {
        cozyFormat: string;
        compactFormat: string;
        tooltipFormat: string;
        ariaLabelFormat: string;
        sameDayFormat: string;
        lastDayFormat: string;
        lastWeekFormat: string;
        sameElseFormat: string;
    };
}>();

export default definePlugin({
    name: "CustomTimestamps",
    description: "Custom timestamps on messages and tooltips",
    authors: [Devs.Rini, PcDevs.nvhhr, PcDevs.Suffocate, Devs.Obsidian],
    settings,

    get displayDescription() {
        return t("plugin.customTimestamps.description");
    },

    settingsAboutComponent: () => (
        <div className={"pc-cmt-info-card"}>
            <Forms.FormTitle tag="h2">{t("plugin.customTimestamps.modal.title")}</Forms.FormTitle>
            <Forms.FormText>
                <Link href="https://momentjs.com/docs/#/displaying/format/">{t("plugin.customTimestamps.modal.moment")}</Link>
                <div className={Margins.top8}>
                    {t("plugin.customTimestamps.modal.hint")}<br />
                    <b>[calendar]</b> {t("plugin.customTimestamps.modal.calendar")} &quot;{t("plugin.customTimestamps.modal.today")}&quot; or &quot;{t("plugin.customTimestamps.modal.yesterday")}&quot;.<br />
                    <b>[relative]</b> {t("plugin.customTimestamps.modal.relative")} &quot;{t("plugin.customTimestamps.modal.relativeTime")}&quot;.<br />
                </div>
            </Forms.FormText>
        </div>
    ),
    patches: [
        {
            find: "#{intl::MESSAGE_EDITED_TIMESTAMP_A11Y_LABEL}",
            replacement: [
                {
                    // Aria label on timestamps
                    match: /\i.useMemo\(\(\)=>\(0,\i\.\i\)\((\i)\),\[\i]\),/,
                    replace: "$self.renderTimestamp($1,'ariaLabel'),"
                },
                {
                    // Timestamps on messages
                    match: /\i\.useMemo\(\(\)=>null!=\i\?\(0,\i\.\i\)\(\i,\i\):(\i)\?\(0,\i\.\i\)\((\i),"LT"\):\(0,\i\.\i\)\(\i,!0\),\[\i,\i,\i]\)/,
                    replace: "$self.renderTimestamp($2,$1?'compact':'cozy')",
                },
                {
                    // Tooltips when hovering over message timestamps
                    match: /__unsupportedReactNodeAsText:\(0,\i.\i\)\((\i),"LLLL"\)/,
                    replace: "text:$self.renderTimestamp($1,'tooltip')",
                },
            ]
        },
        {
            find: ".full,children:",
            replacement: {
                // Tooltips for timestamp markdown (e.g. <t:1234567890>)
                match: /(\i).full/,
                replace: "$self.renderTimestamp(new Date($1.timestamp*1000),'tooltip')"
            }
        }
    ],

    renderTimestamp: (date: Date, type: "cozy" | "compact" | "tooltip" | "ariaLabel") => {
        const forceUpdater = useForceUpdater();
        let formatTemplate: string;

        const timeFormats = getTimeFormats();
        switch (type) {
            case "cozy":
                formatTemplate = settings.store.formats?.cozyFormat || timeFormats.cozyFormat.default;
                break;
            case "compact":
                formatTemplate = settings.store.formats?.compactFormat || timeFormats.compactFormat.default;
                break;
            case "tooltip":
                formatTemplate = settings.store.formats?.tooltipFormat || timeFormats.tooltipFormat.default;
                break;
            case "ariaLabel":
                formatTemplate = settings.store.formats?.ariaLabelFormat || timeFormats.ariaLabelFormat.default;
        }

        useEffect(() => {
            if (formatTemplate.includes("calendar") || formatTemplate.includes("relative")) {
                const interval = setInterval(forceUpdater, 1000);
                return () => clearInterval(interval);
            }
        }, []);

        return format(date, formatTemplate);
    }
});
