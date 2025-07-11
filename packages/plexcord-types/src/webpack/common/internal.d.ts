import { LazyComponentWrapper } from "../../utils/react";
import { FilterFn } from "../webpack";
export declare function waitForComponent<T extends React.ComponentType<any> = React.ComponentType<any> & Record<string, any>>(name: string, filter: FilterFn | string | string[]): LazyComponentWrapper<T>;
export declare function waitForStore(name: string, cb: (v: any) => void): void;
