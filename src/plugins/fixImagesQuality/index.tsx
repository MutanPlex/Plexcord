/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2024 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { plugin, t } from "@api/i18n";
import { definePluginSettings } from "@api/Settings";
import { Card } from "@components/Card";
import { Flex } from "@components/Flex";
import { Margins } from "@components/margins";
import { Paragraph } from "@components/Paragraph";
import { Devs } from "@utils/constants";
import { Logger } from "@utils/Logger";
import definePlugin, { OptionType } from "@utils/types";

const settings = definePluginSettings({
    originalImagesInChat: {
        label: () => t(plugin.fixImagesQuality.option.originalImagesInChat.label),
        description: () => t(plugin.fixImagesQuality.option.originalImagesInChat.description),
        type: OptionType.BOOLEAN,
        default: false,
    }
});

export default definePlugin({
    name: "FixImagesQuality",
    description: () => t(plugin.fixImagesQuality.description),
    authors: [Devs.Nuckyz, Devs.Ven],
    settings,

    patches: [
        {
            find: ".handleImageLoad)",
            replacement: {
                match: /getSrc\(\i\)\{/,
                replace: "$&var _vcSrc=$self.getSrc(this.props);if(_vcSrc)return _vcSrc;"
            }
        }
    ],

    settingsAboutComponent() {
        return (
            <Card variant="primary">
                <Flex flexDirection="column" gap="4px">
                    <Paragraph size="md" weight="semibold">{t(plugin.fixImagesQuality.modal.about.title)}</Paragraph>
                    <Paragraph>
                        <ul>
                            <li>{t(plugin.fixImagesQuality.modal.about.body)}</li>
                            <li>{t(plugin.fixImagesQuality.modal.about.body2)}</li>
                        </ul>
                    </Paragraph>
                    <Paragraph size="md" weight="semibold" className={Margins.top8}>{t(plugin.fixImagesQuality.modal.about.body3)}</Paragraph>
                    <Paragraph>
                        <ul>
                            <li>{t(plugin.fixImagesQuality.modal.about.warning)}</li>
                            <li>{t(plugin.fixImagesQuality.modal.about.warning2)}</li>
                        </ul>
                    </Paragraph>
                </Flex>
            </Card>
        );
    },

    getSrc(props: { src: string; width: number; height: number; contentType: string; mosaicStyleAlt?: boolean; trigger?: string; }, freeze?: boolean) {
        if (!props?.src) return;

        try {
            const { contentType, height, src, width, mosaicStyleAlt, trigger } = props;
            // Embed images do not have a content type set.
            // It's difficult to differentiate between images and videos. but mosaicStyleAlt seems exclusive to images
            const isImage = contentType?.startsWith("image/") ?? (typeof mosaicStyleAlt === "boolean");
            if (!isImage || src.startsWith("data:")) return;

            const url = new URL(src);
            if (!url.pathname.startsWith("/attachments/")) return;
            url.searchParams.set("animated", String(!freeze));
            if (freeze && url.pathname.endsWith(".gif")) {
                // gifs don't support animated=false, so we have no choice but to use webp
                url.searchParams.set("format", "webp");
            }

            const isModal = !!trigger;
            if (!settings.store.originalImagesInChat && !isModal) {
                // make sure the image is not too large
                const pixels = width * height;
                const limit = 2000 * 1200;

                if (pixels <= limit)
                    return url.toString();

                const scale = Math.sqrt(pixels / limit);
                url.searchParams.set("width", Math.round(width / scale).toString());
                url.searchParams.set("height", Math.round(height / scale).toString());
                return url.toString();
            }

            url.hostname = "cdn.discordapp.com";
            return url.toString();
        } catch (e) {
            new Logger("FixImagesQuality").error("Failed to make image src", e);
            return;
        }
    }
});
