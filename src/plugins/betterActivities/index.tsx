/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2024 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import "./styles.css";

import { definePluginSettings, migratePluginSettings } from "@api/Settings";
import { classNameFactory } from "@api/Styles";
import ErrorBoundary from "@components/ErrorBoundary";
import { Devs, PcDevs } from "@utils/constants";
import definePlugin, { OptionType } from "@utils/types";
import { findByPropsLazy, findComponentByCodeLazy, findStoreLazy } from "@webpack";
import { PresenceStore, React, Tooltip, useEffect, useMemo, UserStore, useState, useStateFromStores } from "@webpack/common";
import { User } from "discord-types/general";
import { JSX, SVGProps } from "react";

import { Activity, ActivityListIcon, Application, ApplicationIcon, IconCSSProperties } from "./types";

const settings = definePluginSettings({
    memberList: {
        type: OptionType.BOOLEAN,
        description: "Show activity icons in the member list",
        default: true,
        restartNeeded: true,
    },
    iconSize: {
        type: OptionType.SLIDER,
        description: "Size of the activity icons",
        markers: [10, 15, 20],
        default: 15,
        stickToMarkers: false,
    },
    specialFirst: {
        type: OptionType.BOOLEAN,
        description: "Show special activities first (Currently Spotify and Twitch)",
        default: true,
        restartNeeded: false,
    },
    renderGifs: {
        type: OptionType.BOOLEAN,
        description: "Allow rendering GIFs",
        default: true,
        restartNeeded: false,
    },
    showAppDescriptions: {
        type: OptionType.BOOLEAN,
        description: "Show application descriptions in the activity tooltip",
        default: true,
        restartNeeded: false,
    },
    divider: {
        type: OptionType.COMPONENT,
        description: "",
        component: () => (
            <div style={{
                width: "100%",
                height: 1,
                borderTop: "thin solid var(--background-modifier-accent)",
                paddingTop: 5,
                paddingBottom: 5
            }} />
        ),
    },
    userPopout: {
        type: OptionType.BOOLEAN,
        description: "Show all activities in the profile popout/sidebar",
        default: true,
        restartNeeded: true,
    },
    allActivitiesStyle: {
        type: OptionType.SELECT,
        description: "Style for showing all activities",
        options: [
            {
                default: true,
                label: "Carousel",
                value: "carousel",
            },
            {
                label: "List",
                value: "list",
            },
        ]
    }
});

const cl = classNameFactory("pc-bactivities-");

const ApplicationStore: {
    getApplication: (id: string) => Application | null;
} = findStoreLazy("ApplicationStore");

const { fetchApplication }: {
    fetchApplication: (id: string) => Promise<Application | null>;
} = findByPropsLazy("fetchApplication");

const ActivityView = findComponentByCodeLazy<{
    activity: Activity | null;
    user: User;
    application?: Application;
    currentUser: User;
}>('location:"UserProfileActivityCard",');

// if discord one day decides to change their icon this needs to be updated
const DefaultActivityIcon = findComponentByCodeLazy("M6,7 L2,7 L2,6 L6,6 L6,7 Z M8,5 L2,5 L2,4 L8,4 L8,5 Z M8,3 L2,3 L2,2 L8,2 L8,3 Z M8.88888889,0 L1.11111111,0 C0.494444444,0 0,0.494444444 0,1.11111111 L0,8.88888889 C0,9.50253861 0.497461389,10 1.11111111,10 L8.88888889,10 C9.50253861,10 10,9.50253861 10,8.88888889 L10,1.11111111 C10,0.494444444 9.5,0 8.88888889,0 Z");

const fetchedApplications = new Map<string, Application | null>();

const xboxUrl = "https://discord.com/assets/9a15d086141be29d9fcd.png"; // TODO: replace with "renderXboxImage"?

const ActivityTooltip = ({ activity, application, user }: Readonly<{ activity: Activity, application?: Application, user: User; }>) => {
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
};

function getActivityApplication(activity: Activity | null) {
    if (!activity) return undefined;
    const { application_id } = activity;
    if (!application_id) return undefined;
    let application = ApplicationStore.getApplication(application_id);
    if (!application && fetchedApplications.has(application_id)) {
        application = fetchedApplications.get(application_id) ?? null;
    }
    return application ?? undefined;
}

function getApplicationIcons(activities: Activity[], preferSmall = false) {
    const applicationIcons: ApplicationIcon[] = [];
    const applications = activities.filter(activity => activity.application_id || activity.platform);

    for (const activity of applications) {
        const { assets, application_id, platform } = activity;
        if (!application_id && !platform) {
            continue;
        }

        if (assets) {
            const addImage = (image: string, alt: string) => {
                if (image.startsWith("mp:")) {
                    const discordMediaLink = `https://media.discordapp.net/${image.replace(/mp:/, "")}`;
                    if (settings.store.renderGifs || !discordMediaLink.endsWith(".gif")) {
                        applicationIcons.push({
                            image: { src: discordMediaLink, alt },
                            activity
                        });
                    }
                } else {
                    const src = `https://cdn.discordapp.com/app-assets/${application_id}/${image}.png`;
                    applicationIcons.push({
                        image: { src, alt },
                        activity
                    });
                }
            };

            const smallImage = assets.small_image;
            const smallText = assets.small_text ?? "Small Text";
            const largeImage = assets.large_image;
            const largeText = assets.large_text ?? "Large Text";
            if (preferSmall) {
                if (smallImage) {
                    addImage(smallImage, smallText);
                } else if (largeImage) {
                    addImage(largeImage, largeText);
                }
            } else {
                if (largeImage) {
                    addImage(largeImage, largeText);
                } else if (smallImage) {
                    addImage(smallImage, smallText);
                }
            }
        } else if (application_id) {
            let application = ApplicationStore.getApplication(application_id);
            if (!application) {
                if (fetchedApplications.has(application_id)) {
                    application = fetchedApplications.get(application_id) as Application | null;
                } else {
                    fetchedApplications.set(application_id, null);
                    fetchApplication(application_id).then(app => {
                        fetchedApplications.set(application_id, app);
                    }).catch(console.error);
                }
            }

            if (application) {
                if (application.icon) {
                    const src = `https://cdn.discordapp.com/app-icons/${application.id}/${application.icon}.png`;
                    applicationIcons.push({
                        image: { src, alt: application.name },
                        activity,
                        application
                    });
                } else if (platform === "xbox") {
                    applicationIcons.push({
                        image: { src: xboxUrl, alt: "Xbox" },
                        activity,
                        application
                    });
                }
            } else if (platform === "xbox") {
                applicationIcons.push({
                    image: { src: xboxUrl, alt: "Xbox" },
                    activity
                });
            }
        } else if (platform === "xbox") {
            applicationIcons.push({
                image: { src: xboxUrl, alt: "Xbox" },
                activity
            });
        }
    }

    return applicationIcons;
}

migratePluginSettings("BetterActivities", "MemberListActivities");

export default definePlugin({
    name: "BetterActivities",
    description: "Shows activity icons in the member list and allows showing all activities",
    authors: [Devs.D3SOX, Devs.Arjix, Devs.AutumnVN, PcDevs.MutanPlex],
    tags: ["activity"],

    settings,

    patchActivityList: ({ activities, user, hideTooltip }: { activities: Activity[], user: User, hideTooltip: boolean; }): JSX.Element | null => {
        const icons: ActivityListIcon[] = [];

        if (user.bot || hideTooltip) return null;

        const applicationIcons = getApplicationIcons(activities);
        if (applicationIcons.length) {
            const compareImageSource = (a: ApplicationIcon, b: ApplicationIcon) => {
                return a.image.src === b.image.src;
            };
            const uniqueIcons = applicationIcons.filter((element, index, array) => {
                return array.findIndex(el => compareImageSource(el, element)) === index;
            });
            for (const appIcon of uniqueIcons) {
                icons.push({
                    iconElement: <img {...appIcon.image} />,
                    tooltip: <ActivityTooltip activity={appIcon.activity} application={appIcon.application} user={user} />
                });
            }
        }

        const addActivityIcon = (activityName: string, IconComponent: React.ComponentType) => {
            const activityIndex = activities.findIndex(({ name }) => name === activityName);
            if (activityIndex !== -1) {
                const activity = activities[activityIndex];
                const iconObject: ActivityListIcon = {
                    iconElement: <IconComponent />,
                    tooltip: <ActivityTooltip activity={activity} user={user} />
                };

                if (settings.store.specialFirst) {
                    icons.unshift(iconObject);
                } else {
                    icons.splice(activityIndex, 0, iconObject);
                }
            }
        };
        addActivityIcon("Twitch", TwitchIcon);
        addActivityIcon("Spotify", SpotifyIcon);

        if (icons.length) {
            const iconStyle: IconCSSProperties = {
                "--icon-size": `${settings.store.iconSize}px`,
            };

            return <ErrorBoundary noop>
                <div className={cl("row")}>
                    {icons.map(({ iconElement, tooltip }, i) => (
                        <div key={i} className={cl("icon")} style={iconStyle}>
                            {tooltip ? <Tooltip text={tooltip}>
                                {({ onMouseEnter, onMouseLeave }) => (
                                    <div
                                        onMouseEnter={onMouseEnter}
                                        onMouseLeave={onMouseLeave}>
                                        {iconElement}
                                    </div>
                                )}
                            </Tooltip> : iconElement}
                        </div>
                    ))}
                </div>
            </ErrorBoundary>;
        } else {
            // Show default icon when there are no custom icons
            // We need to filter out custom statuses
            const shouldShow = activities.filter(a => a.type !== 4).length !== icons.length;
            if (shouldShow) {
                return <DefaultActivityIcon />;
            }
        }

        return null;
    },

    showAllActivitiesComponent({ activity, user, ...props }: Readonly<{ activity: Activity; user: User; application: Application; type: string; }>) {
        const currentUser = UserStore.getCurrentUser();
        if (!currentUser) return null;

        const [currentActivity, setCurrentActivity] = useState<Activity | null>(
            activity?.type !== 4 ? activity! : null
        );

        const activities = useStateFromStores<Activity[]>(
            [PresenceStore], () => PresenceStore.getActivities(user.id).filter((activity: Activity) => activity.type !== 4)
        ) ?? [];

        useEffect(() => {
            if (!activities.length) {
                setCurrentActivity(null);
                return;
            }

            if (!currentActivity || !activities.includes(currentActivity))
                setCurrentActivity(activities[0]);
        }, [activities]);

        // we use these for other activities, it would be better to somehow get the corresponding activity props
        const generalProps = useMemo(() => Object.keys(props).reduce((acc, key) => {
            // exclude activity specific props to prevent copying them to all activities (e.g. buttons)
            if (key !== "renderActions" && key !== "application") acc[key] = props[key];
            return acc;
        }, {}), [props]);

        if (!activities.length) return null;

        if (settings.store.allActivitiesStyle === "carousel") {
            return (
                <ErrorBoundary noop onError={() => { }}>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                        {activity && currentActivity?.id === activity.id ? (
                            <ActivityView
                                activity={currentActivity}
                                user={user}
                                currentUser={currentUser}
                                {...props}
                            />
                        ) : (
                            <ActivityView
                                activity={currentActivity}
                                user={user}
                                // fetch optional application
                                application={getActivityApplication(currentActivity!)}
                                currentUser={currentUser}
                                {...generalProps}
                            />
                        )}
                        {activities.length > 1 &&
                            <div
                                className={cl("controls")}
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                }}
                            >
                                <Tooltip text="Left" tooltipClassName={cl("controls-tooltip")}>{({
                                    onMouseEnter,
                                    onMouseLeave
                                }) => {
                                    return <span
                                        onMouseEnter={onMouseEnter}
                                        onMouseLeave={onMouseLeave}
                                        onClick={() => {
                                            const index = activities.indexOf(currentActivity!);
                                            if (index - 1 >= 0) {
                                                setCurrentActivity(activities[index - 1]);
                                            } else {
                                                setCurrentActivity(activities[activities.length - 1]);
                                            }
                                        }}
                                    >
                                        <Caret
                                            disabled={activities.indexOf(currentActivity!) < 1}
                                            direction="left" />
                                    </span>;
                                }}</Tooltip>

                                <div className="carousel">
                                    {activities.map((activity, index) => (
                                        <div
                                            key={"dot--" + index}
                                            onClick={() => setCurrentActivity(activity)}
                                            className={`dot ${currentActivity === activity ? "selected" : ""}`} />
                                    ))}
                                </div>

                                <Tooltip text="Right" tooltipClassName={cl("controls-tooltip")}>{({
                                    onMouseEnter,
                                    onMouseLeave
                                }) => {
                                    return <span
                                        onMouseEnter={onMouseEnter}
                                        onMouseLeave={onMouseLeave}
                                        onClick={() => {
                                            const index = activities.indexOf(currentActivity!);
                                            if (index + 1 < activities.length) {
                                                setCurrentActivity(activities[index + 1]);
                                            } else {
                                                setCurrentActivity(activities[0]);
                                            }
                                        }}
                                    >
                                        <Caret
                                            disabled={activities.indexOf(currentActivity!) >= activities.length - 1}
                                            direction="right" />
                                    </span>;
                                }}</Tooltip>
                            </div>
                        }
                    </div>
                </ErrorBoundary>
            );
        } else {
            return (
                <ErrorBoundary noop onError={() => { }}>
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "5px",
                        }}
                    >
                        {activities.map((activity, index) =>
                            index === 0 ? (
                                <ActivityView
                                    key={index}
                                    activity={activity}
                                    user={user}
                                    currentUser={currentUser}
                                    {...props}
                                />) : (
                                <ActivityView
                                    key={index}
                                    activity={activity}
                                    user={user}
                                    application={getActivityApplication(activity)}
                                    currentUser={currentUser}
                                    {...generalProps}
                                />
                            ))}
                    </div>
                </ErrorBoundary>
            );
        }
    },

    patches: [
        {
            // Patch activity icons
            find: "isBlockedOrIgnored(null",
            replacement: {
                match: /(?<=hideTooltip:.{0,4}}=(\i).*?{}\))\]/,
                replace: ",$self.patchActivityList($1)]"
            },
            predicate: () => settings.store.memberList,
        },
        {
            // Show all activities in the user popout/sidebar
            find: '"UserProfilePopoutBody"',
            replacement: {
                match: /(?<=(\i)\.id\)\}\)\),(\i).*?)\(0,.{0,100}\i\.activity\}\)/,
                replace: "$self.showAllActivitiesComponent({ activity: $2, user: $1 })"
            },
            predicate: () => settings.store.userPopout
        },
    ],
});

export function Caret({ disabled, direction }: { disabled: boolean; direction: "left" | "right"; }) {
    return (
        <svg className={`pc-bactivities-caret-${direction.toLowerCase()} ${disabled && "disabled"}`} width="24" height="24" viewBox="0 0 24 24">
            <path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M16.59 8.59004L12 13.17L7.41 8.59004L6 10L12 16L18 10L16.59 8.59004Z" />
        </svg>
    );
}

export function SpotifyIcon(props: SVGProps<SVGSVGElement>) {
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" {...props}><path fill="#1ed760" d="M128 0C57.308 0 0 57.309 0 128c0 70.696 57.309 128 128 128c70.697 0 128-57.304 128-128C256 57.314 198.697.007 127.998.007zm58.699 184.614c-2.293 3.76-7.215 4.952-10.975 2.644c-30.053-18.357-67.885-22.515-112.44-12.335a7.981 7.981 0 0 1-9.552-6.007a7.968 7.968 0 0 1 6-9.553c48.76-11.14 90.583-6.344 124.323 14.276c3.76 2.308 4.952 7.215 2.644 10.975m15.667-34.853c-2.89 4.695-9.034 6.178-13.726 3.289c-34.406-21.148-86.853-27.273-127.548-14.92c-5.278 1.594-10.852-1.38-12.454-6.649c-1.59-5.278 1.386-10.842 6.655-12.446c46.485-14.106 104.275-7.273 143.787 17.007c4.692 2.89 6.175 9.034 3.286 13.72zm1.345-36.293C162.457 88.964 94.394 86.71 55.007 98.666c-6.325 1.918-13.014-1.653-14.93-7.978c-1.917-6.328 1.65-13.012 7.98-14.935C93.27 62.027 168.434 64.68 215.929 92.876c5.702 3.376 7.566 10.724 4.188 16.405c-3.362 5.69-10.73 7.565-16.4 4.187z"></path></svg>);
}

export function TwitchIcon(props: SVGProps<SVGSVGElement>) {
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 268" {...props}><path fill="#5a3e85" d="M17.458 0L0 46.556v186.201h63.983v34.934h34.931l34.898-34.934h52.36L256 162.954V0zm23.259 23.263H232.73v128.029l-40.739 40.741H128L93.113 226.92v-34.886H40.717zm64.008 116.405H128V69.844h-23.275zm63.997 0h23.27V69.844h-23.27z"></path></svg>);
}
