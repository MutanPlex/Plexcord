/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2024 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { t } from "@api/i18n";
import { definePluginSettings } from "@api/Settings";
import { Button } from "@components/Button";
import { OptionType } from "@utils/types";
import { useStateFromStores } from "@webpack/common";

import { addIndicator, removeIndicator } from ".";
import { HiddenServersMenu } from "./components/HiddenServersMenu";
import { HiddenServersStore } from "./HiddenServersStore";

export default definePluginSettings({
    showIndicator: {
        get label() {
            return t("plugin.hideServers.option.showIndicator.label");
        },
        get description() {
            return t("plugin.hideServers.option.showIndicator.description");
        },
        type: OptionType.BOOLEAN,
        default: true,
        onChange: val => {
            if (val) {
                addIndicator();
            } else {
                removeIndicator();
            }
        }
    },
    guildsList: {
        get label() {
            return t("plugin.hideServers.option.guildsList.label");
        },
        get description() {
            return t("plugin.hideServers.option.guildsList.description");
        },
        type: OptionType.COMPONENT,
        component: () => {
            const detail = useStateFromStores([HiddenServersStore], () => HiddenServersStore.hiddenGuildsDetail());
            return <HiddenServersMenu guilds={detail} />;
        }
    },
    resetHidden: {
        get label() {
            return t("plugin.hideServers.option.resetHidden.label");
        },
        get description() {
            return t("plugin.hideServers.option.resetHidden.description");
        },
        type: OptionType.COMPONENT,
        component: () => (
            <div>
                <Button
                    size="small"
                    variant="dangerPrimary"
                    onClick={() => HiddenServersStore.clearHidden()}
                >
                    {t("plugin.hideServers.option.resetHidden.button")}
                </Button>
            </div>
        ),
    },
});
