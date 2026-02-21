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

import { sync, t } from "@api/i18n";
import { downloadSettingsBackup, uploadSettingsBackup } from "@api/SettingsSync/offline";
import { Button } from "@components/Button";
import { Divider } from "@components/Divider";
import { Flex } from "@components/Flex";
import { Heading } from "@components/Heading";
import { Notice } from "@components/Notice";
import { Paragraph } from "@components/Paragraph";
import { SettingsTab, wrapTab } from "@components/settings/tabs/BaseTab";
import { Margins } from "@utils/margins";

function BackupAndRestoreTab() {
    return (
        <SettingsTab>
            <Heading className={Margins.top16}>{t(sync.title)}</Heading>
            <Paragraph className={Margins.bottom20}>
                {t(sync.description)}
            </Paragraph>

            <Notice.Warning className={Margins.bottom20} style={{ padding: "15px" }}>
                <Paragraph>{t(sync.warningText)}</Paragraph>
            </Notice.Warning>

            <Heading>{t(sync.settings.text)}</Heading>
            <Paragraph className={Margins.bottom20}>
                <ul>
                    <li>• {t(sync.settings.quickcss)}</li>
                    <li>• {t(sync.settings.theme)}</li>
                    <li>• {t(sync.settings.plugins)}</li>
                    <li>• {t(sync.settings.datastores)}</li>
                </ul>
            </Paragraph>

            <Divider className={Margins.bottom20} />

            <Heading>{t(sync.import.title)}</Heading>
            <Paragraph className={Margins.bottom16}>
                {t(sync.import.description)}
            </Paragraph>

            <Flex gap="8px" className={Margins.bottom20} style={{ flexWrap: "wrap" }}>
                <Button
                    onClick={() => uploadSettingsBackup("all")}
                    size="small"
                    variant="secondary"
                >
                    {t(sync.import.all)}
                </Button>
                <Button
                    onClick={() => uploadSettingsBackup("plugins")}
                    size="small"
                >
                    {t(sync.import.plugins)}
                </Button>
                <Button
                    onClick={() => uploadSettingsBackup("css")}
                    size="small"
                >
                    {t(sync.import.css)}
                </Button>
                <Button
                    onClick={() => uploadSettingsBackup("datastore")}
                    size="small"
                >
                    {t(sync.import.datastore)}
                </Button>
            </Flex>

            <Divider className={Margins.bottom20} />

            <Heading>{t(sync.export.title)}</Heading>
            <Paragraph className={Margins.bottom16}>
                {t(sync.export.description)}
            </Paragraph>

            <Flex gap="8px" style={{ flexWrap: "wrap" }}>
                <Button
                    onClick={() => downloadSettingsBackup("all")}
                    size="small"
                    variant="secondary"
                >
                    {t(sync.export.all)}
                </Button>
                <Button
                    onClick={() => downloadSettingsBackup("plugins")}
                    size="small"
                >
                    {t(sync.export.plugins)}
                </Button>
                <Button
                    onClick={() => downloadSettingsBackup("css")}
                    size="small"
                >
                    {t(sync.export.css)}
                </Button>
                <Button
                    onClick={() => downloadSettingsBackup("datastore")}
                    size="small"
                >
                    {t(sync.export.datastore)}
                </Button>
            </Flex>
        </SettingsTab>
    );
}

export default wrapTab(BackupAndRestoreTab, t(sync.title));
