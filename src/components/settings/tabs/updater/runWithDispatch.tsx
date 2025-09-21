/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2025 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { t } from "@api/i18n";
import { ErrorCard } from "@components/ErrorCard";
import { UpdateLogger } from "@utils/updater";
import { Alerts, Parser } from "@webpack/common";

function getErrorMessage(e: any) {
    if (!e?.code || !e.cmd)
        return t("updater.error.tryAgain");

    const { code, path, cmd, stderr } = e;

    if (code === "ENOENT")
        return t("updater.error.command", { path });

    const extra = stderr || t("updater.error.code", { code });

    return t("updater.error.running", { cmd, error: extra });
}

export function runWithDispatch(dispatch: React.Dispatch<React.SetStateAction<boolean>>, action: () => any) {
    return async () => {
        dispatch(true);

        try {
            await action();
        } catch (e: any) {
            UpdateLogger.error(e);

            const err = getErrorMessage(e);

            Alerts.show({
                title: t("updater.error.title"),
                body: (
                    <ErrorCard>
                        {err.split("\n").map((line, idx) =>
                            <div key={idx}>{Parser.parse(line)}</div>
                        )}
                    </ErrorCard>
                )
            });
        } finally {
            dispatch(false);
        }
    };
}
