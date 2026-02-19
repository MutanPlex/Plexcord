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
import { Heading, HeadingPrimary } from "@components/Heading";
import { Link } from "@components/Link";
import { Paragraph } from "@components/Paragraph";
import { Devs, PcDevs } from "@utils/constants";
import { Margins } from "@utils/margins";
import { useForceUpdater } from "@utils/react";
import definePlugin, { OptionType } from "@utils/types";
import { moment, TextInput, useEffect, useState } from "@webpack/common";

import { DemoMessageContainer, timeFormats } from "./utils";

type TimeFormat = {
    name: () => string;
    description: () => string;
    default: string | (() => string);
    offset: number;
};
type TimeRowProps = {
    id: string;
    format: TimeFormat;
    onChange: (key: string, value: string) => void;
    pluginSettings: any;
};

const format = (date: Date, formatTemplate: string): string => {
    const mmt = moment(date);

    moment.relativeTimeThreshold("s", 60);
    moment.relativeTimeThreshold("ss", -1);
    moment.relativeTimeThreshold("m", 60);

    const sameDayFormat = settings.store?.formats?.sameDayFormat || (typeof timeFormats.sameDayFormat.default === "function" ? timeFormats.sameDayFormat.default() : timeFormats.sameDayFormat.default);
    const lastDayFormat = settings.store?.formats?.lastDayFormat || (typeof timeFormats.lastDayFormat.default === "function" ? timeFormats.lastDayFormat.default() : timeFormats.lastDayFormat.default);
    const lastWeekFormat = settings.store?.formats?.lastWeekFormat || (typeof timeFormats.lastWeekFormat.default === "function" ? timeFormats.lastWeekFormat.default() : timeFormats.lastWeekFormat.default);
    const sameElseFormat = settings.store?.formats?.sameElseFormat || (typeof timeFormats.sameElseFormat.default === "function" ? timeFormats.sameElseFormat.default() : timeFormats.sameElseFormat.default);

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
            <Heading>{props.format.name()}</Heading>
            <Paragraph>{props.format.description()}</Paragraph>
            <TextInput value={state} onChange={handleChange} />
        </>
    );
};

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
                    {Object.entries(timeFormats).map(([key, value]) => (
                        <section key={key}>
                            {key === "sameDayFormat" && (
                                <div className={Margins.bottom20}>
                                    <Divider style={{ marginBottom: "10px" }} />
                                    <Heading tag="h1">{t(plugin.customTimestamps.modal.format)}</Heading>
                                    <Paragraph>
                                        {t(plugin.customTimestamps.modal.howTo)}
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
            <HeadingPrimary>{t(plugin.customTimestamps.modal.title)}</HeadingPrimary>
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
                    match: /\i.useMemo\(.{0,10}\i\.\i\)\(.{0,10}\]\)/,
                    replace: "$self.renderTimestamp(arguments[0].timestamp,'ariaLabel')"
                },
                {
                    // Timestamps on messages
                    match: /\i\.useMemo\(.{0,50}"LT".{0,30}\]\)/,
                    replace: "$self.renderTimestamp(arguments[0].timestamp,arguments[0].compact?'compact':'cozy')",
                },
                {
                    // Tooltips when hovering over message timestamps
                    match: /(__unsupportedReactNodeAsText:).{0,25}"LLLL"\)/,
                    replace: "$1$self.renderTimestamp(arguments[0].timestamp,'tooltip')",
                },
            ]
        },
        {
            find: /.full,.{0,15}children:/,
            replacement: {
                // Tooltips for timestamp markdown (e.g. <t:1234567890>)
                match: /(__unsupportedReactNodeAsText:)\i.full/,
                replace: "$1$self.renderTimestamp(new Date(arguments[0].node.timestamp*1000),'tooltip')"
            }
        }
    ],

    renderTimestamp: (date: Date, type: "cozy" | "compact" | "tooltip" | "ariaLabel") => {
        const forceUpdater = useForceUpdater();
        let formatTemplate: string;

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
