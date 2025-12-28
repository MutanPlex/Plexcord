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

import "./style.css";

import { plugin, t } from "@api/i18n";
import { definePluginSettings } from "@api/Settings";
import ErrorBoundary from "@components/ErrorBoundary";
import { FluxStore } from "@plexcord/discord-types";
import { Devs } from "@utils/constants";
import { classNameFactory } from "@utils/css";
import definePlugin, { OptionType } from "@utils/types";
import { findStoreLazy } from "@webpack";

import { MemberCount } from "./MemberCount";

export const ChannelMemberStore = findStoreLazy("ChannelMemberStore") as FluxStore & {
    getProps(guildId?: string, channelId?: string): { groups: { count: number; id: string; }[]; };
};
export const ThreadMemberListStore = findStoreLazy("ThreadMemberListStore") as FluxStore & {
    getMemberListSections(channelId?: string): { [sectionId: string]: { sectionId: string; userIds: string[]; }; };
};

export const settings = definePluginSettings({
    toolTip: {
        label: () => t(plugin.memberCount.option.toolTip.label),
        description: () => t(plugin.memberCount.option.toolTip.description),
        type: OptionType.BOOLEAN,
        default: true,
        restartNeeded: true
    },
    memberList: {
        label: () => t(plugin.memberCount.option.memberList.label),
        description: () => t(plugin.memberCount.option.memberList.description),
        type: OptionType.BOOLEAN,
        default: true,
        restartNeeded: true
    },
    voiceActivity: {
        label: () => t(plugin.memberCount.option.voiceActivity.label),
        description: () => t(plugin.memberCount.option.voiceActivity.description),
        type: OptionType.BOOLEAN,
        default: true
    }
});

const sharedIntlNumberFormat = new Intl.NumberFormat();
export const numberFormat = (value: number) => sharedIntlNumberFormat.format(value);
export const cl = classNameFactory("pc-membercount-");

export default definePlugin({
    name: "MemberCount",
    description: () => t(plugin.memberCount.description),
    authors: [Devs.Ven, Devs.Commandtechno, Devs.Apexo],
    settings,

    patches: [
        {
            find: "{isSidebarVisible:",
            replacement: [
                {
                    match: /(?<=var\{className:(\i),.+?children):\[(\i\.useMemo[^}]+"aria-multiselectable")/,
                    replace: ":[$1?.includes('members')?$self.render():null,$2",
                },
            ],
            predicate: () => settings.store.memberList
        },
        {
            find: ".invitesDisabledTooltip",
            replacement: {
                match: /#{intl::VIEW_AS_ROLES_MENTIONS_WARNING}.{0,100}(?=])/,
                replace: "$&,$self.renderTooltip(arguments[0].guild)"
            },
            predicate: () => settings.store.toolTip
        }
    ],
    render: ErrorBoundary.wrap(() => <MemberCount />, { noop: true }),
    renderTooltip: ErrorBoundary.wrap(guild => <MemberCount isTooltip tooltipGuildId={guild.id} />, { noop: true })
});
