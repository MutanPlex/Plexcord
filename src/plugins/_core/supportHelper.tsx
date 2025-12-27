/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2023 Vendicated and contributors
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

import { plugin, t } from "@api/i18n";
import { isPluginEnabled } from "@api/PluginManager";
import { definePluginSettings } from "@api/Settings";
import { getUserSettingLazy } from "@api/UserSettings";
import { BaseText } from "@components/BaseText";
import { Button } from "@components/Button";
import { Card } from "@components/Card";
import ErrorBoundary from "@components/ErrorBoundary";
import { Flex } from "@components/Flex";
import { Link } from "@components/Link";
import { Paragraph } from "@components/Paragraph";
import { openSettingsTabModal, UpdaterTab } from "@components/settings";
import { Channel } from "@plexcord/discord-types";
import { BOT_COMMANDS_CHANNEL_ID, CONTRIB_ROLE_ID, Devs, DONOR_ROLE_ID, KNOWN_ISSUES_CHANNEL_ID, PcDevs, PLEXBOT_USER_ID, PLEXCORD_GUILD_ID, REGULAR_ROLE_ID, SUPPORT_CATEGORY_ID, SUPPORT_CHANNEL_ID } from "@utils/constants";
import { openInviteModal, sendMessage } from "@utils/discord";
import { Logger } from "@utils/Logger";
import { Margins } from "@utils/margins";
import { isPcPluginDev, isPluginDev, tryOrElse } from "@utils/misc";
import { relaunch } from "@utils/native";
import { onlyOnce } from "@utils/onlyOnce";
import { makeCodeblock } from "@utils/text";
import definePlugin from "@utils/types";
import { checkForUpdates, isOutdated, update } from "@utils/updater";
import { Alerts, ChannelRouter, ChannelStore, GuildMemberStore, Parser, PermissionsBits, PermissionStore, RelationshipStore, showToast, Toasts, UserStore } from "@webpack/common";
import { JSX } from "react";

import gitHash from "~git-hash";
import plugins, { PluginMeta } from "~plugins";

import SettingsPlugin from "./settings";

const CodeBlockRe = /```js\n(.+?)```/s;

const AdditionalAllowedChannelIds = [
    BOT_COMMANDS_CHANNEL_ID, // Plexcord > #bot-spam
];

const TrustedRolesIds = [
    CONTRIB_ROLE_ID, // contributor
    REGULAR_ROLE_ID, // regular
    DONOR_ROLE_ID, // donor
];

const AsyncFunction = async function () { }.constructor;

const ShowCurrentGame = getUserSettingLazy<boolean>("status", "showCurrentGame")!;

const isSupportAllowedChannel = (channel: Channel) => channel.parent_id === SUPPORT_CATEGORY_ID || AdditionalAllowedChannelIds.includes(channel.id);

interface clientData {
    name: string;
    version?: string | null | undefined;
    info?: string | boolean | null | undefined;
    spoofed?: string | null | undefined;
    shortHash?: string | null | undefined;
    hash?: string | null | undefined;
    dev?: boolean | null | undefined;
}

async function forceUpdate() {
    const outdated = await checkForUpdates();
    if (outdated) {
        await update();
        relaunch();
    }

    return outdated;
}

function getWindowsName(release: string) {
    const build = parseInt(release.split(".")[2]);
    if (build >= 22000) return "Windows 11";
    if (build >= 10240) return "Windows 10";
    if (build >= 9200) return "Windows 8.1";
    if (build >= 7600) return "Windows 7";
    return `Windows (${release})`;
}

function getMacOSName(release: string) {
    const major = parseInt(release.split(".")[0]);
    if (major === 24) return "MacOS 15 (Sequoia)";
    if (major === 23) return "MacOS 14 (Sonoma)";
    if (major === 22) return "MacOS 13 (Ventura)";
    if (major === 21) return "MacOS 12 (Monterey)";
    if (major === 20) return "MacOS 11 (Big Sur)";
    if (major === 19) return "MacOS 10.15 (Catalina)";
    return `MacOS (${release})`;
}

function platformName() {
    if (typeof DiscordNative === "undefined") return navigator.platform;
    if (DiscordNative.process.platform === "win32") return `${getWindowsName(DiscordNative.os.release)}`;
    if (DiscordNative.process.platform === "darwin") return `${getMacOSName(DiscordNative.os.release)} (${DiscordNative.process.arch === "arm64" ? "Apple Silicon" : "Intel Silicon"})`;
    if (DiscordNative.process.platform === "linux") return `${navigator.platform} (${DiscordNative.os.release})`;
    return DiscordNative.process.platform;
}

export function detectClient(): clientData {
    if (IS_DISCORD_DESKTOP) {
        return {
            name: "Discord Desktop",
            version: DiscordNative.app.getVersion(),
        };
    }
    if (IS_PLEXTRON) return {
        name: "Plextron",
        version: PlextronNative.app.getVersion(),
    };

    if ("legcord" in window) return {
        name: "LegCord",
        version: window.legcord.version,
    };

    // @ts-expect-error
    const name = typeof unsafeWindow !== "undefined" ? "UserScript" : "Web";
    return {
        name: name,
        info: navigator.userAgent
    };
}

async function generateDebugInfoMessage() {
    const { RELEASE_CHANNEL } = window.GLOBAL_ENV;

    const clientInfo = detectClient();
    let clientString = `${clientInfo.name}`;
    clientString += `${clientInfo.version ? ` v${clientInfo.version}` : ""}`;
    clientString += `${clientInfo.info ? ` • ${clientInfo.info}` : ""}`;
    clientString += `${clientInfo.shortHash ? ` • [${clientInfo.shortHash}](<https://github.com/MutanPlex/Plexcord/commit/${clientInfo.hash}>)` : ""}`;

    const spoofInfo = IS_PLEXTRON ? tryOrElse(() => PlextronNative.app.getPlatformSpoofInfo?.(), null) : null;
    const platformDisplay = spoofInfo?.spoofed
        ? `${platformName()} (spoofed from ${spoofInfo.originalPlatform})`
        : platformName();

    const info = {
        Plexcord:
            `v${VERSION} • [${gitHash}](<https://github.com/MutanPlex/Plexcord/commit/${gitHash}>)` +
            `${SettingsPlugin.additionalInfo} - ${Intl.DateTimeFormat("en-GB", { dateStyle: "medium" }).format(BUILD_TIMESTAMP)}`,
        Client: `${RELEASE_CHANNEL} ~ ${clientString}`,
        Platform: platformDisplay
    };

    if (IS_DISCORD_DESKTOP) {
        info["Last Crash Reason"] = (await tryOrElse(() => DiscordNative.processUtils.getLastCrash(), undefined))?.rendererCrashReason ?? "N/A";
    }

    const commonIssues = {
        "Activity Sharing disabled": tryOrElse(() => !ShowCurrentGame.getSetting(), false),
        "Plexcord DevBuild": !IS_STANDALONE,
        "Platform Spoofed": spoofInfo?.spoofed ?? false,
        "Has UserPlugins": Object.values(PluginMeta).some(m => m.userPlugin),
        "More than two weeks out of date": BUILD_TIMESTAMP < Date.now() - 12096e5,
    };

    let content = `>>> ${Object.entries(info).map(([k, v]) => `**${k}**: ${v}`).join("\n")}`;
    content += "\n" + Object.entries(commonIssues)
        .filter(([, v]) => v).map(([k]) => `⚠️ ${k}`)
        .join("\n");

    return content.trim();
}

function generatePluginList() {
    const isApiPlugin = (plugin: string) => plugin.endsWith("API") || plugins[plugin].required;

    const enabledPlugins = Object.keys(plugins)
        .filter(p => isPluginEnabled(p) && !isApiPlugin(p));

    const enabledStockPlugins = enabledPlugins.filter(p => !PluginMeta[p].userPlugin);
    const enabledUserPlugins = enabledPlugins.filter(p => PluginMeta[p].userPlugin);

    let content = `**Enabled Plugins (${enabledStockPlugins.length}):**\n${makeCodeblock(enabledStockPlugins.join(", "))}`;

    if (enabledUserPlugins.length) {
        content += `**Enabled UserPlugins (${enabledUserPlugins.length}):**\n${makeCodeblock(enabledUserPlugins.join(", "))}`;
    }

    return content;
}

const checkForUpdatesOnce = onlyOnce(checkForUpdates);

const settings = definePluginSettings({}).withPrivateSettings<{
    dismissedDevBuildWarning?: boolean;
}>();

export default definePlugin({
    name: "SupportHelper",
    description: () => t(plugin.supportHelper.description),
    required: true,
    authors: [Devs.Ven, PcDevs.MutanPlex],
    dependencies: ["UserSettingsAPI"],
    settings,

    patches: [{
        find: "#{intl::BEGINNING_DM}",
        replacement: {
            match: /#{intl::BEGINNING_DM},{.+?}\),(?=.{0,300}(\i)\.isMultiUserDM)/,
            replace: "$& $self.renderContributorDmWarningCard({ channel: $1 }),"
        }
    }],

    commands: [
        {
            name: "plexcord-debug",
            description: () => t(plugin.supportHelper.commands.description.debug),
            predicate: ctx => (isPluginDev(UserStore.getCurrentUser()?.id) && isPcPluginDev(UserStore.getCurrentUser()?.id)) || isSupportAllowedChannel(ctx.channel),
            execute: async () => ({ content: await generateDebugInfoMessage() })
        },
        {
            name: "plexcord-plugins",
            description: () => t(plugin.supportHelper.commands.description.plugins),
            predicate: ctx => (isPluginDev(UserStore.getCurrentUser()?.id) && isPcPluginDev(UserStore.getCurrentUser()?.id)) || isSupportAllowedChannel(ctx.channel),
            execute: () => ({ content: generatePluginList() })
        }
    ],

    flux: {
        async CHANNEL_SELECT({ channelId }) {
            const isSupportChannel = channelId === SUPPORT_CHANNEL_ID || ChannelStore.getChannel(channelId)?.parent_id === SUPPORT_CATEGORY_ID;
            if (!isSupportChannel) return;

            const selfId = UserStore.getCurrentUser()?.id;
            if (!selfId || (isPluginDev(selfId) && isPcPluginDev(selfId))) return;

            if (!IS_UPDATER_DISABLED) {
                await checkForUpdatesOnce().catch(() => { });

                if (isOutdated) {
                    return Alerts.show({
                        title: t(plugin.supportHelper.modals.outdated.title),
                        body: <div>
                            <Paragraph>{t(plugin.supportHelper.modals.outdated.body)}</Paragraph>
                            <Paragraph className={Margins.top8}>
                                {t(plugin.supportHelper.modals.outdated.footer)}
                            </Paragraph>
                        </div>,
                        onCancel: () => openSettingsTabModal(UpdaterTab!),
                        cancelText: t(plugin.supportHelper.modals.outdated.button.cancel),
                        confirmText: t(plugin.supportHelper.modals.outdated.button.confirm),
                        onConfirm: forceUpdate,
                        secondaryConfirmText: t(plugin.supportHelper.modals.outdated.button.secondaryConfirm)
                    });
                }
            }

            const roles = GuildMemberStore.getSelfMember(PLEXCORD_GUILD_ID)?.roles;
            if (!roles || TrustedRolesIds.some(id => roles.includes(id))) return;

            if (!IS_WEB && IS_UPDATER_DISABLED) {
                return Alerts.show({
                    title: t(plugin.supportHelper.modals.updater.title),
                    body: <div>
                        <Paragraph>{t(plugin.supportHelper.modals.updater.body)}</Paragraph>
                        <Paragraph className={Margins.top8}>
                            {t(plugin.supportHelper.modals.updater.footer, {
                                officially: <Link href="https://plexcord.club/download">{t(plugin.supportHelper.modals.updater.officially)}</Link>
                            })}
                        </Paragraph>
                    </div>
                });
            }

            if (!IS_STANDALONE && !settings.store.dismissedDevBuildWarning) {
                return Alerts.show({
                    title: t(plugin.supportHelper.modals.custom.title),
                    body: <div>
                        <Paragraph>{t(plugin.supportHelper.modals.custom.header)}</Paragraph>

                        <Paragraph className={Margins.top8}>
                            {t(plugin.supportHelper.modals.custom.body, {
                                officialBuild: <Link href="https://plexcord.club/download">{t(plugin.supportHelper.modals.custom.official)}</Link>,
                                switch: <Link href="https://plexcord.club/download">{t(plugin.supportHelper.modals.custom.switch)}</Link>
                            })}
                        </Paragraph>

                        <BaseText size="md" weight="bold" className={Margins.top8}>{t(plugin.supportHelper.modals.custom.footer)}</BaseText>
                    </div>,
                    confirmText: t(plugin.supportHelper.modals.custom.button.confirm),
                    secondaryConfirmText: t(plugin.supportHelper.modals.custom.button.secondaryConfirm),
                    onConfirmSecondary: () => settings.store.dismissedDevBuildWarning = true
                });
            }
        }
    },

    renderMessageAccessory(props) {
        const buttons = [] as JSX.Element[];

        const shouldAddUpdateButton =
            !IS_UPDATER_DISABLED
            && (
                (props.channel.id === KNOWN_ISSUES_CHANNEL_ID) ||
                (props.channel.parent_id === SUPPORT_CATEGORY_ID && props.message.author.id === PLEXBOT_USER_ID)
            )
            && props.message.content?.includes("update");

        if (shouldAddUpdateButton) {
            buttons.push(
                <Button
                    key="pc-update"
                    variant="positive"
                    onClick={async () => {
                        try {
                            if (await forceUpdate())
                                showToast(t(plugin.supportHelper.modals.updater.toast.success), Toasts.Type.SUCCESS);
                            else
                                showToast(t(plugin.supportHelper.modals.updater.toast.already), Toasts.Type.MESSAGE);
                        } catch (e) {
                            new Logger(t(plugin.supportHelper.name)).error("Error while updating:", e);
                            showToast(t(plugin.supportHelper.modals.updater.toast.failed), Toasts.Type.FAILURE);
                        }
                    }}
                >
                    {t(plugin.supportHelper.modals.updater.button.now)}
                </Button>
            );
        }

        if (props.channel.parent_id === SUPPORT_CATEGORY_ID && PermissionStore.can(PermissionsBits.SEND_MESSAGES, props.channel)) {
            if (props.message.content.includes("/plexcord-debug") || props.message.content.includes("/plexcord-plugins")) {
                buttons.push(
                    <Button
                        key="pc-dbg"
                        variant="primary"
                        onClick={async () => sendMessage(props.channel.id, { content: await generateDebugInfoMessage() })}
                    >
                        {t(plugin.supportHelper.button.debug)}
                    </Button>,
                    <Button
                        key="pc-plg-list"
                        variant="primary"
                        onClick={async () => sendMessage(props.channel.id, { content: generatePluginList() })}
                    >
                        {t(plugin.supportHelper.button.plugins)}
                    </Button>
                );
            }

            if (props.message.author.id === PLEXBOT_USER_ID) {
                const match = CodeBlockRe.exec(props.message.content || props.message.embeds[0]?.rawDescription || "");
                if (match) {
                    buttons.push(
                        <Button
                            key="pc-run-snippet"
                            onClick={async () => {
                                try {
                                    await AsyncFunction(match[1])();
                                    showToast(t(plugin.supportHelper.toast.success), Toasts.Type.SUCCESS);
                                } catch (e) {
                                    new Logger(t(plugin.supportHelper.name)).error("Error while running snippet:", e);
                                    showToast(t(plugin.supportHelper.toast.failed), Toasts.Type.FAILURE);
                                }
                            }}
                        >
                            {t(plugin.supportHelper.button.snippet)}
                        </Button>
                    );
                }
            }
        }

        return buttons.length
            ? <Flex>{buttons}</Flex>
            : null;
    },

    renderContributorDmWarningCard: ErrorBoundary.wrap(({ channel }) => {
        const userId = channel.getRecipientId();
        if (!isPluginDev(userId) && !isPcPluginDev(userId)) return null;
        if (RelationshipStore.isFriend(userId) || (isPluginDev(UserStore.getCurrentUser()?.id) && isPcPluginDev(UserStore.getCurrentUser()?.id))) return null;

        const handleJoinServer = async (e: React.MouseEvent) => {
            e.preventDefault();
            e.stopPropagation();

            try {
                const accepted = await openInviteModal("HQGYXm5XSh");
                if (accepted) {
                    ChannelRouter.transitionToChannel("1344043206286905364");
                }
            } catch (error) {
                console.error("Failed to open invite modal:", error);
                showToast(t(plugin.supportHelper.toast.failedOpenInvite), Toasts.Type.FAILURE);
            }
        };

        const isInGuild = GuildMemberStore.isMember(PLEXCORD_GUILD_ID, UserStore.getCurrentUser()?.id);

        const channelLink = isInGuild
            ? Parser.parse("https://discord.com/channels/1342668210331324476/1344043206286905364")
            : <a onClick={handleJoinServer} style={{ cursor: "pointer", color: "var(--text-link)", textDecoration: "none" }}>#plexcord-support</a>;

        return (
            <Card variant="warning" className={Margins.top8} defaultPadding>
                {t(plugin.supportHelper.dm.warning, {
                    br: <br />,
                    channel: channelLink,
                    support: <a onClick={handleJoinServer} style={{ cursor: "pointer", color: "var(--text-link)", textDecoration: "none" }}>Plexcord</a>
                })}
            </Card>
        );
    }, { noop: true }),
});
