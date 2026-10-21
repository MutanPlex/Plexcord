/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2026 Vendicated and contributors
 * Copyright (c) 2026 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { settings, t } from "@api/i18n";
import { useSettings } from "@api/Settings";
import { Divider } from "@components/Divider";
import ErrorBoundary from "@components/ErrorBoundary";
import { Heading } from "@components/Heading";
import { Paragraph } from "@components/Paragraph";
import { IS_WINDOWS } from "@utils/constants";
import { Margins } from "@utils/margins";
import { identity } from "@utils/misc";
import { Select } from "@webpack/common";

export function WindowsMaterialSettings() {
    const settingsState = useSettings(["windowsMaterial"]);

    if (!IS_WINDOWS || IS_WEB || !PlexcordNative.native.supportsWindowsMaterial()) return null;

    return (
        <>
            <Divider className={Margins.top20} />

            <Heading className={Margins.top20}>{t(settings.windowsMaterial.title)}</Heading>
            <Paragraph className={Margins.bottom16}>
                {t(settings.windowsMaterial.description)}
            </Paragraph>
            <ErrorBoundary noop>
                <Select
                    className={Margins.bottom20}
                    placeholder={t(settings.windowsMaterial.material.none)}
                    options={[
                        {
                            label: t(settings.windowsMaterial.material.none),
                            value: "none",
                            default: true
                        },
                        {
                            label: t(settings.windowsMaterial.material.mica),
                            value: "mica"
                        },
                        {
                            label: t(settings.windowsMaterial.material.tabbed),
                            value: "tabbed"
                        },
                        {
                            label: t(settings.windowsMaterial.material.acrylic),
                            value: "acrylic"
                        }
                    ]}
                    closeOnSelect={true}
                    select={v => settingsState.windowsMaterial = v}
                    isSelected={v => settingsState.windowsMaterial === v}
                    serialize={identity}
                />
            </ErrorBoundary>
        </>
    );
}
