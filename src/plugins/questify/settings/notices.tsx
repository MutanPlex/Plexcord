/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2026 Vendicated and contributors
 * Copyright (c) 2026 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { plugin, t } from "@api/i18n";
import type { ModalOptions, ModalProps, RenderModalProps } from "@plexcord/discord-types";
import { Modal, openModal, useEffect, useState } from "@webpack/common";
import type { ComponentType, JSX } from "react";

import { getQuestifySettings } from "./access";
import { resetDangerousSettings } from "./dangerous";
import { promptToRestartIfDirty } from "./restartTracking";

type NoticeActionVariant = "primary" | "secondary" | "critical-primary" | "critical-secondary" | "active" | "overlay-primary" | "overlay-secondary" | "expressive";

type QuestifyModalOptions = ModalOptions & { dismissable?: boolean; };
type QuestifyModalProps = ModalProps & { dismissable?: boolean; };

const QuestifyModal = Modal as ComponentType<QuestifyModalProps>;

interface NoticeActionStep {
    text: string;
    variant?: NoticeActionVariant;
    disabledFor?: number; // Seconds
    confirmation?: NoticeActionStep;
}

interface NoticeAction extends NoticeActionStep {
    run?: () => void;
    promptForRestart?: boolean;
}

interface OneTimeNotice {
    id: string;
    title: string;
    dismissable?: boolean;
    renderBody: () => JSX.Element;
    condition: () => boolean;
    autoAcknowledgeCondition?: () => boolean;
    actions: readonly NoticeAction[];
}

const oneTimeNotices = [
    {
        id: "quest-ban-warning-2026-08-07",
        title: t(plugin.questify.text.questifyNoticeAugust7th),
        renderBody: () => <div className="questify-startup-notice-body">
            <p>
                {t(plugin.questify.text.questBanSystem)} <a href="https://discord.com/safety/platform-manipulation-policy-explainer" target="_blank" rel="noreferrer">{t(plugin.questify.settings.questFeatures.tos)}</a>.
            </p>
            <br />
            <p>
                {t(plugin.questify.text.thePunishmentAppearsLimited)}
            </p>
            <br />
            <p>
                {t(plugin.questify.settings.questFeatures.warningDetection)}
            </p>
        </div>,
        condition: () => {
            const settings = getQuestifySettings();

            return settings.enabled && settings.allowChangingDangerousSettings;
        },
        autoAcknowledgeCondition: () => !getQuestifySettings().allowChangingDangerousSettings,
        actions: [
            {
                text: t(plugin.questify.text.keepUsingDangerousQuestify),
                variant: "critical-primary",
            },
            {
                text: t(plugin.questify.text.disableDangerousQuestifySettings),
                variant: "primary",
                run: resetDangerousSettings,
                promptForRestart: true,
            },
        ],
    },
    {
        id: "quest-ban-warning-2026-08-26",
        title: t(plugin.questify.text.questifyNoticeAugust26th),
        dismissable: false,
        renderBody: () => <div className="questify-startup-notice-body">
            <p>
                {t(plugin.questify.text.begunPunishing)} <a href="https://discord.com/safety/platform-manipulation-policy-explainer" target="_blank" rel="noreferrer">{t(plugin.questify.settings.questFeatures.tos)}</a>.
            </p>
            <br />
            <p>
                {t(plugin.questify.text.punishmentConsists)} <strong>{t(plugin.questify.text.thePunishmentAlsoConsists)}</strong>
            </p>
            <br />
            <p>
                {t(plugin.questify.text.dueToTheVarious)}
            </p>
        </div>,
        condition: () => {
            const settings = getQuestifySettings();

            return settings.enabled && settings.allowChangingDangerousSettings;
        },
        autoAcknowledgeCondition: () => !getQuestifySettings().allowChangingDangerousSettings,
        actions: [
            {
                text: t(plugin.questify.text.keepUsingDangerousQuestify),
                variant: "critical-primary",
                disabledFor: 10,
                confirmation: {
                    text: t(plugin.questify.text.areYouSure),
                    variant: "critical-secondary",
                    disabledFor: 5,
                },
            },
            {
                text: t(plugin.questify.text.disableDangerousQuestifySettings),
                variant: "primary",
                run: resetDangerousSettings,
                promptForRestart: true,
            },
        ],
    },
] as const satisfies readonly OneTimeNotice[];

function acknowledgeNotice(id: string): void {
    const settings = getQuestifySettings();

    settings.acknowledgedNotices = {
        ...settings.acknowledgedNotices,
        [id]: true,
    };
}

function runNoticeAction(notice: OneTimeNotice, action: NoticeAction, onClose: () => void): void {
    acknowledgeNotice(notice.id);
    action.run?.();
    onClose();

    setTimeout(() => {
        if (!action.promptForRestart || !promptToRestartIfDirty({ onDecline: showPendingQuestifyNotice })) {
            showPendingQuestifyNotice();
        }
    }, 0);
}

interface NoticeActionState {
    step: NoticeActionStep;
    startedAt: number;
}

function getRemainingSeconds({ startedAt, step }: NoticeActionState, now: number): number {
    const disabledFor = Math.max(0, step.disabledFor ?? 0);

    return Math.max(0, Math.ceil((startedAt + disabledFor * 1000 - now) / 1000));
}

function isNoticeDismissable(notice: OneTimeNotice): boolean {
    return notice.dismissable ?? true;
}

function OneTimeNoticeModal({ notice, ...modalProps }: RenderModalProps & { notice: OneTimeNotice; }): JSX.Element {
    const [actionStates, setActionStates] = useState<NoticeActionState[]>(() => {
        const startedAt = Date.now();

        return notice.actions.map(step => ({ step, startedAt }));
    });

    const [now, setNow] = useState(Date.now);
    const remainingSeconds = actionStates.map(actionState => getRemainingSeconds(actionState, now));
    const isCountingDown = remainingSeconds.some(seconds => seconds > 0);

    useEffect(() => {
        if (!isCountingDown) return;

        const timeout = setTimeout(() => setNow(Date.now()), 250);

        return () => clearTimeout(timeout);
    }, [actionStates, isCountingDown, now]);

    function handleActionClick(actionIndex: number): void {
        const { confirmation } = actionStates[actionIndex].step;

        if (confirmation) {
            const startedAt = Date.now();

            setActionStates(currentStates => currentStates.map((actionState, index) => (
                index === actionIndex
                    ? { step: confirmation, startedAt }
                    : actionState
            )));
            setNow(startedAt);
            return;
        }

        runNoticeAction(notice, notice.actions[actionIndex], modalProps.onClose);
    }

    return (
        <QuestifyModal
            {...modalProps}
            dismissable={isNoticeDismissable(notice)}
            role="alertdialog"
            size="lg"
            title={notice.title}
            actions={actionStates.map(({ step }, actionIndex) => ({
                text: remainingSeconds[actionIndex] > 0
                    ? `${step.text} (${remainingSeconds[actionIndex]})`
                    : step.text,
                variant: step.variant ?? "primary",
                disabled: remainingSeconds[actionIndex] > 0,
                onClick: () => handleActionClick(actionIndex),
            }))}
        >
            {notice.renderBody()}
        </QuestifyModal>
    );
}

export function showPendingQuestifyNotice(): void {
    for (const notice of oneTimeNotices) {
        if (getQuestifySettings().acknowledgedNotices[notice.id]) {
            continue;
        }

        if (!notice.condition()) {
            if (notice.autoAcknowledgeCondition?.()) {
                acknowledgeNotice(notice.id);
            }

            continue;
        }

        const modalOptions: QuestifyModalOptions = {
            dismissable: isNoticeDismissable(notice),
        };

        openModal(modalProps => <OneTimeNoticeModal {...modalProps} notice={notice} />, modalOptions);
        return;
    }
}
