/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2024 sadan
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { t } from "@api/i18n";
import { Devs } from "@utils/constants";
import definePlugin from "@utils/types";

import { makeContextItem } from "./components";
import { folderIconsData, settings } from "./settings";
import { folderProp, int2rgba } from "./util";

export default definePlugin({
    name: "CustomFolderIcons",
    description: "Customize folder icons with any png",
    authors: [Devs.sadan],
    settings,
    get displayDescription() {
        return t("plugin.customFolderIcons.description");
    },
    patches: [
        {
            find: ".folderButtonInner",
            replacement: {
                match: /(\(0,\i\.jsx\)\(\i,\{folderNode:(\i),hovered:\i,sorting:\i\}\))/,
                replace: "($self.shouldReplace({folderNode:$2})?$self.replace({folderNode:$2}):$1)"
            }
        },
    ],
    contextMenus: {
        "guild-context": (menuItems, props: folderProp) => {
            if (!("folderId" in props)) return;
            menuItems.push(makeContextItem(props));
        }
    },
    shouldReplace(props: any): boolean {
        return !!((settings.store.folderIcons as folderIconsData)?.[props.folderNode.id]?.url);
    },
    replace(props: any) {
        const folderSettings = (settings.store.folderIcons as folderIconsData);
        if (folderSettings && folderSettings[props.folderNode.id]) {
            const data = folderSettings[props.folderNode.id];
            return (
                <div
                    style={{
                        backgroundColor: int2rgba(props.folderNode.color, +settings.store.solidIcon || .4),
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        width: "100%",
                        height: "100%"
                    }}
                >
                    <img alt="" src={data!.url} width={`${data!.size ?? 100}%`} height={`${data!.size ?? 100}%`}
                    />
                </div>
            );
        }
    }
});
