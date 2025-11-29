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
import { t } from "@api/i18n";
import { definePluginSettings } from "@api/Settings";
import { getUserSettingLazy } from "@api/UserSettings";
import ErrorBoundary from "@components/ErrorBoundary";
import { PcDevs } from "@utils/constants";
import { proxyLazy } from "@utils/lazy";
import { classes } from "@utils/misc";
import { openModalLazy } from "@utils/modal";
import { useForceUpdater } from "@utils/react";
import definePlugin, { StartAt } from "@utils/types";
import { extractAndLoadChunksLazy, findByPropsLazy, findComponentByCodeLazy, findModuleId, wreq } from "@webpack";
import { Clickable, Menu, OverridePremiumTypeStore, Toasts, useState } from "@webpack/common";

import managedStyle from "./fixActionBar.css?managed";

const settings = definePluginSettings({});

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

const PlusSmallIcon = findComponentByCodeLazy("0-2h-5V6Z");

interface DiscordStatus {
    emojiInfo: Emoji | null;
    text: string;
    clearAfter: "TODAY" | number | null;
    status: "online" | "dnd" | "idle" | "invisible";
}

const StatusStyles = findByPropsLazy("statusItem");
// TODO: find clearCustomStatusHint original css/svg or replace
const PMenu = findComponentByCodeLazy(".menuItemLabel", ".menuItemInner");
const EmojiComponent = findComponentByCodeLazy(/\.translateSurrogatesToInlineEmoji\(\i\.name\);/);

const CustomStatusSettings = getUserSettingLazy("status", "customStatus")!;
const StatusModule = proxyLazy(() => {
    const id = findModuleId(".customStatusInputTitle,");
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

const ClearStatusButton = () => <Clickable className={StatusStyles.clearCustomStatusHint} onClick={e => { e.stopPropagation(); CustomStatusSettings?.updateSetting(null); }}><PlusSmallIcon className={"pc-sp-icon"} /></Clickable>;

function StatusIcon({ isHovering, status }: { isHovering: boolean; status: DiscordStatus; }) {
    return <div className={StatusStyles.status}>{isHovering ?
        <PlusSmallIcon className={"pc-sp-icon"} />
        : (status.emoji != null ? <EmojiComponent emoji={status.emoji} animate={true} hideTooltip={false} size="24px" /> : <div className={StatusStyles.customEmojiPlaceholder} />)}</div>;
}

const RenderStatusMenuItem = ({ status, update, disabled }: { status: DiscordStatus; update: () => void; disabled: boolean; }) => {
    const [isHovering, setIsHovering] = useState(false);
    const handleMouseOver = () => {
        setIsHovering(true);
    };

    const handleMouseOut = () => {
        setIsHovering(false);
    };

    return <div className={classes(StatusStyles.statusItem, "pc-sp-item", disabled ? "pc-sp-disabled" : null)}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}>
        <Clickable
            onClick={async e => {
                e.stopPropagation();
                delete savedStatusPresets[status.state];
                await saveStatusPresets();
                update();
            }}><StatusIcon isHovering={isHovering} status={status} /></Clickable>
        <div className={StatusStyles.status} style={{ marginLeft: "2px" }}>{status.state}</div>
    </div >;
};


const StatusSubMenuComponent = () => {
    const premiumType = OverridePremiumTypeStore.getState().premiumTypeActual ?? 0;
    const update = useForceUpdater();
    return <Menu.Menu navId="sp-custom-status-submenu" onClose={() => { }}>
        {Object.entries(savedStatusPresets).map(([statusText, status]) => status != null ? <Menu.MenuItem
            key={"status-presets-" + statusText}
            id={"status-presets-" + statusText}
            label={status.state}
            action={() => (status.emoji?.id != null && premiumType > 0 || status.emoji?.id == null) && setStatus(status)}
            render={() => <RenderStatusMenuItem
                status={status}
                update={update}
                disabled={status.emoji?.id != null && premiumType === 0}
            />}
        /> : null)}
    </Menu.Menu>;
};


export default definePlugin({
    name: "StatusPresets",
    description: "Allows you to remember your statuses and set them later",
    authors: [PcDevs.iamme],
    settings: settings,
    dependencies: ["UserSettingsAPI"],

    get displayDescription() {
        return t("plugin.statusPresets.description");
    },

    managedStyle,
    patches: [
        {
            find: '"CustomStatusModalWithPreview"',
            replacement: {
                match: /(?<=(\i)\.state\).*?)\{text:\i\.\i\.\i\(\i\.\i#{intl::SAVE}\)/,
                replace: "$self.renderRememberButton($1),$&"
            }
        },
        {
            find: "#{intl::STATUS_MENU_LABEL}",
            replacement: {
                match: /(:void 0\}\))\]/,
                replace: "$1,$self.render()]"
            }
        }
    ],
    render() {
        const status = CustomStatusSettings.getSetting();
        return (
            <ErrorBoundary>
                <div className={StatusStyles.menuDivider} />
                {status == null ?
                    <PMenu
                        id="sp-custom/presets-status"
                        action="PRESS_SET_STATUS"
                        onClick={openCustomStatusModalLazy}
                        icon={
                            () => <div
                                className={StatusStyles.customEmojiPlaceholder}
                            />
                        }
                        label={t("plugin.statusPresets.context.set")}
                        renderSubmenu={StatusSubMenuComponent}
                    />
                    :
                    <PMenu
                        id="sp-edit/presets-status"
                        action="PRESS_EDIT_CUSTOM_STATUS"
                        onClick={openCustomStatusModalLazy}
                        hint={<ClearStatusButton />}
                        icon={
                            () => status.emoji != null ? (
                                <EmojiComponent
                                    emoji={status.emoji}
                                    animate={true}
                                    hideTooltip={false}
                                    size="24px"
                                />
                            ) : null
                        }
                        label={t("plugin.statusPresets.context.edit")}
                        renderSubmenu={StatusSubMenuComponent}
                    />}
            </ErrorBoundary>
        );
    },
    renderRememberButton(status: DiscordStatus) {
        return {
            text: t("plugin.statusPresets.button.remember"),
            style: { marginLeft: "20px" },
            onClick: async () => {
                savedStatusPresets[status.state] = status;
                await saveStatusPresets();
                Toasts.show({
                    message: t("plugin.statusPresets.notification.successfully"),
                    type: Toasts.Type.SUCCESS,
                    id: Toasts.genId()
                });
            }
        };
    },
    async start() {
        await loadStatusPresets();
    },
    startAt: StartAt.WebpackReady
});
