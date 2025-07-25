/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2024 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { Devs } from "@utils/constants";
import definePlugin from "@utils/types";

export default definePlugin({
    name: "IgnoreTerms",
    description: "Ignore Discord's new terms of service",
    authors: [Devs.D3SOX],
    patches: [
        {
            find: "#{intl::NEW_TERMS_TITLE}",
            replacement: {
                match: /function (\i)\((\i)\)\{let\{transitionState:(\i)\}=(\i)/g,
                replace: "function $1($2){return $self.closeModal($2);let{transitionState:$3}=$4"
            }
        }
    ],

    closeModal(event) {
        event.transitionState = null;
        event.onClose();
        return null;
    }
});
