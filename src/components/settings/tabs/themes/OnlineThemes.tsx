/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2026 Vendicated and contributors
 * Copyright (c) 2026 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { t, themes } from "@api/i18n";
import { Button } from "@components/Button";
import { FormSwitch } from "@components/FormSwitch";
import { Heading } from "@components/Heading";
import { Link } from "@components/Link";
import { Notice } from "@components/Notice";
import { Paragraph } from "@components/Paragraph";
import { classNameFactory } from "@utils/css";
import { Margins } from "@utils/margins";
import { useAwaiter } from "@utils/react";
import { React, TextInput } from "@webpack/common";

const cl = classNameFactory("pc-settings-theme-");

export function Validator({ link, onValidate }: { link: string; onValidate: (valid: boolean) => void; }) {
    const [res, err, pending] = useAwaiter(() => fetch(link).then(res => {
        if (res.status > 300) throw `${res.status} ${res.statusText}`;
        const contentType = res.headers.get("Content-Type");
        if (!contentType?.startsWith("text/css") && !contentType?.startsWith("text/plain")) {
            onValidate(false);
            throw t(themes.notCSS);
        }

        onValidate(true);
        return t(themes.okay);
    }));

    const text = pending
        ? t(themes.checking)
        : err
            ? `${t(themes.error.text)} ${err instanceof Error ? err.message : String(err)}`
            : t(themes.valid);

    return <Paragraph style={{
        color: pending ? "var(--text-muted)" : err ? "var(--text-feedback-critical)" : "var(--status-positive)"
    }}>{text}</Paragraph>;
}

export interface OnlineThemesSectionProps {
    enableOnlineThemes: boolean;
    setEnableOnlineThemes: (value: boolean) => void;
    currentThemeLink: string;
    setCurrentThemeLink: (value: string) => void;
    themeLinkValid: boolean;
    setThemeLinkValid: (value: boolean) => void;
    addThemeLink: (link: string) => void;
}

export function OnlineThemesSection({
    enableOnlineThemes,
    setEnableOnlineThemes,
    currentThemeLink,
    setCurrentThemeLink,
    themeLinkValid,
    setThemeLinkValid,
    addThemeLink
}: OnlineThemesSectionProps) {
    return (
        <>
            <Heading className={Margins.top20}>{t(themes.online.title)}</Heading>
            <Paragraph className={Margins.bottom16}>
                {t(themes.online.description)}
            </Paragraph>
            <FormSwitch
                title={t(themes.online.enable)}
                description={t(themes.online.enableDescription)}
                value={enableOnlineThemes}
                onChange={setEnableOnlineThemes}
            />

            <Notice.Info className={Margins.bottom16} style={{ width: "100%" }}>
                {t(themes.download, {
                    bd: <Link href="https://betterdiscord.app/themes">{t(themes.bd)}</Link>,
                    github: <Link href="https://github.com/search?q=discord+theme">{t(themes.github)}</Link>
                })}
            </Notice.Info>

            <div className={cl("link-row")}>
                <TextInput
                    placeholder={t(themes.online.placeholder)}
                    value={currentThemeLink}
                    onChange={setCurrentThemeLink}
                    disabled={!enableOnlineThemes}
                />
                <Button onClick={() => addThemeLink(currentThemeLink)} disabled={!themeLinkValid || !enableOnlineThemes}>
                    {t(themes.add)}
                </Button>
            </div>
            {currentThemeLink && (
                <div className={Margins.top8}>
                    <Validator link={currentThemeLink} onValidate={setThemeLinkValid} />
                </div>
            )}
        </>
    );
}
