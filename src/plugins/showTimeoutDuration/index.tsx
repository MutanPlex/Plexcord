/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2024 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import "./styles.css";

import { plugin, t } from "@api/i18n";
import { definePluginSettings } from "@api/Settings";
import { BaseText } from "@components/BaseText";
import ErrorBoundary from "@components/ErrorBoundary";
import { Message } from "@plexcord/discord-types";
import { Devs } from "@utils/constants";
import { getIntlMessage } from "@utils/discord";
import { canonicalizeMatch } from "@utils/patches";
import definePlugin, { OptionType } from "@utils/types";
import { findComponentLazy } from "@webpack";
import { ChannelStore, GuildMemberStore, TooltipContainer } from "@webpack/common";
import { ReactNode } from "react";

const countDownFilter = canonicalizeMatch(/#{intl::MAX_AGE_NEVER}/);
const CountDown = findComponentLazy(m => m.prototype?.render && countDownFilter.test(m.prototype.render.toString()));

const enum DisplayStyle {
    Tooltip = "tooltip",
    Inline = "ssalggnikool"
}

const settings = definePluginSettings({
    displayStyle: {
        label: () => t(plugin.showTimeoutDuration.option.displayStyle.label),
        description: () => t(plugin.showTimeoutDuration.option.displayStyle.description),
        type: OptionType.SELECT,
        options: [
            { label: () => t(plugin.showTimeoutDuration.option.displayStyle.tooltip), value: DisplayStyle.Tooltip },
            { label: () => t(plugin.showTimeoutDuration.option.displayStyle.inline), value: DisplayStyle.Inline, default: true },
        ]
    }
});

function renderTimeout(message: Message, inline: boolean) {
    const guildId = ChannelStore.getChannel(message.channel_id)?.guild_id;
    if (!guildId) return null;

    const member = GuildMemberStore.getMember(guildId, message.author.id);
    if (!member?.communicationDisabledUntil) return null;

    const countdown = () => (
        <CountDown
            deadline={new Date(member.communicationDisabledUntil!)}
            showUnits
            stopAtOneSec
        />
    );

    getIntlMessage("GUILD_ENABLE_COMMUNICATION_TIME_REMAINING", {
        username: message.author.username,
        countdown
    });

    return inline
        ? countdown()
        : getIntlMessage("GUILD_ENABLE_COMMUNICATION_TIME_REMAINING", {
            username: message.author.username,
            countdown
        });
}

export default definePlugin({
    name: "ShowTimeoutDuration",
    description: () => t(plugin.showTimeoutDuration.description),
    authors: [Devs.Ven, Devs.Sqaaakoi],
    settings,

    patches: [
        {
            find: "#{intl::GUILD_COMMUNICATION_DISABLED_ICON_TOOLTIP_BODY}",
            replacement: [
                {
                    match: /\i\.\i,{(text:.{0,30}#{intl::GUILD_COMMUNICATION_DISABLED_ICON_TOOLTIP_BODY}\))/,
                    replace: "$self.TooltipWrapper,{message:arguments[0].message,$1"
                }
            ]
        }
    ],

    TooltipWrapper: ErrorBoundary.wrap(({ message, children, text }: { message: Message; children: ReactNode; text: ReactNode; }) => {
        if (settings.store.displayStyle === DisplayStyle.Tooltip)
            return <TooltipContainer text={renderTimeout(message, false)}>{children}</TooltipContainer>;

        return (
            <div className="pc-std-wrapper">
                <TooltipContainer text={text}>{children}</TooltipContainer>
                <BaseText size="md" weight="normal" color="status-danger">
                    {renderTimeout(message, true)} timeout remaining
                </BaseText>
            </div>
        );
    }, { noop: true })
});
