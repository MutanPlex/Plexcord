/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2024 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { definePluginSettings } from "@api/Settings";
import { OptionType } from "@utils/types";
import { Text, useEffect, UserStore, useState } from "@webpack/common";

const settings = definePluginSettings({
    showPlexcordDonor: {
        type: OptionType.BOOLEAN,
        description: "Enable to show Plexcord Donor badges in chat.",
        hidden: true,
        default: true
    },
    PlexcordDonorPosition: {
        type: OptionType.NUMBER,
        description: "The position of the Plexcord Donor badges.",
        hidden: true,
        default: 0
    },
    showPlexcordContributor: {
        type: OptionType.BOOLEAN,
        description: "Enable to show Plexcord Contributor badges in chat.",
        hidden: true,
        default: true
    },
    PlexcordContributorPosition: {
        type: OptionType.NUMBER,
        description: "The position of the Plexcord Contributor badge.",
        hidden: true,
        default: 1
    },
    showDiscordProfile: {
        type: OptionType.BOOLEAN,
        description: "Enable to show Discord profile badges in chat.",
        hidden: true,
        default: true
    },
    DiscordProfilePosition: {
        type: OptionType.NUMBER,
        description: "The position of the Discord profile badges.",
        hidden: true,
        default: 6
    },
    showDiscordNitro: {
        type: OptionType.BOOLEAN,
        description: "Enable to show Discord Nitro badges in chat.",
        hidden: true,
        default: true
    },
    DiscordNitroPosition: {
        type: OptionType.NUMBER,
        description: "The position of the Discord Nitro badge.",
        hidden: true,
        default: 7
    },
    badgeSettings: {
        type: OptionType.COMPONENT,
        description: "Setup badge layout and visibility",
        component: () => <BadgeSettings />
    }
});

export default settings;

const BadgeSettings = () => {
    const [images, setImages] = useState([
        { src: "https://cdn.nest.rip/uploads/78cb1e77-b7a6-4242-9089-e91f866159bf.png", shown: settings.store.showPlexcordDonor, title: "Plexcord donor badges", key: "PlexcordDonor", position: settings.store.PlexcordDonorPosition },
        { src: "https://plexcord.club/favicon.png", shown: settings.store.showPlexcordContributor, title: "Plexcord contributor badge", key: "PlexcordContributor", position: settings.store.PlexcordContributorPosition },
        { src: "https://cdn.discordapp.com/badge-icons/bf01d1073931f921909045f3a39fd264.png", shown: settings.store.showDiscordProfile, title: "Discord profile badges (HypeSquad, Discord Staff, Active Developer, etc.)", key: "DiscordProfile", position: settings.store.DiscordProfilePosition },
        { src: "https://cdn.discordapp.com/badge-icons/2ba85e8026a8614b640c2837bcdfe21b.png", shown: settings.store.showDiscordNitro, title: "Nitro badge", key: "DiscordNitro", position: settings.store.DiscordNitroPosition }
    ]);

    useEffect(() => {
        images.forEach(image => {
            switch (image.key) {
                case "PlexcordDonor":
                    settings.store.PlexcordDonorPosition = image.position;
                    settings.store.showPlexcordDonor = image.shown;
                    break;
                case "PlexcordContributor":
                    settings.store.PlexcordContributorPosition = image.position;
                    settings.store.showPlexcordContributor = image.shown;
                    break;
                case "DiscordProfile":
                    settings.store.DiscordProfilePosition = image.position;
                    settings.store.showDiscordProfile = image.shown;
                    break;
                case "DiscordNitro":
                    settings.store.DiscordNitroPosition = image.position;
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
            <Text>Drag the badges to reorder them, you can click to enable/disable a specific badge type.</Text>
            <div className="pc-sbic-badge-settings">
                <img className="pc-sbic-settings-avatar" src={UserStore.getCurrentUser().getAvatarURL()}></img>
                <Text className="pc-sbic-settings-username">{(UserStore.getCurrentUser() as any).globalName}</Text>
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
