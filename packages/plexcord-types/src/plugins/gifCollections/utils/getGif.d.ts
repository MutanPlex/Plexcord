import { Message } from "discord-types/general";
import { Gif } from "../types";
export declare function getGifByTarget(url: string, target?: HTMLDivElement | null): Gif | null;
export declare function getGifByMessageAndTarget(target: HTMLDivElement, message: Message): Gif | null;
export declare function getGifByMessageAndUrl(url: string, message: Message): Gif | null;
export declare const getGif: (message: Message | null, url: string | null, target: HTMLDivElement | null) => Gif | null | undefined;
