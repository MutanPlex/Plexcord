/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2026 Vendicated and contributors
 * Copyright (c) 2026 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import "./style.css";

import { findGroupChildrenByChildId, NavContextMenuPatchCallback } from "@api/ContextMenu";
import { plugin, t } from "@api/i18n";
import { definePluginSettings } from "@api/Settings";
import { VideoIcon } from "@components/Icons";
import { Message } from "@plexcord/discord-types";
import { PcDevs } from "@utils/constants";
import { isNonNullish } from "@utils/guards";
import definePlugin, { OptionType } from "@utils/types";
import { Menu, showToast } from "@webpack/common";
import type { ReactNode } from "react";

import { HideWhileOpen, Status } from "./components";
import { Native, play, playerNames, startPolling, stopPolling, useStatusStore } from "./store";
import type { MediaItem } from "./types";
import { canOpen, mediaKey } from "./utils";

const settings = definePluginSettings({
    player: {
        type: OptionType.SELECT,
        label: () => t(plugin.externalPlayer.option.player.label),
        description: () => t(plugin.externalPlayer.option.player.description),
        options: [
            { label: "mpv", value: "mpv", default: true },
            { label: "VLC", value: "vlc" }
        ] as const
    },
    openOnClick: {
        type: OptionType.BOOLEAN,
        label: () => t(plugin.externalPlayer.option.openOnClick.label),
        description: () => t(plugin.externalPlayer.option.openOnClick.description),
        default: false
    },
    path: {
        type: OptionType.STRING,
        label: () => t(plugin.externalPlayer.option.path.label),
        description: () => t(plugin.externalPlayer.option.path.description),
        default: ""
    },
    args: {
        type: OptionType.STRING,
        label: () => t(plugin.externalPlayer.option.args.label),
        description: () => t(plugin.externalPlayer.option.args.description),
        default: ""
    }
});

const mediaExtensions = /\.(mp4|webm|mov|m4v|mkv|mp3|ogg|oga|wav|flac|m4a|opus)$/i;

function getMedia(message: Message) {
    const media: MediaItem[] = [];

    for (const a of message.attachments)
        if (/^(video|audio)\//.test(a.content_type ?? ""))
            media.push({ url: a.url, name: a.filename, keys: [mediaKey(a.url)] });

    for (const e of message.embeds)
        if (e.video)
            media.push({
                url: e.type === "video" && e.provider ? e.url : e.video.proxyURL ?? e.video.url,
                name: e.rawTitle || e.provider?.name || e.url,
                keys: [e.url, e.video.url, e.video.proxyURL, e.thumbnail?.url, e.thumbnail?.proxyURL].filter(isNonNullish).map(mediaKey)
            });

    return media;
}

function openItem(media: Pick<MediaItem, "url" | "name">[]) {
    return (
        <Menu.MenuItem
            id="pc-external-player"
            label={t(plugin.externalPlayer.context.openIn, { player: playerNames[settings.store.player ?? "mpv"] })}
            icon={VideoIcon}
            leadingAccessory={{ type: "icon", icon: VideoIcon }}
            action={media.length === 1 ? () => play(media[0].url) : undefined}
        >
            {media.length > 1 ? media.map((m, i) => (
                <Menu.MenuItem key={m.url} id={`pc-external-player-${i}`} label={m.name} action={() => play(m.url)} />
            )) : null}
        </Menu.MenuItem>
    );
}

const messageContextMenuPatch: NavContextMenuPatchCallback = (children, { message, mediaItem, itemSrc }) => {
    let media = getMedia(message);
    const src = mediaItem?.url ?? mediaItem?.downloadUrl ?? itemSrc;
    if (src) media = media.filter(m => m.keys.includes(mediaKey(src)));
    if (!media.length) return;

    (findGroupChildrenByChildId("copy-link", children) ?? children).push(openItem(media));
};

const imageContextMenuPatch: NavContextMenuPatchCallback = (children, { src }: { src?: string; }) => {
    if (!src || !canOpen(src) || !mediaExtensions.test(URL.parse(src)?.pathname ?? "")) return;
    children.push(<Menu.MenuGroup>{openItem([{ url: src, name: src }])}</Menu.MenuGroup>);
};

export default definePlugin({
    name: "ExternalPlayer",
    description: () => t(plugin.externalPlayer.description),
    tags: ["media"],
    authors: [PcDevs.creations],
    settings,

    patches: [
        {
            find: "renderControls(){",
            group: true,
            replacement: [
                {
                    match: /(?<=handleVideoClick=(\i)=>\{)/,
                    replace: "if($self.interceptPlay(this.props.src))return $1.stopPropagation();"
                },
                {
                    match: /(?<=setPlay=(\i)=>\{)/,
                    replace: "if($1&&$self.interceptPlay(this.props.src))return;"
                },
                {
                    match: /this\.renderControls\(\)/,
                    replace: "$self.renderControls(this.props.src,$&)"
                },
                {
                    match: /(?<=this\.renderPlayPausePop\(\):null,)/,
                    replace: "$self.renderStatus(this.props.src),"
                }
            ]
        }
    ],

    interceptPlay(src: string) {
        if (!settings.store.openOnClick || !Native || !canOpen(src)) return false;
        const status = useStatusStore.getState().statuses[mediaKey(src)];
        if (!status) play(src);
        else if (status.controllable) Native.togglePause(src);
        else showToast({ text: t(plugin.externalPlayer.toast.alreadyOpen, { player: playerNames[status.player] }) });
        return true;
    },

    renderStatus(src: string) {
        return <Status src={src} />;
    },

    renderControls(src: string, controls: ReactNode) {
        return <HideWhileOpen src={src}>{controls}</HideWhileOpen>;
    },

    start() {
        if (Native) startPolling();
    },

    stop: stopPolling,

    contextMenus: {
        "message": messageContextMenuPatch,
        "image-context": imageContextMenuPatch
    }
});
