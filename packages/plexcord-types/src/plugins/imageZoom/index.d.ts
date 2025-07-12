import { NavContextMenuPatchCallback } from "../../api/ContextMenu";
import { OptionType } from "../../utils/types";
import { JSX } from "react";
import type { Root } from "react-dom/client";
import { MagnifierProps } from "./components/Magnifier";
export declare const settings: import("../../utils/types").DefinedSettings<{
    saveZoomValues: {
        type: OptionType.BOOLEAN;
        description: string;
        default: true;
    };
    invertScroll: {
        type: OptionType.BOOLEAN;
        description: string;
        default: true;
    };
    nearestNeighbour: {
        type: OptionType.BOOLEAN;
        description: string;
        default: false;
    };
    square: {
        type: OptionType.BOOLEAN;
        description: string;
        default: false;
    };
    zoom: {
        description: string;
        type: OptionType.SLIDER;
        markers: number[];
        default: number;
        stickToMarkers: false;
    };
    size: {
        description: string;
        type: OptionType.SLIDER;
        markers: number[];
        default: number;
        stickToMarkers: false;
    };
    zoomSpeed: {
        description: string;
        type: OptionType.SLIDER;
        markers: number[];
        default: number;
        stickToMarkers: false;
    };
    showMetadata: {
        type: OptionType.BOOLEAN;
        description: string;
        default: true;
    };
}, import("../../utils/types").SettingsChecks<{
    saveZoomValues: {
        type: OptionType.BOOLEAN;
        description: string;
        default: true;
    };
    invertScroll: {
        type: OptionType.BOOLEAN;
        description: string;
        default: true;
    };
    nearestNeighbour: {
        type: OptionType.BOOLEAN;
        description: string;
        default: false;
    };
    square: {
        type: OptionType.BOOLEAN;
        description: string;
        default: false;
    };
    zoom: {
        description: string;
        type: OptionType.SLIDER;
        markers: number[];
        default: number;
        stickToMarkers: false;
    };
    size: {
        description: string;
        type: OptionType.SLIDER;
        markers: number[];
        default: number;
        stickToMarkers: false;
    };
    zoomSpeed: {
        description: string;
        type: OptionType.SLIDER;
        markers: number[];
        default: number;
        stickToMarkers: false;
    };
    showMetadata: {
        type: OptionType.BOOLEAN;
        description: string;
        default: true;
    };
}>, {}>;
declare const _default: {
    name: string;
    description: string;
    authors: {
        name: string;
        id: bigint;
    }[];
    tags: string[];
    managedStyle: string;
    patches: ({
        find: string;
        replacement: {
            match: RegExp;
            replace: string;
        }[];
    } | {
        find: string;
        replacement: {
            match: RegExp;
            replace: string;
        };
    })[];
    settings: import("../../utils/types").DefinedSettings<{
        saveZoomValues: {
            type: OptionType.BOOLEAN;
            description: string;
            default: true;
        };
        invertScroll: {
            type: OptionType.BOOLEAN;
            description: string;
            default: true;
        };
        nearestNeighbour: {
            type: OptionType.BOOLEAN;
            description: string;
            default: false;
        };
        square: {
            type: OptionType.BOOLEAN;
            description: string;
            default: false;
        };
        zoom: {
            description: string;
            type: OptionType.SLIDER;
            markers: number[];
            default: number;
            stickToMarkers: false;
        };
        size: {
            description: string;
            type: OptionType.SLIDER;
            markers: number[];
            default: number;
            stickToMarkers: false;
        };
        zoomSpeed: {
            description: string;
            type: OptionType.SLIDER;
            markers: number[];
            default: number;
            stickToMarkers: false;
        };
        showMetadata: {
            type: OptionType.BOOLEAN;
            description: string;
            default: true;
        };
    }, import("../../utils/types").SettingsChecks<{
        saveZoomValues: {
            type: OptionType.BOOLEAN;
            description: string;
            default: true;
        };
        invertScroll: {
            type: OptionType.BOOLEAN;
            description: string;
            default: true;
        };
        nearestNeighbour: {
            type: OptionType.BOOLEAN;
            description: string;
            default: false;
        };
        square: {
            type: OptionType.BOOLEAN;
            description: string;
            default: false;
        };
        zoom: {
            description: string;
            type: OptionType.SLIDER;
            markers: number[];
            default: number;
            stickToMarkers: false;
        };
        size: {
            description: string;
            type: OptionType.SLIDER;
            markers: number[];
            default: number;
            stickToMarkers: false;
        };
        zoomSpeed: {
            description: string;
            type: OptionType.SLIDER;
            markers: number[];
            default: number;
            stickToMarkers: false;
        };
        showMetadata: {
            type: OptionType.BOOLEAN;
            description: string;
            default: true;
        };
    }>, {}>;
    contextMenus: {
        "image-context": NavContextMenuPatchCallback;
    };
    currentMagnifierElement: React.FunctionComponentElement<MagnifierProps & JSX.IntrinsicAttributes> | null;
    element: HTMLDivElement | null;
    Magnifier: import("react").FunctionComponent<MagnifierProps>;
    root: Root | null;
    makeProps(instance: any): {
        onMouseOver: () => void;
        onMouseOut: () => void;
        onMouseDown: (e: React.MouseEvent) => void;
        onMouseUp: () => void;
        onClick: (e: React.MouseEvent) => void;
        id: any;
    };
    handleImageClick(e: React.MouseEvent | MouseEvent, instance: any): void;
    renderMagnifier(instance: any): void;
    updateMagnifier(instance: any): void;
    unMountMagnifier(): void;
    onMouseOver(instance: any): void;
    onMouseOut(instance: any): void;
    onMouseDown(e: React.MouseEvent, instance: any): void;
    onMouseUp(instance: any): void;
    start(): void;
    stop(): void;
} & Record<string, any>;
export default _default;
