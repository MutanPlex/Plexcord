/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2025 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { ChatBarButton, ChatBarButtonFactory } from "@api/ChatButtons";
import { plugin, t } from "@api/i18n";
import { useEffect, useState } from "@webpack/common";

import { CalendarIcon } from "./Icons";
import { openViewScheduledModal } from "./ViewScheduledModal";

export let isScheduleModeEnabled = false;

const stateUpdaters = new Set<(value: boolean) => void>();

export function setScheduleModeEnabled(value: boolean): void {
    isScheduleModeEnabled = value;
    stateUpdaters.forEach(updater => updater(value));
}

export const ScheduledMessagesButton: ChatBarButtonFactory = ({ isMainChat }) => {
    const [enabled, setEnabled] = useState(isScheduleModeEnabled);

    useEffect(() => {
        stateUpdaters.add(setEnabled);
        return () => { stateUpdaters.delete(setEnabled); };
    }, []);

    if (!isMainChat) return null;

    const toggleScheduleMode = () => {
        const newValue = !enabled;
        setScheduleModeEnabled(newValue);
    };

    const tooltip = enabled
        ? t(plugin.scheduledMessages.button.tooltipOn)
        : t(plugin.scheduledMessages.button.tooltipOff);

    return (
        <ChatBarButton
            tooltip={tooltip}
            onClick={toggleScheduleMode}
            onContextMenu={e => {
                e.preventDefault();
                openViewScheduledModal();
            }}
            buttonProps={{ "aria-haspopup": "dialog" }}
        >
            <CalendarIcon color={enabled ? "var(--status-positive)" : undefined} />
        </ChatBarButton>
    );
};
