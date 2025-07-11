/**
 * Builds a theme color string in the legacy format: `[#primary,#accent]`, where primary and accent are
 * 24-bit colors as base-16 strings, with each codepoint of the string offset by +{@link STARTING_CODEPOINT}.
 * @param primary The 24-bit primary color.
 * @param accent The 24-bit accent color.
 * @returns The built legacy-format theme color string.
 */
export declare function encodeColorsLegacy(primary: number, accent: number): string;
/**
 * Extracts the theme colors from a legacy-format string.
 * @param str The legacy-format string to extract the theme colors from.
 * @returns The profile theme colors. Colors will be -1 if not found.
 * @see {@link encodeColorsLegacy}
 */
export declare function decodeColorsLegacy(str: string): [primaryColor: number, accentColor: number];
/**
 * Converts a 24-bit color to a base-{@link RADIX} string with each codepoint offset by +{@link STARTING_CODEPOINT}.
 * @param color The 24-bit color to be converted.
 * @returns The converted base-{@link RADIX} string with +{@link STARTING_CODEPOINT} offset.
 */
export declare function encodeColor(color: number): string;
/**
 * Converts a no-offset base-{@link RADIX} string to a 24-bit color.
 * @param str The no-offset base-{@link RADIX} string to be converted.
 * @returns The converted 24-bit color.
 *          Will be -1 if `str` is empty and -2 if the color is greater than the maximum 24-bit color, 0xFFFFFF.
 */
export declare function decodeColor(str: string): number;
/**
 * Converts an effect ID to a base-{@link RADIX} string with each code point offset by +{@link STARTING_CODEPOINT}.
 * @param id The effect ID to be converted.
 * @returns The converted base-{@link RADIX} string with +{@link STARTING_CODEPOINT} offset.
 */
export declare function encodeEffect(id: bigint): string;
/**
 * Converts a no-offset base-{@link RADIX} string to an effect ID.
 * @param str The no-offset base-{@link RADIX} string to be converted.
 * @returns The converted effect ID.
 *          Will be -1n if `str` is empty and -2n if the color is greater than the maximum effect ID.
 */
export declare function decodeEffect(str: string): bigint;
/**
 * Builds a FPTE string containing the given primary/accent colors and effect ID. If the FPTE Builder is NOT set to backwards
 * compatibility mode, the primary and accent colors will be converted to base-{@link RADIX} before they are encoded.
 * @param primary The primary profile theme color. Must be negative if unset.
 * @param accent The accent profile theme color. Must be negative if unset.
 * @param effect The profile effect ID. Must be empty if unset.
 * @param legacy Whether the primary and accent colors should be legacy encoded.
 * @returns The built FPTE string. Will be empty if the given colors and effect are all unset.
 */
export declare function buildFPTE(primary: number, accent: number, effect: string, legacy: boolean): string;
/**
 * Extracts the delimiter-separated values of the first FPTE substring in a string.
 * @param str The string to be searched for a FPTE substring.
 * @returns An array of the found FPTE substring's extracted values. Values will be empty if not found.
 */
export declare function extractFPTE(str: string): [maybePrimaryOrLegacy: string, maybeAccentOrEffect: string, maybeEffect: string];
