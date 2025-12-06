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

import { localStorage } from "@utils/localStorage";
import { Logger } from "@utils/Logger";
import { FluxDispatcher, useEffect, useState } from "@webpack/common";

import { PlexcordCreateElement } from "../../scripts/build/inject/react.mjs";
import enTranslations, { changelog, cloud, commands, common, components, csp, memberlist, message, notifications, patchHelper, plugin, plugins, settings, sync, themes, updater, utils, } from "../locales/en";
import { NestedKeyOf } from "../locales/types";

// Type for translation keys
export type TranslationKey = NestedKeyOf<typeof enTranslations>;

// Export translation key proxies
export { changelog, cloud, commands, common, components, csp, memberlist, message, notifications, patchHelper, plugin, plugins, settings, sync, themes, updater, utils };

let Settings: any = null;
const getSettings = () => {
    if (!Settings) {
        Settings = require("./Settings").Settings;
    }
    return Settings;
};

const logger = new Logger("i18n");

export interface LocaleData {
    [key: string]: string | LocaleData;
}

export interface LanguageInfo {
    name: string;
    nativeName: string;
    code: string;
    direction: "ltr" | "rtl";
}

export const SUPPORTED_LANGUAGES: Record<string, LanguageInfo> = {
    "en-US": {
        name: "English (US)",
        nativeName: "English (US)",
        code: "en-US",
        direction: "ltr"
    },
    "tr": {
        name: "Turkish",
        nativeName: "Türkçe",
        code: "tr",
        direction: "ltr"
    }
};

interface I18nStore {
    locale: string;
    fallbackLocale: string;
    autoDetect: boolean;
    translations: Record<string, LocaleData>;
    pluginTranslations: Record<string, Record<string, LocaleData>>;
}

class I18nManager {
    private store: I18nStore;
    private listeners: Set<() => void> = new Set();
    private discordLocale: string | null = null;

    constructor() {
        this.store = {
            locale: this.getDefaultLocale(),
            fallbackLocale: "en-US",
            autoDetect: true,
            translations: {},
            pluginTranslations: {}
        };

        this.loadFromSettings();
    }

    private getDefaultLocale(): string {
        const systemLocale = navigator.language || "en-US";
        const supportedLocales = Object.keys(SUPPORTED_LANGUAGES);

        if (supportedLocales.includes(systemLocale)) {
            return systemLocale;
        }

        const languageCode = systemLocale.split("-")[0];
        const matchedLocale = supportedLocales.find(locale => locale.startsWith(languageCode));

        return matchedLocale || "en-US";
    }

    private loadFromSettings(): void {
        try {
            const settings = getSettings();
            if (settings?.language) {
                this.store.locale = settings.language.locale || this.store.locale;
                this.store.autoDetect = settings.language.autoDetect ?? this.store.autoDetect;
                this.store.fallbackLocale = settings.language.fallbackLocale || this.store.fallbackLocale;
                logger.info("Loaded i18n settings from Settings API");
                return;
            }
        } catch (error) {
            logger.warn("Failed to load from Settings API, trying localStorage:", error);
        }

        this.loadFromStorage();
    }

    private loadFromStorage(): void {
        try {
            const stored = localStorage.getItem("PlexcordI18n");
            if (stored) {
                const data = JSON.parse(stored);
                this.store = { ...this.store, ...data };
            }
        } catch (error) {
            logger.warn("Failed to load i18n data from storage:", error);
        }
    }

    private saveToStorage(): void {
        try {
            const settings = getSettings();
            if (settings?.language) {
                settings.language.locale = this.store.locale;
                settings.language.autoDetect = this.store.autoDetect;
                settings.language.fallbackLocale = this.store.fallbackLocale;
                logger.info("Saved i18n settings to Settings API");
                return;
            }
        } catch (error) {
            logger.warn("Failed to save to Settings API, using localStorage:", error);
        }

        try {
            localStorage.setItem("PlexcordI18n", JSON.stringify({
                locale: this.store.locale,
                autoDetect: this.store.autoDetect,
                fallbackLocale: this.store.fallbackLocale
            }));
        } catch (error) {
            logger.warn("Failed to save i18n data to storage:", error);
        }
    }

    private async waitForFluxDispatcher(maxRetries = 50): Promise<void> {
        return new Promise((resolve, reject) => {
            let retries = 0;

            const checkFluxDispatcher = () => {
                if (FluxDispatcher && typeof FluxDispatcher.subscribe === "function" && FluxDispatcher._actionHandlers) {
                    resolve();
                    return;
                }

                retries++;
                if (retries >= maxRetries) {
                    reject(new Error("FluxDispatcher not available after maximum retries"));
                    return;
                }

                requestAnimationFrame(checkFluxDispatcher);
            };

            checkFluxDispatcher();
        });
    }

    private async detectDiscordLocale(): Promise<void> {
        try {
            await this.waitForFluxDispatcher();

            if (!FluxDispatcher?._actionHandlers?._dependencyGraph?.n) {
                logger.warn("FluxDispatcher dependency graph not available");
                return;
            }

            const UserSettingsStore = FluxDispatcher._actionHandlers._dependencyGraph.n.find(
                (n: any) => n.displayName === "UserSettingsStore"
            );

            if (UserSettingsStore?.store?.getState) {
                const userSettings = UserSettingsStore.store.getState();
                this.discordLocale = userSettings.locale || userSettings.language;

                if (this.store.autoDetect && this.discordLocale && SUPPORTED_LANGUAGES[this.discordLocale]) {
                    this.setLocale(this.discordLocale, false);
                }
            }
        } catch (error) {
            logger.warn("Failed to detect Discord locale:", error);
        }
    }

    private async initializeFluxListener(): Promise<void> {
        try {
            await this.waitForFluxDispatcher();

            if (!FluxDispatcher?.subscribe) {
                logger.warn("FluxDispatcher not available after waiting");
                return;
            }

            FluxDispatcher.subscribe("USER_SETTINGS_UPDATE" as any, (data: any) => {
                if (data.settings && (data.settings.locale || data.settings.language)) {
                    const newLocale = data.settings.locale || data.settings.language;

                    if (this.store.autoDetect && newLocale !== this.discordLocale && SUPPORTED_LANGUAGES[newLocale]) {
                        this.discordLocale = newLocale;
                        this.setLocale(newLocale, false);
                    }
                }
            });
        } catch (error) {
            logger.warn("Failed to initialize FluxDispatcher listener:", error);
        }
    }

    public getLocale(): string {
        return this.store.locale;
    }

    public getFallbackLocale(): string {
        return this.store.fallbackLocale;
    }

    public isAutoDetectEnabled(): boolean {
        return this.store.autoDetect;
    }

    public setLocale(locale: string, userInitiated = true): void {
        if (!SUPPORTED_LANGUAGES[locale]) {
            logger.warn(`Unsupported locale: ${locale}`);
            return;
        }

        const oldLocale = this.store.locale;
        this.store.locale = locale;

        if (userInitiated) {
            this.store.autoDetect = false;
        }

        this.saveToStorage();
        this.notifyListeners();

        if (IS_DISCORD_DESKTOP && userInitiated) {
            try {
                PlexcordNative.i18n.updateMainLocale(locale);
            } catch (error) {
                logger.warn("Failed to notify main process about locale change:", error);
            }
        }

        logger.info(`Locale changed from ${oldLocale} to ${locale} (userInitiated: ${userInitiated})`);
    }

    public setAutoDetect(enabled: boolean): void {
        this.store.autoDetect = enabled;

        if (enabled && this.discordLocale && SUPPORTED_LANGUAGES[this.discordLocale]) {
            this.setLocale(this.discordLocale, false);
        }

        this.saveToStorage();
        this.notifyListeners();
    }

    public setFallbackLocale(locale: string): void {
        if (!SUPPORTED_LANGUAGES[locale]) {
            logger.warn(`Unsupported fallback locale: ${locale}`);
            return;
        }

        this.store.fallbackLocale = locale;
        this.saveToStorage();
        this.notifyListeners();
    }

    public addTranslations(locale: string, translations: LocaleData, namespace = "core"): void {
        if (!this.store.translations[locale]) {
            this.store.translations[locale] = {};
        }

        if (namespace === "core") {
            this.store.translations[locale] = {
                ...this.store.translations[locale],
                ...translations
            };
        } else {
            if (!this.store.pluginTranslations[namespace]) {
                this.store.pluginTranslations[namespace] = {};
            }

            if (!this.store.pluginTranslations[namespace][locale]) {
                this.store.pluginTranslations[namespace][locale] = {};
            }

            this.store.pluginTranslations[namespace][locale] = {
                ...this.store.pluginTranslations[namespace][locale],
                ...translations
            };
        }

        this.notifyListeners();
    }

    public t(key: any, params?: Record<string, any>, namespace?: "core"): string;
    public t(key: any, params: Record<string, React.ReactNode>, namespace?: "core"): React.ReactNode;
    public t(key: any, params?: Record<string, any>, namespace = "core"): string | React.ReactNode {
        const { locale } = this.store;
        const fallback = this.store.fallbackLocale;

        // Convert key to string if it's a Proxy object
        const keyString = String(key);

        let translation = this.getTranslation(keyString, locale, namespace) ||
            this.getTranslation(keyString, fallback, namespace) ||
            keyString;

        if (!params) {
            return translation;
        }

        // Check if any param is a JSX element
        const hasJsxComponents = Object.values(params).some(val =>
            val && typeof val === "object" &&
            (val.$$typeof || val.type || val.props)
        );

        if (!hasJsxComponents) {
            // Simple string replacement
            Object.entries(params).forEach(([param, value]) => {
                translation = translation.replace(
                    new RegExp(`\\{\\{${param}\\}\\}`, "g"),
                    String(value)
                );
            });
            return translation;
        }

        // Handle JSX elements
        try {
            const { React } = require("@webpack/common");
            let result: React.ReactNode[] = [translation];

            Object.entries(params).forEach(([param, value]) => {
                const placeholder = `{{${param}}}`;
                const newResult: React.ReactNode[] = [];

                result.forEach(part => {
                    if (typeof part === "string" && part.includes(placeholder)) {
                        const segments = part.split(placeholder);
                        segments.forEach((segment, index) => {
                            if (segment) newResult.push(segment);
                            if (index < segments.length - 1) {
                                newResult.push(value);
                            }
                        });
                    } else {
                        newResult.push(part);
                    }
                });

                result = newResult;
            });

            if (result.length === 1 && typeof result[0] === "string") {
                return result[0];
            }

            return PlexcordCreateElement(React.Fragment, null, ...result);
        } catch (error) {
            // Fallback to string replacement
            Object.entries(params).forEach(([param, value]) => {
                translation = translation.replace(
                    new RegExp(`\\{\\{${param}\\}\\}`, "g"),
                    String(value)
                );
            });
            return translation;
        }
    }

    private getTranslation(key: string, locale: string, namespace: string): string | null {
        const keyParts = key.split(".");
        let current: any;

        if (namespace === "core") {
            current = this.store.translations[locale];
        } else {
            current = this.store.pluginTranslations[namespace]?.[locale];
        }

        if (!current) return null;

        for (const part of keyParts) {
            current = current[part];
            if (current === undefined) return null;
        }

        return typeof current === "string" ? current : null;
    }

    public getAvailableLocales(): LanguageInfo[] {
        return Object.values(SUPPORTED_LANGUAGES);
    }

    public getCurrentLocale(): string {
        return this.store.locale;
    }

    public getTranslationKeys(namespace = "core"): string[] {
        const { locale } = this.store;
        const translations = namespace === "core"
            ? this.store.translations[locale]
            : this.store.pluginTranslations[namespace]?.[locale];

        if (!translations) return [];

        const keys: string[] = [];
        const extractKeys = (obj: any, prefix = "") => {
            Object.entries(obj).forEach(([key, value]) => {
                const fullKey = prefix ? `${prefix}.${key}` : key;
                if (typeof value === "string") {
                    keys.push(fullKey);
                } else if (typeof value === "object" && value !== null) {
                    extractKeys(value, fullKey);
                }
            });
        };

        extractKeys(translations);
        return keys;
    }

    public addListener(callback: () => void): () => void {
        this.listeners.add(callback);
        return () => this.listeners.delete(callback);
    }

    private notifyListeners(): void {
        this.listeners.forEach(callback => callback());
    }

    public getDiscordLocale(): string | null {
        return this.discordLocale;
    }

    public isLocaleSupported(locale: string): boolean {
        return !!SUPPORTED_LANGUAGES[locale];
    }

    /**
     * Initialize Discord-specific features manually
     * Should be called after Discord is fully loaded
     */
    public async initializeDiscordFeatures(): Promise<void> {
        try {
            await Promise.all([
                this.detectDiscordLocale(),
                this.initializeFluxListener()
            ]);
            logger.info("Discord features initialized successfully");
        } catch (error) {
            logger.warn("Failed to initialize some Discord features:", error);
        }
    }
}

export const i18n = new I18nManager();

export function useLocale(): string {
    const [locale, setLocale] = useState(i18n.getLocale());

    useEffect(() => {
        return i18n.addListener(() => {
            setLocale(i18n.getLocale());
        });
    }, []);

    return locale;
}

export function useTranslation(namespace = "core") {
    const locale = useLocale();

    return {
        t: (key: any, params?: Record<string, any>) => i18n.t(key, params, namespace as any),
        locale,
        isAutoDetect: i18n.isAutoDetectEnabled(),
        setLocale: (newLocale: string) => i18n.setLocale(newLocale),
        setAutoDetect: (enabled: boolean) => i18n.setAutoDetect(enabled),
        getAvailableLocales: () => i18n.getAvailableLocales()
    };
}

export default i18n;

let currentGlobalLocale = i18n.getLocale();
const globalListeners = new Set<() => void>();

i18n.addListener(() => {
    currentGlobalLocale = i18n.getLocale();
    globalListeners.forEach(listener => listener());
});

interface ReactiveStore {
    locale: string;
    subscribers: Set<() => void>;
}

const reactiveStore: ReactiveStore = {
    locale: i18n.getLocale(),
    subscribers: new Set()
};

i18n.addListener(() => {
    reactiveStore.locale = i18n.getLocale();
    reactiveStore.subscribers.forEach(callback => callback());
});

export const useReactiveI18n = () => {
    const [, forceUpdate] = useState({});

    useEffect(() => {
        const callback = () => forceUpdate({});
        reactiveStore.subscribers.add(callback);
        return () => {
            reactiveStore.subscribers.delete(callback);
        };
    }, []);
};

export const useGlobalI18n = () => {
    const [, forceUpdate] = useState({});

    useEffect(() => {
        const callback = () => forceUpdate({});
        reactiveStore.subscribers.add(callback);

        return () => {
            reactiveStore.subscribers.delete(callback);
        };
    }, []);
};

export const t = (key: any, params?: Record<string, any>) => {
    return i18n.t(key as TranslationKey, params);
};

export const getCurrentLocale = () => currentGlobalLocale;

export function useGlobalLocale() {
    const [locale, setLocale] = useState(currentGlobalLocale);

    useEffect(() => {
        const listener = () => setLocale(currentGlobalLocale);
        globalListeners.add(listener);
        return () => {
            globalListeners.delete(listener);
        };
    }, []);

    return locale;
}

export function useForceUpdateOnLocaleChange() {
    const [, forceUpdate] = useState({});

    useEffect(() => {
        const listener = () => forceUpdate({});
        globalListeners.add(listener);
        return () => {
            globalListeners.delete(listener);
        };
    }, []);
}

export function withI18n<P extends object>(Component: React.ComponentType<P>) {
    const WrappedComponent = (props: P) => {
        useForceUpdateOnLocaleChange();
        return PlexcordCreateElement(Component, props);
    };

    WrappedComponent.displayName = `withI18n(${Component.displayName || Component.name})`;
    return WrappedComponent;
}
