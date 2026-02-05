/*
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

import { plugin, t } from "@api/i18n";
import SettingsPlugin, { settingsSectionMap } from "@plugins/_core/settings";
import { Devs } from "@utils/constants";
import definePlugin from "@utils/types";

import StartupTimingPage from "./StartupTimingPage";

export const ClockIcon = (props?: any) => {
    return (

        <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            width="20"
            height="20"
            fill="currentColor"
            {...props}
        >
            <path fillRule="evenodd" d="M12 23a11 11 0 1 0 0-22 11 11 0 0 0 0 22Zm1-18a1 1 0 1 0-2 0v7c0 .27.1.52.3.7l3 3a1 1 0 0 0 1.4-1.4L13 11.58V5Z" clipRule="evenodd"></path>
        </svg>
    );
};

export default definePlugin({
    name: "StartupTimings",
    description: () => t(plugin.startupTimings.description),
    authors: [Devs.Megu],

    start() {
        const { customEntries, customSections } = SettingsPlugin;
        customEntries.push({
            key: "plexcord_startup_timings",
            title: t(plugin.startupTimings.modal.title),
            Component: StartupTimingPage,
            Icon: ClockIcon
        });
        customSections.push(() => ({
            section: "PlexcordStartupTimings",
            label: t(plugin.startupTimings.modal.title),
            searchableTitles: [t(plugin.startupTimings.modal.title)],
            element: StartupTimingPage,
            id: "PlexcordStartupTimings",
        }));

        settingsSectionMap.push(["PlexcordStartupTimings", "plexcord_startup_timings"]);
    },
    stop() {
        const { customEntries, customSections } = SettingsPlugin;
        const entryIdx = customEntries.findIndex(e => e.key === "plexcord_startup_timings");
        if (entryIdx !== -1) customEntries.splice(entryIdx, 1);
        const section = customSections.findIndex(section => section({} as any).id === "PlexcordStartupTimings");
        if (section !== -1) customSections.splice(section, 1);
        const map = settingsSectionMap.findIndex(entry => entry[1] === "plexcord_startup_timings");
        if (map !== -1) customEntries.splice(map, 1);
    },
});
