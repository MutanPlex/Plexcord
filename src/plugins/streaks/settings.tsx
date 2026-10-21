/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2026 Vendicated and contributors
 * Copyright (c) 2026 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { plugin, t } from "@api/i18n";
import { definePluginSettings } from "@api/Settings";
import { Button } from "@components/Button";
import { Flex } from "@components/Flex";
import { OptionType } from "@utils/types";
import { UserStore } from "@webpack/common";

import { useAuthorizationStore } from "./stores/AuthorizationStore";
import { useStreaksStore } from "./stores/StreaksStore";

export const settings = definePluginSettings({
    account: {
        type: OptionType.COMPONENT,
        description: () => t(plugin.streaks.option.account.description),
        component() {
            const { isAuthorized, authorize, remove } = useAuthorizationStore();

            if (isAuthorized()) {
                return (
                    <Flex>
                        <Button
                            onClick={() => remove(UserStore.getCurrentUser()?.id)}
                            variant="dangerPrimary"
                        >
                            {t(plugin.streaks.option.account.logout)}
                        </Button>
                    </Flex>
                );
            }

            return (
                <Flex>
                    <Button onClick={async () => {
                        await authorize();
                        await useStreaksStore.getState().migrate();
                        await useStreaksStore.getState().fetch();
                    }}>
                        {t(plugin.streaks.option.account.login)}
                    </Button>
                </Flex>
            );
        }
    },
    eliteColor: {
        type: OptionType.STRING,
        description: () => t(plugin.streaks.option.eliteColor),
        default: "#9b39fe"
    },
    diamondColor: {
        type: OptionType.STRING,
        description: () => t(plugin.streaks.option.diamondColor),
        default: "#f7409c"
    },
    platinumColor: {
        type: OptionType.STRING,
        description: () => t(plugin.streaks.option.platinumColor),
        default: "#856bfe"
    },
    goldColor: {
        type: OptionType.STRING,
        description: () => t(plugin.streaks.option.goldColor),
        default: "#f75340"
    },
    silverColor: {
        type: OptionType.STRING,
        description: () => t(plugin.streaks.option.silverColor),
        default: "#f57b0b"
    },
    bronzeColor: {
        type: OptionType.STRING,
        description: () => t(plugin.streaks.option.bronzeColor),
        default: "#b08d57"
    },
    defaultColor: {
        type: OptionType.STRING,
        description: () => t(plugin.streaks.option.defaultColor),
        default: "#f59e0b"
    }
});
