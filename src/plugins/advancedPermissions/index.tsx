/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2026 Vendicated and contributors
 * Copyright (c) 2026 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { plugin, t } from "@api/i18n";
import { definePluginSettings } from "@api/Settings";
import { BaseText } from "@components/BaseText";
import ErrorBoundary from "@components/ErrorBoundary";
import { PcDevs } from "@utils/constants";
import { Margins } from "@utils/margins";
import definePlugin, { OptionType } from "@utils/types";
import { findCssClassesLazy } from "@webpack";
import { Clickable, useState } from "@webpack/common";
import type { ReactNode } from "react";

const AdvancedClasses = findCssClassesLazy("trigger", "advancedTitle", "titleCaret");
const CollapsibleCard = ErrorBoundary.wrap(
    ({ children }: { children: ReactNode; }) => {
        const [open, setOpen] = useState(!settings.store.collapsedByDefault);

        return (
            <div className={Margins.top16}>
                <Clickable
                    className={AdvancedClasses.trigger}
                    aria-expanded={open}
                    onClick={() => setOpen(v => !v)}
                >
                    <BaseText
                        size="lg"
                        weight="semibold"
                        className={AdvancedClasses.advancedTitle}
                    >
                        {t(plugin.advancedPermissions.text.simplifiedPermissions)}
                        <svg
                            className={AdvancedClasses.titleCaret}
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            style={{
                                transform: open
                                    ? "rotate(0deg)"
                                    : "rotate(-90deg)",
                                transition: "transform .2s",
                            }}
                        >
                            <path
                                fill="currentColor"
                                d="M5.3 9.3a1 1 0 0 1 1.4 0l5.3 5.29 5.3-5.3a1 1 0 1 1 1.4 1.42l-6 6a1 1 0 0 1-1.4 0l-6-6a1 1 0 0 1 0-1.42Z"
                            />
                        </svg>
                    </BaseText>
                </Clickable>
                {open ? children : null}
            </div>
        );
    },
    { noop: true },
);

let savedCard: ReactNode = null;

const SimplifiedCard = ErrorBoundary.wrap(() => {
    switch (settings.store.simplifiedCard) {
        case "hide":
            return null;
        case "collapse":
            return <CollapsibleCard>{savedCard}</CollapsibleCard>;
        default:
            return <>{savedCard}</>;
    }
}, { noop: true });

const settings = definePluginSettings({
    simplifiedCard: {
        label: () => t(plugin.advancedPermissions.option.simplifiedCard.label),
        type: OptionType.SELECT,
        description: () => t(plugin.advancedPermissions.option.simplifiedCard.description),
        options: [
            { label: () => t(plugin.advancedPermissions.option.simplifiedCard.hide), value: "hide", default: true },
            { label: () => t(plugin.advancedPermissions.option.simplifiedCard.collapse), value: "collapse" },
            { label: () => t(plugin.advancedPermissions.option.simplifiedCard.show), value: "show" },
        ],
    },
    collapsedByDefault: {
        label: () => t(plugin.advancedPermissions.option.collapsedByDefault.label),
        type: OptionType.BOOLEAN,
        default: false,
        description: () => t(plugin.advancedPermissions.option.collapsedByDefault.description),
        disabled: () => settings.store.simplifiedCard !== "collapse",
    },
});

export default definePlugin({
    name: "AdvancedPermissions",
    description: () => t(plugin.advancedPermissions.description),
    authors: [PcDevs.bastih18, PcDevs.MutanPlex],
    tags: ["utility"],
    settings,

    patches: [
        {
            find: 'id:"PrivateChannelSettingCard"',
            replacement: [
                {
                    // render the card below the subtitle
                    match: /(?<=children:\i\.subtitle\}\),)/,
                    replace: "$self.renderCard(),",
                },
                {
                    // grab, store and hide the original card
                    match: /(?<=permissionUpdates:\i\}\):null,).{0,100}?roles:\i,members:\i\}\)/,
                    replace: "$self.saveCard($&)",
                },
                {
                    // always hide the divider
                    match: /(?<=advancedMode\);.{0,30}children:\[)/,
                    replace: "null&&",
                },
                {
                    // always force advanced open
                    match: /isExpanded:\i(?=,onExpandedChange:)/,
                    replace: "isExpanded:!0",
                },
                {
                    // drop advanced header
                    match: /component:(?=.{0,50}slot:"trigger")/,
                    replace: "component:null&&",
                },
            ],
        },
    ],

    renderCard() {
        return <SimplifiedCard />;
    },

    saveCard(card: ReactNode) {
        savedCard = card;
        return null;
    },
});
