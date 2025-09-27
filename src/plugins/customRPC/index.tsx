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

import { t, tJsx } from "@api/i18n";
import { definePluginSettings, Settings } from "@api/Settings";
import { getUserSettingLazy } from "@api/UserSettings";
import { ErrorCard } from "@components/ErrorCard";
import { Flex } from "@components/Flex";
import { Link } from "@components/Link";
import { Activity } from "@plexcord/discord-types";
import { ActivityType } from "@plexcord/discord-types/enums";
import { Devs } from "@utils/constants";
import { isTruthy } from "@utils/guards";
import { Margins } from "@utils/margins";
import { classes } from "@utils/misc";
import { useAwaiter } from "@utils/react";
import definePlugin, { OptionType } from "@utils/types";
import { findByCodeLazy, findComponentByCodeLazy } from "@webpack";
import { ApplicationAssetUtils, Button, FluxDispatcher, Forms, React, UserStore } from "@webpack/common";

const useProfileThemeStyle = findByCodeLazy("profileThemeStyle:", "--profile-gradient-primary-color");
const ActivityView = findComponentByCodeLazy(".party?(0", ".card");

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

const settings = definePluginSettings({
    appID: {
        get label() {
            return t("plugin.customRPC.option.appId.label");
        },
        get description() {
            return t("plugin.customRPC.option.appId.description");
        },
        type: OptionType.STRING,
        onChange: onChange,
        isValid: (value: string) => {
            if (!value) return t("plugin.customRPC.error.appIdRequired");
            if (value && !/^\d+$/.test(value)) return t("plugin.customRPC.error.appIdInvalid");
            return true;
        }
    },
    appName: {
        get label() {
            return t("plugin.customRPC.option.appName.label");
        },
        get description() {
            return t("plugin.customRPC.option.appName.description");
        },
        type: OptionType.STRING,
        onChange: onChange,
        isValid: (value: string) => {
            if (!value) return t("plugin.customRPC.error.appNameRequired");
            if (value.length > 128) return t("plugin.customRPC.error.appNameInvalid");
            return true;
        }
    },
    details: {
        get label() {
            return t("plugin.customRPC.option.details.label");
        },
        get description() {
            return t("plugin.customRPC.option.details.description");
        },
        type: OptionType.STRING,
        onChange: onChange,
        isValid: (value: string) => {
            if (value && value.length > 128) return t("plugin.customRPC.error.detailsInvalid");
            return true;
        }
    },
    state: {
        get label() {
            return t("plugin.customRPC.option.state.label");
        },
        get description() {
            return t("plugin.customRPC.option.state.description");
        },
        type: OptionType.STRING,
        onChange: onChange,
        isValid: (value: string) => {
            if (value && value.length > 128) return t("plugin.customRPC.error.stateInvalid");
            return true;
        }
    },
    type: {
        get label() {
            return t("plugin.customRPC.option.type.label");
        },
        get description() {
            return t("plugin.customRPC.option.type.description");
        },
        type: OptionType.SELECT,
        onChange: onChange,
        get options() {
            return [
                {
                    label: t("plugin.customRPC.option.type.playing"),
                    value: ActivityType.PLAYING,
                    default: true
                },
                {
                    label: t("plugin.customRPC.option.type.streaming"),
                    value: ActivityType.STREAMING
                },
                {
                    label: t("plugin.customRPC.option.type.listening"),
                    value: ActivityType.LISTENING
                },
                {
                    label: t("plugin.customRPC.option.type.watching"),
                    value: ActivityType.WATCHING
                },
                {
                    label: t("plugin.customRPC.option.type.competing"),
                    value: ActivityType.COMPETING
                }
            ];
        }
    },
    streamLink: {
        get label() {
            return t("plugin.customRPC.option.streamLink.label");
        },
        get description() {
            return t("plugin.customRPC.option.streamLink.description");
        },
        type: OptionType.STRING,
        onChange: onChange,
        disabled: isStreamLinkDisabled,
        isValid: isStreamLinkValid
    },
    timestampMode: {
        get label() {
            return t("plugin.customRPC.option.timestampMode.label");
        },
        get description() {
            return t("plugin.customRPC.option.timestampMode.description");
        },
        type: OptionType.SELECT,
        onChange: onChange,
        get options() {
            return [
                {
                    label: t("plugin.customRPC.option.timestampMode.none"),
                    value: TimestampMode.NONE,
                    default: true
                },
                {
                    label: t("plugin.customRPC.option.timestampMode.sinceDiscordOpen"),
                    value: TimestampMode.NOW
                },
                {
                    label: t("plugin.customRPC.option.timestampMode.sameAsCurrentTime"),
                    value: TimestampMode.TIME
                },
                {
                    label: t("plugin.customRPC.option.timestampMode.custom"),
                    value: TimestampMode.CUSTOM
                }
            ];
        }
    },
    startTime: {
        get label() {
            return t("plugin.customRPC.option.startTime.label");
        },
        get description() {
            return t("plugin.customRPC.option.startTime.description");
        },
        type: OptionType.NUMBER,
        onChange: onChange,
        disabled: isTimestampDisabled,
        isValid: (value: number) => {
            if (value && value < 0) return t("plugin.customRPC.error.startTimeInvalid");
            return true;
        }
    },
    endTime: {
        get label() {
            return t("plugin.customRPC.option.endTime.label");
        },
        get description() {
            return t("plugin.customRPC.option.endTime.description");
        },
        type: OptionType.NUMBER,
        onChange: onChange,
        disabled: isTimestampDisabled,
        isValid: (value: number) => {
            if (value && value < 0) return t("plugin.customRPC.error.endTimeInvalid");
            return true;
        }
    },
    imageBig: {
        get label() {
            return t("plugin.customRPC.option.imageBig.label");
        },
        get description() {
            return t("plugin.customRPC.option.imageBig.description");
        },
        type: OptionType.STRING,
        onChange: onChange,
        isValid: isImageKeyValid
    },
    imageBigTooltip: {
        get label() {
            return t("plugin.customRPC.option.imageBigTooltip.label");
        },
        get description() {
            return t("plugin.customRPC.option.imageBigTooltip.description");
        },
        type: OptionType.STRING,
        onChange: onChange,
        isValid: (value: string) => {
            if (value && value.length > 128) return t("plugin.customRPC.error.bigImageTooltipCharacters");
            return true;
        }
    },
    imageSmall: {
        get label() {
            return t("plugin.customRPC.option.imageSmall.label");
        },
        get description() {
            return t("plugin.customRPC.option.imageSmall.description");
        },
        type: OptionType.STRING,
        onChange: onChange,
        isValid: isImageKeyValid
    },
    imageSmallTooltip: {
        get label() {
            return t("plugin.customRPC.option.imageSmallTooltip.label");
        },
        get description() {
            return t("plugin.customRPC.option.imageSmallTooltip.description");
        },
        type: OptionType.STRING,
        onChange: onChange,
        isValid: (value: string) => {
            if (value && value.length > 128) return t("plugin.customRPC.error.smallImageTooltipCharacters");
            return true;
        }
    },
    buttonOneText: {
        get label() {
            return t("plugin.customRPC.option.buttonOneText.label");
        },
        get description() {
            return t("plugin.customRPC.option.buttonOneText.description");
        },
        type: OptionType.STRING,
        onChange: onChange,
        isValid: (value: string) => {
            if (value && value.length > 31) return t("plugin.customRPC.error.buttonOneTextCharacters");
            return true;
        }
    },
    buttonOneURL: {
        get label() {
            return t("plugin.customRPC.option.buttonOneURL.label");
        },
        get description() {
            return t("plugin.customRPC.option.buttonOneURL.description");
        },
        type: OptionType.STRING,
        onChange: onChange
    },
    buttonTwoText: {
        get label() {
            return t("plugin.customRPC.option.buttonTwoText.label");
        },
        get description() {
            return t("plugin.customRPC.option.buttonTwoText.description");
        },
        type: OptionType.STRING,
        onChange: onChange,
        isValid: (value: string) => {
            if (value && value.length > 31) return t("plugin.customRPC.error.buttonTwoTextCharacters");
            return true;
        }
    },
    buttonTwoURL: {
        get label() {
            return t("plugin.customRPC.option.buttonTwoURL.label");
        },
        get description() {
            return t("plugin.customRPC.option.buttonTwoURL.description");
        },
        type: OptionType.STRING,
        onChange: onChange
    }
});

function onChange() {
    setRpc(true);
    if (Settings.plugins.CustomRPC.enabled) setRpc();
}

function isStreamLinkDisabled() {
    return settings.store.type !== ActivityType.STREAMING;
}

function isStreamLinkValid(value: string) {
    if (!isStreamLinkDisabled() && !/https?:\/\/(www\.)?(twitch\.tv|youtube\.com)\/\w+/.test(value)) return t("plugin.customRPC.error.validStream");
    if (value && value.length > 512) return t("plugin.customRPC.error.streamCharacters");
    return true;
}

function isTimestampDisabled() {
    return settings.store.timestampMode !== TimestampMode.CUSTOM;
}

function isImageKeyValid(value: string) {
    if (/https?:\/\/(cdn|media)\.discordapp\.(com|net)\//.test(value)) return t("plugin.customRPC.error.dontUse");
    if (/https?:\/\/(?!i\.)?imgur\.com\//.test(value)) return t("plugin.customRPC.error.imgur");
    if (/https?:\/\/(?!media\.)?tenor\.com\//.test(value)) return t("plugin.customRPC.error.tenor");
    return true;
}

async function createActivity(): Promise<Activity | undefined> {
    const {
        appID,
        appName,
        details,
        state,
        type,
        streamLink,
        startTime,
        endTime,
        imageBig,
        imageBigTooltip,
        imageSmall,
        imageSmallTooltip,
        buttonOneText,
        buttonOneURL,
        buttonTwoText,
        buttonTwoURL
    } = settings.store;

    if (!appName) return;

    const activity: Activity = {
        application_id: appID || "0",
        name: appName,
        state,
        details,
        type,
        flags: 1 << 0,
    };

    if (type === ActivityType.STREAMING) activity.url = streamLink;

    switch (settings.store.timestampMode) {
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
                if (startTime) activity.timestamps.start = startTime;
                if (endTime) activity.timestamps.end = endTime;
            }
            break;
        case TimestampMode.NONE:
        default:
            break;
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
            large_text: imageBigTooltip || undefined
        };
    }

    if (imageSmall) {
        activity.assets = {
            ...activity.assets,
            small_image: await getApplicationAsset(imageSmall),
            small_text: imageSmallTooltip || undefined
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

async function setRpc(disable?: boolean) {
    const activity: Activity | undefined = await createActivity();

    FluxDispatcher.dispatch({
        type: "LOCAL_ACTIVITY_UPDATE",
        activity: !disable ? activity : null,
        socketId: "CustomRPC",
    });
}

export default definePlugin({
    name: "CustomRPC",
    description: "Add a fully customisable Rich Presence (Game status) to your Discord profile",
    authors: [Devs.captain, Devs.AutumnVN, Devs.nin0dev],
    dependencies: ["UserSettingsAPI"],
    start: setRpc,
    stop: () => setRpc(true),
    settings,

    get displayDescription() {
        return t("plugin.customRPC.description");
    },

    patches: [
        {
            find: ".party?(0",
            all: true,
            replacement: {
                match: /\i\.id===\i\.id\?null:/,
                replace: ""
            }
        }
    ],

    settingsAboutComponent: () => {
        const activity = useAwaiter(createActivity);
        const gameActivityEnabled = ShowCurrentGame.useSetting();
        const { profileThemeStyle } = useProfileThemeStyle({});

        return (
            <>
                {!gameActivityEnabled && (
                    <ErrorCard
                        className={classes(Margins.top16, Margins.bottom16)}
                        style={{ padding: "1em" }}
                    >
                        <Forms.FormTitle>{t("plugin.customRPC.error.notice")}</Forms.FormTitle>
                        <Forms.FormText>{t("plugin.customRPC.error.sharing")}</Forms.FormText>

                        <Button
                            color={Button.Colors.TRANSPARENT}
                            className={Margins.top8}
                            onClick={() => ShowCurrentGame.updateSetting(true)}
                        >
                            {t("plugin.customRPC.error.enable")}
                        </Button>
                    </ErrorCard>
                )}

                <Flex flexDirection="column" style={{ gap: ".5em" }} className={Margins.top16}>
                    <Forms.FormText>
                        {tJsx("plugin.customRPC.goTo", {
                            portal: <Link href="https://discord.com/developers/applications">Discord Developer Portal</Link>
                        })}
                    </Forms.FormText>
                    <Forms.FormText>
                        {t("plugin.customRPC.upload")}
                    </Forms.FormText>
                    <Forms.FormText>
                        {tJsx("plugin.customRPC.image", {
                            imgur: <Link href="https://imgur.com">Imgur</Link>
                        })}
                    </Forms.FormText>
                    <Forms.FormText>
                        {t("plugin.customRPC.button")}
                    </Forms.FormText>
                    <Forms.FormText>
                        {t("plugin.customRPC.font")}
                    </Forms.FormText>
                </Flex>

                <Forms.FormDivider className={Margins.top8} />

                <div style={{ width: "284px", ...profileThemeStyle, marginTop: 8, borderRadius: 8, background: "var(--background-mod-faint)" }}>
                    {activity[0] && <ActivityView
                        activity={activity[0]}
                        user={UserStore.getCurrentUser()}
                        currentUser={UserStore.getCurrentUser()}
                    />}
                </div>
            </>
        );
    }
});
