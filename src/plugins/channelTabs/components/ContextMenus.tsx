/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2024 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { t } from "@api/i18n";
import { BaseText } from "@components/BaseText";
import { Heading } from "@components/Heading";
import { Paragraph } from "@components/Paragraph";
import { bookmarkFolderColors, bookmarkPlaceholderName, closeOtherTabs, closeTab, closeTabsToTheLeft, closeTabsToTheRight, createTab, hasClosedTabs, isBookmarkFolder, openedTabs, reopenClosedTab, settings, toggleCompactTab } from "@plugins/channelTabs/util";
import { Bookmark, BookmarkFolder, Bookmarks, ChannelTabsProps, UseBookmarkMethods } from "@plugins/channelTabs/util/types";
import { getIntlMessage } from "@utils/discord";
import { Margins } from "@utils/margins";
import { closeModal, ModalContent, ModalFooter, ModalHeader, ModalProps, ModalRoot, openModal } from "@utils/modal";
import { Button, ChannelStore, FluxDispatcher, Menu, ReadStateStore, ReadStateUtils, Select, TextInput, useState } from "@webpack/common";

export function BasicContextMenu() {
    const { showBookmarkBar } = settings.use(["showBookmarkBar"]);

    return (
        <Menu.Menu
            navId="channeltabs-context"
            onClose={() => FluxDispatcher.dispatch({ type: "CONTEXT_MENU_CLOSE" })}
            aria-label={t("plugin.channelTabs.context.label")}
        >
            <Menu.MenuGroup>
                <Menu.MenuCheckboxItem
                    checked={showBookmarkBar}
                    id="show-bookmark-bar"
                    label={t("plugin.channelTabs.context.bookmarkBar")}
                    action={() => {
                        settings.store.showBookmarkBar = !settings.store.showBookmarkBar;
                    }}
                />
            </Menu.MenuGroup>
        </Menu.Menu>
    );
}

export function EditModal({ modalProps, modalKey, bookmark, onSave }: {
    modalProps: ModalProps,
    modalKey: string,
    bookmark: Bookmark | BookmarkFolder,
    onSave: (name: string, color: string) => void;
}) {
    const [name, setName] = useState(bookmark.name);
    const [color, setColor] = useState(isBookmarkFolder(bookmark) ? bookmark.iconColor : undefined);
    const placeholder = bookmarkPlaceholderName(bookmark);

    return (
        <ModalRoot {...modalProps}>
            <ModalHeader>
                <BaseText size="lg" weight="semibold">{t("plugin.channelTabs.modal.edit.title")}</BaseText>
            </ModalHeader>
            <ModalContent>
                <Heading className={Margins.top16}>{t("plugin.channelTabs.modal.edit.name")}</Heading>
                <TextInput
                    value={name === placeholder ? undefined : name}
                    placeholder={placeholder}
                    onChange={v => setName(v)}
                />
                {isBookmarkFolder(bookmark) && <>
                    <Heading className={Margins.top16}>{t("plugin.channelTabs.modal.edit.folder")}</Heading>
                    <Select
                        options={
                            Object.entries(bookmarkFolderColors).map(([name, value]) => ({
                                label: name,
                                value,
                                default: bookmark.iconColor === value
                            }))
                        }
                        isSelected={v => color === v}
                        select={setColor}
                        serialize={String}
                    />
                </>}
            </ModalContent>
            <ModalFooter>
                <Button
                    onClick={() => onSave(name || placeholder, color!)}
                >{t("plugin.channelTabs.button.save")}</Button>
                <Button
                    color={Button.Colors.TRANSPARENT}
                    look={Button.Looks.LINK}
                    onClick={() => closeModal(modalKey)}
                >{t("plugin.channelTabs.button.cancel")}</Button>
            </ModalFooter>
        </ModalRoot>
    );
}

function AddToFolderModal({ modalProps, modalKey, bookmarks, onSave }: {
    modalProps: any,
    modalKey: string,
    bookmarks: Bookmarks,
    onSave: (folderIndex: number) => void;
}) {
    const [folderIndex, setIndex] = useState(-1);

    return (
        <ModalRoot {...modalProps}>
            <ModalHeader>
                <BaseText size="lg" weight="semibold">{t("plugin.channelTabs.modal.add.title")}</BaseText>
            </ModalHeader>
            <ModalContent>
                <Heading className={Margins.top16}>{t("plugin.channelTabs.modal.add.select")}</Heading>
                <Select
                    options={[...Object.entries(bookmarks)
                        .filter(([, bookmark]) => isBookmarkFolder(bookmark))
                        .map(([index, bookmark]) => ({
                            label: bookmark.name,
                            value: parseInt(index, 10)
                        })),
                    {
                        label: t("plugin.channelTabs.modal.add.create"),
                        value: -1,
                        default: true
                    }]}
                    isSelected={v => v === folderIndex}
                    select={setIndex}
                    serialize={String}
                />
            </ModalContent>
            <ModalFooter>
                <Button
                    onClick={() => onSave(folderIndex)}
                >{t("plugin.channelTabs.button.save")}</Button>
                <Button
                    color={Button.Colors.TRANSPARENT}
                    look={Button.Looks.LINK}
                    onClick={() => closeModal(modalKey)}
                >{t("plugin.channelTabs.button.cancel")}</Button>
            </ModalFooter>
        </ModalRoot>
    );
}

function DeleteFolderConfirmationModal({ modalProps, modalKey, onConfirm }) {
    return (
        <ModalRoot {...modalProps}>
            <ModalHeader>
                <BaseText size="lg" weight="semibold">{t("plugin.channelTabs.modal.delete.title")}</BaseText>
            </ModalHeader>
            <ModalContent>
                <Paragraph className={Margins.top16}>
                    {t("plugin.channelTabs.modal.delete.description")}
                </Paragraph>
            </ModalContent>
            <ModalFooter>
                <Button
                    color={Button.Colors.RED}
                    onClick={onConfirm}
                >
                    {t("plugin.channelTabs.button.delete")}
                </Button>
                <Button
                    color={Button.Colors.TRANSPARENT}
                    look={Button.Looks.LINK}
                    onClick={() => closeModal(modalKey)}
                >
                    {t("plugin.channelTabs.button.cancel")}
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
            aria-label={t("plugin.channelTabs.context.bookmark")}
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
                        label={t("plugin.channelTabs.context.openAll")}
                        action={() => bookmark.bookmarks.forEach(b => createTab(b))}
                    />
                    : < Menu.MenuItem
                        id="open-in-tab"
                        label={t("plugin.channelTabs.context.openNew")}
                        action={() => createTab(bookmark)}
                    />
                }
            </Menu.MenuGroup>
            <Menu.MenuGroup>
                <Menu.MenuItem
                    id="edit-bookmark"
                    label={t("plugin.channelTabs.modal.edit.title")}
                    action={() => {
                        const key = openModal(modalProps =>
                            <EditModal
                                modalProps={modalProps}
                                modalKey={key}
                                bookmark={bookmark}
                                onSave={(name, color) => {
                                    methods.editBookmark(index, { name });
                                    if (color) methods.editBookmark(index, { iconColor: color });
                                    closeModal(key);
                                }
                                }
                            />
                        );
                    }}
                />
                <Menu.MenuItem
                    id="delete-bookmark"
                    label={t("plugin.channelTabs.bookmark.delete")}
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
                    label={t("plugin.channelTabs.modal.add.title")}
                    disabled={isFolder}
                    action={() => {
                        const key = openModal(modalProps =>
                            <AddToFolderModal
                                modalProps={modalProps}
                                modalKey={key}
                                bookmarks={bookmarks}
                                onSave={index => {
                                    if (index === -1) {
                                        const folderIndex = methods.addFolder();
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
                    label={t("plugin.channelTabs.context.bookmarkBar")}
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
            aria-label={t("plugin.channelTabs.context.tab")}
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
                    label={t("plugin.channelTabs.context.compact")}
                    action={() => {
                        setCompact(compact => !compact);
                        toggleCompactTab(tab.id);
                    }}
                />
            </Menu.MenuGroup>
            {openedTabs.length !== 1 && <Menu.MenuGroup>
                <Menu.MenuItem
                    id="close-tab"
                    label={t("plugin.channelTabs.context.close.tab")}
                    action={() => closeTab(tab.id)}
                />
                <Menu.MenuItem
                    id="close-other-tabs"
                    label={t("plugin.channelTabs.context.close.otherTabs")}
                    action={() => closeOtherTabs(tab.id)}
                />
                <Menu.MenuItem
                    id="close-right-tabs"
                    label={t("plugin.channelTabs.context.close.tabsToRight")}
                    disabled={openedTabs.indexOf(tab) === openedTabs.length - 1}
                    action={() => closeTabsToTheRight(tab.id)}
                />
                <Menu.MenuItem
                    id="close-left-tabs"
                    label={t("plugin.channelTabs.context.close.tabsToLeft")}
                    disabled={openedTabs.indexOf(tab) === 0}
                    action={() => closeTabsToTheLeft(tab.id)}
                />
                <Menu.MenuItem
                    id="reopen-closed-tab"
                    label={t("plugin.channelTabs.context.close.reopen")}
                    disabled={!hasClosedTabs()}
                    action={() => reopenClosedTab()}
                />
            </Menu.MenuGroup>}
            <Menu.MenuGroup>
                <Menu.MenuCheckboxItem
                    checked={showBookmarkBar}
                    id="show-bookmark-bar"
                    label={t("plugin.channelTabs.context.bookmarkBar")}
                    action={() => {
                        settings.store.showBookmarkBar = !settings.store.showBookmarkBar;
                    }}
                />
            </Menu.MenuGroup>
        </Menu.Menu>
    );
}
