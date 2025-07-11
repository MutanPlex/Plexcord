import "./styles.css";
import { StartAt } from "../../utils/types";
import { BlockDisplayType, ColorType, RenderType } from "./constants";
interface ParsedColorInfo {
    type: "color";
    color: string;
    colorType: ColorType;
    text: string;
}
declare const _default: {
    authors: {
        name: string;
        id: bigint;
    }[];
    name: string;
    description: string;
    settings: import("../../utils/types").DefinedSettings<{
        renderType: {
            type: import("../../utils/types").OptionType.SELECT;
            description: string;
            options: ({
                label: string;
                value: RenderType;
                default: true;
            } | {
                label: string;
                value: RenderType;
                default?: undefined;
            })[];
        };
        enableShortHexCodes: {
            type: import("../../utils/types").OptionType.BOOLEAN;
            description: string;
            default: true;
            restartNeeded: true;
        };
        blockView: {
            type: import("../../utils/types").OptionType.SELECT;
            disabled: () => boolean;
            description: string;
            options: ({
                label: string;
                value: BlockDisplayType;
                default: true;
            } | {
                label: string;
                value: BlockDisplayType;
                default?: undefined;
            })[];
        };
    }, import("../../utils/types").SettingsChecks<{
        renderType: {
            type: import("../../utils/types").OptionType.SELECT;
            description: string;
            options: ({
                label: string;
                value: RenderType;
                default: true;
            } | {
                label: string;
                value: RenderType;
                default?: undefined;
            })[];
        };
        enableShortHexCodes: {
            type: import("../../utils/types").OptionType.BOOLEAN;
            description: string;
            default: true;
            restartNeeded: true;
        };
        blockView: {
            type: import("../../utils/types").OptionType.SELECT;
            disabled: () => boolean;
            description: string;
            options: ({
                label: string;
                value: BlockDisplayType;
                default: true;
            } | {
                label: string;
                value: BlockDisplayType;
                default?: undefined;
            })[];
        };
    }>, {}>;
    patches: ({
        find: string;
        group: true;
        replacement: {
            match: RegExp;
            replace: string;
        };
    } | {
        find: string;
        replacement: {
            match: RegExp;
            replace: string;
        };
        group?: undefined;
    })[];
    start(): void;
    startAt: StartAt.Init;
    getColor(order: number): {
        order: number;
        requiredFirstCharacters: string[];
        match(content: string): RegExpExecArray | null;
        parse(matchedContent: RegExpExecArray, _: any, parseProps: Record<string, any>): ParsedColorInfo | ({
            type: "text";
            content: string;
        });
        react: import("react").FunctionComponent<ParsedColorInfo>;
    };
} & Record<string, any>;
export default _default;
