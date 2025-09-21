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

import { RendererSettings } from "@main/settings";
import { join } from "path";

import localeEn from "../../locales/en-US.json";
import localeTr from "../../locales/tr.json";

interface LocaleData {
    [key: string]: string | LocaleData;
}

class MainI18n {
    private translations: Record<string, LocaleData> = {};
    private currentLocale: string = "en-US";
    private fallbackLocale: string = "en-US";
    private localesPath: string;

    constructor() {
        this.localesPath = join(__dirname, "..", "..", "src", "locales");

        // Load hardcoded locales as fallback
        this.translations["en-US"] = localeEn;
        this.translations.tr = localeTr;

        console.log("[MainI18n] Constructor: Translations loaded, waiting for settings...");
        // Don't load settings here - will be done via initialize()
    }

    private loadCurrentLocale(): void {
        try {
            const settings = RendererSettings.plain;
            console.log("[MainI18n] Settings loaded:", JSON.stringify(settings?.language, null, 2));
            if (settings?.language?.locale) {
                this.currentLocale = settings.language.locale;
                console.log("[MainI18n] Set locale from settings:", this.currentLocale);
            } else {
                console.log("[MainI18n] No locale in settings, using default:", this.currentLocale);
            }
            if (settings?.language?.fallbackLocale) {
                this.fallbackLocale = settings.language.fallbackLocale;
                console.log("[MainI18n] Set fallback locale:", this.fallbackLocale);
            }
        } catch (error) {
            console.warn("[MainI18n] Failed to load locale from settings, using default:", error);
        }
    }

    private getNestedValue(obj: LocaleData, path: string): string | undefined {
        const keys = path.split(".");
        let current: any = obj;

        for (const key of keys) {
            if (current && typeof current === "object" && key in current) {
                current = current[key];
            } else {
                return undefined;
            }
        }

        return typeof current === "string" ? current : undefined;
    }

    private replacePlaceholders(text: string, params?: Record<string, any>): string {
        if (!params) return text;

        return text.replace(/\{\{(\w+)\}\}/g, (match, key) => {
            return params[key] !== undefined ? String(params[key]) : match;
        });
    }

    /**
     * Translate a key to the current locale
     * @param key - The translation key (dot notation supported)
     * @param params - Parameters for placeholder replacement (optional)
     * @param fallback - Fallback text if translation not found
     * @returns Translated text or fallback
     */
    t(key: string, params?: Record<string, any> | string, fallback?: string): string {
        let actualParams: Record<string, any> | undefined;
        let actualFallback: string | undefined;

        if (typeof params === "string") {
            actualFallback = params;
        } else {
            actualParams = params;
            actualFallback = fallback;
        }

        const currentTranslation = this.translations[this.currentLocale];
        if (currentTranslation) {
            const value = this.getNestedValue(currentTranslation, key);
            if (value) {
                return this.replacePlaceholders(value, actualParams);
            }
        }

        const fallbackTranslation = this.translations[this.fallbackLocale];
        if (fallbackTranslation) {
            const value = this.getNestedValue(fallbackTranslation, key);
            if (value) {
                return this.replacePlaceholders(value, actualParams);
            }
        }

        return actualFallback || key;
    }

    getLocale(): string {
        return this.currentLocale;
    }

    updateLocale(newLocale?: string): void {
        if (newLocale) {
            this.currentLocale = newLocale;
            console.log(`[MainI18n] Locale updated to: ${newLocale}`);
        } else {
            this.loadCurrentLocale();
            console.log(`[MainI18n] Locale reloaded from settings: ${this.currentLocale}`);
        }
    }

    initialize(): void {
        this.loadCurrentLocale();
        console.log(`[MainI18n] Initialized with locale: ${this.currentLocale}`);
    }
}

export const mainI18n = new MainI18n();

if (!IS_WEB) {
    (globalThis as any).__plexcord_main_i18n = mainI18n;
}

export const t = (key: string, params?: Record<string, any> | string, fallback?: string): string => {
    return mainI18n.t(key, params, fallback);
};
