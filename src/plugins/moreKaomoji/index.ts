/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2022 Vendicated and contributors
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

import { findOption, OptionalMessageOption } from "@api/Commands";
import { Devs, PcDevs } from "@utils/constants";
import definePlugin from "@utils/types";

export default definePlugin({
    name: "MoreKaomoji",
    description: "Adds more Kaomoji to discord. ヽ(´▽`)/",
    authors: [Devs.JacobTm, PcDevs.MutanPlex],
    commands: [
        { name: "dissatisfaction", description: " ＞﹏＜" },
        { name: "smug", description: "ಠ_ಠ" },
        { name: "happy", description: "ヽ(´▽`)/" },
        { name: "crying", description: "ಥ_ಥ" },
        { name: "angry", description: "ヽ(｀Д´)ﾉ" },
        { name: "anger", description: "ヽ(ｏ`皿′ｏ)ﾉ" },
        { name: "joy", description: "<(￣︶￣)>" },
        { name: "blush", description: "૮ ˶ᵔ ᵕ ᵔ˶ ა" },
        { name: "confused", description: "(•ิ_•ิ)?" },
        { name: "sleeping", description: "(ᴗ_ᴗ)" },
        { name: "laughing", description: "o(≧▽≦)o" },
        { name: "giving", description: "(ﾉ◕ヮ◕)ﾉ*:･ﾟ✧" },
        { name: "peace", description: "✌(◕‿-)✌" },
        { name: "ending1", description: "Ꮺ ָ࣪ ۰ ͙⊹" },
        { name: "uwu", description: "(>⩊<)" },
        { name: "comfy", description: "(─‿‿─)♡" },
        { name: "lovehappy", description: "(*≧ω≦*)" },
        { name: "loveee", description: "(⁄ ⁄>⁄ ▽ ⁄<⁄ ⁄)" },
        { name: "give", description: "(ノ= ⩊ = )ノ" },
        { name: "lovegive", description: "ღゝ◡╹)ノ♡" },
        { name: "music", description: "(￣▽￣)/♫•¨•.¸¸♪" },
        { name: "stars", description: ".𖥔 ݁ ˖๋ ࣭ ⭑" },
        { name: "lovegiving", description: "⸜(｡˃ ᵕ ˂ )⸝♡" }
    ].map(data => ({
        ...data,
        options: [OptionalMessageOption],
        execute: opts => ({
            content: findOption(opts, "message", "") + " " + data.description
        })
    }))
});
