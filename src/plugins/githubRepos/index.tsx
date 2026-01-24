/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2024 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import "./styles.css";

import { plugin, t } from "@api/i18n";
import { definePluginSettings } from "@api/Settings";
import { BaseText } from "@components/BaseText";
import ErrorBoundary from "@components/ErrorBoundary";
import { User } from "@plexcord/discord-types";
import { PcDevs } from "@utils/constants";
import { classNameFactory } from "@utils/css";
import definePlugin, { OptionType } from "@utils/types";
import { findByCodeLazy } from "@webpack";
import { React } from "@webpack/common";

import { GitHubReposComponent } from "./components/GitHubReposComponent";
export const cl = classNameFactory("pc-github-repos-");

export const settings = definePluginSettings({
    showStars: {
        label: () => t(plugin.gitHubRepos.option.showStars.label),
        description: () => t(plugin.gitHubRepos.option.showStars.description),
        type: OptionType.BOOLEAN,
        default: true
    },
    showLanguage: {
        label: () => t(plugin.gitHubRepos.option.showLanguage.label),
        description: () => t(plugin.gitHubRepos.option.showLanguage.description),
        type: OptionType.BOOLEAN,
        default: true
    },
    showInMiniProfile: {
        label: () => t(plugin.gitHubRepos.option.showInMiniProfile.label),
        description: () => t(plugin.gitHubRepos.option.showInMiniProfile.description),
        type: OptionType.BOOLEAN,
        default: true
    },
    showRepositoryTab: {
        label: () => t(plugin.gitHubRepos.option.showRepositoryTab.label),
        description: () => t(plugin.gitHubRepos.option.showRepositoryTab.description),
        type: OptionType.BOOLEAN,
        default: true
    },
});

const getProfileThemeProps = findByCodeLazy(".getPreviewThemeColors", "primaryColor:");

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
        fallback: () => <BaseText size="xs" weight="semibold" className="pc-github-repos-error" style={{ color: "var(--text-feedback-critical)" }}>
            {t(plugin.gitHubRepos.error.render)}
        </BaseText>
    }
);

const ProfileRepositoriesTab = ErrorBoundary.wrap(
    (props: { user: User; displayProfile?: any; }) => {
        return (
            <GitHubReposComponent
                {...props}
                id={props.user.id}
                theme={getProfileThemeProps(props).theme}
                variant="tab"
            />
        );
    },
    { noop: true }
);

export default definePlugin({
    name: "GitHubRepos",
    description: () => t(plugin.gitHubRepos.description),
    authors: [PcDevs.talhakf, PcDevs.Panniku, PcDevs.MutanPlex],
    settings,

    patches: [
        {
            find: ".hasAvatarForGuild(null==",
            replacement: {
                match: /userId:\i\.id,guild:\i.{0,15}\}\).{0,100}(?=\])/,
                replace: "$&,$self.ProfilePopoutComponent(arguments[0])"
            }
        },
        {
            find: ",applicationRoleConnection:",
            replacement: {
                match: /user:(\i).{0,15}displayProfile:(\i).*?application\.id\)\)\}\)/,
                replace: "$&,$self.ProfilePopoutComponent(arguments[0]),"
            }
        },
        {
            find: ".MODAL_V2,onClose:",
            replacement: {
                match: /displayProfile:(\i).*?connections:\i.{0,25}\i.\i\}\)\}\)/,
                replace: "$&,$self.ProfilePopoutComponent({ user: arguments[0].user, displayProfile: $1 }),",
                predicate: () => !settings.store.showRepositoryTab,
            }
        },
        // User Profile Modal v2 tab bar
        {
            find: "#{intl::USER_PROFILE_ACTIVITY}",
            replacement: {
                match: /\.MUTUAL_GUILDS\}\)\)(?=,(\i))/,
                replace: '$&,$1.push({text:"GitHub",section:"GITHUB"})',
                predicate: () => settings.store.showRepositoryTab,
            }
        },
        // User Profile Modal v2 tab content
        {
            find: ".WIDGETS?",
            replacement: {
                match: /(\i)===\i\.\i\.WISHLIST/,
                replace: '$1==="GITHUB"?$self.ProfileRepositoriesTab(arguments[0]):$&'
            }
        }
    ],
    ProfilePopoutComponent,
    ProfileRepositoriesTab
});
