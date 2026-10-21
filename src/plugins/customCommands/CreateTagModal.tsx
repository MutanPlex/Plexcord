/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2026 Vendicated and contributors
 * Copyright (c) 2026 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { plugin, t } from "@api/i18n";
import { InlineCode } from "@components/CodeBlock";
import { ExpandableSection } from "@components/ExpandableCard";
import { Flex } from "@components/Flex";
import { HeadingSecondary } from "@components/Heading";
import { InfoIcon } from "@components/Icons";
import { Paragraph } from "@components/Paragraph";
import { RenderModalProps } from "@plexcord/discord-types";
import { Modal, openModal, TextArea, TextInput, useState } from "@webpack/common";

import { parseTagArguments } from ".";
import { addTag, getTag, removeTag, Tag } from "./settings";

export function openCreateTagModal(initialValue: Tag = { name: "", message: "" }) {
    openModal(modalProps => (
        <CreateTagDialog initialValue={initialValue} modalProps={modalProps} />
    ));
}

const EXAMPLE_RESPONSE = "Hello {{user}}! I am feeling {{mood = great}}.";

function CreateTagDialog({ initialValue, modalProps }: { initialValue: Tag; modalProps: RenderModalProps; }) {
    const [name, setName] = useState(initialValue.name);
    const [message, setMessage] = useState(initialValue.message.replaceAll("\\n", "\n"));

    const isEdit = Boolean(initialValue.name);

    const detectedArguments = parseTagArguments(message);
    const hasReservedEphemeral = detectedArguments.some(arg => arg.name === "ephemeral");
    const nameAlreadyExists = name !== initialValue.name && getTag(name);

    const notice = hasReservedEphemeral
        ? t(plugin.customCommands.text.ephemeralReserved)
        : nameAlreadyExists
            ? t(plugin.customCommands.text.nameAlreadyExists, { name })
            : undefined;

    return (
        <Modal
            {...modalProps}
            title={isEdit ? t(plugin.customCommands.text.editTag) : t(plugin.customCommands.text.createNewTag)}
            subtitle={isEdit ? t(plugin.customCommands.text.editTagSubtitle) : t(plugin.customCommands.text.createTagSubtitle)}
            actions={[
                {
                    text: t(plugin.customCommands.text.cancel),
                    variant: "secondary",
                    onClick: modalProps.onClose
                },
                {
                    text: isEdit ? t(plugin.customCommands.text.save) : t(plugin.customCommands.text.create),
                    variant: "primary",
                    onClick: () => {
                        if (isEdit && initialValue.name !== name) {
                            removeTag(initialValue.name);
                        }

                        const tag = { name, message };
                        addTag(tag);
                        modalProps.onClose();
                    },
                    disabled: !name || !message || hasReservedEphemeral
                }
            ]}
            notice={notice ? { message: notice, type: "critical" } : undefined}
        >
            <Flex flexDirection="column" gap={12}>
                <section>
                    <HeadingSecondary>{t(plugin.customCommands.text.name)}</HeadingSecondary>
                    <TextInput value={name} onChange={setName} placeholder="greet" />
                </section>

                <section>
                    <HeadingSecondary>{t(plugin.customCommands.text.response)}</HeadingSecondary>
                    <TextArea value={message} onChange={setMessage} placeholder={EXAMPLE_RESPONSE} autosize />
                </section>

                {detectedArguments.length > 0 && (
                    <section>
                        <HeadingSecondary>{t(plugin.customCommands.text.detectedArguments)}</HeadingSecondary>
                        <Paragraph>
                            <ul>
                                {detectedArguments.map(arg => (
                                    <li key={arg.name}>
                                        &mdash; <b>{arg.name}</b>{arg.defaultValue ? ` ${t(plugin.customCommands.text.defaultValue, { value: arg.defaultValue })}` : ""}
                                    </li>
                                ))}
                            </ul>
                        </Paragraph>
                    </section>
                )}

                <ExpandableSection
                    renderContent={() => (
                        <Flex flexDirection="column" gap={12}>
                            <Paragraph>
                                {t(plugin.customCommands.text.variablesHelp)} <InlineCode>{"Hello {{user}}"}</InlineCode>.
                            </Paragraph>
                            <Paragraph>
                                {t(plugin.customCommands.text.defaultValuesHelp)} <InlineCode>{"Hello {{user = pal}}"}</InlineCode>.
                            </Paragraph>

                            <section>
                                <Paragraph><b>{t(plugin.customCommands.text.exampleCommandResponse)}</b> <InlineCode>{EXAMPLE_RESPONSE}</InlineCode></Paragraph>
                                <Paragraph><b>{t(plugin.customCommands.text.exampleUsage)}</b> <InlineCode>{"/greet user:@Clyde"}</InlineCode></Paragraph>
                                <Paragraph><b>{t(plugin.customCommands.text.exampleOutput)}</b> <InlineCode>{"Hello @Clyde! I am feeling great."}</InlineCode></Paragraph>
                            </section>
                        </Flex>
                    )}
                >
                    <Flex alignItems="center" gap={8}>
                        <InfoIcon color="var(--text-muted)" height={16} width={16} />
                        {t(plugin.customCommands.text.viewArgumentsGuide)}
                    </Flex>
                </ExpandableSection>
            </Flex>
        </Modal>
    );
}
