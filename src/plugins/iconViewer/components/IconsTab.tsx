/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2025 Vendicated and contributors
 * Copyright (c) 2026 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { plugin, t } from "@api/i18n";
import { Button } from "@components/Button";
import { Heading } from "@components/Heading";
import { SettingsTab, wrapTab } from "@components/settings";
import { TooltipContainer } from "@components/TooltipContainer";
import { Icon } from "@plexcord/discord-types";
import { debounce } from "@shared/debounce";
import { Margins } from "@utils/margins";
import { classes } from "@utils/misc";
import { useIntersection } from "@utils/react";
import { Clickable, TextInput, useCallback, useEffect, useMemo, useState } from "@webpack/common";

import { IconsDef } from "../types";
import { getIconsModule } from "../utils";
import { openIconModal } from "./Modals";

let cachedIcons: IconsDef | null = null;

function getIcons(): IconsDef {
    if (cachedIcons) return cachedIcons;

    const iconsModule = getIconsModule();
    cachedIcons = Object.fromEntries(
        Object.entries(iconsModule).filter(([name, fn]) =>
            typeof fn === "function" && name.endsWith("Icon")
        )
    );

    return cachedIcons;
}

function searchMatch(search: string, name: string, Icon: Icon, searchByFunction: boolean): boolean {
    if (!search) return true;

    if (searchByFunction) return String(Icon).includes(search);

    const words = name.replace(/([A-Z]([a-z]+)?)/g, " $1").toLowerCase().split(" ");
    const keywords = search.toLowerCase().split(" ");
    return keywords.every(k => words.includes(k)) ||
        words.every(w => keywords.includes(w)) ||
        name.toLowerCase().includes(search.toLowerCase());
}

function IconItem({ iconName, Icon }: { iconName: string; Icon: Icon; }) {
    const fill = iconName === "CircleShieldIcon" ? "var(--background-base-low)" : "var(--interactive-icon-default)";

    return (
        <div className="pc-icon-box">
            <Clickable onClick={() => openIconModal(iconName, Icon)}>
                <div className="pc-icon-container">
                    <Icon className="pc-icon-icon" size="lg" width={32} height={32} color="var(--interactive-icon-default)" fill={fill} />
                </div>
            </Clickable>
            <Heading className="pc-icon-title" tag="h3">{iconName}</Heading>
        </div>
    );
}

function IconsTab() {
    const [searchInput, setSearchInput] = useState("");
    const [search, setSearch] = useState("");
    const [searchByFunction, setSearchByFunction] = useState(false);

    const icons = useMemo(() => getIcons(), []);

    const debouncedSetSearch = useMemo(
        () => debounce((query: string) => setSearch(query), 150),
        []
    );

    const onSearch = useCallback((query: string) => {
        setSearchInput(query);
        debouncedSetSearch(query);
    }, [debouncedSetSearch]);

    const filteredIcons = useMemo(() =>
        Object.entries(icons).filter(([name, Icon]) => searchMatch(search, name, Icon, searchByFunction)),
        [icons, search, searchByFunction]
    );

    const iconsToLoad = 120;
    const [visibleCount, setVisibleCount] = useState(iconsToLoad);

    useEffect(() => {
        setVisibleCount(iconsToLoad);
    }, [search, searchByFunction]);

    const loadMore = useCallback(() => {
        setVisibleCount(v => Math.min(v + iconsToLoad, filteredIcons.length));
    }, [filteredIcons.length]);

    const [sentinelRef, isSentinelVisible] = useIntersection();

    useEffect(() => {
        if (isSentinelVisible && visibleCount < filteredIcons.length) {
            loadMore();
        }
    }, [isSentinelVisible, visibleCount, filteredIcons.length, loadMore]);

    const visibleIcons = filteredIcons.slice(0, visibleCount);

    return (
        <SettingsTab>
            <div className={classes(Margins.top16, "pc-icon-tab-search-bar-grid")}>
                <TextInput autoFocus value={searchInput} placeholder={t(plugin.iconViewer.modal.search, { count: Object.keys(icons).length })} onChange={onSearch} />
                <TooltipContainer text={t(plugin.iconViewer.modal.label)}>
                    <Button
                        size="small"
                        aria-label={t(plugin.iconViewer.modal.label)}
                        className="pc-icon-search-func-btn"
                        variant={searchByFunction ? "positive" : "primary"}
                        onClick={() => setSearchByFunction(!searchByFunction)}
                    >
                        {t(plugin.iconViewer.modal.function)}
                    </Button>
                </TooltipContainer>
            </div>
            <div className="pc-icons-tab-grid-container">
                {visibleIcons.map(([iconName, Icon]) => (
                    <IconItem key={iconName} iconName={iconName} Icon={Icon} />
                ))}
            </div>
            {visibleCount < filteredIcons.length && (
                <div ref={sentinelRef} className="pc-icon-sentinel" />
            )}
        </SettingsTab>
    );
}

export default wrapTab(IconsTab, "IconsTab");
