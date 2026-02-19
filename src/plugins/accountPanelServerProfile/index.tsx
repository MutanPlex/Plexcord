/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2024 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { plugin, t } from "@api/i18n";
import { isPluginEnabled } from "@api/PluginManager";
import { definePluginSettings } from "@api/Settings";
import ErrorBoundary from "@components/ErrorBoundary";
import { User } from "@plexcord/discord-types";
import alwaysExpandProfile from "@plugins/alwaysExpandProfile";
import { Devs } from "@utils/constants";
import { fetchUserProfile, getCurrentChannel } from "@utils/discord";
import definePlugin, { OptionType } from "@utils/types";
import { findComponentByCodeLazy } from "@webpack";
import { ContextMenuApi, Menu, UserStore } from "@webpack/common";

interface UserProfileProps {
    popoutProps: Record<string, any>;
    currentUser: User;
    originalRenderPopout: () => React.ReactNode;
}

const UserProfile = findComponentByCodeLazy(".POPOUT,user");

let openAlternatePopout = false;
let accountPanelRef: React.RefObject<HTMLDivElement | null> = { current: null };

const AccountPanelContextMenu = ErrorBoundary.wrap(() => {
    const { prioritizeServerProfile } = settings.use(["prioritizeServerProfile"]);

    return (
        <Menu.Menu
            navId="pc-ap-server-profile"
            onClose={ContextMenuApi.closeContextMenu}
        >
            <Menu.MenuItem
                id="pc-ap-view-alternate-popout"
                label={prioritizeServerProfile ? t(plugin.accountPanelServerProfile.context.account) : t(plugin.accountPanelServerProfile.context.server)}
                disabled={getCurrentChannel()?.getGuildId() == null}
                action={async e => {
                    if (isPluginEnabled(alwaysExpandProfile.name)) {
                        const user = await fetchUserProfile(UserStore.getCurrentUser().id, {
                            guild_id: getCurrentChannel()?.getGuildId()
                        }, false);
                        return alwaysExpandProfile.openUserModal(user!.userId);
                    }
                    openAlternatePopout = true;
                    accountPanelRef.current?.click();
                }}
            />
            <Menu.MenuCheckboxItem
                id="pc-ap-prioritize-server-profile"
                label={t(plugin.accountPanelServerProfile.context.prioritize)}
                checked={prioritizeServerProfile}
                action={() => settings.store.prioritizeServerProfile = !prioritizeServerProfile}
            />
        </Menu.Menu>
    );
}, { noop: true });

const settings = definePluginSettings({
    prioritizeServerProfile: {
        label: () => t(plugin.accountPanelServerProfile.option.prioritizeServerProfile.label),
        description: () => t(plugin.accountPanelServerProfile.option.prioritizeServerProfile.description),
        type: OptionType.BOOLEAN,
        default: false,
    }
});

export default definePlugin({
    name: "AccountPanelServerProfile",
    description: () => t(plugin.accountPanelServerProfile.description),
    authors: [Devs.Nuckyz, Devs.relitrix],
    settings,

    patches: [
        {
            find: ".NITRO_PRIVACY_PERK_BETA_COACHMARK));",
            group: true,
            replacement: [
                {
                    match: /(\.AVATAR,children:.+?renderPopout:\((\i),\i\)=>){(.+?)}(?=,position)(?<=currentUser:(\i).+?)/,
                    replace: (_, rest, popoutProps, originalPopout, currentUser) => `${rest}$self.UserProfile({popoutProps:${popoutProps},currentUser:${currentUser},originalRenderPopout:()=>{${originalPopout}}})`
                },
                {
                    match: /\.AVATAR,children:.+?onRequestClose:\(\)=>\{/,
                    replace: "$&$self.onPopoutClose();"
                },
                {
                    match: /ref:(\i),style:\i(?=.{0,250}#{intl::5fWB8U::raw})/,
                    replace: "$&,onContextMenu:($self.grabRef($1),$self.openAccountPanelContextMenu)"
                }
            ]
        }
    ],

    get accountPanelRef() {
        return accountPanelRef;
    },

    grabRef(ref: React.RefObject<HTMLDivElement>) {
        accountPanelRef = ref;
        return ref;
    },

    openAccountPanelContextMenu(event: React.UIEvent) {
        ContextMenuApi.openContextMenu(event, AccountPanelContextMenu);
    },

    onPopoutClose() {
        openAlternatePopout = false;
    },

    UserProfile: ErrorBoundary.wrap(({ popoutProps, currentUser, originalRenderPopout }: UserProfileProps) => {
        if (
            (settings.store.prioritizeServerProfile && openAlternatePopout) ||
            (!settings.store.prioritizeServerProfile && !openAlternatePopout)
        ) {
            return originalRenderPopout();
        }

        const currentChannel = getCurrentChannel();
        if (currentChannel?.getGuildId() == null || !UserProfile.$$plexcordGetWrappedComponent()) {
            return originalRenderPopout();
        }

        return (
            <UserProfile
                {...popoutProps}
                user={currentUser}
                currentUser={currentUser}
                guildId={currentChannel.getGuildId()}
                channelId={currentChannel.id}
            />
        );
    }, { noop: true })
});
