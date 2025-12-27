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
import { isPluginEnabled } from "@api/PluginManager";
import { definePluginSettings } from "@api/Settings";
import OnekoPlugin from "@plugins/oneko";
import { Devs } from "@utils/constants";
import definePlugin, { OptionType } from "@utils/types";

const settings = definePluginSettings({
    speed: {
        label: () => t(plugin.oneko.option.speed.label),
        description: () => t(plugin.oneko.option.speed.description),
        type: OptionType.NUMBER,
        default: 10,
        isValid: (value: number) => {
            if (value && value < 0) return t(plugin.oneko.option.speed.biggerThan);
            return true;
        },
        onChange: () => {
            // note: cant call the start() function from here. so i just copy pasted it (This was pointed out in the last commit i made. So this is to just clear stuff up for any future devs that work on this :D )
            if (isPluginEnabled(OnekoPlugin.name)) {
                document.getElementById("oneko")?.remove();
                fetch("https://raw.githubusercontent.com/adryd325/oneko.js/c4ee66353b11a44e4a5b7e914a81f8d33111555e/oneko.js")
                    .then(x => x.text())
                    .then(s => s.replace("const nekoSpeed = 10;", `const nekoSpeed = ${settings.store.speed};`))
                    .then(s => s.replace("./oneko.gif", "https://raw.githubusercontent.com/adryd325/oneko.js/c4ee66353b11a44e4a5b7e914a81f8d33111555e/oneko.gif")
                        .replace("(isReducedMotion)", "(false)"))
                    .then(eval);
            }
            return;
        }
    }
});

export default definePlugin({
    name: "Oneko",
    description: () => t(plugin.oneko.description),
    // Listing adryd here because this literally just evals her script
    authors: [Devs.Ven, Devs.adryd],
    settings,

    start() {
        fetch("https://raw.githubusercontent.com/adryd325/oneko.js/c4ee66353b11a44e4a5b7e914a81f8d33111555e/oneko.js")
            .then(x => x.text())
            .then(s => s.replace("const nekoSpeed = 10;", `const nekoSpeed = ${settings.store.speed};`))
            .then(s => s.replace("./oneko.gif", "https://raw.githubusercontent.com/adryd325/oneko.js/c4ee66353b11a44e4a5b7e914a81f8d33111555e/oneko.gif")
                .replace("(isReducedMotion)", "(false)"))
            .then(eval);
    },

    stop() {
        document.getElementById("oneko")?.remove();
    }
});
