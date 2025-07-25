/*
 * Plexcord, a modification for Discord's desktop app
 * Copyright (c) 2022 Vendicated and contributors
 * Copyright (c) 2025 MutanPlex
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
*/

import ErrorBoundary from "@components/ErrorBoundary";
import { Channel, User } from "@plexcord/discord-types";
import { JSX } from "react";

interface DecoratorProps {
    type: "guild" | "dm";
    user: User;
    /** only present when this is a DM list item */
    channel: Channel;
    /** only present when this is a guild list item */
    isOwner: boolean;
}

export type MemberListDecoratorFactory = (props: DecoratorProps) => JSX.Element | null;
type OnlyIn = "guilds" | "dms";

export const decoratorsFactories = new Map<string, { render: MemberListDecoratorFactory, onlyIn?: OnlyIn; }>();

export function addMemberListDecorator(identifier: string, render: MemberListDecoratorFactory, onlyIn?: OnlyIn) {
    decoratorsFactories.set(identifier, { render, onlyIn });
}

export function removeMemberListDecorator(identifier: string) {
    decoratorsFactories.delete(identifier);
}

export function __getDecorators(props: DecoratorProps, type: "guild" | "dm"): JSX.Element {
    const decorators = Array.from(
        decoratorsFactories.entries(),
        ([key, { render: Decorator, onlyIn }]) => {
            if ((onlyIn === "guilds" && type !== "guild") || (onlyIn === "dms" && type !== "dm"))
                return null;

            return (
                <ErrorBoundary noop key={key} message={`Failed to render ${key} Member List Decorator`}>
                    <Decorator {...props} type={type} />
                </ErrorBoundary>
            );
        }
    );

    return (
        <div className="pc-member-list-decorators-wrapper">
            {decorators}
        </div>
    );
}
