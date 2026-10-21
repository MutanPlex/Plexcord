/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2025 Vendicated and contributors
 * Copyright (c) 2026 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import "./pluginCards.css";

import { plugin, plugins as pluginsI18n, t } from "@api/i18n";
import { getName, isPluginEnabled, isPluginRequired } from "@api/PluginManager";
import { useSettings } from "@api/Settings";
import ErrorBoundary from "@components/ErrorBoundary";
import { WarningIcon } from "@components/Icons";
import { AddonCard } from "@components/settings";
import { getExcludedReasons, PluginDependencyList } from "@components/settings/tabs/plugins";
import { PluginCard } from "@components/settings/tabs/plugins/PluginCard";
import { TooltipContainer } from "@components/TooltipContainer";
import { Message } from "@plexcord/discord-types";
import { PLEXBOT_USER_ID } from "@utils/constants";
import { isPlexcordGuild, isSupport } from "@utils/misc";
import { showToast, Tooltip, useMemo } from "@webpack/common";
import { JSX } from "react";

import plugins, { ExcludedPlugins } from "~plugins";

export function ChatPluginCard({ url, description }: { url: string, description: string; }) {
    const pluginNameFromUrl = new URL(url).pathname.split("/")[2];

    const actualPluginName = Object.keys(plugins).find(name =>
        name.toLowerCase() === pluginNameFromUrl?.toLowerCase()
    );

    const pluginName = actualPluginName || pluginNameFromUrl;

    useSettings([`plugins.${pluginName ?? ""}.enabled`]);

    const depMap = useMemo(() => {
        const o = {} as Record<string, string[]>;
        for (const plugin in plugins) {
            const deps = plugins[plugin].dependencies;
            if (deps) {
                for (const dep of deps) {
                    o[dep] ??= [];
                    o[dep].push(plugin);
                }
            }
        }
        return o;
    }, []);

    if (!pluginName) return null;

    const p = plugins[pluginName];
    const excludedPlugin = ExcludedPlugins[pluginName];

    if (excludedPlugin || !p) {
        const toolTipText = excludedPlugin
            ? `${pluginName}: ${t(pluginsI18n.search.onlyAvailable)} ${getExcludedReasons()[ExcludedPlugins[pluginName]]}`
            : t(plugin.plexcordHelper.card.notOnThisVersion);

        const card = (
            <AddonCard
                name={pluginName}
                description={description || toolTipText}
                enabled={false}
                setEnabled={() => { }}
                disabled={true}
                infoButton={<WarningIcon />}
            />
        );

        return description
            ? <TooltipContainer text={toolTipText}>{card}</TooltipContainer>
            : card;
    }

    const onRestartNeeded = () => showToast({ text: t(plugin.plexcordHelper.toast.aRestartIsRequired) });

    const required = isPluginRequired(pluginName);
    const dependents = depMap[getName(p.name)]?.filter(d => isPluginEnabled(d));

    if (required) {
        const tooltipText = p.required || !dependents.length
            ? t(pluginsI18n.required.this)
            : <PluginDependencyList deps={dependents} />;

        return (
            <Tooltip text={tooltipText} key={getName(p.name)}>
                {({ onMouseLeave, onMouseEnter }) =>
                    <PluginCard
                        key={getName(p.name)}
                        onMouseLeave={onMouseLeave}
                        onMouseEnter={onMouseEnter}
                        onRestartNeeded={onRestartNeeded}
                        plugin={p}
                        disabled
                    />
                }
            </Tooltip>
        );
    }

    return (
        <PluginCard
            key={getName(p.name)}
            onRestartNeeded={onRestartNeeded}
            plugin={p}
        />
    );
}

export const PluginCards = ErrorBoundary.wrap(function PluginCards({ message }: { message: Message; }) {
    const seenPlugins = new Set<string>();
    const pluginCards: JSX.Element[] = [];

    // Process embeds
    message.embeds?.forEach(embed => {
        if (!embed.url?.startsWith("https://plexcord.club/plugins/") && !embed.url?.startsWith("https://plexcord.club/plugins/")) return;

        const isPlexcord = isPlexcordGuild(message.channel_id) && isSupport(message.author.id);
        if (!isPlexcord) return;

        const pluginNameFromUrl = new URL(embed.url).pathname.split("/")[2];
        const actualPluginName = Object.keys(plugins).find(name =>
            name.toLowerCase() === pluginNameFromUrl?.toLowerCase()
        );
        const pluginName = actualPluginName || pluginNameFromUrl;

        if (!pluginName || seenPlugins.has(pluginName)) return;
        seenPlugins.add(pluginName);

        pluginCards.push(
            <ChatPluginCard
                key={embed.url}
                url={embed.url}
                description={embed.rawDescription}
            />
        );
    });

    // Process components
    const components = (message.components?.[0] as any)?.components;
    if (message.author.id === PLEXBOT_USER_ID && components?.length >= 4) {
        const description = components[1]?.content;
        const pluginUrl = components.find((c: any) => c?.components)?.components[0]?.url;
        if (pluginUrl?.startsWith("https://plexcord.club/plugins/") || pluginUrl?.startsWith("https://plexcord.club/plugins/")) {
            const pluginNameFromUrl = new URL(pluginUrl).pathname.split("/")[2];
            const actualPluginName = Object.keys(plugins).find(name =>
                name.toLowerCase() === pluginNameFromUrl?.toLowerCase()
            );
            const pluginName = actualPluginName || pluginNameFromUrl;

            if (pluginName && !seenPlugins.has(pluginName)) {
                seenPlugins.add(pluginName);
                pluginCards.push(
                    <ChatPluginCard
                        key={pluginUrl}
                        url={pluginUrl}
                        description={description}
                    />
                );
            }
        }
    }

    if (pluginCards.length === 0) return null;

    return (
        <div className="pc-plugins-management-cards pc-plugins-grid" style={{ marginTop: "0px" }}>
            {pluginCards}
        </div>
    );
}, { noop: true });
