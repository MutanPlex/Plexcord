/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2024 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { plugin, t } from "@api/i18n";
import { providers } from "@plugins/musicControls/spotify/lyrics/api";
import { lyricsAlternative } from "@plugins/musicControls/spotify/lyrics/providers/store";
import { Provider } from "@plugins/musicControls/spotify/lyrics/providers/types";
import { copyWithToast } from "@utils/discord";
import { findComponentByCodeLazy } from "@webpack";
import { FluxDispatcher, Menu } from "@webpack/common";

import { useLyrics } from "./util";

const CopyIcon = findComponentByCodeLazy(" 1-.5.5H10a6");

function getProviderLabel(provider: Provider): string {
    switch (provider) {
        case Provider.Spotify:
            return t(plugin.musicControls.option.LyricsProvider.spotify);
        case Provider.Lrclib:
            return t(plugin.musicControls.option.LyricsProvider.LRCLIB);
        case Provider.Translated:
            return t(plugin.musicControls.option.LyricsConversion.translate);
        case Provider.Romanized:
            return t(plugin.musicControls.option.LyricsConversion.romanize);
        case Provider.None:
            return t(plugin.musicControls.option.LyricsConversion.none);
        default:
            return provider;
    }
}

export function LyricsContextMenu() {
    const { lyricsInfo, currLrcIndex } = useLyrics({ scroll: false });

    const currLyric = lyricsInfo?.lyricsVersions[lyricsInfo.useLyric]?.[currLrcIndex ?? NaN];
    const hasLyrics = providers.some(provider => lyricsInfo?.lyricsVersions[provider]?.length);

    return (
        <Menu.Menu
            navId="spotify-lyrics-menu"
            onClose={() => FluxDispatcher.dispatch({ type: "CONTEXT_MENU_CLOSE" })}
            aria-label={t(plugin.musicControls.context.spotify.label)}
        >

            <Menu.MenuItem
                key="copy-lyric"
                id="copy-lyric"
                label={t(plugin.musicControls.context.copy.currentLyrics)}
                disabled={!currLyric?.text}
                action={() => copyWithToast(currLyric!.text!, t(plugin.musicControls.alert.lyricCopied))}
                icon={CopyIcon}
            />

            <Menu.MenuItem
                navId="spotify-lyrics-provider"
                id="spotify-lyrics-provider"
                label={t(plugin.musicControls.context.lyrics.provider)}
            >
                {[...providers, ...lyricsAlternative].map(provider =>
                    <Menu.MenuRadioItem
                        key={`lyrics-provider-${provider}`}
                        id={`switch-provider-${provider.toLowerCase()}`}
                        group="pc-spotify-lyrics-switch-provider"
                        label={`${getProviderLabel(provider)}${lyricsInfo?.lyricsVersions[provider] ? " (" + t(plugin.musicControls.context.lyrics.saved) + ")" : ""}`}
                        checked={provider === lyricsInfo?.useLyric}
                        disabled={lyricsAlternative.includes(provider) && !hasLyrics}
                        action={() => {
                            FluxDispatcher.dispatch({
                                // @ts-ignore
                                type: "SPOTIFY_LYRICS_PROVIDER_CHANGE",
                                provider: provider,
                            });
                        }}
                    />
                )}
            </Menu.MenuItem>
        </Menu.Menu>
    );
}
