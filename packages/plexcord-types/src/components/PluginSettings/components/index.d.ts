import { DefinedSettings, PluginOptionBase } from "../../../utils/types";
interface ISettingElementPropsBase<T> {
    option: T;
    onChange(newValue: any): void;
    pluginSettings: {
        [setting: string]: any;
        enabled: boolean;
    };
    id: string;
    onError(hasError: boolean): void;
    definedSettings?: DefinedSettings;
}
export type ISettingElementProps<T extends PluginOptionBase> = ISettingElementPropsBase<T>;
export type ISettingCustomElementProps<T extends Omit<PluginOptionBase, "description" | "placeholder">> = ISettingElementPropsBase<T>;
export * from "../../Badge";
export * from "./SettingBooleanComponent";
export * from "./SettingCustomComponent";
export * from "./SettingNumericComponent";
export * from "./SettingSelectComponent";
export * from "./SettingSliderComponent";
export * from "./SettingTextComponent";
