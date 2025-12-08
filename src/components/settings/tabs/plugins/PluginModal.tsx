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

import "./PluginModal.css";

import { generateId } from "@api/Commands";
import { plugins, t, useForceUpdateOnLocaleChange } from "@api/i18n";
import { Settings, useSettings } from "@api/Settings";
import { classNameFactory } from "@api/Styles";
import { BaseText } from "@components/BaseText";
import { Button } from "@components/Button";
import ErrorBoundary from "@components/ErrorBoundary";
import { Flex } from "@components/Flex";
import { Paragraph } from "@components/Paragraph";
import { User } from "@plexcord/discord-types";
import { debounce } from "@shared/debounce";
import { gitRemote } from "@shared/plexcordUserAgent";
import { proxyLazy } from "@utils/lazy";
import { Margins } from "@utils/margins";
import { classes, isObjectEmpty } from "@utils/misc";
import { ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalProps, ModalRoot, ModalSize, openModal } from "@utils/modal";
import { OptionType, Plugin } from "@utils/types";
import { findByPropsLazy } from "@webpack";
import { Clickable, FluxDispatcher, React, Toasts, Tooltip, useEffect, UserStore, UserSummaryItem, UserUtils, useState } from "@webpack/common";
import { Constructor } from "type-fest";

import { PluginMeta } from "~plugins";

import { OptionComponentMap } from "./components";
import { openContributorModal } from "./ContributorModal";
import { GithubButton, WebsiteButton } from "./LinkIconButton";

const cl = classNameFactory("pc-plugin-modal-");

const AvatarStyles = findByPropsLazy("moreUsers", "emptyUser", "avatarContainer", "clickableAvatar");
const UserRecord: Constructor<Partial<User>> = proxyLazy(() => UserStore.getCurrentUser().constructor) as any;

function getName(name: string | (() => string)): string {
    return typeof name === "function" ? name() : name;
}

interface PluginModalProps extends ModalProps {
    plugin: Plugin;
    onRestartNeeded(key: string): void;
}

export function makeDummyUser(user: { username: string; id?: string; avatar?: string; }) {
    const newUser = new UserRecord({
        username: user.username,
        id: user.id ?? generateId(),
        avatar: user.avatar,
        /** To stop discord making unwanted requests... */
        bot: false,
    });
    FluxDispatcher.dispatch({
        type: "USER_UPDATE",
        user: newUser,
    });
    return newUser;
}

export default function PluginModal({ plugin, onRestartNeeded, onClose, transitionState }: PluginModalProps) {

    const pluginName = getName(plugin.name);
    const pluginSettings = useSettings([`plugins.${pluginName}.*`]).plugins[pluginName];
    useForceUpdateOnLocaleChange();

    const displayName = (plugin as any).displayName || pluginName;
    const rawDisplayDescription = (plugin as any).displayDescription;
    const displayDescription = rawDisplayDescription
        ? (typeof rawDisplayDescription === "function" ? rawDisplayDescription() : rawDisplayDescription)
        : (typeof plugin.description === "function" ? plugin.description() : plugin.description);

    const hasSettings = Boolean(pluginSettings && plugin.options && !isObjectEmpty(plugin.options));
    const [authors, setAuthors] = useState<Partial<User>[]>([]);

    useEffect(() => {
        (async () => {
            for (const user of plugin.authors.slice(0, 6)) {
                try {
                    const author = user.id
                        ? await UserUtils.getUser(`${user.id}`)
                            .catch(() => makeDummyUser({ username: user.name }))
                        : makeDummyUser({ username: user.name });

                    setAuthors(a => [...a, author]);
                } catch (error) {
                    continue;
                }
            }
        })();
    }, [plugin.authors]);


    function handleResetClick() {
        openWarningModal(plugin, { onClose, transitionState }, onRestartNeeded);
    }

    function renderSettings() {
        if (!hasSettings || !plugin.options)
            return <Paragraph>{t(plugins.pluginModal.noSettings)}</Paragraph>;

        const options = Object.entries(plugin.options).map(([key, setting]) => {
            if (setting.type === OptionType.CUSTOM || setting.hidden) return null;

            function onChange(newValue: any) {
                const option = plugin.options?.[key];
                if (!option || option.type === OptionType.CUSTOM) return;

                pluginSettings[key] = newValue;

                if (option.restartNeeded) onRestartNeeded(key);
            }

            const Component = OptionComponentMap[setting.type];
            return (
                <ErrorBoundary noop key={key}>
                    <Component
                        id={key}
                        option={setting}
                        onChange={debounce(onChange)}
                        pluginSettings={pluginSettings}
                        definedSettings={plugin.settings}
                    />
                </ErrorBoundary>
            );
        });

        return (
            <div className="pc-plugins-settings">
                {options}
            </div>
        );
    }

    function renderMoreUsers(_label: string) {
        const remainingAuthors = plugin.authors.slice(6);

        return (
            <Tooltip text={remainingAuthors.map(u => u.name).join(", ")}>
                {({ onMouseEnter, onMouseLeave }) => (
                    <div
                        className={AvatarStyles.moreUsers}
                        onMouseEnter={onMouseEnter}
                        onMouseLeave={onMouseLeave}
                    >
                        +{remainingAuthors.length}
                    </div>
                )}
            </Tooltip>
        );
    }

    const pluginMeta = PluginMeta[pluginName];

    return (
        <ModalRoot transitionState={transitionState} size={ModalSize.MEDIUM}>
            <ModalHeader separator={false} className={Margins.bottom8}>
                <BaseText size="xl" weight="bold" style={{ flexGrow: 1 }}>{displayName}</BaseText>
                <ModalCloseButton onClick={onClose} />
            </ModalHeader>
            <ModalContent className={Margins.bottom16}>
                <section>
                    <Flex className={cl("info")}>
                        <Paragraph className={cl("description")}>{displayDescription}</Paragraph>
                        {!pluginMeta.userPlugin && (
                            <div className="pc-settings-modal-links">
                                <WebsiteButton
                                    text={t(plugins.pluginModal.info)}
                                    href={`https://plexcord.club/plugins/${plugin.name}`}
                                />
                                <GithubButton
                                    text={t(plugins.pluginModal.source)}
                                    href={`https://github.com/${gitRemote}/tree/main/src/plugins/${pluginMeta.folderName}`}
                                />
                            </div>
                        )}
                    </Flex>
                    <BaseText size="lg" weight="semibold" className={classes(Margins.top8, Margins.bottom8)}>{t(plugins.pluginModal.authors)}</BaseText>
                    <div style={{ width: "fit-content" }}>
                        <ErrorBoundary noop>
                            <UserSummaryItem
                                users={authors}
                                guildId={undefined}
                                renderIcon={false}
                                max={6}
                                showDefaultAvatarsForNullUsers
                                renderMoreUsers={renderMoreUsers}
                                renderUser={(user: User) => (
                                    <Clickable
                                        className={AvatarStyles.clickableAvatar}
                                        onClick={() => openContributorModal(user)}
                                    >
                                        <img
                                            className={AvatarStyles.avatar}
                                            src={user.getAvatarURL(void 0, 80, true)}
                                            alt={user.username}
                                            title={user.username}
                                        />
                                    </Clickable>
                                )}
                            />
                        </ErrorBoundary>
                    </div>
                </section>
                {!!plugin.settingsAboutComponent && (
                    <div className={Margins.top16}>
                        <section>
                            <ErrorBoundary message={t(plugins.error.infoRender)}>
                                <plugin.settingsAboutComponent />
                            </ErrorBoundary>
                        </section>
                    </div>
                )}
                <section>
                    <BaseText size="lg" weight="semibold" className={classes(Margins.top16, Margins.bottom8)}>{t(plugins.pluginModal.settings)}</BaseText>
                    {renderSettings()}
                </section>
            </ModalContent>
            {
                hasSettings && <ModalFooter>
                    <Flex flexDirection="column" style={{ width: "100%" }}>
                        <Flex style={{ justifyContent: "space-between" }}>
                            <Tooltip text={t(plugins.restart.resetDefault)} shouldShow={!isObjectEmpty(pluginSettings)}>
                                {({ onMouseEnter, onMouseLeave }) => (
                                    <Button
                                        size="small"
                                        onClick={handleResetClick}
                                        onMouseEnter={onMouseEnter}
                                        onMouseLeave={onMouseLeave}
                                    >
                                        {t(plugins.restart.button.reset)}
                                    </Button>
                                )}
                            </Tooltip>
                        </Flex>
                    </Flex>
                </ModalFooter>
            }
        </ModalRoot >
    );
}

export function openPluginModal(plugin: Plugin, onRestartNeeded?: (pluginName: string, key: string) => void) {
    const pluginName = getName(plugin.name);
    openModal(modalProps => (
        <PluginModal
            {...modalProps}
            plugin={plugin}
            onRestartNeeded={(key: string) => onRestartNeeded?.(pluginName, key)}
        />
    ));
}

function resetSettings(plugin: Plugin, warningModalProps?: ModalProps, pluginModalProps?: ModalProps, onRestartNeeded?: (pluginName: string) => void) {
    const defaultSettings = plugin.settings?.def;
    const pluginName = getName(plugin.name);

    if (!defaultSettings) {
        console.error(`No default settings found for ${pluginName}`);
        return;
    }

    const newSettings: Record<string, any> = {};
    let restartNeeded = false;

    for (const key in defaultSettings) {
        if (key === "enabled") continue;

        const setting = defaultSettings[key];
        setting.type = setting.type ?? OptionType.STRING;

        if (setting.type === OptionType.STRING) {
            newSettings[key] = setting.default !== undefined && setting.default !== "" ? setting.default : "";
        } else if ("default" in setting && setting.default !== undefined) {
            newSettings[key] = setting.default;
        }

        if (setting?.restartNeeded) {
            restartNeeded = true;
        }
    }


    const currentSettings = plugin.settings?.store;
    if (currentSettings) {
        Object.assign(currentSettings, newSettings);
    }

    if (restartNeeded) {
        onRestartNeeded?.(pluginName);
    }

    Toasts.show({
        message: t(plugins.pluginModal.successfulReset, { plugin: pluginName }),
        id: Toasts.genId(),
        type: Toasts.Type.SUCCESS,
        options: {
            position: Toasts.Position.TOP
        }
    });

    warningModalProps?.onClose();
    pluginModalProps?.onClose();
}

export function openWarningModal(plugin?: Plugin | null, pluginModalProps?: ModalProps | null, onRestartNeeded?: (pluginName: string) => void, isPlugin = true, enabledPlugins?: number | null, reset?: any) {
    if (Settings.ignoreResetWarning && isPlugin) {
        if (plugin && pluginModalProps) return resetSettings(plugin, pluginModalProps, pluginModalProps, onRestartNeeded);
        return;
    } else if (Settings.ignoreResetWarning && !isPlugin) {
        return reset();
    }

    const text = isPlugin
        ? t(plugins.dangerModal.resetDescription, { pluginName: <strong>{plugin ? getName(plugin.name) : ""}</strong> })
        : t(plugins.dangerModal.disable, { enabledPlugins: <strong>{enabledPlugins}</strong> });

    openModal(warningModalProps => (
        <ModalRoot
            {...warningModalProps}
            size={ModalSize.SMALL}
            className="pc-text-selectable"
            transitionState={warningModalProps.transitionState}
        >
            <ModalHeader separator={false}>
                <BaseText className="text-danger pc-pm-modal-title">{t(plugins.dangerModal.title)}</BaseText>
                <ModalCloseButton onClick={warningModalProps.onClose} className="pc-modal-close-button" />
            </ModalHeader>
            <ModalContent>
                <section>
                    <Flex className="pc-warning-info">
                        <BaseText className="text-normal">
                            {text}
                        </BaseText>
                        <BaseText className="warning-text">
                            {t(plugins.dangerModal.irreversible)}
                        </BaseText>
                        <BaseText className="text-normal margin-bottom">
                            {t(plugins.dangerModal.resetText, {
                                confirmReset: <strong>{t(plugins.dangerModal.confirmReset)}</strong>,
                                cancel: <strong>{t(plugins.dangerModal.cancel)}</strong>,
                            })}
                        </BaseText>
                    </Flex>
                </section>
            </ModalContent>
            <ModalFooter className="pc-modal-footer">
                <Flex className="pc-button-container">
                    <Flex className="pc-button-group" style={{ gap: ".2em" }}>
                        {!Settings.ignoreResetWarning && (
                            <Button
                                size="small"
                                className={cl("disable-warning")}
                                onClick={() => {
                                    Settings.ignoreResetWarning = true;
                                }}
                            >
                                {t(plugins.restart.button.disableWarning)}
                            </Button>
                        )}
                        <Button
                            size="small"
                            onClick={() => {
                                if (isPlugin) {
                                    if (plugin && pluginModalProps)
                                        resetSettings(plugin, pluginModalProps, pluginModalProps, onRestartNeeded);
                                } else {
                                    reset();
                                }
                            }}
                            className={cl("confirm-reset")}
                        >
                            {t(plugins.dangerModal.confirmReset)}
                        </Button>
                        <Button
                            size="small"
                            onClick={warningModalProps.onClose}
                            variant="none"
                        >
                            {t(plugins.restart.button.disableWarning)}
                        </Button>
                    </Flex>
                </Flex>
            </ModalFooter>
        </ModalRoot>
    ));
}
