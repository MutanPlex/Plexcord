/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2023 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { t, tJsx } from "@api/i18n";
import ErrorBoundary from "@components/ErrorBoundary";
import { Link } from "@components/Link";
import { GUILD_ID, INVITE_KEY, RAW_SKU_ID } from "@plugins/decor/lib/constants";
import { useCurrentUserDecorationsStore } from "@plugins/decor/lib/stores/CurrentUserDecorationsStore";
import { cl, DecorationModalStyles, requireAvatarDecorationModal, requireCreateStickerModal } from "@plugins/decor/ui";
import { AvatarDecorationModalPreview } from "@plugins/decor/ui/components";
import { openInviteModal } from "@utils/discord";
import { Margins } from "@utils/margins";
import { closeAllModals, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalProps, ModalRoot, ModalSize, openModal } from "@utils/modal";
import { filters, findComponentByCodeLazy, mapMangledModuleLazy } from "@webpack";
import { Button, FluxDispatcher, Forms, GuildStore, NavigationRouter, Text, TextInput, useEffect, useMemo, UserStore, useState } from "@webpack/common";

const FileUpload = findComponentByCodeLazy(".fileUpload),");

const { HelpMessage, HelpMessageTypes } = mapMangledModuleLazy('POSITIVE="positive', {
    HelpMessageTypes: filters.byProps("POSITIVE", "WARNING", "INFO"),
    HelpMessage: filters.byCode(".iconDiv")
});

function useObjectURL(object: Blob | MediaSource | null) {
    const [url, setUrl] = useState<string | null>(null);

    useEffect(() => {
        if (!object) return;

        const objectUrl = URL.createObjectURL(object);
        setUrl(objectUrl);

        return () => {
            URL.revokeObjectURL(objectUrl);
            setUrl(null);
        };
    }, [object]);

    return url;
}

function CreateDecorationModal(props: ModalProps) {
    const [name, setName] = useState("");
    const [file, setFile] = useState<File | null>(null);
    const [submitting, setSubmitting] = useState(false);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        if (error) setError(null);
    }, [file]);

    const { create: createDecoration } = useCurrentUserDecorationsStore();

    const fileUrl = useObjectURL(file);

    const decoration = useMemo(() => fileUrl ? { asset: fileUrl, skuId: RAW_SKU_ID } : null, [fileUrl]);

    return <ModalRoot
        {...props}
        size={ModalSize.MEDIUM}
        className={DecorationModalStyles.modal}
    >
        <ModalHeader separator={false} className={cl("modal-header")}>
            <Text
                color="header-primary"
                variant="heading-lg/semibold"
                tag="h1"
                style={{ flexGrow: 1 }}
            >
                {t("plugin.decor.create.title")}
            </Text>
            <ModalCloseButton onClick={props.onClose} />
        </ModalHeader>
        <ModalContent
            className={cl("create-decoration-modal-content")}
            scrollbarType="none"
        >
            <ErrorBoundary>
                <HelpMessage messageType={HelpMessageTypes.WARNING}>
                    {tJsx("plugin.decor.create.notViolate", {
                        guidelines: <Link href="https://github.com/decor-discord/.github/blob/main/GUIDELINES.md">{t("plugin.decor.create.guidelines")}</Link>
                    })}
                </HelpMessage>
                <div className={cl("create-decoration-modal-form-preview-container")}>
                    <div className={cl("create-decoration-modal-form")}>
                        {error !== null && <Text color="text-danger" variant="text-xs/normal">{error.message}</Text>}
                        <section>
                            <Forms.FormTitle>{t("plugin.decor.file")}</Forms.FormTitle>
                            <FileUpload
                                filename={file?.name}
                                placeholder={t("plugin.decor.create.fileHolder")}
                                buttonText={t("plugin.decor.button.browse")}
                                filters={[{ name: "Decoration file", extensions: ["png", "apng"] }]}
                                onFileSelect={setFile}
                            />
                            <Forms.FormText className={Margins.top8}>
                                {t("plugin.decor.create.file")}
                            </Forms.FormText>
                        </section>
                        <section title={t("plugin.decor.create.nameTitle")}>
                            <TextInput
                                placeholder={t("plugin.decor.create.nameHolder")}
                                value={name}
                                onChange={setName}
                            />
                            <Forms.FormText className={Margins.top8}>
                                {t("plugin.decor.create.name")}
                            </Forms.FormText>
                        </section>
                    </div>
                    <div>
                        <AvatarDecorationModalPreview
                            avatarDecorationOverride={decoration}
                            user={UserStore.getCurrentUser()}
                        />
                    </div>
                </div>
                <HelpMessage messageType={HelpMessageTypes.INFO} className={Margins.bottom8}>
                    {tJsx("plugin.decor.help.update", {
                        server: <Link
                            href={`https://discord.gg/${INVITE_KEY}`}
                            onClick={async e => {
                                e.preventDefault();
                                if (!GuildStore.getGuild(GUILD_ID)) {
                                    const inviteAccepted = await openInviteModal(INVITE_KEY);
                                    if (inviteAccepted) {
                                        closeAllModals();
                                        FluxDispatcher.dispatch({ type: "LAYER_POP_ALL" });
                                    }
                                } else {
                                    closeAllModals();
                                    FluxDispatcher.dispatch({ type: "LAYER_POP_ALL" });
                                    NavigationRouter.transitionToGuild(GUILD_ID);
                                }
                            }}
                        >
                            {t("plugin.decor.help.server")}
                        </Link>
                    })}
                </HelpMessage>
            </ErrorBoundary>
        </ModalContent>
        <ModalFooter className={cl("modal-footer")}>
            <Button
                onClick={() => {
                    setSubmitting(true);
                    createDecoration({ alt: name, file: file! })
                        .then(props.onClose).catch(e => { setSubmitting(false); setError(e); });
                }}
                disabled={!file || !name}
                submitting={submitting}
            >
                {t("plugin.decor.button.submit")}
            </Button>
            <Button
                onClick={props.onClose}
                color={Button.Colors.PRIMARY}
                look={Button.Looks.LINK}
            >
                {t("plugin.decor.button.cancel")}
            </Button>
        </ModalFooter>
    </ModalRoot>;
}

export const openCreateDecorationModal = () =>
    Promise.all([requireAvatarDecorationModal(), requireCreateStickerModal()])
        .then(() => openModal(props => <CreateDecorationModal {...props} />));
