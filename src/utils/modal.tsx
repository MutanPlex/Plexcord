/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2022 Vendicated and contributors
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

import { plugins, t } from "@api/i18n";
import { showNotice } from "@api/Notices";
import { Settings } from "@api/Settings";
import { showErrorToast } from "@components/settings/tabs/plugins";
import { filters, findByCodeLazy, findComponentByCodeLazy, mapMangledModuleLazy } from "@webpack";
import { Alerts } from "@webpack/common";
import type { ComponentType, PropsWithChildren, ReactNode, Ref } from "react";

import { LazyComponent } from "./react";

export const enum ModalSize {
    SMALL = "small",
    MEDIUM = "medium",
    LARGE = "large",
    DYNAMIC = "dynamic",
}

const enum ModalTransitionState {
    ENTERING,
    ENTERED,
    EXITING,
    EXITED,
    HIDDEN,
}

export interface ModalProps {
    transitionState: ModalTransitionState;
    onClose(): void;
}

export interface ModalOptions {
    modalKey?: string;
    onCloseRequest?: (() => void);
    onCloseCallback?: (() => void);
}

type RenderFunction = (props: ModalProps) => ReactNode | Promise<ReactNode>;

interface Modals {
    ModalRoot: ComponentType<PropsWithChildren<{
        transitionState: ModalTransitionState;
        size?: ModalSize;
        role?: "alertdialog" | "dialog";
        className?: string;
        fullscreenOnMobile?: boolean;
        "aria-label"?: string;
        "aria-labelledby"?: string;
        onAnimationEnd?(): string;
    }>>;
    ModalHeader: ComponentType<PropsWithChildren<{
        /** Flex.Justify.START */
        justify?: string;
        /** Flex.Direction.HORIZONTAL */
        direction?: string;
        /** Flex.Align.CENTER */
        align?: string;
        /** Flex.Wrap.NO_WRAP */
        wrap?: string;
        separator?: boolean;

        className?: string;
    }>>;
    /** This also accepts Scroller props but good luck with that */
    ModalContent: ComponentType<PropsWithChildren<{
        className?: string;
        scrollerRef?: Ref<HTMLElement>;
        [prop: string]: any;
    }>>;
    ModalFooter: ComponentType<PropsWithChildren<{
        /** Flex.Justify.START */
        justify?: string;
        /** Flex.Direction.HORIZONTAL_REVERSE */
        direction?: string;
        /** Flex.Align.STRETCH */
        align?: string;
        /** Flex.Wrap.NO_WRAP */
        wrap?: string;
        separator?: boolean;

        className?: string;
    }>>;
    ModalCloseButton: ComponentType<{
        focusProps?: any;
        onClick(): void;
        withCircleBackground?: boolean;
        hideOnFullscreen?: boolean;
        className?: string;
    }>;
}

export const Modals: Modals = mapMangledModuleLazy(':"thin")', {
    ModalRoot: filters.componentByCode('.MODAL,"aria-labelledby":'),
    ModalHeader: filters.componentByCode(",id:"),
    ModalContent: filters.componentByCode("scrollbarType:"),
    ModalFooter: filters.componentByCode(".HORIZONTAL_REVERSE,"),
    ModalCloseButton: filters.componentByCode(".withCircleBackground")
});

export const ModalRoot = LazyComponent(() => Modals.ModalRoot);
export const ModalHeader = LazyComponent(() => Modals.ModalHeader);
export const ModalContent = LazyComponent(() => Modals.ModalContent);
export const ModalFooter = LazyComponent(() => Modals.ModalFooter);
export const ModalCloseButton = LazyComponent(() => Modals.ModalCloseButton);
export const CloseButton = findComponentByCodeLazy("CLOSE_BUTTON_LABEL");

export type MediaModalItem = {
    url: string;
    type: "IMAGE" | "VIDEO";
    original?: string;
    alt?: string;
    width?: number;
    height?: number;
    animated?: boolean;
    maxWidth?: number;
    maxHeight?: number;
} & Record<PropertyKey, any>;

export type MediaModalProps = {
    location?: string;
    contextKey?: string;
    onCloseCallback?: () => void;
    className?: string;
    items: MediaModalItem[];
    startingIndex?: number;
    onIndexChange?: (...args: any[]) => void;
    fit?: string;
    shouldRedactExplicitContent?: boolean;
    shouldHideMediaOptions?: boolean;
};

// Modal key: "Media Viewer Modal"
export const openMediaModal: (props: MediaModalProps) => void = findByCodeLazy("hasMediaOptions", "shouldHideMediaOptions");

interface ModalAPI {
    /**
     * Wait for the render promise to resolve, then open a modal with it.
     * This is equivalent to render().then(openModal)
     * You should use the Modal components exported by this file
     */
    openModalLazy: (render: () => Promise<RenderFunction>, options?: ModalOptions & { contextKey?: string; }) => Promise<string>;
    /**
     * Open a Modal with the given render function.
     * You should use the Modal components exported by this file
     */
    openModal: (render: RenderFunction, options?: ModalOptions, contextKey?: string) => string;
    /**
     * Close a modal by its key
     */
    closeModal: (modalKey: string, contextKey?: string) => void;
    /**
     * Close all open modals
     */
    closeAllModals: () => void;
}

export const ModalAPI: ModalAPI = mapMangledModuleLazy(".modalKey?", {
    openModalLazy: filters.byCode(".modalKey?"),
    openModal: filters.byCode(",instant:"),
    closeModal: filters.byCode(".onCloseCallback()"),
    closeAllModals: filters.byCode(".getState();for")
});

function restartPrompt(): Promise<boolean> {
    return new Promise(resolve => {
        Alerts.show({
            title: t(plugins.restart.required),
            body: (
                <>
                    <p style={{ textAlign: "center" }}>
                        {t(plugins.restart.fully)}
                    </p>
                    <p style={{ textAlign: "center" }}>{t(plugins.restart.would)}</p>
                </>
            ),
            confirmText: t(plugins.restart.button.now),
            cancelText: t(plugins.restart.button.later),
            onConfirm: () => resolve(true),
            onCancel: () => resolve(false),
        });
    });
}

export async function toggleEnabled(name: string) {
    let restartNeeded = false;
    function onRestartNeeded() {
        restartNeeded = true;
    }

    async function beforeReturn(settings: any, wasEnabled: boolean) {
        if (restartNeeded) {
            const confirmed = await restartPrompt();
            if (!confirmed) return false;

            settings.enabled = !wasEnabled;
            location.reload();
            return true;
        }

        return true;
    }

    const plugin = Plexcord.Plugins.plugins[name];
    const pluginName = typeof plugin.name === "function" ? plugin.name() : plugin.name;
    const settings = Settings.plugins[pluginName];
    const isEnabled = () => settings.enabled ?? false;
    const wasEnabled = isEnabled();

    if (!wasEnabled) {
        const { restartNeeded, failures } = Plexcord.Plugins.startDependenciesRecursive(plugin);
        if (failures.length) {
            console.error(`Failed to start dependencies for ${plugin.name}: ${failures.join(", ")}`);
            showNotice(t(plugins.restart.failed) + failures.join(", "), t(plugins.restart.button.close), () => null);
            return false;
        } else if (restartNeeded) {
            settings.enabled = true;
            onRestartNeeded();
            return await beforeReturn(settings, wasEnabled);
        }
    }

    if (plugin.patches?.length) {
        onRestartNeeded();
        return await beforeReturn(settings, wasEnabled);
    }

    if (wasEnabled && !plugin.started) {
        settings.enabled = !wasEnabled;
        return await beforeReturn(settings, wasEnabled);
    }

    const result = wasEnabled ? Plexcord.Plugins.stopPlugin(plugin) : Plexcord.Plugins.startPlugin(plugin);

    if (!result) {
        settings.enabled = false;
        const msg = wasEnabled ? t(plugins.error.stopping, { plugin: plugin.name }) : t(plugins.error.starting, { plugin: plugin.name });
        console.error(msg);
        showErrorToast(msg);
        return false;
    }

    settings.enabled = !wasEnabled;
    return await beforeReturn(settings, wasEnabled);
}

export const { openModalLazy, openModal, closeModal, closeAllModals } = ModalAPI;
