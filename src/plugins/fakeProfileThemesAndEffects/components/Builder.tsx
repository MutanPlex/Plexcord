/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2024 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { t } from "@api/i18n";
import type { Guild } from "@plexcord/discord-types";
import { buildFPTE } from "@plugins/fakeProfileThemesAndEffects/lib/fpte";
import { useAccentColor, usePrimaryColor, useProfileEffect, useShowPreview } from "@plugins/fakeProfileThemesAndEffects/lib/profilePreview";
import { copyWithToast } from "@utils/misc";
import { Button, showToast, Switch, UserStore, useState, useToken } from "@webpack/common";

import { BuilderButton, BuilderColorButton, CustomizationSection, openProfileEffectModal, tokens, useAvatarColors } from ".";

export interface BuilderProps {
    guild?: Guild | undefined;
}

export function Builder({ guild }: BuilderProps) {
    const [primaryColor, setPrimaryColor] = usePrimaryColor(null);
    const [accentColor, setAccentColor] = useAccentColor(null);
    const [effect, setEffect] = useProfileEffect(null);
    const [preview, setPreview] = useShowPreview(true);
    const [buildLegacy, setBuildLegacy] = useState(false);

    const avatarColors = useAvatarColors(
        UserStore.getCurrentUser()?.getAvatarURL(guild?.id, 80),
        useToken(tokens.unsafe_rawColors.PRIMARY_530 as any).hex(),
        false
    );

    return (
        <>
            <CustomizationSection title="FPTE Builder">
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <BuilderColorButton
                        label={t("plugin.fakeProfileThemesAndEffects.modal.primary")}
                        color={primaryColor}
                        setColor={setPrimaryColor}
                        suggestedColors={avatarColors}
                    />
                    <BuilderColorButton
                        label={t("plugin.fakeProfileThemesAndEffects.modal.accent")}
                        color={accentColor}
                        setColor={setAccentColor}
                        suggestedColors={avatarColors}
                    />
                    <BuilderButton
                        label={t("plugin.fakeProfileThemesAndEffects.modal.effect")}
                        tooltip={effect?.title}
                        selectedStyle={effect ? {
                            background: `top / cover url(${effect.thumbnailPreviewSrc}), top / cover url(/assets/f328a6f8209d4f1f5022.png)`
                        } : undefined}
                        buttonProps={{
                            onClick() {
                                openProfileEffectModal(effect?.id, setEffect, guild);
                            }
                        }}
                    />
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            flexDirection: "column"
                        }}
                    >
                        <Button
                            size={Button.Sizes.SMALL}
                            onClick={() => {
                                const strToCopy = buildFPTE(primaryColor ?? -1, accentColor ?? -1, effect?.id ?? "", buildLegacy);
                                if (strToCopy)
                                    copyWithToast(strToCopy, t("plugin.fakeProfileThemesAndEffects.toast.copied"));
                                else
                                    showToast(t("plugin.fakeProfileThemesAndEffects.toast.empty"));
                            }}
                        >
                            {t("plugin.fakeProfileThemesAndEffects.button.copyFPTE")}
                        </Button>
                        <Button
                            look={Button.Looks.LINK}
                            color={Button.Colors.PRIMARY}
                            size={Button.Sizes.SMALL}
                            style={primaryColor === null && accentColor === null && !effect ? { visibility: "hidden" } : undefined}
                            onClick={() => {
                                setPrimaryColor(null);
                                setAccentColor(null);
                                setEffect(null);
                            }}
                        >
                            {t("plugin.fakeProfileThemesAndEffects.button.reset")}
                        </Button>
                    </div>
                </div>
            </CustomizationSection>
            <Switch
                value={preview}
                onChange={setPreview}
            >
                {t("plugin.fakeProfileThemesAndEffects.button.preview")}
            </Switch>
            <Switch
                value={buildLegacy}
                note={t("plugin.fakeProfileThemesAndEffects.button.moreCharacters")}
                onChange={setBuildLegacy}
            >
                {t("plugin.fakeProfileThemesAndEffects.button.buildBackwards")}
            </Switch>
        </>
    );
}
