/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2023 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { PlusIcon } from "@components/Icons";
import { getIntlMessage } from "@utils/discord";
import { Text } from "@webpack/common";
import { HTMLProps } from "react";

import { DecorationGridItem } from ".";

type DecorationGridCreateProps = HTMLProps<HTMLDivElement> & {
    onSelect: () => void;
};

export default function DecorationGridCreate(props: DecorationGridCreateProps) {
    return <DecorationGridItem
        {...props}
        isSelected={false}
    >
        <PlusIcon />
        <Text
            variant="text-xs/normal"
            color="header-primary"
        >
            {getIntlMessage("CREATE")}
        </Text>
    </DecorationGridItem >;
}
