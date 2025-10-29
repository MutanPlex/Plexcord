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

import { t, tJsx } from "@api/i18n";
import { definePluginSettings } from "@api/Settings";
import { getUserSettingLazy } from "@api/UserSettings";
import { BaseText } from "@components/BaseText";
import ErrorBoundary from "@components/ErrorBoundary";
import { Flex } from "@components/Flex";
import { Link } from "@components/Link";
import { Paragraph } from "@components/Paragraph";
import { openUpdaterModal } from "@components/settings/tabs/updater";
import { Channel } from "@plexcord/discord-types";
import { BOT_COMMANDS_CHANNEL_ID, CONTRIB_ROLE_ID, Devs, DONOR_ROLE_ID, KNOWN_ISSUES_CHANNEL_ID, PcDevs, PLEXBOT_USER_ID, PLEXCORD_GUILD_ID, REGULAR_ROLE_ID, SUPPORT_CATEGORY_ID, SUPPORT_CHANNEL_ID } from "@utils/constants";
import { sendMessage } from "@utils/discord";
import { Logger } from "@utils/Logger";
import { Margins } from "@utils/margins";
import { isPcPluginDev, isPluginDev, tryOrElse } from "@utils/misc";
import { relaunch } from "@utils/native";
import { onlyOnce } from "@utils/onlyOnce";
import { makeCodeblock } from "@utils/text";
import definePlugin from "@utils/types";
import { checkForUpdates, isOutdated, update } from "@utils/updater";
import { Alerts, Button, Card, ChannelStore, GuildMemberStore, Parser, PermissionsBits, PermissionStore, RelationshipStore, showToast, Toasts, UserStore } from "@webpack/common";
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
    if (DiscordNative.process.platform === "linux") return `Linux (${DiscordNative.os.release})`;
    return DiscordNative.process.platform;
}

async function generateDebugInfoMessage() {
    const { RELEASE_CHANNEL } = window.GLOBAL_ENV;

    const client = (() => {
        if (IS_DISCORD_DESKTOP) return `Discord Desktop v${DiscordNative.app.getVersion()}`;
        if (IS_PLEXTRON) return `Plextron v${PlextronNative.app.getVersion()}`;
        if ("legcord" in window) return `Legcord v${window.legcord.version}`;

        // @ts-expect-error
        const name = typeof unsafeWindow !== "undefined" ? "UserScript" : "Web";
        return `${name} (${navigator.userAgent})`;
    })();

    const info = {
        Plexcord:
            `v${VERSION} • [${gitHash}](<https://github.com/MutanPlex/Plexcord/commit/${gitHash}>)` +
            `${SettingsPlugin.additionalInfo} - ${Intl.DateTimeFormat("en-GB", { dateStyle: "medium" }).format(BUILD_TIMESTAMP)}`,
        Client: `${RELEASE_CHANNEL} ~ ${client}`,
        Platform: platformName()
    };

    if (IS_DISCORD_DESKTOP) {
        info["Last Crash Reason"] = (await tryOrElse(() => DiscordNative.processUtils.getLastCrash(), undefined))?.rendererCrashReason ?? "N/A";
    }

    const commonIssues = {
        "NoRPC enabled": Plexcord.Plugins.isPluginEnabled("NoRPC"),
        "Activity Sharing disabled": tryOrElse(() => !ShowCurrentGame.getSetting(), false),
        "Plexcord DevBuild": !IS_STANDALONE,
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
        .filter(p => Plexcord.Plugins.isPluginEnabled(p) && !isApiPlugin(p));

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
    required: true,
    description: "Helps us provide support to you",
    authors: [Devs.Ven, PcDevs.MutanPlex],
    dependencies: ["UserSettingsAPI"],

    get displayName() {
        return t("plugins.metadata.supportHelper.name");
    },

    get displayDescription() {
        return t("plugins.metadata.supportHelper.description");
    },

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
            description: "Send Plexcord debug info",
            get displayDescription() {
                return t("plugins.metadata.supportHelper.commands.description.debug");
            },
            predicate: ctx => (isPluginDev(UserStore.getCurrentUser()?.id) && isPcPluginDev(UserStore.getCurrentUser()?.id)) || isSupportAllowedChannel(ctx.channel),
            execute: async () => ({ content: await generateDebugInfoMessage() })
        },
        {
            name: "plexcord-plugins",
            description: "Send Plexcord plugin list",
            get displayDescription() {
                return t("plugins.metadata.supportHelper.commands.description.plugins");
            },
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
                        title: t("plugins.metadata.supportHelper.modals.outdated.title"),
                        body: <div>
                            <Paragraph>{t("plugins.metadata.supportHelper.modals.outdated.body")}</Paragraph>
                            <Paragraph className={Margins.top8}>
                                {t("plugins.metadata.supportHelper.modals.outdated.footer")}
                            </Paragraph>
                        </div>,
                        onCancel: () => openUpdaterModal!(),
                        cancelText: t("plugins.metadata.supportHelper.modals.outdated.button.cancel"),
                        confirmText: t("plugins.metadata.supportHelper.modals.outdated.button.confirm"),
                        onConfirm: forceUpdate,
                        secondaryConfirmText: t("plugins.metadata.supportHelper.modals.outdated.button.secondaryConfirm")
                    });
                }
            }

            const roles = GuildMemberStore.getSelfMember(PLEXCORD_GUILD_ID)?.roles;
            if (!roles || TrustedRolesIds.some(id => roles.includes(id))) return;

            if (!IS_WEB && IS_UPDATER_DISABLED) {
                return Alerts.show({
                    title: t("plugins.metadata.supportHelper.modals.updater.title"),
                    body: <div>
                        <Paragraph>{t("plugins.metadata.supportHelper.modals.updater.body")}</Paragraph>
                        <Paragraph className={Margins.top8}>
                            {tJsx("plugins.metadata.supportHelper.modals.updater.footer", {
                                officially: <Link href="https://plexcord.club/download">{t("plugins.metadata.supportHelper.modals.updater.officially")}</Link>
                            })}
                        </Paragraph>
                    </div>
                });
            }

            if (!IS_STANDALONE && !settings.store.dismissedDevBuildWarning) {
                return Alerts.show({
                    title: t("plugins.metadata.supportHelper.modals.custom.title"),
                    body: <div>
                        <Paragraph>{t("plugins.metadata.supportHelper.modals.custom.header")}</Paragraph>

                        <Paragraph className={Margins.top8}>
                            {tJsx("plugins.metadata.supportHelper.modals.custom.body", {
                                officialBuild: <Link href="https://plexcord.club/download">{t("plugins.metadata.supportHelper.modals.custom.official")}</Link>,
                                switch: <Link href="https://plexcord.club/download">{t("plugins.metadata.supportHelper.modals.custom.switch")}</Link>
                            })}
                        </Paragraph>

                        <BaseText size="md" weight="bold" className={Margins.top8}>{t("plugins.metadata.supportHelper.modals.custom.footer")}</BaseText>
                    </div>,
                    confirmText: t("plugins.metadata.supportHelper.modals.custom.button.confirm"),
                    secondaryConfirmText: t("plugins.metadata.supportHelper.modals.custom.button.secondaryConfirm"),
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
                    color={Button.Colors.GREEN}
                    onClick={async () => {
                        try {
                            if (await forceUpdate())
                                showToast(t("plugins.metadata.supportHelper.modals.updater.toast.success"), Toasts.Type.SUCCESS);
                            else
                                showToast(t("plugins.metadata.supportHelper.modals.updater.toast.already"), Toasts.Type.MESSAGE);
                        } catch (e) {
                            new Logger(this.name).error("Error while updating:", e);
                            showToast(t("plugins.metadata.supportHelper.modals.updater.toast.failed"), Toasts.Type.FAILURE);
                        }
                    }}
                >
                    {t("plugins.metadata.supportHelper.modals.updater.button.now")}
                </Button>
            );
        }

        if (props.channel.parent_id === SUPPORT_CATEGORY_ID && PermissionStore.can(PermissionsBits.SEND_MESSAGES, props.channel)) {
            if (props.message.content.includes("/plexcord-debug") || props.message.content.includes("/plexcord-plugins")) {
                buttons.push(
                    <Button
                        key="pc-dbg"
                        color={Button.Colors.PRIMARY}
                        onClick={async () => sendMessage(props.channel.id, { content: await generateDebugInfoMessage() })}
                    >
                        {t("plugins.metadata.supportHelper.button.debug")}
                    </Button>,
                    <Button
                        key="pc-plg-list"
                        color={Button.Colors.PRIMARY}
                        onClick={async () => sendMessage(props.channel.id, { content: generatePluginList() })}
                    >
                        {t("plugins.metadata.supportHelper.button.plugins")}
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
                                    showToast(t("plugins.metadata.supportHelper.toast.success"), Toasts.Type.SUCCESS);
                                } catch (e) {
                                    new Logger(this.name).error("Error while running snippet:", e);
                                    showToast(t("plugins.metadata.supportHelper.toast.failed"), Toasts.Type.FAILURE);
                                }
                            }}
                        >
                            {t("plugins.metadata.supportHelper.button.snippet")}
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

        return (
            <Card className={`pc-warning-card ${Margins.top8}`}>
                {tJsx("plugins.metadata.supportHelper.dm.warning", {
                    br: <br />,
                    channel: Parser.parse("https://discord.com/channels/1342668210331324476/1344043206286905364"),
                    support: <Link href="https://discord.gg/HQGYXm5XSh" target="_blank" rel="noreferrer">Plexcord</Link>
                })}
            </Card>
        );
    }, { noop: true }),
});
