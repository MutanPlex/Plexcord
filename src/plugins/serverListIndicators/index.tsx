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

import { addServerListElement, removeServerListElement, ServerListRenderPosition } from "@api/ServerList";
import { definePluginSettings } from "@api/Settings";
import { classNameFactory } from "@api/Styles";
import ErrorBoundary from "@components/ErrorBoundary";
import { Devs, PcDevs } from "@utils/constants";
import definePlugin, { OptionType } from "@utils/types";
import { findStoreLazy } from "@webpack";
import { GuildStore, PresenceStore, RelationshipStore, Text, Tooltip, useStateFromStores } from "@webpack/common";

const enum IndicatorType {
    SERVER = 1 << 0,
    FRIEND = 1 << 1,
    BOTH = SERVER | FRIEND,
}


let onlineFriendsCount = 0;
let guildCount = 0;

const UserGuildJoinRequestStore = findStoreLazy("UserGuildJoinRequestStore");

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
        <div id="pc-friendcount">
            {!settings.store.useCompact &&
                <svg
                    id="pc-friendcount-icon"
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    fill="currentColor"
                    viewBox="0 0 24 24">
                    <path fill="currentColor"
                        d="M13 10a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" />
                    <path
                        fill="currentColor"
                        d="M3 5v-.75C3 3.56 3.56 3 4.25 3s1.24.56 1.33 1.25C6.12 8.65 9.46 12 13 12h1a8 8 0 0 1 8 8 2 2 0 0 1-2 2 .21.21 0 0 1-.2-.15 7.65 7.65 0 0 0-1.32-2.3c-.15-.2-.42-.06-.39.17l.25 2c.02.15-.1.28-.25.28H9a2 2 0 0 1-2-2v-2.22c0-1.57-.67-3.05-1.53-4.37A15.85 15.85 0 0 1 3 5Z">
                    </path>
                </svg>
            }
            <Text
                variant="text-xs/normal"
                id="pc-friendcount-text">{onlineFriendsCount}
            </Text>
            {!!settings.store.useCompact && <Text variant="text-xs/normal" id="pc-friendcount-text-compact">Friends</Text>}
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
        <div id="pc-guildcount">
            {!settings.store.useCompact &&
                <svg
                    id="pc-guildcount-icon"
                    aria-hidden="true"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    fill="currentColor"
                    viewBox="0 0 24 24">
                    <path
                        fill="currentColor"
                        d="M19.73 4.87a18.2 18.2 0 0 0-4.6-1.44c-.21.4-.4.8-.58 1.21-1.69-.25-3.4-.25-5.1 0-.18-.41-.37-.82-.59-1.2-1.6.27-3.14.75-4.6 1.43A19.04 19.04 0 0 0 .96 17.7a18.43 18.43 0 0 0 5.63 2.87c.46-.62.86-1.28 1.2-1.98-.65-.25-1.29-.55-1.9-.92.17-.12.32-.24.47-.37 3.58 1.7 7.7 1.7 11.28 0l.46.37c-.6.36-1.25.67-1.9.92.35.7.75 1.35 1.2 1.98 2.03-.63 3.94-1.6 5.64-2.87.47-4.87-.78-9.09-3.3-12.83ZM8.3 15.12c-1.1 0-2-1.02-2-2.27 0-1.24.88-2.26 2-2.26s2.02 1.02 2 2.26c0 1.25-.89 2.27-2 2.27Zm7.4 0c-1.1 0-2-1.02-2-2.27 0-1.24.88-2.26 2-2.26s2.02 1.02 2 2.26c0 1.25-.88 2.27-2 2.27Z">
                    </path>
                </svg>
            }
            <Text
                variant="text-xs/normal"
                id="pc-guildcount-text">{guildCount}
            </Text>
            {!!settings.store.useCompact && <Text variant="text-xs/normal" id="pc-guildcount-text-compact">Servers</Text>}
        </div>
    );
}

export const settings = definePluginSettings({
    mode: {
        description: "Mode",
        type: OptionType.SELECT,
        options: [
            { label: "Only online friend count", value: IndicatorType.FRIEND, default: true },
            { label: "Only server count", value: IndicatorType.SERVER },
            { label: "Both server and online friend counts", value: IndicatorType.BOTH },
        ],
        restartNeeded: true // Restart needed just to force update
    },
    useCompact: {
        description: "Makes the indicator appear with only text",
        type: OptionType.BOOLEAN,
        default: false,
        restartNeeded: true // Restart needed just to force update
    }
});

export default definePlugin({
    name: "ServerListIndicators",
    description: "Add online friend count or server count in the server list",
    authors: [Devs.dzshn, PcDevs.Panniku],
    dependencies: ["ServerListAPI"],
    settings,

    renderIndicator: () => {
        const { mode, useCompact } = settings.store;
        let text;
        // switch is simply better
        switch (mode) {
            case IndicatorType.BOTH:
                text = `${onlineFriendsCount} Friends, ${guildCount} Servers`;
                break;
            case IndicatorType.FRIEND:
                text = `${onlineFriendsCount} Friends`;
                break;
            case IndicatorType.SERVER:
                text = `${guildCount} Servers`;
                break;
        }

        const cl = useCompact ? classNameFactory("pc-indicators-compact") : classNameFactory("pc-indicators");

        return <ErrorBoundary noop>
            <div id={cl("-container")}>
                <Tooltip text={text} position="right">
                    {({ onMouseEnter, onMouseLeave }) => (
                        <div
                            id={cl("-indicator-items")}
                            onMouseEnter={onMouseEnter}
                            onMouseLeave={onMouseLeave}>
                            {!!(mode & IndicatorType.FRIEND) && <FriendsIndicator />}
                            {!!(mode & IndicatorType.SERVER) && <ServersIndicator />}
                        </div>
                    )}
                </Tooltip>
            </div>
        </ErrorBoundary>;
    },

    start() {
        addServerListElement(ServerListRenderPosition.Above, this.renderIndicator);
    },

    stop() {
        removeServerListElement(ServerListRenderPosition.Above, this.renderIndicator);
    }
});
