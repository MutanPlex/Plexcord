/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2025 Vendicated and contributors
 * Copyright (c) 2026 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { plugin, t } from "@api/i18n";
import { Paragraph } from "@components/Paragraph";
import { useState } from "@webpack/common";

import { makeDevBanner, settings, settingVariables } from ".";

export function FormatSetting(setValue) {
    const { format } = settings.store;
    const [state, setState] = useState(format ?? "{buildChannel} {buildNumber} ({buildHash}) | {plexcordName} {plexcordVersion} ({plexcordHash})");
    const [error, setError] = useState<string | null>(null);

    function handleChange(newValue) {
        if (!newValue.trim()) {
            setError(t(plugin.discordDevBanner.empty));
            return;
        }
        setError(null);
        setState(newValue);
        setValue(newValue);
    }

    const preview = makeDevBanner(state);

    return (
        <section>
            <Paragraph className={"pc-discord-dev-banner-text"}>
                {t(plugin.discordDevBanner.about)}
                {"\n\n"}
                {settingVariables().join("\n")}
            </Paragraph>

            <Paragraph className="pc-discord-dev-banner-text">{t(plugin.discordDevBanner.preview)}</Paragraph>
            <Paragraph style={{ padding: "2px" }}>{preview}</Paragraph>
            <textarea
                className="pc-discord-dev-banner-input"
                value={state}
                onChange={e => handleChange(e.target.value)}
                placeholder="{buildChannel} {buildNumber} ({buildHash}) | {plexcordName} {plexcordVersion} ({plexcordHash})"
                rows={1}
                ref={el => {
                    if (el) {
                        el.style.height = "auto";
                        el.style.height = el.scrollHeight + "px";
                    }
                }}
                onInput={e => {
                    const el = e.currentTarget;
                    el.style.height = "auto";
                    el.style.height = el.scrollHeight + "px";
                }}
            />

            {error && (
                <Paragraph className={"pc-discord-dev-banner-error"}>{error}</Paragraph>
            )}
        </section>
    );
}
