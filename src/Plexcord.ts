/*!
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2022 Vendicated and contributors
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

// DO NOT REMOVE UNLESS YOU WISH TO FACE THE WRATH OF THE CIRCULAR DEPENDENCY DEMON!!!!!!!
import "~plugins";

import { i18n, t } from "./api/i18n";

export * as Api from "./api";
export * as Plugins from "./api/PluginManager";
export * as QuickCss from "./api/Themes";
export * as Components from "./components";
export * as Util from "./utils";
export * as Updater from "./utils/updater";
export * as Webpack from "./webpack";
export * as WebpackPatcher from "./webpack/patchWebpack";
export { PlainSettings, Settings };

import { addPlexcordUiStyles } from "@components/css";
import { openUpdaterModal } from "@components/settings/tabs/updater";
import { debounce } from "@shared/debounce";
import { IS_WINDOWS } from "@utils/constants";
import { createAndAppendStyle } from "@utils/css";
import { StartAt } from "@utils/types";

import { get as dsGet } from "./api/DataStore";
import { LocaleLoader } from "./api/LocaleLoader";
import { NotificationData, showNotification } from "./api/Notifications";
import { initPluginManager, PMLogger, startAllPlugins } from "./api/PluginManager";
import { PlainSettings, Settings, SettingsStore } from "./api/Settings";
import { getCloudSettings, putCloudSettings } from "./api/SettingsSync/cloudSync";
import { localStorage } from "./utils/localStorage";
import { relaunch } from "./utils/native";
import { checkForUpdates, update, UpdateLogger } from "./utils/updater";
import { onceReady } from "./webpack";
import { SettingsRouter } from "./webpack/common";
import { patches } from "./webpack/patchWebpack";

if (IS_REPORTER) {
    require("./debug/runReporter");
}

async function syncSettings() {
    // Check if cloud auth exists for current user before attempting sync
    const hasCloudAuth = await dsGet("Plexcord_cloudSecret");
    if (!hasCloudAuth) {
        if (Settings.cloud.authenticated) {
            // User switched to an account that isn't connected to cloud
            showNotification({
                title: t("cloud.settings"),
                body: t("cloud.error.connect"),
                color: "var(--yellow-360)",
                onClick: () => SettingsRouter.open("PlexcordCloud")
            });
            // Disable cloud sync globally
            Settings.cloud.authenticated = false;
        }
        return;
    }

    // pre-check for local shared settings
    if (
        Settings.cloud.authenticated &&
        !hasCloudAuth // this has been enabled due to local settings share or some other bug
    ) {
        // show a notification letting them know and tell them how to fix it
        showNotification({
            title: t("cloud.notification.title"),
            body: t("cloud.reauth"),
            color: "var(--yellow-360)",
            onClick: () => SettingsRouter.open("PlexcordCloud")
        });
        return;
    }

    if (
        Settings.cloud.settingsSync && // if it's enabled
        Settings.cloud.authenticated // if cloud integrations are enabled
    ) {
        if (localStorage.Plexcord_settingsDirty) {
            await putCloudSettings();
            delete localStorage.Plexcord_settingsDirty;
        } else if (await getCloudSettings(false)) {
            // if we synchronized something (false means no sync)
            // we show a notification here instead of allowing getCloudSettings() to show one to declutter the amount of
            // potential notifications that might occur. getCloudSettings() will always send a notification regardless if
            // there was an error to notify the user, but besides that we only want to show one notification instead of all
            // of the possible ones it has (such as when your settings are newer).
            showNotification({
                title: t("cloud.settings"),
                body: t("cloud.updated"),
                color: "var(--green-360)",
                onClick: relaunch
            });
        }
    }
    const saveSettingsOnFrequentAction = debounce(async () => {
        if (Settings.cloud.settingsSync && Settings.cloud.authenticated) {
            await putCloudSettings();
            delete localStorage.Plexcord_settingsDirty;
        }
    }, 60_000);

    SettingsStore.addGlobalChangeListener(() => {
        localStorage.Plexcord_settingsDirty = true;
        saveSettingsOnFrequentAction();
    });
}

let notifiedForUpdatesThisSession = false;

async function runUpdateCheck() {
    const notify = (data: NotificationData) => {
        if (notifiedForUpdatesThisSession) return;
        notifiedForUpdatesThisSession = true;

        setTimeout(() => showNotification({
            permanent: true,
            noPersist: true,
            ...data
        }), 10_000);
    };

    try {
        const isOutdated = await checkForUpdates();
        if (!isOutdated) return;

        if (Settings.autoUpdate) {
            await update();
            if (Settings.autoUpdateNotification) {
                notify({
                    title: "Plexcord " + t("updater.updated"),
                    body: t("updater.restart"),
                    onClick: relaunch
                });
            }
            return;
        }

        notify({
            title: t("updater.updateAvailable"),
            body: t("updater.click"),
            onClick: openUpdaterModal!
        });
    } catch (err) {
        UpdateLogger.error("Failed to check for updates", err);
    }
}

async function init() {
    await onceReady;
    startAllPlugins(StartAt.WebpackReady);

    try {
        await LocaleLoader.initialize();
    } catch (error) {
        console.error("Failed to initialize i18n system:", error);
    }

    syncSettings();

    if (!IS_WEB && !IS_UPDATER_DISABLED) {
        runUpdateCheck();

        // this tends to get really annoying, so only do this if the user has auto-update without notification enabled
        if (Settings.autoUpdate && !Settings.autoUpdateNotification) {
            setInterval(runUpdateCheck, 1000 * 60 * 30); // 30 minutes
        }
    }

    if (IS_DEV) {
        const pendingPatches = patches.filter(p => !p.all && p.predicate?.() !== false);
        if (pendingPatches.length)
            PMLogger.warn(
                "Webpack has finished initialising, but some patches haven't been applied yet.",
                "This might be expected since some Modules are lazy loaded, but please verify",
                "that all plugins are working as intended.",
                "You are seeing this warning because this is a Development build of Plexcord.",
                "\nThe following patches have not been applied:",
                "\n\n" + pendingPatches.map(p => `${p.plugin}: ${p.find}`).join("\n")
            );
    }
}

initPluginManager();
startAllPlugins(StartAt.Init);
init();

(async () => {
    try {
        await i18n.initializeDiscordFeatures();
    } catch (error) {
        console.error("Failed to initialize Discord i18n features:", error);
    }
})();

document.addEventListener("DOMContentLoaded", () => {
    addPlexcordUiStyles();

    startAllPlugins(StartAt.DOMContentLoaded);

    if (IS_DISCORD_DESKTOP && Settings.winNativeTitleBar && IS_WINDOWS) {
        createAndAppendStyle("plexcord-native-titlebar-style").textContent = "[class*=titleBar]{display: none!important}";
    }
}, { once: true });
