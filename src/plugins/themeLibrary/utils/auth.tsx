/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2024 Vendicated and contributors
 * Copyright (c) 2026 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import * as DataStore from "@api/DataStore";
import { plugin, t } from "@api/i18n";
import { showNotification } from "@api/Notifications";
import { logger, themeRequest } from "@plugins/themeLibrary/components/ThemeTab";
import { OAuth2AuthorizeModal, openModal, showToast, UserStore } from "@webpack/common";

export async function authorizeUser(triggerModal: boolean = true) {
    const isAuthorized = await getAuthorization();

    if (isAuthorized === false) {
        if (!triggerModal) return false;
        openModal((props: any) => <OAuth2AuthorizeModal
            {...props}
            scopes={["identify", "connections"]}
            responseType="code"
            redirectUri="https://themes.plexcord.club/api/user/auth"
            permissions={0n}
            clientId="1464006702125940736"
            cancelCompletesFlow={false}
            callback={async ({ location }: any) => {
                if (!location) return logger.error("No redirect location returned");

                try {
                    const response = await fetch(location, {
                        headers: { Accept: "application/json" }
                    });

                    const { token } = await response.json();

                    if (token) {
                        logger.debug("Authorized via OAuth2, got token");
                        await DataStore.set("ThemeLibrary_uniqueToken", token);
                        showNotification({
                            title: "ThemeLibrary",
                            body: t(plugin.themeLibrary.text.successfullyAuthorizedWithThemelibrary)
                        });
                    } else {
                        logger.debug("Tried to authorize via OAuth2, but no token returned");
                        showNotification({
                            title: "ThemeLibrary",
                            body: t(plugin.themeLibrary.text.failedToAuthorizeCheck)
                        });
                    }
                } catch (e: any) {
                    logger.error("Failed to authorize", e);
                    showNotification({
                        title: "ThemeLibrary",
                        body: t(plugin.themeLibrary.text.failedToAuthorizeCheck)
                    });
                }
            }
            }
        />);
    } else {
        return isAuthorized;
    }
}

export async function deauthorizeUser() {
    const uniqueToken = await DataStore.get<Record<string, string>>("ThemeLibrary_uniqueToken");

    if (!uniqueToken) return showToast({
        text: t(plugin.themeLibrary.toast.noUniquetokenPresentTry),
        variant: "critical",
        duration: 2e3,
        position: "bottom"
    });

    const res = await themeRequest("/user/revoke", {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${uniqueToken}`
        },
        body: JSON.stringify({ userId: UserStore.getCurrentUser().id })
    });

    if (res.ok) {
        await DataStore.del("ThemeLibrary_uniqueToken");
        showNotification({
            title: "ThemeLibrary",
            body: t(plugin.themeLibrary.text.successfullyDeauthorizedFromThemelibrary)
        });
    } else {
        // try to delete anyway
        try {
            await DataStore.del("ThemeLibrary_uniqueToken");
        } catch (e) {
            logger.error("Failed to delete token", e);
            showNotification({
                title: "ThemeLibrary",
                body: t(plugin.themeLibrary.text.failedToDeauthorizeCheck)
            });
        }
    }
}

export async function getAuthorization() {
    const uniqueToken = await DataStore.get<Record<string, string>>("ThemeLibrary_uniqueToken");

    if (!uniqueToken) {
        return false;
    } else {
        // check if valid
        const res = await themeRequest("/user/findUserByToken", {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${uniqueToken}`
            },
        });

        if (res.status === 400 || res.status === 500) {
            return false;
        } else {
            logger.debug("User is already authorized, skipping");
            return uniqueToken;
        }
    }

}

export async function isAuthorized(triggerModal: boolean = true) {
    const isAuthorized = await getAuthorization();
    const token = await DataStore.get("ThemeLibrary_uniqueToken");

    if (isAuthorized === false || !token) {
        await authorizeUser(triggerModal);
    } else {
        return true;
    }
}
