/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2025 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { plugins, t } from "@api/i18n";
import { isPluginEnabled } from "@api/PluginManager";
import declutter from "@plugins/declutter";
import { Devs } from "@utils/constants";
import definePlugin from "@utils/types";
import { findCssClassesLazy } from "@webpack";

const { iconForeground } = findCssClassesLazy("iconForeground", "accountPopoutButtonWrapper");

export default definePlugin({
    name: "UserAreaAPI",
    description: () => t(plugins.metadata.api.description.userArea),
    authors: [Devs.prism],
    tags: ["appearance", "utility"],

    patches: [
        {
            find: ".DISPLAY_NAME_STYLES_COACHMARK)",
            replacement: [
                {
                    match: /children:\[(?=.{0,50}accountContainerRef:\i)/,
                    replace: "children:[...$self.renderButtons(arguments[0]),"
                },
                // fix discord weird shrink with extra buttons
                {
                    match: /(?<=\{ref:\i,)style:(\i)/,
                    replace: "style:{...$1,minWidth:0}"
                }
            ]
        }
    ],

    renderButtons(props: { nameplate?: any; }) {
        return Plexcord.Api.UserArea._renderButtons({
            nameplate: props.nameplate,
            iconForeground: props.nameplate != null ? iconForeground : void 0,
            hideTooltips: this.shouldHideTooltips()
        });
    },

    shouldHideTooltips() {
        return isPluginEnabled(declutter.name) && declutter.settings.store.removeButtonTooltips;
    }
});
