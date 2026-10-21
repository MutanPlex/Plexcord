/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2026 Vendicated and contributors
 * Copyright (c) 2026 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { plugin, t } from "@api/i18n";
import { Button } from "@components/Button";
import { HeadingPrimary } from "@components/Heading";
import { SettingsTab, wrapTab } from "@components/settings";
import { GuildStore, React, SearchableSelect, SelectedGuildStore, useStateFromStores } from "@webpack/common";

import { cl } from "../index";
import { PresetSection } from "../utils/storage";
import { PresetManager } from "./presetManager";

function ProfileSetsTab() {
    const [section, setSection] = React.useState<PresetSection>("main");
    const lastSelectedGuildId = useStateFromStores(
        [SelectedGuildStore],
        () => SelectedGuildStore.getLastSelectedGuildId() ?? SelectedGuildStore.getGuildId()
    );

    const guildOptions = React.useMemo(
        () => GuildStore.getGuildsArray()
            .map(guild => ({ label: guild.name, value: guild.id }))
            .sort((a, b) => a.label.localeCompare(b.label)),
        []
    );

    const [guildId, setGuildId] = React.useState<string | undefined>(lastSelectedGuildId ?? guildOptions[0]?.value);

    return (
        <SettingsTab>
            <HeadingPrimary className={cl("tab-heading")}>{t(plugin.profileSets.text.profileSets)}</HeadingPrimary>

            <div className={cl("section-switch")}>
                <Button
                    size="small"
                    variant={section === "main" ? "primary" : "secondary"}
                    onClick={() => setSection("main")}
                >
                    {t(plugin.profileSets.text.mainProfile)}
                </Button>
                <Button
                    size="small"
                    variant={section === "server" ? "primary" : "secondary"}
                    onClick={() => setSection("server")}
                >
                    {t(plugin.profileSets.text.serverProfiles)}
                </Button>
            </div>

            {section === "server" && (
                <div className={cl("guild-picker")}>
                    <SearchableSelect
                        options={guildOptions}
                        value={guildId}
                        placeholder={t(plugin.profileSets.text.selectAServer)}
                        clearable={false}
                        closeOnSelect={true}
                        onChange={v => setGuildId(v as string)}
                    />
                </div>
            )}

            {section === "server" && !guildId ? (
                <p className={cl("empty-state")}>{t(plugin.profileSets.text.youAreNotIn)}</p>
            ) : (
                <PresetManager section={section} guildId={section === "server" ? guildId : undefined} />
            )}
        </SettingsTab>
    );
}

export default wrapTab(ProfileSetsTab, t(plugin.profileSets.text.profileSets));
