/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2025 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { t } from "@api/i18n";
import { definePluginSettings } from "@api/Settings";
import { Heading } from "@components/Heading";
import { Paragraph } from "@components/Paragraph";
import { Logger } from "@utils/Logger";
import { OptionType } from "@utils/types";
import { findByCodeLazy, findByPropsLazy } from "@webpack";
import { MediaEngineStore, SearchableSelect, useEffect, useState } from "@webpack/common";

interface PickerProps {
    streamMediaSelection: any[];
    streamMedia: any[];
}

const getDesktopSources = findByCodeLazy("desktop sources");
const configModule = findByPropsLazy("getOutputVolume");
const log = new Logger("InstantScreenShare");
export const settings = definePluginSettings({
    streamMedia: {
        type: OptionType.COMPONENT,
        component: SettingSection,
    },
    includeVideoDevices: {
        get label() {
            return t("plugin.instantScreenshare.option.includeVideoDevices.label");
        },
        get description() {
            return t("plugin.instantScreenshare.option.includeVideoDevices.description");
        },
        type: OptionType.BOOLEAN,
        default: false,
    },
    autoMute: {
        get label() {
            return t("plugin.instantScreenshare.option.autoMute.label");
        },
        get description() {
            return t("plugin.instantScreenshare.option.autoMute.description");
        },
        type: OptionType.BOOLEAN,
        default: false,
    },
    autoDeafen: {
        get label() {
            return t("plugin.instantScreenshare.option.autoDeafen.label");
        },
        get description() {
            return t("plugin.instantScreenshare.option.autoDeafen.description");
        },
        type: OptionType.BOOLEAN,
        default: false,
    },
    toolboxManagement: {
        get label() {
            return t("plugin.instantScreenshare.option.toolboxManagement.label");
        },
        get description() {
            return t("plugin.instantScreenshare.option.toolboxManagement.description");
        },
        type: OptionType.BOOLEAN,
        default: true,
    }
});

export async function getCurrentMedia() {
    const media = MediaEngineStore.getMediaEngine();
    const sources = await getDesktopSources(media, ["screen", "window"], null) ?? [];

    if (settings.store.includeVideoDevices) {
        try {
            const videoDevices = Object.values(configModule.getVideoDevices() || {});
            const videoSources = videoDevices.map((device: any) => ({
                id: device.id,
                name: device.name,
                type: "video_device"
            }));
            sources.push(...videoSources);
        } catch (e) {
            new log.warn("Failed to get video devices:", e);
        }
    }

    const streamMedia = sources.find(screen => screen.id === settings.store.streamMedia);
    if (streamMedia) return streamMedia;

    log.error(`Stream Media "${settings.store.streamMedia}" not found. Resetting to default.`);

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
    const { streamMedia, includeVideoDevices } = settings.use(["streamMedia", "includeVideoDevices"]);
    const media = MediaEngineStore.getMediaEngine();
    const [streamMediaSelection, setStreamMediaSelection] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        let active = true;
        async function fetchMedia() {
            setLoading(true);
            const sources = await getDesktopSources(media, ["screen", "window"], null) ?? [];

            if (includeVideoDevices) {
                try {
                    const videoDevices = Object.values(configModule.getVideoDevices() || {});
                    const videoSources = videoDevices.map((device: any) => ({
                        id: device.id,
                        name: device.name,
                        type: "video_device"
                    }));
                    sources.push(...videoSources);
                } catch (e) {
                    log.warn("Failed to get video devices:", e);
                }
            }

            if (active) {
                setStreamMediaSelection(sources);
                setLoading(false);
            }
        }
        fetchMedia();
        return () => { active = false; };
    }, [includeVideoDevices]);

    if (loading) return <Paragraph>{t("plugin.instantScreenshare.streamMedia.loading")}</Paragraph>;
    if (!streamMediaSelection.length) return <Paragraph>{t("plugin.instantScreenshare.streamMedia.none")}</Paragraph>;

    return <StreamSimplePicker streamMediaSelection={streamMediaSelection} streamMedia={streamMedia} />;
}

function SettingSection() {
    return (
        <section>
            <Heading>{t("plugin.instantScreenshare.option.streamMedia.label")}</Heading>
            <Paragraph>{t("plugin.instantScreenshare.option.streamMedia.description")}</Paragraph>
            <ScreenSetting />
        </section>
    );
}
