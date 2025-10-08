/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2024 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { t } from "@api/i18n";
import { definePluginSettings } from "@api/Settings";
import { OptionType } from "@utils/types";
import { showToast, Toasts } from "@webpack/common";

const settings = definePluginSettings({
    messageImages: {
        get label() {
            return t("plugin.imagePreview.option.messageImages.label");
        },
        get description() {
            return t("plugin.imagePreview.option.messageImages.description");
        },
        type: OptionType.BOOLEAN,
        default: true,
        restartNeeded: true,
    },
    messageAvatars: {
        get label() {
            return t("plugin.imagePreview.option.messageAvatars.label");
        },
        get description() {
            return t("plugin.imagePreview.option.messageAvatars.description");
        },
        type: OptionType.BOOLEAN,
        default: true,
        restartNeeded: true,
    },
    messageLinks: {
        get label() {
            return t("plugin.imagePreview.option.messageLinks.label");
        },
        get description() {
            return t("plugin.imagePreview.option.messageLinks.description");
        },
        type: OptionType.BOOLEAN,
        default: true,
        restartNeeded: true,
    },
    messageStickers: {
        get label() {
            return t("plugin.imagePreview.option.messageStickers.label");
        },
        get description() {
            return t("plugin.imagePreview.option.messageStickers.description");
        },
        type: OptionType.BOOLEAN,
        default: true,
        restartNeeded: true,
    },
    mouseOnlyMode: {
        get label() {
            return t("plugin.imagePreview.option.mouseOnlyMode.label");
        },
        get description() {
            return t("plugin.imagePreview.option.mouseOnlyMode.description");
        },
        type: OptionType.BOOLEAN,
        default: false
    },
    fixedImage: {
        get label() {
            return t("plugin.imagePreview.option.fixedImage.label");
        },
        get description() {
            return t("plugin.imagePreview.option.fixedImage.description");
        },
        type: OptionType.BOOLEAN,
        default: false
    },
    fileInformation: {
        get label() {
            return t("plugin.imagePreview.option.fileInformation.label");
        },
        get description() {
            return t("plugin.imagePreview.option.fileInformation.description");
        },
        type: OptionType.BOOLEAN,
        default: true
    },
    hoverDelay: {
        get label() {
            return t("plugin.imagePreview.option.hoverDelay.label");
        },
        get description() {
            return t("plugin.imagePreview.option.hoverDelay.description");
        },
        type: OptionType.SLIDER,
        default: 0.5,
        markers: [0, 1, 2, 3, 4, 5],
    },
    zoomFactor: {
        get label() {
            return t("plugin.imagePreview.option.zoomFactor.label");
        },
        get description() {
            return t("plugin.imagePreview.option.zoomFactor.description");
        },
        type: OptionType.SLIDER,
        default: 1.5,
        markers: [1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5],
    },
    defaultMaxSize: {
        get label() {
            return t("plugin.imagePreview.option.defaultMaxSize.label");
        },
        get description() {
            return t("plugin.imagePreview.option.defaultMaxSize.description");
        },
        type: OptionType.STRING,
        default: "0",
        onChange: (value: string) => {
            if (value === "0") return;

            if (!/^\d+x\d+$/.test(value)) {
                settings.store.defaultMaxSize = "0";
                showToast(t("plugin.imagePreview.toast.invalidFormat"), Toasts.Type.FAILURE);
            }
        }
    },
});

const mimeTypes = {
    jpg: "image/jpeg",
    jpeg: "image/jpeg",
    png: "image/png",
    apng: "image/apng",
    gif: "image/gif",
    webp: "image/webp",
    svg: "image/svg+xml",
    mp4: "video/mp4",
    webm: "video/webm",
    mov: "video/quicktime",
    lottie: "application/json",
};

function getMimeType(extension: string | undefined): [boolean, string] {
    if (!extension) return [false, ""];

    const lowerExt = extension.trim().toLowerCase();
    return [!!mimeTypes[lowerExt], mimeTypes[lowerExt] || ""];
}

function isLinkAnImage(url: string) {
    const extension = url.split(".").pop();
    const [isImage,] = getMimeType(extension);
    return isImage;
}

function stripDiscordParams(url: string) {
    let newUrl = url.replace(/([?&])(width|size|height|h|w)=[^&]+/g, "");

    newUrl = newUrl.replace(/([?&])quality=[^&]*/g, "$1quality=lossless");

    newUrl = newUrl.replace(/([?&])+$/, "")
        .replace(/\?&/, "?")
        .replace(/\?$/, "")
        .replace(/&{2,}/g, "&");

    if (!newUrl.includes("quality=lossless")) {
        newUrl += newUrl.includes("?") ? "&quality=lossless" : "?quality=lossless";
    }

    if (!newUrl.includes("?") && newUrl.includes("&")) {
        newUrl = newUrl.replace("&", "?");
    }

    return newUrl;
}

export { getMimeType, isLinkAnImage, settings, stripDiscordParams };
