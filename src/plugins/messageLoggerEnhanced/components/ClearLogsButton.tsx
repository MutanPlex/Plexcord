/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2024 Vendicated and contributors
 * Copyright (c) 2026 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { plugin, t } from "@api/i18n";
import { Button } from "@components/Button";
import { Alerts, showToast, useState } from "@webpack/common";

import { clearMessagesIDB } from "../db";
import { Flogger } from "../index";

interface ClearLogsButtonProps {
    label?: string;
    onCleared?: () => void;
}

export function ClearLogsButton({ label = t(plugin.messageLoggerEnhanced.text.clearLogs), onCleared }: ClearLogsButtonProps) {
    const [loading, setLoading] = useState(false);
    return (
        <Button
            disabled={loading}
            variant="dangerPrimary"
            onClick={() => Alerts.show({
                title: t(plugin.messageLoggerEnhanced.alert.clearLogs.title),
                body: t(plugin.messageLoggerEnhanced.option.clearLogs.body),
                // @ts-ignore
                confirmVariant: "critical-primary",
                confirmText: t(plugin.messageLoggerEnhanced.alert.clearLogs.confirmText),
                cancelText: t(plugin.messageLoggerEnhanced.alert.clearLogs.cancel),
                onConfirm: async () => {
                    setLoading(true);
                    try {
                        await clearMessagesIDB();
                        onCleared?.();
                        showToast({ text: t(plugin.messageLoggerEnhanced.toast.clearedLogs), variant: "success" });
                    } catch (err) {
                        Flogger.error("Failed to clear logs", err);
                        showToast({ text: t(plugin.messageLoggerEnhanced.toast.failedToClearLogs), variant: "critical" });
                    } finally {
                        setLoading(false);
                    }
                },
            })}
        >
            {loading ? t(plugin.messageLoggerEnhanced.text.clearingLogs) : label}
        </Button>
    );
}
