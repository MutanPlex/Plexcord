/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2024 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import "./style.css";

import { t } from "@api/i18n";
import { classNameFactory } from "@api/Styles";
import { HiddenServersStore } from "@plugins/hideServers/HiddenServersStore";
import { Button, GuildStore, useStateFromStores } from "@webpack/common";

import { openHiddenServersModal } from "./HiddenServersMenu";

const cl = classNameFactory("pc-hideservers-");

function HiddenServersButton() {
    const hiddenGuilds = useStateFromStores([HiddenServersStore], () => HiddenServersStore.hiddenGuilds, undefined, (old, newer) => old.size === newer.size);
    // if youve left a server dont show it in the count
    const actuallyHidden = Array.from(hiddenGuilds).filter(x => GuildStore.getGuild(x)).length;
    return (
        <div className={cl("button-wrapper")}>
            {actuallyHidden > 0 ? (
                <Button
                    className={cl("button")}
                    look={Button.Looks.FILLED}
                    size={Button.Sizes.MIN}
                    onClick={() => openHiddenServersModal()}
                >
                    {actuallyHidden} {t("plugin.hideServers.button.hidden")}
                </Button>
            ) : null}
        </div >
    );
}

export default () => { return <HiddenServersButton />; };
