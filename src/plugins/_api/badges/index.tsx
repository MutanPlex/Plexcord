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

import "./fixDiscordBadgePadding.css";

import { _getBadges, BadgePosition, BadgeUserArgs, ProfileBadge } from "@api/Badges";
import { plugins, t } from "@api/i18n";
import ErrorBoundary from "@components/ErrorBoundary";
import { openContributorModal } from "@components/settings/tabs";
import { Devs, PcDevs } from "@utils/constants";
import { copyWithToast } from "@utils/discord";
import { Logger } from "@utils/Logger";
import { shouldShowContributorBadge, shouldShowPcContributorBadge } from "@utils/misc";
import definePlugin from "@utils/types";
import { ContextMenuApi, Menu, Toasts, UserStore } from "@webpack/common";

import Plugins, { PluginMeta } from "~plugins";

import { openDonorModal } from "./modals";

const CONTRIBUTOR_BADGE = "https://cdn.discordapp.com/emojis/1092089799109775453.png?size=64";
const PLEXCORD_BADGE = "https://cdn.discordapp.com/emojis/1357527217332031508.webp?size=64";
const ContributorBadge: ProfileBadge = {
    get description() {
        return t(plugins.metadata.badges.contributor.vencord);
    },
    iconSrc: CONTRIBUTOR_BADGE,
    position: BadgePosition.START,
    shouldShow: ({ userId }) => shouldShowContributorBadge(userId),
    onClick: (_, { userId }) => openContributorModal(UserStore.getUser(userId))
};

const PlexcordBadge: ProfileBadge = {
    get description() {
        return t(plugins.metadata.badges.contributor.plexcord);
    },
    iconSrc: PLEXCORD_BADGE,
    position: BadgePosition.START,
    shouldShow: ({ userId }) => shouldShowPcContributorBadge(userId),
    onClick: (_, { userId }) => openContributorModal(UserStore.getUser(userId))
};

const UserPluginContributorBadge: ProfileBadge = {
    get description() {
        return t(plugins.metadata.badges.contributor.userPlugin);
    },
    iconSrc: PLEXCORD_BADGE,
    position: BadgePosition.START,
    shouldShow: ({ userId }) => {
        if (!IS_DEV) return false;
        const allPlugins = Object.values(Plugins);
        return allPlugins.some(p => {
            function getName(name: string | (() => string)): string {
                return typeof name === "function" ? name() : name;
            }
            const pluginMeta = PluginMeta[getName(p.name)];
            return pluginMeta?.userPlugin && p.authors.some(a => a.id.toString() === userId);
        });
    },
    onClick: (_, { userId }) => openContributorModal(UserStore.getUser(userId)),
    props: {
        style: {
            borderRadius: "50%",
            transform: "scale(0.9)"
        }
    },
};

let DonorBadges = {} as Record<string, Array<Record<"tooltip" | "badge", string>>>;
const MutanBadges = {} as Record<string, Array<Record<"tooltip" | "badge", string>>>;

async function loadBadges(url: string, noCache = false) {
    const init = {} as RequestInit;
    if (noCache) init.cache = "no-cache";

    return await fetch(url, init).then(r => r.json());
}

async function loadAllBadges(noCache = false) {
    const donor = await loadBadges("https://badges.vencord.dev/badges.json", noCache);
    const plexcord = await loadBadges("https://badges.plexcord.club/badges.json", noCache);

    DonorBadges = {
        ...donor,
        ...plexcord,
    };
}

let intervalId: any;

export function BadgeContextMenu({ badge }: { badge: ProfileBadge & BadgeUserArgs; }) {
    return (
        <Menu.Menu
            navId="pc-badge-context"
            onClose={ContextMenuApi.closeContextMenu}
            aria-label={t(plugins.metadata.badges.context.title)}
        >
            {badge.description && (
                <Menu.MenuItem
                    id="pc-badge-copy-name"
                    label={t(plugins.metadata.badges.context.copy.name)}
                    action={() => {
                        const description = typeof badge.description === "function"
                            ? badge.description(badge)
                            : badge.description;
                        if (description) copyWithToast(description);
                    }}
                />
            )}
            {badge.iconSrc && (
                <Menu.MenuItem
                    id="pc-badge-copy-link"
                    label={t(plugins.metadata.badges.context.copy.link)}
                    action={() => copyWithToast(badge.iconSrc!)}
                />
            )}
        </Menu.Menu>
    );
}

export default definePlugin({
    name: "BadgeAPI",
    description: () => t(plugins.metadata.badges.description),
    authors: [Devs.Megu, Devs.Ven, Devs.TheSun, PcDevs.MutanPlex],
    required: true,

    patches: [
        {
            find: "#{intl::PROFILE_USER_BADGES}",
            replacement: [
                {
                    match: /(?<=\{[^}]*?)badges:\i(?=[^}]*?}=(\i))/,
                    replace: "_$&=$self.useBadges($1.displayProfile).concat($1.badges)"
                },
                {
                    match: /alt:" ","aria-hidden":!0,src:.{0,50}(\i).iconSrc/,
                    replace: "...$1.props,$&"
                },
                {
                    match: /(?<="aria-label":(\i)\.description,.{0,200}?)children:/g,
                    replace: "children:$1.component?$self.renderBadgeComponent({...$1}) :"
                },
                // handle onClick and onContextMenu
                {
                    match: /href:(\i)\.link/,
                    replace: "...$self.getBadgeMouseEventHandlers($1),$&"
                }
            ]
        }
    ],

    // for access from the console or other plugins
    get DonorBadges() {
        return DonorBadges;
    },

    toolboxActions: () => ({
        [t(plugins.metadata.badges.context.refetch.button)]: async function () {
            await loadAllBadges(true);
            Toasts.show({
                id: Toasts.genId(),
                message: t(plugins.metadata.badges.context.refetch.success),
                type: Toasts.Type.SUCCESS
            });
        }
    }),

    userProfileBadges: [ContributorBadge, PlexcordBadge, UserPluginContributorBadge],

    async start() {
        await loadAllBadges();
        clearInterval(intervalId);
        intervalId = setInterval(loadAllBadges, 1000 * 60 * 30); // 30 minutes
    },

    async stop() {
        clearInterval(intervalId);
    },

    // doesn't use hooks itself, but some plugins might do so in their getBadges function
    useBadges(profile: { userId: string; guildId: string; }) {
        if (!profile) return [];

        try {
            return _getBadges(profile);
        } catch (e) {
            new Logger("BadgeAPI#useBadges").error(e);
            return [];
        }
    },

    renderBadgeComponent: ErrorBoundary.wrap((badge: ProfileBadge & BadgeUserArgs) => {
        const Component = badge.component!;
        return <Component {...badge} />;
    }, { noop: true }),

    getBadgeMouseEventHandlers(badge: ProfileBadge & BadgeUserArgs) {
        const handlers = {} as Record<string, (e: React.MouseEvent) => void>;

        if (!badge) return handlers; // sanity check

        const { onClick, onContextMenu } = badge;

        if (onClick) handlers.onClick = e => onClick(e, badge);
        if (onContextMenu) handlers.onContextMenu = e => onContextMenu(e, badge);

        return handlers;
    },

    getDonorBadges(userId: string) {
        return DonorBadges[userId]?.map(badge => ({
            iconSrc: badge.badge,
            description: badge.tooltip,
            position: BadgePosition.START,
            props: {
                style: {
                    borderRadius: "50%",
                    transform: "scale(0.9)" // The image is a bit too big compared to default badges
                }
            },
            onContextMenu(event, badgeProps) {
                ContextMenuApi.openContextMenu(event, () => <BadgeContextMenu badge={badgeProps} />);
            },
            onClick() {
                return openDonorModal();
            },
        } satisfies ProfileBadge));
    }
});

export { openDonorModal };
