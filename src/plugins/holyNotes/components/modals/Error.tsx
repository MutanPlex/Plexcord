/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2024 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { plugin, t } from "@api/i18n";
import { resultsClasses } from "@plugins/holyNotes";

export default function EmptyNotebook({ error }: { error?: Error; } = {}) {

    if (error) {
        console.error("[HolyNotes] Error:", error);
        return (
            <div className={resultsClasses.emptyResultsWrap}>
                <div className={resultsClasses.emptyResultsContent} style={{ paddingBottom: 0 }}>
                    <div className={resultsClasses.errorImage} />
                    <div className={resultsClasses.emptyResultsText}>
                        {t(plugin.holyNotes.modal.error.generic)}
                    </div>
                </div>
            </div>
        );
    }

    const isEasterEgg = Math.random() < 0.1;

    return (
        <div className={resultsClasses.emptyResultsWrap}>
            <div className={resultsClasses.emptyResultsContent} style={{ paddingBottom: 0 }}>
                <div className={`${resultsClasses.noResultsImage}${isEasterEgg ? ` ${resultsClasses.alt}` : ""}`} />
                <div className={resultsClasses.emptyResultsText}>
                    {isEasterEgg
                        ? t(plugin.holyNotes.modal.error.easter)
                        : t(plugin.holyNotes.modal.error.empty)}
                </div>
            </div>
        </div>
    );
}
