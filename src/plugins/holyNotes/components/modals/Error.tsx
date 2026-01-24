/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2024 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { plugin, t } from "@api/i18n";
import { resultsClasses } from "@plugins/holyNotes";

export default ({ error }: { error?: Error; } = {}) => {

    if (error) {
        // Error
        console.log(error);
        return (
            <div className={resultsClasses.emptyResultsWrap}>
                <div className={resultsClasses.emptyResultsContent} style={{ paddingBottom: "0px" }}>
                    <div className={resultsClasses.errorImage} />
                    <div className={resultsClasses.emptyResultsText}>
                        {t(plugin.holyNotes.modal.error.generic)}
                    </div>
                </div>
            </div>
        );
    } else if (Math.floor(Math.random() * 100) <= 10)
        // Easter egg
        return (
            <div className={resultsClasses.emptyResultsWrap}>
                <div className={resultsClasses.emptyResultsContent} style={{ paddingBottom: "0px" }}>
                    <div className={`${resultsClasses.noResultsImage} ${resultsClasses.alt}`} />
                    <div className={resultsClasses.emptyResultsText}>
                        {t(plugin.holyNotes.modal.error.easter)}
                    </div>
                </div>
            </div>
        );
    // Empty notebook
    else
        return (
            <div className={resultsClasses.emptyResultsWrap}>
                <div className={resultsClasses.emptyResultsContent} style={{ paddingBottom: "0px" }}>
                    <div className={resultsClasses.noResultsImage} />
                    <div className={resultsClasses.emptyResultsText}>
                        {t(plugin.holyNotes.modal.error.empty)}
                    </div>
                </div>
            </div>
        );
};
