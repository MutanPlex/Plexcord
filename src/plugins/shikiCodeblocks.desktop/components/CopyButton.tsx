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

import { useCopyCooldown } from "@plugins/shikiCodeblocks.desktop/hooks/useCopyCooldown";

export interface CopyButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    content: string;
}

export function CopyButton({ content, ...props }: CopyButtonProps) {
    const [copyCooldown, copy] = useCopyCooldown(1000);

    return (
        <button
            {...props}
            style={{
                ...props.style,
                cursor: copyCooldown ? "default" : undefined,
            }}
            onClick={() => copy(content)}
        >
            {copyCooldown ? "Copied!" : "Copy"}
        </button>

    );
}
