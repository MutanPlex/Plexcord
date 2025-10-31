/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2025 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */


import { t } from "@api/i18n";
import { definePluginSettings } from "@api/Settings";
import { Link } from "@components/Link";
import { Activity, SelectOption } from "@plexcord/discord-types";
import { Devs } from "@utils/constants";
import { ModalAPI } from "@utils/modal";
import definePlugin, { OptionType } from "@utils/types";
import { findStoreLazy } from "@webpack";
import { PresenceStore, SettingsRouter, UserStore } from "@webpack/common";

const settings = definePluginSettings({
    richPresenceTagging: {
        get label() {
            return t("plugin.clipsEnhancements.option.richPresenceTagging.label");
        },
        get description() {
            return t("plugin.clipsEnhancements.option.richPresenceTagging.description");
        },
        type: OptionType.SELECT,
        get options() {
            return [
                { label: t("plugin.clipsEnhancements.option.richPresenceTagging.always"), value: "always" },
                { label: t("plugin.clipsEnhancements.option.richPresenceTagging.only"), value: "whenMatched", default: true },
                { label: t("plugin.clipsEnhancements.option.richPresenceTagging.never"), value: "never" },
            ];
        }
    },
    clipsLink: {
        get label() {
            return t("plugin.clipsEnhancements.option.clipsLink.label");
        },
        type: OptionType.COMPONENT,
        description: "",
        component: () => {
            return (
                <>
                    <Link
                        href={findStoreLazy("ExperimentStore").getUserExperimentBucket("2024-04_game_settings_merge") === 1 ? SettingsRouter.open("Settings Clips") : SettingsRouter.open("Settings Clips")}
                        onClick={() => {
                            ModalAPI.closeAllModals();
                        }}
                    >
                        {t("plugin.clipsEnhancements.option.clipsLink.link")}
                    </Link>
                </>
            );
        }
    },
});

export default definePlugin({
    name: "ClipsEnhancements",
    description: "Add more Clip FPS and duration options, plus RPC tagging!",
    authors: [Devs.niko],

    get displayDescription() {
        return t("plugin.clipsEnhancements.description");
    },

    settings,
    patches: [
        {
            find: "clips_recording_settings",
            replacement: [
                {
                    match: /\[\{.{0,25}\i.\i.FPS_15.{0,500}\}\]/,
                    replace: "$self.patchFramerates($&)"
                },
                {
                    match: /\[\{.{0,25}\i.\i.SECONDS_30.{0,500}\}\]/,
                    replace: "$self.patchTimeslots($&)"
                },
            ]
        },
        {
            find: "#{intl::CLIPS_UNKNOWN_SOURCE}",
            replacement: {
                match: /(applicationName:)(.{0,50})(,applicationId:)(\i)/,
                replace: "$1$2$3$self.getApplicationId($2)??$4"
            }
        }
    ],

    patchTimeslots(timeslots: SelectOption[]) {
        const newTimeslots = [...timeslots];
        const extraTimeslots = [3, 5, 7, 10];

        extraTimeslots.forEach(timeslot => newTimeslots.push({ value: timeslot * 60000, label: `${timeslot} ${t("plugin.clipsEnhancements.minutes")}` }));

        return newTimeslots;
    },

    patchFramerates(framerates: SelectOption[]) {
        const newFramerates = [...framerates];
        const extraFramerates = [45, 90, 120, 144, 165, 240];

        // Lower framerates than 15FPS have adverse affects on compression, 3 minute clips at 10FPS skyrocket the filesize to 200mb!!
        extraFramerates.forEach(framerate => newFramerates.push({ value: framerate, label: `${framerate}FPS` }));

        return newFramerates.toSorted();
    },

    getApplicationId(activityName: string) {
        if (settings.store.richPresenceTagging === "never") {
            return null;
        }

        const activities: Activity[] = PresenceStore.getActivities(UserStore.getCurrentUser().id);
        const validActivities = activities.filter(activity => activity.type === 0 && activity.application_id !== null);

        const splitName = activityName.split(" ");

        // Try to match activity by it's start and end
        const matchedActivities = validActivities.filter(activity => activity.name.endsWith(splitName.at(-1)!) || activity.name.startsWith(splitName.at(0)!));

        return (matchedActivities ?? (settings.store.richPresenceTagging === "whenMatched" ? null : validActivities))[0]?.application_id;
    }
});
