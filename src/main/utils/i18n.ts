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

interface LocaleData {
    [key: string]: string | LocaleData;
}

// When adding a new language, just create the .ts file in src/locales/
const AUTO_LOCALE_MAP: Record<string, string> = {
    "en": "en-US",
    "tr": "tr"
};

class MainI18n {
    private translations: Record<string, LocaleData> = {};
    private currentLocale = "en-US";
    private fallbackLocale = "en-US";
    private loaded = false;

    async loadTranslations(): Promise<void> {
        if (this.loaded) return;

        try {
            await Promise.all(
                Object.entries(AUTO_LOCALE_MAP).map(async ([fileName, localeCode]) => {
                    try {
                        const module = await import(`../../locales/${fileName}.ts`);
                        this.translations[localeCode] = module.default;
                    } catch (error) {
                        console.warn(`[MainI18n] Failed to load ${fileName}:`, error);
                    }
                })
            );
            this.loaded = true;
        } catch (error) {
            console.error("[MainI18n] Failed to load translations:", error);
        }
    }

    private getNestedValue(obj: LocaleData, path: string): string | undefined {
        let current: any = obj;
        for (const key of path.split(".")) {
            if (current?.[key] === undefined) return undefined;
            current = current[key];
        }
        return typeof current === "string" ? current : undefined;
    }

    private replacePlaceholders(text: string, params?: Record<string, any>): string {
        if (!params) return text;
        return text.replace(/\{\{(\w+)\}\}/g, (_, key) => params[key] ?? _);
    }

    t(key: any, params?: Record<string, any> | string, fallback?: string): string {
        // Convert key to string if it's a Proxy object
        const keyString = String(key);

        const actualParams = typeof params === "object" ? params : undefined;
        const actualFallback = typeof params === "string" ? params : fallback;

        const translation = this.getNestedValue(this.translations[this.currentLocale], keyString)
            || this.getNestedValue(this.translations[this.fallbackLocale], keyString)
            || actualFallback
            || keyString;

        return this.replacePlaceholders(translation, actualParams);
    }

    getLocale(): string {
        return this.currentLocale;
    }

    updateLocale(newLocale?: string): void {
        if (newLocale) {
            this.currentLocale = newLocale;
        } else {
            const settings = RendererSettings.plain?.language;
            if (settings?.locale) this.currentLocale = settings.locale;
            if (settings?.fallbackLocale) this.fallbackLocale = settings.fallbackLocale;
        }
    }

    initialize(): void {
        this.loadTranslations().then(() => {
            this.updateLocale();
        });
    }
}

export const mainI18n = new MainI18n();

if (!IS_WEB) {
    (globalThis as any).__plexcord_main_i18n = mainI18n;
}

export const t = (key: any, params?: Record<string, any> | string, fallback?: string): string => {
    return mainI18n.t(key, params, fallback);
};

export {
    changelog,
    cloud,
    commands,
    common,
    components,
    csp,
    memberlist,
    message,
    notifications,
    patchHelper,
    plugin,
    plugins,
    settings,
    sync,
    themes,
    updater,
    utils
} from "../../locales/en";
