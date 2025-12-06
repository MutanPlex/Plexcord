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
import { OptionType } from "@utils/types";

export default definePluginSettings({
    notices: {
        label: () => t(plugin.relationshipNotifier.option.notices.label),
        description: () => t(plugin.relationshipNotifier.option.notices.description),
        type: OptionType.BOOLEAN,
        default: false
    },
    offlineRemovals: {
        label: () => t(plugin.relationshipNotifier.option.offlineRemovals.label),
        description: () => t(plugin.relationshipNotifier.option.offlineRemovals.description),
        type: OptionType.BOOLEAN,
        default: true
    },
    friends: {
        label: () => t(plugin.relationshipNotifier.option.friends.label),
        description: () => t(plugin.relationshipNotifier.option.friends.description),
        type: OptionType.BOOLEAN,
        default: true
    },
    friendRequestCancels: {
        label: () => t(plugin.relationshipNotifier.option.friendRequestCancels.label),
        description: () => t(plugin.relationshipNotifier.option.friendRequestCancels.description),
        type: OptionType.BOOLEAN,
        default: true
    },
    servers: {
        label: () => t(plugin.relationshipNotifier.option.servers.label),
        description: () => t(plugin.relationshipNotifier.option.servers.description),
        type: OptionType.BOOLEAN,
        default: true
    },
    groups: {
        label: () => t(plugin.relationshipNotifier.option.groups.label),
        description: () => t(plugin.relationshipNotifier.option.groups.description),
        type: OptionType.BOOLEAN,
        default: true
    }
});
