/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2025 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { t, tJsx } from "@api/i18n";
import { Button } from "@components/Button";
import { Card } from "@components/Card";
import { ErrorCard } from "@components/ErrorCard";
import { Flex } from "@components/Flex";
import { Link } from "@components/Link";
import { Paragraph } from "@components/Paragraph";
import { Margins } from "@utils/margins";
import { classes } from "@utils/misc";
import { relaunch } from "@utils/native";
import { changes, checkForUpdates, update, updateError } from "@utils/updater";
import { Alerts, React, Toasts, useState } from "@webpack/common";

import { runWithDispatch } from "./runWithDispatch";

export interface CommonProps {
    repo: string;
    repoPending: boolean;
}

export function HashLink({ repo, hash, disabled = false }: { repo: string, hash: string, disabled?: boolean; }) {
    return (
        <Link href={`${repo}/commit/${hash}`} disabled={disabled}>
            {hash}
        </Link>
    );
}

export function Changes({ updates, repo, repoPending }: CommonProps & { updates: typeof changes; }) {
    return (
        <Card style={{ padding: "0 0.5em" }} defaultPadding={false}>
            {updates.map(({ hash, author, message }) => (
                <div
                    key={hash}
                    style={{
                        marginTop: "0.5em",
                        marginBottom: "0.5em"
                    }}
                >
                    <code>
                        <HashLink {...{ repo, hash }} disabled={repoPending} />
                    </code>

                    <span style={{
                        marginLeft: "0.5em",
                        color: "var(--text-default)"
                    }}>
                        {message} - {author}
                    </span>
                </div>
            ))}
        </Card>
    );
}

export function Newer(props: CommonProps) {
    return (
        <>
            <Paragraph className={Margins.bottom8}>
                {t("updater.github.local")}
            </Paragraph>
            <Changes {...props} updates={changes} />
        </>
    );
}

export function Updatable(props: CommonProps) {
    const [updates, setUpdates] = useState(changes);
    const [isChecking, setIsChecking] = useState(false);
    const [isUpdating, setIsUpdating] = useState(false);

    const isOutdated = (updates?.length ?? 0) > 0;

    return (
        <>
            {!updates && updateError ? (
                <>
                    <Paragraph>{t("updater.error.check")}</Paragraph>
                    <ErrorCard style={{ padding: "1em" }}>
                        <p>{updateError.stderr || updateError.stdout || t("updater.error.occurred")}</p>
                    </ErrorCard>
                </>
            ) : (
                <Paragraph className={Margins.bottom8}>
                    {isOutdated ? (updates.length === 1 ? t("updater.available") : tJsx("updater.available_plural", {
                        count: updates.length
                    })) : t("updater.current")}
                </Paragraph>
            )}

            {isOutdated && <Changes updates={updates} {...props} />}

            <Flex className={classes(Margins.bottom8, Margins.top8)}>
                {isOutdated && (
                    <Button
                        size="small"
                        disabled={isUpdating || isChecking}
                        onClick={runWithDispatch(setIsUpdating, async () => {
                            if (await update()) {
                                setUpdates([]);

                                await new Promise<void>(r => {
                                    Alerts.show({
                                        title: t("updater.successful.title"),
                                        body: t("updater.successful.body"),
                                        confirmText: t("updater.successful.button.confirm"),
                                        cancelText: t("updater.successful.button.cancel"),
                                        onConfirm() {
                                            relaunch();
                                            r();
                                        },
                                        onCancel: r
                                    });
                                });
                            }
                        })}
                    >
                        {t("updater.successful.button.update")}
                    </Button>
                )}
                <Button
                    size="small"
                    disabled={isUpdating || isChecking}
                    onClick={runWithDispatch(setIsChecking, async () => {
                        const outdated = await checkForUpdates();

                        if (outdated) {
                            setUpdates(changes);
                        } else {
                            setUpdates([]);

                            Toasts.show({
                                message: t("updater.successful.noFound"),
                                id: Toasts.genId(),
                                type: Toasts.Type.MESSAGE,
                                options: {
                                    position: Toasts.Position.BOTTOM
                                }
                            });
                        }
                    })}
                >
                    {t("updater.successful.button.check")}
                </Button>
            </Flex>
        </>
    );
}
