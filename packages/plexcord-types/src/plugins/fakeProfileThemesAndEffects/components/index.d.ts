import { type ModalProps } from "../../../utils/modal";
import type { useToken } from "../../../webpack/common/types";
import type { Guild } from "discord-types/general";
import type { ComponentType, FunctionComponent, PropsWithChildren, ReactNode } from "react";
import type { ProfileEffectConfig } from "../lib/profileEffects";
export * from "./Builder";
export * from "./BuilderButton";
export * from "./BuilderColorButton";
export * from "./settingsAboutComponent";
export interface CustomizationSectionProps extends PropsWithChildren {
    borderType?: FeatureBorderType | undefined;
    className?: string | undefined;
    description?: ReactNode;
    disabled?: boolean | undefined;
    errors?: string[] | undefined;
    forcedDivider?: boolean | undefined;
    hasBackground?: boolean | undefined;
    hideDivider?: boolean | undefined;
    showBorder?: boolean | undefined;
    showPremiumIcon?: boolean | undefined;
    title?: ReactNode;
    titleIcon?: ReactNode;
    titleId?: string | undefined;
}
export declare const enum FeatureBorderType {
    LIMITED = "limited",
    PREMIUM = "premium"
}
export declare const CustomizationSection: ComponentType<CustomizationSectionProps>;
export declare const tokens: {
    unsafe_rawColors: Record<string, Parameters<useToken>[0]>;
};
export declare const useAvatarColors: (avatarURL: string | null | undefined, fallbackColor: string, desaturateColors?: boolean | undefined) => [string, string, ...string[]];
export interface CustomColorPickerProps {
    className?: string | undefined;
    eagerUpdate?: boolean | undefined;
    footer?: ReactNode;
    middle?: ReactNode;
    onChange: (color: number) => void;
    onClose?: (() => void) | undefined;
    showEyeDropper?: boolean | undefined;
    suggestedColors?: string[] | null | undefined;
    wrapperComponentType?: ComponentType | null | undefined;
    value?: string | number | null | undefined;
}
export declare const CustomColorPicker: import("../../../utils").LazyComponentWrapper<ComponentType<CustomColorPickerProps>>;
interface ProfileEffectModalProps extends ModalProps {
    analyticsLocations?: string[] | undefined;
    guild?: Guild | null | undefined;
    initialSelectedEffectId?: string | undefined;
    onApply: (effect: ProfileEffectConfig | null) => void;
}
declare let ProfileEffectModal: FunctionComponent<ProfileEffectModalProps>;
export declare function setProfileEffectModal(comp: typeof ProfileEffectModal): void;
export declare function openProfileEffectModal(initialEffectId: ProfileEffectModalProps["initialSelectedEffectId"], onApply: ProfileEffectModalProps["onApply"], guild?: ProfileEffectModalProps["guild"]): Promise<void>;
