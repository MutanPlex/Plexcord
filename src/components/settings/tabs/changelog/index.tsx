/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2025 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import "./styles.css";

import { changelog, t } from "@api/i18n";
import { Button } from "@components/Button";
import { Card } from "@components/Card";
import { Divider } from "@components/Divider";
import { ErrorCard } from "@components/ErrorCard";
import { Heading } from "@components/Heading";
import { DeleteIcon } from "@components/Icons";
import { Link } from "@components/Link";
import { Paragraph } from "@components/Paragraph";
import { SettingsTab, wrapTab } from "@components/settings/tabs/BaseTab";
import { HashLink } from "@components/settings/tabs/updater/Components";
import { Margins } from "@utils/margins";
import { useAwaiter } from "@utils/react";
import { formatTimestamp } from "@utils/text";
import { getRepo, UpdateLogger } from "@utils/updater";
import { Alerts, React, Toasts, useEffect } from "@webpack/common";

import gitHash from "~git-hash";

import {
    ChangelogEntry,
    ChangelogHistory,
    clearChangelogHistory,
    clearIndividualLog,
    getChangelogHistory,
    getCommitsSinceLastSeen,
    getLastRepositoryCheckHash,
    getNewPlugins,
    getNewSettings,
    getNewSettingsEntries,
    getNewSettingsSize,
    getUpdatedPlugins,
    initializeChangelog,
    saveUpdateSession,
    UpdateSession,
} from "./changelogManager";
import { NewPluginsCompact, NewPluginsSection } from "./NewPluginsSection";

function ChangelogCard({
    entry,
    repo,
    repoPending,
}: {
    entry: ChangelogEntry;
    repo: string;
    repoPending: boolean;
}) {
    return (
        <Card className="pc-changelog-entry">
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.25em",
                }}
            >
                <div className="pc-changelog-entry-header">
                    <code className="pc-changelog-entry-hash">
                        <HashLink
                            repo={repo}
                            hash={entry.hash}
                            disabled={repoPending}
                        />
                    </code>
                    <span className="pc-changelog-entry-author">
                        {t(changelog.by)} {entry.author}
                    </span>
                </div>
                <div className="pc-changelog-entry-message">
                    {entry.message}
                </div>
            </div>
        </Card>
    );
}

function UpdateLogCard({
    log,
    repo,
    repoPending,
    isExpanded,
    onToggleExpand,
    onClearLog,
}: {
    log: UpdateSession;
    repo: string;
    repoPending: boolean;
    isExpanded: boolean;
    onToggleExpand: () => void;
    onClearLog: (logId: string) => void;
}) {
    const isRepositoryFetch =
        log.type === "repository_fetch" ||
        (log.type === undefined &&
            log.fromHash === log.toHash &&
            log.commits.length === 0);
    const isUpToDate = log.fromHash === log.toHash;

    return (
        <Card className="pc-changelog-log">
            <div className="pc-changelog-log-header" onClick={onToggleExpand}>
                <div className="pc-changelog-log-info">
                    <div className="pc-changelog-log-title">
                        <span>
                            {isRepositoryFetch
                                ? isUpToDate
                                    ? `${t(changelog.check)}: ${log.fromHash.slice(0, 7)} (${t(changelog.uptodate)})`
                                    : `${t(changelog.check)}: ${log.fromHash.slice(0, 7)} → ${log.toHash.slice(0, 7)}`
                                : `${t(changelog.update)}: ${log.fromHash.slice(0, 7)} → ${log.toHash.slice(0, 7)}`}
                        </span>
                        <Button
                            size="min"
                            variant="secondary"
                            className="pc-changelog-delete-button"
                            style={{
                                padding: "4px",
                                color: "var(--status-danger)",
                                opacity: 0.6,
                                cursor: "pointer",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                            onClick={e => {
                                e.stopPropagation();
                                onClearLog(log.id);
                            }}
                        >
                            <DeleteIcon width={16} height={16} />
                        </Button>
                    </div>
                    <div className="pc-changelog-log-meta">
                        {formatTimestamp(log.timestamp)}
                        {log.commits.length > 0 &&
                            ` • ${log.commits.length} ${t(changelog.commit.available)}`}
                        {log.commits.length === 0 && ` • ${t(changelog.commit.no)}`}
                        {log.newPlugins.length > 0 &&
                            ` • ${log.newPlugins.length} ${t(changelog.commit.new)}`}
                        {log.updatedPlugins.length > 0 &&
                            ` • ${log.updatedPlugins.length} ${t(changelog.commit.updated)}`}
                        {log.newSettings &&
                            getNewSettingsSize(log.newSettings) > 0 &&
                            ` • ${getNewSettingsEntries(log.newSettings).reduce((sum, [, arr]) => sum + arr.length, 0)} ${t(changelog.commit.settings)}`}
                    </div>
                </div>
                <div
                    className={`pc-changelog-log-toggle ${isExpanded ? "expanded" : ""}`}
                >
                    ▼
                </div>
            </div>

            {isExpanded && (
                <div className="pc-changelog-log-content">
                    {log.newPlugins.length > 0 && (
                        <div className="pc-changelog-log-plugins">
                            <NewPluginsCompact
                                newPlugins={log.newPlugins}
                                maxDisplay={50}
                            />
                        </div>
                    )}

                    {log.updatedPlugins.length > 0 && (
                        <div className="pc-changelog-log-plugins">
                            <Heading className={Margins.bottom8}>
                                {t(changelog.updatedPlugins)}
                            </Heading>
                            <NewPluginsCompact
                                newPlugins={log.updatedPlugins}
                                maxDisplay={50}
                            />
                        </div>
                    )}

                    {log.newSettings &&
                        getNewSettingsSize(log.newSettings) > 0 && (
                            <div className="pc-changelog-log-plugins">
                                <Heading className={Margins.bottom8}>
                                    {t(changelog.newSettings)}
                                </Heading>
                                <div className="pc-changelog-new-plugins-list">
                                    {getNewSettingsEntries(log.newSettings).map(
                                        ([pluginName, settings]) =>
                                            settings.map(setting => (
                                                <span
                                                    key={`${pluginName}-${setting}`}
                                                    className="pc-changelog-new-plugin-tag"
                                                    title={t(changelog.newSettingTooltip, {
                                                        plugin: pluginName,
                                                    })}
                                                >
                                                    {pluginName}.{setting}
                                                </span>
                                            )),
                                    )}
                                </div>
                            </div>
                        )}

                    {log.commits.length > 0 && (
                        <div className="pc-changelog-log-commits">
                            <div className="pc-changelog-log-commits-list">
                                {log.commits.map(entry => (
                                    <ChangelogCard
                                        key={entry.hash}
                                        entry={entry}
                                        repo={repo}
                                        repoPending={repoPending}
                                    />
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            )}
        </Card>
    );
}

function ChangelogContent() {
    const [repo, repoErr, repoPending] = useAwaiter(getRepo, {
        fallbackValue: t(changelog.loading),
    });
    const [changelogEntries, setChangelogEntries] = React.useState<ChangelogEntry[]>([]);
    const [changelogHistory, setChangelogHistory] =
        React.useState<ChangelogHistory>([]);
    const [newPlugins, setNewPlugins] = React.useState<string[]>([]);
    const [updatedPlugins, setUpdatedPlugins] = React.useState<string[]>([]);
    const [isLoading, setIsLoading] = React.useState(true);
    const [error, setError] = React.useState<string | null>(null);
    const [expandedLogs, setExpandedLogs] = React.useState<Set<string>>(
        new Set(),
    );
    const [showHistory, setShowHistory] = React.useState(false);
    const [recentlyChecked, setRecentlyChecked] = React.useState(false);

    useEffect(() => {
        const init = async () => {
            try {
                await initializeChangelog();
                await loadChangelogHistory();
            } catch (err) {
                console.error("Failed to initialize changelog:", err);
            }
        };
        init();
    }, []);

    useEffect(() => {
        if (repoErr) {
            UpdateLogger.error("Failed to retrieve repo", repoErr);
            setError("Failed to retrieve repository information");
        }
    }, [repoErr]);

    const loadChangelogHistory = React.useCallback(async () => {
        try {
            const history = await getChangelogHistory();
            setChangelogHistory(history);
        } catch (err) {
            console.error("Failed to load changelog history:", err);
        }
    }, []);

    const loadNewPlugins = React.useCallback(async () => {
        try {
            const newPlgs = await getNewPlugins();
            const updatedPlgs = await getUpdatedPlugins();
            setNewPlugins(newPlgs);
            setUpdatedPlugins(updatedPlgs);
        } catch (err) {
            console.error("Failed to load new plugins:", err);
        }
    }, []);

    const ensureLocalUpdateLogged = React.useCallback(async () => {
        if (repoPending || repoErr) return false;
        const repoUrl = repo;
        if (!repoUrl) return false;

        try {
            const commits = await getCommitsSinceLastSeen(repoUrl);
            if (commits.length === 0) return false;

            const newPlgs = await getNewPlugins();
            const updatedPlgs = await getUpdatedPlugins();
            const newSettings = await getNewSettings();

            await saveUpdateSession(commits, newPlgs, updatedPlgs, newSettings);

            setChangelogEntries(commits);
            setNewPlugins(newPlgs);
            setUpdatedPlugins(updatedPlgs);
            await loadChangelogHistory();
            return true;
        } catch (err) {
            console.error("Failed to log local update:", err);
            return false;
        }
    }, [repo, repoErr, repoPending, loadChangelogHistory]);

    // check if the repository was recently refreshed
    useEffect(() => {
        const checkRecentStatus = async () => {
            try {
                const lastRepoCheck = await getLastRepositoryCheckHash();
                const updates = await PlexcordNative.updater.getUpdates();

                if (updates.ok) {
                    const currentRepoHash =
                        updates.value.length > 0
                            ? updates.value[0].hash
                            : gitHash;
                    setRecentlyChecked(lastRepoCheck === currentRepoHash);
                }
            } catch (err) {
                // ignore errors (hopefully there are none lol)
                setRecentlyChecked(false);
            }
        };

        if (!repoPending && !repoErr) {
            checkRecentStatus();
        }
    }, [repoPending, repoErr]);

    const fetchChangelog = React.useCallback(async () => {
        if (repoPending || repoErr) return;

        setIsLoading(true);
        setError(null);

        try {
            // check if the repository was recently refreshed and that nothing has changed
            const updates = await PlexcordNative.updater.getUpdates();
            const lastRepoCheck = await getLastRepositoryCheckHash();
            const currentRepoHash =
                updates.ok && updates.value.length > 0
                    ? updates.value[0].hash
                    : gitHash;

            // If repository state hasn't changed since last check
            if (lastRepoCheck === currentRepoHash) {
                setIsLoading(false);
                setRecentlyChecked(true);
                const logged = await ensureLocalUpdateLogged();
                if (!logged) {
                    setChangelogEntries([]);
                    Toasts.show({
                        message: t(changelog.toast.already),
                        id: Toasts.genId(),
                        type: Toasts.Type.MESSAGE,
                        options: {
                            position: Toasts.Position.BOTTOM,
                        },
                    });
                }
                return;
            }

            if (updates.ok && updates.value) {
                if (updates.value.length > 0) {
                    setChangelogEntries(updates.value);

                    const newPlgs = await getNewPlugins();
                    const updatedPlgs = await getUpdatedPlugins();
                    const newSettings = await getNewSettings();
                    setNewPlugins(newPlgs);
                    setUpdatedPlugins(updatedPlgs);

                    await saveUpdateSession(
                        updates.value,
                        newPlgs,
                        updatedPlgs,
                        newSettings,
                        true,
                    );
                    await loadChangelogHistory();
                    setRecentlyChecked(true);

                    Toasts.show({
                        message: t(changelog.toast.found, { count: updates.value.length, s: updates.value.length === 1 ? "" : "s" }),
                        id: Toasts.genId(),
                        type: Toasts.Type.SUCCESS,
                        options: {
                            position: Toasts.Position.BOTTOM,
                        },
                    });
                } else {
                    const logged = await ensureLocalUpdateLogged();
                    setRecentlyChecked(true);
                    Toasts.show({
                        message: logged
                            ? t(changelog.toast.yourLatest)
                            : t(changelog.toast.local),
                        id: Toasts.genId(),
                        type: logged ? Toasts.Type.SUCCESS : Toasts.Type.MESSAGE,
                        options: {
                            position: Toasts.Position.BOTTOM,
                        },
                    });
                    if (!logged) {
                        setChangelogEntries([]);
                    }
                }
            } else if (!updates.ok) {
                throw new Error(
                    updates.error?.message || "Failed to fetch from repository",
                );
            }
        } catch (err: any) {
            UpdateLogger.error("Failed to fetch commits from repository", err);
            const errorMessage =
                err?.message ||
                "Failed to connect to repository. Check your internet connection.";
            setError(errorMessage);

            // funny little error toast hopefully doesn't happen!
            Toasts.show({
                message: t(changelog.toast.failed),
                id: Toasts.genId(),
                type: Toasts.Type.FAILURE,
                options: {
                    position: Toasts.Position.BOTTOM,
                },
            });
        } finally {
            setIsLoading(false);
        }
    }, [repoPending, repoErr, loadNewPlugins, loadChangelogHistory]);

    useEffect(() => {
        const loadInitialData = async () => {
            if (!repoPending && !repoErr) {
                await loadNewPlugins();
                const logged = await ensureLocalUpdateLogged();
                if (!logged) {
                    await fetchChangelog();
                } else {
                    setIsLoading(false);
                }
            } else if (!repoPending) {
                // perseverance
                await loadNewPlugins();
                setIsLoading(false);
            }
        };
        loadInitialData();
    }, [
        repoPending,
        repoErr,
        fetchChangelog,
        loadNewPlugins,
        ensureLocalUpdateLogged,
    ]);

    const toggleLogExpanded = (logId: string) => {
        const newExpanded = new Set(expandedLogs);
        if (newExpanded.has(logId)) {
            newExpanded.delete(logId);
        } else {
            newExpanded.add(logId);
        }
        setExpandedLogs(newExpanded);
    };

    const hasCurrentChanges =
        changelogEntries.length > 0 ||
        newPlugins.length > 0 ||
        updatedPlugins.length > 0;

    return (
        <>
            <Heading className={Margins.top16}>{t(changelog.modal.fetch.title)}</Heading>
            <Paragraph className={Margins.bottom16}>
                {t(changelog.modal.fetch.description)}
            </Paragraph>

            <div className="pc-changelog-controls">
                <Button
                    size="small"
                    disabled={isLoading || repoPending || !!repoErr}
                    onClick={fetchChangelog}
                    variant={recentlyChecked ? "positive" : "primary"}
                >
                    {isLoading
                        ? t(changelog.loading)
                        : recentlyChecked
                            ? t(changelog.repoUptodate)
                            : t(changelog.fetch)}
                </Button>

                {changelogHistory.length > 0 && (
                    <>
                        <Button
                            size="small"
                            variant={showHistory ? "primary" : "secondary"}
                            onClick={() => setShowHistory(!showHistory)}
                            style={{ marginLeft: "8px" }}
                        >
                            {showHistory ? t(changelog.modal.hide) : t(changelog.modal.show)}
                        </Button>
                        <Button
                            size="small"
                            variant="dangerPrimary"
                            onClick={() => {
                                Alerts.show({
                                    title: t(changelog.alert.clear.title),
                                    body: t(changelog.alert.clear.body),
                                    confirmText: t(changelog.alert.clear.confirm),
                                    confirmColor: t(changelog.alert.clear.confirmColor),
                                    cancelText: t(changelog.alert.clear.cancel),
                                    onConfirm: async () => {
                                        await clearChangelogHistory();
                                        await loadChangelogHistory();
                                        setShowHistory(false);
                                        Toasts.show({
                                            message: t(changelog.toast.cleared),
                                            id: Toasts.genId(),
                                            type: Toasts.Type.SUCCESS,
                                            options: {
                                                position: Toasts.Position.BOTTOM,
                                            },
                                        });
                                    },
                                });
                            }}
                            style={{ marginLeft: "8px" }}
                        >
                            {t(changelog.clear)}
                        </Button>
                    </>
                )}
            </div>

            {error && (
                <ErrorCard style={{ padding: "1em", marginTop: "1em" }}>
                    <Paragraph>{error}</Paragraph>
                    <Paragraph color="text-subtle" style={{ marginTop: "0.5em" }}>
                        {t(changelog.internet)}
                    </Paragraph>
                </ErrorCard>
            )}

            <Divider className={Margins.top20} />

            <Heading>{t(changelog.modal.repository)}</Heading>

            <Paragraph className={Margins.bottom16}>
                {t(changelog.modal.description)}
            </Paragraph>

            <Paragraph color="text-subtle">
                {repoPending ? (
                    repo
                ) : repoErr ? (
                    t(changelog.modal.failed)
                ) : (
                    <Link href={repo}>
                        {repo.split("/").slice(-2).join("/")}
                    </Link>
                )}
            </Paragraph>
            <Paragraph color="text-subtle">
                {t(changelog.modal.current)} (<HashLink repo={repo} hash={gitHash} disabled={repoPending} />)
            </Paragraph>

            {hasCurrentChanges && (
                <>
                    <Divider className={Margins.top20} />

                    <Heading className={Margins.top20}>{t(changelog.recent)}</Heading>
                    <Paragraph className={Margins.bottom16}>
                        {t(changelog.modal.fetch.newCommit)}
                    </Paragraph>

                    {newPlugins.length > 0 && (
                        <div className={Margins.bottom16}>
                            <NewPluginsSection
                                newPlugins={newPlugins}
                                onPluginToggle={() => { }}
                            />
                        </div>
                    )}

                    {updatedPlugins.length > 0 && (
                        <div className={Margins.bottom16}>
                            <Heading className={Margins.bottom8}>
                                ({updatedPlugins.length}) {t(changelog.updatedPlugins)}
                            </Heading>
                            <NewPluginsCompact newPlugins={updatedPlugins} />
                        </div>
                    )}

                    {changelogEntries.length > 0 && (
                        <div>
                            <Heading className={Margins.bottom8}>
                                {t(changelog.codeChanges, { count: changelogEntries.length, s: changelogEntries.length === 1 ? "" : "s" })}
                            </Heading>
                            <div className="pc-changelog-commits-list">
                                {changelogEntries.map(entry => (
                                    <ChangelogCard
                                        key={entry.hash}
                                        entry={entry}
                                        repo={repo}
                                        repoPending={repoPending}
                                    />
                                ))}
                            </div>
                        </div>
                    )}
                </>
            )}

            {!hasCurrentChanges && !isLoading && !error && (
                <>
                    <Divider className={Margins.top20} />
                    <Heading className={Margins.top20}>{t(changelog.recent)}</Heading>
                    <Paragraph color="text-subtle">
                        {t(changelog.noCommit)}
                    </Paragraph>
                </>
            )}

            {showHistory && changelogHistory.length > 0 && (
                <>
                    <Divider className={Margins.top20} />

                    <Heading className={Margins.top20}>{t(changelog.updateLogs, { count: changelogHistory.length })}</Heading>

                    <Paragraph className={Margins.bottom16}>{t(changelog.previous)}</Paragraph>

                    <div className="pc-changelog-history-list">
                        {changelogHistory.map(log => (
                            <UpdateLogCard
                                key={log.id}
                                log={log}
                                repo={repo}
                                repoPending={repoPending}
                                isExpanded={expandedLogs.has(log.id)}
                                onToggleExpand={() => toggleLogExpanded(log.id)}
                                onClearLog={logId => {
                                    Alerts.show({
                                        title: t(changelog.alert.log.title),
                                        body: t(changelog.alert.log.body),
                                        confirmText: t(changelog.alert.log.confirm),
                                        confirmColor: t(changelog.alert.log.confirmColor),
                                        cancelText: t(changelog.alert.log.cancel),
                                        onConfirm: async () => {
                                            await clearIndividualLog(logId);
                                            await loadChangelogHistory();
                                            setExpandedLogs(
                                                new Set(
                                                    Array.from(
                                                        expandedLogs,
                                                    ).filter(
                                                        id => id !== logId,
                                                    ),
                                                ),
                                            );
                                            Toasts.show({
                                                message: t(changelog.toast.logCleared),
                                                id: Toasts.genId(),
                                                type: Toasts.Type.SUCCESS,
                                                options: {
                                                    position:
                                                        Toasts.Position.BOTTOM,
                                                },
                                            });
                                        },
                                    });
                                }}
                            />
                        ))}
                    </div>
                </>
            )}
        </>
    );
}

function ChangelogTab() {
    return (
        <SettingsTab>
            <ChangelogContent />
        </SettingsTab>
    );
}

export default wrapTab(ChangelogTab, t(changelog.text));
