import { ToolDefinition } from "../components/Toolbar";
export type Shape = "rectangle" | "ellipse" | "line" | "arrow";
export declare let currentShape: Shape;
export declare function setShape(shape: Shape): void;
export declare let shapeFill: boolean;
export declare function setShapeFill(fill: boolean): void;
export declare const ShapeTool: ToolDefinition;
