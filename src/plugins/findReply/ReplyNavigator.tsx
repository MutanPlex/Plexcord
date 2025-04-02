/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2024 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import ErrorBoundary from "@components/ErrorBoundary";
import { ModalCloseButton } from "@utils/modal";
import { findByPropsLazy } from "@webpack";
import { Paginator, React, useRef, useState } from "@webpack/common";
import { Message } from "discord-types/general";
import { MutableRefObject } from "react";

import { jumper } from "./index";

const containerStyles = findByPropsLazy("containerBottom", "containerTop");

export default function ReplyNavigator({ replies }: { replies: Message[]; }) {
    const [page, setPage] = useState(1);
    const [visible, setVisible] = useState(true);
    const ref: MutableRefObject<HTMLDivElement | null> = useRef(null);
    React.useEffect(() => {
        setPage(1);
        setVisible(true);
    }, [replies]);
    React.useEffect(() => {
        // https://stackoverflow.com/a/42234988
        function onMouseDown(event: MouseEvent) {
            if (
                ref.current &&
                event.target instanceof Element &&
                !ref.current.contains(event.target)
            ) {
                setVisible(false);
            }
        }

        document.addEventListener("mousedown", onMouseDown);
        return () => {
            document.removeEventListener("mousedown", onMouseDown);
        };
    }, [ref]);
    return (
        <ErrorBoundary>
            <div
                ref={ref}
                className={
                    containerStyles.containerBottom + " pc-findreply-div"
                }
                style={{
                    display: visible ? "flex" : "none",
                    backgroundColor: "var(--background-primary)",
                    borderRadius: "3vmin",
                    zIndex: 0,
                    flexDirection: "row",
                    alignItems: "center",
                    paddingLeft: "1em",
                    paddingRight: "1em",
                }}
            >
                <div className="pc-findreply-content">
                    <Paginator
                        currentPage={page}
                        maxVisiblePages={5}
                        pageSize={1}
                        totalCount={replies.length}
                        onPageChange={processPageChange}
                    />
                </div>
                <ModalCloseButton
                    className={"pc-findreply-close"}
                    onClick={() => setVisible(false)}
                />
            </div>
        </ErrorBoundary>
    );

    function processPageChange(page: number) {
        setPage(page);
        jumper.jumpToMessage({
            channelId: replies[page - 1].channel_id,
            messageId: replies[page - 1].id,
            flash: true,
            jumpType: "INSTANT",
        });
    }
}
