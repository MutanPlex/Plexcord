/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2024 Vendicated and contributors
 * Copyright (c) 2026 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import "./styles.css";

import * as DataStore from "@api/DataStore";
import { plugin, t } from "@api/i18n";
import { Settings } from "@api/Settings";
import { Button } from "@components/Button";
import { ErrorCard } from "@components/ErrorCard";
import { HeadingPrimary, HeadingTertiary } from "@components/Heading";
import { OpenExternalIcon } from "@components/Icons";
import { Paragraph } from "@components/Paragraph";
import { SettingsTab, wrapTab } from "@components/settings";
import { SearchStatus, Theme, ThemeLikeProps } from "@plugins/themeLibrary/types";
import { Logger } from "@utils/Logger";
import { Margins } from "@utils/margins";
import { classes } from "@utils/misc";
import { findCssClassesLazy } from "@webpack";
import { React, SearchableSelect, TextInput, useEffect, useState } from "@webpack/common";

import { ThemeCard } from "./ThemeCard";

const InputStyles = findCssClassesLazy("inputWrapper", "editable", "error");

export const apiUrl = "https://themes.plexcord.club/api";
export const logger = new Logger("ThemeLibrary", "#e5c890");

export async function fetchAllThemes(): Promise<Theme[]> {
    const response = await themeRequest("/themes");
    const data = await response.json();
    const themes: Theme[] = Object.values(data);
    themes.forEach(theme => {
        if (!theme.source) {
            theme.source = `${apiUrl}/${theme.id}`;
        }
    });
    return themes.sort((a, b) => new Date(b.release_date).getTime() - new Date(a.release_date).getTime());
}

export async function themeRequest(path: string, options: RequestInit = {}) {
    return fetch(apiUrl + path, {
        ...options,
        headers: {
            ...options.headers,
        }
    });
}

const SearchTags = {
    [SearchStatus.THEME]: "THEME",
    [SearchStatus.SNIPPET]: "SNIPPET",
    [SearchStatus.LIKED]: "LIKED",
    [SearchStatus.DARK]: "DARK",
    [SearchStatus.LIGHT]: "LIGHT",
};

function ThemeTab() {
    const [themes, setThemes] = useState<Theme[]>([]);
    const [filteredThemes, setFilteredThemes] = useState<Theme[]>([]);
    const [themeLinks, setThemeLinks] = useState(Settings.themeLinks);
    const [likedThemes, setLikedThemes] = useState<ThemeLikeProps>();
    const [searchValue, setSearchValue] = useState({ value: "", status: SearchStatus.ALL });
    const [hideWarningCard, setHideWarningCard] = useState(Settings.plugins.ThemeLibrary.hideWarningCard);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const onSearch = (query: string) => setSearchValue(prev => ({ ...prev, value: query }));
    const onStatusChange = (status: SearchStatus) => setSearchValue(prev => ({ ...prev, status }));

    const themeFilter = (theme: Theme) => {
        const enabled = themeLinks.includes(`${apiUrl}/${theme.id}`);

        const tags = new Set(theme.tags.map(tag => tag?.toLowerCase()));

        if (!enabled && searchValue.status === SearchStatus.ENABLED) return false;

        const anyTags = SearchTags[searchValue.status];
        if (anyTags && !tags.has(anyTags?.toLowerCase())) return false;

        if ((enabled && searchValue.status === SearchStatus.DISABLED) || (!enabled && searchValue.status === SearchStatus.ENABLED)) return false;

        if (!searchValue.value.length) return true;

        const v = searchValue.value?.toLowerCase();
        return (
            theme.name?.toLowerCase().includes(v) ||
            theme.description?.toLowerCase().includes(v) ||
            (Array.isArray(theme.author) ? theme.author.some(author => author.discord_name?.toLowerCase()?.includes(v)) : theme.author.discord_name?.toLowerCase()?.includes(v)) ||
            tags.has(v)
        );
    };

    const fetchLikes = async () => {
        try {
            const token = await DataStore.get("ThemeLibrary_uniqueToken");
            const response = await themeRequest("/likes/get", {
                headers: {
                    "Authorization": `Bearer ${token}`,
                },
            });
            const data = await response.json();
            return data;
        } catch (err) {
            logger.error(err);
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [themes, likes] = await Promise.all([fetchAllThemes(), fetchLikes()]);
                setThemes(themes);
                setLikedThemes(likes);
                setFilteredThemes(themes);
            } catch (err) {
                logger.error(err);
                setError(true);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    useEffect(() => {
        setThemeLinks(Settings.themeLinks);
    }, []);

    useEffect(() => {
        // likes only update after 12_000 due to cache
        if (searchValue.status === SearchStatus.LIKED) {
            const likedThemes = themes.sort((a, b) => b.likes - a.likes);
            // replacement of themeFilter which wont work with SearchStatus.LIKED
            const filteredLikedThemes = likedThemes.filter(x => x.name.includes(searchValue.value));
            setFilteredThemes(filteredLikedThemes);
        } else {
            const sortedThemes = themes.sort((a, b) => new Date(b.release_date).getTime() - new Date(a.release_date).getTime());
            const filteredThemes = sortedThemes.filter(themeFilter);
            setFilteredThemes(filteredThemes);
        }
    }, [searchValue, themes]);

    return (
        <div>
            <>
                {loading ? (
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                            height: "70vh",
                            fontSize: "1.5em",
                            color: "var(--text-default)"
                        }}>
                        <p> {t(plugin.themeLibrary.text.gettingTheLatestThemes)} </p>
                        <p style={{
                            fontSize: ".75em",
                            color: "var(--text-muted)"
                        }}> {t(plugin.themeLibrary.text.thisWonTTake)} </p>

                    </div>
                ) : error ? (
                    <ErrorCard>
                        <HeadingTertiary>{t(plugin.themeLibrary.text.failedToFetchThemes)}</HeadingTertiary>
                        <Paragraph className={Margins.top8}>{t(plugin.themeLibrary.text.couldNotFetchThe)}</Paragraph>
                    </ErrorCard>
                ) : (
                    <>
                        {hideWarningCard ? null : (
                            <ErrorCard>
                                <HeadingTertiary>{t(plugin.themeLibrary.text.wantYourThemeRemoved)}</HeadingTertiary>
                                <Paragraph className={Margins.top8}>
                                    {t(plugin.themeLibrary.text.removalInfo)} <a href="https://github.com/Plexcord/themes.plexcord.club/issues/new?labels=removal&projects=&template=request_removal.yml&title=Theme+Removal">GitHub <OpenExternalIcon height={16} width={16} /></a>
                                </Paragraph>
                                <Button
                                    onClick={() => {
                                        Settings.plugins.ThemeLibrary.hideWarningCard = true;
                                        setHideWarningCard(true);
                                    }}
                                    size="small"
                                    variant="dangerPrimary"
                                    className={classes(Margins.top16, "pce-warning-button")}
                                >{t(plugin.themeLibrary.text.hide)}</Button>
                            </ErrorCard>
                        )}
                        <div className={classes(Margins.bottom8, Margins.top16)}>
                            <HeadingPrimary
                                style={{
                                    overflowWrap: "break-word",
                                    marginTop: 8,
                                }}>
                                {searchValue.status === SearchStatus.LIKED ? t(plugin.themeLibrary.text.mostLiked) : t(plugin.themeLibrary.text.newestAdditions)}
                            </HeadingPrimary>

                            {themes.slice(0, 2).map((theme: Theme) => (
                                <ThemeCard
                                    key={theme.id}
                                    theme={theme}
                                    themeLinks={themeLinks}
                                    likedThemes={likedThemes}
                                    setThemeLinks={setThemeLinks}
                                    removePreview={true}
                                />
                            ))}
                        </div>
                        <HeadingPrimary style={{
                            overflowWrap: "break-word",
                            marginTop: 20,
                        }}>
                            {t(plugin.themeLibrary.text.themes)}
                        </HeadingPrimary>
                        <div className={classes(Margins.bottom20, "pce-search-grid")}>
                            <TextInput value={searchValue.value} placeholder={t(plugin.themeLibrary.text.searchForATheme)} onChange={onSearch} />
                            <div className={InputStyles.inputWrapper}>
                                <SearchableSelect
                                    options={[
                                        { label: t(plugin.themeLibrary.text.showAll), value: SearchStatus.ALL, default: true },
                                        { label: t(plugin.themeLibrary.text.showThemes), value: SearchStatus.THEME },
                                        { label: t(plugin.themeLibrary.text.showSnippets), value: SearchStatus.SNIPPET },
                                        { label: t(plugin.themeLibrary.text.showMostLiked), value: SearchStatus.LIKED },
                                        { label: t(plugin.themeLibrary.text.showDark), value: SearchStatus.DARK },
                                        { label: t(plugin.themeLibrary.text.showLight), value: SearchStatus.LIGHT },
                                        { label: t(plugin.themeLibrary.text.showEnabled), value: SearchStatus.ENABLED },
                                        { label: t(plugin.themeLibrary.text.showDisabled), value: SearchStatus.DISABLED },
                                    ]}
                                    // @ts-ignore
                                    value={searchValue.status}
                                    clearable={false}
                                    onChange={v => onStatusChange(v as SearchStatus)}
                                    closeOnSelect={true}
                                />
                            </div>
                        </div>
                        <div>
                            {filteredThemes.length ? filteredThemes.map((theme: Theme) => (
                                <ThemeCard
                                    key={theme.id}
                                    theme={theme}
                                    themeLinks={themeLinks}
                                    likedThemes={likedThemes}
                                    setThemeLinks={setThemeLinks}
                                />
                            )) : <div
                                style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "center",
                                    alignItems: "center",
                                }}>
                                <p style={{
                                    fontSize: "1em",
                                    color: "var(--text-default)"
                                }}> {t(plugin.themeLibrary.text.noThemeFound)} </p>
                                <p style={{
                                    fontSize: ".75em",
                                    color: "var(--text-muted)"
                                }}> {t(plugin.themeLibrary.text.tryNarrowingYourSearch)} </p>
                            </div>
                            }
                        </div>
                    </>)}
            </>
        </div>
    );
}

function ThemeLibrary() {
    return (
        <SettingsTab>
            <ThemeTab />
        </SettingsTab>
    );
}

export default wrapTab(ThemeLibrary, t(plugin.themeLibrary.text.themeLibrary));
