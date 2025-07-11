import { SoundLogEntry, User } from "../utils";
export declare function openUserModal(item: any, user: any, sounds: any): void;
export default function UserModal({ item, user, sounds, closeModal }: {
    item: SoundLogEntry;
    user: User;
    sounds: SoundLogEntry[];
    closeModal: Function;
}): import("react").JSX.Element;
