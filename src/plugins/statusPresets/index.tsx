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

import * as DataStore from "@api/DataStore";
import { plugin, t } from "@api/i18n";
import { definePluginSettings } from "@api/Settings";
import { getUserSettingLazy } from "@api/UserSettings";
import ErrorBoundary from "@components/ErrorBoundary";
import { Devs } from "@utils/constants";
import { proxyLazy } from "@utils/lazy";
import { useForceUpdater } from "@utils/react";
import definePlugin, { OptionType, StartAt } from "@utils/types";
import { extractAndLoadChunksLazy, findComponentByCodeLazy, findModuleId, wreq } from "@webpack";
import { Menu, openModalLazy, OverridePremiumTypeStore, showToast } from "@webpack/common";

interface Emoji {
    animated: boolean;
    id: string | null;
    name: string;
}

interface DiscordStatus {
    emoji: Emoji | null;
    state: string;
    expiresAtMs?: string;
    emojiId?: string;
    emojiName?: string;
}

interface SavedStatusPresets {
    [statusText: string]: DiscordStatus;
}

let savedStatusPresets: SavedStatusPresets = {};

async function loadStatusPresets() {
    savedStatusPresets = await DataStore.get("StatusPresets_statuses") ?? {};
}

async function saveStatusPresets() {
    await DataStore.set("StatusPresets_statuses", savedStatusPresets);
}

interface DiscordStatus {
    emojiInfo: Emoji | null;
    text: string;
    clearAfter: "TODAY" | number | null;
}

const PMenu = findComponentByCodeLazy("#{intl::MORE_OPTIONS}", ",renderSubmenu:");
const EmojiComponent = findComponentByCodeLazy(/\.translateSurrogatesToInlineEmoji\(\i\.name\);/);

const CustomStatusSettings = getUserSettingLazy("status", "customStatus")!;
const StatusModule = proxyLazy(() => {
    const id = findModuleId("#{intl::SAVE}", '"custom-status-input"', '"Invalid custom status clear timeout"),');
    return wreq(Number(id));
});

const requireCustomStatusModal = extractAndLoadChunksLazy(["action:\"PRESS_ADD_CUSTOM_STATUS\"", /\i\.\i\i\)/]);

const openCustomStatusModalLazy = () => openModalLazy(async () => {
    await requireCustomStatusModal();
    const key = Object.keys(StatusModule)[0];
    const Component = StatusModule[key];
    return props => <Component {...props} />;
});

function setStatus(status: DiscordStatus) {
    CustomStatusSettings.updateSetting({
        text: status.state.trim(),
        expiresAtMs: status.expiresAtMs ?? "0",
        emojiId: status.emoji?.id ?? "0",
        emojiName: status.emoji?.name ?? "",
        createdAtMs: String(Date.now())
    });
}

const StatusSubMenuComponent = () => {
    const premiumType = OverridePremiumTypeStore.getState().premiumTypeActual ?? 0;
    const update = useForceUpdater();
    return (
        <Menu.Menu navId="sp-custom-status-submenu" onClose={() => { }}>
            {Object.entries((settings.store.StatusPresets as { [k: string]: DiscordStatus | undefined; })).map(([index, status]) =>
                status != null ? (
                    <Menu.MenuItem
                        key={"status-presets-" + index}
                        id={"status-presets-" + index}
                        label={status.text}
                        action={() => (status.emojiInfo?.id == null || premiumType > 0) && setStatus(status)}
                        icon={status.emojiInfo != null
                            ? () => <EmojiComponent emoji={status.emojiInfo} animate={false} hideTooltip={false} />
                            : undefined
                        }
                        leadingAccessory={status.emojiInfo != null
                            ? { type: "icon", icon: () => <EmojiComponent emoji={status.emojiInfo} animate={false} hideTooltip={false} /> }
                            : undefined
                        }
                        disabled={status.emojiInfo?.id != null && premiumType === 0}
                    >
                        <Menu.MenuItem
                            id={"status-presets-delete-" + index}
                            label={t(plugin.statusPresets.context.delete)}
                            action={() => {
                                const newPresets = JSON.parse(JSON.stringify(settings.store.StatusPresets));
                                delete newPresets[status.text];
                                settings.store.StatusPresets = newPresets;
                                update();
                            }}
                        />
                    </Menu.MenuItem>
                ) : null
            )}
        </Menu.Menu>
    );
};

const settings = definePluginSettings({
    StatusPresets: {
        type: OptionType.COMPONENT,
        description: () => t(plugin.statusPresets.name),
        component: () => <></>,
        default: {}
    }
});

export default definePlugin({
    name: "StatusPresets",
    description: () => t(plugin.statusPresets.description),
    authors: [Devs.iamme],
    tags: ["customisation", "utility"],
    settings,
    dependencies: ["UserSettingsAPI"],

    patches: [
        {
            find: '="custom-status-input";',
            replacement: {
                match: /(?<=\[(\i).{0,6}\.useState\(\i\?\.state\?\?""\),\[(\i).{0,25}\?\?null\),\[(\i).*?)\{text:\i\.\i\.\i\(\i\.\i#{intl::SAVE}\)/,
                replace: "$self.renderRememberButton({text:$1,emojiInfo:$2,clearAfter:$3}),$&"
            }
        },
        {
            find: "#{intl::STATUS_MENU_LABEL}",
            replacement: {
                match: /(popoutContainerRef:\i,scrollerRef:\i.{0,50}\}\))(?=\])/,
                replace: "$1,$self.render()"
            }
        },
        {
            find: "#{intl::MORE_OPTIONS}),...",
            replacement: {
                match: /\i:\(\)=>\i,(?=.*?function (\i).{0,100}renderSubmenu:\i,ref:)/,
                replace: "$&PMenu:()=>$1,"
            }
        },
    ],

    render() {
        const status = CustomStatusSettings.getSetting();
        return (
            <ErrorBoundary>
                {status == null ?
                    <PMenu
                        id="sp-custom/presets-status"
                        action="PRESS_SET_STATUS"
                        onClick={openCustomStatusModalLazy}
                        icon={() => <div />}
                        label={t(plugin.statusPresets.context.set)}
                        renderSubmenu={StatusSubMenuComponent}
                    />
                    :
                    <PMenu
                        id="sp-edit/presets-status"
                        action="PRESS_EDIT_CUSTOM_STATUS"
                        onClick={openCustomStatusModalLazy}
                        icon={() => status.emoji != null ? (
                            <EmojiComponent emoji={status.emoji} animate={false} hideTooltip={false} size="24px" />
                        ) : null}
                        label={t(plugin.statusPresets.context.edit)}
                        renderSubmenu={StatusSubMenuComponent}
                    />}
            </ErrorBoundary>
        );
    },
    renderRememberButton(status: DiscordStatus) {
        return {
            text: t(plugin.statusPresets.button.remember),
            style: { marginLeft: "20px" },
            onClick: () => {
                settings.store.StatusPresets[status.text] = status;
                showToast({ text: t(plugin.statusPresets.notification.successfully), variant: "success" });
            }
        };
    },
    async start() {
        await loadStatusPresets();
    },
    startAt: StartAt.WebpackReady
});
