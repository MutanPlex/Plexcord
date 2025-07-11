import type { Guild } from "discord-types/general";
export interface BuilderProps {
    guild?: Guild | undefined;
}
export declare function Builder({ guild }: BuilderProps): import("react").JSX.Element;
