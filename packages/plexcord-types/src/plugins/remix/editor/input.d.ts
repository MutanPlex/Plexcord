import { EventEmitter } from "./utils/eventEmitter";
export declare const Mouse: {
    x: number;
    y: number;
    down: boolean;
    dx: number;
    dy: number;
    prevX: number;
    prevY: number;
    event: EventEmitter<MouseEvent>;
};
export declare function initInput(): void;
