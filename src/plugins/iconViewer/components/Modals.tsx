/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2025 Vendicated and contributors
 * Copyright (c) 2026 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { plugin, t } from "@api/i18n";
import { BaseText } from "@components/BaseText";
import { Button } from "@components/Button";
import { CodeBlock } from "@components/CodeBlock";
import { Flex } from "@components/Flex";
import { HeadingSecondary } from "@components/Heading";
import { Paragraph } from "@components/Paragraph";
import { TooltipContainer } from "@components/TooltipContainer";
import { Icon } from "@plexcord/discord-types";
import { copyWithToast, getIntlMessage } from "@utils/discord";
import { Logger } from "@utils/Logger";
import {
    CloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalProps,
    ModalRoot,
    ModalSize,
    openModal
} from "@utils/modal";
import { saveFile } from "@utils/web";
import { findComponentByCodeLazy } from "@webpack";
import {
    Clickable,
    ContextMenuApi,
    createRoot,
    FluxDispatcher,
    Menu,
    ReactDOM,
    useCallback,
    useEffect,
    useMemo,
    useState
} from "@webpack/common";

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

function convertToHtml(component: React.ReactElement): string {
    const container = document.createElement("div");
    const root = createRoot(container);
    ReactDOM.flushSync(() => root.render(component));
    const content = container.innerHTML;
    root.unmount();
    return content;
}

function saveIcon(iconName: string, icon: Element | string, color: number, size: number, type: string) {
    const colorName = cssColors[color]?.name ?? t(plugin.iconViewer.modal.iconViewer.unknown);
    const ext = FORMAT_EXTENSIONS[type] ?? "png";
    const filename = `${iconName}-${colorName}-${size}px.${ext}`;

    if (typeof icon === "string") {
        saveFile(new File([icon], filename, { type: "text/plain" }));
        return;
    }

    for (const el of icon.children) {
        const fill = el.getAttribute("fill");
        if (fill?.startsWith("var(")) {
            el.setAttribute("fill", getComputedStyle(icon).getPropertyValue(fill.slice(4, -1)));
        }
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
    img.src = `data:image/svg+xml;base64,${btoa(icon.outerHTML)}`;
}

function OtherContextMenu({ iconName, Icon, color }: { iconName: string; Icon: Icon; color: number; }) {
    const colorData = cssColors[color];

    const handleSave = (type: string) => {
        const size = iconSizesInPx.lg;
        const iconEl = type === "image/svg+xml"
            ? convertToHtml(<Icon className="pc-ic-save-icon" color={colorData?.css} />)
            : document.querySelector(".pc-ic-icon-preview .pc-ic-icon-large") as Element | null;

        if (iconEl) saveIcon(iconName, iconEl, color, size, type);
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

function IconModal({ iconName, Icon, onClose, transitionState }: { iconName: string; Icon: Icon; } & ModalProps) {
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

    const openOtherMenu = (e: React.MouseEvent) => {
        ContextMenuApi.openContextMenu(e, () => (
            <OtherContextMenu iconName={iconName} Icon={Icon} color={color} />
        ));
    };

    return (
        <ModalRoot transitionState={transitionState} size={ModalSize.MEDIUM}>
            <ModalHeader separator={false} className="pc-ic-modal-header">
                <div className="pc-ic-modal-header-content">
                    <BaseText size="lg" weight="semibold" className="pc-ic-modal-title">{iconName}</BaseText>
                </div>
                <div className="pc-ic-modal-header-trailing">
                    <CloseButton onClick={onClose} />
                </div>
            </ModalHeader>
            <ModalContent className="pc-ic-modal-content">
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
            </ModalContent>
            <ModalFooter className="pc-ic-modal-footer">
                <Button variant="primary" onClick={openOtherMenu}>
                    {t(plugin.iconViewer.context.icon.actions)}
                </Button>
            </ModalFooter>
        </ModalRoot>
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
