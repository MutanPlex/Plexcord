import "./styles.css";
import { Plugin } from "../../utils/types";
import { JSX } from "react";
interface PluginCardProps extends React.HTMLProps<HTMLDivElement> {
    plugin: Plugin;
    disabled: boolean;
    onRestartNeeded(name: string): void;
    isNew?: boolean;
}
export declare function PluginCard({ plugin, disabled, onRestartNeeded, onMouseEnter, onMouseLeave, isNew }: PluginCardProps): JSX.Element;
export default function PluginSettings(): JSX.Element;
export {};
