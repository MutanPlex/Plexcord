import { Embed } from "discord-types/general";
interface ToggleableDescriptionProps {
    embed: Embed;
    original: () => any;
}
declare const _default: {
    name: string;
    description: string;
    authors: {
        name: string;
        id: bigint;
    }[];
    patches: {
        find: string;
        replacement: {
            match: RegExp;
            replace: string;
        };
    }[];
    ToggleableDescription: import("react").FunctionComponent<ToggleableDescriptionProps>;
    ToggleableDescriptionWrapper(props: ToggleableDescriptionProps): import("react").JSX.Element;
} & Record<string, any>;
export default _default;
