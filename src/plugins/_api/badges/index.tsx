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
import { t } from "@api/i18n";
import ErrorBoundary from "@components/ErrorBoundary";
import { Flex } from "@components/Flex";
import { Heading } from "@components/Heading";
import { Heart } from "@components/Heart";
import { Paragraph } from "@components/Paragraph";
import DonateButton from "@components/settings/DonateButton";
import { openContributorModal } from "@components/settings/tabs";
import { User } from "@plexcord/discord-types";
import { Devs, PcDevs } from "@utils/constants";
import { copyWithToast } from "@utils/discord";
import { Logger } from "@utils/Logger";
import { Margins } from "@utils/margins";
import { shouldShowContributorBadge, shouldShowPcContributorBadge } from "@utils/misc";
import { closeModal, ModalContent, ModalFooter, ModalHeader, ModalRoot, openModal } from "@utils/modal";
import definePlugin from "@utils/types";
import { ContextMenuApi, Menu, Toasts, UserStore } from "@webpack/common";

const CONTRIBUTOR_BADGE = "https://cdn.discordapp.com/emojis/1092089799109775453.png?size=64";
const PLEXCORD_BADGE = "https://cdn.discordapp.com/emojis/1357527217332031508.webp?size=64";
const ContributorBadge: ProfileBadge = {
    get description() {
        return t("plugins.metadata.badges.contributor.vencord");
    },
    iconSrc: CONTRIBUTOR_BADGE,
    position: BadgePosition.START,
    shouldShow: ({ userId }) => shouldShowContributorBadge(userId),
    onClick: (_, { userId }) => openContributorModal(UserStore.getUser(userId))
};
const PlexcordBadge: ProfileBadge = {
    get description() {
        return t("plugins.metadata.badges.contributor.plexcord");
    },
    iconSrc: PLEXCORD_BADGE,
    position: BadgePosition.START,
    shouldShow: ({ userId }) => shouldShowPcContributorBadge(userId),
    onClick: (_, { userId }) => openContributorModal(UserStore.getUser(userId))
};

let DonorBadges = {} as Record<string, Array<Record<"tooltip" | "badge", string>>>;
let MutanBadges = {} as Record<string, Array<Record<"tooltip" | "badge", string>>>;

async function loadBadges(noCache = false) {
    DonorBadges = {};
    MutanBadges = {};

    const init = {} as RequestInit;
    if (noCache)
        init.cache = "no-cache";

    DonorBadges = await fetch("https://badges.vencord.dev/badges.json", init)
        .then(r => r.json());
    MutanBadges = await fetch("https://badges.plexcord.club/badges.json", init)
        .then(r => r.json());

    DonorBadges = {
        ...DonorBadges,
        ...MutanBadges,
    };
}
function BadgeContextMenu({ badge }: { badge: ProfileBadge & BadgeUserArgs; }) {
    return (
        <Menu.Menu
            navId="pc-badge-context"
            onClose={ContextMenuApi.closeContextMenu}
            aria-label={t("plugins.metadata.badges.context.title")}
        >
            {badge.description && (
                <Menu.MenuItem
                    id="pc-badge-copy-name"
                    label={t("plugins.metadata.badges.context.copy.name")}
                    action={() => copyWithToast(badge.description!)}
                />
            )}
            {badge.iconSrc && (
                <Menu.MenuItem
                    id="pc-badge-copy-link"
                    label={t("plugins.metadata.badges.context.copy.link")}
                    action={() => copyWithToast(badge.iconSrc!)}
                />
            )}
        </Menu.Menu>
    );
}
let intervalId: any;

export default definePlugin({
    name: "BadgeAPI",
    description: "API to add badges to users",
    authors: [Devs.Megu, Devs.Ven, Devs.TheSun, PcDevs.MutanPlex],
    required: true,

    get displayDescription() {
        return t("plugins.metadata.badges.description");
    },

    patches: [
        {
            find: ".MODAL]:26",
            replacement: {
                match: /(?=;return 0===(\i)\.length\?)(?<=(\i)\.useMemo.+?)/,
                replace: ";$1=$2.useMemo(()=>[...$self.getBadges(arguments[0].displayProfile),...$1],[$1])"
            }
        },
        {
            find: "#{intl::PROFILE_USER_BADGES}",
            replacement: [
                {
                    match: /alt:" ","aria-hidden":!0,src:.{0,50}(\i).iconSrc/,
                    replace: "...$1.props,$&"
                },
                {
                    match: /(?<="aria-label":(\i)\.description,.{0,200})children:/,
                    replace: "children:$1.component?$self.renderBadgeComponent({...$1}) :"
                },
                // handle onClick and onContextMenu
                {
                    match: /href:(\i)\.link/,
                    replace: "...$self.getBadgeMouseEventHandlers($1),$&"
                }
            ]
        },
        {
            find: "profileCardUsernameRow,children:",
            replacement: {
                match: /badges:(\i)(?<=displayProfile:(\i).+?)/,
                replace: "badges:[...$self.getBadges($2),...$1]"
            }
        }
    ],

    // for access from the console or other plugins
    get DonorBadges() {
        return DonorBadges;
    },

    get toolboxActions() {
        return {
            [t("plugins.metadata.badges.context.refetch.button")]: async function () {
                await loadBadges(true);
                Toasts.show({
                    id: Toasts.genId(),
                    message: t("plugins.metadata.badges.context.refetch.success"),
                    type: Toasts.Type.SUCCESS
                });
            }
        };
    },

    userProfileBadge: ContributorBadge,
    userProfileContributorBadge: PlexcordBadge,

    async start() {
        await loadBadges();

        clearInterval(intervalId);
        intervalId = setInterval(loadBadges, 1000 * 60 * 30); // 30 minutes
    },

    async stop() {
        clearInterval(intervalId);
    },

    getBadges(props: { userId: string; user?: User; guildId: string; }) {
        if (!props) return [];

        try {
            props.userId ??= props.user?.id!;

            return _getBadges(props);
        } catch (e) {
            new Logger("BadgeAPI#hasBadges").error(e);
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
            onContextMenu(event, badge) {
                ContextMenuApi.openContextMenu(event, () => <BadgeContextMenu badge={badge} />);
            },
            onClick() {
                const modalKey = openModal(props => (
                    <ErrorBoundary noop onError={() => {
                        closeModal(modalKey);
                        PlexcordNative.native.openExternal("https://github.com/sponsors/MutanPlex");
                    }}>
                        <ModalRoot {...props}>
                            <ModalHeader>
                                <Heading
                                    style={{
                                        width: "100%",
                                        textAlign: "center",
                                        margin: 0
                                    }}
                                >
                                    <Flex justifyContent="center" alignItems="center" style={{ gap: "0.5em" }}>
                                        <Heart />
                                        {t("plugins.metadata.badges.modal.title")}
                                    </Flex>
                                </Heading>
                            </ModalHeader>
                            <ModalContent>
                                <Flex>
                                    <img
                                        role="presentation"
                                        src="https://cdn.discordapp.com/emojis/1026533070955872337.png"
                                        alt=""
                                        style={{ margin: "auto" }}
                                    />
                                    <img
                                        role="presentation"
                                        src="https://cdn.discordapp.com/emojis/1026533090627174460.png"
                                        alt=""
                                        style={{ margin: "auto" }}
                                    />
                                </Flex>
                                <div style={{ padding: "1em" }}>
                                    <Paragraph>
                                        {t("plugins.metadata.badges.modal.special")}
                                    </Paragraph>
                                    <Paragraph className={Margins.top20}>
                                        {t("plugins.metadata.badges.modal.description")}
                                    </Paragraph>
                                </div>
                            </ModalContent>
                            <ModalFooter>
                                <Flex justifyContent="center" style={{ width: "100%" }}>
                                    <DonateButton />
                                </Flex>
                            </ModalFooter>
                        </ModalRoot>
                    </ErrorBoundary>
                ));
            },
        } satisfies ProfileBadge));
    }
});
