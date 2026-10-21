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

import { settings, t } from "@api/i18n";
import { Settings } from "@api/Settings";
import { Channel, Message } from "@plexcord/discord-types";
import { createRoot, React, WindowStore } from "@webpack/common";
import type { ReactNode } from "react";
import type { Root } from "react-dom/client";

import NotificationComponent from "./NotificationComponent";
import { openNotificationLogModal, persistNotification } from "./notificationLog";

interface NotificationItem {
    id: number;
    data: NotificationData;
}

let activeNotifications: NotificationItem[] = [];
let reactRoot: Root;
let container: HTMLDivElement;
let id = 42;
let missedCount = 0;

window.addEventListener("focus", () => {
    const { missed, timeout, useNative } = Settings.notifications;
    if (!missed) return;
    if (missedCount > 0 && timeout > 0 && useNative === "never") {
        showNotification({
            title: t(settings.notifications.missed.whileYou),
            body: t(settings.notifications.missed.count, { count: missedCount, s: missedCount !== 1 ? t(settings.notifications.missed.s) : "" }),
            onClick: () => openNotificationLogModal(),
        });
        missedCount = 0;
    }
});

function getRoot() {
    if (!reactRoot) {
        container = document.createElement("div");
        container.id = "pc-notification-container";
        document.body.append(container);
        reactRoot = createRoot(container);
    }

    // Keep the container's position class in sync with the user's setting.
    container.className = `pc-notification-position-${Settings.notifications.position ?? "bottom-right"}`;

    return reactRoot;
}

export interface NotificationData {
    title: string;
    body: string;
    /**
     * Same as body but can be a custom component.
     * Will be used over body if present.
     * Not supported on desktop notifications, those will fall back to body */
    richBody?: ReactNode;
    /** Small icon. This is for things like profile pictures and should be square */
    icon?: string;
    /** Large image. Optimally, this should be around 16x9 but it doesn't matter much. Desktop Notifications might not support this */
    image?: string;
    onClick?(): void;
    onClose?(): void;
    color?: string;
    /** Whether this notification should not have a timeout */
    permanent?: boolean;
    /** Whether this notification should not be persisted in the Notification Log */
    noPersist?: boolean;
    /** Whether this notification should be dismissed when clicked (defaults to true) */
    dismissOnClick?: boolean;
    /**
     * The original message. When provided together with mockedMessage and channel,
     * the notification renders the actual Discord message instead of title/body.
     * title and body are still used for desktop notifications and the Notification Log.
     */
    message?: Message;
    /** The message as a record from the MessageStore, used for rendering */
    mockedMessage?: Message;
    /** The channel the message was sent in */
    channel?: Channel;
}

function renderNotifications() {
    const root = getRoot();
    const { maxNotifications } = Settings.notifications;
    const notificationsToShow = activeNotifications.slice(-maxNotifications);

    root.render(
        <>
            {notificationsToShow.map(item => (
                <NotificationComponent
                    key={item.id}
                    {...item.data}
                    onClose={() => {
                        item.data.onClose?.();
                        activeNotifications = activeNotifications.filter(n => n.id !== item.id);
                        renderNotifications();
                    }}
                />
            ))}
        </>
    );
}

function shouldBeNative() {
    if (typeof Notification === "undefined") return false;

    const { useNative } = Settings.notifications;
    if (useNative === "always") return true;
    if (useNative === "not-focused") return !document.hasFocus();
    return false;
}

export async function requestPermission() {
    return (
        Notification.permission === "granted" ||
        (Notification.permission !== "denied" && (await Notification.requestPermission()) === "granted")
    );
}

export async function showNotification(data: NotificationData) {
    persistNotification(data);

    if (shouldBeNative() && await requestPermission()) {
        const { title, body, icon, image, onClick = null, onClose = null } = data;
        const n = new Notification(title, {
            body,
            icon,
            // @ts-expect-error ts is drunk
            image
        });
        n.onclick = onClick;
        n.onclose = onClose;

        if (!WindowStore.isFocused()) missedCount++;
    } else {
        const notificationId = id++;

        activeNotifications.push({
            id: notificationId,
            data: {
                ...data,
                onClose: () => {
                    data.onClose?.();
                    if (!WindowStore.isFocused()) missedCount++;
                }
            }
        });

        renderNotifications();
    }
}
