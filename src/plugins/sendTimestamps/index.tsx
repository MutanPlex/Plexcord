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

import "./styles.css";

import { ChatBarButton, ChatBarButtonFactory } from "@api/ChatButtons";
import { plugin, t } from "@api/i18n";
import { definePluginSettings } from "@api/Settings";
import { Button } from "@components/Button";
import { InlineCode } from "@components/CodeBlock";
import { Grid } from "@components/Grid";
import { Heading } from "@components/Heading";
import { Paragraph } from "@components/Paragraph";
import { RenderModalProps } from "@plexcord/discord-types";
import { Devs } from "@utils/constants";
import { classNameFactory } from "@utils/css";
import { copyWithToast, getTheme, insertTextIntoChatInputBox, Theme } from "@utils/discord";
import definePlugin, { IconComponent, OptionType } from "@utils/types";
import { Modal, openModal, Parser, useState } from "@webpack/common";

const settings = definePluginSettings({
    replaceMessageContents: {
        label: () => t(plugin.sendTimestamps.option.replaceMessageContents.label),
        description: () => t(plugin.sendTimestamps.option.replaceMessageContents.description),
        type: OptionType.BOOLEAN,
        default: true,
    },
});

function parseTime(time: string) {
    const cleanTime = time.slice(1, -1).replace(/(\d)(AM|PM)$/i, "$1 $2");

    const date = new Date(`${new Date().toDateString()} ${cleanTime}`);
    if (Number.isNaN(date.getTime())) return time;

    // tomorrow can be 23 or 25 hours away across dst changes
    if (Date.now() > date.getTime()) date.setDate(date.getDate() + 1);

    return `<t:${Math.round(date.getTime() / 1000)}:t>`;
}

const Formats = ["R", "t", "T", "d", "s", "S", "D", "f", "F"] as const;
type Format = typeof Formats[number];

const cl = classNameFactory("pc-st-");

function PickerModal(props: RenderModalProps) {
    const [value, setValue] = useState<string>();
    const [format, setFormat] = useState<Format>("f");
    const time = Math.round((new Date(value!).getTime() || Date.now()) / 1000);

    const formatTimestamp = (time: number, format: Format) => `<t:${time}${format && `:${format}`}>`;

    const formatted = formatTimestamp(time, format);

    return (
        <Modal
            {...props}
            title={t(plugin.sendTimestamps.modal.title)}
            actions={[
                {
                    text: t(plugin.sendTimestamps.modal.copy),
                    variant: "secondary",
                    onClick() {
                        copyWithToast(formatted);
                    }
                },
                {
                    text: t(plugin.sendTimestamps.modal.insert),
                    variant: "primary",
                    onClick() {
                        insertTextIntoChatInputBox(formatted + " ");
                        props.onClose();
                    }
                }
            ]}
        >
            <input
                className={cl("date-picker")}
                type="datetime-local"
                value={value}
                onChange={e => setValue(e.currentTarget.value)}
                style={{
                    colorScheme: getTheme() === Theme.Light ? "light" : "dark",
                }}
            />

            <Heading className={cl("format-heading")}>{t(plugin.sendTimestamps.modal.format)}</Heading>
            <Grid columns={3} className={cl("format-grid")}>
                {Formats.map(m =>
                    <Button
                        variant={format === m ? "primary" : "secondary"}
                        onClick={() => setFormat(m)}
                        key={m}
                        className={cl("format-button")}>
                        {Parser.parse(formatTimestamp(time, m))}
                    </Button>
                )}
            </Grid>

            <Heading>
                {t(plugin.sendTimestamps.modal.rawMarkdown)}
                <InlineCode className={cl("raw-code")}>{formatted}</InlineCode>
            </Heading>
        </Modal>
    );
}

const SendTimestampIcon: IconComponent = ({ height = 20, width = 20, className }) => {
    return (
        <svg
            aria-hidden="true"
            role="img"
            width={width}
            height={height}
            className={className}
            viewBox="0 0 24 24"
            style={{ scale: "1.2" }}
        >
            <g fill="none" fillRule="evenodd">
                <path fill="currentColor" d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7v-5z" />
                <rect width="24" height="24" />
            </g>
        </svg>
    );
};

const SendTimestampButton: ChatBarButtonFactory = ({ isAnyChat }) => {
    if (!isAnyChat) return null;

    return (
        <ChatBarButton
            tooltip={t(plugin.sendTimestamps.modal.insertTimestamp)}
            onClick={() => openModal(props => <PickerModal {...props} />)}
            buttonProps={{ "aria-haspopup": "dialog" }}
        >
            <SendTimestampIcon />
        </ChatBarButton>
    );
};

export default definePlugin({
    name: "SendTimestamps",
    description: () => t(plugin.sendTimestamps.description),
    authors: [Devs.Ven, Devs.Tyler, Devs.Grzesiek11],
    tags: ["chat", "utility"],
    settings,

    chatBarButton: {
        icon: SendTimestampIcon,
        render: SendTimestampButton
    },

    onBeforeMessageSend(_, msg) {
        if (settings.store.replaceMessageContents) {
            msg.content = msg.content.replace(/`\d{1,2}:\d{2} ?(?:AM|PM)?`/gi, parseTime);
        }
    },

    settingsAboutComponent() {
        const samples = [
            "12:00",
            "3:51",
            "17:59",
            "24:00",
            "12:00 AM",
            "0:13PM"
        ].map(s => `\`${s}\``);

        return (
            <>
                <Paragraph>
                    {t(plugin.sendTimestamps.sample.paragraph1)}
                </Paragraph>
                <Paragraph>
                    {t(plugin.sendTimestamps.sample.paragraph2)}
                </Paragraph>
                <Paragraph>
                    <Heading className={cl("desc-heading")}>{t(plugin.sendTimestamps.sample.examples)}</Heading>
                    <ul>
                        {samples.map(s => (
                            <li key={s}>
                                <InlineCode className={cl("desc-code")}>{s}</InlineCode> → {Parser.parse(parseTime(s))}
                            </li>
                        ))}
                    </ul>
                </Paragraph>
            </>
        );
    },
});
