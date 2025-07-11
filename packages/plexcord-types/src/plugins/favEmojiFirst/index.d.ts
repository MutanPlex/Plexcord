import { Emoji } from "../../webpack/common/types";
interface EmojiAutocompleteState {
    query?: {
        type: string;
        typeInfo: {
            sentinel: string;
        };
        results: {
            emojis: Emoji[] & {
                sliceTo?: number;
            };
        };
    };
}
declare const _default: {
    name: string;
    authors: {
        name: string;
        id: bigint;
    }[];
    description: string;
    patches: {
        find: string;
        replacement: {
            match: RegExp;
            replace: string;
        }[];
    }[];
    sortEmojis({ query }: EmojiAutocompleteState): void;
} & Record<string, any>;
export default _default;
