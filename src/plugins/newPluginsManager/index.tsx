/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2024 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { Devs, PcDevs } from "@utils/constants";
import definePlugin from "@utils/types";

import { KNOWN_PLUGINS_DATA_KEY } from "./knownPlugins";
import { openNewPluginsModal } from "./NewPluginsModal";

export default definePlugin({
    name: "NewPluginsManager",
    description: "Utility that notifies you when new plugins are added to Plexcord.",
    authors: [Devs.Sqaaakoi, PcDevs.MutanPlex],
    flux: {
        async POST_CONNECTION_OPEN() {
            openNewPluginsModal();
        }
    },
    openNewPluginsModal,
    KNOWN_PLUGINS_DATA_KEY
});
