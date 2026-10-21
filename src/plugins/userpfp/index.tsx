/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2023 Vendicated and contributors
 * Copyright (c) 2026 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import "./styles.css";

import { get } from "@api/DataStore";
import { plugin, t } from "@api/i18n";
import { definePluginSettings } from "@api/Settings";
import { Button } from "@components/Button";
import { Flex } from "@components/Flex";
import { Heart } from "@components/Heart";
import { PencilIcon } from "@components/Icons";
import { Margins } from "@components/margins";
import { Notice } from "@components/Notice";
import { User } from "@plexcord/discord-types";
import { Devs, PcDevs } from "@utils/constants";
import { classNameFactory } from "@utils/css";
import { openInviteModal } from "@utils/discord";
import definePlugin, { OptionType } from "@utils/types";
import { extractAndLoadChunksLazy } from "@webpack";
import { IconUtils, Menu, openModal, UserStore } from "@webpack/common";

import { SetAvatarModal } from "./AvatarModal";

const cl = classNameFactory("pc-userpfp-");
const DONO_URL = "https://ko-fi.com/coolesding";
const INVITE_LINK = "userpfp-1129784704267210844";
const USERPFP_IMG_URL = "https://raw.githubusercontent.com/UserPFP/img";

export const requireSettingsModal = extractAndLoadChunksLazy(['type:"USER_SETTINGS_MODAL_OPEN"']);
export const KEY_DATASTORE = "plexcord-custom-avatars";
export const data = { avatars: {} as Record<string, string> };

const settings = definePluginSettings({
    overrideServerAvatars: {
        label: () => t(plugin.userPFP.option.overrideServerAvatars.label),
        type: OptionType.BOOLEAN,
        description: () => t(plugin.userPFP.option.overrideServerAvatars.description),
        default: true
    },
    preferNitro: {
        label: () => t(plugin.userPFP.option.preferNitro.label),
        description: () => t(plugin.userPFP.option.preferNitro.description),
        type: OptionType.SELECT,
        options: [
            { label: () => t(plugin.userPFP.option.preferNitro.false), value: false },
            { label: () => t(plugin.userPFP.option.preferNitro.true), value: true, default: true },
        ],
    },
    databaseSource: {
        label: () => t(plugin.userPFP.option.databaseSource.label),
        description: () => t(plugin.userPFP.option.databaseSource.description),
        type: OptionType.STRING,
        default: "https://userpfp.github.io/UserPFP/source/data.json",
        hidden: !IS_DEV,
        isValid: (value => {
            if (!value) {
                value = "https://userpfp.github.io/UserPFP/source/data.json";
                return false;
            }
            return true;
        })
    },
});

export default definePlugin({
    name: "UserPFP",
    description: () => t(plugin.userPFP.description),
    tags: ["appearance", "customisation", "servers"],
    authors: [PcDevs.nexpid, Devs.thororen, PcDevs.soapphia, PcDevs.sketchmyname, PcDevs.MutanPlex],
    settings,
    data,
    settingsAboutComponent: () => (
        <>
            <Notice.Info className={Margins.bottom8}>
                {t(plugin.userPFP.text.usingTheSetAvatar)}
            </Notice.Info>
            <Flex className={cl("settings")}>
                <Button
                    variant="link"
                    className={cl("settings-button")}
                    onClick={() => openInviteModal(INVITE_LINK)}
                >
                    {t(plugin.userPFP.text.joinUserpfpServer)}
                </Button>
                <Button
                    variant="secondary"
                    className={cl("settings-button")}
                    onClick={() => PlexcordNative.native.openExternal(DONO_URL)}
                >
                    {t(plugin.userPFP.text.supportHere)} <Heart className={cl("settings-heart")} />
                </Button>
            </Flex>
        </>
    ),
    patches: [
        {
            find: "getUserAvatarURL:",
            replacement: [
                {
                    match: /(getUserAvatarURL:)(\i),/,
                    replace: "$1$self.getAvatarHook($2),"
                },
                {
                    match: /(getGuildMemberAvatarURLSimple:)(\i),/,
                    replace: "$1$self.getAvatarServerHook($2),",
                    predicate: () => settings.store.overrideServerAvatars
                }
            ]
        }
    ],
    contextMenus: {
        "user-context": (children, { user }) => {
            if (!user?.id) return;

            children.push(
                <Menu.MenuSeparator />,
                <Menu.MenuItem
                    label={t(plugin.userPFP.text.setAvatar)}
                    id="set-avatar"
                    icon={PencilIcon}
                    leadingAccessory={{ type: "icon", icon: PencilIcon }}
                    action={async () => {
                        await requireSettingsModal();
                        openModal(modalProps => <SetAvatarModal userId={user.id} modalProps={modalProps} />);
                    }}
                />
            );
        }
    },
    getAvatarHook: (original: any) => (user: User, animated: boolean, size: number) => {
        if (settings.store.preferNitro && user.avatar?.startsWith("a_")) return original(user, animated, size);
        if (!data.avatars[user.id]) return original(user, animated, size);

        const avatarUrl = data.avatars[user.id];

        if (avatarUrl.startsWith("data:")) return avatarUrl;

        try {
            const res = new URL(avatarUrl);
            if (avatarUrl.startsWith(USERPFP_IMG_URL)) {
                res.searchParams.set("animated", animated ? "true" : "false");
                if (!animated) {
                    res.pathname = res.pathname.replaceAll(/\.gifv?/g, ".png");
                }
            }
            return res.toString();
        } catch {
            return original(user, animated, size);
        }
    },
    getAvatarServerHook: (original: any) => (config: any) => {
        const { userId, avatar, size, canAnimate } = config;
        const { avatars } = data;

        if (avatars[userId]) {
            const customUrl = avatars[userId];
            if (customUrl.startsWith("data:")) return customUrl;

            try {
                const res = new URL(customUrl);
                if (size) res.searchParams.set("size", size.toString());
                return res.toString();
            } catch {
                return customUrl;
            }
        }

        if (avatar) {
            const user = UserStore.getUser(userId);
            if (user?.avatar) {
                return IconUtils.getUserAvatarURL(user, canAnimate, size);
            }
        }

        return original(config);
    },
    async start() {
        data.avatars = await get<Record<string, string>>(KEY_DATASTORE) || {};

        await fetch(settings.store.databaseSource)
            .then(res => res.ok && res.json())
            .then(remote => remote?.avatars && Object.assign(data.avatars, remote.avatars))
            .catch(() => null);
    }
});
