/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2023 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import "./styles.css";

import { NavContextMenuPatchCallback } from "@api/ContextMenu";
import * as DataStore from "@api/DataStore";
import { plugin, t } from "@api/i18n";
import { definePluginSettings } from "@api/Settings";
import { Button } from "@components/Button";
import ErrorBoundary from "@components/ErrorBoundary";
import { Message, User } from "@plexcord/discord-types";
import { Devs, PcDevs } from "@utils/constants";
import { openModal } from "@utils/modal";
import definePlugin, { OptionType } from "@utils/types";
import { findByPropsLazy } from "@webpack";
import { Menu, showToast, Toasts, Tooltip, useEffect, UserStore, useState } from "@webpack/common";

import { deleteTimezone, getTimezone, loadDatabaseTimezones, setUserDatabaseTimezone } from "./database";
import { SetTimezoneModal } from "./TimezoneModal";

export let timezones: Record<string, string | null> = {};
export const DATASTORE_KEY = "plexcord-timezones";

export function resolveUserTimezone(userId: string): string | null {
    const localTimezone = timezones[userId];
    const shouldUseDatabase =
        settings.store.useDatabase &&
        (settings.store.preferDatabaseOverLocal || !localTimezone);

    if (shouldUseDatabase) {
        return getTimezone(userId) ?? localTimezone;
    }
    return localTimezone;
}

export function getSystemTimezone(): string {
    return Intl.DateTimeFormat().resolvedOptions().timeZone;
}

const classes = findByPropsLazy("timestamp", "compact", "contentOnly");
const locale = findByPropsLazy("getLocale");

export const settings = definePluginSettings({
    showOwnTimezone: {
        label: () => t(plugin.timezones.option.showOwnTimezone.label),
        description: () => t(plugin.timezones.option.showOwnTimezone.description),
        type: OptionType.BOOLEAN,
        default: true
    },

    twentyFourHourTime: {
        label: () => t(plugin.timezones.option.twentyFourHourTime.label),
        description: () => t(plugin.timezones.option.twentyFourHourTime.description),
        type: OptionType.BOOLEAN,
        default: false
    },

    showTimezoneInfo: {
        label: () => t(plugin.timezones.option.showTimezoneInfo.label),
        description: () => t(plugin.timezones.option.showTimezoneInfo.description),
        type: OptionType.BOOLEAN,
        default: true
    },

    showMessageHeaderTime: {
        label: () => t(plugin.timezones.option.showMessageHeaderTime.label),
        description: () => t(plugin.timezones.option.showMessageHeaderTime.description),
        type: OptionType.BOOLEAN,
        default: true
    },

    showProfileTime: {
        label: () => t(plugin.timezones.option.showProfileTime.label),
        description: () => t(plugin.timezones.option.showProfileTime.description),
        type: OptionType.BOOLEAN,
        default: true
    },

    useDatabase: {
        label: () => t(plugin.timezones.option.useDatabase.label),
        description: () => t(plugin.timezones.option.useDatabase.description),
        type: OptionType.BOOLEAN,
        default: true
    },

    preferDatabaseOverLocal: {
        label: () => t(plugin.timezones.option.preferDatabaseOverLocal.label),
        description: () => t(plugin.timezones.option.preferDatabaseOverLocal.description),
        type: OptionType.BOOLEAN,
        default: true
    },

    databaseUrl: {
        label: () => t(plugin.timezones.option.databaseUrl.label),
        description: () => t(plugin.timezones.option.databaseUrl.description),
        type: OptionType.STRING,
        default: "https://timezone.creations.works"
    },

    setDatabaseTimezone: {
        label: () => t(plugin.timezones.option.setDatabaseTimezone.label),
        description: () => t(plugin.timezones.option.setDatabaseTimezone.description),
        type: OptionType.COMPONENT,
        component: () => (
            <Button onClick={() => {
                openModal(modalProps => <SetTimezoneModal userId={UserStore.getCurrentUser().id} modalProps={modalProps} database={true} />);
            }}>
                {t(plugin.timezones.option.setDatabaseTimezone.setTimezone)}
            </Button>
        )
    },

    resetDatabaseTimezone: {
        label: () => t(plugin.timezones.option.resetDatabaseTimezone.label),
        description: () => t(plugin.timezones.option.resetDatabaseTimezone.description),
        type: OptionType.COMPONENT,
        component: () => (
            <Button
                variant="dangerPrimary"
                onClick={async () => {
                    try {
                        await setUserDatabaseTimezone(UserStore.getCurrentUser().id, null);
                        await deleteTimezone();
                    } catch (error) {
                        console.error("Error resetting database timezone:", error);
                        showToast(t(plugin.timezones.option.resetDatabaseTimezone.failed), Toasts.Type.FAILURE);
                    }
                }}
            >
                {t(plugin.timezones.option.resetDatabaseTimezone.label)}
            </Button>
        )
    },

    askedTimezone: {
        label: () => t(plugin.timezones.option.askedTimezone.label),
        description: () => t(plugin.timezones.option.askedTimezone.description),
        type: OptionType.BOOLEAN,
        hidden: true,
        default: false
    }
});

function getTime(timezone: string, timestamp: string | number, props: Intl.DateTimeFormatOptions = {}) {
    const date = new Date(timestamp);
    const formatter = new Intl.DateTimeFormat(locale.getLocale() ?? "en-US", {
        hour12: !settings.store["24h Time"],
        timeZone: timezone,
        ...props
    });
    return formatter.format(date);
}

function getTimezoneAbbreviation(timezone: string, timestamp: string | number) {
    const date = new Date(timestamp);
    const formatter = new Intl.DateTimeFormat(locale.getLocale() ?? "en-US", {
        timeZone: timezone,
        timeZoneName: "short"
    });
    const parts = formatter.formatToParts(date);
    const timeZonePart = parts.find(part => part.type === "timeZoneName");
    return timeZonePart ? timeZonePart.value : "";
}

interface Props {
    userId: string;
    timestamp?: string;
    type: "message" | "profile";
}

const TimestampComponent = ErrorBoundary.wrap(({ userId, timestamp, type }: Props) => {
    const [currentTime, setCurrentTime] = useState(timestamp || Date.now());
    const [timezone, setTimezone] = useState<string | null>(null);

    useEffect(() => {
        setTimezone(resolveUserTimezone(userId));
    }, [userId, settings.store.useDatabase, settings.store.preferDatabaseOverLocal]);

    useEffect(() => {
        if (type !== "profile") return;

        setCurrentTime(Date.now());

        const now = new Date();
        const delay = (60 - now.getSeconds()) * 1000 + 1000 - now.getMilliseconds();
        const timer = setTimeout(() => {
            setCurrentTime(Date.now());
        }, delay);

        const interval = setInterval(() => {
            setCurrentTime(Date.now());
        }, 60000);

        return () => {
            clearTimeout(timer);
            clearInterval(interval);
        };
    }, [type]);

    if (!timezone) return null;

    const shortTime = getTime(timezone, currentTime, { hour: "numeric", minute: "numeric" });
    let displayTime = shortTime;
    let isLocal = false;

    if (settings.store.showTimezoneInfo) {
        const userTimezone = getSystemTimezone();
        if (timezone === userTimezone) {
            displayTime = "local";
            isLocal = true;
        } else {
            const timezoneInfo = getTimezoneAbbreviation(timezone, currentTime);
            displayTime = `${shortTime} ${timezoneInfo || timezone}`;
        }
    }

    const longTime = getTime(timezone, currentTime, {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric"
    });

    const tooltipText = isLocal ? `${longTime} ${t(plugin.timezones.button.yourLocalTimezone)}` : longTime;

    return (
        <Tooltip
            position="top"
            // @ts-ignore
            delay={750}
            allowOverflow={false}
            spacing={8}
            hideOnClick={true}
            tooltipClassName="timezone-tooltip"
            text={tooltipText}
        >
            {toolTipProps => (
                <span
                    {...toolTipProps}
                    className={`${type === "message" ? `timezone-message-item ${classes.timestamp}` : "timezone-profile-item"}${isLocal ? " timezone-local-text" : ""}`}
                >
                    {type === "message" ? `(${displayTime})` : displayTime}
                </span>
            )}
        </Tooltip>
    );
}, { noop: true });

const userContextMenuPatch: NavContextMenuPatchCallback = (children, { user }: { user: User; }) => {
    if (user?.id == null) return;

    const setTimezoneItem = (
        <Menu.MenuItem
            label={t(plugin.timezones.context.set)}
            id="set-timezone"
            action={() => openModal(modalProps => <SetTimezoneModal userId={user.id} modalProps={modalProps} />)}
        />
    );

    children.push(<Menu.MenuSeparator />, setTimezoneItem);
};

export default definePlugin({
    name: "Timezones",
    authors: [Devs.Aria, PcDevs.creations],
    description: () => t(plugin.timezones.description),
    contextMenus: {
        "user-context": userContextMenuPatch
    },

    patches: [
        // stolen from ViewIcons
        {
            find: 'backgroundColor:"COMPLETE"',
            replacement: {
                match: /(?<=backgroundImage.+?children:)!\i.{0,100}gifTag\}\)/,
                replace: "[$self.renderProfileTimezone(arguments[0]),$&]"
            }
        },
        {
            find: '"Message Username"',
            replacement: {
                match: /(?<=isVisibleOnlyOnHover.+?)id:.{1,11},timestamp.{1,50}}\),/,
                replace: "$&,$self.renderMessageTimezone(arguments[0]),"
            }
        }
    ],

    toolboxActions: () => ({
        [t(plugin.timezones.toolbox.set)]() {
            openModal(modalProps => <SetTimezoneModal userId={UserStore.getCurrentUser().id} modalProps={modalProps} database={true} />);
        },
        [t(plugin.timezones.toolbox.refresh)]: async () => {
            try {
                const good = await loadDatabaseTimezones();

                if (good) {
                    showToast(t(plugin.timezones.toast.refresh.successfully), Toasts.Type.SUCCESS);
                } else {
                    showToast(t(plugin.timezones.toast.refresh.failed), Toasts.Type.FAILURE);
                }
            }
            catch (error) {
                console.error("Failed to refresh timezone:", error);
                showToast(t(plugin.timezones.toast.refresh.failedTo), Toasts.Type.FAILURE);
            }
        }
    }),

    async start() {
        timezones = await DataStore.get<Record<string, string>>(DATASTORE_KEY) || {};

        if (settings.store.useDatabase) {
            await loadDatabaseTimezones();

            if (!settings.store.askedTimezone) {
                showToast(
                    "",
                    Toasts.Type.MESSAGE,
                    {
                        duration: 10000,
                        component: (
                            <Button
                                variant="positive"
                                onClick={() => {
                                    openModal(modalProps => <SetTimezoneModal userId={UserStore.getCurrentUser().id} modalProps={modalProps} database={true} />);
                                }}
                            >
                                {t(plugin.timezones.button.wantToSave)}
                            </Button>
                        ),
                        position: Toasts.Position.BOTTOM
                    }
                );
                settings.store.askedTimezone = true;
            }
        }
    },

    settings,
    getTime,

    renderProfileTimezone: (props?: { user?: User; }) => {
        if (!settings.store.showProfileTime || !props?.user?.id) return null;
        if (props.user.id === UserStore.getCurrentUser().id && !settings.store.showOwnTimezone) return null;

        return <TimestampComponent userId={props.user.id} type="profile" />;
    },

    renderMessageTimezone: (props?: { message?: Message; }) => {
        if (!settings.store.showMessageHeaderTime || !props?.message) return null;
        if (props.message.author.id === UserStore.getCurrentUser().id && !settings.store.showOwnTimezone) return null;

        return <TimestampComponent userId={props.message.author.id} timestamp={props.message.timestamp.toISOString()} type="message" />;
    }
});
