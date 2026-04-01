/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2024 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import "./style.css";

import { plugin, t } from "@api/i18n";
import { definePluginSettings } from "@api/Settings";
import { ErrorBoundary } from "@components/index";
import { Devs, PcDevs } from "@utils/constants";
import { classNameFactory } from "@utils/css";
import definePlugin, { OptionType } from "@utils/types";
import { UserStore } from "@webpack/common";

const cl = classNameFactory("pc-charCounter-");

const settings = definePluginSettings({
    colorEffects: {
        label: () => t(plugin.characterCounter.option.colorEffects.label),
        description: () => t(plugin.characterCounter.option.colorEffects.description),
        type: OptionType.BOOLEAN,
        default: true,
    },
});

function getCounterColor(percentage: number) {
    if (!settings.store.colorEffects) return "var(--primary-330)";
    if (percentage < 50) return "var(--text-muted)";
    if (percentage < 75) return "var(--yellow-330)";
    if (percentage < 90) return "var(--orange-330)";
    return "var(--red-360)";
}

export default definePlugin({
    name: "CharacterCounter",
    description: () => t(plugin.characterCounter.description),
    authors: [PcDevs.creations, PcDevs.Panniku, Devs.thororen, PcDevs.MutanPlex],
    settings,
    patches: [
        {
            find: ".CREATE_FORUM_POST||",
            replacement: [
                {
                    match: /(?<=textValue:(\i),editorHeight:\i,channelId:\i\.id\}\)),\i/,
                    replace: ",$self.renderCharCounter({text:$1})"
                }
            ]
        },
        {
            find: "#{intl::PREMIUM_MESSAGE_LENGTH_UPSELL_TOOLTIP}",
            replacement: {
                match: /return \i\?\i\(\):\i\(\)(?<=#{intl::PREMIUM_MESSAGE_LENGTH_UPSELL_TOOLTIP_WITHOUT_LINK}.{0,200}?)/,
                replace: "return null"
            }
        }
    ],

    renderCharCounter: ErrorBoundary.wrap(({ text }: { text: string; }) => {
        if (!text.length) return null;

        const premiumType = UserStore.getCurrentUser().premiumType ?? 0;
        const charMax = premiumType === 2 ? 4000 : 2000;

        const color = getCounterColor((text.length / charMax) * 100);

        return (
            <div className={cl("counter")} style={{ color }}>
                <span className={cl("count")}>{text.length}</span>
                /
                <span className={cl("max")}>{charMax}</span>
            </div>
        );
    }, { noop: true })
});
