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

import { Devs } from "@utils/constants";
import definePlugin from "@utils/types";

export default definePlugin({
    name: "AlwaysAnimate",
    description: "Animates anything that can be animated",
    authors: [Devs.FieryFlames],

    patches: [
        {
            find: "canAnimate:",
            all: true,
            // Some modules match the find but the replacement is returned untouched
            noWarn: true,
            replacement: {
                match: /canAnimate:.+?([,}].*?\))/g,
                replace: (m, rest) => {
                    const destructuringMatch = rest.match(/}=.+/);
                    if (destructuringMatch == null) return `canAnimate:!0${rest}`;
                    return m;
                }
            }
        },
        {
            // Status emojis
            find: "#{intl::GUILD_OWNER}),children:",
            replacement: {
                match: /(\.CUSTOM_STATUS.+?animateEmoji:)\i/,
                replace: "$1!0"
            }
        },
        {
            // Guild Banner
            find: ".animatedBannerHoverLayer,onMouseEnter:",
            replacement: {
                match: /(\.headerContent.+?guildBanner:\i,animate:)\i/,
                replace: "$1!0"
            }
        },
        {
            // Role Gradients
            find: "animateGradient:",
            all: true,
            noWarn: true,
            replacement: {
                match: /animateGradient:.+?([,}].*?\))/g,
                replace: (m, rest) => {
                    const destructuringMatch = rest.match(/}=.+/);
                    if (destructuringMatch == null) return `animateGradient:!0${rest}`;
                    return m;
                }
            }
        }
    ]
});
