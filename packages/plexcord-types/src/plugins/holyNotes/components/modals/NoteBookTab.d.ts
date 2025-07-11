export declare function NoteBookTabs({ tabs, selectedTabId, onSelectTab }: {
    tabs: string[];
    selectedTabId: string;
    onSelectTab: (tab: string) => void;
}): import("react").JSX.Element;
export declare function CreateTabBar({ tabs, firstSelectedTab, onChangeTab }: {
    tabs: any;
    firstSelectedTab: any;
    onChangeTab: any;
}): {
    TabBar: import("react").JSX.Element;
    renderSelectedTab: () => string | undefined;
    selectedTab: any;
};
