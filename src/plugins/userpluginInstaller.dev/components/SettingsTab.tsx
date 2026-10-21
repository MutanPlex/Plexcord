/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2025 nin0
 * Copyright (c) 2026 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { plugin as pluginI18n, t } from "@api/i18n";
import { getName, pluginRequiresRestart, startPlugin, stopPlugin } from "@api/PluginManager";
import { useSettings } from "@api/Settings";
import { BaseText } from "@components/BaseText";
import { Button } from "@components/Button";
import { Card } from "@components/Card";
import { CheckedTextInput } from "@components/CheckedTextInput";
import { HeadingTertiary } from "@components/Heading";
import { DeleteIcon } from "@components/Icons";
import { Paragraph } from "@components/Paragraph";
import { AddonCard } from "@components/settings";
import {
    SettingsTab as STab,
    wrapTab,
} from "@components/settings/tabs/BaseTab";
import { classes, isObjectEmpty } from "@utils/misc";
import { relaunch } from "@utils/native";
import { Alerts, closeAllModals, NavigationRouter, showToast,useEffect, useState } from "@webpack/common";

import userpluginInstaller, { Native } from "..";
import {
    cl,
    CLONE_LINK_REGEX,
    showInstallFinishedAlert,
} from "../misc/constants";

function UserPluginsTab() {
    const rs = useSettings(["plugins.*"]);
    const [pluginsLoaded, loadPlugins] = useState(false);
    const [plugins, setPlugins] = useState<
        {
            name: string;
            description: string;
            usesPreSend: boolean;
            usesNative: boolean;
            directory?: string;
            remote: string;
            supportChannelID?: string;
        }[]
    >([]);
    const [url, setUrl] = useState("");
    const [valid, setValid] = useState(false);
    const [pluginsWithUpdates, setPluginsWithUpdates] = useState<
        Record<string, string>
    >({});
    const [updatesLoaded, loadUpdates] = useState(false);

    useEffect(() => {
        const { plugins: plgobj, pluginsWithUpdates: pwug } =
            userpluginInstaller;
        setPlugins(plgobj.value());
        loadPlugins(true);
        const cid2 = plgobj.registerCallback(value => setPlugins(value));

        const setPWU = value => {
            const pwu = value.plugins.map(pg => ({
                [pg]: plgobj.value().find(pfjh => pfjh.directory === pg)
                    ?.name,
            }));
            setPluginsWithUpdates(Object.assign({}, ...pwu));
            loadUpdates(value.finished);
        };
        const cid = pwug.registerCallback(value => {
            setPWU(value);
        });
        setPWU(pwug.value());

        return () => {
            pwug.deregisterCallback(cid);
            plgobj.deregisterCallback(cid2);
        };
    }, []);

    return (
        <STab
            // @ts-ignore
            title={`UserPlugins${pluginsLoaded ? ` ${t(pluginI18n.userpluginInstaller.text.tabCounts, { total: plugins.length, enabled: plugins.filter(p => Plexcord.Settings.plugins[p.name].enabled).length })}` : ""}`}
        >
            <div className={cl("update-check-container")}>
                {isObjectEmpty(pluginsWithUpdates) ? (
                    !updatesLoaded && (
                        <BaseText>{t(pluginI18n.userpluginInstaller.text.checkingForUpdates)}</BaseText>
                    )
                ) : (
                    <Card
                        className={classes(cl("info-card"), "pc-warning-card")}
                    >
                        <HeadingTertiary className={cl("install-title")}>
                            {t(pluginI18n.userpluginInstaller.text.pluginUpdatesAvailable)}
                        </HeadingTertiary>
                        <Paragraph className={cl("install-desc")}>
                            {t(pluginI18n.userpluginInstaller.text.theFollowingPluginsAre)}
                            <ul className={cl("outdated-list")}>
                                {Object.values(pluginsWithUpdates)
                                    .toSorted()
                                    .map(pl => (
                                        <li key={pl}>{pl}</li>
                                    ))}
                            </ul>
                            {!updatesLoaded &&
                                t(pluginI18n.userpluginInstaller.text.possiblyMore)}
                            {t(pluginI18n.userpluginInstaller.text.youCanUpdatePlugins)}
                        </Paragraph>
                    </Card>
                )}
            </div>
            <Card className={cl("info-card")}>
                <HeadingTertiary className={cl("install-title")}>
                    {t(pluginI18n.userpluginInstaller.text.installPlugin)}
                </HeadingTertiary>
                <Paragraph className={cl("install-desc")}>
                    {t(pluginI18n.userpluginInstaller.text.installHint)}
                </Paragraph>
                <div className={cl("install-field")}>
                    <CheckedTextInput
                        onChange={v => setUrl(v)}
                        validate={v => {
                            const match = v.match(CLONE_LINK_REGEX);
                            if (match) {
                                const idpl = match.includes("plugins.nin0.dev")
                                    ? 1
                                    : 0;
                                const installed = plugins
                                    .map(p => p.directory)
                                    .includes(match[[3, 6][idpl]]);
                                if (installed) {
                                    setValid(false);
                                    return t(pluginI18n.userpluginInstaller.text.alreadyInstalled);
                                }
                                setValid(true);
                                return true;
                            } else {
                                setValid(false);
                                return t(pluginI18n.userpluginInstaller.text.invalidUrl);
                            }
                        }}
                        initialValue={url}
                    />
                </div>
                <div className={cl("button-container")}>
                    <Button
                        disabled={!valid}
                        className={cl("install-button")}
                        onClick={async () => {
                            const gitLink = url.match(CLONE_LINK_REGEX)!;
                            const idpl = gitLink.includes("plugins.nin0.dev")
                                ? 1
                                : 0;
                            try {
                                const { name, native } = JSON.parse(
                                    await Native.initPluginInstall(
                                        gitLink[0],
                                        gitLink[[1, 4][idpl]],
                                        gitLink[[2, 5][idpl]],
                                        gitLink[[3, 6][idpl]],
                                    ),
                                );
                                showInstallFinishedAlert(name, native);
                            } catch (e: any) {
                                if (e.toString().includes("silentStop")) return;
                                Alerts.show({
                                    title: t(pluginI18n.userpluginInstaller.text.installError),
                                    body: e.toString(),
                                });
                            }
                        }}
                    >
                        {t(pluginI18n.userpluginInstaller.text.install)}
                    </Button>
                </div>
            </Card>
            <div className={cl("plugins-container")}>
                {pluginsLoaded ? (
                    <div className={cl("plugins-grid")}>
                        {plugins
                            .toSorted((a, b) =>
                                a.name.localeCompare(b.name, "en", {
                                    sensitivity: "base",
                                }),
                            )
                            .toSorted((a, b) => {
                                const updatePendingNames =
                                    Object.keys(pluginsWithUpdates);
                                const [aa, bb] = [
                                    updatePendingNames.includes(a.directory!)
                                        ? 1000
                                        : 0,
                                    updatePendingNames.includes(b.directory!)
                                        ? 1000
                                        : 0,
                                ];
                                return bb - aa;
                            })
                            .map(plugin => {

                                const pl = Plexcord.Plugins.plugins[
                                    plugin.name
                                ];
                                return <AddonCard
                                    key={getName(pl.name)}
                                    name={getName(pl.name)}
                                    description={typeof pl.description === "function" ? pl.description() : pl.description}
                                    enabled={rs.plugins[getName(pl.name)].enabled}
                                    infoButton={<button
                                        role="switch"
                                        onClick={async () => {
                                            await Native.rmPlugin(
                                                plugin.directory!,
                                            );
                                            Alerts.show({
                                                title: t(pluginI18n.userpluginInstaller.text.done),
                                                body: t(plugin.usesNative ? pluginI18n.userpluginInstaller.text.uninstalledRestart : pluginI18n.userpluginInstaller.text.uninstalledRefresh, { name: getName(plugin.name) }),
                                                confirmText:
                                                    plugin.usesNative
                                                        ? t(pluginI18n.userpluginInstaller.text.restart)
                                                        : t(pluginI18n.userpluginInstaller.text.refresh),
                                                cancelText: t(pluginI18n.userpluginInstaller.text.later),
                                                onConfirm() {
                                                    plugin.usesNative
                                                        ? relaunch()
                                                        : window.location.reload();
                                                },
                                            });
                                        }}
                                        className={cl("delete-button")}
                                    >
                                        <DeleteIcon />
                                    </button>}
                                    setEnabled={enabled => {
                                        Plexcord.Settings.plugins[getName(pl.name)].enabled = enabled;
                                        if (pluginRequiresRestart(pl)) {
                                            showToast({ text: t(pluginI18n.userpluginInstaller.toast.restartToApplyChanges) });
                                        } else {
                                            (enabled ? startPlugin : stopPlugin)(pl);
                                        }
                                    }}
                                    footer={(
                                        <div className={cl("plugin-footer")}>
                                            {Object.keys(
                                                pluginsWithUpdates,
                                            ).includes(plugin.directory!) && (
                                                    <Button
                                                        size="small"
                                                        onClick={async () => {
                                                            try {
                                                                await Native.updatePlugin(
                                                                    plugin.directory!,
                                                                );
                                                                const oldPWU =
                                                                    userpluginInstaller.pluginsWithUpdates.value()
                                                                        .plugins;
                                                                oldPWU.splice(
                                                                    oldPWU.indexOf(
                                                                        plugin.directory!,
                                                                    ),
                                                                    1,
                                                                );
                                                                userpluginInstaller.pluginsWithUpdates.value(
                                                                    {
                                                                        finished: true,
                                                                        plugins: oldPWU,
                                                                    },
                                                                );
                                                                Alerts.show({
                                                                    title: t(pluginI18n.userpluginInstaller.text.done),
                                                                    body: t(plugin.usesNative ? pluginI18n.userpluginInstaller.text.updatedRestart : pluginI18n.userpluginInstaller.text.updatedRefresh, { name: getName(plugin.name) }),
                                                                    confirmText:
                                                                        plugin.usesNative
                                                                            ? t(pluginI18n.userpluginInstaller.text.restart)
                                                                            : t(pluginI18n.userpluginInstaller.text.refresh),
                                                                    cancelText: t(pluginI18n.userpluginInstaller.text.later),
                                                                    onConfirm() {
                                                                        plugin.usesNative
                                                                            ? relaunch()
                                                                            : window.location.reload();
                                                                    },
                                                                });
                                                            } catch (e: any) {
                                                                if (
                                                                    e
                                                                        .toString()
                                                                        .includes(
                                                                            "silentStop",
                                                                        )
                                                                )
                                                                    return;
                                                                Alerts.show({
                                                                    title: t(pluginI18n.userpluginInstaller.text.updateError),
                                                                    body: e.toString(),
                                                                });
                                                            }
                                                        }}
                                                    >
                                                        {t(pluginI18n.userpluginInstaller.text.update)}
                                                    </Button>
                                                )}
                                            <Button
                                                variant="secondary"
                                                size="small"
                                                disabled={plugin.remote === ""}
                                                onClick={() =>
                                                    PlexcordNative.native.openExternal(
                                                        plugin.remote,
                                                    )
                                                }
                                            >
                                                {t(pluginI18n.userpluginInstaller.text.source)}
                                            </Button>
                                            {plugin.supportChannelID && <Button variant="secondary" size="small" onClick={() => {
                                                closeAllModals();
                                                NavigationRouter.transitionTo(`/channels/1015060230222131221/${plugin.supportChannelID}`);
                                            }}>
                                                {t(pluginI18n.userpluginInstaller.text.support)}
                                            </Button>}
                                        </div>
                                    )}
                                />;
                            })}
                    </div>
                ) : (
                    <BaseText>{t(pluginI18n.userpluginInstaller.text.loadingPlugins)}</BaseText>
                )}
            </div>
        </STab>
    );
}

export default wrapTab(UserPluginsTab, "UserPlugins");
