/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2024 Vendicated and contributors
 * Copyright (c) 2026 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { csp, plugin, t } from "@api/i18n";
import { definePluginSettings } from "@api/Settings";
import { Button } from "@components/Button";
import { Notice } from "@components/Notice";
import { SettingsSection } from "@components/settings/tabs/plugins/components/Common";
import { Switch } from "@components/Switch";
import { useCspPermission } from "@utils/csp";
import { classNameFactory } from "@utils/css";
import { useForceUpdater } from "@utils/react";
import { OptionType, PluginNative } from "@utils/types";
import { React, Select, showToast, TextArea, TextInput } from "@webpack/common";

import { fallbackServiceOrder, serviceLabels, ServiceType } from "./types";
import { parseShareXConfig } from "./utils/sharex";

const Native = IS_WEB
    ? null
    : PlexcordNative.pluginHelpers.FileUpload as PluginNative<typeof import("./native")>;

const defaultFallbackOrder = fallbackServiceOrder.join(",");
const cl = classNameFactory("pc-file-upload-settings-");

// Built on demand so labels follow the current language instead of the one active when the module loaded
const getServiceOptions = () => [
    { label: t(plugin.fileUpload.text.zipline), value: ServiceType.ZIPLINE, default: true },
    { label: t(plugin.fileUpload.text.eZHost), value: ServiceType.EZHOST },
    { label: t(plugin.fileUpload.text.nest), value: ServiceType.NEST },
    { label: t(plugin.fileUpload.text.encryptingHost), value: ServiceType.ENCRYPTINGHOST },
    { label: t(plugin.fileUpload.text.s3Compatible), value: ServiceType.S3 },
    { label: t(plugin.fileUpload.text.catboxMoe), value: ServiceType.CATBOX },
    ...(IS_WEB ? [] : [{ label: "0x0.st", value: ServiceType.ZEROX0 }]),
    { label: t(plugin.fileUpload.text.litterbox), value: ServiceType.LITTERBOX },
    { label: "GoFile", value: ServiceType.GOFILE },
    { label: "tmpfiles.org", value: ServiceType.TMPFILES },
    { label: "buzzheavier.com", value: ServiceType.BUZZHEAVIER },
    { label: "temp.sh", value: ServiceType.TEMPSH },
    { label: "filebin.net", value: ServiceType.FILEBIN },
    { label: "PixelVault", value: ServiceType.PIXELVAULT },
    { label: "PixelDrain", value: ServiceType.PIXELDRAIN },
    { label: t(plugin.fileUpload.text.sharexCustomUploader), value: ServiceType.SHAREX },
    { label: t(plugin.fileUpload.text.webdavNextcloudOwncloud), value: ServiceType.WEBDAV }
];

// Built on demand so labels follow the current language instead of the one active when the module loaded
const getLitterboxOptions = () => [
    { label: t(plugin.fileUpload.text.n1Hour), value: "1h" },
    { label: t(plugin.fileUpload.text.n12Hours), value: "12h" },
    { label: t(plugin.fileUpload.text.n24Hours), value: "24h", default: true },
    { label: t(plugin.fileUpload.text.n72Hours), value: "72h" }
];

// Built on demand so labels follow the current language instead of the one active when the module loaded
const getEmbedProxyOptions = () => [
    { label: t(plugin.fileUpload.text.corsProxy), value: "cors" },
    { label: "discord.nfp.is", value: "nfp", default: true }
];

// Built on demand so labels follow the current language instead of the one active when the module loaded
const getEncryptingHostUrlStyleOptions = () => [
    { label: t(plugin.fileUpload.text.query), value: "query", default: true },
    { label: t(plugin.fileUpload.text.param), value: "param" },
    { label: t(plugin.fileUpload.text.fakeLink), value: "fakelink" },
    { label: t(plugin.fileUpload.text.embed), value: "embed" }
];

export const settings = definePluginSettings({
    serviceType: {
        label: () => t(plugin.fileUpload.option.serviceType.label),
        type: OptionType.SELECT,
        description: () => t(plugin.fileUpload.option.serviceType.description),
        get options() {
            return getServiceOptions();
        },
        hidden: true
    },
    serviceUrl: {
        label: () => t(plugin.fileUpload.option.serviceUrl.label),
        type: OptionType.STRING,
        description: () => t(plugin.fileUpload.option.serviceUrl.description),
        default: "",
        hidden: true
    },
    ziplineToken: {
        label: () => t(plugin.fileUpload.option.ziplineToken.label),
        type: OptionType.STRING,
        description: () => t(plugin.fileUpload.option.ziplineToken.description),
        default: "",
        hidden: true
    },
    folderId: {
        label: () => t(plugin.fileUpload.option.folderId.label),
        type: OptionType.STRING,
        description: () => t(plugin.fileUpload.option.folderId.description),
        default: "",
        hidden: true
    },
    ezHostKey: {
        label: () => t(plugin.fileUpload.option.ezHostKey.label),
        type: OptionType.STRING,
        description: () => t(plugin.fileUpload.option.ezHostKey.description),
        default: "",
        hidden: true
    },
    nestToken: {
        label: () => t(plugin.fileUpload.option.nestToken.label),
        type: OptionType.STRING,
        description: () => t(plugin.fileUpload.option.nestToken.description),
        default: "",
        hidden: true
    },
    encryptingHostKey: {
        label: () => t(plugin.fileUpload.option.encryptingHostKey.label),
        type: OptionType.STRING,
        description: () => t(plugin.fileUpload.option.encryptingHostKey.description),
        default: "",
        hidden: true
    },
    encryptingHostUrlStyle: {
        label: () => t(plugin.fileUpload.option.encryptingHostUrlStyle.label),
        type: OptionType.SELECT,
        description: () => t(plugin.fileUpload.option.encryptingHostUrlStyle.description),
        get options() {
            return getEncryptingHostUrlStyleOptions();
        },
        default: "query",
        hidden: true
    },
    encryptingHostDomains: {
        label: () => t(plugin.fileUpload.option.encryptingHostDomains.label),
        type: OptionType.STRING,
        description: () => t(plugin.fileUpload.option.encryptingHostDomains.description),
        default: "[\"offensive\"]",
        hidden: true
    },
    encryptingHostTitle: {
        label: () => t(plugin.fileUpload.option.encryptingHostTitle.label),
        type: OptionType.STRING,
        description: () => t(plugin.fileUpload.option.encryptingHostTitle.description),
        default: "",
        hidden: true
    },
    encryptingHostColor: {
        label: () => t(plugin.fileUpload.option.encryptingHostColor.label),
        type: OptionType.STRING,
        description: () => t(plugin.fileUpload.option.encryptingHostColor.description),
        default: "",
        hidden: true
    },
    encryptingHostFakelink: {
        label: () => t(plugin.fileUpload.option.encryptingHostFakelink.label),
        type: OptionType.STRING,
        description: () => t(plugin.fileUpload.option.encryptingHostFakelink.description),
        default: "",
        hidden: true
    },
    s3Endpoint: {
        label: () => t(plugin.fileUpload.option.s3Endpoint.label),
        type: OptionType.STRING,
        description: () => t(plugin.fileUpload.option.s3Endpoint.description),
        default: "",
        hidden: true
    },
    s3Bucket: {
        label: () => t(plugin.fileUpload.option.s3Bucket.label),
        type: OptionType.STRING,
        description: () => t(plugin.fileUpload.option.s3Bucket.description),
        default: "",
        hidden: true
    },
    s3Region: {
        label: () => t(plugin.fileUpload.option.s3Region.label),
        type: OptionType.STRING,
        description: () => t(plugin.fileUpload.option.s3Region.description),
        default: "auto",
        hidden: true
    },
    s3AccessKeyId: {
        label: () => t(plugin.fileUpload.option.s3AccessKeyId.label),
        type: OptionType.STRING,
        description: () => t(plugin.fileUpload.option.s3AccessKeyId.description),
        default: "",
        hidden: true
    },
    s3SecretAccessKey: {
        label: () => t(plugin.fileUpload.option.s3SecretAccessKey.label),
        type: OptionType.STRING,
        description: () => t(plugin.fileUpload.option.s3SecretAccessKey.description),
        default: "",
        hidden: true
    },
    s3SessionToken: {
        label: () => t(plugin.fileUpload.option.s3SessionToken.label),
        type: OptionType.STRING,
        description: () => t(plugin.fileUpload.option.s3SessionToken.description),
        default: "",
        hidden: true
    },
    s3PublicUrl: {
        label: () => t(plugin.fileUpload.option.s3PublicUrl.label),
        type: OptionType.STRING,
        description: () => t(plugin.fileUpload.option.s3PublicUrl.description),
        default: "",
        hidden: true
    },
    s3Prefix: {
        label: () => t(plugin.fileUpload.option.s3Prefix.label),
        type: OptionType.STRING,
        description: () => t(plugin.fileUpload.option.s3Prefix.description),
        default: "",
        hidden: true
    },
    s3ForcePathStyle: {
        label: () => t(plugin.fileUpload.option.s3ForcePathStyle.label),
        type: OptionType.BOOLEAN,
        description: () => t(plugin.fileUpload.option.s3ForcePathStyle.description),
        default: true,
        hidden: true
    },
    litterboxExpiry: {
        label: () => t(plugin.fileUpload.option.litterboxExpiry.label),
        type: OptionType.SELECT,
        description: () => t(plugin.fileUpload.option.litterboxExpiry.description),
        get options() {
            return getLitterboxOptions();
        },
        default: "24h",
        hidden: true
    },
    catboxUserhash: {
        label: () => t(plugin.fileUpload.option.catboxUserhash.label),
        type: OptionType.STRING,
        description: () => t(plugin.fileUpload.option.catboxUserhash.description),
        default: "",
        hidden: true
    },
    sharexConfig: {
        label: () => t(plugin.fileUpload.option.sharexConfig.label),
        type: OptionType.STRING,
        description: () => t(plugin.fileUpload.option.sharexConfig.description),
        default: "",
        hidden: true
    },
    disableFallbacks: {
        label: () => t(plugin.fileUpload.option.disableFallbacks.label),
        type: OptionType.BOOLEAN,
        description: () => t(plugin.fileUpload.option.disableFallbacks.description),
        default: false,
        hidden: true
    },
    autoSend: {
        label: () => t(plugin.fileUpload.option.autoSend.label),
        type: OptionType.BOOLEAN,
        description: () => t(plugin.fileUpload.option.autoSend.description),
        default: false,
        hidden: true
    },
    autoFormat: {
        label: () => t(plugin.fileUpload.option.autoFormat.label),
        type: OptionType.BOOLEAN,
        description: () => t(plugin.fileUpload.option.autoFormat.description),
        default: false,
        hidden: true
    },
    bypassDiscordUpload: {
        label: () => t(plugin.fileUpload.option.bypassDiscordUpload.label),
        type: OptionType.BOOLEAN,
        description: () => t(plugin.fileUpload.option.bypassDiscordUpload.description),
        default: true,
        hidden: true
    },
    bypassDiscordUploadOnlyOverLimit: {
        label: () => t(plugin.fileUpload.option.bypassDiscordUploadOnlyOverLimit.label),
        type: OptionType.BOOLEAN,
        description: () => t(plugin.fileUpload.option.bypassDiscordUploadOnlyOverLimit.description),
        default: true,
        hidden: true
    },
    customDiscordFileSizeLimitMB: {
        label: () => t(plugin.fileUpload.option.customDiscordFileSizeLimitMB.label),
        type: OptionType.NUMBER,
        description: () => t(plugin.fileUpload.option.customDiscordFileSizeLimitMB.description),
        default: 0,
        hidden: true
    },
    gofileToken: {
        label: () => t(plugin.fileUpload.option.gofileToken.label),
        type: OptionType.STRING,
        description: () => t(plugin.fileUpload.option.gofileToken.description),
        default: "",
        hidden: true
    },
    fallbackOrder: {
        label: () => t(plugin.fileUpload.option.fallbackOrder.label),
        type: OptionType.STRING,
        description: () => t(plugin.fileUpload.option.fallbackOrder.description),
        default: defaultFallbackOrder,
        hidden: true
    },
    pixelVaultKey: {
        label: () => t(plugin.fileUpload.option.pixelVaultKey.label),
        type: OptionType.STRING,
        description: () => t(plugin.fileUpload.option.pixelVaultKey.description),
        default: "",
        hidden: true
    },
    pixelDrainKey: {
        label: () => t(plugin.fileUpload.option.pixelDrainKey.label),
        type: OptionType.STRING,
        description: () => t(plugin.fileUpload.option.pixelDrainKey.description),
        default: "",
        hidden: true
    },
    uploadTimeoutMs: {
        label: () => t(plugin.fileUpload.option.uploadTimeoutMs.label),
        type: OptionType.NUMBER,
        description: () => t(plugin.fileUpload.option.uploadTimeoutMs.description),
        default: 300000,
        hidden: true
    },
    stripQueryParams: {
        label: () => t(plugin.fileUpload.option.stripQueryParams.label),
        type: OptionType.BOOLEAN,
        description: () => t(plugin.fileUpload.option.stripQueryParams.description),
        default: false,
        hidden: true
    },
    embedProxyEnabled: {
        label: () => t(plugin.fileUpload.option.embedProxyEnabled.label),
        type: OptionType.BOOLEAN,
        description: () => t(plugin.fileUpload.option.embedProxyEnabled.description),
        default: false,
        hidden: true
    },
    embedProxyService: {
        label: () => t(plugin.fileUpload.option.embedProxyService.label),
        type: OptionType.SELECT,
        description: () => t(plugin.fileUpload.option.embedProxyService.description),
        get options() {
            return getEmbedProxyOptions();
        },
        default: "nfp",
        hidden: true
    },
    corsProxyUrl: {
        label: () => t(plugin.fileUpload.option.corsProxyUrl.label),
        type: OptionType.STRING,
        description: () => t(plugin.fileUpload.option.corsProxyUrl.description),
        default: "",
        hidden: true
    },
    apngToGif: {
        label: () => t(plugin.fileUpload.option.apngToGif.label),
        type: OptionType.BOOLEAN,
        description: () => t(plugin.fileUpload.option.apngToGif.description),
        default: false,
        hidden: true
    },
    preserveOriginalFilename: {
        label: () => t(plugin.fileUpload.option.preserveOriginalFilename.label),
        type: OptionType.BOOLEAN,
        description: () => t(plugin.fileUpload.option.preserveOriginalFilename.description),
        default: true,
        hidden: true
    },
    autoCopy: {
        label: () => t(plugin.fileUpload.option.autoCopy.label),
        type: OptionType.BOOLEAN,
        description: () => t(plugin.fileUpload.option.autoCopy.description),
        default: true,
        hidden: true
    },
    autoUploadPastedFiles: {
        label: () => t(plugin.fileUpload.option.autoUploadPastedFiles.label),
        type: OptionType.BOOLEAN,
        description: () => t(plugin.fileUpload.option.autoUploadPastedFiles.description),
        default: false
    },
    webdavUrl: {
        label: () => t(plugin.fileUpload.option.webdavUrl.label),
        type: OptionType.STRING,
        description: () => t(plugin.fileUpload.option.webdavUrl.description),
        default: "",
        hidden: true
    },
    webdavUsername: {
        label: () => t(plugin.fileUpload.option.webdavUsername.label),
        type: OptionType.STRING,
        description: () => t(plugin.fileUpload.option.webdavUsername.description),
        default: "",
        hidden: true
    },
    webdavPassword: {
        label: () => t(plugin.fileUpload.option.webdavPassword.label),
        type: OptionType.STRING,
        description: () => t(plugin.fileUpload.option.webdavPassword.description),
        default: "",
        hidden: true
    },
    webdavDirectory: {
        label: () => t(plugin.fileUpload.option.webdavDirectory.label),
        type: OptionType.STRING,
        description: () => t(plugin.fileUpload.option.webdavDirectory.description),
        default: "",
        hidden: true
    },
    webdavServerType: {
        label: () => t(plugin.fileUpload.option.webdavServerType.label),
        type: OptionType.SELECT,
        description: () => t(plugin.fileUpload.option.webdavServerType.description),
        options: [
            { label: () => t(plugin.fileUpload.option.webdavServerType.nextcloud), value: "nextcloud", default: true },
            { label: () => t(plugin.fileUpload.option.webdavServerType.owncloud), value: "owncloud" },
            { label: () => t(plugin.fileUpload.option.webdavServerType.generic), value: "generic" }
        ],
        default: "nextcloud",
        hidden: true
    },
    webdavShareType: {
        label: () => t(plugin.fileUpload.option.webdavShareType.label),
        type: OptionType.SELECT,
        description: () => t(plugin.fileUpload.option.webdavShareType.description),
        options: [
            { label: () => t(plugin.fileUpload.option.webdavShareType.sharepage), value: "share-page", default: true },
            { label: () => t(plugin.fileUpload.option.webdavShareType.directdownload), value: "direct-download" },
            { label: () => t(plugin.fileUpload.option.webdavShareType.markdown), value: "markdown" }
        ],
        default: "share-page",
        hidden: true
    },
    uploadAllowedFileTypes: {
        label: () => t(plugin.fileUpload.option.uploadAllowedFileTypes.label),
        type: OptionType.STRING,
        description: () => t(plugin.fileUpload.option.uploadAllowedFileTypes.description),
        default: "",
        hidden: true
    },
    settingsComponent: {
        label: () => t(plugin.fileUpload.option.settingsComponent.label),
        type: OptionType.COMPONENT,
        description: () => t(plugin.fileUpload.option.settingsComponent.description),
        component: SettingsComponent
    }
});

function SettingTextInput(props: {
    description: string;
    name: string;
    onChange: (value: string) => void;
    placeholder: string;
    value: string;
}) {
    const { description, name, onChange, placeholder, value } = props;

    return (
        <SettingsSection id={name} name={name} description={description ?? ""}>
            <TextInput
                value={value}
                onChange={onChange}
                placeholder={placeholder}
            />
        </SettingsSection>
    );
}

function SettingGroup(props: {
    children: React.ReactNode;
    description?: string;
    name: string;
}) {
    const { children, description, name } = props;

    return (
        <SettingsSection id={name} name={name} description={description ?? ""}>
            <div className={cl("group")}>
                {children}
            </div>
        </SettingsSection>
    );
}

function SettingSwitch(props: {
    checked: boolean;
    description: string;
    name: string;
    onChange: (value: boolean) => void;
}) {
    const { checked, description, name, onChange } = props;

    return (
        <SettingsSection id={name} tag="label" name={name} description={description} inlineSetting>
            <Switch checked={checked} onChange={onChange} />
        </SettingsSection>
    );
}

function ServicePicker(props: {
    onChange: (service: ServiceType) => void;
    value: ServiceType;
}) {
    const { onChange, value } = props;

    return (
        <div className={cl("service-grid")}>
            {getServiceOptions().map(option => (
                <button
                    key={option.value}
                    type="button"
                    className={cl("service-option")}
                    data-selected={option.value === value}
                    onClick={() => onChange(option.value)}
                >
                    <span className={cl("service-option-label")}>{option.label}</span>
                </button>
            ))}
        </div>
    );
}

function FallbackOrderSettings() {
    const update = useForceUpdater();
    const [dragIndex, setDragIndex] = React.useState<number | null>(null);
    const [order, setOrder] = React.useState<ServiceType[]>(() => {
        const configured = (settings.store.fallbackOrder || defaultFallbackOrder)
            .split(/[\n,]/)
            .map(entry => entry.trim())
            .filter((entry): entry is ServiceType => Object.values(ServiceType).includes(entry as ServiceType));

        return configured.length === fallbackServiceOrder.length && new Set(configured).size === fallbackServiceOrder.length
            ? configured
            : fallbackServiceOrder;
    });

    const commitOrder = (nextOrder: ServiceType[]) => {
        setOrder(nextOrder);
        settings.store.fallbackOrder = nextOrder.join(",");
        update();
    };

    return (
        <SettingsSection id="fallback-order" name={t(plugin.fileUpload.panel.fallbackOrder)} description={t(plugin.fileUpload.text.dragHostsToReorder)}>
            <div className={cl("fallback-order-list")}>
                {order.map((service, index) => (
                    <div
                        key={service}
                        className={cl("fallback-order-item")}
                        draggable
                        onDragStart={event => {
                            setDragIndex(index);
                            event.dataTransfer.effectAllowed = "move";
                            event.dataTransfer.setData("text/plain", String(index));
                        }}
                        onDragOver={event => event.preventDefault()}
                        onDrop={event => {
                            event.preventDefault();
                            const sourceIndex = dragIndex ?? Number(event.dataTransfer.getData("text/plain"));
                            if (!Number.isInteger(sourceIndex) || sourceIndex === index || sourceIndex < 0 || sourceIndex >= order.length) {
                                setDragIndex(null);
                                return;
                            }

                            const nextOrder = [...order];
                            const [moved] = nextOrder.splice(sourceIndex, 1);
                            nextOrder.splice(index, 0, moved);
                            setDragIndex(null);
                            commitOrder(nextOrder);
                        }}
                        onDragEnd={() => setDragIndex(null)}
                        data-dragging={dragIndex === index}
                    >
                        <span className={cl("fallback-order-label")}>{serviceLabels[service]}</span>
                        <span className={cl("fallback-order-handle")}>{t(plugin.fileUpload.text.drag)}</span>
                    </div>
                ))}
            </div>
            <div className={cl("fallback-order-actions")}>
                <Button size="small" onClick={() => commitOrder(fallbackServiceOrder)}>
                    {t(plugin.fileUpload.text.resetToDefault)}
                </Button>
            </div>
        </SettingsSection>
    );
}

function getShareXRequestUrl(config: string) {
    try {
        return parseShareXConfig(config).RequestURL;
    } catch {
        return undefined;
    }
}

function AllowHostNotice({ url }: { url?: string; }) {
    const [isAllowed, allow] = useCspPermission(url, ["connect-src"], "FileUpload");
    if (isAllowed || !url) return null;

    return (
        <Notice variant="warning" action={<Button size="small" variant="secondary" onClick={allow}>{t(csp.notice.allowHost)}</Button>}>
            {t(csp.notice.blocked, { host: URL.parse(url)?.host })}
        </Notice>
    );
}

export function SettingsComponent() {
    const update = useForceUpdater();
    const sharexFileInputRef = React.useRef<HTMLInputElement>(null);
    const { serviceType } = settings.store;
    const { serviceUrl, sharexConfig, corsProxyUrl } = settings.use(["serviceUrl", "sharexConfig", "corsProxyUrl"]);

    const validateShareXConfig = () => {
        try {
            parseShareXConfig(settings.store.sharexConfig || "");
            showToast({ text: t(plugin.fileUpload.toast.sharexConfigIsValid), variant: "success" });
        } catch (error) {
            const message = error instanceof Error ? error.message : t(plugin.fileUpload.toast.invalidSharexConfig);
            showToast({ text: message, variant: "critical" });
        }
    };

    const triggerShareXFileUpload = () => {
        sharexFileInputRef.current?.click();
    };

    const handleShareXFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = (e: ProgressEvent<FileReader>) => {
            try {
                const content = String(e.target?.result || "");
                const parsed = parseShareXConfig(content);
                settings.store.sharexConfig = JSON.stringify(parsed, null, 2);
                update();
                showToast({ text: t(plugin.fileUpload.toast.importedSharexConfig), variant: "success" });
            } catch (error) {
                const message = error instanceof Error ? error.message : t(plugin.fileUpload.toast.failedToImportSharexConfig);
                showToast({ text: message, variant: "critical" });
            }
        };
        reader.readAsText(file);
        event.target.value = "";
    };

    return (
        <>
            <SettingsSection id="upload-service" name={t(plugin.fileUpload.panel.uploadService)} description={t(plugin.fileUpload.text.chooseWhereFileuploadSends)}>
                <ServicePicker
                    value={settings.store.serviceType as ServiceType}
                    onChange={service => {
                        settings.store.serviceType = service;
                        update();
                    }}
                />
            </SettingsSection>

            {serviceType === ServiceType.ZIPLINE && (
                <SettingGroup name={t(plugin.fileUpload.panel.zipline)} description={t(plugin.fileUpload.text.connectionDetailsForYour)}>
                    <SettingTextInput
                        name={t(plugin.fileUpload.panel.serviceUrl)}
                        description={t(plugin.fileUpload.text.theUrlOfYour)}
                        value={settings.store.serviceUrl}
                        onChange={v => settings.store.serviceUrl = v}
                        placeholder="https://your-zipline-instance.com"
                    />
                    <AllowHostNotice url={serviceUrl} />
                    <SettingTextInput
                        name={t(plugin.fileUpload.panel.ziplineToken)}
                        description={t(plugin.fileUpload.text.yourZiplineApiAuthorization)}
                        value={settings.store.ziplineToken}
                        onChange={v => settings.store.ziplineToken = v}
                        placeholder={t(plugin.fileUpload.text.yourZiplineApiToken)}
                    />
                    <SettingTextInput
                        name={t(plugin.fileUpload.panel.folderId)}
                        description={t(plugin.fileUpload.text.folderIdForUploads)}
                        value={settings.store.folderId}
                        onChange={v => settings.store.folderId = v}
                        placeholder={t(plugin.fileUpload.text.leaveEmptyForNo)}
                    />
                </SettingGroup>
            )}

            {serviceType === ServiceType.EZHOST && (
                <SettingGroup name={t(plugin.fileUpload.panel.eZHost)} description={t(plugin.fileUpload.text.connectionDetailsForE)}>
                    <SettingTextInput
                        name={t(plugin.fileUpload.panel.eZHostApiKey)}
                        description={t(plugin.fileUpload.text.yourEZHost)}
                        value={settings.store.ezHostKey}
                        onChange={v => settings.store.ezHostKey = v}
                        placeholder={t(plugin.fileUpload.text.yourEZHost)}
                    />
                </SettingGroup>
            )}

            {serviceType === ServiceType.NEST && (
                <SettingGroup name={t(plugin.fileUpload.panel.nest)} description={t(plugin.fileUpload.text.connectionDetailsForNest)}>
                    <SettingTextInput
                        name={t(plugin.fileUpload.panel.nestToken)}
                        description={t(plugin.fileUpload.text.yourNestApiAuthorization)}
                        value={settings.store.nestToken}
                        onChange={v => settings.store.nestToken = v}
                        placeholder={t(plugin.fileUpload.text.yourNestApiToken)}
                    />
                </SettingGroup>
            )}

            {serviceType === ServiceType.ENCRYPTINGHOST && (
                <SettingGroup name={t(plugin.fileUpload.panel.encryptingHost)} description={t(plugin.fileUpload.text.connectionDetailsForEncrypting)}>
                    <SettingTextInput
                        name={t(plugin.fileUpload.panel.encryptingHostApiKey)}
                        description={t(plugin.fileUpload.text.yourEncryptingHostApi)}
                        value={(settings.store as { encryptingHostKey?: string; }).encryptingHostKey || ""}
                        onChange={v => (settings.store as { encryptingHostKey?: string; }).encryptingHostKey = v}
                        placeholder={t(plugin.fileUpload.text.yourEncryptingHostApi)}
                    />
                    <SettingsSection id="url-style" name={t(plugin.fileUpload.panel.urlStyle)} description={t(plugin.fileUpload.text.howEncryptingHostShould)}>
                        <Select
                            options={getEncryptingHostUrlStyleOptions()}
                            isSelected={v => v === (settings.store as { encryptingHostUrlStyle?: string; }).encryptingHostUrlStyle}
                            select={v => {
                                (settings.store as { encryptingHostUrlStyle?: string; }).encryptingHostUrlStyle = v;
                                update();
                            }}
                            serialize={v => v}
                            placeholder={t(plugin.fileUpload.text.selectUrlStyle)}
                        />
                    </SettingsSection>
                    <SettingsSection id="domains-json" name={t(plugin.fileUpload.panel.domainsJson)} description={t(plugin.fileUpload.panel.domainsJsonDescription)}>
                        <TextArea
                            value={(settings.store as { encryptingHostDomains?: string; }).encryptingHostDomains || ""}
                            rows={3}
                            placeholder='["offensive"]'
                            onChange={v => (settings.store as { encryptingHostDomains?: string; }).encryptingHostDomains = v}
                        />
                    </SettingsSection>
                    <SettingTextInput
                        name={t(plugin.fileUpload.panel.embedTitle)}
                        description={t(plugin.fileUpload.text.optionalTitleForEmbed)}
                        value={(settings.store as { encryptingHostTitle?: string; }).encryptingHostTitle || ""}
                        onChange={v => (settings.store as { encryptingHostTitle?: string; }).encryptingHostTitle = v}
                        placeholder={t(plugin.fileUpload.text.optionalTitle)}
                    />
                    <SettingTextInput
                        name={t(plugin.fileUpload.panel.embedColor)}
                        description={t(plugin.fileUpload.text.optionalColorForEmbed)}
                        value={(settings.store as { encryptingHostColor?: string; }).encryptingHostColor || ""}
                        onChange={v => (settings.store as { encryptingHostColor?: string; }).encryptingHostColor = v}
                        placeholder={t(plugin.fileUpload.text.optionalColor)}
                    />
                    <SettingTextInput
                        name={t(plugin.fileUpload.panel.fakeLink)}
                        description={t(plugin.fileUpload.text.optionalFakeLinkValue)}
                        value={(settings.store as { encryptingHostFakelink?: string; }).encryptingHostFakelink || ""}
                        onChange={v => (settings.store as { encryptingHostFakelink?: string; }).encryptingHostFakelink = v}
                        placeholder={t(plugin.fileUpload.text.optionalFakeLink)}
                    />
                </SettingGroup>
            )}

            {serviceType === ServiceType.S3 && (
                <SettingGroup name={t(plugin.fileUpload.panel.s3CompatibleStorage)} description={t(plugin.fileUpload.text.connectionDetailsAndObject)}>
                    <SettingTextInput
                        name={t(plugin.fileUpload.panel.s3EndpointUrl)}
                        description={t(plugin.fileUpload.text.s3CompatibleEndpointE)}
                        value={settings.store.s3Endpoint}
                        onChange={v => settings.store.s3Endpoint = v}
                        placeholder="https://your-endpoint.example.com"
                    />
                    <SettingTextInput
                        name={t(plugin.fileUpload.panel.bucketName)}
                        description={t(plugin.fileUpload.text.bucketToUploadInto)}
                        value={settings.store.s3Bucket}
                        onChange={v => settings.store.s3Bucket = v}
                        placeholder="my-bucket"
                    />
                    <SettingTextInput
                        name={t(plugin.fileUpload.panel.region)}
                        description={t(plugin.fileUpload.text.awsRegionOrAuto)}
                        value={settings.store.s3Region}
                        onChange={v => settings.store.s3Region = v}
                        placeholder="auto"
                    />
                    <SettingTextInput
                        name={t(plugin.fileUpload.panel.accessKeyId)}
                        description={t(plugin.fileUpload.text.s3CompatibleAccessKey)}
                        value={settings.store.s3AccessKeyId}
                        onChange={v => settings.store.s3AccessKeyId = v}
                        placeholder={t(plugin.fileUpload.text.yourAccessKeyId)}
                    />
                    <SettingTextInput
                        name={t(plugin.fileUpload.panel.secretAccessKey)}
                        description={t(plugin.fileUpload.text.s3CompatibleSecretKey)}
                        value={settings.store.s3SecretAccessKey}
                        onChange={v => settings.store.s3SecretAccessKey = v}
                        placeholder={t(plugin.fileUpload.text.yourSecretAccessKey)}
                    />
                    <SettingTextInput
                        name={t(plugin.fileUpload.panel.sessionToken)}
                        description={t(plugin.fileUpload.text.optionalTemporaryCredentialToken)}
                        value={settings.store.s3SessionToken}
                        onChange={v => settings.store.s3SessionToken = v}
                        placeholder={t(plugin.fileUpload.text.optionalSessionToken)}
                    />
                    <SettingTextInput
                        name={t(plugin.fileUpload.panel.publicBaseUrl)}
                        description={t(plugin.fileUpload.text.optionalPublicUrlBase)}
                        value={settings.store.s3PublicUrl}
                        onChange={v => settings.store.s3PublicUrl = v}
                        placeholder="https://cdn.example.com"
                    />
                    <SettingTextInput
                        name={t(plugin.fileUpload.panel.objectKeyPrefix)}
                        description={t(plugin.fileUpload.text.optionalFolderPrefixInside)}
                        value={settings.store.s3Prefix}
                        onChange={v => settings.store.s3Prefix = v}
                        placeholder="uploads/discord"
                    />
                    <SettingSwitch
                        name={t(plugin.fileUpload.panel.usePathStyleEndpoint)}
                        description={t(plugin.fileUpload.text.useEndpointBucketKey)}
                        checked={settings.store.s3ForcePathStyle}
                        onChange={v => settings.store.s3ForcePathStyle = v}
                    />
                </SettingGroup>
            )}

            {serviceType === ServiceType.CATBOX && (
                <SettingGroup name={t(plugin.fileUpload.panel.catbox)} description={t(plugin.fileUpload.text.optionalAccountBindingFor)}>
                    <SettingTextInput
                        name={t(plugin.fileUpload.panel.catboxUserhash)}
                        description={t(plugin.fileUpload.text.yourCatboxUserhashFor)}
                        value={settings.store.catboxUserhash}
                        onChange={v => settings.store.catboxUserhash = v}
                        placeholder={t(plugin.fileUpload.text.yourCatboxUserhash)}
                    />
                </SettingGroup>
            )}

            {serviceType === ServiceType.LITTERBOX && (
                <SettingsSection id="litterbox-expiry" name={t(plugin.fileUpload.panel.litterboxExpiry)} description={t(plugin.fileUpload.text.howLongUploadsAre)}>
                    <Select
                        options={getLitterboxOptions()}
                        isSelected={v => v === settings.store.litterboxExpiry}
                        select={v => {
                            settings.store.litterboxExpiry = v;
                            update();
                        }}
                        serialize={v => v}
                        placeholder={t(plugin.fileUpload.text.selectExpiry)}
                    />
                </SettingsSection>
            )}

            {serviceType === ServiceType.GOFILE && (
                <SettingGroup name={t(plugin.fileUpload.panel.gofile)} description={t(plugin.fileUpload.text.optionalAccountBindingFor2)}>
                    <SettingTextInput
                        name={t(plugin.fileUpload.panel.gofileToken)}
                        description={t(plugin.fileUpload.text.optionalGofileTokenTo)}
                        value={settings.store.gofileToken}
                        onChange={v => settings.store.gofileToken = v}
                        placeholder={t(plugin.fileUpload.text.optionalGofileToken)}
                    />
                </SettingGroup>
            )}

            {serviceType === ServiceType.PIXELVAULT && (
                <SettingGroup name={t(plugin.fileUpload.panel.pixelvault)} description={t(plugin.fileUpload.text.connectionDetailsForPixelvault)}>
                    <SettingTextInput
                        name={t(plugin.fileUpload.panel.pixelvaultUploadKey)}
                        description={t(plugin.fileUpload.text.yourPixelvaultAuthorizationKey)}
                        value={settings.store.pixelVaultKey}
                        onChange={v => settings.store.pixelVaultKey = v}
                        placeholder={t(plugin.fileUpload.text.yourPixelvaultUploadKey)}
                    />
                </SettingGroup>
            )}

            {serviceType === ServiceType.PIXELDRAIN && (
                <SettingGroup name={t(plugin.fileUpload.panel.pixeldrain)} description={t(plugin.fileUpload.text.optionalAccountBindingFor3)}>
                    <SettingTextInput
                        name={t(plugin.fileUpload.panel.pixeldrainApiKey)}
                        description={t(plugin.fileUpload.text.optionalPixeldrainApiKey)}
                        value={settings.store.pixelDrainKey}
                        onChange={v => settings.store.pixelDrainKey = v}
                        placeholder={t(plugin.fileUpload.text.yourPixeldrainApiKey)}
                    />
                </SettingGroup>
            )}

            {serviceType === ServiceType.SHAREX && (
                <SettingGroup name={t(plugin.fileUpload.panel.sharexCustomUploader)} description={t(plugin.fileUpload.text.pasteImportOrValidate)}>
                    <SettingsSection
                        id="sharex-custom-uploader-config"
                        name={t(plugin.fileUpload.panel.sharexCustomUploaderConfig)}
                        description={t(plugin.fileUpload.text.pasteYourSharexCustom)}
                    >
                        <TextArea
                            value={settings.store.sharexConfig}
                            rows={10}
                            placeholder='{"RequestMethod":"POST","RequestURL":"https://example.com/api/upload","Body":"MultipartFormData"}'
                            onChange={v => settings.store.sharexConfig = v}
                        />
                    </SettingsSection>
                    <SettingsSection id="sharex-config-actions" name={t(plugin.fileUpload.panel.sharexConfigActions)} description={t(plugin.fileUpload.text.importFromFileOr)}>
                        <div className={cl("actions")}>
                            <Button size="small" onClick={triggerShareXFileUpload}>{t(plugin.fileUpload.text.importSxcuJson)}</Button>
                            <Button size="small" onClick={validateShareXConfig}>{t(plugin.fileUpload.text.validate)}</Button>
                        </div>
                        <input
                            ref={sharexFileInputRef}
                            type="file"
                            accept=".sxcu,.json,application/json,text/plain"
                            style={{ display: "none" }}
                            onChange={handleShareXFileUpload}
                        />
                    </SettingsSection>
                    <AllowHostNotice url={getShareXRequestUrl(sharexConfig || "")} />
                </SettingGroup>
            )}

            {serviceType === ServiceType.WEBDAV && (
                <SettingGroup name={t(plugin.fileUpload.panel.webdav)} description={t(plugin.fileUpload.text.connectionDetailsForWebdav)}>
                    <SettingTextInput
                        name={t(plugin.fileUpload.panel.serverUrl)}
                        description={t(plugin.fileUpload.text.baseWebdavUrlE)}
                        value={settings.store.webdavUrl}
                        onChange={v => settings.store.webdavUrl = v}
                        placeholder="https://nextcloud.example.com/remote.php/dav/files/username"
                    />
                    <SettingTextInput
                        name={t(plugin.fileUpload.panel.username)}
                        description={t(plugin.fileUpload.option.webdavUsername.description)}
                        value={settings.store.webdavUsername}
                        onChange={v => settings.store.webdavUsername = v}
                        placeholder="username"
                    />
                    <SettingTextInput
                        name={t(plugin.fileUpload.panel.passwordOrAppToken)}
                        description={t(plugin.fileUpload.option.webdavPassword.description)}
                        value={settings.store.webdavPassword}
                        onChange={v => settings.store.webdavPassword = v}
                        placeholder={t(plugin.fileUpload.panel.passwordOrAppToken2)}
                    />
                    <SettingTextInput
                        name={t(plugin.fileUpload.panel.uploadDirectory)}
                        description={t(plugin.fileUpload.text.optionalSubdirectoryOnThe)}
                        value={settings.store.webdavDirectory}
                        onChange={v => settings.store.webdavDirectory = v}
                        placeholder={t(plugin.fileUpload.text.leaveEmptyForRoot)}
                    />
                    <SettingsSection id="server-type" name={t(plugin.fileUpload.panel.serverType)} description={t(plugin.fileUpload.text.selectYourWebdavServer)}>
                        <Select
                            options={[
                                { label: t(plugin.fileUpload.option.webdavServerType.nextcloud), value: "nextcloud", default: true },
                                { label: "ownCloud", value: "owncloud" },
                                { label: t(plugin.fileUpload.option.webdavServerType.generic), value: "generic" }
                            ]}
                            isSelected={v => v === settings.store.webdavServerType}
                            select={v => {
                                settings.store.webdavServerType = v;
                                update();
                            }}
                            serialize={v => v}
                            placeholder={t(plugin.fileUpload.text.selectServerType)}
                        />
                    </SettingsSection>
                    {settings.store.webdavServerType !== "generic" && (
                        <SettingsSection id="share-link-format" name={t(plugin.fileUpload.panel.shareLinkFormat)} description={t(plugin.fileUpload.text.howToReturnThe)}>
                            <Select
                                options={[
                                    { label: t(plugin.fileUpload.option.webdavShareType.sharepage), value: "share-page", default: true },
                                    { label: t(plugin.fileUpload.option.webdavShareType.directdownload), value: "direct-download" },
                                    { label: t(plugin.fileUpload.option.webdavShareType.markdown), value: "markdown" }
                                ]}
                                isSelected={v => v === settings.store.webdavShareType}
                                select={v => {
                                    settings.store.webdavShareType = v;
                                    update();
                                }}
                                serialize={v => v}
                                placeholder={t(plugin.fileUpload.text.selectShareLinkFormat)}
                            />
                        </SettingsSection>
                    )}
                </SettingGroup>
            )}

            <SettingGroup name={t(plugin.fileUpload.panel.uploadBehavior)} description={t(plugin.fileUpload.text.controlWhatFileuploadDoes)}>
                <SettingSwitch
                    name={t(plugin.fileUpload.panel.stripQueryParameters)}
                    description={t(plugin.fileUpload.text.stripQueryParametersFrom)}
                    checked={settings.store.stripQueryParams}
                    onChange={v => settings.store.stripQueryParams = v}
                />

                <SettingSwitch
                    name={t(plugin.fileUpload.panel.useEmbedProxy)}
                    description={t(plugin.fileUpload.text.wrapUploadedVideoLinks)}
                    checked={settings.store.embedProxyEnabled}
                    onChange={v => {
                        settings.store.embedProxyEnabled = v;
                        update();
                    }}
                />

                {settings.store.embedProxyEnabled && (
                    <SettingsSection id="embed-proxy-service" name={t(plugin.fileUpload.panel.embedProxyService)} description={t(plugin.fileUpload.text.chooseWhichEmbedProxy)}>
                        <Select
                            options={getEmbedProxyOptions()}
                            isSelected={v => v === settings.store.embedProxyService}
                            select={v => {
                                settings.store.embedProxyService = v;
                                update();
                            }}
                            serialize={v => v}
                            placeholder={t(plugin.fileUpload.text.selectAnEmbedProxy)}
                        />
                    </SettingsSection>
                )}

                <SettingSwitch
                    name={t(plugin.fileUpload.panel.convertApngToGif)}
                    description={t(plugin.fileUpload.text.convertApngFilesTo)}
                    checked={settings.store.apngToGif}
                    onChange={v => settings.store.apngToGif = v}
                />

                <SettingSwitch
                    name={t(plugin.fileUpload.panel.preserveOriginalFilename)}
                    description={t(plugin.fileUpload.text.useTheOriginalFilename)}
                    checked={Boolean((settings.store as { preserveOriginalFilename?: boolean; }).preserveOriginalFilename)}
                    onChange={v => (settings.store as { preserveOriginalFilename?: boolean; }).preserveOriginalFilename = v}
                />

                <SettingSwitch
                    name={t(plugin.fileUpload.panel.autoCopyUrl)}
                    description={t(plugin.fileUpload.text.automaticallyCopyTheUploaded)}
                    checked={settings.store.autoCopy}
                    onChange={v => settings.store.autoCopy = v}
                />

                <SettingSwitch
                    name={t(plugin.fileUpload.panel.disableFallbackUploaders)}
                    description={t(plugin.fileUpload.text.onlyUseTheSelected)}
                    checked={settings.store.disableFallbacks}
                    onChange={v => settings.store.disableFallbacks = v}
                />

                <SettingSwitch
                    name={t(plugin.fileUpload.panel.insertUrlIntoChatInput)}
                    description={t(plugin.fileUpload.text.afterUploadInsertThe)}
                    checked={settings.store.autoSend}
                    onChange={v => settings.store.autoSend = v}
                />

                <SettingSwitch
                    name={t(plugin.fileUpload.panel.formatInsertedUrl)}
                    description={t(plugin.fileUpload.text.wrapInsertedUrlsIn)}
                    checked={settings.store.autoFormat}
                    onChange={v => settings.store.autoFormat = v}
                />
            </SettingGroup>

            <SettingGroup name={t(plugin.fileUpload.panel.discordIntegration)} description={t(plugin.fileUpload.text.chooseWhenFileuploadTakes)}>
                <SettingSwitch
                    name={t(plugin.fileUpload.panel.bypassDiscordUploadButton)}
                    description={t(plugin.fileUpload.text.useFileuploadWhenUploading)}
                    checked={Boolean((settings.store as { bypassDiscordUpload?: boolean; }).bypassDiscordUpload)}
                    onChange={v => (settings.store as { bypassDiscordUpload?: boolean; }).bypassDiscordUpload = v}
                />

                <SettingSwitch
                    name={t(plugin.fileUpload.panel.autoUploadPastedFiles)}
                    description={t(plugin.fileUpload.option.autoUploadPastedFiles.description)}
                    checked={settings.store.autoUploadPastedFiles}
                    onChange={v => settings.store.autoUploadPastedFiles = v}
                />

                <SettingSwitch
                    name={t(plugin.fileUpload.panel.respectDiscordFileSizeLimit)}
                    description={t(plugin.fileUpload.text.useFileuploadOnlyFor)}
                    checked={settings.store.bypassDiscordUploadOnlyOverLimit}
                    onChange={v => settings.store.bypassDiscordUploadOnlyOverLimit = v}
                />

                <SettingTextInput
                    name={t(plugin.fileUpload.panel.discordLimitOverrideMb)}
                    description={t(plugin.fileUpload.text.manualDiscordFileSize)}
                    value={settings.store.customDiscordFileSizeLimitMB > 0 ? String(settings.store.customDiscordFileSizeLimitMB) : ""}
                    onChange={v => settings.store.customDiscordFileSizeLimitMB = v.trim() === "" ? 0 : Number(v)}
                    placeholder={t(plugin.fileUpload.text.auto)}
                />

                <SettingTextInput
                    name={t(plugin.fileUpload.panel.allowedFileTypes)}
                    description={t(plugin.fileUpload.text.commaSeparatedListOf)}
                    value={settings.store.uploadAllowedFileTypes}
                    onChange={v => settings.store.uploadAllowedFileTypes = v}
                    placeholder="png,jpg,gif,mp4,webp"
                />
            </SettingGroup>

            <SettingGroup name={t(plugin.fileUpload.panel.network)} description={t(plugin.fileUpload.text.configureBrowserUploadProxying)}>
                <SettingTextInput
                    name={t(plugin.fileUpload.panel.corsProxyUrl)}
                    description={t(plugin.fileUpload.text.corsProxyUsedFor)}
                    value={settings.store.corsProxyUrl || ""}
                    onChange={v => settings.store.corsProxyUrl = v}
                    placeholder="https://your-cors-proxy.example.com"
                />
                <AllowHostNotice url={corsProxyUrl} />

                <SettingsSection id="upload-timeout" name={t(plugin.fileUpload.panel.uploadTimeout)} description={t(plugin.fileUpload.text.maximumTimeToWait)}>
                    <Select
                        options={[
                            { label: t(plugin.fileUpload.text.n30Seconds), value: 30000 },
                            { label: t(plugin.fileUpload.text.n1Minute), value: 60000 },
                            { label: t(plugin.fileUpload.text.n2Minutes), value: 120000 },
                            { label: t(plugin.fileUpload.text.n5Minutes), value: 300000, default: true },
                            { label: t(plugin.fileUpload.text.n10Minutes), value: 600000 }
                        ]}
                        isSelected={v => v === (settings.store.uploadTimeoutMs || 300000)}
                        select={v => {
                            settings.store.uploadTimeoutMs = v;
                            update();
                        }}
                        serialize={v => v}
                        placeholder={t(plugin.fileUpload.text.selectTimeout)}
                    />
                </SettingsSection>

                {Native && (
                    <SettingsSection id="approved-servers" name={t(plugin.fileUpload.panel.approvedServers)} description={t(plugin.fileUpload.panel.approvedServersDescription)}>
                        <Button
                            size="small"
                            onClick={async () => {
                                await Native.clearApprovedOrigins();
                                showToast({ text: t(plugin.fileUpload.toast.approvedServersReset), variant: "success" });
                            }}
                        >
                            {t(plugin.fileUpload.panel.resetApprovedServers)}
                        </Button>
                    </SettingsSection>
                )}
            </SettingGroup>

            <FallbackOrderSettings />
        </>
    );
}
