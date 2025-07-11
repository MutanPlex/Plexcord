export interface Preset {
    id: string;
    name: string;
    description: string | null;
    decorations: Decoration[];
    authorIds: string[];
}
export interface Decoration {
    hash: string;
    animated: boolean;
    alt: string | null;
    authorId: string | null;
    reviewed: boolean | null;
    presetId: string | null;
}
export interface NewDecoration {
    file: File;
    alt: string | null;
}
export declare function fetchApi(url: RequestInfo, options?: RequestInit): Promise<Response>;
export declare const getUsersDecorations: (ids?: string[]) => Promise<Record<string, string | null>>;
export declare const getUserDecorations: (id?: string) => Promise<Decoration[]>;
export declare const getUserDecoration: (id?: string) => Promise<Decoration | null>;
export declare const setUserDecoration: (decoration: Decoration | NewDecoration | null, id?: string) => Promise<string | Decoration>;
export declare const getDecoration: (hash: string) => Promise<Decoration>;
export declare const deleteDecoration: (hash: string) => Promise<void>;
export declare const getPresets: () => Promise<Preset[]>;
