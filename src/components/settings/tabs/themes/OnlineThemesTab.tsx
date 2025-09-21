/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2025 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { t } from "@api/i18n";
import { useSettings } from "@api/Settings";
import { Margins } from "@utils/margins";
import { classes } from "@utils/misc";
import { Card, Forms, TextArea, useState } from "@webpack/common";

export function OnlineThemesTab() {
    const settings = useSettings(["themeLinks"]);

    const [themeText, setThemeText] = useState(settings.themeLinks.join("\n"));

    // When the user leaves the online theme textbox, update the settings
    function onBlur() {
        settings.themeLinks = [...new Set(
            themeText
                .trim()
                .split(/\n+/)
                .map(s => s.trim())
                .filter(Boolean)
        )];
    }

    return (
        <>
            <Card className={classes("pc-warning-card", Margins.bottom16)}>
                <Forms.FormText>
                    {t("themes.advanced.warning")}
                </Forms.FormText>
            </Card>
            <Card className="pc-settings-card">
                <Forms.FormTitle tag="h5">{t("themes.advanced.paste")}</Forms.FormTitle>
                <Forms.FormText>{t("themes.advanced.line")}</Forms.FormText>
                <Forms.FormText>{t("themes.advanced.prefix")}</Forms.FormText>
                <Forms.FormText>{t("themes.advanced.direct")}</Forms.FormText>
            </Card>

            <Forms.FormSection title={t("themes.online")} tag="h5">
                <TextArea
                    value={themeText}
                    onChange={setThemeText}
                    className={"pc-settings-theme-links"}
                    placeholder={t("themes.links")}
                    spellCheck={false}
                    onBlur={onBlur}
                    rows={10}
                />
            </Forms.FormSection>
        </>
    );
}
