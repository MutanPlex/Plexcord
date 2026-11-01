/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2022 Sofia Lima
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

import "./styles.css";

import { plugin, t } from "@api/i18n";
import { addServerListElement, removeServerListElement, ServerListItem, ServerListRenderPosition } from "@api/ServerList";
import { definePluginSettings } from "@api/Settings";
import { BaseText } from "@components/BaseText";
import { FriendsIcon, ServerIcon } from "@components/Icons";
import { Devs, PcDevs } from "@utils/constants";
import { classNameFactory } from "@utils/css";
import definePlugin, { OptionType } from "@utils/types";
import { GuildStore, PresenceStore, RelationshipStore, UserGuildJoinRequestStore, useStateFromStores } from "@webpack/common";

const enum IndicatorType {
    SERVER = 1 << 0,
    FRIEND = 1 << 1,
    BOTH = SERVER | FRIEND,
}

let onlineFriendsCount = 0;
let guildCount = 0;

const cl = classNameFactory("pc-indicators-");

function FriendsIndicator() {
    onlineFriendsCount = useStateFromStores([RelationshipStore, PresenceStore], () => {
        let count = 0;

        const friendIds = RelationshipStore.getFriendIDs();
        for (const id of friendIds) {
            const status = PresenceStore.getStatus(id) ?? "offline";
            if (status === "offline") {
                continue;
            }

            count++;
        }

        return count;
    });

    return (
        <div id="pc-friendcount" className={cl("item")} aria-label={`${onlineFriendsCount} ${t(plugin.serverListIndicators.friends)}`}>
            <FriendsIcon width="12px" height="12px" />
            <BaseText size="xs" id="pc-friendcount-text">{onlineFriendsCount}</BaseText>
        </div>
    );
}

function ServersIndicator() {
    guildCount = useStateFromStores([GuildStore, UserGuildJoinRequestStore], () => {
        const guildJoinRequests: string[] = UserGuildJoinRequestStore.computeGuildIds();
        const guilds = GuildStore.getGuilds();

        // Filter only pending guild join requests
        return GuildStore.getGuildCount() + guildJoinRequests.filter(id => guilds[id] == null).length;
    });

    return (
        <div id="pc-guildcount" className={cl("item")} aria-label={`${guildCount} ${t(plugin.serverListIndicators.servers)}`}>
            <ServerIcon width="12px" height="12px"/>
            <BaseText size="xs" id="pc-guildcount-text">{guildCount}</BaseText>
        </div>
    );
}

export const settings = definePluginSettings({
    mode: {
        label: () => t(plugin.serverListIndicators.option.mode.label),
        description: () => t(plugin.serverListIndicators.option.mode.description),
        type: OptionType.SELECT,
        options: [
            { label: () => t(plugin.serverListIndicators.option.mode.friend), value: IndicatorType.FRIEND, default: true },
            { label: () => t(plugin.serverListIndicators.option.mode.server), value: IndicatorType.SERVER },
            { label: () => t(plugin.serverListIndicators.option.mode.both), value: IndicatorType.BOTH },
        ]
    }
});

export default definePlugin({
    name: "ServerListIndicators",
    description: () => t(plugin.serverListIndicators.description),
    tags: ["friends", "servers", "utility"],
    authors: [Devs.Rini, PcDevs.Panniku],
    dependencies: ["ServerListAPI"],
    settings,

    renderIndicator: () => {
        const { mode } = settings.store;
        let text: string;
        // switch is simply better
        switch (mode) {
            case IndicatorType.BOTH:
                text = `${onlineFriendsCount} ${t(plugin.serverListIndicators.friends)}, ${guildCount} ${t(plugin.serverListIndicators.servers)}`;
                break;
            case IndicatorType.FRIEND:
                text = `${onlineFriendsCount} ${t(plugin.serverListIndicators.friends)}`;
                break;
            case IndicatorType.SERVER:
                text = `${guildCount} ${t(plugin.serverListIndicators.servers)}`;
                break;
        }

        const items = () => {
            return (
                <div id={cl("group")}>
                    {!!(mode & IndicatorType.FRIEND) && <FriendsIndicator />}
                    {!!(mode & IndicatorType.SERVER) && <ServersIndicator />}
                </div>
            );
        };

        return (
            <ServerListItem
                id={cl("container")}
                icon={items}
                tooltip={text}
            />
        );
    },

    start() {
        addServerListElement(ServerListRenderPosition.Above, this.renderIndicator);
    },

    stop() {
        removeServerListElement(ServerListRenderPosition.Above, this.renderIndicator);
    }
});
