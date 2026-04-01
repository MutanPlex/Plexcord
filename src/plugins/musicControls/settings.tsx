/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2024 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { plugin, t } from "@api/i18n";
import { definePluginSettings } from "@api/Settings";
import { disableStyle, enableStyle } from "@api/Styles";
import { Button } from "@components/Button";
import { Heading } from "@components/Heading";
import { Paragraph } from "@components/Paragraph";
import { SettingsSection } from "@components/settings/tabs/plugins/components/Common";
import { makeRange, OptionType } from "@utils/types";
import { MaskedLink, Select, showToast, TextInput, Toasts } from "@webpack/common";

import hoverOnlyStyle from "./hoverOnly.css?managed";
import { clearLyricsCache, removeTranslations } from "./spotify/lyrics/api";
import languages from "./spotify/lyrics/providers/translator/languages";
import { Provider } from "./spotify/lyrics/providers/types";

const sliderOptions = {
    markers: makeRange(-2500, 2500, 250),
    stickToMarkers: true,
};

export function toggleHoverControls(value: boolean) {
    (value ? enableStyle : disableStyle)(hoverOnlyStyle);
}

function InstallInstructions() {
    return (
        <section>
            <Heading>{t(plugin.musicControls.modal.install.title)}</Heading>
            <Paragraph>
                {t(plugin.musicControls.modal.install.install, {
                    link: <MaskedLink href="https://github.com/Inrixia/TidaLuna#installation">{t(plugin.musicControls.modal.install.tidaluna)}</MaskedLink>
                })}
            </Paragraph>
        </section>
    );
}

function LyricsProviderSettings() {
    const { store } = settings;

    return (
        <>
            <SettingsSection name={t(plugin.musicControls.option.lyricsProvider.label)} description={t(plugin.musicControls.option.lyricsProvider.description)}>
                <Select
                    options={[
                        { value: Provider.Lrclib, label: () => t(plugin.musicControls.option.lyricsProvider.LRCLIB), default: true },
                        { value: Provider.Spotify, label: () => t(plugin.musicControls.option.lyricsProvider.spotify) },
                    ]}
                    isSelected={v => v === store.lyricsProvider}
                    select={v => { store.lyricsProvider = v as Provider; }}
                    serialize={v => v}
                    placeholder={t(plugin.musicControls.option.lyricsProvider.label)}
                />
            </SettingsSection>

            {store.lyricsProvider === Provider.Spotify && (
                <SettingsSection
                    name={t(plugin.musicControls.option.spotifyLyricsApiUrl.label)}
                    description={t(plugin.musicControls.option.spotifyLyricsApiUrl.description)}
                >
                    <TextInput
                        type="text"
                        value={store.spotifyLyricsApiUrl}
                        onChange={v => {
                            store.spotifyLyricsApiUrl = v;
                            void clearLyricsCache();
                            showToast(t(plugin.musicControls.option.purgeLyricsCache.cacheLyricsPurged), Toasts.Type.SUCCESS);
                        }}
                        placeholder="https://spotify-lyrics-api-pi.vercel.app"
                        maxLength={null}
                    />
                </SettingsSection>
            )}
        </>
    );
}

export const settings = definePluginSettings({
    spotifySectionTitle: {
        type: OptionType.COMPONENT,
        component: () => (
            <section>
                <Heading>{t(plugin.musicControls.option.spotifySectionTitle.label)}</Heading>
            </section>
        )
    },
    showSpotifyControls: {
        label: () => t(plugin.musicControls.option.showSpotifyControls.label),
        description: () => t(plugin.musicControls.option.showSpotifyControls.description),
        type: OptionType.BOOLEAN,
        default: false,
    },
    showSpotifyLyrics: {
        label: () => t(plugin.musicControls.option.showSpotifyLyrics.label),
        description: () => t(plugin.musicControls.option.showSpotifyLyrics.description),
        type: OptionType.BOOLEAN,
        default: false,
    },
    useSpotifyUris: {
        label: () => t(plugin.musicControls.option.useSpotifyUris.label),
        description: () => t(plugin.musicControls.option.useSpotifyUris.description),
        type: OptionType.BOOLEAN,
        default: false
    },
    previousButtonRestartsTrack: {
        label: () => t(plugin.musicControls.option.previousButtonRestartsTrack.label),
        description: () => t(plugin.musicControls.option.previousButtonRestartsTrack.description),
        type: OptionType.BOOLEAN,
        default: true
    },

    tidalSectionTitle: {
        type: OptionType.COMPONENT,
        component: () => (
            <section>
                <Heading>{t(plugin.musicControls.option.tidalSectionTitle.label)}</Heading>
            </section>
        )
    },
    installTidalWithWS: {
        type: OptionType.COMPONENT,
        component: () => <InstallInstructions />
    },
    showTidalControls: {
        label: () => t(plugin.musicControls.option.showTidalControls.label),
        description: () => t(plugin.musicControls.option.showTidalControls.description),
        type: OptionType.BOOLEAN,
        default: false,
    },
    showTidalLyrics: {
        label: () => t(plugin.musicControls.option.showTidalLyrics.label),
        description: () => t(plugin.musicControls.option.showTidalLyrics.description),
        type: OptionType.BOOLEAN,
        default: false,
    },
    hoverControls: {
        label: () => t(plugin.musicControls.option.hoverControls.label),
        description: () => t(plugin.musicControls.option.hoverControls.description),
        type: OptionType.BOOLEAN,
        default: false,
        onChange: v => toggleHoverControls(v)
    },
    showMusicNoteOnNoLyrics: {
        label: () => t(plugin.musicControls.option.showMusicNoteOnNoLyrics.label),
        description: () => t(plugin.musicControls.option.showMusicNoteOnNoLyrics.description),
        type: OptionType.BOOLEAN,
        default: true,
    },
    lyricsPosition: {
        label: () => t(plugin.musicControls.option.lyricsPosition.label),
        description: () => t(plugin.musicControls.option.lyricsPosition.description),
        type: OptionType.SELECT,
        get options() {
            return [
                { value: "above", label: () => t(plugin.musicControls.option.lyricsPosition.above), },
                { value: "below", label: () => t(plugin.musicControls.option.lyricsPosition.below), default: true },
            ];
        },
    },
    lyricsProvider: {
        label: () => t(plugin.musicControls.option.lyricsProvider.label),
        description: () => t(plugin.musicControls.option.lyricsProvider.description),
        type: OptionType.SELECT,
        get options() {
            return [
                { value: Provider.Lrclib, label: () => t(plugin.musicControls.option.lyricsProvider.LRCLIB), default: true },
                { value: Provider.Spotify, label: () => t(plugin.musicControls.option.lyricsProvider.spotify) },
            ];
        },
        hidden: true,
    },
    spotifyLyricsApiUrl: {
        label: () => t(plugin.musicControls.option.spotifyLyricsApiUrl.label),
        description: () => t(plugin.musicControls.option.spotifyLyricsApiUrl.description),
        type: OptionType.STRING,
        hidden: true,
        default: "https://spotify-lyrics-api-pi.vercel.app",
        onChange: async () => {
            await clearLyricsCache();
            showToast(t(plugin.musicControls.option.purgeLyricsCache.cacheLyricsPurged), Toasts.Type.SUCCESS);
        }
    },
    lyricsProviderSettings: {
        type: OptionType.COMPONENT,
        component: LyricsProviderSettings,
    },
    translateTo: {
        label: () => t(plugin.musicControls.option.translateTo.label),
        description: () => t(plugin.musicControls.option.translateTo.description),
        type: OptionType.SELECT,
        options: languages,
        onChange: async () => {
            await removeTranslations();
            showToast(t(plugin.musicControls.option.translateTo.cleared), Toasts.Type.SUCCESS);
        }
    },
    lyricsConversion: {
        label: () => t(plugin.musicControls.option.lyricsConversion.label),
        description: () => t(plugin.musicControls.option.lyricsConversion.description),
        type: OptionType.SELECT,
        options: [
            { value: Provider.None, label: () => t(plugin.musicControls.option.lyricsConversion.none), default: true },
            { value: Provider.Translated, label: () => t(plugin.musicControls.option.lyricsConversion.translate) },
            { value: Provider.Romanized, label: () => t(plugin.musicControls.option.lyricsConversion.romanize) },
        ],
    },
    fallbackProvider: {
        label: () => t(plugin.musicControls.option.fallbackProvider.label),
        description: () => t(plugin.musicControls.option.fallbackProvider.description),
        type: OptionType.BOOLEAN,
        default: true,
    },
    showFailedToasts: {
        label: () => t(plugin.musicControls.option.showFailedToasts.label),
        description: () => t(plugin.musicControls.option.showFailedToasts.description),
        type: OptionType.BOOLEAN,
        default: true,
    },
    lyricDelay: {
        description: "",
        type: OptionType.SLIDER,
        default: 0,
        ...sliderOptions
    },
    purgeLyricsCache: {
        label: () => t(plugin.musicControls.option.purgeLyricsCache.label),
        description: () => t(plugin.musicControls.option.purgeLyricsCache.description),
        type: OptionType.COMPONENT,
        component: () => (
            <Button
                variant="dangerPrimary"
                onClick={() => {
                    clearLyricsCache();
                    showToast(t(plugin.musicControls.option.purgeLyricsCache.cacheLyricsPurged), Toasts.Type.SUCCESS);
                }}
            >
                {t(plugin.musicControls.option.purgeLyricsCache.button)}
            </Button>
        ),
    },
});
