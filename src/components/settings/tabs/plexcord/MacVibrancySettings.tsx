/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2025 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { t } from "@api/i18n";
import { useSettings } from "@api/Settings";
import ErrorBoundary from "@components/ErrorBoundary";
import { Margins } from "@utils/margins";
import { identity } from "@utils/misc";
import { Forms, Select } from "@webpack/common";

export function VibrancySettings() {
    const settings = useSettings(["macosVibrancyStyle"]);

    return (
        <>
            <Forms.FormTitle tag="h5">{t("settings.macVibrancy.title")}</Forms.FormTitle>
            <ErrorBoundary noop>
                <Select
                    className={Margins.bottom20}
                    placeholder={t("settings.macVibrancy.placeholder")}
                    options={[
                        // Sorted from most opaque to most transparent
                        {
                            label: t("settings.macVibrancy.style.no"), value: undefined
                        },
                        {
                            label: t("settings.macVibrancy.style.underPage"),
                            value: "under-page"
                        },
                        {
                            label: t("settings.macVibrancy.style.content"),
                            value: "content"
                        },
                        {
                            label: t("settings.macVibrancy.style.window"),
                            value: "window"
                        },
                        {
                            label: t("settings.macVibrancy.style.selection"),
                            value: "selection"
                        },
                        {
                            label: t("settings.macVibrancy.style.titlebar"),
                            value: "titlebar"
                        },
                        {
                            label: t("settings.macVibrancy.style.header"),
                            value: "header"
                        },
                        {
                            label: t("settings.macVibrancy.style.sidebar"),
                            value: "sidebar"
                        },
                        {
                            label: t("settings.macVibrancy.style.tooltip"),
                            value: "tooltip"
                        },
                        {
                            label: t("settings.macVibrancy.style.menu"),
                            value: "menu"
                        },
                        {
                            label: t("settings.macVibrancy.style.popover"),
                            value: "popover"
                        },
                        {
                            label: t("settings.macVibrancy.style.fullscreenUI"),
                            value: "fullscreen-ui"
                        },
                        {
                            label: t("settings.macVibrancy.style.hud"),
                            value: "hud"
                        },
                    ]}
                    select={v => settings.macosVibrancyStyle = v}
                    isSelected={v => settings.macosVibrancyStyle === v}
                    serialize={identity} />

            </ErrorBoundary>
        </>
    );
}
