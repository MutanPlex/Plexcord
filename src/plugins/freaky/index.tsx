/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2024 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { ApplicationCommandInputType, ApplicationCommandOptionType, findOption } from "@api/Commands";
import { plugin, t } from "@api/i18n";
import { definePluginSettings } from "@api/Settings";
import { PcDevs } from "@utils/constants";
import { sendMessage } from "@utils/discord";
import definePlugin, { OptionType } from "@utils/types";

const charMap: Record<string, string> = {
    q: "𝓺", w: "𝔀", e: "𝓮", r: "𝓻", t: "𝓽", y: "𝔂", u: "𝓾", i: "𝓲", o: "𝓸", p: "𝓹",
    a: "𝓪", s: "𝓼", d: "𝓭", f: "𝓯", g: "𝓰", h: "𝓱", j: "𝓳", k: "𝓴", l: "𝓵", z: "𝔃",
    x: "𝔁", c: "𝓬", v: "𝓿", b: "𝓫", n: "𝓷", m: "𝓶", Q: "𝓠", W: "𝓦", E: "𝓔", R: "𝓡",
    T: "𝓣", Y: "𝓨", U: "𝓤", I: "𝓘", O: "𝓞", P: "𝓟", A: "𝓐", S: "𝓢", D: "𝓓", F: "𝓕",
    G: "𝓖", H: "𝓗", J: "𝓙", K: "𝓚", L: "𝓛", Z: "𝓩", X: "𝓧", C: "𝓒", V: "𝓥", B: "𝓑",
    N: "𝓝", M: "𝓜",
};

const mapCharacters = (text: string, map: Record<string, string>) =>
    text.split("").map(char => map[char] || char).join("");

function makeFreaky(text: string) {
    text = mapCharacters(text.trim() || "freaky", charMap);
    if (settings.store.addFreakyEnding) text += Math.random() < 0.25 ? " 👅" : " ❤️";
    return text;
}

const settings = definePluginSettings({
    addFreakyEnding: {
        label: () => t(plugin.freaky.option.addFreakyEnding.label),
        description: () => t(plugin.freaky.option.addFreakyEnding.description),
        type: OptionType.BOOLEAN,
        default: true
    }
});

export default definePlugin({
    name: "Freaky",
    description: () => t(plugin.freaky.description),
    authors: [PcDevs.nyx, PcDevs.MutanPlex],
    settings,

    commands: [
        {
            name: "freaky",
            description: () => t(plugin.freaky.command.freaky),
            inputType: ApplicationCommandInputType.BUILT_IN,
            options: [{
                name: "message",
                description: () => t(plugin.freaky.command.message),
                type: ApplicationCommandOptionType.STRING,
                required: true
            }],
            execute: (opts, ctx) => {
                sendMessage(ctx.channel.id, { content: makeFreaky(findOption(opts, "message", "")) });
            }
        }
    ]
});
