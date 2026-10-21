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
import { Select, TextInput, useState } from "@webpack/common";

const cl = classNameFactory("pc-bbr-");

interface BanReason {
    text: string;
    deleteSeconds?: number;
}

const getDeleteDurationOptions = () => [
    { label: t(plugin.betterBanReasons.duration.discordDefault), value: null },
    { label: t(plugin.betterBanReasons.duration.none), value: 0 },
    { label: t(plugin.betterBanReasons.duration.hour1), value: 3600 },
    { label: t(plugin.betterBanReasons.duration.hours6), value: 21600 },
    { label: t(plugin.betterBanReasons.duration.hours12), value: 43200 },
    { label: t(plugin.betterBanReasons.duration.hours24), value: 86400 },
    { label: t(plugin.betterBanReasons.duration.days3), value: 259200 },
    { label: t(plugin.betterBanReasons.duration.days7), value: 604800 },
];

function normalizeReason(r: BanReason | string): BanReason {
    return typeof r === "string" ? { text: r } : r;
}

function getStoredReasons(): BanReason[] {
    return (settings.store.reasons as (BanReason | string)[]).map(normalizeReason);
}

function ReasonsComponent() {
    const [reasons, setReasons] = useState<BanReason[]>(getStoredReasons);

    const update = (next: BanReason[]) => {
        setReasons(next);
        settings.store.reasons = next;
    };

    return (
        <section>
            <Heading>{t(plugin.betterBanReasons.title)}</Heading>
            {reasons.map((r, i) => (
                <div key={i} className={cl("reason-wrapper")}>
                    <TextInput
                        value={r.text}
                        onChange={v => update(reasons.map((x, j) => j === i ? { ...x, text: v } : x))}
                        placeholder={t(plugin.betterBanReasons.placeholder)}
                    />
                    <Button
                        className={cl("remove-button")}
                        onClick={() => update(reasons.filter((_, j) => j !== i))}
                        variant="secondary"
                        size="min"
                    >
                        <DeleteIcon />
                    </Button>
                    <div className={cl("duration-row")}>
                        <span className="pc-text-base pc-text-sm pc-text-normal pc-text-defaultColor pc-plugins-setting-description">{t(plugin.betterBanReasons.text.autoDeleteDuration)}</span>
                        <Select
                            options={getDeleteDurationOptions()}
                            select={v => update(reasons.map((x, j) => j === i ? { ...x, deleteSeconds: v === null ? undefined : v } : x))}
                            isSelected={v => (v ?? null) === (r.deleteSeconds ?? null)}
                            serialize={v => v == null ? "default" : String(v)}
                        />
                    </div>
                </div>
            ))}
            <div className={cl("reason-wrapper")}>
                <Button
                    onClick={() => update([...reasons, { text: "" }])}
                    className={cl("add-button")}
                    size="medium"
                    variant="secondary"
                >
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
        default: [] as BanReason[],
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
    authors: [Devs.Inbestigator, PcDevs.MutanPlex, PcDevs.yonn2222],
    tags: ["servers", "utility"],
    durationSetter: null as ((v: number) => void) | null,

    patches: [
        {
            find: "#{intl::BAN_REASON_OPTION_SPAM_ACCOUNT}",
            replacement: [
                {
                    match: /(\[\{name:\i\.\i\.\i\(\i\.\i\.\i\),.+?"other"\}\])/,
                    replace: "$self.getReasons($1)"
                },
                {
                    match: /useState\(null\)(?=.{0,300}targetUserId:)/,
                    replace: "useState($self.getDefaultState())"
                },
                {
                    match: /(\[\i,\i\])=(\i)\.useState\((null!=\i\?\i:\i)\)/,
                    replace: "$1=$self.captureDeleteState($2.useState,$3)"
                },
                {
                    match: /\i=\i\.useCallback\((\i)=>\{.{0,10},\i\(null\)(?=\},\[\]\))/,
                    replace: "$&,$self.onReasonSelect($1)"
                }
            ]
        }
    ],
    getReasons(defaults: { name: string; value: string; }[]) {
        const stored = getStoredReasons().filter(r => r.text.trim());
        return [
            ...stored.map(r => ({ name: r.text, value: r.text })),
            ...defaults,
        ];
    },
    getDefaultState: () => settings.store.isTextInputDefault ? 1 : 0,

    captureDeleteState(hook: (initial: number) => [number, (v: number) => void], initial: number) {
        const result = hook(initial);
        this.durationSetter = result[1];
        return result;
    },

    onReasonSelect(value: string) {
        const reason = getStoredReasons().find(r => r.text === value);
        if (reason?.deleteSeconds !== undefined) {
            this.durationSetter?.(reason.deleteSeconds);
        }
    },

    settings,
});
