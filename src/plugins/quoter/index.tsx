/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2024 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { findGroupChildrenByChildId } from "@api/ContextMenu";
import { plugin, t } from "@api/i18n";
import { definePluginSettings } from "@api/Settings";
import { BaseText } from "@components/BaseText";
import { Button } from "@components/Button";
import { FormSwitch } from "@components/FormSwitch";
import { QuoteIcon } from "@components/Icons";
import { Message } from "@plexcord/discord-types";
import { Devs, PcDevs } from "@utils/constants";
import { getCurrentChannel } from "@utils/discord";
import { ModalCloseButton, ModalContent, ModalHeader, ModalProps, ModalRoot, ModalSize, openModal } from "@utils/modal";
import definePlugin, { OptionType } from "@utils/types";
import { Menu, UploadHandler, useEffect, useState } from "@webpack/common";

import { QuoteFont } from "./types";
import { createQuoteImage, ensureFontLoaded, generateFileNamePreview, getFileExtension, getMimeType, resetFontLoading, sizeUpgrade } from "./utils";

const settings = definePluginSettings({
    quoteFont: {
        label: () => t(plugin.quoter.option.quoteFont.label),
        description: () => t(plugin.quoter.option.quoteFont.description),
        type: OptionType.SELECT,
        options: [
            { label: () => t(plugin.quoter.option.quoteFont.mPlusRounded), value: QuoteFont.MPlusRounded, default: true },
            { label: () => t(plugin.quoter.option.quoteFont.openSans), value: QuoteFont.OpenSans },
            { label: () => t(plugin.quoter.option.quoteFont.momoSignature), value: QuoteFont.MomoSignature },
            { label: () => t(plugin.quoter.option.quoteFont.lora), value: QuoteFont.Lora },
            { label: () => t(plugin.quoter.option.quoteFont.merriWeather), value: QuoteFont.Merriweather }
        ]
    },
    watermark: {
        label: () => t(plugin.quoter.option.watermark.label),
        description: () => t(plugin.quoter.option.watermark.description),
        type: OptionType.STRING,
        default: "Made with Plexcord",
        hidden: true
    },
    grayscale: {
        label: () => t(plugin.quoter.option.grayscale.label),
        description: () => t(plugin.quoter.option.grayscale.description),
        type: OptionType.BOOLEAN,
        default: true,
        hidden: true
    },
    showWatermark: {
        label: () => t(plugin.quoter.option.showWatermark.label),
        description: () => t(plugin.quoter.option.showWatermark.description),
        type: OptionType.BOOLEAN,
        default: true,
        hidden: true
    },
    saveAsGif: {
        label: () => t(plugin.quoter.option.saveAsGif.label),
        description: () => t(plugin.quoter.option.saveAsGif.description),
        type: OptionType.BOOLEAN,
        default: false,
        hidden: true
    }
});

export default definePlugin({
    name: "Quoter",
    description: () => t(plugin.quoter.description),
    authors: [Devs.Samwich, Devs.thororen, PcDevs.MutanPlex, PcDevs.neoarz, PcDevs.Prism],
    settings,

    contextMenus: {
        "message": (children, { message }) => {
            if (!message.content) return;
            const buttonElement = (
                <Menu.MenuItem
                    id="pc-quote"
                    label={t(plugin.quoter.context.quote)}
                    icon={QuoteIcon}
                    action={() => openModal(props => <QuoteModal message={message} {...props} />)}
                />
            );

            const group = findGroupChildrenByChildId("copy-text", children);
            if (!group) children.push(buttonElement);
            else group.splice(group.findIndex(c => c?.props?.id === "copy-text") + 1, 0, buttonElement);
        }
    },

    async start() {
        await ensureFontLoaded();
    },

    stop() {
        const style = document.getElementById("quoter-font-style");
        if (style) style.remove();
        resetFontLoading();
    },
});

function QuoteModal({ message, ...props }: ModalProps & { message: Message; }) {
    const [gray, setGray] = useState(settings.store.grayscale);
    const [showWatermark, setShowWatermark] = useState(settings.store.showWatermark);
    const [saveAsGif, setSaveAsGif] = useState(settings.store.saveAsGif);
    const [watermarkText, setWatermarkText] = useState(settings.store.watermark);
    const [quoteImage, setQuoteImage] = useState<Blob | null>(null);
    const [previewUrl, setPreviewUrl] = useState<string | null>(null);
    const { quoteFont } = settings.store;

    useEffect(() => {
        settings.store.grayscale = gray;
        settings.store.showWatermark = showWatermark;
        settings.store.saveAsGif = saveAsGif;
    }, [gray, showWatermark, saveAsGif]);

    const generateImage = async () => {
        const image = await createQuoteImage({
            avatarUrl: sizeUpgrade(message.author.getAvatarURL()),
            quote: message.content,
            grayScale: gray,
            author: message.author,
            watermark: watermarkText,
            showWatermark,
            saveAsGif,
            quoteFont
        });
        setQuoteImage(image);
        if (previewUrl) URL.revokeObjectURL(previewUrl);

        const newUrl = URL.createObjectURL(image);
        setPreviewUrl(newUrl);
        document.getElementById("quoterPreview")?.setAttribute("src", newUrl);
    };

    useEffect(() => { generateImage(); }, [gray, showWatermark, saveAsGif, watermarkText, quoteFont]);

    useEffect(() => {
        return () => {
            if (previewUrl) {
                URL.revokeObjectURL(previewUrl);
            }
        };
    }, [previewUrl]);

    const handleExport = () => {
        if (!quoteImage) return;
        const preview = generateFileNamePreview(message.content);
        const extension = getFileExtension(saveAsGif);
        const url = URL.createObjectURL(quoteImage);
        const link = document.createElement("a");
        link.href = url;
        link.download = `${preview} - ${message.author.username}.${extension}`;
        link.click();
        link.remove();

        URL.revokeObjectURL(url);
    };

    const handleSendInChat = () => {
        if (!quoteImage) return;

        const channel = getCurrentChannel();
        if (!channel) return;

        const preview = generateFileNamePreview(message.content);
        const extension = getFileExtension(saveAsGif);
        const mimeType = getMimeType(saveAsGif);

        const file = new File([quoteImage], `${preview} - ${message.author.username}.${extension}`, { type: mimeType });

        UploadHandler.promptToUpload([file], channel, 0);
        props.onClose?.();
    };

    return (
        <ModalRoot {...props} size={ModalSize.MEDIUM}>
            <ModalHeader separator={false}>
                <BaseText color="text-strong" size="lg" weight="semibold" tag="h1" style={{ flexGrow: 1 }}>
                    {t(plugin.quoter.modal.title)}
                </BaseText>
                <ModalCloseButton onClick={props.onClose} />
            </ModalHeader>
            <ModalContent scrollbarType="none">
                <img alt="Quote preview" src="" id="quoterPreview" style={{ borderRadius: "20px", width: "100%", marginBottom: "20px" }} />
                <FormSwitch title={t(plugin.quoter.modal.grayscale)} value={gray} onChange={setGray} />
                <FormSwitch
                    title={t(plugin.quoter.modal.saveAsGIF)}
                    value={saveAsGif}
                    onChange={setSaveAsGif}
                    description={t(plugin.quoter.modal.saveDescription)}
                />
                <div style={{ display: "flex", gap: "8px", marginTop: "16px", marginBottom: "16px" }}>
                    <Button variant="secondary" size="small" onClick={handleExport}>{t(plugin.quoter.modal.export)}</Button>
                    <Button variant="secondary" size="small" onClick={handleSendInChat}>{t(plugin.quoter.modal.send)}</Button>
                </div>
            </ModalContent>
        </ModalRoot>
    );
}
