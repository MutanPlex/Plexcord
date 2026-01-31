/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2023 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
*/

import { NavContextMenuPatchCallback } from "@api/ContextMenu";
import { plugin, t } from "@api/i18n";
import { definePluginSettings } from "@api/Settings";
import { debounce } from "@shared/debounce";
import { Devs, PcDevs } from "@utils/constants";
import { Logger } from "@utils/Logger";
import definePlugin, { OptionType } from "@utils/types";
import { createRoot, Menu } from "@webpack/common";
import { JSX } from "react";
import type { Root } from "react-dom/client";

import { Magnifier, MagnifierProps } from "./components/Magnifier";
import { ELEMENT_ID } from "./constants";
import managedStyle from "./styles.css?managed";

interface ImageMetadata {
    filename: string;
    dimensions: string;
    size?: string;
    fetching?: boolean;
}

const imageMetadataCache = new Map<string, ImageMetadata>();

let lastClickTime = 0;
const DOUBLE_CLICK_THRESHOLD = 300;

export const settings = definePluginSettings({
    saveZoomValues: {
        label: () => t(plugin.imageZoom.option.saveZoomValues.label),
        description: () => t(plugin.imageZoom.option.saveZoomValues.description),
        type: OptionType.BOOLEAN,
        default: true,
    },

    invertScroll: {
        label: () => t(plugin.imageZoom.option.invertScroll.label),
        description: () => t(plugin.imageZoom.option.invertScroll.description),
        type: OptionType.BOOLEAN,
        default: true,
    },

    nearestNeighbour: {
        label: () => t(plugin.imageZoom.option.nearestNeighbour.label),
        description: () => t(plugin.imageZoom.option.nearestNeighbour.description),
        type: OptionType.BOOLEAN,
        default: false,
    },

    square: {
        label: () => t(plugin.imageZoom.option.square.label),
        description: () => t(plugin.imageZoom.option.square.description),
        type: OptionType.BOOLEAN,
        default: false,
    },

    zoom: {
        label: () => t(plugin.imageZoom.option.zoom.label),
        description: () => t(plugin.imageZoom.option.zoom.description),
        type: OptionType.SLIDER,
        markers: [1, 5, 10, 20, 30, 40, 50],
        default: 2,
        stickToMarkers: false,
    },
    size: {
        label: () => t(plugin.imageZoom.option.size.label),
        description: () => t(plugin.imageZoom.option.size.description),
        type: OptionType.SLIDER,
        markers: [50, 100, 250, 500, 750, 1000],
        default: 100,
        stickToMarkers: false,
    },

    zoomSpeed: {
        label: () => t(plugin.imageZoom.option.zoomSpeed.label),
        description: () => t(plugin.imageZoom.option.zoomSpeed.description),
        type: OptionType.SLIDER,
        markers: [0.1, 0.5, 1, 2, 3, 4, 5],
        default: 0.5,
        stickToMarkers: false,
    },

    showMetadata: {
        label: () => t(plugin.imageZoom.option.showMetadata.label),
        description: () => t(plugin.imageZoom.option.showMetadata.description),
        type: OptionType.BOOLEAN,
        default: true,
    }
});

const imageContextMenuPatch: NavContextMenuPatchCallback = (children, props) => {
    // Discord re-uses the image context menu for links to for the copy and open buttons
    if ("href" in props) return;
    // emojis in user statuses
    if (props.target?.classList?.contains("emoji")) return;

    const { square, nearestNeighbour, showMetadata } = settings.use(["square", "nearestNeighbour", "showMetadata"]);

    children.push(
        <Menu.MenuGroup id="image-zoom">
            <Menu.MenuCheckboxItem
                id="pc-square"
                label={t(plugin.imageZoom.context.square)}
                checked={square}
                action={() => {
                    settings.store.square = !square;
                }}
            />
            <Menu.MenuCheckboxItem
                id="pc-nearest-neighbour"
                label={t(plugin.imageZoom.context.nearest)}
                checked={nearestNeighbour}
                action={() => {
                    settings.store.nearestNeighbour = !nearestNeighbour;
                }}
            />
            <Menu.MenuControlItem
                id="pc-zoom"
                label={t(plugin.imageZoom.context.zoom)}
                control={(props, ref) => (
                    <Menu.MenuSliderControl
                        ref={ref}
                        {...props}
                        minValue={1}
                        maxValue={50}
                        value={settings.store.zoom}
                        onChange={debounce((value: number) => settings.store.zoom = value, 100)}
                    />
                )}
            />
            <Menu.MenuControlItem
                id="pc-size"
                label={t(plugin.imageZoom.context.size)}
                control={(props, ref) => (
                    <Menu.MenuSliderControl
                        ref={ref}
                        {...props}
                        minValue={50}
                        maxValue={1000}
                        value={settings.store.size}
                        onChange={debounce((value: number) => settings.store.size = value, 100)}
                    />
                )}
            />
            <Menu.MenuControlItem
                id="pc-zoom-speed"
                label={t(plugin.imageZoom.context.zoomSpeed)}
                control={(props, ref) => (
                    <Menu.MenuSliderControl
                        ref={ref}
                        {...props}
                        minValue={0.1}
                        maxValue={5}
                        value={settings.store.zoomSpeed}
                        onChange={debounce((value: number) => settings.store.zoomSpeed = value, 100)}
                        renderValue={(value: number) => `${value.toFixed(3)}x`}
                    />
                )}
            />
            <Menu.MenuSeparator />
            <Menu.MenuCheckboxItem
                id="pc-show-metadata"
                label={t(plugin.imageZoom.context.showImageMetadata)}
                checked={showMetadata}
                action={() => {
                    settings.store.showMetadata = !showMetadata;
                }}
            />
            <Menu.MenuItem
                id="pc-view-metadata"
                label={t(plugin.imageZoom.context.view)}
                action={() => {
                    const target = props.target as HTMLImageElement;
                    if (target && target.src) {
                        toggleMetadata(target);
                    }
                }}
            />
        </Menu.MenuGroup>
    );
};

function toggleMetadata(imgElement: HTMLImageElement) {
    if (!imgElement || !imgElement.src) return;
    const parent = imgElement.parentElement;
    if (!parent) return;

    const metadataContainer = parent.querySelector(".pc-image-metadata");
    if (metadataContainer) {
        metadataContainer.remove();
        return;
    }

    createMetadataDisplay(imgElement);
}

function createMetadataDisplay(imgElement: HTMLImageElement) {
    if (!imgElement || !imgElement.src) return;

    const { src } = imgElement;
    const parent = imgElement.parentElement;
    if (!parent) return;

    const wrapper = document.createElement("div");
    wrapper.className = "pc-image-wrapper";
    parent.insertBefore(wrapper, imgElement);
    wrapper.appendChild(imgElement);

    let metadata = imageMetadataCache.get(src);

    if (!metadata) {
        metadata = {
            filename: getFilenameFromURL(src),
            dimensions: `${imgElement.naturalWidth || imgElement.width} × ${imgElement.naturalHeight || imgElement.height} px`,
            fetching: true
        };

        imageMetadataCache.set(src, metadata);
        fetchFileSize(src).then(size => {
            if (size !== undefined) {
                const cachedMetadata = imageMetadataCache.get(src);
                if (cachedMetadata) {
                    cachedMetadata.size = formatFileSize(size);
                    cachedMetadata.fetching = false;
                    imageMetadataCache.set(src, cachedMetadata);

                    const container = parent.querySelector(".pc-image-metadata");
                    if (container) {
                        const sizeElement = container.querySelector(".pc-metadata-row:last-child span:last-child");
                        if (sizeElement) {
                            sizeElement.textContent = formatFileSize(size);
                        }
                    }
                }
            }
        });
    }

    const container = document.createElement("div");
    container.className = "pc-image-metadata";

    const filenameRow = document.createElement("div");
    filenameRow.className = "pc-metadata-row";
    const filenameLabel = document.createElement("span");
    filenameLabel.className = "pc-metadata-label";
    filenameLabel.textContent = t(plugin.imageZoom.context.filename) + ":";
    const filenameValue = document.createElement("span");
    filenameValue.textContent = metadata.filename;
    filenameRow.appendChild(filenameLabel);
    filenameRow.appendChild(filenameValue);
    container.appendChild(filenameRow);

    const dimensionsRow = document.createElement("div");
    dimensionsRow.className = "pc-metadata-row";
    const dimensionsLabel = document.createElement("span");
    dimensionsLabel.className = "pc-metadata-label";
    dimensionsLabel.textContent = t(plugin.imageZoom.context.dimensions) + ":";
    const dimensionsValue = document.createElement("span");
    dimensionsValue.textContent = metadata.dimensions;
    dimensionsRow.appendChild(dimensionsLabel);
    dimensionsRow.appendChild(dimensionsValue);
    container.appendChild(dimensionsRow);

    const sizeRow = document.createElement("div");
    sizeRow.className = "pc-metadata-row";
    const sizeLabel = document.createElement("span");
    sizeLabel.className = "pc-metadata-label";
    sizeLabel.textContent = t(plugin.imageZoom.context.sizeHTML) + ":";
    const sizeValue = document.createElement("span");
    sizeValue.textContent = metadata.size || t(plugin.imageZoom.context.loading);
    sizeRow.appendChild(sizeLabel);
    sizeRow.appendChild(sizeValue);
    container.appendChild(sizeRow);

    wrapper.appendChild(container);

    return container;
}

function getFilenameFromURL(url: string): string {
    try {
        const cleanUrl = url.split("?")[0];
        const parts = cleanUrl.split("/");
        return decodeURIComponent(parts[parts.length - 1]);
    } catch {
        return t(plugin.imageZoom.context.unknown);
    }
}

async function fetchFileSize(url: string): Promise<number | undefined> {
    try {
        const response = await fetch(url, { method: "HEAD" });
        return parseInt(response.headers.get("content-length") || "0");
    } catch {
        return undefined;
    }
}

function formatFileSize(bytes: number): string {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
}

export default definePlugin({
    name: "ImageZoom",
    description: () => t(plugin.imageZoom.description),
    authors: [Devs.Aria, PcDevs.Campfire],
    tags: ["ImageUtilities"],
    managedStyle,

    patches: [
        {
            find: ".renderLinkComponent)?",
            replacement: [
                {
                    match: /useFullWidth:!0,shouldLink:/,
                    replace: `id:"${ELEMENT_ID}",$&`
                },
                {
                    match: /(?<=null!=(\i)\?.{0,20})\i\.\i,{children:\1/,
                    replace: "'div',{onClick:e=>e.stopPropagation(),children:$1"
                }
            ]
        },
        // Make media viewer options not hide when zoomed in with the default Discord feature
        {
            find: '="FOCUS_SENSITIVE",',
            replacement: {
                match: /(?<=\[\i\.\i]:)\i&&!\i&&"PINNED"!==\i/,
                replace: "false"
            }
        },
        {
            find: ".handleImageLoad)",
            replacement: [
                {
                    match: /placeholderVersion:\i,(?=.{0,50}children:)/,
                    replace: "...$self.makeProps(this),$&"
                },
                {
                    match: /componentDidMount\(\){/,
                    replace: "$&$self.renderMagnifier(this);",
                },
                {
                    match: /componentWillUnmount\(\){/,
                    replace: "$&$self.unMountMagnifier();"
                },
                {
                    match: /componentDidUpdate\(\i\){/,
                    replace: "$&$self.updateMagnifier(this);"
                }
            ]
        }
    ],

    settings,
    contextMenus: {
        "image-context": imageContextMenuPatch
    },

    // to stop from rendering twice /shrug
    currentMagnifierElement: null as React.FunctionComponentElement<MagnifierProps & JSX.IntrinsicAttributes> | null,
    element: null as HTMLDivElement | null,

    Magnifier,
    root: null as Root | null,
    makeProps(instance) {
        return {
            onMouseOver: () => this.onMouseOver(instance),
            onMouseOut: () => this.onMouseOut(instance),
            onMouseDown: (e: React.MouseEvent) => this.onMouseDown(e, instance),
            onMouseUp: () => this.onMouseUp(instance),
            onClick: (e: React.MouseEvent) => this.handleImageClick(e, instance),
            id: instance.props.id,
        };
    },

    handleImageClick(e: React.MouseEvent | MouseEvent, instance: any) {
        if (!settings.store.showMetadata) return;

        const target = e.target as HTMLImageElement;
        if (target && target.tagName === "IMG" && target.src) {
            const currentTime = new Date().getTime();
            if (currentTime - lastClickTime < DOUBLE_CLICK_THRESHOLD) {
                toggleMetadata(target);
            }
            lastClickTime = currentTime;
        }
    },

    renderMagnifier(instance) {
        try {
            if (instance.props.id === ELEMENT_ID) {
                if (!this.root) {
                    this.root = createRoot(this.element!);
                }

                this.currentMagnifierElement = <Magnifier size={settings.store.size} zoom={settings.store.zoom} instance={instance} />;
                this.root.render(this.currentMagnifierElement);
            }
        } catch (error) {
            new Logger("ImageZoom").error("Failed to render magnifier:", error);
        }
    },

    updateMagnifier(instance) {
        this.renderMagnifier(instance);
    },

    unMountMagnifier() {
        this.root?.unmount();
        this.currentMagnifierElement = null;
        this.root = null;
    },

    onMouseOver(instance) {
        instance.setState((state: any) => ({ ...state, mouseOver: true }));
    },
    onMouseOut(instance) {
        instance.setState((state: any) => ({ ...state, mouseOver: false }));
    },
    onMouseDown(e: React.MouseEvent, instance) {
        if (e.button === 0 /* left */)
            instance.setState((state: any) => ({ ...state, mouseDown: true }));
    },
    onMouseUp(instance) {
        instance.setState((state: any) => ({ ...state, mouseDown: false }));
    },

    start() {
        this.element = document.createElement("div");
        this.element.classList.add("MagnifierContainer");
        document.body.appendChild(this.element);

        const style = document.createElement("style");
        style.id = "image-metadata-styles";
        style.textContent = `
            .pc-image-metadata {
                padding: 8px;
                margin: 6px 0;
                background-color: var(--background-secondary-alt);
                border-radius: 4px;
                font-size: 14px;
                color: var(--text-default);
                display: flex;
                flex-direction: column;
                gap: 4px;
            }

            .pc-metadata-row {
                display: flex;
                justify-content: space-between;
            }

            .pc-metadata-label {
                font-weight: 600;
                margin-right: 8px;
            }
        `;
        document.head.appendChild(style);
    },

    stop() {
        // so componenetWillUnMount gets called if Magnifier component is still alive
        this.root && this.root.unmount();
        this.element?.remove();

        document.getElementById("image-metadata-styles")?.remove();
        document.querySelectorAll(".pc-image-metadata").forEach(el => el.remove());
    }
});
