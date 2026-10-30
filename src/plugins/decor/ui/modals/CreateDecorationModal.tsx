/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2023 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { plugin, t } from "@api/i18n";
import { BaseText } from "@components/BaseText";
import { Card } from "@components/Card";
import ErrorBoundary from "@components/ErrorBoundary";
import { Heading } from "@components/Heading";
import { Link } from "@components/Link";
import { Paragraph } from "@components/Paragraph";
import { RenderModalProps } from "@plexcord/discord-types";
import { GUILD_ID, INVITE_KEY, RAW_SKU_ID } from "@plugins/decor/lib/constants";
import { useCurrentUserDecorationsStore } from "@plugins/decor/lib/stores/CurrentUserDecorationsStore";
import { cl, DecorationModalClasses, requireAvatarDecorationModal, requireCreateStickerModal } from "@plugins/decor/ui";
import { AvatarDecorationModalPreview } from "@plugins/decor/ui/components";
import { openInviteModal } from "@utils/discord";
import { Margins } from "@utils/margins";
import { classes } from "@utils/misc";
import { findComponentByCodeLazy } from "@webpack";
import { closeAllModals, FluxDispatcher, GuildStore, Modal, NavigationRouter, openModal, TextInput, useEffect, useMemo, UserStore, useState } from "@webpack/common";

const FileUpload = findComponentByCodeLazy(".currentTarget.files", "lineClamp:1");

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

function CreateDecorationModal(props: RenderModalProps) {
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

    return <Modal
        {...props}
        size="lg"
        title={t(plugin.decor.create.title)}
        actions={[
            {
                text: t(plugin.decor.button.cancel),
                variant: "secondary",
                onClick: props.onClose
            },
            {
                text: t(plugin.decor.button.submit),
                variant: "primary",
                onClick: () => {
                    setSubmitting(true);
                    createDecoration({ alt: name, file: file! })
                        .then(props.onClose).catch(e => { setSubmitting(false); setError(e); });
                },
                disabled: !file || !name || submitting
            }
        ]}
    >
        <div className={classes(cl("create-decoration-modal-content"), DecorationModalClasses.modal)}>
            <ErrorBoundary>
                <Card variant="warning">
                    {t(plugin.decor.create.notViolate, {
                        guidelines: <Link href="https://github.com/decor-discord/.github/blob/main/GUIDELINES.md">{t(plugin.decor.create.guidelines)}</Link>
                    })}
                </Card>
                <div className={cl("create-decoration-modal-form-preview-container")}>
                    <div className={cl("create-decoration-modal-form")}>
                        {error !== null && <BaseText size="xs" color="text-subtle">{error.message}</BaseText>}
                        <section>
                            <Heading>{t(plugin.decor.file)}</Heading>
                            <FileUpload
                                filename={file?.name}
                                placeholder={t(plugin.decor.create.fileHolder)}
                                buttonText={t(plugin.decor.button.browse)}
                                filters={[{ name: t(plugin.decor.text.decorationFile), extensions: ["png", "apng"] }]}
                                onFileSelect={setFile}
                            />
                            <Paragraph className={Margins.top8}>
                                {t(plugin.decor.create.file)}
                            </Paragraph>
                        </section>
                        <section title={t(plugin.decor.create.nameTitle)}>
                            <TextInput
                                placeholder={t(plugin.decor.create.nameHolder)}
                                value={name}
                                onChange={setName}
                            />
                            <Paragraph className={Margins.top8}>
                                {t(plugin.decor.create.name)}
                            </Paragraph>
                        </section>
                    </div>
                    <div>
                        <AvatarDecorationModalPreview
                            avatarDecoration={decoration}
                            user={UserStore.getCurrentUser()}
                        />
                    </div>
                </div>
                <Card variant="brand" defaultPadding className={Margins.bottom8}>
                    {t(plugin.decor.help.update, {
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
                            {t(plugin.decor.help.server)}
                        </Link>
                    })}
                </Card>
            </ErrorBoundary>
        </div>
    </Modal>;
}

export const openCreateDecorationModal = () =>
    Promise.all([requireAvatarDecorationModal(), requireCreateStickerModal()])
        .then(() => openModal(props => <CreateDecorationModal {...props} />));
