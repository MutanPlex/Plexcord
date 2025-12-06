/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2024 Vendicated and contributors
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
import { PcDevs } from "@utils/constants";
import definePlugin from "@utils/types";

function settingsComponent() {
    return (
        <span style={{ color: "white" }}>
            <i>
                <b>
                    {t(plugin.searchFix.notPerfect)}
                </b>
            </i>
            {t(plugin.searchFix.paragraph1)}<br />
            {t(plugin.searchFix.paragraph2)}<br />
            {t(plugin.searchFix.paragraph3)}<br />
            {t(plugin.searchFix.paragraph4)}<br />
            {t(plugin.searchFix.paragraph5)}
        </span>
    );
}

export default definePlugin({
    name: "SearchFix",
    description: () => t(plugin.searchFix.description),
    settingsAboutComponent: () => settingsComponent(),
    authors: [PcDevs.Jaxx, PcDevs.MutanPlex],

    patches: [
        {
            find: '"SearchQueryStore");',
            replacement: {
                match: /\i\.searchResultsQuery=(\i)/,
                replace: "$&,$self.main($1)"
            }
        }
    ],
    main(query) {
        if (query.offset > 5000) {
            query.sort_order = query.sort_order === "asc" ? "desc" : "asc";

            if (query.offset > 5000 - 5000) {
                query.offset = 0;
            } else {
                query.offset -= 5000;
            }
        }
    }
});
