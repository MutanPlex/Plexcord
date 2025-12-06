/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2023 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { plugin, t } from "@api/i18n";
import { definePluginSettings } from "@api/Settings";
import { Devs } from "@utils/constants";
import { canonicalizeMatch } from "@utils/patches";
import definePlugin, { OptionType } from "@utils/types";

const settings = definePluginSettings({
    lockout: {
        label: () => t(plugin.permissionFreeWill.option.lockout.label),
        description: () => t(plugin.permissionFreeWill.option.lockout.description),
        type: OptionType.BOOLEAN,
        default: true,
        restartNeeded: true
    },
    onboarding: {
        label: () => t(plugin.permissionFreeWill.option.onboarding.label),
        description: () => t(plugin.permissionFreeWill.option.onboarding.description),
        type: OptionType.BOOLEAN,
        default: true,
        restartNeeded: true
    }
});

export default definePlugin({
    name: "PermissionFreeWill",
    description: () => t(plugin.permissionFreeWill.description),
    authors: [Devs.lewisakura],

    patches: [
        // Permission lockout, just set the check to true
        {
            find: "#{intl::STAGE_CHANNEL_CANNOT_OVERWRITE_PERMISSION}",
            replacement: [
                {
                    match: /case"DENY":.{0,50}if\((?=\i\.\i\.can)/,
                    replace: "$&true||"
                }
            ],
            predicate: () => settings.store.lockout
        },
        // Onboarding, same thing but we need to prevent the check
        {
            find: "#{intl::ONBOARDING_CHANNEL_THRESHOLD_WARNING}",
            replacement: [
                {
                    match: /{(?:\i:\(\)=>\i,?){2}}/,
                    replace: m => m.replaceAll(canonicalizeMatch(/\(\)=>\i/g), "()=>()=>Promise.resolve(true)")
                }
            ],
            predicate: () => settings.store.onboarding
        }
    ],
    settings
});
