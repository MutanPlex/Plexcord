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

import { Devs, PcDevs } from "@utils/constants";
import definePlugin, { OptionType } from "@utils/types";

let click1, click2, click3, backspace;
let sounds = {
    click1,
    click2,
    click3,
    backspace
};

const ignoredKeys = ["CapsLock", "ShiftLeft", "ShiftRight", "ControlLeft", "ControlRight", "AltLeft", "AltRight", "MetaLeft", "MetaRight", "ArrowUp", "ArrowRight", "ArrowLeft", "ArrowDown", "MediaPlayPause", "MediaStop", "MediaTrackNext", "MediaTrackPrevious", "MediaSelect", "MediaEject", "MediaVolumeUp", "MediaVolumeDown", "AudioVolumeUp", "AudioVolumeDown"];

const keydown = (e: KeyboardEvent) => {
    if (ignoredKeys.includes(e.code)) return;
    for (const sound of Object.values(sounds)) sound.pause();
    if (e.code === "Backspace") {
        sounds.backspace.currentTime = 0;
        sounds.backspace.play();
    } else {
        const click = sounds[`click${Math.floor(Math.random() * 3) + 1}`];
        click.currentTime = 0;
        click.play();
    }
};

export default definePlugin({
    name: "KeyboardSounds",
    description: "Adds the Opera GX Keyboard Sounds to Discord",
    authors: [Devs.HypedDomi, PcDevs.MutanPlex],
    start: () => {
        click1 = new Audio("https://raw.githubusercontent.com/MutanPlex/random-files/51ed29d6b7548846ab4c9ba6ff84bbfe02f4d03b/keyboard-sounds/sounds_keyboard_click1.wav");
        click2 = new Audio("https://raw.githubusercontent.com/MutanPlex/random-files/51ed29d6b7548846ab4c9ba6ff84bbfe02f4d03b/keyboard-sounds/sounds_keyboard_click2.wav");
        click3 = new Audio("https://raw.githubusercontent.com/MutanPlex/random-files/51ed29d6b7548846ab4c9ba6ff84bbfe02f4d03b/keyboard-sounds/sounds_keyboard_click3.wav");
        backspace = new Audio("https://raw.githubusercontent.com/MutanPlex/random-files/51ed29d6b7548846ab4c9ba6ff84bbfe02f4d03b/keyboard-sounds/sounds_keyboard_backspace.wav");
        sounds = {
            click1,
            click2,
            click3,
            backspace,
        };
        document.addEventListener("keydown", keydown);
    },
    stop: () => document.removeEventListener("keydown", keydown),
    options: {
        volume: {
            description: "Volume",
            type: OptionType.SLIDER,
            markers: [0, 100],
            stickToMarkers: false,
            default: 100,
            onChange: value => { for (const sound of Object.values(sounds)) sound.volume = value / 100; }
        }
    }
});
