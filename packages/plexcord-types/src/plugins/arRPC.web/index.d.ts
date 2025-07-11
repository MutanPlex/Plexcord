import { ReporterTestable } from "../../utils/types";
declare const _default: {
    name: string;
    description: string;
    authors: {
        name: string;
        id: bigint;
    }[];
    reporterTestable: ReporterTestable;
    hidden: boolean;
    settingsAboutComponent: () => import("react").JSX.Element;
    handleEvent(e: MessageEvent<any>): Promise<void>;
    start(): Promise<void>;
    stop(): void;
} & Record<string, any>;
export default _default;
