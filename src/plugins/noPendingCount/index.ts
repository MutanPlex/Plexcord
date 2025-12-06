/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2023 Vendicated and contributors
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

import { plugin, t } from "@api/i18n";
import { definePluginSettings } from "@api/Settings";
import { Devs } from "@utils/constants";
import definePlugin, { OptionType } from "@utils/types";
import { findByPropsLazy } from "@webpack";

const MessageRequestStore = findByPropsLazy("getMessageRequestsCount");

const settings = definePluginSettings({
    hideFriendRequestsCount: {
        label: () => t(plugin.noPendingCount.option.hideFriendRequestsCount.label),
        description: () => t(plugin.noPendingCount.option.hideFriendRequestsCount.description),
        type: OptionType.BOOLEAN,
        default: true,
        restartNeeded: true
    },
    hideMessageRequestsCount: {
        label: () => t(plugin.noPendingCount.option.hideMessageRequestsCount.label),
        description: () => t(plugin.noPendingCount.option.hideMessageRequestsCount.description),
        type: OptionType.BOOLEAN,
        default: true,
        restartNeeded: true
    },
    hidePremiumOffersCount: {
        label: () => t(plugin.noPendingCount.option.hidePremiumOffersCount.label),
        description: () => t(plugin.noPendingCount.option.hidePremiumOffersCount.description),
        type: OptionType.BOOLEAN,
        default: true,
        restartNeeded: true
    }
});

export default definePlugin({
    name: "NoPendingCount",
    description: () => t(plugin.noPendingCount.description),
    authors: [Devs.amia],
    settings: settings,

    // Functions used to determine the top left count indicator can be found in the single module that calls getUnacknowledgedOffers(...)
    // or by searching for "showProgressBadge:"
    patches: [
        {
            find: "getPendingCount(){",
            predicate: () => settings.store.hideFriendRequestsCount,
            replacement: {
                match: /(?<=getPendingCount\(\)\{)/,
                replace: "return 0;"
            }
        },
        // Message requests hook
        {
            find: "getMessageRequestsCount(){",
            predicate: () => settings.store.hideMessageRequestsCount,
            replacement: {
                match: /(?<=getMessageRequestsCount\(\)\{)/,
                replace: "return 0;"
            }
        },
        // This prevents the Message Requests tab from always hiding due to the previous patch (and is compatible with spam requests)
        // In short, only the red badge is hidden. Button visibility behavior isn't changed.
        {
            find: ".getSpamChannelsCount();return",
            predicate: () => settings.store.hideMessageRequestsCount,
            replacement: {
                match: /(?<=getSpamChannelsCount\(\);return )\i\.getMessageRequestsCount\(\)/,
                replace: "$self.getRealMessageRequestCount()"
            }
        },
        {
            find: "showProgressBadge:",
            predicate: () => settings.store.hidePremiumOffersCount,
            replacement: {
                // The two groups inside the first group grab the minified names of the variables,
                // they are then referenced later to find unviewedTrialCount + unviewedDiscountCount.
                match: /(\{unviewedTrialCount:(\i),unviewedDiscountCount:(\i)\}.+?)\2\+\3/,
                replace: (_, rest) => `${rest}0`
            }
        }
    ],

    getRealMessageRequestCount() {
        return MessageRequestStore.getMessageRequestChannelIds().size;
    }
});
