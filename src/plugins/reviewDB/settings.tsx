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
import { Button } from "@components/Button";
import { OptionType } from "@utils/types";

import { authorize, getToken } from "./auth";
import { openBlockModal } from "./components/BlockedUserModal";
import { cl } from "./utils";

export const settings = definePluginSettings({
    authorize: {
        label: () => t(plugin.reviewDB.option.authorize.label),
        type: OptionType.COMPONENT,
        component: () => (
            <Button onClick={() => authorize()}>
                {t(plugin.reviewDB.option.authorize.button)}
            </Button>
        )
    },
    notifyReviews: {
        label: () => t(plugin.reviewDB.option.notifyReviews.label),
        description: () => t(plugin.reviewDB.option.notifyReviews.description),
        type: OptionType.BOOLEAN,
        default: true,
    },
    showWarning: {
        label: () => t(plugin.reviewDB.option.showWarning.label),
        description: () => t(plugin.reviewDB.option.showWarning.description),
        type: OptionType.BOOLEAN,
        default: true,
    },
    hideTimestamps: {
        label: () => t(plugin.reviewDB.option.hideTimestamps.label),
        description: () => t(plugin.reviewDB.option.hideTimestamps.description),
        type: OptionType.BOOLEAN,
        default: false,
    },
    hideBlockedUsers: {
        label: () => t(plugin.reviewDB.option.hideBlockedUsers.label),
        description: () => t(plugin.reviewDB.option.hideBlockedUsers.description),
        type: OptionType.BOOLEAN,
        default: true,
    },
    buttons: {
        label: () => t(plugin.reviewDB.option.buttons.label),
        type: OptionType.COMPONENT,
        component: () => (
            <div className={cl("button-grid")} >
                <Button onClick={openBlockModal}>{t(plugin.reviewDB.option.buttons.manageBlocked)}</Button>

                <Button
                    variant="positive"
                    onClick={() => {
                        PlexcordNative.native.openExternal("https://github.com/sponsors/mantikafasi");
                    }}
                >
                    {t(plugin.reviewDB.option.buttons.support)}
                </Button>

                <Button onClick={async () => {
                    let url = "https://reviewdb.mantikafasi.dev";
                    const token = await getToken();
                    if (token)
                        url += "/api/redirect?token=" + encodeURIComponent(token);

                    PlexcordNative.native.openExternal(url);
                }}>
                    {t(plugin.reviewDB.option.buttons.website)}
                </Button>

                <Button onClick={() => {
                    PlexcordNative.native.openExternal("https://discord.gg/eWPBSbvznt");
                }}>
                    {t(plugin.reviewDB.option.buttons.server)}
                </Button>
            </div >
        )
    }
}).withPrivateSettings<{
    lastReviewId?: number;
    reviewsDropdownState?: boolean;
}>();
