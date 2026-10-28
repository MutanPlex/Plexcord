/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2026 Vendicated and contributors
 * Copyright (c) 2026 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { csp, plugin, t } from "@api/i18n";
import { Button } from "@components/Button";
import { Notice } from "@components/Notice";
import { SettingsSection } from "@components/settings/tabs/plugins/components/Common";
import { Switch } from "@components/Switch";
import { useCspPermission } from "@utils/csp";
import { Margins } from "@utils/margins";
import { classes } from "@utils/misc";
import { Select, Slider, TabBar, TextInput, useState } from "@webpack/common";

import { settings, SettingsStore } from "./settings";
import { NameFormat, ServiceTab } from "./types";

type SettingsKey = keyof SettingsStore;

function SwitchSetting({ name, description, settingsKey }: { name: string; description: string; settingsKey: SettingsKey; }) {
    const [value, setValue] = useState(settings.store[settingsKey] ?? false);
    return (
        <SettingsSection tag="label" inlineSetting id={name} name={name} description={description}>
            <Switch
                checked={Boolean(value)}
                onChange={v => { setValue(v); (settings.store[settingsKey] as boolean) = v; }}
            />
        </SettingsSection>
    );
}

function TextSetting({ name, description, settingsKey, placeholder }: { name: string; description: string; settingsKey: SettingsKey; placeholder?: string; }) {
    const [value, setValue] = useState(settings.store[settingsKey] ?? "");
    return (
        <SettingsSection id={name} name={name} description={description}>
            <TextInput
                type="text"
                value={String(value)}
                onChange={v => { setValue(v); (settings.store[settingsKey] as string) = v; }}
                placeholder={placeholder ?? t(plugin.richPresence.text.enterValue)}
            />
        </SettingsSection>
    );
}

function AllowServerSetting({ settingsKey }: { settingsKey: SettingsKey; }) {
    const url = String(settings.use([settingsKey])[settingsKey] ?? "").trim();
    const fullUrl = url && (/^https?:\/\//.test(url) ? url : `https://${url}`);
    const [isAllowed, allow] = useCspPermission(fullUrl, ["connect-src"], "RichPresence");

    if (isAllowed) return null;

    return (
        <Notice variant="warning" action={<Button size="small" variant="secondary" onClick={allow}>{t(csp.notice.allowHost)}</Button>}>
            {t(csp.notice.blocked, { host: URL.parse(fullUrl)?.host })}
        </Notice>
    );
}

function SelectSetting({ name, description, settingsKey, options }: { name: string; description: string; settingsKey: SettingsKey; options: { label: string; value: string | number; }[]; }) {
    const [value, setValue] = useState(settings.store[settingsKey] ?? options[0]?.value);
    return (
        <SettingsSection id={name} name={name} description={description}>
            <Select
                options={options}
                isSelected={v => v === value}
                select={v => { setValue(v); (settings.store[settingsKey] as string) = v; }}
                serialize={String}
                closeOnSelect
                maxVisibleItems={5}
            />
        </SettingsSection>
    );
}

function AudioBookShelfSettings() {
    return (
        <>
            <SettingsSection id="audiobookshelf-settings" name="" description={t(plugin.richPresence.text.displayYourCurrentlyPlaying)} />
            <TextSetting name={t(plugin.fileUpload.panel.serverUrl)} description={t(plugin.richPresence.text.audiobookshelfServerUrl)} settingsKey="abs_serverUrl" placeholder="https://abs.example.com" />
            <AllowServerSetting settingsKey="abs_serverUrl" />
            <TextSetting name={t(plugin.fileUpload.panel.username)} description={t(plugin.richPresence.text.audiobookshelfUsername)} settingsKey="abs_username" />
            <TextSetting name={t(plugin.richPresence.panel.password)} description={t(plugin.richPresence.text.audiobookshelfPassword)} settingsKey="abs_password" />
        </>
    );
}

function TosuSettings() {
    return (
        <SettingsSection id="tosu-settings" name="" description={t(plugin.richPresence.text.connectsToTosuVia)} />
    );
}

const nameFormatOptions = [
    { label: t(plugin.richPresence.text.useCustomStatusName), value: NameFormat.StatusName },
    { label: t(plugin.richPresence.text.useFormatArtistSong), value: NameFormat.ArtistFirst },
    { label: t(plugin.richPresence.text.useFormatSongArtist), value: NameFormat.SongFirst },
    { label: t(plugin.richPresence.text.useArtistNameOnly), value: NameFormat.ArtistOnly },
    { label: t(plugin.richPresence.text.useSongNameOnly), value: NameFormat.SongOnly },
    { label: t(plugin.richPresence.text.useAlbumName), value: NameFormat.AlbumName },
];

function StatsFmSettings() {
    return (
        <>
            <SettingsSection id="statsfm-settings" name="" description={t(plugin.richPresence.text.showWhatYouRe)} />
            <TextSetting name={t(plugin.fileUpload.panel.username)} description={t(plugin.richPresence.text.statsFmUsername)} settingsKey="sfm_username" placeholder={t(plugin.richPresence.panel.statsFmUsername)} />
            <TextSetting name={t(plugin.richPresence.panel.customStatusText)} description={t(plugin.richPresence.text.customStatusText)} settingsKey="sfm_statusName" placeholder={t(plugin.richPresence.text.statsFm)} />
            <SelectSetting name={t(plugin.richPresence.panel.nameFormat)} description={t(plugin.richPresence.text.nameFormat)} settingsKey="sfm_nameFormat" options={nameFormatOptions} />
            <SelectSetting name={t(plugin.richPresence.panel.missingArtFallback)} description={t(plugin.richPresence.text.fallbackWhenArtIs)} settingsKey="sfm_missingArt" options={[
                { label: t(plugin.richPresence.text.useLargeStatsFm), value: "StatsFmLogo" },
                { label: t(plugin.richPresence.text.useGenericPlaceholder), value: "placeholder" },
            ]} />
            <SwitchSetting name={t(plugin.richPresence.panel.showListeningStatus)} description={t(plugin.richPresence.text.showListeningStatus)} settingsKey="sfm_useListeningStatus" />
            <SwitchSetting name={t(plugin.richPresence.panel.showStatsFmLogo)} description={t(plugin.richPresence.text.showStatsFmLogo)} settingsKey="sfm_showLogo" />
            <SwitchSetting name={t(plugin.richPresence.panel.showProfileLink)} description={t(plugin.richPresence.text.showLinkToStats)} settingsKey="sfm_shareUsername" />
            <SwitchSetting name={t(plugin.richPresence.panel.showSongLink)} description={t(plugin.richPresence.text.showLinkToSong)} settingsKey="sfm_shareSong" />
            <SwitchSetting name={t(plugin.richPresence.panel.hideWithSpotify)} description={t(plugin.richPresence.text.hideStatsFmPresence)} settingsKey="sfm_hideWithSpotify" />
            <SwitchSetting name={t(plugin.richPresence.panel.hideWithExternalRpc)} description={t(plugin.richPresence.text.hideStatsFmPresence2)} settingsKey="sfm_hideWithExternalRPC" />
            <SwitchSetting name={t(plugin.richPresence.panel.disableAlbumArt)} description={t(plugin.richPresence.text.disableDownloadingAlbumArt)} settingsKey="sfm_alwaysHideArt" />
        </>
    );
}

function JellyfinSettings() {
    return (
        <>
            <SettingsSection id="jellyfin-settings" name="" description={t(plugin.richPresence.text.showWhatYouRe2)} />
            <TextSetting name={t(plugin.fileUpload.panel.serverUrl)} description={t(plugin.richPresence.text.jellyfinServerUrl)} settingsKey="jf_serverUrl" placeholder="https://jellyfin.example.com" />
            <AllowServerSetting settingsKey="jf_serverUrl" />
            <TextSetting name={t(plugin.richPresence.panel.apiKey)} description={t(plugin.richPresence.text.jellyfinApiKey)} settingsKey="jf_apiKey" placeholder={t(plugin.richPresence.text.authorization)} />
            <TextSetting name={t(plugin.richPresence.panel.userId)} description={t(plugin.richPresence.text.jellyfinUserId)} settingsKey="jf_userId" placeholder={t(plugin.richPresence.text.userIdFromProfile)} />
            <SelectSetting name={t(plugin.richPresence.panel.nameDisplay)} description={t(plugin.richPresence.text.nameDisplayFormat)} settingsKey="jf_nameDisplay" options={[
                { label: t(plugin.richPresence.text.seriesMovieName), value: "default" },
                { label: t(plugin.richPresence.text.seriesEpisodeTrackMovie), value: "full" },
                { label: t(plugin.richPresence.text.custom), value: "custom" },
            ]} />
            <TextSetting name={t(plugin.richPresence.panel.customNameTemplate)} description={t(plugin.richPresence.text.customNameTemplate)} settingsKey="jf_customName" placeholder={t(plugin.richPresence.text.nameOnJellyfin)} />
            <SelectSetting name={t(plugin.richPresence.panel.coverType)} description={t(plugin.richPresence.text.coverTypeForTv)} settingsKey="jf_coverType" options={[
                { label: t(plugin.richPresence.text.seriesCover), value: "series" },
                { label: t(plugin.richPresence.text.episodeCover), value: "episode" },
            ]} />
            <SelectSetting name={t(plugin.richPresence.panel.episodeFormat)} description={t(plugin.richPresence.text.episodeNumberFormat)} settingsKey="jf_episodeFormat" options={[
                { label: "S01E01", value: "long" },
                { label: "1x01", value: "short" },
                { label: t(plugin.richPresence.text.season1Episode1), value: "fulltext" },
            ]} />
            <SelectSetting name={t(plugin.richPresence.panel.overridePresenceType)} description={t(plugin.richPresence.text.overrideRichPresenceType)} settingsKey="jf_overrideType" options={[
                { label: t(plugin.richPresence.text.off), value: "off" },
                { label: t(plugin.richPresence.text.listening), value: "2" },
                { label: t(plugin.richPresence.text.playing), value: "0" },
                { label: t(plugin.richPresence.text.streaming), value: "1" },
                { label: t(plugin.richPresence.text.watching), value: "3" },
            ]} />
            <SwitchSetting name={t(plugin.richPresence.panel.showEpisodeName)} description={t(plugin.richPresence.text.showEpisodeNameAfter)} settingsKey="jf_showEpisodeName" />
            <SwitchSetting name={t(plugin.richPresence.panel.showWhenPaused)} description={t(plugin.richPresence.text.showPresenceWhenMedia)} settingsKey="jf_showPausedState" />
            <SwitchSetting name={t(plugin.richPresence.panel.privacyMode)} description={t(plugin.richPresence.text.hideMediaDetails)} settingsKey="jf_privacyMode" />
        </>
    );
}

function GensokyoRadioSettings() {
    const [value, setValue] = useState(settings.store.gr_refreshInterval ?? 15);
    return (
        <>
            <SettingsSection id="gensokyoradio-settings" name="" description={t(plugin.richPresence.text.discordRichPresenceFor)} />
            <SettingsSection id="refresh-interval" name={t(plugin.richPresence.panel.refreshInterval)} description={t(plugin.richPresence.text.refreshIntervalInSeconds)}>
                <Slider
                    markers={[1, 2, 2.5, 3, 5, 10, 15]}
                    initialValue={value}
                    onValueChange={v => { setValue(v); settings.store.gr_refreshInterval = v; }}
                    onValueRender={v => `${v}s`}
                    stickToMarkers
                />
            </SettingsSection>
        </>
    );
}

const ND_DYNAMIC_KEYS: SettingsKey[] = ["nd_activityType", "nd_albumArtMode"];

function NavidromeSettings() {
    const [refreshInterval, setRefreshInterval] = useState(settings.store.nd_refreshInterval ?? 10);
    const { nd_activityType, nd_albumArtMode } = settings.use(ND_DYNAMIC_KEYS);
    return (
        <>
            <SettingsSection id="navidrome-settings" name="" description={t(plugin.richPresence.text.showWhatYouRe3)} />
            <TextSetting name={t(plugin.fileUpload.panel.serverUrl)} description={t(plugin.richPresence.text.navidromeServerUrlMust)} settingsKey="nd_serverUrl" placeholder="https://navidrome.example.com" />
            <AllowServerSetting settingsKey="nd_serverUrl" />
            <TextSetting name={t(plugin.fileUpload.panel.username)} description={t(plugin.richPresence.text.navidromeUsername)} settingsKey="nd_username" />
            <TextSetting name={t(plugin.richPresence.panel.password)} description={t(plugin.richPresence.text.navidromePassword)} settingsKey="nd_password" />
            <TextSetting name={t(plugin.richPresence.panel.clientId)} description={t(plugin.richPresence.text.optionalDiscordApplicationClient)} settingsKey="nd_clientId" placeholder="1470554657506984069" />
            <SelectSetting name={t(plugin.richPresence.panel.albumArtMode)} description={t(plugin.richPresence.text.howToFetchAlbum)} settingsKey="nd_albumArtMode" options={[
                { label: t(plugin.richPresence.text.none), value: "none" },
                { label: t(plugin.richPresence.text.navidromeInstanceExposesServer), value: "instance" },
                { label: t(plugin.richPresence.text.lastFmApiSends), value: "lastfm" },
            ]} />
            {nd_albumArtMode === "lastfm" && (
                <TextSetting name={t(plugin.richPresence.panel.lastFmApiKey)} description={t(plugin.richPresence.text.optionalProvideYourOwn)} settingsKey="nd_lastfmApiKey" placeholder="feff915bf5987580c9dc354d523dc6b9" />
            )}
            <SwitchSetting name={t(plugin.richPresence.panel.showSmallImage)} description={t(plugin.richPresence.text.showNavidromeLogoIn)} settingsKey="nd_showSmallImage" />
            <SwitchSetting name={t(plugin.richPresence.panel.showAlbum)} description={t(plugin.richPresence.text.showAlbumNameIn)} settingsKey="nd_showAlbum" />
            <SelectSetting name={t(plugin.richPresence.panel.activityType)} description={t(plugin.richPresence.text.whichTypeOfActivity)} settingsKey="nd_activityType" options={[
                { label: t(plugin.richPresence.text.listening), value: 2 },
                { label: t(plugin.richPresence.text.playing), value: 0 },
                { label: t(plugin.richPresence.text.watching), value: 3 }
            ]} />
            <SelectSetting name={t(plugin.richPresence.panel.statusDisplayType)} description={t(plugin.richPresence.text.showTheStateDetails)} settingsKey="nd_statusDisplayType" options={[
                { label: t(plugin.richPresence.text.donTShowShows), value: "off" },
                { label: t(plugin.richPresence.text.showStateLineContent), value: "artist" },
                { label: t(plugin.richPresence.text.showDetailsLineContent), value: "track" }
            ]} />
            <SwitchSetting name={t(plugin.richPresence.panel.hideOnPause)} description={t(plugin.richPresence.text.hideRichPresenceWhen)} settingsKey="nd_hideOnPause" />
            {Number(nd_activityType ?? 2) !== 0 && (
                <TextSetting name={t(plugin.richPresence.panel.activityNameFormat)} description={t(plugin.richPresence.text.theListeningToText)} settingsKey="nd_nameString" placeholder={t(plugin.richPresence.text.navidrome)} />
            )}
            <TextSetting name={t(plugin.richPresence.panel.detailsFormat)} description={t(plugin.richPresence.text.theMainLineShowing)} settingsKey="nd_detailsString" placeholder={t(plugin.richPresence.text.song)} />
            <TextSetting name={t(plugin.richPresence.panel.stateFormat)} description={t(plugin.richPresence.text.theLineBelowThe)} settingsKey="nd_stateString" placeholder={t(plugin.richPresence.text.artist)} />
            <TextSetting name={t(plugin.richPresence.panel.largeTextFormat)} description={t(plugin.richPresence.text.theAlbumLineE)} settingsKey="nd_largeTextString" placeholder={t(plugin.richPresence.text.album)} />
            <SettingsSection id="nd-refresh-interval" name={t(plugin.richPresence.panel.refreshInterval)} description={t(plugin.richPresence.text.refreshIntervalInSeconds)}>
                <Slider
                    markers={[1, 2, 5, 10, 15]}
                    initialValue={refreshInterval}
                    onValueChange={v => { setRefreshInterval(v); settings.store.nd_refreshInterval = v; }}
                    onValueRender={v => `${v}s`}
                    stickToMarkers
                />
            </SettingsSection>
        </>
    );
}

const TAB_COMPONENTS: Record<ServiceTab, React.ComponentType> = {
    [ServiceTab.AudioBookShelf]: AudioBookShelfSettings,
    [ServiceTab.Tosu]: TosuSettings,
    [ServiceTab.StatsFm]: StatsFmSettings,
    [ServiceTab.Jellyfin]: JellyfinSettings,
    [ServiceTab.GensokyoRadio]: GensokyoRadioSettings,
    [ServiceTab.Navidrome]: NavidromeSettings,
};

const TAB_LABELS: Record<ServiceTab, string> = {
    [ServiceTab.AudioBookShelf]: "AudioBookShelf",
    [ServiceTab.Tosu]: "osu!",
    [ServiceTab.StatsFm]: "stats.fm",
    [ServiceTab.Jellyfin]: "Jellyfin",
    [ServiceTab.GensokyoRadio]: "Gensokyo Radio",
    [ServiceTab.Navidrome]: "Navidrome",
};

const ENABLE_KEYS: Record<ServiceTab, SettingsKey> = {
    [ServiceTab.AudioBookShelf]: "abs_enabled",
    [ServiceTab.Tosu]: "tosu_enabled",
    [ServiceTab.StatsFm]: "sfm_enabled",
    [ServiceTab.Jellyfin]: "jf_enabled",
    [ServiceTab.GensokyoRadio]: "gr_enabled",
    [ServiceTab.Navidrome]: "nd_enabled",
};

const TABS = Object.values(ServiceTab);

export function SettingsPanel() {
    const [currentTab, setCurrentTab] = useState(ServiceTab.AudioBookShelf);
    const TabComponent = TAB_COMPONENTS[currentTab];

    return (
        <div className={classes("pc-plugins-settings", Margins.top16)}>
            <TabBar
                type="top"
                look="brand"
                selectedItem={currentTab}
                onItemSelect={setCurrentTab}
            >
                {TABS.map(tab => (
                    <TabBar.Item key={tab} id={tab}>
                        {TAB_LABELS[tab]}
                    </TabBar.Item>
                ))}
            </TabBar>
            <SwitchSetting key={currentTab} name={t(plugin.richPresence.panel.enabled)} description={t(plugin.richPresence.text.enableTabLabelsCurrenttab, { TAB_LABELS_currentTab: TAB_LABELS[currentTab] })} settingsKey={ENABLE_KEYS[currentTab]} />
            <TabComponent />
        </div>
    );
}
