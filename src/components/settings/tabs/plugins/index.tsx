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
import i18n, { SUPPORTED_LANGUAGES, t, useTranslation } from "@api/i18n";
import { isPluginEnabled, stopPlugin } from "@api/PluginManager";
import { Settings, useSettings } from "@api/Settings";
import { classNameFactory } from "@api/Styles";
import { BaseText } from "@components/BaseText";
import { Button } from "@components/Button";
import { Card } from "@components/Card";
import { Divider } from "@components/Divider";
import ErrorBoundary from "@components/ErrorBoundary";
import { Flex } from "@components/Flex";
import { HeadingTertiary } from "@components/Heading";
import { Paragraph } from "@components/Paragraph";
import { SettingsTab, wrapTab } from "@components/settings";
import { ChangeList } from "@utils/ChangeList";
import { isTruthy } from "@utils/guards";
import { Logger } from "@utils/Logger";
import { Margins } from "@utils/margins";
import { classes } from "@utils/misc";
import { useAwaiter, useCleanupEffect } from "@utils/react";
import { Alerts, lodash, Parser, React, Select, TextInput, Toasts, Tooltip, useMemo, useState } from "@webpack/common";
import { JSX } from "react";

import Plugins, { ExcludedPlugins, PluginMeta } from "~plugins"; // Avoid circular dependency

import { PluginCard } from "./PluginCard";
import { openWarningModal } from "./PluginModal";
import { StockPluginsCard } from "./PluginStatCards";
import { UIElementsButton } from "./UIElements";

export const cl = classNameFactory("pc-plugins-");
export const logger = new Logger("PluginSettings", "#a6d189");

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

function LanguageSelector() {
    const { t, locale, isAutoDetect } = useTranslation();
    const languageOptions = Object.entries(SUPPORTED_LANGUAGES).map(([code, info]) => ({
        label: `${info.nativeName} (${info.name})`,
        value: code
    }));

    const handleLocaleChange = (value: string) => {
        i18n.setLocale(value, true);
        Settings.language.locale = value;
    };
    return (
        <div className={cl("language")}>
            <Select
                options={languageOptions}
                serialize={v => v}
                select={handleLocaleChange}
                isSelected={v => v === locale}
                closeOnSelect={true}
                placeholder={t("settings.language.selector.placeholder")}
            />
        </div>
    );
}

function ReloadRequiredCard({ required, enabledPlugins, openWarningModal, resetCheckAndDo, enabledStockPlugins, totalStockPlugins, enabledUserPlugins, totalUserPlugins }) {
    return (
        <Card variant={required ? "warning" : "normal"} className={cl("info-card")}>
            {required
                ? (
                    <>
                        <HeadingTertiary>{t("plugins.restart.required")}</HeadingTertiary>
                        <Paragraph className={cl("dep-text")}>
                            {t("plugins.restart.description")}
                        </Paragraph>
                        <Button onClick={() => location.reload()} className={cl("restart-button")}>
                            {t("plugins.restart.button.restart")}
                        </Button>
                    </>
                )
                : (
                    <>
                        <Paragraph>{t("plugins.infoModal.description")}</Paragraph>
                        <Paragraph>{t("plugins.infoModal.settingsInfo")}</Paragraph>
                        <Divider className={`${Margins.top8} ${Margins.bottom8}`} />

                        <StockPluginsCard
                            enabledStockPlugins={enabledStockPlugins}
                            totalStockPlugins={totalStockPlugins}
                            enabledUserPlugins={enabledUserPlugins}
                            totalUserPlugins={totalUserPlugins}
                        />
                    </>
                )}
            <Flex justifyContent="space-between" alignItems="center" flexDirection="row" className={Margins.top16}>
                <LanguageSelector />
                {enabledPlugins.length > 0 && !required && (
                    <Button
                        size="small"
                        className={"pc-plugins-disable-warning pc-modal-align-reset"}
                        onClick={() => {
                            return openWarningModal(null, null, null, false, enabledPlugins.length, resetCheckAndDo);
                        }}
                    >
                        {t("plugins.restart.button.disableAll")}
                    </Button>
                )}
            </Flex>
        </Card>
    );
}

const enum SearchStatus {
    ALL,
    ENABLED,
    DISABLED,
    NEW,
    USER_PLUGINS,
    API_PLUGINS
}

export function getExcludedReasons(): Record<"web" | "discordDesktop" | "plextron" | "desktop" | "dev", string> {
    return {
        desktop: t("plugins.excluded.desktop"),
        discordDesktop: t("plugins.excluded.discordDesktop"),
        plextron: t("plugins.excluded.plextron"),
        web: t("plugins.excluded.web"),
        dev: t("plugins.excluded.dev")
    };
}

function ExcludedPluginsList({ search }: { search: string; }) {
    const matchingExcludedPlugins = search
        ? Object.entries(ExcludedPlugins)
            .filter(([name]) => name.toLowerCase().includes(search))
        : [];

    const excludedReasons = getExcludedReasons();

    return (
        <Paragraph className={Margins.top16}>
            {matchingExcludedPlugins.length
                ? <>
                    <Paragraph>{t("plugins.search.looking")}:</Paragraph>
                    <ul>
                        {matchingExcludedPlugins.map(([name, reason]) => (
                            <li key={name}>
                                <b>{name}</b>: {t("plugins.search.onlyAvailable")} {excludedReasons[reason]}
                            </li>
                        ))}
                    </ul>
                </>
                : t("plugins.search.noCriteria")
            }
        </Paragraph>
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

    const hasUserPlugins = useMemo(() => !IS_STANDALONE && Object.values(PluginMeta).some(m => m.userPlugin), []);

    const [searchValue, setSearchValue] = useState({ value: "", status: SearchStatus.ALL });

    const search = searchValue.value.toLowerCase();
    const onSearch = (query: string) => setSearchValue(prev => ({ ...prev, value: query }));
    const onStatusChange = (status: SearchStatus) => setSearchValue(prev => ({ ...prev, status }));

    const pluginFilter = (plugin: typeof Plugins[keyof typeof Plugins]) => {
        const { status } = searchValue;
        const enabled = isPluginEnabled(plugin.name);

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
            case SearchStatus.USER_PLUGINS:
                if (!PluginMeta[plugin.name]?.userPlugin) return false;
                break;
            case SearchStatus.API_PLUGINS:
                if (!plugin.name.endsWith("API")) return false;
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

    const showApi = searchValue.status === SearchStatus.API_PLUGINS;
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
    const enabledPlugins = Object.keys(Plugins).filter(p => isPluginEnabled(p) && !isApiPlugin(p));

    const totalStockPlugins = totalPlugins.filter(p => !PluginMeta[p].userPlugin && !Plugins[p].hidden).length;
    const totalUserPlugins = totalPlugins.filter(p => PluginMeta[p].userPlugin).length;
    const enabledStockPlugins = enabledPlugins.filter(p => !PluginMeta[p].userPlugin).length;
    const enabledUserPlugins = enabledPlugins.filter(p => PluginMeta[p].userPlugin).length;

    return (
        <SettingsTab title={t("plugins.title")}>

            <ReloadRequiredCard required={changes.hasChanges} enabledPlugins={enabledPlugins} openWarningModal={openWarningModal} resetCheckAndDo={resetCheckAndDo} enabledStockPlugins={enabledStockPlugins} totalStockPlugins={totalStockPlugins} enabledUserPlugins={enabledUserPlugins} totalUserPlugins={totalUserPlugins} />

            <UIElementsButton />

            <HeadingTertiary className={classes(Margins.top20, Margins.bottom8)}>
                {t("plugins.filters.label")}
            </HeadingTertiary>

            <div className={classes(Margins.bottom20, cl("filter-controls"))}>
                <ErrorBoundary noop>
                    <TextInput autoFocus value={searchValue.value} placeholder={t("plugins.filters.placeholder")} onChange={onSearch} />
                </ErrorBoundary>
                <div>
                    <ErrorBoundary noop>
                        <Select
                            options={[
                                { label: t("plugins.filters.option.all"), value: SearchStatus.ALL, default: true },
                                { label: t("plugins.filters.option.enabled"), value: SearchStatus.ENABLED },
                                { label: t("plugins.filters.option.disabled"), value: SearchStatus.DISABLED },
                                { label: t("plugins.filters.option.new"), value: SearchStatus.NEW },
                                hasUserPlugins && { label: t("plugins.filters.option.userplugins"), value: SearchStatus.USER_PLUGINS },
                                IS_DEV && { label: t("plugins.filters.option.api"), value: SearchStatus.API_PLUGINS },
                            ].filter(isTruthy)}
                            serialize={String}
                            select={onStatusChange}
                            isSelected={v => v === searchValue.status}
                            closeOnSelect={true}
                        />
                    </ErrorBoundary>
                </div>
            </div>

            <HeadingTertiary className={Margins.top20}>{t("plugins.title")}</HeadingTertiary>

            {plugins.length || requiredPlugins.length
                ? (
                    <div className={cl("grid")}>
                        {plugins.length
                            ? plugins
                            : <BaseText size="md" weight="normal">{t("plugins.search.noCriteria")}</BaseText>
                        }
                    </div>
                )
                : <ExcludedPluginsList search={search} />
            }


            <Divider className={Margins.top20} />

            <Paragraph className={classes(Margins.top20, Margins.bottom8)}>
                {t("plugins.required.title")}
            </Paragraph>
            <div className={cl("grid")}>
                {requiredPlugins.length
                    ? requiredPlugins
                    : <BaseText size="md" weight="normal">{t("plugins.search.noCriteria")}</BaseText>
                }
            </div>
        </SettingsTab >
    );
}

export function PluginDependencyList({ deps }: { deps: string[]; }) {
    return (
        <>
            <Paragraph>{t("plugins.required.by")}</Paragraph>
            {deps.map((dep: string) => <Paragraph key={dep} className={cl("dep-text")}>{dep}</Paragraph>)}
        </>
    );
}
export default wrapTab(PluginSettings, t("plugins.title"));
