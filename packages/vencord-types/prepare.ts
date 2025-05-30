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

import { cpSync, moveSync, readdirSync, rmSync } from "fs-extra";
import { join } from "path";

readdirSync(join(__dirname, "src"))
    .forEach(child => moveSync(join(__dirname, "src", child), join(__dirname, child), { overwrite: true }));

const PlexcordSrc = join(__dirname, "..", "..", "src");

for (const file of ["preload.d.ts", "userplugins", "main", "debug", "src", "browser", "scripts"]) {
    rmSync(join(__dirname, file), { recursive: true, force: true });
}

function copyDtsFiles(from: string, to: string) {
    for (const file of readdirSync(from, { withFileTypes: true })) {
        // bad
        if (from === PlexcordSrc && file.name === "globals.d.ts") continue;

        const fullFrom = join(from, file.name);
        const fullTo = join(to, file.name);

        if (file.isDirectory()) {
            copyDtsFiles(fullFrom, fullTo);
        } else if (file.name.endsWith(".d.ts")) {
            cpSync(fullFrom, fullTo);
        }
    }
}

copyDtsFiles(PlexcordSrc, __dirname);
