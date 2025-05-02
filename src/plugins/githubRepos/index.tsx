/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2024 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import "./styles.css";

import { definePluginSettings } from "@api/Settings";
import ErrorBoundary from "@components/ErrorBoundary";
import { PcDevs } from "@utils/constants";
import { Logger } from "@utils/Logger";
import definePlugin, { OptionType } from "@utils/types";
import { findByCodeLazy } from "@webpack";
import { React, Text } from "@webpack/common";
import { User } from "discord-types/general";

import { GitHubReposComponent } from "./components/GitHubReposComponent";

export const settings = definePluginSettings({
    showStars: {
        type: OptionType.BOOLEAN,
        description: "Show repository stars",
        default: true
    },
    showLanguage: {
        type: OptionType.BOOLEAN,
        description: "Show repository language",
        default: true
    },
    showInMiniProfile: {
        type: OptionType.BOOLEAN,
        description: "Only show a button in the mini profile",
        default: true
    },
});


const getProfileThemeProps = findByCodeLazy(".getPreviewThemeColors", "primaryColor:");

const logger = new Logger("GitHubRepos");
logger.info("Plugin loaded");

const ProfilePopoutComponent = ErrorBoundary.wrap(
    (props: { user: User; displayProfile?: any; }) => {
        return (
            <GitHubReposComponent
                {...props}
                id={props.user.id}
                theme={getProfileThemeProps(props).theme}
            />
        );
    },
    {
        noop: true,
        onError: err => {
            logger.error("Error in profile popout component", err);
            return <Text variant="text-xs/semibold" className="pc-github-repos-error" style={{ color: "var(--text-danger)" }}>
                Error, Failed to render GithubRepos</Text>;
        }
    }
);

export default definePlugin({
    name: "GitHubRepos",
    description: "Displays a user's public GitHub repositories in their profile",
    authors: [PcDevs.talhakf, PcDevs.Panniku, PcDevs.MutanPlex],
    settings,

    patches: [
        {
            find: ".hasAvatarForGuild(null==",
            replacement: {
                match: /(?<=user:(\i),bio:null==(\i)\?.+?currentUser:\i,guild:\i}\))/,
                replace: ",$self.ProfilePopoutComponent({ user: $1, displayProfile: $2 })"
            }
        },
        {
            find: "#{intl::CONNECTIONS}),scrollIntoView",
            replacement: {
                match: /(?<=user:(\i).{0,15}displayProfile:(\i).*?CONNECTIONS.{0,100}\}\)\}\))/,
                replace: ",$self.ProfilePopoutComponent({ user: $1, displayProfile: $2 })"
            }
        }
    ],
    ProfilePopoutComponent
});
