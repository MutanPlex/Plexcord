/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2024 Vendicated and contributors
 * Copyright (c) 2026 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import * as DataStore from "@api/DataStore";
import { plugin, t } from "@api/i18n";
import { definePluginSettings } from "@api/Settings";
import { Button } from "@components/Button";
import { HeadingSecondary } from "@components/Heading";
import { OpenExternalIcon } from "@components/Icons";
import { Paragraph } from "@components/Paragraph";
import { copyToClipboard } from "@utils/clipboard";
import { classNameFactory } from "@utils/css";
import { OptionType } from "@utils/types";
import { showToast } from "@webpack/common";

import { authorizeUser, deauthorizeUser } from "./auth";

const cl = classNameFactory("pce-");

export const settings = definePluginSettings({
    hideWarningCard: {
        label: () => t(plugin.themeLibrary.option.hideWarningCard.label),
        type: OptionType.BOOLEAN,
        default: false,
        description: () => t(plugin.themeLibrary.option.hideWarningCard.description),
        restartNeeded: false,
    },
    buttons: {
        label: () => t(plugin.themeLibrary.option.buttons.label),
        type: OptionType.COMPONENT,
        description: () => t(plugin.themeLibrary.option.buttons.description),
        component: () => {
            const handleClick = async () => {
                const token = await DataStore.get("ThemeLibrary_uniqueToken");

                if (!token) return showToast({
                    text: t(plugin.themeLibrary.toast.noTokenToCopy),
                    variant: "critical",
                    duration: 2.5e3,
                    position: "bottom"
                });

                copyToClipboard(token);

                showToast({
                    text: t(plugin.themeLibrary.toast.copiedToClipboard2),
                    variant: "success",
                    duration: 2.5e3,
                    position: "bottom"
                });
            };

            return (
                <section>
                    <HeadingSecondary style={{ marginTop: 0, marginBottom: 8 }}>{t(plugin.themeLibrary.text.themelibraryAuth)}</HeadingSecondary>
                    <div className={cl("button-grid")}>
                        <Button onClick={() => authorizeUser()}>
                            {t(plugin.themeLibrary.text.authorizeWithThemelibrary)}
                        </Button>
                        <Button onClick={handleClick}>
                            {t(plugin.themeLibrary.text.copyThemelibraryToken)}
                        </Button>
                        <Button variant="dangerPrimary" onClick={() => deauthorizeUser()}>
                            {t(plugin.themeLibrary.text.deauthorizeThemelibrary)}
                        </Button>
                    </div>
                    <HeadingSecondary style={{ marginTop: 8, marginBottom: 8 }}>{t(plugin.themeLibrary.text.themeRemoval)}</HeadingSecondary>
                    <Paragraph style={{ marginTop: 0, marginBottom: 8 }}> {t(plugin.themeLibrary.text.allThemeAuthorsAre)}</Paragraph>
                    <div className={cl("button-grid")}>
                        <Button onClick={() => PlexcordNative.native.openExternal("https://github.com/Plexcord/themes.plexcord.club/issues/new?labels=removal&projects=&template=request_removal.yml&title=Theme+Removal")}>
                            {t(plugin.themeLibrary.text.requestRemoval)} <OpenExternalIcon height={16} width={16} />
                        </Button>
                    </div>
                </section>
            );
        }
    }
});
