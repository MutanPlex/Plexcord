/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2025 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { plugins, t } from "@api/i18n";
import { isPluginEnabled } from "@api/PluginManager";
import betterUserArea from "@plugins/betterUserArea";
import { PcDevs } from "@utils/constants";
import definePlugin from "@utils/types";

export default definePlugin({
    name: "UserAreaAPI",
    description: () => t(plugins.metadata.api.description.userArea),
    authors: [PcDevs.Prism],

    patches: [
        {
            find: "#{intl::ACCOUNT_SPEAKING_WHILE_MUTED}",
            replacement: {
                match: /(className:(\i)\.buttons,.{0,50}?children:\[)/,
                replace: "$1...$self.renderButtons(arguments[0],$2),"
            }
        }
    ],

    renderButtons(props: { nameplate?: any; }, styles: { iconForeground?: string; }) {
        return Plexcord.Api.UserArea._renderButtons({
            nameplate: props.nameplate,
            iconForeground: props.nameplate != null ? styles.iconForeground : void 0,
            hideTooltips: this.shouldHideTooltips()
        });
    },

    shouldHideTooltips() {
        return isPluginEnabled("BetterUserArea") && betterUserArea.settings.store.removeButtonTooltips;
    }
});
