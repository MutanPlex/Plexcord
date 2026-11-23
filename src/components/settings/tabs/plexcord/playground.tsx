/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2026 Vendicated and contributors
 * Copyright (c) 2026 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { settings, t } from "@api/i18n";
import { Button, ButtonSize, ButtonVariant } from "@components/Button";
import { Card } from "@components/Card";
import { Flex, FlexProps } from "@components/Flex";
import { PlaceholderIcon } from "@components/Icons";
import { Margins } from "@components/margins";
import { Span } from "@components/Span";
import { identity } from "@utils/misc";
import { Modal, openModal, Select, useState } from "@webpack/common";

export function openPlayground() {
    openModal(props => (
        <Modal {...props} title={t(settings.playground.title)}>
            <Playground />
        </Modal>
    ));
}

function Section({ children, title, ...props }: { children: React.ReactNode; title: string; } & FlexProps) {
    return (
        <details>
            <summary>{title}</summary>
            <Flex flexDirection="column" className={Margins.top16} {...props}>
                {children}
            </Flex>
        </details>
    );
}

function Playground() {
    const [buttonSize, setButtonSize] = useState<ButtonSize>("small");

    const CardVariants = ["primary", "brand", "success", "warning", "danger"] as const;
    const ButtonVariants = ["primary", "secondary", "dangerPrimary", "dangerSecondary", "overlayPrimary", "positive", "link", "none"] as ButtonVariant[];
    const ButtonSizes = ["iconOnly", "min", "xs", "small", "medium"] as ButtonSize[];

    return (
        <Flex flexDirection="column">
            <Section title={t(settings.playground.buttons)}>
                <Select
                    placeholder={t(settings.playground.buttonSize)}
                    options={ButtonSizes.map(size => ({ label: size, value: size }))}
                    isSelected={s => s === buttonSize}
                    select={s => setButtonSize(s)}
                    serialize={identity}
                />

                <Flex flexDirection="column" alignItems="start">
                    {ButtonVariants.map((variant, i) => (
                        <Flex key={variant} justifyContent="start" alignItems="center">
                            <Button variant={variant} size={buttonSize}>
                                {buttonSize === "iconOnly" ? <PlaceholderIcon /> : variant}
                            </Button>
                            {buttonSize === "iconOnly" && <Span>{variant}</Span>}
                        </Flex>
                    ))}
                </Flex>
            </Section>

            <Section title={t(settings.playground.cards)}>
                {CardVariants.map(variant => (
                    <Card key={variant} variant={variant}>
                        {variant} card
                    </Card>
                ))}
            </Section>
        </Flex>
    );
}
