import "./colorStyles.css";
interface Props {
    name: string;
    color: number;
    onChange(value: string): void;
}
export declare function SettingColorComponent({ name, onChange, color }: Props): import("react").JSX.Element;
export {};
