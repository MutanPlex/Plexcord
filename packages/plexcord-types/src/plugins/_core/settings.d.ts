import { OptionType } from "../../utils/types";
type SectionType = "HEADER" | "DIVIDER" | "CUSTOM";
type SectionTypes = Record<SectionType, SectionType>;
declare const _default: {
    name: string;
    description: string;
    authors: {
        name: string;
        id: bigint;
    }[];
    required: true;
    patches: ({
        find: string;
        replacement: ({
            match: RegExp;
            replace: (m: string, component: string, props: string) => string;
        } | {
            match: RegExp;
            replace: string;
        })[];
    } | {
        find: string;
        replacement: {
            match: RegExp;
            replace: (_: string, sectionTypes: string, commaOrSemi: string, elements: string, element: string) => string;
        }[];
    } | {
        find: string;
        replacement: {
            match: RegExp;
            replace: string;
        };
    })[];
    customSections: ((SectionTypes: SectionTypes) => any)[];
    makeSettingsCategories(SectionTypes: SectionTypes): any[];
    isRightSpot({ header, settings }: {
        header?: string;
        settings?: string[];
    }): boolean | undefined;
    patchedSettings: WeakSet<WeakKey>;
    addSettings(elements: any[], element: {
        header?: string;
        settings: string[];
    }, sectionTypes: SectionTypes): void;
    wrapSettingsHook(originalHook: (...args: any[]) => Record<string, unknown>[]): (...args: any[]) => Record<string, unknown>[];
    options: {
        settingsLocation: {
            type: OptionType.SELECT;
            description: string;
            options: ({
                label: string;
                value: string;
                default?: undefined;
            } | {
                label: string;
                value: string;
                default: true;
            })[];
        };
    };
    readonly electronVersion: any;
    readonly chromiumVersion: any;
    readonly additionalInfo: string;
    getInfoRows(): string[];
    getInfoString(): string;
    makeInfoElements(Component: React.ComponentType<React.PropsWithChildren>, props: React.PropsWithChildren): import("react").JSX.Element[];
} & Record<string, any>;
export default _default;
