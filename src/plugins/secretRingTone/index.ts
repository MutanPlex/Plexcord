/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2023 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { t } from "@api/i18n";
import { definePluginSettings } from "@api/Settings";
import { Devs } from "@utils/constants";
import definePlugin, { OptionType } from "@utils/types";

const settings = definePluginSettings({
    onlySnow: {
        get label() {
            return t("plugin.secretRingTone.option.onlySnow.label");
        },
        get description() {
            return t("plugin.secretRingTone.option.onlySnow.description");
        },
        type: OptionType.BOOLEAN,
        default: false,
        restartNeeded: true
    }
});

export default definePlugin({
    name: "SecretRingToneEnabler",
    description: "Always play the secret version of the discord ringtone (except during special ringtone events)",
    authors: [Devs.AndrewDLO, Devs.FieryFlames, Devs.RamziAH],
    settings,

    get displayDescription() {
        return t("plugin.secretRingTone.description");
    },

    patches: [
        {
            find: '"call_ringing_beat"',
            replacement: [
                {
                    match: /500!==\i\(\)\.random\(1,1e3\)/,
                    replace: "false"
                },
                {
                    predicate: () => settings.store.onlySnow,
                    match: /"call_ringing_beat",/,
                    replace: ""
                }
            ]
        }
    ]
});
