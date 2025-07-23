/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2025 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import DonateButton from "@components/settings/DonateButton";
import { DONOR_ROLE_ID, PLEXCORD_GUILD_ID } from "@utils/constants";
import { Button, GuildMemberStore } from "@webpack/common";
import BadgeAPI from "plugins/_api/badges";

export const isDonor = (userId: string) => !!(
    BadgeAPI.getDonorBadges(userId)?.length > 0
    || GuildMemberStore.getMember(PLEXCORD_GUILD_ID, userId)?.roles.includes(DONOR_ROLE_ID)
);

export function DonateButtonComponent() {
    return (
        <DonateButton
            look={Button.Looks.FILLED}
            color={Button.Colors.WHITE}
            style={{ marginTop: "1em" }}
        />
    );
}
