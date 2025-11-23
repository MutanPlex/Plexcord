import { t } from "@api/i18n";
import { openNotificationLogModal } from "@api/Notifications/notificationLog";
import { isPluginEnabled, plugins } from "@api/PluginManager";
import { Settings, useSettings } from "@api/Settings";
import { openPluginModal, openSettingsTabModal, PluginsTab, ThemesTab } from "@components/settings";
import { getThemeInfo } from "@main/themes";
import { useAwaiter } from "@utils/react";
import { OptionType, Plugin } from "@utils/types";
import { Menu, showToast, useMemo, useState } from "@webpack/common";
import type { ReactNode } from "react";

import { settings } from ".";

function buildPluginMenu() {
    const { showPluginMenu } = settings.use(["showPluginMenu"]);

    // has to be here due to hooks
    const pluginEntries = buildPluginMenuEntries();

    if (!showPluginMenu) return null;

    return (
        <Menu.MenuItem
            id="plugins"
            label={t("plugins.title")}
            action={() => openSettingsTabModal(PluginsTab)}
        >
            {pluginEntries}
        </Menu.MenuItem>
    );
}

export function buildPluginMenuEntries(includeEmpty = false) {
    const pluginSettings = useSettings().plugins;

    const [search, setSearch] = useState("");

    const lowerSearch = search.toLowerCase();

    const sortedPlugins = useMemo(() =>
        Object.values(plugins).sort((a, b) => a.name.localeCompare(b.name)),
        []
    );

    const candidates = useMemo(() =>
        sortedPlugins
            .filter(p => {
                if (!isPluginEnabled(p.name)) return false;
                if (p.name.endsWith("API")) return false;

                const name = p.name.toLowerCase();
                return name.includes(lowerSearch);
            }),
        [lowerSearch]
    );

    return (
        <>
            <Menu.MenuControlItem
                id="plugins-search"
                control={(props, ref) => (
                    <Menu.MenuSearchControl
                        {...props}
                        query={search}
                        onChange={setSearch}
                        ref={ref}
                    />
                )}
            />

            <Menu.MenuSeparator />

            {candidates
                .map(p => {
                    const options = [] as ReactNode[];

                    let hasAnyOption = false;

                    if (p.options) for (const [key, option] of Object.entries(p.options)) {
                        if ("hidden" in option && option.hidden) continue;

                        hasAnyOption = true;

                        const s = pluginSettings[p.name];

                        const baseProps = {
                            id: `${p.name}-${key}`,
                            key: key,
                            label: t(`plugin.${p.name.charAt(0).toLowerCase() + p.name.slice(1)}.option.${key}.label`),
                            disabled: "disabled" in option ? option.disabled?.call(p.settings) : false,
                        };

                        switch (option.type) {
                            case OptionType.BOOLEAN:
                                options.push(
                                    <Menu.MenuCheckboxItem
                                        {...baseProps}
                                        checked={s[key]}
                                        action={() => {
                                            s[key] = !s[key];
                                            if (option.restartNeeded) showToast(t("plugins.restart.apply"));
                                        }}
                                    />
                                );
                                break;
                            case OptionType.SELECT:
                                options.push(
                                    <Menu.MenuItem {...baseProps}>
                                        {option.options.map(opt => (
                                            <Menu.MenuRadioItem
                                                group={`${p.name}-${key}`}
                                                id={`${p.name}-${key}-${opt.value}`}
                                                key={opt.label}
                                                label={opt.label}
                                                checked={s[key] === opt.value}
                                                action={() => {
                                                    s[key] = opt.value;
                                                    if (option.restartNeeded) showToast(t("plugins.restart.apply"));
                                                }}
                                            />
                                        ))}
                                    </Menu.MenuItem>
                                );
                                break;
                            case OptionType.SLIDER:
                                // The menu slider doesn't support these options. Skip to avoid confusion
                                if (option.stickToMarkers || option.componentProps) continue;

                                options.push(
                                    <Menu.MenuControlItem
                                        {...baseProps}
                                        control={(props, ref) => (
                                            <Menu.MenuSliderControl
                                                ref={ref}
                                                {...props}
                                                minValue={option.markers[0]}
                                                maxValue={option.markers.at(-1)!}
                                                value={s[key]}
                                                onChange={v => s[key] = v}
                                            />
                                        )}
                                    />
                                );
                                break;
                        }
                    }

                    const hasVisibleOptions = options.length > 0;
                    const shouldSkip = !hasVisibleOptions && !(includeEmpty && hasAnyOption);
                    if (shouldSkip) return null;

                    return (
                        <Menu.MenuItem
                            id={`${p.name}-menu`}
                            key={p.name}
                            label={p.name}
                            action={() => openPluginModal(p)}
                        >
                            {hasVisibleOptions && (
                                <>
                                    <Menu.MenuGroup label={p.name}>
                                        {options}
                                    </Menu.MenuGroup>

                                    <Menu.MenuSeparator />

                                    <Menu.MenuItem
                                        id={`${p.name}-open`}
                                        label={t("plugin.plexcordToolbox.context.openSettings")}
                                        action={() => openPluginModal(p)}
                                    />
                                </>
                            )}
                        </Menu.MenuItem>
                    );
                })
            }
        </>
    );
}

export function buildThemeMenu() {
    return (
        <Menu.MenuItem
            id="themes"
            label={t("themes.title")}
            action={() => openSettingsTabModal(ThemesTab)}
        >
            {buildThemeMenuEntries()}
        </Menu.MenuItem>
    );
}

export function buildThemeMenuEntries() {
    const { useQuickCss, enabledThemes } = useSettings(["useQuickCss", "enabledThemes"]);
    const [themes] = useAwaiter(PlexcordNative.themes.getThemesList);

    return (
        <>
            <Menu.MenuCheckboxItem
                id="toggle-quickcss"
                checked={useQuickCss}
                label={t("plugin.plexcordToolbox.context.enableQuickCSS")}
                action={() => {
                    Settings.useQuickCss = !useQuickCss;
                }}
            />
            <Menu.MenuItem
                id="edit-quickcss"
                label={t("plugin.plexcordToolbox.context.openQuickCSS")}
                action={() => PlexcordNative.quickCss.openEditor()}
            />
            <Menu.MenuItem
                id="manage-themes"
                label={t("plugin.plexcordToolbox.context.manageThemes")}
                action={() => openSettingsTabModal(ThemesTab)}
            />
            {!!themes?.length && (
                <Menu.MenuGroup>
                    {themes.map(theme => (
                        <Menu.MenuCheckboxItem
                            id={`theme-${getThemeInfo(theme.content as any, theme.fileName ?? "Unknown Theme").name}`}
                            key={getThemeInfo(theme.content as any, theme.fileName ?? "Unknown Theme").name}
                            label={getThemeInfo(theme.content as any, theme.fileName ?? "Unknown Theme").name}
                            checked={enabledThemes.includes(theme.fileName)}
                            action={() => {
                                if (enabledThemes.includes(theme.fileName)) {
                                    Settings.enabledThemes = enabledThemes.filter(t => t !== theme.fileName);
                                } else {
                                    Settings.enabledThemes = [...enabledThemes, theme.fileName];
                                }
                            }}
                        />
                    ))}
                </Menu.MenuGroup>
            )}
        </>
    );
}

function buildCustomPluginEntries() {
    const pluginEntries = [] as { plugin: Plugin, node: ReactNode; }[];

    for (const plugin of Object.values(plugins)) {
        if (plugin.toolboxActions && isPluginEnabled(plugin.name)) {
            const entries = typeof plugin.toolboxActions === "function"
                ? plugin.toolboxActions()
                : Object.entries(plugin.toolboxActions).map(([text, action]) => {
                    const key = `${plugin.name}-${text}`;

                    return (
                        <Menu.MenuItem
                            id={key}
                            key={key}
                            label={text}
                            action={action}
                        />
                    );
                });

            if (!entries || Array.isArray(entries) && entries.length === 0) continue;

            pluginEntries.push({
                plugin,
                node:
                    <Menu.MenuGroup label={plugin.name} key={`${plugin.name}-group`}>
                        {entries}
                    </Menu.MenuGroup>
            });
        }
    }

    // If there aren't too many entries, just put them all in the main menu.
    // Otherwise, add submenus for each plugin
    // FIXME: the Slider component has broken styles that overlap with higher context menus
    // https://discord.com/channels/1015060230222131221/1015063227299811479/1440489344631705693
    if (pluginEntries.length <= 5)
        return pluginEntries.map(e => e.node);

    const submenuEntries = pluginEntries.map(({ node, plugin }) => (
        <Menu.MenuItem
            id={`${plugin.name}-menu`}
            key={`${plugin.name}-menu`}
            label={plugin.name}
            action={() => openPluginModal(plugin)}
        >
            {node}
        </Menu.MenuItem>
    ));

    return <Menu.MenuGroup>{submenuEntries}</Menu.MenuGroup>;
}

export function renderPopout(onClose: () => void) {
    return (
        <Menu.Menu
            navId="pc-toolbox"
            onClose={onClose}
        >
            <Menu.MenuItem
                id="notifications"
                label={t("plugin.plexcordToolbox.context.openLog")}
                action={openNotificationLogModal}
            />

            {buildThemeMenu()}
            {buildPluginMenu()}

            {buildCustomPluginEntries()}
        </Menu.Menu >
    );
}
