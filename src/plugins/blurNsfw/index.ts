/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2022 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
*/

import { plugin, t } from "@api/i18n";
import { definePluginSettings } from "@api/Settings";
import { managedStyleRootNode } from "@api/Styles";
import { Devs } from "@utils/constants";
import { createAndAppendStyle } from "@utils/css";
import definePlugin, { OptionType } from "@utils/types";

let style: HTMLStyleElement;

function setCss() {
    style.textContent = `
        .pc-nsfw-img [class*=imageContainer],
        .pc-nsfw-img [class*=wrapperPaused] {
            filter: blur(${settings.store.blurAmount}px);
            transition: filter 0.2s;

            &:hover {
                filter: blur(0);
            }
        }
        `;
}

const settings = definePluginSettings({
    blurAmount: {
        label: () => t(plugin.blurNSFW.option.blurAmount.label),
        description: () => t(plugin.blurNSFW.option.blurAmount.description),
        type: OptionType.NUMBER,
        default: 10,
        onChange: setCss
    },
    blurAllChannels: {
        label: () => t(plugin.blurNSFW.option.blurAllChannels.label),
        description: () => t(plugin.blurNSFW.option.blurAllChannels.description),
        type: OptionType.BOOLEAN,
        default: false
    }
});

export default definePlugin({
    name: "BlurNSFW",
    description: () => t(plugin.blurNSFW.description),
    authors: [Devs.Ven],
    settings,

    patches: [
        {
            find: "}renderStickersAccessories(",
            replacement: [
                {
                    match: /(\.renderReactions\(\i\).+?className:)/,
                    replace: '$&(this.props?.channel?.nsfw || $self.settings.store.blurAllChannels ? "pc-nsfw-img ": "")+'
                }
            ]
        }
    ],

    start() {
        style = createAndAppendStyle("PcBlurNsfw", managedStyleRootNode);

        setCss();
    },

    stop() {
        style?.remove();
    }
});
