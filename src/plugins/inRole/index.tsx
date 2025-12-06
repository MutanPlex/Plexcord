/*
* Plexcord, a modification for Discord's desktop app
* Copyright (c) 2024 nin0dev
* Copyright (c) 2025 MutanPlex
* SPDX-License-Identifier: GPL-3.0-or-later
*/

import "./style.css";

import { ApplicationCommandInputType, ApplicationCommandOptionType, sendBotMessage } from "@api/Commands";
import { plugin, t } from "@api/i18n";
import { getUserSettingLazy } from "@api/UserSettings";
import { InfoIcon } from "@components/Icons";
import { Paragraph } from "@components/Paragraph";
import { GuildMember } from "@plexcord/discord-types";
import { Devs } from "@utils/constants";
import { getCurrentChannel, getCurrentGuild } from "@utils/discord";
import definePlugin from "@utils/types";
import { GuildMemberStore, GuildRoleStore, Menu, Parser } from "@webpack/common";

import { showInRoleModal } from "./RoleMembersModal";

const DeveloperMode = getUserSettingLazy("appearance", "developerMode")!;

function getMembersInRole(roleId: string, guildId: string) {
    const members = GuildMemberStore.getMembers(guildId);
    const membersInRole: GuildMember[] = [];
    members.forEach(member => {
        if (member.roles.includes(roleId)) {
            membersInRole.push(member);
        }
    });
    return membersInRole;
}

export default definePlugin({
    name: "InRole",
    description: () => t(plugin.inRole.description),
    authors: [Devs.nin0dev],
    dependencies: ["UserSettingsAPI"],

    start() {
        // DeveloperMode needs to be enabled for the context menu to be shown
        DeveloperMode.updateSetting(true);
    },
    settingsAboutComponent: () => {
        return (
            <>
                <Paragraph style={{ fontSize: "1.2rem", marginTop: "15px", fontWeight: "bold" }}>{Parser.parse(":warning:")} {t(plugin.inRole.modal.about.title)}</Paragraph>
                <Paragraph style={{ marginTop: "10px", fontWeight: "500" }}>{t(plugin.inRole.modal.about.description)}:</Paragraph>
                <Paragraph>• {t(plugin.inRole.modal.about.list.one)}</Paragraph>
                <Paragraph>• {t(plugin.inRole.modal.about.list.two)}</Paragraph>
                <Paragraph>• {t(plugin.inRole.modal.about.list.three)}</Paragraph>
            </>
        );
    },

    commands: [
        {
            name: "inrole",
            description: () => t(plugin.inRole.command.inrole.description),
            inputType: ApplicationCommandInputType.BUILT_IN,
            options: [
                {
                    name: "role",
                    description: () => t(plugin.inRole.command.inrole.role),
                    type: ApplicationCommandOptionType.ROLE,
                    required: true
                },
            ],
            execute: (args, ctx) => {
                // Guild check
                if (!ctx.guild) {
                    return sendBotMessage(ctx.channel.id, { author: { username: "Plexcord" }, content: t(plugin.inRole.command.inrole.noGuild) });
                }
                const role = args[0].value;
                showInRoleModal(getMembersInRole(role, ctx.guild.id), role, ctx.channel.id);
            }
        }
    ],
    contextMenus: {
        "dev-context"(children, { id }: { id: string; }) {
            const guild = getCurrentGuild();
            if (!guild) return;

            const channel = getCurrentChannel();
            if (!channel) return;

            const role = GuildRoleStore.getRole(guild.id, id);
            if (!role) return;

            children.push(
                <Menu.MenuItem
                    id="pc-view-inrole"
                    label={t(plugin.inRole.context.view)}
                    action={() => {
                        showInRoleModal(getMembersInRole(role.id, guild.id), role.id, channel.id);
                    }}
                    icon={InfoIcon}
                />
            );
        },
        "message"(children, { message }: { message: any; }) {
            const guild = getCurrentGuild();
            if (!guild) return;

            const roleMentions = message.content.match(/<@&(\d+)>/g);
            if (!roleMentions?.length) return;

            const channel = getCurrentChannel();
            if (!channel) return;

            const roleIds = roleMentions.map(mention => mention.match(/<@&(\d+)>/)![1]);

            const role = GuildRoleStore.getRole(guild.id, roleIds);
            if (!role) return;

            children.push(
                <Menu.MenuItem
                    id="pc-view-inrole"
                    label={t(plugin.inRole.context.view)}
                    action={() => {
                        showInRoleModal(getMembersInRole(role.id, guild.id), role.id, channel.id);
                    }}
                    icon={InfoIcon}
                />
            );
        }
    }
});
