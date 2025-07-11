import "./patch-worker";
declare global {
    const baseUrl: string;
    const getCurrentCss: () => Promise<string>;
    const setCss: (css: string) => void;
    const getTheme: () => string;
}
