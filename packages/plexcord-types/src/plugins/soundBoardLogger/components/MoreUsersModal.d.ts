import { SoundLogEntry, User } from "../utils";
export declare function openMoreUsersModal(item: SoundLogEntry, users: User[], onClickUser: Function): void;
export default function MoreUsersModal({ item, users, onClickUser, closeModal }: {
    item: SoundLogEntry;
    users: User[];
    onClickUser: Function;
    closeModal: Function;
}): import("react").JSX.Element;
