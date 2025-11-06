/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2024 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { t } from "@api/i18n";
import { showNotification } from "@api/Notifications";
import { settings } from "@plugins/musicControls/settings";
import { getLyrics, lyricFetchers, providers, updateLyrics } from "@plugins/musicControls/spotify/lyrics/api";
import { SpotifyStore, type Track } from "@plugins/musicControls/spotify/SpotifyStore";
import { proxyLazyWebpack } from "@webpack";
import { Flux, FluxDispatcher } from "@webpack/common";

import { lyricsAlternativeFetchers } from "./translator";
import { LyricsData, Provider } from "./types";

export const lyricsAlternative = [Provider.Translated, Provider.Romanized];

function showNotif(title: string, body: string) {
    if (settings.store.ShowFailedToasts) {
        showNotification({
            color: "#ee2902",
            title,
            body,
            noPersist: true
        });
    }
}

export const SpotifyLrcStore = proxyLazyWebpack(() => {
    let lyricsInfo: LyricsData | null = null;
    let fetchingsTracks: string[] = [];

    class SpotifyLrcStore extends Flux.Store {
        init() { }
        get lyricsInfo() {
            return lyricsInfo;
        }
    }

    const store = new SpotifyLrcStore(FluxDispatcher, {
        async SPOTIFY_PLAYER_STATE(e: { track: Track | null; }) {
            if (fetchingsTracks.includes(e.track?.id ?? "")) return;

            fetchingsTracks.push(e.track?.id ?? "");
            lyricsInfo = await getLyrics(e.track);
            const { LyricsConversion } = settings.store;
            if (LyricsConversion !== Provider.None) {
                FluxDispatcher.dispatch({
                    // @ts-ignore
                    type: "SPOTIFY_LYRICS_PROVIDER_CHANGE",
                    provider: LyricsConversion
                });
            }

            fetchingsTracks = fetchingsTracks.filter(id => id !== e.track?.id);
            store.emitChange();
        },

        // @ts-ignore
        async SPOTIFY_LYRICS_PROVIDER_CHANGE(e: { provider: Provider; }) {
            const { track } = SpotifyStore;
            if (!track) return;
            const currentInfo = await getLyrics(track);
            const { provider } = e;
            if (currentInfo?.useLyric === provider) return;

            if (currentInfo?.lyricsVersions[provider]) {
                lyricsInfo = { ...currentInfo, useLyric: provider };

                await updateLyrics(track.id, currentInfo.lyricsVersions[provider]!, provider);
                store.emitChange();
                return;
            }

            if (provider === Provider.Translated || provider === Provider.Romanized) {
                const originalLyrics = currentInfo?.lyricsVersions[settings.store.LyricsProvider] ||
                    providers.map(p => currentInfo?.lyricsVersions[p]).find(Boolean);

                if (!originalLyrics || !currentInfo) {
                    showNotif(t("plugin.musicControls.alert.noLyrics"), `${t("plugin.musicControls.alert.noLyricsTo", { translated: provider === Provider.Translated ? t("plugin.musicControls.alert.translate") : t("plugin.musicControls.alert.romanize") })}`);
                    return;
                }

                const lyricsCheckText = originalLyrics.map(line => line.text).join(" ");

                if (provider === Provider.Romanized && !/[^\u0000-\u007F]/.test(lyricsCheckText)) {
                    lyricsInfo = {
                        ...currentInfo,
                        useLyric: settings.store.LyricsProvider,
                        lyricsVersions: {
                            ...currentInfo.lyricsVersions,
                        },
                    };
                    store.emitChange();
                    return;
                }

                const fetchResult = await lyricsAlternativeFetchers[provider](originalLyrics);

                if (!fetchResult) {
                    showNotif(t("plugin.musicControls.alert.lyricsFetchFailed"), `${t("plugin.musicControls.alert.failedToFetchLyrics", { translated: provider === Provider.Translated ? t("plugin.musicControls.alert.translation") : t("plugin.musicControls.alert.romanization") })}`);
                    return;
                }

                lyricsInfo = {
                    ...currentInfo,
                    useLyric: provider,
                    lyricsVersions: {
                        ...currentInfo.lyricsVersions,
                        [provider]: fetchResult
                    }
                };

                await updateLyrics(track.id, fetchResult, provider);

                store.emitChange();
                return;
            }

            const newLyricsInfo = await lyricFetchers[e.provider](track);
            if (!newLyricsInfo) {
                showNotif(t("plugin.musicControls.alert.lyricsFetchFailed"), `${t("plugin.musicControls.alert.failedToFetchTranslation", { translated: e.provider })}`);
                return;
            }

            lyricsInfo = newLyricsInfo;

            updateLyrics(track.id, newLyricsInfo.lyricsVersions[e.provider], e.provider);

            store.emitChange();
        }
    });

    return store;
});
