/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2025 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { plugin, t } from "@api/i18n";
import { classNameFactory } from "@utils/css";

import { ExtendedMessage } from "../types";
import { phantomMessageMap } from "../utils";
import { TimerIcon } from "./Icons";

const cl = classNameFactory("pc-scheduled-msg-");

export function MessageAccessory({ message }: { message: ExtendedMessage; }) {
    const data = phantomMessageMap.get(message?.id) ?? message?.scheduledMessageData;
    if (!data) return null;

    const { scheduledTime } = data;
    const timeLeft = scheduledTime - Date.now();

    let timeLeftStr = "";
    if (timeLeft > 0) {
        const mins = Math.floor(timeLeft / 60000);
        const hrs = Math.floor(mins / 60);
        const days = Math.floor(hrs / 24);

        timeLeftStr = days > 0 ? ` (${t(plugin.scheduledMessages.accessory.remaining.days, { days, hours: hrs % 24 })})`
            : hrs > 0 ? ` (${t(plugin.scheduledMessages.accessory.remaining.hours, { hours: hrs, minutes: mins % 60 })})`
                : ` (${t(plugin.scheduledMessages.accessory.remaining.minutes, { minutes: mins })})`;
    }

    return (
        <div className={cl("accessory")}>
            <TimerIcon width={14} height={14} />
            <span>{t(plugin.scheduledMessages.accessory.scheduledFor, { date: new Date(scheduledTime).toLocaleString(), timeLeft: timeLeftStr })}</span>
        </div>
    );
}
