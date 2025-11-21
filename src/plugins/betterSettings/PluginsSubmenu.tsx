/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2024 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { t } from "@api/i18n";
import { isPluginEnabled } from "@api/PluginManager";
import { openPluginModal } from "@components/settings/tabs";
import { getIntlMessage } from "@utils/discord";
import { isObjectEmpty } from "@utils/misc";
import { Alerts, Menu, useMemo, useState } from "@webpack/common";

import Plugins from "~plugins";

function onRestartNeeded() {
    Alerts.show({
        title: t("plugin.betterSettings.alert.title"),
        body: <p>{t("plugin.betterSettings.alert.restart")}</p>,
        confirmText: t("plugin.betterSettings.alert.confirm"),
        cancelText: t("plugin.betterSettings.alert.cancel"),
        onConfirm: () => location.reload()
    });
}

export default function PluginsSubmenu() {
    const sortedPlugins = useMemo(() => Object.values(Plugins)
        .sort((a, b) => a.name.localeCompare(b.name)), []);
    const [query, setQuery] = useState("");

    const search = query.toLowerCase();
    const include = (p: typeof Plugins[keyof typeof Plugins]) => (
        isPluginEnabled(p.name)
        && p.options && !isObjectEmpty(p.options)
        && (
            p.name.toLowerCase().includes(search)
            || p.description.toLowerCase().includes(search)
            || p.tags?.some(t => t.toLowerCase().includes(search))
        )
    );

    const plugins = sortedPlugins.filter(include);

    return (
        <>
            <Menu.MenuControlItem
                id="pc-plugins-search"
                control={(props, ref) => (
                    <Menu.MenuSearchControl
                        {...props}
                        query={query}
                        onChange={setQuery}
                        ref={ref}
                        placeholder={getIntlMessage("SEARCH")}
                    />
                )}
            />

            {!!plugins.length && <Menu.MenuSeparator />}

            {plugins.map(p => (
                <Menu.MenuItem
                    key={p.name}
                    id={p.name}
                    label={p.name}
                    action={() => openPluginModal(p, onRestartNeeded)}
                />
            ))}
        </>
    );
}
