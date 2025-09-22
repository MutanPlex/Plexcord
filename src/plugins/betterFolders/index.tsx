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

import "./style.css";

import { t } from "@api/i18n";
import { definePluginSettings } from "@api/Settings";
import { Devs } from "@utils/constants";
import definePlugin, { OptionType } from "@utils/types";
import { findByPropsLazy, findStoreLazy } from "@webpack";
import { FluxDispatcher } from "@webpack/common";
import { ReactNode } from "react";

import FolderSideBar from "./FolderSideBar";

enum FolderIconDisplay {
    Never,
    Always,
    MoreThanOneFolderExpanded
}

export const ExpandedGuildFolderStore = findStoreLazy("ExpandedGuildFolderStore");
const SortedGuildStore = findStoreLazy("SortedGuildStore");
const FolderUtils = findByPropsLazy("move", "toggleGuildFolderExpand");

let lastGuildId = null as string | null;
let dispatchingFoldersClose = false;

function getGuildFolder(id: string) {
    return SortedGuildStore.getGuildFolders().find(folder => folder.guildIds.includes(id));
}

function closeFolders() {
    for (const id of ExpandedGuildFolderStore.getExpandedFolders())
        FolderUtils.toggleGuildFolderExpand(id);
}

// Nuckyz: Unsure if this should be a general utility or not
function filterTreeWithTargetNode(children: any, predicate: (node: any) => boolean) {
    if (children == null) {
        return false;
    }

    if (!Array.isArray(children)) {
        if (predicate(children)) {
            return true;
        }

        return filterTreeWithTargetNode(children.props?.children, predicate);
    }

    let childIsTargetChild = false;
    for (let i = 0; i < children.length; i++) {
        const shouldKeep = filterTreeWithTargetNode(children[i], predicate);
        if (shouldKeep) {
            childIsTargetChild = true;
            continue;
        }

        children.splice(i--, 1);
    }

    return childIsTargetChild;
}

export const settings = definePluginSettings({
    sidebar: {
        get label() {
            return t("plugin.betterFolders.option.sidebar.label");
        },
        get description() {
            return t("plugin.betterFolders.option.sidebar.description");
        },
        type: OptionType.BOOLEAN,
        restartNeeded: true,
        default: true
    },
    sidebarAnim: {
        get label() {
            return t("plugin.betterFolders.option.sidebarAnim.label");
        },
        get description() {
            return t("plugin.betterFolders.option.sidebarAnim.description");
        },
        type: OptionType.BOOLEAN,
        default: true
    },
    closeAllFolders: {
        get label() {
            return t("plugin.betterFolders.option.closeAllFolders.label");
        },
        get description() {
            return t("plugin.betterFolders.option.closeAllFolders.description");
        },
        type: OptionType.BOOLEAN,
        default: false
    },
    closeAllHomeButton: {
        get label() {
            return t("plugin.betterFolders.option.closeAllHomeButton.label");
        },
        get description() {
            return t("plugin.betterFolders.option.closeAllHomeButton.description");
        },
        type: OptionType.BOOLEAN,
        restartNeeded: true,
        default: false
    },
    closeOthers: {
        get label() {
            return t("plugin.betterFolders.option.closeOthers.label");
        },
        get description() {
            return t("plugin.betterFolders.option.closeOthers.description");
        },
        type: OptionType.BOOLEAN,
        default: false
    },
    closeServerFolder: {
        get label() {
            return t("plugin.betterFolders.option.closeServerFolder.label");
        },
        get description() {
            return t("plugin.betterFolders.option.closeServerFolder.description");
        },
        type: OptionType.BOOLEAN,
        default: false,
    },
    forceOpen: {
        get label() {
            return t("plugin.betterFolders.option.forceOpen.label");
        },
        get description() {
            return t("plugin.betterFolders.option.forceOpen.description");
        },
        type: OptionType.BOOLEAN,
        default: false
    },
    keepIcons: {
        get label() {
            return t("plugin.betterFolders.option.keepIcons.label");
        },
        get description() {
            return t("plugin.betterFolders.option.keepIcons.description");
        },
        type: OptionType.BOOLEAN,
        restartNeeded: true,
        default: false
    },
    showFolderIcon: {
        get label() {
            return t("plugin.betterFolders.option.showFolderIcon.label");
        },
        get description() {
            return t("plugin.betterFolders.option.showFolderIcon.description");
        },
        type: OptionType.SELECT,
        get options() {
            return [
                { label: t("plugin.betterFolders.option.showFolderIcon.never"), value: FolderIconDisplay.Never },
                { label: t("plugin.betterFolders.option.showFolderIcon.always"), value: FolderIconDisplay.Always, default: true },
                { label: t("plugin.betterFolders.option.showFolderIcon.moreThanOne"), value: FolderIconDisplay.MoreThanOneFolderExpanded }
            ];
        },
        restartNeeded: true
    }
});

const IS_BETTER_FOLDERS_VAR = "typeof isBetterFolders!=='undefined'?isBetterFolders:arguments[0]?.isBetterFolders";
const BETTER_FOLDERS_EXPANDED_IDS_VAR = "typeof betterFoldersExpandedIds!=='undefined'?betterFoldersExpandedIds:arguments[0]?.betterFoldersExpandedIds";
const GRID_STYLE_NAME = "pc-betterFolders-sidebar-grid";

export default definePlugin({
    name: "BetterFolders",
    description: "Shows server folders on dedicated sidebar and adds folder related improvements",
    authors: [Devs.juby, Devs.AutumnVN, Devs.Nuckyz],

    settings,

    get displayDescription() {
        return t("plugin.betterFolders.description");
    },

    patches: [
        {
            find: '("guildsnav")',
            predicate: () => settings.store.sidebar,
            replacement: [
                // Create the isBetterFolders and betterFoldersExpandedIds variables in the GuildsBar component
                // Needed because we access this from a non-arrow closure so we can't use arguments[0]
                {
                    match: /let{disableAppDownload:\i=\i\.isPlatformEmbedded,isOverlay:.+?(?=}=\i,)/,
                    replace: "$&,isBetterFolders,betterFoldersExpandedIds"
                },
                // Export the isBetterFolders and betterFoldersExpandedIds variable to the Guild List component
                {
                    match: /,{guildDiscoveryButton:\i,/g,
                    replace: "$&isBetterFolders:arguments[0]?.isBetterFolders,betterFoldersExpandedIds:arguments[0]?.betterFoldersExpandedIds,"
                },
                // Wrap the guild node (guild or folder) component in a div with display: none if it's not an expanded folder or a guild in an expanded folder
                {
                    match: /switch\((\i)\.type\){.+?default:return null}/,
                    replace: `return $self.wrapGuildNodeComponent($1,()=>{$&},${IS_BETTER_FOLDERS_VAR},${BETTER_FOLDERS_EXPANDED_IDS_VAR});`
                },
                // Export the isBetterFolders variable to the folder component
                {
                    match: /switch\(\i\.type\){case \i\.\i\.FOLDER:.+?folderNode:\i,/,
                    replace: `$&isBetterFolders:${IS_BETTER_FOLDERS_VAR},`
                },
                // Make the callback for returning the guild node component depend on isBetterFolders and betterFoldersExpandedIds
                {
                    match: /switch\(\i\.type\).+?,\i,\i\.setNodeRef/,
                    replace: "$&,arguments[0]?.isBetterFolders,arguments[0]?.betterFoldersExpandedIds"
                },
                // If we are rendering the Better Folders sidebar, we filter out everything but the guilds and folders from the Guild List children
                {
                    match: /lastTargetNode:\i\[\i\.length-1\].+?}\)(?::null)?\](?=}\))/,
                    replace: "$&.filter($self.makeGuildsBarGuildListFilter(!!arguments[0]?.isBetterFolders))"
                },
                // If we are rendering the Better Folders sidebar, we filter out everything but the Guild List from the Sidebar children
                {
                    match: /unreadMentionsFixedFooter\].+?\}\)\]/,
                    replace: "$&.filter($self.makeGuildsBarSidebarFilter(!!arguments[0]?.isBetterFolders))"
                }
            ]
        },
        {
            // This is the parent folder component
            find: ".toggleGuildFolderExpand(",
            predicate: () => settings.store.sidebar && settings.store.showFolderIcon !== FolderIconDisplay.Always,
            replacement: [
                {
                    // Modify the expanded state to instead return the list of expanded folders
                    match: /(\],\(\)=>)(\i\.\i)\.isFolderExpanded\(\i\)\)/,
                    replace: (_, rest, ExpandedGuildFolderStore) => `${rest}${ExpandedGuildFolderStore}.getExpandedFolders())`,
                },
                {
                    // Modify the expanded prop to use the boolean if the above patch fails, or check if the folder is expanded from the list if it succeeds
                    // Also export the list of expanded folders to the child folder component if the patch above succeeds, else export undefined
                    match: /(?<=folderNode:(\i),expanded:)\i(?=,)/,
                    replace: (isExpandedOrExpandedIds, folderNote) => ""
                        + `typeof ${isExpandedOrExpandedIds}==="boolean"?${isExpandedOrExpandedIds}:${isExpandedOrExpandedIds}.has(${folderNote}.id),`
                        + `betterFoldersExpandedIds:${isExpandedOrExpandedIds} instanceof Set?${isExpandedOrExpandedIds}:void 0`
                }
            ]
        },
        {
            find: ".FOLDER_ITEM_ANIMATION_DURATION),",
            predicate: () => settings.store.sidebar,
            replacement: [
                // We use arguments[0] to access the isBetterFolders variable in this nested folder component (the parent exports all the props so we don't have to patch it)

                // If we are rendering the normal GuildsBar sidebar, we make Discord think the folder is always collapsed to show better icons (the mini guild icons) and avoid transitions
                {
                    predicate: () => settings.store.keepIcons,
                    match: /(?<=let{folderNode:\i,setNodeRef:\i,.+?expanded:(\i),.+?;)(?=let)/,
                    replace: (_, isExpanded) => `${isExpanded}=!!arguments[0]?.isBetterFolders&&${isExpanded};`
                },
                // Disable expanding and collapsing folders transition in the normal GuildsBar sidebar
                {
                    predicate: () => !settings.store.keepIcons,
                    match: /(?=,\{from:\{height)/,
                    replace: "&&$self.shouldShowTransition(arguments[0])"
                },
                // If we are rendering the normal GuildsBar sidebar, we avoid rendering guilds from folders that are expanded
                {
                    predicate: () => !settings.store.keepIcons,
                    match: /folderGroupBackground.+?,(?=\i\(\(\i,\i,\i\)=>{let{key:.{0,70}"ul")(?<=selected:\i,expanded:(\i),.+?)/,
                    replace: (m, isExpanded) => `${m}$self.shouldRenderContents(arguments[0],${isExpanded})?null:`
                },
                // Decide if we should render the expanded folder background if we are rendering the Better Folders sidebar
                {
                    predicate: () => settings.store.showFolderIcon !== FolderIconDisplay.Always,
                    match: /\.isExpanded\].{0,110}children:\[/,
                    replace: "$&$self.shouldShowFolderIconAndBackground(!!arguments[0]?.isBetterFolders,arguments[0]?.betterFoldersExpandedIds)&&"
                },
                // Decide if we should render the expanded folder icon if we are rendering the Better Folders sidebar
                {
                    predicate: () => settings.store.showFolderIcon !== FolderIconDisplay.Always,
                    match: /(?<=\.folderGroupBackground.*?}\),)(?=\i,)/,
                    replace: "!$self.shouldShowFolderIconAndBackground(!!arguments[0]?.isBetterFolders,arguments[0]?.betterFoldersExpandedIds)?null:"
                }
            ]
        },
        {
            find: "APPLICATION_LIBRARY,render:",
            predicate: () => settings.store.sidebar,
            group: true,
            replacement: [
                {
                    // Render the Better Folders sidebar
                    // Discord has two different places where they render the sidebar.
                    // One is for visual refresh, one is not,
                    // and each has a bunch of conditions &&ed in front of it.
                    // Add the betterFolders sidebar to both, keeping the conditions Discord uses.
                    match: /(?<=[[,])((?:!?\i&&)+)\(.{0,50}({className:\i\.guilds,themeOverride:\i})\)/g,
                    replace: (m, conditions, props) => `${m},${conditions}$self.FolderSideBar(${props})`
                },
                {
                    // Add grid styles to fix aligment with other visual refresh elements
                    match: /(?<=className:)\i\.base(?=,)/,
                    replace: `"${GRID_STYLE_NAME} "+$&`
                }
            ]
        },
        {
            find: "#{intl::DISCODO_DISABLED}",
            predicate: () => settings.store.closeAllHomeButton,
            replacement: {
                // Close all folders when clicking the home button
                match: /(?<=onClick:\(\)=>{)(?=.{0,300}"discodo")/,
                replace: "$self.closeFolders();"
            }
        }
    ],

    flux: {
        CHANNEL_SELECT(data) {
            if (!settings.store.closeAllFolders && !settings.store.forceOpen && !settings.store.closeServerFolder)
                return;

            if (lastGuildId !== data.guildId) {
                lastGuildId = data.guildId;
                const guildFolder = getGuildFolder(data.guildId);

                if (guildFolder?.folderId) {
                    if (settings.store.forceOpen && !ExpandedGuildFolderStore.isFolderExpanded(guildFolder.folderId)) {
                        FolderUtils.toggleGuildFolderExpand(guildFolder.folderId);
                    }
                    if (settings.store.closeServerFolder && ExpandedGuildFolderStore.isFolderExpanded(guildFolder.folderId)) {
                        FolderUtils.toggleGuildFolderExpand(guildFolder.folderId);
                    }
                } else if (settings.store.closeAllFolders) {
                    closeFolders();
                }
            }
        },

        TOGGLE_GUILD_FOLDER_EXPAND(data) {
            if (settings.store.closeOthers && !dispatchingFoldersClose) {
                dispatchingFoldersClose = true;

                FluxDispatcher.wait(() => {
                    const expandedFolders = ExpandedGuildFolderStore.getExpandedFolders();

                    if (expandedFolders.size > 1) {
                        for (const id of expandedFolders) if (id !== data.folderId)
                            FolderUtils.toggleGuildFolderExpand(id);
                    }

                    dispatchingFoldersClose = false;
                });
            }
        },

        LOGOUT() {
            closeFolders();
        }
    },

    FolderSideBar,
    closeFolders,


    wrapGuildNodeComponent(node: any, originalComponent: () => ReactNode, isBetterFolders: boolean, expandedFolderIds?: Set<any>) {
        if (
            !isBetterFolders ||
            node.type === "folder" && expandedFolderIds?.has(node.id) ||
            node.type === "guild" && expandedFolderIds?.has(node.parentId)
        ) {
            return originalComponent();
        }

        return (
            <div style={{ display: "none" }}>
                {originalComponent()}
            </div>
        );
    },

    makeGuildsBarGuildListFilter(isBetterFolders: boolean) {
        return (child: any) => {
            if (!isBetterFolders) {
                return true;
            }

            try {
                return child?.props?.renderTreeNode !== null;
            } catch (e) {
                console.error(e);
                return true;
            }
        };
    },

    makeGuildsBarSidebarFilter(isBetterFolders: boolean) {
        return (child: any) => {
            if (!isBetterFolders) {
                return true;
            }

            try {
                return filterTreeWithTargetNode(child, child => child?.props?.renderTreeNode != null);
            } catch (e) {
                console.error(e);
                return true;
            }
        };
    },

    shouldShowFolderIconAndBackground(isBetterFolders: boolean, expandedFolderIds?: Set<any>) {
        if (!isBetterFolders) {
            return true;
        }

        switch (settings.store.showFolderIcon) {
            case FolderIconDisplay.Never:
                return false;
            case FolderIconDisplay.Always:
                return true;
            case FolderIconDisplay.MoreThanOneFolderExpanded:
                return (expandedFolderIds?.size ?? 0) > 1;
            default:
                return true;
        }
    },

    shouldShowTransition(props: any) {
        // Pending guilds
        if (props?.folderNode?.id === 1) return true;

        return !!props?.isBetterFolders;
    },

    shouldRenderContents(props: any, isExpanded: boolean) {
        // Pending guilds
        if (props?.folderNode?.id === 1) return false;

        return !props?.isBetterFolders && isExpanded;
    }
});
