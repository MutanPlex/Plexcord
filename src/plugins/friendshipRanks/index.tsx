/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2024 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import "./styles.css";

import { BadgePosition, BadgeUserArgs, ProfileBadge } from "@api/Badges";
import { i18n, plugin, t } from "@api/i18n";
import { Badges } from "@api/index";
import { definePluginSettings } from "@api/Settings";
import ErrorBoundary from "@components/ErrorBoundary";
import { Flex } from "@components/Flex";
import { Heading } from "@components/Heading";
import { Paragraph } from "@components/Paragraph";
import { RenderModalProps } from "@plexcord/discord-types";
import { Devs, PcDevs } from "@utils/constants";
import { classNameFactory } from "@utils/css";
import definePlugin, { OptionType } from "@utils/types";
import { Modal, openModal, RelationshipStore, Tooltip, useStateFromStores } from "@webpack/common";

interface rankInfo {
    title: string;
    description: string;
    requirement: number;
    iconSrc: string;
}

const cl = classNameFactory("pc-friendship-ranks-");

const settings = definePluginSettings({
    showFriendsInChat: {
        label: () => t(plugin.friendshipRanks.option.showFriendsInChat.label),
        type: OptionType.BOOLEAN,
        description: () => t(plugin.friendshipRanks.option.showFriendsInChat.description),
        default: false,
    },
});

function daysSince(dateString: string): number {
    const date = new Date(dateString);
    const currentDate = new Date();

    const differenceInMs = currentDate.getTime() - date.getTime();

    const days = differenceInMs / (1000 * 60 * 60 * 24);

    return Math.floor(days);
}

function getRanks(): rankInfo[] {
    return [
        {
            title: t(plugin.friendshipRanks.badge.sprout.name),
            description: t(plugin.friendshipRanks.badge.sprout.description),
            requirement: 0,
            iconSrc: "https://raw.githubusercontent.com/MutanPlex/random-files/refs/heads/main/icons/friendshipRanks/sprout.png"
        },
        {
            title: t(plugin.friendshipRanks.badge.blooming.name),
            description: t(plugin.friendshipRanks.badge.blooming.description),
            requirement: 30,
            iconSrc: "https://raw.githubusercontent.com/MutanPlex/random-files/refs/heads/main/icons/friendshipRanks/blooming.png"
        },
        {
            title: t(plugin.friendshipRanks.badge.burning.name),
            description: t(plugin.friendshipRanks.badge.burning.description),
            requirement: 90,
            iconSrc: "https://raw.githubusercontent.com/MutanPlex/random-files/refs/heads/main/icons/friendshipRanks/burning.png"
        },
        {
            title: t(plugin.friendshipRanks.badge.fighter.name),
            description: t(plugin.friendshipRanks.badge.fighter.description),
            requirement: 182.5,
            iconSrc: "https://raw.githubusercontent.com/MutanPlex/random-files/refs/heads/main/icons/friendshipRanks/fighter.png"
        },
        {
            title: t(plugin.friendshipRanks.badge.star.name),
            description: t(plugin.friendshipRanks.badge.star.description),
            requirement: 365,
            iconSrc: "https://raw.githubusercontent.com/MutanPlex/random-files/refs/heads/main/icons/friendshipRanks/star.png"
        },
        {
            title: t(plugin.friendshipRanks.badge.royal.name),
            description: t(plugin.friendshipRanks.badge.royal.description),
            requirement: 730,
            iconSrc: "https://raw.githubusercontent.com/MutanPlex/random-files/refs/heads/main/icons/friendshipRanks/royal.png"
        },
        {
            title: t(plugin.friendshipRanks.badge.besties.name),
            description: t(plugin.friendshipRanks.badge.besties.description),
            requirement: 1826.25,
            iconSrc: "https://raw.githubusercontent.com/MutanPlex/random-files/refs/heads/main/icons/friendshipRanks/bestie.png"
        }
    ];
}

function openRankModal(rankIndex: number) {
    const rank = getRanks()[rankIndex];
    openModal((props: RenderModalProps) => (
        <ErrorBoundary>
            <Modal
                {...props}
                size="sm"
                title={
                    <Flex className={cl("flex")}>
                        <Heading className={cl("img")} tag="h2">
                            <img src={rank.iconSrc} alt={t(plugin.friendshipRanks.text.rankIcon)} />
                            {rank.title}
                        </Heading>
                    </Flex>
                }
            >
                <div className={cl("text")}>
                    <Paragraph>
                        {rank.description}
                    </Paragraph>
                </div>
            </Modal>
        </ErrorBoundary >
    ));
}

function shouldShowBadge(userId: string, requirement: number, index: number) {
    if (!RelationshipStore.isFriend(userId)) return false;

    const days = daysSince(RelationshipStore.getSince(userId));
    const ranks = getRanks();

    if (ranks[index + 1] == null) return days > requirement;

    return (days > requirement && days < ranks[index + 1].requirement);
}

function getBadgesToApply() {
    const ranks = getRanks();
    return ranks.map((rank, index) => {
        return ({
            id: `friendship_ranks_badge_${index}`,
            description: rank.title,
            iconSrc: rank.iconSrc,
            position: BadgePosition.END,
            onClick: () => openRankModal(index),
            shouldShow: (info: BadgeUserArgs) => shouldShowBadge(info.userId, rank.requirement, index),
            props: {
                style: {
                    borderRadius: "50%",
                    transform: "scale(0.9)"
                }
            }
        });
    });
}

let currentBadges: ProfileBadge[] = [];

function reloadBadges() {
    currentBadges.forEach(b => Badges.removeProfileBadge(b));
    currentBadges = getBadgesToApply();
    currentBadges.forEach(b => Badges.addProfileBadge(b));
}

const FriendDecoration = ErrorBoundary.wrap(({ userId }: { userId: string; }) => {
    const isFriend = useStateFromStores([RelationshipStore], () => RelationshipStore.isFriend(userId), [userId]);
    if (!isFriend) return null;

    return (
        <Tooltip text={t(plugin.friendshipRanks.text.friend)}>
            {tooltipProps => (
                <span {...tooltipProps} className={cl("decoration")}>
                    <svg className={cl("icon")} aria-hidden="true" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M13 10a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" />
                        <path fill="currentColor" d="M3 5v-.75C3 3.56 3.56 3 4.25 3s1.24.56 1.33 1.25C6.12 8.65 9.46 12 13 12h1a8 8 0 0 1 8 8 2 2 0 0 1-2 2 .21.21 0 0 1-.2-.15 7.65 7.65 0 0 0-1.32-2.3c-.15-.2-.42-.06-.39.17l.25 2c.02.15-.1.28-.25.28H9a2 2 0 0 1-2-2v-2.22c0-1.57-.67-3.05-1.53-4.37A15.85 15.85 0 0 1 3 5Z" />
                    </svg>
                </span>
            )}
        </Tooltip>
    );
}, { noop: true });

export default definePlugin({
    name: "FriendshipRanks",
    description: () => t(plugin.friendshipRanks.description),
    tags: ["friends", "appearance", "fun"],
    authors: [Devs.Samwich, PcDevs.lucabeyer],
    settings,
    renderMessageDecoration({ message }) {
        if (!settings.store.showFriendsInChat || !message?.author) return null;
        return <FriendDecoration userId={message.author.id} />;
    },
    start() {
        currentBadges = getBadgesToApply();
        currentBadges.forEach(b => Badges.addProfileBadge(b));
        this.localeUnsubscribe = i18n.addListener(reloadBadges);
    },
    stop() {
        currentBadges.forEach(b => Badges.removeProfileBadge(b));
        this.localeUnsubscribe?.();
    },
});
