/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2023 rini
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import "./styles.css";

import { plugin, t } from "@api/i18n";
import { isPluginEnabled } from "@api/PluginManager";
import { definePluginSettings } from "@api/Settings";
import { GuildMember, Message, User } from "@plexcord/discord-types";
import mentionAvatars from "@plugins/mentionAvatars";
import { Devs, PcDevs } from "@utils/constants";
import definePlugin, { OptionType } from "@utils/types";
import { findByCodeLazy, findStoreLazy } from "@webpack";
import { ChannelStore, GuildMemberStore, GuildStore, MessageStore, RelationshipStore, StreamerModeStore, useEffect, UserStore } from "@webpack/common";
import { JSX } from "react";

const wrapEmojis = findByCodeLazy("lastIndex;return");
const AccessibilityStore = findStoreLazy("AccessibilityStore");
const colorPattern = /^#(?:[\da-f]{3}){1,2}$|^#(?:[\da-f]{4}){1,2}$|(rgb|hsl)a?\((\s*-?\d+%?\s*,){2}(\s*-?\d+%?\s*)\)|(rgb|hsl)a?\((\s*-?\d+%?\s*,){3}\s*(0|(0?\.\d+)|1)\)$/iu;
const roleColorPattern = /^role((?:\+|-)\d{0,4})?$/iu;
const symbolPattern = /^[\p{S}\p{P}]{1,3}$/iu;
const templatePattern = /(?:\{(?:friend|nick|display|user)(?:,\s*(?:friend|nick|display|user))*\})/iu;

function adjustHex(color: string, percent: number): string {
    let hex = color.replace("#", "");

    if (hex.length === 3) {
        hex = hex.split("").map(c => c + c).join("");
    }

    const num = parseInt(hex, 16);
    let r = (num >> 16) & 0xFF;
    let g = (num >> 8) & 0xFF;
    let b = num & 0xFF;

    r = Math.max(0, Math.min(255, r + Math.round(r * (percent / 100))));
    g = Math.max(0, Math.min(255, g + Math.round(g * (percent / 100))));
    b = Math.max(0, Math.min(255, b + Math.round(b * (percent / 100))));

    const newColor = ((r << 16) | (g << 8) | b).toString(16).padStart(6, "0");

    if (newColor === "ffffff" || newColor === "000000") {
        return color;
    }

    return `#${newColor}`;
}

function validColor(color: string) {
    const trimmedColor = color.trim();

    if (!color) return true;
    if (trimmedColor.length !== color.length) return false;
    if (trimmedColor.toLowerCase() === "role") return true;

    if (color.toLowerCase().includes("role")) {
        const percentage = parseInt(roleColorPattern.exec(color)?.[1] || "");
        return !isNaN(percentage) && percentage <= 100 && percentage >= -100;
    }

    const colorTestDiv = document.createElement("div");
    colorTestDiv.style.borderColor = color;

    const isValid = colorTestDiv.style.borderColor !== "" && colorPattern.test(color);
    colorTestDiv.remove();

    return isValid;
}

function resolveColor(user: User | GuildMember, savedColor: string, fallbackColor: string, canUseGradient: boolean): any {
    const fallbackReturn = {
        normal: {
            original: {
                color: fallbackColor,
                "text-decoration-color": fallbackColor,
            },
            adjusted: {
                color: fallbackColor,
                "text-decoration-color": fallbackColor,
            }
        },
        gradient: null
    };

    if (!savedColor.trim()) { return fallbackReturn; }

    let gradient: any = null;
    let primaryColor: any = savedColor;
    let secondaryColor: any = savedColor;
    let tertiaryColor: any = savedColor;
    let primaryAdjusted: any = savedColor;
    let secondaryAdjusted: any = savedColor;
    let tertiaryAdjusted: any = savedColor;

    if (savedColor.toLowerCase().includes("role")) {
        const percentage = roleColorPattern.exec(savedColor)?.[1] || "";
        if (percentage && isNaN(parseInt(percentage))) return fallbackReturn;

        const colorStrings = (user as any)?.colorStrings || {};
        primaryColor = colorStrings.primaryColor || null;
        secondaryColor = colorStrings.secondaryColor || null;
        tertiaryColor = colorStrings.tertiaryColor || null;
        primaryAdjusted = primaryColor;
        secondaryAdjusted = secondaryColor;
        tertiaryAdjusted = tertiaryColor;

        if (!primaryColor) { return fallbackReturn; }

        if (primaryColor && percentage) {
            primaryAdjusted = adjustHex(primaryColor, parseInt(percentage));
        }

        if (secondaryColor && percentage) {
            secondaryAdjusted = adjustHex(secondaryColor, parseInt(percentage));
        }

        if (tertiaryColor && percentage) {
            tertiaryAdjusted = adjustHex(tertiaryColor, parseInt(percentage));
        }
    }

    gradient = !canUseGradient || !secondaryColor
        ? null
        : tertiaryColor
            ? "linear-gradient(to right,var(--custom-gradient-color-1),var(--custom-gradient-color-2),var(--custom-gradient-color-3),var(--custom-gradient-color-1))"
            : "linear-gradient(to right,var(--custom-gradient-color-1),var(--custom-gradient-color-2),var(--custom-gradient-color-1))";

    const baseNormalStyle = {
        "isolation": "isolate",
    };

    const baseGradientStyle = {
        "background-clip": "text",
        "background-size": "100px auto",
        "-webkit-text-fill-color": "transparent",
        "-webkit-background-clip": "text",
        "isolation": "isolate",
    };

    return {
        normal: {
            original: { ...baseNormalStyle, "color": primaryColor, "text-decoration-color": primaryColor, "-webkit-text-fill-color": primaryColor },
            adjusted: { ...baseNormalStyle, "color": primaryAdjusted, "text-decoration-color": primaryAdjusted, "-webkit-text-fill-color": primaryAdjusted },
        },
        gradient: gradient ? {
            animated: {
                ...baseGradientStyle,
                "color": primaryColor,
                "text-decoration-color": primaryColor,
                "--custom-gradient-color-1": primaryColor,
                "--custom-gradient-color-2": secondaryColor || primaryColor,
                "--custom-gradient-color-3": tertiaryColor || primaryColor,
                "background-image": gradient,
                "animation": "show-me-your-name-animation 1.5s linear infinite"
            },
            static: {
                original: {
                    ...baseGradientStyle,
                    "color": primaryColor,
                    "text-decoration-color": primaryColor,
                    "--custom-gradient-color-1": primaryColor,
                    "--custom-gradient-color-2": secondaryColor || primaryColor,
                    "--custom-gradient-color-3": tertiaryColor || primaryColor,
                    "background-image": gradient,
                },
                adjusted: {
                    ...baseGradientStyle,
                    "color": primaryAdjusted,
                    "text-decoration-color": primaryAdjusted,
                    "--custom-gradient-color-1": primaryAdjusted,
                    "--custom-gradient-color-2": secondaryAdjusted || primaryAdjusted,
                    "--custom-gradient-color-3": tertiaryAdjusted || primaryAdjusted,
                    "background-image": gradient,
                },
            }
        } : null,
    };
}

function splitTemplate(template: string) {
    const items = template.trim().split(/(?<!,\s*)\s+/);
    return items;
}

function parseTemplateItem(entry: string) {
    const [prefix, suffix] = entry.split(templatePattern);
    const names = entry.replace(prefix, "").replace(suffix, "").trim().replaceAll(/{|}/g, "").split(/,\s*/);

    return {
        prefix: prefix ? prefix.trim() : "",
        suffix: suffix ? suffix.trim() : "",
        targetProcessedNames: names.map(name => name.trim()).filter(name => name.length > 0)
    };
}

function validTemplate(value: string) {
    const items = splitTemplate(value);

    if (items.length > 4 || !items.length) {
        return false;
    }

    const invalidOptions = items.some(item => {
        const { prefix, suffix, targetProcessedNames } = parseTemplateItem(item);

        return (
            prefix.length > 3 ||
            suffix.length > 3 ||
            (!!prefix && !symbolPattern.test(prefix)) ||
            (!!suffix && !symbolPattern.test(suffix)) ||
            targetProcessedNames.length > 4 ||
            targetProcessedNames.some(name => !["friend", "nick", "display", "user"].includes(name.trim()))
        );
    });

    if (invalidOptions) {
        return false;
    }
}

function getProcessedNames(author: any, truncateAllNamesWithStreamerMode: boolean, discriminators: boolean): [string | null, string | null, string | null, string | null] {
    let discriminator: string | null = null;

    if (discriminators) {
        const userAuthor = author as User | null;

        if (userAuthor?.bot && !isNaN(userAuthor?.discriminator as any) && Number(userAuthor?.discriminator) !== 0) {
            discriminator = userAuthor.discriminator;

            if (!!userAuthor) {
                userAuthor.globalName = userAuthor.username;
            }
        }
    }

    const username: string | null = !author?.username ? null
        : StreamerModeStore.enabled
            ? author.username[0] + "..."
            : author.username as string + (discriminator ? `#${discriminator}` : "");

    const display: string | null = !author?.globalName ? null
        : StreamerModeStore.enabled && (truncateAllNamesWithStreamerMode || author.globalName.toLowerCase() === author.username.toLowerCase())
            ? author.globalName[0] + "..."
            : author.globalName as string;

    const nick: string | null = !author?.nick ? null
        : StreamerModeStore.enabled && (truncateAllNamesWithStreamerMode || author.nick.toLowerCase() === author.username.toLowerCase())
            ? author.nick[0] + "..."
            : author.nick as string;

    const friendName: string | null = author ? RelationshipStore.getNickname(author.id) || null : null;
    const friend: string | null = !friendName ? null
        : StreamerModeStore.enabled && (truncateAllNamesWithStreamerMode || friendName.toLowerCase() === author.username.toLowerCase())
            ? friendName[0] + "..."
            : friendName as string;

    return [username, display, nick, friend];
}

interface mentionProps {
    userId: string;
    channelId?: string;
    props?: {
        messageId?: string;
        groupId?: string;
    },
}

interface messageProps {
    message: Message;
    userOverride?: User;
    isRepliedMessage?: boolean;
    withMentionPrefix?: boolean;
}

interface memberListProfileReactionProps {
    user: User;
    type: "membersList" | "profilesPopout" | "profilesTooltip" | "reactionsTooltip" | "reactionsPopout" | "voiceChannel";
    guildId?: string;
    tags?: any;
}

function getMemberListProfilesReactionsVoiceName(
    props: memberListProfileReactionProps,
): [string | null, JSX.Element | null, string | null] {
    const { user, type } = props;
    // props.guildId for member list & preview profile, props.tags.props.displayProfile.guildId
    // for full guild profile and main profile, which is indicated by whether it is null or not.
    const guildId = props.guildId || props.tags?.props?.displayProfile?.guildId || null;
    const member = guildId ? GuildMemberStore.getMember(guildId, user.id) : null;
    const author = user && member ? { ...user, ...member } : user || member || null;
    const shouldHookless = type === "reactionsTooltip" || type === "profilesTooltip";
    return renderUsername(author, null, null, type, "", shouldHookless);
}

function getMemberListProfilesReactionsVoiceNameText(props: memberListProfileReactionProps): string | null {
    return getMemberListProfilesReactionsVoiceName(props)[2];
}

function getMemberListProfilesReactionsVoiceNameElement(props: memberListProfileReactionProps): JSX.Element | null {
    return getMemberListProfilesReactionsVoiceName(props)[1];
}

function getMessageName(props: messageProps): [string | null, JSX.Element | null, string | null] {
    const { hideDefaultAtSign, replies } = settings.use(["hideDefaultAtSign", "replies"]);
    const { message, userOverride, isRepliedMessage, withMentionPrefix } = props;
    const isWebhook = !!message.webhookId && !message.interaction;
    const channel = ChannelStore.getChannel(message.channel_id) || {};
    const target = userOverride || message.author;
    const user = isWebhook ? target : UserStore.getUser(target.id);
    const member = isWebhook ? null : GuildMemberStore.getMember(channel.guild_id, target.id);
    const author = user && member ? { ...user, ...member } : user || member || null;
    const mentionSymbol = hideDefaultAtSign && (!isRepliedMessage || replies) ? "" : withMentionPrefix ? "@" : "";
    return renderUsername(author, channel.id, message.id, isRepliedMessage ? "replies" : "messages", mentionSymbol);
}

function getMessageNameElement(props: messageProps): JSX.Element | null {
    return getMessageName(props)[1];
}

function getMessageNameText(props: messageProps): string | null {
    return getMessageName(props)[0];
}

export function getMentionNameElement(props: mentionProps): JSX.Element | null {
    const { hideDefaultAtSign, mentions } = settings.use(["hideDefaultAtSign", "mentions"]);
    const { channelId, userId, props: nestedProps } = props;
    const channel = channelId ? ChannelStore.getChannel(channelId) || null : null;
    const user = UserStore.getUser(userId);
    const member = channel ? GuildMemberStore.getMember(channel.guild_id, userId) : null;
    const author = user && member ? { ...user, ...member } : user || member || null;
    const mentionSymbol = hideDefaultAtSign && mentions ? "" : "@";
    return renderUsername(author, channelId || null, nestedProps?.messageId || null, "mentions", mentionSymbol)[1];
}

function renderUsername(
    author: User | GuildMember | null,
    channelId: string | null,
    messageId: string | null,
    type: "messages" | "replies" | "mentions" | "membersList" | "profilesPopout" | "profilesTooltip" | "reactionsTooltip" | "reactionsPopout" | "voiceChannel",
    mentionSymbol: string,
    hookless = false
): [string | null, JSX.Element | null, string | null] {
    const isMessage = type === "messages";
    const isReply = type === "replies";
    const isMention = type === "mentions";
    const isMember = type === "membersList";
    const isProfile = type === "profilesPopout";
    const isReactionsPopout = type === "reactionsPopout";
    const isReactionsTooltip = type === "reactionsTooltip";
    const isReaction = isReactionsTooltip || isReactionsPopout;
    const isVoice = type === "voiceChannel";

    const config = hookless ? settings.store : settings.use(["messages", "replies", "mentions", "memberList", "profilePopout", "reactions", "discriminators", "hideDefaultAtSign", "truncateAllNamesWithStreamerMode", "removeDuplicates", "ignoreGradients", "ignoreFonts", "animateGradients", "includedNames", "friendNameColor", "nicknameColor", "displayNameColor", "usernameColor", "nameSeparator", "triggerNameRerender"]);
    const { messages, replies, mentions, memberList, profilePopout, reactions, discriminators, hideDefaultAtSign, truncateAllNamesWithStreamerMode, removeDuplicates, ignoreGradients, ignoreFonts, animateGradients, includedNames, friendNameColor, nicknameColor, displayNameColor, usernameColor, nameSeparator, triggerNameRerender } = config;

    const canUseGradient = ((author as GuildMember)?.guildId ? (GuildStore.getGuild((author as GuildMember).guildId) ?? {}).premiumFeatures?.features.includes("ENHANCED_ROLE_COLORS") : false);
    const textMutedValue = getComputedStyle(document.documentElement)?.getPropertyValue("--text-muted")?.trim() || "#72767d";
    const options = splitTemplate(includedNames);
    const resolvedUsernameColor = author ? resolveColor(author, usernameColor.trim(), "", canUseGradient) : null;
    const resolvedDisplayNameColor = author ? resolveColor(author, displayNameColor.trim(), "", canUseGradient) : null;
    const resolvedNicknameColor = author ? resolveColor(author, nicknameColor.trim(), "", canUseGradient) : null;
    const resolvedFriendNameColor = author ? resolveColor(author, friendNameColor.trim(), "", canUseGradient) : null;
    const affixColor = { color: textMutedValue, "-webkit-text-fill-color": textMutedValue, isolation: "isolate", "white-space": "pre", "font-family": "var(--font-primary)", "letter-spacing": "normal" };
    const [username, display, nick, friend] = getProcessedNames(author, truncateAllNamesWithStreamerMode, discriminators);

    const names: Record<string, [string | null, object | null]> = {
        user: [username, resolvedUsernameColor],
        display: [display, resolvedDisplayNameColor],
        nick: [nick, resolvedNicknameColor],
        friend: [friend, resolvedFriendNameColor],
    };

    const outputs: any[] = [];

    for (const option of options) {
        const { prefix, suffix, targetProcessedNames } = parseTemplateItem(option);
        let chosenName: string | null = null;
        let chosenStyle: object | null = null;
        let chosenType = "";

        for (const name of targetProcessedNames) {
            if (!names[name]) {
                continue;
            }

            chosenName = names[name][0];
            chosenStyle = names[name][1];
            chosenType = name;

            if (chosenName) {
                break;
            }
        }

        if (!chosenName || !chosenStyle) {
            continue;
        }

        outputs.push({
            prefix: prefix || "",
            name: chosenName,
            wrapped: chosenName,
            type: chosenType,
            suffix: suffix || "",
            style: chosenStyle as React.CSSProperties
        });
    }

    if (!outputs.length) {
        outputs.push({
            prefix: "",
            name: username || "Unknown",
            wrapped: username || "Unknown",
            suffix: "",
            style: resolvedUsernameColor
        });
    }

    let first = outputs.shift();
    let second = outputs.shift();
    let third = outputs.shift();
    let fourth = outputs.shift();

    const firstValueWrapped = hookless ?
        (first.name || "")
        : wrapEmojis(first.name || "");

    const secondValueWrapped = hookless ?
        ((second ?? {}).name || "")
        : wrapEmojis((second ?? {}).name || "");

    const thirdValueWrapped = hookless ?
        ((third ?? {}).name || "")
        : wrapEmojis((third ?? {}).name || "");

    const fourthValueWrapped = hookless ?
        ((fourth ?? {}).name || "")
        : wrapEmojis((fourth ?? {}).name || "");

    first.wrapped = firstValueWrapped;
    second && (second.wrapped = secondValueWrapped);
    third && (third.wrapped = thirdValueWrapped);
    fourth && (fourth.wrapped = fourthValueWrapped);

    if (isMessage && !messages) {
        return [null, null, null];
    } else if (isReply && !replies) {
        return [null, null, null];
    } else if (isMention && !mentions) {
        return [null, null, null];
    } else if (isMember && !memberList) {
        return [null, null, null];
    } else if (isProfile && !profilePopout) {
        return [null, null, null];
    } else if (isReaction && !reactions) {
        return [null, null, null];
    } else if (isVoice && !reactions) {
        return [null, null, null];
    } else if (!author || !username) {
        const fallbackText = `${mentionSymbol}Unknown`;
        return [fallbackText, <>{fallbackText}</>, fallbackText];
    }

    const prioritizeUsername = (new Set([first, second, third, fourth].filter(Boolean).map(pos => pos.name.toLowerCase())).size > 1);

    if (removeDuplicates) {
        // Remove duplicates from back to front. Prioritize the earlier name, unless it's the username and there's more than one unique option, then prioritize it.
        fourth && third && fourth.name.toLowerCase() === third.name.toLowerCase() ? fourth.type === "user" && prioritizeUsername ? third = null : fourth = null : null;
        fourth && second && fourth.name.toLowerCase() === second.name.toLowerCase() ? fourth.type === "user" && prioritizeUsername ? second = null : fourth = null : null;
        fourth && first && fourth.name.toLowerCase() === first.name.toLowerCase() ? fourth.type === "user" && prioritizeUsername ? first = null : fourth = null : null;
        third && second && third.name.toLowerCase() === second.name.toLowerCase() ? third.type === "user" && prioritizeUsername ? second = null : third = null : null;
        third && first && third.name.toLowerCase() === first.name.toLowerCase() ? third.type === "user" && prioritizeUsername ? first = null : third = null : null;
        second && first && second.name.toLowerCase() === first.name.toLowerCase() ? second.type === "user" && prioritizeUsername ? first = null : second = null : null;
    }

    const remainingNames = [first, second, third, fourth].filter(Boolean);
    first = remainingNames.shift();
    second = remainingNames.shift();
    third = remainingNames.shift();
    fourth = remainingNames.shift();

    const useTopRoleStyle = isMention || isReactionsPopout;
    const topRoleStyle = resolveColor(author, "Role", "", canUseGradient);
    const hasGradient = !!topRoleStyle?.gradient && Object.keys(topRoleStyle.gradient).length > 0;
    const message = channelId && messageId ? MessageStore.getMessage(channelId, messageId) : null;
    const groupId = (message as any)?.showMeYourNameGroupId || null;
    const isHovering = (isMessage || isReply || isMention)
        ? ((messageId && hoveringMessageMap.has(messageId)) || (groupId && hoveringMessageMap.has(groupId)))
        : isReactionsPopout
            ? hoveringReactionPopoutSet.has((author as User).id)
            : false;

    const shouldGradientGlow = isHovering && hasGradient;
    const shouldAnimateGradients = shouldGradientGlow && !AccessibilityStore.useReducedMotion;
    const shouldAnimateSecondaryNames = animateGradients && !ignoreGradients;

    const firstDataText = mentionSymbol + first.name;
    const secondDataText = second && shouldAnimateSecondaryNames ? (second.prefix + second.name + second.suffix) : "";
    const thirdDataText = third && shouldAnimateSecondaryNames ? (third.prefix + third.name + third.suffix) : "";
    const fourthDataText = fourth && shouldAnimateSecondaryNames ? (fourth.prefix + fourth.name + fourth.suffix) : "";
    const allDataText = [firstDataText, secondDataText, thirdDataText, fourthDataText].filter(Boolean).join(nameSeparator).trim();

    // Only mentions and reactions popouts should patch in the gradient glow or else a double glow will appear on messages.
    const hoveringClass = (isHovering ? " show-me-your-name-gradient-hovered" : "");
    const gradientClasses = useTopRoleStyle
        ? "show-me-your-name-gradient show-me-your-name-gradient-inherit-bg" + hoveringClass
        : "show-me-your-name-gradient show-me-your-name-gradient-unset-bg" + hoveringClass;

    const firstGroupClasses = "show-me-your-name-name-group show-me-your-name-first-name-group";
    const secondGroupClasses = "show-me-your-name-name-group show-me-your-name-second-name-group";
    const thirdGroupClasses = "show-me-your-name-name-group show-me-your-name-third-name-group";
    const fourthGroupClasses = "show-me-your-name-name-group show-me-your-name-fourth-name-group";
    const firstNameClasses = "show-me-your-name-name show-me-your-name-first-name";
    const secondNameClasses = "show-me-your-name-name show-me-your-name-second-name";
    const thirdNameClasses = "show-me-your-name-name show-me-your-name-third-name";
    const fourthNameClasses = "show-me-your-name-name show-me-your-name-fourth-name";
    const prefixClasses = "show-me-your-name-affix show-me-your-name-prefix";
    const suffixClasses = "show-me-your-name-affix show-me-your-name-suffix";

    const topLevelStyle = {
        // Allows names to wrap in reaction popouts.
        ...(isReactionsPopout
            ? { display: "flex", flexWrap: "wrap", lineHeight: "1.1em", fontSize: "0.9em" }
            : {}),
    } as React.CSSProperties;

    const nameElement = (
        <span style={topLevelStyle} className="show-me-your-name-container">
            {mentionSymbol && <span>{mentionSymbol}</span>}
            {(
                <span
                    className={(shouldGradientGlow ? (gradientClasses + " " + firstGroupClasses) : firstGroupClasses)}
                    data-text={shouldGradientGlow ? firstDataText : undefined}
                    style={(shouldGradientGlow && useTopRoleStyle && topRoleStyle ? topRoleStyle.gradient.animated : undefined) as React.CSSProperties}
                >
                    <span
                        className={firstNameClasses}
                        style={
                            topRoleStyle ?
                                shouldAnimateGradients && topRoleStyle.gradient
                                    ? topRoleStyle.gradient.animated
                                    : topRoleStyle.gradient
                                        ? topRoleStyle.gradient.static.original
                                        : topRoleStyle.normal.original
                                : undefined
                        }>
                        {first.wrapped}</span>
                </span>
            )}
            {second && (
                <span
                    className={(shouldGradientGlow && shouldAnimateSecondaryNames ? (gradientClasses + " " + secondGroupClasses) : secondGroupClasses)}
                    data-text={shouldGradientGlow && secondDataText ? secondDataText : undefined}
                    style={(shouldGradientGlow && shouldAnimateSecondaryNames ? second.style.gradient.animated : undefined) as React.CSSProperties}
                >
                    <span style={affixColor as React.CSSProperties} className={prefixClasses}>
                        <span>{nameSeparator}</span>
                        {second.prefix}</span>
                    <span
                        // On non-primary names, allow disabling the gradients completely, or just their animation & glow.
                        className={secondNameClasses}
                        style={{
                            ...(ignoreFonts ? { "font-family": "var(--font-primary)", "letter-spacing": "normal" } : {}),
                            ...(ignoreGradients
                                ? second.style.normal.adjusted
                                : shouldAnimateGradients && shouldAnimateSecondaryNames && second.style.gradient
                                    ? second.style.gradient.animated
                                    : second.style.gradient
                                        ? second.style.gradient.static.original
                                        : second.style.normal.adjusted)
                        }}>
                        {second.wrapped}</span>
                    <span style={affixColor as React.CSSProperties} className={suffixClasses}>
                        {second.suffix}</span>
                </span>
            )}
            {third && (
                <span
                    className={(shouldGradientGlow && shouldAnimateSecondaryNames ? (gradientClasses + " " + thirdGroupClasses) : thirdGroupClasses)}
                    data-text={shouldGradientGlow && thirdDataText ? thirdDataText : undefined}
                    style={(shouldGradientGlow && shouldAnimateSecondaryNames ? third.style.gradient.animated : undefined) as React.CSSProperties}
                >
                    <span style={affixColor as React.CSSProperties} className={prefixClasses}>
                        <span>{nameSeparator}</span>
                        {third.prefix}</span>
                    <span
                        className={thirdNameClasses}
                        style={{
                            ...(ignoreFonts ? { "font-family": "var(--font-primary)", "letter-spacing": "normal" } : {}),
                            ...(ignoreGradients
                                ? third.style.normal.adjusted
                                : shouldAnimateGradients && shouldAnimateSecondaryNames && third.style.gradient
                                    ? third.style.gradient.animated
                                    : third.style.gradient
                                        ? third.style.gradient.static.original
                                        : third.style.normal.adjusted)
                        }}>
                        {third.wrapped}</span>
                    <span style={affixColor as React.CSSProperties} className={suffixClasses}>
                        {third.suffix}</span>
                </span>
            )}
            {fourth && (
                <span
                    className={(shouldGradientGlow && shouldAnimateSecondaryNames ? (gradientClasses + " " + fourthGroupClasses) : fourthGroupClasses)}
                    data-text={shouldGradientGlow && fourthDataText ? fourthDataText : undefined}
                    style={(shouldGradientGlow && shouldAnimateSecondaryNames ? fourth.style.gradient.animated : undefined) as React.CSSProperties}
                >
                    <span style={affixColor as React.CSSProperties} className={prefixClasses}>
                        <span>{nameSeparator}</span>
                        {fourth.prefix}</span>
                    <span
                        className={fourthNameClasses}
                        style={{
                            ...(ignoreFonts ? { "font-family": "var(--font-primary)", "letter-spacing": "normal" } : {}),
                            ...(ignoreGradients
                                ? fourth.style.normal.adjusted
                                : shouldAnimateGradients && shouldAnimateSecondaryNames && fourth.style.gradient
                                    ? fourth.style.gradient.animated
                                    : fourth.style.gradient
                                        ? fourth.style.gradient.static.original
                                        : fourth.style.normal.adjusted)
                        }}>
                        {fourth.wrapped}</span>
                    <span style={affixColor as React.CSSProperties} className={suffixClasses}>
                        {fourth.suffix}</span>
                </span>
            )}
        </span>
    );

    return [allDataText, nameElement, first.name];
}

const hoveringMessageMap = new Map<string, number>();
const hoveringReactionPopoutSet = new Set<string>();

function handleHoveringMessage(message: any, isHovering: boolean) {
    const messageId = message?.id;
    const groupId = message?.showMeYourNameGroupId ?? "";

    useEffect(() => {
        if (!message) return;

        if (isHovering) {
            addHoveringMessage(messageId);
            addHoveringMessage(groupId);
        } else {
            removeHoveringMessage(messageId);
            removeHoveringMessage(groupId);
        }
    }, [messageId, groupId, isHovering]);
}

function addHoveringMessage(id: string) {
    if (!id) return;
    const currentCount = hoveringMessageMap.get(id) || 0;
    hoveringMessageMap.set(id, currentCount + 1);

    if (currentCount === 0) {
        settings.store.triggerNameRerender = !settings.store.triggerNameRerender;
    }
}

function removeHoveringMessage(id: string) {
    if (!id) return;
    const currentCount = hoveringMessageMap.get(id) || 0;

    if (currentCount <= 1) {
        hoveringMessageMap.delete(id);
        settings.store.triggerNameRerender = !settings.store.triggerNameRerender;
    } else {
        hoveringMessageMap.set(id, currentCount - 1);
    }
}

function addHoveringReactionPopout(id: string) {
    hoveringReactionPopoutSet.add(id);
    settings.store.triggerNameRerender = !settings.store.triggerNameRerender;
}

function removeHoveringReactionPopout(id: string) {
    hoveringReactionPopoutSet.delete(id);
    settings.store.triggerNameRerender = !settings.store.triggerNameRerender;
}

const settings = definePluginSettings({
    messages: {
        label: () => t(plugin.showMeYourName.option.messages.label),
        description: () => t(plugin.showMeYourName.option.messages.description),
        type: OptionType.BOOLEAN,
        default: true,
    },
    replies: {
        label: () => t(plugin.showMeYourName.option.replies.label),
        description: () => t(plugin.showMeYourName.option.replies.description),
        type: OptionType.BOOLEAN,
        default: true,
    },
    mentions: {
        label: () => t(plugin.showMeYourName.option.mentions.label),
        description: () => t(plugin.showMeYourName.option.mentions.description),
        type: OptionType.BOOLEAN,
        default: true,
    },
    memberList: {
        label: () => t(plugin.showMeYourName.option.memberList.label),
        description: () => t(plugin.showMeYourName.option.memberList.description),
        type: OptionType.BOOLEAN,
        default: true,
    },
    profilePopout: {
        label: () => t(plugin.showMeYourName.option.profilePopout.label),
        description: () => t(plugin.showMeYourName.option.profilePopout.description),
        type: OptionType.BOOLEAN,
        default: true,
    },
    voiceChannels: {
        label: () => t(plugin.showMeYourName.option.voiceChannels.label),
        description: () => t(plugin.showMeYourName.option.voiceChannels.description),
        type: OptionType.BOOLEAN,
        default: true,
    },
    reactions: {
        label: () => t(plugin.showMeYourName.option.reactions.label),
        description: () => t(plugin.showMeYourName.option.reactions.description),
        type: OptionType.BOOLEAN,
        default: true,
    },
    discriminators: {
        label: () => t(plugin.showMeYourName.option.discriminators.label),
        description: () => t(plugin.showMeYourName.option.discriminators.description),
        type: OptionType.BOOLEAN,
        default: true,
    },
    hideDefaultAtSign: {
        label: () => t(plugin.showMeYourName.option.hideDefaultAtSign.label),
        description: () => t(plugin.showMeYourName.option.hideDefaultAtSign.description),
        type: OptionType.BOOLEAN,
        default: false,
    },
    truncateAllNamesWithStreamerMode: {
        label: () => t(plugin.showMeYourName.option.truncateAllNamesWithStreamerMode.label),
        description: () => t(plugin.showMeYourName.option.truncateAllNamesWithStreamerMode.description),
        type: OptionType.BOOLEAN,
        default: true,
    },
    removeDuplicates: {
        label: () => t(plugin.showMeYourName.option.removeDuplicates.label),
        description: () => t(plugin.showMeYourName.option.removeDuplicates.description),
        type: OptionType.BOOLEAN,
        default: true,
    },
    ignoreFonts: {
        label: () => t(plugin.showMeYourName.option.ignoreFonts.label),
        description: () => t(plugin.showMeYourName.option.ignoreFonts.description),
        type: OptionType.BOOLEAN,
        default: false,
    },
    ignoreGradients: {
        label: () => t(plugin.showMeYourName.option.ignoreGradients.label),
        description: () => t(plugin.showMeYourName.option.ignoreGradients.description),
        type: OptionType.BOOLEAN,
        default: true,
    },
    animateGradients: {
        label: () => t(plugin.showMeYourName.option.animateGradients.label),
        description: () => t(plugin.showMeYourName.option.animateGradients.description),
        type: OptionType.BOOLEAN,
        default: false,
    },
    nameSeparator: {
        label: () => t(plugin.showMeYourName.option.nameSeparator.label),
        description: () => t(plugin.showMeYourName.option.nameSeparator.description),
        type: OptionType.STRING,
        default: " ",
    },
    includedNames: {
        label: () => t(plugin.showMeYourName.option.includedNames.label),
        description: () => t(plugin.showMeYourName.option.includedNames.description),
        type: OptionType.STRING,
        default: "{friend, nick} [{display}] (@{user})",
        isValid: validTemplate,
    },
    friendNameColor: {
        label: () => t(plugin.showMeYourName.option.friendNameColor.label),
        description: () => t(plugin.showMeYourName.option.friendNameColor.description),
        type: OptionType.STRING,
        default: "Role-25",
        isValid: validColor,
    },
    nicknameColor: {
        label: () => t(plugin.showMeYourName.option.nicknameColor.label),
        description: () => t(plugin.showMeYourName.option.nicknameColor.description),
        type: OptionType.STRING,
        default: "Role-25",
        isValid: validColor,
    },
    displayNameColor: {
        label: () => t(plugin.showMeYourName.option.displayNameColor.label),
        description: () => t(plugin.showMeYourName.option.displayNameColor.description),
        type: OptionType.STRING,
        default: "Role-25",
        isValid: validColor,
    },
    usernameColor: {
        label: () => t(plugin.showMeYourName.option.usernameColor.label),
        description: () => t(plugin.showMeYourName.option.usernameColor.description),
        type: OptionType.STRING,
        default: "Role-25",
        isValid: validColor,
    },
    triggerNameRerender: {
        label: () => t(plugin.showMeYourName.option.triggerNameRerender.label),
        description: () => t(plugin.showMeYourName.option.triggerNameRerender.description),
        type: OptionType.BOOLEAN,
        default: false,
        hidden: true
    },
});

export default definePlugin({
    name: "ShowMeYourName",
    description: () => t(plugin.showMeYourName.description),
    authors: [Devs.Rini, Devs.TheKodeToad, PcDevs.Etorix, Devs.sadan],
    settings,

    patches: [
        {
            find: '="SYSTEM_TAG"',
            group: true,
            replacement: [
                {
                    // Replace names in messages and replies.
                    match: /(onContextMenu:\i,children:)(.{0,250}?),"data-text":(\i\+\i)/,
                    replace: "$1$self.getMessageNameElement(arguments[0])??($2),\"data-text\":$self.getMessageNameText(arguments[0])??($3)"
                },
                {
                    // Pass the message object to the should-animate checker.
                    match: /(\(\{)(shouldSubscribe)/,
                    replace: "$1message:arguments[0].message,$2"
                }
            ]
        },
        {
            // Track hovering on messages to animate gradients.
            // Attach the group ID to their messages to allow animating gradients within a group.
            find: "CUSTOM_GIFT?\"\":",
            replacement: {
                match: /(isHovered:(\i).{0,1300}?\(\i,\i,\i\);)(let \i=\i.id===\i)/,
                replace: "$1arguments[0].message.showMeYourNameGroupId=!!arguments[0].groupId?`g-${arguments[0].groupId}`:null;$self.handleHoveringMessage(arguments[0].message,$2);$3"
            },
        },
        {
            // Replace names in mentions.
            find: ".USER_MENTION)",
            replacement: [
                {
                    match: /(let \i=\i=>\(0,)/,
                    replace: "const showMeYourNameMention=$self.getMentionNameElement(arguments[0]);$1"
                },
                {
                    match: /(?<=onContextMenu:\i,\.\.\.\i,children:)/,
                    replace: "showMeYourNameMention??",
                    predicate: () => !isPluginEnabled(mentionAvatars.name),
                }
            ]
        },
        {
            // Pass on the props to the mention renderer so that hovering second-level
            // message mentions can accurately be tracked based on props.messageId
            find: "noStyleAndInteraction},",
            replacement: {
                match: /(className:"mention",)/,
                replace: "$1props:arguments[2],"
            }
        },
        {
            // Replace names in the member list.
            find: "let{colorRoleName:",
            replacement: {
                match: /(let{colorRoleName:\i,colorString:\i,colorStrings:\i,)name:(\i)/,
                replace: "$1showMeYourNameName:$2=$self.getMemberListProfilesReactionsVoiceNameText({...arguments[0],type:\"membersList\"})??(arguments[0].name)"
            }
        },
        {
            // Replace names in profile popouts.
            find: "shouldWrap:!0,loop:!0,inProfile:!0",
            replacement: {
                match: /(tags:\i,)nickname:(\i)/,
                replace: "$1showMeYourNameNickname:$2=$self.getMemberListProfilesReactionsVoiceNameText({...arguments[0],type:\"profilesPopout\"})??(arguments[0].nickname)"
            },
        },
        {
            // Replace names in the profile tooltip for switching between guild and global profiles.
            // You must open a profile modal before the code this is patching will be searchable.
            find: 'id:"view-server-profile",',
            group: true,
            replacement: [
                {
                    match: /(displayName:)(\i.\i.getName\(void 0,void 0,\i\))/,
                    replace: "$1$self.getMemberListProfilesReactionsVoiceNameText({user:arguments[0].user,guildId:null,type:\"profilesTooltip\"})??($2)"
                },
                {
                    match: /(displayName:)(\i.\i.getName\(\i,\i,\i\))/,
                    replace: "$1$self.getMemberListProfilesReactionsVoiceNameText({user:arguments[0].user,guildId:arguments[0].guildId,type:\"profilesTooltip\"})??($2)"
                }
            ]
        },
        {
            // Replace names in reaction tooltips.
            find: "reactionTooltip1,",
            replacement: {
                match: /(\i.\i.getName\((\i),\i\?\.id,(\i)\))/,
                replace: "$self.getMemberListProfilesReactionsVoiceNameText({user:$3,guildId:$2,type:\"reactionsTooltip\"})??($1)"
            }
        },
        {
            find: "MESSAGE,userId:",
            group: true,
            replacement: [
                {
                    // Track hovering over reaction popouts.
                    match: /(?<=return\(0,\i.\i\)\(\i.\i,{className:\i.\i,)(?=onContextMenu:\i=>)/,
                    replace: "onMouseEnter:()=>{$self.addHoveringReactionPopout(arguments[0].user.id)},onMouseLeave:()=>{$self.removeHoveringReactionPopout(arguments[0].user.id)},$2"
                },
                {
                    // Replace names in reaction popouts.
                    match: /(?<=Child,{className:\i.\i,children:)/,
                    replace: "($self.getMemberListProfilesReactionsVoiceNameElement({user:arguments[0].user,guildId:arguments[0].guildId,type:\"reactionsPopout\"}))??"
                }
            ]
        },
        {
            // Replace names in voice channels.
            find: ",connectUserDragSource:",
            replacement: {
                match: /(serverDeaf:\i,)nick:(\i)/,
                replace: "$1showMeYourNameVoice:$2=$self.getMemberListProfilesReactionsVoiceNameText({user:arguments[0].user,guildId:arguments[0].channel.guild_id,type:\"voiceChannel\"})??(arguments[0].nick)"
            }
        }
    ],

    flux: {
        RELATIONSHIP_UPDATE(data) {
            // Allows rerendering when changing friend names.
            settings.store.triggerNameRerender = !settings.store.triggerNameRerender;
        },

        RUNNING_STREAMER_TOOLS_CHANGE(data) {
            // Allows rerendering when toggling streamer mode.
            settings.store.triggerNameRerender = !settings.store.triggerNameRerender;
        },

        ACCESSIBILITY_SYSTEM_PREFERS_REDUCED_MOTION_CHANGED(data) {
            // Allows rerendering when toggling reduced motion.
            settings.store.triggerNameRerender = !settings.store.triggerNameRerender;
        },

        ACCESSIBILITY_SET_PREFERS_REDUCED_MOTION(data) {
            // Allows rerendering when toggling reduced motion.
            settings.store.triggerNameRerender = !settings.store.triggerNameRerender;
        }
    },

    addHoveringMessage,
    removeHoveringMessage,
    handleHoveringMessage,
    addHoveringReactionPopout,
    removeHoveringReactionPopout,
    getMessageNameText,
    getMessageNameElement,
    getMentionNameElement,
    getMemberListProfilesReactionsVoiceNameText,
    getMemberListProfilesReactionsVoiceNameElement
});
