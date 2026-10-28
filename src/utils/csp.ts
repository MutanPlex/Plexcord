/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2026 Vendicated and contributors
 * Copyright (c) 2026 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { csp, t } from "@api/i18n";
import { showToast } from "@webpack/common";

import { promptToRestart } from "./promptToRestart";
import { useAwaiter, useForceUpdater } from "./react";

export function useCspPermission(url: string | undefined, directives: string[], callerName: string) {
    const [signal, forceUpdate] = useForceUpdater(true);
    const [isAllowed] = useAwaiter(
        async () => IS_WEB || !url || !URL.canParse(url) || PlexcordNative.csp.isDomainAllowed(url, directives),
        { fallbackValue: true, deps: [url, signal] }
    );

    const requestPermission = async () => {
        if (!url) return;

        const res = await PlexcordNative.csp.requestAddOverride(url, directives, callerName);
        if (res === "ok") {
            forceUpdate();
            promptToRestart("relaunch");
        } else if (res !== "cancelled") {
            showToast({ text: t(csp.notice.failed), variant: "critical" });
        }
    };

    return [isAllowed, requestPermission] as const;
}
