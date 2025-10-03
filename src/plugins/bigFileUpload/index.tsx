/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2024 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { ApplicationCommandInputType, ApplicationCommandOptionType, sendBotMessage } from "@api/Commands";
import { NavContextMenuPatchCallback } from "@api/ContextMenu";
import { t } from "@api/i18n";
import { definePluginSettings } from "@api/Settings";
import { Flex } from "@components/Flex";
import { FormSwitch } from "@components/FormSwitch";
import { OpenExternalIcon } from "@components/Icons";
import { CommandArgument, CommandContext } from "@plexcord/discord-types";
import { Devs } from "@utils/constants";
import { insertTextIntoChatInputBox, sendMessage } from "@utils/discord";
import { Margins } from "@utils/margins";
import definePlugin, { OptionType, PluginNative } from "@utils/types";
import { findByPropsLazy } from "@webpack";
import { Button, DraftType, Forms, Menu, PermissionsBits, PermissionStore, React, Select, SelectedChannelStore, showToast, TextInput, Toasts, UploadManager, useEffect, useState } from "@webpack/common";

const Native = PlexcordNative.pluginHelpers.BigFileUpload as PluginNative<typeof import("./native")>;

const UploadStore = findByPropsLazy("getUploads");
const OptionClasses = findByPropsLazy("optionName", "optionIcon", "optionLabel");

function createCloneableStore(initialState: any) {
    const store = { ...initialState };
    const listeners: (() => void)[] = [];

    function get() {
        return { ...store };
    }

    function set(newState: Partial<typeof store>) {
        Object.assign(store, newState);
        listeners.forEach(listener => listener());
    }

    function subscribe(listener: () => void) {
        listeners.push(listener);
        return () => {
            const index = listeners.indexOf(listener);
            if (index > -1) {
                listeners.splice(index, 1);
            }
        };
    }

    return {
        get,
        set,
        subscribe
    };
}

function SettingsComponent(props: { setValue(v: any): void; }) {
    const [fileUploader, setFileUploader] = useState(settings.store.fileUploader || "GoFile");
    const [customUploaderStore] = useState(() => createCloneableStore({
        name: settings.store.customUploaderName || "",
        requestURL: settings.store.customUploaderRequestURL || "",
        fileFormName: settings.store.customUploaderFileFormName || "",
        responseType: settings.store.customUploaderResponseType || "",
        url: settings.store.customUploaderURL || "",
        thumbnailURL: settings.store.customUploaderThumbnailURL || "",
        headers: (() => {
            const parsedHeaders = JSON.parse(settings.store.customUploaderHeaders || "{}");
            if (Object.keys(parsedHeaders).length === 0) {
                parsedHeaders[""] = "";
            }
            return parsedHeaders;
        })(),
        args: (() => {
            const parsedArgs = JSON.parse(settings.store.customUploaderArgs || "{}");
            if (Object.keys(parsedArgs).length === 0) {
                parsedArgs[""] = "";
            }
            return parsedArgs;
        })(),
    }));

    const fileInputRef = React.useRef<HTMLInputElement>(null);

    useEffect(() => {
        const unsubscribe = customUploaderStore.subscribe(() => {
            const state = customUploaderStore.get();
            updateSetting("customUploaderName", state.name);
            updateSetting("customUploaderRequestURL", state.requestURL);
            updateSetting("customUploaderFileFormName", state.fileFormName);
            updateSetting("customUploaderResponseType", state.responseType);
            updateSetting("customUploaderURL", state.url);
            updateSetting("customUploaderThumbnailURL", state.thumbnailURL);
            updateSetting("customUploaderHeaders", JSON.stringify(state.headers));
            updateSetting("customUploaderArgs", JSON.stringify(state.args));
        });

        return unsubscribe;
    }, []);

    function updateSetting(key: keyof typeof settings.store, value: any) {
        if (key in settings.store) {
            (settings.store as any)[key] = value;
        } else {
            console.error(`Invalid setting key: ${key}`);
        }
    }


    function handleShareXConfigUpload(event: React.ChangeEvent<HTMLInputElement>) {
        const file = event.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e: ProgressEvent<FileReader>) => {
                try {
                    const config = JSON.parse(e.target?.result as string);

                    customUploaderStore.set({
                        name: "",
                        requestURL: "",
                        fileFormName: "",
                        responseType: "Text",
                        url: "",
                        thumbnailURL: "",
                        headers: { "": "" },
                        args: { "": "" }
                    });

                    customUploaderStore.set({
                        name: config.Name || "",
                        requestURL: config.RequestURL || "",
                        fileFormName: config.FileFormName || "",
                        responseType: config.ResponseType || "Text",
                        url: config.URL || "",
                        thumbnailURL: config.ThumbnailURL || "",
                        headers: config.Headers || { "": "" },
                        args: config.Arguments || { "": "" }
                    });

                    updateSetting("customUploaderName", config.Name || "");
                    updateSetting("customUploaderRequestURL", config.RequestURL || "");
                    updateSetting("customUploaderFileFormName", config.FileFormName || "");
                    updateSetting("customUploaderResponseType", config.ResponseType || "Text");
                    updateSetting("customUploaderURL", config.URL || "");
                    updateSetting("customUploaderThumbnailURL", config.ThumbnailURL || "");
                    updateSetting("customUploaderHeaders", JSON.stringify(config.Headers || { "": "" }));
                    updateSetting("customUploaderArgs", JSON.stringify(config.Arguments || { "": "" }));

                    setFileUploader("Custom");
                    updateSetting("fileUploader", "Custom");

                    showToast(t("plugin.bigFileUpload.toast.sharex.import.success"));
                } catch (error) {
                    console.error("Error parsing ShareX config:", error);
                    showToast(t("plugin.bigFileUpload.toast.sharex.import.error"));
                }
            };
            reader.readAsText(file);

            event.target.value = "";
        }
    }

    const validateCustomUploaderSettings = () => {
        if (fileUploader === "Custom") {
            if (!settings.store.customUploaderRequestURL) {
                showToast(t("plugin.bigFileUpload.toast.required.url"));
                return false;
            }
            if (!settings.store.customUploaderFileFormName) {
                showToast(t("plugin.bigFileUpload.toast.required.fileForm"));
                return false;
            }
            if (!settings.store.customUploaderURL) {
                showToast(t("plugin.bigFileUpload.toast.required.json"));
                return false;
            }
        }
        return true;
    };

    const handleFileUploaderChange = (v: string) => {
        if (v === "Custom" && !validateCustomUploaderSettings()) {
            return;
        }
        setFileUploader(v);
        updateSetting("fileUploader", v);
    };

    const handleArgChange = (oldKey: string, newKey: string, value: any) => {
        const state = customUploaderStore.get();
        const newArgs = { ...state.args };

        if (oldKey !== newKey) {
            delete newArgs[oldKey];
        }

        if (value === "" && newKey === "") {
            delete newArgs[oldKey];
        } else {
            newArgs[newKey] = value;
        }

        customUploaderStore.set({ args: newArgs });

        if (Object.values(newArgs).every(v => v !== "") && Object.keys(newArgs).every(k => k !== "")) {
            newArgs[""] = "";
        }

        customUploaderStore.set({ args: newArgs });
    };

    const handleHeaderChange = (oldKey: string, newKey: string, value: string) => {
        const state = customUploaderStore.get();
        const newHeaders = { ...state.headers };

        if (oldKey !== newKey) {
            delete newHeaders[oldKey];
        }

        if (value === "" && newKey === "") {
            delete newHeaders[oldKey];
        } else {
            newHeaders[newKey] = value;
        }

        customUploaderStore.set({ headers: newHeaders });

        if (Object.values(newHeaders).every(v => v !== "") && Object.keys(newHeaders).every(k => k !== "")) {
            newHeaders[""] = "";
        }

        customUploaderStore.set({ headers: newHeaders });
    };

    const triggerFileUpload = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    return (
        <Flex flexDirection="column">
            {/* File Uploader Selection */}
            <Forms.FormDivider />
            <Forms.FormSection title={t("plugin.bigFileUpload.form.limit.title")}>
                <Forms.FormText>
                    {t("plugin.bigFileUpload.form.limit.description")}
                </Forms.FormText>
                <Select
                    options={[
                        { label: t("plugin.bigFileUpload.form.limit.option.custom"), value: "Custom" },
                        { label: t("plugin.bigFileUpload.form.limit.option.catbox"), value: "Catbox" },
                        { label: t("plugin.bigFileUpload.form.limit.option.litterBox"), value: "Litterbox" },
                        { label: t("plugin.bigFileUpload.form.limit.option.goFile"), value: "GoFile" },
                    ]}
                    placeholder={t("plugin.bigFileUpload.form.limit.placeholder")}
                    className={Margins.bottom16}
                    select={handleFileUploaderChange}
                    isSelected={v => v === fileUploader}
                    serialize={v => v}
                />
            </Forms.FormSection>

            {/* Auto-Send Settings */}
            <Forms.FormSection>
                <FormSwitch
                    value={settings.store.autoSend === "Yes"}
                    onChange={(enabled: boolean) => updateSetting("autoSend", enabled ? "Yes" : "No")}
                    description={t("plugin.bigFileUpload.form.autoSend.description")}
                    hideBorder={true}
                    title={t("plugin.bigFileUpload.form.autoSend.label")}
                />
            </Forms.FormSection>

            {/* Auto-Format Settings */}
            <Forms.FormSection>
                <FormSwitch
                    value={settings.store.autoFormat === "Yes"}
                    onChange={(enabled: boolean) => updateSetting("autoFormat", enabled ? "Yes" : "No")}
                    description={t("plugin.bigFileUpload.form.autoMask.description")}
                    hideBorder={true}
                    title={t("plugin.bigFileUpload.form.autoMask.label")}
                />
            </Forms.FormSection>

            {/* GoFile Settings */}
            {fileUploader === "GoFile" && (
                <>
                    <Forms.FormSection title={t("plugin.bigFileUpload.form.goFile.title")}>
                        <Forms.FormText>
                            {t("plugin.bigFileUpload.form.goFile.description")}
                        </Forms.FormText>
                        <TextInput
                            type="text"
                            value={settings.store.gofileToken || ""}
                            placeholder={t("plugin.bigFileUpload.form.goFile.placeholder")}
                            onChange={newValue => updateSetting("gofileToken", newValue)}
                            className={Margins.top16}
                        />
                    </Forms.FormSection>
                </>
            )}

            {/* Catbox Settings */}
            {fileUploader === "Catbox" && (
                <>
                    <Forms.FormSection title={t("plugin.bigFileUpload.form.catbox.title")}>
                        <Forms.FormText>
                            {t("plugin.bigFileUpload.form.catbox.description")}
                        </Forms.FormText>
                        <TextInput
                            type="text"
                            value={settings.store.catboxUserHash || ""}
                            placeholder={t("plugin.bigFileUpload.form.catbox.placeholder")}
                            onChange={newValue => updateSetting("catboxUserHash", newValue)}
                            className={Margins.top16}
                        />
                    </Forms.FormSection>
                </>
            )}

            {/* Litterbox Settings */}
            {fileUploader === "Litterbox" && (
                <>
                    <Forms.FormSection title={t("plugin.bigFileUpload.form.litterBox.title")}>
                        <Forms.FormText>
                            {t("plugin.bigFileUpload.form.litterBox.description")}
                        </Forms.FormText>
                        <Select
                            options={[
                                { label: t("plugin.bigFileUpload.form.litterBox.option.1hour"), value: "1h" },
                                { label: t("plugin.bigFileUpload.form.litterBox.option.12hour"), value: "12h" },
                                { label: t("plugin.bigFileUpload.form.litterBox.option.24hour"), value: "24h" },
                                { label: t("plugin.bigFileUpload.form.litterBox.option.72hour"), value: "72h" },
                            ]}
                            placeholder={t("plugin.bigFileUpload.form.litterBox.placeholder")}
                            className={Margins.top16}
                            select={newValue => updateSetting("litterboxTime", newValue)}
                            isSelected={v => v === settings.store.litterboxTime}
                            serialize={v => v}
                        />
                    </Forms.FormSection>
                </>
            )}

            {/* Custom Uploader Settings */}
            {fileUploader === "Custom" && (
                <>
                    <Forms.FormSection title={t("plugin.bigFileUpload.form.custom.uploader")}>
                        <TextInput
                            type="text"
                            value={customUploaderStore.get().name}
                            placeholder={t("plugin.bigFileUpload.form.custom.name")}
                            onChange={(newValue: string) => customUploaderStore.set({ name: newValue })}
                            className={Margins.bottom16}
                        />
                    </Forms.FormSection>

                    <Forms.FormSection title={t("plugin.bigFileUpload.form.custom.url")}>
                        <TextInput
                            type="text"
                            value={customUploaderStore.get().requestURL}
                            placeholder={t("plugin.bigFileUpload.form.custom.urlholder")}
                            onChange={(newValue: string) => customUploaderStore.set({ requestURL: newValue })}
                            className={Margins.bottom16}
                        />
                    </Forms.FormSection>

                    <Forms.FormSection title={t("plugin.bigFileUpload.form.custom.formName")}>
                        <TextInput
                            type="text"
                            value={customUploaderStore.get().fileFormName}
                            placeholder={t("plugin.bigFileUpload.form.custom.nameholder")}
                            onChange={(newValue: string) => customUploaderStore.set({ fileFormName: newValue })}
                            className={Margins.bottom16}
                        />
                    </Forms.FormSection>

                    <Forms.FormSection title={t("plugin.bigFileUpload.form.custom.responseType")}>
                        <Select
                            options={[
                                { label: "Text", value: "Text" },
                                { label: "JSON", value: "JSON" },
                            ]}
                            placeholder={t("plugin.bigFileUpload.form.custom.typeholder")}
                            className={Margins.bottom16}
                            select={(newValue: string) => customUploaderStore.set({ responseType: newValue })}
                            isSelected={(v: string) => v === customUploaderStore.get().responseType}
                            serialize={(v: string) => v}
                        />
                    </Forms.FormSection>

                    <Forms.FormSection title={t("plugin.bigFileUpload.form.custom.json")}>
                        <TextInput
                            type="text"
                            value={customUploaderStore.get().url}
                            placeholder={t("plugin.bigFileUpload.form.custom.jsonholder")}
                            onChange={(newValue: string) => customUploaderStore.set({ url: newValue })}
                            className={Margins.bottom16}
                        />
                    </Forms.FormSection>

                    <Forms.FormSection title={t("plugin.bigFileUpload.form.custom.thumbnail")}>
                        <TextInput
                            type="text"
                            value={customUploaderStore.get().thumbnailURL}
                            placeholder={t("plugin.bigFileUpload.form.custom.thumbholder")}
                            onChange={(newValue: string) => customUploaderStore.set({ thumbnailURL: newValue })}
                            className={Margins.bottom16}
                        />
                    </Forms.FormSection>

                    <Forms.FormDivider />
                    <Forms.FormTitle>{t("plugin.bigFileUpload.form.custom.arguments")}</Forms.FormTitle>
                    {Object.entries(customUploaderStore.get().args).map(([key, value], index) => (
                        <div key={index}>
                            <TextInput
                                type="text"
                                value={key}
                                placeholder={t("plugin.bigFileUpload.form.custom.argKey")}
                                onChange={(newKey: string) => handleArgChange(key, newKey, value as string)}
                                className={Margins.bottom16}
                            />
                            <TextInput
                                type="text"
                                value={value as string}
                                placeholder={t("plugin.bigFileUpload.form.custom.argValue")}
                                onChange={(newValue: string) => handleArgChange(key, key, newValue)}
                                className={Margins.bottom16}
                            />
                        </div>
                    ))}

                    <Forms.FormDivider />
                    <Forms.FormTitle>{t("plugin.bigFileUpload.form.custom.headers")}</Forms.FormTitle>
                    {Object.entries(customUploaderStore.get().headers).map(([key, value], index) => (
                        <div key={index}>
                            <TextInput
                                type="text"
                                value={key}
                                placeholder={t("plugin.bigFileUpload.form.custom.headKey")}
                                onChange={(newKey: string) => handleHeaderChange(key, newKey, value as string)}
                                className={Margins.bottom16}
                            />
                            <TextInput
                                type="text"
                                value={value as string}
                                placeholder={t("plugin.bigFileUpload.form.custom.headValue")}
                                onChange={(newValue: string) => handleHeaderChange(key, key, newValue)}
                                className={Margins.bottom16}
                            />
                        </div>
                    ))}

                    <Forms.FormDivider />
                    <Forms.FormTitle>{t("plugin.bigFileUpload.form.custom.importShareX")}</Forms.FormTitle>
                    <Button
                        onClick={triggerFileUpload}
                        color={Button.Colors.BRAND}
                        size={Button.Sizes.XLARGE}
                        className={Margins.bottom16}
                    >
                        {t("plugin.bigFileUpload.form.custom.import")}
                    </Button>
                    <input
                        ref={fileInputRef}
                        type="file"
                        accept=".sxcu"
                        style={{ display: "none" }}
                        onChange={handleShareXConfigUpload}
                    />
                </>
            )}
        </Flex>
    );
}

const settings = definePluginSettings({
    fileUploader: {
        get label() {
            return t("plugin.bigFileUpload.option.fileUploader.label");
        },
        get description() {
            return t("plugin.bigFileUpload.option.fileUploader.description");
        },
        type: OptionType.SELECT,
        options: [
            { label: t("plugin.bigFileUpload.option.fileUploader.custom"), value: "Custom" },
            { label: t("plugin.bigFileUpload.option.fileUploader.catbox"), value: "Catbox", default: true },
            { label: t("plugin.bigFileUpload.option.fileUploader.litterBox"), value: "Litterbox" },
            { label: t("plugin.bigFileUpload.option.fileUploader.goFile"), value: "GoFile" },
        ],
        hidden: true
    },
    gofileToken: {
        get label() {
            return t("plugin.bigFileUpload.option.gofileToken.label");
        },
        get description() {
            return t("plugin.bigFileUpload.option.gofileToken.description");
        },
        type: OptionType.STRING,
        default: "",
        hidden: true
    },
    autoSend: {
        get label() {
            return t("plugin.bigFileUpload.option.autoSend.label");
        },
        get description() {
            return t("plugin.bigFileUpload.option.autoSend.description");
        },
        type: OptionType.SELECT,
        options: [
            { label: t("plugin.bigFileUpload.option.autoSend.yes"), value: "Yes" },
            { label: t("plugin.bigFileUpload.option.autoSend.no"), value: "No", default: true },
        ],
        hidden: true
    },
    autoFormat: {
        get label() {
            return t("plugin.bigFileUpload.option.autoFormat.label");
        },
        get description() {
            return t("plugin.bigFileUpload.option.autoFormat.description");
        },
        type: OptionType.SELECT,
        options: [
            { label: t("plugin.bigFileUpload.option.autoFormat.yes"), value: "Yes" },
            { label: t("plugin.bigFileUpload.option.autoFormat.no"), value: "No", default: true },
        ],
        hidden: true
    },
    catboxUserHash: {
        get label() {
            return t("plugin.bigFileUpload.option.catboxUserHash.label");
        },
        get description() {
            return t("plugin.bigFileUpload.option.catboxUserHash.description");
        },
        type: OptionType.STRING,
        default: "",
        hidden: true
    },
    litterboxTime: {
        get label() {
            return t("plugin.bigFileUpload.option.litterboxTime.label");
        },
        get description() {
            return t("plugin.bigFileUpload.option.litterboxTime.description");
        },
        type: OptionType.SELECT,
        options: [
            { label: t("plugin.bigFileUpload.option.litterboxTime.1h"), value: "1h", default: true },
            { label: t("plugin.bigFileUpload.option.litterboxTime.12h"), value: "12h" },
            { label: t("plugin.bigFileUpload.option.litterboxTime.24h"), value: "24h" },
            { label: t("plugin.bigFileUpload.option.litterboxTime.72h"), value: "72h" },
        ],
        hidden: true
    },
    customUploaderName: {
        get label() {
            return t("plugin.bigFileUpload.option.customUploaderName.label");
        },
        get description() {
            return t("plugin.bigFileUpload.option.customUploaderName.description");
        },
        type: OptionType.STRING,
        default: "",
        hidden: true
    },
    customUploaderRequestURL: {
        get label() {
            return t("plugin.bigFileUpload.option.customUploaderRequestURL.label");
        },
        get description() {
            return t("plugin.bigFileUpload.option.customUploaderRequestURL.description");
        },
        type: OptionType.STRING,
        default: "",
        hidden: true
    },
    customUploaderFileFormName: {
        get label() {
            return t("plugin.bigFileUpload.option.customUploaderFileFormName.label");
        },
        get description() {
            return t("plugin.bigFileUpload.option.customUploaderFileFormName.description");
        },
        type: OptionType.STRING,
        default: "",
        hidden: true
    },
    customUploaderResponseType: {
        get label() {
            return t("plugin.bigFileUpload.option.customUploaderResponseType.label");
        },
        get description() {
            return t("plugin.bigFileUpload.option.customUploaderResponseType.description");
        },
        type: OptionType.SELECT,
        options: [
            { label: "Text", value: "Text", default: true },
            { label: "JSON", value: "JSON" },
        ],
        hidden: true
    },
    customUploaderURL: {
        get label() {
            return t("plugin.bigFileUpload.option.customUploaderURL.label");
        },
        get description() {
            return t("plugin.bigFileUpload.option.customUploaderURL.description");
        },
        type: OptionType.STRING,
        default: "",
        hidden: true
    },
    customUploaderThumbnailURL: {
        get label() {
            return t("plugin.bigFileUpload.option.customUploaderThumbnailURL.label");
        },
        get description() {
            return t("plugin.bigFileUpload.option.customUploaderThumbnailURL.description");
        },
        type: OptionType.STRING,
        default: "",
        hidden: true
    },
    customUploaderHeaders: {
        get label() {
            return t("plugin.bigFileUpload.option.customUploaderHeaders.label");
        },
        get description() {
            return t("plugin.bigFileUpload.option.customUploaderHeaders.description");
        },
        type: OptionType.STRING,
        default: JSON.stringify({}),
        hidden: true
    },
    customUploaderArgs: {
        get label() {
            return t("plugin.bigFileUpload.option.customUploaderArgs.label");
        },
        get description() {
            return t("plugin.bigFileUpload.option.customUploaderArgs.description");
        },
        type: OptionType.STRING,
        default: JSON.stringify({}),
        hidden: true
    },
    customSettings: {
        get label() {
            return t("plugin.bigFileUpload.option.customSettings.label");
        },
        get description() {
            return t("plugin.bigFileUpload.option.customSettings.description");
        },
        type: OptionType.COMPONENT,
        component: SettingsComponent,
        hidden: false
    },
}).withPrivateSettings<{
    customUploaderArgs?: Record<string, string>;
    customUploaderHeaders?: Record<string, string>;
}>();

function sendTextToChat(text: string) {
    if (settings.store.autoSend === "No") {
        insertTextIntoChatInputBox(text);
    } else {
        const channelId = SelectedChannelStore.getChannelId();
        sendMessage(channelId, { content: text });
    }
}

async function resolveFile(options: CommandArgument[], ctx: CommandContext): Promise<File | null> {
    for (const opt of options) {
        if (opt.name === "file") {
            const upload = UploadStore.getUpload(ctx.channel.id, opt.name, DraftType.SlashCommand);
            return upload.item.file;
        }
    }
    return null;
}

async function uploadFileToGofile(file: File, channelId: string) {
    try {
        const arrayBuffer = await file.arrayBuffer();
        const fileName = file.name;
        const fileType = file.type;

        const serverResponse = await fetch("https://api.gofile.io/servers");
        const serverData = await serverResponse.json();
        const server = serverData.data.servers[Math.floor(Math.random() * serverData.data.servers.length)].name;

        const uploadResult = await Native.uploadFileToGofileNative(`https://${server}.gofile.io/uploadFile`, arrayBuffer, fileName, fileType);

        if ((uploadResult as any).status === "ok") {
            const { downloadPage } = (uploadResult as any).data;
            let finalUrl = downloadPage;

            if (settings.store.autoFormat === "Yes") {
                finalUrl = `[${fileName}](${finalUrl})`;
            }

            setTimeout(() => sendTextToChat(`${finalUrl} `), 10);
            UploadManager.clearAll(channelId, DraftType.SlashCommand);
        }
        else {
            console.error("Unable to upload file. This is likely an issue with your network connection, firewall, or VPN.", uploadResult);
            sendBotMessage(channelId, {
                author: {
                    username: "Plexcord"
                }, content: t("plugin.bigFileUpload.toast.unable")
            });
            showToast(t("plugin.bigFileUpload.toast.failed"), Toasts.Type.FAILURE);
            UploadManager.clearAll(channelId, DraftType.SlashCommand);
        }
    } catch (error) {
        console.error("Unable to upload file. This is likely an issue with your network connection, firewall, or VPN.", error);
        sendBotMessage(channelId, {
            author: {
                username: "Plexcord"
            }, content: t("plugin.bigFileUpload.toast.unable")
        });
        showToast(t("plugin.bigFileUpload.toast.failed"), Toasts.Type.FAILURE);
        UploadManager.clearAll(channelId, DraftType.SlashCommand);
    }
}

async function uploadFileToCatbox(file: File, channelId: string) {
    try {
        const url = "https://catbox.moe/user/api.php";
        const userHash = settings.store.catboxUserHash;
        const fileSizeMB = file.size / (1024 * 1024);

        const arrayBuffer = await file.arrayBuffer();
        const fileName = file.name;

        const uploadResult = await Native.uploadFileToCatboxNative(url, arrayBuffer, fileName, file.type, userHash);

        if (uploadResult.startsWith("https://") || uploadResult.startsWith("http://")) {
            const videoExtensions = [".mp4", ".mkv", ".webm", ".avi", ".mov", ".flv", ".wmv", ".m4v", ".mpg", ".mpeg", ".3gp", ".ogv"];
            let finalUrl = uploadResult;

            if (fileSizeMB >= 150 && videoExtensions.some(ext => finalUrl.endsWith(ext))) {
                finalUrl = `https://embeds.video/${finalUrl}`;
            }

            if (settings.store.autoFormat === "Yes") {
                finalUrl = `[${fileName}](${finalUrl})`;
            }

            setTimeout(() => sendTextToChat(`${finalUrl} `), 10);
            showToast(t("plugin.bigFileUpload.toast.success"), Toasts.Type.SUCCESS);
            UploadManager.clearAll(channelId, DraftType.SlashCommand);
        } else {
            console.error("Unable to upload file. This is likely an issue with your network connection, firewall, or VPN.", uploadResult);
            sendBotMessage(channelId, {
                author: {
                    username: "Plexcord"
                }, content: t("plugin.bigFileUpload.toast.unable")
            });
            showToast(t("plugin.bigFileUpload.toast.failed"), Toasts.Type.FAILURE);
            UploadManager.clearAll(channelId, DraftType.SlashCommand);
        }
    } catch (error) {
        console.error("Unable to upload file. This is likely an issue with your network connection, firewall, or VPN.", error);
        sendBotMessage(channelId, {
            author: {
                username: "Plexcord"
            }, content: t("plugin.bigFileUpload.toast.unable")
        });
        showToast(t("plugin.bigFileUpload.toast.failed"), Toasts.Type.FAILURE);
        UploadManager.clearAll(channelId, DraftType.SlashCommand);
    }
}

async function uploadFileToLitterbox(file: File, channelId: string) {
    try {
        const arrayBuffer = await file.arrayBuffer();
        const fileName = file.name;
        const fileType = file.type;
        const fileSizeMB = file.size / (1024 * 1024);
        const time = settings.store.litterboxTime;

        const uploadResult = await Native.uploadFileToLitterboxNative(arrayBuffer, fileName, fileType, time);

        if (uploadResult.startsWith("https://") || uploadResult.startsWith("http://")) {
            const videoExtensions = [".mp4", ".mkv", ".webm", ".avi", ".mov", ".flv", ".wmv", ".m4v", ".mpg", ".mpeg", ".3gp", ".ogv"];
            let finalUrl = uploadResult;

            if (fileSizeMB >= 150 && videoExtensions.some(ext => finalUrl.endsWith(ext))) {
                finalUrl = `https://embeds.video/${finalUrl}`;
            }

            if (settings.store.autoFormat === "Yes") {
                finalUrl = `[${fileName}](${finalUrl})`;
            }

            setTimeout(() => sendTextToChat(`${finalUrl}`), 10);
            showToast(t("plugin.bigFileUpload.toast.success"), Toasts.Type.SUCCESS);
            UploadManager.clearAll(channelId, DraftType.SlashCommand);
        } else {
            console.error("Unable to upload file. This is likely an issue with your network connection, firewall, or VPN.", uploadResult);
            showToast(t("plugin.bigFileUpload.toast.failed"), Toasts.Type.FAILURE);
            sendBotMessage(channelId, {
                author: {
                    username: "Plexcord"
                }, content: t("plugin.bigFileUpload.toast.unable")
            });
            UploadManager.clearAll(channelId, DraftType.SlashCommand);
        }
    } catch (error) {
        console.error("Unable to upload file. This is likely an issue with your network connection, firewall, or VPN.", error);
        sendBotMessage(channelId, {
            author: {
                username: "Plexcord"
            }, content: t("plugin.bigFileUpload.toast.unable")
        });
        showToast(t("plugin.bigFileUpload.toast.failed"), Toasts.Type.FAILURE);
        UploadManager.clearAll(channelId, DraftType.SlashCommand);
    }
}

async function uploadFileCustom(file: File, channelId: string) {
    try {

        const arrayBuffer = await file.arrayBuffer();
        const fileName = file.name;
        const fileType = file.type;

        const fileFormName = settings.store.customUploaderFileFormName || "file[]";
        const responseType = settings.store.customUploaderResponseType;

        let customArgs: Record<string, string>;
        try {
            customArgs = JSON.parse(settings.store.customUploaderArgs || "{}");
        } catch (e) {
            console.error("Failed to parse customUploaderArgs:", e);
            customArgs = {};
        }

        let customHeaders: Record<string, string>;
        try {
            const parsedHeaders = JSON.parse(settings.store.customUploaderHeaders || "{}");
            customHeaders = Object.entries(parsedHeaders).reduce((acc, [key, value]) => {
                if (key && typeof key === "string" && key.trim() !== "") {
                    acc[key] = String(value);
                } else {
                    console.warn(`Invalid header name: "${key}". Removing it.`);
                }
                return acc;
            }, {} as Record<string, string>);
        } catch (e) {
            console.error("Failed to parse customUploaderHeaders:", e);
            customHeaders = {};
        }

        let baseUrl: string | URL | undefined;
        try {
            baseUrl = new URL(settings.store.customUploaderURL);
        } catch (e) {
            console.error("Invalid customUploaderURL:", settings.store.customUploaderURL, e);
            throw new Error("Invalid base URL");
        }
        const urlPath = baseUrl.pathname.split("/").filter(segment => segment);

        const finalUrl = await Native.uploadFileCustomNative(
            settings.store.customUploaderRequestURL,
            arrayBuffer,
            fileName,
            fileType,
            fileFormName,
            customArgs,
            customHeaders,
            responseType,
            urlPath
        );

        let constructedUrl: string;
        try {
            constructedUrl = new URL(finalUrl, baseUrl).href;
        } catch (e) {
            console.error("Failed to construct URL:", finalUrl, baseUrl, e);
            throw new Error("Invalid final URL");
        }

        const encodedUrl = encodeURI(constructedUrl);
        const fileExtension = `.${fileName.split(".").pop()?.toLowerCase() ?? ""}`;
        const videoExtensions = [".mp4", ".mkv", ".webm", ".avi", ".mov", ".flv", ".wmv", ".m4v", ".mpg", ".mpeg", ".3gp", ".ogv"];
        let finalUrlForChat = encodedUrl;
        if (videoExtensions.includes(fileExtension) && file.size > 60 * 1024 * 1024) {
            finalUrlForChat = `https://embeds.video/${encodedUrl}`;
        }

        if (settings.store.autoFormat === "Yes") {
            finalUrlForChat = `[${fileName}](${finalUrlForChat})`;
        }

        setTimeout(() => sendTextToChat(`${finalUrlForChat} `), 10);
        showToast(t("plugin.bigFileUpload.toast.success"), Toasts.Type.SUCCESS);
    } catch (error) {
        console.error("Unable to upload file:", error);
        sendBotMessage(channelId, {
            author: {
                username: "Plexcord"
            },
            content: t("plugin.bigFileUpload.toast.unable")
        });
        showToast(t("plugin.bigFileUpload.toast.failed"), Toasts.Type.FAILURE);
    }

    UploadManager.clearAll(channelId, DraftType.SlashCommand);
}

async function uploadFile(file: File, channelId: string) {
    const uploader = settings.store.fileUploader;
    switch (uploader) {
        case "GoFile":
            await uploadFileToGofile(file, channelId);
            break;
        case "Catbox":
            await uploadFileToCatbox(file, channelId);
            break;
        case "Litterbox":
            await uploadFileToLitterbox(file, channelId);
            break;
        case "Custom":
            await uploadFileCustom(file, channelId);
            break;
        default:
            console.error("Unknown uploader:", uploader);
            sendBotMessage(channelId, {
                author: {
                    username: "Plexcord"
                },
                content: t("plugin.bigFileUpload.commands.noUploader")
            });
            UploadManager.clearAll(channelId, DraftType.SlashCommand);
    }
}

function triggerFileUpload() {
    const fileInput = document.createElement("input");
    fileInput.type = "file";
    fileInput.style.display = "none";

    fileInput.onchange = async event => {
        const target = event.target as HTMLInputElement;
        if (target && target.files && target.files.length > 0) {
            const file = target.files[0];
            if (file) {
                const channelId = SelectedChannelStore.getChannelId();
                await uploadFile(file, channelId);
            } else {
                showToast(t("plugin.bigFileUpload.toast.noFile"));
            }
        }
    };

    document.body.appendChild(fileInput);
    fileInput.click();
    document.body.removeChild(fileInput);
}

const ctxMenuPatch: NavContextMenuPatchCallback = (children, props) => {
    if (props.channel.guild_id && !PermissionStore.can(PermissionsBits.SEND_MESSAGES, props.channel)) return;

    children.splice(1, 0,
        <Menu.MenuItem
            id="upload-big-file"
            label={
                <div className={OptionClasses.optionLabel}>
                    <OpenExternalIcon className={OptionClasses.optionIcon} height={24} width={24} />
                    <div className={OptionClasses.optionName}>{t("plugin.bigFileUpload.context.upload")}</div>
                </div>
            }
            action={triggerFileUpload}
        />
    );
};

export default definePlugin({
    name: "BigFileUpload",
    description: "Bypass Discord's upload limit by uploading files using the 'Upload a Big File' button or /fileupload and they'll get uploaded as links into chat via file uploaders.",
    authors: [Devs.ScattrdBlade],
    settings,

    get displayDescription() {
        return t("plugin.bigFileUpload.description");
    },

    dependencies: ["CommandsAPI"],
    contextMenus: {
        "channel-attach": ctxMenuPatch,
    },
    commands: [
        {
            inputType: ApplicationCommandInputType.BUILT_IN,
            name: "fileupload",
            description: "Upload a file",
            get displayDescription() {
                return t("plugin.bigFileUpload.commands.description");
            },
            options: [
                {
                    name: "file",
                    description: "The file to upload",
                    get displayDescription() {
                        return t("plugin.bigFileUpload.commands.upload");
                    },
                    type: ApplicationCommandOptionType.ATTACHMENT,
                    required: true,
                },
            ],
            execute: async (opts, cmdCtx) => {
                const file = await resolveFile(opts, cmdCtx);
                if (file) {
                    await uploadFile(file, cmdCtx.channel.id);
                } else {
                    sendBotMessage(cmdCtx.channel.id, {
                        author: {
                            username: "Plexcord"
                        },
                        content: t("plugin.bigFileUpload.commands.noFile")
                    });
                    UploadManager.clearAll(cmdCtx.channel.id, DraftType.SlashCommand);
                }
            },
        },
    ],
});
