import { OptionType } from "../../utils/types";
declare const _default: {
    name: string;
    description: string;
    authors: {
        name: string;
        id: bigint;
    }[];
    patches: ({
        find: string;
        replacement: {
            match: RegExp;
            replace: string;
            predicate?: undefined;
        };
    } | {
        find: string;
        replacement: {
            match: RegExp;
            replace: (rest: string, relationShipTypes: string, className: string) => string;
            predicate?: undefined;
        };
    } | {
        find: string;
        replacement: {
            predicate: () => any;
            match: RegExp;
            replace: string;
        };
    })[];
    settings: import("../../utils/types").DefinedSettings<{
        sortByAffinity: {
            type: OptionType.BOOLEAN;
            default: true;
            description: string;
            restartNeeded: true;
        };
    }, {}, {}>;
    wrapSort(comparator: Function, row: any): any;
    fetchImplicitRelationships(): Promise<void>;
    start(): void;
} & Record<string, any>;
export default _default;
