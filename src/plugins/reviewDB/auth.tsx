/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2023 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import * as DataStore from "@api/DataStore";
import { t } from "@api/i18n";
import { Logger } from "@utils/Logger";
import { openModal } from "@utils/modal";
import { OAuth2AuthorizeModal, showToast, Toasts, UserStore } from "@webpack/common";

import { ReviewDBAuth } from "./entities";

const DATA_STORE_KEY = "rdb-auth";

export let Auth: ReviewDBAuth = {};

export async function initAuth() {
    Auth = await getAuth() ?? {};
}

export async function getAuth(): Promise<ReviewDBAuth | undefined> {
    const auth = await DataStore.get(DATA_STORE_KEY);
    return auth?.[UserStore.getCurrentUser()?.id];
}

export async function getToken() {
    const auth = await getAuth();
    return auth?.token;
}

export async function updateAuth(newAuth: ReviewDBAuth) {
    return DataStore.update(DATA_STORE_KEY, auth => {
        auth ??= {};
        Auth = auth[UserStore.getCurrentUser().id] ??= {};

        if (newAuth.token) Auth.token = newAuth.token;
        if (newAuth.user) Auth.user = newAuth.user;

        return auth;
    });
}

export function authorize(callback?: any) {
    openModal(props =>
        <OAuth2AuthorizeModal
            {...props}
            scopes={["identify"]}
            responseType="code"
            redirectUri="https://manti.vendicated.dev/api/reviewdb/auth"
            permissions={0n}
            clientId="915703782174752809"
            cancelCompletesFlow={false}
            callback={async (response: any) => {
                try {
                    const url = new URL(response.location);
                    url.searchParams.append("clientMod", "vencord");
                    const res = await fetch(url, {
                        headers: { Accept: "application/json" }
                    });

                    if (!res.ok) {
                        const { message } = await res.json();
                        showToast(message || t("plugin.reviewDB.notification.auth.error"), Toasts.Type.FAILURE);
                        return;
                    }

                    const { token } = await res.json();
                    updateAuth({ token });
                    showToast(t("plugin.reviewDB.notification.auth.successfully"), Toasts.Type.SUCCESS);
                    callback?.();
                } catch (e) {
                    new Logger("ReviewDB").error(t("plugin.reviewDB.notification.auth.failed"), e);
                }
            }}
        />
    );
}
