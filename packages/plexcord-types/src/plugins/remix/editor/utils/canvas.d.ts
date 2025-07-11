export declare function fillCircle(x: number, y: number, radius: number, canvas?: CanvasRenderingContext2D): void;
export declare function strokeCircle(x: number, y: number, radius: number, canvas?: CanvasRenderingContext2D): void;
export declare function line(x1: number, y1: number, x2: number, y2: number, canvas?: CanvasRenderingContext2D): void;
export declare function dist(x1: number, y1: number, x2: number, y2: number): number;
export declare function widthFromBounds(bounds: {
    left: number;
    right: number;
    top: number;
    bottom: number;
}): number;
export declare function heightFromBounds(bounds: {
    left: number;
    right: number;
    top: number;
    bottom: number;
}): number;
export declare function urlToImage(url: string): Promise<HTMLImageElement>;
export declare function imageToBlob(image: HTMLImageElement): Promise<File>;
