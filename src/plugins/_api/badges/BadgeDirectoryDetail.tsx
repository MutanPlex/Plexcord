/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2026 Vendicated and contributors
 * Copyright (c) 2026 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import "./badgeDirectory.css";

import { DirectoryBadge } from "@api/Badges";
import { plugins as pluginsI18n, t } from "@api/i18n";
import { useSettings } from "@api/Settings";
import { Flex } from "@components/Flex";
import { Link } from "@components/Link";
import { Paragraph } from "@components/Paragraph";
import { DonateButton, InviteButton } from "@components/settings/DonateButton";
import { SpecialCard } from "@components/settings/SpecialCard";
import { PluginCard } from "@components/settings/tabs/plugins/PluginCard";
import { DevsById, PcDevsById } from "@utils/constants";
import { fetchUserProfile } from "@utils/discord";
import { pluralise } from "@utils/misc";
import { showToast, useEffect, useMemo, UserProfileStore, UserStore, useStateFromStores } from "@webpack/common";

import Plugins, { PluginMeta } from "~plugins";

const DONOR_BACKGROUND_IMAGE = "https://media.discordapp.net/stickers/1311070116305436712.png?size=2048";
const DONOR_IMAGE = "https://cdn.discordapp.com/emojis/1026533090627174460.png";
const getName = (name: string | (() => string)) => typeof name === "function" ? name() : name;
const CONTRIBUTOR_BADGE_IDS = ["vencord_contributor", "plexcord_contributor", "user_plugin_contributor"];

interface BadgeDirectoryDetailProps {
    badge?: DirectoryBadge;
    userId?: string;
    isViewingOtherUser?: boolean;
}

interface BadgeDirectoryDetailContentProps extends BadgeDirectoryDetailProps {
    isContributor: boolean;
}

function BadgeDirectoryDetailContent({ badge, userId, isViewingOtherUser, isContributor }: BadgeDirectoryDetailContentProps) {
    useSettings();

    const currentUser = useStateFromStores([UserStore], () => UserStore.getCurrentUser());
    const targetUserId = userId ?? badge?.userId ?? (isViewingOtherUser ? undefined : currentUser?.id);
    const isSelf = currentUser?.id === targetUserId || !isViewingOtherUser;

    const user = useStateFromStores([UserStore], () => targetUserId ? UserStore.getUser(targetUserId) : null);
    const profile = useStateFromStores([UserProfileStore], () => targetUserId ? UserProfileStore.getUserProfile(targetUserId) : null);

    useEffect(() => {
        if (!profile && targetUserId && !user?.bot) {
            fetchUserProfile(targetUserId);
        }
    }, [targetUserId, user?.bot, profile]);

    const plugins = useMemo(() => {
        if (!isContributor || !targetUserId) return [];
        const allPlugins = Object.values(Plugins);
        const authorDev = DevsById[targetUserId] || PcDevsById[targetUserId];
        const pluginsByAuthor = authorDev
            ? allPlugins.filter(p => p.authors.includes(authorDev))
            : allPlugins.filter(p =>
                PluginMeta[getName(p.name)]?.userPlugin && p.authors.some(a => a.id.toString() === targetUserId)
                || p.authors.some(a => a.name === user?.username)
            );

        return pluginsByAuthor
            .filter(p => !getName(p.name).endsWith("API"))
            .sort((a, b) => Number(a.required ?? false) - Number(b.required ?? false));
    }, [isContributor, targetUserId, user?.username]);

    const i18n = pluginsI18n.metadata.badges.directory;

    if (isContributor) {
        const link = <Link href="https://github.com/MutanPlex/Plexcord">{t(i18n.contributed)}</Link>;
        const count = pluralise(plugins.length, t(i18n.plugin), t(i18n.plugins));

        return (
            <div className="pc-badge-directory-section">
                <Paragraph>
                    {plugins.length
                        ? t(isSelf ? i18n.selfContributed : i18n.otherContributed, { link, count })
                        : t(isSelf ? i18n.selfNoPlugins : i18n.otherNoPlugins, { link })}
                </Paragraph>
                {!!plugins.length && (
                    <div className="pc-badge-directory-plugins">
                        {plugins.map(p => (
                            <PluginCard
                                key={getName(p.name)}
                                plugin={p}
                                disabled={p.required ?? false}
                                onRestartNeeded={() => showToast({ text: t(i18n.restart) })}
                            />
                        ))}
                    </div>
                )}
            </div>
        );
    }

    return (
        <div className="pc-badge-directory-section pc-badge-directory-plexcord-donor pc-badge-directory-dark">
            <SpecialCard
                className="pc-special-card-dark"
                subtitle={t(isSelf ? i18n.selfDonor : i18n.otherDonor)}
                description={t(isSelf ? i18n.selfDonorDescription : i18n.otherDonorDescription)}
                cardImage={DONOR_IMAGE}
                backgroundImage={DONOR_BACKGROUND_IMAGE}
                backgroundColor="#232428"
            >
                <Flex gap="0.5em" style={{ marginTop: "0.75em" }}>
                    <DonateButton variant="overlayPrimary" />
                    <InviteButton variant="secondary" />
                </Flex>
            </SpecialCard>
        </div>
    );
}

export function BadgeDirectoryDetail({ badge, userId, isViewingOtherUser }: BadgeDirectoryDetailProps) {
    const badgeId = String(badge?.badge_id ?? "");
    const originalBadgeId = badge?.originalBadgeId ?? "";

    const isContributor = CONTRIBUTOR_BADGE_IDS.includes(originalBadgeId);
    const isDonor = originalBadgeId.startsWith("plexcord_donor_badge_");

    if (!isContributor && !isDonor) return null;

    return (
        <BadgeDirectoryDetailContent
            key={badgeId}
            badge={badge}
            userId={userId}
            isViewingOtherUser={isViewingOtherUser}
            isContributor={isContributor}
        />
    );
}
