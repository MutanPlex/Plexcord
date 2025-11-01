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

import { ApplicationCommandInputType, ApplicationCommandOptionType, findOption, registerCommand, sendBotMessage, unregisterCommand } from "@api/Commands";
import { t } from "@api/i18n";
import { definePluginSettings } from "@api/Settings";
import { Devs } from "@utils/constants";
import definePlugin, { OptionType } from "@utils/types";

const EMOTE = "<:luna:1035316192220553236>";
const MessageTagsMarker = Symbol("MessageTags");

interface Tag {
    name: string;
    message: string;
}

function getTags() {
    return settings.store.tagsList;
}

function getTag(name: string) {
    return settings.store.tagsList[name] ?? null;
}

function addTag(tag: Tag) {
    settings.store.tagsList[tag.name] = tag;
}

function removeTag(name: string) {
    delete settings.store.tagsList[name];
}

function createTagCommand(tag: Tag) {
    registerCommand({
        name: tag.name,
        description: tag.name,
        inputType: ApplicationCommandInputType.BUILT_IN_TEXT,
        execute: async (_, ctx) => {
            if (!getTag(tag.name)) {
                sendBotMessage(ctx.channel.id, {
                    author: { username: "Plexcord" },
                    content: `${EMOTE} ${t("plugin.messageTags.notExist", { tagname: tag.name })}`
                });
                return { content: `/${tag.name}` };
            }

            if (settings.store.clyde) sendBotMessage(ctx.channel.id, {
                author: { username: "Plexcord" },
                content: `${EMOTE} ${t("plugin.messageTags.sentTag", { tagname: tag.name })}`
            });
            return { content: tag.message.replaceAll("\\n", "\n") };
        },
        [MessageTagsMarker]: true,
    }, "CustomTags");
}

const settings = definePluginSettings({
    clyde: {
        get label() {
            return t("plugin.messageTags.option.clyde.label");
        },
        get description() {
            return t("plugin.messageTags.option.clyde.description");
        },
        type: OptionType.BOOLEAN,
        default: true
    },
    tagsList: {
        get label() {
            return t("plugin.messageTags.option.tagsList.label");
        },
        get description() {
            return t("plugin.messageTags.option.tagsList.description");
        },
        type: OptionType.CUSTOM,
        default: {} as Record<string, Tag>
    }
});

export default definePlugin({
    name: "MessageTags",
    description: "Allows you to save messages and to use them with a simple command.",
    authors: [Devs.Luna],
    settings,

    get displayDescription() {
        return t("plugin.messageTags.description");
    },

    async start() {
        const tags = getTags();
        for (const tagName in tags) {
            createTagCommand(tags[tagName]);
        }
    },

    commands: [
        {
            name: "tag create",
            description: "Create a new tag",
            get displayDescription() {
                return t("plugin.messageTags.command.tags.option.create.description");
            },
            inputType: ApplicationCommandInputType.BUILT_IN,
            options: [
                {
                    name: "tag-name",
                    description: "The name of the tag to trigger the response",
                    get displayDescription() {
                        return t("plugin.messageTags.command.tags.option.create.name");
                    },
                    type: ApplicationCommandOptionType.STRING,
                    required: true
                },
                {
                    name: "message",
                    description: "The message that you will send when using this tag",
                    get displayDescription() {
                        return t("plugin.messageTags.command.tags.option.create.message");
                    },
                    type: ApplicationCommandOptionType.STRING,
                    required: true
                }
            ],
            execute: async (args, ctx) => {
                const name: string = findOption(args, "tag-name", "");
                const message: string = findOption(args, "message", "");

                if (getTag(name))
                    return sendBotMessage(ctx.channel.id, {
                        author: { username: "Plexcord" },
                        content: `${EMOTE} ${t("plugin.messageTags.alreadyExist", { tagname: name })}`
                    });

                const tag = {
                    name: name,
                    message: message
                };

                createTagCommand(tag);
                addTag(tag);

                sendBotMessage(ctx.channel.id, {
                    author: { username: "Plexcord" },
                    content: `${EMOTE} ${t("plugin.messageTags.successCreate", { tagname: name })}`
                });
            }
        },
        {
            name: "tag list",
            description: "List all tags from yourself",
            get displayDescription() {
                return t("plugin.messageTags.command.tags.option.list.description");
            },
            inputType: ApplicationCommandInputType.BUILT_IN,
            options: [],
            execute: async (_, ctx) => {
                sendBotMessage(ctx.channel.id, {
                    author: { username: "Plexcord" },
                    embeds: [
                        {
                            title: t("plugin.messageTags.allTags"),
                            description: Object.values(getTags())
                                .map(tag => `\`${tag.name}\`: ${tag.message.slice(0, 72).replaceAll("\\n", " ")}${tag.message.length > 72 ? "..." : ""}`)
                                .join("\n") || `${EMOTE} ${t("plugin.messageTags.noTags")}`,
                            // @ts-expect-error
                            color: 0xd77f7f,
                            type: "rich",
                        }
                    ]
                });
            }
        },
        {
            name: "tag delete",
            description: "Remove a tag from yourself",
            get displayDescription() {
                return t("plugin.messageTags.command.tags.option.delete.description");
            },
            inputType: ApplicationCommandInputType.BUILT_IN,
            options: [
                {
                    name: "tag-name",
                    description: "The name of the tag to remove",
                    get displayDescription() {
                        return t("plugin.messageTags.command.tags.option.delete.name");
                    },
                    type: ApplicationCommandOptionType.STRING,
                    required: true
                }
            ],
            execute: async (args, ctx) => {
                const name: string = findOption(args, "tag-name", "");

                if (!getTag(name))
                    return sendBotMessage(ctx.channel.id, {
                        author: { username: "Plexcord" },
                        content: `${EMOTE} ${t("plugin.messageTags.noDeleteTag", { tagname: name })}`
                    });

                unregisterCommand(name);
                removeTag(name);

                sendBotMessage(ctx.channel.id, {
                    author: { username: "Plexcord" },
                    content: `${EMOTE} ${t("plugin.messageTags.successDelete", { name })}`
                });
            }
        },
        {
            name: "tag preview",
            description: "Preview a tag without sending it publicly",
            get displayDescription() {
                return t("plugin.messageTags.command.tags.option.preview.description");
            },
            inputType: ApplicationCommandInputType.BUILT_IN,
            options: [
                {
                    name: "tag-name",
                    description: "The name of the tag to preview",
                    get displayDescription() {
                        return t("plugin.messageTags.command.tags.option.preview.name");
                    },
                    type: ApplicationCommandOptionType.STRING,
                    required: true
                }
            ],
            execute: async (args, ctx) => {
                const name: string = findOption(args, "tag-name", "");
                const tag = getTag(name);

                if (!tag)
                    return sendBotMessage(ctx.channel.id, {
                        author: { username: "Plexcord" },
                        content: `${EMOTE} ${t("plugin.messageTags.tagPreview", { name })}`
                    });

                sendBotMessage(ctx.channel.id, {
                    content: tag.message.replaceAll("\\n", "\n")
                });
            }
        }
    ]
});
