/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2024 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { t, tJsx } from "@api/i18n";
import { definePluginSettings } from "@api/Settings";
import { disableStyle, enableStyle } from "@api/Styles";
import { Heading } from "@components/Heading";
import { Paragraph } from "@components/Paragraph";
import { makeRange, OptionType } from "@utils/types";
import { Button, MaskedLink, showToast, Toasts } from "@webpack/common";

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
            <Heading>{t("plugin.musicControls.modal.install.title")}</Heading>
            <Paragraph>
                {tJsx("plugin.musicControls.modal.install.install", {
                    link: <MaskedLink href="https://github.com/Inrixia/TidaLuna#installation">{t("plugin.musicControls.modal.install.tidaluna")}</MaskedLink>
                })}
            </Paragraph>
        </section>
    );
}

export const settings = definePluginSettings({
    SpotifySectionTitle: {
        type: OptionType.COMPONENT,
        component: () => (
            <section>
                <Heading>{t("plugin.musicControls.option.SpotifySectionTitle.label")}</Heading>
            </section>
        )
    },
    showSpotifyControls: {
        get label() {
            return t("plugin.musicControls.option.showSpotifyControls.label");
        },
        get description() {
            return t("plugin.musicControls.option.showSpotifyControls.description");
        },
        type: OptionType.BOOLEAN,
        default: false,
    },
    showSpotifyLyrics: {
        get label() {
            return t("plugin.musicControls.option.showSpotifyLyrics.label");
        },
        get description() {
            return t("plugin.musicControls.option.showSpotifyLyrics.description");
        },
        type: OptionType.BOOLEAN,
        default: false,
    },
    useSpotifyUris: {
        get label() {
            return t("plugin.musicControls.option.useSpotifyUris.label");
        },
        get description() {
            return t("plugin.musicControls.option.useSpotifyUris.description");
        },
        type: OptionType.BOOLEAN,
        default: false
    },
    previousButtonRestartsTrack: {
        get label() {
            return t("plugin.musicControls.option.previousButtonRestartsTrack.label");
        },
        get description() {
            return t("plugin.musicControls.option.previousButtonRestartsTrack.description");
        },
        type: OptionType.BOOLEAN,
        default: true
    },

    TidalSectionTitle: {
        type: OptionType.COMPONENT,
        component: () => (
            <section>
                <Heading>{t("plugin.musicControls.option.TidalSectionTitle.label")}</Heading>
            </section>
        )
    },
    installTidalWithWS: {
        type: OptionType.COMPONENT,
        component: () => <InstallInstructions />
    },
    showTidalControls: {
        get label() {
            return t("plugin.musicControls.option.showTidalControls.label");
        },
        get description() {
            return t("plugin.musicControls.option.showTidalControls.description");
        },
        type: OptionType.BOOLEAN,
        default: false,
    },
    showTidalLyrics: {
        get label() {
            return t("plugin.musicControls.option.showTidalLyrics.label");
        },
        get description() {
            return t("plugin.musicControls.option.showTidalLyrics.description");
        },
        type: OptionType.BOOLEAN,
        default: false,
    },

    YtmSectionTitle: {
        type: OptionType.COMPONENT,
        component: () => (
            <section>
                <Heading>{t("plugin.musicControls.option.YtmSectionTitle.label")}</Heading>
            </section>
        )
    },
    showYoutubeMusicControls: {
        get label() {
            return t("plugin.musicControls.option.showYoutubeMusicControls.label");
        },
        get description() {
            return t("plugin.musicControls.option.showYoutubeMusicControls.description");
        },
        type: OptionType.BOOLEAN,
        default: false
    },
    YoutubeMusicApiUrl: {
        get label() {
            return t("plugin.musicControls.option.YoutubeMusicApiUrl.label");
        },
        get description() {
            return t("plugin.musicControls.option.YoutubeMusicApiUrl.description");
        },
        type: OptionType.STRING,
        default: "http://localhost:26538",
        placeholder: "http://localhost:26538",
        onChange: (value: string) => {
            if (URL.canParse(value)) {
                settings.store.YoutubeMusicApiUrl = value;
            } else {
                showToast(t("plugin.musicControls.error.invalidUrlCustomApi") + ": " + value, Toasts.Type.FAILURE);
                settings.store.YoutubeMusicApiUrl = settings.def.YoutubeMusicApiUrl.default;
            }
        }
    },
    hoverControls: {
        get label() {
            return t("plugin.musicControls.option.hoverControls.label");
        },
        get description() {
            return t("plugin.musicControls.option.hoverControls.description");
        },
        type: OptionType.BOOLEAN,
        default: false,
        onChange: v => toggleHoverControls(v)
    },
    ShowMusicNoteOnNoLyrics: {
        get label() {
            return t("plugin.musicControls.option.ShowMusicNoteOnNoLyrics.label");
        },
        get description() {
            return t("plugin.musicControls.option.ShowMusicNoteOnNoLyrics.description");
        },
        type: OptionType.BOOLEAN,
        default: true,
    },
    LyricsPosition: {
        get label() {
            return t("plugin.musicControls.option.LyricsPosition.label");
        },
        get description() {
            return t("plugin.musicControls.option.LyricsPosition.description");
        },
        type: OptionType.SELECT,
        get options() {
            return [
                { value: "above", label: t("plugin.musicControls.option.LyricsPosition.above"), },
                { value: "below", label: t("plugin.musicControls.option.LyricsPosition.below"), default: true },
            ];
        },
    },
    LyricsProvider: {
        get label() {
            return t("plugin.musicControls.option.LyricsProvider.label");
        },
        get description() {
            return t("plugin.musicControls.option.LyricsProvider.description");
        },
        type: OptionType.SELECT,
        get options() {
            return [
                { value: Provider.Spotify, label: t("plugin.musicControls.option.LyricsProvider.spotify"), default: true },
                { value: Provider.Lrclib, label: t("plugin.musicControls.option.LyricsProvider.LRCLIB") },
            ];
        },
    },
    TranslateTo: {
        get label() {
            return t("plugin.musicControls.option.TranslateTo.label");
        },
        get description() {
            return t("plugin.musicControls.option.TranslateTo.description");
        },
        type: OptionType.SELECT,
        options: languages,
        onChange: async () => {
            await removeTranslations();
            showToast(t("plugin.musicControls.option.TranslateTo.cleared"), Toasts.Type.SUCCESS);
        }
    },
    LyricsConversion: {
        description: "Automatically translate or romanize lyrics",
        type: OptionType.SELECT,
        get options() {
            return [
                { value: Provider.None, label: t("plugin.musicControls.option.LyricsConversion.none"), default: true },
                { value: Provider.Translated, label: t("plugin.musicControls.option.LyricsConversion.translate") },
                { value: Provider.Romanized, label: t("plugin.musicControls.option.LyricsConversion.romanize") },
            ];
        }
    },
    FallbackProvider: {
        get label() {
            return t("plugin.musicControls.option.FallbackProvider.label");
        },
        get description() {
            return t("plugin.musicControls.option.FallbackProvider.description");
        },
        type: OptionType.BOOLEAN,
        default: true,
    },
    ShowFailedToasts: {
        get label() {
            return t("plugin.musicControls.option.ShowFailedToasts.label");
        },
        get description() {
            return t("plugin.musicControls.option.ShowFailedToasts.description");
        },
        type: OptionType.BOOLEAN,
        default: true,
    },
    LyricDelay: {
        description: "",
        type: OptionType.SLIDER,
        default: 0,
        ...sliderOptions
    },
    PurgeLyricsCache: {
        get label() {
            return t("plugin.musicControls.option.PurgeLyricsCache.label");
        },
        get description() {
            return t("plugin.musicControls.option.PurgeLyricsCache.description");
        },
        type: OptionType.COMPONENT,
        component: () => (
            <Button
                color={Button.Colors.RED}
                onClick={() => {
                    clearLyricsCache();
                    showToast(t("plugin.musicControls.option.PurgeLyricsCache.cacheLyricsPurged"), Toasts.Type.SUCCESS);
                }}
            >
                {t("plugin.musicControls.option.PurgeLyricsCache.button")}
            </Button>
        ),
    },
});
