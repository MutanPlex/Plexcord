/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2025 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { t } from "@api/i18n";
import { useSettings } from "@api/Settings";
import { classNameFactory } from "@api/Styles";
import { BaseText } from "@components/BaseText";
import { Button } from "@components/Button";
import { Card } from "@components/Card";
import { Heading } from "@components/Heading";
import { PluginCard } from "@components/settings/tabs/plugins/PluginCard";
import { ChangeList } from "@utils/ChangeList";
import { Margins } from "@utils/margins";
import { useForceUpdater } from "@utils/react";
import { React, Tooltip } from "@webpack/common";

import Plugins from "~plugins";

const cl = classNameFactory("pc-changelog-");

interface NewPluginsSectionProps {
    newPlugins: string[];
    onPluginToggle?: (pluginName: string, enabled: boolean) => void;
}

export function NewPluginsSection({
    newPlugins,
    onPluginToggle,
}: NewPluginsSectionProps) {
    const settings = useSettings();
    const changes = React.useMemo(() => new ChangeList<string>(), []);
    const forceUpdate = useForceUpdater();

    const depMap = React.useMemo(() => {
        const o = {} as Record<string, string[]>;
        for (const plugin in Plugins) {
            const deps = Plugins[plugin].dependencies;
            if (deps) {
                for (const dep of deps) {
                    o[dep] ??= [];
                    o[dep].push(plugin);
                }
            }
        }
        return o;
    }, []);

    const mapPlugins = (array: string[]) =>
        array
            .map(pn => Plugins[pn])
            .filter(p => p && !p.hidden)
            .sort((a, b) => a.name.localeCompare(b.name));

    const sortedPlugins = React.useMemo(
        () => mapPlugins(newPlugins),
        [newPlugins],
    );

    if (sortedPlugins.length === 0) {
        return null;
    }

    const makeDependencyList = (deps: string[]) => {
        if (!deps) return null;
        return (
            <React.Fragment>
                <BaseText>{t("plugins.required.by")}</BaseText>
                {deps.map((dep: string) => (
                    <BaseText key={dep} className="pc-changelog-dep-text">
                        {dep}
                    </BaseText>
                ))}
            </React.Fragment>
        );
    };

    return (
        <div className={cl("new-plugins-section")}>
            <Heading className={Margins.bottom8}>
                {t("changelog.newPlugins", { count: sortedPlugins.length })}
            </Heading>

            <BaseText className={Margins.bottom16}>
                {t("changelog.following")}
            </BaseText>

            <div className={cl("new-plugins-grid")}>
                {sortedPlugins.map(plugin => {
                    const isRequired =
                        plugin.required ||
                        depMap[plugin.name]?.some(
                            d => settings.plugins[d].enabled,
                        ) ||
                        plugin.name.endsWith("API");
                    const tooltipText = plugin.required
                        ? t("plugins.required.this")
                        : makeDependencyList(
                            depMap[plugin.name]?.filter(
                                d => settings.plugins[d].enabled,
                            ),
                        );

                    if (isRequired) {
                        return (
                            <Tooltip text={tooltipText} key={plugin.name}>
                                {({ onMouseLeave, onMouseEnter }) => (
                                    <Card
                                        className={cl(
                                            "new-plugin-card",
                                            "required",
                                        )}
                                    >
                                        <PluginCard
                                            onMouseLeave={onMouseLeave}
                                            onMouseEnter={onMouseEnter}
                                            onRestartNeeded={name => {
                                                changes.handleChange(name);
                                                forceUpdate();
                                            }}
                                            disabled={true}
                                            plugin={plugin}
                                            isNew={true}
                                        />
                                    </Card>
                                )}
                            </Tooltip>
                        );
                    }

                    return (
                        <Card
                            key={plugin.name}
                            className={cl("new-plugin-card")}
                        >
                            <PluginCard
                                onRestartNeeded={name => {
                                    changes.handleChange(name);
                                    forceUpdate();
                                }}
                                disabled={false}
                                plugin={plugin}
                                isNew={true}
                            />
                        </Card>
                    );
                })}
            </div>

            {changes.hasChanges && (
                <div className={cl("restart-notice")}>
                    <Tooltip
                        text={
                            <>
                                {t("plugins.restart.following")}
                                <div className={Margins.bottom8} />
                                <ul>
                                    {changes.map(p => (
                                        <li key={p}>{p}</li>
                                    ))}
                                </ul>
                            </>
                        }
                    >
                        {tooltipProps => (
                            <Button
                                {...tooltipProps}
                                variant="secondary"
                                size="small"
                                onClick={() => location.reload()}
                                className={Margins.top16}
                            >
                                {t("plugins.restart.required")}
                            </Button>
                        )}
                    </Tooltip>
                </div>
            )}
        </div>
    );
}

interface NewPluginsCompactProps {
    newPlugins: string[];
    maxDisplay?: number;
}

function CompactPluginCard({
    pluginName,
    depMap,
    settings,
}: {
    pluginName: string;
    depMap: Record<string, string[]>;
    settings: any;
}) {
    const plugin = Plugins[pluginName];
    if (!plugin || plugin.hidden) return null;

    const isRequired =
        plugin.required ||
        depMap[plugin.name]?.some(d => settings.plugins[d].enabled);

    const tooltipText = plugin.required
        ? t("plugins.required.this")
        : depMap[plugin.name]?.length > 0
            ? `${t("plugins.required.by")} ${depMap[plugin.name]
                ?.filter(d => settings.plugins[d].enabled)
                .join(", ")}`
            : null;

    return (
        <div className={`pc-changelog-entry ${isRequired ? "required" : ""}`}>
            <div className="pc-changelog-entry-header">
                <span className="pc-changelog-entry-hash">
                    {plugin.name}
                    {isRequired && " *"}
                </span>
                <span className="pc-changelog-entry-author">
                    {plugin.authors?.[0]?.name || t("plugins.unknown")}
                </span>
            </div>
            <div className="pc-changelog-entry-message">
                {plugin.description || t("plugins.noDescription")}
            </div>
            {tooltipText && (
                <div className="pc-changelog-dep-text">{tooltipText}</div>
            )}
        </div>
    );
}

export function NewPluginsCompact({
    newPlugins,
    maxDisplay = 20,
}: NewPluginsCompactProps) {
    const settings = useSettings();

    const depMap = React.useMemo(() => {
        const o = {} as Record<string, string[]>;
        for (const plugin in Plugins) {
            const deps = Plugins[plugin].dependencies;
            if (deps) {
                for (const dep of deps) {
                    o[dep] ??= [];
                    o[dep].push(plugin);
                }
            }
        }
        return o;
    }, []);

    if (newPlugins.length === 0) {
        return null;
    }

    const displayPlugins = newPlugins.slice(0, maxDisplay);
    const hasMore = newPlugins.length > maxDisplay;

    return (
        <div className={cl("new-plugins-compact")}>
            <div className="pc-changelog-plugins-list">
                {displayPlugins.map(pluginName => (
                    <CompactPluginCard
                        key={pluginName}
                        pluginName={pluginName}
                        depMap={depMap}
                        settings={settings}
                    />
                ))}

                {hasMore && (
                    <div className="pc-changelog-entry">
                        <div className="pc-changelog-entry-message">
                            {t("changelog.more", {
                                count: newPlugins.length - maxDisplay,
                            })}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
