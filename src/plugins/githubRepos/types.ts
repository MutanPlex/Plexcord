/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2024 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

export interface GitHubRepo {
    id: number;
    name: string;
    html_url: string;
    description: string;
    stargazers_count: number;
    language: string;
    fork: boolean;
}

export interface IconProps {
    className?: string;
    width?: number;
    height?: number;
}

export interface RepoCardProps {
    repo: GitHubRepo;
    theme: string;
    showStars: boolean;
    showLanguage: boolean;
}
