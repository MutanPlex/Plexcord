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

import { maybePromptToUpdate } from "@utils/updater";

// Safe translation function that won't crash if i18n isn't ready
const safeT = (key: string, fallback: string): string => {
    try {
        const { t } = require("@api/i18n");
        return t(key) || fallback;
    } catch {
        return fallback;
    }
};

export function handleComponentFailed() {
    const message = safeT(
        "components.componentFailed.message",
        "Uh Oh! Failed to render this Page." +
        " However, there is an update available that might fix it." +
        " Would you like to update and restart now?"
    );

    maybePromptToUpdate(message);
}
