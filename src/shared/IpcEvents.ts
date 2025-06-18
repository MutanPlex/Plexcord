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

export const enum IpcEvents {
    QUICK_CSS_UPDATE = "PlexcordQuickCssUpdate",
    THEME_UPDATE = "PlexcordThemeUpdate",
    GET_QUICK_CSS = "PlexcordGetQuickCss",
    SET_QUICK_CSS = "PlexcordSetQuickCss",
    UPLOAD_THEME = "PlexcordUploadTheme",
    DELETE_THEME = "PlexcordDeleteTheme",
    GET_THEMES_DIR = "PlexcordGetThemesDir",
    GET_THEMES_LIST = "PlexcordGetThemesList",
    GET_THEME_DATA = "PlexcordGetThemeData",
    GET_THEME_SYSTEM_VALUES = "PlexcordGetThemeSystemValues",
    GET_SETTINGS_DIR = "PlexcordGetSettingsDir",
    GET_SETTINGS = "PlexcordGetSettings",
    SET_SETTINGS = "PlexcordSetSettings",
    OPEN_EXTERNAL = "PlexcordOpenExternal",
    OPEN_QUICKCSS = "PlexcordOpenQuickCss",
    GET_UPDATES = "PlexcordGetUpdates",
    GET_REPO = "PlexcordGetRepo",
    UPDATE = "PlexcordUpdate",
    BUILD = "PlexcordBuild",
    OPEN_MONACO_EDITOR = "PlexcordOpenMonacoEditor",

    GET_PLUGIN_IPC_METHOD_MAP = "PlexcordGetPluginIpcMethodMap",

    OPEN_IN_APP__RESOLVE_REDIRECT = "PlexcordOIAResolveRedirect",
    VOICE_MESSAGES_READ_RECORDING = "PlexcordVMReadRecording",

    CSP_IS_DOMAIN_ALLOWED = "PlexcordCspIsDomainAllowed",
    CSP_REMOVE_OVERRIDE = "PlexcordCspRemoveOverride",
    CSP_REQUEST_ADD_OVERRIDE = "PlexcordCspRequestAddOverride",
    OPEN_THEMES_FOLDER = "PlexcordOpenThemesFolder",
    OPEN_SETTINGS_FOLDER = "PlexcordOpenSettingsFolder",
}
