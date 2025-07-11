import "./styles.css";
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
        }[];
    }[];
    renderSearchInput(): import("react").JSX.Element;
    renderUser(userId: string, rest: any): import("react").JSX.Element;
    getSearchResults(): boolean;
    setUpdateFunc(e: any, setResults: any): true | undefined;
    getFilteredUsers(search: string): string[];
} & Record<string, any>;
export default _default;
