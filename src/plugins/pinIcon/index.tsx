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
import { Message } from "@plexcord/discord-types";
import { PcDevs } from "@utils/constants";
import definePlugin from "@utils/types";
import { findComponentByCodeLazy } from "@webpack";

const PinIcon = findComponentByCodeLazy("1-.06-.63L6.16");
export default definePlugin({
    name: "PinIcon",
    description: "Adds a pin icon to pinned messages",
    authors: [PcDevs.iamme, PcDevs.MutanPlex],

    get displayDescription() {
        return t("plugin.pinIcon.description");
    },

    patches: [
        {
            find: "isUnsupported})",
            replacement: {
                match: /WITH_CONTENT\}\)/,
                replace: "$&,$self.PinnedIcon(arguments[0].message)"
            }
        }
    ],
    PinnedIcon({ pinned }: Message) {
        return pinned ? (<PinIcon size="xs" style={{ position: "absolute", right: "0", top: "0" }} />) : null;
    }
});
