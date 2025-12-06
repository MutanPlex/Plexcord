/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2025 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { cloud, t } from "@api/i18n";
import { showNotification } from "@api/Notifications";
import { PlainSettings, Settings } from "@api/Settings";
import { Logger } from "@utils/Logger";
import { relaunch } from "@utils/native";
import { SettingsRouter } from "@webpack/common";
import { deflateSync, inflateSync } from "fflate";

import { checkCloudUrlCsp, deauthorizeCloud, getCloudAuth, getCloudUrl } from "./cloudSetup";
import { exportSettings, importSettings } from "./offline";

const logger = new Logger("SettingsSync:Cloud", "#39b7e0");

export async function putCloudSettings(manual?: boolean) {
    const settings = await exportSettings({ minify: true });

    if (!await checkCloudUrlCsp()) return;

    try {
        const res = await fetch(new URL("/v1/settings", getCloudUrl()), {
            method: "PUT",
            headers: {
                Authorization: await getCloudAuth(),
                "Content-Type": "application/octet-stream"
            },
            body: deflateSync(new TextEncoder().encode(settings)) as Uint8Array<ArrayBuffer>
        });

        if (!res.ok) {
            logger.error(`Failed to sync up, API returned ${res.status}`);
            showNotification({
                title: t(cloud.settings),
                body: t(cloud.error.api.returned.to, { status: res.status }),
                color: "var(--red-360)"
            });
            return;
        }

        const { written } = await res.json();
        PlainSettings.cloud.settingsSyncVersion = written;
        PlexcordNative.settings.set(PlainSettings);

        logger.info("Settings uploaded to cloud successfully");

        if (manual) {
            showNotification({
                title: t(cloud.settings),
                body: t(cloud.successful),
                noPersist: true,
            });
        }
    } catch (e: any) {
        logger.error("Failed to sync up", e);
        showNotification({
            title: t(cloud.settings),
            body: t(cloud.error.synchronize.to, { error: String(e) }),
            color: "var(--red-360)"
        });
    }
}

export async function getCloudSettings(shouldNotify = true, force = false) {
    if (!await checkCloudUrlCsp()) return;

    try {
        const res = await fetch(new URL("/v1/settings", getCloudUrl()), {
            method: "GET",
            headers: {
                Authorization: await getCloudAuth(),
                Accept: "application/octet-stream",
                "If-None-Match": Settings.cloud.settingsSyncVersion.toString()
            },
        });

        if (res.status === 401) {
            // User switched to an account that isn't connected to cloud
            showNotification({
                title: t(cloud.settings),
                body: t(cloud.error.connect),
                color: "var(--yellow-360)",
                onClick: () => SettingsRouter.open("PlexcordCloud")
            });
            // Disable cloud sync globally
            Settings.cloud.authenticated = false;
            return false;
        }

        if (res.status === 404) {
            logger.info("No settings on the cloud");
            if (shouldNotify)
                showNotification({
                    title: t(cloud.settings),
                    body: t(cloud.error.noSettings),
                    noPersist: true
                });
            return false;
        }

        if (res.status === 304) {
            logger.info("Settings up to date");
            if (shouldNotify)
                showNotification({
                    title: t(cloud.settings),
                    body: t(cloud.error.uptodate),
                    noPersist: true
                });
            return false;
        }

        if (!res.ok) {
            logger.error(`Failed to sync down, API returned ${res.status}`);
            showNotification({
                title: t(cloud.settings),
                body: t(cloud.error.api.returned.from, { status: res.status }),
                color: "var(--red-360)"
            });
            return false;
        }

        const written = Number(res.headers.get("etag")!);
        const localWritten = Settings.cloud.settingsSyncVersion;

        // don't need to check for written > localWritten because the server will return 304 due to if-none-match
        if (!force && written < localWritten) {
            if (shouldNotify)
                showNotification({
                    title: t(cloud.settings),
                    body: t(cloud.error.localNewer),
                    noPersist: true,
                });
            return;
        }

        const data = await res.arrayBuffer();

        const settings = new TextDecoder().decode(inflateSync(new Uint8Array(data)));
        await importSettings(settings);

        // sync with server timestamp instead of local one
        PlainSettings.cloud.settingsSyncVersion = written;
        PlexcordNative.settings.set(PlainSettings);

        logger.info("Settings loaded from cloud successfully");
        if (shouldNotify)
            showNotification({
                title: t(cloud.settings),
                body: t(cloud.updated),
                color: "var(--green-360)",
                onClick: IS_WEB ? () => location.reload() : relaunch,
                noPersist: true
            });

        return true;
    } catch (e: any) {
        logger.error("Failed to sync down", e);
        showNotification({
            title: t(cloud.settings),
            body: t(cloud.error.synchronize.from, { error: String(e) }),
            color: "var(--red-360)"
        });

        return false;
    }
}

export async function deleteCloudSettings() {
    if (!await checkCloudUrlCsp()) return;

    try {
        const res = await fetch(new URL("/v1/settings", getCloudUrl()), {
            method: "DELETE",
            headers: { Authorization: await getCloudAuth() },
        });

        if (!res.ok) {
            logger.error(`Failed to delete, API returned ${res.status}`);
            showNotification({
                title: t(cloud.settings),
                body: t(cloud.error.api.returned.delete, { status: res.status }),
                color: "var(--red-360)"
            });
            return;
        }

        logger.info("Settings deleted from cloud successfully");
        showNotification({
            title: t(cloud.settings),
            body: t(cloud.deleted),
            color: "var(--green-360)"
        });
    } catch (e: any) {
        logger.error("Failed to delete", e);
        showNotification({
            title: t(cloud.settings),
            body: t(cloud.error.delete, { error: String(e) }),
            color: "var(--red-360)"
        });
    }
}

export async function eraseAllCloudData() {
    if (!await checkCloudUrlCsp()) return;

    const res = await fetch(new URL("/v1/", getCloudUrl()), {
        method: "DELETE",
        headers: { Authorization: await getCloudAuth() }
    });

    if (!res.ok) {
        logger.error(`Failed to erase data, API returned ${res.status}`);
        showNotification({
            title: t(cloud.notification.title),
            body: t(cloud.notification.erase.failed, { status: res.status }),
            color: "var(--red-360)"
        });
        return;
    }

    Settings.cloud.authenticated = false;
    await deauthorizeCloud();

    showNotification({
        title: t(cloud.notification.title),
        body: t(cloud.notification.erase.successful),
        color: "var(--green-360)"
    });
}
