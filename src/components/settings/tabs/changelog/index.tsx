/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2025 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import "./styles.css";

import { t } from "@api/i18n";
import { ErrorCard } from "@components/ErrorCard";
import { DeleteIcon } from "@components/Icons";
import { Link } from "@components/Link";
import { SettingsTab, wrapTab } from "@components/settings/tabs/BaseTab";
import { Margins } from "@utils/margins";
import { useAwaiter } from "@utils/react";
import { getRepo, shortGitHash, UpdateLogger } from "@utils/updater";
import { Alerts, Button, Card, Forms, React, Toasts } from "@webpack/common";

import gitHash from "~git-hash";

import {
    ChangelogEntry,
    ChangelogHistory,
    clearChangelogHistory,
    clearIndividualLog,
    formatTimestamp,
    getChangelogHistory,
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

function HashLink({
    repo,
    hash,
    disabled = false,
}: {
    repo: string;
    hash: string;
    disabled?: boolean;
}) {
    return (
        <Link href={`${repo}/commit/${hash}`} disabled={disabled}>
            {hash}
        </Link>
    );
}

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
                            hash={entry.hash.slice(0, 7)}
                            disabled={repoPending}
                        />
                    </code>
                    <span className="pc-changelog-entry-author">
                        {t("changelog.by")} {entry.author}
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
                                    ? `${t("changelog.check")}: ${log.fromHash.slice(0, 7)} (${t("changelog.uptodate")})`
                                    : `${t("changelog.check")}: ${log.fromHash.slice(0, 7)} → ${log.toHash.slice(0, 7)}`
                                : `${t("changelog.update")}: ${log.fromHash.slice(0, 7)} → ${log.toHash.slice(0, 7)}`}
                        </span>
                        <Button
                            size={Button.Sizes.NONE}
                            color={Button.Colors.TRANSPARENT}
                            look={Button.Looks.BLANK}
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
                            ` • ${log.commits.length} ${t("changelog.commit.available")}`}
                        {log.commits.length === 0 && ` • ${t("changelog.commit.no")}`}
                        {log.newPlugins.length > 0 &&
                            ` • ${log.newPlugins.length} ${t("changelog.commit.new")}`}
                        {log.updatedPlugins.length > 0 &&
                            ` • ${log.updatedPlugins.length} ${t("changelog.commit.updated")}`}
                        {log.newSettings &&
                            getNewSettingsSize(log.newSettings) > 0 &&
                            ` • ${getNewSettingsEntries(log.newSettings).reduce((sum, [, arr]) => sum + arr.length, 0)} ${t("changelog.commit.settings")}`}
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
                            <Forms.FormTitle
                                tag="h6"
                                className={Margins.bottom8}
                            >
                                {t("changelog.updatedplugins")}
                            </Forms.FormTitle>
                            <NewPluginsCompact
                                newPlugins={log.updatedPlugins}
                                maxDisplay={50}
                            />
                        </div>
                    )}

                    {log.newSettings &&
                        getNewSettingsSize(log.newSettings) > 0 && (
                            <div className="pc-changelog-log-plugins">
                                <Forms.FormTitle
                                    tag="h6"
                                    className={Margins.bottom8}
                                >
                                    {t("changelog.newSettings")}
                                </Forms.FormTitle>
                                <div className="pc-changelog-new-plugins-list">
                                    {getNewSettingsEntries(log.newSettings).map(
                                        ([pluginName, settings]) =>
                                            settings.map(setting => (
                                                <span
                                                    key={`${pluginName}-${setting}`}
                                                    className="pc-changelog-new-plugin-tag"
                                                    title={t("changelog.newSettingTooltip", {
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
        fallbackValue: t("changelog.loading"),
    });
    const [changelog, setChangelog] = React.useState<ChangelogEntry[]>([]);
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

    React.useEffect(() => {
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

    React.useEffect(() => {
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

    // check if the repository was recently refreshed
    React.useEffect(() => {
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
                Toasts.show({
                    message: t("changelog.toast.already"),
                    id: Toasts.genId(),
                    type: Toasts.Type.MESSAGE,
                    options: {
                        position: Toasts.Position.BOTTOM,
                    },
                });
                return;
            }

            if (updates.ok && updates.value) {
                setChangelog(updates.value);

                // Load current new/updated plugins and settings
                const newPlgs = await getNewPlugins();
                const updatedPlgs = await getUpdatedPlugins();
                const newSettings = await getNewSettings();
                setNewPlugins(newPlgs);
                setUpdatedPlugins(updatedPlgs);

                // always save the current fetch session to history to track repo state
                await saveUpdateSession(
                    updates.value,
                    newPlgs,
                    updatedPlgs,
                    newSettings,
                    true, // forceLog = true for repository fetches
                );
                await loadChangelogHistory();
                setRecentlyChecked(true);

                Toasts.show({
                    message:
                        updates.value.length > 0
                            ? t("changelog.toast.found", { count: updates.value.length, s: updates.value.length === 1 ? "" : "s" })
                            : t("changelog.toast.local"),
                    id: Toasts.genId(),
                    type:
                        updates.value.length > 0
                            ? Toasts.Type.SUCCESS
                            : Toasts.Type.MESSAGE,
                    options: {
                        position: Toasts.Position.BOTTOM,
                    },
                });
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
                message: t("changelog.toast.failed"),
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

    React.useEffect(() => {
        const loadInitialData = async () => {
            if (!repoPending && !repoErr) {
                // load new plugins first, then fetch the commits
                await loadNewPlugins();
                await fetchChangelog();
            } else if (!repoPending) {
                // perseverance
                await loadNewPlugins();
                setIsLoading(false);
            }
        };

        loadInitialData();
    }, [repoPending, repoErr, fetchChangelog, loadNewPlugins]);

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
        changelog.length > 0 ||
        newPlugins.length > 0 ||
        updatedPlugins.length > 0;

    return (
        <>
            <Forms.FormText className={Margins.bottom16}>
                {t("changelog.modal.description")}
            </Forms.FormText>

            <Forms.FormTitle tag="h5">{t("changelog.modal.repository")}</Forms.FormTitle>
            <Forms.FormText className={Margins.bottom16}>
                {repoPending ? (
                    repo
                ) : repoErr ? (
                    t("changelog.modal.failed")
                ) : (
                    <Link href={repo}>
                        {repo.split("/").slice(-2).join("/")}
                    </Link>
                )}{" "}
                ({t("changelog.modal.current")}{" "}
                <span className="pc-changelog-current-hash">
                    {shortGitHash()}
                </span>
                )
            </Forms.FormText>

            <div className="pc-changelog-controls">
                <Button
                    size={Button.Sizes.SMALL}
                    disabled={isLoading || repoPending || !!repoErr}
                    onClick={fetchChangelog}
                    color={
                        recentlyChecked
                            ? Button.Colors.GREEN
                            : Button.Colors.BRAND
                    }
                >
                    {isLoading
                        ? t("changelog.loading")
                        : recentlyChecked
                            ? t("changelog.repoUptodate")
                            : t("changelog.fetch")}
                </Button>

                {changelogHistory.length > 0 && (
                    <>
                        <Button
                            size={Button.Sizes.SMALL}
                            color={
                                showHistory
                                    ? Button.Colors.PRIMARY
                                    : Button.Colors.BRAND
                            }
                            onClick={() => setShowHistory(!showHistory)}
                            style={{ marginLeft: "8px" }}
                        >
                            {showHistory ? t("changelog.modal.hide") : t("changelog.modal.show")}
                        </Button>
                        <Button
                            size={Button.Sizes.SMALL}
                            color={Button.Colors.RED}
                            onClick={() => {
                                Alerts.show({
                                    title: t("changelog.alert.clear.title"),
                                    body: t("changelog.alert.clear.body"),
                                    confirmText: t("changelog.alert.clear.confirm"),
                                    confirmColor: t("changelog.alert.clear.confirmColor"),
                                    cancelText: t("changelog.alert.clear.cancel"),
                                    onConfirm: async () => {
                                        await clearChangelogHistory();
                                        await loadChangelogHistory();
                                        setShowHistory(false);
                                        Toasts.show({
                                            message: t("changelog.toast.cleared"),
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
                            style={{ marginLeft: "8px" }}
                        >
                            {t("changelog.clear")}
                        </Button>
                    </>
                )}
            </div>

            {error && (
                <ErrorCard style={{ padding: "1em", marginBottom: "1em" }}>
                    <p>{error}</p>
                    <Forms.FormText
                        style={{
                            marginTop: "0.5em",
                            color: "var(--text-muted)",
                        }}
                    >
                        {t("changelog.internet")}
                    </Forms.FormText>
                </ErrorCard>
            )}

            <Forms.FormDivider className={Margins.bottom16} />

            {/* Current Changes Section */}
            {hasCurrentChanges ? (
                <div className="pc-changelog-current">
                    <Forms.FormTitle tag="h6" className={Margins.bottom8}>
                        {t("changelog.recent")}
                    </Forms.FormTitle>

                    {/* New Plugins Section */}
                    {newPlugins.length > 0 && (
                        <div className={Margins.bottom16}>
                            <NewPluginsSection
                                newPlugins={newPlugins}
                                onPluginToggle={(pluginName, enabled) => {
                                    // Handle plugin toggle if needed
                                }}
                            />
                        </div>
                    )}

                    {/* Updated Plugins Section */}
                    {updatedPlugins.length > 0 && (
                        <div className={Margins.bottom16}>
                            <Forms.FormTitle
                                tag="h6"
                                className={Margins.bottom8}
                            >
                                ({updatedPlugins.length}) {t("changelog.updatedPlugins")}
                            </Forms.FormTitle>
                            <NewPluginsCompact newPlugins={updatedPlugins} />
                        </div>
                    )}

                    {/* Code Changes */}
                    {changelog.length > 0 && (
                        <div>
                            <Forms.FormTitle
                                tag="h6"
                                className={Margins.bottom8}
                            >
                                {t("changelog.codeChanges", { count: changelog.length, s: changelog.length === 1 ? "" : "s" })}
                            </Forms.FormTitle>
                            <div className="pc-changelog-commits-list">
                                {changelog.map(entry => (
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
            ) : (
                !isLoading &&
                !error && (
                    <Card className="pc-changelog-empty">
                        <Forms.FormText>
                            {t("changelog.noCommit")}
                        </Forms.FormText>
                    </Card>
                )
            )}

            {/* History Section */}
            {showHistory && changelogHistory.length > 0 && (
                <div className="pc-changelog-history">
                    <Forms.FormDivider
                        className={Margins.top16}
                        style={{ marginBottom: "1em" }}
                    />
                    <Forms.FormTitle tag="h5" className={Margins.bottom8}>
                        {t("changelog.updateLogs", {
                            count: changelogHistory.length,
                        })}
                    </Forms.FormTitle>
                    <Forms.FormText className={Margins.bottom16}>
                        {t("changelog.previous")}
                    </Forms.FormText>

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
                                        title: t("changelog.alert.log.title"),
                                        body: t("changelog.alert.log.body"),
                                        confirmText: t("changelog.alert.log.confirm"),
                                        confirmColor: t("changelog.alert.log.confirmColor"),
                                        cancelText: t("changelog.alert.log.cancel"),
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
                                                message: t("changelog.toast.logCleared"),
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
                </div>
            )}
        </>
    );
}

function ChangelogTab() {
    return (
        <SettingsTab title={t("changelog.text")}>
            <ChangelogContent />
        </SettingsTab>
    );
}

export default wrapTab(ChangelogTab, t("changelog.text"));
