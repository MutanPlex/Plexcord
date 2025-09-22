/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2024 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { t, tJsx } from "@api/i18n";
import { definePluginSettings } from "@api/Settings";
import { Devs, IS_MAC } from "@utils/constants";
import definePlugin, { OptionType, PluginNative, ReporterTestable } from "@utils/types";
import { ApplicationAssetUtils, FluxDispatcher, Forms } from "@webpack/common";

const Native = PlexcordNative.pluginHelpers.AppleMusicRichPresence as PluginNative<typeof import("./native")>;

interface ActivityAssets {
    large_image?: string;
    large_text?: string;
    small_image?: string;
    small_text?: string;
}

interface ActivityButton {
    label: string;
    url: string;
}

interface Activity {
    state?: string;
    details?: string;
    timestamps?: {
        start?: number;
        end?: number;
    };
    assets?: ActivityAssets;
    buttons?: Array<string>;
    name: string;
    application_id: string;
    metadata?: {
        button_urls?: Array<string>;
    };
    type: number;
    flags: number;
}

const enum ActivityType {
    PLAYING = 0,
    LISTENING = 2,
}

const enum ActivityFlag {
    INSTANCE = 1 << 0,
}

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

function setActivity(activity: Activity | null) {
    FluxDispatcher.dispatch({
        type: "LOCAL_ACTIVITY_UPDATE",
        activity,
        socketId: "AppleMusic",
    });
}

const settings = definePluginSettings({
    activityType: {
        get label() {
            return t("plugin.appleMusic.option.activityType.label");
        },
        get description() {
            return t("plugin.appleMusic.option.activityType.description");
        },
        type: OptionType.SELECT,
        get options() {
            return [
                { label: t("plugin.appleMusic.option.activityType.playing"), value: ActivityType.PLAYING, default: true },
                { label: t("plugin.appleMusic.option.activityType.listening"), value: ActivityType.LISTENING }
            ];
        },
    },
    refreshInterval: {
        get label() {
            return t("plugin.appleMusic.option.refreshInterval.label");
        },
        get description() {
            return t("plugin.appleMusic.option.refreshInterval.description");
        },
        type: OptionType.SLIDER,
        markers: [1, 2, 2.5, 3, 5, 10, 15],
        default: 5,
        restartNeeded: true,
    },
    enableTimestamps: {
        get label() {
            return t("plugin.appleMusic.option.enableTimestamps.label");
        },
        get description() {
            return t("plugin.appleMusic.option.enableTimestamps.description");
        },
        type: OptionType.BOOLEAN,
        default: true,
    },
    enableButtons: {
        get label() {
            return t("plugin.appleMusic.option.enableButtons.label");
        },
        get description() {
            return t("plugin.appleMusic.option.enableButtons.description");
        },
        type: OptionType.BOOLEAN,
        default: true,
    },
    nameString: {
        get label() {
            return t("plugin.appleMusic.option.nameString.label");
        },
        get description() {
            return t("plugin.appleMusic.option.nameString.description");
        },
        type: OptionType.STRING,
        default: "Apple Music"
    },
    detailsString: {
        get label() {
            return t("plugin.appleMusic.option.detailsString.label");
        },
        get description() {
            return t("plugin.appleMusic.option.detailsString.description");
        },
        type: OptionType.STRING,
        default: "{name}"
    },
    stateString: {
        get label() {
            return t("plugin.appleMusic.option.stateString.label");
        },
        get description() {
            return t("plugin.appleMusic.option.stateString.description");
        },
        type: OptionType.STRING,
        default: "{artist} · {album}"
    },
    largeImageType: {
        get label() {
            return t("plugin.appleMusic.option.largeImageType.label");
        },
        get description() {
            return t("plugin.appleMusic.option.largeImageType.description");
        },
        type: OptionType.SELECT,
        get options() {
            return [
                { label: t("plugin.appleMusic.option.largeImageType.album"), value: AssetImageType.Album, default: true },
                { label: t("plugin.appleMusic.option.largeImageType.artist"), value: AssetImageType.Artist },
                { label: t("plugin.appleMusic.option.largeImageType.disabled"), value: AssetImageType.Disabled }
            ];
        },
    },
    largeTextString: {
        get label() {
            return t("plugin.appleMusic.option.largeTextString.label");
        },
        get description() {
            return t("plugin.appleMusic.option.largeTextString.description");
        },
        type: OptionType.STRING,
        default: "{album}"
    },
    smallImageType: {
        get label() {
            return t("plugin.appleMusic.option.smallImageType.label");
        },
        get description() {
            return t("plugin.appleMusic.option.smallImageType.description");
        },
        type: OptionType.SELECT,
        get options() {
            return [
                { label: t("plugin.appleMusic.option.smallImageType.album"), value: AssetImageType.Album },
                { label: t("plugin.appleMusic.option.smallImageType.artist"), value: AssetImageType.Artist, default: true },
                { label: t("plugin.appleMusic.option.smallImageType.disabled"), value: AssetImageType.Disabled }
            ];
        },
    },
    smallTextString: {
        get label() {
            return t("plugin.appleMusic.option.smallTextString.label");
        },
        get description() {
            return t("plugin.appleMusic.option.smallTextString.description");
        },
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
    description: "Discord rich presence for your Apple Music!",

    get displayDescription() {
        return t("plugin.appleMusic.description");
    },

    authors: [Devs.RyanCaoDev],
    hidden: !IS_MAC,
    reporterTestable: ReporterTestable.None,

    settingsAboutComponent() {
        return <>
            <Forms.FormText>
                {tJsx("plugin.appleMusic.about", {
                    name: <code>{"{name}"}</code>,
                    artist: <code>{"{artist}"}</code>,
                    album: <code>{"{album}"}</code>
                })}
            </Forms.FormText>
        </>;
    },

    settings,

    start() {
        this.updatePresence();
        this.updateInterval = setInterval(() => { this.updatePresence(); }, settings.store.refreshInterval * 1000);
    },

    stop() {
        clearInterval(this.updateInterval);
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
                    label: t("plugin.appleMusic.button.listen"),
                    url: trackData.appleMusicLink,
                });

            if (trackData.songLink)
                buttons.push({
                    label: t("plugin.appleMusic.button.songLink"),
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
            flags: ActivityFlag.INSTANCE,
        };
    }
});
