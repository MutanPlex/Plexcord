/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2023 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
*/

import { settings, t } from "@api/i18n";
import ErrorBoundary from "@components/ErrorBoundary";
import { handleComponentFailed } from "@components/handleComponentFailed";
import { onlyOnce } from "@utils/onlyOnce";
import { Modal, openModal } from "@webpack/common";
import type { ComponentType, PropsWithChildren } from "react";

export function SettingsTab({ children }: PropsWithChildren) {
    return (
        <section className="pc-settings-tab">{children}</section>
    );
}

export const handleSettingsTabError = onlyOnce(handleComponentFailed);

export function wrapTab(component: ComponentType<any>, tab: string) {
    const wrapped = ErrorBoundary.wrap(component, {
        displayName: `${tab}SettingsTab`,
        message: t(settings.tabs.renderFailed, { tab }),
        onError: handleSettingsTabError,
    });

    return wrapped;
}

export function openSettingsTabModal(Tab: ComponentType<any>) {
    Tab = wrapTab(Tab, Tab.displayName || "SettingsTab");

    try {
        openModal(props => (
            <Modal
                {...props}
                size="lg"
                title={Tab.displayName?.replace("SettingsTab", "") || t(settings.title)}
            >
                <Tab />
            </Modal>
        ));
    } catch {
        handleSettingsTabError();
    }
}
