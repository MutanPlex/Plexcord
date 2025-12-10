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

import { t, updater } from "@api/i18n";
import { useSettings } from "@api/Settings";
import { Divider } from "@components/Divider";
import { FormSwitch } from "@components/FormSwitch";
import { Heading } from "@components/Heading";
import { Link } from "@components/Link";
import { Paragraph } from "@components/Paragraph";
import { SettingsTab, wrapTab } from "@components/settings/tabs/BaseTab";
import { Margins } from "@utils/margins";
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
        <SettingsTab>
            <Heading className={Margins.top16}>{t(updater.preferences.title)}</Heading>
            <Paragraph className={Margins.bottom20}>
                {t(updater.preferences.description)}
            </Paragraph>

            <FormSwitch
                title={t(updater.automatically.label)}
                description={t(updater.automatically.description)}
                value={settings.autoUpdate}
                onChange={(v: boolean) => settings.autoUpdate = v}
                hideBorder
            />
            <FormSwitch
                title={t(updater.notify.label)}
                disabled={!settings.autoUpdate}
                value={settings.autoUpdateNotification}
                onChange={(v: boolean) => settings.autoUpdateNotification = v}
                description={t(updater.notify.description)}
                hideBorder
            />

            <Divider className={Margins.top20} />

            <Heading className={Margins.top20}>{t(updater.repo)}</Heading>
            <Paragraph className={Margins.bottom8}>
                {t(updater.repoDescription)}
            </Paragraph>

            <Paragraph color="text-subtle">
                {repoPending
                    ? repo
                    : err
                        ? t(updater.error.retrieve)
                        : (
                            <Link href={repo}>
                                {repo.split("/").slice(-2).join("/")}
                            </Link>
                        )
                }
                {" "}
                (<HashLink hash={gitHash} repo={repo} disabled={repoPending} />)
            </Paragraph>

            <Divider className={Margins.top20} />

            <Heading>{t(updater.updates)}</Heading>

            {isNewer
                ? <Newer {...commonProps} />
                : <Updatable {...commonProps} />
            }
        </SettingsTab>
    );
}

export default IS_UPDATER_DISABLED
    ? null
    : wrapTab(Updater, t(updater.title));
