import { SoundOverride, SoundType } from "../types";
export declare function SoundOverrideComponent({ type, override, onChange }: {
    type: SoundType;
    override: SoundOverride;
    onChange: () => Promise<void>;
}): import("react").JSX.Element;
