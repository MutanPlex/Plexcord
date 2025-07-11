import { Upload } from "../../api/MessageEvents";
import { ReporterTestable } from "../../utils/types";
export declare const reverseExtensionMap: Record<string, string>;
declare const _default: {
    name: string;
    authors: {
        name: string;
        id: bigint;
    }[];
    description: string;
    reporterTestable: ReporterTestable;
    patches: {
        find: string;
        replacement: {
            match: RegExp;
            replace: string;
        }[];
        predicate: () => boolean;
    }[];
    fixExt(upload: Upload): string;
} & Record<string, any>;
export default _default;
