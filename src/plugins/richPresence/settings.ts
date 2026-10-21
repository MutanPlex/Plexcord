/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2026 Vendicated and contributors
 * Copyright (c) 2026 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { plugin, t } from "@api/i18n";
import { definePluginSettings } from "@api/Settings";
import { OptionType } from "@utils/types";

import { SettingsPanel } from "./SettingsPanel";
import { NameFormat } from "./types";

export let onServiceChange: (() => void) | null = null;
export function setOnServiceChange(fn: (() => void) | null) { onServiceChange = fn; }

export const settings = definePluginSettings({
    enabled: {
        label: () => t(plugin.richPresence.option.enabled.label),
        description: () => t(plugin.richPresence.option.enabled.description),
        type: OptionType.BOOLEAN,
        default: true,
        restartNeeded: false,
        onChange: () => onServiceChange?.(),
    },
    serviceSettings: {
        label: () => t(plugin.richPresence.option.serviceSettings.label),
        type: OptionType.COMPONENT,
        description: () => t(plugin.richPresence.option.serviceSettings.description),
        component: SettingsPanel,
    },

    // Per-service enable toggles
    abs_enabled: {
        label: () => t(plugin.richPresence.option.abs_enabled.label),
        description: () => t(plugin.richPresence.option.abs_enabled.description),
        type: OptionType.BOOLEAN,
        default: false,
        hidden: true,
        onChange: () => onServiceChange?.(),
    },
    tosu_enabled: {
        label: () => t(plugin.richPresence.option.tosu_enabled.label),
        description: () => t(plugin.richPresence.option.tosu_enabled.description),
        type: OptionType.BOOLEAN,
        default: false,
        hidden: true,
        onChange: () => onServiceChange?.(),
    },
    sfm_enabled: {
        label: () => t(plugin.richPresence.option.sfm_enabled.label),
        description: () => t(plugin.richPresence.option.sfm_enabled.description),
        type: OptionType.BOOLEAN,
        default: false,
        hidden: true,
        onChange: () => onServiceChange?.(),
    },
    jf_enabled: {
        label: () => t(plugin.richPresence.option.jf_enabled.label),
        description: () => t(plugin.richPresence.option.jf_enabled.description),
        type: OptionType.BOOLEAN,
        default: false,
        hidden: true,
        onChange: () => onServiceChange?.(),
    },
    gr_enabled: {
        label: () => t(plugin.richPresence.option.gr_enabled.label),
        description: () => t(plugin.richPresence.option.gr_enabled.description),
        type: OptionType.BOOLEAN,
        default: false,
        hidden: true,
        onChange: () => onServiceChange?.(),
    },
    nd_enabled: {
        label: () => t(plugin.richPresence.option.nd_enabled.label),
        description: () => t(plugin.richPresence.option.nd_enabled.description),
        type: OptionType.BOOLEAN,
        default: false,
        hidden: true,
        onChange: () => onServiceChange?.(),
    },

    // AudioBookShelf
    abs_serverUrl: {
        label: () => t(plugin.richPresence.option.abs_serverUrl.label),
        description: () => t(plugin.richPresence.option.abs_serverUrl.description),
        type: OptionType.STRING,
        default: "",
        hidden: true,
    },
    abs_username: {
        label: () => t(plugin.richPresence.option.abs_username.label),
        description: () => t(plugin.richPresence.option.abs_username.description),
        type: OptionType.STRING,
        default: "",
        hidden: true,
    },
    abs_password: {
        label: () => t(plugin.richPresence.option.abs_password.label),
        description: () => t(plugin.richPresence.option.abs_password.description),
        type: OptionType.STRING,
        default: "",
        hidden: true,
    },

    // stats.fm
    sfm_username: {
        label: () => t(plugin.richPresence.option.sfm_username.label),
        description: () => t(plugin.richPresence.option.sfm_username.description),
        type: OptionType.STRING,
        default: "",
        hidden: true,
    },
    sfm_shareUsername: {
        label: () => t(plugin.richPresence.option.sfm_shareUsername.label),
        description: () => t(plugin.richPresence.option.sfm_shareUsername.description),
        type: OptionType.BOOLEAN,
        default: false,
        hidden: true,
    },
    sfm_shareSong: {
        label: () => t(plugin.richPresence.option.sfm_shareSong.label),
        description: () => t(plugin.richPresence.option.sfm_shareSong.description),
        type: OptionType.BOOLEAN,
        default: true,
        hidden: true,
    },
    sfm_hideWithSpotify: {
        label: () => t(plugin.richPresence.option.sfm_hideWithSpotify.label),
        description: () => t(plugin.richPresence.option.sfm_hideWithSpotify.description),
        type: OptionType.BOOLEAN,
        default: false,
        hidden: true,
    },
    sfm_hideWithExternalRPC: {
        label: () => t(plugin.richPresence.option.sfm_hideWithExternalRPC.label),
        description: () => t(plugin.richPresence.option.sfm_hideWithExternalRPC.description),
        type: OptionType.BOOLEAN,
        default: false,
        hidden: true,
    },
    sfm_statusName: {
        label: () => t(plugin.richPresence.option.sfm_statusName.label),
        description: () => t(plugin.richPresence.option.sfm_statusName.description),
        type: OptionType.STRING,
        default: "Stats.fm",
        hidden: true,
    },
    sfm_nameFormat: {
        label: () => t(plugin.richPresence.option.sfm_nameFormat.label),
        description: () => t(plugin.richPresence.option.sfm_nameFormat.description),
        type: OptionType.SELECT,
        options: [
            { label: () => t(plugin.richPresence.option.sfm_nameFormat.statusName), value: NameFormat.StatusName, default: true },
            { label: () => t(plugin.richPresence.option.sfm_nameFormat.artistFirst), value: NameFormat.ArtistFirst },
            { label: () => t(plugin.richPresence.option.sfm_nameFormat.songFirst), value: NameFormat.SongFirst },
            { label: () => t(plugin.richPresence.option.sfm_nameFormat.artistOnly), value: NameFormat.ArtistOnly },
            { label: () => t(plugin.richPresence.option.sfm_nameFormat.songOnly), value: NameFormat.SongOnly },
            { label: () => t(plugin.richPresence.option.sfm_nameFormat.albumName), value: NameFormat.AlbumName },
        ],
        hidden: true,
    },
    sfm_useListeningStatus: {
        label: () => t(plugin.richPresence.option.sfm_useListeningStatus.label),
        description: () => t(plugin.richPresence.option.sfm_useListeningStatus.description),
        type: OptionType.BOOLEAN,
        default: true,
        hidden: true,
    },
    sfm_missingArt: {
        label: () => t(plugin.richPresence.option.sfm_missingArt.label),
        description: () => t(plugin.richPresence.option.sfm_missingArt.description),
        type: OptionType.SELECT,
        options: [
            { label: () => t(plugin.richPresence.option.sfm_missingArt.statsFmLogo), value: "StatsFmLogo", default: true },
            { label: () => t(plugin.richPresence.option.sfm_missingArt.placeholder), value: "placeholder" },
        ],
        hidden: true,
    },
    sfm_showLogo: {
        label: () => t(plugin.richPresence.option.sfm_showLogo.label),
        description: () => t(plugin.richPresence.option.sfm_showLogo.description),
        type: OptionType.BOOLEAN,
        default: true,
        hidden: true,
    },
    sfm_alwaysHideArt: {
        label: () => t(plugin.richPresence.option.sfm_alwaysHideArt.label),
        description: () => t(plugin.richPresence.option.sfm_alwaysHideArt.description),
        type: OptionType.BOOLEAN,
        default: false,
        hidden: true,
    },

    // Jellyfin
    jf_serverUrl: {
        label: () => t(plugin.richPresence.option.jf_serverUrl.label),
        description: () => t(plugin.richPresence.option.jf_serverUrl.description),
        type: OptionType.STRING,
        default: "",
        hidden: true,
    },
    jf_apiKey: {
        label: () => t(plugin.richPresence.option.jf_apiKey.label),
        description: () => t(plugin.richPresence.option.jf_apiKey.description),
        type: OptionType.STRING,
        default: "",
        hidden: true,
    },
    jf_userId: {
        label: () => t(plugin.richPresence.option.jf_userId.label),
        description: () => t(plugin.richPresence.option.jf_userId.description),
        type: OptionType.STRING,
        default: "",
        hidden: true,
    },
    jf_nameDisplay: {
        label: () => t(plugin.richPresence.option.jf_nameDisplay.label),
        description: () => t(plugin.richPresence.option.jf_nameDisplay.description),
        type: OptionType.SELECT,
        options: [
            { label: () => t(plugin.richPresence.option.jf_nameDisplay.default), value: "default", default: true },
            { label: () => t(plugin.richPresence.option.jf_nameDisplay.full), value: "full" },
            { label: () => t(plugin.richPresence.option.jf_nameDisplay.custom), value: "custom" },
        ],
        hidden: true,
    },
    jf_customName: {
        label: () => t(plugin.richPresence.option.jf_customName.label),
        description: () => t(plugin.richPresence.option.jf_customName.description),
        type: OptionType.STRING,
        default: "",
        hidden: true,
    },
    jf_coverType: {
        label: () => t(plugin.richPresence.option.jf_coverType.label),
        description: () => t(plugin.richPresence.option.jf_coverType.description),
        type: OptionType.SELECT,
        options: [
            { label: () => t(plugin.richPresence.option.jf_coverType.series), value: "series", default: true },
            { label: () => t(plugin.richPresence.option.jf_coverType.episode), value: "episode" },
        ],
        hidden: true,
    },
    jf_episodeFormat: {
        label: () => t(plugin.richPresence.option.jf_episodeFormat.label),
        description: () => t(plugin.richPresence.option.jf_episodeFormat.description),
        type: OptionType.SELECT,
        options: [
            { label: () => t(plugin.richPresence.option.jf_episodeFormat.long), value: "long", default: true },
            { label: "1x01", value: "short" },
            { label: () => t(plugin.richPresence.option.jf_episodeFormat.fulltext), value: "fulltext" },
        ],
        hidden: true,
    },
    jf_showEpisodeName: {
        label: () => t(plugin.richPresence.option.jf_showEpisodeName.label),
        description: () => t(plugin.richPresence.option.jf_showEpisodeName.description),
        type: OptionType.BOOLEAN,
        default: false,
        hidden: true,
    },
    jf_overrideType: {
        label: () => t(plugin.richPresence.option.jf_overrideType.label),
        description: () => t(plugin.richPresence.option.jf_overrideType.description),
        type: OptionType.SELECT,
        options: [
            { label: () => t(plugin.richPresence.option.jf_overrideType.off), value: "off", default: true },
            { label: () => t(plugin.richPresence.option.jf_overrideType.listening), value: "2" },
            { label: () => t(plugin.richPresence.option.jf_overrideType.playing), value: "0" },
            { label: () => t(plugin.richPresence.option.jf_overrideType.streaming), value: "1" },
            { label: () => t(plugin.richPresence.option.jf_overrideType.watching), value: "3" },
        ],
        hidden: true,
    },
    jf_showPausedState: {
        label: () => t(plugin.richPresence.option.jf_showPausedState.label),
        description: () => t(plugin.richPresence.option.jf_showPausedState.description),
        type: OptionType.BOOLEAN,
        default: true,
        hidden: true,
    },
    jf_privacyMode: {
        label: () => t(plugin.richPresence.option.jf_privacyMode.label),
        description: () => t(plugin.richPresence.option.jf_privacyMode.description),
        type: OptionType.BOOLEAN,
        default: false,
        hidden: true,
    },

    // Gensokyo Radio
    gr_refreshInterval: {
        label: () => t(plugin.richPresence.option.gr_refreshInterval.label),
        description: () => t(plugin.richPresence.option.gr_refreshInterval.description),
        type: OptionType.SLIDER,
        markers: [1, 2, 2.5, 3, 5, 10, 15],
        default: 15,
        hidden: true,
    },

    // Navidrome
    nd_serverUrl: {
        label: () => t(plugin.richPresence.option.nd_serverUrl.label),
        description: () => t(plugin.richPresence.option.nd_serverUrl.description),
        type: OptionType.STRING,
        default: "",
        hidden: true,
    },

    nd_username: {
        label: () => t(plugin.richPresence.option.nd_username.label),
        description: () => t(plugin.richPresence.option.nd_username.description),
        type: OptionType.STRING,
        default: "",
        hidden: true,
    },
    nd_password: {
        label: () => t(plugin.richPresence.option.nd_password.label),
        description: () => t(plugin.richPresence.option.nd_password.description),
        type: OptionType.STRING,
        default: "",
        hidden: true,
    },
    nd_clientId: {
        label: () => t(plugin.richPresence.option.nd_clientId.label),
        description: () => t(plugin.richPresence.option.nd_clientId.description),
        type: OptionType.STRING,
        default: "",
        hidden: true,
    },
    nd_showSmallImage: {
        label: () => t(plugin.richPresence.option.nd_showSmallImage.label),
        description: () => t(plugin.richPresence.option.nd_showSmallImage.description),
        type: OptionType.BOOLEAN,
        default: false,
        hidden: true,
    },
    nd_showAlbum: {
        label: () => t(plugin.richPresence.option.nd_showAlbum.label),
        description: () => t(plugin.richPresence.option.nd_showAlbum.description),
        type: OptionType.BOOLEAN,
        default: true,
        hidden: true,
    },
    nd_albumArtMode: {
        label: () => t(plugin.richPresence.option.nd_albumArtMode.label),
        description: () => t(plugin.richPresence.option.nd_albumArtMode.description),
        type: OptionType.SELECT,
        options: [
            { label: () => t(plugin.richPresence.option.nd_albumArtMode.none), value: "none", default: true },
            { label: () => t(plugin.richPresence.option.nd_albumArtMode.instance), value: "instance" },
            { label: () => t(plugin.richPresence.option.nd_albumArtMode.lastfm), value: "lastfm" },
        ],
        hidden: true,
    },
    nd_lastfmApiKey: {
        label: () => t(plugin.richPresence.option.nd_lastfmApiKey.label),
        description: () => t(plugin.richPresence.option.nd_lastfmApiKey.description),
        type: OptionType.STRING,
        default: "",
        hidden: true,
    },
    nd_refreshInterval: {
        label: () => t(plugin.richPresence.option.nd_refreshInterval.label),
        description: () => t(plugin.richPresence.option.nd_refreshInterval.description),
        type: OptionType.SLIDER,
        markers: [1, 2, 5, 10, 15],
        default: 10,
        hidden: true,
    },
    nd_activityType: {
        label: () => t(plugin.richPresence.option.nd_activityType.label),
        type: OptionType.SELECT,
        description: () => t(plugin.richPresence.option.nd_activityType.description),
        options: [
            { label: () => t(plugin.richPresence.option.nd_activityType.listening), value: 2, default: true },
            { label: () => t(plugin.richPresence.option.nd_activityType.playingFixesHiddenLines), value: 0 },
            { label: () => t(plugin.richPresence.option.nd_activityType.watching), value: 3 }
        ],
        hidden: true,
    },
    nd_nameString: {
        label: () => t(plugin.richPresence.option.nd_nameString.label),
        type: OptionType.STRING,
        description: () => t(plugin.richPresence.option.nd_nameString.description),
        default: "Navidrome",
        hidden: true,
    },
    nd_detailsString: {
        label: () => t(plugin.richPresence.option.nd_detailsString.label),
        type: OptionType.STRING,
        description: () => t(plugin.richPresence.option.nd_detailsString.description),
        default: "{song}",
        hidden: true,
    },
    nd_stateString: {
        label: () => t(plugin.richPresence.option.nd_stateString.label),
        type: OptionType.STRING,
        description: () => t(plugin.richPresence.option.nd_stateString.description),
        default: "{artist}",
        hidden: true,
    },
    nd_largeTextString: {
        label: () => t(plugin.richPresence.option.nd_largeTextString.label),
        type: OptionType.STRING,
        description: () => t(plugin.richPresence.option.nd_largeTextString.description),
        default: "{album}",
        hidden: true,
    },
    nd_statusDisplayType: {
        description: () => t(plugin.richPresence.option.nd_statusDisplayType.description),
        type: OptionType.SELECT,
        options: [
            {
                label: () => t(plugin.richPresence.option.nd_statusDisplayType.off),
                value: "off"
            },
            {
                label: t(plugin.richPresence.text.showArtistName),
                value: "artist",
                default: true
            },
            {
                label: t(plugin.richPresence.text.showTrackName),
                value: "track"
            }
        ],
        hidden: true,
    },
    nd_hideOnPause: {
        label: () => t(plugin.richPresence.option.nd_hideOnPause.label),
        description: () => t(plugin.richPresence.option.nd_hideOnPause.description),
        type: OptionType.BOOLEAN,
        default: true,
        hidden: true,
    }
});

export type SettingsStore = typeof settings["store"];
