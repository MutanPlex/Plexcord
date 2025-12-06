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

import "./style.css";

import { plugin, t } from "@api/i18n";
import { showNotification } from "@api/Notifications";
import { Button } from "@components/Button";
import { Devs, PcDevs } from "@utils/constants";
import { getTheme, Theme } from "@utils/discord";
import definePlugin from "@utils/types";
import { findByPropsLazy, findComponentByCodeLazy, findStoreLazy } from "@webpack";
import { ChannelStore, FluxDispatcher, GuildChannelStore, NavigationRouter, RestAPI, Tooltip, UserStore } from "@webpack/common";

const QuestIcon = findComponentByCodeLazy("10.47a.76.76");
const ApplicationStreamingStore = findStoreLazy("ApplicationStreamingStore");
const RunningGameStore = findStoreLazy("RunningGameStore");
const QuestsStore = findByPropsLazy("getQuest");

let questIdCheck = 0;

async function openCompleteQuestUI() {
    const quest = [...QuestsStore.quests.values()].find(x => x.id !== "1248385850622869556" && x.userStatus?.enrolledAt && !x.userStatus?.completedAt && new Date(x.config.expiresAt).getTime() > Date.now());

    if (!quest) {
        showNotification({
            title: t(plugin.questCompleter.alert.title),
            body: t(plugin.questCompleter.alert.noQuest),
            onClick() {
                NavigationRouter.transitionTo("/quest-home");
            },
        });
    } else {
        const pid = Math.floor(Math.random() * 30000) + 1000;
        const theme = getTheme() === Theme.Light
            ? "light"
            : "dark";

        const applicationId = quest.config.application.id;
        const applicationName = quest.config.application.name;
        const taskName = ["WATCH_VIDEO", "PLAY_ON_DESKTOP", "STREAM_ON_DESKTOP", "PLAY_ACTIVITY", "WATCH_VIDEO_ON_MOBILE"].find(x => quest.config.taskConfigV2.tasks[x] != null);
        const icon = `https://cdn.discordapp.com/quests/${quest.id}/${theme}/${quest.config.assets.gameTile}`;
        // @ts-ignore
        const secondsNeeded = quest.config.taskConfigV2.tasks[taskName].target;
        // @ts-ignore
        let secondsDone = quest.userStatus?.progress?.[taskName]?.value ?? 0;
        if (taskName === "WATCH_VIDEO" || taskName === "WATCH_VIDEO_ON_MOBILE") {
            const maxFuture = 10, speed = 7, interval = 1;
            const enrolledAt = new Date(quest.userStatus.enrolledAt).getTime();
            const fn = async () => {
                while (true) {
                    const maxAllowed = Math.floor((Date.now() - enrolledAt) / 1000) + maxFuture;
                    const diff = maxAllowed - secondsDone;
                    const timestamp = secondsDone + speed;
                    if (diff >= speed) {
                        await RestAPI.post({ url: `/quests/${quest.id}/video-progress`, body: { timestamp: Math.min(secondsNeeded, timestamp + Math.random()) } });
                        secondsDone = Math.min(secondsNeeded, timestamp);
                    }
                    if (timestamp >= secondsNeeded) {
                        break;
                    }
                    await new Promise(resolve => setTimeout(resolve, interval * 1000));
                }
                showNotification({
                    title: `${applicationName} - ${t(plugin.questCompleter.alert.title)}`,
                    body: t(plugin.questCompleter.alert.completed),
                    icon: icon,
                });
            };
            fn();
            showNotification({
                title: `${applicationName} - ${t(plugin.questCompleter.alert.title)}`,
                body: t(plugin.questCompleter.alert.spoofingVideo, { applicationName }),
                icon: icon,
            });
        } else if (taskName === "PLAY_ON_DESKTOP") {
            RestAPI.get({ url: `/applications/public?application_ids=${applicationId}` }).then(res => {
                const appData = res.body[0];
                const exeName = appData.executables.find(x => x.os === "win32").name.replace(">", "");
                const fakeGame = {
                    cmdLine: `C:\\Program Files\\${appData.name}\\${exeName}`,
                    exeName,
                    exePath: `c:/program files/${appData.name.toLowerCase()}/${exeName}`,
                    hidden: false,
                    isLauncher: false,
                    id: applicationId,
                    name: appData.name,
                    pid: pid,
                    pidPath: [pid],
                    processName: appData.name,
                    start: Date.now(),
                };
                const realGames = RunningGameStore.getRunningGames();
                const fakeGames = [fakeGame];
                const realGetRunningGames = RunningGameStore.getRunningGames;
                const realGetGameForPID = RunningGameStore.getGameForPID;
                RunningGameStore.getRunningGames = () => fakeGames;
                RunningGameStore.getGameForPID = pid => fakeGames.find(x => x.pid === pid);
                FluxDispatcher.dispatch({
                    type: "RUNNING_GAMES_CHANGE", removed: realGames, added: [fakeGame], games: fakeGames
                });

                const fn = data => {
                    const progress = quest.config.configVersion === 1 ? data.userStatus.streamProgressSeconds : Math.floor(data.userStatus.progress.PLAY_ON_DESKTOP.value);
                    showNotification({
                        title: `${applicationName} - ${t(plugin.questCompleter.alert.title)}`,
                        body: t(plugin.questCompleter.alert.currentProgress, { progress, goal: secondsNeeded }),
                        icon: icon,
                    });

                    if (progress >= secondsNeeded) {
                        showNotification({
                            title: `${applicationName} - ${t(plugin.questCompleter.alert.title)}`,
                            body: t(plugin.questCompleter.alert.completed),
                            icon: icon,
                        });

                        RunningGameStore.getRunningGames = realGetRunningGames;
                        RunningGameStore.getGameForPID = realGetGameForPID;
                        FluxDispatcher.dispatch({ type: "RUNNING_GAMES_CHANGE", removed: [fakeGame], added: [], games: [] });
                        FluxDispatcher.unsubscribe("QUESTS_SEND_HEARTBEAT_SUCCESS", fn);
                    }
                };
                FluxDispatcher.subscribe("QUESTS_SEND_HEARTBEAT_SUCCESS", fn);
                showNotification({
                    title: `${applicationName} - ${t(plugin.questCompleter.alert.title)}`,
                    body: t(plugin.questCompleter.alert.spoofingApplication, { applicationName }),
                    icon: icon,
                });
            });
        } else if (taskName === "STREAM_ON_DESKTOP") {
            const stream = ApplicationStreamingStore.getAnyStreamForUser(UserStore.getCurrentUser()?.id);
            if (!stream) {
                showNotification({
                    title: `${t(plugin.questCompleter.alert.notStreaming)} - ${t(plugin.questCompleter.alert.title)}`,
                    body: t(plugin.questCompleter.alert.startStreaming, { applicationName }),
                    icon: icon,
                });
            }
            showNotification({
                title: `${applicationName} - ${t(plugin.questCompleter.alert.title)}`,
                body: t(plugin.questCompleter.alert.onePersonNeeded),
                icon: icon,
            });
            const realFunc = ApplicationStreamingStore.getStreamerActiveStreamMetadata;
            ApplicationStreamingStore.getStreamerActiveStreamMetadata = () => ({
                id: applicationId,
                pid,
                sourceName: null
            });

            const fn = data => {
                const progress = quest.config.configVersion === 1 ? data.userStatus.streamProgressSeconds : Math.floor(data.userStatus.progress.STREAM_ON_DESKTOP.value);
                showNotification({
                    title: `${applicationName} - ${t(plugin.questCompleter.alert.title)}`,
                    body: t(plugin.questCompleter.alert.currentProgress, { progress, goal: secondsNeeded }),
                    icon: icon,
                });

                if (progress >= secondsNeeded) {
                    showNotification({
                        title: `${applicationName} - ${t(plugin.questCompleter.alert.title)}`,
                        body: t(plugin.questCompleter.alert.completed),
                        icon: icon,
                    });

                    ApplicationStreamingStore.getStreamerActiveStreamMetadata = realFunc;
                    FluxDispatcher.unsubscribe("QUESTS_SEND_HEARTBEAT_SUCCESS", fn);
                }
            };
            FluxDispatcher.subscribe("QUESTS_SEND_HEARTBEAT_SUCCESS", fn);
            showNotification({
                title: `${applicationName} - ${t(plugin.questCompleter.alert.title)}`,
                body: t(plugin.questCompleter.alert.streamMore, { seconds: Math.ceil((secondsNeeded - secondsDone) / 60) }),
                icon: icon,
            });
            showNotification({
                title: `${applicationName} - ${t(plugin.questCompleter.alert.title)}`,
                body: t(plugin.questCompleter.alert.onePersonNeeded),
                icon: icon,
            });
        } else if (taskName === "PLAY_ACTIVITY") {
            const channelId = ChannelStore.getSortedPrivateChannels()[0]?.id ?? (Object.values(GuildChannelStore.getAllGuilds()) as unknown as any[]).find(x => x != null && x.VOCAL.length > 0).VOCAL[0].channel.id;
            const streamKey = `call:${channelId}:1`;

            const fn = async () => {

                while (true) {
                    const res = await RestAPI.post({ url: `/quests/${quest.id}/heartbeat`, body: { stream_key: streamKey, terminal: false } });
                    const progress = res.body.progress.PLAY_ACTIVITY.value;
                    showNotification({
                        title: `${applicationName} - ${t(plugin.questCompleter.alert.title)}`,
                        body: t(plugin.questCompleter.alert.currentProgress, { progress, goal: secondsNeeded }),
                        icon: icon,
                    });

                    await new Promise(resolve => setTimeout(resolve, 20 * 1000));

                    if (progress >= secondsNeeded) {
                        await RestAPI.post({ url: `/quests/${quest.id}/heartbeat`, body: { stream_key: streamKey, terminal: true } });
                        break;
                    }
                }

                showNotification({
                    title: `${applicationName} - ${t(plugin.questCompleter.alert.title)}`,
                    body: t(plugin.questCompleter.alert.completed),
                    icon: icon,
                });
            };
            fn();
        }
        return;
    }
}

export default definePlugin({
    name: "QuestCompleter",
    description: () => t(plugin.questCompleter.description),
    authors: [Devs.amia, PcDevs.MutanPlex],

    patches: [
        {
            find: ".platformSelectorPrimary,",
            replacement: {
                match: /(?<=questId:(\i\.id).*?"secondary",)disabled:!0/,
                replace: "onClick:()=>$self.mobileQuestPatch($1)"
            },
        },
        {
            find: '?"BACK_FORWARD_NAVIGATION":',
            replacement: {
                match: /canShowReminder:.+?className:(\i).*?\}\),/,
                replace: "$& $self.renderQuestButton(),"
            }
        }
    ],

    mobileQuestPatch(questId) {
        if (questId === questIdCheck) return;
        questIdCheck = questId;
        Plexcord.Webpack.Common.RestAPI.post({
            url: `/quests/${questId}/enroll`,
            body: {
                location: 11
            }
        });
    },

    renderQuestButton() {
        return (
            <Tooltip text={t(plugin.questCompleter.tooltip)}>
                {tooltipProps => (
                    <Button style={{ backgroundColor: "transparent", border: "none" }}
                        {...tooltipProps}
                        size="small"
                        className={"pc-quest-completer-icon"}
                        onClick={openCompleteQuestUI}
                    >
                        <QuestIcon width={24} height={24} size="small" />
                    </Button>
                )}
            </Tooltip>
        );
    }
});
