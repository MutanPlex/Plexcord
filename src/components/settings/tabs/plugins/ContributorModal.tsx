/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2023 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import "./ContributorModal.css";

import { t, tJsx } from "@api/i18n";
import { useSettings } from "@api/Settings";
import { classNameFactory } from "@api/Styles";
import ErrorBoundary from "@components/ErrorBoundary";
import { HeadingPrimary } from "@components/Heading";
import { Link } from "@components/Link";
import { Paragraph } from "@components/Paragraph";
import { GithubButton, WebsiteButton } from "@components/settings/tabs/plugins/LinkIconButton";
import { User } from "@plexcord/discord-types";
import { DevsById, PcDevsById } from "@utils/constants";
import { fetchUserProfile } from "@utils/discord";
import { classes } from "@utils/misc";
import { ModalContent, ModalRoot, openModal } from "@utils/modal";
import { showToast, useEffect, useMemo, UserProfileStore, useStateFromStores } from "@webpack/common";

import Plugins from "~plugins";

import { PluginCard } from "./PluginCard";

const cl = classNameFactory("pc-author-modal-");

export function openContributorModal(user: User) {
    openModal(modalProps =>
        <ModalRoot {...modalProps}>
            <ErrorBoundary>
                <ModalContent className={cl("root")}>
                    <ContributorModal user={user} />
                </ModalContent>
            </ErrorBoundary>
        </ModalRoot>
    );
}

function ContributorModal({ user }: { user: User; }) {
    useSettings();

    const profile = useStateFromStores([UserProfileStore], () => UserProfileStore.getUserProfile(user.id));

    useEffect(() => {
        if (!profile && !user.bot && user.id)
            fetchUserProfile(user.id);
    }, [user.id, user.bot, profile]);

    const githubName = profile?.connectedAccounts?.find(a => a.type === "github")?.name;
    const website = profile?.connectedAccounts?.find(a => a.type === "domain")?.name;

    const plugins = useMemo(() => {
        const allPlugins = Object.values(Plugins);
        const pluginsByAuthor = DevsById[user.id] || PcDevsById[user.id]
            ? allPlugins.filter(p => p.authors.includes(DevsById[user.id] || PcDevsById[user.id]))
            : allPlugins.filter(p => p.authors.some(a => a.name === user.username));

        return pluginsByAuthor
            .filter(p => !p.name.endsWith("API"))
            .sort((a, b) => Number(a.required ?? false) - Number(b.required ?? false));
    }, [user.id, user.username]);

    const ContributedHyperLink = <Link href="https://plexcord.club/source">{t("plugins.contributor.contributed")}</Link>;

    return (
        <>
            <div className={cl("header")}>
                <img
                    className={cl("avatar")}
                    src={user.getAvatarURL(void 0, 512, true)}
                    alt=""
                />
                <HeadingPrimary className={cl("name")}>{user.username}</HeadingPrimary>

                <div className={classes("pc-settings-modal-links", cl("links"))}>
                    {website && (
                        <WebsiteButton
                            text={website}
                            href={`https://${website}`}
                        />
                    )}
                    {githubName && (
                        <GithubButton
                            text={githubName}
                            href={`https://github.com/${githubName}`}
                        />
                    )}
                </div>
            </div>

            {plugins.length ? (
                <Paragraph>
                    {tJsx("plugins.contributor.modal.contributionsInfo", {
                        userName: user.username,
                        contributionCount: plugins.length,
                        continuedLink: ContributedHyperLink,
                        s: plugins.length === 1 ? "" : "s"
                    })}
                </Paragraph>
            ) : (
                <Paragraph>
                    {tJsx("plugins.contributor.modal.noContributions", {
                        userName: user.username,
                        contributedLink: ContributedHyperLink
                    })}
                </Paragraph>
            )}

            {!!plugins.length && (
                <div className={cl("plugins")}>
                    {plugins.map(p =>
                        <PluginCard
                            key={p.name}
                            plugin={p}
                            disabled={p.required ?? false}
                            onRestartNeeded={() => showToast(t("plugins.restart.apply"))}
                        />
                    )}
                </div>
            )}
        </>
    );
}
