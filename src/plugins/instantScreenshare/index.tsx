/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2025 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { plugin, t } from "@api/i18n";
import { getUserSettingLazy } from "@api/UserSettings";
import { HeadingSecondary } from "@components/Heading";
import { Paragraph } from "@components/Paragraph";
import { VoiceState } from "@plexcord/discord-types";
import { Devs, PcDevs } from "@utils/constants";
import definePlugin from "@utils/types";
import { findByCodeLazy, findStoreLazy } from "@webpack";
import { ChannelStore, MediaEngineStore, PermissionsBits, PermissionStore, SelectedChannelStore, showToast, Toasts, UserStore, VoiceActions, WindowStore } from "@webpack/common";

import { getCurrentMedia, settings } from "./utils";

let hasStreamed;
const startStream = findByCodeLazy('type:"STREAM_START"');
const StreamPreviewSettings = getUserSettingLazy("voiceAndVideo", "disableStreamPreviews")!;
const ApplicationStreamingSettingsStore = findStoreLazy("ApplicationStreamingSettingsStore");

async function autoStartStream(instant = true) {
    if (!instant && !WindowStore.isFocused() && settings.store.focusDiscord) return;
    const selected = SelectedChannelStore.getVoiceChannelId();
    if (!selected) return;

    const channel = ChannelStore.getChannel(selected);
    if (!channel) return;

    const isGuildChannel = !channel.isDM() && !channel.isGroupDM();

    if (channel.type === 13 || isGuildChannel && !PermissionStore.can(PermissionsBits.STREAM, channel)) return;

    if (settings.store.autoDeafen && !MediaEngineStore.isSelfDeaf() && instant) {
        VoiceActions.toggleSelfDeaf();
    } else if (settings.store.autoMute && !MediaEngineStore.isSelfMute() && instant) {
        VoiceActions.toggleSelfMute();
    }

    const streamMedia = await getCurrentMedia();
    const preview = StreamPreviewSettings.getSetting();
    const { soundshareEnabled } = ApplicationStreamingSettingsStore.getState();
    let sourceId = streamMedia.id;
    if (streamMedia.type === "video_device") sourceId = `camera:${streamMedia.id}`;

    startStream(channel.guild_id ?? null, selected, {
        "pid": null,
        "sourceId": sourceId,
        "sourceName": streamMedia.name,
        "audioSourceId": streamMedia.name,
        "sound": soundshareEnabled,
        "previewDisabled": preview
    });
}

function handleToggle() {
    settings.store.toolboxManagement = !settings.store.toolboxManagement;
    showToast(`${t(plugin.instantScreenshare.toolbox.toast, { state: settings.store.toolboxManagement ? t(plugin.instantScreenshare.toolbox.enabled) : t(plugin.instantScreenshare.toolbox.disabled) })}`, Toasts.Type.SUCCESS);
}

export default definePlugin({
    name: "InstantScreenshare",
    description: () => t(plugin.instantScreenshare.description),
    authors: [Devs.HAHALOSAH, Devs.thororen, PcDevs.mart],
    tags: ["ScreenshareKeybind"],
    autoStartStream,
    settings,

    settingsAboutComponent: () => (
        <>
            <HeadingSecondary>{t(plugin.instantScreenshare.modal.linux.title)}</HeadingSecondary>
            <Paragraph>
                {t(plugin.instantScreenshare.modal.linux.body)}
                <br />
                {t(plugin.instantScreenshare.modal.linux.bodyTwo)}
            </Paragraph>
            <br />
            <HeadingSecondary>{t(plugin.instantScreenshare.modal.videoDevices.title)}</HeadingSecondary>
            <Paragraph>
                {t(plugin.instantScreenshare.modal.videoDevices.body)}
            </Paragraph>
            <br />
            <HeadingSecondary>{t(plugin.instantScreenshare.modal.regardingSound.title)}</HeadingSecondary>
            <Paragraph>
                {t(plugin.instantScreenshare.modal.regardingSound.body)}
            </Paragraph>
        </>
    ),

    patches: [
        {
            find: "DISCONNECT_FROM_VOICE_CHANNEL]",
            predicate: () => settings.store.keybindScreenshare,
            replacement: {
                match: /\[\i\.\i\.DISCONNECT_FROM_VOICE_CHANNEL/,
                replace: '["INSTANT_SCREEN_SHARE"]:{onTrigger(){$self.autoStartStream(false)},keyEvents:{keyUp:!1,keyDown:!0}},$&'
            },
        },
        {
            find: "keybindActionTypes()",
            predicate: () => settings.store.keybindScreenshare,
            replacement: {
                match: /=\[(\{value:\i\.\i\.UNASSIGNED)/,
                replace: '=[{value:"INSTANT_SCREEN_SHARE",label:"Instant Screenshare"},$1'
            }
        }
    ],

    flux: {
        async VOICE_STATE_UPDATES({ voiceStates }: { voiceStates: VoiceState[]; }) {
            if (!settings.store.toolboxManagement || !settings.store.instantScreenshare) return;
            const myId = UserStore.getCurrentUser().id;
            for (const state of voiceStates) {
                const { userId, channelId } = state;
                if (userId !== myId) continue;

                if (channelId && !hasStreamed) {
                    hasStreamed = true;
                    await autoStartStream();
                }

                if (!channelId) {
                    hasStreamed = false;
                }

                break;
            }
        }
    },

    toolboxActions: () => ({
        [t(plugin.instantScreenshare.toolbox.label)]: (() => handleToggle())
    })
});
