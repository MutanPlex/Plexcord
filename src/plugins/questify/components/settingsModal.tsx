/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2026 Vendicated and contributors
 * Copyright (c) 2026 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import PluginModal from "@components/settings/tabs/plugins/PluginModal";
import type { Plugin } from "@utils/types";
import { openModal } from "@webpack/common";

import { promptToRestartIfDirty } from "../settings/restartTracking";
import { setSettingsModalOpen } from "../state";

export function openQuestifySettingsModal(plugin: Plugin): void {
    setSettingsModalOpen(true);

    openModal(
        modalProps => (
            <PluginModal
                {...modalProps}
                plugin={plugin}
                onRestartNeeded={() => { }}
            />
        ),
        {
            onCloseCallback: () => {
                setSettingsModalOpen(false);
                promptToRestartIfDirty();
            }
        }
    );
}
