/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2024 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { t, tJsx } from "@api/i18n";
import { openNotificationLogModal } from "@api/Notifications/notificationLog";
import { useSettings } from "@api/Settings";
import { BaseText } from "@components/BaseText";
import { Button } from "@components/Button";
import { ErrorCard } from "@components/ErrorCard";
import { Flex } from "@components/Flex";
import { FormSwitch } from "@components/FormSwitch";
import { Heading, HeadingTertiary } from "@components/Heading";
import { Paragraph } from "@components/Paragraph";
import { Margins } from "@utils/margins";
import { identity } from "@utils/misc";
import { ModalCloseButton, ModalContent, ModalHeader, ModalRoot, ModalSize, openModal } from "@utils/modal";
import { Select, Slider } from "@webpack/common";

export function NotificationSection() {
    return (
        <section className={Margins.top16}>
            <HeadingTertiary>{t("settings.notifications.title")}</HeadingTertiary>
            <Paragraph className={Margins.bottom8}>{t("settings.notifications.description")}</Paragraph>
            <Flex>
                <Button onClick={openNotificationSettingsModal}>
                    {t("settings.notifications.settings")}
                </Button>
                <Button onClick={openNotificationLogModal}>
                    {t("settings.notifications.viewLog")}
                </Button>
            </Flex>
        </section>
    );
}

export function openNotificationSettingsModal() {
    openModal(props => (
        <ModalRoot {...props} size={ModalSize.MEDIUM}>
            <ModalHeader>
                <BaseText size="lg" weight="semibold" style={{ flexGrow: 1 }}>{t("settings.notifications.settings")}</BaseText>
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
            <Heading tag="h5">{t("settings.notifications.style.label")}</Heading>
            {settings.useNative !== "never" && Notification?.permission === "denied" && (
                <ErrorCard style={{ padding: "1em" }} className={Margins.bottom8}>
                    <Heading tag="h5">{t("settings.notifications.permissions.denied.title")}</Heading>
                    <Paragraph>{t("settings.notifications.permissions.denied.label")}</Paragraph>
                </ErrorCard>
            )}
            <Paragraph className={Margins.bottom8}>
                {t("settings.notifications.style.description")}
                <ul>
                    <li><strong>{t("settings.notifications.style.plexcord")}</strong>: {t("settings.notifications.style.plexcordDesc")}</li>
                    <li><strong>{t("settings.notifications.style.desktop")}</strong>: {t("settings.notifications.style.desktopDesc")}</li>
                </ul>
            </Paragraph>
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

            <Heading tag="h5" className={Margins.top16 + " " + Margins.bottom8}>{t("settings.notifications.positions.label")}</Heading>
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

            <Heading tag="h5" className={Margins.top16 + " " + Margins.bottom8}>{t("settings.notifications.missed.label")}</Heading>
            <FormSwitch
                value={settings.missed}
                onChange={(v: boolean) => settings.missed = v}
                title={t("settings.notifications.missed.description")}
            />


            <Heading tag="h5" className={Margins.top16 + " " + Margins.bottom8}>{t("settings.notifications.timeout.label")}</Heading>
            <Paragraph className={Margins.bottom16}>{t("settings.notifications.timeout.description")}</Paragraph>
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

            <Heading tag="h5" className={Margins.top16 + " " + Margins.bottom8}>{t("settings.notifications.logLimit.label")}</Heading>
            <Paragraph className={Margins.bottom16}>
                {tJsx("settings.notifications.logLimit.description", { unlimited: <code>∞</code>, disable: <code>0</code> })}.
            </Paragraph>
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
