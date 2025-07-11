import type { ComponentType, HTMLProps, PropsWithChildren } from "react";
import { AvatarDecoration } from "../..";
type DecorationGridItemComponent = ComponentType<PropsWithChildren<HTMLProps<HTMLDivElement>> & {
    onSelect: () => void;
    isSelected: boolean;
}>;
export declare let DecorationGridItem: DecorationGridItemComponent;
export declare const setDecorationGridItem: (v: any) => any;
export declare const AvatarDecorationModalPreview: import("../../../../utils").LazyComponentWrapper<ComponentType<any>>;
type DecorationGridDecorationComponent = React.ComponentType<HTMLProps<HTMLDivElement> & {
    avatarDecoration: AvatarDecoration;
    onSelect: () => void;
    isSelected: boolean;
}>;
export declare let DecorationGridDecoration: DecorationGridDecorationComponent;
export declare const setDecorationGridDecoration: (v: any) => any;
export {};
