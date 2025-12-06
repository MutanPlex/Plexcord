/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2023 Vendicated and contributors
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
import { Devs, PcDevs } from "@utils/constants";
import definePlugin, { OptionType } from "@utils/types";

const settings = definePluginSettings({
    noShiftDelete: {
        label: () => t(plugin.showAllMessageButtons.option.noShiftDelete.label),
        description: () => t(plugin.showAllMessageButtons.option.noShiftDelete.description),
        type: OptionType.BOOLEAN,
        default: true,
    },
    noShiftPin: {
        label: () => t(plugin.showAllMessageButtons.option.noShiftPin.label),
        description: () => t(plugin.showAllMessageButtons.option.noShiftPin.description),
        type: OptionType.BOOLEAN,
        default: true,
    },
});

export default definePlugin({
    name: "ShowAllMessageButtons",
    description: () => t(plugin.showAllMessageButtons.description),
    authors: [Devs.Nuckyz, PcDevs.mochienya],
    settings,

    patches: [
        {
            find: "#{intl::MESSAGE_UTILITIES_A11Y_LABEL}",
            replacement: {
                // isExpanded: isShiftPressed && other conditions...
                match: /isExpanded:\i&&(.+?),/,
                replace: "isExpanded:$1,"
            }
        }
    ]
});
