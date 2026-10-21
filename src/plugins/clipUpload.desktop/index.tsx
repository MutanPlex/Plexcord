/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2026 Vendicated and contributors
 * Copyright (c) 2026 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import type { NavContextMenuPatchCallback } from "@api/ContextMenu";
import { plugin, t } from "@api/i18n";
import ErrorBoundary from "@components/ErrorBoundary";
import { CloudUploadIcon } from "@components/Icons";
import { PcDevs } from "@utils/constants";
import definePlugin from "@utils/types";
import { findComponentByCodeLazy } from "@webpack";
import { Menu } from "@webpack/common";

import { abortActiveClipUploads, type ClipMetadata } from "./upload";
import { openUploadClipFileModal } from "./UploadClipFileModal";

const ActionBarIcon = findComponentByCodeLazy("Children.map", "isValidElement", "dangerous:");

interface ClipUploadActionProps {
    channelId: string;
    clip?: ClipMetadata | null;
}

const ctxMenuPatch: NavContextMenuPatchCallback = (children, props) => {
    if (!props.channel) return;

    children.push(
        <Menu.MenuItem
            id="pc-upload-clip-file"
            iconLeft={CloudUploadIcon}
            label={t(plugin.clipUpload.text.uploadClipFile)}
            action={() => openUploadClipFileModal(props.channel.id)}
        />
    );
};

export default definePlugin({
    name: "ClipUpload",
    description: () => t(plugin.clipUpload.description),
    authors: [PcDevs.qdnx, PcDevs.BachLe2000, PcDevs.pandaptable, PcDevs.Nyro, PcDevs.Jahsohsani, PcDevs.MutanPlex],
    tags: ["media", "utility"],
    patches: [
        {
            find: '"ChannelAttachmentUpload"',
            replacement: {
                match: /(?<=description:\i,spoiler:\i.{0,160},\{children:\[)/,
                replace: "$&$self.UploadClipFileButton(arguments[0]),"
            }
        }
    ],

    contextMenus: {
        "channel-attach": ctxMenuPatch
    },

    stop: abortActiveClipUploads,

    UploadClipFileButton: ErrorBoundary.wrap(({ channelId, clip }: ClipUploadActionProps) => {
        if (!clip) return null;

        return (
            <ActionBarIcon
                tooltip={t(plugin.clipUpload.text.uploadClipFile2)}
                onClick={() => openUploadClipFileModal(channelId, clip)}
            >
                <CloudUploadIcon width={20} height={20} />
            </ActionBarIcon>
        );
    }, { noop: true })
});
