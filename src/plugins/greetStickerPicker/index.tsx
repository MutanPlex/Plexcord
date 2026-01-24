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

import { plugin, t } from "@api/i18n";
import { definePluginSettings } from "@api/Settings";
import { Channel, Message } from "@plexcord/discord-types";
import { Devs } from "@utils/constants";
import definePlugin, { OptionType } from "@utils/types";
import { findLazy } from "@webpack";
import { ContextMenuApi, FluxDispatcher, Menu, MessageActions } from "@webpack/common";

const GreetMode = {
    Greet: t(plugin.greetStickerPicker.mode.greet),
    NormalMessage: t(plugin.greetStickerPicker.mode.message)
};

const settings = definePluginSettings({
    greetMode: {
        label: () => t(plugin.greetStickerPicker.option.greetMode.label),
        description: () => t(plugin.greetStickerPicker.option.greetMode.description),
        type: OptionType.SELECT,
        options: [
            { label: () => t(plugin.greetStickerPicker.option.greetMode.greet), value: GreetMode.Greet, default: true },
            { label: () => t(plugin.greetStickerPicker.option.greetMode.message), value: GreetMode.NormalMessage }
        ]
    }
}).withPrivateSettings<{
    multiGreetChoices?: string[];
    unholyMultiGreetEnabled?: boolean;
}>();

const WELCOME_STICKERS = findLazy(m => Array.isArray(m) && m[0]?.name === "Wave");

function greet(channel: Channel, message: Message, stickers: string[]) {
    const options = MessageActions.getSendMessageOptionsForReply({
        channel,
        message,
        shouldMention: true,
        showMentionToggle: true
    });

    if (settings.store.greetMode === GreetMode.NormalMessage || stickers.length > 1) {
        options.stickerIds = stickers;
        const msg = {
            content: "",
            tts: false,
            invalidEmojis: [],
            validNonShortcutEmojis: []
        };

        MessageActions._sendMessage(channel.id, msg, options);
    } else {
        MessageActions.sendGreetMessage(channel.id, stickers[0], options);
    }
}

function GreetMenu({ channel, message }: { message: Message, channel: Channel; }) {
    const s = settings.use(["greetMode", "multiGreetChoices"]);
    const { greetMode, multiGreetChoices = [] } = s;

    return (
        <Menu.Menu
            navId="greet-sticker-picker"
            onClose={() => FluxDispatcher.dispatch({ type: "CONTEXT_MENU_CLOSE" })}
            aria-label={t(plugin.greetStickerPicker.context.label)}
        >
            <Menu.MenuGroup
                label={t(plugin.greetStickerPicker.context.mode)}
            >
                {Object.values(GreetMode).map(mode => (
                    <Menu.MenuRadioItem
                        key={mode}
                        group="greet-mode"
                        id={"greet-mode-" + mode}
                        label={mode}
                        checked={mode === greetMode}
                        action={() => s.greetMode = mode}
                    />
                ))}
            </Menu.MenuGroup>

            <Menu.MenuSeparator />

            <Menu.MenuGroup
                label={t(plugin.greetStickerPicker.context.stickers)}
            >
                {WELCOME_STICKERS.map(sticker => (
                    <Menu.MenuItem
                        key={sticker.id}
                        id={"greet-" + sticker.id}
                        label={sticker.description.split(" ")[0]}
                        action={() => greet(channel, message, [sticker.id])}
                    />
                ))}
            </Menu.MenuGroup>

            {!settings.store.unholyMultiGreetEnabled ? null : (
                <>
                    <Menu.MenuSeparator />

                    <Menu.MenuItem
                        label={t(plugin.greetStickerPicker.context.multi)}
                        id="unholy-multi-greet"
                    >
                        {WELCOME_STICKERS.map(sticker => {
                            const checked = multiGreetChoices.some(s => s === sticker.id);

                            return (
                                <Menu.MenuCheckboxItem
                                    key={sticker.id}
                                    id={"multi-greet-" + sticker.id}
                                    label={sticker.description.split(" ")[0]}
                                    checked={checked}
                                    disabled={!checked && multiGreetChoices.length >= 3}
                                    action={() => {
                                        s.multiGreetChoices = checked
                                            ? multiGreetChoices.filter(s => s !== sticker.id)
                                            : [...multiGreetChoices, sticker.id];
                                    }}
                                />
                            );
                        })}

                        <Menu.MenuSeparator />
                        <Menu.MenuItem
                            id="multi-greet-submit"
                            label={t(plugin.greetStickerPicker.context.send)}
                            action={() => greet(channel, message, multiGreetChoices!)}
                            disabled={multiGreetChoices.length === 0}
                        />

                    </Menu.MenuItem>
                </>
            )}
        </Menu.Menu>
    );
}

export default definePlugin({
    name: "GreetStickerPicker",
    description: () => t(plugin.greetStickerPicker.description),
    authors: [Devs.Ven],
    settings,

    patches: [
        {
            find: "#{intl::WELCOME_CTA_LABEL}",
            replacement: {
                match: /className:\i\.\i,(?=.{0,40}?"sticker")(?<={channel:\i,message:\i}=(\i).+?)/,
                replace: "$&onContextMenu:(vcEvent)=>$self.pickSticker(vcEvent, $1),"
            }
        }
    ],

    pickSticker(
        event: React.UIEvent,
        props: {
            channel: Channel,
            message: Message;
        }
    ) {
        if (!(props.message as any).deleted)
            ContextMenuApi.openContextMenu(event, () => <GreetMenu {...props} />);
    }
});
