/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2024 Vendicated and contributors
 * Copyright (c) 2026 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { generateId } from "@api/Commands";
import { plugin, t } from "@api/i18n";
import { Settings } from "@api/Settings";
import { Button } from "@components/Button";
import { Card } from "@components/Card";
import { HeadingPrimary } from "@components/Heading";
import { Paragraph } from "@components/Paragraph";
import { User } from "@plexcord/discord-types";
import type { Theme, ThemeLikeProps } from "@plugins/themeLibrary/types";
import { proxyLazy } from "@utils/lazy";
import { Margins } from "@utils/margins";
import { FluxDispatcher, Modal, openModal, Parser, React, UserStore, UserUtils } from "@webpack/common";
import { Constructor } from "type-fest";

import { LikesComponent } from "./LikesComponent";
import { ThemeInfoModal } from "./ThemeInfoModal";
import { apiUrl } from "./ThemeTab";

interface ThemeCardProps {
    theme: Theme;
    themeLinks: string[];
    likedThemes?: ThemeLikeProps;
    setThemeLinks: (links: string[]) => void;
    removePreview?: boolean;
    removeButtons?: boolean;
}

const UserRecord: Constructor<Partial<User>> = proxyLazy(() => UserStore.getCurrentUser().constructor) as any;

function makeDummyUser(user: { username: string; id?: string; avatar?: string; }) {
    const newUser = new UserRecord({
        username: user.username,
        id: user.id ?? generateId(),
        avatar: user.avatar,
        bot: true,
    });
    FluxDispatcher.dispatch({
        type: "USER_UPDATE",
        user: newUser,
    });
    return newUser;
}

export const ThemeCard: React.FC<ThemeCardProps> = ({ theme, themeLinks, likedThemes, setThemeLinks, removeButtons, removePreview }) => {

    const getUser = (id: string, username: string) => UserUtils.getUser(id) ?? makeDummyUser({ username, id });

    const handleAddRemoveTheme = () => {
        const onlineThemeLinks = themeLinks.includes(`${apiUrl}/${theme.id}`)
            ? themeLinks.filter(link => link !== `${apiUrl}/${theme.id}`)
            : [...themeLinks, `${apiUrl}/${theme.id}`];

        setThemeLinks(onlineThemeLinks);
        Settings.themeLinks = onlineThemeLinks;
    };

    const handleThemeAttributesCheck = () => {
        const requiresThemeAttributes = theme.requiresThemeAttributes ?? false;

        if (requiresThemeAttributes && !Settings.plugins.ThemeAttributes.enabled) {
            openModal(modalProps => (
                <Modal
                    {...modalProps}
                    size="sm"
                    title={t(plugin.themeLibrary.text.holdOn)}
                    actions={[
                        {
                            text: t(plugin.themeLibrary.text.enablePlugin),
                            variant: "primary",
                            onClick: () => {
                                Settings.plugins.ThemeAttributes.enabled = true;
                                modalProps.onClose();
                                handleAddRemoveTheme();
                            }
                        },
                        {
                            text: t(plugin.themeLibrary.text.cancel),
                            variant: "secondary",
                            onClick: () => modalProps.onClose()
                        }
                    ]}
                >
                    <Paragraph style={{ padding: "8px" }}>
                        <p>{t(plugin.themeLibrary.text.thisThemeRequiresThe)} <b>ThemeAttributes</b> {t(plugin.themeLibrary.text.pluginToWorkProperly)}</p>
                        <p>{t(plugin.themeLibrary.text.doYouWantTo)}</p>
                    </Paragraph>
                </Modal>
            ));
        } else {
            handleAddRemoveTheme();
        }
    };

    const handleViewSource = () => {
        const content = window.atob(theme.content);
        const metadata = content.match(/\/\*\*([^*]|[\r\n]|(\*+([^*/]|[\r\n])))*\*+\//g)?.[0] || "";
        const source = metadata.match(/@source\s+(.+)/)?.[1] || "";

        if (source) {
            PlexcordNative.native.openExternal(source);
        } else {
            PlexcordNative.native.openExternal(`${apiUrl}/${theme.id}`);
        }
    };

    return (
        <Card style={{ padding: ".5rem", marginBottom: ".5em", marginTop: ".5em", display: "flex", flexDirection: "column", backgroundColor: "var(--background-base-lower-alt)" }} key={theme.id}>
            <HeadingPrimary style={{ overflowWrap: "break-word", marginTop: "8px" }} className="pce-theme-text-title">
                {theme.name}
            </HeadingPrimary>
            <Paragraph className="pce-theme-text-description">
                {Parser.parse(theme.description)}
            </Paragraph>
            {!removePreview && (
                <img role="presentation" src={theme.thumbnail_url} loading="lazy" alt={theme.name} className="pce-theme-info-preview" />
            )}
            <div className="pce-theme-info">
                <div style={{ justifyContent: "flex-start", flexDirection: "column" }}>
                    {theme.tags && (
                        <Paragraph>
                            {theme.tags.map(tag => (
                                <span className="pce-theme-info-tag" key={tag}>
                                    {tag}
                                </span>
                            ))}
                        </Paragraph>
                    )}
                    {!removeButtons && (
                        <div style={{ marginTop: "8px", display: "flex", flexDirection: "row" }}>
                            <Button
                                onClick={handleThemeAttributesCheck}
                                size="medium"
                                variant={themeLinks.includes(`${apiUrl}/${theme.id}`) ? "dangerPrimary" : "positive"}
                                className={Margins.right8}
                                disabled={!theme.content || theme.id === "preview"}
                            >
                                {themeLinks.includes(`${apiUrl}/${theme.id}`) ? t(plugin.themeLibrary.text.removeTheme) : t(plugin.themeLibrary.text.addTheme)}
                            </Button>
                            <Button
                                onClick={async () => {
                                    const authors = Array.isArray(theme.author)
                                        ? await Promise.all(theme.author.map(author => getUser(author.discord_snowflake, author.discord_name)))
                                        : [await getUser(theme.author.discord_snowflake, theme.author.discord_name)];

                                    openModal(props => <ThemeInfoModal {...props} author={authors} theme={theme} />);
                                }}
                                size="medium"
                                className={Margins.right8}
                            >
                                {t(plugin.themeLibrary.text.themeInfo)}
                            </Button>
                            <LikesComponent themeId={theme.id} likedThemes={likedThemes} />
                            <Button
                                onClick={handleViewSource}
                                size="medium"
                                variant="link"
                                disabled={!theme.content || theme.id === "preview"}
                                style={{ display: "flex", alignItems: "center", justifyContent: "center" }}
                            >
                                {t(plugin.themeLibrary.text.viewSource)}
                            </Button>
                        </div>
                    )}
                </div>
            </div>
        </Card >
    );
};
