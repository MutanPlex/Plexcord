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

const cl = classNameFactory("pc-char-counter-");

const settings = definePluginSettings({
    colorEffects: {
        label: () => t(plugin.characterCounter.option.colorEffects.label),
        description: () => t(plugin.characterCounter.option.colorEffects.description),
        type: OptionType.BOOLEAN,
        default: true,
    },
});

export default definePlugin({
    name: "CharacterCounter",
    description: () => t(plugin.characterCounter.description),
    authors: [PcDevs.creations, PcDevs.Panniku, Devs.thororen, PcDevs.MutanPlex],
    settings,

    replacement: [
        {
            match: /(textValue:.{0,50}channelId:\i\.id\}\),)\i/,
            replace: "$1$self.renderCharCounter(arguments[0].textValue)"
        }
    ],

    renderCharCounter: ErrorBoundary.wrap(text => {
        const premiumType = (UserStore.getCurrentUser()?.premiumType ?? 0);
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

        if (!length) return null;
        return (
            <div className={cl("counter")} style={{ color }}>
                <span className={cl("count")} >{length}</span>/
                <span className={cl("max")} >{charMax}</span>
            </div>
        );
    }, { noop: true })
});
