/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2025 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import "./style.css";

import { t } from "@api/i18n";
import { definePluginSettings } from "@api/Settings";
import ErrorBoundary from "@components/ErrorBoundary";
import { Heading } from "@components/Heading";
import { Paragraph } from "@components/Paragraph";
import { OptionType } from "@utils/types";
import { Button, showToast, Toasts, useState } from "@webpack/common";
import { JSX } from "react";

import { d, DownloadifyLogger, DownloadifyNative } from "./utils/definitions";
import { getFormattedNow } from "./utils/misc";

function DefaultDirectorySetting(): JSX.Element {
    const { defaultDirectory } = settings.use(["defaultDirectory"]);
    const [isDialogueOpen, setDialogueOpen] = useState(false);

    const handlePickDirectory = async () => {
        try {
            setDialogueOpen(true);
            const directory = await DownloadifyNative.getDirectory();
            directory && (settings.store.defaultDirectory = directory);
        } catch (error) {
            DownloadifyLogger.error(`[${getFormattedNow()}] [FAILED TO SET DOWNLOAD DIRECTORY]`, error);
            showToast(t("plugin.downloadify.failedDirectory"), Toasts.Type.FAILURE, { duration: 3000 });
        } finally {
            setDialogueOpen(false);
        }
    };

    const handleClearDirectory = () => {
        settings.store.defaultDirectory = "";
    };

    return (
        <ErrorBoundary>
            <section>
                <Heading className={d("form-title")}>
                    {t("plugin.downloadify.modal.title")}
                </Heading>
                <Paragraph className={d("form-description")}>
                    {t("plugin.downloadify.modal.description")}
                </Paragraph>
                <div className={d("directory-container")}>
                    <Paragraph className={d("directory-display")}>
                        {defaultDirectory || t("plugin.downloadify.noDirectory")}
                    </Paragraph>
                    <div className={d("directory-buttons")}>
                        <Button
                            disabled={isDialogueOpen}
                            className={d("directory-button", "browse-button", { "disabled": isDialogueOpen })}
                            onClick={handlePickDirectory}
                            color={Button.Colors.CUSTOM}
                        >
                            {isDialogueOpen ? t("plugin.downloadify.modal.browsing") : t("plugin.downloadify.modal.browse")}
                        </Button>
                        <Button
                            disabled={!defaultDirectory || isDialogueOpen}
                            className={d("directory-button", "clear-button", { "disabled": !defaultDirectory || isDialogueOpen })}
                            onClick={handleClearDirectory}
                            color={Button.Colors.CUSTOM}
                        >
                            {t("plugin.downloadify.modal.clear")}
                        </Button>
                    </div>
                </div>
            </section>
        </ErrorBoundary>
    );
}

export const settings = definePluginSettings({
    displayStatus: {
        get label() {
            return t("plugin.downloadify.option.displayStatus.label");
        },
        get description() {
            return t("plugin.downloadify.option.displayStatus.description");
        },
        type: OptionType.BOOLEAN,
        default: true,
    },
    statusDuration: {
        get label() {
            return t("plugin.downloadify.option.statusDuration.label");
        },
        get description() {
            return t("plugin.downloadify.option.statusDuration.description");
        },
        type: OptionType.SLIDER,
        markers: [1, 3, 5],
        default: 2.5,
        stickToMarkers: false,
    },
    voiceMessages: {
        get label() {
            return t("plugin.downloadify.option.voiceMessages.label");
        },
        get description() {
            return t("plugin.downloadify.option.voiceMessages.description");
        },
        type: OptionType.BOOLEAN,
        default: true,
    },
    allowUnicode: {
        get label() {
            return t("plugin.downloadify.option.allowUnicode.label");
        },
        get description() {
            return t("plugin.downloadify.option.allowUnicode.description");
        },
        type: OptionType.BOOLEAN,
        default: true,
    },
    overwriteFiles: {
        get label() {
            return t("plugin.downloadify.option.overwriteFiles.label");
        },
        get description() {
            return t("plugin.downloadify.option.overwriteFiles.description");
        },
        type: OptionType.BOOLEAN,
        default: false,
    },
    defaultDirectory: {
        get label() {
            return t("plugin.downloadify.option.defaultDirectory.label");
        },
        component: DefaultDirectorySetting,
        type: OptionType.COMPONENT,
        default: "",
    },
});
