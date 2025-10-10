/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2025 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { t } from "@api/i18n";
import { definePluginSettings } from "@api/Settings";
import { Logger } from "@utils/Logger";
import { OptionType } from "@utils/types";
import { findByCodeLazy } from "@webpack";
import { Forms, MediaEngineStore, SearchableSelect, useEffect, useState } from "@webpack/common";

interface PickerProps {
    streamMediaSelection: any[];
    streamMedia: any[];
}

const getDesktopSources = findByCodeLazy("desktop sources");

export const settings = definePluginSettings({
    streamMedia: {
        type: OptionType.COMPONENT,
        component: SettingSection,
    },
});

export async function getCurrentMedia() {
    const media = MediaEngineStore.getMediaEngine();
    const sources = [
        ...(await getDesktopSources(media, ["screen"], null) ?? []),
        ...(await getDesktopSources(media, ["window", "application"], null) ?? [])
    ];
    const streamMedia = sources.find(screen => screen.id === settings.store.streamMedia);
    console.log(sources);

    if (streamMedia) return streamMedia;

    new Logger("InstantScreenShare").error(`Stream Media "${settings.store.streamMedia}" not found. Resetting to default.`);

    settings.store.streamMedia = sources[0];
    return sources[0];
}

function StreamSimplePicker({ streamMediaSelection, streamMedia }: PickerProps) {
    const options = streamMediaSelection.map(screen => ({
        label: screen.name,
        value: screen.id,
        default: streamMediaSelection[0],
    }));

    return (
        <SearchableSelect
            placeholder={t("plugin.instantScreenshare.option.streamMedia.placeholder")}
            maxVisibleItems={5}
            options={options}
            value={options.find(o => o.value === streamMedia)}
            onChange={v => settings.store.streamMedia = v}
            closeOnSelect
        />
    );
}

function ScreenSetting() {
    const { streamMedia } = settings.use(["streamMedia"]);
    const media = MediaEngineStore.getMediaEngine();
    const [streamMediaSelection, setStreamMediaSelection] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        let active = true;
        async function fetchMedia() {
            setLoading(true);
            const sources = [
                ...(await getDesktopSources(media, ["screen"], null) ?? []),
                ...(await getDesktopSources(media, ["window", "application"], null) ?? [])
            ];

            if (active) {
                setStreamMediaSelection(sources);
                setLoading(false);
            }
        }
        fetchMedia();
        return () => { active = false; };
    }, []);

    if (loading) return <Forms.FormText>{t("plugin.instantScreenshare.option.streamMedia.loading")}</Forms.FormText>;
    if (!streamMediaSelection.length) return <Forms.FormText>{t("plugin.instantScreenshare.option.streamMedia.none")}</Forms.FormText>;

    return <StreamSimplePicker streamMediaSelection={streamMediaSelection} streamMedia={streamMedia} />;
}

function SettingSection() {
    return (
        <section>
            <Forms.FormTitle>{t("plugin.instantScreenshare.option.streamMedia.label")}</Forms.FormTitle>
            <Forms.FormText>{t("plugin.instantScreenshare.option.streamMedia.description")}</Forms.FormText>
            <ScreenSetting />
        </section>
    );
}
