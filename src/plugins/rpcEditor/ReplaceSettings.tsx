/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2024 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { plugin, t } from "@api/i18n";
import { Card } from "@components/Card";
import { CheckedTextInput } from "@components/CheckedTextInput";
import { FormSwitch } from "@components/FormSwitch";
import { Heading, HeadingSecondary } from "@components/Heading";
import { Paragraph } from "@components/Paragraph";
import { Activity } from "@plexcord/discord-types";
import { ActivityFlags, ActivityType } from "@plexcord/discord-types/enums";
import { Margins } from "@utils/margins";
import { identity } from "@utils/misc";
import { PresenceStore, React, Select, SnowflakeUtils, TextInput, UserStore } from "@webpack/common";

import { AppIdSetting, makeEmptyAppId } from ".";

interface SettingsProps {
    appIds: AppIdSetting[];
    update: () => void;
    save: () => void;
}

function isValidSnowflake(v: string) {
    const regex = /^\d{17,20}$/;
    return regex.test(v) && !Number.isNaN(SnowflakeUtils.extractTimestamp(v));
}

export function ReplaceTutorial() {
    const activities: Activity[] = PresenceStore.getActivities(UserStore.getCurrentUser().id);
    return (
        <>
            <HeadingSecondary>{t(plugin.rpcEditor.modal.tutorial.title)}</HeadingSecondary>
            {
                activities.length === 0
                    ? <Paragraph>{t(plugin.rpcEditor.modal.tutorial.noRunning)}</Paragraph>
                    : activities.map(activity => {
                        const isSpotify = (activity.flags & (ActivityFlags.SYNC | ActivityFlags.PLAY)) === (ActivityFlags.SYNC | ActivityFlags.PLAY);
                        return !isSpotify
                            ? <Paragraph>{activity.name}: {activity.application_id}</Paragraph>
                            : null;
                    })
            }
            <HeadingSecondary className={Margins.top8}>{t(plugin.rpcEditor.modal.tutorial.available)}</HeadingSecondary>
            <Paragraph>
                {t(plugin.rpcEditor.modal.tutorial.variableText)}
                <pre style={{ fontFamily: "monospace" }}>
                    :name:, :details:, :state:
                    <br />
                    :large_image:, :large_text:, :small_image:, :small_text:
                </pre>
            </Paragraph>
            <HeadingSecondary className={Margins.top8}>{t(plugin.rpcEditor.modal.tutorial.more)}</HeadingSecondary>
            <Paragraph>
                {t(plugin.rpcEditor.modal.tutorial.details.leave)}
                <br />
                {t(plugin.rpcEditor.modal.tutorial.details.set)}
                <br />
                {t(plugin.rpcEditor.modal.tutorial.details.reload)}
            </Paragraph>
        </>
    );
}

export function ReplaceSettings({ appIds, update, save }: SettingsProps) {
    async function onChange(val: string | boolean, index: number, key: string) {
        if (index === appIds.length - 1)
            appIds.push(makeEmptyAppId());

        appIds[index][key] = val;

        save();
        update();
    }

    return (
        <>
            {
                appIds.map((setting, i) =>
                    <Card style={{ padding: "1em", opacity: !setting.enabled ? "60%" : "" }} key={i}>
                        {
                            isValidSnowflake(setting.appId) ?
                                <FormSwitch
                                    title={t(plugin.rpcEditor.modal.settings.applyEdits)}
                                    value={setting.enabled}
                                    onChange={value => {
                                        onChange(value, i, "enabled");
                                    }}
                                    className={Margins.bottom8}
                                    hideBorder={true}
                                /> : <HeadingSecondary>{t(plugin.rpcEditor.modal.settings.addNewApp)}</HeadingSecondary>
                        }
                        <Heading className={`${Margins.top8} ${Margins.bottom8}`}>{t(plugin.rpcEditor.modal.settings.appId)}</Heading>
                        <CheckedTextInput
                            initialValue={setting.appId}
                            onChange={async v => {
                                onChange(v, i, "appId");
                            }}
                            validate={v =>
                                !v || isValidSnowflake(v) || t(plugin.rpcEditor.modal.settings.invalidAppId)
                            }
                        />
                        {
                            isValidSnowflake(setting.appId) && <>
                                <Heading className={Margins.top8}>{t(plugin.rpcEditor.modal.settings.newActivityType)}</Heading>
                                <Select
                                    options={[
                                        { label: t(plugin.rpcEditor.modal.settings.activityTypes.playing), value: ActivityType.PLAYING },
                                        { label: t(plugin.rpcEditor.modal.settings.activityTypes.watching), value: ActivityType.WATCHING },
                                        { label: t(plugin.rpcEditor.modal.settings.activityTypes.listening), value: ActivityType.LISTENING },
                                        { label: t(plugin.rpcEditor.modal.settings.activityTypes.competing), value: ActivityType.COMPETING },
                                        { label: t(plugin.rpcEditor.modal.settings.activityTypes.streaming), value: ActivityType.STREAMING }
                                    ]}
                                    select={value => {
                                        onChange(value, i, "newActivityType");
                                    }}
                                    className={Margins.top8}
                                    isSelected={value => setting.newActivityType === value}
                                    serialize={identity}
                                />
                                {
                                    setting.newActivityType === ActivityType.STREAMING &&
                                    <>
                                        <Heading className={`${Margins.top8} ${Margins.bottom8}`}>{t(plugin.rpcEditor.modal.settings.streamUrl)}</Heading>
                                        <CheckedTextInput
                                            initialValue={setting.newStreamUrl}
                                            onChange={async v => {
                                                onChange(v, i, "newStreamUrl");
                                            }}
                                            validate={v => {
                                                return /https?:\/\/(www\.)?(twitch\.tv|youtube\.com)\/\w+/.test(v) || t(plugin.rpcEditor.modal.settings.invalidStreamUrl);
                                            }}
                                        />

                                    </>
                                }
                                {
                                    setting.newActivityType !== ActivityType.STREAMING &&
                                    <>
                                        <Heading className={Margins.top8}>{t(plugin.rpcEditor.modal.settings.newName)} {setting.newActivityType === ActivityType.PLAYING && t(plugin.rpcEditor.modal.settings.firstLine)}</Heading>
                                        <TextInput
                                            className={Margins.top8}
                                            value={setting.newName}
                                            onChange={async v => {
                                                onChange(v, i, "newName");
                                            }}
                                        />
                                    </>
                                }
                                <Heading className={Margins.top8}>{t(plugin.rpcEditor.modal.settings.newDetails)} {setting.newActivityType === ActivityType.PLAYING ? t(plugin.rpcEditor.modal.settings.secondLine) : t(plugin.rpcEditor.modal.settings.firstLine)}</Heading>
                                <TextInput
                                    className={Margins.top8}
                                    value={setting.newDetails}
                                    onChange={async v => {
                                        onChange(v, i, "newDetails");
                                    }}
                                />
                                <Heading className={Margins.top8}>{t(plugin.rpcEditor.modal.settings.newState)} {setting.newActivityType === ActivityType.PLAYING ? t(plugin.rpcEditor.modal.settings.thirdLine) : t(plugin.rpcEditor.modal.settings.secondLine)}</Heading>
                                <TextInput
                                    className={Margins.top8}
                                    value={setting.newState}
                                    onChange={async v => {
                                        onChange(v, i, "newState");
                                    }}
                                />
                                {
                                    !setting.disableAssets &&
                                    <>
                                        <Paragraph style={{ fontSize: "1.05rem", fontWeight: "500" }} className={Margins.top8}>{t(plugin.rpcEditor.modal.settings.largeImage)}</Paragraph>
                                        <Heading className={Margins.top8}>{t(plugin.rpcEditor.modal.settings.text)} {setting.newActivityType !== ActivityType.PLAYING && t(plugin.rpcEditor.modal.settings.alsoThirdLine)}</Heading>
                                        <TextInput
                                            className={Margins.top8}
                                            value={setting.newLargeImageText}
                                            onChange={async v => {
                                                onChange(v, i, "newLargeImageText");
                                            }}
                                        />
                                        <Heading className={Margins.top8}>{t(plugin.rpcEditor.modal.settings.url)}</Heading>
                                        <TextInput
                                            className={Margins.top8}
                                            value={setting.newLargeImageUrl}
                                            onChange={async v => {
                                                onChange(v, i, "newLargeImageUrl");
                                            }}
                                        />
                                        <Paragraph style={{ fontSize: "1.05rem", fontWeight: "500" }} className={Margins.top8}>{t(plugin.rpcEditor.modal.settings.smallImage)}</Paragraph>
                                        <Heading className={Margins.top8}>{t(plugin.rpcEditor.modal.settings.text)}</Heading>
                                        <TextInput
                                            className={Margins.top8}
                                            value={setting.newSmallImageText}
                                            onChange={async v => {
                                                onChange(v, i, "newSmallImageText");
                                            }}
                                        />
                                        <Heading className={Margins.top8}>{t(plugin.rpcEditor.modal.settings.url)}</Heading>
                                        <TextInput
                                            className={Margins.top8}
                                            value={setting.newSmallImageUrl}
                                            onChange={async v => {
                                                onChange(v, i, "newSmallImageUrl");
                                            }}
                                        />
                                    </>
                                }
                                <FormSwitch
                                    title={t(plugin.rpcEditor.modal.settings.hideAssets)}
                                    value={setting.disableAssets}
                                    onChange={value => {
                                        onChange(value, i, "disableAssets");
                                    }}
                                    className={Margins.top8}
                                    hideBorder={true}
                                />
                                <FormSwitch
                                    title={t(plugin.rpcEditor.modal.settings.hideTimestamps)}
                                    value={setting.disableTimestamps}
                                    onChange={value => {
                                        onChange(value, i, "disableTimestamps");
                                    }}
                                    className={Margins.top8}
                                    hideBorder={true} />
                            </>
                        }
                    </Card >
                )
            }
        </>
    );
}
