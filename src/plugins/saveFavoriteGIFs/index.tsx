/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2025 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { ApplicationCommandInputType } from "@api/Commands";
import { plugin, t } from "@api/i18n";
import { showNotification } from "@api/Notifications";
import { isPluginEnabled } from "@api/PluginManager";
import { definePluginSettings } from "@api/Settings";
import plexcordToolbox from "@plugins/plexcordToolbox";
import { Devs, PcDevs } from "@utils/constants";
import definePlugin, { OptionType } from "@utils/types";
import { saveFile } from "@utils/web";
import { Menu, UserSettingsActionCreators } from "@webpack/common";

async function saveContentToFile(content: string, filename: string) {
    try {
        if (IS_DISCORD_DESKTOP) {
            const data = new TextEncoder().encode(content);
            await DiscordNative.fileManager.saveWithDialog(data, filename);
        } else {
            const file = new File([content], filename, { type: "text/plain" });
            saveFile(file);
        }

        showNotification({
            title: t(plugin.saveFavoriteGIFs.title),
            body: t(plugin.saveFavoriteGIFs.toast.save, { filename }),
            color: "var(--text-positive)",
        });
    } catch (error) {
        console.error(error);
        showNotification({
            title: t(plugin.saveFavoriteGIFs.title),
            body: t(plugin.saveFavoriteGIFs.toast.failed),
            color: "var(--text-danger)",
        });
    }
}

function getGifUrls(): string[] {
    return Object.keys(UserSettingsActionCreators.FrecencyUserSettingsActionCreators.getCurrentValue().favoriteGifs.gifs);
}

async function saveAllGifs() {
    const filename = `favorite-gifs-${new Date().toISOString().split("T")[0]}.txt`;
    const gifUrls = getGifUrls();

    if (gifUrls.length === 0) {
        showNotification({ title: t(plugin.saveFavoriteGIFs.title), body: t(plugin.saveFavoriteGIFs.toast.no) });
        return;
    }

    const content = gifUrls.join("\n");
    await saveContentToFile(content, filename);
}

async function saveWorkingGifs() {
    const gifUrls = getGifUrls();

    if (gifUrls.length === 0) {
        showNotification({ title: t(plugin.saveFavoriteGIFs.title), body: t(plugin.saveFavoriteGIFs.toast.no) });
        return;
    }

    showNotification({
        title: t(plugin.saveFavoriteGIFs.title),
        body: t(plugin.saveFavoriteGIFs.toast.testing, { count: gifUrls.length }),
    });

    const workingUrls: string[] = [];

    await Promise.all(gifUrls.map(async url => {
        try {
            const response = await fetch(url, { method: "HEAD" });
            if (response.ok) workingUrls.push(url);
        } catch (e) {
            try {
                const response = await fetch(url);
                if (response.ok) workingUrls.push(url);
            } catch (err) { }
        }
    }));

    if (workingUrls.length === 0) {
        showNotification({ title: t(plugin.saveFavoriteGIFs.title), body: t(plugin.saveFavoriteGIFs.toast.noneWorking) });
        return;
    }

    const filename = `working-gifs-${new Date().toISOString().split("T")[0]}.txt`;
    const content = workingUrls.join("\n");

    await saveContentToFile(content, filename);

    showNotification({
        title: t(plugin.saveFavoriteGIFs.title),
        body: t(plugin.saveFavoriteGIFs.toast.saved, { broken: gifUrls.length - workingUrls.length, saved: workingUrls.length }),
        color: "var(--text-positive)",
    });
}

const settings = definePluginSettings({
    showToolboxButton: {
        label: () => t(plugin.saveFavoriteGIFs.option.showToolboxButton.label),
        description: () => t(plugin.saveFavoriteGIFs.option.showToolboxButton.description),
        type: OptionType.BOOLEAN,
        default: true,
        restartNeeded: true,
        get hidden() {
            return !isPluginEnabled(plexcordToolbox.name);
        }
    }
});

export default definePlugin({
    name: "SaveFavoriteGIFs",
    description: () => t(plugin.saveFavoriteGIFs.description),
    authors: [Devs.thororen, PcDevs.MutanPlex],
    settings,
    commands: [
        {
            name: "savegifs",
            description: () => t(plugin.saveFavoriteGIFs.command.savegifs.description),
            inputType: ApplicationCommandInputType.BUILT_IN,
            execute: saveAllGifs
        },
        {
            name: "saveworkinggifs",
            description: () => t(plugin.saveFavoriteGIFs.command.saveworkinggifs.description),
            inputType: ApplicationCommandInputType.BUILT_IN,
            execute: saveWorkingGifs
        }
    ],
    toolboxActions() {
        const { showToolboxButton } = settings.use(["showToolboxButton"]);
        if (!showToolboxButton) return null;

        return (
            <Menu.MenuItem
                id="save-favorite-gifs-toolbox"
                label={t(plugin.saveFavoriteGIFs.toolbox)}
                action={saveAllGifs}
            />
        );
    }
});
