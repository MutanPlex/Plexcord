/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2026 Vendicated and contributors
 * Copyright (c) 2026 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { plugin, t } from "@api/i18n";
import { Devs } from "@utils/constants";
import definePlugin from "@utils/types";
import { setColorPicker, setCreateScroller, setNewCustomizationSection, setRoleMemberPopout } from "@webpack/common";

export default definePlugin({
    name: "ConcatenatedComponentExtractor",
    description: () => t(plugin.concatenatedComponentExtractor.description),
    authors: [Devs.sadan],
    tags: ["developers", "utility"],
    required: true,

    patches: [
        {
            find: "#{intl::USER_SETTINGS_PROFILE_COLOR_SELECT_COLOR}),focusProps:",
            replacement: {
                match: /(?=function (\i)\(\i\)\{let\{onChange:\i,onClose:\i,[^}]+?showEyeDropper:)/,
                replace: "$self.setColorPicker($1);"
            }
        },
        {
            find: /="ltr",orientation:\i="vertical"[^}]+?customTheme:/,
            replacement: {
                match: /(?=function (\i)\(\i,\i,\i\)\{.{0,20}?return function\(\i\)\{let\{[^}]+?="ltr",orientation:)/,
                replace: "$self.setCreateScroller($1);"
            }
        },
        {
            find: "UserProfileModalV2EditingPanel",
            replacement: [
                {
                    match: /function (\i).{0,50}showNitroIcon:.{0,500}\}\),\i\]\}\)\}/,
                    replace: "$&$self.setNewCustomizationSection($1);"
                }
            ]
        },
        {
            find: ".ROLE_MENTION)",
            replacement: {
                match: /function (\i)(?=.+?renderPopout:.{0,20}\1,\{guildId:\i,channelId:\i)/,
                replace: "$self.setRoleMemberPopout($1);$&"
            }
        },
    ],

    setCreateScroller,
    setColorPicker,
    setNewCustomizationSection,
    setRoleMemberPopout,
});
