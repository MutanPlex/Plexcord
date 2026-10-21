/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2024 Vendicated and contributors
 * Copyright (c) 2026 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { getLanguageName, plugin, t } from "@api/i18n";
import { Message } from "@plexcord/discord-types";
import { languages } from "@plugins/translatePlus/misc/languages";
import { cl, Translation } from "@plugins/translatePlus/misc/types";
import { Parser, useEffect, useState } from "@webpack/common";

import { Icon } from "./icon";
import { translate } from "./translator";

const setters = new Map();

export function Accessory({ message }: { message: Message; }) {
    const [translation, setTranslation] = useState<Translation | undefined>(undefined);

    useEffect(() => {
        if ((message as any).plexcordEmbeddedBy) return;

        setters.set(message.id, setTranslation);

        return () => void setters.delete(message.id);
    }, []);

    if (!translation) return null;

    return (
        <div className={cl("accessory")}>
            <Icon height={16} width={16} />
            {Parser.parse(translation.text)}
            {" "}
            ({t(plugin.translatePlus.text.translatedFrom, { lang: getLanguageName(translation.src, languages[translation.src]) })} - <button onClick={() => setTranslation(undefined)} className={cl("dismiss")}>{t(plugin.translatePlus.text.dismiss)}</button>)
        </div>
    );
}

export async function handleTranslate(message: Message) {
    setters.get(message.id)!(await translate(message.content));
}
