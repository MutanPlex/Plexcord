/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2026 Vendicated and contributors
 * Copyright (c) 2026 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { plugin, t } from "@api/i18n";
import { Devs, PcDevs } from "@utils/constants";
import { Logger } from "@utils/Logger";
import definePlugin, { ReporterTestable } from "@utils/types";

import { migrateOldSettings } from "./migration";
import * as abs from "./services/audiobookshelf";
import * as gensokyoRadio from "./services/gensokyoRadio";
import * as jellyfin from "./services/jellyfin";
import * as navidrome from "./services/navidrome";
import * as statsfm from "./services/statsfm";
import * as tosu from "./services/tosu";
import { setOnServiceChange, settings, SettingsStore } from "./settings";
import { ServiceTab } from "./types";

type SettingsKey = keyof SettingsStore;

const logger = new Logger("RichPresence");

const services: Record<string, { start(): void; stop(): void; forceUpdate?(): void; }> = {
    [ServiceTab.AudioBookShelf]: abs,
    [ServiceTab.Tosu]: tosu,
    [ServiceTab.StatsFm]: statsfm,
    [ServiceTab.Jellyfin]: jellyfin,
    [ServiceTab.GensokyoRadio]: gensokyoRadio,
    [ServiceTab.Navidrome]: navidrome,
};

const enableKeys: Record<string, SettingsKey> = {
    [ServiceTab.AudioBookShelf]: "abs_enabled",
    [ServiceTab.Tosu]: "tosu_enabled",
    [ServiceTab.StatsFm]: "sfm_enabled",
    [ServiceTab.Jellyfin]: "jf_enabled",
    [ServiceTab.GensokyoRadio]: "gr_enabled",
    [ServiceTab.Navidrome]: "nd_enabled",
};

const activeServices = new Set<string>();

function syncServices() {
    const globalEnabled = settings.store.enabled;

    for (const [id, service] of Object.entries(services)) {
        const shouldRun =
            globalEnabled && !!settings.store[enableKeys[id]];
        const isRunning = activeServices.has(id);

        if (shouldRun && !isRunning) {
            logger.info(`Starting ${id} service`);
            service.start();
            activeServices.add(id);
        } else if (!shouldRun && isRunning) {
            logger.info(`Stopping ${id} service`);
            service.stop();
            activeServices.delete(id);
        } else if (shouldRun && isRunning && service.forceUpdate) {
            service.forceUpdate();
        }
    }
}

function stopAllServices() {
    for (const id of activeServices) {
        logger.info(`Stopping ${id} service`);
        services[id].stop();
    }
    activeServices.clear();
}

export default definePlugin({
    name: "RichPresence",
    description: () => t(plugin.richPresence.description),
    tags: ["activity"],
    authors: [
        PcDevs.vmohammad,
        Devs.AutumnVN,
        PcDevs.Crxa,
        Devs.SerStars,
        PcDevs.ZcraftElite,
        PcDevs.qouesm,
        Devs.RyanCaoDev,
        PcDevs.Prince527,
        PcDevs.creations,
        PcDevs.Star123451,
        PcDevs.MutanPlex
    ],
    reporterTestable: ReporterTestable.None,

    settings,

    start() {
        migrateOldSettings();
        syncServices();
        setOnServiceChange(syncServices);
    },

    stop() {
        stopAllServices();
        setOnServiceChange(null);
    },
});
