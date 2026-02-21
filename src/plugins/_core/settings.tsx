/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2025 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import i18n, { changelog, cloud, patchHelper, plugin, plugins, settings as settingsI18n, SUPPORTED_LANGUAGES, sync, t, themes, updater } from "@api/i18n";
import { definePluginSettings, Settings } from "@api/Settings";
import { BackupRestoreIcon, ChangelogIcon, CloudIcon, MainSettingsIcon, PaintbrushIcon, PatchHelperIcon, PluginsIcon, UpdaterIcon } from "@components/index";
import { BackupAndRestoreTab, ChangelogTab, CloudTab, PatchHelperTab, PlexcordTab, PluginsTab, ThemesTab, UpdaterTab } from "@components/settings/tabs";
import { gitHashShort } from "@shared/plexcordUserAgent";
import { Devs, PcDevs } from "@utils/constants";
import { isTruthy } from "@utils/guards";
import definePlugin, { IconProps, OptionType } from "@utils/types";
import { findByPropsLazy } from "@webpack";
import { React } from "@webpack/common";
import type { ComponentType, PropsWithChildren, ReactNode } from "react";

const enum LayoutType {
    ROOT = 0,
    SECTION = 1,
    SIDEBAR_ITEM = 2,
    PANEL = 3,
    SPLIT = 4,
    CATEGORY = 5,
    ACCORDION = 6,
    LIST = 7,
    RELATED = 8,
    FIELD_SET = 9,
    TAB_ITEM = 10,
    STATIC = 11,
    BUTTON = 12,
    TOGGLE = 13,
    SLIDER = 14,
    SELECT = 15,
    RADIO = 16,
    NAVIGATOR = 17,
    CUSTOM = 18
}

const LayoutTypes: typeof LayoutType = findByPropsLazy("SECTION", "SIDEBAR_ITEM", "PANEL");

const enum SectionType {
    HEADER = "HEADER",
    DIVIDER = "DIVIDER",
    CUSTOM = "CUSTOM"
}

type SettingsLocation =
    | "top"
    | "aboveNitro"
    | "belowNitro"
    | "aboveActivity"
    | "belowActivity"
    | "bottom";

interface SettingsLayoutNode {
    type: LayoutType;
    key?: string;
    legacySearchKey?: string;
    getLegacySearchKey?(): string;
    useLabel?(): string;
    useTitle?(): string;
    buildLayout?(): SettingsLayoutNode[];
    icon?(): ReactNode;
    render?(): ReactNode;
    StronglyDiscouragedCustomComponent?(): ReactNode;
}

interface EntryOptions {
    key: string;
    title: string;
    panelTitle?: string;
    Component: ComponentType<{}>;
    Icon: ComponentType<IconProps>;
}

interface SettingsLayoutBuilder {
    key?: string;
    buildLayout(): SettingsLayoutNode[];
}

const pluginSettings = definePluginSettings({
    language: {
        label: () => t(plugin.settings.option.language.label),
        description: () => t(plugin.settings.option.language.description),
        type: OptionType.SELECT,
        get options() {
            return Object.entries(SUPPORTED_LANGUAGES).map(([code, info]) => ({
                label: info.nativeName,
                value: code,
                default: code === i18n.getLocale()
            }));
        },
        onChange: (locale: string) => {
            Settings.language.locale = locale;
        },
    },
    settingsLocation: {
        label: () => t(plugin.settings.option.settingsLocation.label),
        description: () => t(plugin.settings.option.settingsLocation.description),
        type: OptionType.SELECT,
        options: [
            { label: () => t(settingsI18n.location.top), value: "top" },
            { label: () => t(settingsI18n.location.nitro.above), value: "aboveNitro", default: true },
            { label: () => t(settingsI18n.location.nitro.below), value: "belowNitro" },
            { label: () => t(settingsI18n.location.activity.above), value: "aboveActivity" },
            { label: () => t(settingsI18n.location.activity.below), value: "belowActivity" },
            { label: () => t(settingsI18n.location.bottom), value: "bottom" },
        ]
    },
});

const settingsSectionMap: [string, string][] = [
    ["PlexcordSettings", "plexcord_main_panel"],
    ["PlexcordPlugins", "plexcord_plugins_panel"],
    ["PlexcordThemes", "plexcord_themes_panel"],
    ["PlexcordUpdater", "plexcord_updater_panel"],
    ["PlexcordChangelog", "plexcord_changelog_panel"],
    ["PlexcordCloud", "plexcord_cloud_panel"],
    ["PlexcordBackupAndRestore", "plexcord_backup_restore_panel"],
    ["PlexcordPatchHelper", "plexcord_patch_helper_panel"]
];

export default definePlugin({
    name: "Settings",
    description: () => t(plugin.settings.description),
    authors: [Devs.Ven, Devs.Megu, PcDevs.MutanPlex],
    required: true,
    settings: pluginSettings,
    settingsSectionMap,

    patches: [
        {
            find: "#{intl::COPY_VERSION}",
            replacement: [
                {
                    match: /\.RELEASE_CHANNEL/,
                    replace: "$&.replace(/^./, c => c.toUpperCase())"
                },
                {
                    match: /"text-xxs\/normal".{0,300}?(?=null!=(\i)&&(.{0,20}\i\.Text.{0,200}?,children:).{0,15}?("span"),({className:\i\.\i,children:\["Build Override: ",\1\.id\]\})\)\}\))/,
                    replace: (m, _buildOverride, makeRow, component, props) => {
                        props = props.replace(/children:\[.+\]/, "");
                        return `${m},$self.makeInfoElements(${component},${props}).map(e=>${makeRow}e})),`;
                    }
                },
                {
                    match: /"text-xs\/normal".{0,300}?\[\(0,\i\.jsxs?\)\((.{1,10}),(\{[^{}}]+\{.{0,20}className:\i.\i,.+?\})\)," "/,
                    replace: (m, component, props) => {
                        props = props.replace(/children:\[.+\]/, "");
                        return `${m},$self.makeInfoElements(${component},${props})`;
                    }
                },
                {
                    match: /copyValue:\i\.join\(" "\)/g,
                    replace: "$& + $self.getInfoString()"
                }
            ]
        },
        {
            find: "#{intl::USER_SETTINGS_ACTIONS_MENU_LABEL}",
            replacement: {
                match: /null!=\(\i=Object.values\(\i\.\i\).{0,50}?&&(?=\(0,\i\.openUserSettings\)\(\i,\{section:\i)/,
                replace: ""
            }
        },
        {
            find: ".buildLayout().map",
            replacement: {
                match: /(\i)\.buildLayout\(\)(?=\.map)/,
                replace: "$self.buildLayout($1)"
            }
        },
        {
            find: "getWebUserSettingFromSection",
            replacement: {
                match: /new Map\(\[(?=\[.{0,10}\.ACCOUNT,.{0,10}\.ACCOUNT_PANEL)/,
                replace: "new Map([...$self.getSettingsSectionMappings(),"
            }
        }
    ],

    buildEntry(options: EntryOptions): SettingsLayoutNode {
        const { key, title, panelTitle = title, Component, Icon } = options;

        const panel: SettingsLayoutNode = {
            key: key + "_panel",
            type: LayoutTypes.PANEL,
            useTitle: () => panelTitle,
            buildLayout: () => [],
            StronglyDiscouragedCustomComponent: () => <Component />,
            render: () => <Component />,
        };

        return {
            key,
            type: LayoutTypes.SIDEBAR_ITEM,
            legacySearchKey: title.toUpperCase(),
            useTitle: () => title,
            icon: () => <Icon width={20} height={20} />,
            buildLayout: () => [panel]
        };
    },

    getSettingsSectionMappings() {
        return settingsSectionMap;
    },

    buildLayout(originalLayoutBuilder: SettingsLayoutBuilder) {
        const layout = originalLayoutBuilder.buildLayout();
        if (originalLayoutBuilder.key !== "$Root") return layout;
        if (!Array.isArray(layout)) return layout;

        if (layout.some(s => s?.key === "plexcord_section")) return layout;

        const { buildEntry } = this;

        const plexcordEntries: SettingsLayoutNode[] = [
            buildEntry({
                key: "plexcord_main",
                title: "Plexcord",
                panelTitle: "Plexcord" + t(settingsI18n.title),
                Component: PlexcordTab,
                Icon: MainSettingsIcon
            }),
            buildEntry({
                key: "plexcord_plugins",
                title: t(plugins.title),
                Component: PluginsTab,
                Icon: PluginsIcon
            }),
            buildEntry({
                key: "plexcord_themes",
                title: t(themes.title),
                Component: ThemesTab,
                Icon: PaintbrushIcon
            }),
            !IS_UPDATER_DISABLED && UpdaterTab && buildEntry({
                key: "plexcord_updater",
                title: t(updater.title),
                panelTitle: t(updater.title),
                Component: UpdaterTab,
                Icon: UpdaterIcon
            }),
            buildEntry({
                key: "plexcord_changelog",
                title: t(changelog.text),
                panelTitle: t(changelog.text),
                Component: ChangelogTab,
                Icon: ChangelogIcon
            }),
            buildEntry({
                key: "plexcord_cloud",
                title: t(cloud.text),
                panelTitle: t(cloud.text),
                Component: CloudTab,
                Icon: CloudIcon
            }),
            buildEntry({
                key: "plexcord_backup_restore",
                title: t(sync.title),
                Component: BackupAndRestoreTab,
                Icon: BackupRestoreIcon
            }),
            IS_DEV && PatchHelperTab && buildEntry({
                key: "plexcord_patch_helper",
                title: t(patchHelper.title),
                Component: PatchHelperTab,
                Icon: PatchHelperIcon
            }),
            ...this.customEntries.map(buildEntry)
        ].filter(isTruthy);

        const plexcordSection: SettingsLayoutNode = {
            key: "plexcord_section",
            type: LayoutTypes.SECTION,
            useLabel: () => "Plexcord " + t(settingsI18n.title),
            legacySearchKey: "Plexcord " + t(settingsI18n.title),
            useTitle: () => "Plexcord " + t(settingsI18n.title),
            buildLayout: () => plexcordEntries
        };

        const { settingsLocation } = pluginSettings.store;

        const places: Record<SettingsLocation, string> = {
            top: "user_section",
            aboveNitro: "billing_section",
            belowNitro: "billing_section",
            aboveActivity: "activity_section",
            belowActivity: "activity_section",
            bottom: "logout_section"
        };

        const key = places[settingsLocation] ?? places.top;
        let idx = layout.findIndex(s => typeof s?.key === "string" && s.key === key);

        if (idx === -1) {
            idx = 2;
        } else if (settingsLocation.startsWith("below")) {
            idx += 1;
        }

        layout.splice(idx, 0, plexcordSection);

        return layout;
    },

    customSections: [] as ((SectionTypes: Record<string, string>) => { section: string; element: ComponentType; label: string; id?: string; })[],
    customEntries: [] as EntryOptions[],

    get electronVersion() {
        return PlexcordNative.native.getVersions().electron ?? window.legcord?.electron ?? null;
    },

    get chromiumVersion() {
        try {
            return PlexcordNative.native.getVersions().chrome
                // @ts-expect-error userAgentData types
                ?? navigator.userAgentData?.brands?.find((b: { brand: string; }) => b.brand === "Chromium" || b.brand === "Google Chrome",)?.version
                ?? null;
        } catch {
            return null;
        }
    },

    getVersionInfo(support = true) {
        let version = "";

        if (IS_DEV) version = "Dev Build";
        if (IS_WEB) version = "Web";
        if (IS_PLEXTRON) version = `Plextron v${PlextronNative.app.getVersion()}`;
        if (IS_STANDALONE) version = "Standalone";

        return support && version ? ` (${version})` : version;
    },

    getInfoRows() {
        const { electronVersion, chromiumVersion, getVersionInfo } = this;

        const rows = [`Plexcord ${gitHashShort} ${getVersionInfo()}`];

        if (electronVersion) rows.push(`Electron ${electronVersion}`);
        if (chromiumVersion) rows.push(`Chromium ${chromiumVersion}`);

        return rows;
    },

    getInfoString() {
        return "\n" + this.getInfoRows().join("\n");
    },

    makeInfoElements(Component: ComponentType<PropsWithChildren>, props: PropsWithChildren) {
        return this.getInfoRows().map((text, i) =>
            <Component key={i} {...props}>{text}</Component>
        );
    }
});
