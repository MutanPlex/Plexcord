/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2022 Sofia Lima
 * Copyright (c) 2026 MutanPlex
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
import { definePluginSettings, migratePluginSetting, migratePluginSettings } from "@api/Settings";
import { Button, LinkButton } from "@components/Button";
import { Card } from "@components/Card";
import { Heading } from "@components/Heading";
import { Margins } from "@components/margins";
import { Paragraph } from "@components/Paragraph";
import { Activity, ActivityAssets, ActivityButton } from "@plexcord/discord-types";
import { ActivityFlags, ActivityStatusDisplayType, ActivityType } from "@plexcord/discord-types/enums";
import { Devs, PcDevs } from "@utils/constants";
import { promptToRestart } from "@utils/promptToRestart";
import { useAwaiter, useForceUpdater } from "@utils/react";
import definePlugin, { OptionType } from "@utils/types";
import { ApplicationAssetUtils, AuthenticationStore, FluxDispatcher, PresenceStore } from "@webpack/common";

import { LastFMScrobbler } from "./lastfm";
import { invalidateListenBrainzCache, ListenBrainzScrobbler } from "./listenbrainz";

export interface TrackData {
    name: string;
    album: string;
    artist: string;
    trackURL?: string;
    artistURL?: string;
    albumURL?: string;
    imageURL?: string;
    serviceName?: string;
}

export interface ScrobblerBackend {
    name: string,
    id: string,

    fetchTrackData(): Promise<TrackData | null>;
    getUserURL(username: string): string;
}

const enum NameFormat {
    StatusName = "status-name",
    ArtistFirst = "artist-first",
    SongFirst = "song-first",
    ArtistOnly = "artist",
    SongOnly = "song",
    AlbumName = "album",
    ServiceName = "service-name"
}

const DISCORD_APP_ID = "1108588077900898414";
const LASTFM_PLACEHOLDER_IMAGE_HASH = "2a96cbd8b46e442fc41c2b86b821562f";

async function getApplicationAsset(key: string): Promise<string> {
    return (await ApplicationAssetUtils.fetchAssetIds(DISCORD_APP_ID, [key]))[0];
}

function setActivity(activity: Activity | null) {
    FluxDispatcher.dispatch({
        type: "LOCAL_ACTIVITY_UPDATE",
        activity,
        socketId: "LastFM",
    });
}

export const settings = definePluginSettings({
    scrobblerBackend: {
        label: () => t(plugin.musicRichPresence.option.scrobblerBackend.label),
        description: () => t(plugin.musicRichPresence.option.scrobblerBackend.description),
        type: OptionType.SELECT,
        options: [
            {
                "label": "Last.FM",
                "value": "lastfm",
                "default": true
            },
            {
                "label": "ListenBrainz",
                "value": "listenbrainz"
            },
            {
                "label": () => t(plugin.musicRichPresence.text.listenBrainzCompatible),
                "value": "listenbrainz-compatible"
            }
        ] as const
    },
    instanceBaseURL: {
        label: () => t(plugin.musicRichPresence.option.instanceBaseURL.label),
        description: () => t(plugin.musicRichPresence.option.instanceBaseURL.description),
        type: OptionType.STRING,
        placeholder: "https://example.org",
        onChange: invalidateListenBrainzCache
    },
    instanceAPIBaseUrl: {
        label: () => t(plugin.musicRichPresence.option.instanceAPIBaseUrl.label),
        description: () => t(plugin.musicRichPresence.option.instanceAPIBaseUrl.description),
        type: OptionType.STRING,
        placeholder: "https://api.example.org",
        onChange: invalidateListenBrainzCache
    },
    apiKey: {
        label: () => t(plugin.musicRichPresence.option.apiKey.label),
        description: () => t(plugin.musicRichPresence.option.apiKey.description),
        type: OptionType.STRING,
    },
    username: {
        label: () => t(plugin.musicRichPresence.option.username.label),
        description: () => t(plugin.musicRichPresence.option.username.description),
        type: OptionType.STRING,
    },
    shareUsername: {
        label: () => t(plugin.musicRichPresence.option.shareUsername.label),
        description: () => t(plugin.musicRichPresence.option.shareUsername.description),
        type: OptionType.BOOLEAN,
        default: false,
    },
    clickableLinks: {
        label: () => t(plugin.musicRichPresence.option.clickableLinks.label),
        description: () => t(plugin.musicRichPresence.option.clickableLinks.description),
        type: OptionType.BOOLEAN,
        default: true,
    },
    hideWithSpotify: {
        label: () => t(plugin.musicRichPresence.option.hideWithSpotify.label),
        description: () => t(plugin.musicRichPresence.option.hideWithSpotify.description),
        type: OptionType.BOOLEAN,
        default: true,
    },
    hideWithActivity: {
        label: () => t(plugin.musicRichPresence.option.hideWithActivity.label),
        description: () => t(plugin.musicRichPresence.option.hideWithActivity.description),
        type: OptionType.BOOLEAN,
        default: false,
    },
    statusName: {
        label: () => t(plugin.musicRichPresence.option.statusName.label),
        description: () => t(plugin.musicRichPresence.option.statusName.description),
        type: OptionType.STRING,
        default: "some music",
    },
    statusDisplayType: {
        description: () => t(plugin.musicRichPresence.option.statusDisplayType.description),
        type: OptionType.SELECT,
        options: [
            {
                label: () => t(plugin.musicRichPresence.option.statusDisplayType.off),
                value: "off"
            },
            {
                label: t(plugin.musicRichPresence.text.showArtistName),
                value: "artist",
                default: true
            },
            {
                label: t(plugin.musicRichPresence.text.showTrackName),
                value: "track"
            }
        ]
    },
    nameFormat: {
        description: () => t(plugin.musicRichPresence.option.nameFormat.description),
        type: OptionType.SELECT,
        options: [
            {
                label: () => t(plugin.musicRichPresence.option.nameFormat.statusName),
                value: NameFormat.StatusName,
                default: true
            },
            {
                label: t(plugin.musicRichPresence.text.useMusicServiceName),
                value: NameFormat.ServiceName
            },
            {
                label: t(plugin.musicRichPresence.text.useFormatArtistSong),
                value: NameFormat.ArtistFirst
            },
            {
                label: t(plugin.musicRichPresence.text.useFormatSongArtist),
                value: NameFormat.SongFirst
            },
            {
                label: t(plugin.musicRichPresence.text.useArtistNameOnly),
                value: NameFormat.ArtistOnly
            },
            {
                label: t(plugin.musicRichPresence.text.useSongNameOnly),
                value: NameFormat.SongOnly
            },
            {
                label: t(plugin.musicRichPresence.text.useAlbumNameFalls),
                value: NameFormat.AlbumName
            }
        ],
    },
    useListeningStatus: {
        description: () => t(plugin.musicRichPresence.option.useListeningStatus.description),
        type: OptionType.BOOLEAN,
        default: false,
    },
    missingArt: {
        description: () => t(plugin.musicRichPresence.option.missingArt.description),
        type: OptionType.SELECT,
        options: [
            {
                label: () => t(plugin.musicRichPresence.option.missingArt.logo),
                value: "logo",
                default: true
            },
            {
                label: t(plugin.musicRichPresence.text.useGenericPlaceholder),
                value: "placeholder"
            }
        ],
    },
    showLogo: {
        label: () => t(plugin.musicRichPresence.option.showLogo.label),
        description: () => t(plugin.musicRichPresence.option.showLogo.description),
        type: OptionType.BOOLEAN,
        default: true,
    },
    showAlbumCover: {
        label: () => t(plugin.musicRichPresence.option.showAlbumCover.label),
        description: () => t(plugin.musicRichPresence.option.showAlbumCover.description),
        type: OptionType.BOOLEAN,
        default: true,
    }
}, {
    apiKey: { hidden() { return this.store.scrobblerBackend !== "lastfm"; } },
    instanceBaseURL: { hidden() { return this.store.scrobblerBackend !== "listenbrainz-compatible"; } },
    instanceAPIBaseUrl: { hidden() { return this.store.scrobblerBackend !== "listenbrainz-compatible"; } },
});

const hasInvalidCustomInstance = () => settings.store.scrobblerBackend === "listenbrainz-compatible" && (!settings.store.instanceAPIBaseUrl || !settings.store.instanceBaseURL);

function CustomInstanceAboutComponent() {
    const { instanceAPIBaseUrl, instanceBaseURL } = settings.store;

    const [signal, forceUpdate] = useForceUpdater(true);

    const [cspAllowed] = useAwaiter(async () => {
        if (!instanceAPIBaseUrl || !instanceBaseURL) return true;
        return await PlexcordNative.csp.isDomainAllowed(instanceAPIBaseUrl, ["connect-src"]) && await PlexcordNative.csp.isDomainAllowed(instanceBaseURL, ["connect-src"]);
    }, { fallbackValue: true, deps: [instanceAPIBaseUrl, instanceBaseURL, signal] });

    if (!instanceAPIBaseUrl || !instanceBaseURL)
        return (
            <Card variant="danger">
                <Heading tag="h5">{t(plugin.musicRichPresence.text.invalidInstance)}</Heading>
                <Paragraph>{t(plugin.musicRichPresence.text.provideBoth)} <b>{t(plugin.musicRichPresence.text.apiBaseUrl)}</b> {t(plugin.musicRichPresence.text.andThe)} <b>{t(plugin.musicRichPresence.text.instanceBaseUrl)}</b> {t(plugin.musicRichPresence.text.forYourCustomInstance)}</Paragraph>
            </Card>
        );

    if (!cspAllowed)
        return (
            <Card variant="warning">
                <Heading tag="h5">{t(plugin.musicRichPresence.text.allowConnectTitle)}</Heading>
                <Paragraph>{t(plugin.musicRichPresence.text.allowConnectBody)}</Paragraph>
                <Button
                    size="small"
                    className={Margins.top8}
                    variant="secondary"
                    onClick={async () => {
                        for (const host of [instanceAPIBaseUrl, instanceBaseURL]) {
                            const res = await PlexcordNative.csp.requestAddOverride(host, ["connect-src"], "MusicRichPresence");
                            if (!res) return;
                        }
                        forceUpdate();
                        promptToRestart("relaunch");
                    }}
                >
                    {t(plugin.musicRichPresence.text.allowInstance)}
                </Button>
            </Card>
        );

    return null;
}

migratePluginSettings("MusicRichPresence", "LastFMRichPresence");
migratePluginSetting("MusicRichPresence", "showLastFmLogo", "showLogo");
export default definePlugin({
    name: "MusicRichPresence",
    description: () => t(plugin.musicRichPresence.description),
    tags: ["activity", "media"],
    searchTerms: ["lastfm", "LastFMRichPresence"],
    authors: [Devs.Rini, Devs.Ven, Devs.angelcube, Devs.RuiNtD, Devs.blahajZip, Devs.archeruwu, PcDevs.MutanPlex],

    settings,

    settingsAboutComponent() {
        if (settings.store.scrobblerBackend === "lastfm")
            return (
                <Card>
                    <Heading tag="h2">{t(plugin.musicRichPresence.text.lastFm)}</Heading>
                    <Heading tag="h5">{t(plugin.musicRichPresence.text.howToCreateAn)}</Heading>
                    <Paragraph>{t(plugin.musicRichPresence.text.set)} <strong>{t(plugin.musicRichPresence.text.applicationName)}</strong> {t(plugin.musicRichPresence.text.and)} <strong>{t(plugin.musicRichPresence.text.applicationDescription)}</strong> {t(plugin.musicRichPresence.text.toAnythingAndLeave)}</Paragraph>
                    <LinkButton size="small" href="https://www.last.fm/api/account/create" className={Margins.top8}>{t(plugin.musicRichPresence.text.createApiKey)}</LinkButton>
                </Card>
            );

        if (settings.store.scrobblerBackend === "listenbrainz-compatible")
            return <CustomInstanceAboutComponent />;

        return null;
    },

    start() {
        this.updatePresence();
        this.updateInterval = setInterval(() => { this.updatePresence(); }, 16000);
    },

    stop() {
        clearInterval(this.updateInterval);
    },

    async updatePresence() {
        const { username, scrobblerBackend, instanceAPIBaseUrl, instanceBaseURL } = settings.store;

        if (!username) return;
        if (hasInvalidCustomInstance()) return;

        setActivity(await this.getActivity());
    },

    getLargeImage(track: TrackData): string | undefined {
        if (settings.store.showAlbumCover && track.imageURL && !track.imageURL.includes(LASTFM_PLACEHOLDER_IMAGE_HASH))
            return track.imageURL;

        if (settings.store.missingArt === "placeholder")
            return "placeholder";
    },

    async getActivity(): Promise<Activity | null> {

        if (settings.store.hideWithActivity) {
            if (PresenceStore.getActivities(AuthenticationStore.getId()).some(a => a.application_id !== DISCORD_APP_ID && a.type !== ActivityType.CUSTOM_STATUS)) {
                return null;
            }
        }

        if (settings.store.hideWithSpotify) {
            if (PresenceStore.getActivities(AuthenticationStore.getId()).some(a => a.type === ActivityType.LISTENING && a.application_id !== DISCORD_APP_ID)) {
                // there is already music status because of Spotify or richerCider (probably more)
                return null;
            }
        }

        const scrobbler = settings.store.scrobblerBackend === "lastfm" ? LastFMScrobbler : ListenBrainzScrobbler;

        const trackData = await scrobbler.fetchTrackData();
        if (!trackData) return null;

        const largeImage = this.getLargeImage(trackData);
        const assets: ActivityAssets = largeImage ?
            {
                large_image: await getApplicationAsset(largeImage),
                large_text: trackData.album || undefined,
                ...(settings.store.showLogo && {
                    small_image: await getApplicationAsset(`${scrobbler.id}-small`),
                    small_text: scrobbler.id
                }),
            } : {
                large_image: await getApplicationAsset(`${scrobbler.id}-large`),
                large_text: trackData.album || undefined,
            };

        const buttons: ActivityButton[] = [];

        if (settings.store.shareUsername) {
            buttons.push({
                label: `${scrobbler.name} Profile`,
                url: scrobbler.getUserURL(settings.store.username!)
            });
        }

        const statusName = (() => {
            switch (settings.store.nameFormat) {
                case NameFormat.ArtistFirst:
                    return trackData.artist + " - " + trackData.name;
                case NameFormat.SongFirst:
                    return trackData.name + " - " + trackData.artist;
                case NameFormat.ArtistOnly:
                    return trackData.artist;
                case NameFormat.SongOnly:
                    return trackData.name;
                case NameFormat.AlbumName:
                    return trackData.album || settings.store.statusName
                        .replaceAll("{artist}", trackData.artist || "")
                        .replaceAll("{album}", trackData.album || "")
                        .replaceAll("{title}", trackData.name || "");
                case NameFormat.ServiceName:
                    return trackData.serviceName || settings.store.statusName
                        .replaceAll("{artist}", trackData.artist || "")
                        .replaceAll("{album}", trackData.album || "")
                        .replaceAll("{title}", trackData.name || "");
                default:
                    return settings.store.statusName
                        .replaceAll("{artist}", trackData.artist || "")
                        .replaceAll("{album}", trackData.album || "")
                        .replaceAll("{title}", trackData.name || "");
            }
        })();

        const activity: Activity = {
            application_id: DISCORD_APP_ID,
            name: statusName,

            details: trackData.name,
            state: trackData.artist,
            status_display_type: {
                "off": ActivityStatusDisplayType.NAME,
                "artist": ActivityStatusDisplayType.STATE,
                "track": ActivityStatusDisplayType.DETAILS
            }[settings.store.statusDisplayType],

            assets,

            buttons: buttons.length ? buttons.map(v => v.label) : undefined,
            metadata: {
                button_urls: buttons.map(v => v.url),
            },

            type: settings.store.useListeningStatus ? ActivityType.LISTENING : ActivityType.PLAYING,
            flags: ActivityFlags.INSTANCE,
        };

        if (settings.store.clickableLinks) {
            activity.details_url = trackData.trackURL;
            activity.state_url = trackData.artistURL;

            if (trackData.album) {
                activity.assets!.large_url = trackData.albumURL;
            }
        }

        return activity;
    }
});
