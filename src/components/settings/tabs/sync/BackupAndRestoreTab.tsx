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

import { t } from "@api/i18n";
import { BaseText } from "@components/BaseText";
import { Flex } from "@components/Flex";
import { SettingsTab, wrapTab } from "@components/settings/tabs/BaseTab";
import { Margins } from "@utils/margins";
import { classes } from "@utils/misc";
import { downloadSettingsBackup, uploadSettingsBackup } from "@utils/settingsSync";
import { Button, Card } from "@webpack/common";

function BackupAndRestoreTab() {
    return (
        <SettingsTab title={t("sync.title")}>
            <Card className={classes("pc-settings-card", "pc-backup-restore-card")}>
                <Flex flexDirection="column">
                    <strong>{t("sync.warning")}</strong>
                    <span>{t("sync.warningText")}</span>
                </Flex>
            </Card>
            <BaseText size="md" weight="normal" className={Margins.bottom8}>
                {t("sync.description")}
            </BaseText>
            <BaseText size="md" weight="normal" className={Margins.bottom8}>
                {t("sync.settings.text")}
                <ul>
                    <li>&mdash; {t("sync.settings.quickcss")}</li>
                    <li>&mdash; {t("sync.settings.theme")}</li>
                    <li>&mdash; {t("sync.settings.plugins")}</li>
                    <li>&mdash; {t("sync.settings.datastores")}</li>
                </ul>
            </BaseText>
            <Flex>
                <Button
                    onClick={() => uploadSettingsBackup()}
                    size={Button.Sizes.SMALL}
                >
                    {t("sync.button.import")}
                </Button>
                <Button
                    onClick={() => downloadSettingsBackup("settings")}
                    size={Button.Sizes.SMALL}
                >
                    {t("sync.button.export")}
                </Button>
                <Button
                    onClick={() => downloadSettingsBackup("plugins")}
                    size={Button.Sizes.SMALL}
                >
                    {t("sync.button.plugins")}
                </Button>
                <Button
                    onClick={() => downloadSettingsBackup("css")}
                    size={Button.Sizes.SMALL}
                >
                    {t("sync.button.css")}
                </Button>
                <Button
                    onClick={() => downloadSettingsBackup("datastore")}
                    size={Button.Sizes.SMALL}
                >
                    {t("sync.button.datastores")}
                </Button>
            </Flex>
        </SettingsTab>
    );
}

export default wrapTab(BackupAndRestoreTab, t("sync.title"));
