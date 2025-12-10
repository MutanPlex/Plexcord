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

import { Dirent, readdirSync, readFileSync, writeFileSync } from "fs";
import { access, readFile } from "fs/promises";
import { join, sep } from "path";
import { normalize as posixNormalize, sep as posixSep } from "path/posix";
import { ArrowFunction, AsExpression, BigIntLiteral, createSourceFile, FunctionExpression, Identifier, isArrowFunction, isArrayLiteralExpression, isAsExpression, isCallExpression, isExportAssignment, isFunctionExpression, isIdentifier, isObjectLiteralExpression, isPropertyAccessExpression, isPropertyAssignment, isSatisfiesExpression, isStringLiteral, isVariableStatement, NamedDeclaration, NodeArray, ObjectLiteralExpression, ScriptTarget, StringLiteral, SyntaxKind } from "typescript";

import { getPluginTarget } from "./utils.mjs";

interface BaseDev {
    name: string;
    id: string;
}

interface Dev extends BaseDev { }
interface PcDev extends BaseDev { }

interface PluginData {
    name: string;
    description: string | (() => string);
    tags: string[];
    authors: BaseDev[];
    dependencies: string[];
    hasPatches: boolean;
    hasCommands: boolean;
    required: boolean;
    enabledByDefault: boolean;
    target: "discordDesktop" | "plextron" | "desktop" | "web" | "dev";
    filePath: string;
    readme?: string;
}

const devs = {} as Record<string, Dev>;
const pcDevs = {} as Record<string, PcDev>;
let translations: any = {};

function getName(node: NamedDeclaration) {
    return node.name && isIdentifier(node.name) ? node.name.text : undefined;
}

function hasName(node: NamedDeclaration, name: string) {
    return getName(node) === name;
}

function getObjectProp(node: ObjectLiteralExpression, name: string) {
    const prop = node.properties.find(p => hasName(p, name));
    if (prop && isPropertyAssignment(prop)) return prop.initializer;
    return prop;
}

function extractTranslationFromFunction(fnNode: ArrowFunction | FunctionExpression): string | null {
    const body = fnNode.body;

    if (isCallExpression(body)) {
        const arg = body.arguments[0];
        if (isPropertyAccessExpression(arg)) {
            const parts: string[] = [];
            let current: any = arg;

            while (isPropertyAccessExpression(current)) {
                parts.unshift(current.name.text);
                current = current.expression;
            }

            if (isIdentifier(current)) {
                parts.unshift(current.text);
            }

            // Navigate through translations object
            let value = translations;
            for (const part of parts) {
                if (value && typeof value === 'object' && part in value) {
                    value = value[part];
                } else {
                    return null;
                }
            }

            return typeof value === 'string' ? value : null;
        }
    }

    return null;
}

function loadTranslations() {
    try {
        const enFile = createSourceFile("en.ts", readFileSync("src/locales/en.ts", "utf8"), ScriptTarget.Latest);

        for (const statement of enFile.statements) {
            if (!isVariableStatement(statement)) continue;

            const translationsDecl = statement.declarationList.declarations.find(d => hasName(d, "translations"));
            if (translationsDecl?.initializer) {
                let init = translationsDecl.initializer;

                // Handle "as const" or "as Type" expressions
                if (isAsExpression(init)) {
                    init = init.expression;
                }

                if (isObjectLiteralExpression(init)) {
                    translations = parseObjectLiteral(init);
                    break;
                }
            }
        }
    } catch (e) {
        console.warn("Failed to load translations:", e);
    }
}

function parseObjectLiteral(obj: ObjectLiteralExpression): any {
    const result: any = {};

    for (const prop of obj.properties) {
        if (!isPropertyAssignment(prop)) continue;

        const key = (prop.name as Identifier).text;
        const value = prop.initializer;

        if (isStringLiteral(value)) {
            result[key] = value.text;
        } else if (isObjectLiteralExpression(value)) {
            result[key] = parseObjectLiteral(value);
        }
    }

    return result;
}

function parseDevs() {
    const file = createSourceFile("constants.ts", readFileSync("src/utils/constants.ts", "utf8"), ScriptTarget.Latest);

    for (const child of file.getChildAt(0).getChildren()) {
        if (!isVariableStatement(child)) continue;

        const devsDeclaration = child.declarationList.declarations.find(d => hasName(d, "Devs"));
        if (devsDeclaration?.initializer && isCallExpression(devsDeclaration.initializer)) {
            const value = devsDeclaration.initializer.arguments[0];

            if (!isSatisfiesExpression(value) || !isObjectLiteralExpression(value.expression)) throw new Error("Failed to parse devs: not an object literal");

            for (const prop of value.expression.properties) {
                const name = (prop.name as Identifier).text;
                const value = isPropertyAssignment(prop) ? prop.initializer : prop;

                if (!isObjectLiteralExpression(value)) throw new Error(`Failed to parse devs: ${name} is not an object literal`);

                devs[name] = {
                    name: (getObjectProp(value, "name") as StringLiteral).text,
                    id: (getObjectProp(value, "id") as BigIntLiteral).text.slice(0, -1)
                };
            }
        }

        const pcDevsDeclaration = child.declarationList.declarations.find(d => hasName(d, "PcDevs"));
        if (pcDevsDeclaration?.initializer && isCallExpression(pcDevsDeclaration.initializer)) {
            const pcValue = pcDevsDeclaration.initializer.arguments[0];

            if (!isSatisfiesExpression(pcValue) || !isObjectLiteralExpression(pcValue.expression)) throw new Error("Failed to parse Plexcord devs: not an object literal");

            for (const prop of pcValue.expression.properties) {
                const name = (prop.name as Identifier).text;
                const value = isPropertyAssignment(prop) ? prop.initializer : prop;

                if (!isObjectLiteralExpression(value)) throw new Error(`Failed to parse Plexcord devs: ${name} is not an object literal`);

                pcDevs[name] = {
                    name: (getObjectProp(value, "name") as StringLiteral).text,
                    id: (getObjectProp(value, "id") as BigIntLiteral).text.slice(0, -1)
                };
            }
        }
    }

    if (Object.keys(devs).length === 0) throw new Error("Failed to parse devs: no devs found");
    if (Object.keys(pcDevs).length === 0) throw new Error("Failed to parse Plexcord devs: no devs found");
}


async function parseFile(fileName: string) {
    const file = createSourceFile(fileName, await readFile(fileName, "utf8"), ScriptTarget.Latest);

    const fail = (reason: string) => {
        return new Error(`Invalid plugin ${fileName}, because ${reason}`);
    };

    for (const node of file.getChildAt(0).getChildren()) {
        if (!isExportAssignment(node) || !isCallExpression(node.expression)) continue;

        const call = node.expression;
        if (!isIdentifier(call.expression) || call.expression.text !== "definePlugin") continue;

        const pluginObj = node.expression.arguments[0];
        if (!isObjectLiteralExpression(pluginObj)) throw fail("no object literal passed to definePlugin");

        const data = {
            hasPatches: false,
            hasCommands: false,
            enabledByDefault: false,
            required: false,
            tags: [] as string[]
        } as PluginData;

        for (const prop of pluginObj.properties) {
            const key = getName(prop);
            const value = isPropertyAssignment(prop) ? prop.initializer : prop;

            switch (key) {
                case "name":
                    if (!isStringLiteral(value)) throw fail(`${key} is not a string literal`);
                    data[key] = value.text;
                    break;
                case "description":
                    if (isStringLiteral(value)) {
                        data.description = value.text;
                    } else if (isArrowFunction(value) || isFunctionExpression(value)) {
                        const translation = extractTranslationFromFunction(value);
                        if (translation) {
                            data.description = translation;
                        } else {
                            throw fail("description function could not be resolved to a translation");
                        }
                    } else {
                        throw fail("description is not a string literal or function");
                    }
                    break;
                case "patches":
                    data.hasPatches = true;
                    break;
                case "commands":
                    data.hasCommands = true;
                    break;
                case "authors":
                    if (!isArrayLiteralExpression(value)) throw fail("authors is not an array literal");
                    data.authors = value.elements.map(e => {
                        if (!isPropertyAccessExpression(e)) throw fail("authors array contains non-property access expressions");
                        const d = devs[getName(e)!] || pcDevs[getName(e)!];
                        if (!d) throw fail(`couldn't look up author ${getName(e)!}`);
                        return d;
                    });
                    break;
                case "tags":
                    if (!isArrayLiteralExpression(value)) throw fail("tags is not an array literal");
                    data.tags = value.elements.map(e => {
                        if (!isStringLiteral(e)) throw fail("tags array contains non-string literals");
                        return e.text;
                    });
                    break;
                case "dependencies":
                    if (!isArrayLiteralExpression(value)) throw fail("dependencies is not an array literal");
                    const { elements } = value;
                    if (elements.some(e => !isStringLiteral(e))) throw fail("dependencies array contains non-string elements");
                    data.dependencies = (elements as NodeArray<StringLiteral>).map(e => e.text);
                    break;
                case "required":
                case "enabledByDefault":
                    data[key] = value.kind === SyntaxKind.TrueKeyword;
                    break;
            }
        }

        if (!data.name || !data.description || !data.authors) throw fail("name, description or authors are missing");

        const target = getPluginTarget(fileName);
        if (target) {
            if (!["web", "discordDesktop", "plextron", "desktop", "dev"].includes(target)) throw fail(`invalid target ${target}`);
            data.target = target as any;
        }

        data.filePath = posixNormalize(fileName)
            .split(sep)
            .join(posixSep)
            .replace(/\/index\.([jt]sx?)$/, "")
            .replace(/^src\/plugins\//, "");

        return [data] as const;
    }

    throw fail("no default export called 'definePlugin' found");
}

async function getEntryPoint(dir: string, dirent: Dirent) {
    const base = join(dir, dirent.name);
    if (!dirent.isDirectory()) return base;

    for (const name of ["index.ts", "index.tsx"]) {
        const full = join(base, name);
        try {
            await access(full);
            return full;
        } catch { }
    }

    throw new Error(`${dirent.name}: Couldn't find entry point`);
}

function isPluginFile({ name }: { name: string; }) {
    if (name === "index.ts") return false;
    return !name.startsWith("_") && !name.startsWith(".");
}

(async () => {
    loadTranslations();
    parseDevs();

    const plugins = [] as PluginData[];

    await Promise.all(["src/plugins", "src/plugins/_core"].flatMap(dir =>
        readdirSync(dir, { withFileTypes: true })
            .filter(isPluginFile)
            .map(async dirent => {
                const [data] = await parseFile(await getEntryPoint(dir, dirent));
                plugins.sort().push(data);
            })
    ));

    const data = JSON.stringify(plugins);

    if (process.argv.length > 2) {
        writeFileSync(process.argv[2], data);
    } else {
        console.log(data);
        writeFileSync("dist/plugins.json", data);
    }
})();
