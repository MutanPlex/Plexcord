export declare const importApngJs: () => {
    parseURL(url: string): Promise<ApngFrameData>;
};
export declare const enum ApngDisposeOp {
    /**
     * no disposal is done on this frame before rendering the next; the contents of the output buffer are left as is.
     */
    NONE = 0,
    /**
     * the frame's region of the output buffer is to be cleared to fully transparent black before rendering the next frame.
     */
    BACKGROUND = 1,
    /**
     * the frame's region of the output buffer is to be reverted to the previous contents before rendering the next frame.
     */
    PREVIOUS = 2
}
export declare const enum ApngBlendOp {
    SOURCE = 0,
    OVER = 1
}
export interface ApngFrame {
    left: number;
    top: number;
    width: number;
    height: number;
    img: HTMLImageElement;
    delay: number;
    blendOp: ApngBlendOp;
    disposeOp: ApngDisposeOp;
}
export interface ApngFrameData {
    width: number;
    height: number;
    frames: ApngFrame[];
    playTime: number;
}
export declare const shikiWorkerSrc: string;
export declare const shikiOnigasmSrc = "https://cdn.jsdelivr.net/npm/@vap/shiki@0.10.3/dist/onig.wasm";
export declare const getStegCloak: () => Promise<any>;
