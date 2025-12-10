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

import i18n, { plugins, settings, SUPPORTED_LANGUAGES, t, useForceUpdateOnLocaleChange, useTranslation } from "@api/i18n";
import { openNotificationLogModal } from "@api/Notifications/notificationLog";
import { Settings, useSettings } from "@api/Settings";
import { Divider } from "@components/Divider";
import { FormSwitch } from "@components/FormSwitch";
import { Heading } from "@components/Heading";
import { FolderIcon, GithubIcon, LogIcon, PaintbrushIcon, RestartIcon } from "@components/Icons";
import { Paragraph } from "@components/Paragraph";
import { QuickAction, QuickActionCard } from "@components/settings/QuickAction";
import { SpecialCard } from "@components/settings/SpecialCard";
import { SettingsTab, wrapTab } from "@components/settings/tabs/BaseTab";
import { openContributorModal } from "@components/settings/tabs/plugins/ContributorModal";
import { openPluginModal } from "@components/settings/tabs/plugins/PluginModal";
import settingsPlugin from "@plugins/_core/settings";
import { gitRemote } from "@shared/plexcordUserAgent";
import { IS_MAC, IS_WINDOWS } from "@utils/constants";
import { Margins } from "@utils/margins";
import { classes, isPcPluginDev, isPluginDev } from "@utils/misc";
import { relaunch } from "@utils/native";
import { Alerts, React, Select, useMemo, UserStore } from "@webpack/common";

import { DonateButtonComponent, isDonor } from "./DonateButton";
import { VibrancySettings } from "./MacVibrancySettings";
import { NotificationSection } from "./NotificationSettings";

const DEFAULT_DONATE_IMAGE = "https://cdn.discordapp.com/emojis/1026533090627174460.png";
const SHIGGY_DONATE_IMAGE = "https://media.discordapp.net/stickers/1039992459209490513.png";
const VENNIE_DONATOR_IMAGE = "https://cdn.discordapp.com/emojis/1238120638020063377.png";
const COZY_CONTRIB_IMAGE = "https://cdn.discordapp.com/emojis/1026533070955872337.png";
const DONOR_BACKGROUND_IMAGE = "https://media.discordapp.net/stickers/1311070116305436712.png?size=2048";
const CONTRIB_BACKGROUND_IMAGE = "https://media.discordapp.net/stickers/1311070166481895484.png?size=2048";

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
            warning: { enabled: false }
        },
        !IS_WEB && IS_WINDOWS && {
            key: "winCtrlQ",
            title: t(settings.switches.winCtrlQ.label),
            description: t(settings.switches.winCtrlQ.description),
            restartRequired: false,
            warning: { enabled: false }
        },
        IS_DISCORD_DESKTOP && {
            key: "disableMinSize",
            title: t(settings.switches.disableMinSize.label),
            description: t(settings.switches.disableMinSize.description),
            restartRequired: false,
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
        (s, i, arr) => (
            <FormSwitch
                key={s.key}
                title={s.title}
                description={s.description}
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
                hideBorder={i === arr.length - 1}
            />
        )
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
                        <DonateButtonComponent />
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
                    buttonTitle={t(settings.specialCards.contributions.buttonTitle)}
                    buttonOnClick={() => openContributorModal(user)}
                />
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

            <Divider />

            <Heading tag="h5" className={Margins.top20}>{t(settings.settingsSection.title)}</Heading>
            <Paragraph className={Margins.bottom20} style={{ color: "var(--text-subtle)" }}>
                {t(settings.settingsSection.hintParts.prefix)}
                <a onClick={() => openPluginModal(settingsPlugin)}>
                    {t(settings.settingsSection.hintParts.linkText)}
                </a>
                {t(settings.settingsSection.hintParts.suffix)}
            </Paragraph>

            <LanguageSelector />

            <Divider className={classes(Margins.top16, Margins.bottom20)} />

            <Switches />


            {needsVibrancySettings && <VibrancySettings />}

            <NotificationSection />
        </SettingsTab>
    );
}

export default wrapTab(PlexcordSettings, "Plexcord " + t(settings.title));
