export declare function canvasToBlob(canvas: HTMLCanvasElement): Promise<Blob>;
export declare function wrapText(context: CanvasRenderingContext2D, text: string, x: number, y: number, maxWidth: number, lineHeight: number, preparingSentence: string[], lines: string[]): void;
export declare function fetchImageAsBlob(url: string): Promise<Blob>;
export declare function FixUpQuote(quote: any): any;
