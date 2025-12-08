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
import { createRoot, React, WindowStore } from "@webpack/common";
import type { ReactNode } from "react";
import type { Root } from "react-dom/client";

import NotificationComponent from "./NotificationComponent";
import { openNotificationLogModal, persistNotification } from "./notificationLog";

interface NotificationItem {
    id: number;
    data: NotificationData;
    height: number;
}

let activeNotifications: NotificationItem[] = [];
let reactRoot: Root;
let id = 42;
let missedCount = 0;
const ESTIMATED_NOTIFICATION_HEIGHT = 120;

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
        const container = document.createElement("div");
        container.id = "pc-notification-container";
        document.body.append(container);
        reactRoot = createRoot(container);
    }
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
}

function renderNotifications() {
    const root = getRoot();
    const { maxNotifications } = Settings.notifications;
    const notificationsToShow = activeNotifications.slice(-maxNotifications);
    let cumulativeOffset = 0;

    root.render(
        <>
            {notificationsToShow.map((item, index) => {
                const currentOffset = cumulativeOffset;
                cumulativeOffset += item.height;

                return (
                    <NotificationComponent
                        key={item.id}
                        index={index}
                        offsetY={currentOffset}
                        {...item.data}
                        onHeightChange={height => {
                            const notification = activeNotifications.find(n => n.id === item.id);
                            if (notification && notification.height !== height) {
                                notification.height = height;
                                renderNotifications();
                            }
                        }}
                        onClose={() => {
                            item.data.onClose?.();
                            activeNotifications = activeNotifications.filter(n => n.id !== item.id);
                            renderNotifications();
                        }}
                    />
                );
            })}
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
        const estimatedHeight = data.image ? ESTIMATED_NOTIFICATION_HEIGHT + 100 : ESTIMATED_NOTIFICATION_HEIGHT;

        activeNotifications.push({
            id: notificationId,
            height: estimatedHeight,
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
