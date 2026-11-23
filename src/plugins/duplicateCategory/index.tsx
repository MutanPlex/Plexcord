/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2026 Vendicated and contributors
 * Copyright (c) 2026 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import "./styles.css";

import { findGroupChildrenByChildId, NavContextMenuPatchCallback } from "@api/ContextMenu";
import { plugin, t } from "@api/i18n";
import ErrorBoundary from "@components/ErrorBoundary";
import { CopyIcon } from "@components/Icons";
import type { Channel, RenderModalProps } from "@plexcord/discord-types";
import { ChannelType } from "@plexcord/discord-types/enums";
import { PcDevs } from "@utils/constants";
import { classNameFactory } from "@utils/css";
import definePlugin from "@utils/types";
import { ChannelStore, Constants, Menu, Modal, openModal, PermissionsBits, PermissionStore, RestAPI, showToast, TextInput, useState } from "@webpack/common";

const cl = classNameFactory("pc-duplicate-category-");

const DuplicateCategoryModal = ErrorBoundary.wrap(({ category, ...props }: RenderModalProps & { category: Channel; }) => {
    const [name, setName] = useState(category.name);
    const [copyPermissions, setCopyPermissions] = useState(true);
    const [saving, setSaving] = useState(false);
    const [error, setError] = useState<string | null>(null);

    async function createCategory() {
        if (saving || !name.trim()) return;
        setSaving(true);
        setError(null);
        try {
            const source = ChannelStore.getChannel(category.id);
            if (!source || source.type !== ChannelType.GUILD_CATEGORY)
                throw new Error(t(plugin.duplicateCategory.error.missing));
            await RestAPI.post({
                url: Constants.Endpoints.GUILD_CHANNELS(source.guild_id),
                body: {
                    name: name.trim(),
                    type: ChannelType.GUILD_CATEGORY,
                    permission_overwrites: copyPermissions ? Object.values(source.permissionOverwrites ?? {}).map(overwrite => ({
                        id: overwrite.id,
                        type: overwrite.type,
                        allow: String(overwrite.allow),
                        deny: String(overwrite.deny)
                    })) : []
                }
            });
            props.onClose();
            showToast({ text: t(plugin.duplicateCategory.toast.created), variant: "success" });
        } catch (error) {
            console.error("[DuplicateCategory] Failed to create category", error);
            setError(error instanceof Error ? error.message : t(plugin.duplicateCategory.error.failed));
            setSaving(false);
        }
    }

    return (
        <Modal
            {...props}
            title={t(plugin.duplicateCategory.modal.title)}
            size="md"
            notice={error ? { message: error, type: "critical" } : undefined}
            actions={[
                { text: t(plugin.duplicateCategory.modal.cancel), variant: "secondary", onClick: props.onClose, disabled: saving },
                { text: t(plugin.duplicateCategory.modal.create), variant: "primary", onClick: createCategory, loading: saving, disabled: saving || !name.trim() }
            ]}
        >
            <form onSubmit={event => { event.preventDefault(); void createCategory(); }}>
                <label
                    htmlFor="pc-duplicate-category-name"
                    className={cl("label")}
                >
                    {t(plugin.duplicateCategory.modal.name)}
                </label>
                <TextInput
                    id="pc-duplicate-category-name"
                    autoFocus
                    value={name}
                    maxLength={100}
                    disabled={saving}
                    placeholder={t(plugin.duplicateCategory.modal.placeholder)}
                    onChange={setName}
                />
            </form>
            <div className={cl("permissions")}>
                <div className={cl("toggle-row")}>
                    <div
                        role="button"
                        tabIndex={0}
                        className={cl("toggle-label", { disabled: saving })}
                        onClick={() => {
                            if (!saving) setCopyPermissions(prev => !prev);
                        }}
                        onKeyDown={e => {
                            if ((e.key === "Enter" || e.key === " ") && !saving) {
                                e.preventDefault();
                                setCopyPermissions(prev => !prev);
                            }
                        }}
                    >
                        <CopyIcon width={16} height={16} className={cl("icon")} />
                        <span>{t(plugin.duplicateCategory.modal.copyPermissions)}</span>
                    </div>
                    <div
                        role="switch"
                        aria-checked={copyPermissions}
                        tabIndex={0}
                        className={cl("switch", { checked: copyPermissions, disabled: saving })}
                        onClick={() => {
                            if (!saving) setCopyPermissions(prev => !prev);
                        }}
                        onKeyDown={e => {
                            if ((e.key === "Enter" || e.key === " ") && !saving) {
                                e.preventDefault();
                                setCopyPermissions(prev => !prev);
                            }
                        }}
                    >
                        <div className={cl("switch-thumb")} />
                    </div>
                </div>
                <div className={cl("description")}>
                    {t(plugin.duplicateCategory.modal.copyPermissionsDescription)}
                </div>
            </div>
        </Modal>
    );
}, { noop: false });

const patchCategoryMenu: NavContextMenuPatchCallback = (children, { channel }: { channel: Channel; }) => {
    try {
        if (channel?.type !== ChannelType.GUILD_CATEGORY || !PermissionStore.can(PermissionsBits.MANAGE_CHANNELS, channel)) return;
        const editIds = ["edit-channel", "edit-category"];
        const group = findGroupChildrenByChildId(editIds, children);
        if (!group) return;
        const editIndex = group.findIndex(item => editIds.includes(item?.props?.id));
        if (group.some(item => item?.props?.id === "pc-duplicate-category")) return;
        group.splice(editIndex + 1, 0,
            <Menu.MenuItem
                id="pc-duplicate-category"
                key="pc-duplicate-category"
                label={t(plugin.duplicateCategory.menu)}
                action={() => openModal(props => <DuplicateCategoryModal {...props} category={channel} />)}
            />
        );
    } catch (error) {
        console.error("[DuplicateCategory] Could not add category menu item", error);
    }
};

export default definePlugin({
    name: "DuplicateCategory",
    description: () => t(plugin.duplicateCategory.description),
    tags: ["servers", "utility"],
    authors: [PcDevs.lethied],
    contextMenus: {
        "channel-context": patchCategoryMenu,
        "channel-category-context": patchCategoryMenu
    }
});
