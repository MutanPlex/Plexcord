/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2025 nin0
 * Copyright (c) 2026 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { ApplicationCommandInputType, ApplicationCommandOptionType, findOption, sendBotMessage } from "@api/Commands";
import { plugin, t } from "@api/i18n";
import { definePluginSettings } from "@api/Settings";
import { Devs, PcDevs } from "@utils/constants";
import { sendMessage } from "@utils/discord";
import definePlugin, { OptionType, PluginNative } from "@utils/types";
import { useEffect, useState } from "@webpack/common";

import { Providers } from "./Providers";
import { Settings } from "./Settings";
import SongLinker from "./SongLinker";

export const settings = definePluginSettings({
    servicesSettings: {
        label: () => t(plugin.songLink.option.servicesSettings.label),
        type: OptionType.CUSTOM,
        description: () => t(plugin.songLink.option.servicesSettings.description),
        default: Object.fromEntries(Object.entries(Providers).map(([name, data]) => [name, {
            enabled: true,
            // @ts-ignore
            openInNative: data.native || false
        }]))
    },
    userCountry: {
        label: () => t(plugin.songLink.option.userCountry.label),
        type: OptionType.STRING,
        description: () => t(plugin.songLink.option.userCountry.description),
        default: "US"
    },
    includeMetadata: {
        label: () => t(plugin.songLink.option.includeMetadata.label),
        type: OptionType.BOOLEAN,
        description: () => t(plugin.songLink.option.includeMetadata.description),
        default: true,
    },
    servicesComponent: {
        type: OptionType.COMPONENT,
        component: () => <Settings />
    }
});

export type SongLinkResult = {
    info?: {
        title: string;
        artist: string;
    };
    links: {
        [platform: string]: {
            url: string;
            nativeUri?: string;
        };
    };
};

export const Native = PlexcordNative.pluginHelpers.SongLink as PluginNative<typeof import("./native")>;

function formatMessage(data: SongLinkResult): string | null {
    const lines: string[] = [];

    for (const [serviceKey, service] of Object.entries(settings.store.servicesSettings)) {
        if (!service.enabled) continue;

        const platformData = data.links[serviceKey];
        if (!platformData?.url) continue;

        const provider = Providers[serviceKey];
        const name = provider?.name ?? serviceKey;

        lines.push(`- [${name}](<${platformData.url}>)`);
    }

    if (lines.length === 0) return null;

    const parts: string[] = [];

    if (settings.store.includeMetadata && data.info?.title && data.info?.artist) {
        parts.push(`### **${data.info.title}** — *${data.info.artist}*`);
    }

    parts.push(lines.join("\n"));

    return parts.join("\n");
}

function SongLinkerList({ urls }: { urls: string[]; }) {
    const [resolvedKeys, setResolvedKeys] = useState<Record<string, string | null>>(
        () => Object.fromEntries(urls.map(u => [u, null]))
    );

    useEffect(() => {
        setResolvedKeys(Object.fromEntries(urls.map(u => [u, null])));
    }, [urls.join("\n")]);

    function onResolved(url: string, result: SongLinkResult) {
        const key = result.info
            ? `${result.info.title}\0${result.info.artist}`
            : url;
        setResolvedKeys(prev => prev[url] === key ? prev : { ...prev, [url]: key });
    }

    const seenKeys = new Set<string>();
    const dedupedUrls = urls.filter(url => {
        const key = resolvedKeys[url];
        if (key === null) return true;
        if (seenKeys.has(key)) return false;
        seenKeys.add(key);
        return true;
    });

    return <div style={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        marginTop: "7px",
        width: "fit-content"
    }}>
        {dedupedUrls.map(url => (
            <SongLinker key={url} url={url} onResolved={onResolved} />
        ))}
    </div>;
}

export default definePlugin({
    name: "SongLink",
    description: () => t(plugin.songLink.description),
    dependencies: ["MessageAccessoriesAPI"],
    tags: ["media", "utility"],
    authors: [Devs.nin0, PcDevs.NassCT, PcDevs.MutanPlex],
    settings,
    Providers,
    cache: ({} as Record<string, SongLinkResult>),
    addToCache(link, data: SongLinkResult) {
        this.cache[link] = data;
    },
    renderMessageAccessory(props: Record<string, any>) {
        const { content }: {
            content: string;
        } = props.message;
        if (!content) return;

        const regexes = [
            /https:\/\/(?:open|play)\.spotify\.com\/track\/[a-zA-Z0-9]+/, // spotify
            /https:\/\/(music|itunes)\.apple\.com\/[a-z]{2}\/album\/\S+/, // apple music/itunes
            /https:\/\/music\.youtube\.com\/watch\?v=[0-9A-Za-z_-]+/, // yt music
            /https:\/\/tidal\.com\/track\/[0-9]+\/u/ // tidal
        ];
        const allMatches = content.match(new RegExp(regexes.map(r => r.source).join("|"), "g"));
        if (!allMatches?.length) return;

        const musicLinks = [...new Set(allMatches)];

        return <SongLinkerList urls={musicLinks} />;
    },
    commands: [
        {
            name: "musiclink",
            description: () => t(plugin.songLink.command.musiclink),
            inputType: ApplicationCommandInputType.BUILT_IN,
            options: [
                {
                    name: "url",
                    description: () => t(plugin.songLink.command.url),
                    type: ApplicationCommandOptionType.STRING,
                    required: true,
                },
            ],
            execute: async (opts, ctx) => {
                const url = findOption<string>(opts, "url", "");

                if (!url) {
                    sendBotMessage(ctx.channel.id, {
                        content: t(plugin.songLink.text.pleaseProvideAMusic),
                    });
                    return;
                }

                sendBotMessage(ctx.channel.id, {
                    content: t(plugin.songLink.text.thisWillTakeA),
                });

                try {
                    const data = await Native.getTrackData(url);
                    const formatted = formatMessage(data);

                    if (!formatted) {
                        sendBotMessage(ctx.channel.id, {
                            content:
                                t(plugin.songLink.text.noAlternativePlatformsFound),
                        });
                        return;
                    }

                    sendMessage(ctx.channel.id, { content: formatted });
                } catch (e: any) {
                    sendBotMessage(ctx.channel.id, {
                        content: t(plugin.songLink.text.failedToResolveMusic),
                    });
                }
            },
        },
    ],
});
