/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2026 Vendicated and contributors
 * Copyright (c) 2026 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { plugin, t } from "@api/i18n";
import { Select } from "@webpack/common";

import { ListType } from "..";

export function ListPrioritySelector({ listType, setListPriority }: { listType: ListType; setListPriority: (v: ListType) => void; }) {
    return (
        <Select
            options={[
                { label: t(plugin.keywordNotify.listTypeSelector.whitelist), value: ListType.Whitelist },
                { label: t(plugin.keywordNotify.listTypeSelector.blacklist), value: ListType.BlackList }
            ]}
            placeholder={t(plugin.keywordNotify.listTypeSelector.placeholder)}
            isSelected={v => v === listType}
            closeOnSelect={true}
            select={setListPriority}
            serialize={v => v}
        />
    );
}
