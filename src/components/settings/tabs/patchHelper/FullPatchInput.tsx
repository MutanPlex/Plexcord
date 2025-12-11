/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2025 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { patchHelper, t } from "@api/i18n";
import { Paragraph } from "@components/Paragraph";
import { Patch, ReplaceFn } from "@utils/types";
import { TextArea, useEffect, useRef, useState } from "@webpack/common";

export interface FullPatchInputProps {
    setFind(v: string): void;
    setParsedFind(v: string | RegExp): void;
    setMatch(v: string): void;
    setReplacement(v: string | ReplaceFn): void;
}

export function FullPatchInput({ setFind, setParsedFind, setMatch, setReplacement }: FullPatchInputProps) {
    const [patch, setPatch] = useState<string>("");
    const [error, setError] = useState<string>("");

    const textAreaRef = useRef<HTMLTextAreaElement>(null);

    function update() {
        if (patch === "") {
            setError("");

            setFind("");
            setParsedFind("");
            setMatch("");
            setReplacement("");
            return;
        }

        try {
            let { find, replacement } = (0, eval)(`([${patch}][0])`) as Patch;

            if (!find) throw new Error(t(patchHelper.error.noFind));
            if (!replacement) throw new Error(t(patchHelper.error.noReplacement));

            if (replacement instanceof Array) {
                if (replacement.length === 0) throw new Error(t(patchHelper.error.invalidReplacement));
                // Only test the first replacement
                replacement = replacement[0];
            }

            if (!replacement.match) throw new Error(t(patchHelper.error.replacementMatch));
            if (replacement.replace == null) throw new Error(t(patchHelper.error.replacementReplace));

            setFind(find instanceof RegExp ? `/${find.source}/` : find);
            setParsedFind(find);
            setMatch(replacement.match instanceof RegExp ? replacement.match.source : replacement.match);
            setReplacement(replacement.replace);
            setError("");
        } catch (e) {
            setError((e as Error).message);
        }
    }

    useEffect(() => {
        const { current: textArea } = textAreaRef;
        if (textArea) {
            textArea.style.height = "auto";
            textArea.style.height = `${textArea.scrollHeight}px`;
        }
    }, [patch]);

    return (
        <>
            <TextArea
                inputRef={textAreaRef}
                value={patch}
                onChange={setPatch}
                onBlur={update}
            />
            {error !== "" && <Paragraph style={{ color: "var(--text-feedback-critical, var(--text-danger))" }}>{error}</Paragraph>}
        </>
    );
}
