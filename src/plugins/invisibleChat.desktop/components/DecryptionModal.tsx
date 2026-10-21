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
import { Heading } from "@components/Heading";
import { RenderModalProps } from "@plexcord/discord-types";
import invisibleChatDesktop, { decrypt } from "@plugins/invisibleChat.desktop/index";
import { Modal, openModal, React, TextInput } from "@webpack/common";

export function DecModal(props: RenderModalProps & { message: any; }) {
    const encryptedMessage: string = props?.message?.content;
    const [password, setPassword] = React.useState("password");

    const onDecrypt = () => {
        const toSend = decrypt(encryptedMessage, password, true);
        if (!toSend || !props?.message) return;
        invisibleChatDesktop.buildEmbed(props?.message, toSend);
        props.onClose();
    };

    return (
        <Modal
            {...props}
            size="sm"
            title={t(plugin.invisibleChat.modal.decrypt.title)}
            actions={[
                {
                    text: t(plugin.invisibleChat.modal.decrypt.decrypt),
                    variant: "primary",
                    onClick: onDecrypt
                },
                {
                    text: t(plugin.invisibleChat.modal.decrypt.cancel),
                    variant: "secondary",
                    onClick: props.onClose
                }
            ]}
        >
            <Heading style={{ marginTop: "10px" }}>{t(plugin.invisibleChat.modal.decrypt.with)}</Heading>
            <TextInput defaultValue={encryptedMessage} disabled={true}></TextInput>
            <Heading style={{ marginTop: "10px" }}>{t(plugin.invisibleChat.modal.decrypt.password)}</Heading>
            <TextInput
                style={{ marginBottom: "20px" }}
                onChange={setPassword}
            />
        </Modal>
    );
}

export function buildDecModal(msg: any): any {
    openModal((props: any) => <DecModal {...props} {...msg} />);
}
