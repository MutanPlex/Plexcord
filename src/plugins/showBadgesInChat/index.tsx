/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2024 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import "./styles.css";

import { plugin, t } from "@api/i18n";
import { addMessageDecoration, removeMessageDecoration } from "@api/MessageDecorations";
import ErrorBoundary from "@components/ErrorBoundary";
import { openContributorModal } from "@components/settings/tabs";
import { User } from "@plexcord/discord-types";
import badges, { openDonorModal } from "@plugins/_api/badges";
import { Devs, PcDevs } from "@utils/constants";
import { isPcPluginDev } from "@utils/misc";
import { closeModal, openModal } from "@utils/modal";
import definePlugin from "@utils/types";
import { findByPropsLazy, findComponentByCodeLazy } from "@webpack";
import { JSX } from "react";

import settings from "./settings";

const roleIconClassName = findByPropsLazy("roleIcon", "separator").roleIcon;
const RoleIconComponent = findComponentByCodeLazy("#{intl::ROLE_ICON_ALT_TEXT}");

function openDonorsModal() {
    const modalKey = openModal(props => (
        <ErrorBoundary noop onError={() => {
            closeModal(modalKey);
            PlexcordNative.native.openExternal("https://github.com/sponsors/MutanPlex");
        }}>
            {openDonorModal(props)}
        </ErrorBoundary>
    ));
}

function getDiscordBadges(): readonly [number, string, string][] {
    return [
        [0, t(plugin.showBadgesInChat.badge.staff), "5e74e9b61934fc1f67c65515d1f7e60d"],
        [1, t(plugin.showBadgesInChat.badge.partner), "3f9748e53446a137a052f3454e2de41e"],
        [2, t(plugin.showBadgesInChat.badge.events), "bf01d1073931f921909045f3a39fd264"],
        [6, t(plugin.showBadgesInChat.badge.bravery), "8a88d63823d8a71cd5e390baa45efa02"],
        [7, t(plugin.showBadgesInChat.badge.brilliance), "011940fd013da3f7fb926e4a1cd2e618"],
        [8, t(plugin.showBadgesInChat.badge.balance), "3aa41de486fa12454c3761e8e223442e"],
        [3, t(plugin.showBadgesInChat.badge.bugHunter), "2717692c7dca7289b35297368a940dd0"],
        [14, t(plugin.showBadgesInChat.badge.bugHunter), "848f79194d4be5ff5f81505cbd0ce1e6"],
        [22, t(plugin.showBadgesInChat.badge.activeDeveloper), "6bdc42827a38498929a4920da12695d9"],
        [17, t(plugin.showBadgesInChat.badge.earlyVerifiedBotDeveloper), "6df5892e0f35b051f8b61eace34f4967"],
        [9, t(plugin.showBadgesInChat.badge.earlySupporter), "7060786766c9c840eb3019e725d2b358"],
        [18, t(plugin.showBadgesInChat.badge.moderatorProgram), "fee1624003e2fee35cb398e125dc479b"]
    ];
}

function CheckBadge({ badge, author }: { badge: string; author: User; }): JSX.Element | null {

    switch (badge) {
        case "PlexcordDonor":
            const plexcordDonorBadges = badges.getDonorBadges(author.id)?.slice(0, 12);
            if (!plexcordDonorBadges || plexcordDonorBadges.length === 0) return null;

            return (
                <span style={{ order: settings.store.plexcordDonorPosition, display: "flex", gap: "4px" }}>
                    {plexcordDonorBadges.map((badge: any, index: number) => (
                        <RoleIconComponent
                            key={`${author.id}-${index}`}
                            className={roleIconClassName}
                            name={badge.description}
                            size={20}
                            src={badge.iconSrc}
                            onClick={openDonorsModal}
                            style={{ cursor: "pointer" }}
                        />
                    ))}
                </span>
            );
        case "PlexcordContributor":
            const isContributor = isPcPluginDev(author.id);
            return isContributor ? (
                <span style={{ order: settings.store.plexcordContributorPosition }}>
                    <RoleIconComponent
                        className={roleIconClassName}
                        name={t(plugin.showBadgesInChat.modal.plexcordContributor)}
                        size={20}
                        src={"https://plexcord.club/favicon.png"}
                        onClick={() => openContributorModal(author)}
                        style={{ cursor: "pointer" }}
                    />
                </span>
            ) : null;
        case "DiscordProfile":
            const discordBadges = getDiscordBadges();
            const chatBadges = discordBadges
                .filter(badge => (author.flags || author.publicFlags) & (1 << badge[0]))
                .map(badge => (

                    <RoleIconComponent
                        key={author.id}
                        className={roleIconClassName}
                        name={badge[1]}
                        size={20}
                        src={`https://cdn.discordapp.com/badge-icons/${badge[2]}.png`}
                    />
                ));
            return chatBadges.length > 0 ? (
                <span style={{ order: settings.store.discordProfilePosition }}>
                    {chatBadges}
                </span>
            ) : null;
        case "DiscordNitro":
            return (author?.premiumType ?? 0) > 0 ? (
                <span style={{ order: settings.store.discordNitroPosition }}>
                    <RoleIconComponent
                        className={roleIconClassName}
                        name={
                            t(plugin.showBadgesInChat.modal.discordNitro) +
                            (author.premiumType === 3 ? " " + t(plugin.showBadgesInChat.modal.basic) : author.premiumType === 1 ? " " + t(plugin.showBadgesInChat.modal.classic) : "")
                        }
                        size={20}
                        src={"https://cdn.discordapp.com/badge-icons/2ba85e8026a8614b640c2837bcdfe21b.png"}
                    />
                </span>
            ) : null;
        default:
            return null;
    }
}

function ChatBadges({ author }: { author: User; }) {
    return (
        <span className="pc-sbic-badge-row">
            {settings.store.showPlexcordDonor && <CheckBadge badge={"PlexcordDonor"} author={author} />}
            {settings.store.showPlexcordContributor && <CheckBadge badge={"PlexcordContributor"} author={author} />}
            {settings.store.showDiscordProfile && <CheckBadge badge={"DiscordProfile"} author={author} />}
            {settings.store.showDiscordNitro && <CheckBadge badge={"DiscordNitro"} author={author} />}
        </span>
    );
}

export default definePlugin({
    name: "ShowBadgesInChat",
    authors: [Devs.Inbestigator, PcDevs.KrystalSkull, PcDevs.MutanPlex],
    description: () => t(plugin.showBadgesInChat.description),
    dependencies: ["MessageDecorationsAPI"],
    settings,

    start: () => {
        addMessageDecoration("pc-show-badges-in-chat", props => props.message?.author ? <ChatBadges author={props.message.author} /> : null);
    },
    stop: () => {
        removeMessageDecoration("pc-show-badges-in-chat");
    }
});
