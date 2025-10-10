/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2022 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
*/

import "./styles.css";

import * as DataStore from "@api/DataStore";
import { useSettings } from "@api/Settings";
import { classNameFactory } from "@api/Styles";
import { SettingsTab, wrapTab } from "@components/settings";
import { ChangeList } from "@utils/ChangeList";
import { proxyLazy } from "@utils/lazy";
import { Logger } from "@utils/Logger";
import { Margins } from "@utils/margins";
import { classes } from "@utils/misc";
import { useAwaiter, useCleanupEffect } from "@utils/react";
import { findByPropsLazy } from "@webpack";
import { Alerts, Button, Card, Forms, lodash, Parser, React, Select, Text, TextInput, Toasts, Tooltip, useMemo, useState } from "@webpack/common";
import { JSX } from "react";

import Plugins, { ExcludedPlugins, PluginMeta } from "~plugins";// Avoid circular dependency
const { stopPlugin } = proxyLazy(() => require("plugins"));

import { t } from "@api/i18n";
import ErrorBoundary from "@components/ErrorBoundary";

import { PluginCard } from "./PluginCard";
import { openWarningModal } from "./PluginModal";
import { StockPluginsCard } from "./PluginStatCards";

export const cl = classNameFactory("pc-plugins-");
export const logger = new Logger("PluginSettings", "#a6d189");

const InputStyles = findByPropsLazy("inputWrapper", "inputError", "error");

export function showErrorToast(message: string) {
    Toasts.show({
        message,
        type: Toasts.Type.FAILURE,
        id: Toasts.genId(),
        options: {
            position: Toasts.Position.BOTTOM
        }
    });
}

function ReloadRequiredCard({ required, enabledPlugins, openWarningModal, resetCheckAndDo, enabledStockPlugins, totalStockPlugins, enabledUserPlugins, totalUserPlugins }) {
    return (
        <Card className={classes(cl("info-card"), required && "pc-warning-card")}>
            {required
                ? (
                    <>
                        <Forms.FormTitle tag="h5">{t("plugins.restart.required")}</Forms.FormTitle>
                        <Forms.FormText className={cl("dep-text")}>
                            {t("plugins.restart.description")}
                        </Forms.FormText>
                        <Button onClick={() => location.reload()} className={cl("restart-button")}>
                            {t("plugins.restart.button.restart")}
                        </Button>
                    </>
                )
                : (
                    <>
                        <Forms.FormText>{t("plugins.infoModal.description")}</Forms.FormText>
                        <Forms.FormText>{t("plugins.infoModal.settingsInfo")}</Forms.FormText>
                        <Forms.FormDivider className={`${Margins.top8} ${Margins.bottom8}`} />

                        <StockPluginsCard
                            enabledStockPlugins={enabledStockPlugins}
                            totalStockPlugins={totalStockPlugins}
                            enabledUserPlugins={enabledUserPlugins}
                            totalUserPlugins={totalUserPlugins}
                        />
                    </>
                )}

            {enabledPlugins.length > 0 && !required && (
                <Button
                    size={Button.Sizes.MAX}
                    className={"pc-plugins-disable-warning pc-modal-align-reset"}
                    onClick={() => {
                        return openWarningModal(null, null, null, false, enabledPlugins.length, resetCheckAndDo);
                    }}
                >
                    {t("plugins.restart.button.disableAll")}
                </Button>
            )}
        </Card>
    );
}

const enum SearchStatus {
    ALL,
    ENABLED,
    DISABLED,
    NEW
}

export const ExcludedReasons: Record<"web" | "discordDesktop" | "plextron" | "desktop" | "dev", string> = {
    desktop: t("plugins.excluded.desktop"),
    discordDesktop: t("plugins.excluded.discordDesktop"),
    plextron: t("plugins.excluded.plextron"),
    web: t("plugins.excluded.web"),
    dev: t("plugins.excluded.dev")
};

function ExcludedPluginsList({ search }: { search: string; }) {
    const matchingExcludedPlugins = Object.entries(ExcludedPlugins)
        .filter(([name]) => name.toLowerCase().includes(search));

    return (
        <Text variant="text-md/normal" className={Margins.top16}>
            {matchingExcludedPlugins.length
                ? <>
                    <Forms.FormText>{t("plugins.search.looking")}:</Forms.FormText>
                    <ul>
                        {matchingExcludedPlugins.map(([name, reason]) => (
                            <li key={name}>
                                <b>{name}</b>: {t("plugins.search.onlyAvailable")} {ExcludedReasons[reason]}
                            </li>
                        ))}
                    </ul>
                </>
                : t("plugins.search.noCriteria")
            }
        </Text>
    );
}

function PluginSettings() {
    const settings = useSettings();
    const changes = useMemo(() => new ChangeList<string>(), []);

    useCleanupEffect(() => {
        if (changes.hasChanges)
            Alerts.show({
                title: t("plugins.restart.required"),
                body: (
                    <>
                        <p>{t("plugins.restart.following")}</p>
                        <div>{changes.map((s, i) => (
                            <>
                                {i > 0 && ", "}
                                {Parser.parse("`" + s.split(".")[0] + "`")}
                            </>
                        ))}</div>
                    </>
                ),
                confirmText: t("plugins.restart.button.now"),
                cancelText: t("plugins.restart.button.later"),
                onConfirm: () => location.reload()
            });
    }, []);

    const depMap = Plexcord.Plugins.calculatePluginDependencyMap();

    const sortedPlugins = useMemo(() =>
        Object.values(Plugins).sort((a, b) => a.name.localeCompare(b.name)),
        []
    );

    const [searchValue, setSearchValue] = useState({ value: "", status: SearchStatus.ALL });

    const search = searchValue.value.toLowerCase();
    const onSearch = (query: string) => setSearchValue(prev => ({ ...prev, value: query }));
    const onStatusChange = (status: SearchStatus) => setSearchValue(prev => ({ ...prev, status }));

    const pluginFilter = (plugin: typeof Plugins[keyof typeof Plugins]) => {
        const { status } = searchValue;
        const enabled = Plexcord.Plugins.isPluginEnabled(plugin.name);

        switch (status) {
            case SearchStatus.DISABLED:
                if (enabled) return false;
                break;
            case SearchStatus.ENABLED:
                if (!enabled) return false;
                break;
            case SearchStatus.NEW:
                if (!newPlugins?.includes(plugin.name)) return false;
                break;
        }

        if (!search.length) return true;

        return (
            plugin.name.toLowerCase().includes(search) ||
            plugin.description.toLowerCase().includes(search) ||
            plugin.tags?.some(t => t.toLowerCase().includes(search)) ||
            plugin.displayDescription?.toLowerCase().includes(search)
        );
    };

    const [newPlugins] = useAwaiter(() => DataStore.get("Plexcord_existingPlugins").then((cachedPlugins: Record<string, number> | undefined) => {
        const now = Date.now() / 1000;
        const existingTimestamps: Record<string, number> = {};
        const sortedPluginNames = Object.values(sortedPlugins).map(plugin => plugin.name);

        const newPlugins: string[] = [];
        for (const { name: p } of sortedPlugins) {
            const time = existingTimestamps[p] = cachedPlugins?.[p] ?? now;
            if ((time + 60 * 60 * 24 * 2) > now) {
                newPlugins.push(p);
            }
        }
        DataStore.set("Plexcord_existingPlugins", existingTimestamps);

        return lodash.isEqual(newPlugins, sortedPluginNames) ? [] : newPlugins;
    }));

    const plugins = [] as JSX.Element[];
    const requiredPlugins = [] as JSX.Element[];

    const showApi = searchValue.value.includes("API");
    for (const p of sortedPlugins) {
        if (p.hidden || (!p.options && p.name.endsWith("API") && !showApi))
            continue;

        if (!pluginFilter(p)) continue;

        const isRequired = p.required || p.isDependency || depMap[p.name]?.some(d => settings.plugins[d].enabled);

        if (isRequired) {
            const tooltipText = p.required || !depMap[p.name]
                ? t("plugins.required.this")
                : <PluginDependencyList deps={depMap[p.name]?.filter(d => settings.plugins[d].enabled)} />;

            requiredPlugins.push(
                <Tooltip text={tooltipText} key={p.name}>
                    {({ onMouseLeave, onMouseEnter }) => (
                        <PluginCard
                            onMouseLeave={onMouseLeave}
                            onMouseEnter={onMouseEnter}
                            onRestartNeeded={(name, key) => changes.handleChange(`${name}.${key}`)}
                            disabled={true}
                            plugin={p}
                            key={p.name}
                        />
                    )}
                </Tooltip>
            );
        } else {
            plugins.push(
                <PluginCard
                    onRestartNeeded={(name, key) => changes.handleChange(`${name}.${key}`)}
                    disabled={false}
                    plugin={p}
                    isNew={newPlugins?.includes(p.name)}
                    key={p.name}
                />
            );
        }
    }

    function resetCheckAndDo() {
        let restartNeeded = false;

        for (const plugin of enabledPlugins) {
            const pluginSettings = settings.plugins[plugin];

            if (Plugins[plugin].patches?.length) {
                pluginSettings.enabled = false;
                changes.handleChange(plugin);
                restartNeeded = true;
                continue;
            }

            const result = stopPlugin(Plugins[plugin]);

            if (!result) {
                logger.error(`Error while stopping plugin ${plugin}`);
                showErrorToast(t("plugins.error.stopping", { plugin }));
                continue;
            }

            pluginSettings.enabled = false;
        }

        if (restartNeeded) {
            Alerts.show({
                title: t("plugins.restart.required"),
                body: (
                    <>
                        <p style={{ textAlign: "center" }}>{t("plugins.restart.fully")}</p>
                        <p style={{ textAlign: "center" }}>{t("plugins.restart.would")}</p>
                    </>
                ),
                confirmText: t("plugins.restart.button.now"),
                cancelText: t("plugins.restart.button.later"),
                onConfirm: () => location.reload()
            });
        }
    }

    // Code directly taken from supportHelper.tsx
    const isApiPlugin = (plugin: string) => plugin.endsWith("API") || Plugins[plugin].required;

    const totalPlugins = Object.keys(Plugins).filter(p => !isApiPlugin(p));
    const enabledPlugins = Object.keys(Plugins).filter(p => Plexcord.Plugins.isPluginEnabled(p) && !isApiPlugin(p));

    const totalStockPlugins = totalPlugins.filter(p => !PluginMeta[p].userPlugin && !Plugins[p].hidden).length;
    const totalUserPlugins = totalPlugins.filter(p => PluginMeta[p].userPlugin).length;
    const enabledStockPlugins = enabledPlugins.filter(p => !PluginMeta[p].userPlugin).length;
    const enabledUserPlugins = enabledPlugins.filter(p => PluginMeta[p].userPlugin).length;

    return (
        <SettingsTab title={t("plugins.title")}>

            <ReloadRequiredCard required={changes.hasChanges} enabledPlugins={enabledPlugins} openWarningModal={openWarningModal} resetCheckAndDo={resetCheckAndDo} enabledStockPlugins={enabledStockPlugins} totalStockPlugins={totalStockPlugins} enabledUserPlugins={enabledUserPlugins} totalUserPlugins={totalUserPlugins} />

            <Forms.FormTitle tag="h5" className={classes(Margins.top20, Margins.bottom8)}>
                {t("plugins.filters.label")}
            </Forms.FormTitle>

            <div className={classes(Margins.bottom20, cl("filter-controls"))}>
                <ErrorBoundary noop>
                    <TextInput autoFocus value={searchValue.value} placeholder={t("plugins.filters.placeholder")} onChange={onSearch} />
                </ErrorBoundary>
                <div className={InputStyles.inputWrapper}>
                    <ErrorBoundary noop>
                        <Select
                            options={[
                                { label: t("plugins.filters.option.all"), value: SearchStatus.ALL, default: true },
                                { label: t("plugins.filters.option.enabled"), value: SearchStatus.ENABLED },
                                { label: t("plugins.filters.option.disabled"), value: SearchStatus.DISABLED },
                                { label: t("plugins.filters.option.new"), value: SearchStatus.NEW }
                            ]}
                            serialize={String}
                            select={onStatusChange}
                            isSelected={v => v === searchValue.status}
                            closeOnSelect={true}
                        />
                    </ErrorBoundary>
                </div>
            </div>

            <Forms.FormTitle className={Margins.top20}>{t("plugins.title")}</Forms.FormTitle>

            {plugins.length || requiredPlugins.length
                ? (
                    <div className={cl("grid")}>
                        {plugins.length
                            ? plugins
                            : <Text variant="text-md/normal">{t("plugins.search.noCriteria")}</Text>
                        }
                    </div>
                )
                : <ExcludedPluginsList search={search} />
            }


            <Forms.FormDivider className={Margins.top20} />

            <Forms.FormTitle tag="h5" className={classes(Margins.top20, Margins.bottom8)}>
                {t("plugins.required.title")}
            </Forms.FormTitle>
            <div className={cl("grid")}>
                {requiredPlugins.length
                    ? requiredPlugins
                    : <Text variant="text-md/normal">{t("plugins.search.noCriteria")}</Text>
                }
            </div>
        </SettingsTab >
    );
}

export function PluginDependencyList({ deps }: { deps: string[]; }) {
    return (
        <>
            <Forms.FormText>{t("plugins.required.by")}</Forms.FormText>
            {deps.map((dep: string) => <Forms.FormText key={dep} className={cl("dep-text")}>{dep}</Forms.FormText>)}
        </>
    );
}
export default wrapTab(PluginSettings, t("plugins.title"));
