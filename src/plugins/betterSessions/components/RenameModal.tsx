/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2023 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
*/

import { plugin, t } from "@api/i18n";
import { TextButton } from "@components/Button";
import { Heading } from "@components/Heading";
import { RenderModalProps } from "@plexcord/discord-types";
import { SessionInfo } from "@plugins/betterSessions/types";
import { getDefaultName, savedSessionsCache, saveSessionsToDataStore } from "@plugins/betterSessions/utils";
import { Modal, React, TextInput, useState } from "@webpack/common";
import { KeyboardEvent } from "react";

export function RenameModal({ props, session, state }: { props: RenderModalProps, session: SessionInfo["session"], state: [string, React.Dispatch<React.SetStateAction<string>>]; }) {
    const [title, setTitle] = state;
    const [value, setValue] = useState(savedSessionsCache.get(session.id_hash)?.name ?? "");

    function onSaveClick() {
        savedSessionsCache.set(session.id_hash, { name: value, isNew: false });
        if (value !== "") {
            setTitle(`${value}*`);
        } else {
            setTitle(getDefaultName(session.client_info));
        }

        saveSessionsToDataStore();
        props.onClose();
    }

    return (
        <Modal
            {...props}
            title={t(plugin.betterSessions.rename)}
            actions={[
                {
                    text: t(plugin.betterSessions.cancel),
                    variant: "secondary",
                    onClick: () => props.onClose()
                },
                {
                    text: t(plugin.betterSessions.save),
                    variant: "primary",
                    onClick: onSaveClick
                }
            ]}
        >
            <div>
                <Heading tag="h5">{t(plugin.betterSessions.newDevice)}</Heading>
                <TextInput
                    style={{ marginBottom: "10px" }}
                    placeholder={getDefaultName(session.client_info)}
                    value={value}
                    onChange={setValue}
                    onKeyDown={(e: KeyboardEvent<HTMLInputElement>) => {
                        if (e.key === "Enter") {
                            onSaveClick();
                        }
                    }}
                />
                <TextButton
                    style={{
                        paddingLeft: "1px",
                        opacity: 0.6
                    }}
                    onClick={() => setValue("")}
                >
                    {t(plugin.betterSessions.resetName)}
                </TextButton>
            </div>
        </Modal>
    );
}
