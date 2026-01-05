/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2025 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { settings, t } from "@api/i18n";
import { useSettings } from "@api/Settings";
import { Divider } from "@components/Divider";
import ErrorBoundary from "@components/ErrorBoundary";
import { Heading } from "@components/Heading";
import { Paragraph } from "@components/Paragraph";
import { Margins } from "@utils/margins";
import { identity } from "@utils/misc";
import { Select } from "@webpack/common";

export function VibrancySettings() {
    const settingsState = useSettings(["macosVibrancyStyle"]);

    return (
        <>
            <Divider className={Margins.top20} />

            <Heading className={Margins.top20}>{t(settings.macVibrancy.title)}</Heading>
            <Paragraph className={Margins.bottom16}>
                {t(settings.macVibrancy.description)}
            </Paragraph >
            <ErrorBoundary noop>
                <Select
                    className={Margins.bottom20}
                    placeholder={t(settings.macVibrancy.placeholder)}
                    options={[
                        // Sorted from most opaque to most transparent
                        {
                            label: t(settings.macVibrancy.style.no), value: undefined
                        },
                        {
                            label: t(settings.macVibrancy.style.underPage),
                            value: "under-page"
                        },
                        {
                            label: t(settings.macVibrancy.style.content),
                            value: "content"
                        },
                        {
                            label: t(settings.macVibrancy.style.window),
                            value: "window"
                        },
                        {
                            label: t(settings.macVibrancy.style.selection),
                            value: "selection"
                        },
                        {
                            label: t(settings.macVibrancy.style.titlebar),
                            value: "titlebar"
                        },
                        {
                            label: t(settings.macVibrancy.style.header),
                            value: "header"
                        },
                        {
                            label: t(settings.macVibrancy.style.sidebar),
                            value: "sidebar"
                        },
                        {
                            label: t(settings.macVibrancy.style.tooltip),
                            value: "tooltip"
                        },
                        {
                            label: t(settings.macVibrancy.style.menu),
                            value: "menu"
                        },
                        {
                            label: t(settings.macVibrancy.style.popover),
                            value: "popover"
                        },
                        {
                            label: t(settings.macVibrancy.style.fullscreenUI),
                            value: "fullscreen-ui"
                        },
                        {
                            label: t(settings.macVibrancy.style.hud),
                            value: "hud"
                        },
                    ]}
                    select={v => settingsState.macosVibrancyStyle = v}
                    isSelected={v => settingsState.macosVibrancyStyle === v}
                    serialize={identity} />

            </ErrorBoundary>
        </>
    );
}
