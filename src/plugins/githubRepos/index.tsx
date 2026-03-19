/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2024 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import "./styles.css";

import { plugin, t } from "@api/i18n";
import { definePluginSettings } from "@api/Settings";
import ErrorBoundary from "@components/ErrorBoundary";
import { User } from "@plexcord/discord-types";
import { PcDevs } from "@utils/constants";
import { classNameFactory } from "@utils/css";
import definePlugin, { OptionType } from "@utils/types";
import { findByCodeLazy } from "@webpack";

import { ProfilePopoutComponent } from "./components/ProfilePopoutComponent";
import { ProfileTabComponent } from "./components/ProfileTabComponent";
export const cl = classNameFactory("pc-github-repos-");
const getProfileThemeProps = findByCodeLazy(".getPreviewThemeColors", "primaryColor:");

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
    showRepositoryTab: {
        label: () => t(plugin.gitHubRepos.option.showRepositoryTab.label),
        description: () => t(plugin.gitHubRepos.option.showRepositoryTab.description),
        type: OptionType.BOOLEAN,
        default: true
    },
});

export default definePlugin({
    name: "GitHubRepos",
    description: () => t(plugin.gitHubRepos.description),
    authors: [PcDevs.talhakf, PcDevs.Panniku, PcDevs.benjii, PcDevs.MutanPlex],
    settings,

    patches: [
        // User Popout
        {
            find: /onOpenUserProfileModal:\i\}\),\i/,
            replacement: {
                match: /user:\i,widgets:.{0,100}?\}\),/,
                replace: "$&$self.ProfileRepositoriesPopout(arguments[0]),"
            }
        },
        // User Profile Modal v2
        {
            find: ".MODAL_V2,onClose:",
            replacement: {
                match: /displayProfile:(\i).*?connections:\i.{0,25}\i.\i\}\)\}\)/,
                replace: "$&,$self.ProfileRepositoriesPopout({ user: arguments[0].user, displayProfile: $1 }),",
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

    ProfileRepositoriesPopout: ErrorBoundary.wrap((props: { user: User; displayProfile?: any; }) => {
        return (
            <ProfilePopoutComponent
                {...props}
                id={props.user.id}
                theme={getProfileThemeProps(props).theme}
            />
        );
    },
        {
            noop: true
        }
    ),
    ProfileRepositoriesTab: ErrorBoundary.wrap((props: { user: User; displayProfile?: any; }) => {
        return (
            <ProfileTabComponent
                {...props}
                id={props.user.id}
                theme={getProfileThemeProps(props).theme}
            />
        );
    },
        {
            noop: true
        }
    )
});
