import { ILanguageRegistration } from "@vap/shiki";
export declare const VPC_REPO = "Vap0r1ze/vapcord";
export declare const VPC_REPO_COMMIT = "4d0e4b420fb1e4358852bbd18c804a6f5e54c0d7";
export declare const vpcRepoAssets = "https://raw.githubusercontent.com/Vap0r1ze/vapcord/4d0e4b420fb1e4358852bbd18c804a6f5e54c0d7/assets/shiki-codeblocks";
export declare const vpcRepoGrammar: (fileName: string) => string;
export declare const vpcRepoLanguages = "https://raw.githubusercontent.com/Vap0r1ze/vapcord/4d0e4b420fb1e4358852bbd18c804a6f5e54c0d7/assets/shiki-codeblocks/languages.json";
export interface Language {
    name: string;
    id: string;
    devicon?: string;
    grammarUrl: string;
    grammar?: ILanguageRegistration["grammar"];
    scopeName: string;
    aliases?: string[];
    custom?: boolean;
}
export interface LanguageJson {
    name: string;
    id: string;
    fileName: string;
    devicon?: string;
    scopeName: string;
    aliases?: string[];
}
export declare const languages: Record<string, Language>;
export declare const loadLanguages: () => Promise<void>;
export declare const getGrammar: (lang: Language) => Promise<NonNullable<ILanguageRegistration["grammar"]>>;
export declare function resolveLang(idOrAlias: string): Language | null;
