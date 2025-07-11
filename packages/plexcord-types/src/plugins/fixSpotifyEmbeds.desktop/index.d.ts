import { OptionType } from "../../utils/types";
declare const _default: {
    name: string;
    description: string;
    authors: {
        name: string;
        id: bigint;
    }[];
    settings: import("../../utils/types").DefinedSettings<{
        volume: {
            type: OptionType.SLIDER;
            description: string;
            markers: number[];
            stickToMarkers: false;
            default: number;
        };
    }, {}, {}>;
} & Record<string, any>;
export default _default;
