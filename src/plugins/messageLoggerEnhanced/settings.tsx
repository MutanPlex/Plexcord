/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2024 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { t } from "@api/i18n";
import { definePluginSettings } from "@api/Settings";
import { Button } from "@components/Button";
import ErrorBoundary from "@components/ErrorBoundary";
import { OptionType } from "@utils/types";
import { Alerts } from "@webpack/common";
import { Settings } from "Plexcord";

import { Native } from ".";
import { ImageCacheDir, LogsDir } from "./components/FolderSelectInput";
import { openLogModal } from "./components/LogsModal";
import { clearMessagesIDB } from "./db";
import { blockedExts } from "./list";
import { DEFAULT_IMAGE_CACHE_DIR } from "./utils/constants";
import { exportLogs, importLogs } from "./utils/settingsUtils";

export const settings = definePluginSettings({
    saveMessages: {
        get label() {
            return t("plugin.messageLoggerEnhanced.option.saveMessages.label");
        },
        get description() {
            return t("plugin.messageLoggerEnhanced.option.saveMessages.description");
        },
        default: true,
        type: OptionType.BOOLEAN,
    },

    saveImages: {
        get label() {
            return t("plugin.messageLoggerEnhanced.option.saveImages.label");
        },
        get description() {
            return t("plugin.messageLoggerEnhanced.option.saveImages.description");
        },
        type: OptionType.BOOLEAN,
        default: false
    },

    sortNewest: {
        get label() {
            return t("plugin.messageLoggerEnhanced.option.sortNewest.label");
        },
        get description() {
            return t("plugin.messageLoggerEnhanced.option.sortNewest.description");
        },
        default: true,
        type: OptionType.BOOLEAN
    },

    cacheMessagesFromServers: {
        get label() {
            return t("plugin.messageLoggerEnhanced.option.cacheMessagesFromServers.label");
        },
        get description() {
            return t("plugin.messageLoggerEnhanced.option.cacheMessagesFromServers.description");
        },
        default: false,
        type: OptionType.BOOLEAN
    },

    ignoreBots: {
        get label() {
            return t("plugin.messageLoggerEnhanced.option.ignoreBots.label");
        },
        get description() {
            return t("plugin.messageLoggerEnhanced.option.ignoreBots.description");
        },
        type: OptionType.BOOLEAN,
        default: false,
        onChange() {
            // we will be handling the ignoreBots now (enabled or not) so the original messageLogger shouldnt
            Settings.plugins.MessageLogger.ignoreBots = false;
        }
    },

    ignoreWebhooks: {
        get label() {
            return t("plugin.messageLoggerEnhanced.option.ignoreWebhooks.label");
        },
        get description() {
            return t("plugin.messageLoggerEnhanced.option.ignoreWebhooks.description");
        },
        type: OptionType.BOOLEAN,
        default: false,
    },

    ignoreSelf: {
        get label() {
            return t("plugin.messageLoggerEnhanced.option.ignoreSelf.label");
        },
        get description() {
            return t("plugin.messageLoggerEnhanced.option.ignoreSelf.description");
        },
        type: OptionType.BOOLEAN,
        default: false,
        onChange() {
            Settings.plugins.MessageLogger.ignoreSelf = false;
        }
    },

    ignoreMutedGuilds: {
        get label() {
            return t("plugin.messageLoggerEnhanced.option.ignoreMutedGuilds.label");
        },
        get description() {
            return t("plugin.messageLoggerEnhanced.option.ignoreMutedGuilds.description");
        },
        default: false,
        type: OptionType.BOOLEAN
    },

    ignoreMutedCategories: {
        get label() {
            return t("plugin.messageLoggerEnhanced.option.ignoreMutedCategories.label");
        },
        get description() {
            return t("plugin.messageLoggerEnhanced.option.ignoreMutedCategories.description");
        },
        default: false,
        type: OptionType.BOOLEAN
    },

    ignoreMutedChannels: {
        get label() {
            return t("plugin.messageLoggerEnhanced.option.ignoreMutedChannels.label");
        },
        get description() {
            return t("plugin.messageLoggerEnhanced.option.ignoreMutedChannels.description");
        },
        default: false,
        type: OptionType.BOOLEAN
    },

    alwaysLogDirectMessages: {
        get label() {
            return t("plugin.messageLoggerEnhanced.option.alwaysLogDirectMessages.label");
        },
        get description() {
            return t("plugin.messageLoggerEnhanced.option.alwaysLogDirectMessages.description");
        },
        default: true,
        type: OptionType.BOOLEAN
    },

    alwaysLogCurrentChannel: {
        get label() {
            return t("plugin.messageLoggerEnhanced.option.alwaysLogCurrentChannel.label");
        },
        get description() {
            return t("plugin.messageLoggerEnhanced.option.alwaysLogCurrentChannel.description");
        },
        default: true,
        type: OptionType.BOOLEAN
    },

    hideMessageFromMessageLoggers: {
        get label() {
            return t("plugin.messageLoggerEnhanced.option.hideMessageFromMessageLoggers.label");
        },
        get description() {
            return t("plugin.messageLoggerEnhanced.option.hideMessageFromMessageLoggers.description");
        },
        default: false,
        type: OptionType.BOOLEAN
    },

    ShowLogsButton: {
        get label() {
            return t("plugin.messageLoggerEnhanced.option.showLogsButton.label");
        },
        get description() {
            return t("plugin.messageLoggerEnhanced.option.showLogsButton.description");
        },
        default: true,
        type: OptionType.BOOLEAN,
        restartNeeded: true,
    },

    ShowWhereMessageIsFrom: {
        get label() {
            return t("plugin.messageLoggerEnhanced.option.showWhereMessageIsFrom.label");
        },
        get description() {
            return t("plugin.messageLoggerEnhanced.option.showWhereMessageIsFrom.description");
        },
        default: false,
        type: OptionType.BOOLEAN
    },

    messagesToDisplayAtOnceInLogs: {
        get label() {
            return t("plugin.messageLoggerEnhanced.option.messagesToDisplayAtOnceInLogs.label");
        },
        get description() {
            return t("plugin.messageLoggerEnhanced.option.messagesToDisplayAtOnceInLogs.description");
        },
        default: 100,
        type: OptionType.NUMBER
    },

    hideMessageFromMessageLoggersDeletedMessage: {
        get label() {
            return t("plugin.messageLoggerEnhanced.option.hideMessageFromMessageLoggersDeletedMessage.label");
        },
        get description() {
            return t("plugin.messageLoggerEnhanced.option.hideMessageFromMessageLoggersDeletedMessage.description");
        },
        default: "redacted eh",
        type: OptionType.STRING
    },

    messageLimit: {
        get label() {
            return t("plugin.messageLoggerEnhanced.option.messageLimit.label");
        },
        get description() {
            return t("plugin.messageLoggerEnhanced.option.messageLimit.description");
        },
        default: 200,
        type: OptionType.NUMBER
    },

    attachmentSizeLimitInMegabytes: {
        get label() {
            return t("plugin.messageLoggerEnhanced.option.attachmentSizeLimitInMegabytes.label");
        },
        get description() {
            return t("plugin.messageLoggerEnhanced.option.attachmentSizeLimitInMegabytes.description");
        },
        default: 12,
        type: OptionType.NUMBER
    },

    attachmentFileExtensions: {
        get label() {
            return t("plugin.messageLoggerEnhanced.option.attachmentFileExtensions.label");
        },
        get description() {
            return t("plugin.messageLoggerEnhanced.option.attachmentFileExtensions.description");
        },
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
        get label() {
            return t("plugin.messageLoggerEnhanced.option.cacheLimit.label");
        },
        get description() {
            return t("plugin.messageLoggerEnhanced.option.cacheLimit.description");
        },
        default: 1000,
        type: OptionType.NUMBER
    },

    whitelistedIds: {
        get label() {
            return t("plugin.messageLoggerEnhanced.option.whitelistedIds.label");
        },
        get description() {
            return t("plugin.messageLoggerEnhanced.option.whitelistedIds.description");
        },
        default: "",
        type: OptionType.STRING
    },

    blacklistedIds: {
        get label() {
            return t("plugin.messageLoggerEnhanced.option.blacklistedIds.label");
        },
        get description() {
            return t("plugin.messageLoggerEnhanced.option.blacklistedIds.description");
        },
        default: "",
        type: OptionType.STRING
    },

    imageCacheDir: {
        get label() {
            return t("plugin.messageLoggerEnhanced.option.imageCacheDir.label");
        },
        get description() {
            return t("plugin.messageLoggerEnhanced.option.imageCacheDir.description");
        },
        type: OptionType.COMPONENT,
        component: ErrorBoundary.wrap(ImageCacheDir) as any
    },

    logsDir: {
        get label() {
            return t("plugin.messageLoggerEnhanced.option.logsDir.label");
        },
        get description() {
            return t("plugin.messageLoggerEnhanced.option.logsDir.description");
        },
        type: OptionType.COMPONENT,
        component: ErrorBoundary.wrap(LogsDir) as any
    },

    importLogs: {
        get label() {
            return t("plugin.messageLoggerEnhanced.option.importLogs.label");
        },
        get description() {
            return t("plugin.messageLoggerEnhanced.option.importLogs.description");
        },
        type: OptionType.COMPONENT,
        component: () =>
            <Button onClick={importLogs}>
                {t("plugin.messageLoggerEnhanced.option.importLogs.label")}
            </Button>
    },

    exportLogs: {
        get label() {
            return t("plugin.messageLoggerEnhanced.option.exportLogs.label");
        },
        get description() {
            return t("plugin.messageLoggerEnhanced.option.exportLogs.description");
        },
        type: OptionType.COMPONENT,
        component: () =>
            <Button onClick={exportLogs}>
                {t("plugin.messageLoggerEnhanced.option.exportLogs.label")}
            </Button>
    },

    openLogs: {
        get label() {
            return t("plugin.messageLoggerEnhanced.option.openLogs.label");
        },
        get description() {
            return t("plugin.messageLoggerEnhanced.option.openLogs.description");
        },
        type: OptionType.COMPONENT,
        component: () =>
            <Button onClick={() => openLogModal()}>
                {t("plugin.messageLoggerEnhanced.option.openLogs.label")}
            </Button>
    },
    openImageCacheFolder: {
        get label() {
            return t("plugin.messageLoggerEnhanced.option.openImageCacheFolder.label");
        },
        get description() {
            return t("plugin.messageLoggerEnhanced.option.openImageCacheFolder.description");
        },
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
                {t("plugin.messageLoggerEnhanced.option.openImageCacheFolder.label")}
            </Button>
    },

    clearLogs: {
        get label() {
            return t("plugin.messageLoggerEnhanced.option.clearLogs.label");
        },
        get description() {
            return t("plugin.messageLoggerEnhanced.option.clearLogs.description");
        },
        type: OptionType.COMPONENT,
        component: () =>
            <Button
                variant="dangerPrimary"
                onClick={() => Alerts.show({
                    title: t("plugin.messageLoggerEnhanced.option.clearLogs.title"),
                    body: t("plugin.messageLoggerEnhanced.option.clearLogs.body"),
                    confirmColor: "dangerPrimary",
                    confirmText: t("plugin.messageLoggerEnhanced.option.clearLogs.confirmText"),
                    cancelText: t("plugin.messageLoggerEnhanced.option.clearLogs.cancelText"),
                    onConfirm: () => {
                        clearMessagesIDB();
                    },
                })}
            >
                {t("plugin.messageLoggerEnhanced.option.clearLogs.label")}
            </Button>
    },

});
