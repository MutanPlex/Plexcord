/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2023 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */


import * as DataStore from "@api/DataStore";
import { definePluginSettings } from "@api/Settings";
import { disableStyle, enableStyle } from "@api/Styles";
import { User } from "@plexcord/discord-types";
import { Devs, PcDevs } from "@utils/constants";
import definePlugin, { OptionType, Plugin } from "@utils/types";
import { findStoreLazy } from "@webpack";

import style from "./style.css?managed";

interface iUSRBG extends Plugin {
    userHasBackground(userId: string);
    getImageUrl(userId: string): string | null;
}

interface Nameplate {
    imgAlt: string;
    palette: {
        darkBackground: string;
        lightBackground: string;
        name: string;
    };
    src: string;
}

const settings = definePluginSettings({
    animate: {
        description: "Animate banners",
        type: OptionType.BOOLEAN,
        default: false
    },
    preferNameplate: {
        description: "prefer nameplate over banner",
        type: OptionType.BOOLEAN,
        default: false
    },
});

const DATASTORE_KEY = "bannersEverywhere";

const UserProfileStore = findStoreLazy("UserProfileStore");


export default definePlugin({
    name: "BannersEverywhere",
    description: "Displays banners in the member list ",
    authors: [Devs.ImLvna, Devs.AutumnVN, PcDevs.MutanPlex],
    settings,
    patches: [
        {
            find: "#{intl::GUILD_OWNER}),",
            replacement: [
                {
                    // We add the banner as a property while we can still access the user id
                    match: /user:(\i).{0,150}nameplate:(\i).*?name:null.*?(?=avatar:)/,
                    replace: "$&banner:$self.memberListBannerHook($1, $2),",
                },
                {
                    match: /(?<=\),nameplate:)(\i)/,
                    replace: "$self.nameplate($1)"
                }
            ]
        },
        {
            find: "role:\"listitem\",innerRef",
            replacement: {
                // We cant access the user id here, so we take the banner property we set earlier
                match: /focusProps.\i\}=(\i).*?children:\[/,
                replace: "$&$1.banner,"
            }
        }
    ],

    data: {},

    async start() {
        enableStyle(style);
        this.data = await DataStore.get(DATASTORE_KEY) || {};
    },

    stop() {
        disableStyle(style);
        DataStore.set(DATASTORE_KEY, this.data);
    },

    nameplate(nameplate: Nameplate | undefined) {
        if (settings.store.preferNameplate) return nameplate;
    },

    memberListBannerHook(user: User, nameplate: Nameplate | undefined) {
        let url = this.getBanner(user.id);
        if (!url) return;
        if (settings.store.preferNameplate && nameplate) return;
        if (!settings.store.animate) {
            // Discord Banners
            url = url.replace(".gif", ".png");
            // Usrbg Banners
            this.gifToPng(url)
                .then(pngUrl => {
                    const imgElement = document.getElementById(`pc-banners-everywhere-${user.id}`) as HTMLImageElement;
                    if (imgElement) {
                        imgElement.src = pngUrl;
                    }
                })
                .catch();
        }

        return (
            <img id={`pc-banners-everywhere-${user.id}`} src={url} className="pc-banners-everywhere-memberlist" alt=""></img>
        );
    },

    async checkImageExists(url: string): Promise<boolean> {
        return new Promise(resolve => {
            const img = new Image();
            img.onload = () => resolve(true);
            img.onerror = () => resolve(false);
            img.src = url;
        });
    },

    async gifToPng(url: string): Promise<string> {
        const exists = await this.checkImageExists(url);
        if (!exists) return "";

        return new Promise((resolve, reject) => {
            const img = new Image();
            img.crossOrigin = "anonymous";
            img.onload = () => {
                const canvas = document.createElement("canvas");
                canvas.width = img.width;
                canvas.height = img.height;
                const ctx = canvas.getContext("2d");
                if (ctx) {
                    ctx.drawImage(img, 0, 0);
                    const pngDataUrl = canvas.toDataURL("image/png");
                    resolve(pngDataUrl);
                } else {
                    reject(new Error("Failed to get canvas context."));
                }
            };
            img.onerror = err => reject(err);
            img.src = url;
        });
    },

    getBanner(userId: string): string | undefined {
        const usrbgPlugin = Plexcord.Plugins.plugins.USRBG as iUSRBG;
        if (Plexcord.Plugins.isPluginEnabled("USRBG") && usrbgPlugin && usrbgPlugin.userHasBackground?.(userId)) {
            let banner = usrbgPlugin.getImageUrl(userId);
            if (banner === null) banner = "";
            return banner;
        }
        const userProfile = UserProfileStore.getUserProfile(userId);
        if (userProfile?.banner) {
            this.data[userId] = `https://cdn.discordapp.com/banners/${userId}/${userProfile.banner}.${userProfile.banner.startsWith("a_") ? "gif" : "png"}`;
            DataStore.set(DATASTORE_KEY, this.data);
        }
        return this.data[userId];
    },
});
