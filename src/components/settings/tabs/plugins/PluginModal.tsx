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
import { t, tJsx, useForceUpdateOnLocaleChange } from "@api/i18n";
import { Settings, useSettings } from "@api/Settings";
import { classNameFactory } from "@api/Styles";
import ErrorBoundary from "@components/ErrorBoundary";
import { Flex } from "@components/Flex";
import { User } from "@plexcord/discord-types";
import { debounce } from "@shared/debounce";
import { gitRemote } from "@shared/plexcordUserAgent";
import { proxyLazy } from "@utils/lazy";
import { Margins } from "@utils/margins";
import { classes, isObjectEmpty } from "@utils/misc";
import { ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalProps, ModalRoot, ModalSize, openModal } from "@utils/modal";
import { OptionType, Plugin } from "@utils/types";
import { findByPropsLazy } from "@webpack";
import { Button, Clickable, FluxDispatcher, Forms, React, Text, Toasts, Tooltip, useEffect, UserStore, UserSummaryItem, UserUtils, useState } from "@webpack/common";
import { Constructor } from "type-fest";

import { PluginMeta } from "~plugins";

import { OptionComponentMap } from "./components";
import { openContributorModal } from "./ContributorModal";
import { GithubButton, WebsiteButton } from "./LinkIconButton";

const cl = classNameFactory("pc-plugin-modal-");

const AvatarStyles = findByPropsLazy("moreUsers", "emptyUser", "avatarContainer", "clickableAvatar");
const UserRecord: Constructor<Partial<User>> = proxyLazy(() => UserStore.getCurrentUser().constructor) as any;

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

    const pluginSettings = useSettings().plugins[plugin.name];
    useForceUpdateOnLocaleChange();

    const displayName = (plugin as any).displayName || plugin.name;
    const displayDescription = (plugin as any).displayDescription || plugin.description;

    const hasSettings = Boolean(pluginSettings && plugin.options && !isObjectEmpty(plugin.options));
    const [authors, setAuthors] = useState<Partial<User>[]>([]);

    useEffect(() => {
        (async () => {
            for (const user of plugin.authors.slice(0, 6)) {
                const author = user.id
                    ? await UserUtils.getUser(`${user.id}`)
                        .catch(() => makeDummyUser({ username: user.name }))
                    : makeDummyUser({ username: user.name });

                setAuthors(a => [...a, author]);
            }
        })();
    }, [plugin.authors]);


    function handleResetClick() {
        openWarningModal(plugin, { onClose, transitionState }, onRestartNeeded);
    }

    function renderSettings() {
        if (!hasSettings || !plugin.options)
            return <Forms.FormText>{t("plugins.pluginModal.noSettings")}</Forms.FormText>;

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
                <Component
                    id={key}
                    key={key}
                    option={setting}
                    onChange={debounce(onChange)}
                    pluginSettings={pluginSettings}
                    definedSettings={plugin.settings}
                />
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

    const pluginMeta = PluginMeta[plugin.name];

    return (
        <ModalRoot transitionState={transitionState} size={ModalSize.MEDIUM}>
            <ModalHeader separator={false} className={Margins.bottom8}>
                <Text variant="heading-xl/bold" style={{ flexGrow: 1 }}>{displayName}</Text>
                <ModalCloseButton onClick={onClose} />
            </ModalHeader>
            <ModalContent className={Margins.bottom16}>
                <Forms.FormSection>
                    <Flex className={cl("info")}>
                        <Forms.FormText className={cl("description")}>{displayDescription}</Forms.FormText>
                        {!pluginMeta.userPlugin && (
                            <div className="pc-settings-modal-links">
                                <WebsiteButton
                                    text="View more info"
                                    href={`https://plexcord.club/plugins/${plugin.name}`}
                                />
                                <GithubButton
                                    text="View source code"
                                    href={`https://github.com/${gitRemote}/tree/main/src/plugins/${pluginMeta.folderName}`}
                                />
                            </div>
                        )}
                    </Flex>
                    <Text variant="heading-lg/semibold" className={classes(Margins.top8, Margins.bottom8)}>{t("plugins.pluginModal.authors")}</Text>
                    <div style={{ width: "fit-content" }}>
                        <UserSummaryItem
                            users={authors}
                            guildId={undefined}
                            renderIcon={false}
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
                    </div>
                </Forms.FormSection>
                {!!plugin.settingsAboutComponent && (
                    <div className={Margins.top16}>
                        <Forms.FormSection>
                            <ErrorBoundary message={t("plugins.error.infoRender")}>
                                <plugin.settingsAboutComponent />
                            </ErrorBoundary>
                        </Forms.FormSection>
                    </div>
                )}
                <Forms.FormSection>
                    <Text variant="heading-lg/semibold" className={classes(Margins.top16, Margins.bottom8)}>{t("plugins.pluginModal.settings")}</Text>
                    {renderSettings()}
                </Forms.FormSection>
            </ModalContent>;
            {
                hasSettings && <ModalFooter>
                    <Flex flexDirection="column" style={{ width: "100%" }}>
                        <Flex style={{ justifyContent: "space-between" }}>
                            <Tooltip text="Reset to default settings" shouldShow={!isObjectEmpty(pluginSettings)}>
                                {({ onMouseEnter, onMouseLeave }) => (
                                    <Button
                                        size={Button.Sizes.SMALL}
                                        color={Button.Colors.BRAND}
                                        onClick={handleResetClick}
                                        onMouseEnter={onMouseEnter}
                                        onMouseLeave={onMouseLeave}
                                    >
                                        {t("plugins.restart.button.reset")}
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
    openModal(modalProps => (
        <PluginModal
            {...modalProps}
            plugin={plugin}
            onRestartNeeded={(key: string) => onRestartNeeded?.(plugin.name, key)}
        />
    ));
}

function resetSettings(plugin: Plugin, warningModalProps?: ModalProps, pluginModalProps?: ModalProps, onRestartNeeded?: (pluginName: string) => void) {
    const defaultSettings = plugin.settings?.def;
    const pluginName = plugin.name;

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
        onRestartNeeded?.(plugin.name);
    }

    Toasts.show({
        message: t("plugins.pluginModal.successfulReset", { plugin: pluginName }),
        id: Toasts.genId(),
        type: Toasts.Type.SUCCESS,
        options: {
            position: Toasts.Position.TOP
        }
    });

    warningModalProps?.onClose();
    pluginModalProps?.onClose();
}

export function openWarningModal(plugin: Plugin, pluginModalProps: ModalProps, onRestartNeeded?: (pluginName: string) => void) {
    if (Settings.ignoreResetWarning) return resetSettings(plugin, pluginModalProps, pluginModalProps, onRestartNeeded);

    openModal(warningModalProps => (
        <ModalRoot
            {...warningModalProps}
            size={ModalSize.SMALL}
            className="pc-text-selectable"
            transitionState={warningModalProps.transitionState}
        >
            <ModalHeader separator={false}>
                <Text className="text-danger">{t("plugins.dangerModal.title")}</Text>
                <ModalCloseButton onClick={warningModalProps.onClose} className="pc-modal-close-button" />
            </ModalHeader>
            <ModalContent>
                <Forms.FormSection>
                    <Flex className="pc-warning-info">
                        <img
                            src="https://media.tenor.com/hapjxf8y50YAAAAi/stop-sign.gif"
                            alt="Warning"
                        />
                        <Text className="text-normal">
                            {tJsx("plugins.dangerModal.resetDescription", { pluginName: <strong>{plugin.name}</strong> })}
                        </Text>
                        <Text className="warning-text">
                            {t("plugins.dangerModal.irreversible")}
                        </Text>
                        <Text className="text-normal margin-bottom">
                            {tJsx("plugins.dangerModal.resetText", {
                                confirmReset: <strong>{t("plugins.dangerModal.confirmReset")}</strong>,
                                cancel: <strong>{t("plugins.dangerModal.cancel")}</strong>,
                            })}
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
                        {t("plugins.restart.button.disableWarning")}
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
                                {t("plugins.restart.button.disableWarning")}
                            </Button>
                        )}
                        <Tooltip text={t("plugins.dangerModal.undone")} shouldShow={true}>
                            {({ onMouseEnter, onMouseLeave }) => (
                                <Button
                                    size={Button.Sizes.SMALL}
                                    onClick={() => {
                                        resetSettings(plugin, pluginModalProps, pluginModalProps, onRestartNeeded);
                                    }}
                                    onMouseEnter={onMouseEnter}
                                    onMouseLeave={onMouseLeave}
                                    className="button-danger-background-no-margin"
                                >
                                    {t("plugins.dangerModal.confirmReset")}
                                </Button>
                            )}
                        </Tooltip>
                    </Flex>
                </Flex>
            </ModalFooter>
        </ModalRoot>
    ));
}
