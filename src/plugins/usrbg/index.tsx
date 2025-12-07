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
import { isPluginEnabled } from "@api/PluginManager";
import { definePluginSettings } from "@api/Settings";
import { classNameFactory } from "@api/Styles";
import { Button } from "@components/Button";
import fullVcPfp from "@plugins/fullVcPfp";
import { Devs, PcDevs } from "@utils/constants";
import definePlugin, { OptionType } from "@utils/types";

const cl = classNameFactory("pc-usrbg-");
const API_URL = "https://usrbg.is-hardly.online/users";

interface UsrbgApiReturn {
    endpoint: string;
    bucket: string;
    prefix: string;
    users: Record<string, string>;
}

const settings = definePluginSettings({
    nitroFirst: {
        label: () => t(plugin.uSRBG.option.nitroFirst.label),
        description: () => t(plugin.uSRBG.option.nitroFirst.description),
        type: OptionType.SELECT,
        options: [
            { label: () => t(plugin.uSRBG.option.nitroFirst.nitro), value: true, default: true },
            { label: () => t(plugin.uSRBG.option.nitroFirst.usrbg), value: false },
        ]
    },
    voiceBackground: {
        label: () => t(plugin.uSRBG.option.voiceBackground.label),
        description: () => t(plugin.uSRBG.option.voiceBackground.description),
        type: OptionType.BOOLEAN,
        default: true,
        restartNeeded: true
    }
});

export default definePlugin({
    name: "USRBG",
    description: () => t(plugin.uSRBG.description),
    authors: [Devs.AutumnVN, Devs.katlyn, Devs.pylix, Devs.TheKodeToad, PcDevs.MutanPlex],
    settings,

    patches: [
        {
            find: '.banner)==null?"COMPLETE"',
            replacement: {
                match: /(?<=void 0:)\i.getPreviewBanner\(\i,\i,\i\)/,
                replace: "$self.patchBannerUrl(arguments[0])||$&"

            }
        },
        {
            find: "data-selenium-video-tile",
            predicate: () => !isPluginEnabled(fullVcPfp.name) && settings.store.voiceBackground,
            replacement: [
                {
                    match: /(?<=function\((\i),\i,\i\){"use strict";)/,
                    replace: "$1.style=$self.getVoiceBackgroundStyles($1);"
                }
            ]
        }
    ],

    data: null as UsrbgApiReturn | null,

    settingsAboutComponent: () => (
        <Button
            variant="link"
            className={cl("settings-button")}
            onClick={() => PlexcordNative.native.openExternal("https://github.com/AutumnVN/usrbg#how-to-request-your-own-usrbg-banner")}
        >
            {t(plugin.uSRBG.button)}
        </Button>
    ),

    getVoiceBackgroundStyles({ className, participantUserId }: any) {
        if (className.includes("tile_")) {
            if (this.userHasBackground(participantUserId)) {
                return {
                    backgroundImage: `url(${this.getImageUrl(participantUserId)})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat"
                };
            }
        }
    },

    patchBannerUrl({ displayProfile }: any) {
        if (displayProfile?.banner && settings.store.nitroFirst) return;
        if (this.userHasBackground(displayProfile?.userId)) return this.getImageUrl(displayProfile?.userId);
    },

    userHasBackground(userId: string) {
        return !!this.data?.users[userId];
    },

    getImageUrl(userId: string): string | null {
        if (!this.userHasBackground(userId)) return null;

        // We can assert that data exists because userHasBackground returned true
        const { endpoint, bucket, prefix, users: { [userId]: etag } } = this.data!;
        return `${endpoint}/${bucket}/${prefix}${userId}?${etag}`;
    },

    async start() {
        const res = await fetch(API_URL);
        if (res.ok) {
            this.data = await res.json();
        }
    }
});
