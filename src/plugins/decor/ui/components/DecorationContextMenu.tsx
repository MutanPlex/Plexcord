/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2023 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { t } from "@api/i18n";
import { CopyIcon, DeleteIcon } from "@components/Icons";
import { Decoration } from "@plugins/decor/lib/api";
import { useCurrentUserDecorationsStore } from "@plugins/decor/lib/stores/CurrentUserDecorationsStore";
import { cl } from "@plugins/decor/ui";
import { copyToClipboard } from "@utils/clipboard";
import { Alerts, ContextMenuApi, Menu, UserStore } from "@webpack/common";

export default function DecorationContextMenu({ decoration }: { decoration: Decoration; }) {
    const { delete: deleteDecoration } = useCurrentUserDecorationsStore();

    return <Menu.Menu
        navId={cl("decoration-context-menu")}
        onClose={ContextMenuApi.closeContextMenu}
        aria-label={t("plugin.decor.context.decorationOptions")}
    >
        <Menu.MenuItem
            id={cl("decoration-context-menu-copy-hash")}
            label={t("plugin.decor.context.copyDecorationHash")}
            icon={CopyIcon}
            action={() => copyToClipboard(decoration.hash)}
        />
        {decoration.authorId === UserStore.getCurrentUser().id &&
            <Menu.MenuItem
                id={cl("decoration-context-menu-delete")}
                label={t("plugin.decor.context.deleteDecoration")}
                color="danger"
                icon={DeleteIcon}
                action={() => Alerts.show({
                    title: t("plugin.decor.alert.delete.title"),
                    body: t("plugin.decor.alert.delete.body", { decoration }),
                    confirmText: t("plugin.decor.alert.delete.confirm"),
                    confirmColor: cl("danger-btn"),
                    cancelText: t("plugin.decor.alert.delete.cancel"),
                    onConfirm() {
                        deleteDecoration(decoration);
                    }
                })}
            />
        }
    </Menu.Menu>;
}
