/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2025 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { Channel, Command, Guild } from "@plexcord/discord-types";
import { ApplicationCommandOptionType } from "@plexcord/discord-types/enums";
export { ApplicationCommandInputType, ApplicationCommandOptionType, ApplicationCommandType } from "@plexcord/discord-types/enums";

export interface CommandContext {
    channel: Channel;
    guild?: Guild;
}

export interface Option {
    name: string;
    displayName?: string;
    type: ApplicationCommandOptionType;
    description: string;
    displayDescription?: string;
    required?: boolean;
    options?: Option[];
    choices?: Array<ChoicesOption>;
}

export interface ChoicesOption {
    label: string;
    value: string;
    name: string;
    displayName?: string;
}

export interface CommandReturnValue {
    content: string;
    /** TODO: implement */
    cancel?: boolean;
}

export interface Argument {
    type: ApplicationCommandOptionType;
    name: string;
    value: string;
    focused: undefined;
    options: Argument[];
}


export interface PlexcordCommand extends Command {
    isPlexcordCommand?: boolean;
}
