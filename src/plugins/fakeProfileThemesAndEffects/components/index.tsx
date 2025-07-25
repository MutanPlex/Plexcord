/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2024 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import type { Guild, useToken } from "@plexcord/discord-types";
import type { ProfileEffectConfig } from "@plugins/fakeProfileThemesAndEffects/lib/profileEffects";
import { type ModalProps, openModal } from "@utils/modal";
import { extractAndLoadChunksLazy, findByCodeLazy, findByPropsLazy, findComponentByCodeLazy } from "@webpack";
import type { ComponentType, FunctionComponent, PropsWithChildren, ReactNode } from "react";

export * from "./Builder";
export * from "./BuilderButton";
export * from "./BuilderColorButton";
export * from "./settingsAboutComponent";

export interface CustomizationSectionProps extends PropsWithChildren {
    borderType?: FeatureBorderType | undefined;
    className?: string | undefined;
    description?: ReactNode;
    disabled?: boolean | undefined /* = false */;
    errors?: string[] | undefined;
    forcedDivider?: boolean | undefined /* = false */;
    hasBackground?: boolean | undefined /* = false */;
    hideDivider?: boolean | undefined /* = false */;
    showBorder?: boolean | undefined /* = false */;
    showPremiumIcon?: boolean | undefined /* = false */;
    title?: ReactNode;
    titleIcon?: ReactNode;
    titleId?: string | undefined;
}

// Original name: FeatureBorderTypes
export const enum FeatureBorderType {
    LIMITED = "limited",
    PREMIUM = "premium",
}

export const CustomizationSection: ComponentType<CustomizationSectionProps>
    = findComponentByCodeLazy(".customizationSectionBackground");

export const tokens: {
    unsafe_rawColors: Record<string, Parameters<useToken>[0]>;
} = findByPropsLazy("unsafe_rawColors", "modules");

export const useAvatarColors: (
    avatarURL: string | null | undefined,
    fallbackColor: string,
    desaturateColors?: boolean | undefined /* = true */
) => [string, string, ...string[]] = findByCodeLazy(".palette[", ".desaturateUserColors");

export interface CustomColorPickerProps {
    className?: string | undefined;
    eagerUpdate?: boolean | undefined /* = false */;
    footer?: ReactNode;
    middle?: ReactNode;
    onChange: (color: number) => void;
    onClose?: (() => void) | undefined;
    showEyeDropper?: boolean | undefined /* = false */;
    suggestedColors?: string[] | null | undefined;
    wrapperComponentType?: ComponentType | null | undefined;
    value?: string | number | null | undefined;
}

export const CustomColorPicker = findComponentByCodeLazy<CustomColorPickerProps>(".customColorPicker");

interface ProfileEffectModalProps extends ModalProps {
    analyticsLocations?: string[] | undefined;
    guild?: Guild | null | undefined;
    initialSelectedEffectId?: string | undefined;
    onApply: (effect: ProfileEffectConfig | null) => void;
}

let ProfileEffectModal: FunctionComponent<ProfileEffectModalProps> = () => null;

export function setProfileEffectModal(comp: typeof ProfileEffectModal) {
    ProfileEffectModal = comp;
}

const requireProfileEffectModal = extractAndLoadChunksLazy([/guild:\i,initialSelectedEffectId:/, /\i\.\i\i\)/]);

export async function openProfileEffectModal(
    initialEffectId: ProfileEffectModalProps["initialSelectedEffectId"],
    onApply: ProfileEffectModalProps["onApply"],
    guild?: ProfileEffectModalProps["guild"]
) {
    await requireProfileEffectModal();
    openModal(modalProps => (
        <ProfileEffectModal
            {...modalProps}
            initialSelectedEffectId={initialEffectId}
            guild={guild}
            onApply={onApply}
        />
    ));
}
