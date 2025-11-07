/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2023 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { t } from "@api/i18n";
import { Devs } from "@utils/constants";
import definePlugin from "@utils/types";

export default definePlugin({
    name: "NormalizeMessageLinks",
    description: "Strip canary/ptb from message links",
    authors: [Devs.bb010g],

    get displayDescription() {
        return t("plugin.normalizeMessageLinks.description");
    },

    patches: [
        {
            find: "#{intl::COPY_MESSAGE_LINK}",
            replacement: {
                match: /\.concat\(location\.host\)/,
                replace: ".concat($self.normalizeHost(location.host))",
            },
        },
    ],
    normalizeHost(host: string) {
        return host.replace(/(^|\b)(canary\.|ptb\.)(discord.com)$/, "$1$3");
    },
});
