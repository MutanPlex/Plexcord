/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2024 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { Flex } from "@components/Flex";
import { React } from "@webpack/common";

import { getLanguageColor } from "../colors";
import { RepoCardProps } from "../types";
import { Star } from "./Star";

export function RepoCard({ repo, theme, showStars, showLanguage }: RepoCardProps) {
    const handleClick = () => window.open(repo.html_url, "_blank");

    const renderStars = () => {
        if (!showStars) return null;

        return (
            <div className="pc-github-repo-stars">
                <Star className="pc-github-repo-star-icon" />
                {repo.stargazers_count.toLocaleString()}
            </div>
        );
    };

    const renderLanguage = () => {
        if (!showLanguage || !repo.language) return null;

        return (
            <div className="pc-github-repo-language">
                <span
                    className="pc-github-repo-language-color"
                    style={{ backgroundColor: getLanguageColor(repo.language) }}
                />
                {repo.language}
            </div>
        );
    };

    return (
        <div className="pc-github-repo-card" onClick={handleClick}>
            <Flex className="pc-github-repo-header">
                <div className="pc-github-repo-name">{repo.name}</div>
                {renderStars()}
            </Flex>

            {repo.description && (
                <div className="pc-github-repo-description">
                    {repo.description}
                </div>
            )}

            {renderLanguage()}
        </div>
    );
}
