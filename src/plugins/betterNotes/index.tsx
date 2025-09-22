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

import { t } from "@api/i18n";
import { definePluginSettings, Settings } from "@api/Settings";
import { Devs } from "@utils/constants";
import { canonicalizeMatch } from "@utils/patches";
import definePlugin, { OptionType } from "@utils/types";

const settings = definePluginSettings({
    hide: {
        get label() {
            return t("plugin.betterNotesBox.option.hide.label");
        },
        get description() {
            return t("plugin.betterNotesBox.option.hide.description");
        },
        type: OptionType.BOOLEAN,
        default: false,
        restartNeeded: true
    },
    noSpellCheck: {
        get label() {
            return t("plugin.betterNotesBox.option.noSpellCheck.label");
        },
        get description() {
            return t("plugin.betterNotesBox.option.noSpellCheck.description");
        },
        type: OptionType.BOOLEAN,
        disabled: () => Settings.plugins.BetterNotesBox.hide,
        default: false
    }
});

export default definePlugin({
    name: "BetterNotesBox",
    description: "Hide notes or disable spellcheck (Configure in settings!!)",
    authors: [Devs.Ven],
    settings,

    get displayDescription() {
        return t("plugin.betterNotesBox.description");
    },

    patches: [
        {
            find: "hideNote:",
            all: true,
            // Some modules match the find but the replacement is returned untouched
            noWarn: true,
            predicate: () => settings.store.hide,
            replacement: {
                match: /hideNote:.+?(?=([,}].*?\)))/g,
                replace: (m, rest) => {
                    const destructuringMatch = rest.match(/}=.+/);
                    if (destructuringMatch) {
                        const defaultValueMatch = m.match(canonicalizeMatch(/hideNote:(\i)=!?\d/));
                        return defaultValueMatch ? `hideNote:${defaultValueMatch[1]}=!0` : m;
                    }

                    return "hideNote:!0";
                }
            }
        },
        {
            find: "#{intl::NOTE_PLACEHOLDER}",
            replacement: {
                match: /#{intl::NOTE_PLACEHOLDER}\),/,
                replace: "$&spellCheck:!$self.noSpellCheck,"
            }
        }
    ],

    get noSpellCheck() {
        return settings.store.noSpellCheck;
    }
});
