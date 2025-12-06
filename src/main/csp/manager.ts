/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2025 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { NativeSettings } from "@main/settings";
import { csp, t } from "@main/utils/i18n";
import { IpcEvents } from "@shared/IpcEvents";
import { app, dialog, ipcMain, IpcMainInvokeEvent } from "electron";

import { CspPolicies, ImageAndCssSrc } from ".";

export type CspRequestResult = "invalid" | "cancelled" | "unchecked" | "ok" | "conflict";

export function registerCspIpcHandlers() {
    ipcMain.handle(IpcEvents.CSP_REMOVE_OVERRIDE, removeCspRule);
    ipcMain.handle(IpcEvents.CSP_REQUEST_ADD_OVERRIDE, addCspRule);
    ipcMain.handle(IpcEvents.CSP_IS_DOMAIN_ALLOWED, isDomainAllowed);
}

function validate(url: string, directives: string[]) {
    try {
        const { host } = new URL(url);

        if (/[;'"\\]/.test(host)) return false;
    } catch {
        return false;
    }

    if (directives.length === 0) return false;
    if (directives.some(d => !ImageAndCssSrc.includes(d))) return false;

    return true;
}

function getMessage(url: string, directives: string[], callerName: string) {
    const domain = new URL(url).host;

    const message = t(csp.wants.caller, { callerName, domain });

    const appName = app.getName().toLowerCase().includes("discord") ? "Discord" : "Plextron";

    let detail =
        `${t(csp.wants.detail, { domain })}\n\n` +
        t(csp.wants.restart, { appName });

    if (directives.length === 1 && directives[0] === "connect-src") {
        return { message, detail };
    }

    const contentTypes = directives
        .filter(type => type !== "connect-src")
        .map(type => {
            switch (type) {
                case "img-src":
                    return t(csp.wants.type.images);
                case "style-src":
                    return t(csp.wants.type.styles);
                case "font-src":
                    return t(csp.wants.type.fonts);
                default:
                    throw new Error(`Illegal CSP directive: ${type}`);
            }
        })
        .sort()
        .join(", ");

    detail = `${t(csp.wants.content, { domain })}:\n${contentTypes}\n\n${detail}`;

    return { message, detail };
}

async function addCspRule(_: IpcMainInvokeEvent, url: string, directives: string[], callerName: string): Promise<CspRequestResult> {
    if (!validate(url, directives)) {
        return "invalid";
    }

    const domain = new URL(url).host;

    if (domain in NativeSettings.store.customCspRules) {
        return "conflict";
    }

    const { checkboxChecked, response } = await dialog.showMessageBox({
        ...getMessage(url, directives, callerName),
        type: callerName ? "info" : "warning",
        title: "Plexcord " + t(csp.wants.title),
        buttons: [t(csp.wants.button.cancel), t(csp.wants.button.allow)],
        defaultId: 0,
        cancelId: 0,
        checkboxLabel: t(csp.wants.understand, { domain }),
        checkboxChecked: false,
    });

    if (response !== 1) {
        return "cancelled";
    }

    if (!checkboxChecked) {
        return "unchecked";
    }

    NativeSettings.store.customCspRules[domain] = directives;
    return "ok";
}

function removeCspRule(_: IpcMainInvokeEvent, domain: string) {
    if (domain in NativeSettings.store.customCspRules) {
        delete NativeSettings.store.customCspRules[domain];
        return true;
    }

    return false;
}

function isDomainAllowed(_: IpcMainInvokeEvent, url: string, directives: string[]) {
    try {
        const domain = new URL(url).host;

        const ruleForDomain = CspPolicies[domain] ?? NativeSettings.store.customCspRules[domain];
        if (!ruleForDomain) return false;

        return directives.every(d => ruleForDomain.includes(d));
    } catch (e) {
        return false;
    }
}
