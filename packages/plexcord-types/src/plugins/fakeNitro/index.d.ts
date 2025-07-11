import { OptionType, Patch } from "../../utils/types";
import type { Emoji } from "../../webpack/common/types";
import type { Message } from "discord-types/general";
import type { ReactElement, ReactNode } from "react";
declare const enum FakeNoticeType {
    Sticker = 0,
    Emoji = 1
}
declare const _default: {
    name: string;
    authors: {
        name: string;
        id: bigint;
    }[];
    description: string;
    dependencies: string[];
    settings: import("../../utils/types").DefinedSettings<{
        enableEmojiBypass: {
            description: string;
            type: OptionType.BOOLEAN;
            default: true;
            restartNeeded: true;
        };
        emojiSize: {
            description: string;
            type: OptionType.SLIDER;
            default: number;
            markers: number[];
        };
        transformEmojis: {
            description: string;
            type: OptionType.BOOLEAN;
            default: true;
            restartNeeded: true;
        };
        enableStickerBypass: {
            description: string;
            type: OptionType.BOOLEAN;
            default: true;
            restartNeeded: true;
        };
        stickerSize: {
            description: string;
            type: OptionType.SLIDER;
            default: number;
            markers: number[];
        };
        transformStickers: {
            description: string;
            type: OptionType.BOOLEAN;
            default: true;
            restartNeeded: true;
        };
        transformCompoundSentence: {
            description: string;
            type: OptionType.BOOLEAN;
            default: false;
        };
        enableStreamQualityBypass: {
            description: string;
            type: OptionType.BOOLEAN;
            default: true;
            restartNeeded: true;
        };
        useStickerHyperLinks: {
            description: string;
            type: OptionType.BOOLEAN;
            default: true;
        };
        useEmojiHyperLinks: {
            description: string;
            type: OptionType.BOOLEAN;
            default: true;
        };
        hyperLinkText: {
            description: string;
            type: OptionType.STRING;
            default: string;
        };
        disableEmbedPermissionCheck: {
            description: string;
            type: OptionType.BOOLEAN;
            default: false;
        };
    }, import("../../utils/types").SettingsChecks<{
        enableEmojiBypass: {
            description: string;
            type: OptionType.BOOLEAN;
            default: true;
            restartNeeded: true;
        };
        emojiSize: {
            description: string;
            type: OptionType.SLIDER;
            default: number;
            markers: number[];
        };
        transformEmojis: {
            description: string;
            type: OptionType.BOOLEAN;
            default: true;
            restartNeeded: true;
        };
        enableStickerBypass: {
            description: string;
            type: OptionType.BOOLEAN;
            default: true;
            restartNeeded: true;
        };
        stickerSize: {
            description: string;
            type: OptionType.SLIDER;
            default: number;
            markers: number[];
        };
        transformStickers: {
            description: string;
            type: OptionType.BOOLEAN;
            default: true;
            restartNeeded: true;
        };
        transformCompoundSentence: {
            description: string;
            type: OptionType.BOOLEAN;
            default: false;
        };
        enableStreamQualityBypass: {
            description: string;
            type: OptionType.BOOLEAN;
            default: true;
            restartNeeded: true;
        };
        useStickerHyperLinks: {
            description: string;
            type: OptionType.BOOLEAN;
            default: true;
        };
        useEmojiHyperLinks: {
            description: string;
            type: OptionType.BOOLEAN;
            default: true;
        };
        hyperLinkText: {
            description: string;
            type: OptionType.STRING;
            default: string;
        };
        disableEmbedPermissionCheck: {
            description: string;
            type: OptionType.BOOLEAN;
            default: false;
        };
    }>, {}>;
    patches: Omit<Patch, "plugin">[];
    readonly guildId: string | undefined;
    readonly canUseEmotes: boolean;
    readonly canUseStickers: boolean;
    handleProtoChange(proto: any, user: any): void;
    handleGradientThemeSelect(backgroundGradientPresetId: number | undefined, theme: number, original: () => void): void;
    trimContent(content: Array<any>): void;
    clearEmptyArrayItems(array: Array<any>): any[];
    ensureChildrenIsArray(child: ReactElement<any>): void;
    patchFakeNitroEmojisOrRemoveStickersLinks(content: Array<any>, inline: boolean): any[];
    patchFakeNitroStickers(stickers: Array<any>, message: Message): any[];
    shouldIgnoreEmbed(embed: Message["embeds"][number], message: Message): boolean;
    filterAttachments(attachments: Message["attachments"]): import("discord-types/general").MessageAttachment[];
    shouldKeepEmojiLink(link: any): any;
    addFakeNotice(type: FakeNoticeType, node: Array<ReactNode>, fake: boolean): ReactNode[];
    getStickerLink(stickerId: string): string;
    sendAnimatedSticker(stickerLink: string, stickerId: string, channelId: string): Promise<void>;
    canUseEmote(e: Emoji, channelId: string): any;
    start(): void;
    stop(): void;
} & Record<string, any>;
export default _default;
