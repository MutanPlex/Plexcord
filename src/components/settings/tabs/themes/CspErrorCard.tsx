/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2025 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { t, tJsx } from "@api/i18n";
import { ErrorCard } from "@components/ErrorCard";
import { Link } from "@components/Link";
import { CspBlockedUrls, useCspErrors } from "@utils/cspViolations";
import { Margins } from "@utils/margins";
import { classes } from "@utils/misc";
import { relaunch } from "@utils/native";
import { useForceUpdater } from "@utils/react";
import { Alerts, Button, Forms } from "@webpack/common";

export function CspErrorCard() {
    if (IS_WEB) return null;

    const errors = useCspErrors();
    const forceUpdate = useForceUpdater();

    if (!errors.length) return null;

    const isImgurHtmlDomain = (url: string) => url.startsWith("https://imgur.com/");

    const allowUrl = async (url: string) => {
        const { origin: baseUrl, host } = new URL(url);

        const result = await PlexcordNative.csp.requestAddOverride(baseUrl, ["connect-src", "img-src", "style-src", "font-src"], "Plexcord " + t("themes.title"));
        if (result !== "ok") return;

        CspBlockedUrls.forEach(url => {
            if (new URL(url).host === host) {
                CspBlockedUrls.delete(url);
            }
        });

        forceUpdate();

        Alerts.show({
            title: t("plugins.restart.required"),
            body: t("csp.restart"),
            confirmText: t("plugins.restart.button.now"),
            cancelText: t("plugins.restart.button.later"),
            onConfirm: relaunch
        });
    };

    const hasImgurHtmlDomain = errors.some(isImgurHtmlDomain);

    return (
        <ErrorCard className="pc-settings-card">
            <Forms.FormTitle tag="h5">{t("csp.blocked.resources")}</Forms.FormTitle>
            <Forms.FormText>{t("csp.blocked.disallowed")}</Forms.FormText>
            <Forms.FormText>{t("csp.blocked.recommended")}</Forms.FormText>
            <Forms.FormText>
                {tJsx("csp.blocked.afterAllow", {
                    platform: IS_DISCORD_DESKTOP ? "Discord" : "Plextron"
                })}
            </Forms.FormText>

            <Forms.FormTitle tag="h5" className={classes(Margins.top16, Margins.bottom8)}>{t("csp.blocked.url")}</Forms.FormTitle>
            <div className="pc-settings-csp-list">
                {errors.map((url, i) => (
                    <div key={url}>
                        {i !== 0 && <Forms.FormDivider className={Margins.bottom8} />}
                        <div className="pc-settings-csp-row">
                            <Link href={url}>{url}</Link>
                            <Button color={Button.Colors.PRIMARY} onClick={() => allowUrl(url)} disabled={isImgurHtmlDomain(url)}>
                                {t("csp.blocked.allow")}
                            </Button>
                        </div>
                    </div>
                ))}
            </div>

            {hasImgurHtmlDomain && (
                <>
                    <Forms.FormDivider className={classes(Margins.top8, Margins.bottom16)} />
                    <Forms.FormText>
                        {tJsx("csp.imgur.direct", { etc: <code>https://i.imgur.com/...</code> })}
                    </Forms.FormText>
                    <Forms.FormText>{t("csp.imgur.copy")}</Forms.FormText>
                </>
            )}
        </ErrorCard>
    );
}
