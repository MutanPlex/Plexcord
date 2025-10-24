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

import { t } from "@api/i18n";
import { definePluginSettings } from "@api/Settings";
import { classNameFactory } from "@api/Styles";
import ErrorBoundary from "@components/ErrorBoundary";
import { FluxStore } from "@plexcord/discord-types";
import { Devs } from "@utils/constants";
import definePlugin, { OptionType } from "@utils/types";
import { findStoreLazy } from "@webpack";

import { MemberCount } from "./MemberCount";

export const GuildMemberCountStore = findStoreLazy("GuildMemberCountStore") as FluxStore & { getMemberCount(guildId?: string): number | null; };
export const ChannelMemberStore = findStoreLazy("ChannelMemberStore") as FluxStore & {
    getProps(guildId?: string, channelId?: string): { groups: { count: number; id: string; }[]; };
};
export const ThreadMemberListStore = findStoreLazy("ThreadMemberListStore") as FluxStore & {
    getMemberListSections(channelId?: string): { [sectionId: string]: { sectionId: string; userIds: string[]; }; };
};


export const settings = definePluginSettings({
    toolTip: {
        get label() {
            return t("plugin.memberCount.option.toolTip.label");
        },
        get description() {
            return t("plugin.memberCount.option.toolTip.description");
        },
        type: OptionType.BOOLEAN,
        default: true,
        restartNeeded: true
    },
    memberList: {
        get label() {
            return t("plugin.memberCount.option.memberList.label");
        },
        get description() {
            return t("plugin.memberCount.option.memberList.description");
        },
        type: OptionType.BOOLEAN,
        default: true,
        restartNeeded: true
    },
    voiceActivity: {
        get label() {
            return t("plugin.memberCount.option.voiceActivity.label");
        },
        get description() {
            return t("plugin.memberCount.option.voiceActivity.description");
        },
        type: OptionType.BOOLEAN,
        default: true
    }
});

const sharedIntlNumberFormat = new Intl.NumberFormat();
export const numberFormat = (value: number) => sharedIntlNumberFormat.format(value);
export const cl = classNameFactory("pc-membercount-");

export default definePlugin({
    name: "MemberCount",
    description: "Shows the number of online members, total members, and users in voice channels on the server — in the member list and tooltip.",
    authors: [Devs.Ven, Devs.Commandtechno, Devs.Apexo],
    settings,

    get displayDescription() {
        return t("plugin.memberCount.description");
    },

    patches: [
        {
            find: "{isSidebarVisible:",
            replacement: [
                {
                    match: /(?<=var\{className:(\i),.+?children):\[(\i\.useMemo[^}]+"aria-multiselectable")/,
                    replace: ":[$1?.startsWith('members')?$self.render():null,$2",
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
