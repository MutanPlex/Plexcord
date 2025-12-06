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
import { Card } from "@components/Card";
import { Flex } from "@components/Flex";
import { Heading } from "@components/Heading";
import { Paragraph } from "@components/Paragraph";
import { SettingsTab, wrapTab } from "@components/settings/tabs/BaseTab";
import { Margins } from "@utils/margins";

function BackupAndRestoreTab() {
    return (
        <SettingsTab title={t(sync.title)}>
            <Flex flexDirection="column" gap="0.5em">
                <Card variant="warning">
                    <Heading tag="h4">{t(sync.warning)}</Heading>
                    <Paragraph>{t(sync.warningText)}</Paragraph>
                </Card>
                <Paragraph size="md" weight="normal" className={Margins.bottom8}>
                    {t(sync.description)}
                </Paragraph>
                <Paragraph size="md" weight="normal" className={Margins.bottom8}>
                    {t(sync.settings.text)}
                    <ul>
                        <li>&mdash; {t(sync.settings.quickcss)}</li>
                        <li>&mdash; {t(sync.settings.theme)}</li>
                        <li>&mdash; {t(sync.settings.plugins)}</li>
                        <li>&mdash; {t(sync.settings.datastores)}</li>
                    </ul>
                </Paragraph>
                <Flex>
                    <Button
                        onClick={() => uploadSettingsBackup()}
                        size="small"
                    >
                        {t(sync.button.import)}
                    </Button>
                    <Button
                        onClick={() => downloadSettingsBackup("settings")}
                        size="small"
                    >
                        {t(sync.button.export)}
                    </Button>
                    <Button
                        onClick={() => downloadSettingsBackup("plugins")}
                        size="small"
                    >
                        {t(sync.button.plugins)}
                    </Button>
                    <Button
                        onClick={() => downloadSettingsBackup("css")}
                        size="small"
                    >
                        {t(sync.button.css)}
                    </Button>
                    <Button
                        onClick={() => downloadSettingsBackup("datastore")}
                        size="small"
                    >
                        {t(sync.button.datastores)}
                    </Button>
                </Flex>
            </Flex>
        </SettingsTab>
    );
}

export default wrapTab(BackupAndRestoreTab, t(sync.title));
