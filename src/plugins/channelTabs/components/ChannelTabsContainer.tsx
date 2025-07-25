/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2024 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { classNameFactory } from "@api/Styles";
import { BasicChannelTabsProps, ChannelTabsProps, createTab, handleChannelSwitch, openedTabs, openStartupTabs, saveTabs, settings, setUpdaterFunction, useGhostTabs } from "@plugins/channelTabs/util";
import { useForceUpdater } from "@utils/react";
import { findComponentByCodeLazy } from "@webpack";
import { Button, ContextMenuApi, Flex, FluxDispatcher, Forms, useCallback, useEffect, useRef, UserStore, useState } from "@webpack/common";

import BookmarkContainer from "./BookmarkContainer";
import ChannelTab, { PreviewTab } from "./ChannelTab";
import { BasicContextMenu } from "./ContextMenus";

type TabSet = Record<string, ChannelTabsProps[]>;

const PlusSmallIcon = findComponentByCodeLazy("0v-5h5a1");

const cl = classNameFactory("pc-channeltabs-");

const isMac = navigator.platform.toLowerCase().startsWith("mac");

export default function ChannelsTabsContainer(props: BasicChannelTabsProps) {
    const [userId, setUserId] = useState("");
    const { showBookmarkBar, widerTabsAndBookmarks } = settings.use(["showBookmarkBar", "widerTabsAndBookmarks"]);
    const GhostTabs = useGhostTabs();

    const _update = useForceUpdater();
    const update = useCallback((save = true) => {
        _update();
        if (save) saveTabs(userId);
    }, [userId]);

    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        setUpdaterFunction(update);
        const onLogin = () => {
            const { id } = UserStore.getCurrentUser();
            if (id === userId && openedTabs.length) return;
            setUserId(id);

            openStartupTabs({ ...props, userId: id }, setUserId);
        };

        FluxDispatcher.subscribe("CONNECTION_OPEN_SUPPLEMENTAL", onLogin);
        return () => {
            FluxDispatcher.unsubscribe("CONNECTION_OPEN_SUPPLEMENTAL", onLogin);
        };
    }, []);

    useEffect(() => {
        if (ref.current) {
            try {
                (Plexcord.Plugins.plugins.ChannelTabs as any).containerHeight = ref.current.clientHeight;
            } catch { }
        }
    }, [userId, showBookmarkBar]);

    useEffect(() => {
        _update();
    }, [widerTabsAndBookmarks]);

    useEffect(() => {
        if (userId) {
            handleChannelSwitch(props);
            saveTabs(userId);
        }
    }, [userId, props.channelId, props.guildId]);

    if (!userId) return null;

    return (
        <div
            className={cl("container")}
            ref={ref}
            onContextMenu={e => ContextMenuApi.openContextMenu(e, () => <BasicContextMenu />)}
            style={{ marginTop: isMac ? "28px" : "0" }}
        >
            <div className={cl("tab-container")}>
                {openedTabs.map((tab, i) =>
                    <ChannelTab {...tab} index={i} key={i} />
                )}

                <button
                    onClick={() => createTab(props, true)}
                    className={cl("button", "new-button", "hoverable")}
                >
                    <PlusSmallIcon />
                </button>

                {GhostTabs}
            </div >
            {showBookmarkBar && <>
                <div className={cl("separator")} />
                <BookmarkContainer {...props} userId={userId} />
            </>}

        </div>
    );
}

export function ChannelTabsPreview(p) {
    const id = UserStore.getCurrentUser()?.id;
    if (!id) return <Forms.FormText>there's no logged in account?????</Forms.FormText>;

    const { setValue }: { setValue: (v: TabSet) => void; } = p;
    const { tabSet }: { tabSet: TabSet; } = settings.use(["tabSet"]);

    const placeholder = [{ guildId: "@me", channelId: undefined as any }];
    const [currentTabs, setCurrentTabs] = useState(tabSet?.[id] ?? placeholder);

    return (
        <>
            <Forms.FormTitle>Startup tabs</Forms.FormTitle>
            <Flex flexDirection="row" style={{ gap: "2px" }}>
                {currentTabs.map(t => <>
                    <PreviewTab {...t} />
                </>)}
            </Flex>
            <Flex flexDirection="row-reverse">
                <Button
                    onClick={() => {
                        setCurrentTabs([...openedTabs]);
                        setValue({ ...tabSet, [id]: [...openedTabs] });
                    }}
                >Set to currently open tabs</Button>
            </Flex>
        </>
    );
}
