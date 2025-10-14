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
import { useSettings } from "@api/Settings";
import { Divider } from "@components/Divider";
import { FormSwitch } from "@components/FormSwitch";
import { Heading } from "@components/Heading";
import { Link } from "@components/Link";
import { Paragraph } from "@components/Paragraph";
import { handleSettingsTabError, SettingsTab, wrapTab } from "@components/settings/tabs/BaseTab";
import { Margins } from "@utils/margins";
import { ModalCloseButton, ModalContent, ModalProps, ModalRoot, ModalSize, openModal } from "@utils/modal";
import { useAwaiter } from "@utils/react";
import { getRepo, isNewer, UpdateLogger } from "@utils/updater";
import { React } from "@webpack/common";

import gitHash from "~git-hash";

import { CommonProps, HashLink, Newer, Updatable } from "./Components";

function Updater() {
    const settings = useSettings(["autoUpdate", "autoUpdateNotification"]);

    const [repo, err, repoPending] = useAwaiter(getRepo, {
        fallbackValue: "Loading...",
        onError: e => UpdateLogger.error("Failed to retrieve repo", err)
    });

    const commonProps: CommonProps = {
        repo,
        repoPending
    };

    return (
        <SettingsTab title={"Plexcord " + t("updater.title")}>
            <Heading>{t("updater.settings")}</Heading>
            <FormSwitch
                value={settings.autoUpdate}
                onChange={(v: boolean) => settings.autoUpdate = v}
                description={t("updater.automatically.description")}
                title={t("updater.automatically.label")}
            />
            <FormSwitch
                value={settings.autoUpdateNotification}
                onChange={(v: boolean) => settings.autoUpdateNotification = v}
                description={t("updater.notify.description")}
                disabled={!settings.autoUpdate}
                title={t("updater.notify.label")}
            />

            <Heading>{t("updater.repo")}</Heading>

            <Paragraph>
                {repoPending
                    ? repo
                    : err
                        ? t("updater.error.retrieve")
                        : (
                            <Link href={repo}>
                                {repo.split("/").slice(-2).join("/")}
                            </Link>
                        )
                }
                {" "}
                (<HashLink hash={gitHash} repo={repo} disabled={repoPending} />)
            </Paragraph>

            <Divider className={Margins.top8 + " " + Margins.bottom8} />

            <Heading>{t("updater.updates")}</Heading>

            {isNewer
                ? <Newer {...commonProps} />
                : <Updatable {...commonProps} />
            }
        </SettingsTab>
    );
}

export default IS_UPDATER_DISABLED
    ? null
    : wrapTab(Updater, t("updater.title"));

export const openUpdaterModal = IS_UPDATER_DISABLED
    ? null
    : function () {
        const UpdaterTab = wrapTab(Updater, t("updater.title"));

        try {
            openModal(wrapTab((modalProps: ModalProps) => (
                <ModalRoot {...modalProps} size={ModalSize.MEDIUM}>
                    <ModalContent className="pc-updater-modal">
                        <ModalCloseButton onClick={modalProps.onClose} className="pc-updater-modal-close-button" />
                        <UpdaterTab />
                    </ModalContent>
                </ModalRoot>
            ), "UpdaterModal"));
        } catch {
            handleSettingsTabError();
        }
    };
