/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2025 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import i18n, { changelog, cloud, patchHelper, plugin, plugins, settings as settingsI18n, SUPPORTED_LANGUAGES, sync, t, themes, updater } from "@api/i18n";
import { definePluginSettings, Settings } from "@api/Settings";
import { BackupRestoreIcon, ChangelogIcon, CloudIcon, MainSettingsIcon, PaintbrushIcon, PatchHelperIcon, PlaceholderIcon, PlextronSettingsIcon, PluginsIcon, UpdaterIcon } from "@components/index";
import { BackupAndRestoreTab, ChangelogTab, CloudTab, PatchHelperTab, PlexcordTab, PluginsTab, ThemesTab, UpdaterTab } from "@components/settings/tabs";
import { Devs, PcDevs } from "@utils/constants";
import { getIntlMessage } from "@utils/discord";
import { isTruthy } from "@utils/guards";
import definePlugin, { IconProps, OptionType } from "@utils/types";
import { waitFor } from "@webpack";
import { React } from "@webpack/common";
import type { ComponentType, PropsWithChildren, ReactNode } from "react";

import gitHash from "~git-hash";

let LayoutTypes = {
    SECTION: 1,
    SIDEBAR_ITEM: 2,
    PANEL: 3,
    PANE: 4
};
waitFor(["SECTION", "SIDEBAR_ITEM", "PANEL"], v => LayoutTypes = v);

const FallbackSectionTypes = {
    HEADER: "HEADER",
    DIVIDER: "DIVIDER",
    CUSTOM: "CUSTOM"
};
type SectionTypes = typeof FallbackSectionTypes;

type SettingsLocation =
    | "top"
    | "aboveNitro"
    | "belowNitro"
    | "aboveActivity"
    | "belowActivity"
    | "bottom";

interface SettingsLayoutNode {
    type: number;
    key?: string;
    legacySearchKey?: string;
    useLabel?(): string;
    useTitle?(): string;
    buildLayout?(): SettingsLayoutNode[];
    icon?(): ReactNode;
    render?(): ReactNode;
}

interface EntryOptions {
    key: string,
    title: string,
    panelTitle?: string,
    Component: ComponentType<{}>,
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

export default definePlugin({
    name: "Settings",
    description: () => t(plugin.settings.description),
    authors: [Devs.Ven, Devs.Megu, PcDevs.MutanPlex],
    required: true,
    settings: pluginSettings,

    patches: [
        {
            find: ".versionHash",
            replacement: [
                {
                    match: /\.compactInfo.+?(?=null!=(\i)&&(.{0,20}\i\.Text.{0,200}?,children:).{0,15}?("span"),({className:\i\.versionHash,children:\["Build Override: ",\1\.id\]\})\)\}\))/,
                    replace: (m, _buildOverride, makeRow, component, props) => {
                        props = props.replace(/children:\[.+\]/, "");
                        return `${m},$self.makeInfoElements(${component},${props}).map(e=>${makeRow}e})),`;
                    }
                },
                {
                    match: /\.info.+?\[\(0,\i\.jsxs?\)\((.{1,10}),(\{[^{}}]+\{.{0,20}.versionHash,.+?\})\)," "/,
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
            find: ".SEARCH_NO_RESULTS&&0===",
            replacement: [
                {
                    match: /(?<=section:(.{0,50})\.DIVIDER\}\))([,;])(?=.{0,200}(\i)\.push.{0,100}label:(\i)\.header)/,
                    replace: (_, sectionTypes, commaOrSemi, elements, element) => `${commaOrSemi} $self.addSettings(${elements}, ${element}, ${sectionTypes}) ${commaOrSemi}`
                },
                {
                    match: /({(?=.+?function (\i).{0,160}(\i)=\i\.useMemo.{0,140}return \i\.useMemo\(\(\)=>\i\(\3).+?\(\)=>)\2/,
                    replace: (_, rest, settingsHook) => `${rest}$self.wrapSettingsHook(${settingsHook})`
                }
            ]
        },
        {
            find: ".DEVELOPER_SECTION,",
            replacement: [
                {
                    match: /\i\.\i\.isDeveloper/,
                    replace: "true"
                },
            ]
        },
        // Fix the settings cog context menu to work properly
        {
            find: "#{intl::USER_SETTINGS_ACTIONS_MENU_LABEL}",
            replacement: {
                // Skip the check Discord performs to make sure the section being selected in the user settings context menu is valid
                match: /(?<=function\((\i),(\i),\i\)\{)(?=let \i=Object.values\(\i\.\i\).+?(\(0,\i\.openUserSettings\))\()/,
                replace: (_, settingsPanel, section, openUserSettings) => `${openUserSettings}(${settingsPanel},{section:${section}});return;`
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
        };

        const render = {
            // FIXME
            StronglyDiscouragedCustomComponent: () => <Component />,
            render: () => <Component />,
        };

        // FIXME
        if (LayoutTypes.PANE) {
            panel.buildLayout = () => [
                {
                    key: key + "_pane",
                    type: LayoutTypes.PANE,
                    useTitle: () => panelTitle,
                    buildLayout: () => [],
                    ...render
                }
            ];
        } else {
            Object.assign(panel, render);
            panel.buildLayout = () => [];
        }

        return ({
            key,
            type: LayoutTypes.SIDEBAR_ITEM,
            legacySearchKey: title.toUpperCase(),
            useTitle: () => title,
            icon: () => <Icon width={20} height={20} />,
            buildLayout: () => [panel]
        });
    },

    getSettingsSectionMappings() {
        return [
            ["PlexcordSettings", "plexcord_main_panel"],
            ["PlexcordPlugins", "plexcord_plugins_panel"],
            ["PlexcordThemes", "plexcord_themes_panel"],
            ["PlexcordUpdater", "plexcord_updater_panel"],
            ["PlexcordChangelog", "plexcord_changelog_panel"],
            ["PlexcordCloud", "plexcord_cloud_panel"],
            ["PlexcordBackupAndRestore", "plexcord_backup_restore_panel"],
            ["PlexcordPatchHelper", "plexcord_patch_helper_panel"],
            ["PlexcordDiscordIcons", "plexcord_icon_viewer"],
            ["PlexcordThemeLibrary", "plexcord_theme_library"],
            ["PlexcordIRememberYou", "plexcord_i_remember_you"],
        ];
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
                panelTitle: "Plexcord",
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
            ...this.customEntries.map(buildEntry),
            // TODO: Remove deprecated customSections in a future update
            ...this.customSections.map((func, i) => {
                const { section, element, label } = func(FallbackSectionTypes);
                if (Object.values(FallbackSectionTypes).includes(section)) return null;

                return buildEntry({
                    key: `plexcord_deprecated_custom_${section}`,
                    title: label,
                    Component: element,
                    Icon: section === "Plextron" ? PlextronSettingsIcon : PlaceholderIcon
                });
            })
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

    /** @deprecated Use customEntries */
    customSections: [] as ((SectionTypes: SectionTypes) => any)[],
    customEntries: [] as EntryOptions[],

    makeSettingsCategories(SectionTypes: SectionTypes) {
        return [
            {
                section: SectionTypes.HEADER,
                label: "Plexcord",
                className: "pc-settings-header"
            },
            {
                section: "PlexcordSettings",
                label: "Plexcord",
                element: PlexcordTab,
                className: "pc-settings"
            },
            {
                section: "PlexcordPlugins",
                label: t(plugins.title),
                searchableTitles: [t(plugins.title)],
                element: PluginsTab,
                className: "pc-plugins"
            },
            {
                section: "PlexcordThemes",
                label: t(themes.title),
                searchableTitles: [t(themes.title)],
                element: ThemesTab,
                className: "pc-themes"
            },
            !IS_UPDATER_DISABLED && {
                section: "PlexcordUpdater",
                label: t(updater.title),
                searchableTitles: [t(updater.title)],
                element: UpdaterTab,
                className: "pc-updater"
            }, {
                section: "PlexcordChangelog",
                label: t(changelog.text),
                searchableTitles: [t(changelog.text)],
                element: ChangelogTab,
                className: "pc-changelog",
            },
            {
                section: "PlexcordCloud",
                label: t(cloud.text),
                searchableTitles: [t(cloud.text)],
                element: CloudTab,
                className: "pc-cloud"
            },
            {
                section: "PlexcordBackupAndRestore",
                label: t(sync.title),
                searchableTitles: [t(sync.title)],
                element: BackupAndRestoreTab,
                className: "pc-backup-restore"
            },
            IS_DEV && {
                section: "PlexcordPatchHelper",
                label: t(patchHelper.title),
                searchableTitles: [t(patchHelper.title)],
                element: PatchHelperTab,
                className: "pc-patch-helper"
            },
            ...this.customSections.map(func => func(SectionTypes)),
            {
                section: SectionTypes.DIVIDER
            }
        ].filter(Boolean);
    },

    isRightSpot({ header, settings: s }: { header?: string; settings?: string[]; }) {
        const firstChild = s?.[0];
        // lowest two elements... sanity backup
        if (firstChild === "LOGOUT" || firstChild === "SOCIAL_LINKS") return true;

        const { settingsLocation } = pluginSettings.store;

        if (settingsLocation === "bottom") return firstChild === "LOGOUT";
        if (settingsLocation === "belowActivity") return firstChild === "CHANGELOG";

        if (!header) return;

        try {
            const names: Record<Exclude<SettingsLocation, "bottom" | "belowActivity">, string> = {
                top: getIntlMessage("USER_SETTINGS"),
                aboveNitro: getIntlMessage("BILLING_SETTINGS"),
                belowNitro: getIntlMessage("APP_SETTINGS"),
                aboveActivity: getIntlMessage("ACTIVITY_SETTINGS")
            };

            if (!names[settingsLocation] || names[settingsLocation].endsWith("_SETTINGS"))
                return firstChild === "PREMIUM";

            return header === names[settingsLocation];
        } catch {
            return firstChild === "PREMIUM";
        }
    },

    patchedSettings: new WeakSet(),

    addSettings(elements: any[], element: { header?: string; settings: string[]; }, sectionTypes: SectionTypes) {
        if (this.patchedSettings.has(elements) || !this.isRightSpot(element)) return;

        this.patchedSettings.add(elements);

        elements.push(...this.makeSettingsCategories(sectionTypes));
    },

    wrapSettingsHook(originalHook: (...args: any[]) => Record<string, unknown>[]) {
        return (...args: any[]) => {
            const elements = originalHook(...args);
            if (!this.patchedSettings.has(elements))
                elements.unshift(...this.makeSettingsCategories(FallbackSectionTypes));

            return elements;
        };
    },

    get electronVersion() {
        return PlexcordNative.native.getVersions().electron || window.legcord?.electron || null;
    },

    get chromiumVersion() {
        try {
            return PlexcordNative.native.getVersions().chrome
                // @ts-expect-error Typescript will add userAgentData IMMEDIATELY
                || navigator.userAgentData?.brands?.find(b => b.brand === "Chromium" || b.brand === "Google Chrome")?.version
                || null;
        } catch { // inb4 some stupid browser throws unsupported error for navigator.userAgentData, it's only in chromium
            return null;
        }
    },

    get additionalInfo() {
        if (IS_DEV) return " (Dev)";
        if (IS_WEB) return " (Web)";
        if (IS_PLEXTRON) return ` (Plextron v${PlextronNative.app.getVersion()})`;
        if (IS_STANDALONE) return " (Standalone)";
        return "";
    },

    getInfoRows() {
        const { electronVersion, chromiumVersion, additionalInfo } = this;

        const rows = [`Plexcord ${gitHash}${additionalInfo}`];

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
