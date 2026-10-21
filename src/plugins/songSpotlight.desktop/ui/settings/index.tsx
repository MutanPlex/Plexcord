/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2026 Vendicated and contributors
 * Copyright (c) 2026 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { plugin, t } from "@api/i18n";
import { BaseText } from "@components/BaseText";
import { Button } from "@components/Button";
import ErrorBoundary from "@components/ErrorBoundary";
import { Flex } from "@components/Flex";
import { RenderModalProps } from "@plexcord/discord-types";
import { apiConstants, deleteData, getData, saveData } from "@plugins/songSpotlight.desktop/lib/api";
import { presentOAuth2Modal } from "@plugins/songSpotlight.desktop/lib/oauth2";
import { useAuthorizationStore } from "@plugins/songSpotlight.desktop/lib/stores/AuthorizationStore";
import { useSongStore } from "@plugins/songSpotlight.desktop/lib/stores/SongStore";
import { cl } from "@plugins/songSpotlight.desktop/lib/utils";
import { Native } from "@plugins/songSpotlight.desktop/service";
import { Spinner } from "@plugins/songSpotlight.desktop/ui/common";
import SongList from "@plugins/songSpotlight.desktop/ui/settings/SongList";
import { UserData, UserDataSchema } from "@song-spotlight/api/structs";
import { sid } from "@song-spotlight/api/util";
import { readClipboard } from "@utils/clipboard";
import { copyWithToast } from "@utils/discord";
import { Alerts, Modal, openModal, Parser, showToast, useCallback, useEffect, useMemo, useRef, useState } from "@webpack/common";

interface ImportButtonProps {
    overwrite: boolean;
    pending: boolean;
    setPending(pending: boolean): void;
    onImport(data: UserData): void;
}

function ImportButton({ overwrite, pending, setPending, onImport }: ImportButtonProps) {
    const checkClipboard = useCallback(async () => {
        setPending(true);

        let json: unknown;
        try {
            json = JSON.parse(await readClipboard());
        } catch {
            setPending(false);
            return showToast({ text: t(plugin.songSpotlight.toast.noJsonInClipboard), variant: "critical" });
        }

        const { error, data } = UserDataSchema.max(apiConstants.songLimit).safeParse(json);
        if (error) {
            setPending(false);
            return showToast({ text: t(plugin.songSpotlight.toast.invalidSongSpotlightData), variant: "critical" });
        }

        const validated = await Promise.allSettled(data.map(song => Native.validateSong(song)));
        if (!validated.every(x => x.status === "fulfilled" && x.value)) {
            setPending(false);
            return showToast({ text: t(plugin.songSpotlight.toast.oneOrMoreImported), variant: "critical" });
        }

        onImport(data);
        setPending(false);
        showToast({ text: t(plugin.songSpotlight.toast.importedSongsFromClipboard), variant: "success" });
    }, [pending]);

    return (
        <Button
            variant="secondary"
            onClick={async () => {
                if (overwrite) {
                    Alerts.show({
                        title: t(plugin.songSpotlight.text.areYouSure),
                        body: t(plugin.songSpotlight.text.thisWillOverwriteYour),
                        onConfirm: checkClipboard,
                        confirmText: t(plugin.songSpotlight.text.continue),
                        cancelText: t(plugin.songSpotlight.text.nevermind),
                    });
                } else checkClipboard();
            }}
            disabled={pending}
        >
            {t(plugin.songSpotlight.text.importFromClipboard)}
        </Button>
    );
}

interface SettingsProps {
    templateData?: UserData;
}

export default function Settings({ templateData }: SettingsProps) {
    const { isAuthorized, deleteTokens } = useAuthorizationStore();
    const { self } = useSongStore();

    const ticked = useRef(false);
    const [localData, setLocalData] = useState(templateData ?? self?.data);
    useEffect(() => {
        // only setLocalData on the second time this effect runs
        if (ticked.current) setLocalData(self?.data);
        else ticked.current = true;
    }, [self?.data]);
    const [pending, setPending] = useState(!localData);

    const isSame = useMemo(() =>
        self?.data && localData
            ? self.data.length === localData.length && self.data.map(sid).join(",") === localData.map(sid).join(",")
            : true, [self?.data, localData]);

    useEffect(() => {
        if (isAuthorized() && !localData) getData().then(() => setPending(false));
    }, [isAuthorized()]);

    if (!isAuthorized()) return <Button onClick={() => presentOAuth2Modal()}>{t(plugin.songSpotlight.text.signInToSong)}</Button>;

    return (
        <Flex flexDirection="column" gap="20px">
            <BaseText size="md" weight="normal">
                {t(plugin.songSpotlight.text.viewSongsVia)} {Parser.parse("</songspotlight:1468320979938971802>")} {t(plugin.songSpotlight.text.viewSongsViaSuffix)}
            </BaseText>
            {localData
                ? (
                    <Flex flexDirection="column" gap="12px">
                        <Flex flexDirection="column" gap={0}>
                            <BaseText size="lg" weight="semibold">{t(plugin.songSpotlight.text.songs)}</BaseText>
                            {self?.at
                                && (
                                    <BaseText size="xs" weight="normal" className={cl("sub")}>
                                        {t(plugin.songSpotlight.text.lastUpdated)} <b>{Intl.DateTimeFormat().format(new Date(self.at))}</b>
                                    </BaseText>
                                )}
                        </Flex>
                        <Flex flexDirection="column" gap="6px">
                            <SongList
                                localData={localData}
                                setLocalData={setLocalData}
                            />
                        </Flex>
                        <Flex flexDirection="column" gap="8px">
                            <div className={cl("twin-buttons")}>
                                <Button
                                    variant="secondary"
                                    onClick={() => copyWithToast(JSON.stringify(localData))}
                                    disabled={pending}
                                >
                                    {t(plugin.songSpotlight.text.copyToClipboard)}
                                </Button>
                                <ImportButton
                                    overwrite={!!localData[0]}
                                    pending={pending}
                                    setPending={setPending}
                                    onImport={setLocalData}
                                />
                            </div>
                            <Button
                                variant="primary"
                                onClick={async () => {
                                    setPending(true);
                                    try {
                                        await saveData(localData);
                                        showToast({ text: t(plugin.songSpotlight.toast.successfullySavedSongs), variant: "success" });
                                    } finally {
                                        setPending(false);
                                    }
                                }}
                                disabled={isSame || pending}
                            >
                                {t(plugin.songSpotlight.text.save)}
                            </Button>
                        </Flex>
                    </Flex>
                )
                : <Spinner type={Spinner.Type.WANDERING_CUBES} />}
            <Flex flexDirection="column" gap="12px">
                <BaseText size="lg" weight="semibold">{t(plugin.songSpotlight.text.authorization)}</BaseText>
                <div className={cl("twin-buttons")}>
                    <Button
                        variant="dangerPrimary"
                        onClick={() => {
                            deleteTokens();
                            showToast({ text: t(plugin.songSpotlight.toast.successfullySignedOut), variant: "success" });
                        }}
                        disabled={pending}
                    >
                        {t(plugin.songSpotlight.text.signOut)}
                    </Button>
                    <Button
                        variant="dangerSecondary"
                        onClick={() =>
                            Alerts.show({
                                title: t(plugin.songSpotlight.text.areYouSure),
                                body: t(plugin.songSpotlight.text.thisWillPermanentlyDelete),
                                onConfirm: async () => {
                                    setPending(true);
                                    try {
                                        await deleteData();
                                        deleteTokens();

                                        showToast({ text: t(plugin.songSpotlight.toast.successfullyDeletedSongs), variant: "success" });
                                    } finally {
                                        setPending(false);
                                    }
                                },
                                confirmColor: "danger",
                                confirmText: t(plugin.songSpotlight.text.delete),
                                cancelText: t(plugin.songSpotlight.text.nevermind),
                            })}
                        disabled={!self?.data[0] || pending}
                    >
                        {t(plugin.songSpotlight.text.deleteSongs)}
                    </Button>
                </div>
            </Flex>
        </Flex>
    );
}

export function SettingsModal({ modalProps, ...props }: SettingsProps & { modalProps: RenderModalProps; }) {
    return (
        <ErrorBoundary>
            <Modal {...modalProps} size="lg" title={t(plugin.songSpotlight.text.songSpotlight)}>
                <div style={{ marginBottom: "20px" }}>
                    <Settings {...props} />
                </div>
            </Modal>
        </ErrorBoundary>
    );
}

export function openSettingsModal(templateData?: UserData) {
    openModal(modalProps => <SettingsModal modalProps={modalProps} templateData={templateData} />);
}
