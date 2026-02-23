/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2024 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import "./styles.css";

import { plugin, t } from "@api/i18n";
import { addMessagePreSendListener, removeMessagePreSendListener } from "@api/MessageEvents";
import { EyeIcon } from "@components/Icons";
import settings from "@plugins/_core/settings";
import { PcDevs } from "@utils/constants";
import { removeFromArray } from "@utils/misc";
import definePlugin from "@utils/types";

import { Data } from "./components/data";
import DataUI from "./components/ui";

export default definePlugin({
    name: "IRememberYou",
    description: () => t(plugin.iRememberYou.description),
    authors: [PcDevs.zoodogood, PcDevs.keircn, PcDevs.MutanPlex],
    dependencies: ["MessageEventsAPI"],
    patches: [],

    async start() {
        settings.customEntries.push({
            key: "plexcord_i_remember_you",
            title: t(plugin.iRememberYou.section.iRememberYou),
            Component: () => <DataUI usersCollection={data.usersCollection} />,
            Icon: EyeIcon
        });
        settings.settingsSectionMap.push(["PlexcordIRememberYou", "plexcord_i_remember_you"]);
        const data = (this.dataManager = await new Data().withStart());

        await data.initializeUsersCollection();
        data.writeGuildsOwnersToCollection();
        data.writeMembersFromUserGuildsToCollection();
        data._onMessagePreSend_preSend = addMessagePreSendListener(
            data.onMessagePreSend.bind(data)
        );
        data.storageAutoSaveProtocol();
    },

    stop() {
        removeFromArray(settings.customEntries, e => e.key === "plexcord_i_remember_you");
        removeFromArray(settings.settingsSectionMap, entry => entry[1] === "plexcord_i_remember_you");

        const dataManager = this.dataManager as Data;
        removeMessagePreSendListener(dataManager._onMessagePreSend_preSend);
        clearInterval(dataManager._storageAutoSaveProtocol_interval);
    },
});
