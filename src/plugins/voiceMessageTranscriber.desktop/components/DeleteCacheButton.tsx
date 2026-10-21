/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2026 Vendicated and contributors
 * Copyright (c) 2026 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { plugin, t } from "@api/i18n";
import { Button } from "@components/Button";
import { useEffect, useState } from "@webpack/common";

import { clearCache, getCacheSize } from "../utils/cache";

export function DeleteCacheButton() {
    const [size, setSize] = useState(0);

    useEffect(() => {
        let unmounted = false;
        getCacheSize().then(total => {
            if (!unmounted) setSize(total);
        });
        return () => { unmounted = true; };
    }, []);

    return <Button
        disabled={size === 0}
        variant="dangerPrimary"
        onClick={() => clearCache().then(() => setSize(0))}
    >
        {t(plugin.voiceMessageTranscriber.text.deleteCache, { size: (size / 1024 / 1024).toFixed(2) })}
    </Button>;
}
