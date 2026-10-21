/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2023 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import "./ContributorModal.css";

import { plugins, t } from "@api/i18n";
import { useSettings } from "@api/Settings";
import { Heading } from "@components/Heading";
import { Link } from "@components/Link";
import { Paragraph } from "@components/Paragraph";
import { RenderModalProps, User } from "@plexcord/discord-types";
import { DevsById, PcDevsById } from "@utils/constants";
import { classNameFactory } from "@utils/css";
import { fetchUserProfile } from "@utils/discord";
import { Modal, openModal, showToast, useEffect, useMemo, UserProfileStore, useStateFromStores } from "@webpack/common";

import Plugins, { PluginMeta } from "~plugins";

function getName(name: string | (() => string)): string {
    return typeof name === "function" ? name() : name;
}

import { PluginCard } from "./PluginCard";
import { GithubButton, WebsiteButton } from "./PluginModalButtons";

const cl = classNameFactory("pc-author-modal-");

export function openContributorModal(user: User) {
    openModal(modalProps => <ContributorModal user={user} modalProps={modalProps} />);
}

function ContributorModal({ user, modalProps }: { user: User; modalProps: RenderModalProps; }) {
    useSettings();

    const profile = useStateFromStores([UserProfileStore], () => UserProfileStore.getUserProfile(user.id));

    useEffect(() => {
        if (!profile && !user.bot && user.id)
            fetchUserProfile(user.id);
    }, [user.id, user.bot, profile]);

    const githubName = profile?.connectedAccounts?.find(a => a.type === "github")?.name;
    const website = profile?.connectedAccounts?.find(a => a.type === "domain")?.name;

    const pluginList = useMemo(() => {
        const allPlugins = Object.values(Plugins);
        const pluginsByAuthor = DevsById[user.id] || PcDevsById[user.id]
            ? allPlugins.filter(p => p.authors.includes(DevsById[user.id] || PcDevsById[user.id]))
            : allPlugins.filter(p =>
                PluginMeta[getName(p.name)]?.userPlugin && p.authors.some(a => a.id.toString() === user.id)
                || p.authors.some(a => a.name === user.username)
            );

        return pluginsByAuthor
            .filter(p => !getName(p.name).endsWith("API"))
            .sort((a, b) => Number(a.required ?? false) - Number(b.required ?? false));
    }, [user.id, user.username]);

    const hasLinks = website || githubName;

    return (
        <Modal
            {...modalProps}
            title={
                <div className={cl("header")}>
                    <img
                        className={cl("avatar")}
                        src={user.getAvatarURL(void 0, 512, true)}
                        alt=""
                    />
                    <Heading tag="h2" className={cl("name")}>{user.username}</Heading>
                </div>
            }
            subtitle={
                pluginList.length
                    ? (
                        <Paragraph>
                            {t(plugins.contributor.modal.contributionsInfo, {
                                userName: user.username,
                                contributionCount: pluginList.length,
                                continuedLink: <Link href="https://plexcord.club/source">{t(plugins.contributor.contributed)}</Link>,
                                s: pluginList.length === 1 ? "" : "s"
                            })}
                        </Paragraph>
                    )
                    : (
                        <Paragraph>
                            {t(plugins.contributor.modal.noContributions, {
                                userName: user.username,
                                contributedLink: <Link href="https://plexcord.club/source">{t(plugins.contributor.contributed)}</Link>
                            })}
                        </Paragraph>
                    )
            }
            actionBarInput={
                hasLinks && (
                    <div
                        className={cl("links")}
                        style={{ width: "100%", justifyContent: "flex-end" }}
                    >
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
                )
            }
        >
            <div className={cl("root")}>
                {!!pluginList.length && (
                    <div className={cl("plugins")}>
                        {pluginList.map(p =>
                            <PluginCard
                                key={getName(p.name)}
                                plugin={p}
                                disabled={p.required ?? false}
                                onRestartNeeded={() => showToast({ text: t(plugins.restart.apply) })}
                            />
                        )}
                    </div>
                )}
            </div>
        </Modal>
    );
}
