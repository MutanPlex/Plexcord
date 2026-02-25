/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2026 Vendicated and contributors
 * Copyright (c) 2026 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import "./styles.css";

import { plugin, t } from "@api/i18n";
import { definePluginSettings } from "@api/Settings";
import { PcDevs } from "@utils/constants";
import { classNameFactory } from "@utils/css";
import definePlugin, { OptionType } from "@utils/types";
import { React } from "@webpack/common";

import { PresetManager } from "./components/presetManager";
import { loadPresets, PresetSection } from "./utils/storage";

export const cl = classNameFactory("pc-profile-presets-");
export const settings = definePluginSettings({
    avatarSize: {
        label: () => t(plugin.profileSets.option.avatarSize.label),
        description: () => t(plugin.profileSets.option.avatarSize.description),
        type: OptionType.SLIDER,
        markers: [56, 64, 72, 80, 88, 96],
        default: 56,
        stickToMarkers: true
    },
});

export default definePlugin({
    name: "ProfileSets",
    description: () => t(plugin.profileSets.description),
    authors: [PcDevs.omaw, PcDevs.justjxke],
    settings,
    patches: [
        {
            find: "DefaultCustomizationSections: user cannot be undefined",
            replacement: {
                match: /return.{0,50}children:\[(?<=\.getLegacyUsername\(\).*?)/,
                replace: "$&$self.renderPresetSection(\"main\"),"
            }
        },
        {
            find: "USER_SETTINGS_GUILD_PROFILE)",
            replacement: {
                match: /guildId:(\i\.id),onChange:(\i)\}\)(?=.{0,25}profilePreviewTitle:)/,
                replace: 'guildId:$1,onChange:$2}),$self.renderPresetSection("server",$1)'
            }
        }
    ],
    start() {
        loadPresets("main");
    },
    renderPresetSection(section: PresetSection, guildId?: string) {
        return <PresetManager section={section} guildId={guildId} />;
    }
});
