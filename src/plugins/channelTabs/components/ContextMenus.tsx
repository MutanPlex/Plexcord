/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2024 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { plugin, t } from "@api/i18n";
import { BaseText } from "@components/BaseText";
import { Button } from "@components/Button";
import { Heading } from "@components/Heading";
import { Paragraph } from "@components/Paragraph";
import { bookmarkFolderColors, bookmarkPlaceholderName, closeOtherTabs, closeTab, closeTabsToTheLeft, closeTabsToTheRight, createTab, getDiscordFolderIcon, getDiscordFolderIconNames, hasClosedTabs, isBookmarkFolder, openedTabs, reopenClosedTab, settings, toggleCompactTab } from "@plugins/channelTabs/util";
import { Bookmark, BookmarkFolder, Bookmarks, ChannelTabsProps, UseBookmarkMethods } from "@plugins/channelTabs/util/types";
import { getIntlMessage } from "@utils/discord";
import { Margins } from "@utils/margins";
import { closeModal, ModalContent, ModalFooter, ModalHeader, ModalProps, ModalRoot, openModal } from "@utils/modal";
import { ChannelStore, ColorPicker, FluxDispatcher, Menu, ReadStateStore, ReadStateUtils, Select, TextInput, useMemo, useState } from "@webpack/common";
const legacyFolderColors: Record<string, string> = {
    "var(--channeltabs-red)": bookmarkFolderColors.Red,
    "var(--channeltabs-blue)": bookmarkFolderColors.Blue,
    "var(--channeltabs-yellow)": bookmarkFolderColors.Yellow,
    "var(--channeltabs-green)": bookmarkFolderColors.Green,
    "var(--channeltabs-black)": bookmarkFolderColors.Black,
    "var(--channeltabs-white)": bookmarkFolderColors.White,
    "var(--channeltabs-orange)": bookmarkFolderColors.Orange,
    "var(--channeltabs-pink)": bookmarkFolderColors.Pink
};

const normalizeFolderColor = (color?: string) => {
    if (!color) return bookmarkFolderColors.Black;
    return legacyFolderColors[color] ?? color;
};

const colorToInt = (color?: string) => {
    const normalized = normalizeFolderColor(color);
    if (!/^#([0-9a-f]{6})$/i.test(normalized)) return parseInt(bookmarkFolderColors.Black.slice(1), 16);
    return parseInt(normalized.slice(1), 16);
};

const intToColor = (value: number | null) =>
    value == null
        ? bookmarkFolderColors.Black
        : `#${value.toString(16).padStart(6, "0")}`;

export function BasicContextMenu() {
    const { showBookmarkBar } = settings.use(["showBookmarkBar"]);

    return (
        <Menu.Menu
            navId="channeltabs-context"
            onClose={() => FluxDispatcher.dispatch({ type: "CONTEXT_MENU_CLOSE" })}
            aria-label={t(plugin.channelTabs.context.label)}
        >
            <Menu.MenuGroup>
                <Menu.MenuCheckboxItem
                    checked={showBookmarkBar}
                    id="show-bookmark-bar"
                    label={t(plugin.channelTabs.context.bookmarkBar)}
                    action={() => {
                        settings.store.showBookmarkBar = !settings.store.showBookmarkBar;
                    }}
                />
            </Menu.MenuGroup>
        </Menu.Menu>
    );
}

function FolderGlyph({ color, iconName }: { color: string; iconName?: string; }) {
    const IconComponent = getDiscordFolderIcon(iconName);
    const resolvedColor = normalizeFolderColor(color);
    const fill = iconName === "CircleShieldIcon" ? "var(--background-base-low)" : resolvedColor;
    const customIconSize = 16;

    return (
        <div style={{
            alignItems: "center",
            color: resolvedColor,
            display: "flex",
            justifyContent: "center",
            lineHeight: 0
        }}>
            {IconComponent
                ? <IconComponent
                    height={customIconSize}
                    width={customIconSize}
                    color={resolvedColor}
                    fill={fill}
                    style={{ transform: "scale(0.6666667)", transformOrigin: "center" }}
                />
                : <svg height={16} width={16} viewBox="0 0 24 24">
                    <path
                        fill="currentColor"
                        d="M20 7H12L10.553 5.106C10.214 4.428 9.521 4 8.764 4H3C2.447 4 2 4.447 2 5V19C2 20.104 2.895 21 4 21H20C21.104 21 22 20.104 22 19V9C22 7.896 21.104 7 20 7Z"
                    />
                </svg>}
        </div>
    );
}

function FolderChipPreview({ name, color, iconName }: { name: string; color: string; iconName?: string; }) {
    return (
        <div style={{
            alignItems: "center",
            border: "1px solid var(--border-subtle)",
            borderRadius: 8,
            display: "inline-flex",
            gap: 8,
            marginTop: 12,
            maxWidth: "100%",
            padding: "6px 10px"
        }}>
            <FolderGlyph color={color} iconName={iconName} />
            <BaseText size="sm">{name.trim() || t(plugin.channelTabs.bookmark.folder)}</BaseText>
        </div>
    );
}

function FolderIconPickerModal({ modalProps, modalKey, name, color, iconName, onSelect, onColorChange }: {
    modalProps: ModalProps,
    modalKey: string,
    name: string,
    color: string,
    iconName?: string,
    onSelect: (iconName: string) => void,
    onColorChange: (color: string) => void;
}) {
    const [search, setSearch] = useState("");
    const [localColor, setLocalColor] = useState(normalizeFolderColor(color));
    const iconNames = useMemo(() => getDiscordFolderIconNames(), []);
    const filteredIconNames = useMemo(() => {
        const normalized = search.trim().toLowerCase();
        if (!normalized) return iconNames;
        return iconNames.filter(iconName => iconName.toLowerCase().includes(normalized));
    }, [iconNames, search]);

    return (
        <ModalRoot {...modalProps}>
            <ModalHeader>
                <BaseText size="lg" weight="semibold">{t(plugin.channelTabs.modal.folderIcon.title)}</BaseText>
            </ModalHeader>
            <ModalContent>
                <Heading className={Margins.top16}>{t(plugin.channelTabs.modal.folderIcon.preview)}</Heading>
                <FolderChipPreview name={name} color={localColor} iconName={iconName} />
                <Heading className={Margins.top16}>{t(plugin.channelTabs.modal.folderIcon.iconColor)}</Heading>
                <div className={Margins.top8}>
                    <ColorPicker
                        color={colorToInt(localColor)}
                        onChange={value => {
                            const nextColor = intToColor(value);
                            setLocalColor(nextColor);
                            onColorChange(nextColor);
                        }}
                        showEyeDropper={false}
                    />
                </div>
                <Heading className={Margins.top16}>{t(plugin.channelTabs.modal.folderIcon.search)}</Heading>
                <TextInput
                    value={search}
                    placeholder={t(plugin.channelTabs.modal.folderIcon.searchPlaceholder, { count: iconNames.length })}
                    onChange={setSearch}
                />
                <div style={{
                    display: "grid",
                    gap: 8,
                    gridTemplateColumns: "repeat(auto-fill, minmax(52px, 1fr))",
                    marginTop: 16,
                    maxHeight: 320,
                    overflowY: "auto"
                }}>
                    {filteredIconNames.map(name => (
                        <button
                            key={name}
                            onClick={() => {
                                onSelect(name);
                                closeModal(modalKey);
                            }}
                            style={{
                                alignItems: "center",
                                background: name === iconName ? "var(--background-modifier-hover)" : "var(--background-secondary)",
                                border: "1px solid var(--border-subtle)",
                                borderRadius: 8,
                                cursor: "pointer",
                                display: "flex",
                                height: 52,
                                justifyContent: "center",
                                padding: 0
                            }}
                            title={name}
                            type="button"
                        >
                            <FolderGlyph color={localColor} iconName={name} />
                        </button>
                    ))}
                </div>
            </ModalContent>
            <ModalFooter>
                <Button
                    color="transparent"
                    variant="none"
                    onClick={() => closeModal(modalKey)}
                >{t(plugin.channelTabs.button.close)}</Button>
            </ModalFooter>
        </ModalRoot>
    );
}

function FolderAppearanceFields({
    name,
    setName,
    color,
    setColor,
    iconName,
    setIconName,
    placeholder = "Folder"
}: {
    name: string,
    setName: (value: string) => void,
    color: string,
    setColor: (value: string) => void,
    iconName?: string,
    setIconName: (value?: string) => void,
    placeholder?: string;
}) {
    return <>
        <Heading className={Margins.top16}>{t(plugin.channelTabs.modal.folderIcon.folderName)}</Heading>
        <TextInput
            value={name === placeholder ? undefined : name}
            placeholder={placeholder}
            onChange={setName}
        />
        <Heading className={Margins.top16}>{t(plugin.channelTabs.modal.folderIcon.folderColor)}</Heading>
        <div className={Margins.top8}>
            <ColorPicker
                color={colorToInt(color)}
                onChange={value => setColor(intToColor(value))}
                showEyeDropper={false}
            />
        </div>
        <Heading className={Margins.top16}>{t(plugin.channelTabs.modal.folderIcon.folderIcon)}</Heading>
        <FolderChipPreview name={name} color={color} iconName={iconName} />
        <Button
            className={Margins.top8}
            onClick={() => {
                const key = openModal(modalProps => (
                    <FolderIconPickerModal
                        modalProps={modalProps}
                        modalKey={key}
                        name={name}
                        color={color}
                        iconName={iconName}
                        onSelect={setIconName}
                        onColorChange={setColor}
                    />
                ));
            }}
        >{t(plugin.channelTabs.modal.folderIcon.chooseIcon)}</Button>
        {iconName && <Button
            className={Margins.top8}
            color="transparent"
            variant="none"
            onClick={() => setIconName(undefined)}
        >{t(plugin.channelTabs.modal.folderIcon.useDefaultIcon)}</Button>}
    </>;
}

export function EditModal({ modalProps, modalKey, bookmark, onSave }: {
    modalProps: ModalProps,
    modalKey: string,
    bookmark: Bookmark | BookmarkFolder,
    onSave: (name: string, color: string, iconName?: string) => void;
}) {
    const [name, setName] = useState(bookmark.name);
    const [color, setColor] = useState(isBookmarkFolder(bookmark) ? normalizeFolderColor(bookmark.iconColor) : bookmarkFolderColors.Black);
    const [iconName, setIconName] = useState(isBookmarkFolder(bookmark) ? bookmark.iconName : undefined);
    const placeholder = bookmarkPlaceholderName(bookmark);

    return (
        <ModalRoot {...modalProps}>
            <ModalHeader>
                <BaseText size="lg" weight="semibold">{t(plugin.channelTabs.modal.edit.title)}</BaseText>
            </ModalHeader>
            <ModalContent>
                {isBookmarkFolder(bookmark)
                    ? <FolderAppearanceFields
                        name={name}
                        setName={setName}
                        color={color}
                        setColor={setColor}
                        iconName={iconName}
                        setIconName={setIconName}
                        placeholder={placeholder}
                    /> :
                    <>
                        <Heading className={Margins.top16}>{t(plugin.channelTabs.modal.edit.name)}</Heading>
                        <TextInput
                            value={name === placeholder ? undefined : name}
                            placeholder={placeholder}
                            onChange={v => setName(v)}
                        />
                    </>}
            </ModalContent>
            <ModalFooter>
                <Button
                    onClick={() => onSave(name || placeholder, color, iconName)}
                >{t(plugin.channelTabs.button.save)}</Button>
                <Button
                    variant="primary"
                    onClick={() => closeModal(modalKey)}
                >{t(plugin.channelTabs.button.cancel)}</Button>
            </ModalFooter>
        </ModalRoot>
    );
}

function AddToFolderModal({ modalProps, modalKey, bookmarks, onSave }: {
    modalProps: any,
    modalKey: string,
    bookmarks: Bookmarks,
    onSave: (folderIndex: number, folderName: string, folderColor: string, iconName?: string) => void;
}) {
    const [folderIndex, setIndex] = useState(-1);
    const [folderName, setFolderName] = useState("");
    const [folderColor, setFolderColor] = useState<string>(bookmarkFolderColors.Black);
    const [iconName, setIconName] = useState<string | undefined>();

    return (
        <ModalRoot {...modalProps}>
            <ModalHeader>
                <BaseText size="lg" weight="semibold">{t(plugin.channelTabs.modal.add.title)}</BaseText>
            </ModalHeader>
            <ModalContent>
                <Heading className={Margins.top16}>{t(plugin.channelTabs.modal.add.select)}</Heading>
                <Select
                    options={[...Object.entries(bookmarks)
                        .filter(([, bookmark]) => isBookmarkFolder(bookmark))
                        .map(([index, bookmark]) => ({
                            label: bookmark.name,
                            value: parseInt(index, 10)
                        })),
                    {
                        label: t(plugin.channelTabs.modal.add.create),
                        value: -1,
                        default: true
                    }]}
                    isSelected={v => v === folderIndex}
                    select={setIndex}
                    serialize={String}
                />
                {folderIndex === -1 && <FolderAppearanceFields
                    name={folderName}
                    setName={setFolderName}
                    color={folderColor}
                    setColor={setFolderColor}
                    iconName={iconName}
                    setIconName={setIconName}
                />}
            </ModalContent>
            <ModalFooter>
                <Button
                    onClick={() => onSave(folderIndex, folderName, folderColor, iconName)}
                >{t(plugin.channelTabs.button.save)}</Button>
                <Button
                    variant="primary"
                    onClick={() => closeModal(modalKey)}
                >{t(plugin.channelTabs.button.cancel)}</Button>
            </ModalFooter>
        </ModalRoot>
    );
}

function DeleteFolderConfirmationModal({ modalProps, modalKey, onConfirm }) {
    return (
        <ModalRoot {...modalProps}>
            <ModalHeader>
                <BaseText size="lg" weight="semibold">{t(plugin.channelTabs.modal.delete.title)}</BaseText>
            </ModalHeader>
            <ModalContent>
                <Paragraph className={Margins.top16}>
                    {t(plugin.channelTabs.modal.delete.description)}
                </Paragraph>
            </ModalContent>
            <ModalFooter>
                <Button
                    variant="dangerPrimary"
                    onClick={onConfirm}
                >
                    {t(plugin.channelTabs.button.delete)}
                </Button>
                <Button
                    variant="primary"
                    onClick={() => closeModal(modalKey)}
                >
                    {t(plugin.channelTabs.button.cancel)}
                </Button>
            </ModalFooter>
        </ModalRoot>
    );
}

export function BookmarkContextMenu({ bookmarks, index, methods }: { bookmarks: Bookmarks, index: number, methods: UseBookmarkMethods; }) {
    const { showBookmarkBar, bookmarkNotificationDot } = settings.use(["showBookmarkBar", "bookmarkNotificationDot"]);
    const bookmark = bookmarks[index];
    const isFolder = isBookmarkFolder(bookmark);

    return (
        <Menu.Menu
            navId="channeltabs-bookmark-context"
            onClose={() => FluxDispatcher.dispatch({ type: "CONTEXT_MENU_CLOSE" })}
            aria-label={t(plugin.channelTabs.context.bookmark)}
        >
            <Menu.MenuGroup>
                {bookmarkNotificationDot && !isFolder &&
                    <Menu.MenuItem
                        id="mark-as-read"
                        label={getIntlMessage("MARK_AS_READ")}
                        disabled={!ReadStateStore.hasUnread(bookmark.channelId)}
                        action={() => ReadStateUtils.ackChannel(ChannelStore.getChannel(bookmark.channelId))}
                    />
                }
                {isFolder
                    ? <Menu.MenuItem
                        id="open-all-in-folder"
                        label={t(plugin.channelTabs.context.openAll)}
                        action={() => bookmark.bookmarks.forEach(b => createTab(b))}
                    />
                    : < Menu.MenuItem
                        id="open-in-tab"
                        label={t(plugin.channelTabs.context.openNew)}
                        action={() => createTab(bookmark)}
                    />
                }
            </Menu.MenuGroup>
            <Menu.MenuGroup>
                <Menu.MenuItem
                    id="edit-bookmark"
                    label={t(plugin.channelTabs.modal.edit.title)}
                    action={() => {
                        const key = openModal(modalProps =>
                            <EditModal
                                modalProps={modalProps}
                                modalKey={key}
                                bookmark={bookmark}
                                onSave={(name, color, iconName) => {
                                    methods.editBookmark(index, {
                                        name,
                                        ...(isFolder && { iconColor: normalizeFolderColor(color), iconName })
                                    });
                                    closeModal(key);
                                }
                                }
                            />
                        );
                    }}
                />
                <Menu.MenuItem
                    id="delete-bookmark"
                    label={t(plugin.channelTabs.bookmark.delete)}
                    action={() => {
                        if (isFolder) {
                            const key = openModal(modalProps =>
                                <DeleteFolderConfirmationModal
                                    modalProps={modalProps}
                                    modalKey={key}
                                    onConfirm={() => {
                                        methods.deleteBookmark(index);
                                        closeModal(key);
                                    }}
                                />);
                        }
                        else methods.deleteBookmark(index);
                    }}
                />
                <Menu.MenuItem
                    id="add-to-folder"
                    label={t(plugin.channelTabs.modal.add.title)}
                    disabled={isFolder}
                    action={() => {
                        const key = openModal(modalProps =>
                            <AddToFolderModal
                                modalProps={modalProps}
                                modalKey={key}
                                bookmarks={bookmarks}
                                onSave={(index, folderName, folderColor, iconName) => {
                                    if (index === -1) {
                                        const folderIndex = methods.addFolder(folderName, normalizeFolderColor(folderColor), iconName);
                                        methods.addBookmark(bookmark as Bookmark, folderIndex);
                                    }
                                    else methods.addBookmark(bookmark as Bookmark, index);
                                    methods.deleteBookmark(bookmarks.indexOf(bookmark));
                                    closeModal(key);
                                }
                                }
                            />
                        );
                    }}
                />
            </Menu.MenuGroup>
            <Menu.MenuGroup>
                <Menu.MenuCheckboxItem
                    checked={showBookmarkBar}
                    id="show-bookmark-bar"
                    label={t(plugin.channelTabs.context.bookmarkBar)}
                    action={() => {
                        settings.store.showBookmarkBar = !settings.store.showBookmarkBar;
                    }}
                />
            </Menu.MenuGroup>
        </Menu.Menu>
    );
}

export function TabContextMenu({ tab }: { tab: ChannelTabsProps; }) {
    const channel = ChannelStore.getChannel(tab.channelId);
    const [compact, setCompact] = useState(tab.compact);
    const { showBookmarkBar } = settings.use(["showBookmarkBar"]);

    return (
        <Menu.Menu
            navId="channeltabs-tab-context"
            onClose={() => FluxDispatcher.dispatch({ type: "CONTEXT_MENU_CLOSE" })}
            aria-label={t(plugin.channelTabs.context.tab)}
        >
            <Menu.MenuGroup>
                {channel &&
                    <Menu.MenuItem
                        id="mark-as-read"
                        label={getIntlMessage("MARK_AS_READ")}
                        disabled={!ReadStateStore.hasUnread(channel.id)}
                        action={() => ReadStateUtils.ackChannel(channel)}
                    />
                }
                <Menu.MenuCheckboxItem
                    checked={compact}
                    id="toggle-compact-tab"
                    label={t(plugin.channelTabs.context.compact)}
                    action={() => {
                        setCompact(compact => !compact);
                        toggleCompactTab(tab.id);
                    }}
                />
            </Menu.MenuGroup>
            {openedTabs.length !== 1 && <Menu.MenuGroup>
                <Menu.MenuItem
                    id="close-tab"
                    label={t(plugin.channelTabs.context.close.tab)}
                    action={() => closeTab(tab.id)}
                />
                <Menu.MenuItem
                    id="close-other-tabs"
                    label={t(plugin.channelTabs.context.close.otherTabs)}
                    action={() => closeOtherTabs(tab.id)}
                />
                <Menu.MenuItem
                    id="close-right-tabs"
                    label={t(plugin.channelTabs.context.close.tabsToRight)}
                    disabled={openedTabs.indexOf(tab) === openedTabs.length - 1}
                    action={() => closeTabsToTheRight(tab.id)}
                />
                <Menu.MenuItem
                    id="close-left-tabs"
                    label={t(plugin.channelTabs.context.close.tabsToLeft)}
                    disabled={openedTabs.indexOf(tab) === 0}
                    action={() => closeTabsToTheLeft(tab.id)}
                />
                <Menu.MenuItem
                    id="reopen-closed-tab"
                    label={t(plugin.channelTabs.context.close.reopen)}
                    disabled={!hasClosedTabs()}
                    action={() => reopenClosedTab()}
                />
            </Menu.MenuGroup>}
            <Menu.MenuGroup>
                <Menu.MenuCheckboxItem
                    checked={showBookmarkBar}
                    id="show-bookmark-bar"
                    label={t(plugin.channelTabs.context.bookmarkBar)}
                    action={() => {
                        settings.store.showBookmarkBar = !settings.store.showBookmarkBar;
                    }}
                />
            </Menu.MenuGroup>
        </Menu.Menu>
    );
}
