import { ModalProps } from "../../../utils/modal";
import { Bookmark, BookmarkFolder, Bookmarks, ChannelTabsProps, UseBookmarkMethods } from "../util/types";
export declare function BasicContextMenu(): import("react").JSX.Element;
export declare function EditModal({ modalProps, modalKey, bookmark, onSave }: {
    modalProps: ModalProps;
    modalKey: string;
    bookmark: Bookmark | BookmarkFolder;
    onSave: (name: string, color: string) => void;
}): import("react").JSX.Element;
export declare function BookmarkContextMenu({ bookmarks, index, methods }: {
    bookmarks: Bookmarks;
    index: number;
    methods: UseBookmarkMethods;
}): import("react").JSX.Element;
export declare function TabContextMenu({ tab }: {
    tab: ChannelTabsProps;
}): import("react").JSX.Element;
