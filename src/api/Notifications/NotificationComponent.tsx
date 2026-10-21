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

import "./styles.css";

import { notifications, t } from "@api/i18n";
import { useSettings } from "@api/Settings";
import ErrorBoundary from "@components/ErrorBoundary";
import { Channel } from "@plexcord/discord-types";
import { classes } from "@utils/misc";
import { findComponentByCodeLazy } from "@webpack";
import { FluxDispatcher, GuildStore, IconUtils, React, useEffect, useRef, useState } from "@webpack/common";

import { NotificationData } from "./Notifications";

const MessageComponent = findComponentByCodeLazy("childrenExecutedCommand:", ".hideAccessories");

function renderContextHeader(channel: Channel): React.ReactNode {
    if (channel.isGroupDM()) {
        const icon = channel.icon
            ? IconUtils.getChannelIconURL?.({ id: channel.id, icon: channel.icon, size: 32 })
            : undefined;
        const rawName = channel.name?.trim() || channel.rawRecipients.slice(0, 3).map(e => e.username).join(", ");
        const name = rawName.length > 20 ? rawName.substring(0, 20) + "..." : rawName;

        return (
            <div className="pc-notification-context-header">
                {icon && <img className="pc-notification-context-header-icon" src={icon} alt="" />}
                <span className="pc-notification-context-header-name">{name}</span>
            </div>
        );
    }

    if (channel.guild_id) {
        const guild = GuildStore.getGuild(channel.guild_id);
        const icon = guild?.icon
            ? IconUtils.getGuildIconURL({ id: guild.id, icon: guild.icon, size: 32 })
            : undefined;

        return (
            <div className="pc-notification-context-header">
                {icon && <img className="pc-notification-context-header-icon" src={icon} alt="" />}
                <span className="pc-notification-context-header-name">
                    {guild?.name}
                    {channel.name && (
                        <>
                            {guild?.name && <span className="pc-notification-context-header-separator">{" › "}</span>}
                            <span className="pc-notification-context-header-channel">#{channel.name}</span>
                        </>
                    )}
                </span>
            </div>
        );
    }

    return null;
}

export default ErrorBoundary.wrap(function NotificationComponent({
    title,
    body,
    richBody,
    color,
    icon,
    onClick,
    onClose,
    image,
    permanent,
    className,
    dismissOnClick,
    message,
    mockedMessage,
    channel
}: NotificationData & { className?: string; }) {
    const { timeout, opacity } = useSettings(["notifications.timeout", "notifications.opacity"]).notifications;

    const [isHover, setIsHover] = useState(false);
    const [elapsed, setElapsed] = useState(0);

    const start = useRef(Date.now());
    const pause = useRef<number | null>(null);

    useEffect(() => {
        if (timeout === 0 || permanent) return;

        if (isHover) {
            if (pause.current === null) pause.current = Date.now();
            return;
        }

        if (pause.current !== null) {
            const pausedFor = Date.now() - pause.current;
            start.current += pausedFor;
            pause.current = null;
        }

        const intervalId = setInterval(() => {
            const elapsedNow = Date.now() - start.current;
            if (elapsedNow >= timeout) {
                onClose!();
            } else {
                setElapsed(elapsedNow);
            }
        }, 10);

        return () => clearInterval(intervalId);
    }, [timeout, isHover, permanent]);

    const timeoutProgress = elapsed / timeout;
    const isMessage = !!(message && mockedMessage && channel);

    return (
        <button
            className={classes("pc-notification-root", isMessage && "pc-notification-message", className)}
            style={{ opacity: opacity / 100 }}
            onClick={() => {
                onClick?.();
                if (dismissOnClick !== false)
                    onClose!();
            }}
            onContextMenu={e => {
                e.preventDefault();
                e.stopPropagation();

                // Also marks the message as read.
                if (isMessage) {
                    FluxDispatcher.dispatch({
                        type: "BULK_ACK",
                        context: "APP",
                        channels: [{
                            channelId: channel!.id,
                            messageId: message!.id,
                            readStateType: 0
                        }]
                    });
                }

                onClose!();
            }}
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
        >
            <button
                className="pc-notification-close-btn"
                onClick={e => {
                    e.preventDefault();
                    e.stopPropagation();
                    onClose!();
                }}
            >
                <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    role="img"
                    aria-labelledby="pc-notification-dismiss-title"
                >
                    <title id="pc-notification-dismiss-title">{t(notifications.dismiss)}</title>
                    <path fill="currentColor" d="M18.4 4L12 10.4L5.6 4L4 5.6L10.4 12L4 18.4L5.6 20L12 13.6L18.4 20L20 18.4L13.6 12L20 5.6L18.4 4Z" />
                </svg>
            </button>
            {isMessage ? (
                <div className="pc-notification-message-content">
                    {renderContextHeader(channel!)}
                    <MessageComponent
                        id={`pc-notification-mock-${message!.id}`}
                        message={mockedMessage}
                        channel={channel}
                        subscribeToComponentDispatch={false}
                    />
                </div>
            ) : (
                <>
                    <div className="pc-notification">
                        {icon && <img className="pc-notification-icon" src={icon} alt="" />}
                        <div className="pc-notification-content">
                            <div className="pc-notification-header">
                                <h2 className="pc-notification-title">{title}</h2>
                            </div>
                            {richBody ?? <p className="pc-notification-p">{body}</p>}
                        </div>
                    </div>
                    {image && <img className="pc-notification-img" src={image} alt="" />}
                </>
            )}
            {timeout !== 0 && !permanent && (
                <div
                    className="pc-notification-progressbar"
                    style={{ width: `${(1 - timeoutProgress) * 100}%`, backgroundColor: color || "var(--brand-500)" }}
                />
            )}
        </button>
    );
}, {
    onError: ({ props }) => props.onClose!()
});
