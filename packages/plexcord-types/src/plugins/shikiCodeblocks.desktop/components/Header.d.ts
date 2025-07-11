import { Language } from "../api/languages";
import { DeviconSetting } from "../types";
export interface HeaderProps {
    langName?: string;
    useDevIcon: DeviconSetting;
    shikiLang: Language | null;
}
export declare function Header({ langName, useDevIcon, shikiLang }: HeaderProps): import("react").JSX.Element;
