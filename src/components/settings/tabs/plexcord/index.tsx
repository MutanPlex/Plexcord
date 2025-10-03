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

import i18n, { SUPPORTED_LANGUAGES, t, useForceUpdateOnLocaleChange, useTranslation } from "@api/i18n";
import { openNotificationLogModal } from "@api/Notifications/notificationLog";
import { Settings, useSettings } from "@api/Settings";
import { FormSwitch } from "@components/FormSwitch";
import { FolderIcon, GithubIcon, LogIcon, openPluginModal, PaintbrushIcon, RestartIcon } from "@components/index";
import { QuickAction, QuickActionCard } from "@components/settings/QuickAction";
import { SpecialCard } from "@components/settings/SpecialCard";
import { SettingsTab, wrapTab } from "@components/settings/tabs/BaseTab";
import { openContributorModal } from "@components/settings/tabs/plugins/ContributorModal";
import { gitRemote } from "@shared/plexcordUserAgent";
import { IS_MAC, IS_WINDOWS } from "@utils/constants";
import { Margins } from "@utils/margins";
import { classes, isPcPluginDev, isPluginDev } from "@utils/misc";
import { relaunch } from "@utils/native";
import { Forms, React, Select, useMemo, UserStore } from "@webpack/common";

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
                <Forms.FormTitle>{t("settings.language.selector.label")}</Forms.FormTitle>
                <Forms.FormText className="description" style={{ marginBottom: "8px" }}>
                    {t("settings.language.selector.description")}
                </Forms.FormText>
            </div>
            <div style={{ marginLeft: "auto", minWidth: "200px" }}>
                <Select
                    options={languageOptions}
                    serialize={v => v}
                    select={handleLocaleChange}
                    isSelected={v => v === locale}
                    closeOnSelect={true}
                    placeholder={t("settings.language.selector.placeholder")}
                />
            </div>
        </div>
    );
}

function Switches() {
    const settings = useSettings(["useQuickCss", "enableReactDevtools", "frameless", "winNativeTitleBar", "transparent", "winCtrlQ", "disableMinSize"]);

    const Switches = [
        {
            key: "useQuickCss",
            title: t("settings.switches.useQuickCss.label"),
            note: t("settings.switches.useQuickCss.description")
        },
        !IS_WEB && {
            key: "enableReactDevtools",
            title: t("settings.switches.enableReactDevtools.label"),
            note: t("settings.switches.enableReactDevtools.description")
        },
        !IS_WEB && (!IS_DISCORD_DESKTOP || !IS_WINDOWS ? {
            key: "frameless",
            title: t("settings.switches.frameless.label"),
            note: t("settings.switches.frameless.description")
        } : {
            key: "winNativeTitleBar",
            title: t("settings.switches.winNativeTitleBar.label"),
            note: t("settings.switches.winNativeTitleBar.description")
        }),
        !IS_WEB && {
            key: "transparent",
            title: t("settings.switches.transparent.label"),
            note: t("settings.switches.transparent.description")
        },
        !IS_WEB && IS_WINDOWS && {
            key: "winCtrlQ",
            title: t("settings.switches.winCtrlQ.label"),
            note: t("settings.switches.winCtrlQ.description")
        },
        IS_DISCORD_DESKTOP && {
            key: "disableMinSize",
            title: t("settings.switches.disableMinSize.label"),
            note: t("settings.switches.disableMinSize.description")
        },
    ] satisfies Array<false | {
        key: KeysOfType<typeof settings, boolean>;
        title: string;
        note: string;
    }>;

    return Switches.map(s => s && (
        <FormSwitch
            key={s.key}
            value={settings[s.key]}
            onChange={v => settings[s.key] = v}
            description={s.note}
            title={s.title}
        />
    ));
}

function PlexcordSettings() {
    useForceUpdateOnLocaleChange();

    const donateImage = useMemo(() =>
        Math.random() > 0.5 ? DEFAULT_DONATE_IMAGE : SHIGGY_DONATE_IMAGE,
        []
    );

    const needsVibrancySettings = IS_DISCORD_DESKTOP && IS_MAC;

    const user = UserStore.getCurrentUser();

    return (
        <SettingsTab title={"Plexcord " + t("settings.title")}>
            {isDonor(user?.id)
                ? (
                    <SpecialCard
                        title={t("settings.specialCards.donations.title")}
                        subtitle={t("settings.specialCards.donations.subtitle")}
                        description={t("settings.specialCards.donations.description")}
                        cardImage={VENNIE_DONATOR_IMAGE}
                        backgroundImage={DONOR_BACKGROUND_IMAGE}
                        backgroundColor="#ED87A9"
                    >
                        <DonateButtonComponent />
                    </SpecialCard>
                )
                : (
                    <SpecialCard
                        title={t("settings.specialCards.supportProject.title")}
                        description={t("settings.specialCards.supportProject.description")}
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
                    title={t("settings.specialCards.contributions.title")}
                    subtitle={t("settings.specialCards.contributions.subtitle")}
                    description={t("settings.specialCards.contributions.description")}
                    cardImage={COZY_CONTRIB_IMAGE}
                    backgroundImage={CONTRIB_BACKGROUND_IMAGE}
                    backgroundColor="#EDCC87"
                    buttonTitle={t("settings.specialCards.contributions.buttonTitle")}
                    buttonOnClick={() => openContributorModal(user)}
                />
            )}

            <Forms.FormSection title={t("settings.quickActions.title")}>
                <QuickActionCard>
                    <QuickAction
                        Icon={LogIcon}
                        text={t("settings.quickActions.notificationLog")}
                        action={openNotificationLogModal}
                    />
                    <QuickAction
                        Icon={PaintbrushIcon}
                        text={t("settings.quickActions.editQuickCSS")}
                        action={() => PlexcordNative.quickCss.openEditor()}
                    />
                    {!IS_WEB && (
                        <>
                            <QuickAction
                                Icon={RestartIcon}
                                text={t("settings.quickActions.relaunchDiscord")}
                                action={relaunch}
                            />
                            <QuickAction
                                Icon={FolderIcon}
                                text={t("settings.quickActions.openSettingsFolder")}
                                action={() => PlexcordNative.settings.openFolder()}
                            />
                        </>
                    )}
                    <QuickAction
                        Icon={GithubIcon}
                        text={t("settings.quickActions.viewSourceCode")}
                        action={() => PlexcordNative.native.openExternal("https://github.com/" + gitRemote)}
                    />
                </QuickActionCard>
            </Forms.FormSection>

            <Forms.FormDivider />

            <Forms.FormSection className={Margins.top16} title={t("settings.settingsSection.title")} tag="h5">
                <Forms.FormText className={Margins.bottom20} style={{ color: "var(--text-muted)" }}>
                    {t("settings.settingsSection.hintParts.prefix")}
                    <a onClick={() => openPluginModal(Plexcord.Plugins.plugins.Settings)}>
                        {t("settings.settingsSection.hintParts.linkText")}
                    </a>
                    {t("settings.settingsSection.hintParts.suffix")}
                </Forms.FormText>

                <LanguageSelector />

                <Forms.FormDivider className={classes(Margins.top16, Margins.bottom20)} />

                <Switches />
            </Forms.FormSection>


            {needsVibrancySettings && <VibrancySettings />}

            <NotificationSection />
        </SettingsTab>
    );
}

export default wrapTab(PlexcordSettings, "Plexcord " + t("settings.title"));
