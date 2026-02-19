/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2024 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { plugin, t } from "@api/i18n";
import { definePluginSettings } from "@api/Settings";
import { Button } from "@components/Button";
import ErrorBoundary from "@components/ErrorBoundary";
import { OptionType } from "@utils/types";
import { Alerts, useState } from "@webpack/common";
import { Settings } from "Plexcord";

import { Native } from ".";
import { ImageCacheDir, LogsDir } from "./components/FolderSelectInput";
import { openLogModal } from "./components/LogsModal";
import { clearMessagesIDB } from "./db";
import { blockedExts } from "./list";
import { DEFAULT_IMAGE_CACHE_DIR } from "./utils/constants";
import { exportLogs, importLogs } from "./utils/settingsUtils";

function ImportLogsButton() {
    const [loading, setLoading] = useState(false);

    return (
        <Button
            disabled={loading}
            onClick={async () => {
                setLoading(true);
                try {
                    await importLogs();
                } finally {
                    setLoading(false);
                }
            }}
        >
            {loading ? t(plugin.messageLoggerEnhanced.importing) : t(plugin.messageLoggerEnhanced.importLogs)}
        </Button>
    );
}

function ExportLogsButton() {
    const [loading, setLoading] = useState(false);

    return (
        <Button
            disabled={loading}
            onClick={async () => {
                setLoading(true);
                try {
                    await exportLogs();
                } finally {
                    setLoading(false);
                }
            }}
        >
            {loading ? t(plugin.messageLoggerEnhanced.exporting) : t(plugin.messageLoggerEnhanced.exportLogs)}
        </Button>
    );
}

export const settings = definePluginSettings({
    saveMessages: {
        label: () => t(plugin.messageLoggerEnhanced.option.saveMessages.label),
        description: () => t(plugin.messageLoggerEnhanced.option.saveMessages.description),
        default: true,
        type: OptionType.BOOLEAN,
    },

    saveImages: {
        label: () => t(plugin.messageLoggerEnhanced.option.saveImages.label),
        description: () => t(plugin.messageLoggerEnhanced.option.saveImages.description),
        type: OptionType.BOOLEAN,
        default: false
    },

    sortNewest: {
        label: () => t(plugin.messageLoggerEnhanced.option.sortNewest.label),
        description: () => t(plugin.messageLoggerEnhanced.option.sortNewest.description),
        default: true,
        type: OptionType.BOOLEAN
    },

    cacheMessagesFromServers: {
        label: () => t(plugin.messageLoggerEnhanced.option.cacheMessagesFromServers.label),
        description: () => t(plugin.messageLoggerEnhanced.option.cacheMessagesFromServers.description),
        default: false,
        type: OptionType.BOOLEAN
    },

    ignoreBots: {
        label: () => t(plugin.messageLoggerEnhanced.option.ignoreBots.label),
        description: () => t(plugin.messageLoggerEnhanced.option.ignoreBots.description),
        type: OptionType.BOOLEAN,
        default: false,
        onChange() {
            // we will be handling the ignoreBots now (enabled or not) so the original messageLogger shouldnt
            Settings.plugins.MessageLogger.ignoreBots = false;
        }
    },

    ignoreWebhooks: {
        label: () => t(plugin.messageLoggerEnhanced.option.ignoreWebhooks.label),
        description: () => t(plugin.messageLoggerEnhanced.option.ignoreWebhooks.description),
        type: OptionType.BOOLEAN,
        default: false,
    },

    ignoreSelf: {
        label: () => t(plugin.messageLoggerEnhanced.option.ignoreSelf.label),
        description: () => t(plugin.messageLoggerEnhanced.option.ignoreSelf.description),
        type: OptionType.BOOLEAN,
        default: false,
        onChange() {
            Settings.plugins.MessageLogger.ignoreSelf = false;
        }
    },

    ignoreMutedGuilds: {
        label: () => t(plugin.messageLoggerEnhanced.option.ignoreMutedGuilds.label),
        description: () => t(plugin.messageLoggerEnhanced.option.ignoreMutedGuilds.description),
        default: false,
        type: OptionType.BOOLEAN
    },

    ignoreMutedCategories: {
        label: () => t(plugin.messageLoggerEnhanced.option.ignoreMutedCategories.label),
        description: () => t(plugin.messageLoggerEnhanced.option.ignoreMutedCategories.description),
        default: false,
        type: OptionType.BOOLEAN
    },

    ignoreMutedChannels: {
        label: () => t(plugin.messageLoggerEnhanced.option.ignoreMutedChannels.label),
        description: () => t(plugin.messageLoggerEnhanced.option.ignoreMutedChannels.description),
        default: false,
        type: OptionType.BOOLEAN
    },

    alwaysLogDirectMessages: {
        label: () => t(plugin.messageLoggerEnhanced.option.alwaysLogDirectMessages.label),
        description: () => t(plugin.messageLoggerEnhanced.option.alwaysLogDirectMessages.description),
        default: true,
        type: OptionType.BOOLEAN
    },

    alwaysLogCurrentChannel: {
        label: () => t(plugin.messageLoggerEnhanced.option.alwaysLogCurrentChannel.label),
        description: () => t(plugin.messageLoggerEnhanced.option.alwaysLogCurrentChannel.description),
        default: true,
        type: OptionType.BOOLEAN
    },

    permanentlyRemoveLogByDefault: {
        label: () => t(plugin.messageLoggerEnhanced.option.permanentlyRemoveLogByDefault.label),
        description: () => t(plugin.messageLoggerEnhanced.option.permanentlyRemoveLogByDefault.description),
        default: false,
        type: OptionType.BOOLEAN
    },

    hideMessageFromMessageLoggers: {
        label: () => t(plugin.messageLoggerEnhanced.option.hideMessageFromMessageLoggers.label),
        description: () => t(plugin.messageLoggerEnhanced.option.hideMessageFromMessageLoggers.description),
        default: false,
        type: OptionType.BOOLEAN
    },

    showLogsButton: {
        label: () => t(plugin.messageLoggerEnhanced.option.showLogsButton.label),
        description: () => t(plugin.messageLoggerEnhanced.option.showLogsButton.description),
        default: true,
        type: OptionType.BOOLEAN,
        restartNeeded: true,
    },

    showWhereMessageIsFrom: {
        label: () => t(plugin.messageLoggerEnhanced.option.showWhereMessageIsFrom.label),
        description: () => t(plugin.messageLoggerEnhanced.option.showWhereMessageIsFrom.description),
        default: false,
        type: OptionType.BOOLEAN
    },

    messagesToDisplayAtOnceInLogs: {
        label: () => t(plugin.messageLoggerEnhanced.option.messagesToDisplayAtOnceInLogs.label),
        description: () => t(plugin.messageLoggerEnhanced.option.messagesToDisplayAtOnceInLogs.description),
        default: 100,
        type: OptionType.NUMBER
    },

    hideMessageFromMessageLoggersDeletedMessage: {
        label: () => t(plugin.messageLoggerEnhanced.option.hideMessageFromMessageLoggersDeletedMessage.label),
        description: () => t(plugin.messageLoggerEnhanced.option.hideMessageFromMessageLoggersDeletedMessage.description),
        default: "redacted eh",
        type: OptionType.STRING
    },

    messageLimit: {
        label: () => t(plugin.messageLoggerEnhanced.option.messageLimit.label),
        description: () => t(plugin.messageLoggerEnhanced.option.messageLimit.description),
        default: 200,
        type: OptionType.NUMBER
    },

    attachmentSizeLimitInMegabytes: {
        label: () => t(plugin.messageLoggerEnhanced.option.attachmentSizeLimitInMegabytes.label),
        description: () => t(plugin.messageLoggerEnhanced.option.attachmentSizeLimitInMegabytes.description),
        default: 12,
        type: OptionType.NUMBER
    },

    attachmentFileExtensions: {
        label: () => t(plugin.messageLoggerEnhanced.option.attachmentFileExtensions.label),
        description: () => t(plugin.messageLoggerEnhanced.option.attachmentFileExtensions.description),
        default: "png,jpg,jpeg,gif,webp,mp4,webm,mp3,ogg,wav",
        type: OptionType.STRING,
        onChange: (value: string) => {
            if (!value) return;
            const exts = value.split(",").map(ext => ext.trim().toLowerCase());

            const invalid = exts.filter(ext => blockedExts.includes(ext));
            if (invalid.length > 0) {
                console.warn("Rejected invalid file extensions:", invalid);
                return exts.filter(ext => !blockedExts.includes(ext)).join(",");
            }

            return exts.join(",");
        }
    },
    cacheLimit: {
        label: () => t(plugin.messageLoggerEnhanced.option.cacheLimit.label),
        description: () => t(plugin.messageLoggerEnhanced.option.cacheLimit.description),
        default: 1000,
        type: OptionType.NUMBER
    },

    timeBasedCleanupMinutes: {
        label: () => t(plugin.messageLoggerEnhanced.option.timeBasedCleanupMinutes.label),
        description: () => t(plugin.messageLoggerEnhanced.option.timeBasedCleanupMinutes.description),
        default: 0,
        type: OptionType.NUMBER,
    },

    preserveCurrentChannel: {
        label: () => t(plugin.messageLoggerEnhanced.option.preserveCurrentChannel.label),
        description: () => t(plugin.messageLoggerEnhanced.option.preserveCurrentChannel.description),
        default: true,
        type: OptionType.BOOLEAN,
    },

    whitelistedIds: {
        label: () => t(plugin.messageLoggerEnhanced.option.whitelistedIds.label),
        description: () => t(plugin.messageLoggerEnhanced.option.whitelistedIds.description),
        default: "",
        type: OptionType.STRING
    },

    blacklistedIds: {
        label: () => t(plugin.messageLoggerEnhanced.option.blacklistedIds.label),
        description: () => t(plugin.messageLoggerEnhanced.option.blacklistedIds.description),
        default: "",
        type: OptionType.STRING
    },

    imageCacheDir: {
        label: () => t(plugin.messageLoggerEnhanced.option.imageCacheDir.label),
        description: () => t(plugin.messageLoggerEnhanced.option.imageCacheDir.description),
        type: OptionType.COMPONENT,
        component: ErrorBoundary.wrap(ImageCacheDir) as any
    },

    logsDir: {
        label: () => t(plugin.messageLoggerEnhanced.option.logsDir.label),
        description: () => t(plugin.messageLoggerEnhanced.option.logsDir.description),
        type: OptionType.COMPONENT,
        component: ErrorBoundary.wrap(LogsDir) as any
    },

    importLogs: {
        label: () => t(plugin.messageLoggerEnhanced.option.importLogs.label),
        description: () => t(plugin.messageLoggerEnhanced.option.importLogs.description),
        type: OptionType.COMPONENT,

        component: ImportLogsButton
    },

    exportLogs: {
        label: () => t(plugin.messageLoggerEnhanced.option.exportLogs.label),
        description: () => t(plugin.messageLoggerEnhanced.option.exportLogs.description),
        type: OptionType.COMPONENT,
        component: ExportLogsButton
    },

    openLogs: {
        label: () => t(plugin.messageLoggerEnhanced.option.openLogs.label),
        description: () => t(plugin.messageLoggerEnhanced.option.openLogs.description),
        type: OptionType.COMPONENT,
        component: () =>
            <Button onClick={() => openLogModal()}>
                {t(plugin.messageLoggerEnhanced.option.openLogs.label)}
            </Button>
    },
    openImageCacheFolder: {
        label: () => t(plugin.messageLoggerEnhanced.option.openImageCacheFolder.label),
        description: () => t(plugin.messageLoggerEnhanced.option.openImageCacheFolder.description),
        type: OptionType.COMPONENT,
        component: () =>
            <Button
                disabled={
                    IS_WEB
                    || settings.store.imageCacheDir == null
                    || settings.store.imageCacheDir === DEFAULT_IMAGE_CACHE_DIR
                }
                onClick={() => Native.showItemInFolder(settings.store.imageCacheDir)}
            >
                {t(plugin.messageLoggerEnhanced.option.openImageCacheFolder.label)}
            </Button>
    },

    clearLogs: {
        label: () => t(plugin.messageLoggerEnhanced.option.clearLogs.label),
        description: () => t(plugin.messageLoggerEnhanced.option.clearLogs.description),
        type: OptionType.COMPONENT,
        component: () =>
            <Button
                variant="dangerPrimary"
                onClick={() => Alerts.show({
                    title: t(plugin.messageLoggerEnhanced.option.clearLogs.title),
                    body: t(plugin.messageLoggerEnhanced.option.clearLogs.body),
                    // @ts-expect-error not typed
                    confirmVariant: "critical-primary",
                    confirmText: t(plugin.messageLoggerEnhanced.option.clearLogs.confirmText),
                    cancelText: t(plugin.messageLoggerEnhanced.option.clearLogs.cancel),
                    onConfirm: async () => {
                        await clearMessagesIDB();
                    },
                })}
            >
                {t(plugin.messageLoggerEnhanced.option.clearLogs.label)}
            </Button>
    },

});
