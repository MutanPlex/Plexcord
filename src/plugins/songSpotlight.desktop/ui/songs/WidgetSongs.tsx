/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2026 Vendicated and contributors
 * Copyright (c) 2026 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { plugin, t } from "@api/i18n";
import { Button } from "@components/Button";
import { Flex } from "@components/Flex";
import { Text } from "@components/Text";
import { User } from "@plexcord/discord-types";
import { listData } from "@plugins/songSpotlight.desktop/lib/api";
import { useAuthorizationStore } from "@plugins/songSpotlight.desktop/lib/stores/AuthorizationStore";
import { useSongStore } from "@plugins/songSpotlight.desktop/lib/stores/SongStore";
import { cl } from "@plugins/songSpotlight.desktop/lib/utils";
import { Spinner, WidgetClasses } from "@plugins/songSpotlight.desktop/ui/common";
import { openSettingsModal } from "@plugins/songSpotlight.desktop/ui/settings";
import { sid } from "@song-spotlight/api/util";
import { classes } from "@utils/misc";
import { React, ScrollerThin, useEffect, UserStore, useState } from "@webpack/common";
import { JSX } from "react";

import Song from ".";

export interface WidgetSongsProps {
    user: User;
}

export default function WidgetSongs({ user }: WidgetSongsProps) {
    const [failed, setFailed] = useState(false);
    const { isAuthorized } = useAuthorizationStore();
    const { users } = useSongStore();

    const data = users[user.id]?.data;
    useEffect(() => {
        if (isAuthorized() && !data) listData(user.id).catch(() => setFailed(true));
    }, [isAuthorized()]);

    const owned = UserStore.getCurrentUser().id === user.id;

    let full: JSX.Element | undefined;
    if (failed) {
        full = (
            <Text size="md" weight="semibold" className={cl("errored")}>
                {t(plugin.songSpotlight.text.uhOhSongSpotlight)}
            </Text>
        );
    } else if (isAuthorized() && !data) {
        full = <Spinner type={Spinner.Type.SPINNING_CIRCLE} />;
    } else if (!data?.[0]) {
        full = (
            <>
                <Text size="lg" weight="semibold">{t(plugin.songSpotlight.text.looksLikeThereS)}</Text>
                <Text size="md" weight="normal">
                    {owned
                        ? t(plugin.songSpotlight.text.goAddSongs)
                        : t(plugin.songSpotlight.text.tellUserToAddSongs, { name: user.globalName || user.username })}
                </Text>
                {owned && (
                    <Button
                        variant="secondary"
                        style={{ marginTop: "14px", flexShrink: 1 }}
                        onClick={() => openSettingsModal()}
                    >
                        {t(plugin.songSpotlight.text.editSongs)}
                    </Button>
                )}
            </>
        );
    }

    return (
        <ScrollerThin
            fade
            className={classes(WidgetClasses.tabPanelScroller, cl("widget-container"))}
            key="song-spotlight-widget-songs"
        >
            <Flex
                flexDirection="column"
                justifyContent={full && "center"}
                alignItems={full && "center"}
                gap={full ? "8px" : "10px"}
                style={full && { flex: 1, textAlign: "center" }}
            >
                {full
                    || data.map((song, i) => <Song owned={owned} song={song} index={i} big key={sid(song)} />)}
            </Flex>
        </ScrollerThin>
    );
}
