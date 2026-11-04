/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2023 Vendicated and contributors
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
import { plugin, t } from "@api/i18n";
import { addMessagePreSendListener, MessageSendListener, removeMessagePreSendListener } from "@api/MessageEvents";
import { isPluginEnabled } from "@api/PluginManager";
import { definePluginSettings, Settings } from "@api/Settings";
import { MessageFlags } from "@plexcord/discord-types/enums";
import { Devs, PcDevs } from "@utils/constants";
import definePlugin, { IconComponent, OptionType } from "@utils/types";
import { React, useEffect } from "@webpack/common";

const SETTINGS_KEYS: "silent"[] = ["silent"];

const settings = definePluginSettings({
    persistState: {
        label: () => t(plugin.silentMessageToggle.option.persistState.label),
        description: () => t(plugin.silentMessageToggle.option.persistState.description),
        type: OptionType.SELECT,
        options: [
            { label: () => t(plugin.silentMessageToggle.option.persistState.none), value: "none", default: true },
            { label: () => t(plugin.silentMessageToggle.option.persistState.channels), value: "channels" },
            { label: () => t(plugin.silentMessageToggle.option.persistState.restarts), value: "restarts" }
        ],
        onChange(newValue: string) {
            if (newValue === "none") settings.store.silent = false;
        }
    },
    autoDisable: {
        label: () => t(plugin.silentMessageToggle.option.autoDisable.label),
        description: () => t(plugin.silentMessageToggle.option.autoDisable.description),
        type: OptionType.BOOLEAN,
        default: true
    }
}).withPrivateSettings<{ silent?: boolean; }>();

export function takeSilentFlag() {
    if (
        !isPluginEnabled("SilentMessageToggle")
        || Settings.uiElements.chatBarButtons.SilentMessageToggle?.enabled === false
        || !settings.store.silent
    ) return 0;

    if (settings.store.autoDisable) settings.store.silent = false;
    return MessageFlags.SUPPRESS_NOTIFICATIONS;
}

function SilentMessageDisabledIcon() {
    return (
        <SilentMessageIcon>
            <mask id="pc-silent-msg-mask">
                <path fill="#fff" d="M0 0h24v24H0Z" />
                <path stroke="#000" strokeWidth="5.99068" d="M0 24 24 0" />
            </mask>
            <path fill="var(--status-danger)" d="m21.178 1.70703 1.414 1.414L4.12103 21.593l-1.414-1.415L21.178 1.70703Z" />
        </SilentMessageIcon>
    );
}

const SilentMessageIcon: IconComponent = ({ height = 20, width = 20, className, children }) => {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 24 24"
            className={className}
            style={{ scale: "1.2" }}
        >
            <path fill="currentColor" mask="url(#pc-silent-msg-mask)" d="M18 10.7101C15.1085 9.84957 13 7.17102 13 4c0-.30736.0198-.6101.0582-.907C12.7147 3.03189 12.3611 3 12 3 8.686 3 6 5.686 6 9v5c0 1.657-1.344 3-3 3v1h18v-1c-1.656 0-3-1.343-3-3v-3.2899ZM8.55493 19c.693 1.19 1.96897 2 3.44497 2s2.752-.81 3.445-2H8.55493ZM18.2624 5.50209 21 2.5V1h-4.9651v1.49791h2.4411L16 5.61088V7h5V5.50209h-2.7376Z" />
            {children}
        </svg>
    );
};

const SilentMessageToggle: ChatBarButtonFactory = ({ channel, isMainChat }) => {
    const { silent } = settings.use(SETTINGS_KEYS);

    useEffect(() => {
        if (isMainChat && settings.store.persistState === "none") settings.store.silent = false;
    }, [channel.id, isMainChat]);

    useEffect(() => {
        if (!isMainChat || !silent) return;

        const listener: MessageSendListener = (_, message) => {
            if (takeSilentFlag() && !/^@silent(\s|$)/.test(message.content)) message.content = "@silent " + message.content;
        };

        addMessagePreSendListener(listener);
        return () => void removeMessagePreSendListener(listener);
    }, [isMainChat, silent]);

    if (!isMainChat) return null;

    return (
        <ChatBarButton
            tooltip={silent ? t(plugin.silentMessageToggle.tooltip.disable) : t(plugin.silentMessageToggle.tooltip.enable)}
            onClick={() => settings.store.silent = !silent}
        >
            {silent ? <SilentMessageIcon /> : <SilentMessageDisabledIcon />}
        </ChatBarButton>
    );
};

export default definePlugin({
    name: "SilentMessageToggle",
    description: () => t(plugin.silentMessageToggle.description),
    authors: [Devs.Nuckyz, Devs.CatNoir, PcDevs.Z1xus],
    tags: ["chat", "utility"],
    dependencies: ["ChatInputButtonAPI", "MessageEventsAPI"],
    settings,

    patches: [
        {
            find: "Voice message recording is not supported on this client",
            replacement: {
                match: /(?<=flags:\i\.\i\.IS_VOICE_MESSAGE)/,
                replace: "|$self.takeSilentFlag()"
            }
        }
    ],

    takeSilentFlag,

    chatBarButton: {
        icon: SilentMessageIcon,
        render: SilentMessageToggle
    },

    start() {
        if (settings.store.persistState !== "restarts") settings.store.silent = false;
    }
});
