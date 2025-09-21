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
import { Link } from "@components/Link";
import { handleSettingsTabError, SettingsTab, wrapTab } from "@components/settings/tabs/BaseTab";
import { Margins } from "@utils/margins";
import { ModalCloseButton, ModalContent, ModalProps, ModalRoot, ModalSize, openModal } from "@utils/modal";
import { useAwaiter } from "@utils/react";
import { getRepo, isNewer, UpdateLogger } from "@utils/updater";
import { Forms, React, Switch } from "@webpack/common";

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
            <Forms.FormTitle tag="h5">{t("updater.settings")}</Forms.FormTitle>
            <Switch
                value={settings.autoUpdate}
                onChange={(v: boolean) => settings.autoUpdate = v}
                note={t("updater.automatically.description")}
            >
                {t("updater.automatically.label")}
            </Switch>
            <Switch
                value={settings.autoUpdateNotification}
                onChange={(v: boolean) => settings.autoUpdateNotification = v}
                note={t("updater.notify.description")}
                disabled={!settings.autoUpdate}
            >
                {t("updater.notify.label")}
            </Switch>

            <Forms.FormTitle tag="h5">{t("updater.repo")}</Forms.FormTitle>

            <Forms.FormText>
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
            </Forms.FormText>

            <Forms.FormDivider className={Margins.top8 + " " + Margins.bottom8} />

            <Forms.FormTitle tag="h5">{t("updater.updates")}</Forms.FormTitle>

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
