import "./styles.css";
import { ComponentType, HTMLAttributes } from "react";
export declare enum SpinnerTypes {
    WANDERING_CUBES = "wanderingCubes",
    CHASING_DOTS = "chasingDots",
    PULSING_ELLIPSIS = "pulsingEllipsis",
    SPINNING_CIRCLE = "spinningCircle",
    SPINNING_CIRCLE_SIMPLE = "spinningCircleSimple",
    LOW_MOTION = "lowMotion"
}
type Spinner = ComponentType<Omit<HTMLAttributes<HTMLDivElement>, "children"> & {
    type?: SpinnerTypes;
    animated?: boolean;
    className?: string;
    itemClassName?: string;
    "aria-label"?: string;
}> & {
    Type: typeof SpinnerTypes;
};
export declare const Spinner: Spinner;
export declare const QrCodeIcon: import("../../../utils").LazyComponentWrapper<ComponentType<any>>;
export declare const cl: (...args: (string | false | 0 | string[] | Record<string, unknown> | null | undefined)[]) => string;
export {};
