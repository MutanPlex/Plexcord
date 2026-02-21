/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2024 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { plugin, t } from "@api/i18n";
import { definePluginSettings } from "@api/Settings";
import { Paragraph } from "@components/Paragraph";
import { Activity, ActivityAssets, ActivityButton } from "@plexcord/discord-types";
import { ActivityFlags, ActivityStatusDisplayType, ActivityType } from "@plexcord/discord-types/enums";
import { Devs, IS_MAC } from "@utils/constants";
import definePlugin, { OptionType, PluginNative, ReporterTestable } from "@utils/types";
import { ApplicationAssetUtils, FluxDispatcher } from "@webpack/common";

const Native = PlexcordNative.pluginHelpers.AppleMusicRichPresence as PluginNative<typeof import("./native")>;

export interface TrackData {
    name: string;
    album?: string;
    artist?: string;

    appleMusicLink?: string;
    songLink?: string;

    albumArtwork?: string;
    artistArtwork?: string;

    playerPosition?: number;
    duration?: number;
}

const enum AssetImageType {
    Album = "Album",
    Artist = "Artist",
    Disabled = "Disabled"
}

const applicationId = "1239490006054207550";

let updateInterval: NodeJS.Timeout | undefined;

function setActivity(activity: Activity | null) {
    FluxDispatcher.dispatch({
        type: "LOCAL_ACTIVITY_UPDATE",
        activity,
        socketId: "AppleMusic",
    });
}

const settings = definePluginSettings({
    activityType: {
        label: () => t(plugin.appleMusic.option.activityType.label),
        description: () => t(plugin.appleMusic.option.activityType.description),
        type: OptionType.SELECT,
        options: [
            { label: () => t(plugin.appleMusic.option.activityType.playing), value: ActivityType.PLAYING, default: true },
            { label: () => t(plugin.appleMusic.option.activityType.listening), value: ActivityType.LISTENING }
        ],
    },
    statusDisplayType: {
        label: () => t(plugin.appleMusic.option.statusDisplayType.label),
        description: () => t(plugin.appleMusic.option.statusDisplayType.description),
        type: OptionType.SELECT,
        options: [
            {
                label: () => t(plugin.appleMusic.option.statusDisplayType.off),
                value: "off",
                default: true
            },
            {
                label: () => t(plugin.appleMusic.option.statusDisplayType.artist),
                value: "artist"
            },
            {
                label: () => t(plugin.appleMusic.option.statusDisplayType.track),
                value: "track"
            }
        ]
    },
    refreshInterval: {
        label: () => t(plugin.appleMusic.option.refreshInterval.label),
        description: () => t(plugin.appleMusic.option.refreshInterval.description),
        type: OptionType.SLIDER,
        markers: [1, 2, 2.5, 3, 5, 10, 15],
        default: 5,
        restartNeeded: true,
    },
    enableTimestamps: {
        label: () => t(plugin.appleMusic.option.enableTimestamps.label),
        description: () => t(plugin.appleMusic.option.enableTimestamps.description),
        type: OptionType.BOOLEAN,
        default: true,
    },
    enableButtons: {
        label: () => t(plugin.appleMusic.option.enableButtons.label),
        description: () => t(plugin.appleMusic.option.enableButtons.description),
        type: OptionType.BOOLEAN,
        default: true,
    },
    nameString: {
        label: () => t(plugin.appleMusic.option.nameString.label),
        description: () => t(plugin.appleMusic.option.nameString.description),
        type: OptionType.STRING,
        default: "Apple Music"
    },
    detailsString: {
        label: () => t(plugin.appleMusic.option.detailsString.label),
        description: () => t(plugin.appleMusic.option.detailsString.description),
        type: OptionType.STRING,
        default: "{name}"
    },
    stateString: {
        label: () => t(plugin.appleMusic.option.stateString.label),
        description: () => t(plugin.appleMusic.option.stateString.description),
        type: OptionType.STRING,
        default: "{artist} · {album}"
    },
    largeImageType: {
        label: () => t(plugin.appleMusic.option.largeImageType.label),
        description: () => t(plugin.appleMusic.option.largeImageType.description),
        type: OptionType.SELECT,
        options: [
            { label: () => t(plugin.appleMusic.option.largeImageType.album), value: AssetImageType.Album, default: true },
            { label: () => t(plugin.appleMusic.option.largeImageType.artist), value: AssetImageType.Artist },
            { label: () => t(plugin.appleMusic.option.largeImageType.disabled), value: AssetImageType.Disabled }
        ]
    },
    largeTextString: {
        label: () => t(plugin.appleMusic.option.largeTextString.label),
        description: () => t(plugin.appleMusic.option.largeTextString.description),
        type: OptionType.STRING,
        default: "{album}"
    },
    smallImageType: {
        label: () => t(plugin.appleMusic.option.smallImageType.label),
        description: () => t(plugin.appleMusic.option.smallImageType.description),
        type: OptionType.SELECT,
        options: [
            { label: () => t(plugin.appleMusic.option.smallImageType.album), value: AssetImageType.Album },
            { label: () => t(plugin.appleMusic.option.smallImageType.artist), value: AssetImageType.Artist, default: true },
            { label: () => t(plugin.appleMusic.option.smallImageType.disabled), value: AssetImageType.Disabled }
        ]
    },
    smallTextString: {
        label: () => t(plugin.appleMusic.option.smallTextString.label),
        description: () => t(plugin.appleMusic.option.smallTextString.description),
        type: OptionType.STRING,
        default: "{artist}"
    },
});

function customFormat(formatStr: string, data: TrackData) {
    return formatStr
        .replaceAll("{name}", data.name)
        .replaceAll("{album}", data.album ?? "")
        .replaceAll("{artist}", data.artist ?? "");
}

function getImageAsset(type: AssetImageType, data: TrackData) {
    const source = type === AssetImageType.Album
        ? data.albumArtwork
        : data.artistArtwork;

    if (!source) return undefined;

    return ApplicationAssetUtils.fetchAssetIds(applicationId, [source]).then(ids => ids[0]);
}

export default definePlugin({
    name: "AppleMusicRichPresence",
    description: () => t(plugin.appleMusic.description),
    authors: [Devs.RyanCaoDev],
    hidden: !IS_MAC,
    reporterTestable: ReporterTestable.None,

    settingsAboutComponent() {
        return <>
            <Paragraph>
                {t(plugin.appleMusic.about, {
                    name: <code>{"{name}"}</code>,
                    artist: <code>{"{artist}"}</code>,
                    album: <code>{"{album}"}</code>
                })}
            </Paragraph>
        </>;
    },

    settings,

    start() {
        this.updatePresence();
        updateInterval = setInterval(() => { this.updatePresence(); }, settings.store.refreshInterval * 1000);
    },

    stop() {
        clearInterval(updateInterval);
        updateInterval = undefined;
        FluxDispatcher.dispatch({ type: "LOCAL_ACTIVITY_UPDATE", activity: null });
    },

    updatePresence() {
        this.getActivity().then(activity => { setActivity(activity); });
    },

    async getActivity(): Promise<Activity | null> {
        const trackData = await Native.fetchTrackData();
        if (!trackData) return null;

        const [largeImageAsset, smallImageAsset] = await Promise.all([
            getImageAsset(settings.store.largeImageType, trackData),
            getImageAsset(settings.store.smallImageType, trackData)
        ]);

        const assets: ActivityAssets = {};

        const isRadio = Number.isNaN(trackData.duration) && (trackData.playerPosition === 0);

        if (settings.store.largeImageType !== AssetImageType.Disabled) {
            assets.large_image = largeImageAsset;
            if (!isRadio) assets.large_text = customFormat(settings.store.largeTextString, trackData);
        }

        if (settings.store.smallImageType !== AssetImageType.Disabled) {
            assets.small_image = smallImageAsset;
            if (!isRadio) assets.small_text = customFormat(settings.store.smallTextString, trackData);
        }

        const buttons: ActivityButton[] = [];

        if (settings.store.enableButtons) {
            if (trackData.appleMusicLink)
                buttons.push({
                    label: t(plugin.appleMusic.button.listen),
                    url: trackData.appleMusicLink,
                });

            if (trackData.songLink)
                buttons.push({
                    label: t(plugin.appleMusic.button.songLink),
                    url: trackData.songLink,
                });
        }

        return {
            application_id: applicationId,

            name: customFormat(settings.store.nameString, trackData),
            details: customFormat(settings.store.detailsString, trackData),
            state: isRadio ? undefined : customFormat(settings.store.stateString, trackData),

            timestamps: (trackData.playerPosition && trackData.duration && settings.store.enableTimestamps) ? {
                start: Date.now() - (trackData.playerPosition * 1000),
                end: Date.now() - (trackData.playerPosition * 1000) + (trackData.duration * 1000),
            } : undefined,

            assets,

            buttons: !isRadio && buttons.length ? buttons.map(v => v.label) : undefined,
            metadata: !isRadio && buttons.length ? { button_urls: buttons.map(v => v.url) } : undefined,

            type: settings.store.activityType,
            status_display_type: {
                "off": ActivityStatusDisplayType.NAME,
                "artist": ActivityStatusDisplayType.STATE,
                "track": ActivityStatusDisplayType.DETAILS
            }[settings.store.statusDisplayType],
            flags: ActivityFlags.INSTANCE,
        };
    }
});
