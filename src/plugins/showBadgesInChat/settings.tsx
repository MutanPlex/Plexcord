/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2024 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { t } from "@api/i18n";
import { definePluginSettings } from "@api/Settings";
import { BaseText } from "@components/BaseText";
import { OptionType } from "@utils/types";
import { useEffect, UserStore, useState } from "@webpack/common";

const settings = definePluginSettings({
    showPlexcordDonor: {
        get label() {
            return t("plugin.showBadgesInChat.option.showPlexcordDonor.label");
        },
        get description() {
            return t("plugin.showBadgesInChat.option.showPlexcordDonor.description");
        },
        type: OptionType.BOOLEAN,
        hidden: true,
        default: true
    },
    plexcordDonorPosition: {
        get label() {
            return t("plugin.showBadgesInChat.option.plexcordDonorPosition.label");
        },
        get description() {
            return t("plugin.showBadgesInChat.option.plexcordDonorPosition.description");
        },
        type: OptionType.NUMBER,
        hidden: true,
        default: 0
    },
    showPlexcordContributor: {
        get label() {
            return t("plugin.showBadgesInChat.option.showPlexcordContributor.label");
        },
        get description() {
            return t("plugin.showBadgesInChat.option.showPlexcordContributor.description");
        },
        type: OptionType.BOOLEAN,
        hidden: true,
        default: true
    },
    plexcordContributorPosition: {
        get label() {
            return t("plugin.showBadgesInChat.option.plexcordContributorPosition.label");
        },
        get description() {
            return t("plugin.showBadgesInChat.option.plexcordContributorPosition.description");
        },
        type: OptionType.NUMBER,
        hidden: true,
        default: 1
    },
    showDiscordProfile: {
        get label() {
            return t("plugin.showBadgesInChat.option.showDiscordProfile.label");
        },
        get description() {
            return t("plugin.showBadgesInChat.option.showDiscordProfile.description");
        },
        type: OptionType.BOOLEAN,
        hidden: true,
        default: true
    },
    discordProfilePosition: {
        get label() {
            return t("plugin.showBadgesInChat.option.discordProfilePosition.label");
        },
        get description() {
            return t("plugin.showBadgesInChat.option.discordProfilePosition.description");
        },
        type: OptionType.NUMBER,
        hidden: true,
        default: 6
    },
    showDiscordNitro: {
        get label() {
            return t("plugin.showBadgesInChat.option.showDiscordNitro.label");
        },
        get description() {
            return t("plugin.showBadgesInChat.option.showDiscordNitro.description");
        },
        type: OptionType.BOOLEAN,
        hidden: true,
        default: true
    },
    discordNitroPosition: {
        get label() {
            return t("plugin.showBadgesInChat.option.discordNitroPosition.label");
        },
        get description() {
            return t("plugin.showBadgesInChat.option.discordNitroPosition.description");
        },
        type: OptionType.NUMBER,
        hidden: true,
        default: 7
    },
    badgeSettings: {
        get label() {
            return t("plugin.showBadgesInChat.option.badgeSettings.label");
        },
        get description() {
            return t("plugin.showBadgesInChat.option.badgeSettings.description");
        },
        type: OptionType.COMPONENT,
        component: () => <BadgeSettings />
    }
});

export default settings;

const BadgeSettings = () => {
    const [images, setImages] = useState([
        { src: "https://cdn.nest.rip/uploads/78cb1e77-b7a6-4242-9089-e91f866159bf.png", shown: settings.store.showPlexcordDonor, title: t("plugin.showBadgesInChat.badge.plexcord"), key: "PlexcordDonor", position: settings.store.plexcordDonorPosition },
        { src: "https://plexcord.club/favicon.png", shown: settings.store.showPlexcordContributor, title: t("plugin.showBadgesInChat.badge.contributor"), key: "PlexcordContributor", position: settings.store.plexcordContributorPosition },
        { src: "https://cdn.discordapp.com/badge-icons/bf01d1073931f921909045f3a39fd264.png", shown: settings.store.showDiscordProfile, title: t("plugin.showBadgesInChat.badge.discordProfile"), key: "DiscordProfile", position: settings.store.discordProfilePosition },
        { src: "https://cdn.discordapp.com/badge-icons/2ba85e8026a8614b640c2837bcdfe21b.png", shown: settings.store.showDiscordNitro, title: t("plugin.showBadgesInChat.badge.nitro"), key: "DiscordNitro", position: settings.store.discordNitroPosition }
    ]);

    useEffect(() => {
        images.forEach(image => {
            switch (image.key) {
                case "PlexcordDonor":
                    settings.store.plexcordDonorPosition = image.position;
                    settings.store.showPlexcordDonor = image.shown;
                    break;
                case "PlexcordContributor":
                    settings.store.plexcordContributorPosition = image.position;
                    settings.store.showPlexcordContributor = image.shown;
                    break;
                case "DiscordProfile":
                    settings.store.discordProfilePosition = image.position;
                    settings.store.showDiscordProfile = image.shown;
                    break;
                case "DiscordNitro":
                    settings.store.discordNitroPosition = image.position;
                    settings.store.showDiscordNitro = image.shown;
                    break;
                default:
                    break;
            }
        });
    }, [images]);

    const handleDragStart = (e: any, index: number) => {
        if (!images[index].shown) {
            e.preventDefault();
        } else {
            e.dataTransfer.setData("index", index);
        }
    };

    const handleDragOver = e => {
        e.preventDefault();
    };

    const handleDrop = (e: any, dropIndex: number) => {
        const dragIndex = e.dataTransfer.getData("index");
        const newImages = [...images];
        const draggedImage = newImages[dragIndex];

        newImages.splice(dragIndex, 1);
        newImages.splice(dropIndex, 0, draggedImage);

        newImages.forEach((image, index) => {
            image.position = index;
        });

        setImages(newImages);
    };

    const toggleDisable = (index: number) => {
        const newImages = [...images];
        newImages[index].shown = !newImages[index].shown;
        setImages(newImages);
    };

    return (
        <>
            <BaseText>{t("plugin.showBadgesInChat.option.badgeSettings.modal")}</BaseText>
            <div className="pc-sbic-badge-settings">
                <img className="pc-sbic-settings-avatar" src={UserStore.getCurrentUser().getAvatarURL()}></img>
                <BaseText className="pc-sbic-settings-username">{(UserStore.getCurrentUser() as any).globalName}</BaseText>
                {images
                    .sort((a, b) => a.position - b.position)
                    .map((image, index) => (
                        <div
                            key={image.key}
                            className={`pc-sbic-image-container ${!image.shown ? "pc-sbic-disabled" : ""}`}
                            onDragOver={e => handleDragOver(e)}
                            onDrop={e => handleDrop(e, index)}
                            onClick={() => toggleDisable(index)}
                        >
                            <img
                                src={image.src}
                                draggable={image.shown}
                                onDragStart={e => handleDragStart(e, index)}
                                title={image.title}
                            />
                        </div>
                    ))
                }
            </div>
        </>
    );
};
