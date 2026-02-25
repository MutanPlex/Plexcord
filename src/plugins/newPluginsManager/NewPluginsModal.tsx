/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2024 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import "./styles.css";

import { plugin, plugins, t } from "@api/i18n";
import { Settings, useSettings } from "@api/Settings";
import { BaseText } from "@components/BaseText";
import { Button } from "@components/Button";
import ErrorBoundary from "@components/ErrorBoundary";
import { Flex } from "@components/Flex";
import { PluginDependencyList } from "@components/settings/tabs/plugins";
import { PluginCard } from "@components/settings/tabs/plugins/PluginCard";
import { ChangeList } from "@utils/ChangeList";
import { classNameFactory } from "@utils/css";
import { CloseButton, closeModal, ModalContent, ModalFooter, ModalHeader, ModalProps, ModalRoot, ModalSize, openModal } from "@utils/modal";
import { useForceUpdater } from "@utils/react";
import { findComponentByCodeLazy } from "@webpack";
import { Tooltip, useMemo } from "@webpack/common";
import { ReactNode } from "react";

import Plugins from "~plugins";

import { getNewPlugins, getNewSettings, KnownPluginSettingsMap, writeKnownSettings } from "./knownSettings";

const cl = classNameFactory("pc-new-plugins-");

const Checkbox = findComponentByCodeLazy('"data-toggleable-component":"checkbox');

let hasSeen = false;

interface ModalComponentProps {
    modalProps: ModalProps;
    newPlugins: Set<string>;
    newSettings: KnownPluginSettingsMap;
}

function NewPluginsModal({ modalProps, newPlugins, newSettings }: ModalComponentProps) {
    const settings = useSettings();
    const changes = useMemo(() => new ChangeList<string>(), []);
    const forceUpdate = useForceUpdater();

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

    const getName = (p: any) => typeof p.name === "function" ? p.name() : p.name;

    const sortedPlugins = useMemo(() => {
        const mapPlugins = (array: string[]) => array.map(pn => Plugins[pn]).sort((a, b) => getName(a).localeCompare(getName(b)));
        return [
            ...mapPlugins([...newPlugins]),
            ...mapPlugins([...newSettings.keys()].filter(p => !newPlugins.has(p)))
        ];
    }, []);

    const onRestartNeeded = (name: string) => {
        changes.handleChange(name);
        forceUpdate();
    };

    const pluginCards: ReactNode[] = [];
    const requiredPluginCards: ReactNode[] = [];

    for (const p of sortedPlugins) {
        const pluginName = getName(p) as string;

        if (p.hidden) continue;

        const isRequired = p.required || depMap[pluginName]?.some(d => settings.plugins[d].enabled);

        if (isRequired) {
            const tooltipText = p.required
                ? t(plugins.required.this)
                : <PluginDependencyList deps={depMap[pluginName]?.filter(d => settings.plugins[d].enabled)} />;

            requiredPluginCards.push(
                <Tooltip text={tooltipText} key={pluginName}>
                    {({ onMouseLeave, onMouseEnter }) => (
                        <PluginCard
                            onMouseLeave={onMouseLeave}
                            onMouseEnter={onMouseEnter}
                            onRestartNeeded={onRestartNeeded}
                            disabled={true}
                            plugin={p}
                            isNew={newPlugins.has(pluginName)}
                        />
                    )}
                </Tooltip>
            );
        } else {
            pluginCards.push(
                <PluginCard
                    onRestartNeeded={onRestartNeeded}
                    disabled={false}
                    plugin={p}
                    key={pluginName}
                    isNew={newPlugins.has(pluginName)}
                />
            );
        }
    }

    const totalCount = pluginCards.length + requiredPluginCards.length;

    const handleContinue = async () => {
        await writeKnownSettings();
        if (changes.hasChanges) {
            location.reload();
        } else {
            modalProps.onClose();
        }
    };

    return (
        <ModalRoot {...modalProps} size={ModalSize.MEDIUM}>
            <ModalHeader separator={false} className={cl("header")}>
                <div className={cl("header-content")}>
                    <BaseText size="lg" weight="semibold" style={{ flexGrow: 1 }}>
                        {t(plugin.newPluginsManager.modal.title)} ({totalCount})
                    </BaseText>
                    <BaseText size="sm" className={cl("description")}>
                        {t(plugin.newPluginsManager.modal.description)}
                    </BaseText>
                </div>
                <div className={cl("header-trailing")}>
                    <CloseButton onClick={modalProps.onClose} />
                </div>
            </ModalHeader>

            <ModalContent>
                <div className={cl("grid")}>
                    {pluginCards}
                    {requiredPluginCards}
                </div>
            </ModalContent>

            <ModalFooter>
                <Flex className={cl("footer")}>
                    <Tooltip
                        text={
                            <>
                                {t(plugin.newPluginsManager.modal.restartRequired)}
                                <ul className={cl("restart-list")}>
                                    {changes.map(p => <li key={p}>{p}</li>)}
                                </ul>
                            </>
                        }
                        shouldShow={changes.hasChanges}
                    >
                        {tooltipProps => (
                            <Button
                                {...tooltipProps}
                                onClick={handleContinue}
                            >
                                {changes.hasChanges ? t(plugin.newPluginsManager.modal.restart) : t(plugin.newPluginsManager.modal.continue)}
                            </Button>
                        )}
                    </Tooltip>

                    <Checkbox
                        type="inverted"
                        value={!settings?.plugins?.NewPluginsManager?.enabled}
                        onChange={() => {
                            Settings.plugins.NewPluginsManager.enabled = !settings?.plugins?.NewPluginsManager?.enabled;
                        }}
                    >
                        <BaseText>{t(plugin.newPluginsManager.modal.dontShowAgain)}</BaseText>
                    </Checkbox>
                </Flex>
            </ModalFooter>
        </ModalRoot>
    );
}

export async function openNewPluginsModal() {
    const newPlugins = await getNewPlugins();
    const newSettings = await getNewSettings();
    if ((newPlugins.size || newSettings.size) && !hasSeen) {
        hasSeen = true;
        const modalKey = openModal(modalProps => (
            <ErrorBoundary noop onError={() => closeModal(modalKey)}>
                <NewPluginsModal
                    modalProps={modalProps}
                    newPlugins={newPlugins}
                    newSettings={newSettings}
                />
            </ErrorBoundary>
        ));
    }
}
