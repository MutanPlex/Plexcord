/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2026 Vendicated and contributors
 * Copyright (c) 2026 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import "./styles.css";

import { ChatBarButton, ChatBarButtonFactory } from "@api/ChatButtons";
import { plugin, t } from "@api/i18n";
import { Button } from "@components/Button";
import ErrorBoundary from "@components/ErrorBoundary";
import { NotesIcon as DraftIcon } from "@components/Icons";
import type { Channel, RenderModalProps } from "@plexcord/discord-types";
import { PcDevs } from "@utils/constants";
import definePlugin from "@utils/types";
import { ChannelRouter, ChannelStore, closeModal, DraftStore, DraftType, GuildStore, lodash, Modal, openModal, TextInput, UserStore, useState, useStateFromStores } from "@webpack/common";

const modalKey = "pc-draftNavigator";

interface DraftEntry {
    channelId: string;
    name: string;
    location: string;
    content: string;
    timestamp: number;
    available: boolean;
}

interface DraftRowProps {
    draft: DraftEntry;
    onClose: () => void;
}

function getChannelDetails(channel: Channel | undefined, channelId: string) {
    // keeps drafts visible even when their channels arent loaded
    if (!channel) {
        return { name: t(plugin.draftNavigator.text.unknownChannel, { id: channelId }), location: t(plugin.draftNavigator.text.channelUnavailable) };
    }

    if (channel.isPrivate()) {
        const recipients = channel.recipients.map(id => {
            const user = UserStore.getUser(id);
            return user?.globalName || user?.username || id;
        }).join(", ");
        return {
            name: channel.name || recipients || t(plugin.draftNavigator.text.directMessage),
            location: channel.isGroupDM() ? t(plugin.draftNavigator.text.groupMessage) : t(plugin.draftNavigator.text.directMessage)
        };
    }

    const guild = GuildStore.getGuild(channel.guild_id);
    const parent = channel.parent_id ? ChannelStore.getChannel(channel.parent_id) : undefined;
    const location = [guild?.name || t(plugin.draftNavigator.text.server), parent?.name].filter(Boolean).join(" / ");
    return { name: `#${channel.name}`, location };
}

function getDrafts(): DraftEntry[] {
    const userId = UserStore.getCurrentUser()?.id;
    if (!userId) return [];
    const drafts: DraftEntry[] = [];
    const userDrafts = DraftStore.getState()[userId] ?? {};
    for (const [channelId, channelDrafts] of Object.entries(userDrafts)) {
        const draft = channelDrafts?.[DraftType.ChannelMessage];
        if (!draft?.draft.trim()) continue;
        const channel = ChannelStore.getChannel(channelId);
        const { name, location } = getChannelDetails(channel, channelId);
        drafts.push({ channelId, name, location, content: draft.draft, timestamp: draft.timestamp, available: !!channel });
    }

    return drafts.sort((a, b) => b.timestamp - a.timestamp || a.channelId.localeCompare(b.channelId));
}

function DraftRow({ draft, onClose }: DraftRowProps) {
    const preview = draft.content.length > 500 ? draft.content.slice(0, 500) + "…" : draft.content;

    function jump() {
        ChannelRouter.transitionToChannel(draft.channelId);
        onClose();
    }

    return (
        <li className="pc-draftNavigator-row">
            <div className="pc-draftNavigator-details">
                <div className="pc-draftNavigator-name">{draft.name}</div>
                <div className="pc-draftNavigator-location">{draft.location}</div>
                <p className="pc-draftNavigator-preview">{preview}</p>
            </div>
            <Button size="small" disabled={!draft.available} aria-label={t(plugin.draftNavigator.text.jumpTo, { name: draft.name })} onClick={jump}>
                {t(plugin.draftNavigator.text.jump)}
            </Button>
        </li>
    );
}

function DraftPanel(props: RenderModalProps) {
    const [search, setSearch] = useState("");
    const drafts = useStateFromStores([DraftStore, ChannelStore, GuildStore, UserStore], getDrafts, [], lodash.isEqual);
    const query = search.trim().toLocaleLowerCase();
    const results = query ? drafts.filter(draft =>
        [draft.name, draft.location, draft.content, draft.channelId].some(value => value.toLocaleLowerCase().includes(query))
    ) : drafts;
    const count = query
        ? t(plugin.draftNavigator.text.countFiltered, { shown: results.length, total: drafts.length })
        : t(drafts.length === 1 ? plugin.draftNavigator.text.countOne : plugin.draftNavigator.text.count, { count: drafts.length });
    const emptyMessage = drafts.length ? t(plugin.draftNavigator.text.noMatches) : t(plugin.draftNavigator.text.noDrafts);

    return (
        <Modal
            {...props}
            size="md"
            title={t(plugin.draftNavigator.text.title)}
            actions={[{ text: t(plugin.draftNavigator.text.close), variant: "secondary", onClick: props.onClose }]}
        >
            <div className="pc-draftNavigator-panel">
                <TextInput
                    autoFocus
                    aria-label={t(plugin.draftNavigator.text.searchLabel)}
                    placeholder={t(plugin.draftNavigator.text.searchPlaceholder)}
                    value={search}
                    onChange={setSearch}
                />
                <div className="pc-draftNavigator-count" role="status">
                    {count}
                </div>
                <ul className="pc-draftNavigator-list" aria-label={t(plugin.draftNavigator.text.listLabel)}>
                    {results.map(draft => <DraftRow key={draft.channelId} draft={draft} onClose={props.onClose} />)}
                </ul>
                {results.length === 0 ? <div className="pc-draftNavigator-empty">{emptyMessage}</div> : null}
            </div>
        </Modal>
    );
}

function openDraftNavigator() {
    openModal(props => <ErrorBoundary><DraftPanel {...props} /></ErrorBoundary>, { modalKey });
}

const DraftChatBarButton = ErrorBoundary.wrap<Parameters<ChatBarButtonFactory>[0]>(({ isAnyChat }) => {
    if (!isAnyChat) return null;
    return (
        <ChatBarButton tooltip={t(plugin.draftNavigator.text.title)} onClick={openDraftNavigator}>
            <DraftIcon width={20} height={20} />
        </ChatBarButton>
    );
}, { noop: true });

export default definePlugin({
    name: "DraftNavigator",
    description: () => t(plugin.draftNavigator.description),
    authors: [PcDevs.rot],
    tags: ["chat", "utility"],
    dependencies: ["ChatInputButtonAPI"],

    chatBarButton: {
        icon: DraftIcon,
        render: props => <DraftChatBarButton {...props} />
    },

    toolboxActions: () => ({
        [t(plugin.draftNavigator.text.open)]: openDraftNavigator
    }),

    settingsAboutComponent: ErrorBoundary.wrap(() => <Button onClick={openDraftNavigator}>{t(plugin.draftNavigator.text.open)}</Button>, { noop: true }),

    stop() {
        closeModal(modalKey);
    }
});
