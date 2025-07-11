/**
 * this file is needed to avoid an import of plugins in ./runReporter.ts
 */
import { Patch } from "../utils/types";
import { TypeWebpackSearchHistory } from "../webpack/webpack";
interface EvaledPatch extends Patch {
    id: PropertyKey;
}
interface ErroredPatch extends EvaledPatch {
    oldModule: string;
    newModule: string;
}
export interface ReporterData {
    failedPatches: {
        foundNoModule: Patch[];
        hadNoEffect: EvaledPatch[];
        undoingPatchGroup: EvaledPatch[];
        erroredPatch: ErroredPatch[];
    };
    failedWebpack: Record<TypeWebpackSearchHistory, string[][]>;
}
export declare const reporterData: ReporterData;
export {};
