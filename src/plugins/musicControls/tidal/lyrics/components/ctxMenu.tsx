/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2024 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { t } from "@api/i18n";
import { copyWithToast } from "@utils/discord";
import { findComponentByCodeLazy } from "@webpack";
import { FluxDispatcher, Menu } from "@webpack/common";

import { useLyrics } from "./util";

const CopyIcon = findComponentByCodeLazy(" 1-.5.5H10a6");

export function LyricsContextMenu() {
    const { lyrics, currLrcIndex } = useLyrics({ scroll: false });
    const currLyric = lyrics?.[currLrcIndex ?? NaN];

    return (
        <Menu.Menu
            navId="tidal-lyrics-menu"
            onClose={() => FluxDispatcher.dispatch({ type: "CONTEXT_MENU_CLOSE" })}
            aria-label={t("plugin.musicControls.context.tidal.label")}
        >
            <Menu.MenuItem
                key="copy-lyric"
                id="copy-lyric"
                label={t("plugin.musicControls.context.copy.currentLyrics")}
                disabled={!currLyric?.text}
                action={() => copyWithToast(currLyric!.text!, t("plugin.musicControls.alert.lyricCopied"))}
                icon={CopyIcon}
            />
        </Menu.Menu>
    );
}
