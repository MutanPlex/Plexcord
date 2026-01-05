/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2024 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import "./PlexcordTab.css";

import i18n, { settings, SUPPORTED_LANGUAGES, t, useForceUpdateOnLocaleChange, useTranslation } from "@api/i18n";
import { openNotificationLogModal } from "@api/Notifications/notificationLog";
import { Settings, useSettings } from "@api/Settings";
import { Button } from "@components/Button";
import { Divider } from "@components/Divider";
import { FormSwitch } from "@components/FormSwitch";
import { Heading } from "@components/Heading";
import { FolderIcon, GithubIcon, LogIcon, PaintbrushIcon, RestartIcon } from "@components/Icons";
import { Notice } from "@components/Notice";
import { Paragraph } from "@components/Paragraph";
import { QuickAction, QuickActionCard } from "@components/settings/QuickAction";
import { SpecialCard } from "@components/settings/SpecialCard";
import { SettingsTab, wrapTab } from "@components/settings/tabs/BaseTab";
import { openContributorModal } from "@components/settings/tabs/plugins/ContributorModal";
import { openPluginModal } from "@components/settings/tabs/plugins/PluginModal";
import settingsPlugin from "@plugins/_core/settings";
import { gitRemote } from "@shared/plexcordUserAgent";
import { DONOR_ROLE_ID, IS_MAC, IS_WINDOWS, PLEXCORD_GUILD_ID } from "@utils/constants";
import { classNameFactory } from "@utils/css";
import { Margins } from "@utils/margins";
import { classes, isPcPluginDev, isPluginDev } from "@utils/misc";
import { relaunch } from "@utils/native";
import { Alerts, GuildMemberStore, React, Select, useMemo, UserStore } from "@webpack/common";

import { DonateButtonComponent } from "./DonateButton";
import { VibrancySettings } from "./MacVibrancySettings";
import { NotificationSection } from "./NotificationSettings";

const DEFAULT_DONATE_IMAGE = "https://cdn.discordapp.com/emojis/1026533090627174460.png";
const SHIGGY_DONATE_IMAGE = "https://media.discordapp.net/stickers/1039992459209490513.png";
const VENNIE_DONATOR_IMAGE = "https://cdn.discordapp.com/emojis/1238120638020063377.png";
const COZY_CONTRIB_IMAGE = "https://cdn.discordapp.com/emojis/1026533070955872337.png";
const DONOR_BACKGROUND_IMAGE = "https://media.discordapp.net/stickers/1311070116305436712.png?size=2048";
const CONTRIB_BACKGROUND_IMAGE = "https://media.discordapp.net/stickers/1311070166481895484.png?size=2048";

import BadgeAPI from "plugins/_api/badges";

const cl = classNameFactory("pc-plexcord-tab-");

type KeysOfType<Object, Type> = {
    [K in keyof Object]: Object[K] extends Type ? K : never;
}[keyof Object];

function LanguageSelector() {
    const { t, locale, isAutoDetect } = useTranslation();
    const languageOptions = Object.entries(SUPPORTED_LANGUAGES).map(([code, info]) => ({
        label: `${info.nativeName} (${info.name})`,
        value: code
    }));

    const handleLocaleChange = (value: string) => {
        i18n.setLocale(value, true);
        Settings.language.locale = value;
    };
    return (
        <div style={{ display: "flex" }}>
            <div>
                <Heading tag="h5">{t(settings.language.selector.label)}</Heading>
                <Paragraph className="description" style={{ marginBottom: "8px" }}>
                    {t(settings.language.selector.description)}
                </Paragraph>
            </div>
            <div style={{ marginLeft: "auto", minWidth: "200px" }}>
                <Select
                    options={languageOptions}
                    serialize={v => v}
                    select={handleLocaleChange}
                    isSelected={v => v === locale}
                    closeOnSelect={true}
                    placeholder={t(settings.language.selector.placeholder)}
                />
            </div>
        </div>
    );
}

function Switches() {
    const settingsState = useSettings(["useQuickCss", "enableReactDevtools", "frameless", "winNativeTitleBar", "transparent", "winCtrlQ", "disableMinSize"]);

    const Switches = [
        {
            key: "useQuickCss",
            title: t(settings.switches.useQuickCss.label),
            description: t(settings.switches.useQuickCss.description),
            restartRequired: true,
            warning: { enabled: false }
        },
        !IS_WEB && {
            key: "enableReactDevtools",
            title: t(settings.switches.enableReactDevtools.label),
            description: t(settings.switches.enableReactDevtools.description),
            restartRequired: true,
            warning: { enabled: false }
        },
        !IS_WEB && (!IS_DISCORD_DESKTOP || !IS_WINDOWS ? {
            key: "frameless",
            title: t(settings.switches.frameless.label),
            description: t(settings.switches.frameless.description),
            restartRequired: true,
            warning: { enabled: false }
        } : {
            key: "winNativeTitleBar",
            title: t(settings.switches.winNativeTitleBar.label),
            description: t(settings.switches.winNativeTitleBar.description),
            restartRequired: true,
            warning: { enabled: false }
        }),
        !IS_WEB && {
            key: "transparent",
            title: t(settings.switches.transparent.label),
            description: t(settings.switches.transparent.description),
            restartRequired: true,
            warning: {
                enabled: true,
                message: IS_WINDOWS
                    ? t(settings.switches.transparent.isWindows)
                    : t(settings.switches.transparent.notWindows),
            },
        },
        !IS_WEB && IS_WINDOWS && {
            key: "winCtrlQ",
            title: t(settings.switches.winCtrlQ.label),
            description: t(settings.switches.winCtrlQ.description),
            restartRequired: true,
            warning: { enabled: false }
        },
        IS_DISCORD_DESKTOP && {
            key: "disableMinSize",
            title: t(settings.switches.disableMinSize.label),
            description: t(settings.switches.disableMinSize.description),
            restartRequired: true,
            warning: { enabled: false }
        },
    ] satisfies Array<false | {
        key: KeysOfType<typeof settingsState, boolean>;
        title: string;
        description?: string;
        restartRequired?: boolean;
        warning: { enabled: boolean; message?: string; };
    }>;

    return Switches.filter((s): s is Exclude<typeof s, false> => !!s).map(
        s => (
            <FormSwitch
                key={s.key}
                title={s.title}
                description={
                    s.warning.enabled ? (
                        <>
                            {s.description}
                            <Notice.Warning className={Margins.top8} style={{ width: "100%" }}>
                                {s.warning.message}
                            </Notice.Warning>
                        </>
                    ) : (
                        s.description
                    )
                }
                value={settingsState[s.key]}
                onChange={v => {
                    settingsState[s.key] = v;

                    if (s.restartRequired) {
                        Alerts.show({
                            title: t(plugins.restart.required),
                            body: t(plugins.restart.apply),
                            confirmText: t(plugins.restart.button.now),
                            cancelText: t(plugins.restart.button.later),
                            onConfirm: relaunch
                        });
                    }
                }}
                hideBorder
            />
        ),
    );
}

function PlexcordSettings() {
    useForceUpdateOnLocaleChange();

    const donateImage = useMemo(() =>
        Math.random() > 0.5 ? DEFAULT_DONATE_IMAGE : SHIGGY_DONATE_IMAGE,
        []
    );

    const needsVibrancySettings = IS_DISCORD_DESKTOP && IS_MAC;

    const user = UserStore?.getCurrentUser();

    return (
        <SettingsTab>
            {isDonor(user?.id)
                ? (
                    <SpecialCard
                        title={t(settings.specialCards.donations.title)}
                        subtitle={t(settings.specialCards.donations.subtitle)}
                        description={t(settings.specialCards.donations.description)}
                        cardImage={VENNIE_DONATOR_IMAGE}
                        backgroundImage={DONOR_BACKGROUND_IMAGE}
                        backgroundColor="#ED87A9"
                    >
                        <DonateButtonComponent donated={true} />
                    </SpecialCard>
                )
                : (
                    <SpecialCard
                        title={t(settings.specialCards.supportProject.title)}
                        description={t(settings.specialCards.supportProject.description)}
                        cardImage={donateImage}
                        backgroundImage={DONOR_BACKGROUND_IMAGE}
                        backgroundColor="#c3a3ce"
                    >
                        <DonateButtonComponent />
                    </SpecialCard>
                )
            }

            {isPluginDev(user?.id) || isPcPluginDev(user?.id) && (
                <SpecialCard
                    title={t(settings.specialCards.contributions.title)}
                    subtitle={t(settings.specialCards.contributions.subtitle)}
                    description={t(settings.specialCards.contributions.description)}
                    cardImage={COZY_CONTRIB_IMAGE}
                    backgroundImage={CONTRIB_BACKGROUND_IMAGE}
                    backgroundColor="#EDCC87"
                >
                    <Button
                        variant="none"
                        size="medium"
                        type="button"
                        onClick={() => openContributorModal(user)}
                        className="pc-contrib-button"
                    >
                        <GithubIcon aria-hidden fill={"#000000"} className={"pc-contrib-github"} />
                        {t(settings.specialCards.contributions.buttonTitle)}
                    </Button>
                </SpecialCard>
            )}

            <Heading tag="h5">{t(settings.quickActions.title)}</Heading>
            <Paragraph className={Margins.bottom16}>
                {t(settings.quickActions.description)}
            </Paragraph>

            <QuickActionCard>
                <QuickAction
                    Icon={LogIcon}
                    text={t(settings.quickActions.notificationLog)}
                    action={openNotificationLogModal}
                />
                <QuickAction
                    Icon={PaintbrushIcon}
                    text={t(settings.quickActions.editQuickCSS)}
                    action={() => PlexcordNative.quickCss.openEditor()}
                />
                {!IS_WEB && (
                    <>
                        <QuickAction
                            Icon={RestartIcon}
                            text={t(settings.quickActions.relaunchDiscord)}
                            action={relaunch}
                        />
                        <QuickAction
                            Icon={FolderIcon}
                            text={t(settings.quickActions.openSettingsFolder)}
                            action={() => PlexcordNative.settings.openFolder()}
                        />
                    </>
                )}
                <QuickAction
                    Icon={GithubIcon}
                    text={t(settings.quickActions.viewSourceCode)}
                    action={() => PlexcordNative.native.openExternal("https://github.com/" + gitRemote)}
                />
            </QuickActionCard>

            <Divider className={Margins.top20} />

            <Heading tag="h5" className={Margins.top20}>{t(settings.settingsSection.title)}</Heading>
            <Paragraph className={Margins.bottom16}>
                {t(settings.settingsSection.description)}
            </Paragraph>
            <Notice.Info className={Margins.bottom20} style={{ width: "100%" }}>
                {t(settings.settingsSection.hintParts.prefix, {
                    pluginLink: <a onClick={() => openPluginModal(settingsPlugin)}>
                        {t(settings.settingsSection.hintParts.linkText)}
                    </a>
                })}
            </Notice.Info>

            <LanguageSelector />

            <Divider className={classes(Margins.top16, Margins.bottom20)} />

            <Switches />

            {needsVibrancySettings && <VibrancySettings />}

            <NotificationSection />
        </SettingsTab>
    );
}

export default wrapTab(PlexcordSettings, "Plexcord " + t(settings.title));

export function isDonor(userId: string): boolean {
    const donorBadges = BadgeAPI.getDonorBadges(userId);
    return GuildMemberStore.getMember(PLEXCORD_GUILD_ID, userId)?.roles.includes(DONOR_ROLE_ID) || !!donorBadges;
}
