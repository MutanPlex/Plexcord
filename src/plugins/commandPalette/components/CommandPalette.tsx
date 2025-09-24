/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2025 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import "./style.css";

import { t } from "@api/i18n";
import { classNameFactory } from "@api/Styles";
import { actions } from "@plugins/commandPalette/commands";
import { Logger } from "@utils/Logger";
import { closeAllModals, ModalRoot, ModalSize, openModal } from "@utils/modal";
import { React, TextInput, useEffect, useState } from "@webpack/common";

import { settings } from "..";

const logger = new Logger("CommandPalette", "#e5c890");

export function CommandPalette({ modalProps }) {
    const cl = classNameFactory("pc-command-palette-");
    const [focusedIndex, setFocusedIndex] = useState<number | null>(null);
    const [startIndex, setStartIndex] = useState(0);

    const allowMouse = settings.store.allowMouseControl;

    const sortedActions = actions.slice().sort((a, b) => {
        const labelA = typeof a.label === "function" ? a.label() : a.label;
        const labelB = typeof b.label === "function" ? b.label() : b.label;
        return labelA.localeCompare(labelB);
    });

    const [queryEh, setQuery] = useState("");

    const filteredActions = sortedActions.filter(
        action => (typeof action.label === "function" ? action.label() : action.label).toLowerCase().includes(queryEh.toLowerCase())
    );

    const visibleActions = filteredActions.slice(startIndex, startIndex + 20);

    const totalActions = filteredActions.length;

    const handleWheel = (e: React.WheelEvent) => {
        if (allowMouse && filteredActions.length > 20) {
            if (e.deltaY > 0) {
                setStartIndex(prev => Math.min(prev + 2, filteredActions.length - 20));
            } else {
                setStartIndex(prev => Math.max(prev - 2, 0));
            }
        }
    };

    const handleButtonClick = (actionId: string, index: number) => {
        const selectedAction = filteredActions.find(action => action.id === actionId);

        if (selectedAction) {
            logger.log(`${selectedAction.id}'s action was triggered.`);
        }

        closeAllModals();

        selectedAction?.callback?.();
        setFocusedIndex(index);
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        const currentIndex = focusedIndex !== null ? focusedIndex : -1;
        let nextIndex;

        switch (e.key) {
            case "ArrowUp":
                e.preventDefault();
                nextIndex = currentIndex > 0 ? currentIndex - 1 : visibleActions.length - 1;
                setFocusedIndex(nextIndex);

                if (currentIndex === 0 && totalActions > 20) {
                    setStartIndex(prev => Math.max(prev - 1, 0));
                    setFocusedIndex(0);
                }

                break;
            case "ArrowDown":
                e.preventDefault();
                nextIndex = currentIndex < visibleActions.length - 1 ? currentIndex + 1 : 0;
                setFocusedIndex(nextIndex);

                if (currentIndex === visibleActions.length - 1 && totalActions > 20) {
                    setStartIndex(prev => Math.min(prev + 1, filteredActions.length - 20));
                    setFocusedIndex(19);
                }
                break;
            case "Enter":
                if (currentIndex !== null && currentIndex >= 0 && currentIndex < visibleActions.length) {
                    handleButtonClick(visibleActions[currentIndex].id, currentIndex);
                }
                break;
            default:
                break;
        }
    };

    useEffect(() => {
        setFocusedIndex(0);
        setStartIndex(0);
    }, [queryEh]);

    return (
        <ModalRoot className={cl("root")} {...modalProps} size={ModalSize.MEDIUM} onKeyDown={handleKeyDown} onWheel={handleWheel}>
            <div>
                <TextInput
                    value={queryEh}
                    onChange={e => setQuery(e)}
                    style={{ width: "100%", borderBottomLeftRadius: "0", borderBottomRightRadius: "0", paddingLeft: "0.9rem" }}
                    placeholder={t("plugin.commandPalette.search")}
                />
                <div className={cl("option-container")}>
                    {visibleActions.map((action, index) => (
                        <button
                            key={action.id}
                            className={cl("option", { "key-hover": index === focusedIndex })}
                            onClick={() => { if (allowMouse) handleButtonClick(action.id, index); }}
                            onMouseMove={() => { if (allowMouse) setFocusedIndex(index); }}
                            style={allowMouse ? { cursor: "pointer" } : { cursor: "default" }}
                        >
                            {typeof action.label === "function" ? action.label() : action.label}
                            {action.registrar && <span className={cl("registrar")}>{action.registrar}</span>}
                        </button>
                    ))}
                </div>
            </div>
        </ModalRoot>
    );
}

export const openCommandPalette = () => openModal(modalProps => <CommandPalette modalProps={modalProps} />);
