export declare let canvas: HTMLCanvasElement | null;
export declare let ctx: CanvasRenderingContext2D | null;
export declare const brushCanvas: CanvasRenderingContext2D;
export declare const shapeCanvas: CanvasRenderingContext2D;
export declare const cropCanvas: CanvasRenderingContext2D;
export declare let image: HTMLImageElement;
export declare function exportImg(): Promise<Blob>;
export declare const Canvas: ({ file }: {
    file: File;
}) => import("react").JSX.Element;
export declare function render(): void;
