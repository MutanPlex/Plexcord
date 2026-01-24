/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2025 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { plugin, t } from "@api/i18n";
import { definePluginSettings, migratePluginSettings } from "@api/Settings";
import { Button } from "@components/Button";
import { Activity } from "@plexcord/discord-types";
import { Devs } from "@utils/constants";
import { getIntlMessage } from "@utils/index";
import definePlugin, { OptionType } from "@utils/types";
import { openUserSettingsPanel, PresenceStore, UserStore } from "@webpack/common";

const extraTimeslots = [3, 4, 5, 6, 7, 10, 15, 20, 25, 30];
const extraFramerates = [45, 90, 120, 144, 165, 240];

const settings = definePluginSettings({
    richPresenceTagging: {
        label: () => t(plugin.clipsEnhancements.option.richPresenceTagging.label),
        description: () => t(plugin.clipsEnhancements.option.richPresenceTagging.description),
        type: OptionType.SELECT,
        options: [
            { label: () => t(plugin.clipsEnhancements.option.richPresenceTagging.always), value: "always" },
            { label: () => t(plugin.clipsEnhancements.option.richPresenceTagging.only), value: "whenMatched", default: true },
            { label: () => t(plugin.clipsEnhancements.option.richPresenceTagging.never), value: "never" },
        ]
    },
    enableScreenshotKeybind: {
        label: () => t(plugin.clipsEnhancements.option.enableScreenshotKeybind.label),
        description: () => t(plugin.clipsEnhancements.option.enableScreenshotKeybind.description),
        type: OptionType.BOOLEAN,
        default: true,
        restartNeeded: true
    },
    enableVoiceOnlyClips: {
        label: () => t(plugin.clipsEnhancements.option.enableVoiceOnlyClips.label),
        description: () => t(plugin.clipsEnhancements.option.enableVoiceOnlyClips.description),
        type: OptionType.BOOLEAN,
        default: true,
        restartNeeded: true
    },
    enableAdvancedSignals: {
        label: () => t(plugin.clipsEnhancements.option.enableAdvancedSignals.label),
        description: () => t(plugin.clipsEnhancements.option.enableAdvancedSignals.description),
        type: OptionType.BOOLEAN,
        default: true,
        restartNeeded: true
    },
    clipsLink: {
        label: () => t(plugin.clipsEnhancements.option.clipsLink.label),
        type: OptionType.COMPONENT,
        description: "",
        component: () => {
            return (
                <>
                    <Button
                        onClick={() => {
                            openUserSettingsPanel("clips");
                        }}
                    >
                        {t(plugin.clipsEnhancements.option.clipsLink.link)}
                    </Button>
                </>
            );
        }
    },
});

migratePluginSettings("ClipsEnhancements", "TimelessClips");
export default definePlugin({
    name: "ClipsEnhancements",
    description: () => t(plugin.clipsEnhancements.description),
    authors: [Devs.niko],

    settings,
    patches: [
        {
            find: "#{intl::CLIPS_UNKNOWN_SOURCE}",
            replacement: {
                match: /(applicationName:)(.{0,50})(,applicationId:)(\i)/,
                replace: "$1$2$3$self.getApplicationId($2)??$4"
            }
        },
        {
            find: ".CLIPS_FRAME_RATE,{",
            replacement: {
                match: /\[\{.{0,25}\i.\i.FPS_15.{0,500}\}\]/,
                replace: "$self.patchFramerates($&)"
            }
        },
        {
            find: ".CLIPS_LENGTH,{",
            replacement: {
                match: /\[\{.{0,25}\i.\i.SECONDS_30.{0,500}\}\]/,
                replace: "$self.patchTimeslots($&)"
            }
        },
        // enables clips
        {
            find: "2022-11_clips_experiment",
            replacement: {
                match: /defaultConfig:\{enableClips:!\d,ignorePlatformRestriction:!\d,showClipsHeaderEntrypoint:!\d,enableScreenshotKeybind:!\d,enableVoiceOnlyClips:!\d,enableAdvancedSignals:!\d\}/,
                replace: "defaultConfig:{enableClips:!0,ignorePlatformRestriction:!0,showClipsHeaderEntrypoint:!0,enableScreenshotKeybind:$self.settings.store.enableScreenshotKeybind,enableVoiceOnlyClips:$self.settings.store.enableVoiceOnlyClips,enableAdvancedSignals:$self.settings.store.enableAdvancedSignals}"
            }
        },
        {
            find: "2023-10_viewer_clipping",
            replacement: {
                match: /defaultConfig:\{enableViewerClipping:!\d,ignoreSenderPreference:!\d\}/,
                replace: "defaultConfig:{enableViewerClipping:!0,ignoreSenderPreference:!0}"
            }
        }
    ],

    patchTimeslots(timeslots) {
        const newTimeslots = [...timeslots];

        extraTimeslots.forEach(timeslot => newTimeslots.push({
            id: `${timeslot}min`,
            value: timeslot * 60000,
            label: getIntlMessage("CLIPS_LENGTH_MINUTES", {
                count: timeslot
            })
        }));

        return newTimeslots.toSorted();
    },

    patchFramerates(framerates) {
        const newFramerates = [...framerates];

        // Lower framerates than 15FPS have adverse affects on compression, 3 minute clips at 10FPS skyrocket the filesize to 200mb!!
        extraFramerates.forEach(framerate => newFramerates.push({
            id: `${framerate}fps`,
            value: framerate,
            label: getIntlMessage("SCREENSHARE_FPS_ABBREVIATED", {
                count: framerate
            })
        }));

        return newFramerates.toSorted();
    },

    getApplicationId(activityName: string) {
        if (settings.store.richPresenceTagging === "never") return null;

        const activities: Activity[] = PresenceStore.getActivities(UserStore.getCurrentUser().id);
        const validActivities = activities.filter(activity => activity.type === 0 && activity.application_id !== null);

        const splitName = activityName.split(" ");

        // Try to match activity by it's start and end
        const matchedActivities = validActivities.filter(activity => activity.name.endsWith(splitName.at(-1)!) || activity.name.startsWith(splitName.at(0)!));

        if (matchedActivities.length > 0) {
            return matchedActivities[0].application_id;
        }

        if (settings.store.richPresenceTagging !== "whenMatched") {
            return validActivities[0]?.application_id ?? null;
        }

        return null;
    },
});
