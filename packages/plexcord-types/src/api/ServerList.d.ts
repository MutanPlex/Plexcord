import { ComponentType } from "react";
export declare const enum ServerListRenderPosition {
    Above = 0,
    In = 1,
    Below = 2
}
export declare function addServerListElement(position: ServerListRenderPosition, renderFunction: ComponentType): void;
export declare function removeServerListElement(position: ServerListRenderPosition, renderFunction: ComponentType): void;
export declare const renderAll: (position: ServerListRenderPosition) => import("react").JSX.Element[];
