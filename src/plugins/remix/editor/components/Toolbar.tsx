/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2024 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { t } from "@api/i18n";
import { Button } from "@components/Button";
import { Paragraph } from "@components/Paragraph";
import { Switch } from "@components/settings";
import { BrushTool } from "@plugins/remix/editor/tools/brush";
import { CropTool, resetBounds } from "@plugins/remix/editor/tools/crop";
import { EraseTool } from "@plugins/remix/editor/tools/eraser";
import { currentShape, setShape, setShapeFill, Shape, ShapeTool } from "@plugins/remix/editor/tools/shape";
import { Select, Slider, useEffect, useState } from "@webpack/common";

import { brushCanvas, canvas, cropCanvas, render, shapeCanvas } from "./Canvas";
import { SettingColorComponent } from "./SettingColorComponent";

export type Tool = "none" | "brush" | "erase" | "crop" | "shape";

export type ToolDefinition = {
    selected: () => void;
    unselected: () => void;
    [key: string]: any;
};

export const tools: Record<Tool, ToolDefinition | undefined> = {
    none: undefined,
    brush: BrushTool,
    erase: EraseTool,
    crop: CropTool,
    shape: ShapeTool,
};

export let currentTool: Tool = "none";
export let currentColor = "#ff0000";
export let currentSize = 20;
export let currentFill = false;

function colorStringToHex(color: string): number {
    return parseInt(color.replace("#", ""), 16);
}

export const Toolbar = () => {
    const [tool, setTool] = useState<Tool>(currentTool);
    const [color, setColor] = useState(currentColor);
    const [size, setSize] = useState(currentSize);
    const [fill, setFill] = useState(currentFill);

    function changeTool(newTool: Tool) {
        const oldTool = tool;

        setTool(newTool);
        onChangeTool(oldTool, newTool);
    }

    function onChangeTool(old: Tool, newTool: Tool) {
        tools[old]?.unselected();
        tools[newTool]?.selected();
    }

    useEffect(() => {
        currentTool = tool;
        currentColor = color;
        currentSize = size;
        currentFill = fill;

        brushCanvas.fillStyle = color;
        shapeCanvas.fillStyle = color;

        brushCanvas.strokeStyle = color;
        shapeCanvas.strokeStyle = color;

        brushCanvas.lineWidth = size;
        shapeCanvas.lineWidth = size;

        brushCanvas.lineCap = "round";
        brushCanvas.lineJoin = "round";

        setShapeFill(currentFill);
    }, [tool, color, size, fill]);

    function clear() {
        if (!canvas) return;

        brushCanvas.clearRect(0, 0, canvas.width, canvas.height);
        shapeCanvas.clearRect(0, 0, canvas.width, canvas.height);
        resetBounds();
        if (tool !== "crop") cropCanvas.clearRect(0, 0, canvas.width, canvas.height);
        render();
    }

    return (
        <div className="pc-remix-toolbar">
            <div className="pc-remix-tools">
                <Button className={(tool === "brush" ? "tool-active" : "")} onClick={() => changeTool("brush")}>{t("plugin.remix.button.brush")}</Button>
                <Button className={(tool === "erase" ? "tool-active" : "")} onClick={() => changeTool("erase")}>{t("plugin.remix.button.erase")}</Button>
                <Button className={(tool === "crop" ? "tool-active" : "")} onClick={() => changeTool("crop")}>{t("plugin.remix.button.crop")}</Button>
                <Button className={(tool === "shape" ? "tool-active" : "")} onClick={() => changeTool("shape")}>{t("plugin.remix.button.shape")}</Button>
            </div>
            <div className="pc-remix-settings">
                <div className="pc-remix-setting-section">
                    {(tool === "brush" || tool === "shape") &&
                        <SettingColorComponent name="pc-remix-color-picker" onChange={setColor} color={colorStringToHex(color)} />
                    }

                    {(tool === "brush" || tool === "erase" || tool === "shape") &&
                        <Slider
                            minValue={1}
                            maxValue={500}
                            initialValue={size}
                            onValueChange={setSize}
                            markers={[1, 50, 100, 150, 200, 250, 300, 350, 400, 450, 500]}
                            hideBubble
                        />
                    }
                </div>
                {(tool === "crop") && <Button onClick={resetBounds}>{t("plugin.remix.button.reset")}</Button>}
                <div className="pc-remix-setting-section">
                    {(tool === "shape") && (<>
                        <Select
                            select={setShape}
                            isSelected={v => v === currentShape}
                            serialize={v => String(v)}
                            placeholder={t("plugin.remix.button.shape")}
                            options={[
                                { label: t("plugin.remix.editor.rectangle"), value: "rectangle" as Shape },
                                { label: t("plugin.remix.editor.ellipse"), value: "ellipse" as Shape },
                                { label: t("plugin.remix.editor.line"), value: "line" as Shape },
                                { label: t("plugin.remix.editor.arrow"), value: "arrow" as Shape },
                            ]}
                        />

                        <Paragraph className="pc-remix-setting-switch">{t("plugin.remix.editor.fill")} <Switch checked={fill} onChange={setFill} /></Paragraph>
                    </>)}
                </div>
            </div>
            <div className="pc-remix-misc">
                <Button onClick={clear}>{t("plugin.remix.button.clear")}</Button>
            </div>
        </div>
    );
};
