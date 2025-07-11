import { Command, Option } from "./types";
export * from "./commandHelpers";
export * from "./types";
export declare let BUILT_IN: Command[];
export declare const commands: Record<string, Command>;
/**
 * Optional message option named "message" you can use in commands.
 * Used in "tableflip" or "shrug"
 * @see {@link RequiredMessageOption}
 */
export declare let OptionalMessageOption: Option;
/**
 * Required message option named "message" you can use in commands.
 * Used in "me"
 * @see {@link OptionalMessageOption}
 */
export declare let RequiredMessageOption: Option;
export declare const _init: never;
export declare const _handleCommand: never;
/**
 * Prepare a Command Option for Discord by filling missing fields
 * @param opt
 */
export declare function prepareOption<O extends Option | Command>(opt: O): O;
export declare function registerCommand<C extends Command>(command: C, plugin: string): void;
export declare function unregisterCommand(name: string): boolean;
