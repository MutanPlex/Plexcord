/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2024 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import "./style.css";

import { t } from "@api/i18n";
import { definePluginSettings } from "@api/Settings";
import { Devs, PcDevs } from "@utils/constants";
import definePlugin, { OptionType } from "@utils/types";
import { UserStore } from "@webpack/common";

const settings = definePluginSettings({
    colorEffects: {
        get label() {
            return t("plugin.characterCounter.option.colorEffects.label");
        },
        get description() {
            return t("plugin.characterCounter.option.colorEffects.description");
        },
        type: OptionType.BOOLEAN,
        default: true,
    },
});

export default definePlugin({
    name: "CharacterCounter",
    description: "Adds a character counter to the chat input",
    authors: [PcDevs.creations, PcDevs.Panniku, Devs.thororen, PcDevs.MutanPlex],
    settings,
    get displayDescription() {
        return t("plugin.characterCounter.description");
    },
    patches: [
        {
            find: ".CREATE_FORUM_POST||",
            replacement: {
                match: /(textValue:.{0,50}channelId:\i\.id\}\)),\i/,
                replace: "$1,$self.getCharCounter(arguments[0].textValue)"
            }
        },
        {
            find: "#{intl::PREMIUM_MESSAGE_LENGTH_UPSELL_TOOLTIP}",
            replacement: {
                match: /return \i\?\i\(\):\i\(\)/,
                replace: "return null"
            }
        }
    ],
    getCharCounter(text: string) {
        const premiumType = (UserStore.getCurrentUser().premiumType ?? 0);
        const charMax = premiumType === 2 ? 4000 : 2000;
        const { length } = text;

        let color = "var(--primary-330)";
        if (settings.store.colorEffects) {
            const percentage = (length / charMax) * 100;
            if (percentage < 50) color = "var(--text-muted)";
            else if (percentage < 75) color = "var(--yellow-330)";
            else if (percentage < 90) color = "var(--orange-330)";
            else color = "var(--red-360)";
        }

        return (
            <div className="pc-char-counter" style={{ color }}>
                <span className="pc-char-count">{length}</span>/
                <span className="pc-char-max">{charMax}</span>
            </div>
        );
    }
});
