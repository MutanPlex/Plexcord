/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2024 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

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
                        label="Primary"
                        color={primaryColor}
                        setColor={setPrimaryColor}
                        suggestedColors={avatarColors}
                    />
                    <BuilderColorButton
                        label="Accent"
                        color={accentColor}
                        setColor={setAccentColor}
                        suggestedColors={avatarColors}
                    />
                    <BuilderButton
                        label="Effect"
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
                                    copyWithToast(strToCopy, "FPTE copied to clipboard!");
                                else
                                    showToast("FPTE Builder is empty; nothing to copy!");
                            }}
                        >
                            Copy FPTE
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
                            Reset
                        </Button>
                    </div>
                </div>
            </CustomizationSection>
            <Switch
                value={preview}
                onChange={setPreview}
            >
                FPTE Builder Preview
            </Switch>
            <Switch
                value={buildLegacy}
                note="Will use more characters"
                onChange={setBuildLegacy}
            >
                Build backwards compatible FPTE
            </Switch>
        </>
    );
}
