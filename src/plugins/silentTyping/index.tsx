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

import { ChatBarButton, ChatBarButtonFactory } from "@api/ChatButtons";
import { ApplicationCommandInputType, ApplicationCommandOptionType, findOption, sendBotMessage } from "@api/Commands";
import { findGroupChildrenByChildId, NavContextMenuPatchCallback } from "@api/ContextMenu";
import { plugin, t } from "@api/i18n";
import { plugins } from "@api/PluginManager";
import { definePluginSettings } from "@api/Settings";
import { openPluginModal } from "@components/settings/tabs/plugins/PluginModal";
import { Channel } from "@plexcord/discord-types";
import { Devs, PcDevs } from "@utils/constants";
import definePlugin, { IconComponent, OptionType } from "@utils/types";
import { ChannelStore, FluxDispatcher, Menu, React } from "@webpack/common";

const settings = definePluginSettings({
    enabledGlobally: {
        label: () => t(plugin.silentTyping.option.enabledGlobally.label),
        description: () => t(plugin.silentTyping.option.enabledGlobally.description),
        type: OptionType.BOOLEAN,
        default: true,
    },
    hideChatBoxTypingIndicators: {
        label: () => t(plugin.silentTyping.option.hideChatBoxTypingIndicators.label),
        description: () => t(plugin.silentTyping.option.hideChatBoxTypingIndicators.description),
        type: OptionType.BOOLEAN,
        default: false,
    },
    hideMembersListTypingIndicators: {
        label: () => t(plugin.silentTyping.option.hideMembersListTypingIndicators.label),
        description: () => t(plugin.silentTyping.option.hideMembersListTypingIndicators.description),
        type: OptionType.BOOLEAN,
        default: false,
    },
    chatIcon: {
        label: () => t(plugin.silentTyping.option.chatIcon.label),
        description: () => t(plugin.silentTyping.option.chatIcon.description),
        type: OptionType.BOOLEAN,
        default: true,
    },
    chatIconLeftClickAction: {
        label: () => t(plugin.silentTyping.option.chatIconLeftClickAction.label),
        description: () => t(plugin.silentTyping.option.chatIconLeftClickAction.description),
        type: OptionType.SELECT,
        options: [
            { label: () => t(plugin.silentTyping.option.chatIconLeftClickAction.global), value: "global" },
            { label: () => t(plugin.silentTyping.option.chatIconLeftClickAction.channel), value: "channel", default: true },
            { label: () => t(plugin.silentTyping.option.chatIconLeftClickAction.guild), value: "guild" },
            { label: () => t(plugin.silentTyping.option.chatIconLeftClickAction.settings), value: "settings" }
        ],
    },
    chatIconMiddleClickAction: {
        label: () => t(plugin.silentTyping.option.chatIconMiddleClickAction.label),
        description: () => t(plugin.silentTyping.option.chatIconMiddleClickAction.description),
        type: OptionType.SELECT,
        options: [
            { label: () => t(plugin.silentTyping.option.chatIconMiddleClickAction.global), value: "global" },
            { label: () => t(plugin.silentTyping.option.chatIconMiddleClickAction.channel), value: "channel" },
            { label: () => t(plugin.silentTyping.option.chatIconMiddleClickAction.guild), value: "guild" },
            { label: () => t(plugin.silentTyping.option.chatIconMiddleClickAction.settings), value: "settings", default: true }
        ],
    },
    chatIconRightClickAction: {
        label: () => t(plugin.silentTyping.option.chatIconRightClickAction.label),
        description: () => t(plugin.silentTyping.option.chatIconRightClickAction.description),
        type: OptionType.SELECT,
        options: [
            { label: () => t(plugin.silentTyping.option.chatIconRightClickAction.global), value: "global", default: true },
            { label: () => t(plugin.silentTyping.option.chatIconRightClickAction.channel), value: "channel" },
            { label: () => t(plugin.silentTyping.option.chatIconRightClickAction.guild), value: "guild" },
            { label: () => t(plugin.silentTyping.option.chatIconRightClickAction.settings), value: "settings" }
        ],
    },
    chatContextMenu: {
        label: () => t(plugin.silentTyping.option.chatContextMenu.label),
        description: () => t(plugin.silentTyping.option.chatContextMenu.description),
        type: OptionType.BOOLEAN,
        default: true
    },
    defaultHidden: {
        label: () => t(plugin.silentTyping.option.defaultHidden.label),
        description: () => t(plugin.silentTyping.option.defaultHidden.description),
        type: OptionType.BOOLEAN,
        default: true,
    },
    enabledLocations: {
        label: () => t(plugin.silentTyping.option.enabledLocations.label),
        description: () => t(plugin.silentTyping.option.enabledLocations.description),
        type: OptionType.STRING,
        default: "",
    },
    disabledLocations: {
        label: () => t(plugin.silentTyping.option.disabledLocations.label),
        description: () => t(plugin.silentTyping.option.disabledLocations.description),
        type: OptionType.STRING,
        default: "",
    },
});

function toggleGlobal(): void {
    settings.store.enabledGlobally = !settings.store.enabledGlobally;
}

function toggleLocation(locationId: string, effectiveList: string[], defaultHidden: boolean): void {
    if (effectiveList.includes(locationId)) {
        effectiveList.splice(effectiveList.indexOf(locationId), 1);
    } else {
        effectiveList.push(locationId);
    }

    if (defaultHidden) {
        settings.store.disabledLocations = effectiveList.join(", ");
    } else {
        settings.store.enabledLocations = effectiveList.join(", ");
    }
}

function SilentTypingDisabledIcon() {
    return (
        <SilentTypingIcon>
            <mask id="pc-silent-typing-mask">
                <path fill="#fff" d="M0 0h24v24H0Z" />
                <path stroke="#000" strokeWidth="5.99068" d="M0 24 24 0" transform="translate(-2, -3)" />
            </mask>
            <path fill="var(--status-danger)" d="m21.178 1.70703 1.414 1.414L4.12103 21.593l-1.414-1.415L21.178 1.70703Z" />
        </SilentTypingIcon>
    );
}

const SilentTypingIcon: IconComponent = ({ height = 20, width = 20, className, children }) => {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 24 24"
            className={className}
            style={{ scale: "1.2" }}
        >
            <path fill="currentColor" mask="url(#pc-silent-typing-mask)" d="M18.333 15.556H1.667a1.667 1.667 0 0 1 -1.667 -1.667v-10a1.667 1.667 0 0 1 1.667 -1.667h16.667a1.667 1.667 0 0 1 1.667 1.667v10a1.667 1.667 0 0 1 -1.667 1.667M4.444 6.25V4.861a0.417 0.417 0 0 0 -0.417 -0.417H2.639a0.417 0.417 0 0 0 -0.417 0.417V6.25a0.417 0.417 0 0 0 0.417 0.417h1.389a0.417 0.417 0 0 0 0.417 -0.417m3.333 0V4.861a0.417 0.417 0 0 0 -0.417 -0.417H5.973a0.417 0.417 0 0 0 -0.417 0.417V6.25a0.417 0.417 0 0 0 0.417 0.417h1.389a0.417 0.417 0 0 0 0.417 -0.417m3.333 0V4.861a0.417 0.417 0 0 0 -0.417 -0.417h-1.389a0.417 0.417 0 0 0 -0.417 0.417V6.25a0.417 0.417 0 0 0 0.417 0.417h1.389a0.417 0.417 0 0 0 0.417 -0.417m3.333 0V4.861a0.417 0.417 0 0 0 -0.417 -0.417h-1.389a0.417 0.417 0 0 0 -0.417 0.417V6.25a0.417 0.417 0 0 0 0.417 0.417h1.389a0.417 0.417 0 0 0 0.417 -0.417m3.333 0V4.861a0.417 0.417 0 0 0 -0.417 -0.417h-1.389a0.417 0.417 0 0 0 -0.417 0.417V6.25a0.417 0.417 0 0 0 0.417 0.417h1.389a0.417 0.417 0 0 0 0.417 -0.417m-11.667 3.333V8.194a0.417 0.417 0 0 0 -0.417 -0.417H4.306a0.417 0.417 0 0 0 -0.417 0.417V9.583a0.417 0.417 0 0 0 0.417 0.417h1.389a0.417 0.417 0 0 0 0.417 -0.417m3.333 0V8.194a0.417 0.417 0 0 0 -0.417 -0.417H7.639a0.417 0.417 0 0 0 -0.417 0.417V9.583a0.417 0.417 0 0 0 0.417 0.417h1.389a0.417 0.417 0 0 0 0.417 -0.417m3.333 0V8.194a0.417 0.417 0 0 0 -0.417 -0.417h-1.389a0.417 0.417 0 0 0 -0.417 0.417V9.583a0.417 0.417 0 0 0 0.417 0.417h1.389a0.417 0.417 0 0 0 0.417 -0.417m3.333 0V8.194a0.417 0.417 0 0 0 -0.417 -0.417h-1.389a0.417 0.417 0 0 0 -0.417 0.417V9.583a0.417 0.417 0 0 0 0.417 0.417h1.389a0.417 0.417 0 0 0 0.417 -0.417m-11.667 3.333v-1.389a0.417 0.417 0 0 0 -0.417 -0.417H2.639a0.417 0.417 0 0 0 -0.417 0.417V12.917a0.417 0.417 0 0 0 0.417 0.417h1.389a0.417 0.417 0 0 0 0.417 -0.417m10 0v-1.389a0.417 0.417 0 0 0 -0.417 -0.417H5.973a0.417 0.417 0 0 0 -0.417 0.417V12.917a0.417 0.417 0 0 0 0.417 0.417h8.056a0.417 0.417 0 0 0 0.417 -0.417m3.333 0v-1.389a0.417 0.417 0 0 0 -0.417 -0.417h-1.389a0.417 0.417 0 0 0 -0.417 0.417V12.917a0.417 0.417 0 0 0 0.417 0.417h1.389a0.417 0.417 0 0 0 0.417 -0.417" transform="translate(2, 3)" />
            {children}
        </svg>
    );
};

const SilentTypingChatToggle: ChatBarButtonFactory = ({ channel, type }) => {
    const {
        enabledGlobally,
        chatIcon,
        defaultHidden
    } = settings.use([
        "enabledGlobally",
        "chatIcon",
        "defaultHidden"
    ]);

    const validChat = ["normal", "sidebar"].some(x => type.analyticsName === x);

    if (!validChat || !chatIcon) return null;

    const effectiveList = getEffectiveList();
    const enabledLocally = enabledGlobally && checkEnabled(channel);
    const location = channel.guild_id && effectiveList.includes(channel.guild_id) ? "Guild" : effectiveList.includes(channel.id) ? "Channel" : "Global";

    const tooltip = enabledGlobally ? (
        enabledLocally ? t(plugin.silentTyping.tooltip.hidden, { location }) : t(plugin.silentTyping.tooltip.visible, { location })
    ) : t(plugin.silentTyping.tooltip.global);

    function performAction(action: string): void {
        switch (action) {
            case "global":
                toggleGlobal();
                break;
            case "channel":
                toggleLocation(channel.id, effectiveList, defaultHidden);
                break;
            case "guild":
                channel.guild_id ? toggleLocation(channel.guild_id, effectiveList, defaultHidden) : null;
                break;
            case "settings":
                openPluginModal(plugins.SilentTyping);
                break;
        }
    }

    return (
        <ChatBarButton
            tooltip={tooltip}
            onClick={e => {
                if (e.button === 0) {
                    performAction(settings.store.chatIconLeftClickAction);
                }
            }}
            onAuxClick={e => {
                if (e.button === 1) {
                    performAction(settings.store.chatIconMiddleClickAction);
                }
            }}
            onContextMenu={e => {
                if (e.button === 2) {
                    performAction(settings.store.chatIconRightClickAction);
                }
            }}
        >
            {enabledLocally ? <SilentTypingDisabledIcon /> : <SilentTypingIcon />}
        </ChatBarButton>
    );
};

function getEffectiveList(): string[] {
    if (settings.store.defaultHidden) {
        if (!settings.store.disabledLocations) {
            settings.store.disabledLocations = "";
            return [];
        } else {
            return settings.store.disabledLocations.split(",").map(x => x.trim()).filter(Boolean);
        }
    } else {
        if (!settings.store.enabledLocations) {
            settings.store.enabledLocations = "";
            return [];
        } else {
            return settings.store.enabledLocations.split(",").map(x => x.trim()).filter(Boolean);
        }
    }
}

function checkEnabled(channel: string | Channel): boolean {
    if (!settings.store.enabledGlobally) return false;

    const channelId = typeof channel === "string" ? channel : channel.id;
    const guildId = typeof channel === "string" ? ChannelStore.getChannel(channelId)?.guild_id : channel.guild_id;
    const effectiveChannels = getEffectiveList();

    if (settings.store.defaultHidden) {
        return !effectiveChannels.includes(guildId) && !effectiveChannels.includes(channelId);
    } else {
        return effectiveChannels.includes(guildId) || effectiveChannels.includes(channelId);
    }
}

const ChatBarContextCheckbox: NavContextMenuPatchCallback = children => {
    const {
        chatIcon,
        chatContextMenu,
        enabledGlobally,
        defaultHidden
    } = settings.use([
        "chatIcon",
        "chatContextMenu",
        "enabledGlobally",
        "defaultHidden"
    ]);

    if (!chatContextMenu) return;

    const group = findGroupChildrenByChildId("submit-button", children as (React.ReactElement | null | undefined)[]);

    if (!group) return;

    const idx = group.findIndex(c => c?.props?.id === "submit-button");

    group.splice(idx >= 0 ? idx : 0, 0,
        <Menu.MenuItem id="pc-silent-typing" label="Silent Typing">
            <Menu.MenuCheckboxItem id="pc-silent-typing-enabled" label="Enabled" checked={enabledGlobally}
                action={() => settings.store.enabledGlobally = !settings.store.enabledGlobally} />
            <Menu.MenuCheckboxItem id="pc-silent-typing-chat-bar-indicators" label="Chat Bar Indicators" checked={settings.store.hideChatBoxTypingIndicators}
                action={() => settings.store.hideChatBoxTypingIndicators = !settings.store.hideChatBoxTypingIndicators} />
            <Menu.MenuCheckboxItem id="pc-silent-typing-members-list-indicators" label="Members List Indicators" checked={settings.store.hideMembersListTypingIndicators}
                action={() => settings.store.hideMembersListTypingIndicators = !settings.store.hideMembersListTypingIndicators} />
            <Menu.MenuCheckboxItem id="pc-silent-typing-chat-icon" label="Chat Icon" checked={chatIcon}
                action={() => settings.store.chatIcon = !settings.store.chatIcon} />
            <Menu.MenuCheckboxItem id="pc-silent-typing-default" label="Default Hidden" checked={defaultHidden}
                action={() => settings.store.defaultHidden = !settings.store.defaultHidden} />
        </Menu.MenuItem>
    );
};

function shouldHideChatBarTypingIndicators(): boolean {
    const { hideChatBoxTypingIndicators } = settings.use(["hideChatBoxTypingIndicators"]);
    return hideChatBoxTypingIndicators;
}

function shouldHideMembersListTypingIndicators(): boolean {
    const { hideMembersListTypingIndicators } = settings.use(["hideMembersListTypingIndicators"]);
    return hideMembersListTypingIndicators;
}

export default definePlugin({
    name: "SilentTyping",
    description: () => t(plugin.silentTyping.description),
    authors: [Devs.Ven, Devs.Rini, Devs.ImBanana, PcDevs.Etorix],
    dependencies: ["ChatInputButtonAPI"],
    settings,

    shouldHideChatBarTypingIndicators,
    shouldHideMembersListTypingIndicators,

    contextMenus: {
        "textarea-context": ChatBarContextCheckbox
    },

    chatBarButton: {
        icon: SilentTypingIcon,
        render: SilentTypingChatToggle
    },

    patches: [
        {
            find: '.dispatch({type:"TYPING_START_LOCAL"',
            replacement: {
                match: /startTyping\(\i\){.+?},stop/,
                replace: "startTyping:$self.startTyping,stop"
            }
        },
        {
            find: "activityInviteEducationActivity:",
            group: true,
            replacement: [
                {
                    match: /(let{activityInviteEducationActivity)/,
                    replace: "const silentTypingShouldHideChatBarTypingIndicators=$self.shouldHideChatBarTypingIndicators();$1"
                },
                {
                    match: /(typingDots,ref:\i,children:)(\[.{0,340}?}\)\])/,
                    replace: "$1silentTypingShouldHideChatBarTypingIndicators?[]:$2"
                }
            ]
        },
        {
            find: ",{avatarCutoutX",
            replacement: {
                match: /isTyping:(\i)=!1(,typingIndicatorRef:\i,isSpeaking:)/,
                replace: "silentTypingIsTyping:$1=$self.shouldHideMembersListTypingIndicators()?false:(arguments[0].isTyping??false)$2"
            }
        },
    ],

    commands: [{
        name: "silent-typing",
        description: () => t(plugin.silentTyping.description),
        inputType: ApplicationCommandInputType.BUILT_IN,

        options: [
            {
                name: "toggle",
                description: () => t(plugin.silentTyping.command.silentTyping.toggle.description),
                required: false,
                type: ApplicationCommandOptionType.STRING,
                choices: [
                    { name: t(plugin.silentTyping.command.silentTyping.toggle.global), label: t(plugin.silentTyping.command.silentTyping.toggle.global), value: "global" },
                    { name: t(plugin.silentTyping.command.silentTyping.toggle.channel), label: t(plugin.silentTyping.command.silentTyping.toggle.channel), value: "channel" },
                    { name: t(plugin.silentTyping.command.silentTyping.toggle.guild), label: t(plugin.silentTyping.command.silentTyping.toggle.guild), value: "guild" },
                ]
            },
            {
                name: "chat-bar-indicators",
                description: () => t(plugin.silentTyping.command.silentTyping.chatBarIndicator.description),
                required: false,
                type: ApplicationCommandOptionType.BOOLEAN,
            },
            {
                name: "members-list-indicators",
                description: () => t(plugin.silentTyping.command.silentTyping.membersListIndicator.description),
                required: false,
                type: ApplicationCommandOptionType.BOOLEAN,
            },
            {
                name: "chat-icon",
                description: () => t(plugin.silentTyping.command.silentTyping.chatIcon.description),
                required: false,
                type: ApplicationCommandOptionType.BOOLEAN,
            },
            {
                name: "chat-context-menu",
                description: () => t(plugin.silentTyping.command.silentTyping.chatContextMenu.description),
                required: false,
                type: ApplicationCommandOptionType.BOOLEAN,
            },
            {
                name: "default-hidden",
                description: () => t(plugin.silentTyping.command.silentTyping.defaultHidden.description),
                required: false,
                type: ApplicationCommandOptionType.BOOLEAN,
            }
        ],

        execute: async (args, ctx) => {
            let updated = false;
            const location = findOption(args, "toggle");

            if (typeof location === "string") {
                updated = true;

                if (location === "global") {
                    toggleGlobal();
                } else {
                    const locationId = location === "guild" ? ctx.channel.guild_id : ctx.channel.id;
                    toggleLocation(locationId, getEffectiveList(), settings.store.defaultHidden);
                }
            }

            const updateChatIcon = findOption(args, "chat-icon");

            if (typeof updateChatIcon === "boolean") {
                updated = true;
                settings.store.chatIcon = !!updateChatIcon;
            }

            const updateChatContextMenu = findOption(args, "chat-context-menu");

            if (typeof updateChatContextMenu === "boolean") {
                updated = true;
                settings.store.chatContextMenu = !!updateChatContextMenu;
            }

            const updateDefaultHidden = findOption(args, "default-hidden");

            if (typeof updateDefaultHidden === "boolean") {
                updated = true;
                settings.store.defaultHidden = !!updateDefaultHidden;
            }

            sendBotMessage(ctx.channel.id, {
                content: updated ? t(plugin.silentTyping.content.updated) : t(plugin.silentTyping.content.noChanges),
            });
        },
    }],

    async startTyping(channelId: string) {
        if (checkEnabled(channelId)) return;
        FluxDispatcher.dispatch({ type: "TYPING_START_LOCAL", channelId });
    }
});
