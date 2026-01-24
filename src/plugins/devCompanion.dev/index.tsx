/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2023 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
*/

import { plugin, t } from "@api/i18n";
import { showNotification } from "@api/Notifications";
import { definePluginSettings } from "@api/Settings";
import { Devs } from "@utils/constants";
import { Logger } from "@utils/Logger";
import { canonicalizeMatch, canonicalizeReplace } from "@utils/patches";
import definePlugin, { OptionType, ReporterTestable } from "@utils/types";
import { filters, findAll, search } from "@webpack";

const PORT = 8485;

const logger = new Logger("DevCompanion");

let socket: WebSocket | undefined;

type Node = StringNode | RegexNode | FunctionNode;

interface StringNode {
    type: "string";
    value: string;
}

interface RegexNode {
    type: "regex";
    value: {
        pattern: string;
        flags: string;
    };
}

interface FunctionNode {
    type: "function";
    value: string;
}

interface PatchData {
    find: string;
    replacement: {
        match: StringNode | RegexNode;
        replace: StringNode | FunctionNode;
    }[];
}

interface FindData {
    type: string;
    args: Array<StringNode | FunctionNode>;
}

export const settings = definePluginSettings({
    notifyOnAutoConnect: {
        label: () => t(plugin.devCompanion.option.notifyOnAutoConnect.label),
        description: () => t(plugin.devCompanion.option.notifyOnAutoConnect.description),
        type: OptionType.BOOLEAN,
        default: true
    },
});

function parseNode(node: Node) {
    switch (node.type) {
        case "string":
            return node.value;
        case "regex":
            return new RegExp(node.value.pattern, node.value.flags);
        case "function":
            // We LOVE remote code execution
            // Safety: This comes from localhost only, which actually means we have less permissions than the source,
            // since we're running in the browser sandbox, whereas the sender has host access
            return (0, eval)(node.value);
        default:
            throw new Error("Unknown Node Type " + (node as any).type);
    }
}

export function initWs(isManual = false) {
    let wasConnected = isManual;
    let hasErrored = false;
    const ws = socket = new WebSocket(`ws://127.0.0.1:${PORT}`);

    ws.addEventListener("open", () => {
        wasConnected = true;

        logger.info("Connected to WebSocket");

        (settings.store.notifyOnAutoConnect || isManual) && showNotification({
            title: t(plugin.devCompanion.toast.title),
            body: t(plugin.devCompanion.toast.connected),
            noPersist: true
        });
    });

    ws.addEventListener("error", e => {
        if (!wasConnected) return;

        hasErrored = true;

        logger.error("Dev Companion Error:", e);

        showNotification({
            title: t(plugin.devCompanion.toast.error),
            body: (e as ErrorEvent).message || t(plugin.devCompanion.toast.noMessage),
            color: "var(--status-danger, red)",
            noPersist: true,
        });
    });

    ws.addEventListener("close", e => {
        if (!wasConnected || hasErrored) return;

        logger.info("Dev Companion Disconnected:", e.code, e.reason);

        showNotification({
            title: t(plugin.devCompanion.toast.title),
            body: e.reason || t(plugin.devCompanion.toast.noReason),
            color: "var(--status-danger, red)",
            noPersist: true,
        });
    });

    ws.addEventListener("message", e => {
        try {
            var { nonce, type, data } = JSON.parse(e.data);
        } catch (err) {
            logger.error("Invalid JSON:", err, "\n" + e.data);
            return;
        }

        function reply(error?: string) {
            const data = { nonce, ok: !error } as Record<string, unknown>;
            if (error) data.error = error;

            ws.send(JSON.stringify(data));
        }

        logger.info("Received Message:", type, "\n", data);

        switch (type) {
            case "testPatch": {
                const { find, replacement } = data as PatchData;

                const candidates = search(find);
                const keys = Object.keys(candidates);
                if (keys.length !== 1)
                    return reply("Expected exactly one 'find' matches, found " + keys.length);

                const mod = candidates[keys[0]];
                let src = String(mod).replaceAll("\n", "");

                if (src.startsWith("function(")) {
                    src = "0," + src;
                } else if (src.charCodeAt(0) >= 49 /* 1*/ && src.charCodeAt(0) <= 57 /* 9*/) {
                    src = "0,function" + src.substring(src.indexOf("("));
                }

                let i = 0;

                for (const { match, replace } of replacement) {
                    i++;

                    try {
                        const matcher = canonicalizeMatch(parseNode(match));
                        const replacement = canonicalizeReplace(parseNode(replace), 'Plexcord.Plugins.plugins["PlaceHolderPluginName"]');

                        const newSource = src.replace(matcher, replacement as string);

                        if (src === newSource) throw "Had no effect";
                        Function(newSource);

                        src = newSource;
                    } catch (err) {
                        return reply(`Replacement ${i} failed: ${err}`);
                    }
                }

                reply();
                break;
            }
            case "testFind": {
                const { type, args } = data as FindData;
                try {
                    var parsedArgs = args.map(parseNode);
                } catch (err) {
                    return reply("Failed to parse args: " + err);
                }

                try {
                    let results: any[];
                    switch (type.replace("find", "").replace("Lazy", "")) {
                        case "":
                            results = findAll(parsedArgs[0]);
                            break;
                        case "CssClasses":
                            results = findAll(filters.byClassNames(...parsedArgs), { topLevelOnly: true });
                            break;
                        case "ByProps":
                            results = findAll(filters.byProps(...parsedArgs));
                            break;
                        case "Store":
                            results = findAll(filters.byStoreName(parsedArgs[0]));
                            break;
                        case "ByCode":
                            results = findAll(filters.byCode(...parsedArgs));
                            break;
                        case "ModuleId":
                            results = Object.keys(search(parsedArgs[0]));
                            break;
                        case "ComponentByCode":
                            results = findAll(filters.componentByCode(...parsedArgs));
                            break;
                        default:
                            return reply("Unknown Find Type " + type);
                    }

                    const uniqueResultsCount = new Set(results).size;
                    if (uniqueResultsCount === 0) throw "No results";
                    if (uniqueResultsCount > 1) throw "Found more than one result! Make this filter more specific";
                } catch (err) {
                    return reply("Failed to find: " + err);
                }

                reply();
                break;
            }
            default:
                reply("Unknown Type " + type);
                break;
        }
    });
}

export default definePlugin({
    name: "DevCompanion",
    description: () => t(plugin.devCompanion.description),
    authors: [Devs.Ven, Devs.sadan, Devs.Samwich],
    reporterTestable: ReporterTestable.None,
    settings,

    toolboxActions: () => ({
        [t(plugin.devCompanion.reconnect)]() {
            socket?.close(1000, "Reconnecting");
            initWs(true);
        }
    }),

    start() {
        initWs();
    },

    stop() {
        socket?.close(1000, "Plugin Stopped");
        socket = void 0;
    }
});
