/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2024 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { plugin, t } from "@api/i18n";
import { RenderModalProps } from "@plexcord/discord-types";
import { RepoGroup, RepoSortMode } from "@plugins/githubRepos/types";
import { PERSONAL_GROUP_KEY, sortGroups } from "@plugins/githubRepos/utils";
import { Modal, React, useState } from "@webpack/common";

import { cl, settings } from "..";
import { RepoCard } from "./RepoCard";
import { RepoSubTabs } from "./RepoSubTabs";

interface ReposModalProps {
    groups: RepoGroup[];
    initialActiveKey: string;
    username: string;
    rootProps: any;
}

export function ReposModal({ groups, initialActiveKey, username, rootProps }: ReposModalProps & { rootProps: RenderModalProps; }) {
    const [activeKey, setActiveKey] = useState(initialActiveKey);
    const [sortMode, setSortMode] = useState<RepoSortMode>("count");

    const sortedGroups = sortGroups(groups, sortMode);
    const activeGroup = sortedGroups.find(g => g.key === activeKey) ?? sortedGroups[0];

    return (
        <Modal
            {...rootProps}
            className={cl("modal")}
            size="lg"
            title={t(plugin.gitHubRepos.modal.title, { username })}
            actions={[
                {
                    text: t(plugin.gitHubRepos.modal.viewOnGitHub),
                    variant: "link",
                    onClick: () => window.open(`https://github.com/${username}?tab=repositories`, "_blank")
                },
                {
                    text: t(plugin.gitHubRepos.modal.close),
                    variant: "secondary",
                    onClick: rootProps.onClose
                }
            ]}
        >
            <div className={cl("modal-content")}>
                <RepoSubTabs
                    groups={sortedGroups}
                    activeKey={activeGroup?.key ?? PERSONAL_GROUP_KEY}
                    onSelect={setActiveKey}
                    sortMode={sortMode}
                    onToggleSort={() => setSortMode(mode => mode === "count" ? "alpha" : "count")}
                    canSort={sortedGroups.length > 2}
                />
                <div className={cl("list", "modal-list")}>
                    {activeGroup?.repos.map(repo => (
                        <RepoCard
                            key={repo.id}
                            repo={repo}
                            showStars={settings.store.showStars}
                            showLanguage={settings.store.showLanguage}
                        />
                    ))}
                </div>
            </div>
        </Modal>
    );
}
