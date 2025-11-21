/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2025 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { t } from "@api/i18n";
import { isPluginEnabled } from "@api/PluginManager";
import { Settings, useSettings } from "@api/Settings";
import { classNameFactory } from "@api/Styles";
import { Card } from "@components/Card";
import { Flex } from "@components/Flex";
import { Heading } from "@components/Heading";
import { FolderIcon, PaintbrushIcon, PencilIcon, PlusIcon, RestartIcon } from "@components/Icons";
import { Link } from "@components/Link";
import { Paragraph } from "@components/Paragraph";
import { QuickAction, QuickActionCard } from "@components/settings/QuickAction";
import { openPluginModal } from "@components/settings/tabs/plugins/PluginModal";
import { UserThemeHeader } from "@main/themes";
import ClientThemePlugin from "@plugins/clientTheme";
import { findLazy } from "@webpack";
import { useEffect, useRef, useState } from "@webpack/common";
import type { ComponentType, Ref, SyntheticEvent } from "react";

import { ThemeCard } from "./ThemeCard";

const cl = classNameFactory("pc-settings-theme-");

type FileInput = ComponentType<{
    ref: Ref<HTMLInputElement>;
    onChange: (e: SyntheticEvent<HTMLInputElement>) => void;
    multiple?: boolean;
    filters?: { name?: string; extensions: string[]; }[];
}>;

const FileInput: FileInput = findLazy(m => m.prototype?.activateUploadDialogue && m.prototype.setRef);

// When a local theme is enabled/disabled, update the settings
function onLocalThemeChange(fileName: string, value: boolean) {
    if (value) {
        if (Settings.enabledThemes.includes(fileName)) return;
        Settings.enabledThemes = [...Settings.enabledThemes, fileName];
    } else {
        Settings.enabledThemes = Settings.enabledThemes.filter(f => f !== fileName);
    }
}

async function onFileUpload(e: SyntheticEvent<HTMLInputElement>) {
    e.stopPropagation();
    e.preventDefault();

    if (!e.currentTarget?.files?.length) return;
    const { files } = e.currentTarget;

    const uploads = Array.from(files, file => {
        const { name } = file;
        if (!name.endsWith(".css")) return;

        return new Promise<void>((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = () => {
                PlexcordNative.themes.uploadTheme(name, reader.result as string)
                    .then(resolve)
                    .catch(reject);
            };
            reader.readAsText(file);
        });
    });

    await Promise.all(uploads);
}

export function LocalThemesTab() {
    const settings = useSettings(["enabledThemes"]);

    const fileInputRef = useRef<HTMLInputElement>(null);

    const [userThemes, setUserThemes] = useState<UserThemeHeader[] | null>(null);

    useEffect(() => {
        refreshLocalThemes();
    }, []);

    async function refreshLocalThemes() {
        const themes = await PlexcordNative.themes.getThemesList();
        setUserThemes(themes);
    }

    return (
        <Flex flexDirection="column" gap="1em">
            <Card>
                <Heading>{t("themes.find")}:</Heading>
                <div style={{ marginBottom: ".5em", display: "flex", flexDirection: "column" }}>
                    <Link style={{ marginRight: ".5em" }} href="https://betterdiscord.app/themes">
                        {t("themes.bd")}
                    </Link>
                    <Link href="https://github.com/search?q=discord+theme">{t("github")}</Link>
                </div>
                <Paragraph>{t("themes.download")}</Paragraph>
            </Card>

            <Card>
                <Heading>{t("themes.external.title")}</Heading>
                <Paragraph>{t("themes.external.security")}</Paragraph>
                <Paragraph>{t("themes.external.host")}</Paragraph>
            </Card>

            <section>
                <Heading>{t("themes.local")}</Heading>
                <QuickActionCard>
                    <>
                        {IS_WEB ?
                            (
                                <QuickAction
                                    text={
                                        <span style={{ position: "relative" }}>
                                            {t("themes.upload")}
                                            <FileInput
                                                ref={fileInputRef}
                                                onChange={async e => {
                                                    await onFileUpload(e);
                                                    refreshLocalThemes();
                                                }}
                                                multiple={true}
                                                filters={[{ extensions: ["css"] }]}
                                            />
                                        </span>
                                    }
                                    Icon={PlusIcon}
                                />
                            ) : (
                                <QuickAction
                                    text={t("themes.openFolder")}
                                    action={() => PlexcordNative.themes.openFolder()}
                                    Icon={FolderIcon}
                                />
                            )}
                        <QuickAction
                            text={t("themes.loadMissing")}
                            action={refreshLocalThemes}
                            Icon={RestartIcon}
                        />
                        <QuickAction
                            text={t("themes.editQuickCSS")}
                            action={() => PlexcordNative.quickCss.openEditor()}
                            Icon={PaintbrushIcon}
                        />

                        {isPluginEnabled(ClientThemePlugin.name) && (
                            <QuickAction
                                text={t("themes.editClient")}
                                action={() => openPluginModal(ClientThemePlugin)}
                                Icon={PencilIcon}
                            />
                        )}
                    </>
                </QuickActionCard>

                <div className={cl("grid")}>
                    {userThemes?.map(theme => (
                        <ThemeCard
                            key={theme.fileName}
                            enabled={settings.enabledThemes.includes(theme.fileName)}
                            onChange={enabled => onLocalThemeChange(theme.fileName, enabled)}
                            onDelete={async () => {
                                onLocalThemeChange(theme.fileName, false);
                                await PlexcordNative.themes.deleteTheme(theme.fileName);
                                refreshLocalThemes();
                            }}
                            theme={theme}
                        />
                    ))}
                </div>
            </section>
        </Flex>
    );
}
