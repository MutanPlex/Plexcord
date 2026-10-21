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
import type { MediaModalItem as NewMediaModalItem, MediaModalProps as NewMediaModalProps, ModalOptions as NewModalOptions, RenderModalProps } from "@plexcord/discord-types";
import { filters, findComponentByCodeLazy, mapMangledModuleLazy } from "@webpack";
import { Alerts, closeAllModals, closeModal, openMediaModal, openModal, openModalLazy } from "@webpack/common";
import type { ComponentType, PropsWithChildren, Ref } from "react";

import { LazyComponent } from "./react";

/** @deprecated Migrate to new Modals */
export const enum ModalSize {
    SMALL = "small",
    MEDIUM = "medium",
    LARGE = "large",
    DYNAMIC = "dynamic",
}

/** @deprecated Use RenderModalProps from @plexcord/discord-types */
export type ModalProps = RenderModalProps;

/** @deprecated Use ModalOptions from @plexcord/discord-types */
export type ModalOptions = NewModalOptions;

/** @deprecated Use MediaModalItem from @plexcord/discord-types */
export type MediaModalItem = NewMediaModalItem & Record<PropertyKey, any>;

/** @deprecated Use MediaModalProps from @plexcord/discord-types */
export type MediaModalProps = Omit<NewMediaModalProps, "items"> & { items: MediaModalItem[]; };

interface Modals {
    ModalRoot: ComponentType<PropsWithChildren<{
        transitionState: number;
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

/** @deprecated Migrate to new Modals (Modal / ConfirmModal from @webpack/common) */
export const Modals: Modals = mapMangledModuleLazy(".MODAL_ROOT_LEGACY,", {
    ModalRoot: filters.componentByCode('.MODAL,"aria-labelledby":'),
    ModalHeader: filters.componentByCode(",id:"),
    ModalContent: filters.componentByCode("scrollbarType:"),
    ModalFooter: filters.componentByCode(".HORIZONTAL_REVERSE,"),
    ModalCloseButton: filters.componentByCode(".withCircleBackground")
});

/** @deprecated Migrate to new Modals */
export const ModalRoot = LazyComponent(() => Modals.ModalRoot);
/** @deprecated Migrate to new Modals */
export const ModalHeader = LazyComponent(() => Modals.ModalHeader);
/** @deprecated Migrate to new Modals */
export const ModalContent = LazyComponent(() => Modals.ModalContent);
/** @deprecated Migrate to new Modals */
export const ModalFooter = LazyComponent(() => Modals.ModalFooter);
/** @deprecated Migrate to new Modals */
export const ModalCloseButton = LazyComponent(() => Modals.ModalCloseButton);
export const CloseButton = findComponentByCodeLazy("CLOSE_BUTTON_LABEL");

/** @deprecated Import the modal functions from @webpack/common */
export const ModalAPI = {
    openModal,
    openModalLazy,
    closeModal,
    closeAllModals
};

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

export {
    /** @deprecated Import from @webpack/common */
    closeAllModals,
    /** @deprecated Import from @webpack/common */
    closeModal,
    /** @deprecated Import from @webpack/common */
    openMediaModal,
    /** @deprecated Import from @webpack/common */
    openModal,
    /** @deprecated Import from @webpack/common */
    openModalLazy
};
