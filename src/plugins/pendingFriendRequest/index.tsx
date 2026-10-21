/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2026 Vendicated and contributors
 * Copyright (c) 2026 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import type { NavContextMenuPatchCallback } from "@api/ContextMenu";
import { plugin, t } from "@api/i18n";
import { RelationshipType } from "@plexcord/discord-types/enums";
import { PcDevs } from "@utils/constants";
import definePlugin from "@utils/types";
import { findByPropsLazy } from "@webpack";
import { Menu, RelationshipStore } from "@webpack/common";

const RelationshipActions = findByPropsLazy("cancelFriendRequest", "addRelationship");

function isOutgoingFriendRequest(userId: string) {
    return RelationshipStore.getRelationshipType(userId) === RelationshipType.OUTGOING_REQUEST;
}

function cancelOutgoingFriendRequest(userId: string) {
    if (!isOutgoingFriendRequest(userId)) return;
    return RelationshipActions.cancelFriendRequest(userId);
}

const userContextPatch: NavContextMenuPatchCallback = (children, { user }) => {
    if (!user || !isOutgoingFriendRequest(user.id)) return;

    children.push(
        <Menu.MenuItem
            id="pc-cancel-outgoing-friend-request"
            label={t(plugin.cancelFriendRequest.text.cancelOutgoingFriendRequest)}
            action={() => cancelOutgoingFriendRequest(user.id)}
        />
    );
};

export default definePlugin({
    name: "CancelFriendRequest",
    description: () => t(plugin.cancelFriendRequest.description),
    authors: [PcDevs.omaw, PcDevs.MutanPlex],
    tags: ["utility"],
    contextMenus: {
        "user-profile-overflow-menu": userContextPatch
    },

    patches: [
        {
            find: "#{intl::rQSndv::raw}",
            replacement: {
                match: /variant:"primary",.{0,50}#{intl::ADD_FRIEND_BUTTON_AFTER}\)/,
                replace: "...$self.getCancelFriendRequestTextButtonProps(arguments[0].user.id)"
            }
        },
        {
            find: "#{intl::FRIENDS_REQUEST_STATUS_OUTGOING}",
            group: true,
            replacement: [
                {
                    match: /(?<=\i=\{icon:(\i),.{0,100}\.\.\.\i)(?=\};return 0===)/g,
                    replace: ",...$self.getCancelFriendRequestIconButtonProps(arguments[0],$1)"
                },
                {
                    match: /disabled:!0(?=.{0,25}targetElementRef:)/g,
                    replace: "disabled:!$self.isOutgoingButton(arguments[0])"
                }
            ]
        }
    ],

    isOutgoingButton({ relationshipType, hasOutgoingPendingGameFriends }) {
        return relationshipType === RelationshipType.OUTGOING_REQUEST || hasOutgoingPendingGameFriends === true;
    },

    getCancelFriendRequestTextButtonProps(userId: string) {
        return {
            variant: "critical-secondary",
            onClick: () => cancelOutgoingFriendRequest(userId),
            text: t(plugin.cancelFriendRequest.text.cancelOutgoingFriendRequest)
        };
    },

    getCancelFriendRequestIconButtonProps(context, Icon) {
        if (!this.isOutgoingButton(context)) return {};

        return {
            "aria-label": t(plugin.cancelFriendRequest.text.cancelOutgoingFriendRequest),
            disabled: false,
            icon: Icon ? (iconProps: Record<string, unknown>) => <Icon {...iconProps} color="var(--status-danger)" /> : undefined,
            tooltipText: t(plugin.cancelFriendRequest.text.cancelOutgoingFriendRequest),
            variant: "critical-secondary",
            onClick: () => cancelOutgoingFriendRequest(context?.user?.id)
        };
    }
});
