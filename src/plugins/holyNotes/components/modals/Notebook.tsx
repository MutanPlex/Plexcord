/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2024 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { t } from "@api/i18n";
import { BaseText } from "@components/BaseText";
import ErrorBoundary from "@components/ErrorBoundary";
import HelpIcon from "@plugins/holyNotes/components/icons/HelpIcon";
import noteHandler from "@plugins/holyNotes/NoteHandler";
import { HolyNotes } from "@plugins/holyNotes/types";
import { classes } from "@utils/misc";
import { ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalProps, ModalRoot, ModalSize, openModal } from "@utils/modal";
import { findByProps } from "@webpack";
import { ContextMenuApi, Flex, FluxDispatcher, Menu, React, TextInput } from "@webpack/common";

import Errors from "./Error";
import HelpModal from "./HelpModal";
import ManageNotebookButton from "./ManageNotebookButton";
import { CreateTabBar } from "./NoteBookTab";
import { RenderMessage } from "./RenderMessage";

const renderNotebook = ({
    notes, notebook, updateParent, sortDirection, sortType, searchInput, closeModal
}: {
    notes: Record<string, HolyNotes.Note>;
    notebook: string;
    updateParent: () => void;
    sortDirection: boolean;
    sortType: boolean;
    searchInput: string;
    closeModal: () => void;
}) => {
    const messageArray = Object.values(notes).map(note => (
        <RenderMessage
            key={`${notebook}-${note.id}`}
            note={note}
            notebook={notebook}
            updateParent={updateParent}
            fromDeleteModal={false}
            closeModal={closeModal}
        />
    ));

    if (sortType)
        messageArray.sort(
            (a, b) =>
                new Date(b.props.note?.timestamp)?.getTime() - new Date(a.props.note?.timestamp)?.getTime(),
        );

    if (sortDirection) messageArray.reverse();

    const filteredMessages = messageArray.filter(message =>
        message.props.note?.content?.toLowerCase().includes(searchInput.toLowerCase()),
    );

    return filteredMessages.length > 0 ? filteredMessages : <Errors />;
};



export const NoteModal = (props: ModalProps & { onClose: () => void; }) => {
    const [sortType, setSortType] = React.useState(true);
    const [searchInput, setSearch] = React.useState("");
    const [sortDirection, setSortDirection] = React.useState(true);
    const [currentNotebook, setCurrentNotebook] = React.useState("Main");

    const { quickSelect, quickSelectLabel, quickSelectQuick, quickSelectValue, quickSelectArrow } = findByProps("quickSelect");

    const forceUpdate = React.useReducer(() => ({}), {})[1] as () => void;

    const handleTabChange = React.useCallback((newNotebook: string) => {
        setCurrentNotebook(newNotebook);
        setSearch("");
        setSortType(true);
        setSortDirection(true);
        forceUpdate();
    }, [forceUpdate]);

    const notes = noteHandler.getNotes(currentNotebook);
    if (!notes) return <></>;

    const { TabBar, selectedTab } = CreateTabBar({ tabs: noteHandler.getAllNotes(), firstSelectedTab: currentNotebook, onChangeTab: handleTabChange });

    return (
        <ErrorBoundary>
            <ModalRoot {...props} className={classes("pc-notebook")} size={ModalSize.LARGE}>
                <Flex className={classes("pc-notebook-flex")} direction={Flex.Direction.VERTICAL} style={{ width: "100%" }}>
                    <div className={classes("pc-notebook-top-section")}>
                        <ModalHeader className={classes("pc-notebook-header-main")}>
                            <BaseText size="lg" weight="semibold" style={{ flexGrow: 1 }} className={classes("pc-notebook-heading")}>
                                {t("plugin.holyNotes.modal.notebook.title")}
                            </BaseText>
                            <div className={classes("pc-notebook-flex", "pc-help-icon")} onClick={() => openModal(HelpModal)}>
                                <HelpIcon />
                            </div>
                            <div style={{ marginBottom: "10px" }} className={classes("pc-notebook-search")}>
                                <TextInput
                                    autoFocus={false}
                                    placeholder={t("plugin.holyNotes.modal.notebook.search")}
                                    onChange={e => setSearch(e)}
                                />
                            </div>
                            <ModalCloseButton onClick={props.onClose} />
                        </ModalHeader>
                        <div className={classes("pc-notebook-tabbar-container")}>
                            {TabBar}
                        </div>
                    </div>
                    <ModalContent style={{ marginTop: "20px" }}>
                        <ErrorBoundary>
                            {renderNotebook({
                                notes,
                                notebook: currentNotebook,
                                updateParent: () => forceUpdate(),
                                sortDirection: sortDirection,
                                sortType: sortType,
                                searchInput: searchInput,
                                closeModal: props.onClose,
                            })}
                        </ErrorBoundary>
                    </ModalContent>
                </Flex>
                <ModalFooter>
                    <ManageNotebookButton notebook={currentNotebook} setNotebook={handleTabChange} />
                    <div className={classes("sort-button-container", "pc-notebook-display-left")}>
                        <Flex
                            align={Flex.Align.CENTER}
                            className={quickSelect}
                            onClick={(event: React.MouseEvent<HTMLDivElement>) => {
                                ContextMenuApi.openContextMenu(event, () => (
                                    <Menu.Menu
                                        navId="sort-menu"
                                        onClose={() => FluxDispatcher.dispatch({ type: "CONTEXT_MENU_CLOSE" })}
                                        aria-label={t("plugin.holyNotes.modal.notebook.label")}
                                    >
                                        <Menu.MenuItem
                                            label={t("plugin.holyNotes.modal.notebook.ada")}
                                            id="ada"
                                            action={() => {
                                                setSortDirection(true);
                                                setSortType(true);
                                            }} /><Menu.MenuItem
                                            label={t("plugin.holyNotes.modal.notebook.amd")}
                                            id="amd"
                                            action={() => {
                                                setSortDirection(true);
                                                setSortType(false);
                                            }} /><Menu.MenuItem
                                            label={t("plugin.holyNotes.modal.notebook.dda")}
                                            id="dda"
                                            action={() => {
                                                setSortDirection(false);
                                                setSortType(true);
                                            }} /><Menu.MenuItem
                                            label={t("plugin.holyNotes.modal.notebook.dmd")}
                                            id="dmd"
                                            action={() => {
                                                setSortDirection(false);
                                                setSortType(false);
                                            }} />
                                    </Menu.Menu>

                                ));
                            }}
                        >
                            <BaseText className={quickSelectLabel}>{t("plugin.holyNotes.modal.notebook.change")}:</BaseText>
                            <Flex grow={0} align={Flex.Align.CENTER} className={quickSelectQuick}>
                                <BaseText className={quickSelectValue}>
                                    {sortDirection ? t("plugin.holyNotes.modal.notebook.ascending") : t("plugin.holyNotes.modal.notebook.descending")} /{" "}
                                    {sortType ? t("plugin.holyNotes.modal.notebook.dateAdded") : t("plugin.holyNotes.modal.notebook.messageDate")}
                                </BaseText>
                                <div className={quickSelectArrow} />
                            </Flex>
                        </Flex>
                    </div>
                </ModalFooter>
            </ModalRoot>
        </ErrorBoundary>
    );
};
