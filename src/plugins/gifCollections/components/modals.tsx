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
import { classes } from "@utils/misc";
import { ModalContent, ModalFooter, ModalHeader, ModalProps, ModalRoot, ModalSize, openModal } from "@utils/modal";
import { FluxDispatcher, TextInput, useCallback, useState } from "@webpack/common";

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
                { label: t(plugin.gifCollections.context.collection.created), value: collection.createdAt ? new Date(collection.createdAt).toLocaleString() : "Unknown" },
                { label: t(plugin.gifCollections.context.collection.updated), value: collection.lastUpdated ? new Date(collection.lastUpdated).toLocaleString() : "Unknown" },
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
                { label: t(plugin.gifCollections.context.gif.added), value: gif.addedAt ? new Date(gif.addedAt).toLocaleString() : "Unknown" },
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

function InfoModal({ props, title, rows }: { props: ModalProps; title: string; rows: { label: string; value: string; }[]; }) {
    return (
        <ModalRoot {...props} size={ModalSize.SMALL} className={cl("modal")}>
            <ModalHeader separator={false} className={cl("modal-header")}>
                <Paragraph className={cl("modal-title")}>{title}</Paragraph>
            </ModalHeader>
            <ModalContent className={cl("modal-content")}>
                <section>
                    {rows.map(row => (
                        <Flex key={row.label} className={cl("info-row")}>
                            <Heading className={cl("info-title")}>{row.label}</Heading>
                            <Paragraph className={cl("info-text")}>{row.value}</Paragraph>
                        </Flex>
                    ))}
                </section>
            </ModalContent>
            <ModalFooter className={cl("modal-footer")}>
                <Button onClick={props.onClose}>{t(plugin.gifCollections.context.collection.close)}</Button>
            </ModalFooter>
        </ModalRoot>
    );
}

function MoveToCollectionModal({ props, gifId }: { props: ModalProps; gifId: string; }) {
    return (
        <ModalRoot {...props} size={ModalSize.SMALL} className={cl("modal")}>
            <ModalHeader separator={false} className={cl("modal-header")}>
                <Paragraph className={cl("modal-title")}>{t(plugin.gifCollections.context.collection.move)}</Paragraph>
            </ModalHeader>
            <ModalContent className={cl("modal-content")}>
                <Heading>{t(plugin.gifCollections.context.collection.select)}</Heading>
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
            </ModalContent>
            <ModalFooter className={cl("modal-footer")}>
                <Button onClick={props.onClose}>{t(plugin.gifCollections.context.collection.close)}</Button>
            </ModalFooter>
        </ModalRoot>
    );
}

function CreateCollectionModal({ props, gif }: { props: ModalProps; gif: Gif; }) {
    const [name, setName] = useState("");

    const onSubmit = useCallback((e: React.FormEvent) => {
        e.preventDefault();
        if (!name.length) return;
        void createCollection(name, [gif]);
        props.onClose();
    }, [name, gif, props]);

    return (
        <ModalRoot {...props}>
            <form onSubmit={onSubmit}>
                <ModalHeader>
                    <Paragraph>{t(plugin.gifCollections.modal.create.title)}</Paragraph>
                </ModalHeader>
                <ModalContent>
                    <Heading className={cl("rename-text")}>{t(plugin.gifCollections.modal.create.name)}</Heading>
                    <TextInput onChange={setName} />
                </ModalContent>
                <ModalFooter>
                    <Button type="submit" variant="positive" disabled={!name.length} onClick={onSubmit}>
                        {t(plugin.gifCollections.modal.create.create)}
                    </Button>
                </ModalFooter>
            </form>
        </ModalRoot>
    );
}

function RenameCollectionModal({ props, name }: { props: ModalProps; name: string; }) {
    const prefix = settings.store.collectionPrefix;
    const strippedName = name.startsWith(prefix) ? name.slice(prefix.length) : name;

    const [newName, setNewName] = useState(strippedName);
    const tooLong = newName.length >= 25;

    const onSubmit = useCallback(async (e: React.FormEvent) => {
        e.preventDefault();
        if (!newName.length || tooLong) return;
        await renameCollection(name, newName);
        props.onClose();
    }, [newName, name, tooLong, props]);

    return (
        <ModalRoot {...props}>
            <form onSubmit={onSubmit}>
                <ModalHeader>
                    <Paragraph>{t(plugin.gifCollections.modal.rename.title)}</Paragraph>
                </ModalHeader>
                <ModalContent>
                    <Paragraph className={cl("rename-text")}>{t(plugin.gifCollections.modal.rename.name)}</Paragraph>
                    <TextInput value={newName} className={classes(cl("rename-input"), tooLong ? cl("input-warning") : "")} onChange={setNewName} />
                    {tooLong && <Paragraph className={cl("warning-text")}>{t(plugin.gifCollections.modal.rename.warning)}</Paragraph>}
                </ModalContent>
                <ModalFooter>
                    <Button type="submit" variant="positive" disabled={!newName.length || tooLong} onClick={onSubmit}>
                        {t(plugin.gifCollections.modal.rename.rename)}
                    </Button>
                </ModalFooter>
            </form>
        </ModalRoot>
    );
}
