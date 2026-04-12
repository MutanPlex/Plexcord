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

import "./themesStyles.css";

import { t, themes } from "@api/i18n";
import { isPluginEnabled } from "@api/PluginManager";
import { Settings, type ThemeActivationMode, useSettings } from "@api/Settings";
import { Button } from "@components/Button";
import { Divider } from "@components/Divider";
import { ErrorCard } from "@components/ErrorCard";
import { Flex } from "@components/Flex";
import { FormSwitch } from "@components/FormSwitch";
import { Heading } from "@components/Heading";
import { CogWheel, DeleteIcon, FolderIcon, PaintbrushIcon, PencilIcon, PluginIcon, PlusIcon, RestartIcon } from "@components/Icons";
import { Link } from "@components/Link";
import { Notice } from "@components/Notice";
import { Paragraph } from "@components/Paragraph";
import { AddonCard, openPluginModal, QuickAction, QuickActionCard, SettingsTab, wrapTab } from "@components/settings";
import { OnlineThemeCard } from "@components/settings/OnlineThemeCard";
import { CspBlockedUrls, useCspErrors } from "@utils/cspViolations";
import { classNameFactory } from "@utils/css";
import { copyWithToast, openInviteModal } from "@utils/discord";
import { Margins } from "@utils/margins";
import { classes } from "@utils/misc";
import { openModal } from "@utils/modal";
import { relaunch, showItemInFolder } from "@utils/native";
import { useAwaiter, useForceUpdater } from "@utils/react";
import type { ThemeHeader } from "@utils/themes";
import { getThemeInfo, stripBOM, type UserThemeHeader } from "@utils/themes/bd";
import { usercssParse } from "@utils/themes/usercss";
import { getStylusWebStoreUrl } from "@utils/web";
import { findComponentByCodeLazy, findLazy } from "@webpack";
import { Alerts, Menu, React, Select, showToast, TextInput, Toasts, Tooltip, useEffect, useMemo, useState } from "@webpack/common";
import { ContextMenuApi } from "@webpack/common/menu";
import type { ComponentType, Ref, SyntheticEvent } from "react";
import type { UserstyleHeader } from "usercss-meta";

import Plugins from "~plugins";

const PinIcon = findComponentByCodeLazy("1-.06-.63L6.16");
const HomeIcon = findComponentByCodeLazy("m2.4 8.4 8.38-6.46a2");
const RefreshIcon = findComponentByCodeLazy("M21 2a1 1 0 0 1 1 1v6");
const LinkIcon = findComponentByCodeLazy("M16.32 14.72a1 1 0 0 1 0-1.41l2.51-2.51");
const DiscordIcon = findComponentByCodeLazy("1.6 5.64-2.87");
const DownloadIcon = findComponentByCodeLazy("1.42l3.3 3.3V3a1");

function getThemeActivationModeOptions(): { value: ThemeActivationMode; label: string; }[] {
    return [
        { value: "always", label: t(themes.activation.always) },
        { value: "light", label: t(themes.activation.lightOnly) },
        { value: "dark", label: t(themes.activation.darkOnly) }
    ];
}

function getThemeActivationModeLabel(mode: ThemeActivationMode) {
    return getThemeActivationModeOptions().find(option => option.value === mode)?.label ?? t(themes.activation.always);
}

function inferThemeActivationMode(css: string) {
    let text = css.replace(/^\uFEFF/, "");

    while (true) {
        const trimmed = text.trimStart();
        if (trimmed !== text) text = trimmed;

        const comment = /^\/\*[\s\S]*?\*\/\s*/.exec(text);
        if (!comment) break;
        text = text.slice(comment[0].length);
    }

    const match = /^@(light|dark)\b/i.exec(text);
    return match?.[1].toLowerCase() as ThemeActivationMode | undefined;
}

function inferAndStoreThemeActivationMode(themeId: string, css: string) {
    const activationMode = Settings.themeActivationModes?.[themeId] ?? inferThemeActivationMode(css);
    if (!activationMode || themeId in (Settings.themeActivationModes ?? {})) return;

    Settings.themeActivationModes = {
        ...(Settings.themeActivationModes ?? {}),
        [themeId]: activationMode,
    };
}

function ThemeActivationMenu({ themeId, activationMode, onActivationModeChange, children }: {
    themeId: string;
    activationMode: ThemeActivationMode;
    onActivationModeChange?: (mode: ThemeActivationMode) => void;
    children?: React.ReactNode;
}) {
    const [selectedMode, setSelectedMode] = useState(activationMode);
    const themeActivationModeOptions = getThemeActivationModeOptions();

    return (
        <Menu.Menu navId={`theme-card-menu-${themeId}`} onClose={ContextMenuApi.closeContextMenu}>
            {onActivationModeChange && (
                <Menu.MenuItem id={`theme-activation-${themeId}`} label={t(themes.activation.title)}>
                    {themeActivationModeOptions.map(option => (
                        <Menu.MenuRadioItem
                            key={option.value}
                            id={`theme-activation-${themeId}-${option.value}`}
                            group={`theme-activation-${themeId}`}
                            label={option.label}
                            checked={selectedMode === option.value}
                            action={() => {
                                setSelectedMode(option.value);
                                onActivationModeChange(option.value);
                            }}
                        />
                    ))}
                </Menu.MenuItem>
            )}
            {children}
        </Menu.Menu>
    );
}

function LocalThemeIcon({ size }: { size?: string; }) {
    const sizeVal = size === "sm" ? 16 : 24;
    return (
        <svg viewBox="0 0 24 24" width={sizeVal} height={sizeVal} fill="currentColor">
            <path d="M20 6h-8l-2-2H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2z" />
        </svg>
    );
}

function OnlineThemeIcon({ size }: { size?: string; }) {
    const sizeVal = size === "sm" ? 16 : 24;
    return (
        <svg viewBox="0 0 24 24" width={sizeVal} height={sizeVal} fill="currentColor">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
        </svg>
    );
}

import { UserCSSSettingsModal } from "./UserCSSModal";

type FileInput = ComponentType<{
    ref: Ref<HTMLInputElement>;
    onChange: (e: SyntheticEvent<HTMLInputElement>) => void;
    multiple?: boolean;
    filters?: { name?: string; extensions: string[]; }[];
}>;
const FileInput: FileInput = findLazy(m => m.prototype?.activateUploadDialogue && m.prototype.setRef);

const cl = classNameFactory("pc-settings-theme-");

enum ThemeFilter {
    All = "all",
    Online = "online",
    Local = "local",
    Enabled = "enabled",
    Disabled = "disabled"
}

function Validator({ link, onValidate }: { link: string; onValidate: (valid: boolean) => void; }) {
    const [res, err, pending] = useAwaiter(() => fetch(link).then(res => {
        if (res.status > 300) throw `${res.status} ${res.statusText}`;
        const contentType = res.headers.get("Content-Type");
        if (!contentType?.startsWith("text/css") && !contentType?.startsWith("text/plain")) {
            onValidate(false);
            throw t(themes.notCSS);
        }

        onValidate(true);
        return t(themes.okay);
    }));

    const text = pending
        ? t(themes.checking)
        : err
            ? `${t(themes.error.text)} ${err instanceof Error ? err.message : String(err)}`
            : t(themes.valid);

    return <Paragraph style={{
        color: pending ? "var(--text-muted)" : err ? "var(--text-feedback-critical)" : "var(--status-positive)"
    }}>{text}</Paragraph>;
}

interface OtherThemeCardProps {
    theme: UserThemeHeader;
    enabled: boolean;
    onChange: (enabled: boolean) => void;
    onDelete: () => void;
    showDeleteButton?: boolean;
    onEditName?: (newName: string) => void;
    disabled?: boolean;
    onPin?: () => void;
    isPinned?: boolean;
    onRefresh?: () => void;
    onOpenFolder?: () => void;
    onCopyUrl?: () => void;
    onDownload?: () => void;
    themeLink?: string;
    isLocal?: boolean;
    activationMode?: ThemeActivationMode;
    onActivationModeChange?: (mode: ThemeActivationMode) => void;
}

interface UserCSSCardProps {
    theme: UserstyleHeader;
    enabled: boolean;
    onChange: (enabled: boolean) => void;
    onDelete: () => void;
    onSettingsReset: () => void;
    activationMode?: ThemeActivationMode;
    onActivationModeChange?: (mode: ThemeActivationMode) => void;
}

function UserCSSThemeCard({ theme, enabled, onChange, onDelete, onSettingsReset, activationMode = "always", onActivationModeChange }: UserCSSCardProps) {
    const missingPlugins = useMemo(() =>
        theme.requiredPlugins?.filter(p => !isPluginEnabled(p)), [theme]);

    const openThemeMenu = (e: React.MouseEvent) => {
        ContextMenuApi.openContextMenu(e, () => (
            <ThemeActivationMenu
                themeId={theme.id}
                activationMode={activationMode}
                onActivationModeChange={onActivationModeChange}
            >
                {theme.vars && (
                    <Menu.MenuItem
                        id="edit-theme-settings"
                        label={t(themes.actions.editSettings)}
                        action={() => openModal(modalProps =>
                            <UserCSSSettingsModal modalProps={modalProps} theme={theme} onSettingsReset={onSettingsReset} />)
                        }
                    />
                )}
                {IS_WEB && (
                    <>
                        <Menu.MenuSeparator />
                        <Menu.MenuItem
                            id="delete-theme"
                            label={t(themes.delete)}
                            color="danger"
                            icon={DeleteIcon}
                            action={onDelete}
                        />
                    </>
                )}
            </ThemeActivationMenu>
        ));
    };

    const canOpenThemeMenu = !!theme.vars || !!onActivationModeChange || IS_WEB;

    return (
        <AddonCard
            name={theme.name ?? t(themes.unknown.title)}
            description={theme.description}
            author={theme.author ?? t(themes.unknown.author)}
            enabled={enabled}
            setEnabled={onChange}
            disabled={missingPlugins && missingPlugins.length > 0}
            infoButton={
                <>
                    {missingPlugins && missingPlugins.length > 0 && (
                        <Tooltip text={t(themes.required) + missingPlugins.join(", ")}>
                            {({ onMouseLeave, onMouseEnter }) => (
                                <div
                                    style={{ color: "var(--status-danger" }}
                                    onMouseEnter={onMouseEnter}
                                    onMouseLeave={onMouseLeave}
                                >
                                    <PluginIcon />
                                </div>
                            )}
                        </Tooltip>
                    )}
                    {canOpenThemeMenu && (
                        <div style={{ cursor: "pointer" }} onClick={openThemeMenu}>
                            <CogWheel />
                        </div>
                    )}
                </>
            }
            footer={
                <Flex flexDirection="row" gap="0.4em" style={{ alignItems: "center" }}>
                    {!!theme.homepageURL && <Link href={theme.homepageURL}>{t(themes.homepage)}</Link>}
                    {!!(theme.homepageURL && theme.supportURL) && (
                        <span style={{ color: "var(--text-muted)" }}>•</span>
                    )}
                    {!!theme.supportURL && <Link href={theme.supportURL}>{t(themes.support)}</Link>}
                    {activationMode !== "always" && (
                        <>
                            {!!(theme.homepageURL || theme.supportURL) && <span style={{ color: "var(--text-muted)" }}>•</span>}
                            <span style={{ color: "var(--text-muted)" }}>{getThemeActivationModeLabel(activationMode)}</span>
                        </>
                    )}
                </Flex>
            }
        />
    );
}

function OtherThemeCard({ theme, enabled, onChange, onDelete, showDeleteButton, onEditName, disabled, onPin, isPinned, onRefresh, onOpenFolder, onCopyUrl, onDownload, themeLink, isLocal, activationMode = "always", onActivationModeChange }: OtherThemeCardProps) {
    const openThemeMenu = (e: React.MouseEvent) => {
        ContextMenuApi.openContextMenu(e, () => (
            <ThemeActivationMenu
                themeId={themeLink ?? theme.fileName}
                activationMode={activationMode}
                onActivationModeChange={onActivationModeChange}
            >
                {onPin && (
                    <Menu.MenuItem
                        id="pin-theme"
                        label={isPinned ? t(themes.actions.unpin) : t(themes.actions.pin)}
                        icon={PinIcon}
                        action={onPin}
                    />
                )}
                {theme.website && (
                    <Menu.MenuItem
                        id="open-website"
                        label={t(themes.website)}
                        icon={HomeIcon}
                        action={() => window.open(theme.website, "_blank")}
                    />
                )}
                {theme.invite && (
                    <Menu.MenuItem
                        id="join-discord"
                        label={t(themes.discord)}
                        icon={DiscordIcon}
                        action={() => {
                            openInviteModal(theme.invite!).catch(() =>
                                showToast(t(themes.error.expired))
                            );
                        }}
                    />
                )}
                {onCopyUrl && themeLink && (
                    <Menu.MenuItem
                        id="copy-url"
                        label={t(themes.copy.url)}
                        icon={LinkIcon}
                        action={onCopyUrl}
                    />
                )}
                {onDownload && (
                    <Menu.MenuItem
                        id="download-theme"
                        label={t(themes.downloadTheme)}
                        icon={DownloadIcon}
                        action={onDownload}
                    />
                )}
                {onOpenFolder && (
                    <Menu.MenuItem
                        id="open-folder"
                        label={t(themes.openFolder)}
                        icon={FolderIcon}
                        action={onOpenFolder}
                    />
                )}
                {onRefresh && (
                    <Menu.MenuItem
                        id="refresh-theme"
                        label={t(themes.refresh)}
                        icon={RefreshIcon}
                        action={onRefresh}
                    />
                )}
                {(IS_WEB || showDeleteButton) && onDelete && (
                    <>
                        <Menu.MenuSeparator />
                        <Menu.MenuItem
                            id="delete-theme"
                            label={t(themes.delete)}
                            color="danger"
                            icon={DeleteIcon}
                            action={() => onDelete()}
                        />
                    </>
                )}
            </ThemeActivationMenu>
        ));
    };

    return (
        <OnlineThemeCard
            customName={theme.customName}
            name={theme.name}
            description={theme.description}
            author={theme.author}
            enabled={enabled}
            setEnabled={onChange}
            disabled={disabled}
            infoButton={
                (IS_WEB || showDeleteButton || onPin) && (
                    <div
                        className={cl("menu-button")}
                        onClick={openThemeMenu}
                    >
                        <CogWheel />
                    </div>
                )
            }
            footer={
                <Flex flexDirection="row" gap="0.4em" alignItems="center">
                    <Tooltip text={isLocal ? t(themes.local) : t(themes.online.title)}>
                        {({ onMouseLeave, onMouseEnter }) => (
                            <div
                                onMouseEnter={onMouseEnter}
                                onMouseLeave={onMouseLeave}
                                style={{ color: "var(--text-muted)", display: "flex" }}
                            >
                                {isLocal ? <LocalThemeIcon size="sm" /> : <OnlineThemeIcon size="sm" />}
                            </div>
                        )}
                    </Tooltip>
                    {isPinned && (
                        <Tooltip text={t(themes.pinned)}>
                            {({ onMouseLeave, onMouseEnter }) => (
                                <div
                                    onMouseEnter={onMouseEnter}
                                    onMouseLeave={onMouseLeave}
                                    className={cl("footer-pin-icon")}
                                >
                                    <PinIcon size="xs" />
                                </div>
                            )}
                        </Tooltip>
                    )}
                    {!!theme.website && <Link href={theme.website}>{t(themes.website)}</Link>}
                    {!!(theme.website && theme.invite) && (
                        <span style={{ color: "var(--text-muted)" }}>•</span>
                    )}
                    {!!theme.invite && (
                        <Link
                            href={`https://discord.gg/${theme.invite}`}
                            onClick={async e => {
                                e.preventDefault();
                                theme.invite != null &&
                                    openInviteModal(theme.invite).catch(() =>
                                        showToast(t(themes.error.expired))
                                    );
                            }}
                        >
                            {t(themes.discord)}
                        </Link>
                    )}
                    {activationMode !== "always" && (
                        <>
                            {!!(theme.website || theme.invite) && <span style={{ color: "var(--text-muted)" }}>•</span>}
                            <span style={{ color: "var(--text-muted)" }}>{getThemeActivationModeLabel(activationMode)}</span>
                        </>
                    )}
                </Flex>
            }

            onEditName={onEditName}
        />
    );
}

interface UnifiedTheme {
    type: "local" | "online";
    themeType: "usercss" | "other";
    name: string;
    enabled: boolean;
    header: UserThemeHeader | UserstyleHeader;
    link?: string;
    activationMode: ThemeActivationMode;
}

function ThemesTab() {
    const settings = useSettings(["themeLinks", "enabledThemeLinks", "enabledThemes", "enableOnlineThemes", "pinnedThemes", "themeActivationModes.*"]);

    const fileInputRef = useState<HTMLInputElement | null>(null)[1];
    const [currentThemeLink, setCurrentThemeLink] = useState("");
    const [themeLinkValid, setThemeLinkValid] = useState(false);
    const [userThemes, setUserThemes] = useState<ThemeHeader[] | null>(null);
    const [onlineThemes, setOnlineThemes] = useState<(UserThemeHeader & { link: string; })[] | null>(null);
    const [themeNames, setThemeNames] = useState<Record<string, string>>(() => {
        return settings.themeNames ?? {};
    });
    const [themeDir] = useAwaiter(PlexcordNative.themes.getThemesDir);
    const [searchQuery, setSearchQuery] = useState("");
    const [filter, setFilter] = useState(ThemeFilter.All);

    useEffect(() => {
        void updateThemes();
    }, []);

    async function updateThemes() {
        await Promise.allSettled([refreshLocalThemes(), refreshOnlineThemes()]);
    }

    async function refreshLocalThemes() {
        const themes = await PlexcordNative.themes.getThemesList();
        const themeInfo: ThemeHeader[] = [];

        for (const { fileName, content } of themes) {
            if (!fileName.endsWith(".css")) continue;

            try {
                inferAndStoreThemeActivationMode(fileName, content);

                if ((!IS_WEB || "legcord" in window) && fileName.endsWith(".user.css")) {
                    const header = await usercssParse(content, fileName);

                    themeInfo.push({
                        type: "usercss",
                        header
                    });

                    Settings.userCssVars[header.id] ??= {};

                    for (const [name, varInfo] of Object.entries(header.vars ?? {})) {
                        let normalizedValue = "";

                        switch (varInfo.type) {
                            case "text":
                            case "color":
                            case "checkbox":
                                normalizedValue = varInfo.default;
                                break;
                            case "select":
                                normalizedValue = varInfo.options.find(v => v.name === varInfo.default)!.value;
                                break;
                            case "range":
                                normalizedValue = `${varInfo.default}${varInfo.units}`;
                                break;
                            case "number":
                                normalizedValue = String(varInfo.default);
                                break;
                        }

                        Settings.userCssVars[header.id][name] ??= normalizedValue;
                    }
                } else {
                    themeInfo.push({
                        type: "other",
                        header: getThemeInfo(stripBOM(content), fileName)
                    });
                }
            } catch {
                continue;
            }
        }

        setUserThemes(themeInfo);
    }

    function onLocalThemeChange(fileName: string, value: boolean) {
        if (value) {
            if (settings.enabledThemes.includes(fileName)) return;
            settings.enabledThemes = [...settings.enabledThemes, fileName];
        } else {
            settings.enabledThemes = settings.enabledThemes.filter(f => f !== fileName);
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
        refreshLocalThemes();
    }

    function addThemeLink(link: string) {
        if (!themeLinkValid) return;
        if (settings.themeLinks.includes(link)) return;

        settings.themeLinks = [...settings.themeLinks, link];
        setCurrentThemeLink("");
        refreshOnlineThemes();
    }

    async function refreshOnlineThemes() {
        const themes = await Promise.all(
            settings.themeLinks.map(async link => {
                try {
                    const res = await fetch(link);
                    if (!res.ok) throw new Error(`Failed to fetch ${link}`);
                    const css = await res.text();
                    inferAndStoreThemeActivationMode(link, css);

                    return { ...getThemeInfo(css, link), link };
                } catch {
                    return null;
                }
            })
        );
        setOnlineThemes(themes.filter(theme => theme !== null));
    }

    function onThemeLinkEnabledChange(link: string, enabled: boolean) {
        if (enabled) {
            if (settings.enabledThemeLinks.includes(link)) return;
            settings.enabledThemeLinks = [...settings.enabledThemeLinks, link];
        } else {
            settings.enabledThemeLinks = settings.enabledThemeLinks.filter(f => f !== link);
        }
    }

    function clearThemeState(themeId: string) {
        settings.pinnedThemes = settings.pinnedThemes.filter(f => f !== themeId);
        settings.enabledThemes = settings.enabledThemes.filter(f => f !== themeId);
        settings.enabledThemeLinks = settings.enabledThemeLinks.filter(f => f !== themeId);
        settings.themeNames = Object.fromEntries(Object.entries(settings.themeNames).filter(([key]) => key !== themeId));

        const themeActivationModes = { ...(settings.themeActivationModes ?? {}) };
        delete themeActivationModes[themeId];
        settings.themeActivationModes = themeActivationModes;
    }

    function deleteThemeLink(link: string) {
        settings.themeLinks = settings.themeLinks.filter(f => f !== link);
        clearThemeState(link);
        refreshOnlineThemes();
    }

    function setThemeActivationMode(themeId: string, mode: ThemeActivationMode) {
        const themeActivationModes = { ...(settings.themeActivationModes ?? {}) };

        if (mode === "always") {
            delete themeActivationModes[themeId];
        } else {
            themeActivationModes[themeId] = mode;
        }

        settings.themeActivationModes = themeActivationModes;
    }

    function togglePinTheme(themeId: string) {
        if (settings.pinnedThemes.includes(themeId)) {
            settings.pinnedThemes = settings.pinnedThemes.filter(f => f !== themeId);
        } else {
            settings.pinnedThemes = [...settings.pinnedThemes, themeId];
        }
    }

    async function refreshOnlineTheme(link: string) {
        try {
            const res = await fetch(link);
            if (!res.ok) throw new Error(`Failed to fetch ${link}`);
            const css = await res.text();
            inferAndStoreThemeActivationMode(link, css);

            const updatedTheme = { ...getThemeInfo(css, link), link };

            setOnlineThemes(prev =>
                prev?.map(t => t.link === link ? updatedTheme : t) ?? null
            );
            showToast(t(themes.notification.refresh.title), Toasts.Type.SUCCESS);
        } catch {
            showToast(t(themes.notification.refresh.error), Toasts.Type.FAILURE);
        }
    }

    async function downloadTheme(link: string, name: string) {
        try {
            const res = await fetch(link);
            if (!res.ok) throw new Error(`Failed to fetch ${link}`);
            const css = await res.text();
            const fileName = name.replace(/[^a-z0-9]/gi, "-") + ".css";

            if (IS_DISCORD_DESKTOP) {
                DiscordNative.fileManager.saveWithDialog(new TextEncoder().encode(css), fileName);
            } else {
                const blob = new Blob([css], { type: "text/css" });
                const url = URL.createObjectURL(blob);
                const a = document.createElement("a");
                a.href = url;
                a.download = fileName;
                a.click();
                URL.revokeObjectURL(url);
            }
        } catch {
            showToast(t(themes.notification.failed.download), Toasts.Type.FAILURE);
        }
    }

    const allThemes = useMemo((): UnifiedTheme[] => {
        const allThemes: UnifiedTheme[] = [];

        for (const theme of onlineThemes ?? []) {
            const customName = themeNames[theme.link] ?? null;
            allThemes.push({
                type: "online",
                themeType: "other",
                name: customName ?? theme.name ?? theme.fileName,
                enabled: settings.enabledThemeLinks.includes(theme.link),
                header: { ...theme, customName },
                link: theme.link,
                activationMode: settings.themeActivationModes?.[theme.link] ?? "always",
            });
        }

        for (const { type, header } of userThemes ?? []) {
            const name = type === "usercss"
                ? (header as UserstyleHeader).name ?? t(themes.unknown.title)
                : (header as UserThemeHeader).name ?? (header as UserThemeHeader).fileName;

            allThemes.push({
                type: "local",
                themeType: type,
                name,
                enabled: settings.enabledThemes.includes(header.fileName),
                header,
                activationMode: settings.themeActivationModes?.[header.fileName] ?? "always",
            });
        }

        return allThemes;
    }, [onlineThemes, userThemes, themeNames, settings.enabledThemeLinks, settings.enabledThemes, settings.themeActivationModes]);

    const filteredThemes = useMemo(() => {
        let themes = allThemes;

        if (searchQuery.trim()) {
            const query = searchQuery.toLowerCase();
            themes = themes.filter(t => t.name.toLowerCase().includes(query));
        }

        switch (filter) {
            case ThemeFilter.Online:
                themes = themes.filter(t => t.type === "online");
                break;
            case ThemeFilter.Local:
                themes = themes.filter(t => t.type === "local");
                break;
            case ThemeFilter.Enabled:
                themes = themes.filter(t => t.enabled);
                break;
            case ThemeFilter.Disabled:
                themes = themes.filter(t => !t.enabled);
                break;
        }

        const getThemeId = (t: UnifiedTheme) => t.type === "online" ? t.link! : (t.header as UserThemeHeader).fileName;
        themes.sort((a, b) => {
            const aId = getThemeId(a);
            const bId = getThemeId(b);
            const aPinIndex = settings.pinnedThemes.indexOf(aId);
            const bPinIndex = settings.pinnedThemes.indexOf(bId);
            const aIsPinned = aPinIndex !== -1;
            const bIsPinned = bPinIndex !== -1;

            if (aIsPinned && !bIsPinned) return -1;
            if (!aIsPinned && bIsPinned) return 1;
            if (aIsPinned && bIsPinned) return aPinIndex - bPinIndex;
            return 0;
        });

        return themes;
    }, [allThemes, searchQuery, filter, settings.pinnedThemes]);

    const localCount = allThemes.filter(t => t.type === "local").length;
    const onlineCount = allThemes.filter(t => t.type === "online").length;
    const enabledCount = allThemes.filter(t => t.enabled).length;

    return (
        <SettingsTab>
            <CspErrorCard />

            <Heading className={Margins.top16}>{t(themes.management)}</Heading>
            <Paragraph className={Margins.bottom16}>
                {t(themes.description)}
            </Paragraph>

            <Heading>{t(themes.quickActions.title)}</Heading>
            <Paragraph className={Margins.bottom16}>
                {t(themes.quickActions.description)}
            </Paragraph>

            <QuickActionCard>
                {IS_WEB ? (
                    <QuickAction
                        text={
                            <span style={{ position: "relative" }}>
                                {t(themes.upload)}
                                <FileInput
                                    ref={fileInputRef}
                                    onChange={onFileUpload}
                                    multiple={true}
                                    filters={[{ extensions: ["css"] }]}
                                />
                            </span>
                        }
                        Icon={PlusIcon}
                    />
                ) : (
                    <QuickAction
                        text={t(themes.openFolder)}
                        action={() => PlexcordNative.themes.openFolder()}
                        Icon={FolderIcon}
                    />
                )}
                <QuickAction
                    text={t(themes.loadMissing)}
                    action={refreshLocalThemes}
                    Icon={RestartIcon}
                />
                <QuickAction
                    text={t(themes.editQuickCSS)}
                    action={() => PlexcordNative.quickCss.openEditor()}
                    Icon={PaintbrushIcon}
                />
                {Settings.plugins.ClientTheme.enabled && (
                    <QuickAction
                        text={t(themes.editClient)}
                        action={() => openPluginModal(Plugins.ClientTheme)}
                        Icon={PencilIcon}
                    />
                )}
            </QuickActionCard>

            <Divider className={Margins.top20} />

            <Heading className={Margins.top20}>{t(themes.online.title)}</Heading>
            <Paragraph className={Margins.bottom16}>
                {t(themes.online.description)}
            </Paragraph>
            <FormSwitch
                title={t(themes.online.enable)}
                description={t(themes.online.enableDescription)}
                value={settings.enableOnlineThemes ?? true}
                onChange={value => {
                    settings.enableOnlineThemes = value;
                    if (!value) {
                        settings.enabledThemeLinks = [];
                    }
                }}
            />

            <Notice.Info className={Margins.bottom16} style={{ width: "100%" }}>
                {t(themes.download, {
                    bd: <Link href="https://betterdiscord.app/themes">{t(themes.bd)}</Link>,
                    github: <Link href="https://github.com/search?q=discord+theme">{t(themes.github)}</Link>
                })}
            </Notice.Info>

            <div className={cl("link-row")}>
                <TextInput
                    placeholder={t(themes.online.placeholder)}
                    value={currentThemeLink}
                    onChange={setCurrentThemeLink}
                    disabled={!(settings.enableOnlineThemes ?? true)}
                />
                <Button onClick={() => addThemeLink(currentThemeLink)} disabled={!themeLinkValid || !(settings.enableOnlineThemes ?? true)}>
                    {t(themes.add)}
                </Button>
            </div>
            {currentThemeLink && (
                <div className={Margins.top8}>
                    <Validator link={currentThemeLink} onValidate={setThemeLinkValid} />
                </div>
            )}

            <Divider className={Margins.top20} />

            <Heading className={Margins.top20}>{t(themes.installed.title)}</Heading>
            <Paragraph className={Margins.bottom8}>
                {t(themes.installed.description)}
            </Paragraph>
            <Paragraph color="text-subtle" className={Margins.bottom16}>
                {t(themes.installed.count, {
                    count: allThemes.length,
                    s: allThemes.length !== 1 ? "s" : "",
                    localCount,
                    onlineCount,
                    enabledCount
                })}
            </Paragraph>

            <div className={cl("filter-row")}>
                <TextInput
                    placeholder={t(themes.installed.search)}
                    value={searchQuery}
                    onChange={setSearchQuery}
                />
                <div>
                    <Select
                        options={[
                            { label: t(themes.filter.all), value: ThemeFilter.All },
                            { label: t(themes.filter.online), value: ThemeFilter.Online },
                            { label: t(themes.filter.local), value: ThemeFilter.Local },
                            { label: t(themes.filter.enabled), value: ThemeFilter.Enabled },
                            { label: t(themes.filter.disabled), value: ThemeFilter.Disabled }
                        ]}
                        select={setFilter}
                        isSelected={v => v === filter}
                        serialize={v => v}
                    />
                </div>
            </div>

            {userThemes === null ? (
                <Paragraph color="text-muted" className={Margins.top16}>{t(themes.installed.loading)}</Paragraph>
            ) : filteredThemes.length === 0 ? (
                <Paragraph color="text-muted" className={Margins.top16}>
                    {allThemes.length === 0
                        ? t(themes.installed.none)
                        : t(themes.installed.noCriteria)
                    }
                </Paragraph>
            ) : (
                <div className={classes(cl("grid"), Margins.top16)}>
                    {filteredThemes.map(theme => {
                        if (theme.type === "online") {
                            const onlineTheme = theme.header as UserThemeHeader & { link: string; };
                            const onlineThemesDisabled = !(settings.enableOnlineThemes ?? true);
                            return (
                                <OtherThemeCard
                                    key={onlineTheme.link}
                                    theme={onlineTheme}
                                    enabled={theme.enabled}
                                    onChange={enabled => onThemeLinkEnabledChange(onlineTheme.link, enabled)}
                                    onDelete={() => {
                                        onThemeLinkEnabledChange(onlineTheme.link, false);
                                        deleteThemeLink(onlineTheme.link);
                                    }}
                                    showDeleteButton
                                    disabled={onlineThemesDisabled}
                                    onPin={() => togglePinTheme(onlineTheme.link)}
                                    isPinned={settings.pinnedThemes.includes(onlineTheme.link)}
                                    themeLink={onlineTheme.link}
                                    onCopyUrl={() => copyWithToast(onlineTheme.link, t(themes.copy.copied))}
                                    onRefresh={() => refreshOnlineTheme(onlineTheme.link)}
                                    onDownload={() => downloadTheme(onlineTheme.link, onlineTheme.name ?? "theme")}
                                    isLocal={false}
                                    activationMode={theme.activationMode}
                                    onActivationModeChange={mode => setThemeActivationMode(onlineTheme.link, mode)}
                                    onEditName={newName => {
                                        const updatedNames = { ...themeNames, [onlineTheme.link]: newName };
                                        setThemeNames(updatedNames);
                                        settings.themeNames = {
                                            ...settings.themeNames,
                                            [onlineTheme.link]: newName,
                                        };
                                    }}
                                />
                            );
                        }

                        if (theme.themeType === "usercss") {
                            const usercssTheme = theme.header as UserstyleHeader;
                            return (
                                <UserCSSThemeCard
                                    key={usercssTheme.fileName}
                                    enabled={theme.enabled}
                                    onChange={enabled => onLocalThemeChange(usercssTheme.fileName, enabled)}
                                    onDelete={async () => {
                                        clearThemeState(usercssTheme.fileName);
                                        await PlexcordNative.themes.deleteTheme(usercssTheme.fileName);
                                        refreshLocalThemes();
                                    }}
                                    onSettingsReset={refreshLocalThemes}
                                    theme={usercssTheme}
                                    activationMode={theme.activationMode}
                                    onActivationModeChange={mode => setThemeActivationMode(usercssTheme.fileName, mode)}
                                />
                            );
                        }

                        const localTheme = theme.header as UserThemeHeader;
                        return (
                            <OtherThemeCard
                                key={localTheme.fileName}
                                enabled={theme.enabled}
                                onChange={enabled => onLocalThemeChange(localTheme.fileName, enabled)}
                                onDelete={async () => {
                                    onLocalThemeChange(localTheme.fileName, false);
                                    clearThemeState(localTheme.fileName);
                                    await PlexcordNative.themes.deleteTheme(localTheme.fileName);
                                    refreshLocalThemes();
                                }}
                                showDeleteButton
                                onPin={() => togglePinTheme(localTheme.fileName)}
                                isPinned={settings.pinnedThemes.includes(localTheme.fileName)}
                                onOpenFolder={!IS_WEB ? () => showItemInFolder(themeDir + "/" + localTheme.fileName) : undefined}
                                onRefresh={refreshLocalThemes}
                                isLocal
                                theme={localTheme}
                                activationMode={theme.activationMode}
                                onActivationModeChange={mode => setThemeActivationMode(localTheme.fileName, mode)}
                            />
                        );
                    })}
                </div>
            )}
        </SettingsTab>
    );
}

export function CspErrorCard() {
    if (IS_WEB) return null;

    const errors = useCspErrors();
    const forceUpdate = useForceUpdater();

    if (!errors.length) return null;

    const isImgurHtmlDomain = (url: string) => url.startsWith("https://imgur.com/");

    const allowUrl = async (url: string) => {
        const { origin: baseUrl, host } = new URL(url);

        const result = await PlexcordNative.csp.requestAddOverride(baseUrl, ["connect-src", "img-src", "style-src", "font-src"], "Plexcord " + t(themes.title));
        if (result !== "ok") return;

        CspBlockedUrls.forEach(url => {
            if (new URL(url).host === host) {
                CspBlockedUrls.delete(url);
            }
        });

        forceUpdate();

        Alerts.show({
            title: t(plugins.restart.required),
            body: t(csp.restart),
            confirmText: t(plugins.restart.button.now),
            cancelText: t(plugins.restart.button.later),
            onConfirm: relaunch
        });
    };

    const hasImgurHtmlDomain = errors.some(isImgurHtmlDomain);

    return (
        <ErrorCard className={classes(cl("error-card"), Margins.top16)}>
            <Heading className={Margins.bottom8}>{t(csp.blocked.resources)}</Heading>
            <Paragraph className={Margins.bottom8}>
                {t(csp.blocked.disallowed)}
            </Paragraph>
            <Paragraph className={Margins.bottom8}>
                {t(csp.blocked.recommended)}
            </Paragraph>
            <Paragraph className={Margins.bottom8}>
                {t(csp.blocked.afterAllow, {
                    platform: IS_DISCORD_DESKTOP ? "Discord" : "Plextron"
                })}
            </Paragraph>

            {errors.map(url => (
                <div key={url} className={cl("csp-row")}>
                    <Link href={url}>{url}</Link>
                    <Button size="small" variant="secondary" onClick={() => allowUrl(url)} disabled={isImgurHtmlDomain(url)}>
                        {t(csp.blocked.allow)}
                    </Button>
                </div>
            ))}

            {hasImgurHtmlDomain && (
                <Paragraph color="text-subtle" className={Margins.top8}>
                    {t(csp.imgur.direct, { etc: <code>https://i.imgur.com/...</code> })}
                </Paragraph>
            )}
        </ErrorCard>
    );
}

function UserscriptThemesTab() {
    return (
        <SettingsTab>
            <Heading>{t(themes.error.userscript)}</Heading>

            <Paragraph color="text-subtle">
                {t(themes.error.stylus, {
                    stylus: <Link href={getStylusWebStoreUrl()}>{t(themes.stylus)}</Link>
                })}
            </Paragraph>
        </SettingsTab>
    );
}

export default IS_USERSCRIPT
    ? wrapTab(UserscriptThemesTab, t(themes.title))
    : wrapTab(ThemesTab, t(themes.title));
