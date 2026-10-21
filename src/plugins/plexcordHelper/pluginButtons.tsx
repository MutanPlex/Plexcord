/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2025 Vendicated and contributors
 * Copyright (c) 2026 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { plugin, t } from "@api/i18n";
import { getName, isPluginEnabled, plugins } from "@api/PluginManager";
import ErrorBoundary from "@components/ErrorBoundary";
import { Message } from "@plexcord/discord-types";
import { Logger } from "@utils/Logger";
import { isPlexcordGuild, isSupport } from "@utils/misc";
import { Button, showToast } from "@webpack/common";
import { JSX } from "react";

import { toggleEnabled } from "./utils";

export const PluginButtons = ErrorBoundary.wrap(function PluginCards({ message }: { message: Message; }) {
    const pluginButtons = [] as JSX.Element[];
    const msg = message.content?.toLowerCase() ?? "";

    const contentWords = (msg.match(/`\w+`/g) ?? []).map(e => e.slice(1, -1));
    const matchedPlugins = Object.keys(plugins).filter(name => contentWords.includes(name.toLowerCase()));
    const matchedPlugin = matchedPlugins.sort((a, b) => b.length - a.length)[0];
    const pluginData = matchedPlugin ? plugins[matchedPlugin] : null;

    const isPlexcord = isPlexcordGuild(message.channel_id) && isSupport(message.author.id);
    const startsWithEnabled = msg.startsWith("enable");
    const startsWithDisabled = msg.startsWith("disable");

    const shouldAddPluginButtons = pluginData && isPlexcord && (startsWithEnabled || startsWithDisabled);

    if (shouldAddPluginButtons) {
        if (pluginData.required || getName(pluginData.name).endsWith("API")) return;
        const isEnabled = isPluginEnabled(matchedPlugin);

        let label = isEnabled ? t(plugin.plexcordHelper.text.alreadyEnabled, { plugin: matchedPlugin }) : t(plugin.plexcordHelper.text.alreadyDisabled, { plugin: matchedPlugin });
        let disabled = true;

        if ((startsWithDisabled && isEnabled) || (startsWithEnabled && !isEnabled)) {
            label = isEnabled ? t(plugin.plexcordHelper.text.disablePlugin, { plugin: matchedPlugin }) : t(plugin.plexcordHelper.text.enablePlugin, { plugin: matchedPlugin });
            disabled = false;
        }

        pluginButtons.push(
            <Button
                key="pc-plugin-toggle"
                color={disabled ? Button.Colors.PRIMARY : (isEnabled ? Button.Colors.RED : Button.Colors.GREEN)}
                disabled={disabled}
                size={Button.Sizes.SMALL}
                onClick={async () => {
                    try {
                        const success = await toggleEnabled(matchedPlugin);
                        if (success) showToast({ text: `${label}`, variant: "success" });
                    } catch (e) {
                        new Logger("PlexcordHelper").error("Error while toggling:", e);
                        showToast({ text: t(plugin.plexcordHelper.toast.failedToTolowercase, { toLowerCase: label.toLowerCase() }), variant: "critical" });
                    }
                }}
            >
                {label}
            </Button>
        );
    }

    if (pluginButtons.length === 0) return null;

    return (
        <div className="pc-plugins-action-buttons" style={{ marginTop: "0px" }}>
            {pluginButtons}
        </div>
    );
}, { noop: true });
