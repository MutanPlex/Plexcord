/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2024 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { t } from "@api/i18n";
import { definePluginSettings } from "@api/Settings";
import { OptionType } from "@utils/types";
import { React } from "@webpack/common";

export const settings = definePluginSettings({
    memberList: {
        get label() {
            return t("plugin.betterActivities.option.memberList.label");
        },
        get description() {
            return t("plugin.betterActivities.option.memberList.description");
        },
        type: OptionType.BOOLEAN,
        default: true,
        restartNeeded: true,
    },
    iconSize: {
        get label() {
            return t("plugin.betterActivities.option.iconSize.label");
        },
        get description() {
            return t("plugin.betterActivities.option.iconSize.description");
        },
        type: OptionType.SLIDER,
        markers: [10, 15, 20],
        default: 15,
        stickToMarkers: false,
    },
    specialFirst: {
        get label() {
            return t("plugin.betterActivities.option.specialFirst.label");
        },
        get description() {
            return t("plugin.betterActivities.option.specialFirst.description");
        },
        type: OptionType.BOOLEAN,
        default: true,
        restartNeeded: false,
    },
    renderGifs: {
        get label() {
            return t("plugin.betterActivities.option.renderGifs.label");
        },
        get description() {
            return t("plugin.betterActivities.option.renderGifs.description");
        },
        type: OptionType.BOOLEAN,
        default: true,
        restartNeeded: false,
    },
    removeGameActivityStatus: {
        get label() {
            return t("plugin.betterActivities.option.removeGameActivityStatus.label");
        },
        get description() {
            return t("plugin.betterActivities.option.removeGameActivityStatus.description");
        },
        type: OptionType.BOOLEAN,
        default: false,
        restartNeeded: true,
    },
    divider: {
        type: OptionType.COMPONENT,
        description: "",
        component: () => (
            <div style={{
                width: "100%",
                height: 1,
                borderTop: "thin solid var(--input-border)",
                paddingTop: 5,
                paddingBottom: 5
            }} />
        ),
    },
    userPopout: {
        get label() {
            return t("plugin.betterActivities.option.userPopout.label");
        },
        get description() {
            return t("plugin.betterActivities.option.userPopout.description");
        },
        type: OptionType.BOOLEAN,
        default: true,
        restartNeeded: true,
    },
    hideTooltip: {
        get label() {
            return t("plugin.betterActivities.option.hideTooltip.label");
        },
        get description() {
            return t("plugin.betterActivities.option.hideTooltip.description");
        },
        type: OptionType.BOOLEAN,
        default: true,
    },
    allActivitiesStyle: {
        get label() {
            return t("plugin.betterActivities.option.allActivitiesStyle.label");
        },
        get description() {
            return t("plugin.betterActivities.option.allActivitiesStyle.description");
        },
        type: OptionType.SELECT,
        get options() {
            return [
                {
                    default: true,
                    label: t("plugin.betterActivities.option.allActivitiesStyle.carousel"),
                    value: "carousel",
                },
                {
                    label: t("plugin.betterActivities.option.allActivitiesStyle.list"),
                    value: "list",
                },
            ];
        }
    }
});
