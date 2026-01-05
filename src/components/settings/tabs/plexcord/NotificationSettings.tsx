/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2024 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { settings, t } from "@api/i18n";
import { openNotificationLogModal } from "@api/Notifications/notificationLog";
import { useSettings } from "@api/Settings";
import { BaseText } from "@components/BaseText";
import { Button } from "@components/Button";
import { Divider } from "@components/Divider";
import { ErrorCard } from "@components/ErrorCard";
import { Flex } from "@components/Flex";
import { FormSwitch } from "@components/FormSwitch";
import { Heading } from "@components/Heading";
import { Paragraph } from "@components/Paragraph";
import { Margins } from "@utils/margins";
import { identity } from "@utils/misc";
import { ModalCloseButton, ModalContent, ModalHeader, ModalRoot, ModalSize, openModal } from "@utils/modal";
import { Select, Slider } from "@webpack/common";

export function NotificationSection() {
    return (
        <>
            <Divider className={Margins.top20} />

            <Heading>{t(settings.notifications.title)}</Heading>
            <Paragraph className={Margins.bottom8}>{t(settings.notifications.description)}</Paragraph>
            <Flex gap="16px">
                <Button onClick={openNotificationSettingsModal}>
                    {t(settings.notifications.settings)}
                </Button>
                <Button onClick={openNotificationLogModal}>
                    {t(settings.notifications.viewLog)}
                </Button>
            </Flex>
        </>
    );
}

export function openNotificationSettingsModal() {
    openModal(props => (
        <ModalRoot {...props} size={ModalSize.MEDIUM}>
            <ModalHeader>
                <BaseText size="lg" weight="semibold" style={{ flexGrow: 1 }}>{t(settings.notifications.settings)}</BaseText>
                <ModalCloseButton onClick={props.onClose} />
            </ModalHeader>

            <ModalContent>
                <NotificationSettings />
            </ModalContent>
        </ModalRoot>
    ));
}

function NotificationSettings() {
    const settingsState = useSettings(["notifications.*"]).notifications;

    return (
        <div style={{ padding: "1em 0" }}>
            <Heading>{t(settings.notifications.style.label)}</Heading>
            {settingsState.useNative !== "never" && Notification?.permission === "denied" && (
                <ErrorCard style={{ padding: "1em" }} className={Margins.bottom8}>
                    <Heading>{t(settings.notifications.permissions.denied.title)}</Heading>
                    <Paragraph>{t(settings.notifications.permissions.denied.label)}</Paragraph>
                </ErrorCard>
            )}
            <Paragraph className={Margins.bottom8}>
                {t(settings.notifications.style.description)}
                <ul>
                    <li><strong>{t(settings.notifications.style.plexcord)}</strong>: {t(settings.notifications.style.plexcordDesc)}</li>
                    <li><strong>{t(settings.notifications.style.desktop)}</strong>: {t(settings.notifications.style.desktopDesc)}</li>
                </ul>
            </Paragraph>
            <Select
                placeholder={t(settings.notifications.style.label)}
                options={[
                    { label: t(settings.notifications.style.onlyWhenNotFocused), value: "not-focused", default: true },
                    { label: t(settings.notifications.style.always.desktop), value: "always" },
                    { label: t(settings.notifications.style.always.plexcord), value: "never" },
                ] satisfies Array<{ value: typeof settingsState["useNative"]; } & Record<string, any>>}
                closeOnSelect={true}
                select={v => settingsState.useNative = v}
                isSelected={v => v === settingsState.useNative}
                serialize={identity}
            />

            <Heading className={Margins.top16 + " " + Margins.bottom8}>{t(settings.notifications.positions.label)}</Heading>
            <Select
                isDisabled={settingsState.useNative === "always"}
                placeholder={t(settings.notifications.positions.label)}
                options={[
                    { label: t(settings.notifications.positions.right.bottom), value: "bottom-right", default: true },
                    { label: t(settings.notifications.positions.right.top), value: "top-right" },
                    { label: t(settings.notifications.positions.left.bottom), value: "bottom-left" },
                    { label: t(settings.notifications.positions.left.top), value: "top-left" },
                ] satisfies Array<{ value: typeof settingsState["position"]; } & Record<string, any>>}
                select={v => settingsState.position = v}
                isSelected={v => v === settingsState.position}
                serialize={identity}
            />

            <Heading className={Margins.top16 + " " + Margins.bottom8}>{t(settings.notifications.missed.label)}</Heading>
            <FormSwitch
                value={settingsState.missed}
                onChange={(v: boolean) => settingsState.missed = v}
                title={t(settings.notifications.missed.description)}
            />

            <Heading className={Margins.top16 + " " + Margins.bottom8}>{t(settings.notifications.timeout.label)}</Heading>
            <Paragraph className={Margins.bottom16}>{t(settings.notifications.timeout.description)}</Paragraph>
            <Slider
                disabled={settingsState.useNative === "always"}
                markers={[0, 1000, 2500, 5000, 10_000, 20_000]}
                minValue={0}
                maxValue={20_000}
                initialValue={settingsState.timeout}
                onValueChange={v => settingsState.timeout = v}
                onValueRender={v => (v / 1000).toFixed(2) + "s"}
                onMarkerRender={v => (v / 1000) + "s"}
                stickToMarkers={false}
            />

            <Heading tag="h5" className={Margins.top16 + " " + Margins.bottom8}>{t(settings.notifications.logLimit.label)}</Heading>
            <Paragraph className={Margins.bottom16}>
                {t(settings.notifications.logLimit.description, { unlimited: <code>∞</code>, disable: <code>0</code> })}.
            </Paragraph>
            <Slider
                markers={[0, 25, 50, 75, 100, 200]}
                minValue={0}
                maxValue={200}
                stickToMarkers={true}
                initialValue={settingsState.logLimit}
                onValueChange={v => settingsState.logLimit = v}
                onValueRender={v => v === 200 ? "∞" : v}
                onMarkerRender={v => v === 200 ? "∞" : v}
            />

            <Heading tag="h5" className={Margins.top16 + " " + Margins.bottom8}>{t(settings.notifications.opacity.label)}</Heading>
            <Paragraph className={Margins.bottom16}>{t(settings.notifications.opacity.description)}</Paragraph>
            <Slider
                disabled={settingsState.useNative === "always"}
                markers={[10, 25, 50, 75, 100]}
                minValue={10}
                maxValue={100}
                initialValue={settingsState.opacity}
                onValueChange={v => settingsState.opacity = v}
                onValueRender={v => v + "%"}
                onMarkerRender={v => v + "%"}
                stickToMarkers={false}
            />

            <Heading tag="h5" className={Margins.top16 + " " + Margins.bottom8}>{t(settings.notifications.maxNotifications.label)}</Heading>
            <Paragraph className={Margins.bottom16}>{t(settings.notifications.maxNotifications.description)}</Paragraph>
            <Slider
                disabled={settingsState.useNative === "always"}
                markers={[1, 2, 3, 4, 5]}
                minValue={1}
                maxValue={5}
                stickToMarkers={true}
                initialValue={settingsState.maxNotifications}
                onValueChange={v => settingsState.maxNotifications = v}
                onValueRender={v => v}
                onMarkerRender={v => v}
            />

            <Heading tag="h5" className={Margins.top16 + " " + Margins.bottom8}>{t(settings.notifications.behavior.label)}</Heading>

            <FormSwitch
                value={settingsState.disableInStreamerMode}
                onChange={(v: boolean) => settingsState.disableInStreamerMode = v}
                title={t(settings.notifications.disableInStreamerMode.description)}
                description={t(settings.notifications.disableInStreamerMode.description)}
            />

            <FormSwitch
                value={settingsState.renderImages}
                onChange={(v: boolean) => settingsState.renderImages = v}
                title={t(settings.notifications.renderImages.description)}
                description={t(settings.notifications.renderImages.description)}
            />

            <Heading tag="h5" className={Margins.top16 + " " + Margins.bottom8}>{t(settings.notifications.streamingTreatment.label)}</Heading>
            <Paragraph className={Margins.bottom8}>{t(settings.notifications.streamingTreatment.description)}</Paragraph>
            <Select
                placeholder={t(settings.notifications.streamingTreatment.label)}
                options={[
                    { label: t(settings.notifications.streamingTreatment.normal), value: "normal", default: true },
                    { label: t(settings.notifications.streamingTreatment.noContent), value: "no-content" },
                    { label: t(settings.notifications.streamingTreatment.ignore), value: "ignore" },
                ] satisfies Array<{ value: typeof settingsState["streamingTreatment"]; } & Record<string, any>>}
                closeOnSelect={true}
                select={v => settingsState.streamingTreatment = v}
                isSelected={v => v === settingsState.streamingTreatment}
                serialize={identity}
            />
        </div>
    );
}
