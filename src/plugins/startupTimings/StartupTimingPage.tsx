/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2022 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
*/

import { plugin, t } from "@api/i18n";
import ErrorBoundary from "@components/ErrorBoundary";
import { Flex } from "@components/Flex";
import { Heading } from "@components/Heading";
import { findByPropsLazy } from "@webpack";
import { React } from "@webpack/common";

interface AppStartPerformance {
    prefix: string;
    logs: Log[];
    logGroups: LogGroup[];
    endTime_: number;
    isTracing_: boolean;
}

interface LogGroup {
    index: number;
    timestamp: number;
    logs: Log[];
    nativeLogs: any[];
    serverTrace: string;
}

interface Log {
    emoji: string;
    prefix: string;
    log: string;
    timestamp?: number;
    delta?: number;
}

const AppStartPerformance = findByPropsLazy("markWithDelta", "markAndLog", "markAt") as AppStartPerformance;

interface TimerItemProps extends Log {
    instance: {
        sinceStart: number;
        sinceLast: number;
    };
}

function TimerItem({ emoji, prefix, log, delta, instance }: TimerItemProps) {
    return (
        <React.Fragment>
            <span>{instance.sinceStart.toFixed(3)}s</span>
            <span>{instance.sinceLast.toFixed(3)}s</span>
            <span>{delta?.toFixed(0) ?? ""}</span>
            <span><pre>{emoji} {prefix ?? " "}{log}</pre></span>
        </React.Fragment>
    );
}

interface TimingSectionProps {
    title: string;
    logs: Log[];
    traceEnd?: number;
}

function TimingSection({ title, logs, traceEnd }: TimingSectionProps) {
    const startTime = logs.find(l => l.timestamp)?.timestamp ?? 0;

    let lastTimestamp = startTime;
    const timings = logs.map(log => {
        // Get last log entry with valid timestamp
        const timestamp = log.timestamp ?? lastTimestamp;

        const sinceStart = (timestamp - startTime) / 1000;
        const sinceLast = (timestamp - lastTimestamp) / 1000;

        lastTimestamp = timestamp;

        return { sinceStart, sinceLast };
    });

    return (
        <section>
            <Heading>{title}</Heading>
            <code>
                {traceEnd && (
                    <div style={{ color: "var(--text-strong)", marginBottom: 5, userSelect: "text" }}>
                        {t(plugin.startupTimings.modal.ended)} {(new Date(traceEnd)).toTimeString()}
                    </div>
                )}
                <div style={{ color: "var(--text-strong)", display: "grid", gridTemplateColumns: "repeat(3, auto) 1fr", gap: "2px 10px", userSelect: "text" }}>
                    <span>{t(plugin.startupTimings.modal.start)}</span>
                    <span>{t(plugin.startupTimings.modal.interval)}</span>
                    <span>{t(plugin.startupTimings.modal.delta)}</span>
                    <span style={{ marginBottom: 5 }}>{t(plugin.startupTimings.modal.event)}</span>
                    {AppStartPerformance.logs.map((log, i) => (
                        <TimerItem key={i} {...log} instance={timings[i]} />
                    ))}
                </div>
            </code>
        </section>
    );
}

interface ServerTraceProps {
    trace: string;
}

function ServerTrace({ trace }: ServerTraceProps) {
    const lines = trace.split("\n");

    return (
        <section>
            <Heading>{t(plugin.startupTimings.modal.serverTrace)}</Heading>
            <code>
                <Flex flexDirection="column" style={{ color: "var(--text-strong)", gap: 5, userSelect: "text" }}>
                    {lines.map((line, idx) => (
                        <span key={idx}>{line}</span>
                    ))}
                </Flex>
            </code>
        </section>
    );
}

function StartupTimingPage() {
    if (!AppStartPerformance?.logs) return <div>{t(plugin.startupTimings.modal.loading)}</div>;

    const serverTrace = AppStartPerformance.logGroups.find(g => g.serverTrace)?.serverTrace;

    return (
        <React.Fragment>
            <TimingSection
                title={t(plugin.startupTimings.modal.title)}
                logs={AppStartPerformance.logs}
                traceEnd={AppStartPerformance.endTime_}
            />
            {/* Lazy Divider */}
            <div style={{ marginTop: 5 }}>&nbsp;</div>
            {serverTrace && <ServerTrace trace={serverTrace} />}
        </React.Fragment>
    );
}

export default ErrorBoundary.wrap(StartupTimingPage);
