import { JSX, ReactNode } from "react";
export type MessageAccessoryFactory = (props: Record<string, any>) => ReactNode;
export type MessageAccessory = {
    render: MessageAccessoryFactory;
    position?: number;
};
export declare const accessories: Map<string, MessageAccessory>;
export declare function addMessageAccessory(identifier: string, render: MessageAccessoryFactory, position?: number): void;
export declare function removeMessageAccessory(identifier: string): void;
export declare function _modifyAccessories(elements: JSX.Element[], props: Record<string, any>): JSX.Element[];
