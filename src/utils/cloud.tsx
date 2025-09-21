/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2023 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
*/

import * as DataStore from "@api/DataStore";
import { t } from "@api/i18n";
import { showNotification } from "@api/Notifications";
import { Settings } from "@api/Settings";
import { Alerts, OAuth2AuthorizeModal, UserStore } from "@webpack/common";

import { Logger } from "./Logger";
import { openModal } from "./modal";
import { relaunch } from "./native";

export const cloudLogger = new Logger("Cloud", "#39b7e0");

export const getCloudUrl = () => new URL(Settings.cloud.url);
const getCloudUrlOrigin = () => getCloudUrl().origin;

export async function checkCloudUrlCsp() {
    if (IS_WEB) return true;

    const { host } = getCloudUrl();
    if (host === "api.plexcord.club") return true;

    if (await PlexcordNative.csp.isDomainAllowed(Settings.cloud.url, ["connect-src"])) {
        return true;
    }

    const res = await PlexcordNative.csp.requestAddOverride(Settings.cloud.url, ["connect-src"], t("cloud.override"));
    if (res === "ok") {
        Alerts.show({
            title: t("cloud.notification.enabled"),
            body: t("cloud.notification.host", { host }),
            confirmText: t("cloud.button.confirm"),
            cancelText: t("cloud.button.later"),
            onConfirm: relaunch
        });
    }
    return false;
}

const getUserId = () => {
    const id = UserStore.getCurrentUser()?.id;
    if (!id) throw new Error("User not yet logged in");
    return id;
};

export async function getAuthorization() {
    const secrets = await DataStore.get<Record<string, string>>("Plexcord_cloudSecret") ?? {};

    const origin = getCloudUrlOrigin();

    // we need to migrate from the old format here
    if (secrets[origin]) {
        await DataStore.update<Record<string, string>>("Plexcord_cloudSecret", secrets => {
            secrets ??= {};
            // use the current user ID
            secrets[`${origin}:${getUserId()}`] = secrets[origin];
            delete secrets[origin];
            return secrets;
        });

        // since this doesn't update the original object, we'll early return the existing authorization
        return secrets[origin];
    }

    return secrets[`${origin}:${getUserId()}`];
}

async function setAuthorization(secret: string) {
    await DataStore.update<Record<string, string>>("Plexcord_cloudSecret", secrets => {
        secrets ??= {};
        secrets[`${getCloudUrlOrigin()}:${getUserId()}`] = secret;
        return secrets;
    });
}

export async function deauthorizeCloud() {
    await DataStore.update<Record<string, string>>("Plexcord_cloudSecret", secrets => {
        secrets ??= {};
        delete secrets[`${getCloudUrlOrigin()}:${getUserId()}`];
        return secrets;
    });
}

export async function authorizeCloud() {
    if (await getAuthorization() !== undefined) {
        Settings.cloud.authenticated = true;
        return;
    }

    if (!await checkCloudUrlCsp()) return;

    try {
        const oauthConfiguration = await fetch(new URL("/v1/oauth/settings", getCloudUrl()));
        var { clientId, redirectUri } = await oauthConfiguration.json();
    } catch {
        showNotification({
            title: t("cloud.notification.title"),
            body: t("cloud.error.setup")
        });
        Settings.cloud.authenticated = false;
        return;
    }

    openModal((props: any) => <OAuth2AuthorizeModal
        {...props}
        scopes={["identify"]}
        responseType="code"
        redirectUri={redirectUri}
        permissions={0n}
        clientId={clientId}
        cancelCompletesFlow={false}
        callback={async ({ location }: any) => {
            if (!location) {
                Settings.cloud.authenticated = false;
                return;
            }

            try {
                const res = await fetch(location, {
                    headers: { Accept: "application/json" }
                });
                const { secret } = await res.json();
                if (secret) {
                    cloudLogger.info("Authorized with secret");
                    await setAuthorization(secret);
                    showNotification({
                        title: t("cloud.notification.title"),
                        body: t("cloud.notification.enabled")
                    });
                    Settings.cloud.authenticated = true;
                } else {
                    showNotification({
                        title: t("cloud.notification.title"),
                        body: t("cloud.error.secret")
                    });
                    Settings.cloud.authenticated = false;
                }
            } catch (e: any) {
                cloudLogger.error("Failed to authorize", e);
                showNotification({
                    title: t("cloud.notification.title"),
                    body: t("cloud.error.string", { error: e.toString() })
                });
                Settings.cloud.authenticated = false;
            }
        }
        }
    />);
}

export async function getCloudAuth() {
    const secret = await getAuthorization();

    return window.btoa(`${secret}:${getUserId()}`);
}
