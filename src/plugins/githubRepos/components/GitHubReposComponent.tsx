/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2024 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { t } from "@api/i18n";
import { classNameFactory } from "@api/Styles";
import { BaseText } from "@components/BaseText";
import { Button, TextButton } from "@components/Button";
import { fetchReposByUserId, fetchReposByUsername, fetchUserInfo, GitHubUserInfo } from "@plugins/githubRepos/githubApi";
import { GitHubRepo } from "@plugins/githubRepos/types";
import { openModal } from "@utils/modal";
import { React, useEffect, UserProfileStore, useState } from "@webpack/common";

import { settings } from "..";
import { RepoCard } from "./RepoCard";
import { ReposModal } from "./ReposModal";

export const cl = classNameFactory("pc-github-repos-");

export function GitHubReposComponent({ id, theme }: { id: string, theme: string; }) {
    const [repos, setRepos] = useState<GitHubRepo[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [userInfo, setUserInfo] = useState<GitHubUserInfo | null>(null);
    const [returnJustButton, setReturnJustButton] = useState(false);


    const openReposModal = () => {
        if (!userInfo) return;

        const sortedRepos = [...repos].sort((a, b) => b.stargazers_count - a.stargazers_count);
        openModal(props => (
            <ReposModal
                repos={sortedRepos}
                username={userInfo.username}
                rootProps={props}
            />
        ));
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const profile = UserProfileStore.getUserProfile(id);
                if (!profile) {
                    setLoading(false);
                    return;
                }

                const connections = profile.connectedAccounts;
                if (!connections?.length) {
                    setLoading(false);
                    return;
                }

                const githubConnection = connections.find(conn => conn.type === "github");
                if (!githubConnection) {
                    setLoading(false);
                    return;
                }

                const username = githubConnection.name;
                const userInfoData = await fetchUserInfo(username);
                if (userInfoData) {
                    setUserInfo(userInfoData);
                }

                const githubId = githubConnection.id;

                if (!settings.store.showInMiniProfile) setReturnJustButton(true);

                // Try to fetch by ID first, fall back to username
                const reposById = await fetchReposByUserId(githubId);
                if (reposById) {
                    setRepos(reposById);
                    setLoading(false);
                    return;
                }

                const reposByUsername = await fetchReposByUsername(username);
                setRepos(reposByUsername);
                setLoading(false);
            } catch (error) {
                const errorMessage = error instanceof Error ? error.message : "Failed to fetch repositories";
                setError(errorMessage);
                setLoading(false);
            }
        };

        fetchData();
    }, [id]);

    if (loading) return <BaseText size="xs" weight="semibold" className={cl("loading")} style={{ color: "var(--header-secondary)" }}>
        {t("plugin.githubRepos.loading")}</BaseText>;

    if (error) return <BaseText size="xs" weight="semibold" className={cl("error")} style={{ color: "var(--text-danger)" }}>
        {t("plugin.githubRepos.error.error")}: {error}</BaseText>;

    if (!repos.length) return null;

    if (returnJustButton) {
        return (
            <Button
                className={cl("button")}
                size="small"
                variant="secondary"
                onClick={openReposModal}
            >
                {t("plugin.githubRepos.button.show")}
            </Button>
        );
    }

    const topRepos = repos.slice(0, 4);

    return (
        <div className={cl("container")}>
            <BaseText size="xs" weight="semibold" className={cl("header")} style={{ color: "var(--header-secondary)" }}>
                {t("plugin.githubRepos.button.repositories")}
                {userInfo && (
                    <span className={cl("count")} style={{ color: "var(--text-muted)" }}>
                        {` ${t("plugin.githubRepos.button.only", { length: topRepos.length, total: userInfo.totalRepos })}`}
                    </span>
                )}
            </BaseText>
            <div className={cl("list")}>
                {topRepos.map(repo => (
                    <RepoCard
                        key={repo.id}
                        repo={repo}
                        showStars={settings.store.showStars}
                        showLanguage={settings.store.showLanguage}
                    />))
                }
            </div>
            <div className={cl("footer")}>
                <TextButton
                    className={cl("show-more")}
                    color="secondary"
                    onClick={openReposModal}
                >
                    {t("plugin.githubRepos.button.more")}
                </TextButton>
            </div>
        </div>
    );
}
