/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2024 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { plugin, t } from "@api/i18n";
import { BaseText } from "@components/BaseText";
import { Button } from "@components/Button";
import { Flex } from "@components/Flex";
import { InfoIcon } from "@components/Icons";
import { Link } from "@components/index";
import { User } from "@plexcord/discord-types";
import { clearMessagesIDB, DBMessageRecord, deleteMessageIDB, deleteMessagesBulkIDB } from "@plugins/messageLoggerEnhanced/db";
import { cl, settings } from "@plugins/messageLoggerEnhanced/index";
import { LoggedMessage, LoggedMessageJSON } from "@plugins/messageLoggerEnhanced/types";
import { messageJsonToMessageClass } from "@plugins/messageLoggerEnhanced/utils";
import { importLogs } from "@plugins/messageLoggerEnhanced/utils/settingsUtils";
import { copyWithToast, openUserProfile } from "@utils/discord";
import { closeAllModals, ModalContent, ModalFooter, ModalHeader, ModalProps, ModalRoot, ModalSize, openModal } from "@utils/modal";
import { LazyComponent } from "@utils/react";
import { find, findByCode, findByCodeLazy } from "@webpack";
import { Alerts, ChannelStore, ContextMenuApi, FluxDispatcher, GuildStore, Menu, NavigationRouter, React, TabBar, TextInput, Tooltip, useMemo, useRef, useState } from "@webpack/common";

import { useMessages } from "./hooks";

export interface MessagePreviewProps {
    className: string;
    author: User;
    message: LoggedMessage;
    compact: boolean;
    isGroupStart: boolean;
    hideSimpleEmbedContent: boolean;

    childrenAccessories: any;
}

export interface ChildrenAccProops {
    channelMessageProps: {
        compact: boolean;
        channel: any;
        message: LoggedMessage;
        groupId: string;
        id: string;
        isLastItem: boolean;
        isHighlight: boolean;
        renderContentOnly: boolean;
    };
    hasSpoilerEmbeds: boolean;
    isInteracting: boolean;
    isAutomodBlockedMessage: boolean;
    showClydeAiEmbeds: boolean;
}

const PrivateChannelRecord = findByCodeLazy(".is_message_request_timestamp,");
const MessagePreview = LazyComponent<MessagePreviewProps>(() => find(m => m?.type?.toString().includes("previewLinkTarget:") && !m?.type?.toString().includes("HAS_THREAD")));
const ChildrenAccessories = LazyComponent<ChildrenAccProops>(() => findByCode("channelMessageProps:{message:"));

export enum LogTabs {
    DELETED = "DELETED",
    EDITED = "EDITED",
    GHOST_PING = "GHOST_PING"
}

interface Props {
    modalProps: ModalProps;
    initalQuery?: string;
}

export function LogsModal({ modalProps, initalQuery }: Props) {
    const [currentTab, setCurrentTab] = useState(LogTabs.DELETED);
    const [queryEh, setQuery] = useState(initalQuery ?? "");
    const [sortNewest, setSortNewest] = useState(settings.store.sortNewest);
    const [numDisplayedMessages, setNumDisplayedMessages] = useState(settings.store.messagesToDisplayAtOnceInLogs);
    const contentRef = useRef<HTMLDivElement | null>(null);

    const { messages, total, statusTotal, pending, reset } = useMessages(queryEh, currentTab, sortNewest, numDisplayedMessages);

    return (
        <ModalRoot className={cl("modal-root")} {...modalProps} size={ModalSize.LARGE}>
            <ModalHeader className={cl("modal-header")}>
                <TextInput value={queryEh} onChange={e => setQuery(e)} style={{ width: "100%" }} placeholder={t(plugin.messageLoggerEnhanced.modal.title)} />
                <TabBar
                    type="top"
                    look="brand"
                    className={cl("modal-tab-bar")}
                    selectedItem={currentTab}
                    onItemSelect={e => {
                        setCurrentTab(e);
                        setNumDisplayedMessages(settings.store.messagesToDisplayAtOnceInLogs);
                        contentRef.current?.firstElementChild?.scrollTo(0, 0);
                    }}
                >
                    <TabBar.Item
                        className={cl("modal-tab-bar-item")}
                        id={LogTabs.DELETED}
                    >
                        {t(plugin.messageLoggerEnhanced.modal.deleted)}
                    </TabBar.Item>
                    <TabBar.Item
                        className={cl("modal-tab-bar-item")}
                        id={LogTabs.EDITED}
                    >
                        {t(plugin.messageLoggerEnhanced.modal.edited)}
                    </TabBar.Item>
                    <TabBar.Item
                        className={cl("modal-tab-bar-item")}
                        id={LogTabs.GHOST_PING}
                    >
                        {t(plugin.messageLoggerEnhanced.modal.ghostPing)}
                    </TabBar.Item>
                </TabBar>
            </ModalHeader>
            <div style={{ opacity: modalProps.transitionState === 1 ? "1" : "0" }} className={cl("modal-content-container")} ref={contentRef}>
                {
                    modalProps.transitionState === 1 &&
                    <ModalContent
                        className={cl("modal-content")}
                    >
                        {messages != null && total === 0 && (
                            <EmptyLogs
                                hasQuery={queryEh.length !== 0}
                                reset={reset}
                            />
                        )}

                        {!pending && messages != null && (
                            <LogsContentMemo
                                visibleMessages={messages}
                                canLoadMore={messages.length < statusTotal && messages.length >= settings.store.messagesToDisplayAtOnceInLogs}
                                tab={currentTab}
                                sortNewest={sortNewest}
                                reset={reset}
                                handleLoadMore={() => setNumDisplayedMessages(e => e + settings.store.messagesToDisplayAtOnceInLogs)}
                            />
                        )}
                    </ModalContent>
                }
            </div>
            <ModalFooter className={cl("footer")}>
                <Button
                    variant="dangerPrimary"
                    onClick={() => Alerts.show({
                        title: t(plugin.messageLoggerEnhanced.alert.clearLogs.title),
                        body: t(plugin.messageLoggerEnhanced.alert.clearLogs.body),
                        confirmText: t(plugin.messageLoggerEnhanced.alert.clearLogs.confirmText),
                        // @ts-expect-error not typed
                        confirmVariant: "critical-primary",
                        cancelText: t(plugin.messageLoggerEnhanced.alert.clearLogs.cancel),
                        onConfirm: async () => {
                            await clearMessagesIDB();
                            reset();
                        }

                    })}
                >
                    {t(plugin.messageLoggerEnhanced.button.clearLogs)}
                </Button>
                <Button
                    style={{ marginRight: "16px" }}
                    variant="secondary"
                    disabled={messages?.length === 0}
                    onClick={() => Alerts.show({
                        title: t(plugin.messageLoggerEnhanced.alert.clearVisibleLogs.title),
                        body: t(plugin.messageLoggerEnhanced.alert.clearVisibleLogs.body, { messages: messages.length }),
                        confirmText: t(plugin.messageLoggerEnhanced.alert.clearVisibleLogs.confirmText),
                        // @ts-expect-error not typed
                        confirmVariant: "critical-primary",
                        cancelText: t(plugin.messageLoggerEnhanced.alert.clearVisibleLogs.cancel),
                        onConfirm: async () => {
                            await deleteMessagesBulkIDB(messages.map(e => e.message_id));
                            reset();
                        }
                    })}
                >
                    {t(plugin.messageLoggerEnhanced.button.clearVisibleLogs)}
                </Button>
                <Link
                    style={{ marginRight: "1rem" }}
                    onClick={() => {
                        setSortNewest(e => {
                            const val = !e;
                            settings.store.sortNewest = val;
                            return val;
                        });
                        contentRef.current?.firstElementChild?.scrollTo(0, 0);
                    }}
                >
                    {sortNewest ? t(plugin.messageLoggerEnhanced.button.sortOldest) : t(plugin.messageLoggerEnhanced.button.sortNewest)}
                </Link>
            </ModalFooter>
        </ModalRoot>
    );
}

interface LogContentProps {
    sortNewest: boolean;
    tab: LogTabs;
    visibleMessages: DBMessageRecord[];
    canLoadMore: boolean;
    reset: () => void;
    handleLoadMore: () => void;
}

function LogsContent({ visibleMessages, canLoadMore, sortNewest, tab, reset, handleLoadMore }: LogContentProps) {
    if (visibleMessages.length === 0)
        return <NoResults tab={tab} />;

    return (
        <div className={cl("modal-content-inner")}>
            {visibleMessages
                .map(({ message }, i) => (
                    <LMessage
                        key={message.id}
                        log={{ message }}
                        reset={reset}
                        isGroupStart={isGroupStart(message, visibleMessages[i - 1]?.message, sortNewest)}
                    />
                ))}
            {
                canLoadMore &&
                <Button
                    style={{ marginTop: "1rem", width: "100%" }}
                    size="small" onClick={() => handleLoadMore()}
                >
                    {t(plugin.messageLoggerEnhanced.button.loadMore)}
                </Button>
            }
        </div>
    );
}

const LogsContentMemo = LazyComponent(() => React.memo(LogsContent));

function NoResults({ tab }: { tab: LogTabs; }) {
    const getTabLabel = (tab: LogTabs) => {
        switch (tab) {
            case LogTabs.DELETED:
                return t(plugin.messageLoggerEnhanced.modal.deleted);
            case LogTabs.EDITED:
                return t(plugin.messageLoggerEnhanced.modal.edited);
            case LogTabs.GHOST_PING:
                return t(plugin.messageLoggerEnhanced.modal.ghostPing);
            default:
                return "";
        }
    };

    const generateSuggestedTabs = (tab: LogTabs) => {
        switch (tab) {
            case LogTabs.DELETED:
                return { nextTab: getTabLabel(LogTabs.EDITED), lastTab: getTabLabel(LogTabs.GHOST_PING) };
            case LogTabs.EDITED:
                return { nextTab: getTabLabel(LogTabs.GHOST_PING), lastTab: getTabLabel(LogTabs.DELETED) };
            case LogTabs.GHOST_PING:
                return { nextTab: getTabLabel(LogTabs.DELETED), lastTab: getTabLabel(LogTabs.EDITED) };
            default:
                return { nextTab: "", lastTab: "" };
        }
    };

    const { nextTab, lastTab } = generateSuggestedTabs(tab);

    return (
        <div className={cl("modal-empty-logs", "modal-content-inner")} style={{ textAlign: "center" }}>
            <BaseText size="lg" weight="normal">
                {t(plugin.messageLoggerEnhanced.button.noResults, { tab: getTabLabel(tab) })}
            </BaseText>
            <BaseText size="lg" weight="normal" style={{ marginTop: "0.2rem" }}>
                {t(plugin.messageLoggerEnhanced.button.tryOtherTabs, { nextTab, lastTab })}
            </BaseText>
        </div>
    );
}

function EmptyLogs({ hasQuery, reset: forceUpdate }: { hasQuery: boolean; reset: () => void; }) {
    return (
        <div className={cl("modal-empty-logs", "modal-content-inner")} style={{ textAlign: "center" }}>
            <Flex flexDirection="column" style={{ position: "relative" }}>

                <BaseText size="lg" weight="normal">
                    {t(plugin.messageLoggerEnhanced.modal.empty)}
                </BaseText>

                {!hasQuery && (
                    <>
                        <Tooltip text={t(plugin.messageLoggerEnhanced.modal.importLogs)}>
                            {({ onMouseEnter, onMouseLeave }) => (
                                <div
                                    className={cl("modal-info-icon")}
                                    onMouseEnter={onMouseEnter}
                                    onMouseLeave={onMouseLeave}
                                >
                                    <InfoIcon />
                                </div>
                            )}
                        </Tooltip>

                        <Button onClick={() => importLogs().then(() => forceUpdate())}>
                            {t(plugin.messageLoggerEnhanced.button.importLogs)}
                        </Button>
                    </>
                )}
            </Flex>
        </div>
    );

}

interface LMessageProps {
    log: { message: LoggedMessageJSON; };
    isGroupStart: boolean,
    reset: () => void;
}
function LMessage({ log, isGroupStart, reset, }: LMessageProps) {
    const message = useMemo(() => messageJsonToMessageClass(log), [log]);

    if (!message) return null;

    const channel = ChannelStore.getChannel(message?.channel_id);
    const guild = GuildStore.getGuild(channel?.guild_id);

    return (
        <div
            onContextMenu={e => {
                ContextMenuApi.openContextMenu(e, () =>
                    <Menu.Menu
                        navId="message-logger"
                        onClose={() => FluxDispatcher.dispatch({ type: "CONTEXT_MENU_CLOSE" })}
                        aria-label={t(plugin.messageLoggerEnhanced.context.title)}
                    >

                        <Menu.MenuItem
                            key="jump-to-message"
                            id="jump-to-message"
                            label={t(plugin.messageLoggerEnhanced.context.jumpToMessage)}
                            action={() => {
                                NavigationRouter.transitionTo(`/channels/${ChannelStore.getChannel(message.channel_id)?.guild_id ?? "@me"}/${message.channel_id}${message.id ? "/" + message.id : ""}`);
                                closeAllModals();
                            }}
                        />
                        <Menu.MenuItem
                            key="open-user-profile"
                            id="open-user-profile"
                            label={t(plugin.messageLoggerEnhanced.context.openUserProfile)}
                            action={() => {
                                closeAllModals();
                                openUserProfile(message.author.id);
                            }}
                        />

                        <Menu.MenuItem
                            key="copy-content"
                            id="copy-content"
                            label={t(plugin.messageLoggerEnhanced.context.copyContent)}
                            action={() => copyWithToast(message.content)}
                        />

                        <Menu.MenuItem
                            key="copy-user-id"
                            id="copy-user-id"
                            label={t(plugin.messageLoggerEnhanced.context.copyUserId)}
                            action={() => copyWithToast(message.author.id)}
                        />

                        <Menu.MenuItem
                            key="copy-message-id"
                            id="copy-message-id"
                            label={t(plugin.messageLoggerEnhanced.context.copyMessageId)}
                            action={() => copyWithToast(message.id)}
                        />

                        <Menu.MenuItem
                            key="copy-channel-id"
                            id="copy-channel-id"
                            label={t(plugin.messageLoggerEnhanced.context.copyChannelId)}
                            action={() => copyWithToast(message.channel_id)}
                        />

                        {
                            log.message.guildId != null
                            && (
                                <Menu.MenuItem
                                    key="copy-server-id"
                                    id="copy-server-id"
                                    label={t(plugin.messageLoggerEnhanced.context.copyServerId)}
                                    action={() => copyWithToast(log.message.guildId!)}
                                />
                            )
                        }

                        <Menu.MenuItem
                            key="delete-log"
                            id="delete-log"
                            label={t(plugin.messageLoggerEnhanced.context.deleteLog)}
                            color="danger"
                            action={() =>
                                deleteMessageIDB(log.message.id).then(() => reset())
                            }
                        />

                    </Menu.Menu>
                );
            }}>
            <MessagePreview
                className={`${cl("modal-msg-preview")} ${message.deleted ? "messagelogger-deleted" : ""}`}
                author={message.author}
                message={message}
                compact={false}
                isGroupStart={isGroupStart}
                hideSimpleEmbedContent={false}

                childrenAccessories={
                    <ChildrenAccessories
                        channelMessageProps={{
                            channel: ChannelStore.getChannel(message.channel_id) || new PrivateChannelRecord({ id: "" }),
                            message,
                            compact: false,
                            groupId: "1",
                            id: message.id,
                            isLastItem: false,
                            isHighlight: false,
                            renderContentOnly: false,
                        }}
                        hasSpoilerEmbeds={false}
                        isInteracting={false}
                        showClydeAiEmbeds={true}
                        isAutomodBlockedMessage={false}
                    />
                }
            />
            {settings.store.showWhereMessageIsFrom && channel?.isDM() && message?.author && (
                <span className={`${cl("modal-from")} ${message.deleted ? cl("modal-from-deleted") : cl("modal-from-edited")}`}>{t(plugin.messageLoggerEnhanced.context.fromUsernameDm, { username: message.author.username })}</span>
            )}
            {settings.store.showWhereMessageIsFrom && channel?.isGroupDM() && channel?.name && (
                <span className={`${cl("modal-from")} ${message.deleted ? cl("modal-from-deleted") : cl("modal-from-edited")}`}>{t(plugin.messageLoggerEnhanced.context.fromGroupDm, { channelName: channel.name })}</span>
            )}
            {settings.store.showWhereMessageIsFrom && !channel?.isDM() && !channel?.isGroupDM() && channel?.name && guild?.name && (
                <span className={`${cl("modal-from")} ${message.deleted ? cl("modal-from-deleted") : cl("modal-from-edited")}`}>{t(plugin.messageLoggerEnhanced.context.fromServerChannel, { channelName: channel.name, serverName: guild.name })}</span>
            )}
        </div>
    );
}

export const openLogModal = (initalQuery?: string) => openModal(modalProps => <LogsModal modalProps={modalProps} initalQuery={initalQuery} />);

function isGroupStart(
    currentMessage: LoggedMessageJSON | undefined,
    previousMessage: LoggedMessageJSON | undefined,
    sortNewest: boolean
) {
    if (!currentMessage || !previousMessage) return true;

    if (currentMessage.id === previousMessage.id) return true;

    const [newestMessage, oldestMessage] = sortNewest
        ? [previousMessage, currentMessage]
        : [currentMessage, previousMessage];

    if (newestMessage.author.id !== oldestMessage.author.id) return true;

    const timeDifferenceInMinutes = Math.abs(
        (new Date(newestMessage.timestamp)?.getTime() - new Date(oldestMessage.timestamp)?.getTime()) / (1000 * 60)
    );

    return timeDifferenceInMinutes >= 5;
}
