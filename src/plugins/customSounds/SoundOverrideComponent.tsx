/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2023 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { AudioPlayerInterface, playAudio } from "@api/AudioPlayer";
import { t } from "@api/i18n";
import { classNameFactory } from "@api/Styles";
import { Button } from "@components/Button";
import { Card } from "@components/Card";
import { FormSwitch } from "@components/FormSwitch";
import { Heading } from "@components/Heading";
import { Margins } from "@utils/margins";
import { useForceUpdater } from "@utils/react";
import { makeRange } from "@utils/types";
import { findLazy } from "@webpack";
import { React, Select, showToast, Slider, useEffect } from "@webpack/common";
import { ComponentType, Ref, SyntheticEvent } from "react";

import { deleteAudio, getAllAudio, saveAudio, StoredAudioFile } from "./audioStore";
import { ensureDataURICached } from "./index";
import { SoundOverride, SoundType } from "./types";

type FileInput = ComponentType<{
    ref: Ref<HTMLInputElement>;
    onChange: (e: SyntheticEvent<HTMLInputElement>) => void;
    multiple?: boolean;
    filters?: { name?: string; extensions: string[]; }[];
}>;

const AUDIO_EXTENSIONS = ["mp3", "wav", "ogg", "m4a", "aac", "flac", "webm", "wma", "mp4"];
const cl = classNameFactory("pc-custom-sounds-");
const FileInput: FileInput = findLazy(m => m.prototype?.activateUploadDialogue && m.prototype.setRef);

const capitalizeWords = (str: string) =>
    str.replace(/_/g, " ").replace(/\b\w/g, c => c.toUpperCase());

export function SoundOverrideComponent({ type, override, onChange }: {
    type: SoundType;
    override: SoundOverride;
    onChange: () => Promise<void>;
}) {
    const fileInputRef = React.useRef<HTMLInputElement>(null);
    const update = useForceUpdater();
    const sound = React.useRef<AudioPlayerInterface | null>(null);
    const [files, setFiles] = React.useState<Record<string, StoredAudioFile>>({});

    useEffect(() => {
        getAllAudio().then(setFiles);
    }, []);

    const saveAndNotify = async () => {
        await onChange();
        update();
    };

    const previewSound = async () => {
        sound.current?.stop();

        if (!override.enabled) {
            sound.current = playAudio(type.id);
            return;
        }

        const { selectedSound } = override;

        if (selectedSound === "custom" && override.selectedFileId) {
            try {
                const dataUri = await ensureDataURICached(override.selectedFileId);

                if (!dataUri || !dataUri.startsWith("data:audio/")) {
                    showToast(t("plugin.customSounds.toast.invalidFile"));
                    return;
                }

                sound.current = playAudio(dataUri, {
                    volume: override.volume, onError: e => {
                        console.error("[CustomSounds] Error playing custom audio:", e);
                        showToast(t("plugin.customSounds.toast.playing"));
                    }
                });
            } catch (error) {
                console.error("[CustomSounds] Error in previewSound:", error);
                showToast(t("plugin.customSounds.toast.previewSound"));
            }
        } else if (selectedSound === "default") {
            sound.current = playAudio(type.id);
        } else {
            sound.current = playAudio(selectedSound);
        }
    };

    const uploadFile = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (!file) return;

        const fileExtension = file.name.split(".").pop()?.toLowerCase();
        if (!fileExtension || !AUDIO_EXTENSIONS.includes(fileExtension)) {
            showToast(t("plugin.customSounds.toast.invalidExtension"));
            event.target.value = "";
            return;
        }

        try {
            showToast(t("plugin.customSounds.toast.uploading"));
            const id = await saveAudio(file);

            const savedFiles = await getAllAudio();
            setFiles(savedFiles);

            override.selectedFileId = id;
            override.selectedSound = "custom";

            await ensureDataURICached(id);
            await saveAndNotify();

            showToast(t("plugin.customSounds.toast.uploaded", { fileName: file.name }));
        } catch (error) {
            console.error("[CustomSounds] Error uploading file:", error);
            showToast(t("plugin.customSounds.toast.uploadError", { error: error }));
        }

        event.target.value = "";
    };

    const deleteFile = async (id: string) => {
        try {
            await deleteAudio(id);
            const updated = await getAllAudio();
            setFiles(updated);

            if (override.selectedFileId === id) {
                override.selectedFileId = undefined;
                override.selectedSound = "default";
                await saveAndNotify();
            } else {
                update();
            }
            showToast(t("plugin.customSounds.toast.deleted"));
        } catch (error) {
            console.error("[CustomSounds] Error deleting file:", error);
            showToast(t("plugin.customSounds.toast.deleteError"));
        }
    };

    const customFileOptions = Object.entries(files)
        .filter(([id, file]) => !!id && !!file?.name)
        .map(([id, file]) => ({
            value: id,
            label: file.name
        }));

    return (
        <Card className={cl("card")}>
            <FormSwitch
                value={override.enabled || false}
                onChange={async val => {
                    console.log(`[CustomSounds] Setting ${type.id} enabled to:`, val);

                    override.enabled = val;

                    if (val && override.selectedSound === "custom" && override.selectedFileId) {
                        try {
                            await ensureDataURICached(override.selectedFileId);
                        } catch (error) {
                            console.error(`[CustomSounds] Failed to cache data URI for ${type.id}:`, error);
                            showToast(t("plugin.customSounds.toast.loadingError"));
                        }
                    }

                    await saveAndNotify();
                    console.log("[CustomSounds] After setting enabled, override.enabled =", override.enabled);
                }}
                className={Margins.bottom16}
                hideBorder
                title={type.name}
            />

            {override.enabled && (
                <>
                    <div style={{ display: "flex", gap: "8px", marginBottom: "16px" }}>
                        <Button
                            variant="positive"
                            onClick={previewSound}
                        >
                            {t("plugin.customSounds.button.preview")}
                        </Button>
                        <Button
                            variant="dangerPrimary"
                            onClick={() => sound.current?.stop()}
                        >
                            {t("plugin.customSounds.button.stop")}
                        </Button>
                    </div>

                    <Heading>{t("plugin.customSounds.button.volume")}</Heading>
                    <Slider
                        markers={makeRange(0, 100, 10)}
                        initialValue={override.volume}
                        onValueChange={val => {
                            sound.current && (sound.current.volume = val);
                            override.volume = val;
                            saveAndNotify();
                        }}
                        className={Margins.bottom16}
                        disabled={!override.enabled}
                    />

                    <Heading>{t("plugin.customSounds.button.soundSource")}</Heading>
                    <Select
                        options={[
                            { value: "default", label: t("plugin.customSounds.option.default") },
                            ...(type.seasonal?.map(id => ({ value: id, label: capitalizeWords(id) })) ?? []),
                            { value: "custom", label: t("plugin.customSounds.option.custom") }
                        ]}
                        isSelected={v => v === override.selectedSound}
                        select={async v => {
                            override.selectedSound = v;

                            if (v === "custom" && override.selectedFileId) {
                                try {
                                    await ensureDataURICached(override.selectedFileId);
                                } catch (error) {
                                    console.error(`[CustomSounds] Failed to cache data URI for ${type.id}:`, error);
                                    showToast(t("plugin.customSounds.toast.loadingError"));
                                }
                            }

                            await saveAndNotify();
                        }}
                        serialize={opt => opt.value}
                        className={Margins.bottom16}
                    />

                    {override.selectedSound === "custom" && (
                        <>
                            <Heading>{t("plugin.customSounds.button.customFile")}</Heading>
                            <Select
                                options={[
                                    { value: "", label: t("plugin.customSounds.option.select") },
                                    ...customFileOptions
                                ]}
                                isSelected={v => v === (override.selectedFileId || "")}
                                select={async id => {
                                    if (!id) {
                                        override.selectedFileId = undefined;
                                    } else {
                                        override.selectedFileId = id;
                                        await ensureDataURICached(id);
                                    }

                                    await saveAndNotify();
                                }}
                                serialize={opt => opt.value}
                                className={Margins.bottom8}
                            />
                            <input
                                ref={fileInputRef}
                                type="file"
                                accept=".mp3,.wav,.ogg,.m4a,.flac,.aac,.webm,.wma,.mp4"
                                style={{ display: "none" }}
                                onChange={uploadFile}
                            />
                            <div style={{ display: "flex", gap: "8px", marginBottom: "16px" }}>
                                <Button
                                    onClick={() => fileInputRef.current?.click()}
                                    variant="secondary"
                                >
                                    {t("plugin.customSounds.button.uploadNew")}
                                </Button>

                                {override.selectedFileId && files[override.selectedFileId] && (
                                    <Button
                                        variant="dangerPrimary"
                                        onClick={() => deleteFile(override.selectedFileId!)}
                                    >
                                        {t("plugin.customSounds.button.delete")}
                                    </Button>
                                )}
                            </div>
                        </>
                    )}
                </>
            )}
        </Card>
    );
}
