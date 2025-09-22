/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2024 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import "./styles.css";

import { t } from "@api/i18n";
import { definePluginSettings } from "@api/Settings";
import { classNameFactory } from "@api/Styles";
import { DeleteIcon, PlusIcon } from "@components/Icons";
import { Devs, PcDevs } from "@utils/constants";
import { getIntlMessage } from "@utils/discord";
import definePlugin, { OptionType } from "@utils/types";
import { Button, Forms, TextInput } from "@webpack/common";

const cl = classNameFactory("pc-bbr-");

function ReasonsComponent() {
    const { reasons } = settings.store;

    return (
        <Forms.FormSection title={t("plugin.betterBanReasons.title")}>
            {reasons.map((r, i) => (
                <div
                    key={i}
                    className={cl("reason-wrapper")}
                >
                    <TextInput
                        value={r}
                        onChange={v => {
                            reasons[i] = v;
                            settings.store.reasons = reasons;
                        }}
                        placeholder={t("plugin.betterBanReasons.placeholder")}
                    />
                    <Button
                        className={cl("remove-button")}
                        color={Button.Colors.TRANSPARENT}
                        onClick={() => {
                            reasons.splice(i, 1);
                            settings.store.reasons = reasons;
                        }}
                        look={Button.Looks.BLANK}
                        size={Button.Sizes.MIN}
                    >
                        <DeleteIcon />
                    </Button>
                </div>
            ))}
            <div className={cl("reason-wrapper")}>
                <Button onClick={() => settings.store.reasons.push("")} className={cl("add-button")} size={Button.Sizes.LARGE} color={Button.Colors.TRANSPARENT}>
                    <PlusIcon /> {t("plugin.betterBanReasons.add")}
                </Button>
            </div>
        </Forms.FormSection>
    );
}

const settings = definePluginSettings({
    reasons: {
        get label() {
            return t("plugin.betterBanReasons.option.reasons.label");
        },
        get description() {
            return t("plugin.betterBanReasons.option.reasons.description");
        },
        type: OptionType.COMPONENT,
        default: [] as string[],
        component: ReasonsComponent,
    },
    isTextInputDefault: {
        get label() {
            return t("plugin.betterBanReasons.option.isTextInputDefault.label");
        },
        get description() {
            return t("plugin.betterBanReasons.option.isTextInputDefault.description");
        },
        type: OptionType.BOOLEAN,
    }
});

export default definePlugin({
    name: "BetterBanReasons",
    description: "Create custom reasons to use in the Discord ban modal, and/or show a text input by default instead of the options.",
    authors: [Devs.Inbestigator, PcDevs.MutanPlex],

    get displayDescription() {
        return t("plugin.betterBanReasons.description");
    },

    patches: [
        {
            find: "#{intl::BAN_REASON_OPTION_SPAM_ACCOUNT}",
            replacement: [{
                match: /\[(\{name:\i\.\i\.\i\(\i\.\i\.\i\),value:(\i\.\i\.\i\(\i\.\i\.\i\)|"other")\},?)+\]/,
                replace: "$self.getReasons()"
            },
            {
                match: /useState\(null\)(?=.{0,300}targetUserId:)/,
                replace: "useState($self.getDefaultState())"
            }]
        }
    ],
    getReasons() {
        const storedReasons = settings.store.reasons.filter((r: string) => r.trim());
        const reasons: string[] = storedReasons.length
            ? storedReasons
            : [
                getIntlMessage("BAN_REASON_OPTION_SPAM_ACCOUNT"),
                getIntlMessage("BAN_REASON_OPTION_HACKED_ACCOUNT"),
                getIntlMessage("BAN_REASON_OPTION_BREAKING_RULES"),
            ];
        return reasons.map(s => ({ name: s, value: s }));
    },
    getDefaultState: () => settings.store.isTextInputDefault ? 1 : 0,
    settings,
});
