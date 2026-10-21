/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2024 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { plugin, t } from "@api/i18n";
import { Button } from "@components/Button";
import { Flex } from "@components/Flex";
import { Heading } from "@components/Heading";
import { Paragraph } from "@components/Paragraph";
import { RenderModalProps } from "@plexcord/discord-types";
import { classes } from "@utils/misc";
import { FluxDispatcher, Modal, openModal, TextInput, useCallback, useState } from "@webpack/common";

import { settings } from "../settings";
import type { Collection, Gif } from "../types";
import { cache_collections, createCollection, getItemCollectionNameFromId, moveGifToCollection, renameCollection } from "../utils/collectionManager";
import { cl, stripPrefix } from "../utils/misc";

export function openCollectionInfoModal(collection: Collection) {
    openModal(props => (
        <InfoModal
            props={props}
            title={t(plugin.gifCollections.context.collection.information)}
            rows={[
                { label: t(plugin.gifCollections.context.collection.name), value: stripPrefix(collection.name) },
                { label: t(plugin.gifCollections.context.collection.gifs), value: String(collection.gifs.length) },
                { label: t(plugin.gifCollections.context.collection.created), value: collection.createdAt ? new Date(collection.createdAt).toLocaleString() : t(plugin.gifCollections.text.unknown) },
                { label: t(plugin.gifCollections.context.collection.updated), value: collection.lastUpdated ? new Date(collection.lastUpdated).toLocaleString() : t(plugin.gifCollections.text.unknown) },
            ]}
        />
    ));
}

export function openGifInfoModal(gif: Gif) {
    openModal(props => (
        <InfoModal
            props={props}
            title={t(plugin.gifCollections.context.gif.information)}
            rows={[
                { label: t(plugin.gifCollections.context.gif.added), value: gif.addedAt ? new Date(gif.addedAt).toLocaleString() : t(plugin.gifCollections.text.unknown) },
                { label: t(plugin.gifCollections.context.gif.width), value: String(gif.width) },
                { label: t(plugin.gifCollections.context.gif.height), value: String(gif.height) },
            ]}
        />
    ));
}

export function openMoveToCollectionModal(gifId: string) {
    openModal(props => <MoveToCollectionModal props={props} gifId={gifId} />);
}

export function openCreateCollectionModal(gif: Gif) {
    openModal(props => <CreateCollectionModal props={props} gif={gif} />);
}

export function openRenameCollectionModal(name: string) {
    openModal(props => <RenameCollectionModal props={props} name={name} />);
}

function InfoModal({ props, title, rows }: { props: RenderModalProps; title: string; rows: { label: string; value: string; }[]; }) {
    return (
        <Modal
            {...props}
            size="sm"
            title={title}
            actions={[
                { text: t(plugin.gifCollections.context.collection.close), variant: "secondary", onClick: props.onClose }
            ]}
        >
            <section>
                {rows.map(row => (
                    <Flex key={row.label} className={cl("info-row")}>
                        <Heading className={cl("info-title")}>{row.label}</Heading>
                        <Paragraph className={cl("info-text")}>{row.value}</Paragraph>
                    </Flex>
                ))}
            </section>
        </Modal>
    );
}

function MoveToCollectionModal({ props, gifId }: { props: RenderModalProps; gifId: string; }) {
    return (
        <Modal
            {...props}
            size="sm"
            title={t(plugin.gifCollections.context.collection.move)}
            actions={[
                { text: t(plugin.gifCollections.context.collection.close), variant: "secondary", onClick: props.onClose }
            ]}
        >
            <Heading style={{ marginBottom: "10px" }}>{t(plugin.gifCollections.context.collection.select)}</Heading>
            <div className={cl("buttons")}>
                {cache_collections
                    .filter(col => col.name !== getItemCollectionNameFromId(gifId))
                    .map(col => (
                        <Button
                            key={col.name}
                            className={cl("button")}
                            onClick={async () => {
                                const fromCollection = getItemCollectionNameFromId(gifId);
                                if (!fromCollection) return;
                                await moveGifToCollection(gifId, fromCollection, col.name);
                                FluxDispatcher.dispatch({ type: "GIF_PICKER_QUERY", query: "" });
                                FluxDispatcher.dispatch({ type: "GIF_PICKER_QUERY", query: fromCollection });
                                props.onClose();
                            }}
                        >
                            {stripPrefix(col.name)}
                        </Button>
                    ))}
            </div>
        </Modal>
    );
}

function CreateCollectionModal({ props, gif }: { props: RenderModalProps; gif: Gif; }) {
    const [name, setName] = useState("");

    const onSubmit = useCallback((e?: React.FormEvent) => {
        e?.preventDefault();
        if (!name.length) return;
        void createCollection(name, [gif]);
        props.onClose();
    }, [name, gif, props]);

    return (
        <Modal
            {...props}
            size="sm"
            title={t(plugin.gifCollections.modal.create.title)}
            actions={[
                { text: t(plugin.gifCollections.modal.create.create), onClick: onSubmit, disabled: !name.length, variant: "primary" }
            ]}
        >
            <form onSubmit={onSubmit}>
                <Heading className={cl("rename-text")}>{t(plugin.gifCollections.modal.create.name)}</Heading>
                <TextInput onChange={setName} />
            </form>
        </Modal>
    );
}

function RenameCollectionModal({ props, name }: { props: RenderModalProps; name: string; }) {
    const prefix = settings.store.collectionPrefix;
    const strippedName = name.startsWith(prefix) ? name.slice(prefix.length) : name;

    const [newName, setNewName] = useState(strippedName);
    const tooLong = newName.length >= 25;

    const onSubmit = useCallback(async (e?: React.FormEvent) => {
        e?.preventDefault();
        if (!newName.length || tooLong) return;
        await renameCollection(name, newName);
        props.onClose();
    }, [newName, name, tooLong, props]);

    return (
        <Modal
            {...props}
            size="sm"
            title={t(plugin.gifCollections.modal.rename.title)}
            actions={[
                { text: t(plugin.gifCollections.modal.rename.rename), onClick: onSubmit, disabled: !newName.length || tooLong, variant: "primary" }
            ]}
        >
            <form onSubmit={onSubmit}>
                <Paragraph className={cl("rename-text")}>{t(plugin.gifCollections.modal.rename.name)}</Paragraph>
                <TextInput value={newName} className={classes(cl("rename-input"), tooLong ? cl("input-warning") : "")} onChange={setNewName} />
                {tooLong && <Paragraph className={cl("warning-text")}>{t(plugin.gifCollections.modal.rename.warning)}</Paragraph>}
            </form>
        </Modal>
    );
}
