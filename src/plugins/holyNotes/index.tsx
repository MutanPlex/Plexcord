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

import "./style.css";

import { NavContextMenuPatchCallback } from "@api/ContextMenu";
import * as DataStore from "@api/DataStore";
import { HeaderBarButton } from "@api/HeaderBar";
import { plugin, t } from "@api/i18n";
import { BookmarkIcon } from "@components/Icons";
import { Message } from "@plexcord/discord-types";
import { PcDevs } from "@utils/constants";
import { classNameFactory } from "@utils/css";
import { openModal } from "@utils/modal";
import definePlugin from "@utils/types";
import { findByCodeLazy, findComponentByCodeLazy, findCssClassesLazy } from "@webpack";
import { ChannelStore, Menu } from "@webpack/common";

import { NoteModal } from "./components/modals/Notebook";
import noteHandler, { noteHandlerCache } from "./NoteHandler";
import { DataStoreToCache, HolyNoteStore } from "./utils";

export const cl = classNameFactory("pc-notebook-");
export const CircleQuestionIcon = findComponentByCodeLazy("10.58l-3.3-3.3a1");
export const MessageRecord = findByCodeLazy("isEdited(){");
export const messageClasses = findCssClassesLazy("message", "groupStart", "cozyMessage");
export const resultsClasses = findCssClassesLazy("emptyResultsWrap", "emptyResultsContent", "errorImage", "emptyResultsText", "noResultsImage", "alt");
export const ChannelRecord = findByCodeLazy("computeLurkerPermissionsAllowList(){");

function HolyNotesButton() {
    return (
        <HeaderBarButton
            tooltip={t(plugin.holyNotes.button.tooltip)}
            icon={BookmarkIcon}
            onClick={() => openModal(props => <NoteModal {...props} />)}
        />
    );
}

const messageContextMenuPatch: NavContextMenuPatchCallback = (children, { message }: { message: Message; }) => {
    children.push(
        <Menu.MenuItem label={t(plugin.holyNotes.button.noteMessage)} id="note-message">
            {Object.keys(noteHandler.getAllNotes()).map(notebook => (
                <Menu.MenuItem
                    key={notebook}
                    label={notebook}
                    id={notebook}
                    action={() => noteHandler.addNote(message, notebook)}
                />
            ))}
        </Menu.MenuItem>
    );
};

export let ChannelMessage;

export default definePlugin({
    name: "HolyNotes",
    description: () => t(plugin.holyNotes.description),
    authors: [PcDevs.Wolfie, PcDevs.MutanPlex],
    tags: ["organisation", "chat", "utility"],
    dependencies: ["HeaderBarAPI", "MessagePopoverAPI", "ChatInputButtonAPI"],

    headerBarButton: {
        icon: BookmarkIcon,
        render: HolyNotesButton,
        priority: 600
    },

    patches: [
        {
            find: "Message must not be a thread starter message",
            replacement: [
                {
                    // Grab the channel message component to render saved notes
                    match: /(?<=(\i)=\i\.memo\(function\(\i\)\{.{0,400}\.THREAD_STARTER_MESSAGE.*?bg-flash-.{0,10}:\i\}\);)/,
                    replace: "$self.ChannelMessage=$1;"
                },
            ],
        }
    ],
    set ChannelMessage(value: any) {
        ChannelMessage = value;
    },

    toolboxActions: () => ({
        [t(plugin.holyNotes.toolbox.action)]: async () => {
            openModal(props => <NoteModal {...props} />);
        }
    }),

    contextMenus: {
        message: messageContextMenuPatch
    },

    async start() {
        const keys = await DataStore.keys(HolyNoteStore);
        if (!keys.includes("Main")) {
            noteHandler.newNoteBook("Main");
            return;
        }
        if (!noteHandlerCache.has("Main")) await DataStoreToCache();
    },

    messagePopoverButton: {
        icon: BookmarkIcon,
        render(message) {
            return {
                label: t(plugin.holyNotes.button.save),
                icon: BookmarkIcon,
                message,
                channel: ChannelStore.getChannel(message.channel_id),
                onClick: () => noteHandler.addNote(message, "Main")
            };
        }
    }
});
