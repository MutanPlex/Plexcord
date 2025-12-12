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
import { Message } from "@plexcord/discord-types";
import { PcDevs } from "@utils/constants";
import { openModal } from "@utils/modal";
import definePlugin from "@utils/types";
import { findByCodeLazy } from "@webpack";
import { ChannelStore, Menu } from "@webpack/common";

import { Popover as NoteButtonPopover, Popover } from "./components/icons/NoteButton";
import { NoteModal } from "./components/modals/Notebook";
import noteHandler, { noteHandlerCache } from "./NoteHandler";
import { DataStoreToCache, HolyNoteStore } from "./utils";

export const MessageType = findByCodeLazy("isEdited(){");

function HolyNotesButton() {
    return (
        <HeaderBarButton
            tooltip={t(plugin.holyNotes.button.tooltip)}
            icon={Popover}
            onClick={() => openModal(props => <NoteModal {...props} />)}
        />
    );
}

const messageContextMenuPatch: NavContextMenuPatchCallback = async (children, { message }: { message: Message; }) => {
    children.push(
        <Menu.MenuItem label={t(plugin.holyNotes.button.addNote)} id="add-message-to-note">
            {Object.keys(noteHandler.getAllNotes()).map((notebook: string, index: number) => (
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

export default definePlugin({
    name: "HolyNotes",
    description: () => t(plugin.holyNotes.description),
    authors: [PcDevs.Wolfie, PcDevs.MutanPlex],
    dependencies: ["HeaderBarAPI", "MessagePopoverAPI", "ChatInputButtonAPI"],

    headerBarButton: {
        icon: Popover,
        render: HolyNotesButton,
        priority: 600
    },
    toolboxActions: () => ({
        [t(plugin.holyNotes.toolbox.action)]: async () => {
            openModal(props => <NoteModal {...props} />);
        }
    }),

    contextMenus: {
        "message": messageContextMenuPatch
    },

    async start() {
        if (await DataStore.keys(HolyNoteStore).then(keys => !keys.includes("Main"))) return noteHandler.newNoteBook("Main");
        if (!noteHandlerCache.has("Main")) await DataStoreToCache();
    },

    messagePopoverButton: {
        icon: NoteButtonPopover,
        render(message) {
            return {
                label: t(plugin.holyNotes.button.save),
                icon: NoteButtonPopover,
                message,
                channel: ChannelStore.getChannel(message.channel_id),
                onClick: () => noteHandler.addNote(message, "Main")
            };
        }
    }
});
