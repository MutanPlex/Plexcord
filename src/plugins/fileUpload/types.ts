/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2024 Vendicated and contributors
 * Copyright (c) 2026 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { plugin, t } from "@api/i18n";

export enum ServiceType {
    ZIPLINE = "zipline",
    NEST = "nest",
    EZHOST = "ezhost",
    ENCRYPTINGHOST = "encryptinghost",
    S3 = "s3",
    CATBOX = "catbox",
    ZEROX0 = "0x0",
    LITTERBOX = "litterbox",
    SHAREX = "sharex",
    GOFILE = "gofile",
    TMPFILES = "tmpfiles",
    BUZZHEAVIER = "buzzheavier",
    TEMPSH = "tempsh",
    FILEBIN = "filebin",
    PIXELVAULT = "pixelvault",
    PIXELDRAIN = "pixeldrain",
    WEBDAV = "webdav"
}

export const serviceLabels: Record<ServiceType, string> = {
    [ServiceType.ZIPLINE]: "Zipline",
    [ServiceType.NEST]: "Nest",
    [ServiceType.EZHOST]: "E-Z Host",
    [ServiceType.ENCRYPTINGHOST]: "Encrypting.host",
    get [ServiceType.S3]() { return t(plugin.fileUpload.text.s3Compatible); },
    [ServiceType.CATBOX]: "Catbox",
    [ServiceType.ZEROX0]: "0x0.st",
    [ServiceType.LITTERBOX]: "Litterbox",
    get [ServiceType.SHAREX]() { return t(plugin.fileUpload.text.sharexCustomUploader); },
    [ServiceType.GOFILE]: "GoFile",
    [ServiceType.TMPFILES]: "tmpfiles.org",
    [ServiceType.BUZZHEAVIER]: "buzzheavier.com",
    [ServiceType.TEMPSH]: "temp.sh",
    [ServiceType.FILEBIN]: "filebin.net",
    [ServiceType.PIXELVAULT]: "PixelVault",
    [ServiceType.PIXELDRAIN]: "PixelDrain",
    [ServiceType.WEBDAV]: "WebDAV"
};

export const fallbackServiceOrder: ServiceType[] = [
    ServiceType.ZIPLINE,
    ServiceType.EZHOST,
    ServiceType.NEST,
    ServiceType.ENCRYPTINGHOST,
    ServiceType.S3,
    ServiceType.CATBOX,
    ServiceType.ZEROX0,
    ServiceType.LITTERBOX,
    ServiceType.GOFILE,
    ServiceType.TMPFILES,
    ServiceType.BUZZHEAVIER,
    ServiceType.TEMPSH,
    ServiceType.FILEBIN,
    ServiceType.PIXELVAULT,
    ServiceType.PIXELDRAIN,
    ServiceType.WEBDAV,
    ServiceType.SHAREX
];

export interface UploadResponse {
    files: {
        id: string;
        type: string;
        url: string;
    }[];
}

export interface NestUploadResponse {
    fileURL: string;
}

export interface NativeUploadResult {
    success: boolean;
    url?: string;
    error?: string;
}

export interface ShareXUploaderConfig {
    Version?: string;
    Name?: string;
    DestinationType?: string;
    RequestMethod?: string;
    RequestURL?: string;
    Headers?: Record<string, string | number | boolean>;
    Body?: string;
    FileFormName?: string;
    Arguments?: Record<string, string | number | boolean>;
    URL?: string;
    ErrorMessage?: string;
}
