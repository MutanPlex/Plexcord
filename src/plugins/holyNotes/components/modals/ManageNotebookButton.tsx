/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2024 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { openModal } from "@utils/modal";
import { Button, React } from "@webpack/common";

import NotebookCreateModal from "./NotebookCreateModal";
import NotebookDeleteModal from "./NotebookDeleteModal";

export default ({ notebook, setNotebook }: { notebook: string, setNotebook: (notebook: string) => void; }) => {
    const isNotMain = notebook !== "Main";

    return (
        <Button
            color={isNotMain ? Button.Colors.RED : Button.Colors.GREEN}
            onClick={
                isNotMain
                    ? () => openModal(props => <NotebookDeleteModal {...props} notebook={notebook} onChangeTab={setNotebook} />)
                    : () => openModal(props => <NotebookCreateModal {...props} />)
            }
        >
            {isNotMain ? "Delete Notebook" : "Create Notebook"}
        </Button>
    );
};
