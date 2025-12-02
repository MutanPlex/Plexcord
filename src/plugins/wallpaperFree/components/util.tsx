/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2025 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { t } from "@api/i18n";
import { BaseText } from "@components/BaseText";
import { Button } from "@components/Button";
import { WallpaperFreeStore } from "@plugins/wallpaperFree/store";
import { openModal } from "@utils/modal";
import { makeCodeblock } from "@utils/text";
import { FluxDispatcher, Parser } from "@webpack/common";

import { SetWallpaperModal } from "./modal";

export function GlobalDefaultComponent() {
    const setGlobal = (url?: string) => {
        FluxDispatcher.dispatch({
            // @ts-ignore
            type: "PC_WALLPAPER_FREE_CHANGE_GLOBAL",
            url,
        });
    };

    return (
        <>
            <Button onClick={() => {
                openModal(props => <SetWallpaperModal props={props} onSelect={setGlobal} initialUrl={WallpaperFreeStore.globalDefault} />);
            }}>{t("plugin.wallpaperFree.modal.global.set")}</Button>

            <Button
                variant="dangerPrimary"
                onClick={() => setGlobal(void 0)}
            >{t("plugin.wallpaperFree.modal.global.remove")}</Button>

            <Button
                variant="dangerPrimary"
                onClick={() => {
                    // @ts-ignore
                    FluxDispatcher.dispatch({ type: "PC_WALLPAPER_FREE_RESET" });
                }}
            >{t("plugin.wallpaperFree.modal.global.reset")}</Button>
        </>
    );
}

export function TipsComponent() {
    const tipText = `
    .pc-wpfree-wp-container {
        transform: scaleX(-1); /* flip it horizontally */
        filter: blur(4px); /* apply a blur */
        opacity: 0.7; /* self-explanatory */
    }

    /* If you don't like embeds being transparent */

    [class*=embedFull__] {
        background: var(--background-surface-high) !important;
    }

    /* the same for codeblocks (or use ShikiCodeblocks) */

    .hljs {
        background-color: var(--background-base-lowest) !important;
    }`;
    return (
        <div style={{ userSelect: "text" }}>
            {!IS_WEB && (
                <>
                    <BaseText>
                        {t("plugin.wallpaperFree.modal.web.info")}
                    </BaseText>
                    <Button onClick={() => PlexcordNative.themes.openFolder()}>
                        {t("plugin.wallpaperFree.modal.web.open")}
                    </Button>
                </>
            )}
            {Parser.parse(makeCodeblock(tipText, "css"))}
            <Button onClick={() => PlexcordNative.quickCss.openEditor()}>
                {t("plugin.wallpaperFree.modal.web.quickCSS")}
            </Button>
        </div>
    );
}
