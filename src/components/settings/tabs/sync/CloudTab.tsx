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

import { cloud, t } from "@api/i18n";
import { useSettings } from "@api/Settings";
import { authorizeCloud, deauthorizeCloud } from "@api/SettingsSync/cloudSetup";
import { deleteCloudSettings, eraseAllCloudData, getCloudSettings, putCloudSettings } from "@api/SettingsSync/cloudSync";
import { Button } from "@components/Button";
import { CheckedTextInput } from "@components/CheckedTextInput";
import { Divider } from "@components/Divider";
import { Flex } from "@components/Flex";
import { FormSwitch } from "@components/FormSwitch";
import { Heading } from "@components/Heading";
import { CloudDownloadIcon, CloudUploadIcon } from "@components/Icons";
import { Link } from "@components/Link";
import { Notice } from "@components/Notice";
import { Paragraph } from "@components/Paragraph";
import { SettingsTab, wrapTab } from "@components/settings/tabs/BaseTab";
import { localStorage } from "@utils/localStorage";
import { Margins } from "@utils/margins";
import { useForceUpdater } from "@utils/react";
import { findComponentByCodeLazy } from "@webpack";
import { Alerts, SearchableSelect, Select, useState } from "@webpack/common";

const ICON_STYLE: React.CSSProperties = { width: 20, height: 20, borderRadius: 4, verticalAlign: "middle" };

function PlexcordIcon() {
    return <img src="https://plexcord.club/favicon.png" alt="Plexcord" style={ICON_STYLE} />;
}

const RefreshIcon = findComponentByCodeLazy("M4 12a8 8 0 0 1 14.93-4H15");
const TrashIcon = findComponentByCodeLazy("2.81h8.36a3");
const SkullIcon = findComponentByCodeLazy("m13.47 1 .07.04c.45.06");

function validateUrl(url: string) {
    try {
        new URL(url);
        return true;
    } catch {
        return t(cloud.backend.invalid);
    }
}

const cloudBackendOptions = [
    { label: "Plexcord Cloud", value: "https://api.plexcord.club/" },
];

function CloudTab() {
    const settings = useSettings(["cloud.authenticated", "cloud.url", "cloud.settingsSync"]);
    const [inputKey, setInputKey] = useState(0);
    const forceUpdate = useForceUpdater();

    const { cloud: cloudSettings } = settings;
    const isAuthenticated = cloudSettings.authenticated;
    const syncEnabled = isAuthenticated && cloudSettings.settingsSync;

    async function changeUrl(url: string) {
        cloudSettings.url = url;
        cloudSettings.authenticated = false;

        await deauthorizeCloud();
        await authorizeCloud();

        setInputKey(prev => prev + 1);
    }

    return (
        <SettingsTab>
            <Heading className={Margins.top16}>{t(cloud.integration.title)}</Heading>
            <Paragraph className={Margins.bottom16}>
                {t(cloud.integration.description)}
            </Paragraph>

            <Notice.Info className={Margins.bottom16}>
                {t(cloud.overview, {
                    privacy: <Link href="https://api.plexcord.club/privacy">{t(cloud.privacy)}</Link>,
                    source: <Link href="https://github.com/Plexcord/Backend">{t(cloud.source)}</Link>
                })}
            </Notice.Info>

            <FormSwitch
                title={t(cloud.button.enable)}
                description={t(cloud.authorization)}
                value={isAuthenticated}
                onChange={v => {
                    if (v)
                        authorizeCloud();
                    else
                        cloudSettings.authenticated = v;
                }}
                hideBorder
            />

            <Divider className={Margins.top20} />

            <Heading className={Margins.top20}>{t(cloud.backend.title)}</Heading>
            <Paragraph className={Margins.bottom16}>{t(cloud.backend.description)}</Paragraph>

            <SearchableSelect
                options={cloudBackendOptions}
                value={cloudBackendOptions.find(o => o.value === cloudSettings.url)}
                onChange={v => changeUrl(v)}
                className={Margins.bottom16}
                closeOnSelect={true}
                renderOptionPrefix={o => o?.value?.includes("plexcord") ? <PlexcordIcon /> : null}
            />

            <Flex gap="8px" alignItems="center">
                <div style={{ flex: 1 }}>
                    <CheckedTextInput
                        key={`backendUrl-${inputKey}`}
                        value={cloudSettings.url}
                        onChange={async v => {
                            cloudSettings.url = v;
                            cloudSettings.authenticated = false;
                            await deauthorizeCloud();
                        }}
                        validate={validateUrl}
                    />
                </div>
                <Button
                    disabled={!isAuthenticated}
                    onClick={async () => {
                        cloudSettings.authenticated = false;
                        await deauthorizeCloud();
                        await authorizeCloud();
                    }}
                >
                    <Flex gap="8px" alignItems="center">
                        <RefreshIcon color="currentColor" />
                        {t(cloud.button.reauthorize)}
                    </Flex>
                </Button>
            </Flex>

            <Divider className={Margins.top20} />

            <Heading className={Margins.top20}>{t(cloud.title)}</Heading>
            <Paragraph className={Margins.bottom16}>{t(cloud.description)}</Paragraph>

            <FormSwitch
                title={t(cloud.title)}
                description={t(cloud.switchDescription)}
                value={cloudSettings.settingsSync}
                onChange={v => { cloudSettings.settingsSync = v; }}
                disabled={!isAuthenticated}
                hideBorder
            />

            <Divider className={Margins.top20} />

            <Heading className={Margins.top20}>{t(cloud.sync.title)}</Heading>
            <Paragraph className={Margins.bottom16}>{t(cloud.sync.description)}</Paragraph>

            <Select
                options={[
                    { label: t(cloud.sync.direction.both), value: "both" },
                    { label: t(cloud.sync.direction.push), value: "push" },
                    { label: t(cloud.sync.direction.pull), value: "pull" },
                    { label: t(cloud.sync.direction.manual), value: "manual" }
                ]}
                isSelected={v => v === (localStorage.Plexcord_cloudSyncDirection ?? "both")}
                select={v => {
                    localStorage.Plexcord_cloudSyncDirection = v;
                    forceUpdate();
                }}
                serialize={v => v}
                isDisabled={!syncEnabled}
            />

            <Flex gap="8px" className={Margins.top16}>
                <Button
                    style={{ flex: 1 }}
                    disabled={!syncEnabled}
                    onClick={() => putCloudSettings(true)}
                >
                    <Flex gap="8px" alignItems="center">
                        <CloudUploadIcon />
                        {t(cloud.button.to)}
                    </Flex>
                </Button>
                <Button
                    style={{ flex: 1 }}
                    disabled={!syncEnabled}
                    onClick={() => getCloudSettings(true, true)}
                >
                    <Flex gap="8px" alignItems="center">
                        <CloudDownloadIcon />
                        {t(cloud.button.from)}
                    </Flex>
                </Button>
            </Flex>

            {!isAuthenticated && (
                <Notice.Warning className={Margins.top8}>
                    {t(cloud.warning.enableCloudIntegration)}
                </Notice.Warning>
            )}

            <Divider className={Margins.top20} />

            <Heading className={Margins.top20}>{t(cloud.danger.title)}</Heading>
            <Paragraph className={Margins.bottom16}>{t(cloud.danger.description)}</Paragraph>

            <Flex gap="8px">
                <Button
                    variant="dangerPrimary"
                    size="medium"
                    disabled={!syncEnabled}
                    onClick={() => deleteCloudSettings()}
                >
                    <Flex gap="8px" alignItems="center">
                        <TrashIcon color="currentColor" />
                        {t(cloud.button.delete)}
                    </Flex>
                </Button>
                <Button
                    variant="dangerSecondary"
                    size="medium"
                    disabled={!isAuthenticated}
                    onClick={() => Alerts.show({
                        title: t(cloud.danger.delete.account.title),
                        body: t(cloud.danger.delete.account.description),
                        onConfirm: eraseAllCloudData,
                        confirmText: t(cloud.danger.delete.account.confirm),
                        confirmColor: "pc-cloud-erase-data-danger-btn",
                        cancelText: t(cloud.danger.delete.account.cancel)
                    })}
                >
                    <Flex gap="8px" alignItems="center">
                        <SkullIcon color="currentColor" />
                        {t(cloud.danger.delete.account.title)}
                    </Flex>
                </Button>
            </Flex>
        </SettingsTab>
    );
}

export default wrapTab(CloudTab, "Cloud");
