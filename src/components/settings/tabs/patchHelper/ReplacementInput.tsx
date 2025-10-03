/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2025 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { t } from "@api/i18n";
import { FormSwitch } from "@components/FormSwitch";
import { Margins } from "@utils/margins";
import { Forms, Parser, TextInput, useEffect, useState } from "@webpack/common";

const RegexGuide = {
    "\\i": "patchHelper.cheatSheet.identifiers",
    "$$": "patchHelper.cheatSheet.dollar",
    "$&": "patchHelper.cheatSheet.entireMatch",
    "$`\u200b": "patchHelper.cheatSheet.beforeMatch",
    "$'": "patchHelper.cheatSheet.afterMatch",
    "$n": "patchHelper.cheatSheet.nthGroup",
    "$self": "patchHelper.cheatSheet.pluginInstance",
} as const;

export function ReplacementInput({ replacement, setReplacement, replacementError }) {
    const [isFunc, setIsFunc] = useState(false);
    const [error, setError] = useState<string>();

    function onChange(v: string) {
        setError(void 0);

        if (isFunc) {
            try {
                const func = (0, eval)(v);
                if (typeof func === "function")
                    setReplacement(() => func);

                else
                    setError(t("patchHelper.error.replacementMustFunction"));
            } catch (e) {
                setReplacement(v);
                setError((e as Error).message);
            }
        } else {
            setReplacement(v);
        }
    }

    useEffect(() => {
        if (isFunc)
            onChange(replacement);
        else
            setError(void 0);
    }, [isFunc]);

    return (
        <>
            {/* FormTitle adds a class if className is not set, so we set it to an empty string to prevent that */}
            <Forms.FormTitle className="">{t("patchHelper.replacement")}</Forms.FormTitle>
            <TextInput
                value={replacement?.toString()}
                onChange={onChange}
                error={error ?? replacementError}
            />
            {!isFunc && (
                <div>
                    <Forms.FormTitle className={Margins.top8}>{t("patchHelper.cheatSheet.title")}</Forms.FormTitle>

                    {Object.entries(RegexGuide).map(([placeholder, desc]) => (
                        <Forms.FormText key={placeholder}>
                            {Parser.parse("`" + placeholder + "`")}: {t(desc)}
                        </Forms.FormText>
                    ))}
                </div>
            )}

            <FormSwitch
                className={Margins.top16}
                value={isFunc}
                onChange={setIsFunc}
                title={t("patchHelper.replacementEval.label")}
                description={t("patchHelper.replacementEval.description")}
                hideBorder
            />
        </>
    );
}
