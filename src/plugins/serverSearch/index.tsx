/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2023 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import "./styles.css";

import { t } from "@api/i18n";
import { addServerListElement, removeServerListElement, ServerListRenderPosition } from "@api/ServerList";
import ErrorBoundary from "@components/ErrorBoundary";
import { PcDevs } from "@utils/constants";
import definePlugin from "@utils/types";
import { FluxDispatcher } from "@webpack/common";
import { Tooltip } from "webpack/common/components";

function SearchIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" id="pc-searchbutton-icon">
            <path
                fill="currentColor"
                fillRule="evenodd"
                d="M15.62 17.03a9 9 0 1 1 1.41-1.41l4.68 4.67a1 1 0 0 1-1.421.42l-4.67-4.68ZM17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
                clipRule="evenodd"></path>
        </svg>
    );
}

export default definePlugin({
    name: "ServerSearch",
    authors: [PcDevs.camila314, PcDevs.MutanPlex],
    description: "Navigate your servers better with a quick search button",

    get displayDescription() {
        return t("plugin.serverSearch.description");
    },

    renderButton() {
        return <ErrorBoundary noop>
            <div id="pc-searchbutton-container">
                <Tooltip text={t("plugin.serverSearch.tooltip")} position="right">
                    {({ onMouseEnter, onMouseLeave }) => (
                        <div
                            id="pc-searchbutton"
                            onMouseEnter={onMouseEnter}
                            onMouseLeave={onMouseLeave}
                            onClick={() =>
                                FluxDispatcher.dispatch({
                                    type: "QUICKSWITCHER_SHOW",
                                    query: "",
                                    queryMode: null
                                })
                            }>
                            <SearchIcon />
                        </div>
                    )}
                </Tooltip>
            </div>
        </ErrorBoundary>;
    },

    start() {
        addServerListElement(ServerListRenderPosition.Above, this.renderButton);
    },

    stop() {
        removeServerListElement(ServerListRenderPosition.Above, this.renderButton);
    }
});
