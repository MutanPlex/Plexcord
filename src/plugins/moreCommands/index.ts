/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2022 Vendicated, Samu and contributors
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

import { ApplicationCommandInputType, ApplicationCommandOptionType, findOption, OptionalMessageOption, RequiredMessageOption, sendBotMessage } from "@api/Commands";
import { plugin, t } from "@api/i18n";
import { Devs, PcDevs } from "@utils/constants";
import definePlugin from "@utils/types";

function mock(input: string): string {
    let output = "";
    for (let i = 0; i < input.length; i++) {
        output += i % 2 ? input[i].toUpperCase() : input[i].toLowerCase();
    }
    return output;
}

export default definePlugin({
    name: "MoreCommands",
    description: () => t(plugin.moreCommands.description),
    authors: [Devs.Arjix, Devs.Samu, PcDevs.zyqunix],

    commands: [
        {
            name: "echo",
            description: () => t(plugin.moreCommands.command.echo.description),
            options: [OptionalMessageOption],
            inputType: ApplicationCommandInputType.BUILT_IN,
            execute: (opts, ctx) => {
                const content = findOption(opts, "message", "");

                sendBotMessage(ctx.channel.id, { content });
            },
        },
        {
            name: "lenny",
            description: () => t(plugin.moreCommands.command.lenny.description),
            options: [OptionalMessageOption],
            execute: opts => ({
                content: findOption(opts, "message", "") + " ( ͡° ͜ʖ ͡°)"
            }),
        },
        {
            name: "mock",
            description: () => t(plugin.moreCommands.command.mock.description),
            options: [RequiredMessageOption],
            execute: opts => ({
                content: mock(findOption(opts, "message", ""))
            }),
        },
        {
            name: "wordcount",
            description: () => t(plugin.moreCommands.command.wordcount.description),
            options: [RequiredMessageOption],
            inputType: ApplicationCommandInputType.BUILT_IN,
            execute: (opts, ctx) => {
                const message = findOption(opts, "message", "");
                const wordCount = message.trim().split(/\s+/).length;
                sendBotMessage(ctx.channel.id, {
                    content: t(plugin.moreCommands.command.wordcount.response, { count: wordCount })
                });
            },
        },
        {
            name: "flipcoin",
            description: () => t(plugin.moreCommands.command.flipcoin.description),
            options: [],
            execute: (opts, ctx) => {
                const flip = Math.random() < 0.5 ? t(plugin.moreCommands.command.flipcoin.heads) : t(plugin.moreCommands.command.flipcoin.tails);
                return {
                    content: t(plugin.moreCommands.command.flipcoin.response, { result: flip })
                };
            },
        },
        {
            name: "ask",
            description: () => t(plugin.moreCommands.command.ask.description),
            options: [RequiredMessageOption],
            execute: opts => {
                const question = findOption(opts, "message", "");
                const responses = [t(plugin.moreCommands.command.ask.yes), t(plugin.moreCommands.command.ask.no), t(plugin.moreCommands.command.ask.maybe), t(plugin.moreCommands.command.ask.askAgain), t(plugin.moreCommands.command.ask.definitelyNot), t(plugin.moreCommands.command.ask.itIsCertain)];
                const response = responses[Math.floor(Math.random() * responses.length)];
                return {
                    content: `${question} - ${response}`
                };
            },
        },
        {
            name: "randomanimal",
            description: () => t(plugin.moreCommands.command.randomanimal.description),
            options: [
                {
                    name: "animal",
                    description: () => t(plugin.moreCommands.command.randomanimal.animal),
                    type: ApplicationCommandOptionType.STRING,
                    required: true,
                    choices: [
                        { name: "cat", value: "cat", label: t(plugin.moreCommands.command.randomanimal.cat) },
                        { name: "dog", value: "dog", label: t(plugin.moreCommands.command.randomanimal.dog) },
                    ]
                }
            ],
            execute: (opts, ctx) => {
                return (async () => {
                    const animal = findOption(opts, "animal") as string;
                    let url;
                    if (animal === "cat") {
                        url = "https://api.thecatapi.com/v1/images/search";
                    } else if (animal === "dog") {
                        url = "https://api.thedogapi.com/v1/images/search";
                    }
                    try {
                        const response = await fetch(url);
                        if (!response.ok) throw new Error(`Failed to fetch ${animal} image`);
                        const data = await response.json();
                        return {
                            content: data[0].url
                        };
                    } catch (err) {
                        sendBotMessage(ctx.channel.id, {
                            content: t(plugin.moreCommands.command.randomanimal.response)
                        });
                    }
                })();
            },
        },
        {
            name: "randomnumber",
            description: () => t(plugin.moreCommands.command.randomnumber.description),
            options: [
                {
                    name: "min",
                    description: () => t(plugin.moreCommands.command.randomnumber.min),
                    type: ApplicationCommandOptionType.INTEGER,
                    required: true
                },
                {
                    name: "max",
                    description: () => t(plugin.moreCommands.command.randomnumber.max),
                    type: ApplicationCommandOptionType.INTEGER,
                    required: true
                }
            ],
            execute: opts => {
                const min = parseInt(findOption(opts, "min", "0"));
                const max = parseInt(findOption(opts, "max", "100"));
                const number = Math.floor(Math.random() * (max - min + 1)) + min;
                return {
                    content: t(plugin.moreCommands.command.randomnumber.response, { number, min, max })
                };
            }
        },
        {
            name: "choose",
            description: () => t(plugin.moreCommands.command.choose.description),
            options: [
                {
                    name: "choices",
                    description: () => t(plugin.moreCommands.command.choose.option),
                    type: ApplicationCommandOptionType.STRING,
                    required: true
                }
            ],
            execute: opts => {
                const choices = findOption(opts, "choices", "").split(",").map(c => c.trim());
                const choice = choices[Math.floor(Math.random() * choices.length)];
                return {
                    content: t(plugin.moreCommands.command.choose.response, { choice })
                };
            }
        },
        {
            name: "systeminfo",
            description: () => t(plugin.moreCommands.command.systeminfo.description),
            options: [],
            execute: async (opts, ctx) => {
                try {
                    const { userAgent, hardwareConcurrency, onLine, languages } = navigator;
                    const { width, height, colorDepth } = window.screen;
                    const { deviceMemory, connection }: { deviceMemory: any, connection: any; } = navigator as any;
                    const platform = userAgent.includes("Windows") ? "Windows" :
                        userAgent.includes("Mac") ? "MacOS" :
                            userAgent.includes("Linux") ? "Linux" : t(plugin.moreCommands.command.systeminfo.unknown);
                    const isMobile = /Mobile|Android|iPhone/i.test(userAgent);
                    const deviceType = isMobile ? t(plugin.moreCommands.command.systeminfo.mobile) : t(plugin.moreCommands.command.systeminfo.desktop);
                    const browserInfo = userAgent.match(/(?:chrome|firefox|safari|edge|opr)\/?\s*(\d+)/i)?.[0] || t(plugin.moreCommands.command.systeminfo.unknown);
                    const networkInfo = connection ? `${connection.effectiveType || t(plugin.moreCommands.command.systeminfo.unknown)}` : t(plugin.moreCommands.command.systeminfo.unknown);
                    const info = [
                        `> **${t(plugin.moreCommands.command.systeminfo.platform)}**: ${platform}`,
                        `> **${t(plugin.moreCommands.command.systeminfo.deviceType)}**: ${deviceType}`,
                        `> **${t(plugin.moreCommands.command.systeminfo.browser)}**: ${browserInfo}`,
                        `> **${t(plugin.moreCommands.command.systeminfo.cpuCores)}**: ${hardwareConcurrency || "N/A"}`,
                        `> **${t(plugin.moreCommands.command.systeminfo.memory)}**: ${deviceMemory ? `${deviceMemory}GB` : "N/A"}`,
                        `> **${t(plugin.moreCommands.command.systeminfo.screen)}**: ${width}x${height} (${colorDepth}bit)`,
                        `> **${t(plugin.moreCommands.command.systeminfo.languages)}**: ${languages?.join(", ")}`,
                        `> **${t(plugin.moreCommands.command.systeminfo.network)}**: ${networkInfo} (${onLine ? t(plugin.moreCommands.command.systeminfo.online) : t(plugin.moreCommands.command.systeminfo.offline)})`
                    ].join("\n");
                    return { content: info };
                } catch (err) {
                    sendBotMessage(ctx.channel.id, { content: t(plugin.moreCommands.command.systeminfo.failedToFetch) });
                }
            },
        },
        {
            name: "getuptime",
            description: () => t(plugin.moreCommands.command.getuptime.description),
            execute: async (opts, ctx) => {
                const uptime = performance.now() / 1000;
                const uptimeInfo = `> ${t(plugin.moreCommands.command.getuptime.response, { uptime: Math.floor(uptime / 60) })}`;
                return { content: uptimeInfo };
            },
        },
        {
            name: "gettime",
            description: () => t(plugin.moreCommands.command.gettime.description),
            execute: async (opts, ctx) => {
                const currentTime = new Date().toLocaleString();
                return { content: `> ${t(plugin.moreCommands.command.gettime.response, { time: currentTime })}` };
            },
        },
        {
            name: "transform",
            description: () => t(plugin.moreCommands.command.transform.description),
            options: [
                {
                    name: "transformation",
                    description: () => t(plugin.moreCommands.command.transform.transformation.description),
                    type: ApplicationCommandOptionType.STRING,
                    required: true,
                    choices: [
                        { name: "toLowerCase", value: "toLowerCase", label: t(plugin.moreCommands.command.transform.transformation.lowercase) },
                        { name: "toUpperCase", value: "toUpperCase", label: t(plugin.moreCommands.command.transform.transformation.uppercase) },
                        { name: "toLocaleLowerCase", value: "toLocaleLowerCase", label: t(plugin.moreCommands.command.transform.transformation.localeLowercase) },
                        { name: "toLocaleUpperCase", value: "toLocaleUpperCase", label: t(plugin.moreCommands.command.transform.transformation.localeUppercase) },
                        { name: "stay the same", value: "same", label: t(plugin.moreCommands.command.transform.transformation.same) }
                    ]
                },
                {
                    name: "repeat",
                    description: () => t(plugin.moreCommands.command.transform.repeat),
                    type: ApplicationCommandOptionType.INTEGER,
                    required: false
                },
                {
                    name: "reverse",
                    description: () => t(plugin.moreCommands.command.transform.reverse),
                    type: ApplicationCommandOptionType.BOOLEAN,
                    required: false
                },
                {
                    name: "normalize",
                    description: () => t(plugin.moreCommands.command.transform.normalize.description),
                    type: ApplicationCommandOptionType.STRING,
                    required: false,
                    choices: [
                        { name: "NFC", value: "NFC", label: t(plugin.moreCommands.command.transform.normalize.nfc) },
                        { name: "NFD", value: "NFD", label: t(plugin.moreCommands.command.transform.normalize.nfd) },
                        { name: "NFKC", value: "NFKC", label: t(plugin.moreCommands.command.transform.normalize.nfkc) },
                        { name: "NFKD", value: "NFKD", label: t(plugin.moreCommands.command.transform.normalize.nfkd) }
                    ]
                },
                {
                    name: "text",
                    description: () => t(plugin.moreCommands.command.transform.text),
                    type: ApplicationCommandOptionType.STRING,
                    required: true
                }
            ],
            execute: opts => {
                let text = findOption(opts, "text") as string;
                const transform = findOption(opts, "transformation") as string;
                const repeat = findOption(opts, "repeat") as number | undefined ?? 1;
                const normalize = findOption(opts, "normalize") as string | undefined;
                const reverse = findOption(opts, "reverse") as string | undefined;

                if (transform !== "same") {
                    text = (text as any)[transform]?.call(text) ?? text;
                }

                if (normalize) text = text.normalize(normalize);
                if (reverse) text = text.split("").reverse().join("");

                return { content: text.repeat(repeat) };
            }
            ,
        },
    ]
});
