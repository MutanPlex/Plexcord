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
import { classes, Margins } from "@utils/index";
import { closeModal, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalProps, ModalRoot, ModalSize, openModal } from "@utils/modal";
import { useForceUpdater } from "@utils/react";
import { findComponentByCodeLazy } from "@webpack";
import { React, Tooltip, useMemo } from "@webpack/common";
import { JSX } from "react";

import Plugins from "~plugins";

import { getNewPlugins, getNewSettings, KnownPluginSettingsMap, writeKnownSettings } from "./knownSettings";

const cl = classNameFactory("pc-plugins-");

const Checkbox = findComponentByCodeLazy('"data-toggleable-component":"checkbox');

let hasSeen = false;

// Most of this was stolen from PluginSettings directly.

export function NewPluginsModal({ modalProps, newPlugins, newSettings }: { modalProps: ModalProps; newPlugins: Set<string>; newSettings: KnownPluginSettingsMap; }) {
    const settings = useSettings();
    const changes = useMemo(() => new ChangeList<string>(), []);
    let updateContinueButton = () => { };

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

    const mapPlugins = (array: string[]) => array.map(pn => Plugins[pn])
        .sort((a, b) => getName(a).localeCompare(getName(b)));

    const sortedPlugins = useMemo(() => [
        ...mapPlugins([...newPlugins]),
        ...mapPlugins([...newSettings.keys()].filter(p => !newPlugins.has(p)))
    ], []);

    const pluginCards = [] as JSX.Element[];
    const requiredPlugins = [] as JSX.Element[];

    for (const p of sortedPlugins) {
        const pluginName = getName(p) as string;

        if (p.hidden)
            continue;

        const isRequired = p.required || depMap[pluginName]?.some(d => settings.plugins[d].enabled);

        if (isRequired) {
            const tooltipText = p.required
                ? t(plugins.required.this)
                : <PluginDependencyList deps={depMap[pluginName]?.filter(d => settings.plugins[d].enabled)} />;

            requiredPlugins.push(
                <Tooltip text={tooltipText} key={pluginName}>
                    {({ onMouseLeave, onMouseEnter }) => (
                        <PluginCard
                            onMouseLeave={onMouseLeave}
                            onMouseEnter={onMouseEnter}
                            onRestartNeeded={name => {
                                changes.handleChange(name);
                                updateContinueButton();
                            }}
                            disabled={true}
                            plugin={p}
                            key={pluginName}
                            isNew={newPlugins.has(pluginName)}
                        />
                    )}
                </Tooltip>
            );
        } else {
            pluginCards.push(
                <PluginCard
                    onRestartNeeded={name => {
                        changes.handleChange(name);
                        updateContinueButton();
                    }}
                    disabled={false}
                    plugin={p}
                    key={pluginName}
                    isNew={newPlugins.has(pluginName)}
                />
            );
        }
    }

    return <ModalRoot {...modalProps} size={ModalSize.MEDIUM} >
        <ModalHeader>
            <BaseText size="lg" weight="semibold" style={{ flexGrow: 1 }}>{t(plugin.newPluginsManager.modal.title)} ({[...pluginCards, ...requiredPlugins].length})</BaseText>
            <Tooltip text={t(plugin.newPluginsManager.modal.tooltip)}>
                {tooltipProps =>
                    <div {...tooltipProps}>
                        <ModalCloseButton
                            onClick={modalProps.onClose}
                            className={classes(cl("close"), "pc-newPluginsManager-close")}
                        />
                    </div>
                }
            </Tooltip>
        </ModalHeader>
        <ModalContent>
            <div className={cl("grid")}>
                {[...pluginCards, ...requiredPlugins]}
            </div>
        </ModalContent>
        <ModalFooter className={cl("new-plugins-footer")}>
            <Flex flexDirection="row-reverse">
                <ContinueButton
                    close={modalProps.onClose}
                    changes={changes}
                    callback={(v: () => void) => updateContinueButton = v}
                />
            </Flex>
            <Flex flexDirection="row">
                <div className="pc-newPluginsManager-disable-wrapper">
                    <Checkbox
                        type="inverted"
                        value={!settings?.plugins?.NewPluginsManager?.enabled}
                        onChange={() => {
                            Settings.plugins.NewPluginsManager.enabled = !settings?.plugins?.NewPluginsManager?.enabled;
                        }}
                    >
                        <BaseText>{t(plugin.newPluginsManager.modal.dontShowAgain)}</BaseText>
                    </Checkbox>
                </div>
            </Flex>
        </ModalFooter>
    </ModalRoot>;
}

function ContinueButton(props: { callback: (update: () => void) => void; changes: ChangeList<string>; close: () => any; }) {
    const update = useForceUpdater();
    props.callback(update);
    return <Tooltip
        tooltipClassName="pc-newPluginsManager-restart-tooltip"
        text={<>
            {t(plugins.restart.following)}
            <div className={Margins.bottom8} />
            <ul className="pc-newPluginsManager-restart-list">
                {props.changes.map(p => <li key={p}>{p}</li>)}
            </ul>
        </>}
        shouldShow={props.changes.hasChanges}
    >
        {tooltipProps =>
            <Button
                {...tooltipProps}
                variant="positive"
                onClick={async () => {
                    await writeKnownSettings();
                    props.changes.hasChanges ? location.reload() : props.close();
                }}
            >
                {props.changes.hasChanges ? t(plugins.restart.button.restart) : t(plugins.restart.button.later)}
            </Button>
        }
    </Tooltip>;
}

export async function openNewPluginsModal() {
    const newPlugins = await getNewPlugins();
    const newSettings = await getNewSettings();
    if ((newPlugins.size || newSettings.size) && !hasSeen) {
        hasSeen = true;
        const modalKey = openModal(modalProps => <ErrorBoundary noop onError={() => { closeModal(modalKey); }}>
            <NewPluginsModal
                modalProps={modalProps}
                newPlugins={newPlugins}
                newSettings={newSettings}
            />
        </ErrorBoundary>);
    }
}
