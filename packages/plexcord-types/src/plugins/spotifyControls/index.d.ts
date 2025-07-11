import { OptionType } from "../../utils/types";
declare const _default: {
    name: string;
    description: string;
    authors: {
        name: string;
        id: bigint;
    }[];
    options: {
        hoverControls: {
            description: string;
            type: OptionType.BOOLEAN;
            default: false;
            onChange: (v: any) => void;
        };
        useSpotifyUris: {
            type: OptionType.BOOLEAN;
            description: string;
            default: false;
        };
        previousButtonRestartsTrack: {
            type: OptionType.BOOLEAN;
            description: string;
            default: true;
        };
    };
    patches: ({
        find: string;
        replacement: {
            match: RegExp;
            replace: string;
        };
    } | {
        find: string;
        replacement: {
            match: RegExp;
            replace: string;
        }[];
    })[];
    start: () => void;
    PanelWrapper({ PlexcordOriginal, ...props }: {
        [x: string]: any;
        PlexcordOriginal: any;
    }): import("react").JSX.Element;
} & Record<string, any>;
export default _default;
