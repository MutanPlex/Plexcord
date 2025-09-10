/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2024 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { Devs } from "@utils/constants";
import definePlugin from "@utils/types";

import { KNOWN_PLUGINS_LEGACY_DATA_KEY, KNOWN_SETTINGS_DATA_KEY } from "./knownSettings";
import * as KnownSettings from "./knownSettings";
import { openNewPluginsModal } from "./NewPluginsModal";

export default definePlugin({
    name: "NewPluginsManager",
    description: "Utility that notifies you when new plugins are added to Plexcord",
    authors: [Devs.Sqaaakoi],
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
