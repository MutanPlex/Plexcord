/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2024 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import ErrorBoundary from "@components/ErrorBoundary";
import { ActivityTooltipProps } from "@plugins/betterActivities/types";
import { ActivityView, cl } from "@plugins/betterActivities/utils";
import { UserStore } from "@webpack/common";

export function ActivityTooltip({ activity, application, user }: Readonly<ActivityTooltipProps>) {
    const currentUser = UserStore.getCurrentUser();
    if (!currentUser) return null;
    return (
        <ErrorBoundary>
            <div className={cl("activity-tooltip")}>
                <ActivityView
                    activity={activity}
                    user={user}
                    application={application}
                    currentUser={currentUser}
                />
            </div>
        </ErrorBoundary>
    );
}
