/*
 * Plexcord, a modification for Discord's desktop app
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

import type enTranslations from "./en";

/**
 * Translation key proxy that allows accessing keys without quotes
 * Usage: t(settings.title) instead of t("settings.title")
 */
type TranslationKeyProxy<T> = {
    readonly [K in keyof T]: T[K] extends string
    ? string
    : T[K] extends object
    ? TranslationKeyProxy<T[K]>
    : never;
};

declare global {
    const settings: TranslationKeyProxy<typeof enTranslations.settings>;
    const plugins: TranslationKeyProxy<typeof enTranslations.plugins>;
    const patchHelper: TranslationKeyProxy<typeof enTranslations.patchHelper>;
    const sync: TranslationKeyProxy<typeof enTranslations.sync>;
    const cloud: TranslationKeyProxy<typeof enTranslations.cloud>;
    const changelog: TranslationKeyProxy<typeof enTranslations.changelog>;
    const csp: TranslationKeyProxy<typeof enTranslations.csp>;
    const themes: TranslationKeyProxy<typeof enTranslations.themes>;
    const updater: TranslationKeyProxy<typeof enTranslations.updater>;
    const components: TranslationKeyProxy<typeof enTranslations.components>;
    const commands: TranslationKeyProxy<typeof enTranslations.commands>;
    const notifications: TranslationKeyProxy<typeof enTranslations.notifications>;
    const memberlist: TranslationKeyProxy<typeof enTranslations.memberlist>;
    const message: TranslationKeyProxy<typeof enTranslations.message>;
    const utils: TranslationKeyProxy<typeof enTranslations.utils>;
    const common: TranslationKeyProxy<typeof enTranslations.common>;
    const plugin: TranslationKeyProxy<typeof enTranslations.plugin>;
}

export { };
