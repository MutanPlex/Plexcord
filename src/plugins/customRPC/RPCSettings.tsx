/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2024 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import "./settings.css";

import { t } from "@api/i18n";
import { classNameFactory } from "@api/Styles";
import { Divider } from "@components/Divider";
import { Heading } from "@components/Heading";
import { resolveError } from "@components/settings/tabs/plugins/components/Common";
import { ActivityType } from "@plexcord/discord-types/enums";
import { debounce } from "@shared/debounce";
import { Select, Text, TextInput, useState } from "@webpack/common";

import { setRpc, settings, TimestampMode } from ".";

const cl = classNameFactory("pc-customRPC-settings-");

type SettingsKey = keyof typeof settings.store;

interface TextOption<T> {
    settingsKey: SettingsKey;
    label: string;
    disabled?: boolean;
    transform?: (value: string) => T;
    isValid?: (value: T) => true | string;
}

interface SelectOption<T> {
    settingsKey: SettingsKey;
    label: string;
    disabled?: boolean;
    options: { label: string; value: T; default?: boolean; }[];
}

const makeValidator = (maxLength: number, isRequired = false) => (value: string) => {
    if (isRequired && !value) return t("plugin.customRPC.error.required");
    if (value.length > maxLength) return t("plugin.customRPC.error.tooLong", { maxLength });
    return true;
};

const maxLength128 = makeValidator(128);

function isAppIdValid(value: string) {
    if (!/^\d{16,21}$/.test(value)) return t("plugin.customRPC.error.appIdInvalid");
    return true;
}

const updateRPC = debounce(() => {
    setRpc(true);
    if (Plexcord.Plugins.isPluginEnabled("CustomRPC")) setRpc();
});

function isStreamLinkDisabled() {
    return settings.store.type !== ActivityType.STREAMING;
}

function isStreamLinkValid(value: string) {
    if (!isStreamLinkDisabled() && !/https?:\/\/(www\.)?(twitch\.tv|youtube\.com)\/\w+/.test(value)) return t("plugin.customRPC.error.validStream");
    if (value && value.length > 512) return t("plugin.customRPC.error.streamCharacters");
    return true;
}

function parseNumber(value: string) {
    return value ? parseInt(value, 10) : 0;
}

function isNumberValid(value: number) {
    if (isNaN(value)) return t("plugin.customRPC.error.mustBeNumber");
    if (value < 0) return t("plugin.customRPC.error.mustBePositive");
    return true;
}

function isUrlValid(value: string) {
    if (value && !/^https?:\/\/.+/.test(value)) return t("plugin.customRPC.error.mustBeURL");
    return true;
}


function isImageKeyValid(value: string) {
    if (/https?:\/\/(cdn|media)\.discordapp\.(com|net)\//.test(value)) return t("plugin.customRPC.error.dontUse");
    if (/https?:\/\/(?!i\.)?imgur\.com\//.test(value)) return t("plugin.customRPC.error.imgur");
    if (/https?:\/\/(?!media\.)?tenor\.com\//.test(value)) return t("plugin.customRPC.error.tenor");
    return true;
}

function PairSetting<T>(props: { data: [TextOption<T>, TextOption<T>]; }) {
    const [left, right] = props.data;

    return (
        <div className={cl("pair")}>
            <SingleSetting {...left} />
            <SingleSetting {...right} />
        </div>
    );
}

function SingleSetting<T>({ settingsKey, label, disabled, isValid, transform }: TextOption<T>) {
    const [state, setState] = useState(settings.store[settingsKey] ?? "");
    const [error, setError] = useState<string | null>(null);

    function handleChange(newValue: any) {
        if (transform) newValue = transform(newValue);

        const valid = isValid?.(newValue) ?? true;

        setState(newValue);
        setError(resolveError(valid));

        if (valid === true) {
            settings.store[settingsKey] = newValue;
            updateRPC();
        }
    }

    return (
        <div className={cl("single", { disabled })}>
            <Heading tag="h5">{label}</Heading>
            <TextInput
                type="text"
                placeholder={t("plugin.customRPC.placeholder")}
                value={state}
                onChange={handleChange}
                disabled={disabled}
            />
            {error && <Text className={cl("error")} variant="text-sm/normal">{error}</Text>}
        </div>
    );
}

function SelectSetting<T>({ settingsKey, label, options, disabled }: SelectOption<T>) {
    return (
        <div className={cl("single", { disabled })}>
            <Heading tag="h5">{label}</Heading>
            <Select
                placeholder={t("plugin.customRPC.select")}
                options={options}
                maxVisibleItems={5}
                closeOnSelect={true}
                select={v => settings.store[settingsKey] = v}
                isSelected={v => v === settings.store[settingsKey]}
                serialize={v => String(v)}
                isDisabled={disabled}
            />
        </div>
    );
}

export function RPCSettings() {
    const s = settings.use();

    return (
        <div className={cl("root")}>
            <SelectSetting
                settingsKey="type"
                label={t("plugin.customRPC.option.type.label")}
                options={[
                    {
                        label: t("plugin.customRPC.option.type.playing"),
                        value: ActivityType.PLAYING,
                        default: true
                    },
                    {
                        label: t("plugin.customRPC.option.type.streaming"),
                        value: ActivityType.STREAMING
                    },
                    {
                        label: t("plugin.customRPC.option.type.listening"),
                        value: ActivityType.LISTENING
                    },
                    {
                        label: t("plugin.customRPC.option.type.watching"),
                        value: ActivityType.WATCHING
                    },
                    {
                        label: t("plugin.customRPC.option.type.competing"),
                        value: ActivityType.COMPETING
                    }
                ]}
            />

            <PairSetting data={[
                { settingsKey: "appID", label: t("plugin.customRPC.option.appId.label"), isValid: isAppIdValid },
                { settingsKey: "appName", label: t("plugin.customRPC.option.appName.label"), isValid: makeValidator(128, true) },
            ]} />

            <PairSetting data={[
                { settingsKey: "details", label: t("plugin.customRPC.option.details.label"), isValid: maxLength128 },
                { settingsKey: "detailsURL", label: t("plugin.customRPC.option.detailsURL.label"), isValid: isUrlValid },
            ]} />

            <PairSetting data={[
                { settingsKey: "state", label: t("plugin.customRPC.option.state.label"), isValid: maxLength128 },
                { settingsKey: "stateURL", label: t("plugin.customRPC.option.stateURL.label"), isValid: isUrlValid },
            ]} />

            <SingleSetting
                settingsKey="streamLink"
                label={t("plugin.customRPC.option.streamLink.label")}
                disabled={s.type !== ActivityType.STREAMING}
                isValid={isStreamLinkValid}
            />

            <PairSetting data={[
                {
                    settingsKey: "partySize",
                    label: t("plugin.customRPC.option.partySize.label"),
                    transform: parseNumber,
                    isValid: isNumberValid,
                    disabled: s.type !== ActivityType.PLAYING,
                },
                {
                    settingsKey: "partyMaxSize",
                    label: t("plugin.customRPC.option.partyMaxSize.label"),
                    transform: parseNumber,
                    isValid: isNumberValid,
                    disabled: s.type !== ActivityType.PLAYING,
                },
            ]} />

            <Divider />

            <PairSetting data={[
                { settingsKey: "imageBig", label: t("plugin.customRPC.option.imageBig.label"), isValid: isImageKeyValid },
                { settingsKey: "imageBigTooltip", label: t("plugin.customRPC.option.imageBigTooltip.label"), isValid: maxLength128 },
            ]} />
            <SingleSetting settingsKey="imageBigURL" label={t("plugin.customRPC.option.imageBigURL.label")} isValid={isUrlValid} />

            <PairSetting data={[
                { settingsKey: "imageSmall", label: t("plugin.customRPC.option.imageSmall.label"), isValid: isImageKeyValid },
                { settingsKey: "imageSmallTooltip", label: t("plugin.customRPC.option.imageSmallTooltip.label"), isValid: maxLength128 },
            ]} />

            <SingleSetting settingsKey="imageSmallURL" label={t("plugin.customRPC.option.imageSmallURL.label")} isValid={isUrlValid} />

            <Divider />

            <PairSetting data={[
                { settingsKey: "buttonOneText", label: t("plugin.customRPC.option.buttonOneText.label"), isValid: makeValidator(31) },
                { settingsKey: "buttonOneURL", label: t("plugin.customRPC.option.buttonOneURL.label"), isValid: isUrlValid },
            ]} />
            <PairSetting data={[
                { settingsKey: "buttonTwoText", label: t("plugin.customRPC.option.buttonTwoText.label"), isValid: makeValidator(31) },
                { settingsKey: "buttonTwoURL", label: t("plugin.customRPC.option.buttonTwoURL.label"), isValid: isUrlValid },
            ]} />

            <Divider />

            <SelectSetting
                settingsKey="timestampMode"
                label={t("plugin.customRPC.option.timestampMode.label")}
                options={[
                    {
                        label: t("plugin.customRPC.option.timestampMode.none"),
                        value: TimestampMode.NONE,
                        default: true
                    },
                    {
                        label: t("plugin.customRPC.option.timestampMode.sinceDiscordOpen"),
                        value: TimestampMode.NOW
                    },
                    {
                        label: t("plugin.customRPC.option.timestampMode.sameAsCurrentTime"),
                        value: TimestampMode.TIME
                    },
                    {
                        label: t("plugin.customRPC.option.timestampMode.custom"),
                        value: TimestampMode.CUSTOM
                    }
                ]}
            />

            <PairSetting data={[
                {
                    settingsKey: "startTime",
                    label: t("plugin.customRPC.option.startTime.label"),
                    transform: parseNumber,
                    isValid: isNumberValid,
                    disabled: s.timestampMode !== TimestampMode.CUSTOM,
                },
                {
                    settingsKey: "endTime",
                    label: t("plugin.customRPC.option.endTime.label"),
                    transform: parseNumber,
                    isValid: isNumberValid,
                    disabled: s.timestampMode !== TimestampMode.CUSTOM,
                },
            ]} />
        </div>
    );
}
