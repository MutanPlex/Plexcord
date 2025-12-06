/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2023 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { plugin, t } from "@api/i18n";
import { definePluginSettings, Settings } from "@api/Settings";
import { getUserSettingLazy } from "@api/UserSettings";
import { Button } from "@components/Button";
import ErrorBoundary from "@components/ErrorBoundary";
import { Flex } from "@components/Flex";
import { Heading } from "@components/Heading";
import { Paragraph } from "@components/Paragraph";
import { Devs } from "@utils/constants";
import { Margins } from "@utils/margins";
import definePlugin, { OptionType } from "@utils/types";
import { findStoreLazy } from "@webpack";
import { showToast, TextInput, Toasts, Tooltip, useEffect, useState } from "@webpack/common";

const enum ActivitiesTypes {
    Game,
    Embedded
}

interface IgnoredActivity {
    id: string;
    name: string;
    type: ActivitiesTypes;
}

const enum FilterMode {
    Whitelist,
    Blacklist
}

const RunningGameStore = findStoreLazy("RunningGameStore");

const ShowCurrentGame = getUserSettingLazy("status", "showCurrentGame")!;

function ToggleIcon(activity: IgnoredActivity, tooltipText: string, path: string, fill: string) {
    return (
        <Tooltip text={tooltipText}>
            {tooltipProps => (
                <button
                    {...tooltipProps}
                    onClick={e => handleActivityToggle(e, activity)}
                    style={{ all: "unset", cursor: "pointer", display: "flex", justifyContent: "center", alignItems: "center" }}
                >
                    <svg
                        width="24"
                        height="24"
                        viewBox="0 -960 960 960"
                    >
                        <path fill={fill} d={path} />
                    </svg>
                </button>
            )}
        </Tooltip>
    );
}

const ToggleIconOn = (activity: IgnoredActivity, fill: string) => ToggleIcon(activity, "Disable activity", "M480-320q75 0 127.5-52.5T660-500q0-75-52.5-127.5T480-680q-75 0-127.5 52.5T300-500q0 75 52.5 127.5T480-320Zm0-72q-45 0-76.5-31.5T372-500q0-45 31.5-76.5T480-608q45 0 76.5 31.5T588-500q0 45-31.5 76.5T480-392Zm0 192q-146 0-266-81.5T40-500q54-137 174-218.5T480-800q146 0 266 81.5T920-500q-54 137-174 218.5T480-200Zm0-300Zm0 220q113 0 207.5-59.5T832-500q-50-101-144.5-160.5T480-720q-113 0-207.5 59.5T128-500q50 101 144.5 160.5T480-280Z", fill);
const ToggleIconOff = (activity: IgnoredActivity, fill: string) => ToggleIcon(activity, "Enable activity", "m644-428-58-58q9-47-27-88t-93-32l-58-58q17-8 34.5-12t37.5-4q75 0 127.5 52.5T660-500q0 20-4 37.5T644-428Zm128 126-58-56q38-29 67.5-63.5T832-500q-50-101-143.5-160.5T480-720q-29 0-57 4t-55 12l-62-62q41-17 84-25.5t90-8.5q151 0 269 83.5T920-500q-23 59-60.5 109.5T772-302Zm20 246L624-222q-35 11-70.5 16.5T480-200q-151 0-269-83.5T40-500q21-53 53-98.5t73-81.5L56-792l56-56 736 736-56 56ZM222-624q-29 26-53 57t-41 67q50 101 143.5 160.5T480-280q20 0 39-2.5t39-5.5l-36-38q-11 3-21 4.5t-21 1.5q-75 0-127.5-52.5T300-500q0-11 1.5-21t4.5-21l-84-82Zm319 93Zm-151 75Z", fill);

function ToggleActivityComponent(activity: IgnoredActivity, isPlaying = false) {
    const s = settings.use(["ignoredActivities"]);
    const { ignoredActivities } = s;

    if (ignoredActivities.some(act => act.id === activity.id)) return ToggleIconOff(activity, "var(--status-danger)");
    return ToggleIconOn(activity, isPlaying ? "var(--green-300)" : "var(--interactive-normal)");
}

function handleActivityToggle(e: React.MouseEvent<HTMLButtonElement, MouseEvent>, activity: IgnoredActivity) {
    e.stopPropagation();

    const ignoredActivityIndex = settings.store.ignoredActivities.findIndex(act => act.id === activity.id);
    if (ignoredActivityIndex === -1) settings.store.ignoredActivities.push(activity);
    else settings.store.ignoredActivities.splice(ignoredActivityIndex, 1);
}

function recalculateActivities() {
    ShowCurrentGame.updateSetting(old => old);
}

function ImportCustomRPCComponent() {
    return (
        <Flex flexDirection="column">
            <Paragraph>{t(plugin.ignoreActivities.modal.import.title)}</Paragraph>
            <div>
                <Button
                    onClick={() => {
                        const id = Settings.plugins.CustomRPC?.appID as string | undefined;
                        if (!id) {
                            return showToast(t(plugin.ignoreActivities.toast.id.notSet), Toasts.Type.FAILURE);
                        }

                        const isAlreadyAdded = idsListPushID?.(id);
                        if (isAlreadyAdded) {
                            showToast(t(plugin.ignoreActivities.toast.id.alreadyAdded), Toasts.Type.FAILURE);
                        }
                    }}
                >
                    {t(plugin.ignoreActivities.button.import)}
                </Button>
            </div>
        </Flex>
    );
}

let idsListPushID: ((id: string) => boolean) | null = null;

function IdsListComponent(props: { setValue: (value: string) => void; }) {
    const [idsList, setIdsList] = useState<string>(settings.store.idsList ?? "");

    idsListPushID = (id: string) => {
        const currentIds = new Set(idsList.split(",").map(id => id.trim()).filter(Boolean));

        const isAlreadyAdded = currentIds.has(id) || (currentIds.add(id), false);

        const ids = Array.from(currentIds).join(", ");
        setIdsList(ids);
        props.setValue(ids);

        return isAlreadyAdded;
    };

    useEffect(() => () => {
        idsListPushID = null;
    }, []);

    function handleChange(newValue: string) {
        setIdsList(newValue);
        props.setValue(newValue);
    }

    return (
        <section>
            <Heading>{t(plugin.ignoreActivities.modal.filter.title)}</Heading>
            <Paragraph className={Margins.bottom8}>{t(plugin.ignoreActivities.modal.filter.description)}</Paragraph>
            <TextInput
                type="text"
                value={idsList}
                onChange={handleChange}
                placeholder="235834946571337729, 343383572805058560"
            />
        </section>
    );
}

const settings = definePluginSettings({
    importCustomRPC: {
        label: () => t(plugin.ignoreActivities.option.importCustomRPC.label),
        type: OptionType.COMPONENT,
        component: ImportCustomRPCComponent
    },
    listMode: {
        label: () => t(plugin.ignoreActivities.option.listMode.label),
        description: () => t(plugin.ignoreActivities.option.listMode.description),
        type: OptionType.SELECT,
        options: [
            {
                label: () => t(plugin.ignoreActivities.option.listMode.whitelist),
                value: FilterMode.Whitelist,
                default: true
            },
            {
                label: () => t(plugin.ignoreActivities.option.listMode.blacklist),
                value: FilterMode.Blacklist,
            }
        ],
        onChange: recalculateActivities
    },
    idsList: {
        label: () => t(plugin.ignoreActivities.modal.filter.title),
        type: OptionType.COMPONENT,
        default: "",
        onChange(newValue: string) {
            const ids = new Set(newValue.split(",").map(id => id.trim()).filter(Boolean));
            settings.store.idsList = Array.from(ids).join(", ");
            recalculateActivities();
        },
        component: props => <IdsListComponent setValue={props.setValue} />
    },
    ignorePlaying: {
        label: () => t(plugin.ignoreActivities.option.ignorePlaying.label),
        description: () => t(plugin.ignoreActivities.option.ignorePlaying.description),
        type: OptionType.BOOLEAN,
        default: false,
        onChange: recalculateActivities
    },
    ignoreStreaming: {
        label: () => t(plugin.ignoreActivities.option.ignoreStreaming.label),
        description: () => t(plugin.ignoreActivities.option.ignoreStreaming.description),
        type: OptionType.BOOLEAN,
        default: false,
        onChange: recalculateActivities
    },
    ignoreListening: {
        label: () => t(plugin.ignoreActivities.option.ignoreListening.label),
        description: () => t(plugin.ignoreActivities.option.ignoreListening.description),
        type: OptionType.BOOLEAN,
        default: false,
        onChange: recalculateActivities
    },
    ignoreWatching: {
        label: () => t(plugin.ignoreActivities.option.ignoreWatching.label),
        description: () => t(plugin.ignoreActivities.option.ignoreWatching.description),
        type: OptionType.BOOLEAN,
        default: false,
        onChange: recalculateActivities
    },
    ignoreCompeting: {
        label: () => t(plugin.ignoreActivities.option.ignoreCompeting.label),
        description: () => t(plugin.ignoreActivities.option.ignoreCompeting.description),
        type: OptionType.BOOLEAN,
        default: false,
        onChange: recalculateActivities
    },
    ignoredActivities: {
        label: () => t(plugin.ignoreActivities.option.ignoredActivities.label),
        type: OptionType.CUSTOM,
        default: [] as IgnoredActivity[],
        onChange: recalculateActivities,
        description: "",
    }
});

function isActivityTypeIgnored(type: number, id?: string) {
    if (id && settings.store.idsList.includes(id)) {
        return settings.store.listMode === FilterMode.Blacklist;
    }

    switch (type) {
        case 0: return settings.store.ignorePlaying;
        case 1: return settings.store.ignoreStreaming;
        case 2: return settings.store.ignoreListening;
        case 3: return settings.store.ignoreWatching;
        case 5: return settings.store.ignoreCompeting;
    }

    return false;
}

export default definePlugin({
    name: "IgnoreActivities",
    authors: [Devs.Nuckyz, Devs.Kylie],
    description: () => t(plugin.ignoreActivities.description),
    dependencies: ["UserSettingsAPI"],
    settings,

    patches: [
        {
            find: '"LocalActivityStore"',
            replacement: [
                {
                    match: /\.LISTENING.+?(?=!?\i\(\)\(\i,\i\))(?<=(\i)\.push.+?)/,
                    replace: (m, activities) => `${m}${activities}=${activities}.filter($self.isActivityNotIgnored);`
                }
            ]
        },
        {
            find: '"ActivityTrackingStore"',
            replacement: {
                match: /getVisibleRunningGames\(\).+?;(?=for)(?<=(\i)=\i\.\i\.getVisibleRunningGames.+?)/,
                replace: (m, runningGames) => `${m}${runningGames}=${runningGames}.filter(({id,name})=>$self.isActivityNotIgnored({type:0,application_id:id,name}));`
            }
        },

        // FIXME(Bundler minifier change related): Remove the non used compability once enough time has passed
        {
            find: "#{intl::SETTINGS_GAMES_TOGGLE_OVERLAY}",
            replacement: {
                match: /#{intl::SETTINGS_GAMES_TOGGLE_OVERLAY}.+?}\(\),(?<=nowPlaying:(\i)=!1,.+?overlay:\i,[^}]+?\}=(\i).+?)/,
                replace: (m, nowPlaying, props) => `${m}$self.renderToggleGameActivityButton(${props},${nowPlaying}),`,
                noWarn: true,
            }
        },
        {
            find: "#{intl::SETTINGS_GAMES_TOGGLE_OVERLAY}",
            replacement: {
                match: /\.gameNameLastPlayed.+?,\i\(\),(?<=nowPlaying:(\i)=!1,.+?overlay:\i,[^}]+?\}=(\i).+?)(?=\1&&)/,
                replace: (m, nowPlaying, props) => `${m}$self.renderToggleGameActivityButton(${props},${nowPlaying}),`,
            }
        },
        {
            find: ".promotedLabelWrapperNonBanner,children",
            replacement: {
                match: /\.appDetailsHeaderContainer.+?children:\i.*?}\),(?<=application:(\i).+?)/,
                replace: (m, props) => `${m}$self.renderToggleActivityButton(${props}),`
            }
        }
    ],

    async start() {
        if (settings.store.ignoredActivities.length !== 0) {
            const gamesSeen = RunningGameStore.getGamesSeen() as { id?: string; exePath: string; }[];

            for (const [index, ignoredActivity] of settings.store.ignoredActivities.entries()) {
                if (ignoredActivity.type !== ActivitiesTypes.Game) continue;

                if (!gamesSeen.some(game => game.id === ignoredActivity.id || game.exePath === ignoredActivity.id)) {
                    settings.store.ignoredActivities.splice(index, 1);
                }
            }
        }
    },

    isActivityNotIgnored(props: { type: number; application_id?: string; name?: string; }) {
        if (isActivityTypeIgnored(props.type, props.application_id)) return false;

        if (props.application_id != null) {
            return !settings.store.ignoredActivities.some(activity => activity.id === props.application_id) || (settings.store.listMode === FilterMode.Whitelist && settings.store.idsList.includes(props.application_id));
        } else {
            const exePath = RunningGameStore.getRunningGames().find(game => game.name === props.name)?.exePath;
            if (exePath) {
                return !settings.store.ignoredActivities.some(activity => activity.id === exePath);
            }
        }

        return true;
    },

    renderToggleGameActivityButton(props: { id?: string; name: string, exePath: string; }, nowPlaying: boolean) {
        return (
            <ErrorBoundary noop>
                <div style={{ marginLeft: 12, zIndex: 0 }}>
                    {ToggleActivityComponent({ id: props.id ?? props.exePath, name: props.name, type: ActivitiesTypes.Game }, nowPlaying)}
                </div>
            </ErrorBoundary>
        );
    },

    renderToggleActivityButton(props: { id: string; name: string; }) {
        return (
            <ErrorBoundary noop>
                {ToggleActivityComponent({ id: props.id, name: props.name, type: ActivitiesTypes.Embedded })}
            </ErrorBoundary>
        );
    }
});
