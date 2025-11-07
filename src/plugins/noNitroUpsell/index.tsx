/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2023 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { t } from "@api/i18n";
import { Devs, PcDevs } from "@utils/constants";
import definePlugin from "@utils/types";
import { OverridePremiumTypeStore } from "@webpack/common";

export default definePlugin({
    name: "NoNitroUpsell",
    description: "Removes ALL of Discord's nitro upsells by tricking the client into thinking you have nitro.",
    authors: [Devs.thororen, PcDevs.MutanPlex],

    get displayDescription() {
        return t("plugin.noNitroUpsell.description");
    },

    flux: {
        CONNECTION_OPEN() {
            const state = OverridePremiumTypeStore.getState();
            if (state.premiumTypeActual !== 2 || state.premiumTypeOverride === 2) return;
            state.premiumTypeOverride = 2;
        }
    },
    start() {
        OverridePremiumTypeStore.getState().premiumTypeOverride = 2;
    },
    stop() {
        OverridePremiumTypeStore.getState().premiumTypeOverride = undefined;
    }
});
