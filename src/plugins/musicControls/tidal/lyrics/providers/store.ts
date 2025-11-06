/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2024 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { t } from "@api/i18n";
import { showNotification } from "@api/Notifications";
import { settings } from "@plugins/musicControls/settings";
import { getLyrics } from "@plugins/musicControls/tidal/lyrics/api";
import { EnhancedLyric } from "@plugins/musicControls/tidal/lyrics/types";
import { TidalStore } from "@plugins/musicControls/tidal/TidalStore";
import { proxyLazyWebpack } from "@webpack";
import { Flux, FluxDispatcher } from "@webpack/common";

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

export const TidalLrcStore = proxyLazyWebpack(() => {
    let lyrics: EnhancedLyric[] | null = null;
    let lastTrackId: string | null = null;

    class TidalLrcStore extends Flux.Store {
        init() { }
        get lyrics() {
            return lyrics;
        }
    }

    const store = new TidalLrcStore(FluxDispatcher);
    function handleTidalStoreChange() {
        const { track } = TidalStore;
        if (!track?.id || lastTrackId === track.id) return;
        lastTrackId = track.id;
        getLyrics(track)
            .then(l => { lyrics = l; store.emitChange(); })
            .catch(() => {
                lyrics = null;
                showNotif(t("plugin.musicControls.context.tidal.lyrics"), t("plugin.musicControls.alert.lyricsFetchFailed"));
                store.emitChange();
            });
    }

    TidalStore.addChangeListener(handleTidalStoreChange);

    return store;
});
