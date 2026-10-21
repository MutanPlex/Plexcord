/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2022 Vendicated and contributors
 * Copyright (c) 2026 MutanPlex
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

import "./styles.css";

import { ApplicationCommandInputType, ApplicationCommandOptionType, findOption, registerCommand, sendBotMessage, unregisterCommand } from "@api/Commands";
import { plugin, t } from "@api/i18n";
import { Devs, PcDevs } from "@utils/constants";
import { sendMessage } from "@utils/discord";
import definePlugin from "@utils/types";
import { FluxDispatcher, MessageActions, PendingReplyStore } from "@webpack/common";

import { openCreateTagModal } from "./CreateTagModal";
import { getTag, getTags, removeTag, settings, Tag } from "./settings";

const CustomCommandsMarker = Symbol("CustomCommands");
const ArgumentRegex = /{{(.+?)}}/g;

export function parseTagArguments(message: string) {
    const args = [] as { name: string, defaultValue: string | null; }[];

    for (const [, value] of message.matchAll(ArgumentRegex)) {
        const [name, defaultValue] = value.split("=").map(s => s.trim());

        if (!name) continue;
        if (args.some(arg => arg.name === name)) continue;

        args.push({ name: name.toLowerCase(), defaultValue: defaultValue ?? null });
    }

    return args;
}

export function registerTagCommand(tag: Tag) {
    const tagArguments = parseTagArguments(tag.message);

    registerCommand({
        name: tag.name,
        description: tag.name,
        inputType: ApplicationCommandInputType.BUILT_IN,
        options: [
            ...tagArguments.map(arg => ({
                name: arg.name,
                description: arg.name,
                type: ApplicationCommandOptionType.STRING,
                required: arg.defaultValue === null
            })),
            {
                name: "ephemeral",
                description: () => t(plugin.customCommands.command.ephemeral),
                type: ApplicationCommandOptionType.BOOLEAN,
                required: false
            }
        ],

        execute: async (args, { channel }) => {
            const ephemeral = findOption(args, "ephemeral", false);

            const response = tag.message
                .replace(ArgumentRegex, (fullMatch, value: string) => {
                    const [argName, defaultValue] = value.split("=").map(s => s.trim());
                    return findOption(args, argName, null) ?? defaultValue ?? fullMatch;
                })
                .replaceAll("\\n", "\n");

            const doSend = ephemeral ? sendBotMessage : sendMessage;
            doSend(channel.id, { content: response }, false, MessageActions.getSendMessageOptionsForReply(PendingReplyStore.getPendingReply(channel.id)));
            FluxDispatcher.dispatch({ type: "DELETE_PENDING_REPLY", channelId: channel.id });
        },
        [CustomCommandsMarker]: true,
    }, "CustomCommands");
}

export default definePlugin({
    name: "CustomCommands",
    description: () => t(plugin.customCommands.description),
    dependencies: ["CommandsAPI"],
    searchTerms: ["MessageTags"],
    authors: [Devs.Ven, Devs.Luna, PcDevs.MutanPlex],
    tags: ["commands", "customisation", "utility"],
    settings,

    start() {
        getTags().forEach(registerTagCommand);
    },

    stop() {
        getTags().forEach(tag => unregisterCommand(tag.name));
    },

    commands: [
        {
            name: "tags",
            description: () => t(plugin.customCommands.command.tags),
            inputType: ApplicationCommandInputType.BUILT_IN,
            options: [
                {
                    name: "create",
                    description: () => t(plugin.customCommands.command.create),
                    type: ApplicationCommandOptionType.SUB_COMMAND,
                },
                {
                    name: "list",
                    description: () => t(plugin.customCommands.command.list),
                    type: ApplicationCommandOptionType.SUB_COMMAND,
                    options: []
                },
                {
                    name: "delete",
                    description: () => t(plugin.customCommands.command.delete),
                    type: ApplicationCommandOptionType.SUB_COMMAND,
                    options: [
                        {
                            name: "tag-name",
                            description: () => t(plugin.customCommands.command.tagName),
                            type: ApplicationCommandOptionType.STRING,
                            required: true
                        }
                    ]
                },
            ],

            async execute(args, ctx) {
                switch (args[0].name) {
                    case "create": {
                        openCreateTagModal();
                        break;
                    }

                    case "delete": {
                        const name: string = findOption(args[0].options, "tag-name", "");

                        if (!getTag(name))
                            return sendBotMessage(ctx.channel.id, {
                                content: t(plugin.customCommands.text.aTagWithThe, { name })
                            });

                        removeTag(name);

                        sendBotMessage(ctx.channel.id, {
                            content: t(plugin.customCommands.text.successfullyDeletedTheTag, { name })
                        });

                        break;
                    }

                    case "list": {
                        const content = getTags()
                            .map(tag => `\`${tag.name}\`: ${tag.message.slice(0, 72).replaceAll("\\n", " ")}${tag.message.length > 72 ? "..." : ""}`)
                            .join("\n");

                        sendBotMessage(ctx.channel.id, {
                            content: content || t(plugin.customCommands.text.noTagsYet),
                        });

                        break;
                    }
                }
            }
        }
    ]
});
