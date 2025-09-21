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

import { Logger } from "@utils/Logger";

import i18n, { LocaleData } from "./i18n";

const logger = new Logger("LocaleLoader");

const coreLocales: Record<string, () => Promise<{ default: LocaleData; }>> = {
    "en-US": () => import("../locales/en-US.json"),
    "tr": () => import("../locales/tr.json")
};

const pluginLocales: Record<string, Record<string, () => Promise<{ default: LocaleData; }>>> = {};

export class LocaleLoader {
    private static loadedCoreLocales = new Set<string>();
    private static loadedPluginLocales = new Map<string, Set<string>>();

    static async loadCoreLocales(): Promise<void> {
        logger.info("Loading core locales...");

        const promises = Object.entries(coreLocales).map(async ([locale, loader]) => {
            try {
                if (this.loadedCoreLocales.has(locale)) {
                    return;
                }

                const { default: localeData } = await loader();
                i18n.addTranslations(locale, localeData, "core");
                this.loadedCoreLocales.add(locale);

                logger.info(`Loaded core locale: ${locale}`);
            } catch (error) {
                logger.error(`Failed to load core locale ${locale}:`, error);
            }
        });

        await Promise.all(promises);
        logger.info("Core locales loaded successfully");
    }

    /**
     * Register a plugin's locale loader
     * @param pluginName The plugin name
     * @param locale The locale code
     * @param loader Function that returns a promise with locale data
     */
    static registerPluginLocale(
        pluginName: string,
        locale: string,
        loader: () => Promise<{ default: LocaleData; }>
    ): void {
        if (!pluginLocales[pluginName]) {
            pluginLocales[pluginName] = {};
        }

        pluginLocales[pluginName][locale] = loader;
        logger.info(`Registered locale ${locale} for plugin ${pluginName}`);

        if (i18n.getLocale() === locale) {
            this.loadPluginLocale(pluginName, locale);
        }
    }

    /**
     * Load a specific plugin locale
     * @param pluginName The plugin name
     * @param locale The locale code
     */
    static async loadPluginLocale(pluginName: string, locale: string): Promise<boolean> {
        const loader = pluginLocales[pluginName]?.[locale];
        if (!loader) {
            return false;
        }

        try {
            if (!this.loadedPluginLocales.has(pluginName)) {
                this.loadedPluginLocales.set(pluginName, new Set());
            }

            const loadedSet = this.loadedPluginLocales.get(pluginName)!;
            if (loadedSet.has(locale)) {
                return true;
            }

            const { default: localeData } = await loader();
            i18n.addTranslations(locale, localeData, pluginName);
            loadedSet.add(locale);

            logger.info(`Loaded locale ${locale} for plugin ${pluginName}`);
            return true;
        } catch (error) {
            logger.error(`Failed to load locale ${locale} for plugin ${pluginName}:`, error);
            return false;
        }
    }

    /**
     * Load all locales for a specific plugin
     * @param pluginName The plugin name
     */
    static async loadPluginLocales(pluginName: string): Promise<void> {
        const locales = pluginLocales[pluginName];
        if (!locales) {
            return;
        }

        const currentLocale = i18n.getLocale();
        const fallbackLocale = i18n.getFallbackLocale();

        if (locales[currentLocale]) {
            await this.loadPluginLocale(pluginName, currentLocale);
        }

        if (fallbackLocale !== currentLocale && locales[fallbackLocale]) {
            await this.loadPluginLocale(pluginName, fallbackLocale);
        }

        const promises = Object.keys(locales)
            .filter(locale => locale !== currentLocale && locale !== fallbackLocale)
            .map(locale => this.loadPluginLocale(pluginName, locale));

        await Promise.all(promises);
    }

    /**
     * Unregister all locales for a plugin
     * @param pluginName The plugin name
     */
    static unregisterPlugin(pluginName: string): void {
        delete pluginLocales[pluginName];
        this.loadedPluginLocales.delete(pluginName);
        logger.info(`Unregistered all locales for plugin ${pluginName}`);
    }

    static getRegisteredPlugins(): string[] {
        return Object.keys(pluginLocales);
    }

    /**
     * Get available locales for a plugin
     * @param pluginName The plugin name
     */
    static getPluginLocales(pluginName: string): string[] {
        return Object.keys(pluginLocales[pluginName] || {});
    }

    /**
     * Check if a plugin has a specific locale
     * @param pluginName The plugin name
     * @param locale The locale code
     */
    static hasPluginLocale(pluginName: string, locale: string): boolean {
        return !!pluginLocales[pluginName]?.[locale];
    }

    static async loadCurrentLocales(): Promise<void> {
        const currentLocale = i18n.getLocale();
        const fallbackLocale = i18n.getFallbackLocale();

        logger.info(`Loading locales for current language: ${currentLocale}`);

        if (!this.loadedCoreLocales.has(currentLocale) && coreLocales[currentLocale]) {
            const { default: localeData } = await coreLocales[currentLocale]();
            i18n.addTranslations(currentLocale, localeData, "core");
            this.loadedCoreLocales.add(currentLocale);
        }

        if (!this.loadedCoreLocales.has(fallbackLocale) && coreLocales[fallbackLocale]) {
            const { default: localeData } = await coreLocales[fallbackLocale]();
            i18n.addTranslations(fallbackLocale, localeData, "core");
            this.loadedCoreLocales.add(fallbackLocale);
        }

        const loadPromises = this.getRegisteredPlugins().map(async pluginName => {
            if (this.hasPluginLocale(pluginName, currentLocale)) {
                await this.loadPluginLocale(pluginName, currentLocale);
            }
            if (currentLocale !== fallbackLocale && this.hasPluginLocale(pluginName, fallbackLocale)) {
                await this.loadPluginLocale(pluginName, fallbackLocale);
            }
        });

        await Promise.all(loadPromises);
        logger.info("Current locale loading completed");
    }

    static async initialize(): Promise<void> {
        logger.info("Initializing LocaleLoader...");

        await this.loadCoreLocales();
        i18n.initializeDiscordFeatures();

        i18n.addListener(() => {
            this.loadCurrentLocales();
        });

        logger.info("LocaleLoader initialized successfully");
    }
}

export function definePluginLocales(pluginName: string, locales: Record<string, () => Promise<{ default: LocaleData; }>>) {
    Object.entries(locales).forEach(([locale, loader]) => {
        LocaleLoader.registerPluginLocale(pluginName, locale, loader);
    });
}

export default LocaleLoader;
