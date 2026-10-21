/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2026 Vendicated and contributors
 * Copyright (c) 2026 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { plugin, t } from "@api/i18n";
import { BaseText } from "@components/BaseText";
import { Button } from "@components/Button";
import { Card } from "@components/Card";
import { Flex } from "@components/Flex";
import { DeleteIcon, PencilIcon } from "@components/Icons";
import { Margins } from "@components/margins";
import { Paragraph } from "@components/Paragraph";

import { openCreateTagModal } from "./CreateTagModal";
import { removeTag, settings } from "./settings";

export function SettingsTagList() {
    const { tagsList } = settings.use(["tagsList"]);

    return (
        <section className={Margins.top8}>
            <BaseText size="md" weight="semibold">{t(plugin.customCommands.text.registeredTags)}</BaseText>
            <Flex flexDirection="column" gap="0.5em" className={Margins.top8}>
                {Object.values(tagsList).map(tag => (
                    <Card key={tag.name} className="pc-customCommands-card">
                        <Paragraph size="md" weight="medium">{tag.name}</Paragraph>

                        <Button variant="secondary" size="iconOnly" onClick={() => openCreateTagModal(tag)}>
                            <PencilIcon aria-label={t(plugin.customCommands.text.editTag)} width={20} height={20} />
                        </Button>
                        <Button variant="dangerSecondary" size="iconOnly" onClick={() => removeTag(tag.name)}>
                            <DeleteIcon aria-label={t(plugin.customCommands.text.deleteTag)} width={20} height={20} />
                        </Button>
                    </Card>
                ))}
                <Button onClick={() => openCreateTagModal()}>{t(plugin.customCommands.text.createTag)}</Button>
            </Flex>
        </section>
    );
}
