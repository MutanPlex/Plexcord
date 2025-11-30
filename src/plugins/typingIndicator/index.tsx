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
import { definePluginSettings, Settings } from "@api/Settings";
import ErrorBoundary from "@components/ErrorBoundary";
import { buildSeveralUsers } from "@plugins/typingTweaks";
import { Devs } from "@utils/constants";
import { getIntlMessage } from "@utils/discord";
import definePlugin, { OptionType } from "@utils/types";
import { findComponentByCodeLazy, findStoreLazy } from "@webpack";
import { GuildMemberStore, RelationshipStore, SelectedChannelStore, Tooltip, TypingStore, UserStore, UserSummaryItem, useStateFromStores } from "@webpack/common";

const ThreeDots = findComponentByCodeLazy(".dots,", "dotRadius:");

const UserGuildSettingsStore = findStoreLazy("UserGuildSettingsStore");

const enum IndicatorMode {
    Dots = 1 << 0,
    Avatars = 1 << 1
}

function getDisplayName(guildId: string, userId: string) {
    const user = UserStore.getUser(userId);
    return GuildMemberStore.getNick(guildId, userId) ?? (user as any).globalName ?? user.username;
}

function TypingIndicator({ channelId, guildId }: { channelId: string; guildId: string; }) {
    const typingUsers: Record<string, number> = useStateFromStores(
        [TypingStore],
        () => ({ ...TypingStore.getTypingUsers(channelId) }),
        null,
        (old, current) => {
            const oldKeys = Object.keys(old);
            const currentKeys = Object.keys(current);

            return oldKeys.length === currentKeys.length && currentKeys.every(key => old[key] != null);
        }
    );
    const currentChannelId = useStateFromStores([SelectedChannelStore], () => SelectedChannelStore.getChannelId());

    if (!settings.store.includeMutedChannels) {
        const isChannelMuted = UserGuildSettingsStore.isChannelMuted(guildId, channelId);
        if (isChannelMuted) return null;
    }

    if (!settings.store.includeCurrentChannel) {
        if (currentChannelId === channelId) return null;
    }

    const myId = UserStore.getCurrentUser()?.id;

    const typingUsersArray = Object.keys(typingUsers).filter(id =>
        id !== myId && !(RelationshipStore.isBlocked(id) && !settings.store.includeBlockedUsers) && !(RelationshipStore.isIgnored(id) && !settings.store.includeIgnoredUsers)
    );
    const [a, b, c] = typingUsersArray;
    let tooltipText: string;

    switch (typingUsersArray.length) {
        case 0: break;
        case 1: {
            tooltipText = getIntlMessage("ONE_USER_TYPING", { a: getDisplayName(guildId, a) });
            break;
        }
        case 2: {
            tooltipText = getIntlMessage("TWO_USERS_TYPING", { a: getDisplayName(guildId, a), b: getDisplayName(guildId, b) });
            break;
        }
        case 3: {
            tooltipText = getIntlMessage("THREE_USERS_TYPING", { a: getDisplayName(guildId, a), b: getDisplayName(guildId, b), c: getDisplayName(guildId, c) });
            break;
        }
        default: {
            tooltipText = Settings.plugins.TypingTweaks.enabled
                ? buildSeveralUsers({ users: [a, b].map(UserStore.getUser), count: typingUsersArray.length - 2, guildId })
                : getIntlMessage("SEVERAL_USERS_TYPING");
            break;
        }
    }

    if (typingUsersArray.length > 0) {
        return (
            <Tooltip text={tooltipText!}>
                {props => (
                    <div className="pc-typing-indicator" {...props}>
                        {((settings.store.indicatorMode & IndicatorMode.Avatars) === IndicatorMode.Avatars) && (
                            <div
                                onClick={e => {
                                    e.stopPropagation();
                                    e.preventDefault();
                                }}
                                onKeyPress={e => e.stopPropagation()}
                            >
                                <UserSummaryItem
                                    users={typingUsersArray.map(id => UserStore.getUser(id))}
                                    guildId={guildId}
                                    renderIcon={false}
                                    max={3}
                                    showDefaultAvatarsForNullUsers
                                    showUserPopout
                                    size={16}
                                    className="pc-typing-indicator-avatars"
                                />
                            </div>
                        )}
                        {((settings.store.indicatorMode & IndicatorMode.Dots) === IndicatorMode.Dots) && (
                            <div className="pc-typing-indicator-dots">
                                <ThreeDots dotRadius={3} themed={true} />
                            </div>
                        )}
                    </div>
                )}
            </Tooltip>
        );
    }

    return null;
}

const settings = definePluginSettings({
    includeCurrentChannel: {
        get label() {
            return t("plugin.typingIndicator.option.includeCurrentChannel.label");
        },
        get description() {
            return t("plugin.typingIndicator.option.includeCurrentChannel.description");
        },
        type: OptionType.BOOLEAN,
        default: true
    },
    includeMutedChannels: {
        get label() {
            return t("plugin.typingIndicator.option.includeMutedChannels.label");
        },
        get description() {
            return t("plugin.typingIndicator.option.includeMutedChannels.description");
        },
        type: OptionType.BOOLEAN,
        default: false
    },
    includeIgnoredUsers: {
        get label() {
            return t("plugin.typingIndicator.option.includeIgnoredUsers.label");
        },
        get description() {
            return t("plugin.typingIndicator.option.includeIgnoredUsers.description");
        },
        type: OptionType.BOOLEAN,
        default: false
    },
    includeBlockedUsers: {
        get label() {
            return t("plugin.typingIndicator.option.includeBlockedUsers.label");
        },
        get description() {
            return t("plugin.typingIndicator.option.includeBlockedUsers.description");
        },
        type: OptionType.BOOLEAN,
        default: false
    },
    indicatorMode: {
        get label() {
            return t("plugin.typingIndicator.option.indicatorMode.label");
        },
        get description() {
            return t("plugin.typingIndicator.option.indicatorMode.description");
        },
        type: OptionType.SELECT,
        get options() {
            return [
                { label: t("plugin.typingIndicator.option.indicatorMode.both"), value: IndicatorMode.Dots | IndicatorMode.Avatars, default: true },
                { label: t("plugin.typingIndicator.option.indicatorMode.dots"), value: IndicatorMode.Dots },
                { label: t("plugin.typingIndicator.option.indicatorMode.avatars"), value: IndicatorMode.Avatars },
            ];
        },
    }
});

export default definePlugin({
    name: "TypingIndicator",
    description: "Adds an indicator if someone is typing on a channel.",
    authors: [Devs.Nuckyz, Devs.fawn, Devs.Sqaaakoi],
    settings,

    get displayDescription() {
        return t("plugin.typingIndicator.description");
    },

    patches: [
        {
            // Normal channel
            find: "UNREAD_IMPORTANT:",
            replacement: {
                match: /\.Children\.count.+?:null(?<=,channel:(\i).+?)/,
                replace: "$&,$self.TypingIndicator($1.id,$1.getGuildId())"
            }
        },
        {
            // Thread "spine" that shows in the left.
            find: "M0 15H2c0 1.6569",
            replacement: {
                match: /mentionsCount:\i.+?null(?<=channel:(\i).+?)/,
                replace: "$&,$self.TypingIndicator($1.id,$1.getGuildId())"
            }
        }
    ],

    TypingIndicator: (channelId: string, guildId: string) => (
        <ErrorBoundary noop>
            <TypingIndicator channelId={channelId} guildId={guildId} />
        </ErrorBoundary>
    ),
});
