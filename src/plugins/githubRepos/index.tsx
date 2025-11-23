/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2024 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import "./styles.css";

import { t } from "@api/i18n";
import { definePluginSettings } from "@api/Settings";
import { classNameFactory } from "@api/Styles";
import { BaseText } from "@components/BaseText";
import ErrorBoundary from "@components/ErrorBoundary";
import { User } from "@plexcord/discord-types";
import { PcDevs } from "@utils/constants";
import definePlugin, { OptionType } from "@utils/types";
import { findByCodeLazy } from "@webpack";
import { React } from "@webpack/common";

import { GitHubReposComponent } from "./components/GitHubReposComponent";
export const cl = classNameFactory("pc-github-repos-");

export const settings = definePluginSettings({
    showStars: {
        get label() {
            return t("plugin.gitHubRepos.option.showStars.label");
        },
        get description() {
            return t("plugin.gitHubRepos.option.showStars.description");
        },
        type: OptionType.BOOLEAN,
        default: true
    },
    showLanguage: {
        get label() {
            return t("plugin.gitHubRepos.option.showLanguage.label");
        },
        get description() {
            return t("plugin.gitHubRepos.option.showLanguage.description");
        },
        type: OptionType.BOOLEAN,
        default: true
    },
    showInMiniProfile: {
        get label() {
            return t("plugin.gitHubRepos.option.showInMiniProfile.label");
        },
        get description() {
            return t("plugin.gitHubRepos.option.showInMiniProfile.description");
        },
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
        fallback: () => <BaseText size="xs" weight="semibold" className="pc-github-repos-error" style={{ color: "var(--text-danger)" }}>
            {t("plugin.gitHubRepos.error.render")}
        </BaseText>
    }
);

export default definePlugin({
    name: "GitHubRepos",
    description: "Displays a user's public GitHub repositories in their profile",
    authors: [PcDevs.talhakf, PcDevs.Panniku, PcDevs.MutanPlex],
    settings,

    get displayDescription() {
        return t("plugin.gitHubRepos.description");
    },

    patches: [
        {
            find: ".hasAvatarForGuild(null==",
            replacement: {
                match: /currentUser:\i,guild:\i.{0,15}\}\).{0,100}(?=\])/,
                replace: "$&,$self.ProfilePopoutComponent({ user: arguments[0].user, displayProfile: arguments[0].displayProfile })"
            }
        },
        {
            find: ".connections,userId:",
            replacement: {
                match: /user:(\i).{0,15}displayProfile:(\i).*?application\.id\)\)\}\)/,
                replace: "$&,$self.ProfilePopoutComponent({ user: arguments[0].user, displayProfile: arguments[0].displayProfile }),"
            }
        },
        {
            find: ".MODAL_V2,onClose:",
            replacement: {
                match: /displayProfile:(\i).*?profileAppConnections\}\)\}\)/,
                replace: "$&,$self.ProfilePopoutComponent({ user: arguments[0].user, displayProfile: $1 }),"
            }
        }
    ],
    ProfilePopoutComponent
});
