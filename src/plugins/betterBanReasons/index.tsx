/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2024 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import "./styles.css";

import { plugin, t } from "@api/i18n";
import { definePluginSettings } from "@api/Settings";
import { Button } from "@components/Button";
import { Heading } from "@components/Heading";
import { DeleteIcon, PlusIcon } from "@components/Icons";
import { Devs, PcDevs } from "@utils/constants";
import { classNameFactory } from "@utils/css";
import definePlugin, { OptionType } from "@utils/types";
import { TextInput } from "@webpack/common";

const cl = classNameFactory("pc-bbr-");

function ReasonsComponent() {
    const { reasons } = settings.store;

    return (
        <section>
            <Heading>{t(plugin.betterBanReasons.title)}</Heading>
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
                        placeholder={t(plugin.betterBanReasons.placeholder)}
                    />
                    <Button
                        className={cl("remove-button")}
                        onClick={() => {
                            reasons.splice(i, 1);
                            settings.store.reasons = reasons;
                        }}
                        variant="secondary"
                        size="min"
                    >
                        <DeleteIcon />
                    </Button>
                </div>
            ))}
            <div className={cl("reason-wrapper")}>
                <Button onClick={() => settings.store.reasons.push("")} className={cl("add-button")} size="medium" variant="secondary">
                    <PlusIcon /> {t(plugin.betterBanReasons.add)}
                </Button>
            </div>
        </section>
    );
}

const settings = definePluginSettings({
    reasons: {
        label: () => t(plugin.betterBanReasons.option.reasons.label),
        description: () => t(plugin.betterBanReasons.option.reasons.description),
        type: OptionType.COMPONENT,
        default: [] as string[],
        component: ReasonsComponent,
    },
    isTextInputDefault: {
        label: () => t(plugin.betterBanReasons.option.isTextInputDefault.label),
        description: () => t(plugin.betterBanReasons.option.isTextInputDefault.description),
        type: OptionType.BOOLEAN,
    }
});

export default definePlugin({
    name: "BetterBanReasons",
    description: () => t(plugin.betterBanReasons.description),
    authors: [Devs.Inbestigator, PcDevs.MutanPlex],

    patches: [
        {
            find: "#{intl::BAN_REASON_OPTION_SPAM_ACCOUNT}",
            replacement: [{
                match: /(\[\{name:\i\.\i\.\i\(\i\.\i\.\i\),.+?"other"\}\])/,
                replace: "$self.getReasons($1)"
            },
            {
                match: /useState\(null\)(?=.{0,300}targetUserId:)/,
                replace: "useState($self.getDefaultState())"
            }]
        }
    ],
    getReasons(defaults) {
        const storedReasons = settings.store.reasons.filter((r: string) => r.trim());
        const reasons: string[] = storedReasons.length
            ? storedReasons
            : [];
        return [
            ...reasons.map(s => ({ name: s, value: s })),
            ...defaults
        ];
    },
    getDefaultState: () => settings.store.isTextInputDefault ? 1 : 0,
    settings,
});
