/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2024 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { definePluginSettings } from "@api/Settings";
import ErrorBoundary from "@components/ErrorBoundary";
import { User } from "@plexcord/discord-types";
import { Devs } from "@utils/constants";
import { getCurrentChannel } from "@utils/discord";
import definePlugin, { OptionType } from "@utils/types";
import { findComponentByCodeLazy } from "@webpack";
import { ContextMenuApi, Menu, useEffect, useRef } from "@webpack/common";

interface UserProfileProps {
    popoutProps: Record<string, any>;
    currentUser: User;
    originalRenderPopout: () => React.ReactNode;
}

const UserProfile = findComponentByCodeLazy(".POPOUT,user");

let openAlternatePopout = false;
let accountPanelRef: React.RefObject<Record<PropertyKey, any> | null> = { current: null };

const AccountPanelContextMenu = ErrorBoundary.wrap(() => {
    const { prioritizeServerProfile } = settings.use(["prioritizeServerProfile"]);

    return (
        <Menu.Menu
            navId="pc-ap-server-profile"
            onClose={ContextMenuApi.closeContextMenu}
        >
            <Menu.MenuItem
                id="pc-ap-view-alternate-popout"
                label={prioritizeServerProfile ? "View Account Profile" : "View Server Profile"}
                disabled={getCurrentChannel()?.getGuildId() == null}
                action={e => {
                    openAlternatePopout = true;
                    accountPanelRef.current?.props.onMouseDown();
                    accountPanelRef.current?.props.onClick(e);
                }}
            />
            <Menu.MenuCheckboxItem
                id="pc-ap-prioritize-server-profile"
                label="Prioritize Server Profile"
                checked={prioritizeServerProfile}
                action={() => settings.store.prioritizeServerProfile = !prioritizeServerProfile}
            />
        </Menu.Menu>
    );
}, { noop: true });

const settings = definePluginSettings({
    prioritizeServerProfile: {
        type: OptionType.BOOLEAN,
        description: "Prioritize Server Profile when left clicking your account panel",
        default: false
    }
});

export default definePlugin({
    name: "AccountPanelServerProfile",
    description: "Right click your account panel in the bottom left to view your profile in the current server",
    authors: [Devs.Nuckyz, Devs.relitrix],
    settings,

    patches: [
        {
            find: "#{intl::ACCOUNT_SPEAKING_WHILE_MUTED}",
            group: true,
            replacement: [
                {
                    match: /let{ref:\i,speaking:\i/,
                    replace: "$self.useAccountPanelRef();$&"
                },
                {
                    match: /(\.AVATAR,children:.+?renderPopout:\((\i),\i\)=>){(.+?)}(?=,position)(?<=currentUser:(\i).+?)/,
                    replace: (_, rest, popoutProps, originalPopout, currentUser) => `${rest}$self.UserProfile({popoutProps:${popoutProps},currentUser:${currentUser},originalRenderPopout:()=>{${originalPopout}}})`
                },
                {
                    match: /\.AVATAR,children:.+?onRequestClose:\(\)=>\{/,
                    replace: "$&$self.onPopoutClose();"
                },
                {
                    match: /(?<=#{intl::SET_STATUS}\),)/,
                    replace: "ref:$self.accountPanelRef,onContextMenu:$self.openAccountPanelContextMenu,"
                }
            ]
        }
    ],

    get accountPanelRef() {
        return accountPanelRef;
    },

    useAccountPanelRef() {
        useEffect(() => () => {
            accountPanelRef.current = null;
        }, []);

        return (accountPanelRef = useRef(null));
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
