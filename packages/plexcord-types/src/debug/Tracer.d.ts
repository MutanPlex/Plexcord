export declare const beginTrace: (name: string, ...args: any[]) => void;
export declare const finishTrace: (name: string) => number;
type Func = (...args: any[]) => any;
type TraceNameMapper<F extends Func> = (...args: Parameters<F>) => string;
declare function noopTracerWithResults<F extends Func>(name: string, f: F, mapper?: TraceNameMapper<F>): (this: unknown, ...args: Parameters<F>) => [ReturnType<F>, number];
declare function noopTracer<F extends Func>(name: string, f: F, mapper?: TraceNameMapper<F>): F;
export declare const traceFunctionWithResults: typeof noopTracerWithResults;
export declare const traceFunction: typeof noopTracer;
export {};
