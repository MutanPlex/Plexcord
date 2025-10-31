/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2024 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { t } from "@api/i18n";
import { Button } from "@components/Button";
import { HeadingPrimary } from "@components/Heading";
import { getLanguageColor } from "@plugins/githubRepos/colors";
import { GitHubRepo } from "@plugins/githubRepos/types";
import { ModalContent, ModalFooter, ModalHeader, ModalRoot } from "@utils/modal";
import { React } from "@webpack/common";

import { cl } from "./GitHubReposComponent";
import { Star } from "./Star";

interface ReposModalProps {
    repos: GitHubRepo[];
    username: string;
    rootProps: any;
}

export function ReposModal({ repos, username, rootProps }: ReposModalProps) {
    const renderTableHeader = () => (
        <thead>
            <tr>
                <th>{t("plugin.githubRepos.modal.repository")}</th>
                <th>{t("plugin.githubRepos.modal.description")}</th>
                <th>{t("plugin.githubRepos.modal.language")}</th>
                <th>{t("plugin.githubRepos.modal.stars")}</th>
            </tr>
        </thead>
    );

    const renderTableRow = (repo: GitHubRepo) => (
        <tr key={repo.id} onClick={() => window.open(repo.html_url, "_blank")}>
            <td>
                <div className={cl("table-name")}>{repo.name}</div>
            </td>
            <td>
                <div className={cl("table-description")}>
                    {repo.description || ""}
                </div>
            </td>
            <td>
                {repo.language && (
                    <div className={cl("table-language")}>
                        <span
                            className={cl("table-language-color")}
                            style={{ backgroundColor: getLanguageColor(repo.language) }}
                        />
                        <span>{repo.language}</span>
                    </div>
                )}
            </td>
            <td>
                <div className={cl("table-stars")}>
                    <Star className={cl("table-star-icon")} />
                    <span>{repo.stargazers_count.toLocaleString()}</span>
                </div>
            </td>
        </tr>
    );

    return (
        <ModalRoot className={cl("modal")} size="large" {...rootProps}>
            <ModalHeader>
                <HeadingPrimary className={cl("modal-title")}>
                    {t("plugin.githubRepos.modal.title", { user: username })}
                </HeadingPrimary>
            </ModalHeader>
            <ModalContent className={cl("modal-content")}>
                <div className={cl("table-container")}>
                    <table className={cl("table")}>
                        <colgroup>
                            <col style={{ width: "20%" }} />
                            <col style={{ width: "45%" }} />
                            <col style={{ width: "15%" }} />
                            <col style={{ width: "10%" }} />
                        </colgroup>
                        {renderTableHeader()}
                        <tbody>
                            {repos.map(renderTableRow)}
                        </tbody>
                    </table>
                </div>
            </ModalContent>
            <ModalFooter>
                <Button
                    className={cl("modal-footer-github")}
                    variant="primary"
                    onClick={() => window.open(`https://github.com/${username}?tab=repositories`, "_blank")}
                >
                    {t("plugin.githubRepos.modal.viewOnGitHub")}
                </Button>
                <Button
                    className={cl("modal-footer-close")}
                    variant="secondary"
                    onClick={rootProps.onClose}
                >
                    {t("plugin.githubRepos.modal.close")}
                </Button>
            </ModalFooter>
        </ModalRoot>
    );
}
