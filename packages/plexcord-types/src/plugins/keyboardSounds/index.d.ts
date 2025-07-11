import { OptionType } from "../../utils/types";
declare const _default: {
    name: string;
    description: string;
    authors: {
        name: string;
        id: bigint;
    }[];
    start: () => void;
    stop: () => void;
    options: {
        volume: {
            description: string;
            type: OptionType.SLIDER;
            markers: number[];
            stickToMarkers: false;
            default: number;
            onChange: (value: any) => void;
        };
    };
} & Record<string, any>;
export default _default;
