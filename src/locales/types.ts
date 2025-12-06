/*
 * Plexcord, a modification for Discord's desktop app
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

/**
 * Deep mutable utility type - removes readonly and converts string literals to string
 */
export type DeepMutable<T> = {
    -readonly [K in keyof T]: T[K] extends object
    ? T[K] extends any[]
    ? T[K]
    : DeepMutable<T[K]>
    : T[K] extends string
    ? string
    : T[K];
};

/**
 * Match structure utility - ensures same keys but allows different string values
 */
export type MatchStructure<T> = {
    [K in keyof T]: T[K] extends object
    ? T[K] extends any[]
    ? T[K]
    : MatchStructure<T[K]>
    : T[K] extends string
    ? string
    : T[K];
};

/**
 * Creates dot-notation paths from nested object (for IntelliSense support)
 */
export type NestedKeyOf<ObjectType extends object> = {
    [Key in keyof ObjectType & (string | number)]: ObjectType[Key] extends object
    ? ObjectType[Key] extends any[]
    ? `${Key}`
    : `${Key}` | `${Key}.${NestedKeyOf<ObjectType[Key]>}`
    : `${Key}`;
}[keyof ObjectType & (string | number)];

