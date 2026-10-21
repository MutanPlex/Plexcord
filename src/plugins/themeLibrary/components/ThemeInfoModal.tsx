/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2024 Vendicated and contributors
 * Copyright (c) 2026 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { plugin, t } from "@api/i18n";
import { CodeBlock } from "@components/CodeBlock";
import { Heading } from "@components/Heading";
import { Heart } from "@components/Heart";
import { Paragraph } from "@components/Paragraph";
import { Theme, ThemeInfoModalProps } from "@plugins/themeLibrary/types";
import { ClockIcon, WarningIcon } from "@plugins/themeLibrary/utils/Icons";
import { copyToClipboard } from "@utils/clipboard";
import { openInviteModal } from "@utils/discord";
import { Margins } from "@utils/margins";
import type { PluginNative } from "@utils/types";
import { findComponentByCodeLazy } from "@webpack";
import { Button, Modal, openModal, Parser, React, showToast } from "@webpack/common";

import { logger } from "./ThemeTab";

const Native = PlexcordNative.pluginHelpers.ThemeLibrary as PluginNative<typeof import("../native")>;
const UserSummaryItem = findComponentByCodeLazy("defaultRenderUser", "showDefaultAvatarsForNullUsers");

async function downloadTheme(theme: Theme) {
    try {
        await Native.downloadTheme(theme);
        showToast({ text: t(plugin.themeLibrary.toast.downloadedName, { name: theme.name }), variant: "success" });
    } catch (err: unknown) {
        logger.error(err);
        showToast({ text: t(plugin.themeLibrary.toast.failedToDownloadName, { name: theme.name }), variant: "critical" });
    }
}

export const ThemeInfoModal: React.FC<ThemeInfoModalProps> = ({ author, theme, ...props }) => {
    const { name, type, content, likes, guild, tags, last_updated, requiresThemeAttributes } = theme;

    const themeContent = window.atob(content);
    const metadata = themeContent.match(/\/\*\*([^*]|[\r\n]|(\*+([^*/]|[\r\n])))*\*+\//g)?.[0] || "";
    const donate = metadata.match(/@donate\s+(.+)/)?.[1] || "";
    const version = metadata.match(/@version\s+(.+)/)?.[1] || "";
    const invite = metadata.match(/@invite\s+(.+)/)?.[1] || "";

    const authors = Array.isArray(author) ? author : [author];

    const lastUpdated = Math.floor(new Date(last_updated ?? 0).getTime() / 1000);

    return (
        <Modal
            {...props}
            size="md"
            title={t(plugin.themeLibrary.text.themeDetails, { name })}
            actions={[
                {
                    text: t(plugin.themeLibrary.text.close),
                    variant: "secondary",
                    onClick: () => props.onClose()
                },
                {
                    text: t(plugin.themeLibrary.text.download),
                    variant: "primary",
                    disabled: !theme.content || theme.id === "preview",
                    onClick: async () => {
                        const fileName = `${theme?.name}.theme.css`;

                        const exists = await Native.themeExists(theme);
                        if (exists) {
                            openModal(modalProps => (
                                <Modal
                                    {...modalProps}
                                    size="sm"
                                    title={t(plugin.themeLibrary.text.conflict)}
                                    actions={[
                                        {
                                            text: t(plugin.themeLibrary.text.overwrite),
                                            variant: "dangerPrimary",
                                            onClick: async () => {
                                                await downloadTheme(theme);
                                                modalProps.onClose();
                                            }
                                        },
                                        {
                                            text: t(plugin.themeLibrary.text.keepMyFile),
                                            variant: "positive",
                                            onClick: () => modalProps.onClose()
                                        }
                                    ]}
                                >
                                    <Paragraph style={{ padding: "8px" }}>
                                        <div style={{ display: "flex", flexDirection: "column" }}>
                                            <p>{t(plugin.themeLibrary.text.aThemeWithThe)} <b>{t(plugin.themeLibrary.text.alreadyExists)}</b> {t(plugin.themeLibrary.text.inYourThemesDirectory)}</p>
                                            <div className="vce-overwrite-modal">
                                                <code style={{ wordWrap: "break-word" }}>
                                                    {fileName}
                                                </code>
                                            </div>
                                        </div>
                                    </Paragraph>
                                </Modal>
                            ));
                        } else {
                            await downloadTheme(theme);
                        }
                    }
                }
            ]}
        >
            <Heading style={{ marginTop: "10px" }}>{authors.length > 1 ? t(plugin.themeLibrary.text.authors) : t(plugin.themeLibrary.text.author)}</Heading>
            <div style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
                <div>
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <UserSummaryItem
                            users={authors}
                            count={authors.length}
                            guildId={undefined}
                            renderIcon={false}
                            max={4}
                            size={32}
                            showDefaultAvatarsForNullUsers
                            showUserPopout
                            className={Margins.right8}
                        />
                        <Paragraph style={{ maxWidth: "200px", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                            {authors.map(author => author.username).join(", ")}
                        </Paragraph>
                    </div>
                    {version && (
                        <>
                            <Heading style={{ marginTop: "10px" }}>{t(plugin.themeLibrary.text.version)}</Heading>
                            <Paragraph>
                                {version}
                            </Paragraph>
                        </>
                    )}
                    <Heading style={{ marginTop: "10px" }}>{t(plugin.themeLibrary.text.likes)}</Heading>
                    <Paragraph>
                        {likes === 0
                            ? (type.toLowerCase() === "snippet" ? t(plugin.themeLibrary.text.nobodyLikedSnippet) : t(plugin.themeLibrary.text.nobodyLikedTheme))
                            : (type.toLowerCase() === "snippet" ? t(plugin.themeLibrary.text.usersLikedSnippet, { likes }) : t(plugin.themeLibrary.text.usersLikedTheme, { likes }))}
                    </Paragraph>
                    {donate && (
                        <>
                            <Heading style={{ marginTop: "10px" }}>{t(plugin.themeLibrary.text.donate)}</Heading>
                            <Paragraph>
                                {t(plugin.themeLibrary.text.youCanSupportThe)}
                            </Paragraph>
                            <Paragraph style={{ marginTop: "10px" }}>
                                <Button onClick={() => PlexcordNative.native.openExternal(donate)}>
                                    <Heart />
                                    {t(plugin.themeLibrary.text.donate)}
                                </Button>
                            </Paragraph>
                        </>
                    )}
                    {(guild || invite) && (
                        <>
                            <Heading style={{ marginTop: "10px" }}>{t(plugin.themeLibrary.text.supportServer)}</Heading>
                            {guild && (
                                <Paragraph>
                                    {guild.name}
                                </Paragraph>
                            )}
                            <Paragraph>
                                <Button
                                    color={Button.Colors.BRAND}
                                    look={Button.Looks.FILLED}
                                    className={Margins.top8}
                                    onClick={async e => {
                                        e.preventDefault();
                                        const useInvite = guild ? guild.invite_link?.split("discord.gg/")[1] : invite;
                                        useInvite != null && openInviteModal(useInvite).catch(() => showToast({ text: t(plugin.themeLibrary.toast.invalidOrExpiredInvite), variant: "critical" }));
                                    }}
                                >
                                    {t(plugin.themeLibrary.text.joinDiscordServer)}
                                </Button>
                            </Paragraph>
                        </>
                    )}
                    <Heading style={{ marginTop: "10px" }}>{t(plugin.themeLibrary.text.source)}</Heading>
                    <Paragraph>
                        <Button
                            disabled={!theme.content || theme.id === "preview"}
                            onClick={() => openModal(modalProps => (
                                <Modal
                                    {...modalProps}
                                    size="lg"
                                    title={t(plugin.themeLibrary.text.themeSource)}
                                    actions={[
                                        {
                                            text: t(plugin.themeLibrary.text.close),
                                            variant: "dangerPrimary",
                                            onClick: () => modalProps.onClose()
                                        },
                                        {
                                            text: t(plugin.themeLibrary.text.copyToClipboard),
                                            variant: "primary",
                                            onClick: () => {
                                                copyToClipboard(themeContent);
                                                showToast({ text: t(plugin.themeLibrary.toast.copiedToClipboard), variant: "success" });
                                            }
                                        }
                                    ]}
                                >
                                    <Paragraph style={{ padding: "8px" }}>
                                        <CodeBlock lang="css" content={themeContent} />
                                    </Paragraph>
                                </Modal>
                            ))}
                        >
                            {t(plugin.themeLibrary.text.viewThemeSource)}
                        </Button>
                    </Paragraph>
                    {tags && (
                        <>
                            <Heading style={{ marginTop: "10px" }}>{t(plugin.themeLibrary.text.tags)}</Heading>
                            <Paragraph>
                                {tags.map(tag => (
                                    <span className="vce-theme-info-tag" key={"vce-theme-info-tag"}>
                                        {tag}
                                    </span>
                                ))}
                            </Paragraph>
                        </>
                    )}
                    {requiresThemeAttributes && (
                        <Paragraph style={{ marginTop: "10px" }}>
                            <WarningIcon /> {t(plugin.themeLibrary.text.thisThemeRequiresThe)} <b>ThemeAttributes</b> {t(plugin.themeLibrary.text.pluginSuffix)}
                        </Paragraph>
                    )}
                    {last_updated && (
                        <Paragraph style={{ marginTop: "10px" }}>
                            <ClockIcon /> {t(plugin.themeLibrary.text.lastUpdated)} {Parser.parse("<t:" + lastUpdated + ":F>")} ({Parser.parse("<t:" + lastUpdated + ":R>")})
                        </Paragraph>
                    )}
                </div>
            </div>
        </Modal>
    );
};
