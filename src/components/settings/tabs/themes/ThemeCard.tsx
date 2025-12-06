/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2025 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { t, themes } from "@api/i18n";
import { Flex } from "@components/Flex";
import { DeleteIcon } from "@components/Icons";
import { Link } from "@components/Link";
import { AddonCard } from "@components/settings/AddonCard";
import { getThemeInfo, UserThemeHeader } from "@main/themes";
import { openInviteModal } from "@utils/discord";
import { showToast } from "@webpack/common";

interface ThemeCardProps {
    theme: UserThemeHeader;
    enabled: boolean;
    onChange: (enabled: boolean) => void;
    onDelete: () => void;
}

export function ThemeCard({ theme, enabled, onChange, onDelete }: ThemeCardProps) {
    // @ts-ignore
    const themeInfo = getThemeInfo(theme.content, theme.fileName);
    return (
        <AddonCard
            name={themeInfo.name}
            description={themeInfo.description}
            author={themeInfo.author}
            enabled={enabled}
            setEnabled={onChange}
            infoButton={
                IS_WEB && (
                    <div style={{ cursor: "pointer", color: "var(--status-danger" }} onClick={onDelete}>
                        <DeleteIcon />
                    </div>
                )
            }
            footer={
                <Flex flexDirection="row" style={{ gap: "0.2em", marginTop: "0.5em" }}>
                    {!!themeInfo.website && <Link href={themeInfo.website}>{t(themes.website)}</Link>}
                    {!!(themeInfo.website && themeInfo.invite) && " • "}
                    {!!themeInfo.invite && (
                        <Link
                            href={`https://discord.gg/${themeInfo.invite}`}
                            onClick={async e => {
                                e.preventDefault();
                                themeInfo.invite != null && openInviteModal(themeInfo.invite).catch(() => showToast(t(themes.error.expired)));
                            }}
                        >
                            {t(themes.discord)}
                        </Link>
                    )}
                </Flex>
            }
        />
    );
}
