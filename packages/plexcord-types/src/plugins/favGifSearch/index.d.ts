import { OptionType } from "../../utils/types";
interface SearchBarComponentProps {
    ref?: React.MutableRefObject<any>;
    autoFocus: boolean;
    className: string;
    size: string;
    onChange: (query: string) => void;
    onClear: () => void;
    query: string;
    placeholder: string;
}
type TSearchBarComponent = React.FC<SearchBarComponentProps> & {
    Sizes: Record<"SMALL" | "MEDIUM" | "LARGE", string>;
};
interface Gif {
    format: number;
    src: string;
    width: number;
    height: number;
    order: number;
    url: string;
}
interface Instance {
    dead?: boolean;
    state: {
        resultType?: string;
    };
    props: {
        favCopy: Gif[];
        favorites: Gif[];
    };
    forceUpdate: () => void;
}
export declare const settings: import("../../utils/types").DefinedSettings<{
    searchOption: {
        type: OptionType.SELECT;
        description: string;
        options: readonly [{
            readonly label: "Entire Url";
            readonly value: "url";
        }, {
            readonly label: "Path Only (/somegif.gif)";
            readonly value: "path";
        }, {
            readonly label: "Host & Path (tenor.com somgif.gif)";
            readonly value: "hostandpath";
            readonly default: true;
        }];
    };
}, import("../../utils/types").SettingsChecks<{
    searchOption: {
        type: OptionType.SELECT;
        description: string;
        options: readonly [{
            readonly label: "Entire Url";
            readonly value: "url";
        }, {
            readonly label: "Path Only (/somegif.gif)";
            readonly value: "path";
        }, {
            readonly label: "Host & Path (tenor.com somgif.gif)";
            readonly value: "hostandpath";
            readonly default: true;
        }];
    };
}>, {}>;
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
    settings: import("../../utils/types").DefinedSettings<{
        searchOption: {
            type: OptionType.SELECT;
            description: string;
            options: readonly [{
                readonly label: "Entire Url";
                readonly value: "url";
            }, {
                readonly label: "Path Only (/somegif.gif)";
                readonly value: "path";
            }, {
                readonly label: "Host & Path (tenor.com somgif.gif)";
                readonly value: "hostandpath";
                readonly default: true;
            }];
        };
    }, import("../../utils/types").SettingsChecks<{
        searchOption: {
            type: OptionType.SELECT;
            description: string;
            options: readonly [{
                readonly label: "Entire Url";
                readonly value: "url";
            }, {
                readonly label: "Path Only (/somegif.gif)";
                readonly value: "path";
            }, {
                readonly label: "Host & Path (tenor.com somgif.gif)";
                readonly value: "hostandpath";
                readonly default: true;
            }];
        };
    }>, {}>;
    getTargetString: typeof getTargetString;
    instance: Instance | null;
    renderSearchBar(instance: Instance, SearchBarComponent: TSearchBarComponent): import("react").JSX.Element;
    getFav(favorites: Gif[]): Gif[];
} & Record<string, any>;
export default _default;
export declare function getTargetString(urlStr: string): string;
