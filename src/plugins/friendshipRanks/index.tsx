/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2024 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import "./styles.css";

import { BadgeUserArgs, ProfileBadge } from "@api/Badges";
import { i18n, plugin, t } from "@api/i18n";
import { Badges } from "@api/index";
import ErrorBoundary from "@components/ErrorBoundary";
import { Flex } from "@components/Flex";
import { Heading } from "@components/Heading";
import { Paragraph } from "@components/Paragraph";
import { Devs, PcDevs } from "@utils/constants";
import { classNameFactory } from "@utils/css";
import { ModalContent, ModalHeader, ModalRoot, ModalSize, openModal } from "@utils/modal";
import definePlugin from "@utils/types";
import { RelationshipStore } from "@webpack/common";

interface rankInfo {
    title: string;
    description: string;
    requirement: number;
    iconSrc: string;
}

const cl = classNameFactory("pc-friendship-ranks-");

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
    openModal(props => (
        <ErrorBoundary>
            <ModalRoot {...props} size={ModalSize.DYNAMIC}>
                <ModalHeader>
                    <Flex className={cl("flex")}>
                        <Heading className={cl("img")} tag="h2">
                            <img src={rank.iconSrc} alt="rank icon" />
                            {rank.title}
                        </Heading>
                    </Flex>
                </ModalHeader>
                <ModalContent>
                    <div className={cl("text")}>
                        <Paragraph>
                            {rank.description}
                        </Paragraph>
                    </div>
                </ModalContent>
            </ModalRoot>
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
    const badgesToApply: ProfileBadge[] = ranks.map((rank, index) => {
        return ({
            description: rank.title,
            iconSrc: rank.iconSrc,
            onClick: () => openRankModal(index),
            shouldShow: (info: BadgeUserArgs) => shouldShowBadge(info.userId, rank.requirement, index),
        });
    });

    return badgesToApply;
}

let currentBadges: ProfileBadge[] = [];

function reloadBadges() {
    currentBadges.forEach(b => Badges.removeProfileBadge(b));
    currentBadges = getBadgesToApply();
    currentBadges.forEach(b => Badges.addProfileBadge(b));
}

export default definePlugin({
    name: "FriendshipRanks",
    description: () => t(plugin.friendshipRanks.description),
    authors: [Devs.Samwich, PcDevs.MutanPlex],
    localeUnsubscribe: null as (() => void) | null,

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
