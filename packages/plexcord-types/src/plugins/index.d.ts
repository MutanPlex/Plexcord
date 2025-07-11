import { Logger } from "../utils/Logger";
import { Patch, Plugin, StartAt } from "../utils/types";
import { FluxDispatcher } from "../webpack/common";
import { patches } from "../webpack/patchWebpack";
export declare const PMLogger: Logger;
export declare const plugins: Record<string, Plugin>;
export { patches };
export declare function isPluginEnabled(p: string): boolean;
export declare function addPatch(newPatch: Omit<Patch, "plugin">, pluginName: string, pluginPath?: string): void;
export declare const startAllPlugins: (target: StartAt) => void;
export declare function startDependenciesRecursive(p: Plugin): {
    restartNeeded: boolean;
    failures: string[];
};
export declare function subscribePluginFluxEvents(p: Plugin, fluxDispatcher: typeof FluxDispatcher): void;
export declare function unsubscribePluginFluxEvents(p: Plugin, fluxDispatcher: typeof FluxDispatcher): void;
export declare function subscribeAllPluginsFluxEvents(fluxDispatcher: typeof FluxDispatcher): void;
export declare const startPlugin: (p: Plugin) => boolean;
export declare const stopPlugin: (p: Plugin) => boolean;
