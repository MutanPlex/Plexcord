/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2024 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import "./style.css";

import { plugin, t } from "@api/i18n";
import { EyeSlashIcon } from "@components/Icons";
import { ServerListItem } from "@components/ServerListItem";
import { HiddenServersStore } from "@plugins/hideServers/HiddenServersStore";
import { classNameFactory } from "@utils/css";
import { GuildStore, useStateFromStores } from "@webpack/common";

import { openHiddenServersModal } from "./HiddenServersMenu";

const cl = classNameFactory("pc-hideservers-");

function HiddenServersButton() {
    const hiddenGuilds = useStateFromStores([HiddenServersStore], () => HiddenServersStore.hiddenGuilds, undefined, (old, newer) => old.size === newer.size);
    // if youve left a server dont show it in the count
    const actuallyHidden = Array.from(hiddenGuilds).filter(x => GuildStore.getGuild(x)).length;

    return actuallyHidden > 0 ? (
        <ServerListItem
            id={cl("container")}
            icon={EyeSlashIcon}
            tooltip={t(plugin.hideServers.button.hiddenServers)}
            badge={{
                count: actuallyHidden
            }}
            onClick={() => openHiddenServersModal()}
        />
    ) : (null);
}

export default () => { return <HiddenServersButton />; };
