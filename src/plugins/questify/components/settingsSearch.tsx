/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2026 Vendicated and contributors
 * Copyright (c) 2026 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import "../settings.css";

import { plugin, t } from "@api/i18n";
import { TextInput, useEffect, useState } from "@webpack/common";
import type { JSX } from "react";

import { setSettingsSearchQuery, useSettingsSearchMatchCount, useSettingsSearchQuery } from "../settings/search";
import { q } from "../utils/ui";

export function SettingsSearch(): JSX.Element {
    const query = useSettingsSearchQuery();
    const matchCount = useSettingsSearchMatchCount();
    const [inputValue, setInputValue] = useState(query);

    useEffect(() => {
        if (!inputValue.trim()) {
            setSettingsSearchQuery("");
            return;
        }

        const timeout = setTimeout(() => setSettingsSearchQuery(inputValue), 250);

        return () => clearTimeout(timeout);
    }, [inputValue]);

    useEffect(() => () => setSettingsSearchQuery(""), []);

    return (
        <div className={q("settings-search")}>
            <TextInput
                type="search"
                aria-label={t(plugin.questify.text.searchQuestifySettings)}
                placeholder={t(plugin.questify.text.searchQuestifySettings2)}
                value={inputValue}
                onChange={setInputValue}
            />
            {query.trim() && matchCount === 0 && (
                <div className={q("settings-search-empty")} role="status">{t(plugin.questify.text.noMatchingSettings)}</div>
            )}
        </div>
    );
}
