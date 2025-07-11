import { OptionType } from "../../utils/types";
declare const _default: {
    name: string;
    authors: {
        name: string;
        id: bigint;
    }[];
    description: string;
    settings: import("../../utils/types").DefinedSettings<{
        submitRule: {
            description: string;
            type: OptionType.SELECT;
            options: {
                label: string;
                value: string;
            }[];
            default: string;
        };
        sendMessageInTheMiddleOfACodeBlock: {
            description: string;
            type: OptionType.BOOLEAN;
            default: true;
        };
    }, {}, {}>;
    patches: ({
        find: string;
        replacement: {
            match: RegExp;
            replace: (_: string, event: string, condition: string, codeblock: string) => string;
        };
    } | {
        find: string;
        replacement: {
            match: RegExp;
            replace: string;
        };
    })[];
    shouldSubmit(event: KeyboardEvent, codeblock: boolean): boolean;
} & Record<string, any>;
export default _default;
