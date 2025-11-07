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

import { t } from "@api/i18n";
import { definePluginSettings } from "@api/Settings";
import { Message } from "@plexcord/discord-types";
import { Devs } from "@utils/constants";
import { runtimeHashMessageKey, runtimeHashMessageKeyLegacy } from "@utils/intlHash";
import { Logger } from "@utils/Logger";
import definePlugin, { OptionType } from "@utils/types";
import { i18n, RelationshipStore } from "@webpack/common";

interface MessageDeleteProps {
    collapsedReason: () => any;
}

const settings = definePluginSettings({
    ignoreMessages: {
        get label() {
            return t("plugin.noBlockedMessages.option.ignoreMessages.label");
        },
        get description() {
            return t("plugin.noBlockedMessages.option.ignoreMessages.description");
        },
        type: OptionType.BOOLEAN,
        default: false,
        restartNeeded: true
    },
    applyToIgnoredUsers: {
        get label() {
            return t("plugin.noBlockedMessages.option.applyToIgnoredUsers.label");
        },
        get description() {
            return t("plugin.noBlockedMessages.option.applyToIgnoredUsers.description");
        },
        type: OptionType.BOOLEAN,
        default: true,
        restartNeeded: false
    }
});

export default definePlugin({
    name: "NoBlockedMessages",
    description: "Hides all blocked/ignored messages from chat completely",
    authors: [Devs.rushii, Devs.Samu, Devs.jamesbt365],
    settings,

    get displayDescription() {
        return t("plugin.noBlockedMessages.description");
    },

    patches: [
        {
            find: ".__invalid_blocked,",
            replacement: [
                {
                    match: /let{expanded:\i,[^}]*?collapsedReason[^}]*}/,
                    replace: "if($self.shouldHide(arguments[0]))return null;$&"
                }
            ]
        },
        ...[
            '"MessageStore"',
            '"ReadStateStore"'
        ].map(find => ({
            find,
            predicate: () => settings.store.ignoreMessages,
            replacement: [
                {
                    match: /(?<=function (\i)\((\i)\){)(?=.*MESSAGE_CREATE:\1)/,
                    replace: (_, _funcName, props) => `if($self.shouldIgnoreMessage(${props}.message))return;`
                }
            ]
        }))
    ],

    shouldIgnoreMessage(message: Message) {
        try {
            if (RelationshipStore.isBlocked(message.author.id)) {
                return true;
            }
            return settings.store.applyToIgnoredUsers && RelationshipStore.isIgnored(message.author.id);
        } catch (e) {
            new Logger("NoBlockedMessages").error("Failed to check if user is blocked or ignored:", e);
            return false;
        }
    },

    shouldHide(props: MessageDeleteProps): boolean {
        try {
            const collapsedReason = props.collapsedReason();
            const is = (key: string) => collapsedReason === i18n.t[runtimeHashMessageKey(key)]() || collapsedReason === i18n.t[runtimeHashMessageKeyLegacy(key)]();

            return is("BLOCKED_MESSAGE_COUNT") || (settings.store.applyToIgnoredUsers && is("IGNORED_MESSAGE_COUNT"));
        } catch (e) {
            new Logger("NoBlockedMessages").error("Failed to check if message should be hidden:", e);
            return false;
        }
    }
});
