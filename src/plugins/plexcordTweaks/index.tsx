/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2026 Vendicated and contributors
 * Copyright (c) 2026 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { ApplicationCommandInputType, sendBotMessage } from "@api/Commands";
import { findGroupChildrenByChildId, NavContextMenuPatchCallback } from "@api/ContextMenu";
import { HeaderBarButton } from "@api/HeaderBar";
import { plugin, t } from "@api/i18n";
import { isPluginEnabled } from "@api/PluginManager";
import { definePluginSettings } from "@api/Settings";
import { ShieldIcon, WarningIcon } from "@components/Icons";
import { StandingState } from "@plexcord/discord-types/enums";
import customRPC from "@plugins/customRPC";
import { Devs, PcDevs } from "@utils/constants";
import definePlugin, { OptionType } from "@utils/types";
import { findByCodeLazy } from "@webpack";
import { ApplicationCommandIndexStore, Menu, React, SafetyHubStore, SettingsRouter, useStateFromStores } from "@webpack/common";
import { ComponentType } from "react";

const fetchSafetyHub: () => Promise<void> = findByCodeLazy("SAFETY_HUB_FETCH_START");

const StandingConfig: Record<number, { label: () => string; hoverColor: string; Icon: ComponentType<any>; }> = {
    [StandingState.ALL_GOOD]: { label: () => t(plugin.plexcordTweaks.text.allGood), hoverColor: "var(--status-positive)", Icon: ShieldIcon },
    [StandingState.LIMITED]: { label: () => t(plugin.plexcordTweaks.text.limited), hoverColor: "var(--status-warning)", Icon: WarningIcon },
    [StandingState.VERY_LIMITED]: { label: () => t(plugin.plexcordTweaks.text.veryLimited), hoverColor: "var(--orange-345)", Icon: WarningIcon },
    [StandingState.AT_RISK]: { label: () => t(plugin.plexcordTweaks.text.atRisk), hoverColor: "var(--status-danger)", Icon: WarningIcon },
    [StandingState.SUSPENDED]: { label: () => t(plugin.plexcordTweaks.text.suspended), hoverColor: "var(--interactive-muted)", Icon: WarningIcon },
};

function StandingButton() {
    const standing = useStateFromStores([SafetyHubStore], () => SafetyHubStore.getAccountStanding());
    const isInitialized = useStateFromStores([SafetyHubStore], () => SafetyHubStore.isInitialized());
    const [hovered, setHovered] = React.useState(false);

    React.useEffect(() => {
        if (!isInitialized) fetchSafetyHub().catch(() => { });
    }, [isInitialized]);

    const config = StandingConfig[standing?.state] ?? StandingConfig[StandingState.ALL_GOOD];

    return (
        <div style={{ display: "contents" }} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
            <HeaderBarButton
                tooltip={config.label()}
                position="bottom"
                icon={props => <config.Icon {...props} color={hovered ? config.hoverColor : "currentColor"} />}
                onClick={() => SettingsRouter.openUserSettings("account_standing_panel")}
            />
        </div>
    );
}

const addAutoCorrectMenuItem: NavContextMenuPatchCallback = children => {
    const { enableAutoCorrect, autoCorrect } = settings.use(["enableAutoCorrect", "autoCorrect"]);
    if (!enableAutoCorrect) return;

    const group = findGroupChildrenByChildId("spellcheck-enabled", children, true);
    if (!group) return;

    const idx = group.findIndex(c => c?.props?.id?.includes("spellcheck-enabled"));
    group.splice(idx + 1, 0,
        <Menu.MenuCheckboxItem
            id="pc-enable-autocorrect"
            label={t(plugin.plexcordTweaks.text.enableAutocorrect)}
            checked={autoCorrect}
            action={() => settings.store.autoCorrect = !settings.store.autoCorrect}
        />
    );
};

const settings = definePluginSettings({
    removeActivitySection: {
        label: () => t(plugin.plexcordTweaks.option.removeActivitySection.label),
        type: OptionType.BOOLEAN,
        description: () => t(plugin.plexcordTweaks.option.removeActivitySection.description),
        restartNeeded: true,
        default: false,
    },
    showYourOwnActivityButtons: {
        label: () => t(plugin.plexcordTweaks.option.showYourOwnActivityButtons.label),
        type: OptionType.BOOLEAN,
        description: () => t(plugin.plexcordTweaks.option.showYourOwnActivityButtons.description),
        restartNeeded: true,
        default: false,
    },
    refreshSlashCommands: {
        label: () => t(plugin.plexcordTweaks.option.refreshSlashCommands.label),
        type: OptionType.BOOLEAN,
        description: () => t(plugin.plexcordTweaks.option.refreshSlashCommands.description),
        default: false,
    },
    forceRoleIcon: {
        label: () => t(plugin.plexcordTweaks.option.forceRoleIcon.label),
        type: OptionType.BOOLEAN,
        description: () => t(plugin.plexcordTweaks.option.forceRoleIcon.description),
        restartNeeded: true,
        default: false
    },
    accountStandingButton: {
        label: () => t(plugin.plexcordTweaks.option.accountStandingButton.label),
        type: OptionType.BOOLEAN,
        description: () => t(plugin.plexcordTweaks.option.accountStandingButton.description),
        restartNeeded: true,
        default: false,
    },
    disableHolidayNotifications: {
        label: () => t(plugin.plexcordTweaks.option.disableHolidayNotifications.label),
        type: OptionType.BOOLEAN,
        description: () => t(plugin.plexcordTweaks.option.disableHolidayNotifications.description),
        restartNeeded: true,
        default: false,
    },
    jsonGateway: {
        label: () => t(plugin.plexcordTweaks.option.jsonGateway.label),
        type: OptionType.BOOLEAN,
        description: () => t(plugin.plexcordTweaks.option.jsonGateway.description),
        restartNeeded: true,
        default: false,
    },
    showAllBadges: {
        label: () => t(plugin.plexcordTweaks.option.showAllBadges.label),
        type: OptionType.BOOLEAN,
        description: () => t(plugin.plexcordTweaks.option.showAllBadges.description),
        restartNeeded: true,
        default: false,
    },
    enableAutoCorrect: {
        label: () => t(plugin.plexcordTweaks.option.enableAutoCorrect.label),
        type: OptionType.BOOLEAN,
        description: () => t(plugin.plexcordTweaks.option.enableAutoCorrect.description),
        restartNeeded: true,
        default: false
    },
    autoCorrect: {
        label: () => t(plugin.plexcordTweaks.option.autoCorrect.label),
        type: OptionType.BOOLEAN,
        description: () => t(plugin.plexcordTweaks.option.autoCorrect.description),
        hidden: true,
        default: false
    }
});

export default definePlugin({
    name: "PlexcordTweaks",
    description: () => t(plugin.plexcordTweaks.description),
    tags: ["appearance", "commands", "utility"],
    dependencies: ["CommandsAPI", "HeaderBarAPI"],
    authors: [
        Devs.thororen,
        PcDevs.nyx,
        PcDevs.Naibuu,
        PcDevs.keircn,
        Devs.SerStars,
        PcDevs.mart,
        PcDevs.omaw,
        Devs.Samwich,
        Devs.AutumnVN,
        PcDevs.auggeeo,
        PcDevs.secp192k1,
        PcDevs.tie,
        PcDevs.itzmeshadow999,
        PcDevs.MutanPlex
    ],
    settings,
    contextMenus: {
        "textarea-context": addAutoCorrectMenuItem
    },
    headerBarButton: {
        icon: ShieldIcon,
        render: () => (settings.store.accountStandingButton ? <StandingButton /> : null),
    },
    patches: [
        // Remove Activity Section above Member List
        {
            find: ".GLOBAL_FEED});",
            predicate: () => settings.store.removeActivitySection,
            replacement: {
                match: /null==\i\|\|0.{0,100}VIEW_CHANNEL\)&&/,
                replace: "true||$&"
            },
        },
        // Show your own activity buttons because discord removes them for who knows why
        {
            find: ".USER_PROFILE_ACTIVITY_BUTTONS),",
            predicate: () => settings.store.showYourOwnActivityButtons && !isPluginEnabled(customRPC.name),
            replacement: {
                match: /.getId\(\)===\i.id/,
                replace: "$& && false"
            }
        },
        // Force Role Icon
        {
            find: "#{intl::GUILD_COMMUNICATION_DISABLED_ICON_TOOLTIP_BODY}",
            predicate: () => settings.store.forceRoleIcon,
            replacement: {
                match: /(?<=\}\):null\].{0,150}\?2:)0(?=\})/,
                replace: "1"
            }
        },
        {
            find: 'persistKey="SoundpackStore"',
            predicate: () => settings.store.disableHolidayNotifications,
            replacement: {
                match: /(?<=getSoundpack\(\)\{return )\i\.soundpack/,
                replace: '"classic"'
            }
        },
        {
            find: "JSONEncoding",
            replacement: {
                match: /void 0!==\i\?\i:/,
                replace: ""
            },
            predicate: () => settings.store.jsonGateway
        },
        {
            find: "UserProfileBadgeListRows",
            replacement: {
                match: /let (\i)=\i&&!\i(?=,\i=\1\?Math\.max\()/,
                replace: "let $1=!1"
            },
            predicate: () => settings.store.showAllBadges
        },
        // Add opening profile functionality to some connections
        {
            find: "getPlatformUserUrl:",
            replacement: [
                {
                    match: /name:("(?:Xbox|Epic Games)").{0,180}enabled:!0/g,
                    replace: "$&,getPlatformUserUrl:e=>$self.getPlatformUrl($1, e)"
                }
            ]
        },
        {
            find: "getSlateEditor:()=>",
            replacement: {
                match: /spellCheck:\i(?=,autoFocus:)/,
                replace: "$&,autoCorrect:$self.useAutoCorrect()"
            },
            predicate: () => settings.store.enableAutoCorrect
        },
        {
            find: "onPasteCapture:this.handlePasteCapture",
            replacement: {
                match: /autoCorrect:"off"(?=,"data-can-focus":)/,
                replace: 'autoCorrect:this.props.autoCorrect??"off"'
            },
            predicate: () => settings.store.enableAutoCorrect
        }
    ],
    commands: [
        {
            name: "refresh-commands",
            description: () => t(plugin.plexcordTweaks.command.refreshCommands),
            inputType: ApplicationCommandInputType.BUILT_IN,
            predicate: () => settings.store.refreshSlashCommands,
            execute: async (opts, ctx) => {
                try {
                    ApplicationCommandIndexStore.indices = {};
                    sendBotMessage(ctx.channel.id, { content: t(plugin.plexcordTweaks.text.slashCommandsRefreshedSuccessfully) });
                }
                catch (e) {
                    console.error("[refreshSlashCommands] Failed to refresh commands:", e);
                    sendBotMessage(ctx.channel.id, { content: t(plugin.plexcordTweaks.text.failedToRefreshCommands) });
                }
            }
        }
    ],
    useAutoCorrect() {
        const { autoCorrect } = settings.use(["autoCorrect"]);
        return autoCorrect ? "on" : "off";
    },
    getPlatformUrl(platform, args) {
        switch (platform) {
            case "Xbox":
                return `https://www.xbox.com/play/user/${encodeURIComponent(args.name)}`;
            case "Epic Games":
                return `https://store.epicgames.com/u/${encodeURIComponent(args.id)}`;
            default:
                return null;
        }
    }
});
