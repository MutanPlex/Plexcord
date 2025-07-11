export type Tool = "none" | "brush" | "erase" | "crop" | "shape";
export type ToolDefinition = {
    selected: () => void;
    unselected: () => void;
    [key: string]: any;
};
export declare const tools: Record<Tool, ToolDefinition | undefined>;
export declare let currentTool: Tool;
export declare let currentColor: string;
export declare let currentSize: number;
export declare let currentFill: boolean;
export declare const Toolbar: () => import("react").JSX.Element;
