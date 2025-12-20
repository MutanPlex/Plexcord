/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2024 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { plugin, t } from "@api/i18n";
import { BaseText } from "@components/BaseText";
import { Button } from "@components/Button";
import { Divider } from "@components/Divider";
import { Heading } from "@components/Heading";
import { DEFAULT_COLOR, SWATCHES } from "@plugins/pinDms/constants";
import { categoryLen, createCategory, getCategory } from "@plugins/pinDms/data";
import { classNameFactory } from "@utils/css";
import { ModalContent, ModalFooter, ModalHeader, ModalProps, ModalRoot, openModalLazy } from "@utils/modal";
import { extractAndLoadChunksLazy, findComponentByCodeLazy } from "@webpack";
import { ColorPicker, TextInput, Toasts, useMemo, useState } from "@webpack/common";

interface ColorPickerWithSwatchesProps {
    defaultColor: number;
    colors: number[];
    value: number;
    disabled?: boolean;
    onChange(value: number | null): void;
    renderDefaultButton?: () => React.ReactNode;
    renderCustomButton?: () => React.ReactNode;
}

const ColorPickerWithSwatches = findComponentByCodeLazy<ColorPickerWithSwatchesProps>('id:"color-picker"');

export const requireSettingsMenu = extractAndLoadChunksLazy(['name:"UserSettings"'], /createPromise:.{0,20}(\i\.\i\("?.+?"?\).*?).then\(\i\.bind\(\i,"?(.+?)"?\)\).{0,50}"UserSettings"/);

const cl = classNameFactory("pc-pindms-modal-");

interface Props {
    categoryId: string | null;
    initialChannelId: string | null;
    modalProps: ModalProps;
}

function useCategory(categoryId: string | null, initalChannelId: string | null) {
    const category = useMemo(() => {
        if (categoryId) {
            return getCategory(categoryId);
        } else if (initalChannelId) {
            return {
                id: Toasts.genId(),
                name: `${t(plugin.pinDMs.modal.category.pin)} ${categoryLen() + 1}`,
                color: DEFAULT_COLOR,
                collapsed: false,
                channels: [initalChannelId]
            };
        }
    }, [categoryId, initalChannelId]);

    return category;
}

export function NewCategoryModal({ categoryId, modalProps, initialChannelId }: Props) {
    const category = useCategory(categoryId, initialChannelId);
    if (!category) return null;

    const [name, setName] = useState(category.name);
    const [color, setColor] = useState(category.color);

    const onSave = (e: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();

        category.name = name;
        category.color = color;

        if (!categoryId) {
            createCategory(category);
        }

        modalProps.onClose();
    };

    return (
        <ModalRoot {...modalProps}>
            <ModalHeader>
                <BaseText size="lg" weight="semibold" style={{ flexGrow: 1 }}>{categoryId ? t(plugin.pinDMs.modal.category.edit) : t(plugin.pinDMs.modal.category.new)}</BaseText>
            </ModalHeader>

            {/* form is here so when you press enter while in the text input it submits */}
            <form onSubmit={onSave}>
                <ModalContent className={cl("content")}>
                    <section>
                        <Heading>{t(plugin.pinDMs.modal.category.name)}</Heading>
                        <TextInput
                            value={name}
                            onChange={e => setName(e)}
                        />
                    </section>
                    <Divider />
                    <section>
                        <Heading>{t(plugin.pinDMs.modal.category.color)}</Heading>
                        <ColorPickerWithSwatches
                            key={category.id}
                            defaultColor={DEFAULT_COLOR}
                            colors={SWATCHES}
                            onChange={c => setColor(c!)}
                            value={color}
                            renderDefaultButton={() => null}
                            renderCustomButton={() => (
                                <ColorPicker
                                    color={color}
                                    onChange={c => setColor(c!)}
                                    key={category.id}
                                    showEyeDropper={false}
                                />
                            )}
                        />
                    </section>
                </ModalContent>
                <ModalFooter>
                    <Button type="submit" onClick={onSave} disabled={!name}>{categoryId ? t(plugin.pinDMs.modal.category.save) : t(plugin.pinDMs.modal.category.create)}</Button>
                </ModalFooter>
            </form>
        </ModalRoot>
    );
}

export const openCategoryModal = (categoryId: string | null, channelId: string | null) =>
    openModalLazy(async () => {
        await requireSettingsMenu();
        return modalProps => <NewCategoryModal categoryId={categoryId} modalProps={modalProps} initialChannelId={channelId} />;
    });
