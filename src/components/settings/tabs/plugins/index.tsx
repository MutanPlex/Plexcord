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
import { Settings, useSettings } from "@api/Settings";
import { classNameFactory } from "@api/Styles";
import { SettingsTab, wrapTab } from "@components/settings";
import { ChangeList } from "@utils/ChangeList";
import { proxyLazy } from "@utils/lazy";
import { Logger } from "@utils/Logger";
import { Margins } from "@utils/margins";
import { classes } from "@utils/misc";
import { ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalRoot, ModalSize, openModal } from "@utils/modal";
import { useAwaiter, useCleanupEffect } from "@utils/react";
import { findByPropsLazy } from "@webpack";
import { Alerts, Button, Card, Flex, Forms, lodash, Parser, React, Select, Text, TextInput, Toasts, Tooltip, useMemo, useState } from "@webpack/common";
import { JSX } from "react";

import Plugins, { ExcludedPlugins, PluginMeta } from "~plugins";// Avoid circular dependency
const { startDependenciesRecursive, startPlugin, stopPlugin } = proxyLazy(() => require("plugins"));

import { PluginCard } from "./PluginCard";
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

function ReloadRequiredCard({ required, enabledPlugins, openDisablePluginsModal, resetCheckAndDo, enabledStockPlugins, totalStockPlugins, enabledUserPlugins, totalUserPlugins }) {
    return (
        <Card className={classes(cl("info-card"), required && "pc-warning-card")}>
            {required
                ? (
                    <>
                        <Forms.FormTitle tag="h5">Restart required!</Forms.FormTitle>
                        <Forms.FormText className={cl("dep-text")}>
                            Restart now to apply new plugins and their settings
                        </Forms.FormText>
                        <Button onClick={() => location.reload()} className={cl("restart-button")}>
                            Restart
                        </Button>
                    </>
                )
                : (
                    <>
                        <Forms.FormText>Press the cog wheel or info icon to get more info on a plugin</Forms.FormText>
                        <Forms.FormText>Plugins with a cog wheel have settings you can modify!</Forms.FormText>
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
                    size={Button.Sizes.SMALL}
                    className="button-danger-background disable-all-button"
                    onClick={() => {
                        if (Settings.ignoreResetWarning) return resetCheckAndDo();

                        return openDisablePluginsModal(enabledPlugins, resetCheckAndDo);
                    }}
                >
                    Disable All Plugins
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

function ExcludedPluginsList({ search }: { search: string; }) {
    const matchingExcludedPlugins = Object.entries(ExcludedPlugins)
        .filter(([name]) => name.toLowerCase().includes(search));

    const ExcludedReasons: Record<"web" | "discordDesktop" | "plextron" | "desktop" | "dev", string> = {
        desktop: "Discord Desktop app or Plextron",
        discordDesktop: "Discord Desktop app",
        plextron: "Plextron app",
        web: "Plextron app and the Web version of Discord",
        dev: "Developer version of Plexcord"
    };

    return (
        <Text variant="text-md/normal" className={Margins.top16}>
            {matchingExcludedPlugins.length
                ? <>
                    <Forms.FormText>Are you looking for:</Forms.FormText>
                    <ul>
                        {matchingExcludedPlugins.map(([name, reason]) => (
                            <li key={name}>
                                <b>{name}</b>: Only available on the {ExcludedReasons[reason]}
                            </li>
                        ))}
                    </ul>
                </>
                : "No plugins meet the search criteria."
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
                title: "Restart required",
                body: (
                    <>
                        <p>The following plugins require a restart:</p>
                        <div>{changes.map((s, i) => (
                            <>
                                {i > 0 && ", "}
                                {Parser.parse("`" + s.split(".")[0] + "`")}
                            </>
                        ))}</div>
                    </>
                ),
                confirmText: "Restart now",
                cancelText: "Later!",
                onConfirm: () => location.reload()
            });
    }, []);

    const depMap = useMemo(() => {
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
            plugin.tags?.some(t => t.toLowerCase().includes(search))
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
                ? "This plugin is required for Plexcord to function."
                : makeDependencyList(depMap[p.name]?.filter(d => settings.plugins[d].enabled));

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
                showErrorToast(`Error while stopping plugin ${plugin}`);
                continue;
            }

            pluginSettings.enabled = false;
        }

        if (restartNeeded) {
            Alerts.show({
                title: "Restart Required",
                body: (
                    <>
                        <p style={{ textAlign: "center" }}>Some plugins require a restart to fully disable.</p>
                        <p style={{ textAlign: "center" }}>Would you like to restart now?</p>
                    </>
                ),
                confirmText: "Restart Now",
                cancelText: "Later",
                onConfirm: () => location.reload()
            });
        }
    }

    function openDisablePluginsModal(enabledPlugins: String[], resetCheckAndDo: () => void) {
        if (Settings.ignoreResetWarning) return resetCheckAndDo();

        openModal(warningModalProps => (
            <ModalRoot
                {...warningModalProps}
                size={ModalSize.SMALL}
                className="pc-text-selectable"
                transitionState={warningModalProps.transitionState}
            >
                <ModalHeader separator={false}>
                    <Text className="text-danger">Dangerous Action</Text>
                    <ModalCloseButton onClick={warningModalProps.onClose} className="pc-modal-close-button" />
                </ModalHeader>
                <ModalContent>
                    <Forms.FormSection>
                        <Flex className="pc-warning-info">
                            <img
                                src="https://media.tenor.com/hapjxf8y50YAAAAi/stop-sign.gif"
                                alt="Warning"
                            />
                            <Text className="warning-text">
                                WARNING: You are about to disable <span>{enabledPlugins.length}</span> plugins!
                            </Text>
                            <Text className="warning-text">
                                THIS ACTION IS IRREVERSIBLE!
                            </Text>
                            <Text className="text-normal margin-bottom">
                                Are you absolutely sure you want to proceed? You can always enable them back later.
                            </Text>
                        </Flex>
                    </Forms.FormSection>
                </ModalContent>
                <ModalFooter className="modal-footer">
                    <Flex className="button-container">
                        <Button
                            size={Button.Sizes.SMALL}
                            color={Button.Colors.PRIMARY}
                            onClick={warningModalProps.onClose}
                            look={Button.Looks.LINK}
                        >
                            Cancel
                        </Button>
                        <Flex className="button-group">
                            {!Settings.ignoreResetWarning && (
                                <Button
                                    size={Button.Sizes.SMALL}
                                    className="button-danger-background"
                                    onClick={() => {
                                        Settings.ignoreResetWarning = true;
                                    }}
                                >
                                    Disable Warning Forever
                                </Button>
                            )}
                            <Tooltip text="This action cannot be undone. Are you sure?" shouldShow={true}>
                                {({ onMouseEnter, onMouseLeave }) => (
                                    <Button
                                        size={Button.Sizes.SMALL}
                                        className="button-danger-background-no-margin"
                                        onClick={resetCheckAndDo}
                                        onMouseEnter={onMouseEnter}
                                        onMouseLeave={onMouseLeave}
                                    >
                                        Disable All
                                    </Button>
                                )}
                            </Tooltip>
                        </Flex>
                    </Flex>
                </ModalFooter>
            </ModalRoot>
        ));
    }


    // Code directly taken from supportHelper.tsx
    const isApiPlugin = (plugin: string) => plugin.endsWith("API") || Plugins[plugin].required;

    const totalPlugins = Object.keys(Plugins).filter(p => !isApiPlugin(p));
    const enabledPlugins = Object.keys(Plugins).filter(p => Plexcord.Plugins.isPluginEnabled(p) && !isApiPlugin(p));

    const totalStockPlugins = totalPlugins.filter(p => !PluginMeta[p].userPlugin).length;
    const totalUserPlugins = totalPlugins.filter(p => PluginMeta[p].userPlugin).length;
    const enabledStockPlugins = enabledPlugins.filter(p => !PluginMeta[p].userPlugin).length;
    const enabledUserPlugins = enabledPlugins.filter(p => PluginMeta[p].userPlugin).length;

    return (
        <SettingsTab title="Plugins">

            <ReloadRequiredCard required={changes.hasChanges} enabledPlugins={enabledPlugins} openDisablePluginsModal={openDisablePluginsModal} resetCheckAndDo={resetCheckAndDo} enabledStockPlugins={enabledStockPlugins} totalStockPlugins={totalStockPlugins} enabledUserPlugins={enabledUserPlugins} totalUserPlugins={totalUserPlugins} />

            <Forms.FormTitle tag="h5" className={classes(Margins.top20, Margins.bottom8)}>
                Filters
            </Forms.FormTitle>

            <div className={classes(Margins.bottom20, cl("filter-controls"))}>
                <TextInput autoFocus value={searchValue.value} placeholder="Search for a plugin..." onChange={onSearch} />
                <div className={InputStyles.inputWrapper}>
                    <Select
                        options={[
                            { label: "Show All", value: SearchStatus.ALL, default: true },
                            { label: "Show Enabled", value: SearchStatus.ENABLED },
                            { label: "Show Disabled", value: SearchStatus.DISABLED },
                            { label: "Show New", value: SearchStatus.NEW }
                        ]}
                        serialize={String}
                        select={onStatusChange}
                        isSelected={v => v === searchValue.status}
                        closeOnSelect={true}
                        className={InputStyles.input}
                    />
                </div>
            </div>

            <Forms.FormTitle className={Margins.top20}>Plugins</Forms.FormTitle>

            {plugins.length || requiredPlugins.length
                ? (
                    <div className={cl("grid")}>
                        {plugins.length
                            ? plugins
                            : <Text variant="text-md/normal">No plugins meet the search criteria.</Text>
                        }
                    </div>
                )
                : <ExcludedPluginsList search={search} />
            }


            <Forms.FormDivider className={Margins.top20} />

            <Forms.FormTitle tag="h5" className={classes(Margins.top20, Margins.bottom8)}>
                Required Plugins
            </Forms.FormTitle>
            <div className={cl("grid")}>
                {requiredPlugins.length
                    ? requiredPlugins
                    : <Text variant="text-md/normal">No plugins meet the search criteria.</Text>
                }
            </div>
        </SettingsTab >
    );
}

function makeDependencyList(deps: string[]) {
    return (
        <>
            <Forms.FormText>This plugin is required by:</Forms.FormText>
            {deps.map((dep: string) => <Forms.FormText key={dep} className={cl("dep-text")}>{dep}</Forms.FormText>)}
        </>
    );
}
export default wrapTab(PluginSettings, "Plugins");
