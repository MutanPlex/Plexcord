/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2026 Vendicated and contributors
 * Copyright (c) 2026 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { plugin, t } from "@api/i18n";
import { Button } from "@components/Button";
import { SettingsSection } from "@components/settings/tabs/plugins/components/Common";
import { useEffect, useState } from "@webpack/common";

interface HistoryControlsProps {
    onClear: () => Promise<void>;
}

/** Render the saved-history reset control and its completion status. */
export function HistoryControls(props: HistoryControlsProps) {
    const { onClear } = props;
    const [busy, setBusy] = useState(false);
    const [result, setResult] = useState<{ success: boolean; } | null>(null);

    useEffect(() => {
        if (!result) {
            return;
        }

        const timeout = setTimeout(() => setResult(null), 5000);

        return () => clearTimeout(timeout);
    }, [result]);

    async function clear() {
        setBusy(true);
        setResult(null);

        try {
            await onClear();
            setResult({ success: true });
        } catch {
            setResult({ success: false });
        } finally {
            setBusy(false);
        }
    }

    return (
        <SettingsSection
            id="clearSavedHistory"
            name={t(plugin.betterBackreading.history.clearTitle)}
            description={t(plugin.betterBackreading.history.clearDescription)}
        >
            <Button variant="secondary" style={{ width: "100%" }} disabled={busy} aria-busy={busy} aria-live="polite" onClick={clear}>
                {result ? t(result.success ? plugin.betterBackreading.history.success : plugin.betterBackreading.history.failure) : t(plugin.betterBackreading.history.clear)}
            </Button>
        </SettingsSection>
    );
}
