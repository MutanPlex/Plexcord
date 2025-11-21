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

import "./styles.css";

import { t, tJsx } from "@api/i18n";
import { Card } from "@components/Card";
import { Heading } from "@components/Heading";
import { Link } from "@components/Link";
import { Paragraph } from "@components/Paragraph";
import { SettingsTab, wrapTab } from "@components/settings/tabs/BaseTab";
import { getStylusWebStoreUrl } from "@utils/web";
import { React, TabBar, useState } from "@webpack/common";

import { CspErrorCard } from "./CspErrorCard";
import { LocalThemesTab } from "./LocalThemesTab";
import { OnlineThemesTab } from "./OnlineThemesTab";

const enum ThemeTab {
    LOCAL,
    ONLINE
}

function ThemesTab() {
    const [currentTab, setCurrentTab] = useState(ThemeTab.LOCAL);

    return (
        <SettingsTab title={t("themes.title")}>
            <TabBar
                type="top"
                look="brand"
                className="pc-settings-tab-bar"
                selectedItem={currentTab}
                onItemSelect={setCurrentTab}
            >
                <TabBar.Item
                    className="pc-settings-tab-bar-item"
                    id={ThemeTab.LOCAL}
                >
                    {t("themes.local")}
                </TabBar.Item>
                <TabBar.Item
                    className="pc-settings-tab-bar-item"
                    id={ThemeTab.ONLINE}
                >
                    {t("themes.online")}
                </TabBar.Item>
            </TabBar>

            <CspErrorCard />

            {currentTab === ThemeTab.LOCAL && <LocalThemesTab />}
            {currentTab === ThemeTab.ONLINE && <OnlineThemesTab />}
        </SettingsTab>
    );
}

function UserscriptThemesTab() {
    return (
        <SettingsTab title={t("themes.title")}>
            <Card variant="danger">
                <Heading>{t("themes.error.userscript")}</Heading>

                <Paragraph>
                    {tJsx("themes.error.stylus", {
                        stylus: <Link href={getStylusWebStoreUrl()}>{t("themes.stylus")}</Link>
                    })}
                </Paragraph>
            </Card>
        </SettingsTab>
    );
}

export default IS_USERSCRIPT
    ? wrapTab(UserscriptThemesTab, t("themes.title"))
    : wrapTab(ThemesTab, t("themes.title"));
