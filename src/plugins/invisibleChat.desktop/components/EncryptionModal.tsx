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

import { t } from "@api/i18n";
import { Button } from "@components/Button";
import { FormSwitch } from "@components/FormSwitch";
import { Heading } from "@components/Heading";
import { encrypt } from "@plugins/invisibleChat.desktop/index";
import { insertTextIntoChatInputBox } from "@utils/discord";
import {
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalProps,
    ModalRoot,
    openModal,
} from "@utils/modal";
import { React, TextInput } from "@webpack/common";

function EncModal(props: ModalProps) {
    const [secret, setSecret] = React.useState("");
    const [cover, setCover] = React.useState("");
    const [password, setPassword] = React.useState("password");
    const [noCover, setNoCover] = React.useState(false);

    const isValid = secret && (noCover || (cover && cover.trim().split(" ").length > 1));

    return (
        <ModalRoot {...props}>
            <ModalHeader>
                <Heading>{t("plugin.invisibleChat.modal.encrypt.title")}</Heading>
            </ModalHeader>

            <ModalContent>
                <Heading style={{ marginTop: "10px" }}>{t("plugin.invisibleChat.modal.encrypt.secret")}</Heading>
                <TextInput
                    onChange={(e: string) => {
                        setSecret(e);
                    }}
                />
                <Heading style={{ marginTop: "10px" }}>{t("plugin.invisibleChat.modal.encrypt.cover")}</Heading>
                <TextInput
                    disabled={noCover}
                    onChange={(e: string) => {
                        setCover(e);
                    }}
                />
                <Heading style={{ marginTop: "10px" }}>{t("plugin.invisibleChat.modal.encrypt.password")}</Heading>
                <TextInput
                    style={{ marginBottom: "20px" }}
                    defaultValue={"password"}
                    onChange={(e: string) => {
                        setPassword(e);
                    }}
                />
                <FormSwitch
                    value={noCover}
                    onChange={(e: boolean) => {
                        setNoCover(e);
                    }}
                    title={t("plugin.invisibleChat.modal.encrypt.dontUseCover")}
                />

            </ModalContent>

            <ModalFooter>
                <Button
                    variant="positive"
                    disabled={!isValid}
                    onClick={() => {
                        if (!isValid) return;
                        const encrypted = encrypt(secret, password, noCover ? "d d" : cover);
                        const toSend = noCover ? encrypted.replaceAll("d", "") : encrypted;
                        if (!toSend) return;

                        insertTextIntoChatInputBox(toSend);

                        props.onClose();
                    }}
                >
                    {t("plugin.invisibleChat.modal.encrypt.send")}
                </Button>
                <Button
                    variant="secondary"
                    style={{ left: 15, position: "absolute" }}
                    onClick={() => {
                        props.onClose();
                    }}
                >
                    {t("plugin.invisibleChat.modal.encrypt.cancel")}
                </Button>
            </ModalFooter>
        </ModalRoot>
    );
}

export function buildEncModal(): any {
    openModal(props => <EncModal {...props} />);
}
