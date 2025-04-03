/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2024 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { ModalContent, ModalFooter, ModalHeader, ModalRoot } from "@utils/modal";
import { Button, Forms, React } from "@webpack/common";

import { getLanguageColor } from "../colors";
import { GitHubRepo } from "../types";
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
                <th>Repository</th>
                <th>Description</th>
                <th>Language</th>
                <th>Stars</th>
            </tr>
        </thead>
    );

    const renderTableRow = (repo: GitHubRepo) => (
        <tr key={repo.id} onClick={() => window.open(repo.html_url, "_blank")}>
            <td>
                <div className="pc-github-repos-table-name">{repo.name}</div>
            </td>
            <td>
                <div className="pc-github-repos-table-description">
                    {repo.description || ""}
                </div>
            </td>
            <td>
                {repo.language && (
                    <div className="pc-github-repos-table-language">
                        <span
                            className="pc-github-repos-table-language-color"
                            style={{ backgroundColor: getLanguageColor(repo.language) }}
                        />
                        <span>{repo.language}</span>
                    </div>
                )}
            </td>
            <td>
                <div className="pc-github-repos-table-stars">
                    <Star className="pc-github-repos-table-star-icon" />
                    <span>{repo.stargazers_count.toLocaleString()}</span>
                </div>
            </td>
        </tr>
    );

    return (
        <ModalRoot className="pc-github-repos-modal" size="large" {...rootProps}>
            <ModalHeader>
                <Forms.FormTitle tag="h2" className="pc-github-repos-modal-title">
                    {username}'s GitHub Repositories
                </Forms.FormTitle>
            </ModalHeader>
            <ModalContent className="pc-github-repos-modal-content">
                <div className="pc-github-repos-table-container">
                    <table className="pc-github-repos-table">
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
                    onClick={() => window.open(`https://github.com/${username}?tab=repositories`, "_blank")}
                >
                    View on GitHub
                </Button>
                <Button
                    color={Button.Colors.TRANSPARENT}
                    look={Button.Looks.LINK}
                    onClick={rootProps.onClose}
                >
                    Close
                </Button>
            </ModalFooter>
        </ModalRoot>
    );
}
