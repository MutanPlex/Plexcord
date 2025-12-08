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
import { classes } from "@utils/misc";
import { React, useEffect, useLayoutEffect, useRef, useState } from "@webpack/common";

import { NotificationData } from "./Notifications";

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
    index = 0,
    offsetY = 0,
    onHeightChange
}: NotificationData & { className?: string; index?: number; offsetY?: number; onHeightChange?: (height: number) => void; }) {
    const { timeout, position, opacity } = useSettings(["notifications.timeout", "notifications.position", "notifications.opacity"]).notifications;

    const [isHover, setIsHover] = useState(false);
    const [elapsed, setElapsed] = useState(0);
    const containerRef = useRef<HTMLButtonElement>(null);

    const start = useRef(Date.now());
    const pause = useRef<number | null>(null);

    useLayoutEffect(() => {
        if (containerRef.current && onHeightChange) {
            const height = containerRef.current.offsetHeight;
            onHeightChange(height);
        }
    }, [onHeightChange, body, richBody, image]);

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

    const getPositionStyle = () => {
        const gap = 10;
        const basePosition = position.includes("bottom") ? 16 : 48;
        const totalOffset = basePosition + offsetY + (gap * index);

        if (position === "bottom-right") return { bottom: `${totalOffset}px`, right: "1rem" };
        if (position === "bottom-left") return { bottom: `${totalOffset}px`, left: "1rem" };
        if (position === "top-left") return { top: `${totalOffset}px`, left: "1rem" };
        return { top: `${totalOffset}px`, right: "1rem" };
    };

    return (
        <button
            ref={containerRef}
            className={classes("pc-notification-root", className)}
            style={{
                ...getPositionStyle(),
                opacity: opacity / 100
            }}
            onClick={() => {
                onClick?.();
                if (dismissOnClick !== false)
                    onClose!();
            }}
            onContextMenu={e => {
                e.preventDefault();
                e.stopPropagation();
                onClose!();
            }}
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
        >
            <div className="pc-notification">
                {icon && <img className="pc-notification-icon" src={icon} alt="" />}
                <div className="pc-notification-content">
                    <div className="pc-notification-header">
                        <h2 className="pc-notification-title">{title}</h2>
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
                    </div>
                    {richBody ?? <p className="pc-notification-p">{body}</p>}
                </div>
            </div>
            {image && <img className="pc-notification-img" src={image} alt="" />}
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
