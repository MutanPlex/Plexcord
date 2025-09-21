/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2022 Vendicated and Megumin
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

import i18n, { SUPPORTED_LANGUAGES, t } from "@api/i18n";
import { Settings } from "@api/Settings";
import { BackupAndRestoreTab, CloudTab, PatchHelperTab, PlexcordTab, PluginsTab, ThemesTab, UpdaterTab } from "@components/settings/tabs";
import { Devs, PcDevs } from "@utils/constants";
import { getIntlMessage } from "@utils/discord";
import definePlugin, { OptionType } from "@utils/types";
import { React } from "@webpack/common";

import gitHash from "~git-hash";

type SectionType = "HEADER" | "DIVIDER" | "CUSTOM";
type SectionTypes = Record<SectionType, SectionType>;

export default definePlugin({
    name: "Settings",
    description: "Adds Settings UI and debug info",
    authors: [Devs.Ven, Devs.Megu, PcDevs.MutanPlex],
    required: true,

    get displayName() {
        return t("plugins.metadata.settings.name");
    },
    get displayDescription() {
        return t("plugins.metadata.settings.description");
    },

    patches: [
        {
            find: ".versionHash",
            replacement: [
                {
                    match: /\[\(0,\i\.jsxs?\)\((.{1,10}),(\{[^{}}]+\{.{0,20}.versionHash,.+?\})\)," "/,
                    replace: (m, component, props) => {
                        props = props.replace(/children:\[.+\]/, "");
                        return `${m},$self.makeInfoElements(${component}, ${props})`;
                    }
                },
                {
                    match: /copyValue:\i\.join\(" "\)/,
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
            find: "#{intl::USER_SETTINGS_ACTIONS_MENU_LABEL}",
            replacement: {
                match: /(?<=function\((\i),\i\)\{)(?=let \i=Object.values\(\i.\i\).*?(\i\.\i)\.open\()/,
                replace: "$2.open($1);return;"
            }
        }
    ],

    customSections: [] as ((SectionTypes: SectionTypes) => any)[],

    makeSettingsCategories(SectionTypes: SectionTypes) {
        return [
            {
                section: SectionTypes.HEADER,
                label: "Plexcord",
                className: "pc-settings-header"
            },
            {
                section: "settings/tabs",
                label: "Plexcord",
                element: PlexcordTab,
                className: "pc-settings"
            },
            {
                section: "PlexcordPlugins",
                label: t("plugins.title"),
                searchableTitles: [t("plugins.title")],
                element: PluginsTab,
                className: "pc-plugins"
            },
            {
                section: "PlexcordThemes",
                label: t("themes.title"),
                searchableTitles: [t("themes.title")],
                element: ThemesTab,
                className: "pc-themes"
            },
            !IS_UPDATER_DISABLED && {
                section: "PlexcordUpdater",
                label: t("updater.title"),
                searchableTitles: [t("updater.title")],
                element: UpdaterTab,
                className: "pc-updater"
            },
            {
                section: "PlexcordCloud",
                label: t("cloud.text"),
                searchableTitles: [t("cloud.text")],
                element: CloudTab,
                className: "pc-cloud"
            },
            {
                section: "settings/tabsSync",
                label: t("sync.title"),
                searchableTitles: [t("sync.title")],
                element: BackupAndRestoreTab,
                className: "pc-backup-restore"
            },
            IS_DEV && {
                section: "PlexcordPatchHelper",
                label: t("patchHelper.title"),
                searchableTitles: [t("patchHelper.title")],
                element: PatchHelperTab,
                className: "pc-patch-helper"
            },
            ...this.customSections.map(func => func(SectionTypes)),
            {
                section: SectionTypes.DIVIDER
            }
        ].filter(Boolean);
    },

    isRightSpot({ header, settings }: { header?: string; settings?: string[]; }) {
        const firstChild = settings?.[0];
        // lowest two elements... sanity backup
        if (firstChild === "LOGOUT" || firstChild === "SOCIAL_LINKS") return true;

        const { settingsLocation } = Settings.plugins.Settings;

        if (settingsLocation === "bottom") return firstChild === "LOGOUT";
        if (settingsLocation === "belowActivity") return firstChild === "CHANGELOG";

        if (!header) return;

        try {
            const names = {
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
                elements.unshift(...this.makeSettingsCategories({
                    HEADER: "HEADER",
                    DIVIDER: "DIVIDER",
                    CUSTOM: "CUSTOM"
                }));

            return elements;
        };
    },

    options: {
        language: {
            get label() {
                return t("plugins.metadata.settings.option.language.label");
            },
            type: OptionType.SELECT,
            get description() {
                return t("plugins.metadata.settings.option.language.description");
            },
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
            get label() {
                return t("plugins.metadata.settings.option.settingsLocation.label");
            },
            type: OptionType.SELECT,
            get description() {
                return t("plugins.metadata.settings.option.settingsLocation.description");
            },
            get options() {
                return [
                    { label: t("settings.location.top"), value: "top" },
                    { label: t("settings.location.nitro.above"), value: "aboveNitro", default: true },
                    { label: t("settings.location.nitro.below"), value: "belowNitro" },
                    { label: t("settings.location.activity.above"), value: "aboveActivity" },
                    { label: t("settings.location.activity.below"), value: "belowActivity" },
                    { label: t("settings.location.bottom"), value: "bottom" },
                ];
            }
        },
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

    makeInfoElements(Component: React.ComponentType<React.PropsWithChildren>, props: React.PropsWithChildren) {
        return this.getInfoRows().map((text, i) =>
            <Component key={i} {...props}>{text}</Component>
        );
    }
});
