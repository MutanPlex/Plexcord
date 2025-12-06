/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2024 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { plugin, t } from "@api/i18n";
import { KNOWN_PLUGINS_LEGACY_DATA_KEY, KNOWN_SETTINGS_DATA_KEY } from "@plugins/newPluginsManager/knownSettings";
import * as KnownSettings from "@plugins/newPluginsManager/knownSettings";
import { openNewPluginsModal } from "@plugins/newPluginsManager/NewPluginsModal";
import { Devs, PcDevs } from "@utils/constants";
import definePlugin from "@utils/types";

export default definePlugin({
    name: "NewPluginsManager",
    description: () => t(plugin.newPluginsManager.description),
    authors: [Devs.Sqaaakoi, PcDevs.MutanPlex],

    enabledByDefault: true,
    flux: {
        async POST_CONNECTION_OPEN() {
            openNewPluginsModal();
        }
    },
    openNewPluginsModal,
    KNOWN_PLUGINS_LEGACY_DATA_KEY,
    KNOWN_SETTINGS_DATA_KEY,
    KnownSettings
});
