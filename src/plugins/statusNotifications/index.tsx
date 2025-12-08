/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { playAudio } from "@api/AudioPlayer";
import { addContextMenuPatch, NavContextMenuPatchCallback, removeContextMenuPatch } from "@api/ContextMenu";
import * as DataStore from "@api/DataStore";
import { plugin, t } from "@api/i18n";
import { showNotification } from "@api/Notifications/Notifications";
import { definePluginSettings, Settings } from "@api/Settings";
import { Divider } from "@components/Divider";
import { Flex } from "@components/Flex";
import { User } from "@plexcord/discord-types";
import { PcDevs } from "@utils/constants";
import { addToStatusGroup } from "@utils/contextMenuHelpers";
import definePlugin, { OptionType } from "@utils/types";
import { Menu, PresenceStore, React, Select, UserStore } from "@webpack/common";
import { JSX } from "react";

const DATASTORE_KEY = "StatusNotifications_TrackedUsers";

interface UserNotificationSettings {
    online: boolean;
    offline: boolean;
    all: boolean;
}

interface TrackedUsers {
    [userId: string]: UserNotificationSettings;
}

let trackedUsers: TrackedUsers = {};
const userStatuses: Map<string, string> = new Map();

async function loadTrackedUsers() {
    trackedUsers = await DataStore.get(DATASTORE_KEY) ?? {};
}

async function saveTrackedUsers() {
    await DataStore.set(DATASTORE_KEY, trackedUsers);
}

function getUserSettings(userId: string): UserNotificationSettings {
    return trackedUsers[userId] || { online: false, offline: false, all: false };
}

function isUserTracked(userId: string): boolean {
    const settings = trackedUsers[userId];
    return settings && (settings.online || settings.offline || settings.all);
}

async function toggleNotificationSetting(userId: string, setting: keyof UserNotificationSettings) {
    const currentSettings = getUserSettings(userId);

    if (setting === "all") {
        trackedUsers[userId] = {
            online: false,
            offline: false,
            all: !currentSettings.all
        };
    } else {
        if (currentSettings.all) {
            trackedUsers[userId] = {
                online: setting === "online",
                offline: setting === "offline",
                all: false
            };
        } else {
            const newSettings = { ...currentSettings };
            newSettings[setting] = !currentSettings[setting];
            newSettings.all = false;
            trackedUsers[userId] = newSettings;
        }
    }

    if (!trackedUsers[userId].online && !trackedUsers[userId].offline && !trackedUsers[userId].all) {
        delete trackedUsers[userId];
        userStatuses.delete(userId);
    } else {
        const currentStatus = PresenceStore.getStatus(userId);
        if (currentStatus) {
            userStatuses.set(userId, currentStatus);
        }
    }

    await saveTrackedUsers();
}

function getStatusText(status: string): string {
    switch (status) {
        case "online": return t(plugin.statusNotifications.status.online);
        case "idle": return t(plugin.statusNotifications.status.idle);
        case "dnd": return t(plugin.statusNotifications.status.dnd);
        case "offline": return t(plugin.statusNotifications.status.offline);
        default: return status;
    }
}

function getStatusColor(status: string): string {
    switch (status) {
        case "online": return "#43b581";
        case "idle": return "#faa61a";
        case "dnd": return "#f04747";
        case "offline": return "#747f8d";
        default: return "#747f8d";
    }
}

function handlePresenceUpdate(status: string, userId: string, username: string) {
    if (!isUserTracked(userId)) return;

    const previousStatus = userStatuses.get(userId);

    if (!previousStatus) {
        userStatuses.set(userId, status);
        return;
    }

    if (previousStatus !== status) {
        userStatuses.set(userId, status);

        const userSettings = getUserSettings(userId);
        let shouldNotify = false;

        if (userSettings.all) {
            shouldNotify = true;
        } else {
            if (userSettings.online && previousStatus === "offline" && status !== "offline") {
                shouldNotify = true;
            }
            if (userSettings.offline && status === "offline" && previousStatus !== "offline") {
                shouldNotify = true;
            }
        }

        if (!shouldNotify) return;

        const previousStatusText = getStatusText(previousStatus);
        const newStatusText = getStatusText(status);
        const user = UserStore.getUser(userId);
        const displayName = user?.username || username || t(plugin.statusNotifications.notification.unknownUser);

        const icon = Settings.notifications.renderImages ? user?.getAvatarURL?.(undefined, 128) : undefined;

        showNotification({
            title: t(plugin.statusNotifications.notification.title),
            body: `${displayName}: ${previousStatusText} → ${newStatusText}`,
            richBody: (
                <div>
                    {displayName}:{" "}
                    <span style={{ color: getStatusColor(previousStatus) }}>
                        {previousStatusText}
                    </span>
                    {" → "}
                    <span style={{ color: getStatusColor(status) }}>
                        {newStatusText}
                    </span>
                </div>
            ),
            icon,
            color: getStatusColor(status),
            permanent: false,
            dismissOnClick: true
        });

        if (settings.store.notificationsSound) {
            playAudio("message1");
        }
    }
}

function Icon(enabled?: boolean): JSX.Element {
    return <svg
        width="18"
        height="18"
    >
        <circle cx="9" cy="9" r="8" fill={!enabled ? "var(--status-positive)" : "var(--status-danger)"} />
        <circle cx="9" cy="9" r="3.75" fill={!enabled ? "white" : "white"} />
    </svg>;
}

function getNotificationLabel(settings: UserNotificationSettings): string {
    if (settings.all) return t(plugin.statusNotifications.context.type.all);
    const labels: string[] = [];
    if (settings.online) labels.push(t(plugin.statusNotifications.context.type.online));
    if (settings.offline) labels.push(t(plugin.statusNotifications.context.type.offline));
    return labels.length > 0 ? labels.join(" + ") : t(plugin.statusNotifications.context.type.none);
}

const userContextMenuPatch: NavContextMenuPatchCallback = (children, { user }: { user: User; }) => {
    const userSettings = getUserSettings(user?.id);
    const isTracked = isUserTracked(user?.id);

    const [onlineChecked, setOnlineChecked] = React.useState(userSettings.online);
    const [offlineChecked, setOfflineChecked] = React.useState(userSettings.offline);
    const [allChecked, setAllChecked] = React.useState(userSettings.all);

    if (!user) return;

    addToStatusGroup(children,
        <Menu.MenuItem
            id="status-notifications-toggle"
            label={isTracked ? `${t(plugin.statusNotifications.context.notifications)}: ${getNotificationLabel(userSettings)}` : t(plugin.statusNotifications.context.label)}
            icon={() => Icon(isTracked)}
        >
            <Menu.MenuCheckboxItem
                id="status-notifications-online"
                label={t(plugin.statusNotifications.context.type.online)}
                checked={onlineChecked}
                action={async () => {
                    await toggleNotificationSetting(user.id, "online");
                    const updated = getUserSettings(user.id);
                    setOnlineChecked(updated.online);
                    setOfflineChecked(updated.offline);
                    setAllChecked(updated.all);
                }}
            />
            <Menu.MenuCheckboxItem
                id="status-notifications-offline"
                label={t(plugin.statusNotifications.context.type.offline)}
                checked={offlineChecked}
                action={async () => {
                    await toggleNotificationSetting(user.id, "offline");
                    const updated = getUserSettings(user.id);
                    setOnlineChecked(updated.online);
                    setOfflineChecked(updated.offline);
                    setAllChecked(updated.all);
                }}
            />
            <Menu.MenuCheckboxItem
                id="status-notifications-all"
                label={t(plugin.statusNotifications.context.type.all)}
                checked={allChecked}
                action={async () => {
                    await toggleNotificationSetting(user.id, "all");
                    const updated = getUserSettings(user.id);
                    setOnlineChecked(updated.online);
                    setOfflineChecked(updated.offline);
                    setAllChecked(updated.all);
                }}
            />
            <Menu.MenuSeparator />
            <Menu.MenuItem
                id="status-notifications-disable"
                label={t(plugin.statusNotifications.context.type.none)}
                action={async () => {
                    delete trackedUsers[user.id];
                    userStatuses.delete(user.id);
                    await saveTrackedUsers();
                }}
                disabled={!isTracked}
                danger={true}
            />
        </Menu.MenuItem>
    );
};

function UserListComponent() {
    const [, forceUpdate] = React.useReducer(x => x + 1, 0);
    const [isLoaded, setIsLoaded] = React.useState(false);

    React.useEffect(() => {
        loadTrackedUsers().then(() => {
            setIsLoaded(true);
            forceUpdate();
        });
    }, []);

    if (!isLoaded) {
        return (
            <div style={{ color: "var(--text-muted)", fontStyle: "italic", padding: "8px 0" }}>
                {t(plugin.statusNotifications.loading)}
            </div>
        );
    }

    const trackedUserIds = Object.keys(trackedUsers);

    if (trackedUserIds.length === 0) {
        return (
            <div style={{ color: "var(--text-muted)", fontStyle: "italic", padding: "8px 0" }}>
                {t(plugin.statusNotifications.option.usersList.empty)}
            </div>
        );
    }

    const notificationOptions = [
        { label: t(plugin.statusNotifications.context.type.none), value: "none" },
        { label: t(plugin.statusNotifications.context.type.online), value: "online" },
        { label: t(plugin.statusNotifications.context.type.offline), value: "offline" },
        { label: t(plugin.statusNotifications.context.type.all), value: "all" },
    ];

    function getCurrentValue(userId: string): string {
        const settings = getUserSettings(userId);
        if (settings.all) return "all";
        if (settings.online && settings.offline) return "all";
        if (settings.online) return "online";
        if (settings.offline) return "offline";
        return "none";
    }

    async function handleSelectChange(userId: string, value: string) {
        if (value === "none") {
            delete trackedUsers[userId];
            userStatuses.delete(userId);
        } else if (value === "all") {
            trackedUsers[userId] = { online: false, offline: false, all: true };
            const currentStatus = PresenceStore.getStatus(userId);
            if (currentStatus) {
                userStatuses.set(userId, currentStatus);
            }
        } else if (value === "online") {
            trackedUsers[userId] = { online: true, offline: false, all: false };
            const currentStatus = PresenceStore.getStatus(userId);
            if (currentStatus) {
                userStatuses.set(userId, currentStatus);
            }
        } else if (value === "offline") {
            trackedUsers[userId] = { online: false, offline: true, all: false };
            const currentStatus = PresenceStore.getStatus(userId);
            if (currentStatus) {
                userStatuses.set(userId, currentStatus);
            }
        }
        await saveTrackedUsers();
        forceUpdate();
    }

    return (
        <Flex flexDirection="column" gap={"12px"}>
            {trackedUserIds.map((userId, index) => {
                const user = UserStore.getUser(userId);
                const displayName = user?.username || userId;
                const currentValue = getCurrentValue(userId);

                return (
                    <React.Fragment key={userId}>
                        {index > 0 && <Divider />}
                        <Flex
                            alignItems="center"
                            justifyContent="space-between"
                            gap={"12px"}
                            style={{ padding: "4px 0" }}
                        >
                            <Flex alignItems="center" gap="8px" style={{ flex: 1, minWidth: 0 }}>
                                {user && (
                                    <img
                                        src={user.getAvatarURL(undefined, 32)}
                                        alt=""
                                        style={{
                                            width: "32px",
                                            height: "32px",
                                            borderRadius: "50%",
                                            flexShrink: 0
                                        }}
                                    />
                                )}
                                <span style={{ color: "var(--text-default)", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", fontWeight: 500 }}>
                                    {displayName}
                                </span>
                            </Flex>
                            <Flex style={{ minWidth: "150px" }}>
                                <Select
                                    options={notificationOptions}
                                    isSelected={v => v === currentValue}
                                    select={v => handleSelectChange(userId, v)}
                                    serialize={v => v}
                                />
                            </Flex>
                        </Flex>
                    </React.Fragment>
                );
            })}
        </Flex>
    );
}

const settings = definePluginSettings({
    notificationsSound: {
        label: () => t(plugin.statusNotifications.option.notificationsSound.label),
        description: () => t(plugin.statusNotifications.option.notificationsSound.description),
        type: OptionType.BOOLEAN,
        default: true,
    },
    usersList: {
        label: () => t(plugin.statusNotifications.option.usersList.label),
        description: () => t(plugin.statusNotifications.option.usersList.description),
        type: OptionType.COMPONENT,
        component: UserListComponent,
    }
});

export default definePlugin({
    name: "StatusNotifications",
    description: () => t(plugin.statusNotifications.description),
    authors: [PcDevs.MutanPlex],
    settings,

    async start() {
        await loadTrackedUsers();
        Object.keys(trackedUsers).forEach(userId => {
            const status = PresenceStore.getStatus(userId);
            if (status) {
                userStatuses.set(userId, status);
            }
        });
        addContextMenuPatch("user-context", userContextMenuPatch);
    },

    stop() {
        removeContextMenuPatch("user-context", userContextMenuPatch);
    },

    flux: {
        PRESENCE_UPDATES({ updates }) {
            updates.forEach(update => {
                const username = update.user?.username || "";
                handlePresenceUpdate(update.status, update.user.id, username);
            });
        }
    }
});
