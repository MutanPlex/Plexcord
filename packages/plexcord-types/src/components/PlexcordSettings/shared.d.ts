import "./settingsStyles.css";
import "./themesStyles.css";
import { handleComponentFailed } from "../handleComponentFailed";
import type { ComponentType, PropsWithChildren } from "react";
export declare function SettingsTab({ title, children }: PropsWithChildren<{
    title: string;
}>): import("react").JSX.Element;
export declare const handleSettingsTabError: typeof handleComponentFailed;
export declare function wrapTab(component: ComponentType<any>, tab: string): import("react").FunctionComponent<any>;
