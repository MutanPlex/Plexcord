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
import { showNotification } from "@api/Notifications";
import { Settings, useSettings } from "@api/Settings";
import { CheckedTextInput } from "@components/CheckedTextInput";
import { Grid } from "@components/Grid";
import { Link } from "@components/Link";
import { SettingsTab, wrapTab } from "@components/settings/tabs/BaseTab";
import { authorizeCloud, checkCloudUrlCsp, cloudLogger, deauthorizeCloud, getCloudAuth, getCloudUrl } from "@utils/cloud";
import { Margins } from "@utils/margins";
import { deleteCloudSettings, getCloudSettings, putCloudSettings } from "@utils/settingsSync";
import { Alerts, Button, Forms, Switch, Tooltip } from "@webpack/common";

function validateUrl(url: string) {
    try {
        new URL(url);
        return true;
    } catch {
        return t("cloud.backend.invalid");
    }
}

async function eraseAllData() {
    if (!await checkCloudUrlCsp()) return;

    const res = await fetch(new URL("/v1/", getCloudUrl()), {
        method: "DELETE",
        headers: { Authorization: await getCloudAuth() }
    });

    if (!res.ok) {
        cloudLogger.error(`Failed to erase data, API returned ${res.status}`);
        showNotification({
            title: t("cloud.notifications.title"),
            body: t("cloud.notifications.erase.failed", { status: res.status }),
            color: "var(--red-360)"
        });
        return;
    }

    Settings.cloud.authenticated = false;
    await deauthorizeCloud();

    showNotification({
        title: t("cloud.notifications.title"),
        body: t("cloud.notifications.erase.successful"),
        color: "var(--green-360)"
    });
}

function SettingsSyncSection() {
    const { cloud } = useSettings(["cloud.authenticated", "cloud.settingsSync"]);
    const sectionEnabled = cloud.authenticated && cloud.settingsSync;

    return (
        <Forms.FormSection title={t("cloud.title")} className={Margins.top16}>
            <Forms.FormText variant="text-md/normal" className={Margins.bottom20}>
                {t("cloud.description")}
            </Forms.FormText>
            <Switch
                key="cloud-sync"
                disabled={!cloud.authenticated}
                value={cloud.settingsSync}
                onChange={v => { cloud.settingsSync = v; }}
            >
                {t("cloud.title")}
            </Switch>
            <div className="pc-cloud-settings-sync-grid">
                <Button
                    size={Button.Sizes.SMALL}
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
                            size={Button.Sizes.SMALL}
                            color={Button.Colors.RED}
                            disabled={!sectionEnabled}
                            onClick={() => getCloudSettings(true, true)}
                        >
                            {t("cloud.button.from")}
                        </Button>
                    )}
                </Tooltip>
                <Button
                    size={Button.Sizes.SMALL}
                    color={Button.Colors.RED}
                    disabled={!sectionEnabled}
                    onClick={() => deleteCloudSettings()}
                >
                    {t("cloud.button.delete")}
                </Button>
            </div>
        </Forms.FormSection>
    );
}

function CloudTab() {
    const settings = useSettings(["cloud.authenticated", "cloud.url"]);

    return (
        <SettingsTab title={"Plexcord " + t("cloud.text")}>
            <Forms.FormSection title={t("cloud.settings")} className={Margins.top16}>
                <Forms.FormText variant="text-md/normal" className={Margins.bottom20}>
                    {tJsx("cloud.overview", {
                        privacy: <Link href="https://api.plexcord.club/privacy">{t("cloud.privacy")}</Link>,
                        source: <Link href="https://github.com/Plexcord/Backend">{t("cloud.source")}</Link>
                    })}
                </Forms.FormText>
                <Switch
                    key="backend"
                    value={settings.cloud.authenticated}
                    onChange={v => {
                        if (v)
                            authorizeCloud();
                        else
                            settings.cloud.authenticated = v;
                    }}
                    note={t("cloud.authorization")}
                >
                    {t("cloud.button.enable")}
                </Switch>
                <Forms.FormTitle tag="h5">{t("cloud.backend.title")}</Forms.FormTitle>
                <Forms.FormText className={Margins.bottom8}>
                    {t("cloud.backend.description")}
                </Forms.FormText>
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
                        size={Button.Sizes.MEDIUM}
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
                        size={Button.Sizes.MEDIUM}
                        color={Button.Colors.RED}
                        disabled={!settings.cloud.authenticated}
                        onClick={() => Alerts.show({
                            title: t("cloud.button.erase.title"),
                            body: t("cloud.button.erase.body"),
                            onConfirm: eraseAllData,
                            confirmText: t("cloud.button.erase.confirm"),
                            confirmColor: "pc-cloud-erase-data-danger-btn",
                            cancelText: t("cloud.button.erase.cancel")
                        })}
                    >
                        {t("cloud.button.erase")}
                    </Button>
                </Grid>

                <Forms.FormDivider className={Margins.top16} />
            </Forms.FormSection >
            <SettingsSyncSection />
        </SettingsTab>
    );
}

export default wrapTab(CloudTab, t("cloud.text"));
