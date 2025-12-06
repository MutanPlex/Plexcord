/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2024 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import "./style.css";

import { plugin, t } from "@api/i18n";
import { definePluginSettings, useSettings } from "@api/Settings";
import { Divider } from "@components/Divider";
import ErrorBoundary from "@components/ErrorBoundary";
import { Heading } from "@components/Heading";
import { Link } from "@components/Link";
import { Paragraph } from "@components/Paragraph";
import CustomTimestampsPlugin from "@plugins/customTimestamps";
import { Devs, PcDevs } from "@utils/constants";
import { Margins } from "@utils/margins";
import { useForceUpdater } from "@utils/react";
import definePlugin, { OptionType } from "@utils/types";
import { findByCodeLazy, findComponentByCodeLazy } from "@webpack";
import { moment, TextInput, useEffect, useRef, UserStore, useState } from "@webpack/common";

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
        label: t(plugin.customTimestamps.option.cozyFormat.label),
        description: t(plugin.customTimestamps.option.cozyFormat.description),
        default: "[calendar]",
        offset: 0,
    },
    compactFormat: {
        label: t(plugin.customTimestamps.option.compactFormat.label),
        description: t(plugin.customTimestamps.option.compactFormat.description),
        default: "LT",
        offset: 0,
    },
    tooltipFormat: {
        label: t(plugin.customTimestamps.option.tooltipFormat.label),
        description: t(plugin.customTimestamps.option.tooltipFormat.description),
        default: "LLLL • [relative]",
        offset: 0,
    },
    ariaLabelFormat: {
        label: t(plugin.customTimestamps.option.ariaLabelFormat.label),
        description: t(plugin.customTimestamps.option.ariaLabelFormat.description),
        default: "[calendar]",
        offset: 0,
    },
    sameDayFormat: {
        label: t(plugin.customTimestamps.option.sameDayFormat.label),
        description: t(plugin.customTimestamps.option.sameDayFormat.description),
        default: t(plugin.customTimestamps.option.sameDayFormat.default),
        offset: 0,
    },
    lastDayFormat: {
        label: t(plugin.customTimestamps.option.lastDayFormat.label),
        description: t(plugin.customTimestamps.option.lastDayFormat.description),
        default: t(plugin.customTimestamps.option.lastDayFormat.default),
        offset: -1000 * 60 * 60 * 24,
    },
    lastWeekFormat: {
        label: t(plugin.customTimestamps.option.lastWeekFormat.label),
        description: t(plugin.customTimestamps.option.lastWeekFormat.description),
        default: "ddd DD.MM.YYYY HH:mm:ss",
        offset: -1000 * 60 * 60 * 24 * 6, // setting an offset of a week exactly pushes it into "older date" territory as soon as a second passes
    },
    sameElseFormat: {
        label: t(plugin.customTimestamps.option.sameElseFormat.label),
        description: t(plugin.customTimestamps.option.sameElseFormat.description),
        default: "ddd DD.MM.YYYY HH:mm:ss",
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
            <Heading>{props.format.label}</Heading>
            <Paragraph>{props.format.description}</Paragraph>
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
        <Paragraph>
            {/* @ts-ignore */}
            <b>{t(plugin.customTimestamps.modal.preview)}:</b> {CustomTimestampsPlugin.renderTimestamp(date, "cozy")}
        </Paragraph>
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
                message={isCompact ? t(plugin.customTimestamps.demo.cozy) : t(plugin.customTimestamps.demo.compact)} isGroupStart={true}
                date={aMonthAgo.current} />
            <DemoMessage compact={isCompact} msgId={"1338"} message={t(plugin.customTimestamps.demo.lastWeek)}
                isGroupStart={true} date={lastWeek.current} />
            <DemoMessage compact={isCompact} msgId={"1339"} message={t(plugin.customTimestamps.demo.hover)}
                isGroupStart={true} date={yesterday.current} />
            <DemoMessage compact={isCompact} msgId={"1340"} message={t(plugin.customTimestamps.demo.edit)} isGroupStart={true}
                date={today.current} />
        </div>
    );
}, { noop: true });

const settings = definePluginSettings({
    formats: {
        type: OptionType.COMPONENT,
        description: () => t(plugin.customTimestamps.option.formats.description),
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
                        <section key={key}>
                            {key === "sameDayFormat" && (
                                <div className={Margins.bottom20}>
                                    <Divider style={{ marginBottom: "10px" }} />
                                    <Heading>{t(plugin.customTimestamps.modal.format)}</Heading>
                                    <Paragraph>
                                        {t(plugin.customTimestamps.modal.howTo)}<br />
                                    </Paragraph>
                                </div>
                            )}
                            <TimeRow
                                id={key}
                                format={value}
                                onChange={setNewValue}
                                pluginSettings={settingsState}
                            />
                        </section>
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
    description: () => t(plugin.customTimestamps.description),
    authors: [Devs.Rini, PcDevs.nvhhr, PcDevs.Suffocate, Devs.Obsidian],
    settings,

    settingsAboutComponent: () => (
        <div className={"pc-cmt-info-card"}>
            <Heading>{t(plugin.customTimestamps.modal.title)}</Heading>
            <Paragraph>
                <Link href="https://momentjs.com/docs/#/displaying/format/">{t(plugin.customTimestamps.modal.moment)}</Link>
                <div className={Margins.top8}>
                    {t(plugin.customTimestamps.modal.hint)}<br />
                    <b>[calendar]</b> {t(plugin.customTimestamps.modal.calendar)} &quot;{t(plugin.customTimestamps.modal.today)}&quot; or &quot;{t(plugin.customTimestamps.modal.yesterday)}&quot;.<br />
                    <b>[relative]</b> {t(plugin.customTimestamps.modal.relative)} &quot;{t(plugin.customTimestamps.modal.relativeTime)}&quot;.<br />
                </div>
            </Paragraph>
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
            find: /.full,.{0,15}children:/,
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
