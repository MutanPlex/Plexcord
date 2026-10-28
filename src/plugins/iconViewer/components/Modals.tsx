/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2025 Vendicated and contributors
 * Copyright (c) 2026 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { plugin, t } from "@api/i18n";
import { BaseText } from "@components/BaseText";
import { CodeBlock } from "@components/CodeBlock";
import { Flex } from "@components/Flex";
import { HeadingSecondary } from "@components/Heading";
import { Paragraph } from "@components/Paragraph";
import { TooltipContainer } from "@components/TooltipContainer";
import { Icon, RenderModalProps } from "@plexcord/discord-types";
import { copyWithToast, getIntlMessage } from "@utils/discord";
import { Logger } from "@utils/Logger";
import { saveFile } from "@utils/web";
import { findComponentByCodeLazy } from "@webpack";
import { Clickable, ContextMenuApi, FluxDispatcher, Menu, Modal, openModal, useCallback, useEffect, useMemo, useState } from "@webpack/common";

import { cssColors, getCssColorKeys, iconSizes, iconSizesInPx } from "../utils";

const logger = new Logger("IconViewer");
const BugIcon = findComponentByCodeLazy("1.1.27.1.37 0a6.66 6.6");

const FORMAT_EXTENSIONS: Record<string, string> = {
    "image/png": "png",
    "image/jpeg": "jpeg",
    "image/gif": "gif",
    "image/webp": "webp",
    "image/svg+xml": "svg",
    "image/avif": "avif"
};

function useColorNavigation(initialColor: number) {
    const [color, setColor] = useState(initialColor);

    const onKeyDown = useCallback((e: KeyboardEvent) => {
        if (e.key === "ArrowLeft" || e.key === "ArrowRight") {
            e.preventDefault();
            setColor(c => {
                const next = c + (e.key === "ArrowLeft" ? -1 : 1);
                const max = getCssColorKeys().length;
                return next < 0 ? max - 1 : next >= max ? 0 : next;
            });
        }
    }, []);

    const onColorChange = useCallback((e: { color: string; }) => {
        const keys = getCssColorKeys();
        const idx = keys.indexOf(e.color);
        if (idx !== -1) setColor(idx);
    }, []);

    useEffect(() => {
        document.addEventListener("keydown", onKeyDown);
        FluxDispatcher.subscribe("ICONVIEWER_COLOR_CHANGE", onColorChange);
        return () => {
            document.removeEventListener("keydown", onKeyDown);
            FluxDispatcher.unsubscribe("ICONVIEWER_COLOR_CHANGE", onColorChange);
        };
    }, [onKeyDown, onColorChange]);

    return [color, setColor] as const;
}

function ColorContextMenu({ colorKeys }: { colorKeys: string[]; }) {
    const [query, setQuery] = useState("");
    const filtered = colorKeys.filter(k =>
        !query || k.toLowerCase().includes(query.toLowerCase())
    );

    return (
        <Menu.Menu
            navId="pc-ic-colors-menu"
            onClose={() => FluxDispatcher.dispatch({ type: "CONTEXT_MENU_CLOSE" })}
            aria-label={t(plugin.iconViewer.modal.iconViewer.colors)}
        >
            <Menu.MenuControlItem
                id="pc-ic-colors-search"
                control={(props, ref) => (
                    <Menu.MenuSearchControl
                        {...props}
                        query={query}
                        onChange={setQuery}
                        ref={ref}
                        placeholder={getIntlMessage("SEARCH")}
                        autoFocus
                    />
                )}
            />
            <Menu.MenuSeparator />
            {filtered.map(colorKey => (
                <Menu.MenuItem
                    key={colorKey}
                    id={colorKey}
                    label={colorKey}
                    action={() => FluxDispatcher.dispatch({ type: "ICONVIEWER_COLOR_CHANGE", color: colorKey })}
                />
            ))}
        </Menu.Menu>
    );
}

function saveIcon(iconName: string, icon: Element, color: number, size: number, type: string) {
    const colorName = cssColors[color]?.name ?? t(plugin.iconViewer.modal.iconViewer.unknown);
    const ext = FORMAT_EXTENSIONS[type] ?? "png";
    const filename = `${iconName}-${colorName}-${size}px.${ext}`;

    const svg = icon.cloneNode(true) as Element;
    for (const el of svg.children) {
        const fill = el.getAttribute("fill");
        if (fill?.startsWith("var(")) {
            el.setAttribute("fill", getComputedStyle(icon).getPropertyValue(fill.slice(4, -1)));
        }
    }
    const data = new XMLSerializer().serializeToString(svg);

    if (type === "image/svg+xml") {
        saveFile(new File([data], filename, { type }));
        return;
    }

    const canvas = document.createElement("canvas");
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const img = new Image();
    img.onload = () => {
        ctx.drawImage(img, 0, 0, size, size);
        const link = document.createElement("a");
        link.download = filename;
        link.href = canvas.toDataURL(type);
        link.click();
    };
    img.src = `data:image/svg+xml;base64,${btoa(data)}`;
}

function OtherContextMenu({ iconName, Icon, color }: { iconName: string; Icon: Icon; color: number; }) {
    const handleSave = (type: string) => {
        const iconEl = document.querySelector(".pc-ic-icon-preview .pc-ic-icon-large");
        if (iconEl) saveIcon(iconName, iconEl, color, iconSizesInPx.lg, type);
    };

    return (
        <Menu.Menu
            navId="pc-ic-other-menu"
            onClose={() => FluxDispatcher.dispatch({ type: "CONTEXT_MENU_CLOSE" })}
            aria-label={t(plugin.iconViewer.context.icon.options)}
        >
            <Menu.MenuItem
                id="log-console"
                label={t(plugin.iconViewer.context.icon.log)}
                icon={BugIcon}
                leadingAccessory={{ type: "icon", icon: BugIcon }}
                action={() => logger.info(Icon)}
            />
            <Menu.MenuItem id="save" label={t(plugin.iconViewer.context.icon.save)}>
                <Menu.MenuItem
                    id="save-png"
                    label="PNG"
                    action={() => handleSave("image/png")}
                />
                <Menu.MenuItem
                    id="save-svg"
                    label="SVG"
                    action={() => handleSave("image/svg+xml")}
                />
                <Menu.MenuItem
                    id="save-jpeg"
                    label="JPEG"
                    action={() => handleSave("image/jpeg")}
                />
                <Menu.MenuItem
                    id="save-webp"
                    label="WEBP"
                    action={() => handleSave("image/webp")}
                />
                <Menu.MenuItem
                    id="save-gif"
                    label="GIF"
                    action={() => handleSave("image/gif")}
                />
                <Menu.MenuItem
                    id="save-avif"
                    label="AVIF"
                    action={() => handleSave("image/avif")}
                />
            </Menu.MenuItem>
        </Menu.Menu>
    );
}

function IconModal({ iconName, Icon, onClose, transitionState }: { iconName: string; Icon: Icon; } & RenderModalProps) {
    const [color, setColor] = useColorNavigation(209);
    const colorData = cssColors[color];
    const colorKeys = useMemo(() => getCssColorKeys(), []);

    const fill = iconName === "CircleShieldIcon" ? "var(--background-base-low)" : colorData?.css;
    const findCode = `const ${iconName} = findExportedComponentLazy("${iconName}")`;

    const openColorMenu = (e: React.MouseEvent) => {
        ContextMenuApi.openContextMenu(e, () => <ColorContextMenu colorKeys={colorKeys} />);
    };

    const onWheel = useCallback((e: React.WheelEvent) => {
        e.preventDefault();
        const max = colorKeys.length;
        setColor(c => {
            const next = c + (e.deltaY > 0 ? 1 : -1);
            return next < 0 ? max - 1 : next >= max ? 0 : next;
        });
    }, [colorKeys.length, setColor]);

    const openOtherMenu = (e?: React.MouseEvent) => {
        if (e) ContextMenuApi.openContextMenu(e, () => (
            <OtherContextMenu iconName={iconName} Icon={Icon} color={color} />
        ));
    };

    return (
        <Modal
            transitionState={transitionState}
            onClose={onClose}
            size="md"
            title={iconName}
            actions={[
                {
                    text: t(plugin.iconViewer.context.icon.actions),
                    variant: "primary",
                    onClick: openOtherMenu
                }
            ]}
        >
            <Flex className="pc-ic-modal-main">
                <div
                    className="pc-ic-icon-preview"
                    aria-label={colorData?.name}
                    onContextMenu={openColorMenu}
                    onWheel={onWheel}
                >
                    <Icon className="pc-ic-icon-large" color={colorData?.css} fill={fill} />
                </div>
                <Flex flexDirection="column" className="pc-ic-icon-info">
                    <Flex className="pc-ic-icon-sizes">
                        {iconSizes.map(size => (
                            <TooltipContainer text={size} key={size}>
                                <Icon size={size} color={colorData?.css} fill={fill} />
                            </TooltipContainer>
                        ))}
                    </Flex>
                    <TooltipContainer text={t(plugin.iconViewer.context.icon.rightClick)}>
                        <BaseText size="sm" color="text-muted" className="pc-ic-color-label">
                            {colorData?.name}
                        </BaseText>
                    </TooltipContainer>
                </Flex>
            </Flex>
            <div className="pc-ic-use-as">
                <BaseText size="md" weight="semibold">{t(plugin.iconViewer.context.icon.usage)}</BaseText>
                <BaseText size="sm" color="text-muted">{t(plugin.iconViewer.context.icon.click)}</BaseText>
            </div>
            {/* for some reason i cant make this shit codeblock full width, FF 15 */}
            <Clickable className="pc-ic-codeblock-wrapper" onClick={() => copyWithToast(findCode, t(plugin.iconViewer.context.icon.copied))}>
                <CodeBlock content={findCode} lang="ts" />
            </Clickable>
        </Modal>
    );
}

export function openIconModal(iconName: string, Icon: Icon) {
    openModal(props => <IconModal iconName={iconName} Icon={Icon} {...props} />);
}

export function SettingsAbout() {
    return (
        <>
            <HeadingSecondary>{t(plugin.iconViewer.about.title)}</HeadingSecondary>
            <Paragraph>
                <ul className="pc-ic-unordered-list">
                    <li>{t(plugin.iconViewer.about.preview)}</li>
                    <li>{t(plugin.iconViewer.about.list.copy)}</li>
                    <li>{t(plugin.iconViewer.about.list.download)}</li>
                    <li>{t(plugin.iconViewer.about.list.premade)}</li>
                    <li>{t(plugin.iconViewer.about.list.find)}</li>
                    <li>{t(plugin.iconViewer.about.list.search)}</li>
                </ul>
            </Paragraph>
            <HeadingSecondary>{t(plugin.iconViewer.about.list.special)}</HeadingSecondary>
            <Paragraph>
                <ul className="pc-ic-unordered-list">
                    <li>krystalskullofficial._.</li>
                    <li>davr1</li>
                    <li>suffocate</li>
                </ul>
            </Paragraph>
        </>
    );
}
