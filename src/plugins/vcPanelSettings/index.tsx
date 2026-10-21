/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2024 Vendicated and contributors
 * Copyright (c) 2026 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import "./style.css";

import { plugin, t } from "@api/i18n";
import { definePluginSettings } from "@api/Settings";
import { BaseText } from "@components/BaseText";
import { Heading } from "@components/Heading";
import { Link } from "@components/Link";
import { VideoDevice } from "@plexcord/discord-types";
import { Devs, PcDevs } from "@utils/constants";
import { identity } from "@utils/misc";
import definePlugin, { OptionType } from "@utils/types";
import { FluxDispatcher, MediaEngineStore, Select, Slider, useEffect, useState } from "@webpack/common";

const settings = definePluginSettings({
    title1: {
        label: () => t(plugin.vCPanelSettings.option.title1.label),
        type: OptionType.COMPONENT,
        component: () => <BaseText weight="bold" style={{ fontSize: "1.27rem" }}>{t(plugin.vCPanelSettings.text.appearance)}</BaseText>,
        description: ""
    },
    uncollapseSettingsByDefault: {
        label: () => t(plugin.vCPanelSettings.option.uncollapseSettingsByDefault.label),
        type: OptionType.BOOLEAN,
        default: false,
        description: () => t(plugin.vCPanelSettings.option.uncollapseSettingsByDefault.description)
    },
    title2: {
        label: () => t(plugin.vCPanelSettings.option.title2.label),
        type: OptionType.COMPONENT,
        component: () => <BaseText weight="bold" style={{ fontSize: "1.27rem" }}>{t(plugin.vCPanelSettings.text.settingsToShow)}</BaseText>,
        description: ""
    },
    outputVolume: {
        label: () => t(plugin.vCPanelSettings.option.outputVolume.label),
        type: OptionType.BOOLEAN,
        default: true,
        description: () => t(plugin.vCPanelSettings.option.outputVolume.description)
    },
    inputVolume: {
        label: () => t(plugin.vCPanelSettings.option.inputVolume.label),
        type: OptionType.BOOLEAN,
        default: true,
        description: () => t(plugin.vCPanelSettings.option.inputVolume.description)
    },
    outputDevice: {
        label: () => t(plugin.vCPanelSettings.option.outputDevice.label),
        type: OptionType.BOOLEAN,
        default: true,
        description: () => t(plugin.vCPanelSettings.option.outputDevice.description)
    },
    inputDevice: {
        label: () => t(plugin.vCPanelSettings.option.inputDevice.label),
        type: OptionType.BOOLEAN,
        default: true,
        description: () => t(plugin.vCPanelSettings.option.inputDevice.description)
    },
    camera: {
        label: () => t(plugin.vCPanelSettings.option.camera.label),
        type: OptionType.BOOLEAN,
        default: false,
        description: () => t(plugin.vCPanelSettings.option.camera.description)
    },
    title3: {
        label: () => t(plugin.vCPanelSettings.option.title3.label),
        type: OptionType.COMPONENT,
        component: () => <BaseText weight="bold" style={{ fontSize: "1.27rem" }}>{t(plugin.vCPanelSettings.text.headersToShow)}</BaseText>,
        description: ""
    },
    showOutputVolumeHeader: {
        label: () => t(plugin.vCPanelSettings.option.showOutputVolumeHeader.label),
        type: OptionType.BOOLEAN,
        default: true,
        description: () => t(plugin.vCPanelSettings.option.showOutputVolumeHeader.description)
    },
    showInputVolumeHeader: {
        label: () => t(plugin.vCPanelSettings.option.showInputVolumeHeader.label),
        type: OptionType.BOOLEAN,
        default: true,
        description: () => t(plugin.vCPanelSettings.option.showInputVolumeHeader.description)
    },
    showOutputDeviceHeader: {
        label: () => t(plugin.vCPanelSettings.option.showOutputDeviceHeader.label),
        type: OptionType.BOOLEAN,
        default: false,
        description: () => t(plugin.vCPanelSettings.option.showOutputDeviceHeader.description)
    },
    showInputDeviceHeader: {
        label: () => t(plugin.vCPanelSettings.option.showInputDeviceHeader.label),
        type: OptionType.BOOLEAN,
        default: false,
        description: () => t(plugin.vCPanelSettings.option.showInputDeviceHeader.description)
    },
    showVideoDeviceHeader: {
        label: () => t(plugin.vCPanelSettings.option.showVideoDeviceHeader.label),
        type: OptionType.BOOLEAN,
        default: false,
        description: () => t(plugin.vCPanelSettings.option.showVideoDeviceHeader.description)
    },
});

function OutputVolumeComponent() {
    const [outputVolume, setOutputVolume] = useState(MediaEngineStore.getOutputVolume());

    useEffect(() => {
        const listener = () => setOutputVolume(MediaEngineStore.getOutputVolume());
        FluxDispatcher.subscribe("AUDIO_SET_OUTPUT_VOLUME", listener);
        return () => FluxDispatcher.unsubscribe("AUDIO_SET_OUTPUT_VOLUME", listener);
    }, []);

    return (
        <>
            {settings.store.showOutputVolumeHeader && <Heading>{t(plugin.vCPanelSettings.text.outputVolume)}</Heading>}
            <Slider maxValue={200} minValue={0} onValueRender={v => `${v.toFixed(0)}%`} initialValue={outputVolume} asValueChanges={volume => {
                FluxDispatcher.dispatch({
                    type: "AUDIO_SET_OUTPUT_VOLUME",
                    volume
                });
            }} />
        </>
    );
}

function InputVolumeComponent() {
    const [inputVolume, setInputVolume] = useState(MediaEngineStore.getInputVolume());

    useEffect(() => {
        const listener = () => setInputVolume(MediaEngineStore.getInputVolume());
        FluxDispatcher.subscribe("AUDIO_SET_INPUT_VOLUME", listener);
        return () => FluxDispatcher.unsubscribe("AUDIO_SET_INPUT_VOLUME", listener);
    }, []);

    return (
        <>
            {settings.store.showInputVolumeHeader && <Heading>{t(plugin.vCPanelSettings.text.inputVolume)}</Heading>}
            <Slider maxValue={100} minValue={0} initialValue={inputVolume} asValueChanges={volume => {
                FluxDispatcher.dispatch({
                    type: "AUDIO_SET_INPUT_VOLUME",
                    volume
                });
            }} />
        </>
    );
}

function OutputDeviceComponent() {
    const [outputDevice, setOutputDevice] = useState(MediaEngineStore.getOutputDeviceId());

    useEffect(() => {
        const listener = () => setOutputDevice(MediaEngineStore.getOutputDeviceId());
        FluxDispatcher.subscribe("AUDIO_SET_OUTPUT_DEVICE", listener);
        return () => FluxDispatcher.unsubscribe("AUDIO_SET_OUTPUT_DEVICE", listener);
    }, []);

    return (
        <>
            {settings.store.showOutputDeviceHeader && <Heading>{t(plugin.vCPanelSettings.text.outputDevice)}</Heading>}
            <Select options={Object.values(MediaEngineStore.getOutputDevices()).map((device: any /* i am NOT typing this*/) => {
                return { value: device.id, label: settings.store.showOutputDeviceHeader ? device.name : `🔊 ${device.name}` };
            })}
                serialize={identity}
                isSelected={value => value === outputDevice}
                select={id => {
                    FluxDispatcher.dispatch({
                        type: "AUDIO_SET_OUTPUT_DEVICE",
                        id
                    });
                }}>

            </Select>
        </>
    );
}

function InputDeviceComponent() {
    const [inputDevice, setInputDevice] = useState(MediaEngineStore.getInputDeviceId());

    useEffect(() => {
        const listener = () => setInputDevice(MediaEngineStore.getInputDeviceId());
        FluxDispatcher.subscribe("AUDIO_SET_INPUT_DEVICE", listener);
        return () => FluxDispatcher.unsubscribe("AUDIO_SET_INPUT_DEVICE", listener);
    }, []);

    return (
        <div style={{ marginTop: "10px" }}>
            {settings.store.showInputDeviceHeader && <Heading>{t(plugin.vCPanelSettings.text.inputDevice)}</Heading>}
            <Select options={Object.values(MediaEngineStore.getInputDevices()).map((device: any /* i am NOT typing this*/) => {
                return { value: device.id, label: settings.store.showInputDeviceHeader ? device.name : `🎤 ${device.name}` };
            })}
                serialize={identity}
                isSelected={value => value === inputDevice}
                select={id => {
                    FluxDispatcher.dispatch({
                        type: "AUDIO_SET_INPUT_DEVICE",
                        id
                    });
                }}>

            </Select>
        </div>
    );
}

function VideoDeviceComponent() {
    const [videoDevice, setVideoDevice] = useState(MediaEngineStore.getVideoDeviceId());

    useEffect(() => {
        const listener = () => setVideoDevice(MediaEngineStore.getVideoDeviceId());
        FluxDispatcher.subscribe("MEDIA_ENGINE_SET_VIDEO_DEVICE", listener);
        return () => FluxDispatcher.unsubscribe("MEDIA_ENGINE_SET_VIDEO_DEVICE", listener);
    }, []);

    return (
        <div style={{ marginTop: "10px" }}>
            {settings.store.showVideoDeviceHeader && <Heading>{t(plugin.vCPanelSettings.option.camera.label)}</Heading>}
            <Select options={Object.values(MediaEngineStore.getVideoDevices()).map((device: VideoDevice) => {
                return { value: device.id, label: settings.store.showVideoDeviceHeader ? device.name : `📷 ${device.name}` };
            })}
                serialize={identity}
                isSelected={value => value === videoDevice}
                select={id => {
                    FluxDispatcher.dispatch({
                        type: "MEDIA_ENGINE_SET_VIDEO_DEVICE",
                        id
                    });
                }}>

            </Select>
        </div>
    );
}

function VoiceSettings() {
    const [showSettings, setShowSettings] = useState(settings.store.uncollapseSettingsByDefault);
    return <div style={{ marginTop: "20px" }}>
        <div style={{ marginBottom: "10px" }}>
            <Link className="pc-panelsettings-underline-on-hover" style={{ color: "var(--text-default)" }} onClick={() => { setShowSettings(!showSettings); }}>{!showSettings ? `► ${t(plugin.vCPanelSettings.text.settings)}` : `▼ ${t(plugin.vCPanelSettings.text.hide)}`}</Link>
        </div>

        {
            showSettings && <>
                {settings.store.outputVolume && <OutputVolumeComponent />}
                {settings.store.inputVolume && <InputVolumeComponent />}
                {settings.store.outputDevice && <OutputDeviceComponent />}
                {settings.store.inputDevice && <InputDeviceComponent />}
                {settings.store.camera && <VideoDeviceComponent />}
            </>
        }
    </div>;
}

export default definePlugin({
    name: "VCPanelSettings",
    description: () => t(plugin.vCPanelSettings.description),
    tags: ["utility", "voice"],
    authors: [Devs.nin0, PcDevs.MutanPlex],
    settings,
    renderVoiceSettings() { return <VoiceSettings />; },
    patches: [
        {
            find: "}getAccessibilityLabel(){",
            replacement: {
                match: /this.renderVoiceStates\(\),\i/,
                replace: "$&,$self.renderVoiceSettings()"
            }
        }
    ]
});
