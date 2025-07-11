import { ReactNode } from "react";
export interface NicknameIconProps {
    userId: string;
}
export type NicknameIconFactory = (props: NicknameIconProps) => ReactNode | Promise<ReactNode>;
export interface NicknameIcon {
    priority: number;
    factory: NicknameIconFactory;
}
export declare function addNicknameIcon(id: string, factory: NicknameIconFactory, priority?: number): Map<string, NicknameIcon>;
export declare function removeNicknameIcon(id: string): boolean;
export declare function _renderIcons(props: NicknameIconProps): import("react").JSX.Element[];
