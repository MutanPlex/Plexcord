/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2024 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { BadgeUserArgs, ProfileBadge } from "@api/Badges";
import { i18n, plugin, t } from "@api/i18n";
import { Badges } from "@api/index";
import ErrorBoundary from "@components/ErrorBoundary";
import { Flex } from "@components/Flex";
import { Heading } from "@components/Heading";
import { Paragraph } from "@components/Paragraph";
import { Devs, PcDevs } from "@utils/constants";
import { Margins } from "@utils/margins";
import { ModalContent, ModalHeader, ModalRoot, ModalSize, openModal } from "@utils/modal";
import definePlugin from "@utils/types";
import { RelationshipStore } from "@webpack/common";

import { bestiesIcon, bloomingIcon, burningIcon, fighterIcon, royalIcon, sproutIcon, starIcon } from "./icons";

interface rankInfo {
    title: string;
    description: string;
    requirement: number;
    assetSVG: any;
}

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
            assetSVG: sproutIcon
        },
        {
            title: t(plugin.friendshipRanks.badge.blooming.name),
            description: t(plugin.friendshipRanks.badge.blooming.description),
            requirement: 30,
            assetSVG: bloomingIcon
        },
        {
            title: t(plugin.friendshipRanks.badge.burning.name),
            description: t(plugin.friendshipRanks.badge.burning.description),
            requirement: 90,
            assetSVG: burningIcon
        },
        {
            title: t(plugin.friendshipRanks.badge.fighter.name),
            description: t(plugin.friendshipRanks.badge.fighter.description),
            requirement: 182.5,
            assetSVG: fighterIcon
        },
        {
            title: t(plugin.friendshipRanks.badge.star.name),
            description: t(plugin.friendshipRanks.badge.star.description),
            requirement: 365,
            assetSVG: starIcon
        },
        {
            title: t(plugin.friendshipRanks.badge.royal.name),
            description: t(plugin.friendshipRanks.badge.royal.description),
            requirement: 730,
            assetSVG: royalIcon
        },
        {
            title: t(plugin.friendshipRanks.badge.besties.name),
            description: t(plugin.friendshipRanks.badge.besties.description),
            requirement: 1826.25,
            assetSVG: bestiesIcon
        }
    ];
}

function openRankModal(rankIndex: number) {
    const rank = getRanks()[rankIndex];
    openModal(props => (
        <ErrorBoundary>
            <ModalRoot {...props} size={ModalSize.DYNAMIC}>
                <ModalHeader>
                    <Flex justifyContent="center" style={{ width: "100%" }}>
                        <Heading style={{ width: "100%", textAlign: "center", margin: 0 }}>
                            {rank.title}
                        </Heading>
                    </Flex>
                </ModalHeader>
                <ModalContent>
                    <div style={{ padding: "1em", textAlign: "center" }}>
                        <rank.assetSVG height="150px"></rank.assetSVG>
                        <Paragraph className={Margins.top16}>
                            {rank.description}
                        </Paragraph>
                    </div>
                </ModalContent>
            </ModalRoot>
        </ErrorBoundary >
    ));
}

function getBadgeComponent(rankIndex: number) {
    const rank = getRanks()[rankIndex];
    // there may be a better button component to do this with
    return (
        <div style={{ transform: "scale(0.80)", marginTop: "3px" }}>
            <div onClick={() => openRankModal(rankIndex)} style={{ width: "22px", height: "27px" }}>
                <rank.assetSVG />
            </div>
        </div>
    );
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
        return (
            {
                description: rank.title,
                component: () => getBadgeComponent(index),
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
