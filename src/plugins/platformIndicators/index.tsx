/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2022 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
*/

import "./style.css";

import { plugin, t } from "@api/i18n";
import { definePluginSettings } from "@api/Settings";
import { DiscordPlatform, User } from "@plexcord/discord-types";
import { Devs } from "@utils/constants";
import { classes } from "@utils/misc";
import definePlugin, { OptionType } from "@utils/types";
import { filters, findStoreLazy, mapMangledModuleLazy } from "@webpack";
import { AuthenticationStore, PresenceStore, Tooltip, UserStore, useStateFromStores } from "@webpack/common";
import desktopIcon from "file://icons/desktopIcon.svg";
import embeddedIcon from "file://icons/embeddedIcon.svg";
import mobileIcon from "file://icons/mobileIcon.svg";
import webIcon from "file://icons/webIcon.svg";
import type { JSX } from "react";

export interface Session {
    sessionId: string;
    status: string;
    active: boolean;
    clientInfo: {
        version: number;
        os: string;
        client: string;
    };
}

const SessionsStore = findStoreLazy("SessionsStore") as {
    getSessions(): Record<string, Session>;
};
const { useStatusFillColor } = mapMangledModuleLazy([".5625*", "translate"], {
    useStatusFillColor: filters.byCode(".hex")
});

function Icon(svg: string, size = 20) {
    return ({ color, tooltip, small }: { color: string; tooltip: string; small: boolean; }) => (
        <Tooltip text={tooltip} >
            {tooltipProps => (
                <img
                    {...tooltipProps}
                    src={"data:image/svg+xml;utf8," + encodeURIComponent(svg.replace("#123456", color))}
                    height={size - (small ? 3 : 0)}
                    width={size - (small ? 3 : 0)}
                />
            )}
        </Tooltip>
    );
}

type IconData = {
    svg: string,
    size: number,
    component: (props: { color: string, tooltip: string, small: boolean; }) => JSX.Element;
};

const Icons: Record<DiscordPlatform, IconData> = {
    desktop: iconData(desktopIcon),
    web: iconData(webIcon),
    mobile: iconData(mobileIcon),
    embedded: iconData(embeddedIcon),
};

function iconData(svg: string, size: number = 20): IconData {
    return {
        svg,
        size,
        component: Icon(svg, size),
    };
}

function getPlatformTooltip(platform: DiscordPlatform): string {
    return platform === "embedded"
        ? t(plugin.platformIndicators.embeddedTooltip)
        : platform[0].toUpperCase() + platform.slice(1);
}

const PlatformIcon = ({ platform, status, small }) => {
    const tooltip = getPlatformTooltip(platform as DiscordPlatform);

    const Icon = (Icons[platform] ?? Icons.desktop).component;

    return <Icon color={useStatusFillColor(status)} tooltip={tooltip} small={small} />;
};

function useEnsureOwnStatus(user: User) {
    if (user.id !== AuthenticationStore.getId()) {
        return;
    }

    const sessions = useStateFromStores([SessionsStore], () => SessionsStore.getSessions());
    if (typeof sessions !== "object") return null;
    const sortedSessions = Object.values(sessions).sort(({ status: a }, { status: b }) => {
        if (a === b) return 0;
        if (a === "online") return 1;
        if (b === "online") return -1;
        if (a === "idle") return 1;
        if (b === "idle") return -1;
        return 0;
    });

    const ownStatus = Object.values(sortedSessions).reduce((acc, curr) => {
        if (curr.clientInfo.client !== "unknown")
            acc[curr.clientInfo.client] = curr.status;
        return acc;
    }, {});

    const { clientStatuses } = PresenceStore.getState();
    clientStatuses[UserStore.getCurrentUser().id] = ownStatus;
}
interface PlatformIndicatorProps {
    user: User;
    isProfile?: boolean;
    isMessage?: boolean;
    isMemberList?: boolean;
}

const PlatformIndicator = ({ user, isProfile, isMessage, isMemberList }: PlatformIndicatorProps) => {
    if (user == null || (user.bot && !settings.store.showBots)) return null;
    useEnsureOwnStatus(user);

    const status = useStateFromStores([PresenceStore], () => PresenceStore.getClientStatus(user.id));
    if (!status) return null;

    const icons = Array.from(Object.entries(status), ([platform, status]) => (
        <PlatformIcon
            key={platform}
            platform={platform as DiscordPlatform}
            status={status}
            small={isProfile || isMemberList}
        />
    ));

    if (!icons.length) {
        return null;
    }

    return (
        <span
            className={classes("pc-platform-indicator", isProfile && "pc-platform-indicator-profile", isMessage && "pc-platform-indicator-message")}
            style={{ marginLeft: isMemberList ? "4px" : undefined }}
        >
            {icons}
        </span>
    );
};
const settings = definePluginSettings({
    list: {
        label: () => t(plugin.platformIndicators.option.list.label),
        description: () => t(plugin.platformIndicators.option.list.description),
        type: OptionType.BOOLEAN,
        default: true,
    },
    badges: {
        label: () => t(plugin.platformIndicators.option.badges.label),
        description: () => t(plugin.platformIndicators.option.badges.description),
        type: OptionType.BOOLEAN,
        default: true,
    },
    messages: {
        label: () => t(plugin.platformIndicators.option.messages.label),
        description: () => t(plugin.platformIndicators.option.messages.description),
        type: OptionType.BOOLEAN,
        default: true,
    },
    colorMobileIndicator: {
        label: () => t(plugin.platformIndicators.option.colorMobileIndicator.label),
        description: () => t(plugin.platformIndicators.option.colorMobileIndicator.description),
        type: OptionType.BOOLEAN,
        default: true,
    },
    showBots: {
        label: () => t(plugin.platformIndicators.option.showBots.label),
        description: () => t(plugin.platformIndicators.option.showBots.description),
        type: OptionType.BOOLEAN,
        default: true,
    }
});

export default definePlugin({
    name: "PlatformIndicators",
    description: () => t(plugin.platformIndicators.description),
    authors: [Devs.kemo, Devs.TheSun, Devs.Nuckyz, Devs.Ven],
    dependencies: ["MessageDecorationsAPI", "MemberListDecoratorsAPI"],
    settings,

    renderNicknameIcon(props) {
        if (!settings.store.badges) return null;
        return (
            <PlatformIndicator user={UserStore.getUser(props.userId)} isProfile />
        );
    },
    renderMemberListDecorator(props) {
        if (!settings.store.list) return null;
        return <PlatformIndicator user={props.user} isMemberList />;

    },
    renderMessageDecoration(props) {
        if (!settings.store.messages) return null;
        return <PlatformIndicator user={props.message?.author} isMessage />;
    },

    patches: [
        {
            find: ".Masks.STATUS_ONLINE_MOBILE",
            predicate: () => settings.store.colorMobileIndicator,
            replacement: [
                {
                    // Return the STATUS_ONLINE_MOBILE mask if the user is on mobile, no matter the status
                    match: /\.STATUS_TYPING;switch(?=.+?(if\(\i\)return \i\.\i\.Masks\.STATUS_ONLINE_MOBILE))/,
                    replace: ".STATUS_TYPING;$1;switch"
                },
                {
                    // Return the STATUS_ONLINE_MOBILE mask if the user is on mobile, no matter the status
                    match: /switch\(\i\)\{case \i\.\i\.ONLINE:(if\(\i\)return\{[^}]+\})/,
                    replace: "$1;$&"
                }
            ]
        },
        {
            find: ".AVATAR_STATUS_MOBILE_16;",
            predicate: () => settings.store.colorMobileIndicator,
            replacement: [
                {
                    // Return the AVATAR_STATUS_MOBILE size mask if the user is on mobile, no matter the status
                    match: /\i===\i\.\i\.ONLINE&&(?=.{0,70}\.AVATAR_STATUS_MOBILE_16;)/,
                    replace: ""
                },
                {
                    // Fix sizes for mobile indicators which aren't online
                    match: /(?<=\(\i\.status,)(\i)(?=,\{.{0,15}isMobile:(\i))/,
                    replace: '$2?"online":$1'
                },
                {
                    // Make isMobile true no matter the status
                    match: /(?<=\i&&!\i)&&\i===\i\.\i\.ONLINE/,
                    replace: ""
                }
            ]
        },
        {
            find: "}isMobileOnline(",
            predicate: () => settings.store.colorMobileIndicator,
            replacement: {
                // Make isMobileOnline return true no matter what is the user status
                match: /(?<=\i\[\i\.\i\.MOBILE\])===\i\.\i\.ONLINE/,
                replace: "!= null"
            }
        }
    ]
});
