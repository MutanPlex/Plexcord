/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2022 Vendicated and contributors
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
import { Button } from "@components/Button";
import { Flex } from "@components/Flex";
import { Heart } from "@components/Heart";
import { openInviteModal } from "@utils/discord";

export default function DonateButton({
    ...props
}) {
    return (
        <Flex alignItems="center" gap="8px">
            <Button
                {...props}
                variant="overlayPrimary"
                size="medium"
                type="button"
                onClick={() => PlexcordNative.native.openExternal("https://github.com/sponsors/MutanPlex")}
                className="pc-donate-button"
            >
                <Heart />
                {t(settings.specialCards.donations.button)}
            </Button>

            <Button
                {...props}
                variant="overlayPrimary"
                size="medium"
                type="button"
                onClick={() => openInviteModal("HQGYXm5XSh")}
                className="pc-donate-button"
            >
                <Heart fill="#5865f2" />
                {t(settings.specialCards.donations.invite)}
            </Button>
        </Flex>
    );
}
