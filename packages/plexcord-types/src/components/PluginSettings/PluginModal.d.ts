import "./PluginModal.css";
import { ModalProps } from "../../utils/modal";
import { Plugin } from "../../utils/types";
import { User } from "discord-types/general";
interface PluginModalProps extends ModalProps {
    plugin: Plugin;
    onRestartNeeded(): void;
}
export declare function makeDummyUser(user: {
    username: string;
    id?: string;
    avatar?: string;
}): Partial<User>;
export default function PluginModal({ plugin, onRestartNeeded, onClose, transitionState }: PluginModalProps): import("react").JSX.Element;
export declare function openPluginModal(plugin: Plugin, onRestartNeeded?: (pluginName: string) => void): void;
export declare function openWarningModal(plugin: Plugin, pluginModalProps: ModalProps, onRestartNeeded?: (pluginName: string) => void): void;
export {};
