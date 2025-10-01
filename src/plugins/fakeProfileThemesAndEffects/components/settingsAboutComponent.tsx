/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2024 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { t } from "@api/i18n";
import { Margins } from "@utils/margins";
import { Forms } from "@webpack/common";

export const settingsAboutComponent = () => (
    <Forms.FormSection>
        <Forms.FormTitle tag="h3">{t("plugin.fakeProfileThemesAndEffects.modal.usage.title")}</Forms.FormTitle>
        <Forms.FormText>
            {t("plugin.fakeProfileThemesAndEffects.modal.usage.intro")}
            <div className={Margins.top8}>
                <b>{t("plugin.fakeProfileThemesAndEffects.modal.usage.setColor")}</b>
            </div>
            <ol
                className={Margins.bottom8}
                style={{ listStyle: "decimal", paddingLeft: "40px" }}
            >
                <li>{t("plugin.fakeProfileThemesAndEffects.modal.usage.step1")}</li>
                <li>{t("plugin.fakeProfileThemesAndEffects.modal.usage.step2")}</li>
                <li>{t("plugin.fakeProfileThemesAndEffects.modal.usage.step3", { copy: t("plugin.fakeProfileThemesAndEffects.button.copyFPTE") })}</li>
                <li>{t("plugin.fakeProfileThemesAndEffects.modal.usage.step4")}</li>
            </ol>
        </Forms.FormText>
    </Forms.FormSection>
);
