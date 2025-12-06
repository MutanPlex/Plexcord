/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2024 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import "./style.css";

import { plugin, t } from "@api/i18n";
import { InfoIcon } from "@components/Icons";
import { Devs, PcDevs } from "@utils/constants";
import { openUserProfile } from "@utils/discord";
import { classes } from "@utils/misc";
import definePlugin, { StartAt } from "@utils/types";
import { findByPropsLazy } from "@webpack";
import { Parser, Tooltip, UserStore } from "@webpack/common";


const AvatarStyles = findByPropsLazy("avatar", "zalgo");
const GuildManager = findByPropsLazy("joinGuild");

interface User {
    id: string;
    avatar: string;
    global_name: string;
    username: string;
}

function lurk(id: string) {
    GuildManager.joinGuild(id, { lurker: true })
        .then(() => { GuildManager.transitionToGuildSync(id); })
        .catch(() => { throw new Error("Guild is not lurkable"); });
}

export default definePlugin({
    name: "BetterInvites",
    description: () => t(plugin.betterInvites.description),
    authors: [PcDevs.iamme, PcDevs.MutanPlex, Devs.thororen],

    patches: [
        {
            find: ".hideDetailsButtonContainer,",
            replacement: [
                {
                    match: /banner\}\),.{0,25}profile:\i\}\),.{0,15}profile:\i/,
                    replace: "$&,invite:arguments[0].invite"
                }
            ]
        },
        {
            find: ".guildNameContainer,onClick:",
            replacement: [
                {
                    match: /children:\i\.name\}\).{0,100}\.guildNameContainer/,
                    replace: "onClick:$self.Lurkable(arguments[0].invite?.guild?.id,arguments[0].invite?.guild?.features),$&"
                },
                {
                    match: /\.nameContainer.{0,100}disableGuildNameClick:\i/,
                    replace: "$&,invite:arguments[0].invite"
                },
                {
                    match: /disableGuildNameClick:\i.{0,50}\}\),\i/,
                    replace: "$&,$self.RenderTip(arguments[0].invite?.expires_at)"
                },
                {
                    match: /\.nameContainer.{0,200}\]\}\)/,
                    replace: "$&,$self.Header(arguments[0].invite?.inviter,arguments[0].profile.name)"
                }
            ]
        },
    ],
    RenderTip(expires_at: string) {
        if (!expires_at) return null;
        const timestamp = <>{Parser.parse(`<t:${Math.round(new Date(expires_at).getTime() / 1000)}:R>`)}</>;
        const tooltipText = (
            <>
                {t(plugin.betterInvites.render.tip, { time: expires_at ? timestamp : t(plugin.betterInvites.render.never) })}
            </>
        );


        return (
            <Tooltip text={tooltipText}>
                {({ onMouseEnter, onMouseLeave }) => (
                    <div
                        className="pc-bi-tooltip"
                        onMouseEnter={onMouseEnter}
                        onMouseLeave={onMouseLeave}
                    >
                        <InfoIcon className="pc-bi-tooltip-icon" />
                    </div>
                )}
            </Tooltip>
        );
    },
    Header(inviter: User | undefined, guildName: string) {
        const userId = UserStore.getCurrentUser().id;
        if (!inviter || userId === inviter.id) return null;
        return (
            <div className="pc-bi-header-inner">
                <img
                    alt=""
                    className={classes(AvatarStyles.avatar, AvatarStyles.clickable) + " pc-bi-inviter-avatar"}
                    onClick={() => openUserProfile(inviter.id)}
                    src={inviter.avatar
                        ? `https://cdn.discordapp.com/avatars/${inviter.id}/${inviter.avatar}.webp?size=80`
                        : "/assets/1f0bfc0865d324c2587920a7d80c609b.png?size=128"}
                />
                <div className="pc-bi-header-text">
                    {t(plugin.betterInvites.render.header, { name: inviter.username, server: guildName })}
                </div>
            </div>
        );
    },
    Lurkable: (id: string, features: Iterable<string> | undefined) => {
        if (!id || !features) return null;
        return new Set(features).has("DISCOVERABLE") ? () => lurk(id) : null;
    },
    startAt: StartAt.WebpackReady
});
