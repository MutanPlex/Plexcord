/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2025 Vendicated and contributors
 * Copyright (c) 2026 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import "./styles.css";

import { plugin, t } from "@api/i18n";
import { BaseText } from "@components/BaseText";
import { Button } from "@components/Button";
import { Flex } from "@components/Flex";
import { HeadingTertiary } from "@components/Heading";
import { copyToClipboard } from "@utils/clipboard";
import { findByPropsLazy, findCssClassesLazy } from "@webpack";
import { Parser, useEffect, useState } from "@webpack/common";

import { FriendInvite } from "./types";

const FormStyles = findCssClassesLazy("header", "title", "emptyState");
const { createFriendInvite, getAllFriendInvites, revokeFriendInvites } = findByPropsLazy("createFriendInvite");

function CopyButton({ copyText, copiedText, onClick }) {
    const [copied, setCopied] = useState(false);

    const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        setCopied(true);
        setTimeout(() => setCopied(false), 1000);
        onClick(e);
    };

    return (
        <Button
            onClick={handleButtonClick}
            size="small"
            variant={copied ? "positive" : "primary"}
        >
            {copied ? copiedText : copyText}
        </Button>
    );
}

function FriendInviteCard({ invite }: { invite: FriendInvite; }) {
    return (
        <div className="pc-friend-codes-card">
            <Flex justifyContent="start">
                <div className="pc-friend-codes-card-title">
                    <HeadingTertiary style={{ textTransform: "none" }}>
                        {invite.code}
                    </HeadingTertiary>
                    <span>
                        {Parser.parse(t(plugin.friendCodes.card.expires, {
                            expiration: Math.floor(new Date(invite.expires_at).getTime() / 1000),
                            uses: invite.uses,
                            maxUses: invite.max_uses
                        }))}
                    </span>
                </div>
                <Flex justifyContent="end">
                    <CopyButton
                        copyText={t(plugin.friendCodes.card.copy)}
                        copiedText={t(plugin.friendCodes.card.copied)}
                        onClick={() => copyToClipboard(`https://discord.gg/${invite.code}`)}
                    />
                </Flex>
            </Flex>
        </div>
    );
}

export default function FriendCodesPanel() {
    const [invites, setInvites] = useState<FriendInvite[]>([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        getAllFriendInvites()
            .then(setInvites)
            .then(() => setLoading(false));
    }, []);

    return (
        <>
            <header className={FormStyles.header}>
                <HeadingTertiary
                    className={FormStyles.title}
                >
                    {t(plugin.friendCodes.card.codes)}
                </HeadingTertiary>

                <Flex
                    style={{ marginBottom: "16px" }}
                    justifyContent="space-between"
                >
                    <h2 className="pc-friend-codes-info-header">{t(plugin.friendCodes.card.count, { invites: invites.length })}</h2>
                    <Flex justifyContent="end">
                        <Button
                            variant="positive"
                            onClick={() => createFriendInvite().then((invite: FriendInvite) => setInvites([...invites, invite]))}
                        >
                            {t(plugin.friendCodes.card.create)}
                        </Button>
                        <Button
                            style={{ marginLeft: "8px" }}
                            variant="dangerPrimary"
                            disabled={!invites.length}
                            onClick={() => revokeFriendInvites().then(setInvites([]))}
                        >
                            {t(plugin.friendCodes.card.revoke)}
                        </Button>
                    </Flex>
                </Flex>
            </header>
            {loading ? (
                <BaseText
                    size="md"
                    weight="semibold"
                    className="pc-friend-codes-text"
                >
                    {t(plugin.friendCodes.card.loading)}
                </BaseText>
            ) : invites.length === 0 ? (
                <BaseText
                    size="md"
                    weight="semibold"
                    className="pc-friend-codes-text"
                >
                    {t(plugin.friendCodes.card.dontHave)}
                </BaseText>
            ) : (
                <div style={{ marginTop: "16px", display: "flex", flexWrap: "wrap", gap: "16px", justifyContent: "space-evenly" }}>
                    {invites.map(invite => (
                        <FriendInviteCard key={invite.code} invite={invite} />
                    ))}
                </div>
            )}
        </>
    );
}
