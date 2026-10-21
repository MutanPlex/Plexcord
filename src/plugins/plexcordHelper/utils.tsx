/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2025 Vendicated and contributors
 * Copyright (c) 2026 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { plugin, plugin as pluginI18n, plugins as pluginsI18n, t } from "@api/i18n";
import { showNotice } from "@api/Notices";
import { getName, plugins, startDependenciesRecursive, startPlugin, stopPlugin } from "@api/PluginManager";
import { Settings } from "@api/Settings";
import { Alerts, showToast } from "@webpack/common";

function showErrorToast(message: string) {
    showToast({
        text: message,
        variant: "critical",
        position: "bottom"
    });
}

function restartPrompt(): Promise<boolean> {
    return new Promise(resolve => {
        Alerts.show({
            title: t(plugin.plexcordHelper.text.restartRequired),
            body: (
                <>
                    <p style={{ textAlign: "center" }}>
                        {t(plugin.plexcordHelper.text.somePluginsRequireA)}
                    </p>
                    <p style={{ textAlign: "center" }}>{t(plugin.plexcordHelper.text.wouldYouLikeTo)}</p>
                </>
            ),
            confirmText: t(plugin.plexcordHelper.text.restartNow),
            cancelText: t(plugin.plexcordHelper.text.later),
            onConfirm: () => resolve(true),
            onCancel: () => resolve(false),
        });
    });
}

export async function toggleEnabled(name: string) {
    let restartNeeded = false;
    function onRestartNeeded() {
        restartNeeded = true;
    }

    async function beforeReturn(settings: any, wasEnabled: boolean) {
        if (restartNeeded) {
            const confirmed = await restartPrompt();
            if (!confirmed) return false;

            settings.enabled = !wasEnabled;
            location.reload();
            return true;
        }

        return true;
    }

    const plugin = plugins[name];
    const settings = Settings.plugins[getName(plugin.name)];
    const isEnabled = () => settings.enabled ?? false;
    const wasEnabled = isEnabled();

    if (!wasEnabled) {
        const { restartNeeded, failures } = startDependenciesRecursive(plugin);
        if (failures.length) {
            console.error(`Failed to start dependencies for ${plugin.name}: ${failures.join(", ")}`);
            showNotice(t(pluginsI18n.restart.failed) + " " + failures.join(", "), t(pluginsI18n.restart.button.close), () => null);
            return false;
        } else if (restartNeeded) {
            settings.enabled = true;
            onRestartNeeded();
            return await beforeReturn(settings, wasEnabled);
        }
    }

    if (plugin.patches?.length) {
        onRestartNeeded();
        return await beforeReturn(settings, wasEnabled);
    }

    if (wasEnabled && !plugin.started) {
        settings.enabled = !wasEnabled;
        return await beforeReturn(settings, wasEnabled);
    }

    const result = wasEnabled ? stopPlugin(plugin) : startPlugin(plugin);

    if (!result) {
        settings.enabled = false;
        console.error(`Error while ${wasEnabled ? "stopping" : "starting"} plugin ${plugin.name}`);
        showErrorToast(wasEnabled
            ? t(pluginI18n.plexcordHelper.text.errorStopping, { plugin: plugin.name })
            : t(pluginI18n.plexcordHelper.text.errorStarting, { plugin: plugin.name }));
        return false;
    }

    settings.enabled = !wasEnabled;
    return await beforeReturn(settings, wasEnabled);
}

export function getWindowsName(release: string) {
    const build = parseInt(release.split(".")[2]);
    if (build >= 22000) return "Windows 11";
    if (build >= 10240) return "Windows 10";
    if (build >= 9200) return "Windows 8.1";
    if (build >= 7600) return "Windows 7";
    return `Windows (${release})`;
}

export function getMacOSName(release: string) {
    const major = parseInt(release.split(".")[0]);
    if (major === 25) return "MacOS 26 (Tahoe)";
    if (major === 24) return "MacOS 15 (Sequoia)";
    if (major === 23) return "MacOS 14 (Sonoma)";
    if (major === 22) return "MacOS 13 (Ventura)";
    if (major === 21) return "MacOS 12 (Monterey)";
    if (major === 20) return "MacOS 11 (Big Sur)";
    if (major === 19) return "MacOS 10.15 (Catalina)";
    return `MacOS (${release})`;
}

export function platformName() {
    if (typeof DiscordNative === "undefined") return navigator.platform;
    if (DiscordNative.process.platform === "win32") return `${getWindowsName(DiscordNative.os.release)}`;
    if (DiscordNative.process.platform === "darwin") return `${getMacOSName(DiscordNative.os.release)} (${DiscordNative.process.arch === "arm64" ? "Apple Silicon" : "Intel Silicon"})`;
    if (DiscordNative.process.platform === "linux") return `${navigator.platform} (${DiscordNative.os.release})`;
    return DiscordNative.process.platform;
}
