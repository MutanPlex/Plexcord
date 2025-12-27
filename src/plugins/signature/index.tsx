/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2024 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { ChatBarButton, ChatBarButtonFactory } from "@api/ChatButtons";
import { ApplicationCommandInputType, ApplicationCommandOptionType, findOption, sendBotMessage } from "@api/Commands";
import { findGroupChildrenByChildId, NavContextMenuPatchCallback } from "@api/ContextMenu";
import { plugin, t } from "@api/i18n";
import { addMessagePreSendListener, removeMessagePreSendListener } from "@api/MessageEvents";
import { definePluginSettings } from "@api/Settings";
import { Devs, PcDevs } from "@utils/constants";
import definePlugin, { IconComponent, OptionType } from "@utils/types";
import { Menu, React } from "@webpack/common";

// Big thank you too slientTyping

function SignatureDisabledIcon() {
    return (
        <SignatureIcon>
            <mask id="signature-msg-mask">
                <path fill="#fff" d="M0 0h24v24H0Z" />
                <path stroke="#000" strokeWidth="5.99068" d="M0 24 24 0" />
            </mask>
            <path fill="var(--status-danger)" d="m21.178 1.70703 1.414 1.414L4.12103 21.593l-1.414-1.415L21.178 1.70703Z" />
        </SignatureIcon>
    );
}

const SignatureIcon: IconComponent = ({ height = 20, width = 20, className, children }) => {
    return (
        <svg
            width={width}
            height={height}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 21.333"
            className={className}
        >
            <path fill="currentColor" mask="url(#signature-msg-mask)" d="M2 4.621a.5.5 0 0 1 .854-.353l6.01 6.01c.126.126.17.31.15.487a2 2 0 1 0 1.751-1.751a.59.59 0 0 1-.487-.15l-6.01-6.01A.5.5 0 0 1 4.62 2H11a9 9 0 0 1 8.468 12.054l2.24 2.239a1 1 0 0 1 0 1.414l-4 4a1 1 0 0 1-1.415 0l-2.239-2.239A9 9 0 0 1 2 11z" />
            {children}
        </svg>
    );
};

const settings = definePluginSettings(
    {
        name: {
            label: () => t(plugin.signature.option.name.label),
            description: () => t(plugin.signature.option.name.description),
            type: OptionType.STRING,
            default: "a chronic discord user"
        },
        textHeader: {
            label: () => t(plugin.signature.option.textHeader.label),
            description: () => t(plugin.signature.option.textHeader.description),
            type: OptionType.STRING,
            default: ">",
        },
        showIcon: {
            label: () => t(plugin.signature.option.showIcon.label),
            description: () => t(plugin.signature.option.showIcon.description),
            type: OptionType.BOOLEAN,
            default: true,
            restartNeeded: true,
        },
        contextMenu: {
            label: () => t(plugin.signature.option.contextMenu.label),
            description: () => t(plugin.signature.option.contextMenu.description),
            type: OptionType.BOOLEAN,
            default: true
        },
        isEnabled: {
            label: () => t(plugin.signature.option.isEnabled.label),
            description: () => t(plugin.signature.option.isEnabled.description),
            type: OptionType.BOOLEAN,
            default: true,
        },
    });

const SignatureToggle: ChatBarButtonFactory = ({ isMainChat }) => {
    const { isEnabled, showIcon } = settings.use(["isEnabled", "showIcon"]);
    const toggle = () => settings.store.isEnabled = !settings.store.isEnabled;

    if (!isMainChat || !showIcon) return null;

    return (
        <ChatBarButton
            tooltip={isEnabled ? t(plugin.signature.tooltip.disable) : t(plugin.signature.tooltip.enable)}
            onClick={toggle}
        >
            {isEnabled ? <SignatureIcon /> : <SignatureDisabledIcon />}
        </ChatBarButton>
    );
};

const handleMessage = ((channelId, msg) => {
    if (!settings.store.isEnabled) {
        msg.content = msg.content;
    } else {
        msg.content = textProcessing(msg.content);
    }
});

const ChatBarContextCheckbox: NavContextMenuPatchCallback = children => {
    const { isEnabled, contextMenu } = settings.use(["isEnabled", "contextMenu"]);
    if (!contextMenu) return;

    const group = findGroupChildrenByChildId("submit-button", children);

    if (!group) return;

    const idx = group.findIndex(c => c?.props?.id === "submit-button");

    group.splice(idx + 1, 0,
        <Menu.MenuCheckboxItem
            id="pc-Signature"
            label={t(plugin.signature.context.enable)}
            checked={isEnabled}
            action={() => settings.store.isEnabled = !settings.store.isEnabled}
        />
    );
};

export default definePlugin({
    name: "Signature",
    description: () => t(plugin.signature.description),
    authors: [Devs.Ven, Devs.Rini, Devs.ImBanana, PcDevs.KrystalSkull, PcDevs.MutanPlex],
    dependencies: ["MessageEventsAPI", "ChatInputButtonAPI"],

    chatBarButton: {
        icon: SignatureIcon,
        render: SignatureToggle
    },

    start: () => {
        if (settings.store.isEnabled) true;
        addMessagePreSendListener(handleMessage);
    },
    stop: () => {
        if (settings.store.isEnabled) false;
        removeMessagePreSendListener(handleMessage);

    },

    settings,

    contextMenus: {
        "textarea-context": ChatBarContextCheckbox
    },

    commands: [{
        name: "Signature",
        description: () => t(plugin.signature.command.signature.description),
        inputType: ApplicationCommandInputType.BUILT_IN,
        options: [
            {
                name: "value",
                description: () => t(plugin.signature.command.signature.toogle),
                required: false,
                type: ApplicationCommandOptionType.BOOLEAN,
            },
        ],
        execute: async (args, ctx) => {
            settings.store.isEnabled = !!findOption(args, "value", !settings.store.isEnabled);
            sendBotMessage(ctx.channel.id, {
                author: {
                    username: "Plexcord",
                },
                content: settings.store.isEnabled ? t(plugin.signature.command.signature.enabled) : t(plugin.signature.command.signature.disabled),
            });
        },
    }],
});

// text processing injection processor
function textProcessing(input: string) {
    return `${input}\n${settings.store.textHeader ? settings.store.textHeader + " " : ""}${settings.store.name}`;
}
