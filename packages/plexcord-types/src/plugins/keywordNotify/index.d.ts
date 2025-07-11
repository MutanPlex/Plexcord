import "./style.css";
import { OptionType } from "../../utils/types";
import { Message } from "discord-types/general/index.js";
import type { JSX } from "react";
declare const _default: {
    name: string;
    authors: {
        name: string;
        id: bigint;
    }[];
    description: string;
    settings: import("../../utils/types").DefinedSettings<{
        ignoreBots: {
            type: OptionType.BOOLEAN;
            description: string;
            default: true;
        };
        amountToKeep: {
            type: OptionType.NUMBER;
            description: string;
            default: number;
        };
        keywords: {
            type: OptionType.COMPONENT;
            description: string;
            component: () => JSX.Element;
        };
    }, import("../../utils/types").SettingsChecks<{
        ignoreBots: {
            type: OptionType.BOOLEAN;
            description: string;
            default: true;
        };
        amountToKeep: {
            type: OptionType.NUMBER;
            description: string;
            default: number;
        };
        keywords: {
            type: OptionType.COMPONENT;
            description: string;
            component: () => JSX.Element;
        };
    }>, {}>;
    patches: ({
        find: string;
        replacement: {
            match: RegExp;
            replace: string;
        };
    } | {
        find: string;
        replacement: {
            match: RegExp;
            replace: string;
        }[];
    })[];
    start(): Promise<void>;
    stop(): void;
    applyKeywordEntries(m: Message): void;
    addToLog(m: Message): void;
    deleteKeyword(id: any): void;
    keywordTabBar(): JSX.Element;
    tryKeywordMenu(setTab: any, onJump: any, closePopout: any): JSX.Element;
    modify(e: any): void;
} & Record<string, any>;
export default _default;
