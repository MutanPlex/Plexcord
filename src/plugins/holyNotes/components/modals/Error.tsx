/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2024 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { plugin, t } from "@api/i18n";
import { findByProps } from "@webpack";

export default ({ error }: { error?: Error; } = {}) => {
    const classes = findByProps("emptyResultsWrap");

    if (error) {
        // Error
        console.log(error);
        return (
            <div className={classes.emptyResultsWrap}>
                <div className={classes.emptyResultsContent} style={{ paddingBottom: "0px" }}>
                    <div className={classes.errorImage} />
                    <div className={classes.emptyResultsText}>
                        {t(plugin.holyNotes.modal.error.generic)}
                    </div>
                </div>
            </div>
        );
    } else if (Math.floor(Math.random() * 100) <= 10)
        // Easter egg
        return (
            <div className={classes.emptyResultsWrap}>
                <div className={classes.emptyResultsContent} style={{ paddingBottom: "0px" }}>
                    <div className={`${classes.noResultsImage} ${classes.alt}`} />
                    <div className={classes.emptyResultsText}>
                        {t(plugin.holyNotes.modal.error.easter)}
                    </div>
                </div>
            </div>
        );
    // Empty notebook
    else
        return (
            <div className={classes.emptyResultsWrap}>
                <div className={classes.emptyResultsContent} style={{ paddingBottom: "0px" }}>
                    <div className={classes.noResultsImage} />
                    <div className={classes.emptyResultsText}>
                        {t(plugin.holyNotes.modal.error.empty)}
                    </div>
                </div>
            </div>
        );
};
