/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2025 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { t } from "@api/i18n";
import { useSettings } from "@api/Settings";
import { Card } from "@components/Card";
import { Flex } from "@components/Flex";
import { HeadingTertiary } from "@components/Heading";
import { Paragraph } from "@components/Paragraph";
import { TextArea, useState } from "@webpack/common";

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
        <Flex flexDirection="column" gap="1em">
            <Card variant="warning" defaultPadding>
                <HeadingTertiary>
                    {t("themes.advanced.warning")}
                </HeadingTertiary>
            </Card>
            <Card>
                <HeadingTertiary>{t("themes.advanced.paste")}</HeadingTertiary>
                <Paragraph>{t("themes.advanced.line")}</Paragraph>
                <Paragraph>{t("themes.advanced.prefix")}</Paragraph>
                <Paragraph>{t("themes.advanced.direct")}</Paragraph>
            </Card>

            <section>
                <HeadingTertiary>{t("themes.online")}</HeadingTertiary>
                <TextArea
                    value={themeText}
                    onChange={setThemeText}
                    className={"pc-settings-theme-links"}
                    placeholder={t("themes.links")}
                    spellCheck={false}
                    onBlur={onBlur}
                    rows={10}
                />
            </section>
        </Flex>
    );
}
