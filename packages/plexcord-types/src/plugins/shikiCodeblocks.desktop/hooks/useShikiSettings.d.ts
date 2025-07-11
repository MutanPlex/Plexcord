import { ShikiSettings } from "../settings";
export declare function useShikiSettings<F extends keyof ShikiSettings>(settingKeys: F[], overrides?: Partial<ShikiSettings>): Partial<{
    theme: string;
    customTheme: string | undefined;
    tryHljs: import("../types").HljsSetting;
    useDevIcon: import("../types").DeviconSetting;
    bgOpacity: number;
}> & Required<Pick<{
    theme: string;
    customTheme: string | undefined;
    tryHljs: import("../types").HljsSetting;
    useDevIcon: import("../types").DeviconSetting;
    bgOpacity: number;
}, F>> & {
    isThemeLoading: boolean;
};
