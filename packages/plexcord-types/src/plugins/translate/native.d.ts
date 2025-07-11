import { IpcMainInvokeEvent } from "electron";
export declare function makeDeeplTranslateRequest(_: IpcMainInvokeEvent, pro: boolean, apiKey: string, payload: string): Promise<{
    status: number;
    data: string;
}>;
