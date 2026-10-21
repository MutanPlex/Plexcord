/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2026 Vendicated and contributors
 * Copyright (c) 2026 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { plugin, t } from "@api/i18n";
import { DeleteIcon, SearchIcon } from "@components/Icons";
import { classNameFactory } from "@utils/css";
import { React, useCallback, useEffect, useRef, useState } from "@webpack/common";

import { Entry, getFile, Group, Kind } from "../library";

export const cl = classNameFactory("pc-bie-");

const SQUARE = new Set(["AVATAR", "AVATAR_DECORATION", "GUILD_ICON", "PERSONAL_WIDGET_FIELD"]);

const KIND_NAMES: Record<string, () => string> = {
    AVATAR: () => t(plugin.betterImageEditor.kind.avatars),
    BANNER: () => t(plugin.betterImageEditor.kind.banners),
    GUILD_ICON: () => t(plugin.betterImageEditor.kind.serverIcons),
    GUILD_BANNER: () => t(plugin.betterImageEditor.kind.serverBanners),
    SCHEDULED_EVENT_IMAGE: () => t(plugin.betterImageEditor.kind.eventCovers),
    HOME_HEADER: () => t(plugin.betterImageEditor.kind.homeHeaders),
    AVATAR_DECORATION: () => t(plugin.betterImageEditor.kind.decorations),
    PERSONAL_WIDGET_COVER: () => t(plugin.betterImageEditor.kind.widgetCovers),
    PERSONAL_WIDGET_FIELD: () => t(plugin.betterImageEditor.kind.widgetImages)
};

const kindName = (kind: Kind) => KIND_NAMES[kind]?.() ?? kind.toLowerCase().replace(/_/g, " ");

const isAnimated = (entry: Entry) => entry.type === "image/gif" || entry.name.toLowerCase().endsWith(".gif");
export const croppedLabel = (kind: Kind) => t(plugin.betterImageEditor.text.croppedKind, { kind: kindName(kind) });

const PinIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
        <path d="M15 4V9l3 3v2h-5v7l-1 1-1-1v-7H6v-2l3-3V4H8V2h8v2z" />
    </svg>
);

export function Shelf({ kind, group, entries, thumbs, activeId, wornId, onGroup, onPick, onPin, onForget, onPutBack }: {
    kind: Kind;
    group: Group;
    entries: Entry[];
    thumbs: Record<string, string>;
    activeId: string | null;
    wornId: string | null;
    onGroup(group: Group): void;
    onPick(entry: Entry): void;
    onPin(entry: Entry): void;
    onForget(entry: Entry, immediate: boolean): void;
    onPutBack?(): void;
}) {
    const shape = SQUARE.has(kind) ? "square" : "wide";

    const [hovered, setHovered] = useState<string | null>(null);
    const [filter, setFilter] = useState("");
    const [playing, setPlaying] = useState<Record<string, string>>({});
    const played = useRef<string[]>([]);
    const live = useRef(true);

    useEffect(() => () => {
        live.current = false;
        played.current.forEach(URL.revokeObjectURL);
    }, []);

    const play = useCallback(async (entry: Entry) => {
        setHovered(entry.id);
        if (!isAnimated(entry) || playing[entry.id]) return;

        const blob = await getFile(entry.id);
        if (!blob || !live.current) return;

        const url = URL.createObjectURL(blob);
        played.current.push(url);
        setPlaying(current => ({ ...current, [entry.id]: url }));
    }, [playing]);

    const wanted = filter.trim().toLowerCase();
    const shown = wanted ? entries.filter(entry => entry.name.toLowerCase().includes(wanted)) : entries;

    return (
        <div className={cl("panel", shape)}>
            <div className={cl("tabs")} role="tablist">
                <button
                    type="button"
                    role="tab"
                    aria-selected={group === "original"}
                    className={cl("tab", { on: group === "original" })}
                    onClick={() => onGroup("original")}
                >{t(plugin.betterImageEditor.text.originals)}</button>
                <button
                    type="button"
                    role="tab"
                    aria-selected={group === "cropped"}
                    className={cl("tab", { on: group === "cropped" })}
                    onClick={() => onGroup("cropped")}
                >{croppedLabel(kind)}</button>

                {onPutBack && (
                    <button type="button" className={cl("action")} onClick={onPutBack}>
                        {t(plugin.betterImageEditor.text.putBackTheLast)}
                    </button>
                )}

            </div>

            <div className={cl("bar")}>
                <span className={cl("count")}>
                    {wanted ? t(plugin.betterImageEditor.text.shownOfTotal, { shown: shown.length, total: entries.length }) : t(plugin.betterImageEditor.text.keptCount, { count: entries.length })}
                </span>
                {entries.length > 12 && (
                    <div className={cl("find")}>
                        <SearchIcon width={12} height={12} aria-hidden />
                        <input
                            type="text"
                            value={filter}
                            placeholder={t(plugin.betterImageEditor.text.search)}
                            aria-label={t(plugin.betterImageEditor.text.searchSavedPictures)}
                            onChange={event => setFilter(event.currentTarget.value)}
                        />
                        {filter && (
                            <button
                                type="button"
                                aria-label={t(plugin.betterImageEditor.text.clearTheSearch)}
                                onClick={() => setFilter("")}
                            >&times;</button>
                        )}
                    </div>
                )}
            </div>

            <div className={cl("strip")} role="group" aria-label={t(plugin.betterImageEditor.text.savedPictures)}>
                {shown.map(entry => {
                    const picture = (hovered === entry.id && playing[entry.id]) || thumbs[entry.id];

                    return <div
                        key={entry.id}
                        className={cl("item", { pinned: entry.pinned, worn: entry.id === wornId })}
                        onMouseEnter={() => play(entry)}
                        onMouseLeave={() => setHovered(null)}
                    >
                        <button
                            type="button"
                            aria-label={entry.name}
                            title={entry.id === wornId ? `${entry.name}
${t(plugin.betterImageEditor.text.youAreWearingThis)}` : entry.name}
                            className={cl("thumb", { active: activeId === entry.id })}
                            style={picture ? { backgroundImage: `url(${picture})` } : undefined}
                            onClick={() => onPick(entry)}
                            onContextMenu={event => {
                                event.preventDefault();
                                onForget(entry, event.shiftKey);
                            }}
                        />
                        <button
                            type="button"
                            className={cl("remove")}
                            aria-label={t(plugin.betterImageEditor.text.removeName, { name: entry.name })}
                            title={t(plugin.betterImageEditor.text.removeHoldShiftTo)}
                            onClick={event => onForget(entry, event.shiftKey)}
                        >
                            <DeleteIcon width={10} height={10} />
                        </button>
                        <button
                            type="button"
                            aria-pressed={!!entry.pinned}
                            className={cl("pin", { on: entry.pinned })}
                            aria-label={entry.pinned ? t(plugin.betterImageEditor.text.unpinName, { name: entry.name }) : t(plugin.betterImageEditor.text.pinName, { name: entry.name })}
                            title={entry.pinned ? t(plugin.betterImageEditor.text.pinnedNeverDrops) : t(plugin.betterImageEditor.text.pinNeverDrops)}
                            onClick={() => onPin(entry)}
                        >
                            <PinIcon width={10} height={10} />
                        </button>
                    </div>;
                })}

                {!shown.length && (
                    <span className={cl("empty")}>
                        {entries.length
                            ? t(plugin.betterImageEditor.text.nothingMatches)
                            : group === "original"
                                ? t(plugin.betterImageEditor.text.originalsEmpty)
                                : t(plugin.betterImageEditor.text.croppedEmpty)}
                    </span>
                )}
            </div>
        </div>
    );
}
