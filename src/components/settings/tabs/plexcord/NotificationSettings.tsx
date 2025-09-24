/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2024 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { t, tJsx } from "@api/i18n";
import { openNotificationLogModal } from "@api/Notifications/notificationLog";
import { useSettings } from "@api/Settings";
import { ErrorCard } from "@components/ErrorCard";
import { Flex } from "@components/Flex";
import { Margins } from "@utils/margins";
import { identity } from "@utils/misc";
import { ModalCloseButton, ModalContent, ModalHeader, ModalRoot, ModalSize, openModal } from "@utils/modal";
import { Button, Forms, Select, Slider, Switch, Text } from "@webpack/common";

export function NotificationSection() {
    return (
        <Forms.FormSection className={Margins.top16} title={"Plexcord " + t("settings.notifications.title")} tag="h5">
            <Flex>
                <Button onClick={openNotificationSettingsModal}>
                    {t("settings.notifications.settings")}
                </Button>
                <Button onClick={openNotificationLogModal}>
                    {t("settings.notifications.viewLog")}
                </Button>
            </Flex>
        </Forms.FormSection>
    );
}

export function openNotificationSettingsModal() {
    openModal(props => (
        <ModalRoot {...props} size={ModalSize.MEDIUM}>
            <ModalHeader>
                <Text variant="heading-lg/semibold" style={{ flexGrow: 1 }}>{t("settings.notifications.settings")}</Text>
                <ModalCloseButton onClick={props.onClose} />
            </ModalHeader>

            <ModalContent>
                <NotificationSettings />
            </ModalContent>
        </ModalRoot>
    ));
}

function NotificationSettings() {
    const settings = useSettings().notifications;

    return (
        <div style={{ padding: "1em 0" }}>
            <Forms.FormTitle tag="h5">{t("settings.notifications.style.label")}</Forms.FormTitle>
            {settings.useNative !== "never" && Notification?.permission === "denied" && (
                <ErrorCard style={{ padding: "1em" }} className={Margins.bottom8}>
                    <Forms.FormTitle tag="h5">{t("settings.notifications.permissions.denied.title")}</Forms.FormTitle>
                    <Forms.FormText>{t("settings.notifications.permissions.denied.label")}</Forms.FormText>
                </ErrorCard>
            )}
            <Forms.FormText className={Margins.bottom8}>
                {t("settings.notifications.style.description")}
                <ul>
                    <li><strong>{t("settings.notifications.style.plexcord")}</strong>: {t("settings.notifications.style.plexcordDesc")}</li>
                    <li><strong>{t("settings.notifications.style.desktop")}</strong>: {t("settings.notifications.style.desktopDesc")}</li>
                </ul>
            </Forms.FormText>
            <Select
                placeholder={t("settings.notifications.style.label")}
                options={[
                    { label: t("settings.notifications.style.onlyWhenNotFocused"), value: "not-focused", default: true },
                    { label: t("settings.notifications.style.always.desktop"), value: "always" },
                    { label: t("settings.notifications.style.always.plexcord"), value: "never" },
                ] satisfies Array<{ value: typeof settings["useNative"]; } & Record<string, any>>}
                closeOnSelect={true}
                select={v => settings.useNative = v}
                isSelected={v => v === settings.useNative}
                serialize={identity}
            />

            <Forms.FormTitle tag="h5" className={Margins.top16 + " " + Margins.bottom8}>{t("settings.notifications.positions.label")}</Forms.FormTitle>
            <Select
                isDisabled={settings.useNative === "always"}
                placeholder={t("settings.notifications.positions.label")}
                options={[
                    { label: t("settings.notifications.positions.right.bottom"), value: "bottom-right", default: true },
                    { label: t("settings.notifications.positions.right.top"), value: "top-right" },
                ] satisfies Array<{ value: typeof settings["position"]; } & Record<string, any>>}
                select={v => settings.position = v}
                isSelected={v => v === settings.position}
                serialize={identity}
            />

            <Forms.FormTitle tag="h5" className={Margins.top16 + " " + Margins.bottom8}>Missed Notification Count</Forms.FormTitle>
            <Switch
                value={settings.missed}
                onChange={(v: boolean) => settings.missed = v}
            >
                When refocusing discord a notification will popup with how you missed
            </Switch>

            <Forms.FormTitle tag="h5" className={Margins.top16 + " " + Margins.bottom8}>{t("settings.notifications.timeout.label")}</Forms.FormTitle>
            <Forms.FormText className={Margins.bottom16}>{t("settings.notifications.timeout.description")}</Forms.FormText>
            <Slider
                disabled={settings.useNative === "always"}
                markers={[0, 1000, 2500, 5000, 10_000, 20_000]}
                minValue={0}
                maxValue={20_000}
                initialValue={settings.timeout}
                onValueChange={v => settings.timeout = v}
                onValueRender={v => (v / 1000).toFixed(2) + "s"}
                onMarkerRender={v => (v / 1000) + "s"}
                stickToMarkers={false}
            />

            <Forms.FormTitle tag="h5" className={Margins.top16 + " " + Margins.bottom8}>{t("settings.notifications.logLimit.label")}</Forms.FormTitle>
            <Forms.FormText className={Margins.bottom16}>
                {tJsx("settings.notifications.logLimit.description", { unlimited: <code>∞</code>, disable: <code>0</code> })}.
            </Forms.FormText>
            <Slider
                markers={[0, 25, 50, 75, 100, 200]}
                minValue={0}
                maxValue={200}
                stickToMarkers={true}
                initialValue={settings.logLimit}
                onValueChange={v => settings.logLimit = v}
                onValueRender={v => v === 200 ? "∞" : v}
                onMarkerRender={v => v === 200 ? "∞" : v}
            />
        </div>
    );
}
