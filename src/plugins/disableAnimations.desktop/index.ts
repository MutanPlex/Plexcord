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

import { PcDevs } from "@utils/constants";
import definePlugin from "@utils/types";

export default definePlugin({
    name: "DisableAnimations",
    description: "Disables most of Discord's animations.",
    authors: [PcDevs.seth, PcDevs.MutanPlex],

    patches: [
        {
            find: "canAnimate:",
            all: true,
            noWarn: true,
            replacement: {
                match: /canAnimate:.+?([,}].*?\))/g,
                replace: (m, rest) => {
                    const destructuringMatch = rest.match(/}=.+/);
                    if (destructuringMatch == null) return `canAnimate:!1${rest}`;
                    return m;
                }
            }
        },
        {
            // Status emojis
            find: "#{intl::GUILD_OWNER}),children:",
            replacement: {
                match: /(\.CUSTOM_STATUS.+?animateEmoji:)\i/,
                replace: "$1!1"
            }
        },
        {
            // Guild Banner
            find: ".animatedBannerHoverLayer,onMouseEnter:",
            replacement: {
                match: /(\.headerContent.+?guildBanner:\i,animate:)\i/,
                replace: "$1!1"
            }
        },
        {
            // Gradient roles in chat
            find: "=!1,contentOnly:",
            replacement: {
                match: /animate:\i/,
                replace: "animate:!1"
            }
        },
        {
            // Gradient roles in member list
            find: '="left",className:',
            replacement: {
                match: /,animateGradient:[^)]+\)/,
                replace: ",animateGradient:!1"
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
                    if (destructuringMatch == null) return `animateGradient:!1${rest}`;
                    return m;
                }
            }
        }
    ],

    start() {
        this.css = document.createElement("style");
        this.css.innerText = `
            * {
                transition: none !important;
                animation: none !important;
            }
            [class*="carouselModal_"] {
                opacity: 1 !important;
            }
        `;
        document.head.appendChild(this.css);
    },

    stop() {
        if (this.css) this.css.remove();
    }
});
