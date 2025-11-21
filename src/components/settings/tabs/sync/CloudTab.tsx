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
import { useSettings } from "@api/Settings";
import { authorizeCloud, deauthorizeCloud } from "@api/SettingsSync/cloudSetup";
import { deleteCloudSettings, eraseAllCloudData, getCloudSettings, putCloudSettings } from "@api/SettingsSync/cloudSync";
import { Button } from "@components/Button";
import { CheckedTextInput } from "@components/CheckedTextInput";
import { Divider } from "@components/Divider";
import { FormSwitch } from "@components/FormSwitch";
import { Grid } from "@components/Grid";
import { HeadingTertiary } from "@components/Heading";
import { Link } from "@components/Link";
import { Paragraph } from "@components/Paragraph";
import { SettingsTab, wrapTab } from "@components/settings/tabs/BaseTab";
import { Margins } from "@utils/margins";
import { Alerts, Tooltip } from "@webpack/common";

function validateUrl(url: string) {
    try {
        new URL(url);
        return true;
    } catch {
        return t("cloud.backend.invalid");
    }
}

function SettingsSyncSection() {
    const { cloud } = useSettings(["cloud.authenticated", "cloud.settingsSync"]);
    const sectionEnabled = cloud.authenticated && cloud.settingsSync;

    return (
        <section className={Margins.top16}>
            <HeadingTertiary>{t("cloud.title")}</HeadingTertiary>
            <Paragraph size="md" className={Margins.bottom20}>
                {t("cloud.description")}
            </Paragraph>
            <FormSwitch
                key="cloud-sync"
                disabled={!cloud.authenticated}
                value={cloud.settingsSync}
                title={t("cloud.title")}
                onChange={v => { cloud.settingsSync = v; }}
            />
            <div className="pc-cloud-settings-sync-grid">
                <Button
                    size="small"
                    disabled={!sectionEnabled}
                    onClick={() => putCloudSettings(true)}
                >
                    {t("cloud.button.to")}
                </Button>
                <Tooltip text={t("cloud.button.fromDescription")}>
                    {({ onMouseLeave, onMouseEnter }) => (
                        <Button
                            onMouseLeave={onMouseLeave}
                            onMouseEnter={onMouseEnter}
                            size="small"
                            variant="dangerPrimary"
                            disabled={!sectionEnabled}
                            onClick={() => getCloudSettings(true, true)}
                        >
                            {t("cloud.button.from")}
                        </Button>
                    )}
                </Tooltip>
                <Button
                    size="small"
                    variant="dangerPrimary"
                    disabled={!sectionEnabled}
                    onClick={() => deleteCloudSettings()}
                >
                    {t("cloud.button.delete")}
                </Button>
            </div>
        </section>
    );
}

function CloudTab() {
    const settings = useSettings(["cloud.authenticated", "cloud.url"]);

    return (
        <SettingsTab title={"Plexcord " + t("cloud.text")}>
            <section className={Margins.top16}>
                <HeadingTertiary>{t("cloud.settings")}</HeadingTertiary>
                <Paragraph size="md" className={Margins.bottom20}>
                    {tJsx("cloud.overview", {
                        privacy: <Link href="https://api.plexcord.club/privacy">{t("cloud.privacy")}</Link>,
                        source: <Link href="https://github.com/Plexcord/Backend">{t("cloud.source")}</Link>
                    })}
                </Paragraph>
                <FormSwitch
                    key="backend"
                    value={settings.cloud.authenticated}
                    onChange={v => {
                        if (v)
                            authorizeCloud();
                        else
                            settings.cloud.authenticated = v;
                    }}
                    description={t("cloud.authorization")}
                    title={t("cloud.button.enable")}
                />
                <HeadingTertiary>{t("cloud.backend.title")}</HeadingTertiary>
                <Paragraph className={Margins.bottom8}>
                    {t("cloud.backend.description")}
                </Paragraph>
                <CheckedTextInput
                    key="backendUrl"
                    value={settings.cloud.url}
                    onChange={async v => {
                        settings.cloud.url = v;
                        settings.cloud.authenticated = false;
                        deauthorizeCloud();
                    }}
                    validate={validateUrl}
                />

                <Grid columns={2} gap="1em" className={Margins.top8}>
                    <Button
                        size="medium"
                        disabled={!settings.cloud.authenticated}
                        onClick={async () => {
                            await deauthorizeCloud();
                            settings.cloud.authenticated = false;
                            await authorizeCloud();
                        }}
                    >
                        {t("cloud.button.reauthorize")}
                    </Button>
                    <Button
                        size="medium"
                        variant="dangerPrimary"
                        disabled={!settings.cloud.authenticated}
                        onClick={() => Alerts.show({
                            title: t("cloud.button.erase.title"),
                            body: t("cloud.button.erase.body"),
                            onConfirm: eraseAllCloudData,
                            confirmText: t("cloud.button.erase.confirm"),
                            confirmColor: "pc-cloud-erase-data-danger-btn",
                            cancelText: t("cloud.button.erase.cancel")
                        })}
                    >
                        {t("cloud.button.erase.erase")}
                    </Button>
                </Grid>

                <Divider className={Margins.top16} />
            </section >
            <SettingsSyncSection />
        </SettingsTab>
    );
}

export default wrapTab(CloudTab, t("cloud.text"));
