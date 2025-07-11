type Shiki = typeof import("../api/shiki").shiki;
interface ThemeState {
    id: Shiki["currentThemeUrl"];
    theme: Shiki["currentTheme"];
}
export declare const useTheme: () => ThemeState;
export declare function dispatchTheme(state: ThemeState): void;
export {};
