import { PluginOptionSlider } from "../../../utils/types";
import { ISettingElementProps } from ".";
export declare function makeRange(start: number, end: number, step?: number): number[];
export declare function SettingSliderComponent({ option, pluginSettings, definedSettings, id, onChange, onError }: ISettingElementProps<PluginOptionSlider>): import("react").JSX.Element;
