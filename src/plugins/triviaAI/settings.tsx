/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2026 Vendicated and contributors
 * Copyright (c) 2026 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { csp, plugin, t } from "@api/i18n";
import { definePluginSettings } from "@api/Settings";
import { Button } from "@components/Button";
import { Notice } from "@components/Notice";
import { useCspPermission } from "@utils/csp";
import { OptionType } from "@utils/types";

function EndpointNotice() {
    const { endpoint } = settings.use(["endpoint"]);
    const [isAllowed, allow] = useCspPermission(endpoint, ["connect-src"], "TriviaAI");
    if (isAllowed) return null;

    return (
        <Notice variant="warning" action={<Button size="small" variant="secondary" onClick={allow}>{t(csp.notice.allowHost)}</Button>}>
            {t(csp.notice.blocked, { host: URL.parse(endpoint)?.host })}
        </Notice>
    );
}

export const settings = definePluginSettings({
    apiKey: {
        label: () => t(plugin.triviaAI.option.apiKey.label),
        type: OptionType.STRING,
        description: () => t(plugin.triviaAI.option.apiKey.description),
        default: "",
        placeholder: t(plugin.triviaAI.text.enterApiKeyHere),
        componentProps: {
            type: "password"
        }
    },
    model: {
        label: () => t(plugin.triviaAI.option.model.label),
        type: OptionType.STRING,
        description: () => t(plugin.triviaAI.option.model.description),
        default: "google/gemini-3-flash-preview",
        placeholder: t(plugin.triviaAI.option.model.placeholder)
    },
    systemPrompt: {
        label: () => t(plugin.triviaAI.option.systemPrompt.label),
        type: OptionType.STRING,
        description: () => t(plugin.triviaAI.option.systemPrompt.description),
        default: "You are a helpful assistant who answers questions for the user in a concise and short way while using the least amount of words and punctuation.\nCurrent user: {current_user}\nCurrent time: {current_time}",
        placeholder: t(plugin.triviaAI.text.enterSystemPrompt),
        multiline: true
    },
    maxTokens: {
        label: () => t(plugin.triviaAI.option.maxTokens.label),
        type: OptionType.NUMBER,
        description: () => t(plugin.triviaAI.option.maxTokens.description),
        default: 500
    },
    endpoint: {
        label: () => t(plugin.triviaAI.option.endpoint.label),
        type: OptionType.STRING,
        description: () => t(plugin.triviaAI.option.endpoint.description),
        default: "https://openrouter.ai/api/v1/chat/completions",
        placeholder: t(plugin.triviaAI.text.enterYourOpenaiCompatible)
    },
    endpointPermission: {
        type: OptionType.COMPONENT,
        component: () => <EndpointNotice />
    },
    context: {
        label: () => t(plugin.triviaAI.option.context.label),
        type: OptionType.NUMBER,
        description: () => t(plugin.triviaAI.option.context.description),
        default: 0
    },
    passMessageAuthorName: {
        label: () => t(plugin.triviaAI.option.passMessageAuthorName.label),
        type: OptionType.BOOLEAN,
        description: () => t(plugin.triviaAI.option.passMessageAuthorName.description),
        default: true
    },
    treatSelfAsAssistant: {
        label: () => t(plugin.triviaAI.option.treatSelfAsAssistant.label),
        type: OptionType.BOOLEAN,
        description: () => t(plugin.triviaAI.option.treatSelfAsAssistant.description),
        default: false
    },
    mode: {
        label: () => t(plugin.triviaAI.option.mode.label),
        type: OptionType.SELECT,
        description: () => t(plugin.triviaAI.option.mode.description),
        options: [
            { label: () => t(plugin.triviaAI.option.mode.autoreply), value: "autoreply" },
            { label: () => t(plugin.triviaAI.option.mode.chatbar), value: "chatbar", default: true },
            { label: () => t(plugin.triviaAI.option.mode.bot), value: "bot" }
        ]
    },
    supportImages: {
        label: () => t(plugin.triviaAI.option.supportImages.label),
        type: OptionType.BOOLEAN,
        description: () => t(plugin.triviaAI.option.supportImages.description),
        default: true
    },
    sendImagesAsBase64: {
        label: () => t(plugin.triviaAI.option.sendImagesAsBase64.label),
        type: OptionType.BOOLEAN,
        description: () => t(plugin.triviaAI.option.sendImagesAsBase64.description),
        default: false
    }
});
