/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2024 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import "./styles.css";

import { NavContextMenuPatchCallback } from "@api/ContextMenu";
import { t } from "@api/i18n";
import { definePluginSettings } from "@api/Settings";
import { classNameFactory } from "@api/Styles";
import { Button } from "@components/Button";
import { ErrorBoundary } from "@components/index";
import { Channel } from "@plexcord/discord-types";
import { Devs, PcDevs } from "@utils/constants";
import definePlugin, { OptionType } from "@utils/types";
import { findComponentByCodeLazy } from "@webpack";
import { FluxDispatcher, Menu, React, Tooltip, UserStore } from "@webpack/common";

const ignoredChannelIds = new Set<string>();
const cl = classNameFactory("pc-ignore-calls-");
const Deafen = findComponentByCodeLazy("0-1.02-.1H3.05a9");

const ContextMenuPatch: NavContextMenuPatchCallback = (children, { channel }: { channel: Channel; }) => {
    if (!channel || (!channel.isDM() && !channel.isGroupDM())) return;

    const permanentlyIgnoredUsers = settings.store.permanentlyIgnoredUsers.split(",").map(s => s.trim()).filter(Boolean);

    const [tempChecked, setTempChecked] = React.useState(ignoredChannelIds.has(channel.id));
    const [permChecked, setPermChecked] = React.useState(permanentlyIgnoredUsers.includes(channel.id));

    children.push(
        <>
            <Menu.MenuSeparator />
            <Menu.MenuCheckboxItem
                id="pc-ignore-calls-temp"
                label={t("plugin.ignoreCalls.button.temporarilyIgnore")}
                checked={tempChecked}
                action={() => {
                    if (tempChecked)
                        ignoredChannelIds.delete(channel.id);
                    else
                        ignoredChannelIds.add(channel.id);

                    setTempChecked(!tempChecked);
                }}
            />
            <Menu.MenuCheckboxItem
                id="pc-ignore-calls-perm"
                label={t("plugin.ignoreCalls.button.permanentlyIgnore")}
                checked={permChecked}
                action={() => {
                    let updated = permanentlyIgnoredUsers.slice();
                    if (permChecked) {
                        updated = updated.filter(id => id !== channel.id);
                    } else {
                        updated.push(channel.id);
                    }
                    settings.store.permanentlyIgnoredUsers = updated.join(", ");

                    setPermChecked(!permChecked);
                }}
            />
        </>
    );
};


const settings = definePluginSettings({
    permanentlyIgnoredUsers: {
        get label() {
            return t("plugin.ignoreCalls.option.permanentlyIgnoredUsers.label");
        },
        get description() {
            return t("plugin.ignoreCalls.option.permanentlyIgnoredUsers.description");
        },
        type: OptionType.STRING,
        restartNeeded: true,
        default: "",
    },
});

const args = {
    ringing: [],
    messageId: "",
    region: "",
};

export default definePlugin({
    name: "IgnoreCalls",
    description: "Allows you to ignore calls from specific users or dm groups.",
    authors: [PcDevs.TheArmagan, Devs.thororen],
    settings,

    get displayDescription() {
        return t("plugin.ignoreCalls.description");
    },

    patches: [
        {
            find: "#{intl::INCOMING_CALL_ELLIPSIS}",
            replacement: {
                match: /actionButton\}\)/,
                replace: "$&,$self.renderIgnore(arguments[0].channel)"
            }
        }
    ],
    contextMenus: {
        "user-context": ContextMenuPatch,
        "gdm-context": ContextMenuPatch,
    },
    flux: {
        async CALL_UPDATE({ ringing, messageId, region }) {
            args.ringing = ringing;
            args.messageId = messageId;
            args.region = region;
        }
    },
    renderIgnore(channel) {
        const currentUserId = UserStore.getCurrentUser().id;
        const permanentlyIgnoredUsers = settings.store.permanentlyIgnoredUsers.split(",").map(s => s.trim()).filter(Boolean);
        if (ignoredChannelIds.has(channel.id) || permanentlyIgnoredUsers.includes(channel.id)) {
            FluxDispatcher.dispatch({
                type: "CALL_UPDATE",
                channelId: channel.id,
                ringing: args.ringing.filter((id: string) => id !== currentUserId),
                messageId: args.messageId,
                region: args.region
            });
            return null;
        }

        return (
            <ErrorBoundary>
                <Tooltip text={t("plugin.ignoreCalls.button.ignore")}>
                    {({ onMouseEnter, onMouseLeave }) => (
                        <Button
                            className={cl("button")}
                            size="small"
                            onMouseEnter={onMouseEnter}
                            onMouseLeave={onMouseLeave}
                            onClick={() => {
                                ignoredChannelIds.add(channel.id);
                                FluxDispatcher.dispatch({
                                    type: "CALL_UPDATE",
                                    channelId: channel.id,
                                    ringing: args.ringing.filter((id: string) => id !== currentUserId),
                                    messageId: args.messageId,
                                    region: args.region
                                });
                            }}
                        >
                            <Deafen color={"var(--interactive-active)"} />
                        </Button>
                    )}
                </Tooltip>
            </ErrorBoundary >
        );
    }
});
