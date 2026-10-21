/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2026 Vendicated and contributors
 * Copyright (c) 2026 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { plugins, t } from "@api/i18n";
import { ConfirmModalProps } from "@plexcord/discord-types";
import { ConfirmModal, openModal } from "@webpack/common";

import { relaunch } from "./native";

/**
 * @param type - "relaunch" to restart the entire application, "reload" to only reload Discord (CTRL + R)
 * @param props - Properties for the confirmation modal, uses sensible defaults
 */
export function promptToRestart(
    type: "relaunch" | "reload",
    {
        title = t(plugins.restart.required),
        subtitle = t(plugins.restart.apply),
        confirmText = t(plugins.restart.button.now),
        cancelText = t(plugins.restart.button.later),
        ...props
    }: Partial<ConfirmModalProps> = {}
) {
    const onConfirm = type === "relaunch"
        ? relaunch
        : () => location.reload();

    openModal(modalProps => (
        <ConfirmModal
            variant="primary"
            {...modalProps}
            {...props}

            title={title}
            subtitle={subtitle}
            confirmText={confirmText}
            cancelText={cancelText}
            onConfirm={onConfirm}
        />
    ));
}
