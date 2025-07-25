/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2024 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */
/**
 * this file is needed to avoid an import of plugins in ./runReporter.ts
 */
import { Patch } from "@utils/types";
import { TypeWebpackSearchHistory } from "@webpack";

interface EvaledPatch extends Patch {
    id: PropertyKey;
}
interface ErroredPatch extends EvaledPatch {
    oldModule: string,
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
export const reporterData: ReporterData = {
    failedPatches: {
        foundNoModule: [],
        hadNoEffect: [],
        undoingPatchGroup: [],
        erroredPatch: []
    },
    failedWebpack: {
        find: [],
        findByProps: [],
        findByCode: [],
        findStore: [],
        findComponent: [],
        findComponentByCode: [],
        findExportedComponent: [],
        waitFor: [],
        waitForComponent: [],
        waitForStore: [],
        proxyLazyWebpack: [],
        LazyComponentWebpack: [],
        extractAndLoadChunks: [],
        mapMangledModule: []
    }
};
