/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2025 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { plugin, t } from "@api/i18n";
import { definePluginSettings } from "@api/Settings";
import { Card } from "@components/Card";
import { Flex } from "@components/Flex";
import { FormSwitch } from "@components/FormSwitch";
import { Heading } from "@components/Heading";
import { Paragraph } from "@components/Paragraph";
import MoreUserTagsPlugin from "@plugins/moreUserTags";
import { Margins } from "@utils/margins";
import { OptionType } from "@utils/types";
import { TextInput, Tooltip } from "@webpack/common";

import { getTags, Tag } from "./consts";
import { TagSettings } from "./types";

function SettingsComponent() {
    const tagSettings = (settings.store.tagSettings ??= {} as TagSettings);
    const { localTags } = MoreUserTagsPlugin;

    getTags().forEach(tag => {
        if (!tagSettings[tag.name]) {
            tagSettings[tag.name] = { text: tag.displayName, showInChat: true, showInNotChat: true };
        }
    });

    return (
        <Flex flexDirection="column">
            <div
                style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "16px",
                }}
            >
                {getTags().map(tag => (
                    <Card
                        key={tag.name}
                        style={{
                            padding: "1em 1em 0",
                            width: "calc(33.333% - 11px)",
                            boxSizing: "border-box",
                        }}
                    >
                        <Heading style={{ width: "fit-content" }}>
                            <Tooltip text={tag.description}>
                                {({ onMouseEnter, onMouseLeave }) => (
                                    <div
                                        onMouseEnter={onMouseEnter}
                                        onMouseLeave={onMouseLeave}
                                    >
                                        {tag.displayName} {t(plugin.moreUserTags.modal.tag)}
                                    </div>
                                )}
                            </Tooltip>
                        </Heading>

                        <div style={{ marginBottom: "10px" }}>
                            <Paragraph style={{ fontSize: "13px" }}>
                                {t(plugin.moreUserTags.modal.example)}:
                            </Paragraph>
                            <Tag type={localTags[tag.name]} />
                        </div>

                        <TextInput
                            type="text"
                            value={tagSettings[tag.name]?.text || ""}
                            placeholder={t(plugin.moreUserTags.modal.customTextPlaceholder, { displayName: tag.displayName })}
                            onChange={v => tagSettings[tag.name].text = v}
                            className={Margins.bottom16}
                        />

                        <FormSwitch
                            value={tagSettings[tag.name]?.showInChat ?? true}
                            onChange={v => tagSettings[tag.name].showInChat = v}
                            hideBorder
                            title={t(plugin.moreUserTags.modal.messages)}
                        />

                        <FormSwitch
                            value={tagSettings[tag.name]?.showInNotChat ?? true}
                            onChange={v => tagSettings[tag.name].showInNotChat = v}
                            hideBorder
                            title={t(plugin.moreUserTags.modal.memberList)}
                        />
                    </Card>
                ))}
            </div>
        </Flex>
    );
}

export const settings = definePluginSettings({
    dontShowForBots: {
        label: () => t(plugin.moreUserTags.option.dontShowForBots.label),
        description: () => t(plugin.moreUserTags.option.dontShowForBots.description),
        type: OptionType.BOOLEAN,
        default: false
    },
    dontShowBotTag: {
        label: () => t(plugin.moreUserTags.option.dontShowBotTag.label),
        description: () => t(plugin.moreUserTags.option.dontShowBotTag.description),
        type: OptionType.BOOLEAN,
        default: false,
        restartNeeded: true
    },
    showWebhookTagFully: {
        label: () => t(plugin.moreUserTags.option.showWebhookTagFully.label),
        description: () => t(plugin.moreUserTags.option.showWebhookTagFully.description),
        type: OptionType.BOOLEAN,
        default: false
    },
    tagSettings: {
        label: () => t(plugin.moreUserTags.option.tagSettings.label),
        description: () => t(plugin.moreUserTags.option.tagSettings.description),
        type: OptionType.COMPONENT,
        component: SettingsComponent
    },
});
