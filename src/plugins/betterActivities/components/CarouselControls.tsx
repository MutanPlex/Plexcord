/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2024 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { plugin, t } from "@api/i18n";
import { CarouselControlsProps } from "@plugins/betterActivities/types";
import { cl } from "@plugins/betterActivities/utils";
import { React, Tooltip } from "@webpack/common";

import { Caret } from "./Caret";

export function CarouselControls({ activities, currentActivity, onActivityChange }: CarouselControlsProps) {
    const currentIndex = activities.indexOf(currentActivity);

    return (
        <div
            className={cl("controls")}
            style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
            }}
        >
            <Tooltip text={t(plugin.betterActivities.option.allActivitiesStyle.left)} tooltipClassName={cl("controls-tooltip")}>{({
                onMouseEnter,
                onMouseLeave
            }) => {
                return <span
                    onMouseEnter={onMouseEnter}
                    onMouseLeave={onMouseLeave}
                    onClick={() => {
                        if (currentIndex - 1 >= 0) {
                            onActivityChange(activities[currentIndex - 1]);
                        } else {
                            onActivityChange(activities[activities.length - 1]);
                        }
                    }}
                >
                    <Caret
                        disabled={currentIndex < 1}
                        direction="left" />
                </span>;
            }}</Tooltip>

            <div className={cl("controls-carousel")}>
                {activities.map((activity, index) => (
                    <div
                        key={"dot--" + index}
                        onClick={() => onActivityChange(activity)}
                        className={cl("controls-dot", currentActivity === activity && "controls-selected")} />
                ))}
            </div>

            <Tooltip text={t(plugin.betterActivities.option.allActivitiesStyle.right)} tooltipClassName={cl("controls-tooltip")}>{({
                onMouseEnter,
                onMouseLeave
            }) => {
                return <span
                    onMouseEnter={onMouseEnter}
                    onMouseLeave={onMouseLeave}
                    onClick={() => {
                        if (currentIndex + 1 < activities.length) {
                            onActivityChange(activities[currentIndex + 1]);
                        } else {
                            onActivityChange(activities[0]);
                        }
                    }}
                >
                    <Caret
                        disabled={currentIndex >= activities.length - 1}
                        direction="right" />
                </span>;
            }}</Tooltip>
        </div>
    );
}
