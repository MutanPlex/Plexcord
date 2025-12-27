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

import "./style.css";

import { plugin, t } from "@api/i18n";
import { definePluginSettings } from "@api/Settings";
import { Devs } from "@utils/constants";
import definePlugin, { OptionType } from "@utils/types";
import { ChannelStore } from "@webpack/common";

import { convert } from "./converter";
import { conversions, ConverterAccessory, ConvertIcon } from "./ConverterAccessory";

export const settings = definePluginSettings({
    myUnits: {
        label: () => t(plugin.unitConverter.option.myUnits.label),
        description: () => t(plugin.unitConverter.option.myUnits.description),
        type: OptionType.SELECT,
        options: [
            {
                default: true,
                label: () => t(plugin.unitConverter.option.myUnits.imperial),
                value: "imperial",
            },
            {
                label: () => t(plugin.unitConverter.option.myUnits.metric),
                value: "metric"
            }
        ]
    },
    // invert: {
    //     type: OptionType.BOOLEAN,
    //     default: false,
    //     // is there a better way to word this?
    //     description: "If this option is set, ignore the units you set and invert every conversion."
    // }
});
export default definePlugin({
    name: "UnitConverter",
    description: () => t(plugin.unitConverter.description),
    authors: [Devs.sadan],
    dependencies: ["MessagePopoverAPI"],
    renderMessageAccessory: props => <ConverterAccessory message={props.message} />,

    messagePopoverButton: {
        icon: ConvertIcon,
        render(message) {
            if (!message.content) return null;
            return {
                label: t(plugin.unitConverter.tooltip),
                icon: ConvertIcon,
                message,
                channel: ChannelStore.getChannel(message.channel_id),
                onClick: async () => {
                    const setConversion = conversions.get(message.id);
                    if (!setConversion) return;
                    setConversion(convert(message.content));
                }
            };
        }
    },

    settings,
});
