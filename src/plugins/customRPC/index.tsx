/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2023 Vendicated and contributors
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
import { definePluginSettings } from "@api/Settings";
import { getUserSettingLazy } from "@api/UserSettings";
import { BaseText } from "@components/BaseText";
import { Button } from "@components/Button";
import { Card } from "@components/Card";
import { Divider } from "@components/Divider";
import { Flex } from "@components/Flex";
import { Link } from "@components/Link";
import { Paragraph } from "@components/Paragraph";
import { Activity } from "@plexcord/discord-types";
import { ActivityType } from "@plexcord/discord-types/enums";
import { Devs } from "@utils/constants";
import { isTruthy } from "@utils/guards";
import { useAwaiter } from "@utils/react";
import definePlugin, { OptionType } from "@utils/types";
import { findByCodeLazy, findComponentByCodeLazy } from "@webpack";
import { ApplicationAssetUtils, FluxDispatcher, Menu, React, UserStore } from "@webpack/common";

import { RPCSettings } from "./RPCSettings";

const useProfileThemeStyle = findByCodeLazy("profileThemeStyle:", "--profile-gradient-primary-color");
const ActivityView = findComponentByCodeLazy(".party?(0", "USER_PROFILE_ACTIVITY");

const ShowCurrentGame = getUserSettingLazy<boolean>("status", "showCurrentGame")!;

async function getApplicationAsset(key: string): Promise<string> {
    return (await ApplicationAssetUtils.fetchAssetIds(settings.store.appID!, [key]))[0];
}

export const enum TimestampMode {
    NONE,
    NOW,
    TIME,
    CUSTOM,
}

export interface RpcConfig {
    appID?: string;
    appName?: string;
    details?: string;
    detailsURL?: string;
    state?: string;
    stateURL?: string;
    type?: ActivityType;
    streamLink?: string;
    timestampMode?: TimestampMode;
    startTime?: number;
    endTime?: number;
    imageBig?: string;
    imageBigTooltip?: string;
    imageBigURL?: string;
    imageSmall?: string;
    imageSmallTooltip?: string;
    imageSmallURL?: string;
    buttonOneText?: string;
    buttonOneURL?: string;
    buttonTwoText?: string;
    buttonTwoURL?: string;
    partySize?: number;
    partyMaxSize?: number;
}

export const settings = definePluginSettings({
    enablePresence: {
        label: () => t(plugin.customRPC.option.enablePresence.label),
        type: OptionType.BOOLEAN,
        description: () => t(plugin.customRPC.option.enablePresence.description),
        default: true,
        onChange: v => setRpc(!v)
    },
    config: {
        type: OptionType.COMPONENT,
        component: RPCSettings
    },
}).withPrivateSettings<RpcConfig>();

async function createActivity(): Promise<Activity | undefined> {
    const {
        appID,
        appName,
        details,
        detailsURL,
        state,
        stateURL,
        type,
        streamLink,
        startTime,
        endTime,
        imageBig,
        imageBigTooltip,
        imageBigURL,
        imageSmall,
        imageSmallTooltip,
        imageSmallURL,
        buttonOneText,
        buttonOneURL,
        buttonTwoText,
        buttonTwoURL,
        partyMaxSize,
        partySize,
        timestampMode
    } = settings.store;

    if (!appName) return;

    const activity: Activity = {
        application_id: appID || "0",
        name: appName,
        state,
        details,
        type: type ?? ActivityType.PLAYING,
        flags: 1 << 0,
    };

    if (type === ActivityType.STREAMING) activity.url = streamLink;

    switch (timestampMode) {
        case TimestampMode.NOW:
            activity.timestamps = {
                start: Date.now()
            };
            break;
        case TimestampMode.TIME:
            activity.timestamps = {
                start: Date.now() - (new Date().getHours() * 3600 + new Date().getMinutes() * 60 + new Date().getSeconds()) * 1000
            };
            break;
        case TimestampMode.CUSTOM:
            if (startTime || endTime) {
                activity.timestamps = {};
                if (startTime && endTime && endTime > startTime) {
                    const anchor = getLoopAnchor();
                    activity.timestamps.start = anchor;
                    activity.timestamps.end = anchor + (endTime - startTime);
                } else {
                    if (startTime) activity.timestamps.start = startTime;
                    if (endTime) activity.timestamps.end = endTime;
                }
            }
            break;
        case TimestampMode.NONE:
        default:
            break;
    }

    if (detailsURL) {
        activity.details_url = detailsURL;
    }

    if (stateURL) {
        activity.state_url = stateURL;
    }

    if (buttonOneText) {
        activity.buttons = [
            buttonOneText,
            buttonTwoText
        ].filter(isTruthy);

        activity.metadata = {
            button_urls: [
                buttonOneURL,
                buttonTwoURL
            ].filter(isTruthy)
        };
    }

    if (imageBig) {
        activity.assets = {
            large_image: await getApplicationAsset(imageBig),
            large_text: imageBigTooltip || undefined,
            large_url: imageBigURL || undefined
        };
    }

    if (imageSmall) {
        activity.assets = {
            ...activity.assets,
            small_image: await getApplicationAsset(imageSmall),
            small_text: imageSmallTooltip || undefined,
            small_url: imageSmallURL || undefined
        };
    }

    if (partyMaxSize && partySize) {
        activity.party = {
            size: [partySize, partyMaxSize]
        };
    }

    for (const k in activity) {
        if (k === "type") continue;
        const v = activity[k];
        if (!v || v.length === 0)
            delete activity[k];
    }

    return activity;
}

export async function setRpc(disable?: boolean) {
    const shouldDisable = disable ?? !settings.store.enablePresence;
    const activity: Activity | undefined = await createActivity();

    FluxDispatcher.dispatch({
        type: "LOCAL_ACTIVITY_UPDATE",
        activity: !shouldDisable ? activity : null,
        socketId: "CustomRPC",
    });
}

let loopInterval: ReturnType<typeof setInterval> | undefined;
let loopAnchor = 0;

function getLoopAnchor() {
    return loopAnchor;
}

function startTimestampLoop() {
    const { timestampMode, startTime, endTime } = settings.store;
    if (timestampMode !== TimestampMode.CUSTOM || !startTime || !endTime) return;
    const duration = endTime - startTime;
    if (duration <= 0) return;

    stopTimestampLoop();
    loopAnchor = Date.now();

    loopInterval = setInterval(() => {

        if (Date.now() >= loopAnchor + duration) {
            loopAnchor = Date.now();
            setRpc();
        }
    }, 1000);
}

function stopTimestampLoop() {
    if (loopInterval !== undefined) {
        clearInterval(loopInterval);
        loopInterval = undefined;
    }
    loopAnchor = 0;
}

export default definePlugin({
    name: "CustomRPC",
    description: () => t(plugin.customRPC.description),
    tags: ["activity", "customisation"],
    authors: [Devs.captain, Devs.AutumnVN, Devs.nin0, Devs.c0nnorgg],
    dependencies: ["UserSettingsAPI"],
    // This plugin's patch is not important for functionality, so don't require a restart
    requiresRestart: false,
    settings,

    toolboxActions() {
        const { enablePresence } = settings.use(["enablePresence"]);

        return (
            <Menu.MenuCheckboxItem
                id="custom-rpc-toggle-toolbox"
                label={t(plugin.customRPC.text.showCustomRpc)}
                checked={enablePresence}
                action={() => {
                    settings.store.enablePresence = !enablePresence;
                    setRpc();
                }}
            />
        );
    },

    start() {
        startTimestampLoop();
        setRpc();
    },
    stop() {
        setRpc(true);
        stopTimestampLoop();
    },

    // Discord hides buttons on your own Rich Presence for some reason. This patch disables that behaviour
    patches: [
        {
            find: ".USER_PROFILE_ACTIVITY_BUTTONS),",
            replacement: {
                match: /.getId\(\)===\i.id/,
                replace: "$& && false"
            }
        }
    ],

    settingsAboutComponent: () => {
        const { enablePresence } = settings.use(["enablePresence"]);
        const [activity] = useAwaiter(createActivity, { fallbackValue: undefined, deps: Object.values(settings.store) });
        const gameActivityEnabled = ShowCurrentGame.useSetting();
        const { profileThemeStyle } = useProfileThemeStyle({});

        return (
            <Flex flexDirection="column" gap=".5em">
                {!enablePresence && (
                    <Card variant="warning">
                        <Flex flexDirection="column" gap=".5em" alignItems="flex-start">
                            <BaseText size="md" weight="bold">{t(plugin.customRPC.text.customRpcDisabled)}</BaseText>
                            <Paragraph>{t(plugin.customRPC.text.theEnablePresenceSetting)}</Paragraph>
                        </Flex>
                    </Card>
                )}
                {!gameActivityEnabled && (
                    <Card variant="danger">
                        <Flex flexDirection="column" gap=".5em" alignItems="flex-start">
                            <BaseText size="md" weight="bold">{t(plugin.customRPC.text.activitySharingDisabled)}</BaseText>
                            <Paragraph>{t(plugin.customRPC.error.sharing)}</Paragraph>

                            <Button
                                variant="overlayPrimary"
                                onClick={() => ShowCurrentGame.updateSetting(true)}
                            >
                                {t(plugin.customRPC.text.enableActivitySharing)}
                            </Button>
                        </Flex>
                    </Card>
                )}

                <Flex flexDirection="column" gap=".5em">
                    <Paragraph>
                        {t(plugin.customRPC.goTo, {
                            portal: <Link href="https://discord.com/developers/applications">{t(plugin.customRPC.text.discordDeveloperPortal)}</Link>
                        })}
                    </Paragraph>
                    <Paragraph>
                        {t(plugin.customRPC.upload)}
                    </Paragraph>
                    <Paragraph>
                        {t(plugin.customRPC.image, {
                            imgur: <Link href="https://imgur.com">{t(plugin.customRPC.text.imgur)}</Link>
                        })}
                    </Paragraph>
                    <Paragraph>
                        {t(plugin.customRPC.button)}
                    </Paragraph>
                    <Paragraph>
                        {t(plugin.customRPC.font)}
                    </Paragraph>
                </Flex>

                <Divider />

                <div style={{ width: "284px", ...profileThemeStyle, borderRadius: 8, background: "var(--background-mod-muted)" }}>
                    {activity && <ActivityView
                        activity={activity}
                        user={UserStore.getCurrentUser()}
                        currentUser={UserStore.getCurrentUser()}
                    />}
                </div>
            </Flex>
        );
    }
});
