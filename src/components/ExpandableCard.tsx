/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2026 Vendicated and contributors
 * Copyright (c) 2026 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import "./ExpandableCard.css";

import { classes } from "@utils/misc";
import { Clickable, useState } from "@webpack/common";
import { PropsWithChildren } from "react";

import { Card } from "./Card";
import { DownArrow, RightArrow } from "./Icons";

export type ExpandableSectionProps = PropsWithChildren<{
    renderContent: () => React.ReactNode;
    className?: string;
    initialExpanded?: boolean;
}>;

/**
 * A card component that can expand and collapse to show/hide content. The header (props.children) is always visible, and the content (props.renderContent) is only visible when expanded.
 */
export function ExpandableSection({ children, renderContent: Content, className, initialExpanded = false }: ExpandableSectionProps) {
    const [expanded, setExpanded] = useState(initialExpanded);

    const Icon = expanded ? DownArrow : RightArrow;

    return (
        <Card data-expanded={expanded} className={classes("pc-expandable-card", className)}>
            <Clickable className="pc-expandable-card-header" onClick={() => setExpanded(c => !c)} >
                {children}
                <Icon className="pc-expandable-card-icon" />
            </Clickable>

            {expanded
                ? <div className="pc-expandable-card-content">
                    <Content />
                </div>
                : null
            }
        </Card>
    );
}
