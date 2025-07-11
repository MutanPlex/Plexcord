import { HolyNotes } from "../../types";
export declare const RenderMessage: ({ note, notebook, updateParent, fromDeleteModal, closeModal, }: {
    note: HolyNotes.Note;
    notebook: string;
    updateParent?: () => void;
    fromDeleteModal: boolean;
    closeModal?: () => void;
}) => import("react").JSX.Element;
