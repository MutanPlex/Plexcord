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
import { definePluginSettings, Settings } from "@api/Settings";
import ErrorBoundary from "@components/ErrorBoundary";
import { Devs } from "@utils/constants";
import { useTimer } from "@utils/react";
import { formatDurationMs } from "@utils/text";
import definePlugin, { OptionType } from "@utils/types";
import { React } from "@webpack/common";

import alignedChatInputFix from "./alignedChatInputFix.css?managed";

const settings = definePluginSettings({
    format: {
        label: () => t(plugin.callTimer.option.format.label),
        description: () => t(plugin.callTimer.option.format.description),
        type: OptionType.SELECT,
        options: [
            {
                label: () => t(plugin.callTimer.option.format.stopwatch),
                value: "stopwatch",
                default: true
            },
            {
                label: () => t(plugin.callTimer.option.format.human),
                value: "human"
            }
        ]
    }
});

export default definePlugin({
    name: "CallTimer",
    description: () => t(plugin.callTimer.description),
    authors: [Devs.Ven],
    managedStyle: alignedChatInputFix,
    settings,

    startTime: 0,
    interval: void 0 as NodeJS.Timeout | undefined,

    patches: [{
        find: "renderConnectionStatus(){",
        replacement: {
            // in renderConnectionStatus()
            match: /(lineClamp:1,children:)(\i)(?=,|}\))/,
            replace: "$1[$2,$self.renderTimer(this.props.channel.id)]"
        }
    }],

    renderTimer(channelId: string) {
        return <ErrorBoundary noop>
            <this.Timer channelId={channelId} />
        </ErrorBoundary>;
    },

    Timer({ channelId }: { channelId: string; }) {
        const time = useTimer({
            deps: [channelId]
        });

        return <p style={{ margin: 0, fontFamily: "var(--font-code)" }}>{formatDurationMs(time, Settings.plugins.CallTimer.format === "human")}</p>;
    }
});
